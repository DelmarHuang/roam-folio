import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {JSDOM}=require(process.env.FOLIO_UI_TEST_MODULES+'/jsdom');
const compiled=fs.readFileSync('extension.js','utf8').replace(/export default[\s\S]*$/,'');
for(const locale of ['en','zh','fr','de','es','it']) {
 const dom=new JSDOM('<div class="roam-app"><main></main></div>',{url:'https://example.test/#/app/Test/page/Note',runScripts:'outside-only'});
 const w=dom.window,d=w.document,work=new Map();let sequence=0;
 w.requestIdleCallback=w.requestAnimationFrame=fn=>{work.set(++sequence,fn);return sequence;};
 w.cancelIdleCallback=w.cancelAnimationFrame=id=>work.delete(id);
 const flush=async()=>{for(let i=0;i<10;i++) {await new Promise(resolve=>setTimeout(resolve,0));const batch=[...work.values()];work.clear();batch.forEach(fn=>fn());}assert.equal(work.size,0);};
 w.eval(compiled+';window.__test={createCore,runners:MAGAZINE_RUNNERS};');w.__magLocale=locale;
 const core=w.__test.createCore();w.__test.runners['code-tools']();await flush();
 let received=[];const watcher=core.watch('test:other-added-node-consumer',records=>received.push(...records));watcher.observe();
 function makeCode(uid,value) {
  const note=d.createElement('div');note.className='roam-block-container';note.setAttribute('data-block-uid',uid);
  note.innerHTML='<div class="rm-code-block"><div class="rm-code-block__settings-bar"><select class="rm-code-block__language-chooser"></select></div><div class="cm-editor"><div class="cm-content" contenteditable="true"></div></div></div>';
  let content=value;const history=[],changes=[];
  const view={state:{doc:{toString:()=>content},selection:{main:{from:0,to:0}},readOnly:false},dispatch(tx){
   if(tx.changes){assert.equal(this.state.readOnly,false);history.push(content);changes.push(tx.changes);for(const c of [...tx.changes].reverse()) content=content.slice(0,c.from)+c.insert+content.slice(c.to);}
   if(tx.selection){const a=tx.selection.anchor,b=tx.selection.head??a;this.state.selection={main:{from:Math.min(a,b),to:Math.max(a,b)}};}
   // A new equivalent document object must not reset a search position.
   this.state.doc={toString:()=>content};
  },undo(){content=history.pop();this.state.doc={toString:()=>content};note.querySelector('.cm-content').textContent=content;}};
  note.querySelector('.cm-content').cmView={view};
  return {note,view,changes,get value(){return content;}};
 }
 const a=makeCode('code00001','foo zero FOO one foo');d.querySelector('main').append(a.note);await flush();
 assert.equal(a.note.querySelectorAll('.mag-code-tools').length,1,'newly expanded note installs without toggling');
 assert.ok(received.some(record=>[...record.addedNodes].includes(a.note)),'other consumers receive real mutation records too');
 const b=makeCode('code00002','other foo');d.querySelector('main').append(b.note);await flush();assert.equal(b.note.querySelectorAll('.mag-code-tools').length,1);
 const tool=a.note.querySelector('.mag-code-tools').children[2];tool.click();
 let panel=a.note.querySelector('.mag-code-search'),input=panel.querySelector('input[type=search]');
 const enter=()=>input.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Enter',bubbles:true}));
 input.value='foo';enter();enter();assert.equal(panel.querySelector('[role=status]').textContent,'2 / 3');assert.equal(a.view.state.selection.main.from,9);
 tool.click();b.note.querySelector('.mag-code-tools').children[2].click();tool.click();
 assert.equal(panel.querySelector('[role=status]').textContent,'2 / 3','switching blocks retains position');
 enter();assert.equal(panel.querySelector('[role=status]').textContent,'3 / 3');
 // React replaces the toolbar while retaining the block and editor.
 const newBar=d.createElement('div');newBar.className='rm-code-block__settings-bar';a.note.querySelector('.rm-code-block__settings-bar').replaceWith(newBar);await flush();
 assert.equal(newBar.querySelector('.mag-code-tools').children[2],tool);assert.equal(a.note.querySelector('.mag-code-search'),panel);
 // Entire code wrapper replacement under the same Roam UID keeps search state.
 const remount=makeCode('code00001',a.value);a.note.replaceWith(remount.note);await flush();
 panel=remount.note.querySelector('.mag-code-search');input=panel.querySelector('input[type=search]');assert.equal(input.value,'foo');assert.equal(panel.hidden,false);
 enter();assert.equal(panel.querySelector('[role=status]').textContent,'1 / 3','next resumes and wraps from previous third match');
 const replaceField=panel.querySelector('input[type=text]');replaceField.value='$&';replaceField.dispatchEvent(new w.Event('input',{bubbles:true}));
 panel.querySelector('[data-replace=one]').click();assert.equal(remount.value,'$& zero FOO one foo');assert.equal(remount.changes.at(-1).length,1);
 panel.querySelector('[data-replace=all]').click();assert.equal(remount.value,'$& zero $& one $&');assert.equal(remount.changes.at(-1).length,2,'all replacements use one transaction');assert.equal(b.value,'other foo');
 remount.view.undo();await flush();assert.equal(remount.value,'$& zero FOO one foo');
 // Empty replacement deletes text, and read-only state never dispatches changes.
 replaceField.value='';panel.querySelector('[data-replace=all]').click();assert.equal(remount.value,'$& zero  one ');
 input.value='one';enter();remount.view.state.readOnly=true;const before=remount.changes.length;panel.querySelector('[data-replace=one]').click();assert.equal(remount.changes.length,before);
 remount.view.state.readOnly=false;input.value='[.*]';enter();assert.equal(remount.changes.length,before);assert.equal(panel.querySelector('[data-replace=all]').disabled,true,'literal special chars do not match arbitrary code');
 input.value='';enter();assert.equal(panel.querySelector('[data-replace=one]').disabled,true);
 // Remove a note: stale tools disappear, remaining blocks are unaffected.
 b.note.remove();await flush();assert.equal(d.querySelectorAll('.mag-code-tools').length,1);
 watcher.disconnect();w.__magCodeBottom.stop();core.destroy();await flush();assert.equal(d.querySelectorAll('.mag-code-tools,.mag-code-search').length,0);assert.equal(d.getElementById('mag-code-tools-style'),null);
 console.log('PASS '+locale+': late mount, shared notifications, toolbar/wrapper remount, search resume, literal/empty/current/all replacement, block isolation, read-only and cleanup (editor API double).');
 dom.window.close();
}
