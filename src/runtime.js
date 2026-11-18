/* Folio for Roam Research
 * Consolidated extension build. Reading Desk and Version Studio styles are intentionally excluded.
 */

/*__GENERATED_CONTENT__*/
/*__SUPPORT__*/
/*__SETTINGS__*/
/*__TOOLBAR__*/
/*__CALENDAR_SUPPORT__*/
/*__TEMPLATE_SUPPORT__*/

const VERSION = "1.4.31";
const BUILD_DATE = "2026-11-18";
const STYLE_ID = "folio-plugin-style";
const SETTING_PREFIX = "folio-";
const LEGACY_SETTING_PREFIX = "imprint-";
const SETTINGS_LANGUAGE_ITEMS = ["Auto", "中文", "English", "Français", "Deutsch", "Español", "Italiano"];
const LANGUAGE_ITEM_TO_CODE = {
  Auto: "auto",
  中文: "zh",
  English: "en",
  Français: "fr",
  Deutsch: "de",
  Español: "es",
  Italiano: "it",
};

/* The visual theme is intentionally one switch.  These original source blocks
   are injected together, never exposed as dozens of micro-settings. */
const THEME_CSS_IDS = [
  "web-fonts", "base", "layout", "menus", "references", "quotes", "callouts",
  "tasks", "left-sidebar", "block-controls", "topbar", "page-titles", "headings",
  "inline", "links", "code-style", "tables", "responsive", "kanban", "diagram",
  "slider", "settings", "marketplace", "misc", "theme-host-fixes",
];

/* Components remain independently switchable and are ordered by measured type
   of work rather than by how visually prominent they are. */
const FEATURES = [
  { id: "sidebar-toggles", impact: 1, default: true, native: "nativeSidebarToggles" },
  { id: "hide-top-buttons", impact: 1, default: true, cssOnly: true },
  { id: "hide-left-sidebar-items", impact: 1, default: true, cssOnly: true },
  { id: "workbench-compat", impact: 1, default: true, cssOnly: true },
  { id: "scroll-indicator", impact: 1, default: true, native: "scrollIndicator" },
  { id: "tags", impact: 1, default: true, custom: "tagLabels" },
  { id: "or-dropdown", impact: 1, default: true, runner: "or-dropdown", module: "ormark" },
  { id: "daily-masthead", impact: 1, default: true, runner: "daily-masthead", module: "masthead" },
  { id: "typewriter", impact: 1, default: true, runner: "typewriter", module: "typewriter" },
  { id: "calendar-quick", impact: 1, default: true, runner: "calendar-quick", cleanups: [["__delmarCalendarQuickCleanup"]] },
  { id: "calendar-keyboard", impact: 1, default: true, runner: "calendar-keyboard", cleanups: [["__delmarCalendarKeyboardCleanup"]] },
  { id: "calendar-template", impact: 1, default: true, runner: "calendar-template", cleanups: [["__delmarAutoDnpTemplateCleanup"]] },

  { id: "asides", impact: 2, default: true, runner: "asides", module: "asides" },
  { id: "code-height", impact: 1, default: true, cssOnly: true },
  { id: "images", impact: 2, default: true, runner: "images", module: "captions" },
  { id: "graph-button", impact: 2, default: true, runner: "graph-button", cleanups: [["__magazineGraphButton", "cleanup"]] },
  { id: "right-sidebar", impact: 2, default: true, runner: "right-sidebar", module: "sidebar" },
  { id: "pdf", impact: 2, default: true, runner: "pdf", module: "pdf", native: "pdfEscape" },
  { id: "property-card", impact: 2, default: true, runner: "property-card", module: "card", page: true },

  { id: "calendar-preview", impact: 3, default: true, runner: "calendar-preview", cleanups: [["__delmarCalendarPreviewCleanup"]] },
  { id: "calendar-carry", impact: 3, default: true, runner: "calendar-carry", cleanups: [["__delmarCalendarCarryCleanup"]] },
  { id: "page-stats", impact: 3, default: true, runner: "page-stats", module: "stats", page: true },
  { id: "weight", impact: 3, default: true, runner: "weight", module: "weight", page: true },

  { id: "code-tools", impact: 4, default: true, runner: "code-tools", cleanups: [["__magCodeBottom", "stop"]] },
  { id: "video-reader", impact: 4, default: true, runner: "video-reader", native: "videoOpenSidebar", cleanups: [["__magVideoReaderCleanup"], ["__magVideoTheaterCleanup"]] },
  { id: "calendar-capture", impact: 4, default: true, runner: "calendar-capture", cleanups: [["__delmarCalendarCaptureCleanup"]] },
  { id: "pulse", impact: 4, default: true, runner: "pulse", module: "pulse", page: true },
  { id: "editorial-desk", impact: 4, default: true, runner: "editorial-desk", module: "desk" },
  { id: "random-tasks", impact: 4, default: true, runner: "random-tasks", cleanups: [["__DELMar_RANDOM_TODO3__", "destroy"]] },
];

const FEATURE_NAMES = {
  en: {
    "web-fonts": "Web fonts", base: "Typography and colour system", layout: "Page layout", menus: "Menus, dialogs and search",
    notes: "Notes section labels", references: "Linked references", quotes: "Quotes and dividers", callouts: "Callouts",
    tasks: "TODO / DONE", "left-sidebar": "Left sidebar", "block-controls": "Block controls and reference counts", topbar: "Top bar",
    "page-titles": "Page titles", headings: "H1–H3 headings", inline: "Inline formatting", links: "Links and tags", "code-style": "Code-block styling",
    tables: "Tables", responsive: "Narrow-screen layout", kanban: "Kanban", diagram: "Diagrams", slider: "Number sliders",
    settings: "Settings window", marketplace: "Extension marketplace", misc: "Small finishing styles", "reading-list": "Reading List labels",
    mood: "Mood labels", "hide-top-buttons": "Hide top-bar icons", "hide-left-sidebar-items": "Hide left-sidebar items", "workbench-compat": "Workbench dropdown compatibility", "scroll-indicator": "Show the page scrollbar only while scrolling", tags: "Special labels and stamps", "or-dropdown": "OR dropdown chips",
    "daily-masthead": "Daily-note masthead", "right-sidebar": "Right-sidebar cards", "graph-button": "Page graph button",
    typewriter: "Typewriter mode and writing goal", "code-tools": "Code-block tools", images: "Images and captions", pdf: "PDF window",
    asides: "Margin notes", "calendar-quick": "Calendar quick actions",
    "calendar-keyboard": "Calendar keyboard navigation", weight: "Reference-based visual weight",
    "property-card": "Property card", "page-stats": "Page statistics", pulse: "Page pulse", "random-tasks": "Random TODO 3",
    "video-reader": "Video reader", "calendar-template": "Automatic daily templates", "calendar-preview": "Calendar heatmap and preview",
    "calendar-carry": "Carry yesterday's TODOs", "calendar-capture": "Calendar quick capture", "editorial-desk": "Editorial Desk",
  },
  zh: {
    "web-fonts": "网络字体", base: "排版与配色系统", layout: "页面布局", menus: "菜单、弹窗与搜索",
    notes: "Notes 栏目签", references: "反向引用区", quotes: "引用块与分隔线", callouts: "Callout 提示框",
    tasks: "TODO / DONE", "left-sidebar": "左侧栏", "block-controls": "块内按钮与引用计数", topbar: "顶部栏",
    "page-titles": "页面标题", headings: "H1–H3 标题", inline: "行内样式", links: "链接与标签", "code-style": "代码块样式",
    tables: "表格", responsive: "窄屏布局", kanban: "看板", diagram: "图表", slider: "数字滑条",
    settings: "设置窗口", marketplace: "插件商店", misc: "其他细节样式", "reading-list": "Reading List 栏目签",
    mood: "情绪标签", "hide-top-buttons": "隐藏顶部图标", "hide-left-sidebar-items": "隐藏左侧边栏项目", "workbench-compat": "Workbench 下拉选择兼容", "scroll-indicator": "仅在滚动时显示页面滚动条", tags: "特殊标签与印章", "or-dropdown": "OR 勾叉下拉",
    "daily-masthead": "日记刊头", "right-sidebar": "右侧栏卡片", "graph-button": "页面关系图按钮",
    typewriter: "打字机模式与写作目标", "code-tools": "代码块操作工具", images: "图片与图注", pdf: "PDF 窗口",
    asides: "页边旁注", "calendar-quick": "日历快捷操作",
    "calendar-keyboard": "日历键盘导航", weight: "按引用次数调整版面权重",
    "property-card": "属性资料卡", "page-stats": "页面数据行", pulse: "页面脉搏", "random-tasks": "随机任务 3",
    "video-reader": "视频阅读器", "calendar-template": "自动日记模板", "calendar-preview": "日期热度与预览",
    "calendar-carry": "处理昨日遗留 TODO", "calendar-capture": "日历快速记录", "editorial-desk": "编辑部案头",
  },
  fr: {
    "web-fonts": "Polices web", base: "Typographie et couleurs", layout: "Mise en page", menus: "Menus, fenêtres et recherche",
    notes: "Étiquettes de notes", references: "Références liées", quotes: "Citations et séparateurs", callouts: "Encadrés",
    tasks: "TODO / DONE", "left-sidebar": "Barre latérale gauche", "block-controls": "Commandes de bloc et références", topbar: "Barre supérieure",
    "page-titles": "Titres de page", headings: "Titres H1–H3", inline: "Mise en forme intégrée", links: "Liens et étiquettes", "code-style": "Style des blocs de code",
    tables: "Tableaux", responsive: "Affichage étroit", kanban: "Kanban", diagram: "Diagrammes", slider: "Curseurs numériques",
    settings: "Fenêtre des réglages", marketplace: "Catalogue d’extensions", misc: "Finitions", "reading-list": "Étiquettes Reading List",
    mood: "Étiquettes d’humeur", "hide-top-buttons": "Masquer les icônes supérieures", "hide-left-sidebar-items": "Masquer des éléments de la barre gauche", "workbench-compat": "Compatibilité des listes Workbench", "scroll-indicator": "Afficher la barre uniquement pendant le défilement", tags: "Étiquettes et tampons spéciaux", "or-dropdown": "Sélecteur OR",
    "daily-masthead": "En-tête du journal", "right-sidebar": "Cartes de la barre droite", "graph-button": "Bouton graphe de page",
    typewriter: "Mode machine à écrire et objectif", "code-tools": "Outils des blocs de code", images: "Images et légendes", pdf: "Fenêtre PDF",
    asides: "Notes marginales", "calendar-quick": "Actions rapides du calendrier",
    "calendar-keyboard": "Navigation clavier du calendrier", weight: "Poids visuel par références",
    "property-card": "Fiche de propriétés", "page-stats": "Statistiques de page", pulse: "Pouls de la page", "random-tasks": "3 tâches aléatoires",
    "video-reader": "Lecteur vidéo", "calendar-template": "Modèles quotidiens automatiques", "calendar-preview": "Carte thermique et aperçu du calendrier",
    "calendar-carry": "Reporter les TODO d’hier", "calendar-capture": "Capture rapide du calendrier", "editorial-desk": "Bureau éditorial",
  },
  de: {
    "web-fonts": "Web-Schriftarten", base: "Typografie und Farben", layout: "Seitenlayout", menus: "Menüs, Dialoge und Suche",
    notes: "Notiz-Rubriken", references: "Verknüpfte Referenzen", quotes: "Zitate und Trennlinien", callouts: "Hinweisfelder",
    tasks: "TODO / DONE", "left-sidebar": "Linke Seitenleiste", "block-controls": "Blocksteuerung und Referenzen", topbar: "Obere Leiste",
    "page-titles": "Seitentitel", headings: "Überschriften H1–H3", inline: "Inline-Formatierung", links: "Links und Tags", "code-style": "Codeblock-Stil",
    tables: "Tabellen", responsive: "Schmales Layout", kanban: "Kanban", diagram: "Diagramme", slider: "Zahlenregler",
    settings: "Einstellungsfenster", marketplace: "Erweiterungsmarkt", misc: "Feineinstellungen", "reading-list": "Reading-List-Tags",
    mood: "Stimmungs-Tags", "hide-top-buttons": "Symbole der oberen Leiste ausblenden", "hide-left-sidebar-items": "Elemente der linken Seitenleiste ausblenden", "workbench-compat": "Workbench-Auswahlkompatibilität", "scroll-indicator": "Seitenleiste nur beim Scrollen anzeigen", tags: "Spezielle Tags und Stempel", "or-dropdown": "OR-Auswahl",
    "daily-masthead": "Tagesnotiz-Kopf", "right-sidebar": "Karten der rechten Seitenleiste", "graph-button": "Seitengraph-Schaltfläche",
    typewriter: "Schreibmaschinenmodus und Schreibziel", "code-tools": "Codeblock-Werkzeuge", images: "Bilder und Bildunterschriften", pdf: "PDF-Fenster",
    asides: "Randnotizen", "calendar-quick": "Kalender-Schnellaktionen",
    "calendar-keyboard": "Kalender-Tastaturnavigation", weight: "Visuelles Gewicht nach Referenzen",
    "property-card": "Eigenschaftskarte", "page-stats": "Seitenstatistik", pulse: "Seitenpuls", "random-tasks": "3 zufällige Aufgaben",
    "video-reader": "Videoleser", "calendar-template": "Automatische Tagesvorlagen", "calendar-preview": "Kalender-Heatmap und Vorschau",
    "calendar-carry": "TODOs von gestern übernehmen", "calendar-capture": "Kalender-Schnellerfassung", "editorial-desk": "Redaktionspult",
  },
  es: {
    "web-fonts": "Fuentes web", base: "Tipografía y colores", layout: "Diseño de página", menus: "Menús, diálogos y búsqueda",
    notes: "Etiquetas de notas", references: "Referencias vinculadas", quotes: "Citas y separadores", callouts: "Avisos",
    tasks: "TODO / DONE", "left-sidebar": "Barra lateral izquierda", "block-controls": "Controles de bloque y referencias", topbar: "Barra superior",
    "page-titles": "Títulos de página", headings: "Encabezados H1–H3", inline: "Formato en línea", links: "Enlaces y etiquetas", "code-style": "Estilo de bloques de código",
    tables: "Tablas", responsive: "Diseño estrecho", kanban: "Kanban", diagram: "Diagramas", slider: "Controles numéricos",
    settings: "Ventana de ajustes", marketplace: "Tienda de extensiones", misc: "Acabados", "reading-list": "Etiquetas de Reading List",
    mood: "Etiquetas de ánimo", "hide-top-buttons": "Ocultar iconos superiores", "hide-left-sidebar-items": "Ocultar elementos de la barra izquierda", "workbench-compat": "Compatibilidad de menús Workbench", "scroll-indicator": "Mostrar la barra solo al desplazarse", tags: "Etiquetas y sellos especiales", "or-dropdown": "Selector OR",
    "daily-masthead": "Cabecera de nota diaria", "right-sidebar": "Tarjetas de la barra derecha", "graph-button": "Botón de grafo de página",
    typewriter: "Modo máquina de escribir y objetivo", "code-tools": "Herramientas de bloques de código", images: "Imágenes y pies", pdf: "Ventana PDF",
    asides: "Notas al margen", "calendar-quick": "Acciones rápidas del calendario",
    "calendar-keyboard": "Navegación del calendario por teclado", weight: "Peso visual por referencias",
    "property-card": "Ficha de propiedades", "page-stats": "Estadísticas de página", pulse: "Pulso de página", "random-tasks": "3 tareas aleatorias",
    "video-reader": "Lector de vídeo", "calendar-template": "Plantillas diarias automáticas", "calendar-preview": "Mapa de calor y vista previa del calendario",
    "calendar-carry": "Trasladar TODO de ayer", "calendar-capture": "Captura rápida del calendario", "editorial-desk": "Mesa editorial",
  },
  it: {
    "web-fonts": "Font web", base: "Tipografia e colori", layout: "Layout pagina", menus: "Menu, finestre e ricerca",
    notes: "Etichette delle note", references: "Riferimenti collegati", quotes: "Citazioni e separatori", callouts: "Riquadri",
    tasks: "TODO / DONE", "left-sidebar": "Barra laterale sinistra", "block-controls": "Controlli blocco e riferimenti", topbar: "Barra superiore",
    "page-titles": "Titoli pagina", headings: "Titoli H1–H3", inline: "Formattazione in linea", links: "Link ed etichette", "code-style": "Stile dei blocchi di codice",
    tables: "Tabelle", responsive: "Layout stretto", kanban: "Kanban", diagram: "Diagrammi", slider: "Cursori numerici",
    settings: "Finestra impostazioni", marketplace: "Negozio estensioni", misc: "Rifiniture", "reading-list": "Etichette Reading List",
    mood: "Etichette umore", "hide-top-buttons": "Nascondi icone superiori", "hide-left-sidebar-items": "Nascondi elementi della barra sinistra", "workbench-compat": "Compatibilità menu Workbench", "scroll-indicator": "Mostra la barra solo durante lo scorrimento", tags: "Etichette e timbri speciali", "or-dropdown": "Selettore OR",
    "daily-masthead": "Testata della nota giornaliera", "right-sidebar": "Schede della barra destra", "graph-button": "Pulsante grafo pagina",
    typewriter: "Modalità macchina da scrivere e obiettivo", "code-tools": "Strumenti dei blocchi di codice", images: "Immagini e didascalie", pdf: "Finestra PDF",
    asides: "Note a margine", "calendar-quick": "Azioni rapide calendario",
    "calendar-keyboard": "Navigazione calendario da tastiera", weight: "Peso visivo per riferimenti",
    "property-card": "Scheda proprietà", "page-stats": "Statistiche pagina", pulse: "Impulso pagina", "random-tasks": "3 attività casuali",
    "video-reader": "Lettore video", "calendar-template": "Modelli giornalieri automatici", "calendar-preview": "Mappa di calore e anteprima calendario",
    "calendar-carry": "Riporta i TODO di ieri", "calendar-capture": "Acquisizione rapida calendario", "editorial-desk": "Scrivania editoriale",
  },
};

