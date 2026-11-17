import fs from 'node:fs';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
const css=fs.readFileSync(new URL('./src/styles/theme-host-fixes.css',import.meta.url),'utf8');
const patch=css.slice(css.indexOf('/* A pin already has its own action slot.'));
const rules=[...patch.matchAll(/([^{}]+)\{([^{}]+)\}/g)].map(([,selector,body])=>({selector:selector.replace(/\/\*[\s\S]*?\*\//g,''),body}));
const reclaim=rules.find(rule=>rule.body.includes('flex:0 0 0'));
for(const container of ['roam-article','roam-log-page'])for(const filled of [false,true])for(const pin of [false,true]) {
 const dom=new JSDOM(`<div class="roam-app"><div class="roam-main"><div class="${container}"><div class="rm-block-main"><div class="rm-block__input">Text</div><div class="rm-block-separator"></div><div class="counter" style="min-width: 24px;">${filled?'1':''}</div>${pin?'<button class="folio-own-pin">Pin</button>':''}</div></div></div></div>`);
 const found=[...dom.window.document.querySelectorAll(reclaim.selector)];
 assert.equal(found.length,pin&&!filled?2:0,'reclaim only empty native slots on rows with pins');
 assert.ok(found.every(el=>el.classList.contains('counter')||el.classList.contains('rm-block-separator')));
 dom.window.close();
}
console.log('PASS pin spacing selector scope: article/daily, empty/real counters, with/without pins. No live layout claim.');
