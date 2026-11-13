/* Functional settings navigation and Random TODO policy. No page styling. */
const FUNCTION_GROUPS = [
 {id:'navigation',ids:['sidebar-toggles','hide-top-buttons','hide-left-sidebar-items','workbench-compat','scroll-indicator','graph-button','right-sidebar']},
 {id:'content',ids:['tags','or-dropdown','property-card','weight']},
 {id:'writing',ids:['typewriter','asides','code-height','code-tools']},
 {id:'calendar',ids:['daily-masthead','calendar-quick','calendar-keyboard','calendar-template','calendar-preview','calendar-carry','calendar-capture']},
 {id:'media',ids:['images','pdf','video-reader']},
 {id:'insights',ids:['page-stats','pulse']},
 {id:'review',ids:['editorial-desk','random-tasks']},
];
const SETTINGS_COPY = {
 en: {
  groups:['Interface and navigation','Labels and content','Writing and code','Daily notes and calendar','Reading and media','Page insights','Tasks and review'],
  title:'By function · resource impact per component',impact:'Estimated resource impact',impactHelp:'Estimated from runtime behaviour; not a live CPU measurement.',
  pages:'Excluded pages',pagesHelp:'TODOs on these pages are excluded. Enter one exact page title per line.',defaults:'Defaults: SmartBlock and roam/templates. Edit or add page titles below.',
  future:'Exclude TODOs with future dates',futureHelp:'On by default. Turn off to include tasks with explicit future daily-note dates.',policy:'These rules only filter random picks; original tasks are not modified.',
  code:'Limit code block height',sidebar:'Keep native sidebar toggles visible',defaultLabel:'Default',height:'Code block maximum height (px)',heightHelp:'Default 420; 0 removes the limit. Long code scrolls inside the block.',shortcuts:['Jump to date','Today','Daily notes','Previous day','Next day'],shortcut:'Navigation shortcut',shortcutHelp:'Default: {key}. Examples: Alt+G, Mod+Shift+J. Empty disables. Inactive while editing; the first matching action wins.'
 },
 zh: {
  groups:['界面与导航','标签与内容','写作与代码','日记与日历','阅读与媒体','页面洞察','任务与回顾'],
  title:'按功能分组 · 每项标注资源消耗',impact:'资源消耗（估计）',impactHelp:'按运行方式估计，不代表实时 CPU 占用。',
  pages:'排除页面',pagesHelp:'这些页面下的 TODO 不参与随机抽取；每行填写一个完整页面名。',defaults:'默认填入 SmartBlock 和 roam/templates，可自行修改或添加。',
  future:'排除带未来日期的 TODO',futureHelp:'默认开启；关闭后，明确带有未来日记日期的任务也可参与随机抽取。',policy:'排除规则仅影响随机抽取，不修改原任务。',
  code:'限制代码块高度',sidebar:'固定显示原生侧栏开关',defaultLabel:'默认',height:'代码块最大高度（px）',heightHelp:'默认 420；0 表示不限制。长代码在块内滚动。',shortcuts:['跳转日期','今天','日记流','前一天','后一天'],shortcut:'导航快捷键',shortcutHelp:'默认 {key}。支持 Alt+G、Mod+Shift+J；留空停用。编辑文字时不触发，重复组合仅第一个生效。'
 },
 fr: {
  groups:['Interface et navigation','Étiquettes et contenu','Écriture et code','Journal et calendrier','Lecture et médias','Analyse des pages','Tâches et révision'],
  title:'Par fonction · impact indiqué par composant',impact:'Impact estimé sur les ressources',impactHelp:'Estimation selon le fonctionnement ; ce n’est pas une mesure CPU en direct.',
  pages:'Pages exclues',pagesHelp:'Les TODO de ces pages sont exclus. Un titre exact de page par ligne.',defaults:'Valeurs par défaut : SmartBlock et roam/templates. Modifiez ou ajoutez des titres.',
  future:'Exclure les TODO avec une date future',futureHelp:'Activé par défaut. Désactivez pour inclure les tâches portant une date explicite de journal future.',policy:'Ces règles filtrent uniquement le tirage aléatoire, sans modifier les tâches originales.',
  code:'Limiter la hauteur du code',sidebar:'Garder visibles les boutons des barres latérales',defaultLabel:'Par défaut',height:'Hauteur maximale du code (px)',heightHelp:'420 par défaut ; 0 supprime la limite. Le code long défile dans le bloc.',shortcuts:['Aller à une date','Aujourd’hui','Journal','Jour précédent','Jour suivant'],shortcut:'Raccourci de navigation',shortcutHelp:'Par défaut : {key}. Exemples : Alt+G, Mod+Shift+J. Vide pour désactiver. Inactif pendant la saisie ; la première action correspondante prévaut.'
 },
 de: {
  groups:['Oberfläche und Navigation','Tags und Inhalt','Schreiben und Code','Tagesnotizen und Kalender','Lesen und Medien','Seitenanalyse','Aufgaben und Rückblick'],
  title:'Nach Funktion · Ressourcenlast je Komponente',impact:'Geschätzte Ressourcenlast',impactHelp:'Schätzung anhand der Arbeitsweise, keine Echtzeit-CPU-Messung.',
  pages:'Ausgeschlossene Seiten',pagesHelp:'TODOs auf diesen Seiten werden ausgeschlossen. Ein exakter Seitentitel pro Zeile.',defaults:'Standard: SmartBlock und roam/templates. Titel können geändert oder ergänzt werden.',
  future:'TODOs mit zukünftigem Datum ausschließen',futureHelp:'Standardmäßig aktiviert. Deaktivieren, um Aufgaben mit einem ausdrücklich zukünftigen Tagesnotizdatum einzubeziehen.',policy:'Diese Regeln filtern nur die Zufallsauswahl und ändern keine ursprünglichen Aufgaben.',
  code:'Codeblockhöhe begrenzen',sidebar:'Schalter der Seitenleisten sichtbar halten',defaultLabel:'Standard',height:'Maximale Codeblockhöhe (px)',heightHelp:'Standard 420; 0 hebt die Begrenzung auf. Langer Code scrollt innerhalb des Blocks.',shortcuts:['Zu Datum springen','Heute','Tagesnotizen','Vorheriger Tag','Nächster Tag'],shortcut:'Navigationstastenkürzel',shortcutHelp:'Standard: {key}. Beispiele: Alt+G, Mod+Shift+J. Leer deaktiviert. Bei Texteingabe inaktiv; die erste passende Aktion hat Vorrang.'
 },
 es: {
  groups:['Interfaz y navegación','Etiquetas y contenido','Escritura y código','Diario y calendario','Lectura y medios','Análisis de páginas','Tareas y revisión'],
  title:'Por función · consumo indicado por componente',impact:'Consumo estimado de recursos',impactHelp:'Estimación según el funcionamiento; no mide la CPU en tiempo real.',
  pages:'Páginas excluidas',pagesHelp:'Los TODO de estas páginas se excluyen. Un título exacto de página por línea.',defaults:'Por defecto: SmartBlock y roam/templates. Puede modificar o añadir títulos.',
  future:'Excluir TODO con fechas futuras',futureHelp:'Activado por defecto. Desactive para incluir tareas con una fecha futura explícita de nota diaria.',policy:'Estas reglas solo filtran la selección aleatoria; no modifican las tareas originales.',
  code:'Limitar la altura del código',sidebar:'Mantener visibles los controles laterales',defaultLabel:'Predeterminado',height:'Altura máxima del código (px)',heightHelp:'420 por defecto; 0 elimina el límite. El código largo se desplaza dentro del bloque.',shortcuts:['Ir a una fecha','Hoy','Notas diarias','Día anterior','Día siguiente'],shortcut:'Atajo de navegación',shortcutHelp:'Predeterminado: {key}. Ejemplos: Alt+G, Mod+Shift+J. Vacío para desactivar. Inactivo al editar; prevalece la primera acción coincidente.'
 },
 it: {
  groups:['Interfaccia e navigazione','Tag e contenuti','Scrittura e codice','Diario e calendario','Lettura e media','Analisi delle pagine','Attività e revisione'],
  title:'Per funzione · consumo indicato per componente',impact:'Consumo stimato di risorse',impactHelp:'Stima basata sul funzionamento, non una misura della CPU in tempo reale.',
  pages:'Pagine escluse',pagesHelp:'I TODO in queste pagine sono esclusi. Un titolo esatto di pagina per riga.',defaults:'Valori iniziali: SmartBlock e roam/templates. Puoi modificare o aggiungere titoli.',
  future:'Escludi TODO con date future',futureHelp:'Attivo per impostazione predefinita. Disattiva per includere attività con una data futura esplicita di nota giornaliera.',policy:'Queste regole filtrano solo la selezione casuale e non modificano le attività originali.',
  code:'Limita l’altezza del codice',sidebar:'Mantieni visibili i controlli delle barre laterali',defaultLabel:'Predefinito',height:'Altezza massima del codice (px)',heightHelp:'420 predefinito; 0 elimina il limite. Il codice lungo scorre dentro il blocco.',shortcuts:['Vai a una data','Oggi','Note giornaliere','Giorno precedente','Giorno successivo'],shortcut:'Scorciatoia di navigazione',shortcutHelp:'Predefinito: {key}. Esempi: Alt+G, Mod+Shift+J. Vuoto per disattivare. Inattivo durante la modifica; prevale la prima azione corrispondente.'
 }
};
const SETTINGS_DETAILS = {
 en: {appearance:'Use installed CSS font-family names, with quoted names and comma-separated fallbacks. Empty restores defaults. The motto allows 24 units per line (Chinese/full-width characters = 2, Latin = 1), further fitted to sidebar width; two lines maximum.',namespaces:'MOC/Project section labels, book titles, people, industries and ticker markers. Quadrants and research-depth stamps are in Status stamps.'},
 zh: {appearance:'填写已安装字体的 CSS font-family 名称，名称含空格时用英文双引号，多个备选字体用英文逗号分隔；留空恢复默认。座右铭每行最多 24 单位（中文、全角字符计 2，英文计 1），还会按侧栏宽度限制，最多两行。',namespaces:'此组设置 MOC／Project 栏目签、书名、人物、行业和股票标记；四象限、研究深度等印章在“状态印章”组。'},
 fr: {appearance:'Utilisez des noms CSS font-family de polices installées, entre guillemets si nécessaire, avec les alternatives séparées par des virgules. Vide rétablit les valeurs par défaut. Devise : 24 unités par ligne (chinois/caractères pleine chasse = 2, latin = 1), ajustées à la largeur latérale ; deux lignes maximum.',namespaces:'Étiquettes MOC/Project, titres de livres, personnes, secteurs et symboles boursiers. Quadrants et niveaux de recherche figurent dans les tampons d’état.'},
 de: {appearance:'Installierte CSS-font-family-Namen verwenden; Namen bei Bedarf in Anführungszeichen und Alternativen durch Kommas trennen. Leer stellt Standardwerte wieder her. Motto: 24 Einheiten pro Zeile (Chinesisch/Vollbreite = 2, Latein = 1), an die Seitenleiste angepasst; höchstens zwei Zeilen.',namespaces:'MOC/Project-Abschnittstags, Buchtitel, Personen, Branchen und Börsensymbole. Quadranten und Recherchegrade stehen unter Statusstempel.'},
 es: {appearance:'Use nombres CSS font-family de fuentes instaladas, entre comillas si procede, con alternativas separadas por comas. Vacío restaura los valores iniciales. Lema: 24 unidades por línea (chino/ancho completo = 2, latín = 1), ajustadas al ancho lateral; máximo dos líneas.',namespaces:'Etiquetas MOC/Project, títulos de libros, personas, sectores y símbolos bursátiles. Los cuadrantes y niveles de investigación están en Sellos de estado.'},
 it: {appearance:'Usa nomi CSS font-family di font installati, tra virgolette se necessario, con alternative separate da virgole. Vuoto ripristina i valori iniziali. Motto: 24 unità per riga (cinese/larghezza piena = 2, latino = 1), adattate alla barra laterale; massimo due righe.',namespaces:'Tag MOC/Project, titoli di libri, persone, settori e simboli azionari. Quadranti e livelli di ricerca sono nei Timbri di stato.'}
};
const RANDOM_EXCLUDED_DEFAULT = 'SmartBlock\nroam/templates';
const randomPageNames = value => [...new Set(String(value ?? '').split(/\r?\n/).map(s=>s.trim()).filter(Boolean))];
function syncRandomTodoConfig(runtime) {
 window.__folioRandomTodoConfig = {excludedPages:randomPageNames(runtime.randomExcludedPages),excludeFuture:runtime.randomExcludeFuture};
}
function randomTodoSettings(runtime, React, copy) {
 const e=React.createElement;
 const save=(key,value)=>{void runtime.extensionAPI.settings.set(SETTING_PREFIX+key,value);syncRandomTodoConfig(runtime);};
 return e('div',{style:{padding:'8px 2px 12px',borderTop:'1px solid rgba(128,128,128,.16)'}},
  e('label',{htmlFor:'folio-random-excluded-pages',style:{fontWeight:600,fontSize:'13px'}},copy.pages),
  e('p',{id:'folio-random-pages-help',style:{fontSize:'11px',opacity:.7,margin:'5px 0 8px'}},copy.pagesHelp),
  e('textarea',{id:'folio-random-excluded-pages','aria-describedby':'folio-random-pages-help',defaultValue:runtime.randomExcludedPages,rows:4,spellCheck:false,style:{boxSizing:'border-box',width:'100%',resize:'vertical',font:'inherit',fontSize:'12px',padding:'8px',lineHeight:1.5},onChange:event=>{runtime.randomExcludedPages=event.target.value;save('random-excluded-pages',runtime.randomExcludedPages);}}),
  e('p',{style:{fontSize:'11px',opacity:.7}},copy.defaults),
  e('label',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'12px',fontSize:'13px',fontWeight:600}},copy.future,e('input',{type:'checkbox',role:'switch',defaultChecked:runtime.randomExcludeFuture,onChange:event=>{runtime.randomExcludeFuture=Boolean(event.target.checked);save('random-exclude-future',runtime.randomExcludeFuture);}})),
  e('p',{style:{fontSize:'11px',opacity:.7}},copy.futureHelp),
  e('p',{style:{fontSize:'11px',opacity:.7,marginBottom:0}},copy.policy));
}
function localizedExtraSettings(runtime) {
 const copy=SETTINGS_COPY[runtime.locale]||SETTINGS_COPY.en;
 return extraSettings(runtime).map((setting,index)=>({...setting,
  name:index===0?copy.height:`${copy.shortcut} · ${copy.shortcuts[index-1]}`,
  description:index===0?copy.heightHelp:copy.shortcutHelp.replace('{key}',Object.values(SHORTCUT_DEFAULTS)[index-1])
 }));
}
function functionalSettings(runtime, accordion, appearanceGroup, widgetGroups, tagGroups) {
 const copy=SETTINGS_COPY[runtime.locale]||SETTINGS_COPY.en;
 const names=GROUP_NAMES[runtime.locale]||GROUP_NAMES.en;
 return {id:SETTING_PREFIX+'functional-settings',name:'',description:'',action:{type:'reactComponent',component:()=>{
  const React=window.React;if(!React)return null;
  const e=React.createElement;
  const [section,setSection]=React.useState(runtime.settingsSection||'appearance');
  const groups=[{id:'appearance',title:names.appearance},...widgetGroups.map((g,i)=>({...g,title:copy.groups[i]}))];
  const selected=groups.find(g=>g.id===section)||groups[0];
  const renderGroup=group=>e(accordion(group,true).action.component,{key:group.id});
  const extras=localizedExtraSettings(runtime).filter(setting=>selected.id==='writing'?setting.id===SETTING_PREFIX+'code-max-height':selected.id==='navigation'&&setting.id!==SETTING_PREFIX+'code-max-height');
  const impact=UI[runtime.locale]?.impact||UI.en.impact;
  return e('div',{'data-folio-settings-layout':'functional',style:{width:'100%'}},
   e('p',{style:{fontSize:'12px',opacity:.7}},copy.title),
   e('div',{style:{display:'flex',flexWrap:'wrap',gap:'16px',alignItems:'flex-start'}},
    e('nav',{'aria-label':copy.title,style:{flex:'1 0 170px',minWidth:0}},groups.map(group=>e('button',{key:group.id,type:'button','aria-current':selected.id===group.id?'page':undefined,onClick:()=>{runtime.settingsSection=group.id;setSection(group.id);},style:{display:'flex',justifyContent:'space-between',gap:'8px',alignItems:'center',width:'100%',boxSizing:'border-box',textAlign:'left',padding:'10px',font:'inherit',fontSize:'12px',color:'inherit',border:0,borderLeft:selected.id===group.id?'3px solid #b59339':'3px solid transparent',background:selected.id===group.id?'rgba(185,147,57,.15)':'transparent',cursor:'pointer',overflowWrap:'anywhere'}},group.title,group.ids?e('span',{style:{opacity:.6}},group.ids.length):null)),
     e('div',{style:{borderTop:'1px solid rgba(128,128,128,.2)',marginTop:'14px',padding:'12px 8px',fontSize:'11px'}},e('strong',null,copy.impact),e('div',{style:{display:'flex',flexWrap:'wrap',gap:'5px',marginTop:'8px'}},impact.map((text,i)=>e('span',{key:i,style:{padding:'2px 5px',border:'1px solid rgba(128,128,128,.35)',borderRadius:'4px'}},text))),e('p',{style:{opacity:.7,lineHeight:1.5}},copy.impactHelp))),
    e('div',{key:selected.id,style:{flex:'3 1 270px',minWidth:0}},
     renderGroup(selected.id==='appearance'?appearanceGroup:selected),
     selected.id==='content'?tagGroups.map(renderGroup):null,
     extras.map(setting=>e('div',{key:setting.id,style:{borderTop:'1px solid rgba(128,128,128,.16)',padding:'10px 2px'}},e('label',null,e('span',{style:{display:'block',fontSize:'13px',fontWeight:600}},setting.name),e('span',{style:{display:'block',fontSize:'11px',opacity:.7,margin:'4px 0 8px'}},setting.description),e(setting.action.component))))
    )
   )
  );
 }}};
}

