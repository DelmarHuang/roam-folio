<a id="languages"></a>

**Languages / 语言**

[简体中文](#zh) | [English](#en) | [Français](#fr) | [Deutsch](#de) | [Español](#es) | [Italiano](#it)

# Folio · 书页集

`v1.4.25`

---

<a id="zh"></a>

## 简体中文

[介绍](#zh-overview) · [右侧栏](#zh-sidebar) · [页边旁注](#zh-asides) · [视频笔记](#zh-video) · [设置浮窗](#zh-settings) · [安装](#zh-install) · [外观与字体](#zh-appearance) · [界面与导航](#zh-navigation) · [标签与内容](#zh-content) · [写作与代码](#zh-writing) · [日记与日历](#zh-calendar) · [阅读与媒体](#zh-media) · [页面洞察](#zh-insights) · [任务与回顾](#zh-review) · [开发与验证](#zh-development) · [致谢](#zh-credits)

<a id="zh-overview"></a>

### 介绍

**为 Roam 带来杂志式排版，以及一组可以独立使用的日常工具。**

温暖的纸张配色、清晰的标题层次与页边留白，让 Roam 成为适合长时间阅读和写作的地方。Folio 同时协调日记、侧栏、标签、属性内容，以及部分社区插件的界面，并适配 Roam 原生 AI 与 The Desk。

**更多独立插件**

- **Reading Desk** — 把阅读、批注与思考汇聚一处，让读过的内容真正留下来。
- **Version Studio** — 对比笔记的不同版本，追踪思路变化，放心改写每一个想法。

两款插件单独下载、独立安装，不包含在 Folio 中。

主题由一个总开关控制；关闭主题后，已启用的组件继续适配 Roam 原生配色。29 个组件按功能分为七组，左侧导航切换分组；每个组件旁标注原有的资源消耗等级，均可独立启停。外观、标签名称、代码高度和导航快捷键保留在对应功能区。资源等级是估计，不是实时 CPU 占用。

新安装默认启用主题与组件。关闭组件会清理其运行资源。“临时停用 Folio（排查冲突）”用于和原生界面对照。

<a id="zh-sidebar"></a>

### 把右侧栏变成并排的工作空间

将右侧栏里的笔记排列为可以横向浏览的卡片，一边保留正文，一边对照多份材料。每张卡片保留自己的滚动区域和原生操作，展开、折叠、关闭与查看内容都在对应卡片中进行。

原生 AI 入口放在主顶栏，聊天仍在右侧卡片中；历史记录、会话和新建操作随聊天卡片排列。普通笔记卡片继续沿用相同的工作方式。

<a id="zh-asides"></a>

### 让补充说明找到合适的位置

把选中的子块放到正文左侧或右侧，让例子、解释和补充线索留在论述附近。在块圆点的右键菜单选择 **Aside: Left** 或 **Aside: Right**，也可以给子块加 `#.aside-left` 或 `#.aside`。其他子块保持大纲结构；页边空间不足时，旁注回到正文内。

旁注跟随 Roam 原生页面宽度与侧栏空间动态调整。Reading Desk 的备注旁注是另一项独立功能；同一个母块建议只选一种旁注方式，避免叠放。

<a id="zh-video"></a>

### 一边看视频，一边留下想法

影院模式把视频和原生时间戳评论放在主页面中。**Timestamp** 沿用 Roam 原生的评论创建方式；Folio 将评论同步展示在视频下方，并定位新条目。点击时间戳可回到对应位置，直接编辑会保存回同一条评论。**Open** 可在右侧栏查看原始块。

较矮、较窄的窗口限制视频占用的高度，给笔记留下空间；大窗口保留两侧留白，视频与笔记对齐。

<a id="zh-settings"></a>

### 设置浮窗

顶栏的滑杆按钮打开紧凑的 Folio 设置浮窗；拖动标题栏即可移动，打开时仍能操作页面。完整设置页和浮窗顶部都可控制入口按钮，默认显示。全部 29 个组件分为七组，另有外观区；主题与各组件可分别控制，资源等级为估计值。

<a id="zh-install"></a>

### 安装

1. 停用旧版杂志风 `roam/css` 和相关 `roam/js`，避免重复加载。
2. 解压 ZIP。
3. 打开 Settings → Roam Depot → Developer Mode → Load unpacked extension。
4. 选择直接包含 `extension.js` 的目录。
5. 在 Extension Settings → Folio 中选择语言并调整开关。Auto 跟随浏览器语言。

<a id="zh-appearance"></a>

### 外观与字体

字体填写已安装字体的 CSS `font-family`，不是字体文件或网址；留空恢复默认字体链。可分别设置正文、标题与旁注字体。座右铭最多两行，每行 24 单位：英文计 1，中文、全角字符及表情计 2。

<a id="zh-navigation"></a>

### 界面与导航

| 组件 | 资源消耗 |
| --- | --- |
| 固定显示原生侧栏开关 | 极低 |
| 隐藏顶部图标 | 极低 |
| 隐藏左侧边栏项目 | 极低 |
| Workbench 下拉选择兼容 | 极低 |
| 仅在滚动时显示页面滚动条 | 极低 |
| 页面关系图按钮 | 低 |
| 右侧栏卡片 | 低 |

保留 Roam 原生菜单间距、Query/Data Table 列宽调整和链接交互。

正文宽度由 Roam 原生 “Adjust width of the main page” 控制，Folio 不增加档位或固定正文宽度。Query/Data Table 列宽与链接交互继续使用原生能力。

<a id="zh-content"></a>

### 标签与内容

| 组件 | 资源消耗 |
| --- | --- |
| 特殊标签与印章 | 极低 |
| OR 勾叉下拉 | 极低 |
| 属性资料卡 | 低 |
| 按引用次数调整版面权重 | 中 |

标签名称可在设置中修改，切换界面语言不会改写 Roam 页面名。笔记类型与 Reading List 的 `[[双链]]` 和 `#标签` 使用相同的 **12px** 字号，与 Q1 印章一致；不再随正文字号放大。人物、行业标签仍跟随正文大小。书名、人物、行业、motive、rediscover 保留原生链接点击。

属性资料卡集中呈现页面信息；引用权重根据块的引用次数调整字号和视觉强调，保留原有引用计数与跳转。

<a id="zh-writing"></a>

### 写作与代码

| 组件 | 资源消耗 |
| --- | --- |
| 打字机模式与写作目标 | 极低 |
| 页边旁注 | 低 |
| 限制代码块高度 | 极低 |
| 代码块操作工具 | 较高 |

打字机模式保持当前写作位置，并可设置写作目标。旁注支持逐块选择左右位置，操作见上方说明。

代码高度默认 **420px**，`0` 表示不限制；长代码在块内滚动，代码容器随所在块宽度收缩。工具栏会随新展开的笔记自动出现，提供首尾跳转、复制、搜索，以及替换当前项或当前代码块的全部匹配。搜索为不区分大小写的字面匹配；离开或重新打开搜索后，保留该块的查询与匹配位置。替换使用编辑器原生事务，可撤销。

<a id="zh-calendar"></a>

### 日记与日历

| 组件 | 资源消耗 |
| --- | --- |
| 日记刊头 | 极低 |
| 日历快捷操作 | 极低 |
| 日历键盘导航 | 极低 |
| 自动日记模板 | 极低 |
| 日期热度与预览 | 中 |
| 处理昨日遗留 TODO | 中 |
| 日历快速记录 | 较高 |

导航快捷键默认 G 跳转日期、T 今天、D 日记流、左右箭头前后一天；可自定义，编辑文字时不触发。

日历图标与 Alt＋点击日期引用使用相同的增强布局；引用日期的选择仍由 Roam 原生处理。日期预览在光标移出时立即消失，关闭日历或窗口失焦时也会清理。

刊头显示时隐藏该日记上方重复的原生细分隔线；关闭刊头后恢复细线，滚动加载的新日期同样生效。快速记录支持向所选日期添加笔记、TODO 或计划。

**模板配置**：在本组填写“工作日 SmartBlock”“周末 SmartBlock”和“今日计划模板”的块 UID 或 `((块引用))`，默认全部留空。工作日／周末模板需要另装并启用 SmartBlocks；先配置，再开启自动日记模板。它在组件启动且今日日记已存在时运行，每个已配置模板每天最多执行一次。

“今日计划”复制所选模板块的子块及其层级，不执行其中的 SmartBlocks 命令。每个模板在同一日期最多复制一次，刷新后仍保留记录。模板不存在或没有子块时不会显示复制成功；若执行中断，请先检查日记中的部分内容，再手动补充。

<a id="zh-media"></a>

### 阅读与媒体

| 组件 | 资源消耗 |
| --- | --- |
| 图片与图注 | 低 |
| PDF 窗口 | 低 |
| 视频阅读器 | 较高 |

**Open** 在右侧栏打开视频块；**Theater** 切换影院模式，**Notes** 控制原生时间戳视图。**Timestamp** 的创建过程由 Roam 原生处理，笔记保存在原生评论中。Folio 不另建视频子块；影院区编辑会更新原评论：输入暂停后自动保存，失焦或 Ctrl/Cmd＋Enter 会立即提交，也可点击“保存”。列表刷新会保留草稿；保存按评论依次执行，确认已写入图谱后才显示成功。保存失败会保留当前草稿，并提供“重试”。删除需再次点击确认。

图片与图注采用协调的阅读样式。PDF 扩展阅读视图提供退出链接，并可按 Esc 返回。

<a id="zh-insights"></a>

### 页面洞察

| 组件 | 资源消耗 |
| --- | --- |
| 页面数据行 | 中 |
| 页面脉搏 | 较高 |

页面数据行显示字数、预计阅读时间等信息；页面脉搏呈现页面近期被提及的情况。两项组件可独立启停。

<a id="zh-review"></a>

### 任务与回顾

| 组件 | 资源消耗 |
| --- | --- |
| 编辑部案头 | 较高 |
| 随机任务 3 | 较高 |

**Editorial Desk** 为 Roam 原生 The Desk 提供类型筛选、多卡片置顶、抽取与撤下头条，以及九种排序：手动、最近编辑、最久未动、截稿日、完成度、类型、篇幅、热度、在桌最久。工具栏、提示与统计随 Folio 的六语言设置切换；用户自己的卡片标题与类型名称保持原文。它与独立插件 Reading Desk 不同。

#### Random TODO 3 · 排除设置

Random TODO 3 加权抽取三条尚未出现在今日日记中的 TODO，帮助重新发现未完成任务。

在“任务与回顾”中设置：排除页面默认填入 `SmartBlock` 和 `roam/templates`；每行一个完整页面名，可修改或继续添加。按任务所在页面精确匹配，包含该页面下各层子块，不会因为正文只是引用该页面就排除任务。

“排除带未来日期的 TODO”默认开启；关闭后，正文中明确链接未来日记日期的任务也可参与抽取。设置即时生效并保存；空的排除列表和关闭状态也会保留。恢复默认设置会恢复上述两个页面和开启状态。规则仅过滤抽取候选，不修改原任务。

<a id="zh-development"></a>

### 开发与验证

运行 `npm run build` 和 `npm run check`。可选 `npm run check:layout`、`npm run check:interaction` 需要 Playwright/Chromium；可用 `FOLIO_TEST_CHROMIUM` 指定浏览器。`FOLIO_DOM_FIXTURE` 可指定导出的 DOM。成品为 `extension.js`，源码位于 `src/` 和 `source/`。

版本记录见 [CHANGELOG.md](CHANGELOG.md)。本地 DOM 与 API 替身检查不等于所有真实图谱和设备上的完整验收。

<a id="zh-credits"></a>

### 致谢与许可证

感谢 **ESTHER不二 / esthersjw** 的 [esther-design-system](https://github.com/esthersjw/esther-design-system)：Folio 的视觉设计与适配主题代码以此为基础。原设计与适配主题遵循 **CC BY-NC-SA 4.0**，详见 [LICENSE.md](LICENSE.md)。

感谢 **Date Picker Enhance**：原日历热度与统计代码明确注明参考该项目。也感谢 Roam Research 及 Roam 社区开发者提供的原生能力、接口与交互经验。未确认的作者或项目地址不作推测性署名。

感谢 **Azlen Elza** 的 [Zenith 主题](https://github.com/azlen/roam-themes#zenith)，其并排页面与专注阅读的设计为 Folio 带来启发。

[返回语言导航](#languages)

---

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

See [CHANGELOG.md](CHANGELOG.md) for version history. Local DOM and API-double checks do not certify every interaction in real graphs or on every device.

<a id="en-credits"></a>

### Acknowledgements and licence

Thanks to **ESTHER不二 / esthersjw** and [esther-design-system](https://github.com/esthersjw/esther-design-system), the basis of Folio’s visual design and adapted theme code. The original design and adapted theme follow **CC BY-NC-SA 4.0**; see [LICENSE.md](LICENSE.md).

Thanks to **Date Picker Enhance**, explicitly cited as a reference by the original calendar heatmap/statistics code, and to Roam Research and community developers for native capabilities, APIs and interaction ideas. Unverified author identities or project URLs are not guessed.

Thanks to **Azlen Elza** and the [Zenith theme](https://github.com/azlen/roam-themes#zenith), whose side-by-side pages and focused reading design helped inspire Folio.

[Back to language navigation](#languages)

---

<a id="fr"></a>

## Français

[Présentation](#fr-overview) · [Barre droite](#fr-sidebar) · [Notes marginales](#fr-asides) · [Notes vidéo](#fr-video) · [Fenêtre de réglages](#fr-settings) · [Installation](#fr-install) · [Apparence et polices](#fr-appearance) · [Interface et navigation](#fr-navigation) · [Étiquettes et contenu](#fr-content) · [Écriture et code](#fr-writing) · [Journal et calendrier](#fr-calendar) · [Lecture et médias](#fr-media) · [Analyse des pages](#fr-insights) · [Tâches et révision](#fr-review) · [Développement](#fr-development) · [Remerciements](#fr-credits)

<a id="fr-overview"></a>

### Présentation

**Une mise en page de magazine pour Roam, avec des outils quotidiens utilisables séparément.**

Des couleurs de papier chaleureuses, des titres clairs et des marges confortables invitent à lire et écrire longtemps. Folio harmonise aussi le journal, les barres latérales, les étiquettes, les propriétés et certaines extensions communautaires, ainsi que l’IA native de Roam et The Desk.

**Autres plugins indépendants**

- **Reading Desk** — Réunissez lectures, annotations et idées pour transformer ce que vous lisez en connaissances durables.
- **Version Studio** — Comparez les versions de vos notes, suivez l’évolution de vos idées et réécrivez en confiance.

Ces plugins se téléchargent et s’installent séparément ; ils ne sont pas inclus dans Folio.

Un interrupteur commande le thème ; les composants actifs gardent les couleurs natives lorsque le thème est désactivé. Les 29 composants sont répartis en sept groupes fonctionnels accessibles à gauche. Chacun conserve son interrupteur et son niveau de ressources estimé. Apparence, noms des étiquettes, hauteur du code et raccourcis restent dans leurs sections respectives. Ces niveaux ne mesurent pas la CPU en direct.

Une nouvelle installation active le thème et les composants. Désactiver un composant libère ses ressources. L’arrêt temporaire de Folio permet une comparaison avec Roam natif.

<a id="fr-sidebar"></a>

### Une barre latérale droite pour travailler côte à côte

Les notes de la barre latérale droite deviennent des cartes que l’on parcourt horizontalement, en gardant la page principale visible. Chaque carte conserve son défilement et ses commandes natives pour ouvrir, replier et fermer le contenu.

L’entrée de l’IA native se trouve dans la barre supérieure principale ; le chat reste dans une carte à droite, avec son historique, ses conversations et sa commande de création. Les cartes ordinaires gardent leur fonctionnement.

<a id="fr-asides"></a>

### Une place pour les idées complémentaires

Placez certains blocs enfants dans la marge gauche ou droite pour garder exemples et explications près du texte. Choisissez **Aside: Left** ou **Aside: Right** dans le menu de la puce, ou ajoutez `#.aside-left` ou `#.aside`. Les autres enfants conservent leur structure ; si la marge est trop étroite, les notes restent dans le texte.

Le placement suit la largeur native de Roam et l’espace disponible. Les annotations marginales de Reading Desk sont indépendantes ; utilisez une seule méthode par bloc parent pour éviter les chevauchements.

<a id="fr-video"></a>

### Regarder une vidéo et garder ses notes à proximité

Le mode Theater réunit la vidéo et les commentaires horodatés natifs sur la page principale. **Timestamp** utilise la création de commentaires native de Roam. Folio affiche ces commentaires sous la vidéo et retrouve la nouvelle entrée. Cliquez sur l’heure pour revenir au passage ; les modifications sont enregistrées dans le même commentaire. **Open** ouvre le bloc original dans la barre droite.

Les fenêtres plus basses et étroites limitent la hauteur de la vidéo pour laisser de la place aux notes. Les grandes fenêtres conservent leurs marges, avec vidéo et notes alignées.

<a id="fr-settings"></a>

### Fenêtre de réglages

Le bouton à curseurs de la barre supérieure ouvre une fenêtre compacte de réglages. Déplacez-la par sa barre de titre tout en utilisant la page. La page complète des réglages et cette fenêtre permettent de masquer ou rétablir ce bouton, visible par défaut. Les 29 composants sont répartis en sept groupes, plus les réglages d’apparence ; thème et composants se règlent séparément. Les niveaux de ressources sont des estimations.

<a id="fr-install"></a>

### Installation

1. Désactivez les anciens `roam/css` du thème et les `roam/js` associés pour éviter les doublons.
2. Décompressez le ZIP.
3. Ouvrez Settings → Roam Depot → Developer Mode → Load unpacked extension.
4. Sélectionnez le dossier contenant directement `extension.js`.
5. Choisissez la langue et les options dans Extension Settings → Folio. Auto suit la langue du navigateur.

<a id="fr-appearance"></a>

### Apparence et polices

Saisissez le `font-family` CSS d’une police installée, pas un fichier ou une URL ; vide restaure les valeurs par défaut. Le texte et les titres/notes marginales ont des réglages distincts. La devise comporte deux lignes de 24 unités maximum : caractère latin = 1 ; caractère chinois, pleine chasse ou emoji = 2.

<a id="fr-navigation"></a>

### Interface et navigation

| Composant | Impact sur les ressources |
| --- | --- |
| Garder visibles les boutons des barres latérales | Très faible |
| Masquer les icônes supérieures | Très faible |
| Masquer des éléments de la barre gauche | Très faible |
| Compatibilité des listes Workbench | Très faible |
| Afficher la barre uniquement pendant le défilement | Très faible |
| Bouton graphe de page | Faible |
| Cartes de la barre droite | Faible |

Les espacements des menus, le redimensionnement des colonnes Query/Data Table et les liens natifs de Roam sont conservés.

La commande native « Adjust width of the main page » de Roam règle la largeur du texte. Folio n’ajoute ni paliers ni largeur fixe. Le redimensionnement Query/Data Table et les liens restent natifs.

<a id="fr-content"></a>

### Étiquettes et contenu

| Composant | Impact sur les ressources |
| --- | --- |
| Étiquettes et tampons spéciaux | Très faible |
| Sélecteur OR | Très faible |
| Fiche de propriétés | Faible |
| Poids visuel par références | Modéré |

Les noms d’étiquettes sont configurables ; changer la langue ne renomme jamais les pages Roam. Les types de notes et Reading List utilisent la même taille de **12px** en `[[lien de page]]` et en `#tag`, comme les tampons Q1, sans suivre la taille du corps du texte. Les personnes et secteurs suivent toujours le corps du texte. Les livres, personnes, secteurs, motive et rediscover conservent les clics natifs.

Les fiches de propriétés rassemblent les informations de la page. Le poids visuel ajuste la taille et l’accentuation des blocs selon leurs références, sans retirer les compteurs ni la navigation natifs.

<a id="fr-writing"></a>

### Écriture et code

| Composant | Impact sur les ressources |
| --- | --- |
| Mode machine à écrire et objectif | Très faible |
| Notes marginales | Faible |
| Limiter la hauteur du code | Très faible |
| Outils des blocs de code | Plus élevé |

Le mode machine à écrire garde la position d’écriture visible et propose un objectif. Les notes marginales se positionnent bloc par bloc, comme indiqué plus haut.

La limite de hauteur du code est de **420px** par défaut ; `0` la supprime. Le code long défile dans son bloc, dont le conteneur suit la largeur disponible. Les outils apparaissent automatiquement dans les notes nouvellement dépliées : début/fin, copie, recherche, remplacement courant et remplacement de toutes les occurrences du bloc. La recherche est littérale, sans distinction de casse, et conserve requête et position après fermeture. Les remplacements utilisent les transactions natives de l’éditeur et sont annulables.

<a id="fr-calendar"></a>

### Journal et calendrier

| Composant | Impact sur les ressources |
| --- | --- |
| En-tête du journal | Très faible |
| Actions rapides du calendrier | Très faible |
| Navigation clavier du calendrier | Très faible |
| Modèles quotidiens automatiques | Très faible |
| Carte thermique et aperçu du calendrier | Modéré |
| Reporter les TODO d’hier | Modéré |
| Capture rapide du calendrier | Plus élevé |

Raccourcis par défaut : G pour une date, T pour aujourd’hui, D pour le journal, flèches gauche/droite pour les jours voisins. Ils sont configurables et inactifs pendant la saisie.

L’icône du calendrier et Alt-clic sur une référence de date partagent la même présentation enrichie. La sélection de la date référencée conserve le comportement natif de Roam. Les aperçus disparaissent dès que le pointeur quitte la date, à la fermeture du calendrier ou à la perte de focus de la fenêtre.

Le bandeau du journal masque le séparateur natif en double au-dessus du jour ; le désactiver rétablit ce trait, y compris pour les dates chargées en défilant. La capture rapide ajoute notes, TODO ou plan à la date choisie.

**Modèles** : renseignez un UID de bloc ou `((une référence))` pour le SmartBlock de semaine, celui du week-end et le modèle du plan du jour. Les trois champs sont vides par défaut. Les deux modèles automatiques nécessitent l’extension SmartBlocks ; configurez-les avant de les activer. Ils s’exécutent au démarrage du composant si la page du jour existe, au plus une fois par jour et par modèle configuré.

Le plan du jour copie les enfants du bloc choisi et leur hiérarchie, sans exécuter les commandes SmartBlocks. Chaque modèle est copié au plus une fois par date, même après rechargement. Un modèle absent ou vide ne signale pas de réussite. Après une interruption, vérifiez le contenu partiel avant de compléter manuellement.

<a id="fr-media"></a>

### Lecture et médias

| Composant | Impact sur les ressources |
| --- | --- |
| Images et légendes | Faible |
| Fenêtre PDF | Faible |
| Lecteur vidéo | Plus élevé |

**Open** ouvre le bloc vidéo à droite ; **Theater** active le mode cinéma et **Notes** contrôle la vue native des horodatages. Roam gère la création via **Timestamp** et conserve la note comme commentaire natif. Folio ne crée pas de bloc enfant séparé sous la vidéo. L’édition dans Theater met à jour le même commentaire. Les modifications s’enregistrent automatiquement après une courte pause de saisie ; quitter le champ, Ctrl/Cmd＋Entrée ou **Enregistrer** lance immédiatement la sauvegarde. Les brouillons sont conservés lors du rafraîchissement de la liste et les écritures de chaque commentaire sont exécutées dans l’ordre. La réussite n’est indiquée qu’après relecture du texte dans le graphe. En cas d’échec, le brouillon est conservé avec l’action **Réessayer**. La suppression demande un second clic.

Images et légendes reprennent le style de lecture. La vue PDF élargie propose un lien de sortie et la touche Échap.

<a id="fr-insights"></a>

### Analyse des pages

| Composant | Impact sur les ressources |
| --- | --- |
| Statistiques de page | Modéré |
| Pouls de la page | Plus élevé |

La ligne de statistiques indique le nombre de mots, le temps de lecture estimé et d’autres informations. Le pouls de la page montre ses mentions récentes. Les deux composants se règlent séparément.

<a id="fr-review"></a>

### Tâches et révision

| Composant | Impact sur les ressources |
| --- | --- |
| Bureau éditorial | Plus élevé |
| 3 tâches aléatoires | Plus élevé |

**Editorial Desk** enrichit The Desk natif de Roam : filtres par type, plusieurs cartes épinglées, choix/retrait d’une une et neuf tris — manuel, récemment modifié, modifié depuis le plus longtemps, échéance, progression, type, longueur, activité, ancienneté sur le bureau. Commandes, indications et statistiques suivent les six langues de Folio ; les titres et types personnels restent inchangés. Il est distinct du plugin Reading Desk.

#### Random TODO 3 · Exclusions

Random TODO 3 effectue une sélection pondérée de trois TODO absents du journal du jour, pour retrouver des tâches inachevées.

Dans Tâches et révision, les pages exclues sont initialement `SmartBlock` et `roam/templates`. Saisissez un titre exact par ligne, modifiable ou complétable. Le filtre concerne la page contenant la tâche, y compris ses blocs enfants imbriqués ; une simple référence à cette page ne suffit pas à exclure une tâche.

L’exclusion des TODO avec une date future est activée par défaut. Désactivez-la pour inclure les tâches dont le texte lie explicitement une date de journal future. Les changements sont immédiats et enregistrés, même avec une liste vide ou un interrupteur désactivé. La réinitialisation restaure les deux pages et active l’option. Les tâches originales ne sont jamais modifiées.

<a id="fr-development"></a>

### Développement et vérification

Exécutez `npm run build` et `npm run check`. Les contrôles facultatifs `npm run check:layout` et `npm run check:interaction` nécessitent Playwright/Chromium ; utilisez `FOLIO_TEST_CHROMIUM` pour l’exécutable et `FOLIO_DOM_FIXTURE` pour un DOM exporté. Le fichier distribué est `extension.js` ; les sources sont dans `src/` et `source/`.

Consultez [CHANGELOG.md](CHANGELOG.md) pour l’historique. Les vérifications DOM locales et doublures d’API ne garantissent pas toutes les interactions dans les graphes réels ou sur tous les appareils.

<a id="fr-credits"></a>

### Remerciements et licence

Merci à **ESTHER不二 / esthersjw** et à [esther-design-system](https://github.com/esthersjw/esther-design-system), à l’origine de l’identité visuelle et du thème adapté de Folio. Le design original et le thème adapté relèvent de **CC BY-NC-SA 4.0** ; voir [LICENSE.md](LICENSE.md).

Merci à **Date Picker Enhance**, explicitement cité par le code original du calendrier, ainsi qu’à Roam Research et aux développeurs de la communauté pour les fonctions natives, interfaces et idées d’interaction. Aucun auteur ni lien de projet non vérifié n’est attribué par supposition.

Merci à **Azlen Elza** et au [thème Zenith](https://github.com/azlen/roam-themes#zenith), dont les pages côte à côte et la lecture épurée ont inspiré Folio.

[Retour aux langues](#languages)

---

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

Versionsverlauf: [CHANGELOG.md](CHANGELOG.md). Lokale DOM- und API-Testdouble-Prüfungen bestätigen nicht jede Interaktion in echten Graphen oder auf allen Geräten.

<a id="de-credits"></a>

### Dank und Lizenz

Danke an **ESTHER不二 / esthersjw** und [esther-design-system](https://github.com/esthersjw/esther-design-system), die Grundlage von Folios Gestaltung und angepasstem Themencode. Original und angepasstes Thema stehen unter **CC BY-NC-SA 4.0**; siehe [LICENSE.md](LICENSE.md).

Danke an **Date Picker Enhance**, das der ursprüngliche Kalendercode ausdrücklich als Referenz nennt, sowie an Roam Research und die Community für native Funktionen, Schnittstellen und Interaktionsideen. Unbestätigte Namen und Projektadressen werden nicht geraten.

Danke an **Azlen Elza** und das [Zenith-Theme](https://github.com/azlen/roam-themes#zenith), dessen nebeneinander angeordnete Seiten und konzentriertes Lesedesign Folio inspiriert haben.

[Zur Sprachauswahl](#languages)

---

<a id="es"></a>

## Español

[Presentación](#es-overview) · [Barra derecha](#es-sidebar) · [Notas marginales](#es-asides) · [Notas de vídeo](#es-video) · [Ventana de ajustes](#es-settings) · [Instalación](#es-install) · [Apariencia y fuentes](#es-appearance) · [Interfaz y navegación](#es-navigation) · [Etiquetas y contenido](#es-content) · [Escritura y código](#es-writing) · [Diario y calendario](#es-calendar) · [Lectura y medios](#es-media) · [Análisis de páginas](#es-insights) · [Tareas y revisión](#es-review) · [Desarrollo](#es-development) · [Créditos](#es-credits)

<a id="es-overview"></a>

### Presentación

**Páginas con estilo de revista para Roam y herramientas cotidianas que puedes usar por separado.**

Colores de papel cálidos, títulos claros y márgenes cómodos invitan a leer y escribir durante más tiempo. Folio también armoniza el diario, las barras laterales, las etiquetas, las propiedades y algunas extensiones de la comunidad, además de la IA nativa de Roam y The Desk.

**Más plugins independientes**

- **Reading Desk** — Reúna lecturas, anotaciones e ideas para convertir lo que lee en conocimiento que perdura.
- **Version Studio** — Compare versiones de sus notas, siga la evolución de sus ideas y reescriba con confianza.

Estos plugins se descargan e instalan por separado; no están incluidos en Folio.

Un interruptor controla el tema; los componentes activos conservan los colores nativos al desactivarlo. Los 29 componentes se organizan en siete grupos funcionales con navegación a la izquierda. Cada uno conserva su interruptor y nivel estimado de recursos. Apariencia, nombres de etiquetas, altura del código y atajos siguen en sus secciones correspondientes. Los niveles no miden la CPU en tiempo real.

Las instalaciones nuevas activan tema y componentes. Desactivar un componente libera sus recursos. La desactivación temporal de Folio permite compararlo con Roam nativo.

<a id="es-sidebar"></a>

### Convierte la barra derecha en un espacio de trabajo

Las notas de la barra derecha se organizan en tarjetas que puedes recorrer horizontalmente mientras mantienes visible la página principal. Cada tarjeta conserva su desplazamiento y los controles nativos para abrir, plegar y cerrar contenido.

La entrada a la IA nativa está en la barra superior principal; el chat permanece en una tarjeta a la derecha, con historial, conversaciones y creación de chats. Las tarjetas de notas habituales conservan su funcionamiento.

<a id="es-asides"></a>

### Dale un lugar a las ideas complementarias

Coloca bloques hijos seleccionados en el margen izquierdo o derecho para mantener ejemplos y aclaraciones junto al argumento. Elige **Aside: Left** o **Aside: Right** en el menú de la viñeta, o añade `#.aside-left` o `#.aside`. Los demás hijos conservan el esquema; si falta espacio, las notas vuelven al texto.

La posición sigue el ancho nativo de Roam y el espacio disponible. Las anotaciones de Reading Desk son independientes; usa un solo método por bloque padre para evitar solapamientos.

<a id="es-video"></a>

### Mira vídeos y conserva tus ideas al lado

El modo Theater reúne el vídeo y los comentarios nativos con marcas de tiempo en la página principal. **Timestamp** usa la creación de comentarios nativa de Roam. Folio muestra esos comentarios bajo el vídeo y localiza la nueva entrada. Pulsa la marca para volver al momento; las ediciones se guardan en el mismo comentario. **Open** abre el bloque original a la derecha.

Las ventanas más bajas y estrechas limitan la altura del vídeo para dejar espacio a las notas. Las grandes conservan márgenes laterales, con vídeo y notas alineados.

<a id="es-settings"></a>

### Ventana de ajustes

El botón de deslizadores de la barra superior abre una ventana compacta de ajustes. Arrástrala por el título mientras sigues usando la página. Tanto allí como en los ajustes completos puedes ocultar o recuperar el botón, visible por defecto. Los 29 componentes se distribuyen en siete grupos, más apariencia; tema y componentes tienen controles independientes. Los niveles de recursos son estimaciones.

<a id="es-install"></a>

### Instalación

1. Desactiva los antiguos `roam/css` del tema y los `roam/js` relacionados para evitar duplicados.
2. Descomprime el ZIP.
3. Abre Settings → Roam Depot → Developer Mode → Load unpacked extension.
4. Selecciona la carpeta que contiene directamente `extension.js`.
5. Elige idioma y opciones en Extension Settings → Folio. Auto sigue el idioma del navegador.

<a id="es-appearance"></a>

### Apariencia y fuentes

Introduce el `font-family` CSS de una fuente instalada, no un archivo ni una URL; vacío restaura los valores predeterminados. Puedes configurar por separado texto y títulos/notas marginales. El lema admite dos líneas de 24 unidades: carácter latino = 1; carácter chino, de ancho completo o emoji = 2.

<a id="es-navigation"></a>

### Interfaz y navegación

| Componente | Consumo de recursos |
| --- | --- |
| Mantener visibles los controles laterales | Muy bajo |
| Ocultar iconos superiores | Muy bajo |
| Ocultar elementos de la barra izquierda | Muy bajo |
| Compatibilidad de menús Workbench | Muy bajo |
| Mostrar la barra solo al desplazarse | Muy bajo |
| Botón de grafo de página | Bajo |
| Tarjetas de la barra derecha | Bajo |

Se conservan el espaciado nativo de los menús, el ajuste de columnas Query/Data Table y las interacciones de los enlaces de Roam.

La función nativa «Adjust width of the main page» de Roam controla el ancho del texto. Folio no añade niveles ni fija el ancho del artículo. Las columnas de Query/Data Table y los enlaces siguen siendo nativos.

<a id="es-content"></a>

### Etiquetas y contenido

| Componente | Consumo de recursos |
| --- | --- |
| Etiquetas y sellos especiales | Muy bajo |
| Selector OR | Muy bajo |
| Ficha de propiedades | Bajo |
| Peso visual por referencias | Moderado |

Los nombres de etiquetas son configurables; cambiar el idioma no renombra páginas de Roam. Los tipos de notas y Reading List usan los mismos **12px** en `[[enlaces de página]]` y `#etiquetas`, como los sellos Q1, sin aumentar con el cuerpo del texto. Personas y sectores sí siguen el tamaño del texto. Libros, personas, sectores, motive y rediscover conservan los clics nativos.

Las fichas de propiedades reúnen la información de la página. El peso visual ajusta tamaño y énfasis según las referencias del bloque, conservando contadores y navegación nativos.

<a id="es-writing"></a>

### Escritura y código

| Componente | Consumo de recursos |
| --- | --- |
| Modo máquina de escribir y objetivo | Muy bajo |
| Notas al margen | Bajo |
| Limitar la altura del código | Muy bajo |
| Herramientas de bloques de código | Más alto |

El modo máquina de escribir mantiene visible la posición actual y ofrece un objetivo de escritura. Las notas marginales se colocan por bloque hijo, como se explica arriba.

La altura del código está limitada a **420px** por defecto; `0` elimina el límite. El código largo se desplaza dentro del bloque, cuyo contenedor se adapta al espacio. Las herramientas aparecen al desplegar notas nuevas: inicio/final, copia, búsqueda, reemplazo actual y de todas las coincidencias del bloque. La búsqueda es literal y no distingue mayúsculas; conserva consulta y posición al salir o reabrir. Los reemplazos usan transacciones nativas del editor y se pueden deshacer.

<a id="es-calendar"></a>

### Diario y calendario

| Componente | Consumo de recursos |
| --- | --- |
| Cabecera de nota diaria | Muy bajo |
| Acciones rápidas del calendario | Muy bajo |
| Navegación del calendario por teclado | Muy bajo |
| Plantillas diarias automáticas | Muy bajo |
| Mapa de calor y vista previa del calendario | Moderado |
| Trasladar TODO de ayer | Moderado |
| Captura rápida del calendario | Más alto |

Atajos iniciales: G para saltar a una fecha, T para hoy, D para notas diarias y flechas izquierda/derecha para días vecinos. Son configurables y no actúan al escribir.

El icono del calendario y Alt-clic en una referencia de fecha comparten el mismo diseño mejorado. La selección de la fecha referenciada conserva el comportamiento nativo de Roam. Las vistas previas desaparecen al sacar el puntero de la fecha, cerrar el calendario o perder el foco de la ventana.

La cabecera diaria oculta la línea nativa duplicada de encima; desactivarla restaura la línea, también en fechas cargadas al desplazarse. La captura rápida añade notas, TODOs o un plan a la fecha elegida.

**Plantillas**: introduce un UID de bloque o `((una referencia))` para SmartBlock entre semana, de fin de semana y plan de hoy. Los tres campos están vacíos por defecto. Los modelos automáticos requieren SmartBlocks; configúralos antes de activarlos. Se ejecutan al iniciar el componente si existe la página de hoy, como máximo una vez al día por plantilla configurada.

El plan copia los bloques hijos y su jerarquía, sin ejecutar comandos SmartBlocks. Cada plantilla se copia como máximo una vez por fecha, incluso tras recargar. Una plantilla inexistente o vacía no anuncia éxito. Si se interrumpe, revisa el contenido parcial antes de completarlo manualmente.

<a id="es-media"></a>

### Lectura y medios

| Componente | Consumo de recursos |
| --- | --- |
| Imágenes y pies | Bajo |
| Ventana PDF | Bajo |
| Lector de vídeo | Más alto |

**Open** abre el bloque de vídeo a la derecha; **Theater** activa el modo cine y **Notes** controla la vista nativa de marcas. Roam gestiona la creación mediante **Timestamp** y guarda la nota como comentario nativo. Folio no crea otro bloque hijo del vídeo. La edición en Theater actualiza el mismo comentario. Los cambios se guardan automáticamente tras una breve pausa al escribir; salir del campo, Ctrl/Cmd＋Intro o **Guardar** inicia el guardado de inmediato. Los borradores se conservan al actualizar la lista y las escrituras de cada comentario se realizan en orden. Solo se indica el éxito tras volver a leer el texto guardado en el grafo. Si falla, se conserva el borrador con la acción **Reintentar**. Eliminar requiere un segundo clic.

Las imágenes y los pies comparten el estilo de lectura. La vista PDF ampliada ofrece un enlace de salida y Esc.

<a id="es-insights"></a>

### Análisis de páginas

| Componente | Consumo de recursos |
| --- | --- |
| Estadísticas de página | Moderado |
| Pulso de página | Más alto |

La fila de estadísticas muestra palabras, tiempo de lectura estimado y otros datos. El pulso de la página muestra menciones recientes. Ambos componentes se pueden activar por separado.

<a id="es-review"></a>

### Tareas y revisión

| Componente | Consumo de recursos |
| --- | --- |
| Mesa editorial | Más alto |
| 3 tareas aleatorias | Más alto |

**Editorial Desk** amplía The Desk nativo de Roam con filtros por tipo, varias tarjetas fijadas, selección/retirada de una noticia principal y nueve órdenes: manual, edición reciente, edición más antigua, fecha límite, progreso, tipo, longitud, actividad y mayor antigüedad en Desk. Controles, ayudas y estadísticas siguen los seis idiomas de Folio; títulos y tipos propios no cambian. Es distinto del plugin Reading Desk.

#### Random TODO 3 · Exclusiones

Random TODO 3 selecciona de forma ponderada tres TODOs que aún no aparecen en la nota diaria de hoy, para redescubrir tareas pendientes.

En Tareas y revisión, las páginas excluidas inicialmente son `SmartBlock` y `roam/templates`. Introduzca un título exacto por línea; puede modificar o añadir entradas. Se filtra la página que contiene la tarea, incluidos sus bloques hijos anidados. Una simple referencia a esa página no excluye la tarea.

La exclusión de TODO con fechas futuras está activada por defecto. Desactívela para incluir tareas cuyo texto enlace explícitamente una fecha futura de nota diaria. Los cambios son inmediatos y se guardan, incluso con una lista vacía o la opción desactivada. Restablecer recupera las dos páginas y activa la opción. No se modifican las tareas originales.

<a id="es-development"></a>

### Desarrollo y validación

Ejecuta `npm run build` y `npm run check`. Las pruebas opcionales `npm run check:layout` y `npm run check:interaction` requieren Playwright/Chromium; `FOLIO_TEST_CHROMIUM` indica el ejecutable y `FOLIO_DOM_FIXTURE` un DOM exportado. `extension.js` es el archivo distribuible; las fuentes están en `src/` y `source/`.

Historial en [CHANGELOG.md](CHANGELOG.md). Las comprobaciones locales del DOM y con dobles de API no garantizan toda interacción en grafos reales o en todos los dispositivos.

<a id="es-credits"></a>

### Agradecimientos y licencia

Gracias a **ESTHER不二 / esthersjw** y [esther-design-system](https://github.com/esthersjw/esther-design-system), base del diseño visual y del tema adaptado de Folio. El original y el tema adaptado siguen **CC BY-NC-SA 4.0**; consulta [LICENSE.md](LICENSE.md).

Gracias a **Date Picker Enhance**, citado expresamente por el código original del calendario, y a Roam Research y su comunidad por las funciones nativas, interfaces e ideas de interacción. No se atribuyen por suposición autores o direcciones de proyectos sin confirmar.

Gracias a **Azlen Elza** y al [tema Zenith](https://github.com/azlen/roam-themes#zenith), cuyas páginas en paralelo y diseño de lectura concentrada inspiraron Folio.

[Volver a los idiomas](#languages)

---

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

Cronologia in [CHANGELOG.md](CHANGELOG.md). Le verifiche locali del DOM e con sostituti API non certificano ogni interazione nei grafi reali o su tutti i dispositivi.

<a id="it-credits"></a>

### Ringraziamenti e licenza

Grazie a **ESTHER不二 / esthersjw** e a [esther-design-system](https://github.com/esthersjw/esther-design-system), base del design visivo e del tema adattato di Folio. L’originale e il tema adattato seguono **CC BY-NC-SA 4.0**; vedi [LICENSE.md](LICENSE.md).

Grazie a **Date Picker Enhance**, citato esplicitamente dal codice originale del calendario, e a Roam Research e agli sviluppatori della comunità per funzionalità native, interfacce e idee d’interazione. Non vengono attribuiti per supposizione autori o indirizzi di progetto non verificati.

Grazie ad **Azlen Elza** e al [tema Zenith](https://github.com/azlen/roam-themes#zenith), le cui pagine affiancate e il design dedicato alla lettura hanno ispirato Folio.

[Torna alle lingue](#languages)
