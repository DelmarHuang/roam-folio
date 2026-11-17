# 1.4.28 · 2026-11-18

- Carry Reference and Move preserve the original ancestor paths and sibling order. Ordinary ancestors are represented once as references; unrelated sibling blocks stay behind.
- Outermost unfinished TODOs retain all descendants, including DONE tasks and explanatory notes. Only their roots move, so nested TODOs are never extracted twice.
- Move Undo restores original parents/order and removes generated context references only when still empty, unchanged and unreferenced. User edits are retained.
- Added carry-context regression scenarios. No layout or Reading Desk changes in this release.

# 1.4.27 · 2026-11-18

- Reference today now creates block references in the original subtree order, including plain-text children. Nested TODOs are not duplicated at the top level; original blocks stay in place. Move is unchanged.
- On main article/daily rows with a pin, reclaim only the empty native reference placeholder and its separator. Keep actual reference counters, pin controls and comment reservation.
- Verified reference nesting, unchanged originals, Move/Undo regression and pin-row CSS selector scope. Reading Desk is unchanged.

# 1.4.26 · 2026-11-17

- Calendar Move now moves only outermost TODO candidates, preserving nested TODOs and intervening non-task blocks. Original locations are captured before moving so Undo restores sibling order.
- Removed previous/next-day keyboard navigation. G / T / D and custom calendar keys require the new “Enable calendar keyboard shortcuts” switch (off by default, including upgrades). Selected blocks and selected text retain their keys.
- Folio listens to Reading Desk feature ownership and yields its legacy comment rail / Mark handlers itself. Startup preserves Reading Desk comment elements.
- Added reviewer regression tests; run `npm ci`, `npm run build`, `npm run check`, and `npm run check:review`.

# 1.4.25 · 2026-11-15

- 修复影院笔记只在失焦时保存、列表刷新可能覆盖未保存文字的问题。按原评论 UID 保留草稿；输入暂停后自动保存，失焦、Ctrl/Cmd＋Enter 或“保存”立即提交。
- 同一评论的写入依次执行，读回图谱确认后才显示保存成功；失败时保留草稿并提供“重试”。六语言操作说明同步更新。
- Timestamp 仍完整沿用 Roam 原生评论创建流程；编辑只更新原评论，不另建或移动块。本次不调整其他功能或布局。

# 1.4.24 · 2026-11-15

- 撤回 1.4.23 自行创建视频子块的错误修改。Timestamp 完整交回 Roam 原生评论创建流程；Folio 仅观察新增评论，在影院区展示并编辑同一条评论。
- 移除 Folio 自行读取播放时间和拦截 Timestamp 点击的逻辑。既有笔记不自动迁移或删除；其他功能保持 1.4.23。
- 六语言 README 同步改正视频笔记的保存方式。

# 1.4.23 · 2026-11-15

- 影院模式点击 Timestamp 在视频下方创建并聚焦笔记，不再触发原生右侧栏添加流程；新增块存为原视频块的子块，显式 Open 行为保留。
- 代码容器随所在块收缩，长行在编辑器内部滚动；窄卡片的代码工具栏可换行。不改变 Roam 原生正文宽度档位。
- 移除自动日记和“今日计划”中的私人模板 UID，改为三项默认留空的模板设置，六语言提示与配置一致。复制前检查来源，成功后记录日期，避免刷新重复写入；失败不显示成功。
- Editorial Desk 的排序、筛选、头条、置顶、统计和提示补齐六语言；卡片内容、排序与筛选逻辑保留。
- README 按功能模块展示六种语言及全部 29 个组件，以右侧栏、页边旁注、视频笔记为三个重点，并补充 Zenith 致谢。移除旧测试报告与文档链接。

# 1.4.22 · 2026-11-15

- 修复 TODO/DONE 复选框与首行文字的垂直对齐，并让外层宽度与现有 14px 方框一致，避免贴住文字。仅补充任务复选框 CSS，不改正文行距、页面宽度或点击行为。

# 1.4.21 · 2026-11-14

- 修复共享观察器丢失新增节点记录，代码块工具随新展开的笔记自动安装；其他依赖新增节点的组件也能收到原始记录。
- 代码块搜索按块保留查询词与位置，工具栏或编辑器重绘不再从首项重新开始。
- 新增“替换当前项”和“全部替换”，仅处理当前代码块，使用编辑器原生事务；支持空替换、字面特殊字符和只读保护，六种语言匹配。

# 1.4.20 · 2026-11-13

- 日记刊头显示时，隐藏该日记页上方重复的原生细分隔线；关闭刊头后自动恢复。复用现有开关，新加载日期自动匹配，无新增设置或监听。