/* Settings labels only: page names and rendered tag text are untouched. */
const TAG_FIELD_LABELS = {
 zh:['MOC 命名空间','Project 命名空间','书本命名空间','人物命名空间','行业命名空间','股票代码标记','第一象限','第二象限','第三象限','快速筛选','深入分析','专业研究','检查清单','反脆弱','待还','重点','动机笔记','重温笔记','语音笔记','文献笔记','永久笔记','脚注','定义笔记','情绪高涨','情绪平稳','情绪低落','阅读清单：待读','阅读清单：精选','阅读清单：归档','重要块标签','隐藏类标签前缀'],
 fr:['Espace MOC','Espace Project','Espace des livres','Espace des personnes','Espace des secteurs','Marqueur boursier','Quadrant 1','Quadrant 2','Quadrant 3','Sélection rapide','Analyse approfondie','Recherche professionnelle','Liste de contrôle','Antifragile','À rendre','Prioritaire','Notes de motivation','Notes à redécouvrir','Notes vocales','Notes de lecture','Notes permanentes','Notes de bas de page','Notes de définition','Bonne humeur','Humeur stable','Moral bas','Lecture : à lire','Lecture : sélection','Lecture : archives','Étiquette de bloc important','Préfixe des étiquettes de classe masquées'],
 de:['MOC-Namensraum','Project-Namensraum','Bücher-Namensraum','Personen-Namensraum','Branchen-Namensraum','Börsenkürzel-Marker','Quadrant 1','Quadrant 2','Quadrant 3','Schnelle Vorauswahl','Vertiefte Analyse','Professionelle Recherche','Checkliste','Antifragil','Ausstehend','Wichtig','Motivationsnotizen','Notizen wiederentdecken','Sprachnotizen','Literaturnotizen','Dauerhafte Notizen','Fußnoten','Definitionsnotizen','Gehobene Stimmung','Ausgeglichene Stimmung','Gedrückte Stimmung','Leseliste: Eingang','Leseliste: Auswahl','Leseliste: Archiv','Tag für wichtige Blöcke','Präfix ausgeblendeter Klassen-Tags'],
 es:['Espacio MOC','Espacio Project','Espacio de libros','Espacio de personas','Espacio de sectores','Marcador bursátil','Cuadrante 1','Cuadrante 2','Cuadrante 3','Selección rápida','Análisis profundo','Investigación profesional','Lista de control','Antifrágil','Por devolver','Importante','Notas de motivación','Notas para redescubrir','Notas de voz','Notas de lectura','Notas permanentes','Notas al pie','Notas de definición','Ánimo alto','Ánimo estable','Ánimo bajo','Lectura: entrada','Lectura: selección','Lectura: archivo','Etiqueta de bloque importante','Prefijo de etiquetas de clase ocultas'],
 it:['Namespace MOC','Namespace Project','Namespace dei libri','Namespace delle persone','Namespace dei settori','Marcatore azionario','Quadrante 1','Quadrante 2','Quadrante 3','Selezione rapida','Analisi approfondita','Ricerca professionale','Lista di controllo','Antifragile','Da restituire','Importante','Note di motivazione','Note da riscoprire','Note vocali','Note di lettura','Note permanenti','Note a piè di pagina','Note di definizione','Umore alto','Umore stabile','Umore basso','Lettura: da leggere','Lettura: selezione','Lettura: archivio','Tag per blocchi importanti','Prefisso dei tag di classe nascosti']
};
function settingsTagFieldName(field, locale) {return TAG_FIELD_LABELS[locale]?.[TAG_FIELDS.findIndex(item=>item.id===field.id)] || field.name;}