const UI = {
  en: {
    tab: "Folio", language: "Settings language", languageDesc: "Auto follows the browser. Changes take effect immediately.",
    pause: "Pause all interactive widgets", pauseDesc: "Keeps the visual theme while stopping observers, timers and interactive modules.", cssPause: "Temporarily disable Folio (troubleshooting)", cssPauseDesc: "Restores Roam’s original appearance and pauses Folio components for troubleshooting. Turn this switch off to restore your saved configuration.",
    namespaces: "Custom namespace labels", namespacesDesc: "Format: namespace=style. Styles: section, book, person, industry. Separate entries with semicolons.",
    rules: "Custom tag labels", rulesDesc: "Format: tag=label|style|text colour|background. Styles: section, book, person, industry, stamp, pencil.",
    reset: "Enable everything and restore tag names", resetDesc: "Turns on every feature and restores all special-tag defaults.", resetButton: "Restore all defaults",
    cssDesc: "Visual style only; no background work.", interactiveDesc: "Uses the shared idle scheduler and stops cleanly when disabled.",
    dataDesc: "Optional data feature.", cssSection: "Theme styles · CSS only", cssSectionDesc: "Pure visual styles with no observers or timers. Widgets remain available when all of these are off.", widgetSection: "Widgets · CSS + JS", widgetSectionDesc: "Each switch controls both script and style. Ordered from lower to higher estimated runtime impact.", tagsSection: "Special-tag names", tagsSectionDesc: "Current names are prefilled. Change any field to match your graph.", stamps: "Status stamps", notesGroup: "Note labels", moodReading: "Mood and Reading List", impact: ["Very low", "Low", "Moderate", "Higher"],
  },
  zh: {
    tab: "Folio · 书页集", language: "设置语言", languageDesc: "自动会跟随浏览器语言；切换后立即生效。",
    pause: "暂停全部交互组件", pauseDesc: "保留主题外观，同时停止观察器、定时器和交互模块。", cssPause: "临时停用 Folio（排查冲突）", cssPauseDesc: "开启后暂时撤下 Folio 外观并停止交互组件，用于判断问题是否由 Folio 引起；关闭此开关即可恢复原配置。日常使用请保持关闭。",
    namespaces: "自定义命名空间标签", namespacesDesc: "格式：命名空间=样式。可用 section、book、person、industry；用分号分隔。",
    rules: "自定义标签显示", rulesDesc: "格式：标签=显示文字|样式|文字颜色|背景色。样式可用 section、book、person、industry、stamp、pencil。",
    reset: "全部开启并恢复标签默认值", resetDesc: "开启全部功能，并恢复所有特殊标签的默认名称。", resetButton: "恢复全部默认值",
    cssDesc: "仅改变外观，不在后台运行。", interactiveDesc: "使用统一空闲调度器；关闭后会完整清理。",
    dataDesc: "可选数据组件。", cssSection: "主题样式 · 纯 CSS", cssSectionDesc: "只改变外观，没有观察器或定时器。全部关闭后，小功能仍可独立使用。", widgetSection: "小功能 · CSS + JS", widgetSectionDesc: "每个开关同时控制对应脚本和样式；按预计运行损耗从低到高排列。", tagsSection: "特殊标签名称", tagsSectionDesc: "已经填入当前名称，逐项修改即可适配自己的标签或前缀。", stamps: "状态印章", notesGroup: "笔记标签", moodReading: "情绪与 Reading List", impact: ["极低", "低", "中", "较高"],
  },
  fr: {
    tab: "Folio", language: "Langue des réglages", languageDesc: "Auto suit la langue du navigateur. Le changement est immédiat.",
    pause: "Suspendre tous les modules interactifs", pauseDesc: "Conserve le thème visuel et arrête observateurs, minuteries et modules interactifs.", cssPause: "Suspendre temporairement Folio (diagnostic)", cssPauseDesc: "Rétablit l’apparence native de Roam et suspend les composants Folio pour le diagnostic. Désactivez cette option pour restaurer vos réglages enregistrés.",
    namespaces: "Espaces de noms personnalisés", namespacesDesc: "Format : espace=style. Styles : section, book, person, industry. Séparez par des points-virgules.",
    rules: "Libellés personnalisés", rulesDesc: "Format : tag=libellé|style|couleur|fond. Styles : section, book, person, industry, stamp, pencil.",
    reset: "Tout activer et restaurer les noms", resetDesc: "Active toutes les fonctions et rétablit les noms par défaut.", resetButton: "Tout restaurer",
    cssDesc: "Style visuel uniquement, sans tâche de fond.", interactiveDesc: "Utilise le planificateur partagé et se nettoie à la désactivation.",
    dataDesc: "Fonction de données facultative.", cssSection: "Thème · CSS uniquement", cssSectionDesc: "Styles visuels sans observateur ni minuterie. Les widgets restent utilisables si tout est désactivé.", widgetSection: "Widgets · CSS + JS", widgetSectionDesc: "Chaque interrupteur commande le script et son style, du coût estimé le plus faible au plus élevé.", tagsSection: "Noms des étiquettes spéciales", tagsSectionDesc: "Les noms actuels sont préremplis et modifiables individuellement.", stamps: "Tampons d’état", notesGroup: "Étiquettes de notes", moodReading: "Humeur et Reading List", impact: ["Très faible", "Faible", "Modéré", "Plus élevé"],
  },
  de: {
    tab: "Folio", language: "Sprache der Einstellungen", languageDesc: "Auto folgt der Browsersprache; Änderungen wirken sofort.",
    pause: "Alle interaktiven Module pausieren", pauseDesc: "Behält das Design bei und stoppt Beobachter, Timer und interaktive Module.", cssPause: "Folio vorübergehend deaktivieren (Fehlersuche)", cssPauseDesc: "Stellt Roams ursprüngliche Darstellung wieder her und pausiert Folio-Komponenten zur Fehlersuche. Ausschalten stellt die gespeicherte Konfiguration wieder her.",
    namespaces: "Eigene Namensraum-Tags", namespacesDesc: "Format: Namensraum=Stil. Stile: section, book, person, industry. Mit Semikolon trennen.",
    rules: "Eigene Tag-Beschriftungen", rulesDesc: "Format: Tag=Text|Stil|Textfarbe|Hintergrund. Stile: section, book, person, industry, stamp, pencil.",
    reset: "Alles aktivieren und Namen zurücksetzen", resetDesc: "Aktiviert alle Funktionen und stellt die Tag-Namen wieder her.", resetButton: "Alles zurücksetzen",
    cssDesc: "Nur visuelle Gestaltung; keine Hintergrundarbeit.", interactiveDesc: "Nutzt den gemeinsamen Leerlaufplaner und wird beim Abschalten bereinigt.",
    dataDesc: "Optionale Datenfunktion.", cssSection: "Design · nur CSS", cssSectionDesc: "Reine Optik ohne Beobachter oder Timer. Widgets funktionieren auch ohne diese Stile.", widgetSection: "Widgets · CSS + JS", widgetSectionDesc: "Jeder Schalter steuert Skript und Stil; nach geschätzter Laufzeitbelastung sortiert.", tagsSection: "Namen besonderer Tags", tagsSectionDesc: "Aktuelle Namen sind vorausgefüllt und einzeln änderbar.", stamps: "Statusstempel", notesGroup: "Notiz-Tags", moodReading: "Stimmung und Reading List", impact: ["Sehr gering", "Gering", "Mittel", "Höher"],
  },
  es: {
    tab: "Folio", language: "Idioma de los ajustes", languageDesc: "Auto sigue el idioma del navegador; el cambio es inmediato.",
    pause: "Pausar todos los módulos interactivos", pauseDesc: "Mantiene el tema visual y detiene observadores, temporizadores y módulos interactivos.", cssPause: "Desactivar Folio temporalmente (diagnóstico)", cssPauseDesc: "Restaura la apariencia nativa de Roam y pausa los componentes de Folio para diagnosticar problemas. Desactive esta opción para recuperar la configuración guardada.",
    namespaces: "Espacios de nombres personalizados", namespacesDesc: "Formato: espacio=estilo. Estilos: section, book, person, industry. Separe con punto y coma.",
    rules: "Etiquetas personalizadas", rulesDesc: "Formato: etiqueta=texto|estilo|color|fondo. Estilos: section, book, person, industry, stamp, pencil.",
    reset: "Activar todo y restaurar nombres", resetDesc: "Activa todas las funciones y restaura los nombres predeterminados.", resetButton: "Restaurar todo",
    cssDesc: "Solo estilo visual; sin trabajo en segundo plano.", interactiveDesc: "Usa el planificador compartido y se limpia al desactivarlo.",
    dataDesc: "Función de datos opcional.", cssSection: "Tema · solo CSS", cssSectionDesc: "Estilos visuales sin observadores ni temporizadores. Los widgets siguen disponibles si se desactiva todo.", widgetSection: "Widgets · CSS + JS", widgetSectionDesc: "Cada interruptor controla el script y su estilo, ordenados por impacto estimado.", tagsSection: "Nombres de etiquetas especiales", tagsSectionDesc: "Los nombres actuales están rellenados y se pueden cambiar uno por uno.", stamps: "Sellos de estado", notesGroup: "Etiquetas de notas", moodReading: "Ánimo y Reading List", impact: ["Muy bajo", "Bajo", "Moderado", "Más alto"],
  },
  it: {
    tab: "Folio", language: "Lingua delle impostazioni", languageDesc: "Auto segue la lingua del browser; la modifica è immediata.",
    pause: "Sospendi tutti i moduli interattivi", pauseDesc: "Mantiene il tema visivo e arresta osservatori, timer e moduli interattivi.", cssPause: "Disattiva temporaneamente Folio (diagnosi)", cssPauseDesc: "Ripristina l’aspetto nativo di Roam e sospende i componenti Folio per la diagnosi. Disattiva questa opzione per ripristinare la configurazione salvata.",
    namespaces: "Namespace personalizzati", namespacesDesc: "Formato: namespace=stile. Stili: section, book, person, industry. Separare con punto e virgola.",
    rules: "Etichette personalizzate", rulesDesc: "Formato: tag=testo|stile|colore|sfondo. Stili: section, book, person, industry, stamp, pencil.",
    reset: "Attiva tutto e ripristina i nomi", resetDesc: "Attiva tutte le funzioni e ripristina i nomi predefiniti.", resetButton: "Ripristina tutto",
    cssDesc: "Solo stile visivo; nessun lavoro in background.", interactiveDesc: "Usa lo scheduler condiviso e si pulisce quando viene disattivato.",
    dataDesc: "Funzione dati opzionale.", cssSection: "Tema · solo CSS", cssSectionDesc: "Stili visivi senza osservatori o timer. I widget restano disponibili anche disattivando tutto.", widgetSection: "Widget · CSS + JS", widgetSectionDesc: "Ogni interruttore controlla script e stile, ordinati per impatto stimato.", tagsSection: "Nomi dei tag speciali", tagsSectionDesc: "I nomi attuali sono precompilati e modificabili singolarmente.", stamps: "Timbri di stato", notesGroup: "Tag delle note", moodReading: "Umore e Reading List", impact: ["Molto basso", "Basso", "Moderato", "Più alto"],
  },
};