# 1.4.19 · 2026-11-12

- 恢复 Roam 原生正文宽度与水平间距；移除 Folio 自定义档位映射和固定宽度。旁注随原生宽度和侧栏空间变化重新排版，空间不足时回到正文。

# 1.4.18 · 2026-11-12

- AI、Folio 设置入口与右侧栏开合按钮统一为移入时黄色背景，点击后清除背景，再次移入恢复提示。不改变点击动作或布局；AI 打开时仍为蓝色星星。

# 1.4.17 · 2026-11-12

- 顶栏 Folio / AI 按钮组不再压缩裁切；关闭主题时也保留完整按钮位置。
- Random TODO 3 组件在主题开启和关闭时都使用同一个短三点骰子图标，原点击与任务逻辑不变。
- 自有设置浮窗补齐独立的设置颜色变量，支持主题关闭、原生亮色/暗色和临时停用样式。
- 座右铭保存值与输入框使用原文及原有 24 单位长度限制；显示不再按主题切换瞬间的旧字体/旧宽度截短，保留 CSS 边界防溢出。
- 压缩包内根目录固定为 Folio。

# 1.4.16 · 2026-11-12

- AI 原生输入区取消置顶插件额外的 30px 正文缩进，使圆点回到原生位置，与 Read 左侧图标使用同一侧边距；提示文字恢复原生位置。其他块的置顶功能不变。
- 顶栏设置面板改为非模态浮窗，可拖动标题栏移动；背景页面保持可操作，点击页面不会关闭面板。
- 浮窗在当前会话记住位置，窗口缩小或内容尺寸改变时自动保持在可见范围内；保留紧凑尺寸、六语言和原有设置行为。

# 1.4.15 · 2026-11-12

- 仅在原生 AI 输入区存在侧栏置顶插件的 30px 缩进时，将 Ask anything 提示从原生 27px 对齐至实际文字起点 57px。圆点、正文、字号和其他内容不变；没有该置顶插件时继续使用原生位置。

# 1.4.14 · 2026-11-12

- 仅让原生 AI 输入框的底部操作栏继承父框左右下圆角，避免底栏背景盖住左下角边框。保留原生 overflow:visible，其他样式与功能不变。

# 1.4.13 · 2026-11-12

- 正文宽度相关文件恢复为 1.4.7 原文；不新增宽度算法或改变原有侧栏分配。
- AI 历史弹窗改用主题底色，选中话题去掉白色底框；加号紧跟话题列表，保留原生新建会话逻辑。
- 原生聊天正文 overscroll-behavior 在横轴改为 auto，允许已有回答时继续横向滚动卡片带；竖轴保持原生行为。
- AI 开启状态仅以蓝色星星表示，不使用填充高亮。
- 顶栏设置弹窗最大宽度 560px，高度不超过 620px / 76dvh，内容在内部滚动。功能分组改为紧凑排列，说明保留在完整设置页及标题提示中。
- 去掉弹窗自加的下分隔线，保留单层原生分隔线；完整 Extension Settings 布局不变。

# 1.4.12 · 2026-11-12

- AI 卡片使用独立工具栏位置，历史、话题、新建与关闭操作随卡片一起滚动；不增加全局导航行、不修改普通卡片的位置。
- 隐藏已代理 AI 入口的原生弹窗外层，避免空包装在 display:contents 导航下继续占用侧栏一行。
- 设置弹窗使用现有设置页的容器、标题、说明与 Blueprint 开关样式；设置窗口内的更新不再调度整页组件扫描。
- AI 转发不再等待侧栏打开动画 Promise；原生按钮出现后即可转发，取消逐帧等待循环。
- 原有正文宽度与留白数值不变，仅提高已有 width/max-width 规则的优先级，避免被原生规则覆盖；保留 small/medium/large/full 选项。
- 中英法德西意六语言、视频、日历、标签、随机任务和原有侧栏开关逻辑保留。

# 1.4.11 · 2026-11-12

- 撤回 1.4.10 中占据全局导航行的 AI 会话栏及侧栏视口高度覆盖；普通卡片继续使用 1.4.7 原布局。
- AI 会话栏按其卡片位置定位，随侧栏横向滚动，不再持续占据普通卡片上方；不搬动原生 React 节点。
- 新增顶栏入口收纳到可收缩容器，避免给主区域增加最小内容宽度约束。正文宽度、内边距及主体布局 CSS 与 1.4.7 完全一致。
- 保留已授权的设置入口、AI 局部配色和 The Desk 搜索图标修复；其他功能不变。

# 1.4.10 · 2026-11-12

