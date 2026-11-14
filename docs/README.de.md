**Languages / 语言：简体中文 · English · Français · Deutsch · Español · Italiano**

[简体中文](../README.md) | [English](README.en.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Italiano](README.it.md)

# Folio · 1.4.21

Code-Werkzeuge erscheinen automatisch in neu geöffneten Notizen. Suchtext und Trefferposition bleiben pro Block erhalten. Ersetzen Sie den aktuellen Treffer oder alle Treffer im aktuellen Codeblock über native Editor-Transaktionen mit Rückgängig-Unterstützung. Die Suche ist wörtlich und beachtet Groß- und Kleinschreibung nicht.

Das Einstellungsfenster lässt sich an der Titelleiste verschieben. Die Seite bleibt bedienbar, sodass Änderungen beim Umschalten sofort sichtbar sind.

Die Schieberegler-Schaltfläche in der oberen Leiste öffnet alle Folio-Einstellungen. Die erste Einstellung in beiden Ansichten steuert ihre Sichtbarkeit. Der native KI-Chat bleibt rechts und wird über die obere Leiste geöffnet; das Suchsymbol des nativen Desk ist vom Rand eingerückt.

Folio verleiht Roam eine warme, magazinartige Gestaltung und ergänzt Werkzeuge für Tags, Randnotizen, Kalender, Lesen und Aufgaben. Jede Komponente lässt sich einzeln aktivieren – für übersichtlichere Notizen und konzentriertes Lesen.

**Weitere eigenständige Plugins**

- **Reading Desk** — Bringen Sie Lektüre, Anmerkungen und Gedanken zusammen, damit Gelesenes zu bleibendem Wissen wird.
- **Version Studio** — Vergleichen Sie Notizversionen, verfolgen Sie Ihre Gedankenentwicklung und überarbeiten Sie mit Zuversicht.

Diese Plugins werden separat heruntergeladen und installiert; sie sind nicht in Folio enthalten.

## Installation

1. Deaktivieren Sie bisherige Magazin-`roam/css` und zugehörige `roam/js`, um doppelte Ausführung zu vermeiden.
2. Entpacken Sie die ZIP-Datei.
3. Öffnen Sie Settings → Roam Depot → Developer Mode → Load unpacked extension.
4. Wählen Sie den Ordner, der `extension.js` direkt enthält.
5. Wählen Sie Sprache und Optionen unter Extension Settings → Folio. Auto folgt der Browsersprache.

## Thema und Komponenten

Ein Schalter steuert das Design; aktive Komponenten verwenden bei ausgeschaltetem Design die nativen Roam-Farben. Die 29 Komponenten sind über die linke Navigation in sieben Funktionsgruppen erreichbar. Jede behält ihren eigenen Schalter und ihre geschätzte Ressourcenstufe. Darstellung, Tag-Namen, Codehöhe und Tastenkürzel stehen im jeweiligen Bereich. Die Stufen sind keine Echtzeit-CPU-Messungen.

- Oberfläche und Navigation: Schalter der Seitenleisten sichtbar halten, Symbole der oberen Leiste ausblenden, Elemente der linken Seitenleiste ausblenden, Workbench-Auswahlkompatibilität, Seitenleiste nur beim Scrollen anzeigen, Seitengraph-Schaltfläche, Karten der rechten Seitenleiste.
- Tags und Inhalt: Spezielle Tags und Stempel, OR-Auswahl, Eigenschaftskarte, Visuelles Gewicht nach Referenzen.
- Schreiben und Code: Schreibmaschinenmodus und Schreibziel, Randnotizen, Codeblockhöhe begrenzen, Codeblock-Werkzeuge.
- Tagesnotizen und Kalender: Tagesnotiz-Kopf, Kalender-Schnellaktionen, Kalender-Tastaturnavigation, Automatische Tagesvorlagen, Kalender-Heatmap und Vorschau, TODOs von gestern übernehmen, Kalender-Schnellerfassung.
- Lesen und Medien: Bilder und Bildunterschriften, PDF-Fenster, Videoleser.
- Seitenanalyse: Seitenstatistik, Seitenpuls.
- Aufgaben und Rückblick: Redaktionspult, 3 zufällige Aufgaben.

Neue Installationen aktivieren Thema und Komponenten. Das Abschalten einer Komponente gibt ihre Laufzeitressourcen frei. Die vorübergehende Deaktivierung von Folio hilft beim Vergleich mit dem Original.

## Random TODO 3 · Ausschlüsse

Unter Aufgaben und Rückblick sind `SmartBlock` und `roam/templates` als ausgeschlossene Seiten vorausgefüllt. Ein exakter Seitentitel pro Zeile; Einträge sind änder- und ergänzbar. Gefiltert wird nach der Seite, auf der die Aufgabe liegt, einschließlich verschachtelter Unterblöcke. Eine bloße Erwähnung der Seite schließt eine Aufgabe nicht aus.