const GROUP_NAMES = {
  en: { appearance: "Appearance · Fonts and motto", impact1: "Components · Very low impact", impact2: "Components · Low impact", impact3: "Components · Moderate impact", impact4: "Components · Higher impact", namespaces: "Labels · Namespaces and markers", stamps: "Labels · Status stamps", notesGroup: "Labels · Note types", moodReading: "Labels · Mood and Reading List", functional: "Functional tags" },
  zh: { appearance: "外观 · 字体与座右铭", impact1: "组件 · 极低损耗", impact2: "组件 · 低损耗", impact3: "组件 · 中等损耗", impact4: "组件 · 较高损耗", namespaces: "标签 · 命名空间与标记", stamps: "标签 · 状态印章", notesGroup: "标签 · 笔记类型", moodReading: "标签 · 情绪与 Reading List", functional: "功能标签" },
  fr: { appearance: "Apparence · Polices et devise", impact1: "Composants · Impact très faible", impact2: "Composants · Impact faible", impact3: "Composants · Impact modéré", impact4: "Composants · Impact plus élevé", namespaces: "Étiquettes · Espaces et marqueurs", stamps: "Étiquettes · Tampons d’état", notesGroup: "Étiquettes · Types de notes", moodReading: "Étiquettes · Humeur et Reading List", functional: "Étiquettes fonctionnelles" },
  de: { appearance: "Darstellung · Schriften und Motto", impact1: "Komponenten · Sehr geringe Last", impact2: "Komponenten · Geringe Last", impact3: "Komponenten · Mittlere Last", impact4: "Komponenten · Höhere Last", namespaces: "Tags · Namensräume und Marker", stamps: "Tags · Statusstempel", notesGroup: "Tags · Notiztypen", moodReading: "Tags · Stimmung und Reading List", functional: "Funktions-Tags" },
  es: { appearance: "Apariencia · Fuentes y lema", impact1: "Componentes · Impacto muy bajo", impact2: "Componentes · Impacto bajo", impact3: "Componentes · Impacto moderado", impact4: "Componentes · Impacto más alto", namespaces: "Etiquetas · Espacios y marcadores", stamps: "Etiquetas · Sellos de estado", notesGroup: "Etiquetas · Tipos de notas", moodReading: "Etiquetas · Ánimo y Reading List", functional: "Etiquetas funcionales" },
  it: { appearance: "Aspetto · Font e motto", impact1: "Componenti · Impatto molto basso", impact2: "Componenti · Impatto basso", impact3: "Componenti · Impatto moderato", impact4: "Componenti · Impatto più alto", namespaces: "Tag · Namespace e marcatori", stamps: "Tag · Timbri di stato", notesGroup: "Tag · Tipi di note", moodReading: "Tag · Umore e Reading List", functional: "Tag funzionali" },
};

const BUILTIN_TAGS = {
  en: {
    "Quadrant 1": ["Q1 • Do first", "stamp", "#a8443a", "transparent"], "Quadrant 2": ["Q2 • Schedule", "stamp", "#8b773e", "rgba(244,215,88,.28)"],
    "Quadrant 3": ["Q3 • Delegate", "stamp", "#5f6b78", "transparent"], "quick screening": ["Screening ●○○", "stamp", "#3e748c", "transparent"],
    "deep analysis": ["Analysis ●●○", "stamp", "#3e748c", "transparent"], "professional research": ["Research ●●●", "stamp", "#3e748c", "transparent"],
    "[[tags]]/checklist": ["☐ Checklist", "stamp", "#4a4f5a", "transparent"], "[[tags]]/antifragile": ["Antifragile", "stamp", "#9c5b22", "transparent"],
    "[[tags]]/owing": ["Owing", "stamp", "#b23a63", "transparent"], major: ["Major", "stamp", "#fefcf6", "#1a1a2e"],
    "motive-notes": ["↳ motive", "pencil", "#92909a", "transparent"], "rediscover-notes": ["↻ rediscover", "pencil", "#92909a", "transparent"],
  },
  zh: {
    "Quadrant 1": ["Q1 • 立即做", "stamp", "#a8443a", "transparent"], "Quadrant 2": ["Q2 • 排期", "stamp", "#8b773e", "rgba(244,215,88,.28)"],
    "Quadrant 3": ["Q3 • 委派", "stamp", "#5f6b78", "transparent"], "quick screening": ["初筛 ●○○", "stamp", "#3e748c", "transparent"],
    "deep analysis": ["分析 ●●○", "stamp", "#3e748c", "transparent"], "professional research": ["研究 ●●●", "stamp", "#3e748c", "transparent"],
    "[[tags]]/checklist": ["☐ 清单", "stamp", "#4a4f5a", "transparent"], "[[tags]]/antifragile": ["反脆弱", "stamp", "#9c5b22", "transparent"],
    "[[tags]]/owing": ["待还", "stamp", "#b23a63", "transparent"], major: ["重要", "stamp", "#fefcf6", "#1a1a2e"],
    "motive-notes": ["↳ 动机", "pencil", "#92909a", "transparent"], "rediscover-notes": ["↻ 重发现", "pencil", "#92909a", "transparent"],
  },
  fr: {
    "Quadrant 1": ["Q1 • À faire", "stamp", "#a8443a", "transparent"], "Quadrant 2": ["Q2 • Planifier", "stamp", "#8b773e", "rgba(244,215,88,.28)"],
    "Quadrant 3": ["Q3 • Déléguer", "stamp", "#5f6b78", "transparent"], "quick screening": ["Tri ●○○", "stamp", "#3e748c", "transparent"],
    "deep analysis": ["Analyse ●●○", "stamp", "#3e748c", "transparent"], "professional research": ["Recherche ●●●", "stamp", "#3e748c", "transparent"],
    major: ["Majeur", "stamp", "#fefcf6", "#1a1a2e"], "motive-notes": ["↳ motif", "pencil", "#92909a", "transparent"], "rediscover-notes": ["↻ redécouvrir", "pencil", "#92909a", "transparent"],
  },
  de: {
    "Quadrant 1": ["Q1 • Zuerst", "stamp", "#a8443a", "transparent"], "Quadrant 2": ["Q2 • Planen", "stamp", "#8b773e", "rgba(244,215,88,.28)"],
    "Quadrant 3": ["Q3 • Delegieren", "stamp", "#5f6b78", "transparent"], "quick screening": ["Sichtung ●○○", "stamp", "#3e748c", "transparent"],
    "deep analysis": ["Analyse ●●○", "stamp", "#3e748c", "transparent"], "professional research": ["Recherche ●●●", "stamp", "#3e748c", "transparent"],
    major: ["Wichtig", "stamp", "#fefcf6", "#1a1a2e"], "motive-notes": ["↳ Motiv", "pencil", "#92909a", "transparent"], "rediscover-notes": ["↻ wiederfinden", "pencil", "#92909a", "transparent"],
  },
  es: {
    "Quadrant 1": ["Q1 • Primero", "stamp", "#a8443a", "transparent"], "Quadrant 2": ["Q2 • Programar", "stamp", "#8b773e", "rgba(244,215,88,.28)"],
    "Quadrant 3": ["Q3 • Delegar", "stamp", "#5f6b78", "transparent"], "quick screening": ["Cribado ●○○", "stamp", "#3e748c", "transparent"],
    "deep analysis": ["Análisis ●●○", "stamp", "#3e748c", "transparent"], "professional research": ["Investigación ●●●", "stamp", "#3e748c", "transparent"],
    major: ["Importante", "stamp", "#fefcf6", "#1a1a2e"], "motive-notes": ["↳ motivo", "pencil", "#92909a", "transparent"], "rediscover-notes": ["↻ redescubrir", "pencil", "#92909a", "transparent"],
  },
  it: {
    "Quadrant 1": ["Q1 • Prima", "stamp", "#a8443a", "transparent"], "Quadrant 2": ["Q2 • Pianifica", "stamp", "#8b773e", "rgba(244,215,88,.28)"],
    "Quadrant 3": ["Q3 • Delega", "stamp", "#5f6b78", "transparent"], "quick screening": ["Screening ●○○", "stamp", "#3e748c", "transparent"],
    "deep analysis": ["Analisi ●●○", "stamp", "#3e748c", "transparent"], "professional research": ["Ricerca ●●●", "stamp", "#3e748c", "transparent"],
    major: ["Importante", "stamp", "#fefcf6", "#1a1a2e"], "motive-notes": ["↳ motivo", "pencil", "#92909a", "transparent"], "rediscover-notes": ["↻ riscopri", "pencil", "#92909a", "transparent"],
  },
};

