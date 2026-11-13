import fs from 'node:fs';import assert from 'node:assert/strict';import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright');
const browser=await chromium.launch({executablePath:process.env.FOLIO_TEST_CHROMIUM,headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--disable-gpu']});
const page=await browser.newPage({viewport:{width:1500,height:1000}});await page.route('**/*',r=>r.abort());
await page.setContent(`<div class="roam-app"><div class="roam-body-main"><div class="rm-block__input" id="labels" style="--mag-w-size:20px">
<p><span class="rm-page-ref--tag" data-tag="Quadrant 1" id="q1">Quadrant 1</span></p>
<p><span class="rm-page-ref--tag" data-tag="[[book]]/彼得·林奇的成功投资" id="book"><span>hidden native book text</span></span></p>
<p><span class="rm-page-ref--tag" data-tag="Giant/Peter Lynch" id="person"><span>hidden native person text</span></span></p>
<p><span class="rm-page-ref--tag" data-tag="Industry/半导体" id="industry"><span>hidden native industry text</span></span></p>
<p><span class="rm-page-ref--tag" data-tag="motive-notes" id="motive"><span>motive-notes</span></span> <span class="rm-page-ref--tag" data-tag="rediscover-notes" id="rediscover"><span>rediscover-notes</span></span></p>
<p><span data-link-title="LiteratureNotes"><span class="rm-page-ref" id="note-link"><span>LiteratureNotes</span></span></span> 与 <span class="rm-page-ref--tag" data-tag="LiteratureNotes" id="note-tag"><span>LiteratureNotes</span></span></p>
<p><span data-link-title="Reading List: Inbox"><span class="rm-page-ref" id="reading-link"><span>Reading List: Inbox</span></span></span> 与 <span class="rm-page-ref--tag" data-tag="Reading List: Inbox" id="reading-tag"><span>Reading List: Inbox</span></span></p>
</div><div class="rm-block" data-block-uid="video0001"><div class="mag-video-reader"><button id="open-video" class="rm-video-player__edit-btn"><span>Open</span></button><button id="timestamp" class="rm-video-player__comment-button">Timestamp</button><button id="theater" class="rm-video-player__theater-button">Theater</button><button id="notes" class="rm-video-player__timestamps-button">Notes</button></div></div></div></div>
<div class="rm-video-theater"><button id="theater-open" class="rm-video-player__edit-btn">Open</button></div>`);
const code=fs.readFileSync('extension.js','utf8').replace(/export default[\s\S]*$/,'');
await page.addScriptTag({content:code+'\nwindow.testApi={createRuntime,registerTagLabels,registerVideoOpenSidebar,MAGAZINE_CSS};'});
await page.evaluate(()=>{
 const css=document.createElement('style');css.textContent=['base','tags'].map(k=>testApi.MAGAZINE_CSS[k]).join('\n');document.head.append(css);
 window.clicked=[];document.querySelectorAll('[data-tag], [data-link-title] > .rm-page-ref').forEach(e=>e.addEventListener('click',()=>clicked.push(e.getAttribute('data-tag')||e.parentElement.getAttribute('data-link-title'))));
 window.runtime=testApi.createRuntime({});runtime.core={doc:document,load(name){this.module=window.__magModules[name](this);this.module.sync()}};testApi.registerTagLabels(runtime);
 window.nativeEdits=0;window.nativeOther=[];window.opened=[];
 document.querySelectorAll('.rm-video-player__edit-btn').forEach(e=>{e.addEventListener('pointerdown',()=>nativeEdits++);e.addEventListener('click',()=>nativeEdits++)});
 ['timestamp','theater','notes'].forEach(id=>document.getElementById(id).addEventListener('click',()=>nativeOther.push(id)));
 window.roamAlphaAPI={ui:{rightSidebar:{open:()=>opened.push('open-sidebar'),addWindow:value=>opened.push(value)}}};testApi.registerVideoOpenSidebar(runtime);
});
const clicks=[];
for(const id of ['book','person','industry','motive','rediscover']){
 const box=await page.locator('#'+id).boundingBox();assert.ok(box.height>=15,id+' must expose a text-sized hit box');
 await page.mouse.click(box.x+box.width*.5,box.y+box.height*.4);clicks.push(id);
}
const nativeClicked=await page.evaluate(()=>clicked);assert.deepEqual(nativeClicked,['[[book]]/彼得·林奇的成功投资','Giant/Peter Lynch','Industry/半导体','motive-notes','rediscover-notes']);
const font=async id=>page.locator('#'+id).evaluate(e=>({size:getComputedStyle(e,'::after').fontSize,letterSpacing:getComputedStyle(e,'::after').letterSpacing,width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height}));
const person=await font('person'),industry=await font('industry');assert.equal(person.size,'20px');assert.equal(industry.size,'20px');
const noteLink=await font('note-link'),noteTag=await font('note-tag'),readingLink=await font('reading-link'),readingTag=await font('reading-tag');
for(const value of [noteLink,noteTag,readingLink,readingTag]){assert.equal(value.size,(await font('q1')).size);assert.equal(value.size,'12px');assert.equal(value.letterSpacing,'normal')};assert.equal(noteLink.width,noteTag.width);assert.equal(readingLink.width,readingTag.width);
for (const size of [16,24]) {
 await page.evaluate(size=>document.querySelector('#labels').style.setProperty('--mag-w-size',size+'px'),size);
 for (const id of ['person','industry']) assert.equal((await font(id)).size,size+'px');
 for (const id of ['note-link','note-tag','reading-link','reading-tag']) assert.equal((await font(id)).size,(await font('q1')).size);
}
for (const id of ['note-link','note-tag','reading-link','reading-tag']) {const box=await page.locator('#'+id).boundingBox();await page.mouse.click(box.x+box.width*.5,box.y+box.height*.5);}
assert.deepEqual((await page.evaluate(()=>clicked)).slice(-4),['LiteratureNotes','LiteratureNotes','Reading List: Inbox','Reading List: Inbox']);
await page.locator('#open-video').click();await page.locator('#open-video').press('Enter');
await page.evaluate(()=>{location.hash='#/app/Test/video/theater01'});await page.locator('#theater-open').click();
for(const id of ['timestamp','theater','notes'])await page.locator('#'+id).click();
const video=await page.evaluate(()=>({edits:nativeEdits,other:nativeOther,opened}));assert.equal(video.edits,0);assert.deepEqual(video.other,['timestamp','theater','notes']);
const windows=video.opened.filter(x=>typeof x==='object');assert.deepEqual(windows.map(x=>x.window['block-uid']),['video0001','video0001','theater01']);
await page.evaluate(()=>runtime.nativeCleanups.get('video-reader')());await page.locator('#open-video').click();assert.ok(await page.evaluate(()=>nativeEdits>0));
console.log(JSON.stringify({textClicks:clicks,person,industry,noteLink,noteTag,readingLink,readingTag,video,cleanup:'native handler restored'},null,2));
await browser.close();
