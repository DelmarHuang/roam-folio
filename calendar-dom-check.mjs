import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);const {JSDOM}=require(process.env.FOLIO_DOM_TEST_MODULES?process.env.FOLIO_DOM_TEST_MODULES+'/jsdom':'jsdom');
const compiled={};vm.createContext(compiled);vm.runInContext(fs.readFileSync('extension.js','utf8').replace(/export default[\s\S]*$/,'')+';globalThis.runners=MAGAZINE_RUNNERS;',compiled);
const results=[];
for(const locale of ['en','zh','fr','de','es','it']){
 const dom=new JSDOM('<div class="rm-topbar"><span class="bp3-icon-calendar"></span></div><main></main><div id="outside"></div>',{url:'https://example.test/#/app/Test',pretendToBeVisual:true,runScripts:'outside-only'});const w=dom.window,d=w.document;
 Object.defineProperty(w.HTMLElement.prototype,'offsetParent',{get(){return this.isConnected?this.parentElement:null;}});
 const matches=w.Element.prototype.matches;w.Element.prototype.matches=function(selector){return selector===':hover'?this===w.__hoverCell:matches.call(this,selector);};
 w.eval(fs.readFileSync('src/calendar.js','utf8')+';window.__copy=CALENDAR_COPY;');w.__magLocale=locale;
 const keys=Object.keys(w.__copy.en);assert.deepEqual(Object.keys(w.__copy[locale]),keys,locale+' translation completeness');for(const key of keys)assert.ok(w.__copy[locale][key],locale+key);
 w.__magCore={watch:(_,callback)=>new w.MutationObserver(callback)};const callbacks=[],navigations=[],writes=[];
 w.roamAlphaAPI={q:(query,title)=>query.includes('count ?block')?1:query.includes('?uid ?text')?(title?.includes('13th')?[]:[['note00001','Preview text'],['todo00001','{{[[TODO]]}} a task']]):'exists',util:{dateToPageTitle:date=>date.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}).replace(/(\d+),/,'$1th,'),dateToPageUid:date=>date.toISOString().slice(0,10),pageTitleToDate:title=>new w.Date(title.replace(/(\d+)(st|nd|rd|th)/,'$1')),generateUID:()=> 'test00001'},ui:{mainWindow:{openPage:value=>navigations.push(value),openDailyNotes:()=>{}},commandPalette:{addCommand:()=>{},removeCommand:()=>{}}},createPage:value=>writes.push(value),createBlock:value=>writes.push(value),moveBlock:value=>writes.push(value)};
 const flush=()=>new Promise(resolve=>w.requestAnimationFrame(()=>w.requestAnimationFrame(resolve)));
 function createPicker(kind){const picker=d.createElement('div');picker.className='bp3-datepicker';picker.id=kind;
  if(kind==='reference'){const list=d.createElement('ul');list.className='bp3-menu bp3-daterangepicker-shortcuts';for(let i=0;i<8;i++){const li=d.createElement('li'),a=d.createElement('a');a.className='bp3-menu-item';a.textContent='Native '+i;a.onclick=()=>callbacks.push(i);li.append(a);list.append(li);}picker.append(list);}
  const host=d.createElement('div');host.className='calendar-host';host.innerHTML=`<div class="DayPicker"><div class="bp3-datepicker-year-select"><select>${[2026,2027,2028].map(y=>`<option value="${y}">${y}</option>`).join('')}</select></div><div class="bp3-datepicker-month-select"><select>${Array.from({length:12},(_,i)=>`<option value="${i}">${i+1}</option>`).join('')}</select></div><div class="cells"></div></div>`;picker.append(host);
  const render=()=>{const y=Number(host.querySelector('.bp3-datepicker-year-select select').value),m=Number(host.querySelector('.bp3-datepicker-month-select select').value);host.querySelector('.cells').innerHTML=[11,12,13].map(day=>`<div class="DayPicker-Day" aria-label="${new Date(y,m,day).toDateString()}" aria-disabled="false"><span class="bp3-datepicker-day-wrapper"><span>${day}</span></span></div>`).join('');host.querySelectorAll('.DayPicker-Day').forEach(cell=>cell.onclick=()=>callbacks.push(cell.getAttribute('aria-label')));};host.querySelectorAll('select').forEach(select=>select.onchange=render);host.querySelector('.bp3-datepicker-month-select select').value='10';render();d.querySelector('main').append(picker);return picker;
 }
 for(const key of ['calendar-keyboard','calendar-capture','calendar-carry','calendar-preview'])w.eval(`(${compiled.runners[key].toString()})();`);
 const attach=new w.MutationObserver(()=>w.__folioAttachCalendar?.());attach.observe(d.querySelector('main'),{childList:true});const top=createPicker('topbar'),ref=createPicker('reference');await flush();
 const controls=p=>[...p.querySelectorAll('.delmar-calendar-relative-panel button,.calendar-host button')].map(b=>b.textContent);
 assert.deepEqual(controls(top),controls(ref),locale+' matching controls');assert.equal(top.querySelectorAll('.delmar-calendar-relative-panel').length,1);assert.equal(ref.querySelectorAll('.delmar-calendar-relative-panel').length,1);
 assert.equal(ref.querySelector('.delmar-calendar-capture-bar').parentElement.className,'calendar-host');assert.equal(ref.querySelector('.delmar-calendar-tools').parentElement.className,'calendar-host');assert.equal(ref.querySelector('.bp3-menu').querySelectorAll('.delmar-calendar-capture-bar,.delmar-calendar-tools').length,0);assert.equal(w.getComputedStyle(ref.querySelector('.bp3-menu')).display,'none');
 ref.querySelectorAll('.delmar-calendar-relative-panel button')[2].click();assert.deepEqual(callbacks,[2]);assert.equal(navigations.length,0);
 top.querySelectorAll('.delmar-calendar-relative-panel button')[0].click();assert.equal(navigations.length,1);
 const input=ref.querySelector('.delmar-calendar-relative-panel input');input.value='2027-02-12';await input.onkeydown(new w.KeyboardEvent('keydown',{key:'Enter'}));assert.match(callbacks.at(-1),/Feb 12 2027/);assert.equal(navigations.length,1);
 input.onkeydown(new w.KeyboardEvent('keydown',{key:'Escape'}));assert.equal(navigations.length,1,'Escape must not open topbar calendar');
 let cell=top.querySelector('.DayPicker-Day');const hover=()=>{w.__hoverCell=cell;cell.querySelector('span span').dispatchEvent(new w.MouseEvent('mouseover',{bubbles:true}));};const tip=()=>d.getElementById('delmar-calendar-tooltip');
 hover();assert.ok(tip());await flush();assert.ok(tip(),'nested target keeps preview');d.getElementById('outside').dispatchEvent(new w.MouseEvent('mousemove',{bubbles:true}));assert.equal(tip(),null,'pointer exit immediate');
 hover();cell.dispatchEvent(new w.MouseEvent('mouseout',{bubbles:true,relatedTarget:d.getElementById('outside')}));assert.equal(tip(),null);
 for(const type of ['blur','scroll','Escape','remove']){hover();assert.ok(tip());if(type==='blur')w.dispatchEvent(new w.Event('blur'));else if(type==='scroll')d.dispatchEvent(new w.Event('scroll'));else if(type==='Escape')d.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));else top.remove();await flush();assert.equal(tip(),null,type);}
 // A language change rebuilds only enabled calendar presentation, with no graph writes.
 const cleanupKeys={'calendar-preview':'__delmarCalendarPreviewCleanup','calendar-carry':'__delmarCalendarCarryCleanup','calendar-capture':'__delmarCalendarCaptureCleanup','calendar-keyboard':'__delmarCalendarKeyboardCleanup'};
 w.FEATURES=Object.keys(cleanupKeys).map(id=>({id}));
 const runtime={activeJs:new Set(Object.keys(cleanupKeys)),cleanupFeature:feature=>w[cleanupKeys[feature.id]]?.(),startFeature:feature=>w.eval(`(${compiled.runners[feature.id].toString()})();`)};
 const nextLocale=locale==='en'?'zh':'en';w.__magLocale=nextLocale;w.refreshCalendarLanguage(runtime);await flush();
 assert.equal(ref.querySelector('.delmar-calendar-relative-panel .title').textContent,w.__copy[nextLocale].jump);
 assert.equal(ref.querySelector('.delmar-calendar-capture-bar button:nth-of-type(2)').textContent,w.__copy[nextLocale].addNote);
 ref.querySelectorAll('.delmar-calendar-relative-panel button')[0].click();assert.equal(callbacks.at(-1),0);
 // Removing preview while a frame is queued must leave no stale decorations.
 w.__delmarCalendarPreviewCleanup();w.__delmarCalendarKeyboardCleanup();w.__delmarCalendarCarryCleanup();w.__delmarCalendarCaptureCleanup();await flush();assert.equal(d.querySelectorAll('.delmar-cal-status,.delmar-cal-day,.delmar-calendar-relative-panel').length,0);assert.equal(ref.hasAttribute('data-folio-calendar-enhanced'),false);assert.notEqual(w.getComputedStyle(ref.querySelector('.bp3-menu')).display,'none');assert.deepEqual(writes,[]);attach.disconnect();w.close();
 results.push({locale,matchingControls:true,nativeReferenceCallbacks:true,hoverCleanup:true,translations:keys.length,noTaskWrites:true});
}
console.log(JSON.stringify({results},null,2));
