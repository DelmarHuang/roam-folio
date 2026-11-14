**Languages / 语言：简体中文 · English · Français · Deutsch · Español · Italiano**

[简体中文](../README.md) | [English](README.en.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Italiano](README.it.md)

# Folio · 1.4.21

Gli strumenti compaiono automaticamente nelle note appena aperte. La ricerca conserva testo e posizione per blocco. Sostituisci il risultato corrente o tutti quelli del blocco di codice con transazioni native dell’editor e supporto per annullare. La ricerca è letterale e non distingue maiuscole e minuscole.

Trascina il pannello dalla barra del titolo e continua a usare la pagina per osservare i cambiamenti mentre attivi o disattivi le opzioni.

Il pulsante con cursori nella barra superiore apre tutte le impostazioni Folio. La prima impostazione in entrambe le viste ne controlla la visibilità. La chat IA nativa resta nella barra laterale destra e si apre dalla barra superiore; l’icona di ricerca del Desk nativo è distanziata dal bordo.

Folio porta in Roam un’impaginazione calda ispirata alle riviste, con strumenti per tag, note a margine, calendario, lettura e attività. Attiva ogni componente separatamente per appunti più chiari e una lettura più concentrata.

**Altri plugin indipendenti**

- **Reading Desk** — Riunisci letture, annotazioni e idee, trasformando ciò che leggi in conoscenze che restano.
- **Version Studio** — Confronta le versioni delle note, segui l’evoluzione dei tuoi pensieri e riscrivi con fiducia.

Questi plugin si scaricano e installano separatamente; non sono inclusi in Folio.

## Installazione

1. Disattiva i precedenti `roam/css` del tema e i relativi `roam/js` per evitare duplicazioni.
2. Estrai lo ZIP.
3. Apri Settings → Roam Depot → Developer Mode → Load unpacked extension.
4. Seleziona la cartella che contiene direttamente `extension.js`.
5. Scegli lingua e opzioni in Extension Settings → Folio. Auto segue la lingua del browser.

## Tema e componenti

Un interruttore controlla il tema; i componenti attivi mantengono i colori nativi quando è spento. I 29 componenti sono divisi in sette gruppi funzionali con navigazione a sinistra. Ognuno mantiene il proprio interruttore e livello stimato di risorse. Aspetto, nomi dei tag, altezza del codice e scorciatoie restano nelle rispettive sezioni. I livelli non misurano la CPU in tempo reale.

- Interfaccia e navigazione: Mantieni visibili i controlli delle barre laterali, Nascondi icone superiori, Nascondi elementi della barra sinistra, Compatibilità menu Workbench, Mostra la barra solo durante lo scorrimento, Pulsante grafo pagina, Schede della barra destra.
- Tag e contenuti: Etichette e timbri speciali, Selettore OR, Scheda proprietà, Peso visivo per riferimenti.
- Scrittura e codice: Modalità macchina da scrivere e obiettivo, Note a margine, Limita l’altezza del codice, Strumenti dei blocchi di codice.
- Diario e calendario: Testata della nota giornaliera, Azioni rapide calendario, Navigazione calendario da tastiera, Modelli giornalieri automatici, Mappa di calore e anteprima calendario, Riporta i TODO di ieri, Acquisizione rapida calendario.
- Lettura e media: Immagini e didascalie, Finestra PDF, Lettore video.
- Analisi delle pagine: Statistiche pagina, Impulso pagina.
- Attività e revisione: Scrivania editoriale, 3 attività casuali.

Le nuove installazioni attivano tema e componenti. Disattivare un componente ne libera le risorse. La disattivazione temporanea di Folio consente il confronto con Roam nativo.

## Random TODO 3 · Esclusioni

In Attività e revisione, le pagine escluse iniziali sono `SmartBlock` e `roam/templates`. Inserisci un titolo esatto per riga; puoi modificare o aggiungere voci. Il filtro usa la pagina che contiene l’attività, inclusi i blocchi figli annidati. Un semplice riferimento a quella pagina non esclude l’attività.