- 基于恢复后的 1.4.7：主顶栏新增原生 AI 入口代理，保留原生节点与点击逻辑；恢复 AI 会话工具栏并局部适配输入区、发送按钮与选择菜单。
- 新增滑杆图标打开全部 Folio 设置；原设置页和弹窗的首项提供默认开启的入口开关，支持中英法德西意六种语言。
- 原生 The Desk 搜索图标向右内缩，调整输入文字留白；不修改独立 Reading Desk 插件。
- 视频、正文宽度、标签、日历、随机任务、原有侧栏切换逻辑和其他菜单间距沿用 1.4.7。

# 1.4.7 · 2026-11-11

- 统一顶部图标和 Alt＋日期引用的增强日历布局：隐藏重复快捷项，快速记录与遗留按钮绑定日历本体，不再误插入原生快捷菜单；保留原生引用日期替换回调。
- 日期悬浮预览在移出日期、关闭日历、失焦、滚动或 Esc 时清理，模块停用时取消待执行帧并移除监听。
- 补齐日历按钮、状态提示和设置标签字段的六语言翻译；切换语言时仅刷新已启用的日历模块。页面标签内容和页面名称不变。
- 六份 README 顶部增加简短产品介绍与 Reading Desk、Version Studio 推荐；更新记录仍放在独立 CHANGELOG。没有加入未经核实的下载地址。
- 全部 CSS、标签渲染定义、组件开关及非日历脚本与 1.4.6 一致。

# 1.4.6 · 2026-11-09

- Random TODO 3 默认排除 SmartBlock、roam/templates 页面下的任务，新增可编辑的逐行页面排除列表，按完整页面名匹配。
- 新增“排除带未来日期的 TODO”开关，默认开启；排除列表与开关即时生效、保存并支持恢复默认，空列表和关闭状态均可保留。
- 29 个组件改为七个功能分组及侧边导航，各项保留原有开关和资源等级。标签名称、代码高度与导航快捷键收纳到对应功能区。
- 对应分组、字段、提示与 README 均提供中英法德西意六种语言；不修改页面样式、影院布局或其他组件实现。

# 1.4.5 · 2026-11-09

- 小屏影院（视口不超过 1800×1000px）：视频限高居中，笔记卡片使用主区域全宽，笔记从顶部紧凑排列；侧栏开关不改变该模式。
- 较大视口恢复原有视频与笔记等宽居中、两侧留白规则。
- 其他组件、交互、圆点修复与样式保持原样。

# 1.4.4 · 2026-11-09

- 仅调整影院尺寸：按影院容器实际高度限制视频，保留多行笔记空间；不再在侧栏收起、主区域变宽时挤压笔记。
- 保留圆点修复，其他运行逻辑和样式均未改动。

# 1.4.3 · 2026-11-09

- 仅在不超过 1600px 的视口内修正原生视频时间戳列表圆点的横向缩进，覆盖正文内和 portal 列表。
- 小屏影院减少视频下方的高度预留和外边距，让视频与时间戳笔记区更宽；超过 1600px 的影院规则保持原样。
- 视频原始脚本与样式、Open 行为、标签、侧栏和菜单均未改动。

# 1.4.3-rc11 · 2026-11-09

- 仅将笔记类型与 Reading List 标签文字改为和 Q1 印章一致的 12px；保留双链/井号一致性、自然宽度、点击与现有外观属性。
- README 提供简体中文、English、Français、Deutsch、Español、Italiano 六种完整版本，顶部列出全部语言并互相链接；补齐来源致谢与许可证说明。
- 其他运行逻辑和布局均未修改，版本号除外。

# 1.4.3-rc10 · 2026-11-09

- 修正视频工具栏 Open 实际触发编辑的问题：单独调用右侧栏 open/addWindow，支持正文和影院视图、鼠标和键盘；其他视频按钮处理逻辑不变。
- 书本、人物、行业、motive、rediscover 的文字区域恢复原生点击命中。
- 人物、行业标签字号跟随正文；笔记类型及 Reading List 的双链与井号标签使用一致正文大小和自然宽度。
- 菜单、正文布局、侧栏布局及视频 CSS 均未修改。

# 1.4.3-rc9 · 2026-11-08

- 从本轮完整源码复制 Video Reader 的全部 CSS、JavaScript 和通用媒体/时间戳样式，不再只替换脚本。
- 修复块内文字与引用计数之间的分隔区：统一为 8px，正文和编辑器获取剩余宽度，不随侧栏 spacing class 重新保留比例空白。
- 原生侧栏打开按钮回到正常布局位置；关闭按钮在顶部栏使用单独预留位置，不再让两种状态都悬浮到插件图标上。
- 撤掉 Folio 对原生菜单、命令列表、分组标题的行高、padding、margin、gap 等几何覆盖，由 Roam 接管，不再统一硬设菜单行距。
- 增加使用用户导出 DOM 的 Chromium 布局回归：收起侧栏不缩窄文字、恢复宽度、编辑器宽度一致、引用计数间隔、按钮互斥与不重叠、原生菜单几何。

