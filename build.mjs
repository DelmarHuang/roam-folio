import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(root, "source/theme-source.txt");
const runtimePath = path.join(root, "src/runtime.js");
const outputPath = path.join(root, "extension.js");

function parseBlocks(text) {
  const lines = text.split(/\r?\n/);
  const blocks = [];
  let active = null;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trimStart();
    if (!active && trimmed.startsWith("- ```")) {
      active = { lang: trimmed.slice(5).trim(), lines: [] };
      continue;
    }
    if (active && trimmed === "```") {
      const nonEmpty = active.lines.filter((value) => value.trim());
      const indent = nonEmpty.length
        ? Math.min(...nonEmpty.map((value) => value.length - value.trimStart().length))
        : 0;
      blocks.push({
        number: blocks.length + 1,
        lang: active.lang,
        content: active.lines.map((value) => value.slice(Math.min(indent, value.length))).join("\n").trim(),
      });
      active = null;
      continue;
    }
    if (active) active.lines.push(line);
  }
  return blocks;
}

const blocks = parseBlocks(fs.readFileSync(sourcePath, "utf8"));
const block = (number) => {
  const result = blocks[number - 1];
  if (!result || result.number !== number) throw new Error(`Missing source block ${number}`);
  return result.content;
};

// Google Fonts URLs contain semicolons inside the URL, so match through the
// closing url(...) instead of treating the first semicolon as the terminator.
const FONT_IMPORT_PATTERN = /@import\s+url\([^)]*\);/;
const FONT_IMPORT = (block(2).match(FONT_IMPORT_PATTERN) || [""])[0];
const withoutFontImport = block(2).replace(FONT_IMPORT_PATTERN, "");

function stripRules(css, words) {
  return css.replace(/([^{}]+)\{([^{}]*)\}/g, (whole, selector) =>
    words.some((word) => selector.includes(word)) ? "" : whole
  );
}

const EXCLUDED_SELECTORS = [
  ".rm-desk-",
  ".mag-desk",
  "version-studio",
  "version Studio",
];

const SETTINGS_DROPDOWN_FIX = String.raw`
/* Plugin patch: preserve the native hit target and arrow in Roam settings. */
html body .rm-modal-dialog--settings .rm-settings .bp3-html-select,
html body .rm-modal-dialog--settings .rm-settings .bp3-select,
html body .rm-modal-dialog--settings .rm-settings .bp3-popover-target {
  position: relative !important;
  pointer-events: auto !important;
}
html body .rm-modal-dialog--settings .rm-settings :is(.bp3-html-select select, .bp3-select select) {
  -webkit-appearance: menulist !important;
  appearance: auto !important;
  pointer-events: auto !important;
  cursor: pointer !important;
  padding-right: 28px !important;
}
html body .rm-modal-dialog--settings .rm-settings :is(.bp3-html-select, .bp3-select) :is(.bp3-icon, svg),
html body .rm-modal-dialog--settings .rm-settings .bp3-popover-target :is(.bp3-icon, svg) {
  display: inline-flex !important;
  pointer-events: none !important;
}
html body .rm-modal-dialog--settings .rm-settings [role="combobox"] {
  position: relative !important;
  z-index: 0 !important;
  pointer-events: auto !important;
  cursor: pointer !important;
}
`;

