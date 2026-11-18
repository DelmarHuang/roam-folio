import fs from "node:fs";

const code = fs.readFileSync(new URL("./extension.js", import.meta.url), "utf8");
const runtime = fs.readFileSync(new URL("./src/runtime.js", import.meta.url), "utf8");
const source = fs.readFileSync(new URL("./source/theme-source.txt", import.meta.url), "utf8");
const failures = [];

const requireToken = (token, where = code) => {
  if (!where.includes(token)) failures.push(`Missing required token: ${token}`);
};

for (const token of [
  "export default", "Folio · 书页集", 'VERSION = "1.4.31"', 'BUILD_DATE = "2026-11-18"',
  'SETTING_PREFIX = "folio-"', "Enable Folio theme", "启用 Folio 主题",
  "Français", "Deutsch", "Español", "Italiano",
  "hide-left-sidebar-items", "隐藏左侧边栏项目", "hide-top-buttons",
  "native-component-tokens", "THEME_CSS_IDS", "folio-settings-group",
  "motto-line-1", "motto-line-2",
  "hasExplicitFutureDate", "sourceSuffix(page, taskText = '')",
  "DayPicker-Day--today", 'classList.add("folio-calendar-plan")',
  "registerPdfEscape", "pointer-events: none !important",
  "__magVideoTheaterCleanup", "__delmarAutoDnpTemplateCleanup",
  "Temporarily disable Folio (troubleshooting)", "临时停用 Folio（排查冲突）", 'id: `${SETTING_PREFIX}pause-css`',
  'Folio ${VERSION} · ${BUILD_DATE}',
]) requireToken(token);

for (const tag of [
  "moc", "project", "book", "Giant", "Industry", "($",
  "Voicenotes", "LiteratureNotes", "PermanentNotes", "Footnotes", "DefinitionNotes",
  "Quadrant 1", "Quadrant 2", "Quadrant 3", "quick screening", "deep analysis", "professional research",
  "[[tags]]/checklist", "[[tags]]/antifragile", "[[tags]]/owing", "major",
  "motive-notes", "rediscover-notes", "[[tags]]/mood-high", "[[tags]]/mood-mid", "[[tags]]/mood-low",
  "Reading List: Inbox", "Reading List: Shortlist", "Reading List: Archive",
  "[[tags]]/important",
]) {
  if (!runtime.includes(`default: "${tag}"`)) failures.push(`Source tag default is missing: ${tag}`);
}

if (runtime.includes('default: "@ "')) failures.push("Removed @ marker is still exposed in settings");
if (code.includes("data-mag-custom-label")) failures.push("The 1.2 custom label redraw layer is still present");
if (/\.rm-reading-desk|#reading-desk-panel/i.test(code)) failures.push("Reading Desk extension styles are present");
if (/version-studio/i.test(code)) failures.push("Version Studio styles are present");

const features = [...runtime.matchAll(/\{ id: "([a-z0-9-]+)", impact:/g)].map((match) => match[1]);
if (features.length < 29) failures.push(`Expected at least 29 component switches, found ${features.length}`);
if (new Set(features).size !== features.length) failures.push("Duplicate component ids found");
if (!runtime.includes('const THEME_CSS_IDS = [')) failures.push("Single theme bundle is missing");
if (/default:\s*false/.test(runtime.match(/const FEATURES = \[([\s\S]*?)\n\];/)?.[1] || "")) failures.push("Components must default on");
if (!runtime.includes('runtime.openSections = new Set')) failures.push("Accordion state persistence is missing");

const mutationObserverCount = (code.match(/new MutationObserver\s*\(/g) || []).length;
if (mutationObserverCount !== 4) {
  failures.push(`Expected core/video observers plus the two narrowly scoped toolbar observers, found ${mutationObserverCount}`);
}
if (!code.includes('watch(name, callback)')) failures.push("Shared observer subscriber API is missing");
if (!runtime.includes('cleanups: [["__magVideoReaderCleanup"], ["__magVideoTheaterCleanup"]]')) {
  failures.push("Video reader does not clean up both the reader and theater modules");
}
if (!runtime.includes('{ id: "editorial-desk", impact: 4') || !code.includes('"editorial-desk": () =>')) {
  failures.push("Editorial Desk is missing from the independent component list");
}
if (!code.includes('font-size: 16px !important;') || !code.includes('span.rm-page-ref--tag[data-tag*=\\"($\\"]::after')) {
  failures.push("Full ticker labels are not enlarged in both native and namespace-rendered forms");
}
if (!code.includes('pointer-events: auto !important;') || !code.includes('pointer-events: none !important;')) {
  failures.push("Ticker/link hit-target protection is missing");
}
if (code.includes('.rm-data-table__table > table {\n                    width: auto !important;')) {
  failures.push("Query/Data Table still overrides Roam's native column widths");
}
if (runtime.includes('chunks.push(MAGAZINE_CSS["host-fixes"]')) {
  failures.push("Host repair CSS is still loaded unconditionally");
}
if (!runtime.includes('document.getElementById(STYLE_ID)?.remove();') || !runtime.includes('runtime.paused || runtime.cssPaused ? []')) {
  failures.push("Pause-all-CSS does not remove the central stylesheet and suspend style-injecting widgets");
}
if (!runtime.includes('if (runtime.themeEnabled && MAGAZINE_CSS["web-fonts"]) chunks.push')) {
  failures.push("Web-font import is not emitted before normal CSS rules");
}
if (!code.includes('"theme-host-fixes"') || !code.includes('"right-sidebar":')) {
  failures.push("Theme and right-sidebar repair styles are not separated");
}

for (const original of [
  "21. 特殊标签", "35. Reading List 栏目签", "Mood 情绪标签",
  "22.4 Video Reader", "29a 纸张老化",
]) requireToken(original, source);

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Static checks passed for ${features.length} component registrations, observer wiring, cleanup hooks, table and link rules, theme switching and translations. This does not certify visual behavior.`);
