const SHORTCUT_DEFAULTS = { jump: "g", today: "t", daily: "d" };
const shortcutParts = (value) => String(value).trim().toLowerCase().split("+").map(x => x.trim()).filter(Boolean);
function matchesShortcut(event, value) {
  const parts = shortcutParts(value);
  if (!parts.length) return false;
  const key = parts.pop();
  const mods = new Set(parts);
  if ([...mods].some(x => !["ctrl","control","alt","shift","meta","cmd","mod"].includes(x))) return false;
  const mac = /Mac|iPhone|iPad/.test(navigator.platform || "");
  return event.key.toLowerCase() === key &&
    event.ctrlKey === (mods.has("ctrl") || mods.has("control") || (mods.has("mod") && !mac)) &&
    event.metaKey === (mods.has("meta") || mods.has("cmd") || (mods.has("mod") && mac)) &&
    event.altKey === mods.has("alt") && event.shiftKey === mods.has("shift");
}
const MOTTO_LIMIT = 24;
const mottoCharCost = character => /[\u2E80-\uA4CF\uAC00-\uD7AF\uF900-\uFAFF\uFE10-\uFE6F\uFF01-\uFF60\uFFE0-\uFFE6\u{1F000}-\u{1FAFF}\u{20000}-\u{3FFFF}]/u.test(character) ? 2 : 1;
function cleanMotto(value) {
  let result = "", used = 0;
  for (const character of String(value || "").replace(/[\r\n\t]+/g," ")) {
    const cost = mottoCharCost(character);
    if (used + cost > MOTTO_LIMIT) break;
    result += character; used += cost;
  }
  return result;
}
function fitMotto(value) {
  const chars = Array.from(cleanMotto(value));
  const title = typeof document === "undefined" ? null : document.querySelector?.(".roam-sidebar-container .rm-db-title-container");
  if (!title || typeof getComputedStyle !== "function") return chars.join("");
  const style = getComputedStyle(title, "::after");
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return chars.join("");
  context.font = style.font || "600 9px Georgia";
  const width = Math.max(60, (title.clientWidth || 200) - parseFloat(getComputedStyle(title).paddingLeft || 0) - parseFloat(getComputedStyle(title).paddingRight || 0));
  const spacing = parseFloat(style.letterSpacing) || 0;
  while (chars.length && context.measureText(chars.join("")).width + Math.max(0,chars.length-1)*spacing > width) chars.pop();
  return chars.join("");
}
const fontFamily = value => String(value || "").replace(/[;{}<>\r\n]/g, "").trim();
const codeHeight = value => Number.isFinite(Number(value)) ? Math.max(0, Math.min(2400, Math.round(Number(value)))) : 420;
function extraSettings(runtime) {
  const zh = runtime.locale === "zh";
  const textSetting = (id, name, description, value, change, type="text") => ({
    id: SETTING_PREFIX + id, name, description,
    action: {type:"reactComponent",component:()=>window.React?.createElement("input",{
      type, defaultValue:value, min:type==="number"?0:undefined, max:type==="number"?2400:undefined,
      style:{width:"min(100%,280px)",padding:"6px 8px"},
      onChange:event=>change(event.target.value)
    })}
  });
  return [textSetting("code-max-height", zh?"代码块最大高度（px）":"Code block maximum height (px)",zh?"默认 420；0 表示不限制。长代码在块内滚动。":"Default 420; 0 removes the limit. Long code scrolls inside the block.",runtime.codeMaxHeight, value=>{
    runtime.codeMaxHeight=codeHeight(value); void runtime.extensionAPI.settings.set(SETTING_PREFIX+"code-max-height",runtime.codeMaxHeight); runtime.rebuildCss();
  },"number"), ...Object.entries(SHORTCUT_DEFAULTS).map(([key,fallback])=>textSetting("shortcut-"+key,
    (zh?"导航快捷键 · ":"Navigation shortcut · ")+({jump:zh?"跳转日期":"Jump to date",today:zh?"今天":"Today",daily:zh?"日记流":"Daily notes"}[key]),
    zh?`默认 ${fallback}。支持 Alt+G、Mod+Shift+J；留空停用。编辑文字时不触发。重复组合仅第一个生效。`:`Default ${fallback}. Examples: Alt+G, Mod+Shift+J. Empty disables. Never runs while editing. First matching action wins.`,
    runtime.shortcuts[key],value=>{runtime.shortcuts[key]=value.trim();void runtime.extensionAPI.settings.set(SETTING_PREFIX+"shortcut-"+key,value.trim());}
  ))];
}