const WORKBENCH_DROPDOWN_FIX = String.raw`
/* WorkBench Attribute Select compatibility.
   Keep the trigger above neighbouring block chrome and the portalled menu clickable. */
html body .roam-app :is(
  [class*="roamjs-attribute-select"],
  [class*="attribute-select"],
  [data-roamjs-component*="attribute-select"],
  [data-roamjs-feature*="attribute-select"]
) {
  position: relative !important;
  z-index: 3 !important;
  overflow: visible !important;
  pointer-events: auto !important;
}
html body .roam-app :is(
  [class*="roamjs-attribute-select"],
  [class*="attribute-select"],
  [data-roamjs-component*="attribute-select"],
  [data-roamjs-feature*="attribute-select"]
) :is(button, select, [role="button"], [role="combobox"], .bp3-popover-target) {
  position: relative !important;
  z-index: 4 !important;
  pointer-events: auto !important;
  cursor: pointer !important;
}
html body > .bp3-portal:has(:is([role="listbox"], .bp3-menu, .bp3-select-popover)),
html body > .bp4-portal:has(:is([role="listbox"], .bp4-menu, .bp4-select-popover)) {
  z-index: 10050 !important;
  pointer-events: auto !important;
}
html body > :is(.bp3-portal, .bp4-portal) :is(
  [role="listbox"], [role="option"],
  .bp3-menu, .bp3-menu-item, .bp3-popover-content,
  .bp4-menu, .bp4-menu-item, .bp4-popover-content
) {
  pointer-events: auto !important;
}
`;

const SCROLL_INDICATOR_CSS = String.raw`
html body .roam-app .roam-main > .roam-body-main > .rm-article-wrapper,
html body .roam-app .roam-main > .roam-body-main #rm-log-container {
  scrollbar-width: thin !important;
  scrollbar-color: transparent transparent !important;
}
html body .roam-app .roam-main > .roam-body-main > .rm-article-wrapper.mag-scroll-active,
html body .roam-app .roam-main > .roam-body-main #rm-log-container.mag-scroll-active {
  scrollbar-color: var(--mag-border) transparent !important;
}
html body .roam-app .roam-main > .roam-body-main > .rm-article-wrapper::-webkit-scrollbar,
html body .roam-app .roam-main > .roam-body-main #rm-log-container::-webkit-scrollbar {
  width: 7px !important;
}
html body .roam-app .roam-main > .roam-body-main > .rm-article-wrapper::-webkit-scrollbar-track,
html body .roam-app .roam-main > .roam-body-main #rm-log-container::-webkit-scrollbar-track {
  background: transparent !important;
}
html body .roam-app .roam-main > .roam-body-main > .rm-article-wrapper::-webkit-scrollbar-thumb,
html body .roam-app .roam-main > .roam-body-main #rm-log-container::-webkit-scrollbar-thumb {
  background: transparent !important;
  border-radius: 8px !important;
}
html body .roam-app .roam-main > .roam-body-main > .rm-article-wrapper.mag-scroll-active::-webkit-scrollbar-thumb,
html body .roam-app .roam-main > .roam-body-main #rm-log-container.mag-scroll-active::-webkit-scrollbar-thumb {
  background: var(--mag-border) !important;
}
`;

/* Small compatibility fixes live outside the preserved source blocks.  They
   only repair host layout regressions; the visual language still comes from
   the user's original CSS below. */
const HOST_FIXES_CSS = String.raw`
/* Keep All Pages headers and rows in the same horizontal scroll plane. */
html body .roam-app .rm-all-pages .ReactTable .rt-table {
  overflow: auto !important;
}
html body .roam-app .rm-all-pages .ReactTable :is(.rt-thead, .rt-tbody) {
  min-width: max-content !important;
}
html body .roam-app .rm-all-pages .ReactTable .rt-thead {
  position: sticky !important;
  top: 0 !important;
  z-index: 3 !important;
}

/* Keep callout icons beside their title, not at the far edge of the card. */
html body .roam-app .rm-block[data-page-links*='">"'] [class*="callout"] [class*="icon"],
html body .roam-app .rm-block[data-page-links*='">"'] [class*="callout-icon"] {
  margin-left: 0 !important;
  margin-right: 8px !important;
  flex: 0 0 auto !important;
}

/* Roam's advanced search should be centred rather than retaining a large left gutter. */
html body .roam-app :is(.rm-advanced-search, .rm-search-query, .rm-find-or-create-wrapper) {
  margin-inline: auto !important;
}

/* Page and block autocomplete popovers use the same paper/ink tokens. */
html body :is(.rm-autocomplete__results, .rm-block-ref-selector) {
  color: var(--mag-ink) !important;
  background: var(--mag-paper) !important;
  border-color: var(--mag-border) !important;
}


`;

