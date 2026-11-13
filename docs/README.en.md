**Languages / 语言：简体中文 · English · Français · Deutsch · Español · Italiano**

[简体中文](../README.md) | [English](README.en.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Italiano](README.it.md)

# Folio · 1.4.20

Drag the settings panel by its title bar and keep using the page while it stays open, so you can preview changes as you toggle settings.

The sliders button in the top bar opens all Folio settings. The first setting on both surfaces controls its visibility. Native AI opens from the main top bar while chat stays in the right sidebar; the native Desk search icon is inset from its border.

Folio brings warm, magazine-inspired typography to Roam, with tools for labels, margin notes, calendars, reading and tasks. Enable each component independently for clearer notes and more focused reading.

**More standalone plugins**

- **Reading Desk** — Bring reading, annotations and ideas together, so what you read becomes knowledge you keep.
- **Version Studio** — Compare note versions, follow how your thinking evolves and rewrite with confidence.

These plugins are downloaded and installed separately; they are not bundled with Folio.

## Installation

1. Disable the previous magazine `roam/css` and related `roam/js` to prevent duplicate loading.
2. Extract the ZIP.
3. Open Settings → Roam Depot → Developer Mode → Load unpacked extension.
4. Select the folder containing `extension.js` directly.
5. Choose the language and switches in Extension Settings → Folio. Auto follows the browser language.

## Theme and components

One switch controls the theme; enabled components keep native Roam colours when it is off. The 29 components are organised into seven functional groups with left navigation. Each retains its individual switch and existing estimated resource rating. Appearance, tag names, code height and shortcuts remain in the relevant sections. Ratings are estimates, not live CPU measurements.

- Interface and navigation: Keep native sidebar toggles visible, Hide top-bar icons, Hide left-sidebar items, Workbench dropdown compatibility, Show the page scrollbar only while scrolling, Page graph button, Right-sidebar cards.
- Labels and content: Special labels and stamps, OR dropdown chips, Property card, Reference-based visual weight.
- Writing and code: Typewriter mode and writing goal, Margin notes, Limit code block height, Code-block tools.
- Daily notes and calendar: Daily-note masthead, Calendar quick actions, Calendar keyboard navigation, Automatic daily templates, Calendar heatmap and preview, Carry yesterday's TODOs, Calendar quick capture.
- Reading and media: Images and captions, PDF window, Video reader.
- Page insights: Page statistics, Page pulse.
- Tasks and review: Editorial Desk, Random TODO 3.

Fresh installations enable the theme and components. Disabling a component releases its runtime resources. “Temporarily disable Folio” helps compare against native Roam.

## Random TODO 3 · Exclusions

Under Tasks and review, Excluded pages defaults to `SmartBlock` and `roam/templates`. Enter one exact page title per line; edit or add titles as needed. Matching uses the task’s containing page, including nested child blocks. Merely referencing that page in task text does not exclude the task.

Exclude TODOs with future dates is on by default. Turn it off to include tasks whose text explicitly links a future daily-note date. Changes apply immediately and persist, including an empty exclusion list or an off switch. Reset restores the two default pages and the enabled switch. These rules only filter candidates and never change original tasks.

## Fonts, motto and labels

Enter an installed font’s CSS `font-family`, not a font file or URL; empty restores defaults. The motto has up to two lines, each with a budget of 24: Latin characters count as 1; Chinese, full-width characters and emoji count as 2. Available sidebar width can impose a shorter limit.

Label names are configurable; changing the interface language never renames Roam pages. Note-type and Reading List labels use the same **12px** text for `[[page links]]` and `#tags`, matching Q1 stamps rather than scaling with body text. Person and industry labels still follow body size. Book, person, industry, motive and rediscover labels retain native link clicks.

## Behaviour

- Video-toolbar Open opens the video block in the right sidebar. Timestamp, Theater and Notes retain their existing handlers. The supplied video code also includes editing and deletion of theater timestamp notes.
- Add `#.aside` or `#.aside-left` to a child block for right/left margin notes, or use the bullet’s context menu. Notes stay inline when space is insufficient. The comment rail is disabled.
- Fullscreen PDF has an exit link and Esc return. Code height defaults to 420px; 0 removes the limit. Its switch is independent.
- Query/Data Table keeps native column resizing. Roam controls block-menu and command-list spacing.
- Articles use one centring layer and an 8px block separator, retaining reference counts. Roam’s native left sidebar is 232px; Folio adds no left-sidebar resizing feature.
- Default navigation: G for date jump, T for today, D for daily notes, left/right arrows for adjacent days. Shortcuts are configurable and do not run while typing.
- Random TODO 3 excludes explicit future daily-note dates by default (optional) and avoids duplicate source links. Paper ageing, mark it and their settings have been removed.

The calendar icon and Alt-clicking a date reference share the same enhanced layout. Reference-date selection still uses Roam’s native behaviour. Hover previews disappear as soon as the pointer leaves the date, and are cleared when the calendar closes or the window loses focus.

## Development and validation

Run `npm run build` and `npm run check`. Optional `npm run check:layout` and `npm run check:interaction` require Playwright/Chromium; set `FOLIO_TEST_CHROMIUM` for a browser executable and `FOLIO_DOM_FIXTURE` for exported DOM. `extension.js` is the distributable; sources are in `src/` and `source/`.

See [TEST-REPORT.md](../TEST-REPORT.md) and [CHANGELOG.md](../CHANGELOG.md). Local rendering and API doubles do not certify every interaction in a signed-in graph.

## Acknowledgements and licence

Thanks to **ESTHER不二 / esthersjw** and [esther-design-system](https://github.com/esthersjw/esther-design-system), the basis of Folio’s visual design and adapted theme code. The original design and adapted theme follow **CC BY-NC-SA 4.0**; see [LICENSE.md](../LICENSE.md).

Thanks to **Date Picker Enhance**, explicitly cited as a reference by the original calendar heatmap/statistics code, and to Roam Research and community developers for native capabilities, APIs and interaction ideas. Unverified author identities or project URLs are not guessed.
