import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright');
const browser=await chromium.launch({executablePath:process.env.FOLIO_TEST_CHROMIUM,headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--disable-gpu']});
const page=await browser.newPage({viewport:{width:1800,height:1100}});
await page.route('**/*',route=>route.abort());
const code=fs.readFileSync('extension.js','utf8').replace(/export default[\s\S]*$/,'');
const sb={};vm.createContext(sb);vm.runInContext(code+'\nglobalThis.css=MAGAZINE_CSS;',sb);
const styles=['base','layout','menus','block-controls','topbar','theme-host-fixes','sidebar-toggles','right-sidebar'].map(k=>sb.css[k]||'').join('\n');
const dom=process.env.FOLIO_DOM_FIXTURE?fs.readFileSync(process.env.FOLIO_DOM_FIXTURE,'utf8'):`<div class="rm-article-wrapper rm-spacing--small"><div class="roam-article"><div class="rm-block-main"><div class="controls"></div><div class="rm-block__input">A long paragraph uses the available width.</div><div class="rm-block-separator"></div><div style="min-width:24px">12</div></div></div></div>`;
const native=`body{margin:0}.roam-app{display:flex;width:100vw;height:100vh}.roam-main{flex:1;min-width:0}.side{flex:0 0 auto;width:232px}#right-sidebar{width:500px;flex:0 0 auto}.rm-topbar{display:flex;align-items:center;height:48px;box-sizing:border-box}.spacer{flex:1}.rm-block-main{display:flex;position:relative}.controls{flex:0 0 24px}.rm-block__input{flex:1 1 auto}.rm-block-separator{flex:0 0 30%;min-width:20px}.rm-spacing--left-sidebar-open .rm-block-separator,.rm-spacing--right-sidebar-open .rm-block-separator{flex:0 0 0px;min-width:0}.bp3-menu-item{display:flex;padding:5px 7px;line-height:20px}.bp3-menu-divider{margin:5px;border-top:1px solid #ccc}.rm-find-or-create-modal-body__list{padding:0}.bp3-button{min-width:30px;height:30px}.rm-menu{width:400px}`;
await page.setContent(`<html><head><style>${native}\n${styles}</style></head><body><div class="roam-app"><aside class="side" id="left"></aside><main class="roam-main"><div class="rm-topbar"><span>Tools</span><span class="spacer"></span><button id="open" class="bp3-button bp3-icon-menu-closed">Open</button><button id="widget" class="bp3-button">Widget</button></div><div class="roam-body-main">${dom}</div></main><aside id="right-sidebar"><div class="flex-h-box"><button id="close" class="bp3-button bp3-icon-menu-open">Close</button></div></aside></div><div class="bp3-menu rm-menu"><a class="bp3-menu-item" id="menu-one">Copy link</a><a class="bp3-menu-item" id="viewas">View as</a><a class="bp3-menu-item">Extensions</a></div><div class="rm-find-or-create-modal"><div class="rm-find-or-create-modal-body__list"><a class="bp3-menu-item" id="command">Search command</a></div></div></body></html>`);
await page.addScriptTag({content:code+'\nwindow.testApi={registerNativeSidebarToggles};'});
await page.evaluate(()=>{
 window.__magModules={};window.chromeModules=new Map();
 window.chromeCore={load(name){const m=window.__magModules[name]();chromeModules.set(name,m);m.sync()},unload(name){chromeModules.get(name)?.destroy();chromeModules.delete(name)},scheduleSync(){for(const m of chromeModules.values())m.sync()}};
 testApi.registerNativeSidebarToggles({ensureCore:()=>chromeCore,rebuildCss(){},nativeCleanups:new Map()});
 const row=document.querySelector('.rm-block-main');row.querySelector('.rm-block__input').textContent='A paragraph that wraps correctly. '.repeat(20);row.lastElementChild.textContent='12';
});
const states=[];
for(const [name,left,right] of [['both open',232,1000],['left closed',0,1000],['both closed',0,0],['dragged narrower',0,1400],['both closed again',0,0]]){
 await page.evaluate(({left,right})=>{document.querySelector('#left').style.display=left?'block':'none';const r=document.querySelector('#right-sidebar');r.style.display=right?'block':'none';r.style.width=right+'px';document.querySelector('.rm-article-wrapper').classList.toggle('rm-spacing--left-sidebar-open',!!left);document.querySelector('.rm-article-wrapper').classList.toggle('rm-spacing--right-sidebar-open',!!right);chromeCore.scheduleSync();},{left,right});
 const result=await page.evaluate(()=>{
  const input=document.querySelector('.rm-block-main > .rm-block__input'),separator=document.querySelector('.rm-block-main > .rm-block-separator'),row=input.parentElement,counter=row.lastElementChild;
  const i=input.getBoundingClientRect(),s=separator.getBoundingClientRect(),c=counter.getBoundingClientRect();
  const widget=document.querySelector('#widget').getBoundingClientRect();const visible=[...document.querySelectorAll('[data-folio-sidebar-role]')].filter(e=>getComputedStyle(e).display!=='none');const toggle=visible[0].getBoundingClientRect();
  return {textWidth:i.width,separatorWidth:s.width,unusedGap:c.left-i.right,visibleToggles:visible.length,overlap:Math.max(0,Math.min(widget.right,toggle.right)-Math.max(widget.left,toggle.left))};
 });
 assert.ok(result.separatorWidth<=8.1);assert.ok(result.unusedGap<=8.1);assert.equal(result.visibleToggles,1);assert.equal(result.overlap,0);states.push({name,...result});
}
assert.ok(states[1].textWidth>=states[0].textWidth);assert.ok(states[2].textWidth>=states[1].textWidth);assert.equal(states[2].textWidth,states[4].textWidth);
const menu=await page.locator('#viewas').evaluate(e=>({padding:getComputedStyle(e).padding,lineHeight:getComputedStyle(e).lineHeight,margin:getComputedStyle(e).margin}));
const command=await page.locator('#command').evaluate(e=>({padding:getComputedStyle(e).padding,lineHeight:getComputedStyle(e).lineHeight}));
assert.equal(menu.padding,'5px 7px');assert.equal(menu.lineHeight,'20px');assert.equal(command.padding,'5px 7px');assert.equal(command.lineHeight,'20px');
await page.evaluate(()=>{const input=document.querySelector('.rm-block-main > .rm-block__input');input.className='rm-autocomplete__wrapper';input.innerHTML='<textarea class="rm-block-input rm-block__input--active">Editing the same paragraph</textarea>'});
const editing=await page.locator('.rm-block-main > .rm-autocomplete__wrapper').first().boundingBox();assert.ok(Math.abs(editing.width-states.at(-1).textWidth)<1);
console.log(JSON.stringify({fixture:process.env.FOLIO_DOM_FIXTURE?'user-supplied DOM':'representative DOM',states,menu,command,editingWidth:editing.width},null,2));
await browser.close();
