import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {JSDOM}=require(process.env.FOLIO_UI_TEST_MODULES+'/jsdom');
const dom=new JSDOM('<div class="roam-body-main"><div class="rm-article-wrapper"><div class="roam-article"><div class="rm-block"><div class="rm-block-main"></div><div class="rm-block-children"><div class="rm-block aside"><div class="rm-block-main">Note</div></div></div></div></div></div></div>',{runScripts:'outside-only'});
const w=dom.window,d=w.document;
const compiled=fs.readFileSync(new URL('./extension.js',import.meta.url),'utf8').replace(/export default[\s\S]*$/,'');
w.eval(compiled+';window.__test={runners:MAGAZINE_RUNNERS,css:MAGAZINE_CSS};');
const frame=d.querySelector('.roam-body-main'),article=d.querySelector('.roam-article'),aside=d.querySelector('.aside');
article.style.padding='0px 40px';
const rect=(left,width,top=0,height=200)=>({left,right:left+width,width,top,bottom:top+height,height});
frame.getBoundingClientRect=()=>rect(0,1400);
let articleLeft=300,articleWidth=800;
article.getBoundingClientRect=()=>rect(articleLeft,articleWidth);
aside.getBoundingClientRect=()=>rect(0,120,70,35);
d.querySelector('.rm-block > .rm-block-main').getBoundingClientRect=()=>rect(340,700,60,30);
const frames=new Map();let seq=0,observer;
w.requestAnimationFrame=fn=>{frames.set(++seq,fn);return seq;};
w.cancelAnimationFrame=id=>frames.delete(id);
w.ResizeObserver=class{
 constructor(fn){this.callback=fn;this.targets=new Set();observer=this;}
 observe(el){this.targets.add(el);}unobserve(el){this.targets.delete(el);}
 disconnect(){this.targets.clear();}
};
const flush=()=>{const batch=[...frames.values()];frames.clear();batch.forEach(fn=>fn());};
const core={doc:d,isBlockInput:()=>false,scope:()=>({on(){},dispose(){}}),load(name){this.module=w.__magModules[name](this);}};
w.__magCore=core;w.__test.runners.asides();core.module.sync();flush();
assert.equal(observer.targets.size,2);
assert.equal(aside.getAttribute('data-mag-aside'),'right');
const initial=aside.style.getPropertyValue('--mag-aside-left');
const changeWidth=(left,width)=>{
 articleLeft=left;articleWidth=width;
 observer.callback([{target:article,contentRect:{width:width-80}}]);
 flush();
};
// A wider native article leaves less space: note follows its new edge.
changeWidth(150,1100);
assert.equal(aside.getAttribute('data-mag-aside'),'right');
assert.notEqual(aside.style.getPropertyValue('--mag-aside-left'),initial);
assert.ok(parseFloat(aside.style.getPropertyValue('--mag-aside-width'))<262);
// Full width has no usable margin: restore inline note and clear stale offsets.
changeWidth(0,1400);
assert.equal(aside.hasAttribute('data-mag-aside'),false);
assert.equal(article.hasAttribute('data-mag-margin'),false);
assert.equal(aside.style.getPropertyValue('--mag-aside-left'),'');
changeWidth(300,800);
assert.equal(aside.getAttribute('data-mag-aside'),'right');
assert.equal(aside.style.getPropertyValue('--mag-aside-left'),initial);
// Identical size callbacks do not enqueue another frame.
observer.callback([{target:article,contentRect:{width:720}}]);
assert.equal(frames.size,0);
core.module.destroy();assert.equal(observer.targets.size,0);assert.equal(frames.size,0);
assert.equal(aside.hasAttribute('data-mag-aside'),false);
// Layout must leave native horizontal geometry free of Folio declarations.
const style=d.createElement('style');style.textContent=w.__test.css.layout;d.head.append(style);
for(const rule of style.sheet.cssRules) if(rule.selectorText?.endsWith('.roam-main .roam-article')){
 for(const property of ['width','max-width','margin-inline','padding','padding-inline']) assert.equal(rule.style.getPropertyValue(property),'');
}
assert.ok(!compiled.includes('--folio-page-width'));
assert.ok(!compiled.includes('rm-spacing--large'));
console.log('PASS native width delegation; live-size aside placement, inline fallback, recovery, no-op callbacks and cleanup (geometry simulation).');
dom.window.close();