// Widgets use only these fallback variables when the visual theme is disabled.
// Declaring variables does not restyle Roam; each widget still loads only its own CSS.
const WIDGET_TOKENS = String.raw`
:root {
  --mag-body: "Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  --mag-heading: "Fraunces", "Noto Serif SC", "Songti SC", Georgia, serif;
  --mag-aside-font: "Fraunces", "Mag Aside CJK", "Noto Serif SC", "Songti SC", Georgia, serif;
  --mag-code: ui-monospace, SFMono-Regular, Consolas, monospace;
  --mag-paper: #fefcf6; --mag-surface: #fffdf8; --mag-active: #f3ecd9;
  --mag-ink: #1a1a2e; --mag-muted: #666675; --mag-faint: #92909a;
  --mag-blue: #236dbb; --mag-blue-soft: rgba(35,109,187,.12);
  --mag-yellow: #f4d758; --mag-yellow-soft: rgba(244,215,88,.28);
  --mag-gold: #b79a37; --mag-gold-ink: #8b773e; --mag-border: #e8e0cf;
  --mag-code-bg: #f3f0e8; --mag-inline: #f4efe4; --mag-radius: 10px;
  --mag-shadow: 0 10px 30px rgba(38,31,20,.12);
}
body.bp3-dark {
  --mag-paper: #1d1d22; --mag-surface: #24242a; --mag-active: #34323a;
  --mag-ink: #ece8df; --mag-muted: #b5b0aa; --mag-faint: #8b8784;
  --mag-blue: #75aeea; --mag-blue-soft: rgba(117,174,234,.15);
  --mag-border: #454149; --mag-code-bg: #29282e; --mag-inline: #302e34;
  --mag-shadow: 0 10px 30px rgba(0,0,0,.28);
}
`;

const TAG_FIELDS = [
  { id: "ns-moc", group: "namespaces", name: "MOC namespace", zh: "MOC 命名空间", default: "moc", match: "namespace", style: "section", glyph: "☰" },
  { id: "ns-project", group: "namespaces", name: "Project namespace", zh: "Project 命名空间", default: "project", match: "namespace", style: "section", glyph: "▣", ink: "#6b3fa0", background: "rgba(107,63,160,.09)" },
  { id: "ns-book", group: "namespaces", name: "Book namespace", zh: "Book 命名空间", default: "book", match: "namespace", style: "book" },
  { id: "ns-person", group: "namespaces", name: "Person namespace", zh: "人物命名空间", default: "Giant", match: "namespace", style: "person" },
  { id: "ns-industry", group: "namespaces", name: "Industry namespace", zh: "行业命名空间", default: "Industry", match: "namespace", style: "industry" },
  { id: "marker-ticker", group: "namespaces", name: "Ticker marker", zh: "股票代码标记", default: "($", match: "contains", style: "ticker", ink: "#2f7d5b" },
  { id: "q1", group: "stamps", name: "Quadrant 1", default: "Quadrant 1", style: "stamp", ink: "#a8443a", display: { en: "Q1 • Do first", zh: "Q1 • 立即做", fr: "Q1 • À faire", de: "Q1 • Zuerst", es: "Q1 • Primero", it: "Q1 • Prima" } },
  { id: "q2", group: "stamps", name: "Quadrant 2", default: "Quadrant 2", style: "stamp", ink: "#8b773e", background: "rgba(244,215,88,.28)", display: { en: "Q2 • Schedule", zh: "Q2 • 排期", fr: "Q2 • Planifier", de: "Q2 • Planen", es: "Q2 • Programar", it: "Q2 • Pianifica" } },
  { id: "q3", group: "stamps", name: "Quadrant 3", default: "Quadrant 3", style: "stamp", ink: "#5f6b78", display: { en: "Q3 • Delegate", zh: "Q3 • 委派", fr: "Q3 • Déléguer", de: "Q3 • Delegieren", es: "Q3 • Delegar", it: "Q3 • Delega" } },
  { id: "screening", group: "stamps", name: "Quick screening", default: "quick screening", style: "stamp", ink: "#3e748c", display: { en: "Screening ●○○", zh: "初筛 ●○○" } },
  { id: "analysis", group: "stamps", name: "Deep analysis", default: "deep analysis", style: "stamp", ink: "#3e748c", display: { en: "Analysis ●●○", zh: "分析 ●●○" } },
  { id: "research", group: "stamps", name: "Professional research", default: "professional research", style: "stamp", ink: "#3e748c", display: { en: "Research ●●●", zh: "研究 ●●●" } },
  { id: "checklist", group: "stamps", name: "Checklist", default: "[[tags]]/checklist", style: "stamp", ink: "#4a4f5a", display: { en: "☐ Checklist", zh: "☐ 清单" } },
  { id: "antifragile", group: "stamps", name: "Antifragile", default: "[[tags]]/antifragile", style: "stamp", ink: "#9c5b22", display: { en: "Antifragile", zh: "反脆弱" } },
  { id: "owing", group: "stamps", name: "Owing", default: "[[tags]]/owing", style: "stamp", ink: "#b23a63", display: { en: "Owing", zh: "待还" } },
  { id: "major", group: "stamps", name: "Major", default: "major", style: "stamp", ink: "#fefcf6", background: "#1a1a2e", display: { en: "Major", zh: "重要" } },
  { id: "motive", group: "stamps", name: "Motive notes", default: "motive-notes", style: "pencil", ink: "#92909a", display: { en: "↳ motive", zh: "↳ 动机" } },
  { id: "rediscover", group: "stamps", name: "Rediscover notes", default: "rediscover-notes", style: "pencil", ink: "#92909a", display: { en: "↻ rediscover", zh: "↻ 重发现" } },
  { id: "voice-notes", group: "notesGroup", name: "Voicenotes", default: "Voicenotes", style: "section", glyph: "◎", ink: "var(--note-voice-ink,var(--mag-muted))", background: "var(--note-voice-bg,var(--mag-blue-soft))", display: { en: "Voice note", zh: "语音笔记" } },
  { id: "literature-notes", group: "notesGroup", name: "LiteratureNotes", default: "LiteratureNotes", style: "section", glyph: "¶", ink: "var(--note-lit-ink,var(--mag-blue))", background: "var(--note-lit-bg,var(--mag-blue-soft))", display: { en: "Literature note", zh: "文献笔记" } },
  { id: "permanent-notes", group: "notesGroup", name: "PermanentNotes", default: "PermanentNotes", style: "section", glyph: "❧", ink: "var(--note-green-ink,#53715e)", background: "var(--note-green-bg,rgba(83,113,94,.10))", display: { en: "Permanent Notes", zh: "永久笔记" } },
  { id: "foot-notes", group: "notesGroup", name: "Footnotes", default: "Footnotes", style: "section", glyph: "†", ink: "var(--note-foot-ink,var(--mag-muted))", background: "var(--note-foot-bg,var(--mag-inline))", display: { en: "Footnote", zh: "脚注" } },
  { id: "definition-notes", group: "notesGroup", name: "DefinitionNotes", default: "DefinitionNotes", style: "section", glyph: "§", ink: "var(--note-def-ink,var(--mag-muted))", background: "var(--note-def-bg,var(--mag-inline))", display: { en: "Definition", zh: "定义" } },
  { id: "mood-high", group: "moodReading", name: "Mood high", default: "[[tags]]/mood-high", style: "mood", glyph: "✦", ink: "#53715e", display: { en: "high spirits", zh: "兴致高" } },
  { id: "mood-mid", group: "moodReading", name: "Mood mid", default: "[[tags]]/mood-mid", style: "mood", glyph: "◇", ink: "var(--mag-ink)", display: { en: "steady", zh: "平稳" } },
  { id: "mood-low", group: "moodReading", name: "Mood low", default: "[[tags]]/mood-low", style: "mood", glyph: "☾", ink: "#686b82", display: { en: "low tide", zh: "低潮" } },
  { id: "reading-inbox", group: "moodReading", name: "Reading List: Inbox", default: "Reading List: Inbox", style: "section", glyph: "↘", ink: "var(--note-lit-ink,var(--mag-blue))", background: "var(--note-lit-bg,var(--mag-blue-soft))", display: { en: "Reading · Inbox", zh: "阅读 · 待读" } },
  { id: "reading-shortlist", group: "moodReading", name: "Reading List: Shortlist", default: "Reading List: Shortlist", style: "section", glyph: "☞", ink: "var(--mag-gold-ink)", background: "var(--mag-yellow-soft)", display: { en: "Reading · Shortlist", zh: "阅读 · 精选" } },
  { id: "reading-archive", group: "moodReading", name: "Reading List: Archive", default: "Reading List: Archive", style: "section", glyph: "∎", ink: "var(--note-def-ink,var(--mag-muted))", background: "var(--note-def-bg,var(--mag-inline))", display: { en: "Reading · Archive", zh: "阅读 · 归档" } },
  { id: "important", group: "functional", name: "Important block tag", zh: "重要块标签", default: "[[tags]]/important", visual: false },
  { id: "class-prefix", group: "functional", name: "Hidden class-tag prefix", zh: "隐藏类标签前缀", default: ".", visual: false },
];

let currentRuntime = null;

