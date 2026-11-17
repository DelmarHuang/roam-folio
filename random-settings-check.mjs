import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const code=fs.readFileSync('extension.js','utf8').replace(/export default[\s\S]*$/,'');
let panel,section='appearance';const writes=[];const store=new Map();
const document={querySelectorAll:()=>[],querySelector:()=>null,getElementById:()=>null};
const window={addEventListener:()=>{},removeEventListener:()=>{},setTimeout:()=>1,clearTimeout:()=>{},React:{useState:()=>[section,()=>{}],createElement:(type,props,...children)=>({type,props:props||{},children:children.flat(Infinity)})}};
const sb={window,document,navigator:{language:'en'},console,setTimeout,clearTimeout,location:{hash:''},Date};vm.createContext(sb);
vm.runInContext(code+';globalThis.x={createRuntime,FUNCTION_GROUPS,FEATURES,SETTINGS_COPY,randomPageNames,syncRandomTodoConfig,runners:MAGAZINE_RUNNERS};',sb);const x=sb.x;
const settings={get:key=>store.get(key),set:(key,value)=>{store.set(key,value);writes.push([key,value]);},panel:{create:p=>{panel=p;}}};
const rt=x.createRuntime({settings});rt.apply=()=>{};await rt.start();
assert.equal(rt.randomExcludedPages,'SmartBlock\nroam/templates');assert.equal(rt.randomExcludeFuture,true);
assert.equal(store.get('folio-random-exclude-future'),true);
const ids=x.FUNCTION_GROUPS.flatMap(g=>g.ids);assert.equal(new Set(ids).size,29);assert.deepEqual([...ids].sort(),[...x.FEATURES.map(f=>f.id)].sort());
const runner=x.runners['random-tasks'].toString();const prefix=runner.slice(runner.indexOf('  const todoRx'),runner.indexOf('  const blockRefRx'));const find=runner.slice(runner.indexOf('  function findTodos()'),runner.indexOf('  // Index all references'));
const tomorrow=new Date();tomorrow.setDate(tomorrow.getDate()+1);const future=tomorrow.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}).replace(/(\d+),/,'$1th,');
const rows=[['template','{{[[TODO]]}} template','roam/templates'],['smart','{{[[TODO]]}} smart','SmartBlock'],['custom','{{[[TODO]]}} custom','Private'],['normal','{{[[TODO]]}} normal','Work'],['future',`{{[[TODO]]}} next [[${future}]]`,'Work'],['done','{{[[DONE]]}} done','Work'],['prefix','{{[[TODO]]}} unrelated name','SmartBlock Notes'],['normal','{{[[TODO]]}} duplicate','Work']];
sb.CFG={excludePage:null};sb.api={data:{q:()=>rows},util:{pageTitleToDate:title=>new Date(title.replace(/(\d+)(st|nd|rd|th)/,'$1'))}};
vm.runInContext(prefix+find+';globalThis.pick=()=>findTodos().map(t=>t.uid);',sb);
assert.deepEqual([...sb.pick()],['custom','normal','prefix']);
function walk(n,out=[]){if(!n||typeof n!=='object')return out;if(typeof n.type==='function')return walk(n.type(n.props),out);out.push(n);n.children?.forEach(c=>walk(c,out));return out;}
for(const locale of ['en','zh','fr','de','es','it']){
 rt.locale=locale;section='review';await rt.createPanel();let tree=panel.settings.find(s=>s.id==='folio-functional-settings').action.component();let nodes=walk(tree);
 const copy=x.SETTINGS_COPY[locale];for(const text of [copy.pages,copy.future,copy.impact])assert.ok(JSON.stringify(nodes).includes(text),locale+' '+text);
 assert.ok(nodes.some(n=>n.type==='textarea'&&n.props.defaultValue==='SmartBlock\nroam/templates'));
 const field=nodes.find(n=>n.props.id==='folio-random-excluded-pages');field.props.onChange({target:{value:' SmartBlock\nroam/templates\nPrivate\nPrivate\n '}});
 assert.deepEqual([...window.__folioRandomTodoConfig.excludedPages],['SmartBlock','roam/templates','Private']);assert.deepEqual([...sb.pick()],['normal','prefix']);
 const futureToggle=nodes.find(n=>n.props.role==='switch');futureToggle.props.onChange({target:{checked:false}});assert.deepEqual([...sb.pick()],['normal','future','prefix']);
 field.props.onChange({target:{value:''}});assert.deepEqual([...sb.pick()],['template','smart','custom','normal','future','prefix']);
 // Restore defaults through the real reset handler, including persisted policy.
 await panel.settings.find(s=>s.id==='folio-reset-all').action.onClick();assert.equal(store.get('folio-random-exclude-future'),true);assert.equal(store.get('folio-random-excluded-pages'),'SmartBlock\nroam/templates');
 for(const group of x.FUNCTION_GROUPS){section=group.id;await rt.createPanel();nodes=walk(panel.settings.find(s=>s.id==='folio-functional-settings').action.component());
  for(const id of group.ids){const feature=x.FEATURES.find(f=>f.id===id);assert.ok(nodes.some(n=>n.props.title===copy.impact&&n.children.includes((vm.runInContext('UI',sb)[locale]).impact[feature.impact-1])),locale+id);}
 }
}
// Loading saved empty exclusions and false must preserve both instead of restoring defaults.
store.set('folio-random-excluded-pages','');store.set('folio-random-exclude-future',false);store.set('folio-feature-video-reader',false);
const reloaded=x.createRuntime({settings});reloaded.apply=()=>{};await reloaded.start();assert.equal(reloaded.randomExcludedPages,'');assert.equal(reloaded.randomExcludeFuture,false);assert.equal(reloaded.featureValues.get('video-reader'),false);
assert.equal(writes.filter(([key])=>key.includes('block/')).length,0);
vm.runInContext(`for (const locale of ['zh','fr','de','es','it']) {
 if (TAG_FIELD_LABELS[locale].length !== TAG_FIELDS.length) throw new Error('Missing field labels: '+locale);
 for (const field of TAG_FIELDS) if (!settingsTagFieldName(field,locale)) throw new Error('Missing label: '+field.id);
}`,sb);
console.log('PASS default policy, exact page exclusions, custom pages, blanks, duplicate rows, future-date on/off, six languages, 29 unique features, reset and reload persistence. No task mutation.');
