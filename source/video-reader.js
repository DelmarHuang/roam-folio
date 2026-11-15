/*
 * 22.4 Video Reader
 * - 只负责杂志式卡片、上传视频适配和原生控制按钮重排
 * - 影院模式和时间戳列表复用 Roam 原生实现；影院内新增时间戳在下方直接编辑
 * - 不再创建 Focus / Fullscreen / Time / Timestamp 的第二套按钮
 */
(() => {
  const createVideoReader = (core) => {
  const { doc } = core;
  const api = window.roamAlphaAPI;
  const CLASS = "mag-video-reader";
  const records = new Map();
  let titleTimer = 0;

  const el = (tag, className, text) => {
    const node = doc.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  const readBlock = (uid) =>
    api?.q?.(
      '[:find ?s . :in $ ?uid :where [?b :block/uid ?uid] [?b :block/string ?s]]',
      uid
    ) || "";

  const sourceOf = (media, raw) => {
    const src = media.currentSrc || media.src || media.getAttribute("src") || "";
    const rawUrl = (String(raw).match(/https?:\/\/[^\s)\]}]+/i) || [src])[0] || src;
    let url = rawUrl.replace(/[.,;]+$/, "");
    if (/youtube\.com\/embed\//i.test(src)) {
      const id = src.match(/youtube\.com\/embed\/([^?&/]+)/i)?.[1] || "";
      url = id ? "https://www.youtube.com/watch?v=" + id : url;
    }
    return url;
  };

  const kindOf = (media, source) => {
    if (media.tagName === "VIDEO") return "Uploaded video";
    if (/youtu(?:\.be|be\.com)/i.test(source) || /youtube/i.test(media.src || "")) return "YouTube";
    if (/vimeo/i.test(source) || /vimeo/i.test(media.src || "")) return "Vimeo";
    return "Embedded video";
  };

  const isMediaFile = (value) => /\.(mp4|webm|mov|m4v|ogv|ogg)(?:$|\?)/i.test(value || "");

  const titleOf = (media, raw, source, kind) => {
    const live = media.getAttribute("title") || "";
    if (live && live !== "YouTube video player") return live;
    const label = String(raw).match(/\[([^\]]+)\]\(https?:\/\//)?.[1]?.trim();
    if (label && label !== "- YouTube") return label;
    try {
      const file = decodeURIComponent(new URL(source).pathname).split("/").filter(Boolean).pop() || "";
      if (isMediaFile(file)) return file;
    } catch (_) {}
    return kind;
  };

  const directShell = (media, input) => {
    let shell = media;
    while (shell.parentElement && shell.parentElement !== input) shell = shell.parentElement;
    return shell;
  };

  const nativeSelector = [
    ".rm-video-player__edit-btn",
    ".rm-video-player__comment-button",
    ".rm-video-player__theater-button",
    ".rm-video-player__timestamps-button"
  ].join(",");

  const adoptNativeControls = () => {};

  const install = (media) => {
    const input = media.closest(".rm-block__input");
    const block = media.closest(".rm-block[data-block-uid]");
    const uid = block?.dataset.blockUid || "";
    if (!input || !block || !uid || records.has(input)) return;
    if (input.classList.contains(CLASS) || input.querySelector(":scope > .mag-video-toolbar")) return;

    const raw = readBlock(uid);
    const source = sourceOf(media, raw);
    const kind = kindOf(media, source);
    const shell = directShell(media, input);
    if (!shell || shell === input) return;

    input.classList.add(CLASS);
    shell.classList.add("mag-video-stage");

    if (media.tagName === "IFRAME") {
      media.setAttribute("allowfullscreen", "");
      const allow = media.getAttribute("allow") || "";
      if (!/fullscreen/i.test(allow)) media.setAttribute("allow", (allow ? allow + "; " : "") + "fullscreen");
    } else if (media.tagName === "VIDEO") {
      media.setAttribute("controls", "");
    }

    const toolbar = el("div", "mag-video-toolbar");
    const kicker = el("span", "mag-video-kicker", "VIDEO");
    const heading = el("div", "mag-video-heading");
    const title = el("div", "mag-video-title", titleOf(media, raw, source, kind));
    const sourceLabel = el("div", "mag-video-source", kind);
    const actions = el("div", "mag-video-actions");
    heading.append(title, sourceLabel);
    toolbar.append(kicker, heading, actions);

    input.insertBefore(toolbar, shell);

    const record = {
      input, block, uid, raw, source, kind, media, shell,
      toolbar, title, actions, nativeControls: []
    };
    records.set(input, record);
    adoptNativeControls(record);
  };

  const restoreNativeControls = () => {};

  const remove = (record) => {
    restoreNativeControls(record);
    record.toolbar.remove();
    record.shell.classList.remove("mag-video-stage");
    record.input.classList.remove(CLASS);
    records.delete(record.input);
  };

  titleTimer = window.setInterval(() => {
    for (const record of records.values()) {
      const live = record.media.getAttribute("title") || "";
      if (live && live !== "YouTube video player") record.title.textContent = live;
      adoptNativeControls(record);
    }
  }, 1000);

  return {
    sync() {
      for (const record of [...records.values()]) {
        if (!record.input.isConnected || !record.media.isConnected) remove(record);
        else adoptNativeControls(record);
      }
      doc.querySelectorAll("iframe.rm-video-player, video").forEach((media) => {
        if (media.id === "intercom-frame" || media.closest(".rm-pdf-container, .rm-video-theater")) return;
        install(media);
      });
    },
    destroy() {
      window.clearInterval(titleTimer);
      for (const record of [...records.values()]) remove(record);
    }
  };
};


  const cleanupKey = "__magVideoReaderCleanup";
  if (typeof window[cleanupKey] === "function") {
    try { window[cleanupKey](); } catch (error) {
      console.warn("[Video Reader] previous cleanup", error);
      delete window[cleanupKey];
    }
  }
  const instance = createVideoReader({ doc: document });
  let scheduled = false;
  const sync = () => {
    scheduled = false;
    try {
      instance.sync();
    } catch (error) {
      console.error("[Video Reader] sync", error);
    }
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(sync);
  };
  const observer = new MutationObserver(schedule);
  observer.observe(document.body, { childList: true, subtree: true });
  sync();
  window[cleanupKey] = () => {
    observer.disconnect();
    instance.destroy();
    delete window[cleanupKey];
  };
})();

