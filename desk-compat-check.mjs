import fs from 'node:fs';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
const source=fs.readFileSync(new URL('source/theme-source.txt',import.meta.url),'utf8').slice(fs.readFileSync(new URL('source/theme-source.txt',import.meta.url),'utf8').indexOf('const Q_PAGE =')-1100);
const part=(a,b)=>source.slice(source.indexOf(a),source.indexOf(b,source.indexOf(a)));
const dom=new JSDOM('<div class="rm-desk-page"><a class="rm-desk-page__owner">notes</a><div class="rm-desk-tile rm-desk-tile--page" data-position="1"><div class="rm-desk-tile__preview" aria-label="Book/Name"></div></div></div>',{runScripts:'outside-only'});
const w=dom.window;
let children=[{':block/uid':'native001',':block/order':0,':block/string':'{{[[TODO]]}} Task',':block/refs':[{':block/uid':'book00001',':node/title':'[[Book]]/Name'}]}];
let queries=[];let fail=false;
w.roamAlphaAPI={pull:(pattern,[field,key])=>key==='roam/desk/notes'?{':block/children':children}:key==='native001'?{':block/string':'{{[[TODO]]}} Task'}:null,q:async(q,arg)=>{queries.push([q,arg]);if(fail)throw Error('unavailable');if(q.includes(':find ?b ?s ?t'))return [[1,'#Book',0],[2,'{{[[DONE]]}} child',100],[3,'Notes',0]];if(q.includes(':find ?d ?s ?t'))return [[4,'child',0]];return null;}};
w.eval(`const CONFIG={heatWeeks:4};const DAY=86400000;const store={get:()=>'',set:()=>{}};const core={scheduleSync:()=>{}};`+
part('const MONTHS = [','/* ---------- 持久状态')+
part('const Q_PAGE_BLOCKS =','/* ---------- 工具条：')+
';window.check={sigOf,refOf,load,cache,reset:()=>{deskSnapshot=null;},Q_PAGE,Q_BLOCK};');
const c=w.check,tile=w.document.querySelector('.rm-desk-tile');
const sig=c.sigOf(tile),ref=c.refOf(sig);
assert.equal(ref.title,'[[Book]]/Name');await c.load(ref);
assert.equal(c.cache.get(sig.key).data.blocks,3);assert.equal(c.cache.get(sig.key).data.done,1);
assert.equal(queries.find(([q])=>q.includes(':find ?b ?s ?t'))[1],'[[Book]]/Name');
assert.match(c.Q_PAGE,/get-else/);assert.match(c.Q_BLOCK,/get-else/);
children[0][':block/refs'].push({':block/uid':'book00002',':node/title':'Book/Name'});c.reset();assert.equal(c.refOf(sig),null);
children=[];c.reset();assert.equal(c.refOf(sig),null);
fail=true;await c.load({key:'failure',kind:'block',uid:'native001'});assert.equal(c.cache.has('failure'),false);
fail=false;await c.load({key:'block',kind:'block',uid:'native001'});assert.equal(c.cache.get('block').data.blocks,1);
const css=fs.readFileSync(new URL('src/styles/editorial-desk.css',import.meta.url),'utf8');
assert.match(css,/\.roam-article > \.rm-desk-page-toggle \{/);
assert.match(css,/height:auto!important;min-height:0!important;max-height:none!important/);
const bundle=fs.readFileSync(new URL('extension.js',import.meta.url),'utf8').replace(/export default[\s\S]*$/,'');
w.eval(bundle+';window.builtCss=MAGAZINE_CSS;');
assert.match(w.builtCss['editorial-desk'], /\.roam-article > \.rm-desk-page-toggle \{/);
assert.match(w.builtCss['editorial-desk'], /float:none!important/);
assert.match(w.builtCss['editorial-desk'], /position:relative!important/);
console.log('PASS real Desk refs, nested page-link titles, ambiguous/missing pages, missing edit times, failed reads, descendant-only counts, scoped Outline switch styles');
dom.window.close();
