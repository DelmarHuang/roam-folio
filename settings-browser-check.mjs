import {createRequire} from 'node:module';import fs from 'node:fs';import assert from 'node:assert/strict';const {chromium}=createRequire(import.meta.url)('playwright');
const uiRoot=process.env.FOLIO_UI_TEST_NODE_MODULES;const require=createRequire(import.meta.url);const esbuild=uiRoot?require(uiRoot+'/esbuild'):require('esbuild');const bundle=esbuild.buildSync({entryPoints:['settings-test-app.jsx'],bundle:true,write:false,nodePaths:uiRoot?[uiRoot]:[]}).outputFiles[0].text;
const browser=await chromium.launch({executablePath:process.env.FOLIO_TEST_CHROMIUM,headless:true,args:['--no-sandbox','--disable-gpu']});const page=await browser.newPage();page.setDefaultTimeout(5000);const errors=[];page.on('pageerror',e=>{errors.push(e.message);console.log('PAGE ERROR',e.message)});await page.route('**/*',r=>r.abort());
await page.setViewportSize({width:1060,height:1000});await page.setContent('<style>html{font:14px Arial;color:#202032;background:#faf8f2}body{margin:20px}#root{padding:20px;background:#fffdf7;border:1px solid #e5dfcf;max-width:940px}input,textarea{color:inherit;background:#fffdf7;border:1px solid #c9c4b8;border-radius:4px}summary{text-align:left}</style><div id="root"></div>');await page.addScriptTag({content:bundle});
const results=[];
for(const lang of ['English','中文','Français','Deutsch','Español','Italiano']){
 console.log('Testing',lang);await page.evaluate(language=>window.__locale(language),lang);await page.waitForFunction(()=>!!document.querySelector('nav'));await page.locator('nav button').last().waitFor();await page.locator('nav button').last().click();await page.locator('#folio-random-excluded-pages').waitFor();
 assert.equal(await page.locator('#folio-random-excluded-pages').inputValue(),'SmartBlock\nroam/templates');assert.ok(await page.getByRole('switch').isChecked());
 await page.locator('#folio-random-excluded-pages').fill('SmartBlock\nroam/templates\nPrivate');await page.getByRole('switch').uncheck();
 assert.equal(await page.evaluate(()=>window.__store.get('folio-random-excluded-pages')),'SmartBlock\nroam/templates\nPrivate');assert.equal(await page.evaluate(()=>window.__store.get('folio-random-exclude-future')),false);
 // Changing tabs must retain values, including unchecked false.
 await page.locator('nav button').nth(1).click();await page.locator('nav button').last().click();assert.equal(await page.locator('#folio-random-excluded-pages').inputValue(),'SmartBlock\nroam/templates\nPrivate');assert.equal(await page.getByRole('switch').isChecked(),false);
 await page.locator('#folio-random-excluded-pages').fill('SmartBlock\nroam/templates');await page.getByRole('switch').check();
 for(const width of [520,760,1060]){
  await page.setViewportSize({width,height:1000});const geometry=await page.evaluate(()=>{const f=document.querySelector('#folio-random-excluded-pages').getBoundingClientRect();return{right:f.right,viewport:innerWidth,scroll:document.documentElement.scrollWidth};});assert.ok(geometry.right<=geometry.viewport,lang+' field overflow');assert.ok(geometry.scroll<=geometry.viewport,lang+' horizontal overflow');
 }
 if(lang==='中文'){await page.setViewportSize({width:1060,height:1000});if(process.env.FOLIO_SETTINGS_SCREENSHOT) await page.screenshot({path:process.env.FOLIO_SETTINGS_SCREENSHOT,fullPage:true});}
 results.push({language:lang,checks:'policy controls, saved state after tab changes, widths 520/760/1060'});
}
assert.deepEqual(errors,[]);console.log(JSON.stringify({results,pageErrors:errors},null,2));await browser.close();
