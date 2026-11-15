# Folio · 1.4.25

[简体中文 · English · Français · Deutsch · Español · Italiano](../README.md#languages)

<a id="en"></a>


## English

[Overview](#en-overview) · [Right sidebar](#en-sidebar) · [Margin notes](#en-asides) · [Video notes](#en-video) · [Settings window](#en-settings) · [Installation](#en-install) · [Appearance and fonts](#en-appearance) · [Interface and navigation](#en-navigation) · [Labels and content](#en-content) · [Writing and code](#en-writing) · [Daily notes and calendar](#en-calendar) · [Reading and media](#en-media) · [Page insights](#en-insights) · [Tasks and review](#en-review) · [Development](#en-development) · [Credits](#en-credits)

<a id="en-overview"></a>

### Overview

**Magazine-inspired pages for Roam, with everyday tools you can use independently.**

Warm paper colours, clear headings and generous margins make room for sustained reading and writing. Folio also coordinates daily notes, sidebars, labels, properties and selected community-plugin interfaces, with styling for Roam’s native AI and The Desk.

**More standalone plugins**

- **Reading Desk** — Bring reading, annotations and ideas together, so what you read becomes knowledge you keep.
- **Version Studio** — Compare note versions, follow how your thinking evolves and rewrite with confidence.

These plugins are downloaded and installed separately; they are not bundled with Folio.

One switch controls the theme; enabled components keep native Roam colours when it is off. The 29 components are organised into seven functional groups with left navigation. Each retains its individual switch and existing estimated resource rating. Appearance, tag names, code height and shortcuts remain in the relevant sections. Ratings are estimates, not live CPU measurements.

Fresh installations enable the theme and components. Disabling a component releases its runtime resources. “Temporarily disable Folio” helps compare against native Roam.

<a id="en-sidebar"></a>

### Turn the right sidebar into a workspace

Arrange right-sidebar notes as cards you can browse horizontally while keeping your main page in view. Compare several sources side by side; each card retains its own scrolling area and native controls for opening, collapsing and closing content.

The native AI entry sits in the main top bar, while chat remains in a right-sidebar card. History, conversations and new-chat controls follow that card. Ordinary note cards keep their existing behaviour.

<a id="en-asides"></a>

### Give supporting ideas their own place

Move selected child blocks into the left or right margin, keeping examples and explanations close to the main argument. Choose **Aside: Left** or **Aside: Right** in the bullet context menu, or add `#.aside-left` or `#.aside` to the child. Other children retain their outline structure; notes return inline when the margin is too narrow.

Placement follows Roam’s native page width and available sidebar space. Reading Desk’s annotation notes are separate; use one margin-note method per parent block to avoid overlap.

<a id="en-video"></a>

### Watch a video and keep your thoughts nearby

Theater mode brings the video and native timestamp comments together on the main page. **Timestamp** uses Roam’s native comment-creation flow. Folio displays those comments below the video and locates the new entry. Click a timestamp to seek; editing saves back to the same comment. **Open** shows the original block in the right sidebar.

Shorter, narrower windows limit video height to leave room for notes. Large windows retain side margins, with the video and notes aligned.

<a id="en-settings"></a>

### Settings window

The sliders button in the top bar opens a compact Folio settings window. Drag its title bar to move it while continuing to use the page. Both the full settings page and this window can hide or restore the entry button, which is shown by default. All 29 components are organised into seven groups, plus appearance settings; theme and component switches are independent, and resource ratings are estimates.

<a id="en-install"></a>

### Installation

1. Disable the previous magazine `roam/css` and related `roam/js` to prevent duplicate loading.
2. Extract the ZIP.
3. Open Settings → Roam Depot → Developer Mode → Load unpacked extension.
4. Select the folder containing `extension.js` directly.
5. Choose the language and switches in Extension Settings → Folio. Auto follows the browser language.

<a id="en-appearance"></a>

### Appearance and fonts

Enter an installed font’s CSS `font-family`, not a file or URL; empty restores defaults. Body and heading/margin-note fonts are configurable separately. The motto allows two lines of 24 units each: Latin characters count as 1; Chinese, full-width characters and emoji count as 2.

<a id="en-navigation"></a>

### Interface and navigation

| Component | Resource impact |
| --- | --- |
| Keep native sidebar toggles visible | Very low |
| Hide top-bar icons | Very low |
| Hide left-sidebar items | Very low |
| Workbench dropdown compatibility | Very low |
| Show the page scrollbar only while scrolling | Very low |
| Page graph button | Low |
| Right-sidebar cards | Low |

Native Roam menu spacing, Query/Data Table column resizing and link interactions are preserved.

Roam’s native “Adjust width of the main page” controls body width. Folio adds no width presets or fixed article width. Query/Data Table resizing and link interactions remain native.

<a id="en-content"></a>

### Labels and content

| Component | Resource impact |
| --- | --- |
| Special labels and stamps | Very low |
| OR dropdown chips | Very low |
| Property card | Low |
| Reference-based visual weight | Moderate |

Label names are configurable; changing the interface language never renames Roam pages. Note-type and Reading List labels use the same **12px** text for `[[page links]]` and `#tags`, matching Q1 stamps rather than scaling with body text. Person and industry labels still follow body size. Book, person, industry, motive and rediscover labels retain native link clicks.

Property cards bring page information together. Reference-based weight adjusts block size and emphasis by reference count, retaining native counts and navigation.

<a id="en-writing"></a>

### Writing and code

| Component | Resource impact |
| --- | --- |
| Typewriter mode and writing goal | Very low |
| Margin notes | Low |
| Limit code block height | Very low |
| Code-block tools | Higher |

Typewriter mode keeps the current writing position in view and supports a writing goal. Margin notes can be positioned per child block as described above.

The code-height limit defaults to **420px**; `0` removes it. Long code scrolls within its block, and the code container shrinks with the containing block. Tools attach to newly expanded notes automatically: start/end navigation, copy, search, replace current and replace all matches in the current code block. Search is literal and case-insensitive; query and match position survive leaving or reopening the search. Replacements use the editor’s native transactions and support undo.

<a id="en-calendar"></a>

### Daily notes and calendar

| Component | Resource impact |
| --- | --- |
| Daily-note masthead | Very low |
| Calendar quick actions | Very low |
| Calendar keyboard navigation | Very low |
| Automatic daily templates | Very low |
| Calendar heatmap and preview | Moderate |
| Carry yesterday's TODOs | Moderate |
| Calendar quick capture | Higher |

Default navigation: G for date jump, T for today, D for daily notes, left/right arrows for adjacent days. Shortcuts are configurable and do not run while typing.

The calendar icon and Alt-clicking a date reference share the same enhanced layout. Reference-date selection still uses Roam’s native behaviour. Hover previews disappear as soon as the pointer leaves the date, and are cleared when the calendar closes or the window loses focus.

While a daily masthead is visible, the duplicate native separator above that day is hidden. Turning the masthead off restores it, including for dates loaded while scrolling. Quick capture adds notes, TODOs or a plan to the selected date.

**Template setup**: enter a block UID or `((block reference))` for Weekday SmartBlock, Weekend SmartBlock and Today’s plan template in this group. All three default to empty. Weekday/weekend templates require the separate SmartBlocks extension; configure them before enabling automatic daily templates. They run when the component starts and today’s page exists, at most once per configured template per day.

Today’s plan copies the chosen template block’s children and hierarchy; it does not execute embedded SmartBlocks commands. Each template is copied at most once per date, with the record retained across reloads. Missing or empty templates do not report success. If a run is interrupted, inspect any partial content before completing it manually.

<a id="en-media"></a>

### Reading and media

| Component | Resource impact |
| --- | --- |
| Images and captions | Low |
| PDF window | Low |
| Video reader | Higher |

**Open** opens the video block in the right sidebar; **Theater** toggles theater mode and **Notes** controls the native timestamp view. Roam handles **Timestamp** creation and stores the note as a native comment. Folio does not create a separate child of the video block. Editing in the theater view updates that same comment. Changes save automatically after a brief pause in typing; leaving the field, Ctrl/Cmd＋Enter or **Save** submits immediately. Drafts survive list refreshes, and writes for each comment run in order. Success appears only after the saved text is read back from the graph. Failed drafts are kept with a **Retry** action. Deletion requires a second confirmation click.

Images and captions share the reading style. The expanded PDF view has an exit link and supports Esc to return.

<a id="en-insights"></a>

### Page insights

| Component | Resource impact |
| --- | --- |
| Page statistics | Moderate |
| Page pulse | Higher |

The page statistics row shows word count, estimated reading time and related information. Page pulse shows recent mentions of the page. Each component can be switched independently.

<a id="en-review"></a>

### Tasks and review

| Component | Resource impact |
| --- | --- |
| Editorial Desk | Higher |
| Random TODO 3 | Higher |

**Editorial Desk** enhances Roam’s native The Desk with type filters, multiple pinned cards, drawing/clearing a lead story and nine sort modes: manual, recently edited, least recently edited, deadline, completion, type, length, heat and longest on desk. Toolbar labels, hints and statistics follow all six Folio languages; your card titles and type names stay unchanged. This is separate from the Reading Desk plugin.

#### Random TODO 3 · Exclusions

Random TODO 3 makes a weighted selection of three TODOs not already present in today’s daily note, helping you rediscover unfinished tasks.

Under Tasks and review, Excluded pages defaults to `SmartBlock` and `roam/templates`. Enter one exact page title per line; edit or add titles as needed. Matching uses the task’s containing page, including nested child blocks. Merely referencing that page in task text does not exclude the task.

Exclude TODOs with future dates is on by default. Turn it off to include tasks whose text explicitly links a future daily-note date. Changes apply immediately and persist, including an empty exclusion list or an off switch. Reset restores the two default pages and the enabled switch. These rules only filter candidates and never change original tasks.

<a id="en-development"></a>

### Development and validation

Run `npm run build` and `npm run check`. Optional `npm run check:layout` and `npm run check:interaction` require Playwright/Chromium; set `FOLIO_TEST_CHROMIUM` for a browser executable and `FOLIO_DOM_FIXTURE` for exported DOM. `extension.js` is the distributable; sources are in `src/` and `source/`.

See [CHANGELOG.md](../CHANGELOG.md) for version history. Local DOM and API-double checks do not certify every interaction in real graphs or on every device.

<a id="en-credits"></a>

### Acknowledgements and licence

Thanks to **ESTHER不二 / esthersjw** and [esther-design-system](https://github.com/esthersjw/esther-design-system), the basis of Folio’s visual design and adapted theme code. The original design and adapted theme follow **CC BY-NC-SA 4.0**; see [LICENSE.md](../LICENSE.md).

Thanks to **Date Picker Enhance**, explicitly cited as a reference by the original calendar heatmap/statistics code, and to Roam Research and community developers for native capabilities, APIs and interaction ideas. Unverified author identities or project URLs are not guessed.

Thanks to **Azlen Elza** and the [Zenith theme](https://github.com/azlen/roam-themes#zenith), whose side-by-side pages and focused reading design helped inspire Folio.

[Back to language navigation](../README.md#languages)
