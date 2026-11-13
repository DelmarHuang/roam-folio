/* Folio-owned chrome. All settings actions are shared with the native page. */
const FOLIO_TOOLBAR_COPY = {
 en:{move:'Drag the title bar to move this panel',settings:'Folio settings',toggle:'Show the Folio toolbar button',help:'Open all Folio settings from the top bar. You can re-enable this button here after hiding it.',close:'Close settings',ai:'Toggle AI chat',aiOpen:'Open AI chat',aiClose:'Close AI chat',unavailable:'Open Extension Settings → Folio to change settings in this Roam version.'},
 zh:{move:'拖动标题栏移动面板',settings:'Folio 设置',toggle:'显示 Folio 顶栏按钮',help:'从顶栏打开全部 Folio 设置。关闭图标后，仍可在这里重新开启。',close:'关闭设置',ai:'切换 AI 聊天',aiOpen:'打开 AI 聊天',aiClose:'关闭 AI 聊天',unavailable:'请从 Extension Settings → Folio 修改设置。'},
 fr:{move:'Faites glisser le titre pour déplacer ce panneau',settings:'Réglages Folio',toggle:'Afficher le bouton Folio dans la barre supérieure',help:'Accédez à tous les réglages Folio depuis la barre supérieure. Vous pouvez réactiver ici le bouton masqué.',close:'Fermer les réglages',ai:'Afficher ou masquer le chat IA',aiOpen:'Ouvrir le chat IA',aiClose:'Fermer le chat IA',unavailable:'Ouvrez Extension Settings → Folio pour modifier les réglages dans cette version de Roam.'},
 de:{move:'Titelleiste ziehen, um dieses Fenster zu verschieben',settings:'Folio-Einstellungen',toggle:'Folio-Schaltfläche in der oberen Leiste anzeigen',help:'Alle Folio-Einstellungen über die obere Leiste öffnen. Eine ausgeblendete Schaltfläche lässt sich hier wieder aktivieren.',close:'Einstellungen schließen',ai:'KI-Chat umschalten',aiOpen:'KI-Chat öffnen',aiClose:'KI-Chat schließen',unavailable:'Öffnen Sie Extension Settings → Folio, um die Einstellungen in dieser Roam-Version zu ändern.'},
 es:{move:'Arrastre la barra de título para mover el panel',settings:'Ajustes de Folio',toggle:'Mostrar el botón Folio en la barra superior',help:'Abra todos los ajustes de Folio desde la barra superior. Puede volver a activar aquí el botón oculto.',close:'Cerrar ajustes',ai:'Mostrar u ocultar el chat de IA',aiOpen:'Abrir el chat de IA',aiClose:'Cerrar el chat de IA',unavailable:'Abra Extension Settings → Folio para cambiar los ajustes en esta versión de Roam.'},
 it:{move:'Trascina la barra del titolo per spostare il pannello',settings:'Impostazioni Folio',toggle:'Mostra il pulsante Folio nella barra superiore',help:'Apri tutte le impostazioni Folio dalla barra superiore. Puoi riattivare qui il pulsante nascosto.',close:'Chiudi impostazioni',ai:'Mostra o nascondi la chat IA',aiOpen:'Apri chat IA',aiClose:'Chiudi chat IA',unavailable:'Apri Extension Settings → Folio per modificare le impostazioni in questa versione di Roam.'}
};
const folioToolbarCopy = runtime => FOLIO_TOOLBAR_COPY[runtime.locale] || FOLIO_TOOLBAR_COPY.en;
function setFolioToolbarVisibility(runtime, value) {
 runtime.toolbarSettingsEnabled = Boolean(value);
 void runtime.extensionAPI.settings.set(SETTING_PREFIX+'toolbar-settings', runtime.toolbarSettingsEnabled);
 runtime.toolbarUi?.sync();
 if (typeof window.dispatchEvent === 'function') window.dispatchEvent(new Event('folio:toolbar-visibility'));
}
function folioToolbarSetting(runtime) {
 const copy=folioToolbarCopy(runtime);
 return {id:SETTING_PREFIX+'toolbar-settings',name:copy.toggle,description:copy.help,action:{type:'reactComponent',component:()=>{
  const React=window.React;if(!React)return null;
  const [enabled,setEnabled]=React.useState(runtime.toolbarSettingsEnabled);
  React.useEffect(()=>{const update=()=>setEnabled(runtime.toolbarSettingsEnabled);window.addEventListener('folio:toolbar-visibility',update);return()=>window.removeEventListener('folio:toolbar-visibility',update);},[]);
  return React.createElement('label',{className:'bp3-control bp3-switch'},React.createElement('input',{type:'checkbox',role:'switch','aria-label':copy.toggle,checked:enabled,onChange:event=>setFolioToolbarVisibility(runtime,event.target.checked)}),React.createElement('span',{className:'bp3-control-indicator','aria-hidden':'true'}));
 }}};
}
function FolioSettingsSurface({runtime}) {
 const React=window.React,e=React.createElement;const [,update]=React.useState(0);
 const definitions=runtime.settingsDefinitions||[];
 const values={'folio-theme-enabled':runtime.themeEnabled,'folio-pause-css':runtime.cssPaused,'folio-pause-interactive':runtime.paused};
 return e('div',null,definitions.map((setting,index)=>{
  const action=setting.action;if(!action)return null;
  let control;
  if(action.type==='reactComponent')control=e(action.component);
  else if(action.type==='switch')control=e('label',{className:'bp3-control bp3-switch'},e('input',{type:'checkbox',role:'switch','aria-label':setting.name,checked:Boolean(values[setting.id]??runtime.extensionAPI.settings.get(setting.id)),onChange:event=>{action.onChange(event);update(n=>n+1);}}),e('span',{className:'bp3-control-indicator','aria-hidden':'true'}));
  else if(action.type==='select')control=e('select',{'aria-label':setting.name,value:runtime.languageChoice,onChange:event=>{action.onChange(event.target.value);update(n=>n+1);}},action.items.map(item=>e('option',{key:item,value:item},item)));
  else if(action.type==='button')control=e('button',{type:'button',className:'bp3-button',onClick:async()=>{await action.onClick();update(n=>n+1);}},action.content);
  else return null;
  if(!setting.name&&!setting.description)return e('div',{key:setting.id,className:'rm-settings-panel__setting folio-settings-row'},control);
  return e('div',{key:setting.id,className:'rm-settings-panel__setting rm-settings-panel__section folio-settings-row'+(index===0?' rm-settings-panel__section--top':'')},e('div',{className:'folio-settings-global-control'},e('div',{className:'rm-settings-panel__setting-content',title:setting.description||''},e('h4',{className:'rm-settings-panel__setting-name'},setting.name),setting.description?e('div',{className:'rm-settings-panel__description'},setting.description):null),e('div',{className:'rm-settings-panel__setting-action'},control))); 
 }));
}
function registerFolioToolbar(runtime) {
 if(typeof document.createElement!=='function'||!document.body||typeof MutationObserver==='undefined')return null;
 let topbar=null,buttonGroup=null,button=null,aiButton=null,nativeAi=null,aiObserver=null,frame=0,dialog=null,dialogTitle=null,root=null,content=null,legacyRender=false,stopped=false,knownAi=false,pendingAi=false,pendingTimer=0;
 const touched=new Map();
 const hoverSelector='#folio-settings-launcher,#folio-ai-launcher,[data-folio-sidebar-role]';
 const dismissedHover=new Set();
 const hoverTarget=event=>event.target instanceof Element?event.target.closest(hoverSelector):null;
 const resetHover=event=>{const target=hoverTarget(event);if(!target||target.contains(event.relatedTarget))return;target.removeAttribute('data-folio-hover-dismissed');dismissedHover.delete(target);};
 const dismissHover=event=>{const target=hoverTarget(event);if(!target)return;target.setAttribute('data-folio-hover-dismissed','true');dismissedHover.add(target);for(const old of dismissedHover)if(!old.isConnected){old.removeAttribute('data-folio-hover-dismissed');dismissedHover.delete(old);}};
 document.addEventListener('pointerover',resetHover,true);document.addEventListener('pointerout',resetHover,true);document.addEventListener('click',dismissHover,true);

 let panelPosition=null,panelDrag=null,panelSizeObserver=null;
 const placePanel=(left,top)=>{
  if(!dialog)return;const box=dialog.getBoundingClientRect();
  const x=Math.max(8,Math.min(left,Math.max(8,window.innerWidth-box.width-8)));
  const y=Math.max(8,Math.min(top,Math.max(8,window.innerHeight-box.height-8)));
  if(dialog.style.left!==x+'px')dialog.style.left=x+'px';if(dialog.style.top!==y+'px')dialog.style.top=y+'px';panelPosition={left:x,top:y};
 };
 const keepPanelVisible=()=>{if(dialog&&panelPosition)placePanel(panelPosition.left,panelPosition.top);};
 window.addEventListener('resize',keepPanelVisible);

 let aiHeader=null,aiCard=null,aiTrack=null,aiSidebar=null,aiSlot=null,ownAiSlot=false;
 const headerPriors=new Map();
 const headerResize=typeof ResizeObserver==='undefined'?null:new ResizeObserver(()=>schedule());
 const clearHeader=()=>{
  headerResize?.disconnect();if(ownAiSlot)aiSlot?.remove();aiSlot=null;ownAiSlot=false;aiTrack?.removeEventListener('scroll',schedule);aiTrack=null;aiCard=null;aiSidebar=null;
  for(const [element,prior] of headerPriors){
   if(prior.mark===null)element.removeAttribute('data-folio-ai-card-header');else element.setAttribute('data-folio-ai-card-header',prior.mark);
   for(const [key,value,priority] of prior.styles){if(value)element.style.setProperty(key,value,priority);else element.style.removeProperty(key);}
  }
  headerPriors.clear();aiHeader=null;
 };
 const syncHeader=()=>{
  if(!runtime.enabled.has('right-sidebar')||runtime.paused||runtime.cssPaused){clearHeader();return;}
  const side=document.querySelector('#right-sidebar'),header=side?.querySelector(':scope > .rm-sidebar-nav > .rm-agent-chat-header');
  const panel=side?.querySelector('.rm-agent-chat-panel');
  const card=panel?.closest('.rm-sidebar-window');const track=card?.closest('.sidebar-content');
  if(!header||!card||!track){clearHeader();return;}
  if(header!==aiHeader||card!==aiCard||track!==aiTrack||side!==aiSidebar||!aiSlot?.isConnected){
   clearHeader();aiHeader=header;aiCard=card;aiTrack=track;aiSidebar=side;
   headerPriors.set(header,{mark:header.getAttribute('data-folio-ai-card-header'),styles:['--folio-ai-header-left','--folio-ai-header-width','--folio-ai-header-top'].map(key=>[key,header.style.getPropertyValue(key),header.style.getPropertyPriority(key)])});
   aiSlot=card.querySelector(':scope > .window-headers');
   if(!aiSlot){aiSlot=document.createElement('div');aiSlot.className='window-headers folio-ai-card-toolbar';aiSlot.setAttribute('aria-hidden','true');const close=document.createElement('button');close.type='button';close.className='bp3-button bp3-minimal bp3-icon-cross';close.setAttribute('aria-label',copy().aiClose);close.title=copy().aiClose;close.onclick=()=>{nativeAi?.click();schedule();};aiSlot.append(close);card.prepend(aiSlot);ownAiSlot=true;}
   track.addEventListener('scroll',schedule,{passive:true});headerResize?.observe(card);headerResize?.observe(side);headerResize?.observe(aiSlot);
  }
  if(ownAiSlot){const close=aiSlot.querySelector('button');set(close,'aria-label',copy().aiClose);set(close,'title',copy().aiClose);}
  const c=aiSlot.getBoundingClientRect(),b=side.getBoundingClientRect();
  set(header,'data-folio-ai-card-header','true');
  for(const [key,value] of [['--folio-ai-header-top',(c.top-b.top)+'px'],['--folio-ai-header-left',(c.left-b.left)+'px'],['--folio-ai-header-width',Math.max(0,c.width-46)+'px']])if(header.style.getPropertyValue(key)!==value)header.style.setProperty(key,value);
 };
 const buttonHost=()=>{if(!buttonGroup){buttonGroup=document.createElement('div');buttonGroup.id='folio-topbar-controls';}if(buttonGroup.parentElement!==topbar)topbar.append(buttonGroup);return buttonGroup;};
 const copy=()=>folioToolbarCopy(runtime);
 const set=(el,name,value)=>{if(el.getAttribute(name)!==String(value))el.setAttribute(name,String(value));};
 const icon=(paths)=>{const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 16 16');svg.setAttribute('width','16');svg.setAttribute('height','16');svg.setAttribute('aria-hidden','true');for(const [tag,attrs] of paths){const node=document.createElementNS(svg.namespaceURI,tag);for(const [key,value]of Object.entries(attrs))node.setAttribute(key,value);svg.append(node);}return svg;};
 const makeButton=id=>{const el=document.createElement('button');el.type='button';el.id=id;el.className='bp3-button bp3-minimal bp3-small';return el;};
 const ensureStyle=()=>{if(document.getElementById('folio-toolbar-ui-style'))return;const style=document.createElement('style');style.id='folio-toolbar-ui-style';style.textContent=MAGAZINE_CSS['toolbar-panel'];document.head.append(style);};
 const closePanel=()=>{if(!dialog)return;panelSizeObserver?.disconnect();panelSizeObserver=null;panelDrag=null;const previous=button;if(root){root.unmount();root=null;}else if(legacyRender)window.ReactDOM?.unmountComponentAtNode?.(content);legacyRender=false;dialog.remove();dialog=null;dialogTitle=null;content=null;button?.setAttribute('aria-expanded','false');if(previous?.isConnected)previous.focus();};
 const renderPanel=()=>{if(!dialog)return;dialogTitle.textContent=copy().settings;const bar=dialog.querySelector('.folio-settings-dialog-header');if(bar){bar.title=copy().move;}dialog.querySelector('.folio-settings-dialog-close')?.setAttribute('aria-label',copy().close);const element=window.React.createElement(FolioSettingsSurface,{runtime});if(root){if(typeof window.ReactDOM?.flushSync==='function')window.ReactDOM.flushSync(()=>root.render(element));else root.render(element);}else if(legacyRender)window.ReactDOM.render(element,content);};
 const openPanel=()=>{
  if(dialog){closePanel();return;}
  const createRoot=window.ReactDOM?.createRoot||window.ReactDOMClient?.createRoot;
  if(!window.React||(!createRoot&&typeof window.ReactDOM?.render!=='function')){window.alert?.(copy().unavailable);return;}
  ensureStyle();dialog=document.createElement('dialog');dialog.id='folio-settings-dialog';dialog.className='rm-modal-dialog rm-modal-dialog--settings';dialog.setAttribute('aria-labelledby','folio-settings-dialog-title');dialog.setAttribute('aria-modal','false');dialog.setAttribute('data-folio-theme',runtime.themeEnabled&&!runtime.cssPaused?'folio':'native');
  const header=document.createElement('div');header.className='folio-settings-dialog-header';header.title=copy().move;dialogTitle=document.createElement('h2');dialogTitle.id='folio-settings-dialog-title';dialogTitle.className='folio-settings-dialog-title';
  const close=document.createElement('button');close.type='button';close.className='folio-settings-dialog-close';close.textContent='×';close.setAttribute('aria-label',copy().close);close.onclick=closePanel;
  header.append(dialogTitle,close);content=document.createElement('div');content.className='rm-settings folio-settings-dialog-content';dialog.append(header,content);document.body.append(dialog);
  if(createRoot)root=createRoot.call(window.ReactDOM||window.ReactDOMClient,content);else legacyRender=true;
  renderPanel();dialog.addEventListener('cancel',event=>{event.preventDefault();closePanel();});dialog.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();event.stopPropagation();closePanel();}});
  header.addEventListener('pointerdown',event=>{
   if(event.button!==0||event.target.closest('button,input,select,textarea,a'))return;
   const box=dialog.getBoundingClientRect();panelDrag={id:event.pointerId,x:event.clientX,y:event.clientY,left:box.left,top:box.top};
   header.setPointerCapture?.(event.pointerId);dialog.setAttribute('data-dragging','true');event.preventDefault();
  });
  header.addEventListener('pointermove',event=>{if(!panelDrag||panelDrag.id!==event.pointerId)return;placePanel(panelDrag.left+event.clientX-panelDrag.x,panelDrag.top+event.clientY-panelDrag.y);});
  const endDrag=event=>{if(!panelDrag||panelDrag.id!==event.pointerId)return;if(header.hasPointerCapture?.(event.pointerId))header.releasePointerCapture(event.pointerId);panelDrag=null;dialog?.removeAttribute('data-dragging');};
  header.addEventListener('pointerup',endDrag);header.addEventListener('pointercancel',endDrag);header.addEventListener('lostpointercapture',endDrag);
  if(typeof dialog.show==='function')dialog.show();else dialog.setAttribute('open','');
  const anchor=button?.getBoundingClientRect();placePanel(panelPosition?.left??((anchor?.right??window.innerWidth)-dialog.getBoundingClientRect().width),panelPosition?.top??((anchor?.bottom??48)+8));
  if(typeof ResizeObserver!=='undefined'){panelSizeObserver=new ResizeObserver(keepPanelVisible);panelSizeObserver.observe(dialog);}
  button?.setAttribute('aria-expanded','true');close.focus();
 };
 const restoreAi=()=>{aiObserver?.disconnect();aiObserver=null;for(const [element,previous]of touched){if(previous===null)element.removeAttribute('data-folio-ai-proxied');else element.setAttribute('data-folio-ai-proxied',previous);}touched.clear();nativeAi=null;aiButton?.remove();aiButton=null;pendingAi=false;if(pendingTimer)clearTimeout(pendingTimer);pendingTimer=0;};
 const schedule=()=>{if(!stopped&&!frame)frame=requestAnimationFrame(()=>{frame=0;sync();});};
 const proxyAi=()=>{
  const native=document.querySelector('.rm-agent-sidebar-chat-launcher');
  if(native){native.click();sync();return;}
  const open=window.roamAlphaAPI?.ui?.rightSidebar?.open;if(typeof open!=='function'||pendingAi)return;
  pendingAi=true;
  // Do not wait for Roam's sidebar transition promise before forwarding the click.
  try {Promise.resolve(open()).catch(error=>{pendingAi=false;console.warn('[Folio] AI sidebar could not open',error);});sync();}
  catch(error){pendingAi=false;console.warn('[Folio] AI sidebar could not open',error);}
  if(pendingAi)pendingTimer=setTimeout(()=>{pendingAi=false;pendingTimer=0;},3000);
 };
 const syncAi=()=>{
  if(!runtime.featureValues.get('sidebar-toggles')||runtime.paused||runtime.cssPaused||!topbar){restoreAi();return;}
  const next=document.querySelector('.rm-agent-sidebar-chat-launcher');
  if(next!==nativeAi){aiObserver?.disconnect();nativeAi=next;if(nativeAi){knownAi=true;if(!touched.has(nativeAi))touched.set(nativeAi,nativeAi.getAttribute('data-folio-ai-proxied'));aiObserver=new MutationObserver(schedule);aiObserver.observe(nativeAi,{attributes:true,attributeFilter:['aria-expanded','data-chat-open','disabled']});}}
  if(!knownAi)return;
  if(!nativeAi){const sidebar=document.querySelector('#right-sidebar');const rect=sidebar?.getBoundingClientRect();const style=sidebar&&getComputedStyle(sidebar);if(rect&&rect.width>1&&rect.left<window.innerWidth&&rect.right>0&&style.display!=='none'&&style.visibility!=='hidden'&&!pendingAi){restoreAi();knownAi=false;return;}}
  if(!aiButton){aiButton=makeButton('folio-ai-launcher');aiButton.append(icon([['path',{d:'M5 1L3.7 4 1 5.2 3.7 6.4 5 9.5 6.3 6.4 9 5.2 6.3 4ZM12 8L10.9 10.7 8.5 11.8 10.9 12.8 12 15.5 13.1 12.8 15.5 11.8 13.1 10.7Z',fill:'currentColor'}]]));aiButton.onclick=proxyAi;}
  if(aiButton.parentElement!==buttonHost())buttonGroup.append(aiButton);
  ensureStyle();const expanded=nativeAi?.getAttribute('aria-expanded')==='true'||nativeAi?.getAttribute('data-chat-open')==='true';set(aiButton,'aria-expanded',expanded);set(aiButton,'aria-label',copy().ai);set(aiButton,'title',expanded?copy().aiClose:copy().aiOpen);
  const controls=nativeAi?.getAttribute('aria-controls');if(controls)set(aiButton,'aria-controls',controls);else aiButton.removeAttribute('aria-controls');aiButton.disabled=Boolean(nativeAi?.disabled);
  if(nativeAi)set(nativeAi,'data-folio-ai-proxied','true');
  for(const [element,previous]of touched)if(!element.isConnected){if(previous===null)element.removeAttribute('data-folio-ai-proxied');else element.setAttribute('data-folio-ai-proxied',previous);touched.delete(element);}
  if(pendingAi&&nativeAi){pendingAi=false;if(pendingTimer)clearTimeout(pendingTimer);pendingTimer=0;nativeAi.click();schedule();}
 };
 const sync=()=>{
  if(stopped)return;if(runtime.featureValues.get('sidebar-toggles')&&!runtime.cssPaused)ensureStyle();if(dialog)set(dialog,'data-folio-theme',runtime.themeEnabled&&!runtime.cssPaused?'folio':'native');topbar=document.querySelector('.rm-topbar');
  if(runtime.toolbarSettingsEnabled&&topbar){ensureStyle();if(!button){button=makeButton('folio-settings-launcher');button.append(icon([['path',{d:'M2 4H14M2 8H14M2 12H14',fill:'none',stroke:'currentColor','stroke-width':'1.5','stroke-linecap':'round'}],['rect',{x:'5',y:'2.3',width:'2',height:'3.4',rx:'.6',fill:'currentColor'}],['rect',{x:'10',y:'6.3',width:'2',height:'3.4',rx:'.6',fill:'currentColor'}],['rect',{x:'4',y:'10.3',width:'2',height:'3.4',rx:'.6',fill:'currentColor'}]]));button.onclick=openPanel;}if(button.parentElement!==buttonHost())buttonGroup.append(button);set(button,'aria-label',copy().settings);set(button,'title',copy().settings);set(button,'aria-controls','folio-settings-dialog');set(button,'aria-haspopup','dialog');set(button,'aria-expanded',Boolean(dialog));}
  else {button?.remove();button=null;}
  syncAi();syncHeader();if(buttonGroup&&!buttonGroup.childElementCount){buttonGroup.remove();buttonGroup=null;}
 };
 const observer=new MutationObserver(records=>{
  if((topbar&&!topbar.isConnected)||(button&&!button.isConnected)||(nativeAi&&!nativeAi.isConnected)||(aiCard&&!aiCard.isConnected)||(aiHeader&&!aiHeader.isConnected)||(aiSlot&&!aiSlot.isConnected)){schedule();return;}
  for(const record of records)for(const node of record.addedNodes)if(node instanceof Element&&(node.matches('.rm-topbar,.rm-sidebar-nav,.rm-agent-sidebar-chat-launcher,.rm-agent-chat-panel,.rm-agent-chat-header')||(node.childElementCount&&node.querySelector('.rm-topbar,.rm-agent-sidebar-chat-launcher,.rm-agent-chat-panel,.rm-agent-chat-header')))){schedule();return;}
 });observer.observe(document.body,{childList:true,subtree:true});sync();
 return {sync,renderPanel,openPanel,closePanel,destroy(){stopped=true;document.removeEventListener('pointerover',resetHover,true);document.removeEventListener('pointerout',resetHover,true);document.removeEventListener('click',dismissHover,true);for(const target of dismissedHover)target.removeAttribute('data-folio-hover-dismissed');dismissedHover.clear();window.removeEventListener('resize',keepPanelVisible);observer.disconnect();aiObserver?.disconnect();if(frame)cancelAnimationFrame(frame);closePanel();button?.remove();restoreAi();clearHeader();buttonGroup?.remove();document.getElementById('folio-toolbar-ui-style')?.remove();}};
}