const TAG_HOST_FIXES_CSS = String.raw`
/* Decorative labels must never swallow the native Roam link hit target. */
html body .roam-app span.rm-page-ref--tag { position: relative !important; pointer-events: auto !important; }
html body .roam-app span.rm-page-ref--tag::before,
html body .roam-app span.rm-page-ref--tag::after { pointer-events: none !important; }
html body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag*="($"] {
  font-size: 16px !important;
  line-height: 1.35 !important;
  cursor: pointer !important;
  pointer-events: auto !important;
}
html body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag*="($"]::after {
  font-size: 16px !important;
  pointer-events: none !important;
}
/* Status stamps were too small at the original 10px size. */
html body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is(
  [data-tag="Quadrant 1"], [data-tag="Quadrant 2"], [data-tag="Quadrant 3"],
  [data-tag="quick screening"], [data-tag="deep analysis"], [data-tag="professional research"],
  [data-tag="[[tags]]/checklist"], [data-tag="[[tags]]/antifragile"], [data-tag="[[tags]]/owing"], [data-tag="major"]
)::after { font-size: 12px !important; }
`;

const SIDEBAR_HOST_FIXES_CSS = String.raw`
/* These repairs belong to the sidebar component and disappear with it. */
html body .roam-app #right-sidebar .rm-sidebar-window { scroll-margin-top: 0 !important; }
html body .roam-app #right-sidebar :is(.rm-sidebar-outline-wrapper, .rm-sidebar-window__content, .rm-article-wrapper) {
  min-height: 0 !important;
}
html body .roam-app #right-sidebar { --mag-toolbar-height: 48px; --mag-frame-bottom: 16px; }
html body .roam-app #right-sidebar .rm-sidebar-window:not([data-mag-folded]) > .rm-sidebar-outline-wrapper {
  max-height: var(--rs-wrapper-max-height) !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
}
html body .roam-app #right-sidebar .rm-sidebar-window:not([data-mag-folded]) > .rm-sidebar-outline-wrapper > .rm-sidebar-outline {
  max-height: none !important;
  overflow: visible !important;
}
html body .roam-app #right-sidebar .rm-reference-container {
  max-width: 100% !important;
  overflow: auto !important;
  overflow-wrap: anywhere !important;
}
html body .roam-app #right-sidebar :is(iframe, video, .rm-video-player__spacing-wrapper, .rm-iframe__container) {
  max-width: 100% !important;
}
`;

const PDF_HOST_FIXES_CSS = String.raw`
html body .rm-pdf-container.rm-pdf-container--fullscreen .rm-pdf-toolbar,
html body .rm-pdf-container.rm-pdf-container--fullscreen [data-mag-pdf="fullscreen"] {
  z-index: 10002 !important;
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: none !important;
}
`;

const HIDE_LEFT_SIDEBAR_ITEMS_CSS = String.raw`
html body .roam-app .roam-sidebar-container .bp3-icon.icon[style*="background-image"][style*="googleusercontent.com"] {
  display: none !important;
}
html body .roam-app .roam-sidebar-container .starred-pages-wrapper > .title {
  height: 0 !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  opacity: 0 !important;
  overflow: hidden !important;
}
`;

