import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const code=fs.readFileSync(new URL('./extension.js',import.meta.url),'utf8').replace(/export default[\s\S]*$/,'');
const handlers=new Map(), all=new Map();
class Element {
  constructor(tag='span',attrs={}){this.tagName=tag.toUpperCase();this.attrs=new Map(Object.entries(attrs));this.children=[];this.isConnected=true;this.style={};this.className='';this.classList={add(){},remove(){}};this.dataset=new Proxy({}, {get:(_,key)=>this.getAttribute('data-'+String(key).replace(/[A-Z]/g,x=>'-'+x.toLowerCase()))??undefined,set:(_,key,value)=>{this.setAttribute('data-'+String(key).replace(/[A-Z]/g,x=>'-'+x.toLowerCase()),value);return true},deleteProperty:(_,key)=>{this.removeAttribute('data-'+String(key).replace(/[A-Z]/g,x=>'-'+x.toLowerCase()));return true}});}
  getAttribute(k){return this.attrs.get(k)??null} setAttribute(k,v){this.attrs.set(k,String(v))} removeAttribute(k){this.attrs.delete(k)}
  append(...nodes){for(const n of nodes){n.remove?.();this.children.push(n);n.parentElement=this;if(n.id)all.set(n.id,n)}}
  prepend(n){n.remove?.();this.children.unshift(n);n.parentElement=this}
  remove(){if(this.parentElement)this.parentElement.children=this.parentElement.children.filter(n=>n!==this);this.parentElement=null;if(this.id)all.delete(this.id)}
  matches(s){if(s==='button,[role=button]')return this.tagName==='BUTTON'||this.getAttribute('role')==='button';if(s==='.rm-page-ref--tag')return this.attrs.has('data-tag');return false}
  closest(s){if(s==='[data-folio-special]')return this.attrs.has('data-folio-special')?this:null;if(s.includes('contenteditable'))return this.editing?this:null;return this.parentElement?.closest(s)||null}
  querySelector(){return null}
}
let selected=[],pdf=null;
const document={querySelectorAll:s=>s.startsWith('.bp3-dialog')?[]:selected,querySelector:s=>s.includes('.rm-pdf-container')?pdf:null,getElementById:id=>all.get(id),createElement:tag=>new Element(tag),createTextNode:text=>({textContent:text}),addEventListener:(type,fn)=>handlers.set(type,fn),removeEventListener:(type,fn)=>{if(handlers.get(type)===fn)handlers.delete(type)},head:new Element('head'),body:new Element('body')};
const window={};const opened=[];
window.roamAlphaAPI={q:async()=> 'uid000001',ui:{mainWindow:{openPage:async value=>opened.push(['page',value])},rightSidebar:{open:async()=>opened.push(['sidebar']),addWindow:async value=>opened.push(['window',value])}}};
window.open=(...args)=>opened.push(['tab',...args]);
const sandbox={console,window,document,Element,navigator:{platform:'MacIntel'},location:{hash:'#/app/Delmar/page/current'},setTimeout,clearTimeout,Map,Set};
vm.createContext(sandbox);
vm.runInContext(code+'\nglobalThis.expose={createRuntime,registerTagLabels,registerPdfEscape,registerNativeSidebarToggles,pdfReturnHash,matchesShortcut,cleanMotto,fontFamily,codeHeight,fitMotto,extraSettings,FEATURES,TAG_FIELDS,runners:MAGAZINE_RUNNERS,css:MAGAZINE_CSS};',sandbox);
const x=sandbox.expose;let count=0;
function check(name,fn){return Promise.resolve().then(fn).then(()=>{count++;console.log('PASS '+name)})}
const ev=(overrides={})=>({type:'click',button:0,key:'g',ctrlKey:false,metaKey:false,shiftKey:false,altKey:false,repeat:false,isComposing:false,preventDefault(){this.prevented=true},stopImmediatePropagation(){this.stopped=true},...overrides});
const core={doc:document,scope(){const off=[];return{on(target,event,fn){target.addEventListener(event,fn);off.push(()=>target.removeEventListener(event,fn))},dispose(){off.forEach(fn=>fn())}}},load(name){this.module=window.__magModules[name](this);this.module.sync()}};
const rt=x.createRuntime({});rt.core=core;
selected=[new Element('span',{'data-tag':'[[Book]]/A title',tabindex:'3'}),new Element('span',{'data-tag':'Quadrant 1'})];
x.registerTagLabels(rt);
await check('tag labels preserve native handlers, roles and tabindex',()=>{assert.equal(selected[0].dataset.magLabel,'A title');assert.equal(selected[0].getAttribute('tabindex'),'3');assert.equal(selected[0].getAttribute('role'),null);assert.equal(handlers.size,0);core.module.destroy();assert.equal(handlers.size,0)});
await check('motto budget counts Chinese as two and Latin as one',()=>{assert.equal([...x.cleanMotto('好'.repeat(60))].length,12);assert.equal(x.cleanMotto('A\nB'),'A B')});
await check('font declaration cannot escape into extra CSS rules',()=>assert.equal(x.fontFamily('Arial; } body { color:red;'),'Arial  body  color:red'));
await check('height accepts zero, bounds and invalid input',()=>{assert.equal(x.codeHeight(0),0);assert.equal(x.codeHeight(3000),2400);assert.equal(x.codeHeight(-1),0);assert.equal(x.codeHeight('bad'),420)});
await check('shortcut modifiers exact, including Mac Mod and disabled bindings',()=>{assert.ok(x.matchesShortcut(ev(), 'g'));assert.ok(!x.matchesShortcut(ev({shiftKey:true}), 'g'));assert.ok(x.matchesShortcut(ev({key:'J',metaKey:true,shiftKey:true}),'Mod+Shift+J'));assert.ok(!x.matchesShortcut(ev(),''));assert.ok(!x.matchesShortcut(ev(),'Super+g'))});
await check('PDF return route uses source page, with same-graph fallback',()=>{
 assert.equal(x.pdfReturnHash('#/app/Delmar/pdf/DyejbUMjh','#/app/Delmar/page/CGAbd6XVj'),'#/app/Delmar/page/CGAbd6XVj');
 assert.equal(x.pdfReturnHash('#/app/Delmar/pdf/DyejbUMjh',''),'#/app/Delmar/page/DyejbUMjh');
 assert.equal(x.pdfReturnHash('#/app/Delmar/pdf/DyejbUMjh','#/app/Other/page/test'),'#/app/Delmar/page/DyejbUMjh');
 assert.equal(x.pdfReturnHash('#/app/Delmar/page/test',''),null);
});
await check('PDF creates exit control even when native fullscreen button disappears',()=>{
 const modules=new Map();window.__magModules={};
 const pdfCore={load(name){const m=window.__magModules[name]();modules.set(name,m);m.sync();},unload(name){modules.get(name)?.destroy();modules.delete(name);}};
 const runtime={locale:'zh',nativeCleanups:new Map(),ensureCore:()=>pdfCore};
 const toolbar=new Element('div');pdf={querySelector:()=>toolbar};
 sandbox.location.hash='#/app/Delmar/pdf/DyejbUMjh';
 x.registerPdfEscape(runtime);
 assert.equal(document.body.children.length,1);
 const link=document.body.children[0];assert.equal(link.getAttribute('href'),'#/app/Delmar/page/DyejbUMjh');
 let clicks=0;link.click=()=>clicks++;
 handlers.get('keydown')({...ev({key:'Escape',target:new Element()}),stopPropagation(){}});assert.equal(clicks,1);
 handlers.get('keydown')(ev({key:'Enter',target:new Element()}));assert.equal(clicks,1);
 runtime.nativeCleanups.get('pdf')();assert.equal(document.body.children.length,0);assert.equal(handlers.size,0);pdf=null;
});
const video=x.runners['video-reader'].toString();
const sourceOf=vm.runInContext('('+video.slice(video.indexOf('const sourceOf = ')+17,video.indexOf('const kindOf')).trim().replace(/;$/,'')+')',sandbox);
await check('video runner exactly matches the supplied code, including its native controls and theater notes',()=>{
 const supplied=fs.readFileSync(new URL('./source/video-reader.js',import.meta.url),'utf8').trim();
 const body=video.slice(video.indexOf('{')+1,video.lastIndexOf('}')).trim();
 assert.equal(body,supplied);
 assert.ok(x.css['video-reader'].includes(fs.readFileSync(new URL('./source/video-reader.css',import.meta.url),'utf8').trim()));
 assert.ok(x.css['video-reader'].includes(fs.readFileSync(new URL('./source/video-media.css',import.meta.url),'utf8').trim()));
});
await check('weighted mixed motto truncates at a complete character',()=>{
 assert.equal(x.cleanMotto('A'.repeat(25)),'A'.repeat(24));
 assert.equal(x.cleanMotto('中'.repeat(13)),'中'.repeat(12));
 assert.equal(x.cleanMotto('A'.repeat(22)+'中文'),'A'.repeat(22)+'中');
 assert.equal(x.cleanMotto('A'.repeat(23)+'中'),'A'.repeat(23));
});
const props=x.runners['property-card'].toString();const tagOnly=vm.runInContext('('+props.slice(props.indexOf('const tagOnly = ')+16,props.indexOf('const ATTR_RE')).trim().replace(/;$/,'')+')',sandbox);
await check('property card supports nested namespaces and excludes prose',()=>{for(const v of ['#Goal','#[[Some Type]]','#[[[[project]]/Folio]]','#Goal #class'])assert.ok(tagOnly(v),v);for(const v of ['#Goal prose','Text #Goal','#[[broken',''])assert.ok(!tagOnly(v),v)});
const keySource=x.runners['calendar-keyboard'].toString();
const handlerCode=keySource.slice(keySource.indexOf('const onKeyDown = async ')+18,keySource.indexOf('document.addEventListener("click", onCalendarClick')).trim().replace(/;$/,'');
let actions=[];window.__folioMatchesShortcut=(event,name)=>x.matchesShortcut(event,({jump:'Alt+g',today:'t',daily:'d',previous:'ArrowLeft',next:'ArrowRight'})[name]);
const keys=vm.runInContext('('+handlerCode+')',vm.createContext({...sandbox,isEditing:e=>e?.editing,showJump:()=>actions.push('jump'),openDate:d=>actions.push('date'),currentDailyDate:()=>new Date(2026,10,7)}));
await check('custom navigation keys do not fire during text editing or composition',async()=>{await keys(ev({key:'g',altKey:true,target:{editing:true}}));await keys(ev({key:'t',isComposing:true,target:{}}));assert.equal(actions.length,0);await keys(ev({key:'g',altKey:true,target:{}}));assert.deepEqual(actions,['jump'])});
await check('settings save height and shortcuts; theme-off appearance stays empty',()=>{let writes=[];window.React={createElement:(type,props)=>({type,props})};const runtime={locale:'zh',shortcuts:{today:'t'},codeMaxHeight:420,extensionAPI:{settings:{set:(...a)=>writes.push(a)}},rebuildCss:()=>{}};const settings=x.extraSettings(runtime);settings[0].action.component().props.onChange({target:{value:'600'}});assert.equal(runtime.codeMaxHeight,600);assert.equal(writes[0][0],'folio-code-max-height');settings.find(s=>s.id==='folio-shortcut-today').action.component().props.onChange({target:{value:'Alt+t'}});assert.equal(runtime.shortcuts.today,'Alt+t');rt.themeEnabled=false;assert.equal(rt.appearanceCss(),'')});
await check('child asides restored while removed features stay unregistered',()=>{assert.ok(x.FEATURES.some(f=>f.id==='asides'));assert.equal(typeof x.runners.asides,'function');assert.ok(!x.FEATURES.some(f=>['quick-mark','aging'].includes(f.id)));assert.ok(!x.runners['quick-mark']);assert.ok(!x.runners.aging);});
const capture=x.runners['calendar-capture'].toString();
const syncBarCode=capture.slice(capture.indexOf('const syncBarForPicker = ')+25,capture.indexOf('const syncBar = ')).trim().replace(/;$/,'');
await check('plan moves beside carry tools and returns when tools disappear',()=>{
  const bar=new Element('div'), tools=new Element('div'), plan=new Element('button');bar.append(plan);
  let hasTools=true;
  const picker={firstElementChild:{querySelector:()=>bar},querySelector:selector=>selector==='.folio-calendar-plan'?plan:hasTools?tools:null};
  const sync=vm.runInContext('('+syncBarCode+')',vm.createContext({...sandbox,calendarHost:()=>picker.firstElementChild,document:{querySelector:()=>picker},BAR_CLASS:'delmar-calendar-capture-bar'}));
  sync(picker);assert.equal(plan.parentElement,tools);sync(picker);assert.equal(tools.children.length,1);hasTools=false;sync(picker);assert.equal(plan.parentElement,bar);
});
await check('native sidebar switches closed/open/offscreen/hidden/reopened states and cleans up without creating buttons',()=>{
  const values=new Map();
  const originalQuery=document.querySelector;
  const originalCreate=document.createElement;
  const originalAll=document.querySelectorAll;
  const buttons=['open','close'].map(kind=>{
    const button=new Element('button');const state=new Map();
    button.matches=selector=>selector===('.bp3-icon-menu-'+(kind==='open'?'closed':'open'));
    button.querySelector=()=>null;
    button.style={getPropertyValue:k=>state.get(k)?.[0]||'',getPropertyPriority:k=>state.get(k)?.[1]||'',setProperty:(k,v,p)=>state.set(k,[v,p]),removeProperty:k=>state.delete(k)};
    return button;
  });
  document.querySelectorAll=selector=>selector.includes('.rm-topbar')?buttons:[];
  let rect={left:232,right:1108,top:0,width:876,height:48};
  const topbar={getBoundingClientRect:()=>rect};
  const attrs=new Map();
  document.documentElement={getAttribute:k=>attrs.get(k)||null,setAttribute:(k,v)=>attrs.set(k,v),removeAttribute:k=>attrs.delete(k),style:{getPropertyValue:k=>values.get(k)||'',setProperty:(k,v)=>values.set(k,v),removeProperty:k=>values.delete(k)}};
  let sidebarRect={left:1360,right:1360,width:0,height:974};
  let sidebarStyle={display:'flex',visibility:'visible'};
  const nativeSidebar={getBoundingClientRect:()=>sidebarRect};
  window.innerWidth=1360;
  sandbox.getComputedStyle=()=>sidebarStyle;
  document.querySelector=selector=>selector==='.rm-topbar'?topbar:selector==='#right-sidebar'?nativeSidebar:null;
  document.createElement=()=>{throw new Error('Native toggle layout must not create replacement buttons')};
  const modules=new Map();
  const chromeCore={load(name){const m=window.__magModules[name]();modules.set(name,m);m.sync()},unload(name){modules.get(name)?.destroy();modules.delete(name)},scheduleSync(){}};
  const runtime={ensureCore:()=>chromeCore,nativeCleanups:new Map()};
  x.registerNativeSidebarToggles(runtime);
  assert.equal(values.get('--folio-native-toggle-x'),'1070px');
  assert.equal(values.get('--folio-native-toggle-y'),'9px');
  assert.equal(attrs.get('data-folio-right-sidebar'),'closed');
  assert.equal(buttons[0].style.getPropertyValue('display'),'inline-flex');assert.equal(buttons[1].style.getPropertyValue('display'),'none');
  sidebarRect={left:900,right:1360,width:460,height:974};
  modules.get('folioNativeSidebarChrome').sync();
  assert.equal(attrs.get('data-folio-right-sidebar'),'open');
  assert.equal(buttons[0].style.getPropertyValue('display'),'none');assert.equal(buttons[1].style.getPropertyValue('display'),'inline-flex');
  sidebarRect={left:1360,right:1820,width:460,height:974};
  modules.get('folioNativeSidebarChrome').sync();
  assert.equal(attrs.get('data-folio-right-sidebar'),'closed');
  sidebarRect={left:900,right:1360,width:460,height:974};
  sidebarStyle={display:'none',visibility:'visible'};
  modules.get('folioNativeSidebarChrome').sync();
  assert.equal(attrs.get('data-folio-right-sidebar'),'closed');
  sidebarStyle={display:'flex',visibility:'visible'};
  modules.get('folioNativeSidebarChrome').sync();
  assert.equal(attrs.get('data-folio-right-sidebar'),'open');
  rect={left:0,right:1360,top:12,width:1360,height:48};
  modules.get('folioNativeSidebarChrome').sync();
  assert.equal(values.get('--folio-native-toggle-x'),'1322px');
  assert.equal(values.get('--folio-native-toggle-y'),'21px');
  runtime.nativeCleanups.get('sidebar-toggles')();
  assert.equal(values.size,0);
  assert.equal(attrs.size,0);
  document.querySelector=originalQuery;document.createElement=originalCreate;document.querySelectorAll=originalAll;
});
console.log(`${count} behavior tests passed. DOM/API doubles only; no layout or live Roam certification.`);
