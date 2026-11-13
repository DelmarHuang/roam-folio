import fs from 'node:fs';import assert from 'node:assert/strict';import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),modules=process.env.FOLIO_UI_TEST_MODULES;const dep=name=>require(modules?modules+'/'+name:name);const {JSDOM}=dep('jsdom');const React=dep('react');
const compiled=fs.readFileSync('extension.js','utf8').replace(/export default[\s\S]*$/,'');
const outcomes=[];
for(const locale of ['en','zh','fr','de','es','it']){
 const dom=new JSDOM('<div class="roam-app"><div class="rm-topbar"><button id="native-tool">Tool</button></div><aside id="right-sidebar"><div class="rm-sidebar-nav flex-h-box"><span id="native-ai-wrapper" class="bp3-popover-wrapper"><span class="bp3-popover-target"><button class="rm-agent-sidebar-chat-launcher" aria-expanded="false" data-chat-open="false" aria-controls="sidebar-window-sidebar-agent-chat">AI</button></span></span><div id="native-spacer"></div><button id="native-sidebar-close">Close sidebar</button></div><div class="sidebar-content"><div class="rm-sidebar-window"><div class="window-headers">Ordinary note</div><div class="rm-sidebar-outline-wrapper">Note content</div></div></div></aside></div><div id="native-toggle-mount"></div>',{url:'https://example.test/#/app/Test',pretendToBeVisual:true,runScripts:'outside-only'});const w=dom.window,d=w.document;
 globalThis.window=w;globalThis.document=d;Object.defineProperty(globalThis,'navigator',{value:w.navigator,configurable:true});globalThis.IS_REACT_ACT_ENVIRONMENT=true;
 const client=dep('react-dom/client');const act=React.act;
 let modelessShows=0,modalShows=0;w.HTMLDialogElement.prototype.show=function(){modelessShows++;this.setAttribute('open','');};w.HTMLDialogElement.prototype.showModal=function(){modalShows++;this.setAttribute('open','');};
 w.React=React;w.ReactDOMClient=client;const alerts=[];w.alert=message=>alerts.push(message);
 w.eval(compiled+';window.__test={createRuntime,FOLIO_TOOLBAR_COPY,FEATURES};');const x=w.__test;
 const css=d.createElement('style');css.textContent=fs.readFileSync('src/styles/native-ai.css','utf8');d.head.append(css);
 const store=new Map([['folio-language',{en:'English',zh:'中文',fr:'Français',de:'Deutsch',es:'Español',it:'Italiano'}[locale]]]);let nativePanel;
 const api={settings:{get:key=>store.get(key),set:async(key,value)=>store.set(key,value),panel:{create:async panel=>{nativePanel=panel;}}}};
 let nativeClicks=0,sidebarOpens=0,writes=0;w.roamAlphaAPI={ui:{rightSidebar:{open:async()=>{sidebarOpens++;d.getElementById('right-sidebar').append(makeNative());}}},createBlock:()=>writes++,updateBlock:()=>writes++};
 const side=d.getElementById('right-sidebar');side.getBoundingClientRect=()=>({left:900,right:1400,top:0,width:500,height:900});w.innerWidth=1400;
 const makeNative=()=>{const button=d.createElement('button');button.className='rm-agent-sidebar-chat-launcher';button.setAttribute('aria-expanded','false');button.setAttribute('data-chat-open','false');button.onclick=()=>{nativeClicks++;const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.setAttribute('data-chat-open',String(open));};return button;};
 let original=d.querySelector('.rm-agent-sidebar-chat-launcher');const wire=button=>{button.onclick=()=>{nativeClicks++;const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.setAttribute('data-chat-open',String(open));d.querySelector('.rm-sidebar-nav').classList.toggle('has-agent-chat',open);};};wire(original);
 // AI and ordinary pages share a horizontal track, never a global header row.
 const header=d.createElement('div');header.className='rm-agent-chat-header';header.innerHTML='<div class="rm-agent-chat-tab-actions"><button class="rm-agent-chat-history-toggle">History</button></div><div class="rm-agent-chat-tabs"><div class="rm-agent-chat-tab is-selected"><button class="rm-agent-chat-tab-button">Chat</button><button class="rm-agent-chat-tab-close">×</button></div></div><div class="rm-agent-chat-tab-actions"><button class="rm-agent-chat-new-tab">+</button></div>';let plusClicks=0;const originalPlus=header.querySelector('.rm-agent-chat-new-tab');originalPlus.onclick=()=>{plusClicks++;const tab=d.createElement('div');tab.className='rm-agent-chat-tab';tab.textContent='Chat '+plusClicks;header.querySelector('.rm-agent-chat-tabs').append(tab);};
 d.querySelector('.rm-sidebar-nav').append(header);
 const aiCard=d.createElement('div');aiCard.className='rm-sidebar-window';aiCard.innerHTML='<div class="rm-sidebar-outline-wrapper"><section class="rm-agent-chat-panel"></section></div>';
 const track=d.querySelector('.sidebar-content');track.prepend(aiCard);let trackScroll=0;
 aiCard.getBoundingClientRect=()=>({left:918-trackScroll,right:1638-trackScroll,top:0,width:720,height:900});
 const nativeRect=w.HTMLElement.prototype.getBoundingClientRect;w.HTMLElement.prototype.getBoundingClientRect=function(){if(this.classList.contains('folio-ai-card-toolbar'))return {left:918-trackScroll,right:1638-trackScroll,top:0,width:720,height:48};return nativeRect.call(this);};
 const rt=x.createRuntime(api);rt.enabled.add('right-sidebar');rt.apply=()=>rt.toolbarUi?.sync();rt.rebuildCss=()=>rt.toolbarUi?.sync();rt.refreshTags=()=>{};
 const wait=()=>new Promise(resolve=>setTimeout(resolve,40));const step=async fn=>act(async()=>{await fn();await wait();});
 await step(()=>rt.start());assert.equal(rt.toolbarSettingsEnabled,true);assert.ok(d.getElementById('folio-settings-launcher'));assert.ok(d.getElementById('folio-ai-launcher'));assert.equal(original.parentElement.className,'bp3-popover-target','native node not moved');assert.ok(original.closest('#native-ai-wrapper'));assert.equal(original.getAttribute('data-folio-ai-proxied'),'true');assert.equal(w.getComputedStyle(d.getElementById('native-ai-wrapper')).display,'none','empty native popover wrapper consumes no sidebar row');
 assert.ok(aiCard.querySelector(':scope > .window-headers.folio-ai-card-toolbar'),'AI has a real card toolbar slot');assert.equal(header.getAttribute('data-folio-ai-card-header'),'true');assert.equal(header.style.getPropertyValue('--folio-ai-header-left'),'18px');assert.equal(header.style.getPropertyValue('--folio-ai-header-width'),'674px');
 assert.equal(header.parentElement,d.querySelector('.rm-sidebar-nav'),'native header stays React-owned');
 assert.equal(side.style.getPropertyValue('--rs-viewport-height'),'');assert.equal(side.style.height,'');
 await step(()=>{trackScroll=732;track.dispatchEvent(new w.Event('scroll'));});assert.equal(header.style.getPropertyValue('--folio-ai-header-left'),'-714px','AI header moves offscreen with its card');
 await step(()=>{trackScroll=0;track.dispatchEvent(new w.Event('scroll'));});assert.equal(header.style.getPropertyValue('--folio-ai-header-left'),'18px');

 await step(()=>originalPlus.click());assert.equal(plusClicks,1);assert.equal(header.querySelectorAll('.rm-agent-chat-tab').length,2);assert.equal(header.querySelector('.rm-agent-chat-new-tab'),originalPlus,'native new-chat handler and node retained');
 await step(()=>d.getElementById('folio-ai-launcher').click());assert.equal(nativeClicks,1);assert.equal(d.getElementById('folio-ai-launcher').getAttribute('aria-expanded'),'true');
 await step(()=>original.click());assert.equal(nativeClicks,2);assert.equal(d.getElementById('folio-ai-launcher').getAttribute('aria-expanded'),'false');
 // Native rerender: replace its node and keep one proxy, with the real handler.
 const replacement=makeNative();await step(()=>original.replaceWith(replacement));original=replacement;await step(()=>d.getElementById('folio-ai-launcher').click());assert.equal(nativeClicks,3);assert.equal(d.querySelectorAll('#folio-ai-launcher').length,1);
 // Main toolbar replacement recreates only owned buttons.
 const bar=d.createElement('div');bar.className='rm-topbar';bar.innerHTML='<button id="fresh-native">Fresh native</button>';await step(()=>d.querySelector('.rm-topbar').replaceWith(bar));assert.equal(bar.querySelectorAll('#folio-settings-launcher').length,1);assert.equal(bar.querySelectorAll('#folio-ai-launcher').length,1);assert.ok(d.getElementById('fresh-native'));
 await step(()=>d.getElementById('folio-settings-launcher').click());assert.ok(d.getElementById('folio-settings-dialog'));assert.equal(d.querySelector('.folio-settings-dialog-title').textContent,x.FOLIO_TOOLBAR_COPY[locale].settings);assert.equal(alerts.length,0);assert.ok(d.querySelector('#folio-settings-dialog.rm-modal-dialog--settings .rm-settings .rm-settings-panel__description'));assert.equal(d.querySelectorAll('#folio-settings-dialog .bp3-switch input').length,4);
 assert.equal(modelessShows,1);assert.equal(modalShows,0);assert.equal(d.getElementById('folio-settings-dialog').getAttribute('aria-modal'),'false');
 const floating=d.getElementById('folio-settings-dialog'),grab=floating.querySelector('.folio-settings-dialog-header');
 floating.getBoundingClientRect=()=>({left:parseFloat(floating.style.left)||0,top:parseFloat(floating.style.top)||0,width:560,height:350});
 const pointer=(type,x,y,target=grab)=>{const event=new w.MouseEvent(type,{clientX:x,clientY:y,button:0,bubbles:true,cancelable:true});Object.defineProperty(event,'pointerId',{value:7});target.dispatchEvent(event);};
 floating.style.left='100px';floating.style.top='100px';pointer('pointerdown',110,110);pointer('pointermove',260,180);assert.equal(floating.style.left,'250px');assert.equal(floating.style.top,'170px');pointer('pointerup',260,180);assert.equal(floating.hasAttribute('data-dragging'),false);
 pointer('pointerdown',260,180);pointer('pointermove',5000,5000);pointer('pointerup',5000,5000);w.innerWidth=900;w.innerHeight=640;w.dispatchEvent(new w.Event('resize'));assert.equal(floating.style.left,'332px');assert.equal(floating.style.top,'282px');w.innerWidth=1400;w.innerHeight=768;
 d.getElementById('fresh-native').click();assert.ok(floating.isConnected,'clicking the page keeps the modeless panel open');
 assert.equal(rt.settingsDefinitions[0].id,'folio-toolbar-settings');
 const NativeToggle=nativePanel.settings[0].action.component;const nativeRoot=client.createRoot(d.getElementById('native-toggle-mount'));await step(()=>nativeRoot.render(React.createElement(NativeToggle)));
 const toggle=()=>d.querySelector('#folio-settings-dialog input[role="switch"]');assert.equal(toggle().checked,true);await step(()=>toggle().click());assert.equal(store.get('folio-toolbar-settings'),false);assert.equal(d.getElementById('folio-settings-launcher'),null);assert.ok(d.getElementById('folio-settings-dialog'),'dialog remains usable after hiding its entry');assert.equal(d.querySelector('#native-toggle-mount input').checked,false);
 await step(()=>d.querySelector('#native-toggle-mount input').click());assert.ok(d.getElementById('folio-settings-launcher'));assert.equal(toggle().checked,true);
 // Every functional settings section and its saved controls are reachable.
 const nav=()=>d.querySelector('#folio-settings-dialog nav');assert.equal(nav().querySelectorAll('button').length,8);
 await step(()=>nav().querySelectorAll('button')[7].click());const excluded=d.querySelector('#folio-settings-dialog #folio-random-excluded-pages');assert.equal(excluded.value,'SmartBlock\nroam/templates');
 await step(()=>nav().querySelectorAll('button')[3].click());assert.ok([...d.querySelectorAll('#folio-settings-dialog input')].some(el=>el.type==='number'&&el.value==='420'));
 const switches=[...d.querySelectorAll('#folio-settings-dialog .folio-settings-global-control input[role="switch"]')];assert.equal(switches.length,4);await step(()=>switches[1].click());assert.equal(rt.themeEnabled,false);assert.equal(store.get('folio-theme-enabled'),false);assert.equal(floating.getAttribute('data-folio-theme'),'native');assert.ok(w.getComputedStyle(floating).getPropertyValue('--set-ink'));d.body.classList.add('bp3-dark');assert.ok(w.getComputedStyle(floating).getPropertyValue('--mag-paper').includes('#20242c'));d.body.classList.remove('bp3-dark');assert.equal(w.getComputedStyle(d.getElementById('folio-topbar-controls')).flexShrink,'0');assert.equal(w.getComputedStyle(d.getElementById('folio-topbar-controls')).overflow,'visible');
 await step(()=>d.querySelector('#folio-settings-dialog').dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true})));assert.equal(d.getElementById('folio-settings-dialog'),null);assert.equal(d.getElementById('folio-settings-launcher').getAttribute('aria-expanded'),'false');
 // Hover clears on click and can be re-armed without changing the original actions.
 const sidebarToggle=d.getElementById('native-sidebar-close');sidebarToggle.setAttribute('data-folio-sidebar-role','close');
 for(const control of [d.getElementById('folio-settings-launcher'),d.getElementById('folio-ai-launcher'),sidebarToggle]){
  await step(()=>control.dispatchEvent(new w.MouseEvent('pointerover',{bubbles:true})));assert.equal(control.hasAttribute('data-folio-hover-dismissed'),false);
  await step(()=>control.click());assert.equal(control.getAttribute('data-folio-hover-dismissed'),'true');
  if(d.getElementById('folio-settings-dialog'))await step(()=>rt.toolbarUi.closePanel());
  await step(()=>control.dispatchEvent(new w.MouseEvent('pointerout',{bubbles:true})));assert.equal(control.hasAttribute('data-folio-hover-dismissed'),false);
 }
 sidebarToggle.click();assert.equal(sidebarToggle.getAttribute('data-folio-hover-dismissed'),'true');
 // A native sidebar API promise may settle after its transition; forwarding must not wait for it.
 side.getBoundingClientRect=()=>({left:1500,right:2000,top:0,width:500,height:900});
 await step(()=>original.remove());let recreated;
 w.roamAlphaAPI.ui.rightSidebar.open=()=>{sidebarOpens++;recreated=makeNative();d.querySelector('.rm-sidebar-nav').prepend(recreated);return new Promise(()=>{});};
 const beforeClicks=nativeClicks;d.getElementById('folio-ai-launcher').click();assert.equal(nativeClicks,beforeClicks+1,'native AI receives the click before the open promise settles');original=recreated;
 side.getBoundingClientRect=()=>({left:900,right:1400,top:0,width:500,height:900});await step(()=>{});
 // No graph or broad toolbar work during a PDF render storm.
 const query=d.querySelector.bind(d);let queries=0;d.querySelector=(...args)=>{queries++;return query(...args);};await step(()=>{const pdf=d.createElement('div');pdf.className='rm-pdf-container';for(let i=0;i<500;i++)pdf.append(d.createElement('canvas'));d.body.append(pdf);});d.querySelector=query;assert.equal(queries,0,'PDF canvas insertion does not rescan the page');assert.equal(writes,0);
 await step(()=>aiCard.remove());assert.equal(header.hasAttribute('data-folio-ai-card-header'),false);assert.equal(header.style.getPropertyValue('--folio-ai-header-left'),'');assert.ok(track.querySelector('.rm-sidebar-window'),'ordinary page remains');

 await step(()=>{nativeRoot.unmount();rt.destroy();});assert.equal(d.getElementById('folio-settings-launcher'),null);assert.equal(d.getElementById('folio-ai-launcher'),null);assert.equal(original.hasAttribute('data-folio-ai-proxied'),false);assert.equal(d.getElementById('folio-toolbar-ui-style'),null);assert.equal(sidebarToggle.hasAttribute('data-folio-hover-dismissed'),false);
 outcomes.push({locale,hoverClickAndReentry:true,modelessPanel:true,dragAndResizeClamp:true,outsideClickKeepsOpen:true,aiHeaderFollowsCard:true,ordinarySidebarGeometryUntouched:true,allSettingsReachable:true,bothTogglesSynced:true,nativeAiCallbacks:true,rerenderRecovery:true,zeroGraphWrites:true,pdfQueries:queries});w.close();
}
console.log(JSON.stringify({outcomes},null,2));