const NATIVE_COMPONENT_TOKENS = String.raw`
:root {
  --mag-toolbar-height: 48px;
  --mag-frame-bottom: 16px;
  --mag-shadow: rgba(0,0,0,0);
  --mag-body: var(--roam-font-family, var(--global-font, system-ui, -apple-system, "Segoe UI", sans-serif));
  --mag-heading: var(--header-font, var(--roam-font-family, var(--global-font, system-ui, -apple-system, "Segoe UI", sans-serif)));
  --mag-aside-font: var(--header-font, var(--roam-font-family, var(--global-font, system-ui, -apple-system, "Segoe UI", sans-serif)));
  --mag-code: ui-monospace, SFMono-Regular, Consolas, monospace;
  --mag-paper: var(--bc-main, var(--main-area-background-color, #ffffff));
  --mag-shell: var(--bc-right-sidebar, var(--bc-left-sidebar, #f5f6f8));
  --mag-surface: var(--bc-main, var(--main-area-background-color, #ffffff));
  --mag-active: var(--bc-highlight, var(--bc-hover, rgba(127,127,127,.12)));
  --mag-ink: var(--cl-primary, var(--primary-text-color, #182026));
  --mag-muted: var(--cl-secondary, var(--secondary-text-color, #5c7080));
  --mag-faint: var(--cl-tertiary, var(--secondary-text-color, #8a9ba8));
  --mag-blue: var(--cl-blue, var(--cl-accent, #137cbd));
  --mag-blue-soft: color-mix(in srgb, var(--mag-blue) 12%, transparent);
  --mag-yellow: #d6b83c;
  --mag-yellow-soft: color-mix(in srgb, var(--mag-yellow) 20%, transparent);
  --mag-gold: #a58a2c;
  --mag-gold-ink: #806d2e;
  --mag-border: var(--border-color, rgba(127,127,127,.22));
  --mag-sepia: #8a6d3b;
  --mag-age1-ink: color-mix(in srgb, var(--mag-ink) 86%, var(--mag-sepia));
  --mag-age2-ink: color-mix(in srgb, var(--mag-ink) 72%, var(--mag-sepia));
  --mag-age3-ink: color-mix(in srgb, var(--mag-ink) 58%, var(--mag-sepia));
  --mag-code-bg: var(--bc-codeblock, rgba(127,127,127,.08));
  --mag-inline-bg: var(--bc-code, rgba(127,127,127,.08));
  --mag-inline-text: var(--cl-primary, inherit);
  --mag-radius: 6px;
}
:root.mag-dark,
body.bp3-dark,
body.bp4-dark,
.roam-app.bp3-dark,
.roam-app.bp4-dark {
  --mag-paper: var(--bc-main, var(--main-area-background-color, #20242c));
  --mag-shell: var(--bc-right-sidebar, var(--bc-left-sidebar, #171a20));
  --mag-surface: var(--bc-main, var(--main-area-background-color, #20242c));
  --mag-active: var(--bc-highlight, var(--bc-hover, rgba(255,255,255,.10)));
  --mag-ink: var(--cl-primary, var(--primary-text-color, #f0f1f3));
  --mag-muted: var(--cl-secondary, var(--secondary-text-color, #b7bdc7));
  --mag-faint: var(--cl-tertiary, var(--secondary-text-color, #89919d));
  --mag-blue: var(--cl-blue, var(--cl-accent, #70b7e6));
  --mag-gold-ink: #d2b95d;
  --mag-border: var(--bc-left-sidebar, rgba(255,255,255,.18));
  --mag-sepia: #c8a96e;
}
`;

