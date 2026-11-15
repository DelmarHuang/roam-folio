import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {JSDOM}=require(process.env.FOLIO_UI_TEST_MODULES+'/jsdom');
const compiled=fs.readFileSync('extension.js','utf8').replace(/export default[\s\S]*$/,'');
for(const locale of ['en','zh','fr','de','es','it']) {
 const dom=new JSDOM('<button id="regular" class="rm-video-player__comment-button"></button><div class="rm-video-theater"><div class="rm-video-player__spacing-wrapper--theater"><button class="rm-video-player__comment-button" title="Insert Timestamp"></button></div></div>',{url:'https://example.test/#/app/Test/video/video0001',runScripts:'outside-only'});
 const w=dom.window,d=w.document,frames=new Map(),timeouts=new Map(),intervals=new Map();let seq=0,native=0,createdByFolio=0,open=0,add=0;
 w.CSS={escape:s=>s};w.HTMLElement.prototype.scrollIntoView=function(){};
 w.requestAnimationFrame=fn=>{frames.set(++seq,fn);return seq;};w.cancelAnimationFrame=id=>frames.delete(id);
 w.setTimeout=(fn,delay)=>{timeouts.set(++seq,{fn,delay});return seq;};w.clearTimeout=id=>timeouts.delete(id);
 w.setInterval=(fn,delay)=>{intervals.set(++seq,{fn,delay});return seq;};w.clearInterval=id=>intervals.delete(id);
 const flush=async()=>{for(let i=0;i<4;i++){await Promise.resolve();for(const timer of intervals.values())if(timer.delay===350)timer.fn();const batch=[...frames.values()];frames.clear();batch.forEach(fn=>fn());for(const [id,timer] of [...timeouts])if(timer.delay<=260){timeouts.delete(id);timer.fn();}}};
 const comments=new Map(),updates=[];
 w.roamAlphaAPI={q:(query,uid)=>query.includes('?s .') ? comments.get(uid)?.string : [...comments.values()].filter(c=>c.videoUid===uid).map(c=>[c.uid,c.string]),
  createBlock:()=>{createdByFolio++;throw Error('Folio must not create timestamp blocks');},util:{generateUID:()=>{throw Error('Native comments own their UIDs');}},
  updateBlock:async({block})=>{updates.push(block);comments.get(block.uid).string=block.string;},deleteBlock:async({block})=>comments.delete(block.uid),
  ui:{rightSidebar:{open:()=>open++,addWindow:()=>add++}}};
 w.eval(compiled+';window.__test={runners:MAGAZINE_RUNNERS};');w.__magLocale=locale;w.__test.runners['video-reader']();
 const button=d.querySelector('.rm-video-theater button');
 // Stand-in for Roam's native comment handler. Folio may observe it, never replace it.
 button.addEventListener('click',event=>{
  assert.equal(event.defaultPrevented,false);native++;
  const videoUid=w.location.hash.split('/video/')[1];
  const uid='comment'+native;
  comments.set(uid,{uid,videoUid,parent:'native-comment-thread',author:'native-author',created:123,string:'{{[[video-timestamp]]: (('+videoUid+')) 00:07:21}}'});
 });
 const originalHandlerCount=()=>native;
 button.click();await flush();assert.equal(native,1);assert.equal(createdByFolio,0);assert.equal(button.disabled,false);
 let editor=d.querySelector('textarea');assert.equal(editor.dataset.uid,'comment1');assert.equal(d.activeElement,editor);
 editor.value='Comment text';editor.dispatchEvent(new w.Event('blur'));await flush();assert.equal(updates[0].uid,'comment1');assert.equal(comments.get('comment1').parent,'native-comment-thread');assert.equal(comments.get('comment1').author,'native-author');assert.equal(comments.get('comment1').created,123);assert.equal(comments.get('comment1').string,'{{[[video-timestamp]]: ((video0001)) 00:07:21}} Comment text');
 [...d.querySelectorAll('.mag-video-theater-note__action')].find(b=>b.textContent==='Open').click();await flush();assert.equal(open,1);assert.equal(add,1);
 // Native creation works without a YouTube API or a locally cached player clock.
 button.click();await flush();assert.equal(native,2);assert.equal(d.querySelectorAll('textarea').length,2);assert.equal(d.activeElement.dataset.uid,'comment2');assert.equal(createdByFolio,0);
 let regular=0;d.getElementById('regular').onclick=()=>regular++;d.getElementById('regular').click();assert.equal(regular,1);assert.equal(native,2);
 const before=originalHandlerCount();w.__magVideoTheaterCleanup();w.__magVideoReaderCleanup();assert.equal(intervals.size,0);assert.equal(d.querySelector('.mag-video-theater-notes'),null);
 button.click();assert.equal(native,before+1,'native callback remains after disabling Folio');assert.equal(createdByFolio,0);
 console.log('PASS '+locale+': native click/comment parentage preserved, existing comment edited in place, no custom timestamp creation, no player-clock dependency, explicit Open and cleanup (DOM/API doubles).');
 dom.window.close();
}
