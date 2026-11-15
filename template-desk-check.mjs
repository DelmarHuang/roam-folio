import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {JSDOM}=require((process.env.FOLIO_UI_TEST_MODULES || '') + (process.env.FOLIO_UI_TEST_MODULES ? '/jsdom' : 'jsdom'));
const compiled=fs.readFileSync('extension.js','utf8').replace(/export default[\s\S]*$/,'');
const dom=new JSDOM('',{url:'https://example.test/#/app/Tests',runScripts:'outside-only'}),w=dom.window;
w.eval(compiled+';window.test={createTemplateService,TEMPLATE_COPY,templateText,templateUid,MAGAZINE_RUNNERS};');
const x=w.test,settings=new Map(),writes=[],sources=new Map(),pages=new Map();let seq=0,calls=0;
const rt={templates:{weekday:'',weekend:'',plan:''},extensionAPI:{settings:{get:k=>settings.get(k),set:async(k,v)=>settings.set(k,v)}}};
const date=new Date(2026,10,16,12),uid=d=>[d.getFullYear(),d.getMonth()+1,d.getDate()].join('-');
w.roamAlphaAPI={q:(q,id)=>{
 if(q.includes('?childUid'))return sources.get(id)?.children || [];
 if(q.includes('[:find ?uid :in'))return (pages.get(id)||[]).map(id=>[id]);
 if(q.includes('[:find ?block .'))return sources.has(id)?id:null;
 if(q.includes('[:find ?page .'))return pages.has(id)?id:null;
 throw new Error('Unexpected query: '+q);
},util:{dateToPageUid:uid,dateToPageTitle:d=>'Date '+uid(d),generateUID:()=>`node${++seq}`},createPage:async v=>{writes.push(v);pages.set(v.page.uid,[])},createBlock:async v=>{writes.push(v);const parent=v.location['parent-uid'];if(pages.has(parent))pages.get(parent).push(v.block.uid);}};
let svc=x.createTemplateService(rt);
assert.equal((await svc.automatic(date)).status,'disabled');assert.equal(writes.length,0);
await assert.rejects(svc.plan(date),e=>e.templateCode==='missing');
rt.templates.plan='((unknown))';await assert.rejects(svc.plan(date),e=>e.templateCode==='invalid');
sources.set('empty',{children:[]});rt.templates.plan='empty';await assert.rejects(svc.plan(date),e=>e.templateCode==='empty');assert.equal(writes.length,0);assert.equal(settings.size,0,'invalid configuration must not persist success');
sources.set('plan',{children:[['b','second',1],['a','first',0]]});sources.set('a',{children:[['nested','nested note',0]]});sources.set('b',{children:[]});sources.set('nested',{children:[]});rt.templates.plan='((plan))';
const first=await svc.plan(date);assert.equal(first.count,3);assert.deepEqual(writes.slice(1).map(v=>v.block.string),['first','nested note','second']);assert.equal(writes[2].location['parent-uid'],writes[1].block.uid);
svc=x.createTemplateService(rt);const count=writes.length;assert.equal((await svc.plan(date)).status,'already');assert.equal(writes.length,count,'reload cannot copy again');
const originalCreate=w.roamAlphaAPI.createBlock;let failures=0;w.roamAlphaAPI.createBlock=async v=>{if(++failures===2)throw new Error('failed write');return originalCreate(v)};
const nextDate=new Date(2026,10,17,12);await assert.rejects(svc.plan(nextDate),e=>e.templateCode==='failed');svc=x.createTemplateService(rt);await assert.rejects(svc.plan(nextDate),e=>e.templateCode==='incomplete');w.roamAlphaAPI.createBlock=originalCreate;
rt.templates.weekday='empty';await assert.rejects(svc.automatic(date),e=>e.templateCode==='dependency');
w.roamjs={extension:{smartblocks:{triggerSmartblock:async()=>{calls++;pages.get(uid(date)).push('smartblock'+calls);}}}};
assert.equal((await svc.automatic(date)).count,1);assert.equal((await x.createTemplateService(rt).automatic(date)).status,'already');assert.equal(calls,1);
rt.templates.weekend='plan';const saturday=new Date(2026,10,21,12);pages.set(uid(saturday),[]);w.roamjs.extension.smartblocks.triggerSmartblock=async args=>{assert.equal(args.srcUid,'plan');pages.get(uid(saturday)).push('weekend');};assert.equal((await svc.automatic(saturday)).count,1);
const nextWeek=new Date(2026,10,23,12);pages.set(uid(nextWeek),[]);w.roamjs.extension.smartblocks.triggerSmartblock=async()=>{};assert.equal((await svc.automatic(nextWeek)).status,'noOutput');assert.equal((await svc.automatic(new Date(2026,10,24,12))).status,'missingPage');
// Concurrent activation cannot invoke the same SmartBlock twice; cleanup cancels a pending write.
const concurrentDate=new Date(2026,10,25,12);pages.set(uid(concurrentDate),[]);let finish;w.roamjs.extension.smartblocks.triggerSmartblock=()=>new Promise(resolve=>{finish=()=>{pages.get(uid(concurrentDate)).push('once');resolve()}});
const running=svc.automatic(concurrentDate);await new Promise(r=>setImmediate(r));await assert.rejects(svc.automatic(concurrentDate),e=>e.templateCode==='incomplete');finish();await running;
assert.equal((await svc.automatic(new Date(2026,10,26),()=>false)).status,'disabled');
for(const locale of ['en','zh','fr','de','es','it']){w.__magLocale=locale;assert.deepEqual(Object.keys(x.TEMPLATE_COPY[locale]),Object.keys(x.TEMPLATE_COPY.en));for(const key of Object.keys(x.TEMPLATE_COPY.en))assert.ok(x.templateText(key));}
console.log('PASS templates: empty/invalid sources write nothing; nested ordered copy; partial failure guard; refresh/concurrency deduplication; weekday/weekend selection; dependency/no-output/cleanup; six languages.');
w.close();