const repairStyle = name => fs.readFileSync(path.join(root, "src/styles", name + ".css"), "utf8");
const css = {
  "web-fonts": FONT_IMPORT,
  base: [withoutFontImport, block(3)].join("\n"),
  layout: block(4).replace(/\n\s*scrollbar-width:\s*thin;\s*\n\s*scrollbar-color:\s*var\(--mag-border\)\s*transparent;/, ""),
  menus: [block(5), block(6)].join("\n"),
  typewriter: block(7),
  references: block(10),
  quotes: block(11),
  callouts: block(12),
  tasks: block(13),
  "left-sidebar": stripRules(stripRules(block(14), [
    '.bp3-icon.icon[style*="background-image"][style*="googleusercontent.com"]',
    ".starred-pages-wrapper > .title",
  ]), EXCLUDED_SELECTORS),
  "scroll-indicator": SCROLL_INDICATOR_CSS,
  tags: [stripRules([block(9), block(16), block(66), block(67)].join("\n"), ['[data-tag*="@ "]']), TAG_HOST_FIXES_CSS].join("\n"),
  "block-controls": block(18),
  "or-dropdown": block(19),
  "workbench-compat": WORKBENCH_DROPDOWN_FIX,
  topbar: block(21),
  "random-tasks": block(39),
  "page-titles": block(24),
  headings: block(26),
  inline: block(27),
  links: block(28),
  "code-style": block(29),
  tables: block(31).replace(/\n\s*width:\s*auto\s*!important;/g, ""),
  responsive: block(32),
  kanban: block(33),
  diagram: block(34),
  slider: block(35),
  settings: [block(36), SETTINGS_DROPDOWN_FIX].join("\n"),
  marketplace: block(37),
  misc: block(38),
  weight: block(42),
  "property-card": block(45),
  images: block(47),
  "video-reader": [fs.readFileSync(path.join(root,"source/video-media.css"),"utf8"), fs.readFileSync(path.join(root,"source/video-reader.css"),"utf8")].join("\n"),
  "page-stats": block(50),
  pulse: block(52),

  asides: block(54),
  pdf: [block(56), PDF_HOST_FIXES_CSS].join("\n"),
  "right-sidebar": [block(58), block(59), block(61), block(62), block(63), SIDEBAR_HOST_FIXES_CSS].join("\n"),
  // This is the built-in editorial Desk component, not the separate Reading
  // Desk extension. Keep it independently switchable as promised.
  "editorial-desk": block(64),
  "hide-top-buttons": block(68),
  "hide-left-sidebar-items": HIDE_LEFT_SIDEBAR_ITEMS_CSS,
  "theme-host-fixes": HOST_FIXES_CSS,
  "native-component-tokens": NATIVE_COMPONENT_TOKENS,
};

for (const key of ["random-tasks", "editorial-desk", "theme-host-fixes", "sidebar-toggles", "pdf", "right-sidebar", "video-reader", "property-card", "calendar-preview", "calendar-capture", "tags", "left-sidebar"]) css[key] = (css[key] || "") + "\n" + repairStyle(key);
css["right-sidebar"] += "\n" + repairStyle("native-ai");
css["toolbar-panel"] = repairStyle("toolbar-panel");
// Leave native menu and command-list geometry to Roam. The theme owns colours,
// fonts and borders, never the spacing between native commands.
function preserveNativeMenuGeometry(value) {
  return value.replace(/([^{}]+)\{([^{}]*)\}/g, (whole, selector, declarations) => {
    if (!/\.(?:bp[34]-menu(?:-item|-divider)?|rm-menu-item|rm-command-palette[^\s,:]*)\b|rm-find-or-create-modal-body__list|rm-find-or-create-body__group-header/.test(selector)) return whole;
    const clean = declarations.split(";").filter(part => !/^\s*(?:padding(?:-[\w-]+)?|margin(?:-[\w-]+)?|gap|row-gap|column-gap|line-height|(?:min-|max-)?height)\s*:/.test(part)).join(";");
    return selector + "{" + clean + "}";
  });
}
for (const key of ["menus","theme-host-fixes"]) css[key] = preserveNativeMenuGeometry(css[key]);

for (const [key, value] of Object.entries(css)) {
  css[key] = key === "editorial-desk" ? value : stripRules(value, EXCLUDED_SELECTORS);
}

const jsBlocks = {
  typewriter: 8,
  tags: 17,
  "or-dropdown": 20,
  "random-tasks": 22,
  "graph-button": 23,
  "daily-masthead": 25,
  "code-tools": 30,
  weight: 43,
  "page-engine": 44,
  "property-card": 46,
  images: 48,
  "page-stats": 51,
  pulse: 53,

  asides: 55,
  pdf: 57,
  "right-sidebar": 60,
  "editorial-desk": 65,
  "calendar-template": 69,
  "calendar-quick": 70,
  "calendar-preview": 71,
  "calendar-carry": 72,
  "calendar-capture": 73,
  "calendar-keyboard": 74,
  "video-reader": 75,
};