function detectLocale() {
  const language = String(navigator.language || "en").toLowerCase();
  if (language.startsWith("zh")) return "zh";
  if (language.startsWith("fr")) return "fr";
  if (language.startsWith("de")) return "de";
  if (language.startsWith("es")) return "es";
  if (language.startsWith("it")) return "it";
  return "en";
}

function createCore() {
  const doc = document;
  const body = doc.body;
  const modules = new Map();
  const watchers = new Map();
  const cleanups = [];
  const idle = window.requestIdleCallback
    ? (fn) => window.requestIdleCallback(fn, { timeout: 700 })
    : (fn) => window.setTimeout(fn, 100);
  const cancelIdle = window.cancelIdleCallback || window.clearTimeout;
  let handle = 0;
  let deferred = false;
  const pendingMutations = [];

  const isBlockInput = (element) =>
    element instanceof HTMLTextAreaElement && element.classList.contains("rm-block-input");
  const scope = () => {
    const off = [];
    return {
      on(target, type, fn, options) {
        target.addEventListener(type, fn, options);
        off.push(() => target.removeEventListener(type, fn, options));
      },
      dispose() {
        off.splice(0).forEach((fn) => fn());
      },
    };
  };
  const store = {
    get(key, fallback) {
      try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : value;
      } catch (_) {
        return fallback;
      }
    },
    set(key, value) {
      try { localStorage.setItem(key, String(value)); } catch (_) {}
    },
  };
  const runSync = () => {
    handle = 0;
    const mutations = pendingMutations.splice(0);
    const pdfRoute = /\/pdf\//.test(location.hash);
    for (const [name, module] of modules) {
      if (pdfRoute && !["pdf", "folioPdfExit", "folioNativeSidebarChrome"].includes(name)) continue;
      try { module?.sync?.(); } catch (error) { console.warn(`[Folio] ${name}`, error); }
    }
    for (const [name, callback] of watchers) {
      if (pdfRoute) continue;
      try { callback(mutations); } catch (error) { console.warn(`[Folio] ${name}`, error); }
    }
  };
  const scheduleSync = () => {
    if (!handle) handle = idle(runSync);
  };
  const observer = new MutationObserver((records) => {
    if (records.length && records.every(record => (record.target instanceof Element && record.target.closest('#folio-settings-dialog')) || ([...(record.addedNodes||[]),...(record.removedNodes||[])].length && [...(record.addedNodes||[]),...(record.removedNodes||[])].every(node => node instanceof Element && node.id === 'folio-settings-dialog')))) return;
    // PDF.js creates hundreds of canvas/text nodes. Do not run every feature
    // on each render chunk, nor query the graph while the viewer is loading.
    if (records.length && records.every(record => record.target instanceof Element && record.target.closest(".rm-pdf-container"))) {
      const toolbarChanged = records.some(record => record.target.closest(".rm-pdf-toolbar") || [...record.addedNodes].some(node => node instanceof Element && node.matches(".rm-pdf-toolbar")));
      if (toolbarChanged) { modules.get("pdf")?.sync?.(); modules.get("folioPdfExit")?.sync?.(); }
      return;
    }
    const pickerAdded = records.some(record => [...record.addedNodes].some(node => node instanceof Element && (node.matches(".bp3-datepicker") || node.querySelector(".bp3-datepicker"))));
    if (pickerAdded) {
      // MutationObserver runs before paint; build the calendar columns together.
      window.__folioAttachCalendar?.();
      for (const [name, callback] of watchers) if (name.startsWith("runner:calendar-")) callback(records);
    }
    pendingMutations.push(...records);
    if (isBlockInput(doc.activeElement)) {
      deferred = true;
      return;
    }
    scheduleSync();
  });
  observer.observe(body, { childList: true, subtree: true });

  const listen = (target, type, fn, options) => {
    target.addEventListener(type, fn, options);
    cleanups.push(() => target.removeEventListener(type, fn, options));
  };
  listen(doc, "focusout", (event) => {
    if (deferred && isBlockInput(event.target)) {
      deferred = false;
      scheduleSync();
    }
  }, true);
  listen(window, "hashchange", scheduleSync);
  listen(window, "resize", scheduleSync);

  const unload = (name) => {
    const module = modules.get(name);
    modules.delete(name);
    try { module?.destroy?.(); } catch (error) { console.warn(`[Folio] unload ${name}`, error); }
  };
  const core = {
    version: 2, doc, body, store, idle, scope, isBlockInput, scheduleSync,
    watch(name, callback) {
      let active = false;
      return {
        observe() {
          if (active) return;
          active = true;
          watchers.set(name, callback);
          scheduleSync();
        },
        disconnect() {
          active = false;
          watchers.delete(name);
        },
      };
    },
    load(name) {
      const setup = window.__magModules?.[name];
      unload(name);
      if (typeof setup !== "function") return;
      try { modules.set(name, setup(core) || {}); } catch (error) { console.warn(`[Folio] load ${name}`, error); }
      scheduleSync();
    },
    unload,
    destroy() {
      observer.disconnect();
      cleanups.splice(0).forEach((fn) => fn());
      if (handle) cancelIdle(handle);
      [...modules.keys()].forEach(unload);
      watchers.clear();
      pendingMutations.length = 0;
      if (window.__magCore === core) delete window.__magCore;
    },
  };
  window.__magCore?.destroy?.();
  window.__magCore = core;
  return core;
}

function parseNamespaces(value) {
  const fallback = "moc=section; project=section; book=book; Giant=person; Industry=industry";
  return String(value || fallback).split(/[;\n,]+/).map((entry) => entry.trim()).filter(Boolean).map((entry) => {
    const [namespace, style = "section"] = entry.split("=").map((part) => part.trim());
    return { namespace, style };
  }).filter((entry) => entry.namespace);
}

function parseCustomRules(value) {
  const rules = {};
  String(value || "").split(/[;\n]+/).map((entry) => entry.trim()).filter(Boolean).forEach((entry) => {
    const equal = entry.indexOf("=");
    if (equal < 1) return;
    const tag = entry.slice(0, equal).trim();
    const [label = tag, style = "stamp", ink = "", background = ""] = entry.slice(equal + 1).split("|").map((part) => part.trim());
    rules[tag] = [label, style, ink, background];
  });
  return rules;
}

function namespaceMatch(tag, namespace) {
  const escaped = namespace.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = new RegExp(`^(?:\\[\\[${escaped}\\]\\]|${escaped})/(.+)$`, "i").exec(tag)
    || new RegExp(`(?:^|/)${escaped}/(.+)$`, "i").exec(tag);
  return match?.[1] || null;
}

/* The original special-tag CSS remains authoritative.  JavaScript only strips
   namespace prefixes, exactly as the user's source did; it never redraws or
   translates the link, so Roam keeps the real clickable target. */
function registerTagLabels(runtime) {
  const rules = [
    [runtime.tagValue("ns-moc"), "namespace", ""],
    [runtime.tagValue("ns-project"), "namespace", ""],
    [runtime.tagValue("ns-book"), "namespace", "book"],
    [runtime.tagValue("ns-person"), "namespace", "person"],
    [runtime.tagValue("ns-industry"), "namespace", "industry"],
  ].filter(([value]) => value);

  const pencilTags = new Set([runtime.tagValue("motive"), runtime.tagValue("rediscover")]);
  const noteTitles = new Set(TAG_FIELDS.filter(field => field.group === "notesGroup" || field.id.startsWith("reading-")).map(field => runtime.tagValue(field.id)).filter(Boolean));
  window.__magModules = window.__magModules || {};
  window.__magModules.folioTags = (core) => ({
    sync() {
      for (const element of core.doc.querySelectorAll(".roam-app span.rm-page-ref--tag, .roam-app span[data-link-title] > .rm-page-ref")) {
        const tag = element.getAttribute("data-tag") || element.parentElement?.getAttribute("data-link-title") || "";
        let label = "", entity = "";
        for (const [value, mode, kind] of (element.getAttribute("data-tag") !== null ? rules : [])) {
          if (mode === "namespace") label = namespaceMatch(tag, value) || "";
          else {
            const index = tag.toLowerCase().lastIndexOf(`${value.toLowerCase()}/`);
            if (index >= 0) label = tag.slice(index + value.length + 1);
          }
          if (label) { entity = kind; break; }
        }
        if (element.getAttribute("data-tag") !== null && pencilTags.has(tag)) entity = "pencil";
        if (entity) element.dataset.folioEntity = entity;
        else delete element.dataset.folioEntity;
        if (noteTitles.has(tag)) element.dataset.folioNoteLabel = "true";
        else delete element.dataset.folioNoteLabel;
        if (label) element.dataset.magLabel = label;
        else if (element.dataset.magLabel) delete element.dataset.magLabel;
      }
    },
    destroy() {
      core.doc.querySelectorAll(".roam-app span.rm-page-ref--tag[data-mag-label]").forEach((element) => delete element.dataset.magLabel);
      core.doc.querySelectorAll(".roam-app [data-folio-entity], .roam-app [data-folio-note-label]").forEach(element => { delete element.dataset.folioEntity; delete element.dataset.folioNoteLabel; });
    },
  });
  runtime.core.load("folioTags");
}

function registerScrollIndicator(runtime) {
  const timers = new Map();
  const selector = ".roam-body-main > .rm-article-wrapper, .roam-body-main #rm-log-container";
  const onScroll = (event) => {
    const scroller = event.target?.matches?.(selector) ? event.target : null;
    if (!scroller) return;
    scroller.classList.add("mag-scroll-active");
    window.clearTimeout(timers.get(scroller));
    timers.set(scroller, window.setTimeout(() => {
      scroller.classList.remove("mag-scroll-active");
      timers.delete(scroller);
    }, 720));
  };
  document.addEventListener("scroll", onScroll, { capture: true, passive: true });
  runtime.nativeCleanups.set("scroll-indicator", () => {
    document.removeEventListener("scroll", onScroll, true);
    for (const [element, timer] of timers) {
      window.clearTimeout(timer);
      element.classList.remove("mag-scroll-active");
    }
    timers.clear();
    document.querySelectorAll(".mag-scroll-active").forEach((element) => element.classList.remove("mag-scroll-active"));
  });
}

