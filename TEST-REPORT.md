# 1.4.20 日记分隔线

- 唯一样式变化：限定主页面日记列表中标题直接带 data-mag-masthead 的日期卡片，将原生顶部边框颜色设为透明；保留边框占位与页面间距。
- CSS 随每张日期页的刊头标记匹配；关闭日记刊头会移除标记，恢复原生分隔线。未添加开关、脚本或监听。
- 构建与现有回归检查通过；未在实际 Roam 客户端验证。其他功能和正文宽度保持 1.4.19。

# 1.4.19 原生宽度与动态旁注

- 删除正文固定 width/max-width、水平 margin/padding 覆盖及 Folio 档位映射，由 Roam 原生控制；仅保留原有垂直间距。
- 仅对有旁注的正文及可用空间容器观察宽度变化，按帧合并重排；卸载时清理。无图谱写入。
- 构建、既有回归、六语言浮窗交互及 native-width-check 旁注几何模拟均通过；当前浏览器连接超时，未宣称客户端实测。

# 1.4.18 顶栏悬浮反馈

- 仅针对 AI、Folio 设置入口和 data-folio-sidebar-role 开合按钮统一悬浮底色；点击只写入临时反馈标记，不拦截原点击动作。
- 移出/再次移入清理标记；卸载清理监听和所有临时标记。无新增观察器、定时器或图谱写入。
- npm run build、npm run check、六语言 React/jsdom 检查通过；新增点击清除、移出重置和卸载清理检查。原有会话转发、浮窗拖动与设置开关回归保留。
- 正文、侧栏尺寸、视频、座右铭、任务算法和其他图标样式不变。压缩包根目录仍为 Folio。

# 1.4.17 主题关闭兼容验证

- 现场测得顶栏按钮组宽约 49.5px，而两个按钮各宽 30px；overflow:hidden 裁切 AI 按钮。改为不收缩、溢出可见，保留两个实际按钮的正常 flex 位置。
- 现场设置里两条完整座右铭仍存在，伪元素却只显示截短文字；未重置或改写用户保存的值。去掉编辑和渲染中依赖瞬时字体/宽度的截断，保留 24 单位限制和显示容器防溢出。
- Random TODO 的原生主题样式从既有 Folio 三点骰子规则复用；不替换按钮节点或点击回调。
- 浮窗位于 .roam-app 外，补齐自有 --set-* 变量，并在原生模式提供亮色/暗色局部令牌；样式停用时仍可读。rebuildCss 同步浮窗模式。
- npm run build、npm run check 和六语言 React/jsdom 检查通过；增加 native 模式、暗色局部令牌、按钮组不裁切以及座右铭完整值的断言。原有拖动、开关同步、原生 AI、PDF、日历及随机任务回归继续通过。
- 正文宽度、视频、AI 输入区、普通侧栏及随机任务算法未改；新增 CSS 仅涉及 Random TODO 图标组件及自有顶栏/浮窗。
- 压缩包中唯一根目录为 Folio，版本号仍保留在插件信息与更新记录中。

验证边界：新版尚未安装到实际图谱；现场检查的是已安装版本，修复后的验证为源码和 DOM/React 检查。

# 1.4.16 浮窗与 AI 输入区对齐

- 仅在 AI 原生 composer 的 pin host 上取消额外 padding-left；撤回 1.4.15 的 ghost left:57px，让圆点与提示文字使用原生位置。未修改普通笔记的置顶样式。
- 顶栏设置使用 dialog.show()，不调用 showModal()；无背景遮罩，点击页面不关闭。标题栏使用 Pointer Events / pointer capture 拖动，关闭按钮不启动拖动。
- 面板在当前会话保留位置；窗口 resize 和面板尺寸改变时夹紧在视口内。关闭或卸载时清理观察器和 resize 监听。
- npm run build、npm run check、六语言 React/jsdom 检查通过。新增验证：show 而非 showModal、aria-modal=false、拖动位移、窗口缩小后的边界修正、点击背景保持打开；继续覆盖全部设置组、开关同步、原生 AI 回调、Esc/卸载、PDF 调度等。
- 与 1.4.15 比对，CSS 只改变 AI 输入区缩进和自有设置浮窗；其他模块源文件及正文宽度相关 CSS 保持一致。