TODOs mit zukünftigem Datum werden standardmäßig ausgeschlossen. Deaktivieren Sie die Option, um Aufgaben mit einem ausdrücklich verlinkten zukünftigen Tagesnotizdatum im Text einzubeziehen. Änderungen gelten sofort und bleiben gespeichert, auch eine leere Liste oder ein ausgeschalteter Schalter. Zurücksetzen stellt die beiden Standardseiten und die aktivierte Option wieder her. Ursprüngliche Aufgaben werden nicht verändert.

## Schriften, Motto und Tags

Geben Sie den CSS-Wert `font-family` einer installierten Schrift ein, keine Datei oder URL. Leer stellt die Vorgaben wieder her. Das Motto hat höchstens zwei Zeilen mit je 24 Einheiten: lateinisches Zeichen = 1; chinesisches Zeichen, Vollbreitenzeichen oder Emoji = 2. Die verfügbare Breite kann die Grenze weiter verkürzen.

Tag-Namen sind konfigurierbar; ein Sprachwechsel benennt keine Roam-Seiten um. Notiztypen und Reading List verwenden für `[[Seitenlinks]]` und `#Tags` dieselben **12px** wie Q1-Stempel und wachsen nicht mit der Textgröße. Personen und Branchen folgen weiterhin dem Fließtext. Bücher, Personen, Branchen, motive und rediscover behalten native Link-Klicks.

## Verhalten

- Open in der Videoleiste öffnet den Videoblock rechts. Timestamp, Theater und Notes behalten ihre bisherigen Ereignisse. Der bereitgestellte Videocode enthält auch Bearbeiten und Löschen von Zeitstempelnotizen im Kinomodus.
- `#.aside` oder `#.aside-left` an einem Unterblock erzeugt rechte oder linke Randnotizen; alternativ dient das Kontextmenü des Aufzählungspunkts. Bei Platzmangel bleiben sie im Text. Die Kommentarprojektion ist deaktiviert.
- Vollbild-PDF bietet einen Rücklink und Esc. Codehöhe: standardmäßig 420px; 0 hebt die Grenze auf. Der Schalter ist unabhängig.
- Query/Data Table behält die native Spaltenanpassung. Abstände in Blockmenüs und Befehlslisten bestimmt Roam.
- Artikel haben eine Zentrierungsebene und einen 8px-Blocktrenner; Referenzzähler bleiben erhalten. Die native linke Leiste ist 232px breit; Folio ergänzt keine Breitenanpassung dafür.
- Vorgaben: G für Datumssprung, T für heute, D für Tagesnotizen, Pfeile links/rechts für Nachbartage. Kürzel sind anpassbar und beim Schreiben inaktiv.
- Random TODO 3 schließt standardmäßig ausdrücklich zukünftige Tagesdaten aus (abschaltbar) und vermeidet doppelte Quellenlinks. Papieralterung, mark it und ihre Einstellungen wurden entfernt.

Kalendersymbol und Alt-Klick auf einen Datumsverweis verwenden dieselbe erweiterte Darstellung. Die Auswahl des referenzierten Datums bleibt bei Roams nativem Verhalten. Vorschauen verschwinden sofort beim Verlassen des Datums sowie beim Schließen des Kalenders oder Fokusverlust des Fensters.

## Entwicklung und Prüfung

Führen Sie `npm run build` und `npm run check` aus. Optionale Prüfungen `npm run check:layout` und `npm run check:interaction` benötigen Playwright/Chromium; `FOLIO_TEST_CHROMIUM` gibt den Browserpfad an, `FOLIO_DOM_FIXTURE` ein exportiertes DOM. Die fertige Datei ist `extension.js`; Quellen liegen unter `src/` und `source/`.

Siehe [TEST-REPORT.md](../TEST-REPORT.md) und [CHANGELOG.md](../CHANGELOG.md). Lokale Renderprüfungen und API-Testdoubles ersetzen keine vollständige Prüfung im angemeldeten Graphen.

## Dank und Lizenz

Danke an **ESTHER不二 / esthersjw** und [esther-design-system](https://github.com/esthersjw/esther-design-system), die Grundlage von Folios Gestaltung und angepasstem Themencode. Original und angepasstes Thema stehen unter **CC BY-NC-SA 4.0**; siehe [LICENSE.md](../LICENSE.md).

Danke an **Date Picker Enhance**, das der ursprüngliche Kalendercode ausdrücklich als Referenz nennt, sowie an Roam Research und die Community für native Funktionen, Schnittstellen und Interaktionsideen. Unbestätigte Namen und Projektadressen werden nicht geraten.
