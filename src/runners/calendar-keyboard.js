(() => {
  const KEY = "__delmarCalendarKeyboardCleanup";
  const STYLE_ID = "delmar-calendar-keyboard-style";
  const PANEL_CLASS = "delmar-calendar-relative-panel";
  const COMMAND = calendarText("command");

  if (typeof window[KEY] === "function") window[KEY]();
  document.getElementById(STYLE_ID)?.remove();
  document.querySelectorAll("." + PANEL_CLASS).forEach((el) => el.remove());
  document.getElementById("delmar-calendar-jump-dialog")?.remove();

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = [
    '.bp3-datepicker[data-folio-calendar-enhanced="1"] > .bp3-daterangepicker-shortcuts{display:none!important}',
    ".bp3-datepicker:has(." + PANEL_CLASS + "){display:flex!important;align-items:stretch!important;background:var(--mag-paper,#fffaf0)!important}",
    "." + PANEL_CLASS + "{order:-1;width:174px;box-sizing:border-box;padding:11px 10px 9px;border-right:1px solid var(--mag-border,rgba(26,26,46,.14));" +
      "background:var(--mag-paper,#fffaf0);color:var(--mag-ink,#1a1a2e);font:11px/1.25 var(--mag-body,Inter,'Noto Sans SC',sans-serif)}",
    "." + PANEL_CLASS + " .title{margin:0 0 7px;font:700 12.5px/1.25 var(--mag-aside-font,Georgia,'Noto Serif SC',serif)}",
    "." + PANEL_CLASS + " input{width:100%;height:27px;box-sizing:border-box;margin:0 0 6px;padding:4px 7px;border:1px solid var(--mag-border,rgba(26,26,46,.28));" +
      "border-radius:3px;background:var(--mag-shell,#f5f0e6);color:var(--mag-ink,#1a1a2e);outline:none;font:10px/1.2 var(--mag-body,Inter,sans-serif)}",
    "." + PANEL_CLASS + " input:focus{border-color:var(--mag-purple,#7d6aa3);box-shadow:0 0 0 1px var(--mag-purple,#7d6aa3)}",
    "." + PANEL_CLASS + " button{display:block;width:100%;border:0;border-radius:3px;padding:5px 6px;text-align:left;background:transparent;color:var(--mag-ink,#1a1a2e);" +
      "cursor:pointer;font:11px/1.2 var(--mag-body,Inter,'Noto Sans SC',sans-serif)}",
    "." + PANEL_CLASS + " button:hover{background:var(--mag-yellow-soft,#efe3a8)}",
    "." + PANEL_CLASS + " .error{min-height:11px;margin-top:4px;color:#9a4f45;font-size:9px}"
  ].join("");
  document.head.appendChild(style);

  const titleOf = (date) => window.roamAlphaAPI.util.dateToPageTitle(date);
  const uidOf = (date) => window.roamAlphaAPI.util.dateToPageUid(date);
  const normalize = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);

  const openDate = async (rawDate) => {
    const date = normalize(rawDate);
    const uid = uidOf(date);
    const exists = window.roamAlphaAPI.q(
      '[:find ?e . :in $ ?uid :where [?e :block/uid ?uid]]',
      uid
    );
    if (!exists) {
      await window.roamAlphaAPI.createPage({ page: { uid, title: titleOf(date) } });
    }
    await window.roamAlphaAPI.ui.mainWindow.openPage({ page: { uid } });
  };

  const currentDailyDate = () => {
    const match = location.hash.match(/\/page\/([^/?]+)/);
    if (!match) return normalize(new Date());
    const title = window.roamAlphaAPI.q(
      '[:find ?title . :in $ ?uid :where [?page :block/uid ?uid] [?page :node/title ?title]]',
      match[1]
    );
    if (!title) return normalize(new Date());
    try {
      return normalize(window.roamAlphaAPI.util.pageTitleToDate(title) || new Date());
    } catch (_) {
      return normalize(new Date());
    }
  };

  const parseInput = (value) => {
    const input = value.trim();
    const key = input.toLowerCase();
    const relative = { today: 0, tomorrow: 1, yesterday: -1, [calendarText("today").toLowerCase()]:0, [calendarText("tomorrow").toLowerCase()]:1, [calendarText("yesterday").toLowerCase()]:-1 };
    if (Object.prototype.hasOwnProperty.call(relative, key)) {
      const date = new Date();
      date.setDate(date.getDate() + relative[key]);
      return normalize(date);
    }
    const iso = input.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
    if (iso) {
      const date = new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]), 12);
      return date.getMonth() === Number(iso[2]) - 1 && date.getDate() === Number(iso[3])
        ? date
        : null;
    }
    try {
      return window.roamAlphaAPI.util.pageTitleToDate(input) || null;
    } catch (_) {
      return null;
    }
  };

  const relativeDate = (kind) => {
    const date = normalize(new Date());
    if (kind === "yesterday") date.setDate(date.getDate() - 1);
    if (kind === "tomorrow") date.setDate(date.getDate() + 1);
    if (kind === "monday") date.setDate(date.getDate() + ((8 - date.getDay()) % 7 || 7));
    if (kind === "week") date.setDate(date.getDate() + 7);
    if (kind === "month") date.setMonth(date.getMonth() + 1);
    if (kind === "quarter") date.setMonth(date.getMonth() + 3);
    if (kind === "year") date.setFullYear(date.getFullYear() + 1);
    return date;
  };

  const visibleDatepicker = () => visibleCalendars().at(-1);
  const calendarIcon = () => document.querySelector(".rm-topbar .bp3-icon-calendar");

  const attachPanel = (datepicker, focusInput = false) => {
    datepicker.dataset.folioCalendarEnhanced = "1";
    const nativeShortcuts = datepicker.querySelector(":scope > .bp3-daterangepicker-shortcuts");
    const existing = datepicker.querySelector("." + PANEL_CLASS);
    if (existing) {
      if (focusInput) existing.querySelector("input")?.focus();
      return;
    }

    const panel = document.createElement("div");
    panel.className = PANEL_CLASS;
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = calendarText("jump");
    const input = document.createElement("input");
    input.placeholder = calendarText("input");
    const error = document.createElement("div");
    error.className = "error";
    panel.append(title, input);

    const quicks = [
      ["Today", "today"],
      ["Yesterday", "yesterday"],
      ["Tomorrow", "tomorrow"],
      ["Coming Monday", "monday"],
      ["1 week from now", "week"],
      ["1 month from now", "month"],
      ["3 months from now", "quarter"],
      ["1 year from now", "year"]
    ];

    for (const [index, [label, kind]] of quicks.entries()) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = calendarText(kind);
      button.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const nativeAction = nativeShortcuts?.querySelectorAll(".bp3-menu-item")[index];
        if (nativeAction) nativeAction.click();
        else openDate(relativeDate(kind));
      };
      panel.appendChild(button);
    }

    panel.appendChild(error);
    datepicker.appendChild(panel);
    if (focusInput) input.focus();

    input.onkeydown = async (event) => {
      if (event.key === "Escape") {
        // Let Roam dismiss this picker, rather than opening another one.
        input.blur();
        return;
      }
      if (event.key !== "Enter") return;
      event.preventDefault();
      const date = parseInput(input.value);
      if (!date) {
        error.textContent = calendarText("invalid");
        return;
      }
      if (!nativeShortcuts) { await openDate(date); return; }
      // Reference-date pickers must keep Roam's original replacement callback.
      const select = async (selector, value) => {
        const element = datepicker.querySelector(selector);
        if (!element || ![...element.options].some(option => option.value === String(value))) return false;
        element.value = String(value);
        element.dispatchEvent(new Event("change", {bubbles:true}));
        await new Promise(resolve => requestAnimationFrame(resolve));
        return true;
      };
      if (!await select(".bp3-datepicker-year-select select", date.getFullYear()) ||
          !await select(".bp3-datepicker-month-select select", date.getMonth())) {
        error.textContent = calendarText("invalid"); return;
      }
      const cell = [...datepicker.querySelectorAll(".DayPicker-Day[aria-label]")].find(cell => {
        const value = new Date(cell.getAttribute("aria-label"));
        return value.getFullYear() === date.getFullYear() && value.getMonth() === date.getMonth() && value.getDate() === date.getDate();
      });
      if (cell && cell.getAttribute("aria-disabled") !== "true") cell.click();
      else error.textContent = calendarText("invalid");
    };
  };

  let focusPicker = false;
  const waitForPicker = (focusInput = false) => {
    focusPicker = focusInput;
    const picker = visibleDatepicker();
    if (picker) { attachPanel(picker, focusPicker); focusPicker = false; }
  };
  window.__folioAttachCalendar = () => {
    const pickers = visibleCalendars();
    pickers.forEach((picker, index) => attachPanel(picker, focusPicker && index === pickers.length - 1));
    focusPicker = false;
  };

  const showJump = () => {
    const existing = visibleDatepicker();
    if (existing) {
      attachPanel(existing, true);
      return;
    }
    focusPicker = true;
    calendarIcon()?.click();
  };

  const onCalendarClick = (event) => {
    if (!event.target.closest?.(".rm-topbar .bp3-icon-calendar")) return;
    waitForPicker(false);
  };

  const isEditing = (target) =>
    target instanceof Element &&
    Boolean(target.closest("input, textarea, select, [contenteditable='true'], .CodeMirror"));

  const onKeyDown = async (event) => {
    if (event.repeat || event.isComposing || isEditing(event.target)) return;
    const match = (name) => window.__folioMatchesShortcut?.(event, name);
    let action = null;
    if (match("jump")) action = showJump;
    else if (match("today")) action = () => openDate(new Date());
    else if (match("daily")) action = () => window.roamAlphaAPI.ui.mainWindow.openDailyNotes();
    else if (match("previous") || match("next")) {
      const date = currentDailyDate();
      date.setDate(date.getDate() + (match("next") ? 1 : -1));
      action = () => openDate(date);
    }
    if (!action) return;
    event.preventDefault(); event.stopImmediatePropagation();
    await action();
  };

  document.addEventListener("click", onCalendarClick, true);
  document.addEventListener("keydown", onKeyDown, true);
  window.roamAlphaAPI.ui.commandPalette?.addCommand?.({ label: COMMAND, callback: showJump });

  window[KEY] = () => {
    delete window.__folioAttachCalendar;
    document.removeEventListener("click", onCalendarClick, true);
    document.removeEventListener("keydown", onKeyDown, true);
    window.roamAlphaAPI.ui.commandPalette?.removeCommand?.({ label: COMMAND });
    document.querySelectorAll("." + PANEL_CLASS).forEach((el) => el.remove());
    document.querySelectorAll("[data-folio-calendar-enhanced]").forEach(el => delete el.dataset.folioCalendarEnhanced);
    document.getElementById(STYLE_ID)?.remove();
    delete window[KEY];
  };

  console.log("[顶部日历 5/5] 点击日历与 G 共用同一套增强日历；T 打开今日页面，D 回到 Daily Notes。");
})();