/* 22.4b Theater editable timestamp notes + English native controls */
(() => {
  const KEY = "__magVideoTheaterCleanup";
  if (typeof window[KEY] === "function") window[KEY]();

  const api = window.roamAlphaAPI;
  let panel = null;
  let signature = "";
  let pendingInsert = null;
  const drafts = new Map();
  const draftKey = "folio:video-note-draft:" + (location.hash.match(/\/app\/([^/]+)/)?.[1] || "") + ":";
  let stopped = false;

  const saveLabels = {
    en: ["Save", "Saving…", "Saved", "Retry", "Not saved. Your draft is kept; click to retry."],
    zh: ["保存", "保存中…", "已保存", "重试", "尚未保存。草稿已保留，点击重试。"],
    it: ["Salva", "Salvataggio…", "Salvato", "Riprova", "Non salvato. La bozza è conservata; fai clic per riprovare."],
    de: ["Speichern", "Speichert…", "Gespeichert", "Erneut versuchen", "Nicht gespeichert. Der Entwurf bleibt erhalten; zum Wiederholen klicken."],
    fr: ["Enregistrer", "Enregistrement…", "Enregistré", "Réessayer", "Non enregistré. Le brouillon est conservé ; cliquez pour réessayer."],
    es: ["Guardar", "Guardando…", "Guardado", "Reintentar", "No se ha guardado. El borrador se conserva; haz clic para reintentar."]
  };
  const saveText = () => saveLabels[window.__magLocale] || saveLabels.en;

  const labels = [
    [".rm-video-player__edit-btn, button[title=\"Open in sidebar\"]", "Open"],
    [".rm-video-player__comment-button, button[title=\"Insert Timestamp\"]", "Timestamp"],
    [".rm-video-player__theater-button, button[title=\"Theater mode\"], button[title=\"Default view\"]", "Theater"],
    [".rm-video-player__timestamps-button, button[title=\"View timestamps\"]", "Notes"]
  ];

  const labelControls = () => {
    labels.forEach(([selector, fallback]) => {
      document.querySelectorAll(selector).forEach((button) => {
        button.dataset.magLabel = button.title === "Default view" ? "Exit Theater" : fallback;
      });
    });
  };

  const secondsOf = (stamp) =>
    stamp.split(":").map(Number).reduce((total, part) => total * 60 + part, 0);

  const notesFor = (videoUid) => {
    const rows = api?.q?.(
      '[:find ?uid ?s :in $ ?videoUid :where [?v :block/uid ?videoUid] [?b :block/refs ?v] [?b :block/uid ?uid] [?b :block/string ?s]]',
      videoUid
    ) || [];
    return rows.map(([uid, value]) => {
      const raw = String(value || "");
      if (!/video-timestamp/i.test(raw)) return null;
      const stamp = raw.match(/\b(\d{1,2}:\d{2}(?::\d{2})?)\b/)?.[1];
      const prefix = raw.match(/^\s*\{\{\[\[video-timestamp\]\]\s*:[\s\S]*?\}\}/)?.[0];
      if (!stamp || !prefix) return null;
      return {
        uid,
        stamp,
        prefix,
        seconds: secondsOf(stamp),
        raw,
        text: raw.slice(prefix.length).replace(/^ /, "")
      };
    }).filter(Boolean).sort((a, b) => a.seconds - b.seconds || a.uid.localeCompare(b.uid));
  };

  const seek = (seconds) => {
    const theater = document.querySelector(".rm-video-theater");
    const video = theater?.querySelector("video");
    if (video) {
      video.currentTime = seconds;
      return;
    }
    theater?.querySelector("iframe.rm-video-player, iframe")?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: "seekTo", args: [seconds, true] }),
      "*"
    );
  };

  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  const resizeEditor = (editor) => {
    editor.style.height = "0px";
    editor.style.height = Math.max(34, editor.scrollHeight) + "px";
  };

  const noteString = (state, value = state.value) => state.prefix + (value ? " " + value : "");
  const dirty = (state) => state.value !== state.saved;

  // A draft belongs to the native comment UID, never to a disposable textarea.
  const keepDraft = (state) => {
    try {
      if (dirty(state) || state.inFlight) {
        sessionStorage.setItem(draftKey + state.uid, JSON.stringify({ value: state.value }));
      } else {
        sessionStorage.removeItem(draftKey + state.uid);
      }
    } catch (_) { /* The in-memory draft still works when storage is unavailable. */ }
  };

  const paintSave = (state) => {
    const editor = state.editor;
    const button = state.saveButton;
    const [save, saving, saved, retry, failed] = saveText();
    const status = state.error ? "error" : state.inFlight ? "saving" : dirty(state) ? "pending" : "saved";
    if (editor) {
      editor.classList.toggle("is-saving", status === "saving");
      editor.classList.toggle("is-saved", status === "saved" && state.didSave);
      editor.classList.toggle("is-error", status === "error");
      editor.dataset.original = state.saved;
    }
    if (button) {
      button.dataset.state = status;
      button.hidden = !dirty(state) && !state.inFlight && !state.error && !state.didSave;
      button.disabled = state.deleting || state.composing || status === "saving" || status === "saved";
      button.textContent = status === "error" ? retry : status === "saving" ? saving : status === "saved" ? saved : save;
      button.title = status === "error" ? failed : button.textContent;
      button.setAttribute("aria-label", button.title);
    }
  };

  const stateFor = (note) => {
    let state = drafts.get(note.uid);
    if (!state) {
      state = { uid: note.uid, prefix: note.prefix, saved: note.text, value: note.text, raw: note.raw };
      try {
        const backup = JSON.parse(sessionStorage.getItem(draftKey + note.uid) || "null");
        if (backup && typeof backup.value === "string" && backup.value !== note.text) {
          state.value = backup.value;
          state.error = true; // Recovered drafts wait for an explicit save/retry.
        }
      } catch (_) {}
      drafts.set(note.uid, state);
    } else if (!dirty(state) && !state.inFlight && !state.error) {
      state.value = state.saved = note.text;
      state.prefix = note.prefix;
      state.raw = note.raw;
    }
    state.note = note;
    return state;
  };

  const readComment = (uid) => api.q(
    '[:find ?s . :in $ ?uid :where [?b :block/uid ?uid] [?b :block/string ?s]]', uid
  );

  const saveDraft = (state, retry = false) => {
    window.clearTimeout(state.timer);
    state.timer = 0;
    if (state.inFlight) return state.inFlight;
    if (state.deleting || state.composing || (state.error && !retry) || !dirty(state)) return Promise.resolve();
    state.error = false;
    // Start on the next microtask so inFlight is set before any result is handled.
    state.inFlight = Promise.resolve().then(async () => {
      while (dirty(state) && !state.deleting && !state.composing) {
        const value = state.value;
        const string = noteString(state, value);
        // Updating only the existing UID preserves Roam's comment thread and author.
        if (typeof readComment(state.uid) !== "string") throw new Error("Timestamp comment is unavailable");
        const result = await api.updateBlock({ block: { uid: state.uid, string } });
        if (result === false) throw new Error("Roam did not accept the comment update");
        let confirmed = false;
        for (let attempt = 0; attempt < 5; attempt++) {
          if (readComment(state.uid) === string) { confirmed = true; break; }
          if (attempt < 4) await new Promise((resolve) => window.setTimeout(resolve, 80));
        }
        if (!confirmed) throw new Error("Roam has not confirmed the comment update");
        state.saved = value;
        state.raw = string;
        state.didSave = true;
      }
    }).catch((error) => {
      state.error = true;
      console.error("[Video Reader] save timestamp comment", error);
    }).finally(() => {
      state.inFlight = null;
      keepDraft(state);
      paintSave(state);
    });
    keepDraft(state);
    paintSave(state);
    return state.inFlight;
  };

  const captureEditor = (state, editor) => {
    if (state.value !== editor.value) state.error = false;
    state.value = editor.value;
    if (!dirty(state) && !state.inFlight) state.error = false;
    keepDraft(state);
    paintSave(state);
  };

  const scheduleSave = (state) => {
    window.clearTimeout(state.timer);
    if (!state.composing && !state.deleting && !state.error && !stopped) {
      state.timer = window.setTimeout(() => saveDraft(state), 450);
    }
  };

  const flushDrafts = () => {
    drafts.forEach((state) => {
      if (state.editor?.isConnected) captureEditor(state, state.editor);
      saveDraft(state);
    });
  };

  const openInSidebar = async (uid) => {
    try {
      api.ui.rightSidebar.open();
      await Promise.resolve(api.ui.rightSidebar.addWindow({
        window: { type: "block", "block-uid": uid }
      }));
      window.setTimeout(() => {
        const blocks = Array.from(document.querySelectorAll(
          '#right-sidebar [data-block-uid="' + CSS.escape(uid) + '"]'
        ));
        const block = blocks.at(-1);
        block?.scrollIntoView({ behavior: "smooth", block: "center" });
        const input = block?.matches(".rm-block__input")
          ? block
          : block?.querySelector(".rm-block__input");
        input?.click();
        input?.focus({ preventScroll: true });
      }, 240);
    } catch (error) {
      console.error("[Video Reader] open timestamp note in sidebar", error);
    }
  };

  const deleteNote = async (note, button) => {
    if (button.dataset.confirm !== "true") {
      button.dataset.confirm = "true";
      button.textContent = "Confirm";
      button.classList.add("is-confirming");
      window.setTimeout(() => {
        if (!button.isConnected || button.dataset.confirm !== "true") return;
        delete button.dataset.confirm;
        button.textContent = "Delete";
        button.classList.remove("is-confirming");
      }, 3200);
      return;
    }

    button.disabled = true;
    button.textContent = "Deleting…";
    const state = drafts.get(note.uid);
    if (state) {
      state.deleting = true;
      window.clearTimeout(state.timer);
      paintSave(state);
    }
    try {
      if (state?.inFlight) await state.inFlight;
      await Promise.resolve(api.deleteBlock({ block: { uid: note.uid } }));
      drafts.delete(note.uid);
      try { sessionStorage.removeItem(draftKey + note.uid); } catch (_) {}
      state?.row?.remove();
      signature = null;
      pendingInsert = null;
      sync();
    } catch (error) {
      if (state) { state.deleting = false; paintSave(state); }
      console.error("[Video Reader] delete timestamp note", error);
      button.disabled = false;
      button.textContent = "Delete";
      button.classList.remove("is-confirming");
      delete button.dataset.confirm;
    }
  };

  const focusEditor = (uid) => {
    const editor = panel?.querySelector(
      '.mag-video-theater-note__editor[data-uid="' + CSS.escape(uid) + '"]'
    );
    if (!editor) return false;
    editor.closest(".mag-video-theater-note")?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
    window.setTimeout(() => {
      if (stopped || !editor.isConnected) return;
      editor.focus({ preventScroll: true });
      editor.setSelectionRange(editor.value.length, editor.value.length);
    }, 260);
    return true;
  };

  // Roam owns timestamp creation, including comment parentage, author and time.
  // Observe the native click only, then locate its new comment in the theater view.
  const onTimestampClick = (event) => {
    const button = event.target.closest?.(
      '.rm-video-theater button[title="Insert Timestamp"], .rm-video-theater .rm-video-player__comment-button'
    );
    if (!button) return;
    const videoUid = decodeURIComponent(location.hash.match(/\/video\/([^/?#]+)/)?.[1] || "");
    if (!videoUid || !panel?.isConnected) return;
    pendingInsert = {
      videoUid,
      before: new Set(notesFor(videoUid).map((note) => note.uid)),
      deadline: Date.now() + 7000
    };
  };

  const render = (notes) => {
    let header = panel.querySelector(".mag-video-theater-notes__header");
    let list = panel.querySelector(".mag-video-theater-notes__list");
    if (!header || !list) {
      header = make("div", "mag-video-theater-notes__header");
      header.append(
        make("span", "mag-video-theater-notes__eyebrow", "TIMESTAMP NOTES"),
        make("span", "mag-video-theater-notes__count")
      );
      list = make("div", "mag-video-theater-notes__list");
      panel.append(header, list);
    }
    header.querySelector(".mag-video-theater-notes__count").textContent = String(notes.length).padStart(2, "0");
    list.querySelector(".mag-video-theater-notes__empty")?.remove();
    const visible = new Set(notes.map((note) => note.uid));
    Array.from(list.children).forEach((row) => {
      if (!visible.has(row.dataset.uid)) row.remove();
    });

    notes.forEach((note, index) => {
      const state = stateFor(note);
      if (!state.row) {
        const row = state.row = make("div", "mag-video-theater-note");
        row.dataset.uid = note.uid;
        const time = state.time = make("button", "mag-video-theater-note__time");
        time.type = "button";
        time.addEventListener("click", () => seek(state.note.seconds));

        const editor = state.editor = make("textarea", "mag-video-theater-note__editor");
        editor.dataset.uid = note.uid;
        editor.addEventListener("input", () => {
          captureEditor(state, editor);
          resizeEditor(editor);
          scheduleSave(state);
        });
        editor.addEventListener("compositionstart", () => {
          state.composing = true;
          window.clearTimeout(state.timer);
          paintSave(state);
        });
        editor.addEventListener("compositionend", () => {
          state.composing = false;
          captureEditor(state, editor);
          scheduleSave(state);
        });
        editor.addEventListener("blur", () => {
          captureEditor(state, editor);
          saveDraft(state);
        });
        editor.addEventListener("keydown", (event) => {
          if ((event.metaKey || event.ctrlKey) && event.key === "Enter" && !event.isComposing && !state.composing) {
            event.preventDefault();
            event.stopPropagation();
            captureEditor(state, editor);
            saveDraft(state, true);
          }
        });

        const actions = make("div", "mag-video-theater-note__actions");
        const saveButton = state.saveButton = make("button", "mag-video-theater-note__action mag-video-theater-note__save");
        saveButton.type = "button";
        saveButton.setAttribute("aria-live", "polite");
        saveButton.addEventListener("click", () => {
          captureEditor(state, editor);
          saveDraft(state, true);
        });
        const openButton = make("button", "mag-video-theater-note__action", "Open");
        openButton.type = "button";
        openButton.title = "Open this timestamp block in the right sidebar";
        openButton.addEventListener("click", async () => {
          captureEditor(state, editor);
          await saveDraft(state);
          openInSidebar(note.uid);
        });

        const deleteButton = make(
          "button",
          "mag-video-theater-note__action mag-video-theater-note__delete",
          "Delete"
        );
        deleteButton.type = "button";
        deleteButton.title = "Delete this timestamp block and its children";
        deleteButton.addEventListener("click", () => deleteNote(state.note, deleteButton));

        actions.append(saveButton, openButton, deleteButton);
        row.append(time, editor, actions);
      }
      const { row, editor, time } = state;
      time.textContent = note.stamp;
      time.title = "Jump to " + note.stamp;
      // Reconcile by UID: never replace a focused or unsaved textarea on polling.
      if (editor.value !== state.value) editor.value = state.value;
      editor.dataset.prefix = state.prefix;
      editor.setAttribute("aria-label", "Edit note at " + note.stamp);
      if (list.children[index] !== row) list.insertBefore(row, list.children[index] || null);
      paintSave(state);
      requestAnimationFrame(() => { if (editor.isConnected) resizeEditor(editor); });
    });
    if (!notes.length) list.append(make("div", "mag-video-theater-notes__empty", "No timestamp notes yet."));
  };

  const sync = () => {
    labelControls();

    const theater = document.querySelector(".rm-video-theater");
    const videoUid = decodeURIComponent(location.hash.match(/\/video\/([^/?#]+)/)?.[1] || "");
    const anchor = theater?.querySelector(".rm-video-player__spacing-wrapper--theater");
    if (!theater || !videoUid || !anchor) {
      if (panel) flushDrafts();
      panel?.remove();
      panel = null;
      signature = "";
      return;
    }

    if (panel && panel.dataset.videoUid !== videoUid) {
      flushDrafts();
      panel.remove();
      panel = null;
    }

    if (!panel?.isConnected) {
      panel = make("section", "mag-video-theater-notes");
      panel.dataset.videoUid = videoUid;
      anchor.insertAdjacentElement("afterend", panel);
      signature = "";
    }

    if (pendingInsert && (pendingInsert.videoUid !== videoUid || Date.now() > pendingInsert.deadline)) pendingInsert = null;
    if (panel.contains(document.activeElement) && !pendingInsert) return;
    const notes = notesFor(videoUid);
    const next = notes.map((note) => [note.uid, note.seconds, note.text].join("|")).join("¦");
    const inserted = pendingInsert
      ? notes.find((note) => !pendingInsert.before.has(note.uid))
      : null;

    if (next !== signature) {
      signature = next;
      render(notes);
    }

    if (inserted) {
      const uid = inserted.uid;
      pendingInsert = null;
      requestAnimationFrame(() => focusEditor(uid));
    } else if (pendingInsert && Date.now() > pendingInsert.deadline) {
      pendingInsert = null;
    }
  };

  document.addEventListener("click", onTimestampClick, true);
  window.addEventListener("pagehide", flushDrafts);
  const timer = window.setInterval(sync, 350);
  sync();

  window[KEY] = () => {
    stopped = true;
    flushDrafts();
    window.clearInterval(timer);
    window.removeEventListener("pagehide", flushDrafts);
    document.removeEventListener("click", onTimestampClick, true);
    pendingInsert = null;
    panel?.remove();
    document.querySelectorAll("[data-mag-label]").forEach((button) => delete button.dataset.magLabel);
    delete window[KEY];
  };
})();