L’esclusione dei TODO con date future è attiva inizialmente. Disattivala per includere attività il cui testo colleghi esplicitamente una data futura di nota giornaliera. Le modifiche sono immediate e persistenti, anche con un elenco vuoto o l’opzione disattivata. Il ripristino reimposta le due pagine e attiva l’opzione. Le attività originali non vengono modificate.

## Caratteri, motto ed etichette

Inserisci il valore CSS `font-family` di un carattere installato, non un file o un URL; il campo vuoto ripristina i valori predefiniti. Il motto ammette due righe con un limite di 24 unità ciascuna: carattere latino = 1; carattere cinese, a larghezza piena o emoji = 2. Lo spazio disponibile può ridurre ulteriormente il limite.

I nomi delle etichette sono configurabili; cambiare lingua non rinomina le pagine Roam. Tipi di nota e Reading List usano gli stessi **12px** per `[[collegamenti a pagina]]` e `#tag`, come i timbri Q1, senza ingrandirsi con il testo. Persone e settori seguono invece la dimensione del testo. Libri, persone, settori, motive e rediscover mantengono i clic nativi.

## Comportamento

- Open nella barra video apre il blocco video nella barra destra. Timestamp, Theater e Notes mantengono i gestori esistenti. Il codice fornito include anche modifica ed eliminazione delle note con timestamp in modalità cinema.
- Aggiungi `#.aside` o `#.aside-left` a un blocco figlio, oppure usa il menu contestuale del pallino. Se manca spazio, la nota resta nel testo. La proiezione dei commenti è disattivata.
- Il PDF a schermo intero offre un collegamento di uscita ed Esc. L’altezza del codice predefinita è 420px; 0 elimina il limite. L’interruttore è indipendente.
- Query/Data Table conserva il ridimensionamento nativo delle colonne. Roam gestisce gli spazi nei menu dei blocchi e negli elenchi dei comandi.
- L’articolo usa un solo livello di centratura e un separatore di blocco di 8px; i contatori dei riferimenti restano visibili. La barra sinistra nativa misura 232px; Folio non aggiunge il ridimensionamento di questa barra.
- Scorciatoie predefinite: G per scegliere una data, T per oggi, D per le note giornaliere, frecce sinistra/destra per i giorni vicini. Sono personalizzabili e inattive durante la digitazione.
- Random TODO 3 esclude per impostazione predefinita date giornaliere future esplicite (opzionale) ed evita collegamenti di origine duplicati. Invecchiamento della carta, mark it e relative impostazioni sono stati rimossi.

L’icona del calendario e Alt-clic su un riferimento di data usano la stessa disposizione avanzata. La selezione della data mantiene il comportamento nativo di Roam. Le anteprime scompaiono appena il puntatore lascia la data, alla chiusura del calendario o quando la finestra perde il focus.

## Sviluppo e verifica

Esegui `npm run build` e `npm run check`. Le verifiche facoltative `npm run check:layout` e `npm run check:interaction` richiedono Playwright/Chromium; usa `FOLIO_TEST_CHROMIUM` per l’eseguibile e `FOLIO_DOM_FIXTURE` per un DOM esportato. Il file distribuibile è `extension.js`; i sorgenti sono in `src/` e `source/`.

Vedi [TEST-REPORT.md](../TEST-REPORT.md) e [CHANGELOG.md](../CHANGELOG.md). Test locali e sostituti dell’API non equivalgono a una verifica completa nel grafo autenticato.

## Ringraziamenti e licenza

Grazie a **ESTHER不二 / esthersjw** e a [esther-design-system](https://github.com/esthersjw/esther-design-system), base del design visivo e del tema adattato di Folio. L’originale e il tema adattato seguono **CC BY-NC-SA 4.0**; vedi [LICENSE.md](../LICENSE.md).

Grazie a **Date Picker Enhance**, citato esplicitamente dal codice originale del calendario, e a Roam Research e agli sviluppatori della comunità per funzionalità native, interfacce e idee d’interazione. Non vengono attribuiti per supposizione autori o indirizzi di progetto non verificati.