function pdfReturnHash(current, previous) {
  const match = current.match(/^(#\/app\/[^/]+)\/pdf\/([^/?#]+)/);
  if (!match) return null;
  return previous && previous.startsWith(match[1] + "/") && !/\/pdf\//.test(previous)
    ? previous : match[1] + "/page/" + match[2];
}
function registerPdfEscape(runtime) {
  const core = runtime.ensureCore();
  let previous = /\/pdf\//.test(location.hash) ? "" : location.hash;
  let link = null;
  const capture = event => {
    if (event.target.closest?.('.rm-pdf-container:not(.rm-pdf-container--fullscreen) [data-mag-pdf="fullscreen"]')) previous = location.hash;
  };
  const sync = () => {
    const container = document.querySelector(".rm-pdf-container--fullscreen");
    const target = pdfReturnHash(location.hash, previous);
    if (!container || !target) {
      link?.remove(); link = null;
      if (!/\/pdf\//.test(location.hash)) previous = location.hash;
      return;
    }
    const toolbar = container.querySelector(".rm-pdf-toolbar");
    if (!toolbar) return;
    if (!link) {
      link = document.createElement("a");
      link.className = "folio-pdf-exit";
      link.textContent = runtime.locale === "zh" ? "退出全屏 · Esc" : "Exit fullscreen · Esc";
      link.setAttribute("aria-label", link.textContent);
    }
    if (link.getAttribute("href") !== target) link.setAttribute("href", target);
    if (link.parentElement !== document.body) document.body.append(link);
  };
  const onKeyDown = event => {
    if (event.key !== "Escape" || event.defaultPrevented || !link?.isConnected) return;
    if ([...document.querySelectorAll('.bp3-dialog, .bp4-dialog, .rm-modal-dialog, .bp3-popover')].some(el => el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden')) return;
    if (event.target.closest?.('input,textarea,select,[contenteditable="true"]')) return;
    event.preventDefault();
    event.stopPropagation();
    link.click();
  };
  document.addEventListener("click", capture, true);
  document.addEventListener("keydown", onKeyDown);
  window.__magModules.folioPdfExit = () => ({sync, destroy(){link?.remove();}});
  core.load("folioPdfExit");
  runtime.nativeCleanups.set("pdf", () => {
    document.removeEventListener("click", capture, true);
    document.removeEventListener("keydown", onKeyDown);
    core.unload("folioPdfExit");
    delete window.__magModules.folioPdfExit;
  });
}

function createRuntime(extensionAPI) {
  const runtime = {
    extensionAPI,
    enabled: new Set(),
    activeJs: new Set(),
    nativeCleanups: new Map(),
    featureValues: new Map(),
    core: null,
    destroyed: false,
    locale: "en",
    languageChoice: "Auto",
    themeEnabled: true,
    paused: false,
    cssPaused: false,
    codeMaxHeight: 420,
    toolbarSettingsEnabled: true,
    settingsDefinitions: [],
    toolbarUi: null,
    shortcuts: {...SHORTCUT_DEFAULTS},
    calendarShortcutsEnabled: false,
    randomExcludedPages: RANDOM_EXCLUDED_DEFAULT,
    randomExcludeFuture: true,
    templates: {weekday:"",weekend:"",plan:""},
    settingsSection: "appearance",
    bodyFont: "",
    headingFont: "",
    mottoLine1: "THINK. OWN. COMPOUND.",
    mottoLine2: "FESTINA LENTE.",
    tagValues: new Map(),
    tagTimer: 0,
    openSections: new Set(),
    startGeneration: 0,
    startHandle: 0,
  };

  runtime.ensureCore = () => {
    if (!runtime.core) runtime.core = createCore();
    return runtime.core;
  };

  runtime.tagValue = (id) => {
    const field = TAG_FIELDS.find((item) => item.id === id);
    const value = String(runtime.tagValues.get(id) ?? field?.default ?? "").trim();
    return value || (field?.visual === false ? field.default : "");
  };

  runtime.syncTagConfig = () => {
    window.__folioTagConfig = {
      important: runtime.tagValue("important"),
      classPrefix: runtime.tagValue("class-prefix"),
    };
  };

  runtime.personalizeCss = (id, source) => {
    const attr = (value) => String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    if (id === "inline") {
      return source.replaceAll('"[[tags]]/important"', `"${attr(runtime.tagValue("important"))}"`);
    }
    if (id === "misc") {
      return source.replaceAll('[data-tag^="."]', `[data-tag^="${attr(runtime.tagValue("class-prefix"))}"]`);
    }

    if (id === "tags") {
      const replacements = [
        ["moc", runtime.tagValue("ns-moc")],
        ["project", runtime.tagValue("ns-project")],
        ["book", runtime.tagValue("ns-book")],
        ["Giant", runtime.tagValue("ns-person")],
        ["Industry", runtime.tagValue("ns-industry")],
        ["($", runtime.tagValue("marker-ticker")],
        ["Quadrant 1", runtime.tagValue("q1")],
        ["Quadrant 2", runtime.tagValue("q2")],
        ["Quadrant 3", runtime.tagValue("q3")],
        ["quick screening", runtime.tagValue("screening")],
        ["deep analysis", runtime.tagValue("analysis")],
        ["professional research", runtime.tagValue("research")],
        ["[[tags]]/checklist", runtime.tagValue("checklist")],
        ["[[tags]]/antifragile", runtime.tagValue("antifragile")],
        ["[[tags]]/owing", runtime.tagValue("owing")],
        ["major", runtime.tagValue("major")],
        ["motive-notes", runtime.tagValue("motive")],
        ["rediscover-notes", runtime.tagValue("rediscover")],
        ["Voicenotes", runtime.tagValue("voice-notes")],
        ["LiteratureNotes", runtime.tagValue("literature-notes")],
        ["PermanentNotes", runtime.tagValue("permanent-notes")],
        ["Footnotes", runtime.tagValue("foot-notes")],
        ["DefinitionNotes", runtime.tagValue("definition-notes")],
        ["[[tags]]/mood-high", runtime.tagValue("mood-high")],
        ["[[tags]]/mood-mid", runtime.tagValue("mood-mid")],
        ["[[tags]]/mood-low", runtime.tagValue("mood-low")],
        ["Reading List: Inbox", runtime.tagValue("reading-inbox")],
        ["Reading List: Shortlist", runtime.tagValue("reading-shortlist")],
        ["Reading List: Archive", runtime.tagValue("reading-archive")],
      ];
      let output = source;
      for (const [from, to] of replacements) if (to && to !== from) output = output.replaceAll(from, to);
      return output;
    }
    return source;
  };

  runtime.appearanceCss = () => {
    if (!runtime.themeEnabled) return "";
    const quote = (value) => String(value || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    const lines = [];
    if (fontFamily(runtime.bodyFont)) lines.push(`--mag-body:${fontFamily(runtime.bodyFont)};`);
    if (fontFamily(runtime.headingFont)) lines.push(`--mag-heading:${fontFamily(runtime.headingFont)};--mag-aside-font:${fontFamily(runtime.headingFont)};`);
    const motto = [cleanMotto(runtime.mottoLine1).trim(), cleanMotto(runtime.mottoLine2).trim()].filter(Boolean).map(quote).join("\\A ");
    return `${lines.length ? `:root{${lines.join("")}}` : ""}\n` +
      `html body .roam-app .roam-sidebar-container .rm-db-title-container::after{content:"${motto}"!important;white-space:pre!important;width:100%!important;max-width:100%!important;overflow-wrap:normal!important;letter-spacing:.85px!important;height:auto!important;max-height:3.8em!important;overflow:hidden!important;line-height:1.9!important}`;
  };

  runtime.cleanupFeature = (feature) => {
    if (feature.native) {
      try { runtime.nativeCleanups.get(feature.id)?.(); } catch (error) { console.warn(`[Folio] cleanup ${feature.id}`, error); }
      runtime.nativeCleanups.delete(feature.id);
    }
    if (feature.custom) {
      runtime.core?.unload("folioTags");
      if (window.__magModules) delete window.__magModules.folioTags;
    }
    if (feature.module) {
      runtime.core?.unload(feature.module);
      if (window.__magModules) delete window.__magModules[feature.module];
    }
    for (const [key, method] of feature.cleanups || []) {
      const target = window[key];
      try {
        if (method && typeof target?.[method] === "function") target[method]();
        else if (!method && typeof target === "function") target();
      } catch (error) {
        console.warn(`[Folio] cleanup ${feature.id}:${key}`, error);
      }
    }
    runtime.activeJs.delete(feature.id);
  };

  runtime.startFeature = (feature) => {
    if (runtime.activeJs.has(feature.id)) return;
    try {
      if (feature.custom || feature.runner) {
        runtime.ensureCore();
        if (feature.custom === "tagLabels") registerTagLabels(runtime);
        else if (feature.runner) MAGAZINE_RUNNERS[feature.runner]?.();
      }
      if (feature.native === "scrollIndicator") registerScrollIndicator(runtime);
      if (feature.native === "nativeSidebarToggles") registerNativeSidebarToggles(runtime);
      if (feature.native === "pdfEscape") registerPdfEscape(runtime);
      if (feature.native === "videoOpenSidebar") registerVideoOpenSidebar(runtime);
      runtime.activeJs.add(feature.id);
    } catch (error) {
      console.error(`[Folio] failed to start ${feature.id}`, error);
      runtime.cleanupFeature(feature);
    }
  };

  runtime.cancelStarts = () => {
    runtime.startGeneration += 1;
    if (!runtime.startHandle) return;
    if (window.cancelIdleCallback) window.cancelIdleCallback(runtime.startHandle);
    else window.clearTimeout(runtime.startHandle);
    runtime.startHandle = 0;
  };

  runtime.scheduleStarts = (desiredJs) => {
    runtime.cancelStarts();
    const generation = runtime.startGeneration;
    const queue = FEATURES.filter((feature) => desiredJs.has(feature.id) && !runtime.activeJs.has(feature.id));
    if (!queue.length) return;
    const schedule = (fn) => {
      runtime.startHandle = window.requestIdleCallback
        ? window.requestIdleCallback(fn, { timeout: 450 })
        : window.setTimeout(() => fn({ timeRemaining: () => 0 }), 40);
    };
    const step = (deadline) => {
      runtime.startHandle = 0;
      if (runtime.destroyed || generation !== runtime.startGeneration) return;
      let started = 0;
      while (queue.length && (started === 0 || deadline.timeRemaining() > 5)) {
        const feature = queue.shift();
        if (desiredJs.has(feature.id) && runtime.featureValues.get(feature.id) && !runtime.paused) {
          runtime.startFeature(feature);
        }
        started += 1;
      }
      if (queue.length) schedule(step);
    };
    schedule(step);
  };

  runtime.rebuildCss = () => {
    runtime.toolbarUi?.sync();
    let fonts = document.getElementById("folio-theme-fonts");
    if (runtime.themeEnabled && !runtime.cssPaused) {
      if (!fonts) {
        fonts = document.createElement("link");
        fonts.id = "folio-theme-fonts";
        fonts.rel = "stylesheet";
        fonts.href = MAGAZINE_CSS["web-fonts"].match(/url\(["']?([^"')]+)/)?.[1] || "";
        fonts.onload = () => document.fonts.ready.then(() => {
          if (!runtime.destroyed && runtime.themeEnabled) {
            runtime.core?.scheduleSync();
            document.dispatchEvent(new Event("folio:appearance-change"));
          }
        });
        document.head.appendChild(fonts);
      }
    } else fonts?.remove();
    if (runtime.cssPaused || (!runtime.themeEnabled && runtime.enabled.size === 0)) {
      document.getElementById(STYLE_ID)?.remove();
      return;
    }
    const chunks = [];
    // CSS @import must precede every normal rule or the browser ignores it.
    if (runtime.themeEnabled && MAGAZINE_CSS["web-fonts"]) chunks.push(MAGAZINE_CSS["web-fonts"]);
    chunks.push(runtime.themeEnabled ? WIDGET_TOKENS : (MAGAZINE_CSS["native-component-tokens"] || WIDGET_TOKENS));
    if (runtime.themeEnabled) {
      for (const id of THEME_CSS_IDS) {
        if (id === "web-fonts") continue;
        if (MAGAZINE_CSS[id]) chunks.push(`/* theme:${id} */\n${runtime.personalizeCss(id, MAGAZINE_CSS[id])}`);
      }
    }
    for (const feature of FEATURES) {
      if (!runtime.enabled.has(feature.id) || !MAGAZINE_CSS[feature.id]) continue;
      chunks.push(`/* component:${feature.id} */\n${runtime.personalizeCss(feature.id, MAGAZINE_CSS[feature.id])}`);
    }
    chunks.push(runtime.appearanceCss());
    if (runtime.enabled.has("code-height")) chunks.push(`
      html body .roam-app .CodeMirror {height:auto!important;max-height:${runtime.codeMaxHeight || "none"}${runtime.codeMaxHeight ? "px" : ""}!important;}
      html body .roam-app :is(.CodeMirror-scroll,.cm-editor .cm-scroller) {max-height:${runtime.codeMaxHeight || "none"}${runtime.codeMaxHeight ? "px" : ""}!important;overflow-y:auto!important;}
    `);
    else chunks.push(`html body .roam-app :is(.CodeMirror,.CodeMirror-scroll,.cm-editor .cm-scroller) {max-height:none!important;} html body .roam-app .CodeMirror {height:auto!important;}`);
    if (!runtime.themeEnabled && runtime.enabled.has("right-sidebar")) chunks.push(`
      html body .roam-app #right-sidebar { --rs-header-height:48px; --rs-card-padding-top:16px; --rs-card-padding-bottom:16px; --rs-card-shadow:none; --rs-folded-shadow:none; }
      html body .roam-app #right-sidebar .rm-title-display {font-family:inherit!important;font-size:24px!important;line-height:1.3!important;letter-spacing:normal!important;white-space:normal!important;overflow-wrap:anywhere!important;}
      html body .roam-app #right-sidebar .roam-article {padding:0!important;min-width:0!important;}
      html body .roam-app #right-sidebar .rm-sidebar-outline-wrapper {font-family:var(--mag-body)!important;}
    `);
    let style = document.getElementById(STYLE_ID);
    if (!style) {
      style = document.createElement("style");
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }
    style.textContent = chunks.join("\n\n");
    runtime.core?.scheduleSync();
    document.dispatchEvent(new Event("folio:appearance-change"));
  };

  runtime.apply = () => {
    runtime.syncTagConfig();
    runtime.enabled = new Set(FEATURES.filter((feature) => runtime.featureValues.get(feature.id)).map((feature) => feature.id));
    runtime.rebuildCss();

    const desiredJs = new Set(
      runtime.paused || runtime.cssPaused ? [] : FEATURES.filter((feature) => runtime.enabled.has(feature.id) && !feature.cssOnly).map((feature) => feature.id)
    );
    const needsPage = !runtime.paused && !runtime.cssPaused && FEATURES.some((feature) => feature.page && desiredJs.has(feature.id));

    for (const feature of [...FEATURES].reverse()) {
      if (runtime.activeJs.has(feature.id) && !desiredJs.has(feature.id)) runtime.cleanupFeature(feature);
    }
    if (!needsPage && runtime.activeJs.has("page-engine")) {
      runtime.core?.unload("page");
      if (window.__magModules) delete window.__magModules.page;
      runtime.activeJs.delete("page-engine");
    }
    if (needsPage && !runtime.activeJs.has("page-engine")) {
      runtime.ensureCore();
      try {
        MAGAZINE_RUNNERS["page-engine"]?.();
        runtime.activeJs.add("page-engine");
      } catch (error) {
        console.error("[Folio] failed to start page engine", error);
      }
    }
    runtime.scheduleStarts(desiredJs);
    if (!runtime.activeJs.size && runtime.core) {
      runtime.core.destroy();
      runtime.core = null;
    }
    runtime.toolbarUi?.sync();
  };

  runtime.refreshTags = () => {
    window.clearTimeout(runtime.tagTimer);
    runtime.tagTimer = window.setTimeout(() => {
      runtime.syncTagConfig();
      runtime.rebuildCss();
      for (const id of ["tags", "asides"]) {
        const feature = FEATURES.find((item) => item.id === id);
        if (!feature || !runtime.activeJs.has(id)) continue;
        runtime.cleanupFeature(feature);
        runtime.startFeature(feature);
      }
    }, 260);
  };

  runtime.resolveLocale = () => {
    const code = LANGUAGE_ITEM_TO_CODE[runtime.languageChoice] || "auto";
    runtime.locale = code === "auto" ? detectLocale() : code;
    window.__magLocale = runtime.locale;
  };

  runtime.createPanel = async () => {
    const ui = UI[runtime.locale] || UI.en;
    const names = FEATURE_NAMES[runtime.locale] || FEATURE_NAMES.en;
    const groupNames = GROUP_NAMES[runtime.locale] || GROUP_NAMES.en;
    const copy = SETTINGS_COPY[runtime.locale] || SETTINGS_COPY.en;
    const widgetGroups = FUNCTION_GROUPS.map((group) => ({...group, type: "features", description: copy.impactHelp}));
    const detailsCopy = SETTINGS_DETAILS[runtime.locale] || SETTINGS_DETAILS.en;
    const appearanceGroup = { id: "appearance", type: "appearance", description: detailsCopy.appearance };
    const tagGroups = ["namespaces", "stamps", "notesGroup", "moodReading", "functional"].map((id) => ({
      id,
      type: "tags",
      description: id === "namespaces" ? detailsCopy.namespaces : ui.tagsSectionDesc,
    }));
    const accordion = (group, initiallyOpen = false) => ({
      id: `${SETTING_PREFIX}group-${group.id}`,
      name: "",
      description: "",
      action: {
        type: "reactComponent",
        component: () => {
          const React = window.React;
          if (!React) return null;
          const rowStyle = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", padding: "10px 2px", borderTop: "1px solid rgba(128,128,128,.16)" };
          const textStyle = { minWidth: 0, flex: "1 1 auto" };
          const nameStyle = { fontSize: "13px", fontWeight: 600, lineHeight: 1.35 };
          const descStyle = { display: "block", marginTop: "3px", fontSize: "11px", opacity: .65, lineHeight: 1.4 };
          const appearanceLabels = {
            en: ["Body font", "Heading and margin-note font", "Motto · line 1", "Motto · line 2"],
            zh: ["正文字体", "标题与旁注字体", "座右铭 · 第一行", "座右铭 · 第二行"],
            fr: ["Police du texte", "Police des titres et marges", "Devise · ligne 1", "Devise · ligne 2"],
            de: ["Textschrift", "Überschriften- und Randschrift", "Motto · Zeile 1", "Motto · Zeile 2"],
            es: ["Fuente del texto", "Fuente de títulos y márgenes", "Lema · línea 1", "Lema · línea 2"],
            it: ["Font del testo", "Font di titoli e note", "Motto · riga 1", "Motto · riga 2"],
          }[runtime.locale] || ["Body font", "Heading font", "Motto · line 1", "Motto · line 2"];
          const appearanceFields = [
            ["body-font", "bodyFont", appearanceLabels[0], ""],
            ["heading-font", "headingFont", appearanceLabels[1], ""],
            ["motto-line-1", "mottoLine1", appearanceLabels[2], "THINK. OWN. COMPOUND."],
            ["motto-line-2", "mottoLine2", appearanceLabels[3], "FESTINA LENTE."],
          ];
          const featureRows = group.type === "features" ? group.ids.map((id) => {
            const feature = FEATURES.find((item) => item.id === id);
            if (!feature) return null;
            return React.createElement("div", { key: id }, React.createElement("label", { style: rowStyle },
              React.createElement("span", { style: textStyle },
                React.createElement("span", { style: nameStyle }, names[id] || (id === "code-height" ? copy.code : id === "sidebar-toggles" ? copy.sidebar : id)),
                React.createElement("span", { title: copy.impact, style: { display: "inline-block", fontSize: "10px", fontWeight: 500, border: "1px solid rgba(128,128,128,.35)", borderRadius: "4px", padding: "1px 5px", marginLeft: "7px", whiteSpace: "nowrap" } }, ui.impact[feature.impact - 1]),
                React.createElement("span", { style: descStyle }, feature.cssOnly ? ui.cssDesc : ui.interactiveDesc)
              ),
              React.createElement("input", {
                type: "checkbox",
                defaultChecked: Boolean(runtime.featureValues.get(id)),
                onChange: (event) => {
                  runtime.featureValues.set(id, Boolean(event.target.checked));
                  void extensionAPI.settings.set(`${SETTING_PREFIX}feature-${id}`, Boolean(event.target.checked));
                  runtime.apply();
                },
              })
            ), id === "random-tasks" ? randomTodoSettings(runtime, React, copy) : null);
          }) : group.type === "appearance" ? appearanceFields.map(([id, property, label, placeholder]) =>
            React.createElement("label", { key: id, style: { ...rowStyle, alignItems: "flex-start" } },
              React.createElement("span", { style: textStyle }, React.createElement("span", { style: nameStyle }, label)),
              React.createElement("input", {
                type: "text",
                defaultValue: id.startsWith("motto-") ? cleanMotto(runtime[property]) : runtime[property],
                placeholder,
                maxLength: id.startsWith("motto-") ? 24 : 200,
                onInput: id.startsWith("motto-") ? event => { if (!event.nativeEvent?.isComposing) event.target.value = cleanMotto(event.target.value); } : undefined,
                onCompositionEnd: id.startsWith("motto-") ? event => { event.target.value = cleanMotto(event.target.value); runtime[property] = event.target.value; void extensionAPI.settings.set(`${SETTING_PREFIX}${id}`, runtime[property]); runtime.rebuildCss(); } : undefined,
                spellCheck: false,
                style: { boxSizing: "border-box", width: "min(52%, 300px)", minWidth: "160px", padding: "5px 7px" },
                onChange: (event) => {
                  runtime[property] = id.startsWith("motto-") ? cleanMotto(event.target.value) : fontFamily(event.target.value);
                  if (id.startsWith("motto-") && !event.nativeEvent?.isComposing) event.target.value = runtime[property];
                  void extensionAPI.settings.set(`${SETTING_PREFIX}${id}`, runtime[property]);
                  runtime.rebuildCss();
                },
              })
            )
          ) : TAG_FIELDS.filter((field) => field.group === group.id).map((field) =>
            React.createElement("label", { key: field.id, style: { ...rowStyle, alignItems: "flex-start" } },
              React.createElement("span", { style: textStyle },
                React.createElement("span", { style: nameStyle }, settingsTagFieldName(field, runtime.locale)),
                React.createElement("span", { style: descStyle }, `${copy.defaultLabel}: ${field.default}`)
              ),
              React.createElement("input", {
                type: "text",
                defaultValue: runtime.tagValues.get(field.id) ?? field.default,
                spellCheck: false,
                style: { boxSizing: "border-box", width: "min(46%, 260px)", minWidth: "150px", padding: "5px 7px" },
                onChange: (event) => {
                  runtime.tagValues.set(field.id, event.target.value);
                  void extensionAPI.settings.set(`${SETTING_PREFIX}tag-${field.id}`, event.target.value);
                  runtime.refreshTags();
                },
              })
            )
          );
          return React.createElement("details", {
            className: "folio-settings-group",
            ref: (node) => { if (node && !node.dataset.folioInitialized) { node.open = initiallyOpen || runtime.openSections.has(group.id); node.dataset.folioInitialized = "true"; } },
            onToggle: (event) => {
              if (event.currentTarget.open) runtime.openSections.add(group.id);
              else runtime.openSections.delete(group.id);
              void extensionAPI.settings.set(`${SETTING_PREFIX}open-groups`, JSON.stringify([...runtime.openSections]));
            },
            style: { width: "100%", margin: "4px 0", border: "1px solid rgba(128,128,128,.24)", borderRadius: "8px", overflow: "hidden" },
          },
          React.createElement("summary", { style: { cursor: "pointer", padding: "11px 12px", fontSize: "14px", fontWeight: 700, userSelect: "none" } }, groupNames[group.id] || copy.groups[FUNCTION_GROUPS.findIndex(item => item.id === group.id)] || group.id),
          React.createElement("div", { style: { padding: "0 12px 8px" } },
            group.description ? React.createElement("div", { style: { padding: "0 2px 9px", fontSize: "11.5px", opacity: .68, lineHeight: 1.45 } }, group.description) : null,
            featureRows
          ));
        },
      },
    });
    const settings = [
      folioToolbarSetting(runtime),
      {
        id: `${SETTING_PREFIX}version`,
        name: ({ zh: "当前版本", fr: "Version actuelle", de: "Aktuelle Version", es: "Versión actual", it: "Versione corrente" }[runtime.locale] || "Current version"),
        description: `Folio ${VERSION} · ${BUILD_DATE}`,
        action: {
          type: "reactComponent",
          component: () => {
            const React = window.React;
            return React ? React.createElement("code", {
              style: { fontSize: "12px", fontWeight: 700, padding: "3px 7px", borderRadius: "5px", background: "rgba(128,128,128,.14)" },
            }, `v${VERSION}`) : null;
          },
        },
      },
      {
        id: `${SETTING_PREFIX}language`,
        name: ui.language,
        description: ui.languageDesc,
        action: {
          type: "select",
          items: SETTINGS_LANGUAGE_ITEMS,
          onChange: (item) => {
            runtime.languageChoice = item;
            void extensionAPI.settings.set(`${SETTING_PREFIX}language`, item);
            runtime.resolveLocale();
            refreshCalendarLanguage(runtime);
            runtime.core?.scheduleSync();
            runtime.refreshTags();
            window.setTimeout(() => runtime.createPanel(), 0);
          },
        },
      },
      {
        id: `${SETTING_PREFIX}theme-enabled`,
        name: ({ zh: "启用 Folio 主题", fr: "Activer le thème Folio", de: "Folio-Design aktivieren", es: "Activar el tema Folio", it: "Attiva il tema Folio" }[runtime.locale] || "Enable Folio theme"),
        description: ({ zh: "开启时使用完整杂志风；关闭时，各组件继续运行并适配 Roam 原生亮色／暗色。", fr: "Active le style magazine complet; désactivé, les composants suivent le thème natif clair/sombre.", de: "Aktiviert den vollständigen Magazinstil; deaktiviert folgen Komponenten Roams hellem/dunklem Design.", es: "Activa el estilo completo; desactivado, los componentes siguen el tema nativo claro/oscuro.", it: "Attiva lo stile completo; disattivato, i componenti seguono il tema nativo chiaro/scuro." }[runtime.locale] || "Use the complete magazine style. When off, enabled components follow Roam's native light or dark theme."),
        action: {
          type: "switch",
          onChange: (event) => {
            runtime.themeEnabled = Boolean(event.target.checked);
            void extensionAPI.settings.set(`${SETTING_PREFIX}theme-enabled`, runtime.themeEnabled);
            runtime.rebuildCss();
          },
        },
      },
      {
        id: `${SETTING_PREFIX}pause-css`,
        name: ui.cssPause,
        description: ui.cssPauseDesc,
        action: {
          type: "switch",
          onChange: (event) => {
            runtime.cssPaused = Boolean(event.target.checked);
            void extensionAPI.settings.set(`${SETTING_PREFIX}pause-css`, runtime.cssPaused);
            runtime.apply();
          },
        },
      },
      {
        id: `${SETTING_PREFIX}pause-interactive`,
        name: ui.pause,
        description: ui.pauseDesc,
        action: {
          type: "switch",
          onChange: (event) => {
            runtime.paused = Boolean(event.target.checked);
            void extensionAPI.settings.set(`${SETTING_PREFIX}pause-interactive`, runtime.paused);
            runtime.apply();
          },
        },
      },
      functionalSettings(runtime, accordion, appearanceGroup, widgetGroups, tagGroups),
      {
        id: `${SETTING_PREFIX}reset-all`,
        name: ui.reset,
        description: ui.resetDesc,
        action: {
          type: "button",
          content: ui.resetButton,
          onClick: async () => {
            const writes = [];
            for (const feature of FEATURES) {
              runtime.featureValues.set(feature.id, true);
              writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}feature-${feature.id}`, true));
            }
            for (const field of TAG_FIELDS) {
              runtime.tagValues.set(field.id, field.default);
              writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}tag-${field.id}`, field.default));
            }
            runtime.paused = false;
            runtime.cssPaused = false;
            runtime.themeEnabled = true;
            setFolioToolbarVisibility(runtime, true);
            runtime.bodyFont = "";
            runtime.headingFont = "";
            runtime.codeMaxHeight = 420;
            runtime.shortcuts = {...SHORTCUT_DEFAULTS};
            runtime.calendarShortcutsEnabled = false;
            runtime.randomExcludedPages = RANDOM_EXCLUDED_DEFAULT;
            runtime.randomExcludeFuture = true;
            for (const kind of Object.keys(runtime.templates)) {
              runtime.templates[kind] = "";
              writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}template-${kind}`, ""));
            }
            syncRandomTodoConfig(runtime);
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}random-excluded-pages`, runtime.randomExcludedPages));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}random-exclude-future`, true));
            runtime.mottoLine1 = "THINK. OWN. COMPOUND.";
            runtime.mottoLine2 = "FESTINA LENTE.";
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}pause-interactive`, false));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}pause-css`, false));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}theme-enabled`, true));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}body-font`, ""));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}heading-font`, ""));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}code-max-height`, 420));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}calendar-shortcuts-enabled`, false));
            for (const [key,value] of Object.entries(SHORTCUT_DEFAULTS)) writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}shortcut-${key}`, value));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}motto-line-1`, runtime.mottoLine1));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}motto-line-2`, runtime.mottoLine2));
            await Promise.all(writes);
            runtime.apply();
            await runtime.createPanel();
          },
        },
      },
    ];
    runtime.settingsDefinitions = settings;
    await extensionAPI.settings.panel.create({ tabTitle: ui.tab, settings });
    runtime.toolbarUi?.sync();
    runtime.toolbarUi?.renderPanel();
  };

  runtime.start = async () => {
    // rc6 accidentally restarted the bundled comment projection. Stop it on
    // upgrade and remove only generated DOM, never native comment blocks.
    window.__magNativeCommentRailCleanup?.();
    window.__magVideoTheaterCleanup?.();
    document.querySelectorAll(".mag-video-theater-notes,.folio-video-open").forEach(el => el.remove());
    if (!window.__readingDeskFeatures?.comments && !window.__readingDeskCommentRail) {
    document.querySelectorAll(".mag-native-comment,.mag-comment-fold-count").forEach(el => el.remove());
    document.querySelectorAll(".mag-comment-rail-host,.mag-comment-anchor-active,.mag-comment-anchor-rail").forEach(el => {
      el.classList.remove("mag-comment-rail-host", "mag-comment-anchor-active", "mag-comment-anchor-rail");
      el.style.removeProperty("--mag-comment-reserve");
    });
    }
    const yieldReadingFeatures = () => {
      const active = window.__readingDeskFeatures || {};
      if (active.comments) window.__magNativeCommentRailCleanup?.();
      if (active.mark) { window.__magQuickMark?.cleanup?.(); window.__zenithQuickMark?.cleanup?.(); }
    };
    yieldReadingFeatures();
    window.addEventListener("reading-desk-features-change", yieldReadingFeatures);
    runtime.stopReadingCoexistence = () => window.removeEventListener("reading-desk-features-change", yieldReadingFeatures);
    const defaultWrites = [];
    const readDefault = (key, fallback) => {
      const stored = extensionAPI.settings.get(key);
      if (stored !== null && stored !== undefined) return stored;
      const legacyKey = key.startsWith(SETTING_PREFIX)
        ? `${LEGACY_SETTING_PREFIX}${key.slice(SETTING_PREFIX.length)}`
        : "";
      const legacy = legacyKey ? extensionAPI.settings.get(legacyKey) : undefined;
      const value = legacy !== null && legacy !== undefined ? legacy : fallback;
      defaultWrites.push(extensionAPI.settings.set(key, value));
      return value;
    };
    runtime.toolbarSettingsEnabled = Boolean(readDefault(`${SETTING_PREFIX}toolbar-settings`, true));
    runtime.randomExcludedPages = String(readDefault(`${SETTING_PREFIX}random-excluded-pages`, RANDOM_EXCLUDED_DEFAULT));
    runtime.randomExcludeFuture = Boolean(readDefault(`${SETTING_PREFIX}random-exclude-future`, true));
    syncRandomTodoConfig(runtime);
    for (const kind of Object.keys(runtime.templates)) runtime.templates[kind] = String(readDefault(`${SETTING_PREFIX}template-${kind}`, ""));
    window.__folioTemplates = createTemplateService(runtime);
    runtime.codeMaxHeight = codeHeight(readDefault(`${SETTING_PREFIX}code-max-height`, 420));
    for (const [key, value] of Object.entries(SHORTCUT_DEFAULTS)) runtime.shortcuts[key] = String(readDefault(`${SETTING_PREFIX}shortcut-${key}`, value));
    runtime.calendarShortcutsEnabled = Boolean(readDefault(`${SETTING_PREFIX}calendar-shortcuts-enabled`, false));
    window.__folioMatchesShortcut = (event, key) => runtime.calendarShortcutsEnabled && Object.prototype.hasOwnProperty.call(SHORTCUT_DEFAULTS, key) && matchesShortcut(event, runtime.shortcuts[key]);
    runtime.languageChoice = readDefault(`${SETTING_PREFIX}language`, "Auto");
    runtime.themeEnabled = Boolean(readDefault(`${SETTING_PREFIX}theme-enabled`, true));
    runtime.paused = Boolean(readDefault(`${SETTING_PREFIX}pause-interactive`, false));
    runtime.cssPaused = Boolean(readDefault(`${SETTING_PREFIX}pause-css`, false));
    runtime.bodyFont = String(readDefault(`${SETTING_PREFIX}body-font`, ""));
    runtime.headingFont = String(readDefault(`${SETTING_PREFIX}heading-font`, ""));
    runtime.mottoLine1 = cleanMotto(readDefault(`${SETTING_PREFIX}motto-line-1`, "THINK. OWN. COMPOUND."));
    runtime.mottoLine2 = cleanMotto(readDefault(`${SETTING_PREFIX}motto-line-2`, "FESTINA LENTE."));
    try {
      const openGroups = JSON.parse(String(readDefault(`${SETTING_PREFIX}open-groups`, '["impact1"]')));
      runtime.openSections = new Set(Array.isArray(openGroups) ? openGroups : ["impact1"]);
    } catch (_) {
      runtime.openSections = new Set(["impact1"]);
    }
    for (const feature of FEATURES) {
      const stored = readDefault(`${SETTING_PREFIX}feature-${feature.id}`, true);
      runtime.featureValues.set(feature.id, Boolean(stored));
    }
    for (const field of TAG_FIELDS) {
      const stored = readDefault(`${SETTING_PREFIX}tag-${field.id}`, field.default);
      runtime.tagValues.set(field.id, String(stored));
    }
    await Promise.all(defaultWrites);
    runtime.resolveLocale();
    runtime.apply();
    await runtime.createPanel();
    runtime.toolbarUi = registerFolioToolbar(runtime);
    console.info(`[Folio] v${VERSION} loaded (${runtime.locale}).`);
  };

  runtime.destroy = () => {
    if (runtime.destroyed) return;
    runtime.destroyed = true;
    runtime.stopReadingCoexistence?.();
    runtime.toolbarUi?.destroy();
    runtime.toolbarUi = null;
    runtime.cancelStarts();
    window.clearTimeout(runtime.tagTimer);
    for (const feature of [...FEATURES].reverse()) runtime.cleanupFeature(feature);
    if (runtime.activeJs.has("page-engine")) {
      runtime.core?.unload("page");
      if (window.__magModules) delete window.__magModules.page;
    }
    runtime.activeJs.clear();
    runtime.core?.destroy();
    runtime.core = null;
    document.getElementById(STYLE_ID)?.remove();
    delete window.__folioMatchesShortcut;
    document.getElementById("folio-theme-fonts")?.remove();
    if (window.__magLocale === runtime.locale) delete window.__magLocale;
    delete window.__folioTagConfig;
    delete window.__folioRandomTodoConfig;
    delete window.__folioTemplates;
    console.info("[Folio] unloaded.");
  };
  return runtime;
}

export default {
  async onload({ extensionAPI }) {
    currentRuntime?.destroy?.();
    currentRuntime = createRuntime(extensionAPI);
    await currentRuntime.start();
  },
  onunload() {
    currentRuntime?.destroy?.();
    currentRuntime = null;
  },
};
