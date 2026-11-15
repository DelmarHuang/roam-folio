# Folio · 1.4.25

[简体中文 · English · Français · Deutsch · Español · Italiano](../README.md#languages)

<a id="it"></a>


## Italiano

[Presentazione](#it-overview) · [Barra destra](#it-sidebar) · [Note marginali](#it-asides) · [Note video](#it-video) · [Finestra impostazioni](#it-settings) · [Installazione](#it-install) · [Aspetto e caratteri](#it-appearance) · [Interfaccia e navigazione](#it-navigation) · [Tag e contenuti](#it-content) · [Scrittura e codice](#it-writing) · [Diario e calendario](#it-calendar) · [Lettura e media](#it-media) · [Analisi delle pagine](#it-insights) · [Attività e revisione](#it-review) · [Sviluppo](#it-development) · [Ringraziamenti](#it-credits)

<a id="it-overview"></a>

### Presentazione

**Pagine in stile rivista per Roam, con strumenti quotidiani utilizzabili anche separatamente.**

Colori caldi della carta, titoli chiari e margini comodi invitano a leggere e scrivere a lungo. Folio armonizza anche diario, barre laterali, tag, proprietà e alcune estensioni della comunità, oltre all’IA nativa di Roam e a The Desk.

**Altri plugin indipendenti**

- **Reading Desk** — Riunisci letture, annotazioni e idee, trasformando ciò che leggi in conoscenze che restano.
- **Version Studio** — Confronta le versioni delle note, segui l’evoluzione dei tuoi pensieri e riscrivi con fiducia.

Questi plugin si scaricano e installano separatamente; non sono inclusi in Folio.

Un interruttore controlla il tema; i componenti attivi mantengono i colori nativi quando è spento. I 29 componenti sono divisi in sette gruppi funzionali con navigazione a sinistra. Ognuno mantiene il proprio interruttore e livello stimato di risorse. Aspetto, nomi dei tag, altezza del codice e scorciatoie restano nelle rispettive sezioni. I livelli non misurano la CPU in tempo reale.

Le nuove installazioni attivano tema e componenti. Disattivare un componente ne libera le risorse. La disattivazione temporanea di Folio consente il confronto con Roam nativo.

<a id="it-sidebar"></a>

### Trasforma la barra destra in uno spazio di lavoro

Le note della barra destra diventano schede da scorrere orizzontalmente, mantenendo visibile la pagina principale. Ogni scheda conserva lo scorrimento e i controlli nativi per aprire, comprimere e chiudere i contenuti.

L’accesso all’IA nativa si trova nella barra superiore principale; la chat rimane in una scheda a destra con cronologia, conversazioni e creazione di nuove chat. Le normali schede delle note mantengono il loro comportamento.

<a id="it-asides"></a>

### Dai un posto alle idee complementari

Sposta i blocchi figli selezionati nel margine sinistro o destro, lasciando esempi e spiegazioni vicino al testo. Scegli **Aside: Left** o **Aside: Right** dal menu del pallino, oppure aggiungi `#.aside-left` o `#.aside`. Gli altri figli conservano la struttura; se manca spazio, le note tornano nel testo.

La posizione segue la larghezza nativa di Roam e lo spazio disponibile. Le annotazioni di Reading Desk sono indipendenti: usa un solo metodo per blocco padre per evitare sovrapposizioni.

<a id="it-video"></a>

### Guarda un video e tieni vicini i tuoi pensieri

La modalità Theater riunisce video e commenti temporali nativi nella pagina principale. **Timestamp** usa la creazione di commenti nativa di Roam. Folio mostra questi commenti sotto il video e individua la nuova voce. Premi l’orario per tornare al passaggio; le modifiche vengono salvate nello stesso commento. **Open** apre il blocco originale nella barra destra.

Le finestre più basse e strette limitano l’altezza del video, lasciando spazio alle note. Quelle grandi conservano i margini laterali, con video e note allineati.

<a id="it-settings"></a>

### Finestra impostazioni

Il pulsante con i cursori nella barra superiore apre una finestra compatta delle impostazioni. Trascinala dal titolo continuando a usare la pagina. Qui e nella pagina completa puoi nascondere o ripristinare il pulsante, visibile per impostazione predefinita. I 29 componenti sono suddivisi in sette gruppi, più l’aspetto; tema e strumenti si attivano separatamente. I livelli di risorse sono stime.

<a id="it-install"></a>

### Installazione

1. Disattiva i precedenti `roam/css` del tema e i relativi `roam/js` per evitare duplicazioni.
2. Estrai lo ZIP.
3. Apri Settings → Roam Depot → Developer Mode → Load unpacked extension.
4. Seleziona la cartella che contiene direttamente `extension.js`.
5. Scegli lingua e opzioni in Extension Settings → Folio. Auto segue la lingua del browser.

<a id="it-appearance"></a>

### Aspetto e caratteri

Inserisci il `font-family` CSS di un carattere installato, non un file o un URL; vuoto ripristina i valori predefiniti. Testo e titoli/note marginali hanno impostazioni separate. Il motto ammette due righe di 24 unità: carattere latino = 1; carattere cinese, a larghezza piena o emoji = 2.

<a id="it-navigation"></a>

### Interfaccia e navigazione

| Componente | Consumo di risorse |
| --- | --- |
| Mantieni visibili i controlli delle barre laterali | Molto basso |
| Nascondi icone superiori | Molto basso |
| Nascondi elementi della barra sinistra | Molto basso |
| Compatibilità menu Workbench | Molto basso |
| Mostra la barra solo durante lo scorrimento | Molto basso |
| Pulsante grafo pagina | Basso |
| Schede della barra destra | Basso |

Restano invariati gli spazi dei menu nativi di Roam, il ridimensionamento delle colonne Query/Data Table e le interazioni dei collegamenti.

La funzione nativa «Adjust width of the main page» di Roam controlla la larghezza del testo. Folio non aggiunge livelli né impone una larghezza fissa. Colonne Query/Data Table e collegamenti restano nativi.

<a id="it-content"></a>

### Tag e contenuti

| Componente | Consumo di risorse |
| --- | --- |
| Etichette e timbri speciali | Molto basso |
| Selettore OR | Molto basso |
| Scheda proprietà | Basso |
| Peso visivo per riferimenti | Moderato |

I nomi delle etichette sono configurabili; cambiare lingua non rinomina le pagine Roam. Tipi di nota e Reading List usano gli stessi **12px** per `[[collegamenti a pagina]]` e `#tag`, come i timbri Q1, senza ingrandirsi con il testo. Persone e settori seguono invece la dimensione del testo. Libri, persone, settori, motive e rediscover mantengono i clic nativi.

Le schede delle proprietà raccolgono le informazioni della pagina. Il peso visivo adatta dimensioni ed enfasi al numero di riferimenti del blocco, mantenendo contatori e navigazione nativi.

<a id="it-writing"></a>

### Scrittura e codice

| Componente | Consumo di risorse |
| --- | --- |
| Modalità macchina da scrivere e obiettivo | Molto basso |
| Note a margine | Basso |
| Limita l’altezza del codice | Molto basso |
| Strumenti dei blocchi di codice | Più alto |

La modalità macchina da scrivere mantiene visibile la posizione corrente e offre un obiettivo di scrittura. Le note marginali si posizionano per blocco figlio come descritto sopra.

Il limite di altezza del codice è **420px** per impostazione predefinita; `0` lo elimina. Il codice lungo scorre nel blocco e il contenitore si restringe con lo spazio disponibile. Gli strumenti compaiono nelle note appena espanse: inizio/fine, copia, ricerca, sostituzione corrente o di tutte le corrispondenze nel blocco. La ricerca è letterale e non distingue maiuscole; conserva testo e posizione quando viene chiusa e riaperta. Le sostituzioni usano transazioni native dell’editor e supportano l’annullamento.

<a id="it-calendar"></a>

### Diario e calendario

| Componente | Consumo di risorse |
| --- | --- |
| Testata della nota giornaliera | Molto basso |
| Azioni rapide calendario | Molto basso |
| Navigazione calendario da tastiera | Molto basso |
| Modelli giornalieri automatici | Molto basso |
| Mappa di calore e anteprima calendario | Moderato |
| Riporta i TODO di ieri | Moderato |
| Acquisizione rapida calendario | Più alto |

Scorciatoie predefinite: G per scegliere una data, T per oggi, D per le note giornaliere, frecce sinistra/destra per i giorni vicini. Sono personalizzabili e inattive durante la digitazione.

L’icona del calendario e Alt-clic su un riferimento di data usano la stessa disposizione avanzata. La selezione della data mantiene il comportamento nativo di Roam. Le anteprime scompaiono appena il puntatore lascia la data, alla chiusura del calendario o quando la finestra perde il focus.

La testata del diario nasconde la linea nativa duplicata sopra il giorno; disattivandola la linea torna, anche nelle date caricate scorrendo. La cattura rapida aggiunge note, TODO o un piano alla data scelta.

**Modelli**: inserisci un UID di blocco o `((un riferimento))` per SmartBlock feriale, del weekend e piano di oggi. I tre campi sono vuoti per impostazione predefinita. I modelli automatici richiedono SmartBlocks; configurali prima di attivarli. Partono all’avvio del componente se esiste la pagina odierna, al massimo una volta al giorno per modello configurato.

Il piano copia i blocchi figli e la loro gerarchia, senza eseguire comandi SmartBlocks. Ogni modello viene copiato al massimo una volta per data, anche dopo il ricaricamento. Modelli mancanti o vuoti non segnalano un successo. Dopo un’interruzione, controlla i contenuti parziali prima di completare manualmente.

<a id="it-media"></a>

### Lettura e media

| Componente | Consumo di risorse |
| --- | --- |
| Immagini e didascalie | Basso |
| Finestra PDF | Basso |
| Lettore video | Più alto |

**Open** apre il blocco video a destra; **Theater** attiva la modalità cinema e **Notes** controlla la vista nativa dei timestamp. Roam gestisce la creazione tramite **Timestamp** e salva la nota come commento nativo. Folio non crea un blocco figlio separato sotto il video. Le modifiche in Theater aggiornano lo stesso commento. Il salvataggio avviene automaticamente dopo una breve pausa nella digitazione; uscire dal campo, Ctrl/Cmd＋Invio o **Salva** lo avvia subito. Le bozze vengono mantenute quando la lista si aggiorna e le scritture di ogni commento vengono eseguite in ordine. Il successo viene indicato solo dopo aver riletto il testo salvato nel grafo. In caso di errore, la bozza resta disponibile con l’azione **Riprova**. Eliminare richiede un secondo clic.

Immagini e didascalie condividono lo stile di lettura. La vista PDF estesa offre un collegamento per uscire e il tasto Esc.

<a id="it-insights"></a>

### Analisi delle pagine

| Componente | Consumo di risorse |
| --- | --- |
| Statistiche pagina | Moderato |
| Impulso pagina | Più alto |

La riga delle statistiche mostra parole, tempo di lettura stimato e altre informazioni. Il ritmo della pagina mostra le menzioni recenti. I due componenti si attivano separatamente.

<a id="it-review"></a>

### Attività e revisione

| Componente | Consumo di risorse |
| --- | --- |
| Scrivania editoriale | Più alto |
| 3 attività casuali | Più alto |

**Editorial Desk** amplia The Desk nativo di Roam con filtri per tipo, più schede fissate, scelta/rimozione dell’apertura e nove ordinamenti: manuale, modifica recente, modifica meno recente, scadenza, completamento, tipo, lunghezza, attività e maggiore permanenza su Desk. Comandi, suggerimenti e statistiche seguono le sei lingue di Folio; titoli e tipi personali restano invariati. È distinto dal plugin Reading Desk.

#### Random TODO 3 · Esclusioni

Random TODO 3 seleziona in modo ponderato tre TODO non ancora presenti nella nota giornaliera di oggi, per riscoprire attività incompiute.

In Attività e revisione, le pagine escluse iniziali sono `SmartBlock` e `roam/templates`. Inserisci un titolo esatto per riga; puoi modificare o aggiungere voci. Il filtro usa la pagina che contiene l’attività, inclusi i blocchi figli annidati. Un semplice riferimento a quella pagina non esclude l’attività.

L’esclusione dei TODO con date future è attiva inizialmente. Disattivala per includere attività il cui testo colleghi esplicitamente una data futura di nota giornaliera. Le modifiche sono immediate e persistenti, anche con un elenco vuoto o l’opzione disattivata. Il ripristino reimposta le due pagine e attiva l’opzione. Le attività originali non vengono modificate.

<a id="it-development"></a>

### Sviluppo e verifica

Esegui `npm run build` e `npm run check`. Le verifiche facoltative `npm run check:layout` e `npm run check:interaction` richiedono Playwright/Chromium; usa `FOLIO_TEST_CHROMIUM` per l’eseguibile e `FOLIO_DOM_FIXTURE` per un DOM esportato. Il file distribuibile è `extension.js`; i sorgenti sono in `src/` e `source/`.

Cronologia in [CHANGELOG.md](../CHANGELOG.md). Le verifiche locali del DOM e con sostituti API non certificano ogni interazione nei grafi reali o su tutti i dispositivi.

<a id="it-credits"></a>

### Ringraziamenti e licenza

Grazie a **ESTHER不二 / esthersjw** e a [esther-design-system](https://github.com/esthersjw/esther-design-system), base del design visivo e del tema adattato di Folio. L’originale e il tema adattato seguono **CC BY-NC-SA 4.0**; vedi [LICENSE.md](../LICENSE.md).

Grazie a **Date Picker Enhance**, citato esplicitamente dal codice originale del calendario, e a Roam Research e agli sviluppatori della comunità per funzionalità native, interfacce e idee d’interazione. Non vengono attribuiti per supposizione autori o indirizzi di progetto non verificati.

Grazie ad **Azlen Elza** e al [tema Zenith](https://github.com/azlen/roam-themes#zenith), le cui pagine affiancate e il design dedicato alla lettura hanno ispirato Folio.

[Torna alle lingue](../README.md#languages)