/* Position the existing native control; never clone, replace or reparent it. */
function registerNativeSidebarToggles(runtime) {
  const core = runtime.ensureCore();
  const root = document.documentElement;
  let topbar = null;
  let observer = null;
  let sidebar = null;
  let leftSidebar = null;
  let leftWidth = 0;
  let frame = 0;
  const touched = new Map();
  const saveControl = button => {
    if (!touched.has(button)) touched.set(button, {
      styles: ["display","visibility","pointer-events"].map(key => [key,button.style.getPropertyValue(key),button.style.getPropertyPriority(key)]), role: button.getAttribute("data-folio-sidebar-role")
    });
  };
  const setControl = (button, role, shown) => {
    saveControl(button);
    button.setAttribute("data-folio-sidebar-role", role);
    for (const [key,value] of [["display",shown?"inline-flex":"none"],["visibility",shown?"visible":"hidden"],["pointer-events",shown?"auto":"none"]]) {
      if (button.style.getPropertyValue(key) !== value || button.style.getPropertyPriority(key) !== "important") button.style.setProperty(key,value,"important");
    }
  };
  const write = (key, value) => {
    if (root.style.getPropertyValue(key) !== value) root.style.setProperty(key, value);
  };
  const measure = () => {
    const next = document.querySelector(".rm-topbar");
    if (next !== topbar) {
      observer?.disconnect();
      topbar = next;
      if (topbar && typeof ResizeObserver !== "undefined") {
        observer = new ResizeObserver(() => core.scheduleSync());
        observer.observe(topbar);
        if (sidebar) observer.observe(sidebar);
        if (leftSidebar) observer.observe(leftSidebar);
      }
    }
    const nextSidebar = document.querySelector("#right-sidebar");
    if (nextSidebar !== sidebar) {
      if (sidebar) observer?.unobserve(sidebar);
      sidebar = nextSidebar;
      if (sidebar) observer?.observe(sidebar);
    }
    const nextLeft = document.querySelector(".roam-sidebar-container");
    if (nextLeft !== leftSidebar) {
      if (leftSidebar) observer?.unobserve(leftSidebar);
      leftSidebar = nextLeft;
      if (leftSidebar) observer?.observe(leftSidebar);
    }
    const nextWidth = Math.round(leftSidebar?.getBoundingClientRect().width || 0);
    if (nextWidth > 0 && nextWidth !== leftWidth) {
      leftWidth = nextWidth;
      runtime.rebuildCss();
    }
    const box = sidebar?.getBoundingClientRect();
    const style = sidebar && getComputedStyle(sidebar);
    const open = Boolean(box && box.width > 1 && box.height > 1 && box.left < window.innerWidth - 1 && box.right > 0 && style.display !== "none" && style.visibility !== "hidden");
    const state = open ? "open" : "closed";
    if (root.getAttribute("data-folio-right-sidebar") !== state) root.setAttribute("data-folio-right-sidebar", state);
    const controls = document.querySelectorAll(".rm-topbar :is(button,.bp3-button), #right-sidebar > .flex-h-box :is(button,.bp3-button)");
    for (const button of controls) {
      if (button.matches(".rm-open-left-sidebar-btn") || button.closest(".rm-open-left-sidebar-btn")) continue;
      if (button.matches(".bp3-icon-menu-open") || button.querySelector(".bp3-icon-menu-open")) setControl(button,"close",open);
      else if (button.matches(".bp3-icon-menu-closed") || button.querySelector(".bp3-icon-menu-closed")) setControl(button,"open",!open);
    }
    if (!topbar) return;
    const rect = topbar.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    write("--folio-native-toggle-x", Math.max(rect.left, rect.right - 38) + "px");
    write("--folio-native-toggle-y", (rect.top + (rect.height - 30) / 2) + "px");
  };
  const onToggle = event => {
    if (!event.target.closest?.("[data-folio-sidebar-role], .rm-open-left-sidebar-btn, .roam-sidebar-container .top-row")) return;
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => { frame = 0; measure(); });
  };
  document.addEventListener("click", onToggle, true);
  document.addEventListener("transitionend", onToggle, true);
  window.__magModules = window.__magModules || {};
  window.__magModules.folioNativeSidebarChrome = () => ({
    sync: measure,
    destroy() {
      observer?.disconnect();
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener("click", onToggle, true);
      document.removeEventListener("transitionend", onToggle, true);
      for (const [button, prior] of touched) {
        for (const [key,value,priority] of prior.styles) { if (value) button.style.setProperty(key,value,priority); else button.style.removeProperty(key); }
        if (prior.role == null) button.removeAttribute("data-folio-sidebar-role"); else button.setAttribute("data-folio-sidebar-role", prior.role);
      }
      touched.clear();
      root.style.removeProperty("--folio-native-toggle-x");
      root.style.removeProperty("--folio-native-toggle-y");
      root.removeAttribute("data-folio-right-sidebar");
    }
  });
  core.load("folioNativeSidebarChrome");
  runtime.nativeCleanups.set("sidebar-toggles", () => {
    core.unload("folioNativeSidebarChrome");
    delete window.__magModules.folioNativeSidebarChrome;
  });
}

/* Reroute only native video Open; other video controls keep their handlers. */
function registerVideoOpenSidebar(runtime) {
  const targetButton = event => {
    const button = event.target.closest?.(".rm-video-player__edit-btn, button[title='Open in sidebar']");
    return button?.closest(".mag-video-reader,.rm-video-theater") ? button : null;
  };
  const stopNativeEdit = event => {
    if (!targetButton(event)) return;
    event.preventDefault(); event.stopImmediatePropagation();
  };
  const open = async event => {
    const button = targetButton(event);
    if (!button) return;
    event.preventDefault(); event.stopImmediatePropagation();
    const uid = button.closest(".rm-block[data-block-uid]")?.getAttribute("data-block-uid")
      || decodeURIComponent(location.hash.match(/\/video\/([^/?#]+)/)?.[1] || "");
    if (!uid) { console.warn("[Folio] Video Open: block UID is unavailable"); return; }
    try {
      const sidebar = window.roamAlphaAPI?.ui?.rightSidebar;
      if (!sidebar?.addWindow) return;
      await Promise.resolve(sidebar.open?.());
      await Promise.resolve(sidebar.addWindow({window:{type:"block","block-uid":uid}}));
    } catch (error) { console.error("[Folio] Could not open video block in sidebar",error); }
  };
  document.addEventListener("pointerdown",stopNativeEdit,true);
  document.addEventListener("mousedown",stopNativeEdit,true);
  document.addEventListener("click",open,true);
  runtime.nativeCleanups.set("video-reader",()=>{
    document.removeEventListener("pointerdown",stopNativeEdit,true);
    document.removeEventListener("mousedown",stopNativeEdit,true);
    document.removeEventListener("click",open,true);
  });
}
