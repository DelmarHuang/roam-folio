import React from 'react';import {createRoot} from 'react-dom/client';
import extension from './extension.js';
window.React=React;const root=createRoot(document.getElementById('root'));
const store=new Map([['folio-pause-interactive',true],['folio-pause-css',true]]);
window.__store=store;window.__uiErrors=[];
const api={settings:{get:key=>store.get(key),set:async(key,value)=>store.set(key,value),panel:{create:async panel=>{window.__panel=panel;const C=panel.settings.find(s=>s.id==='folio-functional-settings').action.component;root.render(<C/>);}}}};
window.__locale=async language=>{store.set('folio-language',language);await extension.onload({extensionAPI:api});};
window.__locale('English');