const expectations={en:['All','Recently edited','Pick lead'],zh:['全部','最近编辑','抽头条'],fr:['Tout','Modifié récemment','Choisir la une'],de:['Alle','Zuletzt bearbeitet','Aufmacher wählen'],es:['Todos','Edición reciente','Elegir destacado'],it:['Tutti','Modificati di recente','Scegli in primo piano']};
const deskDom=new JSDOM('<main class="roam-body-main"><div class="rm-desk-page"><h1 class="rm-desk-page__title">Desk</h1><div class="rm-desk-page__tools"></div><div class="rm-desk-tile rm-desk-tile--page"><div class="rm-desk-tile__title">My page</div><div class="rm-desk-tile__actions"></div><div class="rm-desk-tile__footer"></div><div class="rm-desk-tile__more"></div></div><div class="rm-desk-tile rm-desk-tile--page"><div class="rm-desk-tile__title">Other page</div><div class="rm-desk-tile__actions"></div><div class="rm-desk-tile__footer"></div></div></div></main>',{url:'https://example.test',runScripts:'outside-only'});
const dw=deskDom.window,d=dw.document,storage=new Map(),listeners=[];let module,writesToGraph=0;
dw.roamAlphaAPI={q:q=>q.includes('count')?3:q.includes('[:find ?s .')?'#Project':[['block1','{{[[TODO]]}} work',Date.now()],['block2','due:: 2026-11-20',Date.now()]],createBlock:()=>writesToGraph++,updateBlock:()=>writesToGraph++};
dw.eval(compiled+';window.runners=MAGAZINE_RUNNERS;');
const core={doc:d,store:{get:(key,def)=>storage.get(key)??def,set:(key,value)=>storage.set(key,value)},scope:()=>({on:(el,event,fn,capture)=>{el.addEventListener(event,fn,capture);listeners.push(()=>el.removeEventListener(event,fn,capture))},dispose:()=>listeners.forEach(fn=>fn())}),scheduleSync:()=>{},load:()=>{module=dw.__magModules.desk(core);}};
dw.__magCore=core;dw.runners['editorial-desk']();module.sync();await new Promise(r=>setImmediate(r));module.sync();
const select=d.querySelector('select');select.value='recent';select.dispatchEvent(new dw.Event('change'));module.sync();
const pin=d.querySelector('.mag-desk-pin');pin.click();module.sync();
const chips=d.querySelectorAll('.mag-desk-bar__chip');chips[1].click();module.sync();
for(const [locale,[all,recent,draw]] of Object.entries(expectations)){
 dw.__magLocale=locale;module.sync();
 assert.equal(d.querySelector('.mag-desk-bar__chip').textContent,all);
 assert.equal(select.options[1].textContent,recent);assert.equal(select.value,'recent');assert.equal(select.options.length,9);
 assert.equal(d.querySelector('.mag-desk-bar__dice').textContent,draw);assert.ok(d.querySelector('.mag-desk-bar__dir').title);
 assert.equal(pin.getAttribute('aria-pressed'),'true');assert.equal(d.querySelectorAll('.mag-desk-bar__chip')[1].getAttribute('aria-pressed'),'true');
 assert.ok(d.querySelector('.rm-desk-tile__footer').dataset.magMeta);assert.ok(d.querySelector('.rm-desk-tile__more').dataset.magContinued);
 if(locale!=='zh')assert.ok(!/[\p{Script=Han}]/u.test(d.querySelector('.mag-desk-bar').textContent+pin.title));
}
assert.equal(storage.get('mag-desk-sort'),'recent');d.querySelector('.mag-desk-bar__dice').click();module.sync();assert.ok(d.querySelector('[data-mag-lead]'));d.querySelector('.mag-desk-bar__clear').click();module.sync();assert.equal(d.querySelector('[data-mag-lead]'),null);pin.click();module.sync();assert.equal(pin.getAttribute('aria-pressed'),'false');assert.equal(writesToGraph,0);
module.destroy();assert.equal(d.querySelector('.mag-desk-bar'),null);assert.equal(d.querySelector('[data-mag-meta]'),null);assert.equal(d.querySelector('[data-mag-continued]'),null);deskDom.window.close();
console.log('PASS Desk: all six languages update existing controls and card metadata; nine sort modes, type filter, pins, lead actions and cleanup preserved; zero graph writes.');