function configureRunner(key, source) {
  // The supplied video implementation is intentionally copied verbatim.
  if (key === "video-reader") return source;
  if (key === "code-tools") source = fs.readFileSync(path.join(root, "src/runners/code-tools.js"), "utf8");
  if (key === "calendar-keyboard" || key === "calendar-preview") source = fs.readFileSync(path.join(root, "src/runners", key + ".js"), "utf8");
  if (key === "calendar-carry" || key === "calendar-capture") {
    const name = key === "calendar-carry" ? "syncCalendarTools" : "syncBar";
    source = source.replace(`const ${name} = () => {
    const datepicker = document.querySelector(".bp3-datepicker");
    if (!datepicker) return;
    const host = datepicker.firstElementChild || datepicker;`, `const ${name}ForPicker = (datepicker) => {
    const host = calendarHost(datepicker);`);
    // Carry-over has an extra legacy-button cleanup before selecting its picker.
    source = source.replace(`const ${name} = () => {
    document.getElementById(OLD_BUTTON_ID)?.remove();
    const datepicker = document.querySelector(".bp3-datepicker");
    if (!datepicker) return;
    const host = datepicker.firstElementChild || datepicker;`, `const ${name}ForPicker = (datepicker) => {
    document.getElementById(OLD_BUTTON_ID)?.remove();
    const host = calendarHost(datepicker);`);
    const marker = key === "calendar-carry" ? "  const observer = new MutationObserver" : "  const onContextMenu =";
    source = source.replace(marker, `  const ${name} = () => visibleCalendars().forEach(${name}ForPicker);

` + marker);
  }
  if (key === "calendar-capture") {
    source = source.replace('document.querySelector("." + BAR_CLASS)?._setTargetDate?.(date);', 'cell.closest(".bp3-datepicker")?.querySelector("." + BAR_CLASS)?._setTargetDate?.(date);');
    for (const [literal,id] of Object.entries({"快速记录…":"capture","处理中…":"working","操作失败，请重试":"failed","＋笔记":"addNote","TODO 已添加到 ":"todoAdded","笔记已添加到 ":"noteAdded","已有“今日计划”":"planExists"})) source = source.replaceAll(JSON.stringify(literal), `calendarText(${JSON.stringify(id)})`);
    source = source.replace('makeButton("今日计划",', 'makeButton(calendarText("plan"),').replace('return "已复制 ((" + TEMPLATE_UID + ")) 下方内容";', 'return calendarText("copied");');
  }
  if (key === "calendar-carry") {
    for (const [literal,id] of Object.entries({"没有可撤销的迁移":"noUndo","正在放回原位置…":"restoring","已放回原位置":"restored","昨天没有遗留 TODO":"none","引用到今天":"reference","迁移到今天":"move","正在迁移…":"moving","没有任务被迁移":"notMoved","撤销上次迁移":"undoLast","关闭；可从日历里的遗留入口再次打开":"close","↪ 遗留":"carry","处理昨天的未完成任务":"carryTitle","撤销迁移":"undo","把上次迁移的任务放回原父块和原顺序":"undoTitle"})) source = source.replaceAll(JSON.stringify(literal), `calendarText(${JSON.stringify(id)})`);
    source=source.replace('"昨天还有 " + tasks.length + " 个未完成 TODO"','calendarText("pending", {n:tasks.length})').replace('"仍有 " + failed.length + " 个任务未能放回，请再试一次"','calendarText("restoreFailed", {n:failed.length})').replace('"已迁移 " + moved.length + " 个；日历内可撤销"','calendarText("moved", {n:moved.length})');
  }
  if (key === "random-tasks") {
    source = source
      .replace("function findTodos() {", `function findTodos() {
        const policy = window.__folioRandomTodoConfig || {excludedPages:['SmartBlock','roam/templates'],excludeFuture:true};
        const excludedPages = new Set(policy.excludedPages || []);`)
      .replace("seen.has(uid) ||", "seen.has(uid) || excludedPages.has(page || '') ||")
      .replace(
        "const todoRx = /^\\s*\\{\\{\\s*(?:\\[\\[)?TODO(?:\\]\\])?\\s*\\}\\}/i;",
        () => String.raw`const todoRx = /^\s*\{\{\s*(?:\[\[)?TODO(?:\]\])?\s*\}\}/i;
                        const roamDateRx = /\[\[((?:January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}(?:st|nd|rd|th), \d{4})\]\]/g;
                        const hasExplicitFutureDate = (text) => {
                          const start = new Date();
                          start.setHours(23, 59, 59, 999);
                          for (const match of String(text || '').matchAll(roamDateRx)) {
                            try {
                              const date = api.util.pageTitleToDate(match[1]);
                              if (date && date.getTime() > start.getTime()) return true;
                            } catch (_) {}
                          }
                          return false;
                        };`
      )
      .replace(
        "if (!todoRx.test(text || '')) return false;",
        "if (!todoRx.test(text || '') || (policy.excludeFuture !== false && hasExplicitFutureDate(text))) return false;"
      )
      .replace(
        /function sourceSuffix\(page\) \{\s*if \(!CFG\.showSource \|\| !page\) return '';\s*return ` \$\{CFG\.sourcePrefix\}\[\[\$\{page\}\]\]`;\s*\}/,
        () => String.raw`function sourceSuffix(page, taskText = '') {
                          if (!CFG.showSource || !page) return '';
                          if (String(taskText).includes('[[' + page + ']]') || String(taskText).includes('#[[' + page + ']]')) return '';
                          return ' ' + CFG.sourcePrefix + '[[' + page + ']]';
                        }`
      )
      .replace(
        "const suffix = depth === 0 ? sourceSuffix(task.page) : '';",
        "const suffix = depth === 0 ? sourceSuffix(task.page, task.text) : '';"
      );
  }
  // The original roam/js snippets each watched the whole document because
  // they were designed to run independently. Inside one extension they can
  // share Folio's single observer without changing their feature algorithms.
  let observerIndex = 0;
  return source.replace(/new MutationObserver\(/g, () => {
    observerIndex += 1;
    return `window.__magCore.watch(${JSON.stringify(`runner:${key}:${observerIndex}`)}, `;
  });
}

const runners = Object.fromEntries(
  Object.entries(jsBlocks).map(([key, number]) => [key, configureRunner(key, block(number))])
);

const generated = [
  `const MAGAZINE_CSS = ${JSON.stringify(css, null, 2)};`,
  "",
  "const MAGAZINE_RUNNERS = {",
  ...Object.entries(runners).map(([key, source]) =>
    `${JSON.stringify(key)}: () => {\n${source}\n}`
  ).join(",\n\n").split("\n"),
  "};",
].join("\n");

const runtime = fs.readFileSync(runtimePath, "utf8").replace("/*__TOOLBAR__*/", () => fs.readFileSync(path.join(root, "src/toolbar.js"), "utf8")).replace("/*__CALENDAR_SUPPORT__*/", () => fs.readFileSync(path.join(root, "src/calendar.js"), "utf8")).replace("/*__TEMPLATE_SUPPORT__*/", () => fs.readFileSync(path.join(root, "src/templates.js"), "utf8")).replace("/*__SETTINGS__*/", () => fs.readFileSync(path.join(root, "src/settings.js"), "utf8")).replace("/*__SUPPORT__*/", () => fs.readFileSync(path.join(root, "src/support.js"), "utf8"));
if (!runtime.includes("/*__GENERATED_CONTENT__*/")) {
  throw new Error("Runtime template is missing the generated-content marker");
}
// Use a replacement function so `$&`, `$1`, and similar source text stays literal.
fs.writeFileSync(outputPath, runtime.replace("/*__GENERATED_CONTENT__*/", () => generated));
console.log(`Built ${path.relative(process.cwd(), outputPath)} from ${blocks.length} source blocks.`);