验证边界：实际通过的是 DOM/React 和几何替身测试；本轮现场 AI 输入区未展开，未在用户实际图谱安装新版。新版仍需实际界面验收。

# 1.4.15 输入提示定位

- 现场测量：原生提示 left=27px；置顶插件给侧栏 rm-block-main 增加 padding-left:30px，实际输入文字起点为 57px。圆点横坐标 38px，提示因此与圆点重叠。
- 仅在 AI 原生输入框中检测到该 pin host 时覆盖提示 left:57px；未修改编辑器、圆点、字号或垂直位置。不使用脚本搬动输入节点。
- npm run build / npm run check 通过；构建后除追加的单条 AI 提示规则外，所有 CSS、运行器和支持脚本均与 1.4.14 一致。
- 新版尚未安装至实际图谱。

# 1.4.14 圆角修复

- 现场读取原生样式：composer-shell 圆角为 8px、overflow:visible；底栏 controls 有独立背景且没有圆角。
- 仅给底栏添加 border-bottom-left-radius:inherit 与 border-bottom-right-radius:inherit，保留父框溢出行为和弹窗交互。
- 构建后对比 1.4.13：除 right-sidebar 内 AI controls 的这两项声明外，全部 CSS 一致；组件运行器、设置组件、支持脚本与其他修复文件保持原样。
- npm run build / npm run check 通过。新版尚未安装至实际图谱。

# 1.4.13 限定修复验证

## 现场调试：用户已安装的 1.4.12

- 成功读取已登录 Roam 页面及实际 AI DOM/CSS。
- 观察到历史弹窗的 rm-agent-chat-history 原生白底和话题的 Folio 选中底框；修复使用实际观察到的类名。
- 在已有会话上点击原生加号，确认会在其右侧新增 New chat。原生会复用空白会话；新版本保留这套逻辑，不替换或克隆加号节点。
- 加载用户已有的回答后，在聊天正文上水平滚动，外层卡片带 scrollLeft 仍为 0；实际计算样式显示聊天正文 overscroll-behavior-x 为 contain。补丁仅覆盖横轴为 auto，不添加新的 wheel/拖动事件处理。
- 设置弹窗行实际同时具有上边线和下边线，确认重复分隔线原因。新版本去掉自加的下边线，首项使用原生 section--top。
- 1800px 视口现场测得已刷新页面的小档正文 800px，文字左右内边距 48px。按用户后续明确要求，正文宽度相关源文件仍直接恢复为 1.4.7 原文。
- 未编辑笔记正文，未发送新的 AI 请求。新增的空白测试会话已关闭。

## 构建与回归

- npm run build / npm run check / 六语言 React+jsdom 的 check:toolbar。
- 验证 native new-tab 节点和回调仍保留、原生 AI 转发、独立卡片工具栏、原包装不占位、横向滚动时工具栏位置更新、设置开关同步、全部设置组可达、Esc/卸载清理。
- 组件调度、PDF 500 次插入、日历、随机任务和座右铭回归。
- src/styles/theme-host-fixes.css、src/styles/sidebar-toggles.css、src/styles/right-sidebar.css、src/styles/left-sidebar.css、src/support.js 与 1.4.7 比对一致；构建后的 base/layout/theme-host-fixes/sidebar-toggles/left-sidebar CSS 比对一致。AI 局部规则仍附加在 right-sidebar 组件中。

## 紧凑面板

面板宽度 min(560px,100vw - 32px)，最大高度 min(620px,76dvh)，内容区内部滚动。1280×720 CSS 视口上限为 560×547px；1366×768 上限为 560×584px；1024×640 上限为 560×486px。这些是 CSS 约束计算，不是 Windows 实机截图。全部开关和设置保持可达，完整设置页不受紧凑规则影响。

验证边界：现场复现的是用户安装的 1.4.12。1.4.13 尚未安装到实际图谱，不能将源码/DOM 验证称为新版真实界面验收。本环境 Chromium 启动被 socket 权限限制；独立 data: 测试页被浏览器 URL 策略拒绝，未绕过该限制。

复现：npm run build && npm run check；安装 jsdom@26、react@18.3.1、react-dom@18.3.1 后运行 npm run check:toolbar，或通过 FOLIO_UI_TEST_MODULES 指定依赖目录。
