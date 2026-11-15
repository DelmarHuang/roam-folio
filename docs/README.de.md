# Folio · 1.4.25

[简体中文 · English · Français · Deutsch · Español · Italiano](../README.md#languages)

<a id="de"></a>


## Deutsch

[Überblick](#de-overview) · [Rechte Seitenleiste](#de-sidebar) · [Randnotizen](#de-asides) · [Videonotizen](#de-video) · [Einstellungsfenster](#de-settings) · [Installation](#de-install) · [Darstellung und Schriften](#de-appearance) · [Oberfläche und Navigation](#de-navigation) · [Tags und Inhalt](#de-content) · [Schreiben und Code](#de-writing) · [Tagesnotizen und Kalender](#de-calendar) · [Lesen und Medien](#de-media) · [Seitenanalyse](#de-insights) · [Aufgaben und Rückblick](#de-review) · [Entwicklung](#de-development) · [Dank](#de-credits)

<a id="de-overview"></a>

### Überblick

**Magazinartige Seiten für Roam und Alltagswerkzeuge, die sich einzeln nutzen lassen.**

Warme Papierfarben, klare Überschriften und großzügige Ränder schaffen Raum zum Lesen und Schreiben. Folio stimmt auch Tagesnotizen, Seitenleisten, Tags, Eigenschaften und ausgewählte Community-Erweiterungen aufeinander ab, einschließlich Roams nativer KI und The Desk.

**Weitere eigenständige Plugins**

- **Reading Desk** — Bringen Sie Lektüre, Anmerkungen und Gedanken zusammen, damit Gelesenes zu bleibendem Wissen wird.
- **Version Studio** — Vergleichen Sie Notizversionen, verfolgen Sie Ihre Gedankenentwicklung und überarbeiten Sie mit Zuversicht.

Diese Plugins werden separat heruntergeladen und installiert; sie sind nicht in Folio enthalten.

Ein Schalter steuert das Design; aktive Komponenten verwenden bei ausgeschaltetem Design die nativen Roam-Farben. Die 29 Komponenten sind über die linke Navigation in sieben Funktionsgruppen erreichbar. Jede behält ihren eigenen Schalter und ihre geschätzte Ressourcenstufe. Darstellung, Tag-Namen, Codehöhe und Tastenkürzel stehen im jeweiligen Bereich. Die Stufen sind keine Echtzeit-CPU-Messungen.

Neue Installationen aktivieren Thema und Komponenten. Das Abschalten einer Komponente gibt ihre Laufzeitressourcen frei. Die vorübergehende Deaktivierung von Folio hilft beim Vergleich mit dem Original.

<a id="de-sidebar"></a>

### Die rechte Seitenleiste als Arbeitsfläche

Notizen der rechten Seitenleiste erscheinen als horizontal durchblätterbare Karten, während die Hauptseite sichtbar bleibt. Jede Karte behält ihren eigenen Scrollbereich und die nativen Steuerelemente zum Öffnen, Einklappen und Schließen.

Der Einstieg in die native KI liegt in der Hauptsymbolleiste; der Chat bleibt als rechte Karte mit Verlauf, Gesprächen und neuer Unterhaltung. Gewöhnliche Notizkarten funktionieren weiterhin wie gewohnt.

<a id="de-asides"></a>

### Ein eigener Platz für ergänzende Gedanken

Ausgewählte Unterblöcke können links oder rechts neben dem Text stehen. Im Kontextmenü des Aufzählungspunkts **Aside: Left** oder **Aside: Right** wählen oder `#.aside-left` bzw. `#.aside` hinzufügen. Andere Unterblöcke behalten ihre Gliederung; fehlt Platz am Rand, erscheinen Randnotizen im Text.

Die Platzierung folgt Roams nativer Seitenbreite und dem verfügbaren Raum. Reading Desks Anmerkungen sind unabhängig; pro Elternblock nur eine Randnotizmethode verwenden, damit sich nichts überlagert.

<a id="de-video"></a>

### Videos ansehen und Gedanken daneben festhalten

Theater zeigt Video und native Zeitstempelkommentare gemeinsam auf der Hauptseite. **Timestamp** nutzt Roams native Kommentarfunktion. Folio zeigt diese Kommentare unter dem Video und findet den neuen Eintrag. Ein Klick auf die Zeit springt zur Stelle; Änderungen werden im selben Kommentar gespeichert. **Open** öffnet den Originalblock rechts.

Bei niedrigeren, schmaleren Fenstern wird die Videohöhe begrenzt, damit Platz für Notizen bleibt. Große Fenster behalten Seitenränder; Video und Notizen sind ausgerichtet.

<a id="de-settings"></a>

### Einstellungsfenster

Die Schieberegler-Schaltfläche oben öffnet ein kompaktes Einstellungsfenster. Es lässt sich am Titel verschieben; die Seite bleibt bedienbar. Sowohl dort als auch in den vollständigen Einstellungen lässt sich die standardmäßig sichtbare Schaltfläche aus- und wieder einblenden. 29 Komponenten sind in sieben Gruppen geordnet, ergänzt um die Darstellung; Theme und Komponenten sind getrennt schaltbar. Ressourcenangaben sind Schätzungen.

<a id="de-install"></a>

### Installation

1. Deaktivieren Sie bisherige Magazin-`roam/css` und zugehörige `roam/js`, um doppelte Ausführung zu vermeiden.
2. Entpacken Sie die ZIP-Datei.
3. Öffnen Sie Settings → Roam Depot → Developer Mode → Load unpacked extension.
4. Wählen Sie den Ordner, der `extension.js` direkt enthält.
5. Wählen Sie Sprache und Optionen unter Extension Settings → Folio. Auto folgt der Browsersprache.

<a id="de-appearance"></a>

### Darstellung und Schriften

Den CSS-Wert `font-family` einer installierten Schrift eintragen, keine Datei oder URL; leer stellt die Vorgaben wieder her. Text- und Überschriften/Randnotiz-Schriften sind getrennt einstellbar. Das Motto umfasst höchstens zwei Zeilen mit je 24 Einheiten: lateinisches Zeichen = 1; chinesisches Zeichen, Vollbreitenzeichen oder Emoji = 2.

<a id="de-navigation"></a>

### Oberfläche und Navigation

| Komponente | Ressourcenlast |
| --- | --- |
| Schalter der Seitenleisten sichtbar halten | Sehr gering |
| Symbole der oberen Leiste ausblenden | Sehr gering |
| Elemente der linken Seitenleiste ausblenden | Sehr gering |
| Workbench-Auswahlkompatibilität | Sehr gering |
| Seiten-Scrollleiste nur beim Scrollen anzeigen | Sehr gering |
| Seitengraph-Schaltfläche | Gering |
| Karten der rechten Seitenleiste | Gering |

Native Roam-Menüabstände, Query/Data Table-Spaltenanpassung und Link-Interaktionen bleiben erhalten.

Roams native Funktion „Adjust width of the main page“ steuert die Textbreite. Folio fügt keine Breitenstufen oder feste Artikelbreite hinzu. Query/Data Table-Spalten und Links bleiben nativ bedienbar.

<a id="de-content"></a>

### Tags und Inhalt

| Komponente | Ressourcenlast |
| --- | --- |
| Spezielle Tags und Stempel | Sehr gering |
| OR-Auswahl | Sehr gering |
| Eigenschaftskarte | Gering |
| Visuelles Gewicht nach Referenzen | Mittel |

Tag-Namen sind konfigurierbar; ein Sprachwechsel benennt keine Roam-Seiten um. Notiztypen und Reading List verwenden für `[[Seitenlinks]]` und `#Tags` dieselben **12px** wie Q1-Stempel und wachsen nicht mit der Textgröße. Personen und Branchen folgen weiterhin dem Fließtext. Bücher, Personen, Branchen, motive und rediscover behalten native Link-Klicks.

Eigenschaftskarten bündeln Seiteninformationen. Die visuelle Gewichtung passt Blockgröße und Hervorhebung an die Referenzanzahl an; native Zähler und Sprünge bleiben erhalten.

<a id="de-writing"></a>

### Schreiben und Code

| Komponente | Ressourcenlast |
| --- | --- |
| Schreibmaschinenmodus und Schreibziel | Sehr gering |
| Randnotizen | Gering |
| Codeblockhöhe begrenzen | Sehr gering |
| Codeblock-Werkzeuge | Höher |

Der Schreibmaschinenmodus hält die aktuelle Schreibposition im Blick und bietet ein Schreibziel. Randnotizen lassen sich wie oben beschrieben pro Unterblock platzieren.

Die Codehöhe ist standardmäßig auf **420px** begrenzt; `0` hebt die Grenze auf. Langer Code scrollt im Block, dessen Container mit dem verfügbaren Platz schrumpft. Neu aufgeklappte Notizen erhalten die Werkzeuge automatisch: Anfang/Ende, Kopieren, Suchen, aktuellen Treffer oder alle Treffer im Codeblock ersetzen. Die Suche ist wörtlich und ignoriert Groß-/Kleinschreibung; Suchtext und Trefferposition bleiben beim Verlassen erhalten. Ersetzungen nutzen native Editortransaktionen und sind rückgängig zu machen.

<a id="de-calendar"></a>

### Tagesnotizen und Kalender

| Komponente | Ressourcenlast |
| --- | --- |
| Tagesnotiz-Kopf | Sehr gering |
| Kalender-Schnellaktionen | Sehr gering |
| Kalender-Tastaturnavigation | Sehr gering |
| Automatische Tagesvorlagen | Sehr gering |
| Kalender-Heatmap und Vorschau | Mittel |
| TODOs von gestern übernehmen | Mittel |
| Kalender-Schnellerfassung | Höher |

Vorgaben: G für Datumssprung, T für heute, D für Tagesnotizen, Pfeile links/rechts für Nachbartage. Kürzel sind anpassbar und beim Schreiben inaktiv.

Kalendersymbol und Alt-Klick auf einen Datumsverweis verwenden dieselbe erweiterte Darstellung. Die Auswahl des referenzierten Datums bleibt bei Roams nativem Verhalten. Vorschauen verschwinden sofort beim Verlassen des Datums sowie beim Schließen des Kalenders oder Fokusverlust des Fensters.

Die Tageskopfzeile blendet die doppelte native Trennlinie oberhalb des Tages aus. Ausschalten stellt sie wieder her, auch bei nachgeladenen Tagen. Die Schnellerfassung ergänzt Notizen, TODOs oder einen Plan zum gewählten Datum.

**Vorlagen**: Block-UID oder `((Blockreferenz))` für Werktags-SmartBlock, Wochenend-SmartBlock und Tagesplan eintragen. Alle Felder sind standardmäßig leer. Die automatischen Vorlagen benötigen SmartBlocks; vor dem Aktivieren konfigurieren. Sie laufen beim Komponentenstart, wenn die heutige Seite existiert, höchstens einmal täglich pro konfigurierter Vorlage.

Der Tagesplan kopiert die Unterblöcke samt Hierarchie, ohne SmartBlocks-Befehle auszuführen. Jede Vorlage wird pro Datum höchstens einmal kopiert, auch nach Neuladen. Fehlende oder leere Vorlagen melden keinen Erfolg. Nach einem Abbruch teilweise geschriebene Inhalte prüfen und manuell ergänzen.

<a id="de-media"></a>

### Lesen und Medien

| Komponente | Ressourcenlast |
| --- | --- |
| Bilder und Bildunterschriften | Gering |
| PDF-Fenster | Gering |
| Videoleser | Höher |

**Open** öffnet den Videoblock rechts; **Theater** schaltet den Kinomodus um und **Notes** steuert die native Zeitstempelansicht. Roam übernimmt die Erstellung mit **Timestamp** und speichert die Notiz als nativen Kommentar. Folio legt keinen zusätzlichen Unterblock des Videos an. Änderungen in Theater aktualisieren denselben Kommentar. Nach einer kurzen Eingabepause wird automatisch gespeichert; das Verlassen des Felds, Strg/Cmd＋Eingabe oder **Speichern** speichert sofort. Entwürfe bleiben beim Aktualisieren der Liste erhalten, und Schreibvorgänge für jeden Kommentar erfolgen nacheinander. Erfolg wird erst angezeigt, nachdem der gespeicherte Text aus dem Graphen zurückgelesen wurde. Bei einem Fehler bleibt der Entwurf mit der Aktion **Erneut versuchen** erhalten. Löschen erfordert einen zweiten Klick.

Bilder und Bildunterschriften übernehmen den Lesestil. Die erweiterte PDF-Ansicht bietet einen Rückkehrlink und Esc.

<a id="de-insights"></a>

### Seitenanalyse

| Komponente | Ressourcenlast |
| --- | --- |
| Seitenstatistik | Mittel |
| Seitenpuls | Höher |

Die Statistikzeile zeigt Wortzahl, geschätzte Lesezeit und weitere Angaben. Der Seitenpuls zeigt jüngere Erwähnungen. Beide Komponenten sind getrennt schaltbar.

<a id="de-review"></a>

### Aufgaben und Rückblick

| Komponente | Ressourcenlast |
| --- | --- |
| Redaktionspult | Höher |
| 3 zufällige Aufgaben | Höher |

**Editorial Desk** ergänzt Roams natives The Desk um Typfilter, mehrere angeheftete Karten, Auswahl/Entfernung eines Aufmachers und neun Sortierungen: manuell, zuletzt bearbeitet, am längsten unbearbeitet, Frist, Fortschritt, Typ, Länge, Aktivität und am längsten auf dem Desk. Beschriftungen, Hinweise und Statistiken folgen allen sechs Folio-Sprachen; eigene Titel und Typnamen bleiben unverändert. Reading Desk ist ein separates Plugin.

#### Random TODO 3 · Ausschlüsse

Random TODO 3 wählt gewichtet drei TODOs aus, die noch nicht in der heutigen Tagesnotiz stehen, und bringt unerledigte Aufgaben wieder in den Blick.

Unter Aufgaben und Rückblick sind `SmartBlock` und `roam/templates` als ausgeschlossene Seiten vorausgefüllt. Ein exakter Seitentitel pro Zeile; Einträge sind änder- und ergänzbar. Gefiltert wird nach der Seite, auf der die Aufgabe liegt, einschließlich verschachtelter Unterblöcke. Eine bloße Erwähnung der Seite schließt eine Aufgabe nicht aus.

TODOs mit zukünftigem Datum werden standardmäßig ausgeschlossen. Deaktivieren Sie die Option, um Aufgaben mit einem ausdrücklich verlinkten zukünftigen Tagesnotizdatum im Text einzubeziehen. Änderungen gelten sofort und bleiben gespeichert, auch eine leere Liste oder ein ausgeschalteter Schalter. Zurücksetzen stellt die beiden Standardseiten und die aktivierte Option wieder her. Ursprüngliche Aufgaben werden nicht verändert.

<a id="de-development"></a>

### Entwicklung und Prüfung

Führen Sie `npm run build` und `npm run check` aus. Optionale Prüfungen `npm run check:layout` und `npm run check:interaction` benötigen Playwright/Chromium; `FOLIO_TEST_CHROMIUM` gibt den Browserpfad an, `FOLIO_DOM_FIXTURE` ein exportiertes DOM. Die fertige Datei ist `extension.js`; Quellen liegen unter `src/` und `source/`.

Versionsverlauf: [CHANGELOG.md](../CHANGELOG.md). Lokale DOM- und API-Testdouble-Prüfungen bestätigen nicht jede Interaktion in echten Graphen oder auf allen Geräten.

<a id="de-credits"></a>

### Dank und Lizenz

Danke an **ESTHER不二 / esthersjw** und [esther-design-system](https://github.com/esthersjw/esther-design-system), die Grundlage von Folios Gestaltung und angepasstem Themencode. Original und angepasstes Thema stehen unter **CC BY-NC-SA 4.0**; siehe [LICENSE.md](../LICENSE.md).

Danke an **Date Picker Enhance**, das der ursprüngliche Kalendercode ausdrücklich als Referenz nennt, sowie an Roam Research und die Community für native Funktionen, Schnittstellen und Interaktionsideen. Unbestätigte Namen und Projektadressen werden nicht geraten.

Danke an **Azlen Elza** und das [Zenith-Theme](https://github.com/azlen/roam-themes#zenith), dessen nebeneinander angeordnete Seiten und konzentriertes Lesedesign Folio inspiriert haben.

[Zur Sprachauswahl](../README.md#languages)
