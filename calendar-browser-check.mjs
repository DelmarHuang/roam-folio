import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);const {chromium}=require('playwright');const context={};vm.createContext(context);vm.runInContext(fs.readFileSync('extension.js','utf8').replace(/export default[\s\S]*$/,'')+';globalThis.runners=MAGAZINE_RUNNERS;',context);
const browser=await chromium.launch({executablePath:process.env.FOLIO_TEST_CHROMIUM||'/usr/bin/chromium',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});const page=await browser.newPage({viewport:{width:1400,height:1000}});const errors=[];page.on('pageerror',error=>errors.push(error.message));await page.route('**/*',route=>route.abort());
const results=[];
for(const locale of ['en','zh','fr','de','es','it']){
 await page.setContent(`<style>body{font:14px sans-serif;margin:24px}.row{display:flex;gap:25px}.bp3-datepicker{position:relative;display:flex;max-width:640px;border:1px solid #ccc}.host{width:320px}.DayPicker-Day{display:inline-block;padding:15px!important;border:1px solid #aaa}.delmar-calendar-relative-panel{flex-shrink:0}.empty{height:50px}.bp3-menu{margin:0;padding:0}.bp3-datepicker select{width:48%}</style><div class="rm-topbar"><button><span class="bp3-icon-calendar">Calendar</span></button></div><div class="row"></div><div id="outside">Outside date</div>`);
 await page.addScriptTag({content:fs.readFileSync('src/calendar.js','utf8')+';window.__copy=CALENDAR_COPY;window.__calendarText=calendarText;'});
 await page.evaluate(locale=>{
  window.__magLocale=locale;window.__nativePicks=[];window.__opened=[];window.__writes=[];
  window.__magCore={watch:(name,callback)=>new MutationObserver(callback)};
  const title=date=>date.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}).replace(/(\d+),/,'$1th,');
  window.roamAlphaAPI={q:(query,arg)=>{if(query.includes('count ?block'))return 1;if(query.includes('?uid ?text'))return arg?.includes('13th')?[]:[['note00001','A short preview'],['todo00001','{{[[TODO]]}} example']];return 'exists';},util:{dateToPageTitle:title,dateToPageUid:d=>d.toISOString().slice(0,10),pageTitleToDate:t=>new Date(t.replace(/(\d+)(st|nd|rd|th)/,'$1')),generateUID:()=> 'test00001'},ui:{mainWindow:{openPage:value=>window.__opened.push(value),openDailyNotes:()=>{}},commandPalette:{addCommand:()=>{},removeCommand:()=>{}}},createPage:()=>window.__writes.push('page'),createBlock:()=>window.__writes.push('block'),moveBlock:()=>window.__writes.push('move')};
  window.__createPicker=(kind)=>{
   const picker=document.createElement('div');picker.className='bp3-datepicker';picker.id=kind;
   if(kind==='reference'){const list=document.createElement('ul');list.className='bp3-menu bp3-daterangepicker-shortcuts';for(let i=0;i<8;i++){const li=document.createElement('li');const a=document.createElement('a');a.className='bp3-menu-item';a.textContent='Native '+i;a.onclick=()=>window.__nativePicks.push(i);li.append(a);list.append(li);}picker.append(list);}
   const host=document.createElement('div');host.className='host';host.innerHTML=`<div class="DayPicker"><div class="bp3-datepicker-year-select"><select>${[2026,2027,2028].map(y=>`<option value="${y}">${y}</option>`).join('')}</select></div><div class="bp3-datepicker-month-select"><select>${Array.from({length:12},(_,i)=>`<option value="${i}">${i+1}</option>`).join('')}</select></div><div class="cells"></div></div>`;picker.append(host);
   const render=()=>{const y=Number(host.querySelector('.bp3-datepicker-year-select select').value),m=Number(host.querySelector('.bp3-datepicker-month-select select').value);host.querySelector('.cells').innerHTML=[11,12,13].map(day=>`<div class="DayPicker-Day" tabindex="0" aria-label="${new Date(y,m,day).toDateString()}" aria-disabled="false"><span class="bp3-datepicker-day-wrapper"><span>${day}</span></span></div>`).join('');for(const cell of host.querySelectorAll('.DayPicker-Day'))cell.onclick=()=>window.__nativePicks.push(cell.getAttribute('aria-label'));};
   host.querySelectorAll('select').forEach(select=>select.onchange=render);host.querySelector('.bp3-datepicker-month-select select').value='10';render();document.querySelector('.row').append(picker);return picker;
  };
  window.__attachObserver?.disconnect();window.__attachObserver=new MutationObserver(records=>{if(records.some(r=>[...r.addedNodes].some(n=>n instanceof Element&&(n.matches('.bp3-datepicker')||n.querySelector('.bp3-datepicker')))))window.__folioAttachCalendar?.();});window.__attachObserver.observe(document.body,{childList:true,subtree:true});
 },locale);
 for(const name of ['calendar-keyboard','calendar-capture','calendar-carry','calendar-preview'])await page.addScriptTag({content:`(${context.runners[name].toString()})();`});
 await page.evaluate(()=>{window.__createPicker('topbar');window.__createPicker('reference');});
 await page.locator('#reference .delmar-calendar-relative-panel').waitFor();
 const snapshot=await page.evaluate(()=>[...document.querySelectorAll('.bp3-datepicker')].map(p=>({id:p.id,shortcutCount:p.querySelectorAll('.delmar-calendar-relative-panel').length,quick:[...p.querySelectorAll('.delmar-calendar-relative-panel button')].map(b=>b.textContent),capture:p.querySelector('.delmar-calendar-capture-bar')?.parentElement.className,carry:p.querySelector('.delmar-calendar-tools')?.parentElement.className,buttons:[...p.querySelectorAll('.host button')].map(b=>b.textContent),hidden:p.id!=='reference'||getComputedStyle(p.querySelector('.bp3-daterangepicker-shortcuts')).display==='none',legacyChildren:p.querySelector('.bp3-daterangepicker-shortcuts')?.querySelectorAll('.delmar-calendar-capture-bar,.delmar-calendar-tools').length||0})));
 assert.deepEqual(snapshot[0].quick,snapshot[1].quick);assert.deepEqual(snapshot[0].buttons,snapshot[1].buttons);assert.ok(snapshot.every(p=>p.shortcutCount===1&&p.capture==='host'&&p.carry==='host'&&p.hidden&&p.legacyChildren===0));
 // Original reference callbacks receive quick choices; no page navigation replaces the reference action.
 await page.locator('#reference .delmar-calendar-relative-panel button').nth(2).click();assert.deepEqual(await page.evaluate(()=>window.__nativePicks),[2]);assert.equal(await page.evaluate(()=>window.__opened.length),0);
 await page.locator('#topbar .delmar-calendar-relative-panel button').nth(0).click();assert.equal(await page.evaluate(()=>window.__opened.length),1);
 // Explicit date entry selects a native calendar cell, preserving reference replacement.
 await page.locator('#reference .delmar-calendar-relative-panel input').fill('2027-02-12');await page.locator('#reference .delmar-calendar-relative-panel input').press('Enter');await page.waitForFunction(()=>window.__nativePicks.length===2);assert.match((await page.evaluate(()=>window.__nativePicks))[1],/Feb 12 2027/);
 const box=await page.locator('#topbar .DayPicker-Day').first().boundingBox();await page.mouse.move(box.x+5,box.y+5);await page.locator('#delmar-calendar-tooltip').waitFor();
 // Within-cell children retain one tooltip; pointer exit removes it immediately.
 await page.mouse.move(box.x+box.width/2,box.y+box.height/2);assert.equal(await page.locator('#delmar-calendar-tooltip').count(),1);await page.mouse.move(1350,950);assert.equal(await page.locator('#delmar-calendar-tooltip').count(),0);
 for(const close of ['blur','scroll','Escape','remove']){
  const cell=await page.locator('#topbar .DayPicker-Day').first().boundingBox();await page.mouse.move(cell.x+4,cell.y+4);await page.locator('#delmar-calendar-tooltip').waitFor();
  await page.evaluate(close=>{if(close==='blur')window.dispatchEvent(new Event('blur'));else if(close==='scroll')document.dispatchEvent(new Event('scroll'));else if(close==='Escape')document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));else document.getElementById('topbar').remove();},close);
  await page.locator('#delmar-calendar-tooltip').waitFor({state:'detached'});await page.mouse.move(1350,950);
 }
 await page.evaluate(()=>{window.__delmarCalendarKeyboardCleanup();window.__delmarCalendarPreviewCleanup();window.__delmarCalendarCarryCleanup();window.__delmarCalendarCaptureCleanup();window.__attachObserver.disconnect();});
 assert.equal(await page.locator('#reference [data-folio-calendar-enhanced]').count(),0);assert.notEqual(await page.locator('#reference .bp3-daterangepicker-shortcuts').evaluate(el=>getComputedStyle(el).display),'none');assert.deepEqual(await page.evaluate(()=>window.__writes),[]);
 results.push({locale,matchingLayouts:true,nativeCallbacks:true,tooltipCleanup:true,noTaskMutations:true});
}
assert.deepEqual(errors,[]);console.log(JSON.stringify({results,pageErrors:errors},null,2));await browser.close();
