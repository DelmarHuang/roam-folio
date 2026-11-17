import fs from 'node:fs';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
const code=fs.readFileSync(new URL('./extension.js',import.meta.url),'utf8').replace(/export default[\s\S]*$/,'');
function fixture(){
 const dom=new JSDOM('<body><div class="bp3-datepicker"></div></body>',{url:'https://test.example/#/app/Test',runScripts:'outside-only',pretendToBeVisual:true});const w=dom.window,d=w.document;
 Object.defineProperty(w.HTMLElement.prototype,'offsetParent',{get(){return this.parentElement;}});w.__magCore={watch:(_,fn)=>new w.MutationObserver(fn)};
 w.eval(code+';window.carry=MAGAZINE_RUNNERS["calendar-carry"];');
 const db=new Map();const add=(uid,text,parent,order)=>db.set(uid,{uid,text,parent,order});
 add('group0001','Reading','yesterday',0);add('group0002','Automatic · yesterday','group0001',0);
 add('done00001','{{[[DONE]]}} Finished sibling','group0002',0);
 add('todo00001','{{[[TODO]]}} First','group0002',1);add('todo00002','{{[[TODO]]}} Second','group0002',2);
 add('unrelated','Unrelated note','group0002',3);
 add('parent001','{{[[TODO]]}} Prepare interview','yesterday',1);
 add('donechild','{{[[DONE]]}} Research','parent001',0);add('openchild','{{[[TODO]]}} Practice','parent001',1);add('plain0001','Explanation','parent001',2);
 const kids=uid=>[...db.values()].filter(n=>n.parent===uid).sort((a,b)=>a.order-b.order);
 const ancestors=uid=>{const a=[];let p=db.get(uid)?.parent;while(p){a.push(p);p=db.get(p)?.parent;}return a;};
 const tree=uid=>{if(uid==='yesterday')return {':block/uid':uid,':block/children':kids(uid).map(n=>tree(n.uid))};const n=db.get(uid);return n?{':block/uid':uid,':block/string':n.text,':block/order':n.order,':block/children':kids(uid).map(n=>tree(n.uid))}:null;};
 let count=0;const moves=[],created=[],deleted=[];
 w.roamAlphaAPI={util:{dateToPageTitle:()=> 'Yesterday',dateToPageUid:()=> 'today',generateUID:()=>`ref${String(++count).padStart(6,'0')}`},data:{pull:(_,[field,uid])=>tree(field===':node/title'?'yesterday':uid)},
 q:(q,uid)=>{
  if(q.includes(':find ?uid ?text'))return [...db.values()].filter(n=>ancestors(n.uid).includes('yesterday')).reverse().map(n=>[n.uid,n.text]);
  if(q.includes(':find ?text'))return db.get(uid)?.text||'';
  if(q.includes(':find ?parentUid')){const n=db.get(uid);return n?[[n.parent,n.order]]:[];}
  if(q.includes(':find ?e .'))return 1;
  if(q.includes(':find ?source'))return [...db.values()].filter(n=>n.text.includes(`((${uid}))`)).map(n=>[n.uid]);
  throw Error(q);
 },createBlock:async({block,location})=>{created.push(block.uid);add(block.uid,block.string,location['parent-uid'],kids(location['parent-uid']).length);},deleteBlock:async({block})=>{assert.equal(kids(block.uid).length,0);deleted.push(block.uid);db.delete(block.uid);},moveBlock:async({block,location})=>{
  moves.push(block.uid);const n=db.get(block.uid),old=n.parent;const dest=kids(location['parent-uid']).filter(x=>x.uid!==block.uid);n.parent=location['parent-uid'];dest.splice(Math.min(location.order,dest.length),0,n);dest.forEach((item,i)=>item.order=i);if(old!==n.parent)kids(old).forEach((item,i)=>item.order=i);
 }};
 w.carry();const open=()=>d.querySelector('.delmar-calendar-carry-entry').click();
 const act=async kind=>{open();await d.querySelector(`#delmar-calendar-carry-panel .is-${kind}`).onclick();};
 const undo=async()=>{open();await d.querySelector('#delmar-calendar-carry-panel .is-undo').onclick();};
 const outline=parent=>kids(parent).map(n=>[n.text,outline(n.uid)]);
 return {dom,w,db,kids,moves,created,deleted,act,undo,outline,close(){w.__delmarCalendarCarryCleanup();dom.window.close();}};
}
{
 const f=fixture(),before=f.outline('yesterday');await f.act('ref');
 assert.deepEqual(f.outline('today'),[
  ['((group0001))', [['((group0002))',[['((todo00001))',[]],['((todo00002))',[]]]]]],
  ['((parent001))',[['((donechild))',[]],['((openchild))',[]],['((plain0001))',[]]]]
 ]);
 assert.deepEqual(f.outline('yesterday'),before);assert.equal(f.moves.length,0);f.close();
 console.log('PASS reference: ancestor paths once, source order, no unrelated siblings, complete mixed TODO subtree, originals unchanged');
}
{
 const f=fixture(),before=f.outline('yesterday');await f.act('move');
 assert.deepEqual(f.moves,['todo00001','todo00002','parent001']);
 assert.deepEqual(f.outline('today'),[
 ['((group0001))',[['((group0002))',[['{{[[TODO]]}} First',[]],['{{[[TODO]]}} Second',[]]]]]],
 ['{{[[TODO]]}} Prepare interview',[['{{[[DONE]]}} Research',[]],['{{[[TODO]]}} Practice',[]],['Explanation',[]]]]
 ]);
 assert.ok(f.db.has('group0001'));assert.equal(f.db.get('done00001').parent,'group0002');assert.equal(f.db.get('unrelated').parent,'group0002');
 await f.undo();assert.deepEqual(f.outline('yesterday'),before);assert.deepEqual(f.outline('today'),[]);assert.equal(f.deleted.length,2);f.close();
 console.log('PASS move/undo: only tasks move, completed siblings remain, completed descendants follow, original order restored, empty generated groups removed');
}
{
 const f=fixture();await f.act('move');const group=f.created[0];f.db.get(group).text='User edited this group';await f.undo();assert.ok(f.db.has(group));assert.equal(f.db.get(group).text,'User edited this group');f.close();
 console.log('PASS undo retains user-edited context groups');
}
