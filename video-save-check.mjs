import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {JSDOM}=require(process.env.FOLIO_UI_TEST_MODULES+'/jsdom');
const compiled=fs.readFileSync('extension.js','utf8').replace(/export default[\s\S]*$/,'');
assert.ok(compiled.includes('mag-video-theater-note__save'),'Build the updated save implementation before running this check.');
const VIDEO='video0001',UID='comment01',PREFIX='{{[[video-timestamp]]: (('+VIDEO+')) 00:07:21}}';
function fixture({locale='en',raw=PREFIX+' original',storage=[]}={}) {
 const dom=new JSDOM('<div class="rm-video-theater"><div class="rm-video-player__spacing-wrapper--theater"><button title="Insert Timestamp" class="rm-video-player__comment-button">Timestamp</button></div></div>',{url:'https://example.test/#/app/Test/video/'+VIDEO,runScripts:'outside-only'});
 const w=dom.window,d=w.document,tasks=new Map(),writes=[],pending=[];let now=0,next=0,native=0,created=0,mode='immediate',activeWrites=0,maxActive=0;
 const comments=new Map([[UID,{uid:UID,videoUid:VIDEO,parent:'native-comment-thread',author:'native-author',created:123,string:raw}]]);
 w.CSS={escape:s=>s};w.HTMLElement.prototype.scrollIntoView=function(){};w.console.error=()=>{};w.Date.now=()=>now;
 const schedule=(fn,delay,interval=false)=>{const id=++next;tasks.set(id,{fn,at:now+Number(delay||0),delay:Number(delay||0),interval});return id;};
 w.setTimeout=(fn,delay)=>schedule(fn,delay);w.clearTimeout=id=>tasks.delete(id);
 w.setInterval=(fn,delay)=>schedule(fn,delay,true);w.clearInterval=id=>tasks.delete(id);
 w.requestAnimationFrame=fn=>schedule(()=>fn(now),16);w.cancelAnimationFrame=id=>tasks.delete(id);
 const micro=async()=>{for(let i=0;i<12;i++)await Promise.resolve();};
 const advance=async ms=>{const end=now+ms;let steps=0;await micro();while(true){const hit=[...tasks].filter(([,t])=>t.at<=end).sort((a,b)=>a[1].at-b[1].at||a[0]-b[0])[0];if(!hit)break;assert.ok(++steps<10000,'timer loop must stay bounded');const [id,t]=hit;now=t.at;if(t.interval)t.at+=t.delay;else tasks.delete(id);t.fn();await micro();}now=end;await micro();};
 const apply=record=>{assert.ok(comments.has(record.uid),'save must update an existing comment');comments.get(record.uid).string=record.string;};
 w.roamAlphaAPI={
  q:(query,id)=>query.includes('[:find ?s .')?comments.get(id)?.string:[...comments.values()].filter(c=>c.videoUid===id).map(c=>[c.uid,c.string]),
  createBlock:()=>{created++;throw Error('Do not create a child block to save a comment');},
  updateBlock:({block})=>{const record=JSON.parse(JSON.stringify(block));writes.push(record);activeWrites++;maxActive=Math.max(maxActive,activeWrites);
   if(mode==='hold')return new Promise((resolve,reject)=>pending.push({resolve:()=>{apply(record);activeWrites--;resolve(true);},reject:()=>{activeWrites--;reject(Error('Write rejected'));}}));
   activeWrites--;if(mode==='reject')return Promise.reject(Error('Write rejected'));if(mode==='silent')return Promise.resolve(undefined);apply(record);return Promise.resolve(true);
  },deleteBlock:async({block})=>comments.delete(block.uid),ui:{rightSidebar:{open(){},addWindow(){}}}
 };
 for(const [key,value] of storage)w.sessionStorage.setItem(key,value);
 w.eval(compiled+';window.testRunner=MAGAZINE_RUNNERS["video-reader"];');w.__magLocale=locale;w.testRunner();
 const editor=(uid=UID)=>d.querySelector('.mag-video-theater-note__editor[data-uid="'+uid+'"]');
 const save=(uid=UID)=>editor(uid)?.closest('.mag-video-theater-note').querySelector('.mag-video-theater-note__save');
 const input=(value,uid=UID)=>{const e=editor(uid);e.value=value;e.dispatchEvent(new w.Event('input',{bubbles:true}));return e;};
 const nativeButton=d.querySelector('.rm-video-player__comment-button');nativeButton.onclick=event=>{assert.equal(event.defaultPrevented,false);const uid='native'+(++native);comments.set(uid,{uid,videoUid:VIDEO,parent:'native-comment-thread',author:'native-author',created:123,string:PREFIX+' new native comment'});};
 const snapshot=()=>Array.from({length:w.sessionStorage.length},(_,i)=>{const key=w.sessionStorage.key(i);return [key,w.sessionStorage.getItem(key)];});
 const checkStorage=()=>{assert.equal(created,0);for(const comment of comments.values()){assert.equal(comment.parent,'native-comment-thread');assert.equal(comment.author,'native-author');assert.equal(comment.created,123);}};
 const cleanup=()=>{w.__magVideoTheaterCleanup?.();w.__magVideoReaderCleanup?.();};
 return {w,d,tasks,comments,writes,pending,advance,micro,editor,save,input,nativeButton,snapshot,checkStorage,cleanup,close:()=>{cleanup();dom.window.close();},set mode(v){mode=v;},get maxActive(){return maxActive;}};
}
for(const locale of ['en','zh','fr','de','es','it']) {
 const x=fixture({locale});x.editor().focus();x.input('Autosaved without blur');assert.equal(x.save().dataset.state,'pending');assert.ok(x.save().textContent.trim());
 await x.advance(449);assert.equal(x.writes.length,0);await x.advance(201);
 assert.equal(x.writes.length,1);assert.equal(x.comments.get(UID).string,PREFIX+' Autosaved without blur');assert.equal(x.save().dataset.state,'saved');assert.equal(x.d.activeElement,x.editor());x.checkStorage();x.close();
 console.log('PASS '+locale+': input autosave without blur, confirmed saved state, native comment UID and metadata retained.');
}
{
 const x=fixture();x.mode='hold';x.input('First draft');await x.advance(500);assert.equal(x.writes.length,1);assert.equal(x.save().dataset.state,'saving');
 x.input('Latest draft while writing');await x.advance(500);assert.equal(x.writes.length,1,'same UID must not issue concurrent writes');assert.equal(x.editor().value,'Latest draft while writing');
 x.pending.shift().resolve();await x.micro();await x.advance(500);assert.equal(x.writes.length,2);assert.equal(x.maxActive,1);
 x.pending.shift().resolve();await x.advance(500);assert.equal(x.comments.get(UID).string,PREFIX+' Latest draft while writing');assert.equal(x.editor().value,'Latest draft while writing');assert.equal(x.save().dataset.state,'saved');x.checkStorage();x.close();
 console.log('PASS delayed write: latest draft queued, per-UID serialization and final confirmed value.');
}
{
 const x=fixture();x.mode='hold';x.input('Save already in flight');await x.advance(500);assert.equal(x.writes.length,1);
 x.input('Latest draft before deletion');const remove=x.editor().closest('.mag-video-theater-note').querySelector('.mag-video-theater-note__delete');remove.click();remove.click();await x.advance(600);assert.equal(x.comments.has(UID),true,'deletion waits for the in-flight save');
 x.pending.shift().resolve();await x.advance(600);assert.equal(x.comments.has(UID),false);assert.equal(x.writes.length,1,'deletion must not enqueue another save');assert.equal(x.editor(),null);assert.equal(x.snapshot().length,0,'deleted note has no recoverable draft');x.close();
 console.log('PASS deletion waits for delayed save, then deletes only that native comment without a queued rewrite.');
}
{
 const x=fixture();x.mode='reject';const original=x.editor();original.focus();x.input('Do not lose this draft');await x.advance(1000);assert.equal(x.save().dataset.state,'error');assert.equal(x.comments.get(UID).string,PREFIX+' original');
 x.nativeButton.click();await x.advance(360);assert.equal(x.editor(),original,'new native timestamp must reuse existing editor');assert.equal(x.editor().value,'Do not lose this draft');assert.equal(x.save().dataset.state,'error');assert.equal(x.comments.size,2);
 const failedWrites=x.writes.length;x.mode='immediate';original.dispatchEvent(new x.w.Event('blur'));await x.advance(500);assert.equal(x.writes.length,failedWrites,'blur does not silently retry a failed write');assert.equal(x.save().dataset.state,'error');
 x.mode='immediate';x.save().click();await x.advance(500);assert.equal(x.comments.get(UID).string,PREFIX+' Do not lose this draft');assert.equal(x.save().dataset.state,'saved');x.checkStorage();x.close();
 console.log('PASS rejected write: visible error, native timestamp render preserves dirty row, explicit retry saves same comment.');
}
{
 const x=fixture();x.mode='silent';x.input('Verify the actual stored text');await x.advance(1500);assert.equal(x.save().dataset.state,'error','a resolved no-op API call is not a successful save');assert.equal(x.editor().value,'Verify the actual stored text');assert.equal(x.comments.get(UID).string,PREFIX+' original');
 x.mode='immediate';x.save().click();await x.advance(500);assert.equal(x.save().dataset.state,'saved');assert.equal(x.comments.get(UID).string,PREFIX+' Verify the actual stored text');x.close();
 console.log('PASS readback: silent no-op cannot claim success; retry preserves draft and succeeds.');
}
{
 const x=fixture();x.input('Immediate blur commit');x.editor().dispatchEvent(new x.w.Event('blur'));await x.advance(100);assert.equal(x.comments.get(UID).string,PREFIX+' Immediate blur commit','blur commits before the 450ms debounce');
 x.input('');x.editor().dispatchEvent(new x.w.Event('blur'));await x.advance(200);assert.equal(x.comments.get(UID).string,PREFIX,'blank note erases only the text, retaining timestamp');
 const whitespace='  indented\nsecond line  ';x.input(whitespace);await x.advance(650);assert.equal(x.comments.get(UID).string,PREFIX+' '+whitespace);assert.equal(x.editor().value,whitespace);x.checkStorage();x.close();
 console.log('PASS blank erase and significant whitespace/multiline text survive save.');
}
{
 const x=fixture();const e=x.editor();e.focus();e.dispatchEvent(new x.w.CompositionEvent('compositionstart',{bubbles:true}));x.input('正在输入');await x.advance(900);assert.equal(x.writes.length,0,'do not persist incomplete IME composition');
 e.dispatchEvent(new x.w.CompositionEvent('compositionend',{bubbles:true,data:'正在输入'}));await x.advance(650);assert.equal(x.writes.length,1);assert.equal(x.comments.get(UID).string,PREFIX+' 正在输入');
 x.input('Keyboard commit');e.dispatchEvent(new x.w.KeyboardEvent('keydown',{key:'Enter',ctrlKey:true,bubbles:true,cancelable:true}));await x.advance(100);assert.equal(x.comments.get(UID).string,PREFIX+' Keyboard commit');x.close();
 console.log('PASS IME composition boundary and immediate Ctrl+Enter save.');
}
{
 const x=fixture();x.input('Save when leaving theater');x.w.location.hash='#/app/Test/page/Other';x.d.querySelector('.rm-video-theater').remove();await x.advance(360);assert.equal(x.comments.get(UID).string,PREFIX+' Save when leaving theater');assert.equal(x.d.querySelector('.mag-video-theater-notes'),null);x.checkStorage();x.close();
 console.log('PASS route exit flushes draft when native UI removes the textarea without blur.');
}
{
 const x=fixture();x.input('Final edit before disabling');x.cleanup();await x.advance(1000);assert.equal(x.comments.get(UID).string,PREFIX+' Final edit before disabling');assert.equal(x.d.querySelector('.mag-video-theater-notes'),null);const count=x.writes.length;await x.advance(1500);assert.equal(x.writes.length,count);assert.ok(![...x.tasks.values()].some(t=>t.interval),'cleanup removes polling timers');x.checkStorage();x.close();
 console.log('PASS cleanup flush, detached panel and stopped polling without repeat writes.');
}
{
 const first=fixture();first.mode='reject';first.input('Recover this failed draft');await first.advance(1000);assert.equal(first.save().dataset.state,'error');const storage=first.snapshot();assert.ok(storage.length,'unsaved draft should survive a reload');first.close();
 const same=fixture({storage});assert.equal(same.editor().value,'Recover this failed draft');same.mode='immediate';same.save().click();await same.advance(650);assert.equal(same.comments.get(UID).string,PREFIX+' Recover this failed draft');same.close();
 for(const action of ['blur','pagehide','route exit','cleanup']) {
  const conflict=fixture({storage,raw:PREFIX+' Changed elsewhere'});await conflict.advance(1500);assert.equal(conflict.comments.get(UID).string,PREFIX+' Changed elsewhere');assert.equal(conflict.writes.length,0,'recovered stale draft must not overwrite a changed native comment automatically');assert.equal(conflict.save().dataset.state,'error');
  if(action==='blur')conflict.editor().dispatchEvent(new conflict.w.Event('blur'));
  if(action==='pagehide')conflict.w.dispatchEvent(new conflict.w.Event('pagehide'));
  if(action==='route exit'){conflict.w.location.hash='#/app/Test/page/Other';conflict.d.querySelector('.rm-video-theater').remove();}
  if(action==='cleanup')conflict.cleanup();
  await conflict.advance(1000);assert.equal(conflict.writes.length,0,action+' must not silently save a recovered draft');assert.equal(conflict.comments.get(UID).string,PREFIX+' Changed elsewhere');assert.deepEqual(conflict.snapshot(),storage,'unsaved recovery backup remains available');conflict.cleanup();await conflict.advance(1000);assert.equal(conflict.writes.length,0);conflict.close();
 }
 console.log('PASS reload recovery and protection from automatic overwrite during blur, pagehide, route exit and cleanup.');
}
console.log('All video save checks passed (deterministic DOM/API doubles; not live graph certification).');
