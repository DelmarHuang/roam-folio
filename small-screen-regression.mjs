import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright');
function getStyles(path){const sb={};vm.createContext(sb);vm.runInContext(fs.readFileSync(path,'utf8').replace(/export default[\s\S]*$/,'')+'\nglobalThis.css=MAGAZINE_CSS;',sb);return ['base','video-reader'].map(k=>sb.css[k]).join('\n')}
const current=getStyles('extension.js');const baseline=getStyles(process.env.FOLIO_PREVIOUS_EXTENSION||'../Folio-1.4.3-rc11/extension.js');
const browser=await chromium.launch({executablePath:process.env.FOLIO_TEST_CHROMIUM,headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--disable-gpu']});
const page=await browser.newPage();await page.route('**/*',r=>r.abort());
const native=`html,body{margin:0;height:100%;font:16px sans-serif}.stage{height:calc(100vh - 64px);margin:16px}.rm-video-theater{height:100%}.rm-video-player__container{position:relative;aspect-ratio:16/9}.rm-video-player__container iframe{position:absolute;inset:0;width:100%;height:100%;border:0}.rm-block-main{display:flex}.controls{display:flex;flex:0 0 26px;margin-left:-20px;position:relative;left:-4px}.block-expand{width:12px}.rm-bullet{display:flex;align-items:center;width:14px;height:28px;position:relative;left:-3px}.rm-bullet__inner--user-icon{display:block;width:6px;height:6px;background:#8f7edb;border-radius:50%}.rm-block__input{flex:1;min-width:0}.rm-video-timestamps{width:480px;margin:40px}.rm-video-timestamps__entry{padding:8px 12px;background:#eef6fa;border-left:3px solid #168bc2}`;
const body=`<div class="stage"><div class="rm-video-theater"><div class="rm-video-player__spacing-wrapper--theater"><div class="rm-video-player__container"><iframe class="rm-video-player" title="Video"></iframe></div><div class="rm-video-player__theater-toolbar"><button>Open</button><button>Timestamp</button><button>Exit Theater</button><button>Notes</button></div></div><section class="mag-video-theater-notes"><header class="mag-video-theater-notes__header">TIMESTAMP NOTES</header><div class="mag-video-theater-notes__list"><div class="mag-video-theater-note"><button class="mag-video-theater-note__time">00:00:00</button><textarea class="mag-video-theater-note__editor">ss</textarea><div class="mag-video-theater-note__actions"><button>Open</button><button>Delete</button></div></div></div></section></div></div>
<div class="roam-app"><div class="rm-video-timestamps"><div class="rm-video-timestamps__entry rm-video-timestamps__entry--active"><div class="roam-block-container rm-block rm-block--mine rm-block--closed rm-block--editable block-bullet-view"><div class="rm-block-main rm-block__self roamjs-outline-pin-host"><span class="roamjs-outline-pin-control"></span><div class="controls rm-block__controls noselect"><span class="block-expand"><span class="rm-caret rm-caret-closed rm-caret-hidden"></span></span><span class="rm-bullet cursor-grab" draggable="true"><span class="bp3-popover-wrapper"><span class="bp3-popover-target"><span class="rm-bullet__inner--user-icon" tabindex="0"></span></span></span></span></div><div class="rm-block__input rm-block__input--view roam-block dont-unfocus-block hoverparent"><span><a class="rm-video-timestamp dont-focus-block">0:00</a> ss</span></div><div class="rm-block-separator"></div><div style="min-width:24px"></div></div><div class="rm-block-children rm-block__children rm-level-2"></div></div></div></div></div>`;
async function measure(css,width,height){await page.setViewportSize({width,height});await page.setContent(`<style>${native}\n${css}</style>${body}`);return page.evaluate(()=>{
 const rect=selector=>{const r=document.querySelector(selector).getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom}};
 return {video:rect('.rm-video-player__spacing-wrapper--theater'),notes:rect('.mag-video-theater-notes'),list:rect('.mag-video-theater-notes__list'),theater:rect('.rm-video-theater'),row:rect('.rm-block-main'),controls:rect('.controls'),bullet:rect('.rm-bullet__inner--user-icon'),input:rect('.rm-block__input')};
})}
const results=[];
for(const [width,height] of [[1280,720],[1280,800],[1366,768],[1440,900],[1512,982],[1666,900],[1920,1080],[2560,1440],[3840,2160]]){
 for(const [left,right] of [[0,0],[232,0],[0,Math.round(width*.36)],[232,Math.round(width*.36)]]){
  for(const chromeHeight of [64,140]){
   await measure(current,width,height);
   await page.locator('.stage').evaluate((e,{left,right,chromeHeight})=>{e.style.marginLeft=`${left+16}px`;e.style.marginRight=`${right+16}px`;e.style.height=`calc(100vh - ${chromeHeight}px)`;},{left,right,chromeHeight});
   const layout=await page.evaluate(()=>{const r=s=>{const x=document.querySelector(s).getBoundingClientRect();return {width:x.width,height:x.height,x:x.x,y:x.y,right:x.right,bottom:x.bottom}};return {video:r('.rm-video-player__spacing-wrapper--theater'),notes:r('.mag-video-theater-notes'),list:r('.mag-video-theater-notes__list'),theater:r('.rm-video-theater'),firstNote:r('.mag-video-theater-note'),paneWidth:document.querySelector('.rm-video-theater').clientWidth-parseFloat(getComputedStyle(document.querySelector('.rm-video-theater')).paddingLeft)-parseFloat(getComputedStyle(document.querySelector('.rm-video-theater')).paddingRight)};});
   if(width<=1800 && height<=1000) assert.ok(layout.list.height>=180,`multi-line notes: ${width}x${height} ${left}/${right} ${chromeHeight}: ${layout.list.height}`);
   assert.ok(layout.notes.bottom<=layout.theater.bottom+1,'notes stay within theater');
   assert.ok(layout.video.right<=layout.theater.right+1,'video fits pane');
   if(width<=1800 && height<=1000){
    assert.ok(layout.notes.width>=layout.video.width,'notes at least as wide as video');
    assert.ok(Math.abs(layout.notes.width-layout.paneWidth)<1,'notes fill pane');
    assert.ok(layout.firstNote.y-layout.list.y<15,'first note starts at top');
   } else {
    const expected=await measure(baseline,width,height);
    // Baseline width is independent of host height and only shrinks to fit pane.
    const expectedWidth=Math.min(expected.video.width,layout.paneWidth);
    assert.ok(Math.abs(layout.video.width-layout.notes.width)<1,'desktop equal widths');
    assert.ok(Math.abs(layout.video.width-expectedWidth)<1,'desktop original width');
   }
   results.push({viewport:`${width}x${height}`,left,right,chromeHeight,videoWidth:layout.video.width,notesListHeight:layout.list.height});
  }
 }
}
await measure(current,1280,800);
if(process.env.FOLIO_SCREENSHOT) await page.screenshot({path:process.env.FOLIO_SCREENSHOT,fullPage:true});
await page.evaluate(()=>document.body.append(document.querySelector('.rm-video-timestamps')));
const portal=await page.evaluate(()=>{const c=document.querySelector('.controls').getBoundingClientRect(),b=document.querySelector('.rm-bullet__inner--user-icon').getBoundingClientRect(),r=document.querySelector('.rm-block-main').getBoundingClientRect();return {inside:b.x>=c.x&&c.x>=r.x}});assert.ok(portal.inside);
console.log(JSON.stringify({results,nativePortal:portal},null,2));await browser.close();
