(() => {
  const KEY = "__magCodeBottom";
  const STYLE_ID = "mag-code-tools-style";
  const messages = {
    en: ['Search this code block…','Search this code block','Previous · Shift + Enter','Next · Enter','Close search · Esc','No matches','Unable to read document','Replace with…','Replace current','Replace all','Read-only document','Code-block tools','Scroll to code start','Scroll to code end','Copy all code','Copied all code'],
    zh: ['搜索当前代码块…','搜索当前代码块','上一个 · Shift + Enter','下一个 · Enter','关闭搜索 · Esc','无结果','无法读取文档','替换为…','替换当前项','全部替换','文档为只读','代码块操作','滚动到代码块顶部','滚动到代码块底部','复制全部代码','已复制全部代码'],
    fr: ['Rechercher dans ce bloc…','Rechercher dans ce bloc','Précédent · Maj + Entrée','Suivant · Entrée','Fermer · Échap','Aucun résultat','Lecture impossible','Remplacer par…','Remplacer','Tout remplacer','Document en lecture seule','Outils du bloc de code','Début du code','Fin du code','Copier tout le code','Code copié'],
    de: ['Diesen Codeblock durchsuchen…','Codeblock durchsuchen','Zurück · Umschalt + Eingabe','Weiter · Eingabe','Schließen · Esc','Keine Treffer','Dokument nicht lesbar','Ersetzen durch…','Treffer ersetzen','Alle ersetzen','Dokument schreibgeschützt','Codeblock-Werkzeuge','Zum Codeanfang','Zum Codeende','Gesamten Code kopieren','Code kopiert'],
    es: ['Buscar en este bloque…','Buscar en este bloque','Anterior · Mayús + Intro','Siguiente · Intro','Cerrar · Esc','Sin resultados','No se puede leer el documento','Reemplazar por…','Reemplazar actual','Reemplazar todo','Documento de solo lectura','Herramientas de código','Inicio del código','Final del código','Copiar todo el código','Código copiado'],
    it: ['Cerca in questo blocco…','Cerca in questo blocco','Precedente · Maiusc + Invio','Successivo · Invio','Chiudi · Esc','Nessun risultato','Impossibile leggere il documento','Sostituisci con…','Sostituisci corrente','Sostituisci tutto','Documento di sola lettura','Strumenti del codice','Inizio del codice','Fine del codice','Copia tutto il codice','Codice copiato']
  };
  const labels = messages[window.__magLocale] || messages.en;
  const titleKeys = new Map(messages.zh.map((value, index) => [value, index]));
  const text = value => titleKeys.has(value) ? labels[titleKeys.get(value)] : value;
  const searchStates = new Map();


  window[KEY]?.stop();
  document.getElementById(STYLE_ID)?.remove();

  document.querySelectorAll(
    ".mag-code-tools, .mag-code-search, .mag-code-bottom"
  ).forEach(el => el.remove());

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    html body .rm-code-block__settings-bar {
      display: flex !important;
      align-items: center !important;
      justify-content: flex-end !important;
      gap: 5px !important;
    }

    html body .mag-code-tools {
      display: inline-flex !important;
      align-items: center !important;
      flex: 0 0 auto !important;
      gap: 2px;
      order: 0;
    }

    html body .rm-code-block__language-chooser {
      order: 1;
    }

    html body :is(.mag-code-tools, .mag-code-search) button {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex: 0 0 auto !important;
      width: 27px !important;
      height: 27px !important;
      min-width: 27px !important;
      margin: 0 !important;
      padding: 5px !important;
      color: var(--mag-muted, #666675) !important;
      background: transparent !important;
      border: 0 !important;
      border-radius: 5px !important;
      box-shadow: none !important;
      cursor: pointer !important;
    }

    html body :is(.mag-code-tools, .mag-code-search) button:hover,
    html body .mag-code-tools button[aria-expanded="true"] {
      color: var(--mag-ink, #1a1a2e) !important;
      background: var(--mag-yellow-soft, #f5ecc9) !important;
    }

    html body :is(.mag-code-tools, .mag-code-search)
    button:focus-visible {
      outline: 1px solid #b79a37 !important;
      outline-offset: 2px !important;
    }

    html body :is(.mag-code-tools, .mag-code-search) button svg {
      display: block !important;
      width: 16px !important;
      height: 16px !important;
      fill: none !important;
      stroke: currentColor !important;
      stroke-width: 1.6 !important;
      stroke-linecap: round !important;
      stroke-linejoin: round !important;
    }

    html body .mag-code-tools button[data-state="success"] {
      color: #52794e !important;
    }

    html body .mag-code-tools button[data-state="error"] {
      color: #a0443d !important;
    }

    html body .mag-code-search {
      display: flex !important;
      align-items: center !important;
      flex-wrap: wrap;
      gap: 4px;
      box-sizing: border-box;
      margin: 8px 10px;
      padding: 6px 8px;
      color: var(--mag-muted, #666675);
      background: var(--mag-paper, #fefcf6);
      border: 1px solid var(--mag-border, #e8e0cf);
      border-radius: 6px;
      font-family: var(--mag-body, sans-serif);
    }

    html body .mag-code-search button[data-replace] {
      width: auto !important;
      padding-inline: 7px !important;
      font: 12px/1.5 var(--mag-body, sans-serif);
    }
    html body .mag-code-search button:disabled {opacity:.45;cursor:default;}
    html body .mag-code-search[hidden] {
      display: none !important;
    }

    html body .mag-code-search input {
      flex: 1 1 120px;
      min-width: 80px;
      height: 26px;
      box-sizing: border-box;
      padding: 3px 5px;
      color: var(--mag-ink, #1a1a2e) !important;
      background: transparent !important;
      border: 0 !important;
      border-radius: 3px;
      box-shadow: none !important;
      font: 12px/1.5 var(--mag-body, sans-serif);
    }

    html body .mag-code-search input:focus {
      outline: 1px solid #b79a37 !important;
    }

    .mag-code-search-count {
      font-size: 11px;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
      padding: 0 4px;
    }
  `;
  document.head.append(style);

  const paths = {
    top: '<path d="M4 4h16M12 20V8m-5 5 5-5 5 5"/>',
    bottom: '<path d="M4 20h16M12 4v12m-5-5 5 5 5-5"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/>' +
            '<path d="m16 16 5 5"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/>' +
          '<path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
    prev: '<path d="m6 14 6-6 6 6"/>',
    next: '<path d="m6 10 6 6 6-6"/>',
    close: '<path d="m7 7 10 10M17 7 7 17"/>',
    done: '<path d="m5 12 4 4L19 6"/>',
    error: '<path d="m7 7 10 10M17 7 7 17"/>'
  };

  const icon = name =>
    `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;

  const installed = new Map();
  const pending = new Set();
  const timers = new Set();
  let frame = 0;
  let stopped = false;

  function later(fn, delay) {
    const id = setTimeout(() => {
      timers.delete(id);
      if (!stopped) fn();
    }, delay);
    timers.add(id);
    return id;
  }

  function cancel(id) {
    clearTimeout(id);
    timers.delete(id);
  }

  function validView(view) {
    return Boolean(
      view?.state?.doc &&
      typeof view.state.doc.toString === "function" &&
      typeof view.dispatch === "function"
    );
  }

  function getView(block) {
    const content = block.querySelector(".cm-editor .cm-content");
    if (!content) return null;

    // 从 CM6 DOM 的关联视图获取实例；不读取虚拟渲染文本。
    let node = content.cmView;

    for (let i = 0; node && i < 12; i++) {
      if (validView(node.view)) return node.view;

      try {
        if (validView(node.rootView?.view)) {
          return node.rootView.view;
        }
      } catch {}

      node = node.parent;
    }

    return null;
  }

  function requireView(block) {
    const view = getView(block);
    if (!view) throw new Error("无法访问 CM6 文档实例");
    return view;
  }

  function button(name, title, action) {
    const el = document.createElement("button");
    el.type = "button";
    el.title = text(title);
    el.setAttribute("aria-label", text(title));
    el.innerHTML = icon(name);

    el.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      action(el);
    });

    return el;
  }

  function scroll(block, bottom) {
    const view = getView(block);
    const effect = view?.constructor?.scrollIntoView;

    if (view && typeof effect === "function") {
      view.dispatch({
        effects: effect.call(
          view.constructor,
          bottom ? view.state.doc.length : 0,
          { y: bottom ? "end" : "start", yMargin: 0 }
        )
      });
      return;
    }

    const scroller = block.querySelector(".cm-scroller");
    scroller?.scrollTo({
      top: bottom ? scroller.scrollHeight : 0,
      behavior: "auto"
    });
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      const active = document.activeElement;
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.readOnly = true;
      textarea.style.cssText =
        "position:fixed;left:-9999px;top:0;opacity:0;";
      document.body.append(textarea);

      try {
        textarea.focus({ preventScroll: true });
        textarea.select();
        if (!document.execCommand("copy")) {
          throw new Error("浏览器未允许复制");
        }
      } finally {
        textarea.remove();
        active?.focus?.({ preventScroll: true });
      }
    }
  }

  function feedback(el, ok, message) {
    if (stopped || !el.isConnected) return;

    el.dataset.state = ok ? "success" : "error";
    el.innerHTML = icon(ok ? "done" : "error");
    el.title = text(message);

    later(() => {
      if (!el.isConnected) return;
      delete el.dataset.state;
      el.innerHTML = icon("copy");
      el.title = text("复制全部代码");
    }, 1600);
  }

  function createSearch(block, searchButton) {
    const key = block.closest('[data-block-uid]')?.getAttribute('data-block-uid') || block;
    const saved = searchStates.get(key) || {query:'', replacement:'', from:null, open:false, count:'0 / 0'};
    searchStates.set(key, saved);
    const panel = document.createElement('div');
    panel.className = 'mag-code-search';
    panel.hidden = !saved.open;
    searchButton.setAttribute('aria-expanded', String(saved.open));
    const input = document.createElement('input');
    input.type = 'search'; input.value = saved.query;
    input.placeholder = labels[0]; input.setAttribute('aria-label', labels[1]);
    input.autocomplete = 'off'; input.spellcheck = false;
    const replacement = document.createElement('input');
    replacement.type = 'text'; replacement.value = saved.replacement;
    replacement.placeholder = labels[7]; replacement.setAttribute('aria-label', labels[7]);
    replacement.autocomplete = 'off'; replacement.spellcheck = false;
    const count = document.createElement('span');
    count.className = 'mag-code-search-count'; count.setAttribute('role','status');
    count.textContent = saved.count;
    let hits = [], current = -1, lastText = null, lastQuery = null, lastViewDoc = null, debounce = null;
    const status = value => { if(count.textContent !== value) count.textContent = value; saved.count = value; };
    function collect(view) {
      lastViewDoc = view.state.doc;
      const value = view.state.doc.toString(), query = input.value;
      const queryChanged = query !== saved.query;
      if (value !== lastText || query !== lastQuery) {
        lastText = value; lastQuery = query; hits = []; current = -1;
        if (query) {
          const pattern = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
          let match;
          while ((match = pattern.exec(value))) hits.push({from:match.index,to:match.index+match[0].length});
        }
        const anchor = queryChanged ? 0 : (saved.from ?? view.state.selection?.main?.from ?? 0);
        if (hits.length) {
          current = hits.findIndex(hit => hit.from >= anchor);
          if (current < 0) current = 0;
        }
      }
      saved.query = query;
      replaceOne.disabled = replaceAll.disabled = !hits.length || Boolean(view.state.readOnly);
      if (!hits.length) { saved.from = null; status(query ? labels[5] : '0 / 0'); }
      return queryChanged;
    }
    function search(direction = 0) {
      try {
        const view = requireView(block), hadPosition = saved.from !== null;
        const queryChanged = collect(view);
        if (!hits.length) return;
        if (direction && hadPosition && !queryChanged) current = (current + direction + hits.length) % hits.length;
        else if (direction < 0 && !hadPosition) current = hits.length - 1;
        const hit = hits[current]; saved.from = hit.from;
        view.dispatch({selection:{anchor:hit.from,head:hit.to},scrollIntoView:true});
        status(`${current+1} / ${hits.length}`);
      } catch(error) {status(labels[6]);console.warn('[Folio code tools]',error);}
    }
    function refresh() {
      if (panel.hidden) return;
      try {
        const view = requireView(block);
        if (view.state.doc === lastViewDoc && input.value === lastQuery) return;
        collect(view);
        if (hits.length) {saved.from = hits[current].from;status(`${current+1} / ${hits.length}`);}
      } catch (_) {}
    }
    function replace(all) {
      cancel(debounce);
      try {
        const view = requireView(block);
        collect(view);
        if (view.state.readOnly) {status(labels[10]);return;}
        if (!hits.length) return;
        const selected = all ? hits : [hits[current]];
        const end = selected[0].from + replacement.value.length;
        // One native transaction: literal replacement, with the editor's undo history.
        view.dispatch({changes:selected.map(hit=>({...hit,insert:replacement.value})),selection:{anchor:end},scrollIntoView:true});
        saved.replacement = replacement.value;
        saved.from = all ? 0 : end;
        search();
      } catch(error) {status(labels[6]);console.warn('[Folio code tools]',error);}
    }
    function close() {
      cancel(debounce); saved.open = false; panel.hidden = true;
      searchButton.setAttribute('aria-expanded','false');
      searchButton.focus({preventScroll:true});
    }
    const replaceOne = button('next', labels[8], ()=>replace(false));
    const replaceAll = button('next', labels[9], ()=>replace(true));
    for (const [control,label,kind] of [[replaceOne,labels[8],'one'],[replaceAll,labels[9],'all']]) {
      control.textContent = label; control.dataset.replace = kind; control.disabled = true;
    }
    panel.append(input,count,button('prev','上一个 · Shift + Enter',()=>search(-1)),button('next','下一个 · Enter',()=>search(1)),button('close','关闭搜索 · Esc',close),replacement,replaceOne,replaceAll);
    block.prepend(panel);
    panel.addEventListener('click',event=>event.stopPropagation());
    panel.addEventListener('keydown',event=>event.stopPropagation());
    input.addEventListener('input',()=>{cancel(debounce);debounce=later(()=>search(),150);});
    replacement.addEventListener('input',()=>{saved.replacement=replacement.value;});
    for (const field of [input,replacement]) field.addEventListener('keydown',event=>{
      if(event.key==='Enter') {event.preventDefault();cancel(debounce);if(field===input)search(event.shiftKey?-1:1);else replace(false);}
      else if(event.key==='Escape') {event.preventDefault();close();}
    });
    return {panel,refresh,toggle(){
      if(!panel.hidden){close();return;}
      saved.open=true;panel.hidden=false;searchButton.setAttribute('aria-expanded','true');
      input.focus({preventScroll:true});input.select();search();
    },dispose(){cancel(debounce);panel.remove();}};
  }

  function remove(entry) {
    entry.search.dispose();
    entry.group.remove();
  }

  function install(block) {
    if (!block.isConnected) return;

    const bar = block.querySelector(".rm-code-block__settings-bar");
    if (!bar || !block.querySelector(".cm-editor")) return;

    const previous = installed.get(block);

    if (
      previous?.group.parentElement === bar &&
      previous.search.panel.isConnected
    ) return;

    if (previous?.search.panel.isConnected) {
      bar.insertBefore(previous.group, bar.firstChild);
      return;
    }
    if (previous) {
      remove(previous);
      installed.delete(block);
    }

    const group = document.createElement("span");
    group.className = "mag-code-tools";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", labels[11]);

    const searchButton = button(
      "search", "搜索当前代码块", () => search.toggle()
    );
    searchButton.setAttribute("aria-expanded", "false");

    const search = createSearch(block, searchButton);

    group.append(
      button("top", "滚动到代码块顶部", () => scroll(block, false)),
      button("bottom", "滚动到代码块底部", () => scroll(block, true)),
      searchButton,
      button("copy", "复制全部代码", async el => {
        try {
          const view = requireView(block);
          await copyText(view.state.doc.toString());
          feedback(el, true, "已复制全部代码");
        } catch (error) {
          feedback(el, false, error.message);
          console.warn("[Magazine code tools]", error);
        }
      })
    );

    const chooser = bar.querySelector(".rm-code-block__language-chooser");
    bar.insertBefore(
      group,
      chooser?.parentElement === bar ? chooser : bar.firstChild
    );

    installed.set(block, { group, search });
  }

  function queue(block) {
    if (!block || stopped) return;

    const entry = installed.get(block);
    if (
      entry?.group.parentElement === block.querySelector(".rm-code-block__settings-bar") &&
      entry.group.isConnected && entry.search.panel.isConnected
    ) {entry.search.refresh();return;}

    pending.add(block);
    if (frame) return;

    frame = requestAnimationFrame(() => {
      frame = 0;
      pending.forEach(install);
      pending.clear();
    });
  }

  const observer = new MutationObserver(records => {
    for (const [block, entry] of installed) {
      if (!block.isConnected) {
        remove(entry);
        installed.delete(block);
      }
    }

    for (const record of records) {
      if (record.target instanceof Element) {
        queue(record.target.closest(".rm-code-block"));
      }

      for (const node of record.addedNodes) {
        if (!(node instanceof Element)) continue;

        queue(node.closest(".rm-code-block"));
        node.querySelectorAll(".rm-code-block").forEach(queue);
      }
    }
  });

  document.querySelectorAll(".rm-code-block").forEach(queue);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  window[KEY] = {
    stop() {
      stopped = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      timers.clear();
      pending.clear();
      installed.forEach(remove);
      installed.clear();
      searchStates.clear();
      style.remove();
    }
  };
})();