# 1.4.3-rc8 · 2026-11-08

- 视频实现完整复制本轮 Pasted text.txt 中的 JavaScript，保留其全部行为与原观察器；恢复与该实现匹配的既有视频 CSS。
- 座右铭限制改为 24 单位：中文/全角字符/表情计 2、英文计 1；混排逐字计算；输入框、粘贴、输入法提交与保存共用同一限制。
- 正文移除原生 sidebar spacer 的不对称留白与文章居中的叠加，仅保留一层居中；保留原生宽度档位与外层拖宽。
- 块菜单恢复实际 Roam 原生 Blueprint 几何：普通行 padding 5px 7px、line-height 20px；large 行 padding 9px 7px、line-height 22px。H1/H2/H3、对齐按钮及分隔线只调整主题颜色。
- 左侧栏 232px 固定宽度已确认来自 Roam 原生 CSS，本轮没有另加锁宽或新拖拽功能。

# 1.4.3-rc7 · 2026-11-08（候选，等待实际 Roam 验收）

- 修正 rc6 恢复子块旁注时误带的评论计数脚本；删除所有评论投影生成器，并在升级时清理旧生成节点。
- 撤回 rc6 覆盖 Roam 主页面 flex、宽度和左右留白的规则；撤销右侧栏强制均分 flex，交还原生布局与调整手柄。
- 原生侧栏开关用同一位置的两个原生按钮互斥显示，不复制或改接点击事件。
- 恢复原生视频 Open 按钮；移除后来新增的外部链接按钮。四个原生按钮统一文字与对齐，影院中的 Open 也显示文字。
- 移除自制影院时间戳笔记面板与全部查写/删除代码；Notes 使用 Roam 原生备注列表。
- 取消右侧卡片之间按整页补空白的间距，保留 12px 卡片间隔。
- 座右铭每行最多 24 字，输入时再按实际侧栏宽度测量限制，字体和侧栏宽度变化时重新排版显示。
- 菜单间距交还 Blueprint 原生样式；底部标题级别、对齐按钮与分隔线仅换主题颜色。
- 搜索仅在当前行显示原生式蓝灰底；移除黄色、紫色背景和额外选中边框。

# 1.4.3-rc6 · 2026-11-08

- 将视频 Open 与原生三按钮统一字体、尺寸和颜色，并定位在标题一行；保留原生按钮所属节点。
- 删除单列 Query 特判列宽，恢复原生宽度；表头内边距纳入测量宽度，避免末列按钮被裁切。
- 删除纸张老化、预览、mark it 及相关设置与运行代码。
- 座右铭输入、粘贴、输入法提交与保存均强制最多 40 字。
- 增加独立的代码高度限制开关；关闭时清除最大高度。
- 恢复子块左右旁注与其右键菜单；不恢复评论侧轨。
- 统一快捷菜单行高与间距、日历四个动作按钮的胶囊样式。
- 日历展开时在绘制前挂载左栏与动作，移除左栏 50ms 轮询。
- 搜索悬停仅高亮当前行；键盘选择使用淡紫背景与左侧竖线。
- PDF 退出按钮放在独立浮层，PDF.js 节点渲染不再唤醒无关模块。
- 主内容用弹性布局接收侧栏释放的空间；折叠设置组占满设置行并左对齐。

# 1.4.3-rc5 · 2026-11-08

左栏六项导航统一字体、字重、行高、图标列及实心图标风格，以既有Desk为基准。

# 1.4.3-rc4 · 2026-11-08

右侧栏关闭时仅显示原生展开按钮，打开时仅显示原生收起按钮。修复固定显示样式同时显示两个原生控件的问题。

# 1.4.3-rc3 · 2026-11-08

原生右栏开关固定在主页面顶栏；卡片关闭图标恢复16px并回归右端。Definition、Checklist及命名空间图标独立居中。新增原生开关测量与清理检查。

# 1.4.3-rc2 · 2026-11-08

只修复用户本轮指定的侧栏与图标对齐问题。

1. 删除新增的左右侧栏开关，固定显示原生按钮。
2. 消除24px额外工具行，统一顶栏中心。
3. 将滚动区域从外层卡片移入正文，恢复被裁切的原生PIN及筛选。
4. 对齐状态印章、Notes及命名空间标签的图标与文字。

此前修订保留。
