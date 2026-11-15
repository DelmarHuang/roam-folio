/* User-selected templates. No bundled graph UIDs or content signatures. */
const TEMPLATE_COPY = {
  en: {weekday:'Weekday SmartBlock',weekend:'Weekend SmartBlock',plan:'Today’s plan template',help:'Paste a block UID or ((block reference)); leave empty to disable this template. Weekday/weekend templates require SmartBlocks. The plan button copies the selected block’s children.',automatic:'Automatic templates run when this component starts, if today’s page exists. Each configured template runs at most once per day. Configure templates before enabling automatic daily templates.',missing:'Choose a template in Folio → Daily notes and calendar first.',invalid:'The template block was not found. Check its UID.',empty:'This template has no child blocks to copy.',dependency:'SmartBlocks is not ready. Enable it and restart Automatic daily templates.',already:'This template has already been applied to this date.',incomplete:'An earlier attempt may have written content. Review this daily note before copying manually.',noOutput:'The template produced no blocks; nothing was marked as completed.',copied:'Template copied ({n} blocks).',failed:'Template failed; check the daily note for partial content.'},
  zh: {weekday:'工作日 SmartBlock',weekend:'周末 SmartBlock',plan:'今日计划模板',help:'填写块 UID 或 ((块引用))；留空停用该模板。工作日／周末模板需要 SmartBlocks；计划按钮复制所选块的子块。',automatic:'自动模板在组件启动且今日日记已存在时运行，每个已配置模板每天最多执行一次。请先配置模板，再开启自动日记模板。',missing:'请先在 Folio → 日记与日历中设置模板。',invalid:'找不到模板块，请检查 UID。',empty:'模板没有可复制的子块。',dependency:'SmartBlocks 尚未就绪，请启用后重新开关自动日记模板。',already:'该模板已用于这个日期。',incomplete:'上次执行可能已写入部分内容，请检查该日记后手动补充。',noOutput:'模板未生成任何块，没有标记为完成。',copied:'已复制模板（{n} 个块）。',failed:'模板执行失败，请检查日记中是否有部分写入的内容。'},
  fr: {weekday:'SmartBlock de semaine',weekend:'SmartBlock du week-end',plan:'Modèle du plan du jour',help:'Collez un UID de bloc ou ((une référence)) ; laissez vide pour désactiver ce modèle. Les modèles de semaine/week-end nécessitent SmartBlocks. Le bouton du plan copie les enfants du bloc choisi.',automatic:'Les modèles automatiques s’exécutent au démarrage du composant si la page du jour existe, au plus une fois par jour et par modèle configuré. Configurez-les avant d’activer les modèles quotidiens automatiques.',missing:'Choisissez d’abord un modèle dans Folio → Journal et calendrier.',invalid:'Bloc modèle introuvable. Vérifiez son UID.',empty:'Ce modèle n’a aucun bloc enfant à copier.',dependency:'SmartBlocks n’est pas prêt. Activez-le puis redémarrez les modèles quotidiens automatiques.',already:'Ce modèle a déjà été appliqué à cette date.',incomplete:'Une tentative précédente a pu écrire du contenu. Vérifiez le journal avant de compléter manuellement.',noOutput:'Le modèle n’a créé aucun bloc ; aucune exécution n’a été marquée comme terminée.',copied:'Modèle copié ({n} blocs).',failed:'Échec du modèle ; vérifiez si le journal contient des éléments partiels.'},
  de: {weekday:'SmartBlock für Werktage',weekend:'SmartBlock fürs Wochenende',plan:'Vorlage für den Tagesplan',help:'Block-UID oder ((Blockreferenz)) einfügen; leer deaktiviert diese Vorlage. Werktags-/Wochenendvorlagen benötigen SmartBlocks. Die Plan-Schaltfläche kopiert die Unterblöcke.',automatic:'Automatische Vorlagen laufen beim Komponentenstart, wenn die heutige Seite existiert; jede konfigurierte Vorlage höchstens einmal täglich. Vorlagen vor dem Einschalten konfigurieren.',missing:'Zuerst eine Vorlage unter Folio → Tagesnotizen und Kalender wählen.',invalid:'Vorlagenblock nicht gefunden. UID prüfen.',empty:'Diese Vorlage enthält keine Unterblöcke zum Kopieren.',dependency:'SmartBlocks ist nicht bereit. Aktivieren und automatische Tagesvorlagen neu starten.',already:'Diese Vorlage wurde für dieses Datum bereits angewendet.',incomplete:'Ein früherer Versuch hat möglicherweise Inhalte geschrieben. Tagesnotiz vor manueller Ergänzung prüfen.',noOutput:'Die Vorlage hat keine Blöcke erzeugt; nichts wurde als abgeschlossen markiert.',copied:'Vorlage kopiert ({n} Blöcke).',failed:'Vorlage fehlgeschlagen; Tagesnotiz auf teilweise geschriebene Inhalte prüfen.'},
  es: {weekday:'SmartBlock entre semana',weekend:'SmartBlock de fin de semana',plan:'Plantilla del plan de hoy',help:'Pegue un UID de bloque o ((una referencia)); vacío desactiva esa plantilla. Las plantillas diarias requieren SmartBlocks. El botón del plan copia los bloques hijos del bloque elegido.',automatic:'Las plantillas automáticas se ejecutan al iniciar el componente si existe la página de hoy, como máximo una vez al día por plantilla configurada. Configúrelas antes de activar las plantillas diarias automáticas.',missing:'Primero elija una plantilla en Folio → Diario y calendario.',invalid:'No se encontró el bloque de plantilla. Revise el UID.',empty:'La plantilla no tiene bloques hijos para copiar.',dependency:'SmartBlocks no está listo. Actívelo y reinicie las plantillas diarias automáticas.',already:'Esta plantilla ya se ha aplicado a esta fecha.',incomplete:'Un intento anterior puede haber escrito contenido. Revise la nota diaria antes de completarla manualmente.',noOutput:'La plantilla no generó bloques; no se marcó como completada.',copied:'Plantilla copiada ({n} bloques).',failed:'La plantilla falló; revise si hay contenido parcial en la nota diaria.'},
  it: {weekday:'SmartBlock feriale',weekend:'SmartBlock del weekend',plan:'Modello del piano di oggi',help:'Incolla un UID di blocco o ((un riferimento)); lascia vuoto per disattivare quel modello. I modelli feriali/festivi richiedono SmartBlocks. Il pulsante del piano copia i blocchi figli del blocco scelto.',automatic:'I modelli automatici vengono eseguiti all’avvio del componente se esiste la pagina odierna, al massimo una volta al giorno per modello configurato. Configurali prima di attivare i modelli giornalieri automatici.',missing:'Scegli prima un modello in Folio → Diario e calendario.',invalid:'Blocco modello non trovato. Controlla l’UID.',empty:'Il modello non contiene blocchi figli da copiare.',dependency:'SmartBlocks non è pronto. Attivalo e riavvia i modelli giornalieri automatici.',already:'Questo modello è già stato applicato a questa data.',incomplete:'Un tentativo precedente potrebbe aver scritto dei contenuti. Controlla la nota prima di completarla manualmente.',noOutput:'Il modello non ha creato blocchi; nessuna esecuzione è stata segnata come completata.',copied:'Modello copiato ({n} blocchi).',failed:'Modello non riuscito; verifica eventuali contenuti parziali nella nota giornaliera.'}
};
function templateText(key, values = {}) {
  let text = (TEMPLATE_COPY[window.__magLocale] || TEMPLATE_COPY.en)[key] || TEMPLATE_COPY.en[key];
  for (const [name, value] of Object.entries(values)) text = text.replaceAll('{'+name+'}', String(value));
  return text;
}
function templateUid(value) {
  return String(value || '').trim().replace(/^\(\(([^()]+)\)\)$/, '$1').trim();
}
function templateError(code) { const error = new Error(templateText(code)); error.templateCode = code; return error; }
function createTemplateService(runtime) {
  const settings = runtime.extensionAPI.settings;
  const inFlight = new Set();
  let saveQueue = Promise.resolve();
  const ledgerKey = SETTING_PREFIX + 'template-runs';
  const readLedger = () => {
    const value = settings.get(ledgerKey);
    return value && typeof value === 'object' && !Array.isArray(value) ? {...value} : {};
  };
  const saveRecord = (key, record) => {
    const next = saveQueue.then(async () => {
      const ledger = readLedger();
      if (record) ledger[key] = record; else delete ledger[key];
      await settings.set(ledgerKey, ledger);
    });
    saveQueue = next.catch(() => {});
    return next;
  };
  const sourceFor = kind => {
    const uid = templateUid(runtime.templates[kind]);
    if (!uid) throw templateError('missing');
    if (!/^[\w-]+$/.test(uid) || !window.roamAlphaAPI?.q(
      '[:find ?block . :in $ ?uid :where [?block :block/uid ?uid] [?block :block/string]]', uid)) throw templateError('invalid');
    return uid;
  };
  const childrenOf = uid => (window.roamAlphaAPI.q(
    '[:find ?childUid ?text ?order :in $ ?uid :where [?parent :block/uid ?uid] [?parent :block/children ?child] [?child :block/uid ?childUid] [?child :block/string ?text] [?child :block/order ?order]]', uid
  ) || []).sort((a,b) => a[2]-b[2]);
  const once = async (kind, date, srcUid, action) => {
    const pageUid = window.roamAlphaAPI.util.dateToPageUid(date);
    const graph = window.location.hash.match(/#\/app\/([^/]+)/)?.[1] || '';
    const key = JSON.stringify([graph, kind, pageUid, srcUid]);
    const previous = readLedger()[key];
    if (inFlight.has(key) || previous?.state === 'running' || previous?.state === 'failed') throw templateError('incomplete');
    if (previous?.state === 'done') return {status:'already',count:previous.count};
    inFlight.add(key);
    let started = false;
    try {
      // Record intent before any graph write; a reload cannot repeat a partial run.
      await saveRecord(key,{state:'running'});
      started = true;
      const count = await action(pageUid);
      await saveRecord(key,count ? {state:'done',count} : null);
      return {status:count ? 'copied' : 'noOutput',count};
    } catch (error) {
      if (started) await saveRecord(key,{state:'failed'}).catch(() => {});
      throw error.templateCode ? error : templateError('failed');
    } finally { inFlight.delete(key); }
  };
  return {
    async automatic(date = new Date(), isActive = () => true) {
      const kind = [0,6].includes(date.getDay()) ? 'weekend' : 'weekday';
      if (!templateUid(runtime.templates[kind]) || !isActive()) return {status:'disabled'};
      const api = window.roamAlphaAPI;
      const trigger = window.roamjs?.extension?.smartblocks?.triggerSmartblock;
      if (!api?.q || !api?.util?.dateToPageUid || !api?.util?.dateToPageTitle || !trigger) throw templateError('dependency');
      const srcUid = sourceFor(kind);
      const pageUid = api.util.dateToPageUid(date);
      if (!api.q('[:find ?page . :in $ ?uid :where [?page :block/uid ?uid]]',pageUid)) return {status:'missingPage'};
      const blockUids = () => new Set((api.q('[:find ?uid :in $ ?pageUid :where [?page :block/uid ?pageUid] [?block :block/page ?page] [?block :block/uid ?uid]]',pageUid) || []).map(row=>row[0]));
      const before = blockUids();
      return once('automatic',date,srcUid,async () => {
        if (!isActive()) return 0;
        await trigger({srcUid,targetName:api.util.dateToPageTitle(date)});
        return [...blockUids()].filter(uid=>!before.has(uid)).length;
      });
    },
    async plan(date) {
      const srcUid = sourceFor('plan');
      const visited = new Set();
      const snapshot = uid => {
        if (visited.has(uid)) throw templateError('invalid');
        visited.add(uid);
        return childrenOf(uid).map(([childUid,string])=>({string,children:snapshot(childUid)}));
      };
      // Read the complete tree before writing, including when the source is on the target page.
      const tree = snapshot(srcUid);
      if (!tree.length) throw templateError('empty');
      return once('plan',date,srcUid,async pageUid => {
        const api = window.roamAlphaAPI;
        if (!api.q('[:find ?page . :in $ ?uid :where [?page :block/uid ?uid]]',pageUid)) await api.createPage({page:{uid:pageUid,title:api.util.dateToPageTitle(date)}});
        let count = 0;
        const copy = async (nodes,parentUid) => {
          for (const node of nodes) {
            const uid = api.util.generateUID();
            await api.createBlock({location:{'parent-uid':parentUid,order:999999},block:{uid,string:node.string}});
            count++;
            await copy(node.children,uid);
          }
        };
        await copy(tree,pageUid);
        return count;
      });
    }
  };
}
function templateSettings(runtime, React) {
  const e = React.createElement, copy = TEMPLATE_COPY[runtime.locale] || TEMPLATE_COPY.en;
  return e('div',{'data-folio-template-settings':'',style:{padding:'10px 2px'}},
    e('p',{style:{fontSize:'11px',opacity:.7}},copy.help),
    ...['weekday','weekend','plan'].map(kind=>e('label',{key:kind,style:{display:'block',margin:'10px 0',fontSize:'13px'}},copy[kind],
      e('input',{type:'text',defaultValue:runtime.templates[kind],spellCheck:false,'data-folio-template':kind,
        style:{display:'block',boxSizing:'border-box',width:'100%',font:'inherit',marginTop:'5px',padding:'6px'},
        onChange:event=>{runtime.templates[kind]=event.target.value;void runtime.extensionAPI.settings.set(SETTING_PREFIX+'template-'+kind,event.target.value);}}))),
    e('p',{style:{fontSize:'11px',opacity:.7}},copy.automatic));
}
