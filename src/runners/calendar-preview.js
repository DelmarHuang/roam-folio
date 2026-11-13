(() => {
  const KEY = "__delmarCalendarPreviewCleanup";
  const STYLE_ID = "delmar-calendar-preview-style";
  const TOOLTIP_ID = "delmar-calendar-tooltip";
  if (typeof window[KEY] === "function") window[KEY]();

  document.getElementById(STYLE_ID)?.remove();
  document.getElementById(TOOLTIP_ID)?.remove();

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = [
    ".bp3-datepicker{background:#fffaf0!important;border-color:rgba(26,26,46,.16)!important}",
    ".bp3-datepicker .DayPicker,.bp3-datepicker .DayPicker-Month,.bp3-datepicker .DayPicker-Caption{background:#fffaf0!important}",
    ".bp3-datepicker .DayPicker-Weekdays,.bp3-datepicker .DayPicker-Body{background:#fffaf0!important}",
    ".bp3-datepicker .bp3-datepicker-navbar,.bp3-datepicker .bp3-datepicker-caption{background:#fffaf0!important}",
    ".DayPicker-Day{padding:2px!important}",
              ".DayPicker-Day--today .bp3-datepicker-day-wrapper{box-shadow:0 0 0 2px #7d6aa3,0 0 0 4px rgba(244,215,88,.72)!important;font-weight:800!important}",
    ".bp3-datepicker-day-wrapper.delmar-cal-day{position:relative;border-radius:50%;transition:background .12s ease,box-shadow .12s ease}",
    ".delmar-cal-day[data-level='1']{background:#f7efcf}",
    ".delmar-cal-day[data-level='2']{background:#efdf9f}",
    ".delmar-cal-day[data-level='3']{background:#e3ca69}",
    ".delmar-cal-day[data-level='4']{background:#c9aa45;color:#1a1a2e;font-weight:700}",
    ".delmar-cal-day[data-mentioned='1']{box-shadow:0 0 0 1.5px #7d6aa3}",
    ".delmar-cal-status{position:absolute;right:-5px;bottom:-4px;display:flex;gap:2px;align-items:center;z-index:2;" +
      "padding:0 3px;height:12px;border:1px solid rgba(26,26,46,.65);border-radius:7px;background:#fffaf0;" +
      "color:#1a1a2e;font:700 8px/10px Inter,'Noto Sans SC',sans-serif;letter-spacing:-.2px;white-space:nowrap;box-sizing:border-box}",
    ".delmar-cal-status .done{color:#62528c}",
    ".delmar-cal-status .todo{color:#9a5a2f}",
    "#" + TOOLTIP_ID + "{position:fixed;z-index:10000;max-width:270px;min-width:190px;padding:10px 12px;" +
      "border:1px solid rgba(26,26,46,.28);border-top:3px solid #e3ca69;border-radius:4px;background:#fffdf7;" +
      "color:#1a1a2e;box-shadow:0 8px 24px rgba(26,26,46,.16);font:12px/1.55 Inter,'Noto Sans SC',sans-serif;pointer-events:none}",
    "#" + TOOLTIP_ID + " .date{font-family:Georgia,'Noto Serif SC',serif;font-size:14px;font-weight:700;margin-bottom:5px}",
    "#" + TOOLTIP_ID + " .meta{font-size:10px;letter-spacing:.04em;text-transform:uppercase;color:#5d6074;margin-bottom:5px}",
    "#" + TOOLTIP_ID + " .preview{padding-top:5px;border-top:1px solid rgba(26,26,46,.12);color:#414354;white-space:normal;overflow-wrap:anywhere;word-break:break-word;max-height:150px;overflow:auto}"
  ].join("");
  document.head.appendChild(style);

  const cache = new Map();
  const refCache = new Map();

  const getRefText = (uid) => {
    if (refCache.has(uid)) return refCache.get(uid);
    const text = window.roamAlphaAPI.q(
      '[:find ?text . :in $ ?uid :where [?b :block/uid ?uid] [?b :block/string ?text]]',
      uid
    ) || "";
    refCache.set(uid, text);
    return text;
  };

  const effectiveTexts = (text) => {
    const result = [text || ""];
    const matches = String(text || "").matchAll(/\(\(([A-Za-z0-9_-]{9})\)\)/g);
    for (const match of matches) {
      const refText = getRefText(match[1]);
      if (refText) result.push(refText);
    }
    return result;
  };

  const getInfo = (title) => {
    if (cache.has(title)) return cache.get(title);

    const rows = window.roamAlphaAPI.q(
      '[:find ?uid ?text :in $ ?title :where ' +
      '[?page :node/title ?title] [?block :block/page ?page] ' +
      '[?block :block/uid ?uid] [?block :block/string ?text]]',
      title
    ) || [];

    const expanded = rows.flatMap(([, text]) => effectiveTexts(text));
    const todo = expanded.filter((text) => text.includes("{{[[TODO]]}}")).length;
    const done = expanded.filter((text) => text.includes("{{[[DONE]]}}")).length;
    const mentions = window.roamAlphaAPI.q(
      '[:find (count ?block) . :in $ ?title :where ' +
      '[?page :node/title ?title] [?block :block/refs ?page]]',
      title
    ) || 0;

    const preview = expanded
      .filter((text) => text && !text.startsWith("{{[[TODO]]}}") && !text.startsWith("{{[[DONE]]}}"))
      .map((text) => text
        .replace(/\(\([A-Za-z0-9_-]{9}\)\)/g, "")
        .replace(/\{\{\[\[(?:TODO|DONE)\]\]\}\}/g, "")
        .replace(/\[\[|\]\]/g, "")
        .trim())
      .filter(Boolean)
      .slice(0, 3);

    const info = { blocks: rows.length, todo, done, mentions, preview };
    cache.set(title, info);
    return info;
  };

  const levelFor = (count) =>
    count <= 0 ? 0 : count <= 3 ? 1 : count <= 8 ? 2 : count <= 20 ? 3 : 4;

  const decorate = () => {
    document.querySelectorAll('.DayPicker-Day[aria-label]').forEach((cell) => {
      const date = new Date(cell.getAttribute("aria-label") + " 00:00:00");
      if (Number.isNaN(date.getTime())) return;
      const title = window.roamAlphaAPI.util.dateToPageTitle(date);
      if (cell.dataset.delmarPreviewDate === title) return;

      cell.dataset.delmarPreviewDate = title;
      const wrapper = cell.querySelector(".bp3-datepicker-day-wrapper");
      if (!wrapper) return;

      wrapper.classList.add("delmar-cal-day");
      wrapper.querySelector(".delmar-cal-status")?.remove();
      delete wrapper.dataset.level;
      delete wrapper.dataset.mentioned;

      const info = getInfo(title);
      const level = levelFor(info.blocks);
      if (level) wrapper.dataset.level = String(level);
      if (info.mentions) wrapper.dataset.mentioned = "1";

      if (info.todo || info.done) {
        const status = document.createElement("span");
        status.className = "delmar-cal-status";
        if (info.todo) {
          const todo = document.createElement("span");
          todo.className = "todo";
          todo.textContent = "○" + info.todo;
          status.appendChild(todo);
        }
        if (info.done) {
          const done = document.createElement("span");
          done.className = "done";
          done.textContent = "✓" + info.done;
          status.appendChild(done);
        }
        wrapper.appendChild(status);
      }
    });
  };

  let activeCell = null;
  const hideTooltip = () => { document.getElementById(TOOLTIP_ID)?.remove(); activeCell = null; };
  const showTooltip = (cell) => {
    if (activeCell === cell && document.getElementById(TOOLTIP_ID)) return;
    hideTooltip();
    const title = cell.dataset.delmarPreviewDate;
    if (!title) return;
    const info = getInfo(title);
    if (!info.blocks && !info.mentions && !info.todo && !info.done) return;

    document.getElementById(TOOLTIP_ID)?.remove();
    const tooltip = document.createElement("div");
    tooltip.id = TOOLTIP_ID;
    activeCell = cell;

    const date = document.createElement("div");
    date.className = "date";
    date.textContent = title;

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent =
      info.blocks + " " + calendarText("blocks") + "  ·  ○" + info.todo + " " + calendarText("todo") + "  ·  ✓" + info.done + " " + calendarText("done") +
      (info.mentions ? "  ·  " + info.mentions + " " + calendarText("mentions") : "");

    tooltip.append(date, meta);
    if (info.preview.length) {
      const preview = document.createElement("div");
      preview.className = "preview";
      preview.textContent = info.preview.join(" · ");
      tooltip.appendChild(preview);
    }

    document.body.appendChild(tooltip);
    const rect = cell.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();
    const left = Math.min(window.innerWidth - tipRect.width - 10, Math.max(10, rect.left + rect.width + 8));
    const top = Math.min(window.innerHeight - tipRect.height - 10, Math.max(10, rect.top - 4));
    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
  };

  const onMouseOver = (event) => {
    const cell = event.target.closest?.('.DayPicker-Day[aria-label]');
    if (cell) showTooltip(cell);
  };
  const onMouseOut = (event) => {
    const cell = event.target.closest?.('.DayPicker-Day[aria-label]');
    if (cell && !cell.contains(event.relatedTarget)) {
      hideTooltip();
    }
  };

  const onPointerMove = event => {
    const cell = event.target.closest?.('.DayPicker-Day[aria-label]');
    if (activeCell && cell !== activeCell) hideTooltip();
  };
  const onVisibility = () => { if (document.hidden) hideTooltip(); };
  const onEscape = event => { if (event.key === "Escape") hideTooltip(); };
  let queued = false;
  let frame = 0;
  let stopped = false;
  const schedule = () => {
    if (activeCell && (!activeCell.isConnected || !activeCell.matches(":hover"))) hideTooltip();
    if (queued || stopped) return;
    queued = true;
    frame = requestAnimationFrame(() => {
      queued = false;
      if (!stopped) decorate();
    });
  };

  const observer = window.__magCore.watch("runner:calendar-preview:1", schedule);
  observer.observe(document.body, { childList: true, subtree: true });
  document.addEventListener("mouseover", onMouseOver, true);
  document.addEventListener("mouseout", onMouseOut, true);
  document.addEventListener("pointermove", onPointerMove, true);
  document.addEventListener("mousemove", onPointerMove, true);
  document.addEventListener("scroll", hideTooltip, true);
  document.addEventListener("visibilitychange", onVisibility);
  document.addEventListener("keydown", onEscape, true);
  window.addEventListener("blur", hideTooltip);
  window.addEventListener("mouseleave", hideTooltip);

  const refreshTimer = setInterval(() => {
    cache.clear();
    refCache.clear();
    document.querySelectorAll("[data-delmar-preview-date]")
      .forEach((cell) => delete cell.dataset.delmarPreviewDate);
    schedule();
  }, 15000);

  schedule();

  window[KEY] = () => {
    stopped = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    clearInterval(refreshTimer);
    document.removeEventListener("mouseover", onMouseOver, true);
    document.removeEventListener("mouseout", onMouseOut, true);
    document.removeEventListener("pointermove", onPointerMove, true);
    document.removeEventListener("mousemove", onPointerMove, true);
    document.removeEventListener("scroll", hideTooltip, true);
    document.removeEventListener("visibilitychange", onVisibility);
    document.removeEventListener("keydown", onEscape, true);
    window.removeEventListener("blur", hideTooltip);
    window.removeEventListener("mouseleave", hideTooltip);
    hideTooltip();
    document.getElementById(STYLE_ID)?.remove();
    document.getElementById(TOOLTIP_ID)?.remove();
    document.querySelectorAll(".delmar-cal-status").forEach((el) => el.remove());
    document.querySelectorAll(".delmar-cal-day").forEach((el) => {
      el.classList.remove("delmar-cal-day");
      delete el.dataset.level;
      delete el.dataset.mentioned;
    });
    delete window[KEY];
  };

  console.log("[顶部日历 2/5] 杂志风日期热度、任务统计与悬停预览已加载。");
})();
