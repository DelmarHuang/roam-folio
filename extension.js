/* Folio for Roam Research
 * Consolidated extension build. Reading Desk and Version Studio styles are intentionally excluded.
 */

const MAGAZINE_CSS = {
  "web-fonts": "@import url(\"https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400&family=Noto+Sans+SC:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;600;700;800&family=Fira+Code:wght@400;500&display=swap\");",
  "base": "/* Esther Magazine for Roam · 模块版\n   原设计：ESTHER不二 / esthersjw · https://github.com/esthersjw/esther-design-system · CC BY-NC-SA 4.0\n   本片段须排在所有 CSS 片段之前（字体引入必须位于样式表开头） */\n\n\n\n/* 旁注用的中文字体：同字号下中文方块字显得比西文斜体大，这里只对中文缩小到 90%。\n   优先用系统自带的宋体（本地字体才能缩放）；都没有时回落到网页字体 Noto Serif SC */\n@font-face {\n  font-family: \"Mag Aside CJK\";\n  src: local(\"Songti SC Regular\"), local(\"STSongti-SC-Regular\"), local(\"STSong\"),\n       local(\"SimSun\"), local(\"Noto Serif CJK SC\"), local(\"Source Han Serif SC\");\n  size-adjust: 90%;\n  unicode-range: U+2E80-2FFF, U+3000-303F, U+3040-30FF, U+3400-4DBF, U+4E00-9FFF, U+F900-FAFF, U+FE30-FE4F, U+FF00-FFEF;\n}\n\n/* ==========================================================\n   01. 变量（亮色 / 暗色）\n   ========================================================== */\n\n:root {\n  --mag-body: \"Inter\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  --mag-heading: \"Fraunces\", \"Noto Serif SC\", \"Songti SC\", Georgia, serif;\n  --mag-aside-font: \"Fraunces\", \"Mag Aside CJK\", \"Noto Serif SC\", \"Songti SC\", Georgia, serif;\n  --mag-code: \"Fira Code\", \"SFMono-Regular\", Consolas, monospace;\n\n  --mag-paper: #fefcf6;\n  --mag-shell: #f5f0e6;\n  --mag-surface: #fffdf8;\n  --mag-active: #f3ecd9;\n\n  --mag-ink: #1a1a2e;\n  --mag-muted: #666675;\n  --mag-faint: #92909a;\n\n  --mag-blue: #236dbb;\n  --mag-blue-soft: rgba(43, 127, 216, 0.08);\n  --mag-yellow: #f4d758;\n  --mag-yellow-soft: rgba(244, 215, 88, 0.28);\n  --mag-gold: #b79a37;\n  --mag-gold-ink: #8b773e;\n\n  --mag-border: #e8e0cf;\n  --mag-shadow: rgba(62, 48, 22, 0.07);\n  --mag-modal-shadow: 0 18px 56px rgba(49, 38, 20, 0.18), 0 3px 12px rgba(49, 38, 20, 0.07);\n\n  --mag-code-bg: #f7f8fa;\n  --mag-code-toolbar: #eef0f4;\n  --mag-code-text: #252832;\n  --mag-code-border: #d9dde5;\n\n  --mag-inline-bg: #f5efe1;\n  --mag-inline-text: #a33c50;\n\n  --mag-toolbar-height: 48px;\n  --mag-radius: 10px;\n  --mag-frame-bottom: 10px;\n\n  /* notes 分类标签 */\n  --note-voice-bg: #EEEBFA;  --note-voice-ink: #6D5AAE;\n  --note-lit-bg: #E6F0F5;    --note-lit-ink: #3E748C;\n  --note-green-bg: #E8F1E6;  --note-green-ink: #52794E;\n  --note-foot-bg: #F7EBE1;   --note-foot-ink: #9E6B49;\n  --note-def-bg: #EDECEA;    --note-def-ink: #6B6560;\n\n  --mag-moc-shadow: rgba(99, 102, 241, 0.35);\n\n  /* 图片与纸面融合：亮色下白底与纸色相乘，扫描图、示意图的白底会「印」进纸里 */\n  --mag-img-blend: multiply;\n\n  /* 纸张老化：久未编辑的块，文字逐级混入旧纸褐色 */\n  --mag-sepia: #8a6d3b;\n  --mag-age1-ink: color-mix(in srgb, var(--mag-ink) 86%, var(--mag-sepia));\n  --mag-age2-ink: color-mix(in srgb, var(--mag-ink) 72%, var(--mag-sepia));\n  --mag-age3-ink: color-mix(in srgb, var(--mag-ink) 58%, var(--mag-sepia));\n\n  /* 版面权重：被引用越多的块，字号越大、改用衬线 */\n  --mag-w1-size: 17px;  --mag-w1-weight: 500; --mag-w1-font: var(--mag-body);    --mag-w1-leading: 1.75;\n  --mag-w2-size: 19px;  --mag-w2-weight: 600; --mag-w2-font: var(--mag-heading); --mag-w2-leading: 1.6;\n  --mag-w3-size: 22px;  --mag-w3-weight: 700; --mag-w3-font: var(--mag-heading); --mag-w3-leading: 1.45;\n}\n\n:root.mag-dark,\n.roam-app.bp3-dark,\n.roam-app.bp4-dark,\nbody.bp3-dark,\nbody.bp4-dark {\n  --mag-paper: #151821;\n  --mag-shell: #10131a;\n  --mag-surface: #1b1f29;\n  --mag-active: #2a2b2c;\n\n  --mag-ink: #eee9df;\n  --mag-muted: #b0ada7;\n  --mag-faint: #858590;\n\n  --mag-blue: #83b7ec;\n  --mag-blue-soft: rgba(104, 169, 236, 0.12);\n  --mag-yellow-soft: rgba(244, 215, 88, 0.18);\n  --mag-gold: #d5ba65;\n  --mag-gold-ink: #d5ba65;\n\n  --mag-border: #303645;\n  --mag-shadow: rgba(0, 0, 0, 0.22);\n  --mag-modal-shadow: 0 18px 56px rgba(0, 0, 0, 0.45), 0 3px 12px rgba(0, 0, 0, 0.25);\n\n  --mag-code-bg: #10131a;\n  --mag-code-toolbar: #1b1f29;\n  --mag-code-text: #e7e3d9;\n  --mag-code-border: #303645;\n\n  --mag-inline-bg: #292331;\n  --mag-inline-text: #ff9aad;\n\n  --note-voice-bg: rgba(139, 119, 217, 0.16);  --note-voice-ink: #C9BEEA;\n  --note-lit-bg: rgba(92, 151, 176, 0.16);     --note-lit-ink: #AECDDB;\n  --note-green-bg: rgba(111, 162, 103, 0.16);  --note-green-ink: #B7D3B1;\n  --note-foot-bg: rgba(197, 138, 99, 0.16);    --note-foot-ink: #DEBCA3;\n  --note-def-bg: rgba(146, 138, 130, 0.18);    --note-def-ink: #CBC5BE;\n\n  --mag-moc-shadow: rgba(139, 92, 246, 0.45);\n  --mag-img-blend: normal;\n  --mag-sepia: #c8a96e;\n}\n\n::selection {\n  background: var(--mag-yellow-soft);\n}\n/* ==========================================================\n   02. 基础排版\n   ========================================================== */\n\nhtml body,\nhtml body .roam-app {\n  font-family: var(--mag-body) !important;\n  color: var(--mag-ink) !important;\n  background-color: var(--mag-shell) !important;\n  -webkit-font-smoothing: antialiased;\n}\n\nhtml body .roam-app {\n  --global-font: var(--mag-body);\n  --header-font: var(--mag-heading);\n  --primary-text-color: var(--mag-ink);\n  --secondary-text-color: var(--mag-muted);\n  --main-area-background-color: var(--mag-paper);\n\n  --rr-h1-size: 24px;\n  --rr-h2-size: 20px;\n  --rr-h3-size: 18px;\n  --rr-h1-color: #FF9800;\n  --rr-h2-color: #673AB7;\n  --rr-h3-color: #2196F3;\n  --rr-heading-marker-color: #9CA3AF;\n  --rr-heading-marker-size: 9px;\n\n  --mag-ref-size: 14px;\n  --mag-ref-leading: 1.7;\n\n  caret-color: var(--mag-blue);\n}\n\nhtml body :is(\n  button, input, textarea, select,\n  .bp3-button, .bp3-tag, .bp3-label, .bp3-tooltip, .bp3-tooltip-content,\n  .bp4-button, .bp4-tag, .bp4-label, .bp4-tooltip, .bp4-tooltip-content\n) {\n  font-family: var(--mag-body) !important;\n}\n\nhtml body .roam-app :is(.rm-reference-item, .rm-query, .roam-sidebar-content, .roam-topbar, .rm-topbar) {\n  font-family: var(--mag-body) !important;\n}\n\n/* 块文字：字体、字号、字重、行距、颜色都走变量，供版面权重与纸张老化覆盖 */\nhtml body .roam-app :is(.roam-block, .rm-block-text, .rm-block__input, textarea.rm-block-input) {\n  font-family: var(--mag-w-font, var(--mag-body)) !important;\n  font-size: var(--mag-w-size, 16px) !important;\n  font-weight: var(--mag-w-weight, 400);\n  line-height: var(--mag-w-leading, 1.8) !important;\n  letter-spacing: 0 !important;\n  color: var(--mag-block-ink, var(--mag-ink)) !important;\n  overflow-wrap: anywhere;\n}\n\nhtml body .roam-app :is(.rm-block__input--view, .rm-block__input--active, .roam-block.dont-unfocus-block) {\n  padding-top: 4px !important;\n  padding-bottom: 4px !important;\n}\n\nhtml body .roam-app .rm-autocomplete__wrapper,\nhtml body .roam-app .rm-autocomplete__wrapper > textarea.rm-block-input.rm-block__input--active,\nhtml body .roam-app .rm-autocomplete__wrapper > textarea.rm-block-input.rm-block__input--active:focus {\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  outline: none !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app textarea.rm-block-input.rm-block__input--active {\n  caret-color: var(--mag-ink) !important;\n}\n\n/* ---------- 圆点栏对齐：圆点模式与文档模式都适用 ----------\n   主题把行距调到 1.8、文字上下各加了 4px，首行比 Roam 原生的高；\n   这里让圆点栏高度 = 首行行框高度（字号 × 行距 + 8px），里面的小三角和圆点上下居中 */\nhtml body .roam-app .rm-block-main > .controls {\n  display: flex !important;\n  align-items: center !important;\n  align-self: flex-start !important;\n  height: calc(var(--mag-w-size, 16px) * var(--mag-w-leading, 1.8) + 5.5px) !important;\n  margin-top: 0 !important;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\nhtml body .roam-app .rm-block-main > .controls > :is(.block-expand, .rm-bullet) {\n  display: flex !important;\n  align-items: center !important;\n  align-self: center !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  top: auto !important;\n}\n\nhtml body .roam-app .rm-block-main > .controls .rm-caret {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  top: auto !important;\n}\n\n/* 圆点外面的两层弹出层包装也上下居中，否则会按文字基线把圆点往上带 */\nhtml body .roam-app .rm-block-main > .controls .rm-bullet > .bp3-popover-wrapper,\nhtml body .roam-app .rm-block-main > .controls .rm-bullet .bp3-popover-target {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n/* 反向引用区字号较小，按它自己的行高计算 */\nhtml body .roam-app .rm-reference-item .rm-block-main > .controls {\n  height: calc(var(--mag-ref-size) * var(--mag-ref-leading) + 8px) !important;\n}\n\n/* 文档模式：折叠的块常显小三角，一眼看出下面还有内容；展开的块保持 Roam 原样（悬停才出现） */\nhtml body .roam-app .rm-block--closed > .rm-block-main > .controls > .block-expand--bullet-position {\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\nhtml body .roam-app .rm-block--closed > .rm-block-main > .controls > .block-expand--bullet-position .rm-caret {\n  opacity: 1 !important;\n}",
  "layout": "/* ==========================================================\n   03. 页面布局\n   roam-main > rm-files-dropzone：工具栏外层\n   roam-main > roam-body-main：正文外框\n   ========================================================== */\n\nhtml body .roam-app .roam-main {\n  display: flex !important;\n  flex-direction: column !important;\n  min-width: 0 !important;\n  min-height: 0 !important;\n  box-sizing: border-box !important;\n  background: var(--mag-shell) !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  outline: 0 !important;\n}\n\nhtml body .roam-app .roam-main::before {\n  content: none !important;\n  display: none !important;\n}\n\nhtml body .roam-app .roam-main > .rm-files-dropzone {\n  flex: 0 0 var(--mag-toolbar-height) !important;\n  box-sizing: border-box !important;\n  height: var(--mag-toolbar-height) !important;\n  min-height: var(--mag-toolbar-height) !important;\n  max-height: var(--mag-toolbar-height) !important;\n  margin-block: 0 !important;\n  padding-block: 0 !important;\n  background: var(--mag-shell) !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  overflow: visible !important;\n}\n\nhtml body .roam-app .roam-main > .roam-body-main {\n  flex: 1 1 0% !important;\n  position: relative !important;\n  min-width: 0 !important;\n  min-height: 0 !important;\n  height: auto !important;\n  max-height: calc(100dvh - var(--mag-toolbar-height) - var(--mag-frame-bottom)) !important;\n  box-sizing: border-box !important;\n  margin: 0 12px var(--mag-frame-bottom) !important;\n  padding: 0 !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: var(--mag-radius) !important;\n  background-clip: padding-box !important;\n  box-shadow:\n    0 5px 14px color-mix(in srgb, var(--mag-shadow) 75%, transparent),\n    0 1px 3px color-mix(in srgb, var(--mag-shadow) 60%, transparent) !important;\n  overflow: hidden !important;\n}\n\nhtml body .roam-app .roam-main > .roam-body-main > .rm-article-wrapper,\nhtml body .roam-app .roam-main > .roam-body-main #rm-log-container {\n  box-sizing: border-box !important;\n  height: 100% !important;\n  min-height: 0 !important;\n  max-height: 100% !important;\n  margin-block: 0 !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  overflow-x: hidden !important;\n  overflow-y: auto !important;\n  overscroll-behavior-y: contain;\n}\n\nhtml body .roam-app .roam-body-main .roam-center,\nhtml body .roam-app .rm-article-wrapper {\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  outline: 0 !important;\n}\n\nhtml body .roam-app .roam-main .roam-article {\n  position: relative !important;\n  box-sizing: border-box !important;\n  padding-block: 48px 100px !important;\n  font-family: var(--mag-body) !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 0 !important;\n}\n\nhtml body .roam-app :is(.roam-topbar, .rm-topbar) {\n  box-sizing: border-box !important;\n  height: var(--mag-toolbar-height) !important;\n  min-height: var(--mag-toolbar-height) !important;\n  max-height: var(--mag-toolbar-height) !important;\n  align-items: center !important;\n  padding-block: 0 !important;\n  font-family: var(--mag-body) !important;\n  background: var(--mag-shell) !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  outline: 0 !important;\n}\n\nhtml body .roam-app .roam-main > .rm-resize-handle {\n  border: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}",
  "menus": "/* ==========================================================\n   16. 菜单、弹层、输入框、Cmd + U 搜索\n   ========================================================== */\n\nhtml body :is(.bp3-menu, .bp3-dialog, .bp3-popover-content, .rm-autocomplete__wrapper, .rm-page-ref-popover, .rm-settings) {\n  font-family: var(--mag-body) !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-surface) !important;\n  border-color: var(--mag-border) !important;\n}\n\nhtml body :is(.bp3-menu, .bp3-dialog, .rm-autocomplete__wrapper, .rm-page-ref-popover) {\n  border-radius: 12px !important;\n  box-shadow: 0 8px 28px var(--mag-shadow) !important;\n}\n\nhtml body :is(.bp3-menu-item, .rm-autocomplete-result, .rm-search-list-item) {\n  font-family: var(--mag-body) !important;\n  color: var(--mag-ink) !important;\n}\n\nhtml body :is(.bp3-menu-item:hover, .bp3-menu-item.bp3-active, .rm-autocomplete-result:hover, .rm-menu-item--active) {\n  background: var(--mag-blue-soft) !important;\n}\n\nhtml body :is(.bp3-input, .rm-search-container input, .rm-settings input) {\n  font-family: var(--mag-body) !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-surface) !important;\n  border: 1px solid var(--mag-border) !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-find-or-create-modal {\n  font-family: var(--mag-body) !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 12px !important;\n  overflow: hidden !important;\n  box-shadow: var(--mag-modal-shadow) !important;\n}\n\nhtml body .rm-find-or-create-modal :is(input, button) {\n  font-family: inherit !important;\n}\n\nhtml body .rm-find-or-create-modal-header {\n  background: var(--mag-surface) !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n}\n\nhtml body .rm-find-or-create-modal-header__search-bar {\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-find-or-create-modal #rm-find-or-create-modal-input {\n  font-family: inherit !important;\n  font-size: 17px !important;\n  color: var(--mag-ink) !important;\n  caret-color: var(--mag-gold) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  outline: none !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-find-or-create-modal #rm-find-or-create-modal-input::placeholder {\n  color: var(--mag-muted) !important;\n  opacity: 0.65 !important;\n}\n\nhtml body .rm-find-or-create-modal-header :is(.bp3-icon, .bp3-button) {\n  color: var(--mag-muted) !important;\n}\n\nhtml body .rm-find-or-create-modal-header__right-actions .bp3-button {\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-find-or-create-modal-header__right-actions :is(.bp3-button:hover, .bp3-button.bp3-active) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-active) !important;\n}\n\nhtml body .rm-find-or-create-modal .rm-search-filters {\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-find-or-create-modal .rm-search-filter-chip {\n  display: inline-flex !important;\n  align-items: center !important;\n  gap: 6px !important;\n  font-size: 12px !important;\n  font-weight: 500 !important;\n  color: var(--mag-muted) !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-find-or-create-modal .rm-search-filter-chip--add {\n  border-style: dashed !important;\n}\n\nhtml body .rm-find-or-create-modal :is(.rm-search-filter-chip:hover, .rm-search-filter-chip[aria-pressed=\"true\"]) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-active) !important;\n  border-color: var(--mag-gold) !important;\n}\n\nhtml body .rm-find-or-create-modal .bp3-icon svg {\n  fill: currentColor !important;\n}\n\nhtml body .rm-find-or-create-modal :is(\n  .rm-find-or-create-modal-main, .rm-find-or-create-modal-body-col,\n  .rm-find-or-create-modal-body, .rm-find-or-create-modal-body__list\n) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-find-or-create-modal-body__list {\n  border: 0 !important;\n  border-radius: 0 !important;\n}\n\nhtml body .rm-find-or-create-modal .rm-find-or-create-modal-body__list > .bp3-menu-item {\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-find-or-create-modal .rm-find-or-create-modal-body__list > :is(.bp3-menu-item:hover, .bp3-menu-item.bp3-active) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-active) !important;\n  box-shadow: inset 2px 0 var(--mag-gold) !important;\n}\n\nhtml body .rm-find-or-create-body__group-header {\n  font-family: var(--mag-heading) !important;\n  font-weight: 600 !important;\n  color: var(--mag-muted) !important;\n}\n\nhtml body .rm-find-or-create-modal :is(\n  .rm-find-or-create-row__icon, .rm-find-or-create-row__ref-count, .rm-find-or-create-modal-preview__title__refs\n) {\n  color: var(--mag-muted) !important;\n}\n\nhtml body .rm-find-or-create-modal-preview {\n  color: var(--mag-ink) !important;\n  background: var(--mag-surface) !important;\n  border-left: 1px solid var(--mag-border) !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-find-or-create-modal-preview__content {\n  color: inherit !important;\n  background: transparent !important;\n}\n\nhtml body .rm-find-or-create-modal-preview__title {\n  margin-bottom: 12px !important;\n  padding-bottom: 10px !important;\n  font-family: var(--mag-heading) !important;\n  font-size: 20px !important;\n  font-weight: 600 !important;\n  line-height: 1.4 !important;\n  color: var(--mag-ink) !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n}\n\nhtml body .rm-find-or-create-modal-preview .rm-block__input {\n  font-family: var(--mag-body) !important;\n  line-height: 1.75 !important;\n  color: var(--mag-ink) !important;\n}\n\nhtml body .rm-find-or-create-modal .zoom-mentions-view {\n  font-size: 12px !important;\n  line-height: 1.5 !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n}\n\nhtml body .rm-find-or-create-modal .rm-zoom-item-content {\n  color: inherit !important;\n}\n\nhtml body .rm-find-or-create-modal-preview .rm-multibar {\n  border-color: var(--mag-border) !important;\n}\n\nhtml body .rm-find-or-create-footer {\n  color: var(--mag-muted) !important;\n  background: var(--mag-paper) !important;\n  border-top: 1px solid var(--mag-border) !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-find-or-create-modal .rm-find-or-create-footer__action {\n  font-size: 12px !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-find-or-create-modal :is(.rm-find-or-create-footer__action:hover, .rm-find-or-create-footer__action--active) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-active) !important;\n}\n\nhtml body .rm-find-or-create-footer__action-hotkey-icon {\n  font-size: 10px !important;\n  color: var(--mag-muted) !important;\n  background: var(--mag-surface) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 3px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-find-or-create-footer .bp3-divider {\n  border-color: var(--mag-border) !important;\n}\n\nhtml body :is(.rm-search-container, .rm-search-popover) {\n  font-family: var(--mag-body) !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n}\n/* Page menu · destructive action */\n.bp3-popover-content .bp3-menu > li:has(> .bp3-menu-item > .bp3-icon-trash) {\n}\n\n.bp3-popover-content .bp3-menu > li:has(> .bp3-menu-item > .bp3-icon-trash)::before {\n  content: none !important;\n}\n\n.bp3-popover-content .bp3-menu > li:has(> .bp3-menu-item > .bp3-icon-trash)\n> .bp3-menu-item {\n  border-radius: 3px;\n  color: #b4232f !important;\n  font-weight: 800 !important;\n}\n\n.bp3-popover-content .bp3-menu > li:has(> .bp3-menu-item > .bp3-icon-trash)\n> .bp3-menu-item .bp3-fill {\n  color: #b4232f !important;\n  font-weight: 800 !important;\n}\n\n.bp3-popover-content .bp3-menu > li:has(> .bp3-menu-item > .bp3-icon-trash)\n> .bp3-menu-item .bp3-icon-trash,\n.bp3-popover-content .bp3-menu > li:has(> .bp3-menu-item > .bp3-icon-trash)\n> .bp3-menu-item .bp3-icon-trash svg {\n  color: #b4232f !important;\n  fill: #b4232f !important;\n}\n\n.bp3-popover-content .bp3-menu > li:has(> .bp3-menu-item > .bp3-icon-trash)\n> .bp3-menu-item:hover {\n  background: rgba(180, 35, 47, 0.075) !important;\n}",
  "typewriter": "/* ==========================================================\n   27. 打字机模式\n   body.mag-typewriter：模式开启（顶栏打字机图标）\n   body.mag-tw-typing ：模式开启且正在正文里编辑（脚本维护）\n   只按 body 类名切换，不对每个块做 :has() 判断\n   ========================================================== */\n\nhtml body.mag-typewriter .roam-app .roam-main .roam-article {\n  padding-bottom: 55vh !important;\n  padding-bottom: 55dvh !important;\n}\n\nhtml body.mag-typewriter .roam-app .roam-main > .roam-body-main :is(.rm-article-wrapper, #rm-log-container) {\n  scroll-behavior: auto !important;\n}\n\n/* 正在编辑的块是 textarea，其余块都是 view：只需淡出 view 与周边元素 */\nhtml body.mag-tw-typing .roam-app .roam-article :is(\n  .rm-block__input--view,\n  .rm-block-main > .controls,\n  .rm-title-display,\n  .rm-zoom,\n  .rm-multibar,\n  .rm-reference-main,\n  .rm-mentions,\n  .rm-reference-container\n) {\n  opacity: 0.1 !important;\n  transition: opacity 0.3s ease !important;\n}\n\nhtml body.mag-tw-typing .roam-app :is(.roam-sidebar-container, .roam-topbar, .rm-topbar, #right-sidebar) {\n  opacity: 0.15 !important;\n  transition: opacity 0.35s ease !important;\n}\n\nhtml body.mag-tw-typing .roam-app :is(.roam-sidebar-container, .roam-topbar, .rm-topbar, #right-sidebar):hover {\n  opacity: 1 !important;\n}\n\nhtml body.mag-tw-typing .roam-app .roam-main > .roam-body-main {\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html body.mag-tw-typing .roam-app * {\n    transition: none !important;\n  }\n}\n\n/* ==========================================================\n   28.1 写作目标菜单（右键顶栏打字机图标）\n   ========================================================== */\n\nhtml body .mag-goal-menu {\n  position: fixed;\n  z-index: 40;\n  box-sizing: border-box;\n  width: 212px;\n  padding: 6px;\n  font-family: var(--mag-body);\n  color: var(--mag-ink);\n  background: var(--mag-surface);\n  border: 1px solid var(--mag-border);\n  border-radius: 10px;\n  box-shadow: var(--mag-modal-shadow);\n}\n\nhtml body .mag-goal-menu__head {\n  padding: 6px 8px 5px;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  color: var(--mag-muted);\n}\n\nhtml body .mag-goal-menu__item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  width: 100%;\n  height: 30px;\n  padding: 0 8px;\n  font-size: 13px;\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n  text-align: left;\n  color: var(--mag-ink);\n  background: transparent;\n  border: 0;\n  border-radius: 6px;\n  outline: none;\n  cursor: pointer;\n}\n\nhtml body .mag-goal-menu__item:is(:hover, :focus-visible) {\n  background: var(--mag-yellow-soft);\n}\n\nhtml body .mag-goal-menu__item[aria-checked=\"true\"]::after {\n  content: \"\";\n  width: 9px;\n  height: 5px;\n  margin-right: 2px;\n  border: solid var(--mag-gold-ink);\n  border-width: 0 0 1.75px 1.75px;\n  transform: translateY(-2px) rotate(-45deg);\n}\n\nhtml body .mag-goal-menu__custom {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 4px 8px;\n  font-size: 12px;\n  white-space: nowrap;\n  color: var(--mag-muted);\n}\n\nhtml body .mag-goal-menu__custom input {\n  flex: 1 1 auto;\n  min-width: 0;\n  box-sizing: border-box;\n  height: 26px;\n  padding: 0 8px;\n  font-size: 12px;\n  font-variant-numeric: tabular-nums;\n  color: var(--mag-ink);\n  background: var(--mag-paper);\n  border: 1px solid var(--mag-border);\n  border-radius: 5px;\n  outline: none;\n  box-shadow: none;\n}\n\nhtml body .mag-goal-menu__custom input:focus {\n  border-color: var(--mag-gold);\n}\n\nhtml body .mag-goal-menu__sep {\n  height: 1px;\n  margin: 6px 2px;\n  background: var(--mag-border);\n}\n\nhtml body .mag-goal-menu__status {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 2px 4px 2px 8px;\n  font-size: 11.5px;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n  color: var(--mag-muted);\n}\n\nhtml body .mag-goal-menu__status > span {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nhtml body .mag-goal-menu__reset {\n  flex: 0 0 auto;\n  padding: 3px 6px;\n  white-space: nowrap;\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--mag-gold-ink);\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  outline: none;\n  cursor: pointer;\n}\n\nhtml body .mag-goal-menu__reset:is(:hover, :focus-visible) {\n  background: var(--mag-yellow-soft);\n}",
  "references": "/* ==========================================================\n   09. 反向引用区：杂志资料索引（含嵌入块与置顶按钮）\n   ========================================================== */\n\nhtml body .roam-app :is(\n  .rm-reference-container, .rm-reference-main, .rm-refs-container,\n  .rm-ref-page-view, .rm-reference-item, .rm-mentions\n) {\n  font-family: var(--mag-body) !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border-color: var(--mag-border) !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app :is(.rm-reference-container .rm-title, .rm-reference-main > .rm-title, .rm-mentions > .rm-title) {\n  font-family: var(--mag-heading) !important;\n  font-size: 17px !important;\n  font-weight: 600 !important;\n  line-height: 1.4 !important;\n  letter-spacing: -0.2px !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-ref-page-view-title {\n  display: flex !important;\n  align-items: center !important;\n  column-gap: 6px !important;\n  margin-bottom: 6px !important;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  font-family: var(--mag-heading) !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  line-height: 1.4 !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-ref-page-view-title :is(a, .rm-page-ref, .rm-page-ref--link, .rm-page-ref--namespace) {\n  font-family: inherit !important;\n  font-size: inherit !important;\n  font-weight: inherit !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  text-decoration: none !important;\n}\n\nhtml body .roam-app .rm-ref-page-view-title :is(a, .rm-page-ref--link):hover {\n  color: var(--mag-blue) !important;\n}\n\nhtml body .roam-app .rm-ref-page-view-title sup {\n  position: static !important;\n  align-self: center !important;\n  font-family: var(--mag-body) !important;\n  font-size: 9px !important;\n  font-weight: 400 !important;\n  line-height: 1 !important;\n  color: var(--mag-faint) !important;\n}\n\nhtml body .roam-app .rm-ref-page-view-title :is(.rm-caret, .block-expand, .bp3-icon-caret-down, .bp3-icon-caret-right) {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  align-self: center !important;\n  margin-block: 0 !important;\n  padding-block: 0 !important;\n  line-height: 1 !important;\n  transform: none !important;\n}\n\nhtml body .roam-app .rm-ref-page-view {\n  margin-top: 18px !important;\n  margin-bottom: 24px !important;\n  border: 0 !important;\n}\n\nhtml body .roam-app .rm-reference-item {\n  margin: 0 0 12px !important;\n  padding-top: 4px !important;\n  border: 0 !important;\n}\n\nhtml body .roam-app .rm-reference-item :is(.roam-block, .rm-block-text, .rm-block__input):not(.rm-level1):not(.rm-level2):not(.rm-level3) {\n  font-size: var(--mag-ref-size) !important;\n  line-height: var(--mag-ref-leading) !important;\n}\n\nhtml body .roam-app .rm-reference-item .zoom-mentions-view {\n  margin: 0 0 4px !important;\n  padding-block: 0 !important;\n  font-family: var(--mag-body) !important;\n  font-size: 11px !important;\n  line-height: 1.55 !important;\n  color: var(--mag-muted) !important;\n}\n\nhtml body .roam-app .rm-reference-item .zoom-mentions-view :is(a, .rm-page-ref, .rm-page-ref--link, .rm-page-ref--namespace, .rm-block-ref) {\n  font-family: var(--mag-body) !important;\n  font-size: 11px !important;\n  font-weight: 400 !important;\n  line-height: inherit !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border-bottom: 0 !important;\n}\n\nhtml body .roam-app .rm-reference-item .zoom-mentions-view :is(a, .rm-page-ref--link, .rm-block-ref):hover {\n  color: var(--mag-blue) !important;\n}\n\nhtml body .roam-app .rm-reference-item .zoom-mentions-view .rm-page-ref--tag {\n  font-size: 10px !important;\n  background: transparent !important;\n  padding: 0 2px !important;\n}\n\nhtml body .roam-app .rm-reference-item .rm-block-ref {\n  background: transparent !important;\n  border-bottom-color: var(--mag-border) !important;\n}\n\n/* 嵌入块：主页面、右侧栏、引用区统一暖纸色 */\nhtml body .roam-app .rm-embed-container {\n  margin: 4px 0 6px !important;\n  padding: 8px 12px !important;\n  background: color-mix(in srgb, var(--mag-shell) 55%, var(--mag-paper)) !important;\n  border: 0 !important;\n  border-radius: 4px !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-embed-container > .rm-embed-children__inner {\n  background: transparent !important;\n}\n\nhtml body .roam-app .rm-embed-container > .rm-embed-settings {\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-embed-settings .bp3-button {\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 4px !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-embed-settings .bp3-button:hover {\n  color: var(--mag-ink) !important;\n  background: var(--mag-border) !important;\n}\n\nhtml body .roam-app .rm-embed-container > .rm-embed-children__open-bar {\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n\nhtml body .roam-app .rm-embed-container:hover > .rm-embed-children__open-bar {\n  background-color: var(--mag-border) !important;\n}\n\n/* 引用置顶按钮（Reference Pin 扩展）\n   图钉绝对定位在行右侧同一列；不改行的 display，扩展靠它隐藏原位副本 */\nhtml body .roam-app .roamjs-reference-pin-row {\n  position: relative !important;\n}\n\nhtml body .roam-app .roamjs-reference-pin-row > .rm-reference-item {\n  box-sizing: border-box !important;\n  min-width: 0 !important;\n  padding-right: 32px !important;\n}\n\nhtml body .roam-app .roamjs-reference-pin-row > .roamjs-reference-pin-control {\n  position: absolute !important;\n  top: 8px !important;\n  right: 0 !important;\n  bottom: auto !important;\n  left: auto !important;\n  float: none !important;\n  margin: 0 !important;\n  transform: none !important;\n  z-index: 2 !important;\n}\n\nhtml body .roam-app .roamjs-reference-pin-row:has(> .rm-reference-item .zoom-mentions-view) > .roamjs-reference-pin-control {\n  top: 0 !important;\n}\n\nhtml body .roam-app .roamjs-reference-pin-control {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  width: 24px !important;\n  height: 24px !important;\n  line-height: 0 !important;\n  vertical-align: middle !important;\n}\n\nhtml body .roam-app .roamjs-reference-pin-control .bp3-button {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  width: 24px !important;\n  height: 24px !important;\n  min-width: 24px !important;\n  min-height: 24px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  line-height: 0 !important;\n  color: var(--mag-faint) !important;\n  background: transparent !important;\n  background-image: none !important;\n  border: 0 !important;\n  border-radius: 4px !important;\n  box-shadow: none !important;\n  outline: none !important;\n  opacity: 0.6 !important;\n  transition: color 0.15s ease, background-color 0.15s ease, opacity 0.15s ease !important;\n}\n\nhtml body .roam-app .roamjs-reference-pin-control .bp3-button::before {\n  content: none !important;\n  display: none !important;\n}\n\nhtml body .roam-app .roamjs-reference-pin-control .bp3-button > * {\n  margin: 0 !important;\n}\n\nhtml body .roam-app .roamjs-reference-pin-control .bp3-icon {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  width: 14px !important;\n  height: 14px !important;\n  margin: 0 !important;\n  line-height: 0 !important;\n  color: inherit !important;\n}\n\nhtml body .roam-app .roamjs-reference-pin-control svg {\n  display: block !important;\n  width: 14px !important;\n  height: 14px !important;\n  fill: currentColor !important;\n}\n\nhtml body .roam-app .roamjs-reference-pin-control .bp3-button:is(:hover, :focus-visible) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n  opacity: 1 !important;\n}\n\nhtml body .roam-app .roamjs-reference-pin-control .bp3-button:is(.bp3-active, [aria-pressed=\"true\"]) {\n  color: var(--mag-blue) !important;\n  background: transparent !important;\n  opacity: 1 !important;\n}\n\nhtml body .roam-app .roamjs-reference-pin-control .bp3-button:is(.bp3-active, [aria-pressed=\"true\"]):hover {\n  background: var(--mag-blue-soft) !important;\n}\n\nhtml body .roam-app .roamjs-reference-pin-control .bp3-button[aria-busy=\"true\"] {\n  opacity: 0.35 !important;\n  cursor: progress !important;\n}",
  "quotes": "/* ==========================================================\n   10. 引用块（衬线摘录）与分隔线\n   ========================================================== */\n\nhtml body .roam-app :is(.rm-bq, .rm-block-quote, blockquote) {\n  position: relative !important;\n  box-sizing: border-box !important;\n  margin: 16px 0 !important;\n  padding: 14px 20px 14px 44px !important;\n  font-family: \"Fraunces\", \"Noto Serif SC\", \"Songti SC\", Georgia, serif !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  font-style: italic !important;\n  font-synthesis: none !important;\n  line-height: 1.85 !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-surface) !important;\n  border: 0 !important;\n  border-radius: 6px !important;\n  box-shadow: 0 2px 8px var(--mag-shadow) !important;\n}\n\nhtml body .roam-app :is(.rm-bq, .rm-block-quote, blockquote) :is(.rm-block__input, p) {\n  font-family: inherit !important;\n  font-style: inherit !important;\n  font-synthesis: none !important;\n  line-height: inherit !important;\n}\n\nhtml body .roam-app :is(.rm-bq, .rm-block-quote, blockquote)::before {\n  content: \"“\" !important;\n  position: absolute !important;\n  top: 8px !important;\n  left: 12px !important;\n  font-family: var(--mag-heading) !important;\n  font-size: 40px !important;\n  font-weight: 700 !important;\n  font-style: normal !important;\n  line-height: 1 !important;\n  color: var(--mag-yellow) !important;\n  pointer-events: none !important;\n}\n\nhtml body .roam-app :is(.rm-bq, .rm-block-quote, blockquote) code {\n  font-family: var(--mag-code) !important;\n  font-style: normal !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) .rm-block__input hr {\n  display: block !important;\n  box-sizing: border-box !important;\n  width: 100% !important;\n  max-width: none !important;\n  height: 8px !important;\n  margin: 16px 0 !important;\n  padding: 0 !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  background:\n    linear-gradient(to right, var(--mag-yellow) 0 48px, var(--mag-border) 48px 100%) left center / 100% 2px no-repeat,\n    linear-gradient(var(--mag-border), var(--mag-border)) left calc(50% + 4px) / 100% 1px no-repeat !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-block-main:has(> .rm-block__input hr) > .controls {\n  align-self: center !important;\n  margin-top: 0 !important;\n  padding-block: 0 !important;\n}",
  "callouts": "/* ==========================================================\n   11. Callout（Roam 原生 [[>]] [[!TYPE]]）\n   以块的 data-page-links 判断类型：不依赖 callout 内部类名。\n   外框改为纸色底 + 类型色细竖线 + 衬线标题，类型色收敛成刊物色。\n   ========================================================== */\n\nhtml body .roam-app .rm-block[data-page-links*='\">\"'] {\n  --co: #3d6fa8;\n}\nhtml body .roam-app .rm-block[data-page-links*='\">\"']:is([data-page-links*='\"!INFO\"' i])     { --co: #2f7f9a; }\nhtml body .roam-app .rm-block[data-page-links*='\">\"']:is([data-page-links*='\"!SUMMARY\"' i])  { --co: #2d8a7a; }\nhtml body .roam-app .rm-block[data-page-links*='\">\"']:is([data-page-links*='\"!TIP\"' i])      { --co: #3a8d6b; }\nhtml body .roam-app .rm-block[data-page-links*='\">\"']:is([data-page-links*='\"!SUCCESS\"' i])  { --co: #4a8b3f; }\nhtml body .roam-app .rm-block[data-page-links*='\">\"']:is([data-page-links*='\"!QUESTION\"' i]) { --co: #b07b1f; }\nhtml body .roam-app .rm-block[data-page-links*='\">\"']:is([data-page-links*='\"!WARNING\"' i])  { --co: #c2701e; }\nhtml body .roam-app .rm-block[data-page-links*='\">\"']:is([data-page-links*='\"!FAILURE\"' i])  { --co: #b5473d; }\nhtml body .roam-app .rm-block[data-page-links*='\">\"']:is([data-page-links*='\"!DANGER\"' i])   { --co: #a33c50; }\nhtml body .roam-app .rm-block[data-page-links*='\">\"']:is([data-page-links*='\"!BUG\"' i])      { --co: #a8443a; }\nhtml body .roam-app .rm-block[data-page-links*='\">\"']:is([data-page-links*='\"!EXAMPLE\"' i])  { --co: #6d5aae; }\nhtml body .roam-app .rm-block[data-page-links*='\">\"']:is([data-page-links*='\"!QUOTE\"' i])    { --co: #6b6560; }\nhtml body .roam-app .rm-block[data-page-links*='\">\"']:is([data-page-links*='\"!RECIPE\"' i])   { --co: #9e6b49; }\n\nhtml body .roam-app .rm-block[data-page-links*='\">\"'] > .rm-block-main > .rm-block__input--view {\n  box-sizing: border-box !important;\n  margin: 6px 0 !important;\n  padding: 12px 18px 13px !important;\n  color: var(--mag-ink) !important;\n  background: color-mix(in srgb, var(--co) 7%, var(--mag-paper)) !important;\n  border: 0 !important;\n  border-left: 2px solid var(--co) !important;\n  border-radius: 0 6px 6px 0 !important;\n  box-shadow: none !important;\n}\n\n/* 去掉原生 callout 自带的底色、粗竖线和阴影，由外框统一绘制。\n   图标（类名含 icon）与标题不在此列：图标保持 Roam 原样 */\nhtml body .roam-app .rm-block[data-page-links*='\">\"'] > .rm-block-main > .rm-block__input--view\n:is([class*=\"callout\"], .rm-bq, blockquote):not([class*=\"icon\"]):not([class*=\"title\"]) {\n  margin: 0 !important;\n  padding: 0 !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n\n/* 如果原生 callout 借用了引用块的结构，撤掉引用块的衬线斜体和引号 */\nhtml body .roam-app .rm-block[data-page-links*='\">\"'] > .rm-block-main > .rm-block__input--view\n:is(.rm-bq, blockquote) {\n  font-family: var(--mag-body) !important;\n  font-size: inherit !important;\n  font-style: normal !important;\n  color: inherit !important;\n}\n\nhtml body .roam-app .rm-block[data-page-links*='\">\"'] > .rm-block-main > .rm-block__input--view\n:is(.rm-bq, blockquote)::before {\n  content: none !important;\n}\n\n/* 标题：只换字体与颜色，不改间距 */\nhtml body .roam-app .rm-block[data-page-links*='\">\"'] > .rm-block-main > .rm-block__input--view\n:is([class*=\"callout\"][class*=\"title\"], [class*=\"callout\"] [class*=\"title\"]):not([class*=\"icon\"]) {\n  font-family: var(--mag-heading) !important;\n  font-weight: 600 !important;\n  letter-spacing: 0 !important;\n  color: color-mix(in srgb, var(--co) 82%, var(--mag-ink)) !important;\n}",
  "tasks": "/* ==========================================================\n   12. TODO / DONE\n   未完成：细线方框；完成：方框退成淡线、金色细勾，文字变浅并划线\n   ========================================================== */\n\nhtml body .roam-app .check-container .checkmark {\n  box-sizing: border-box !important;\n  width: 14px !important;\n  height: 14px !important;\n  background: transparent !important;\n  border: 1.5px solid color-mix(in srgb, var(--mag-muted) 75%, transparent) !important;\n  border-radius: 3.5px !important;\n  box-shadow: none !important;\n  transition: background-color 0.15s ease, border-color 0.15s ease !important;\n}\n\nhtml body .roam-app .check-container:hover input ~ .checkmark {\n  background: var(--mag-yellow-soft) !important;\n  border-color: var(--mag-ink) !important;\n}\n\nhtml body .roam-app .check-container input:checked ~ .checkmark {\n  background: transparent !important;\n  border-color: color-mix(in srgb, var(--mag-faint) 55%, transparent) !important;\n}\n\nhtml body .roam-app .check-container .checkmark::after {\n  left: 3.5px !important;\n  top: 0.5px !important;\n  width: 3.5px !important;\n  height: 7.5px !important;\n  border: solid var(--mag-gold) !important;\n  border-width: 0 1.75px 1.75px 0 !important;\n  transform: rotate(45deg) !important;\n}\n\n/* 已完成的块 */\nhtml body .roam-app .rm-block[data-page-links*='\"DONE\"'] > .rm-block-main > .rm-block__input--view,\nhtml body .roam-app .rm-block-ref:has(.check-container input:checked) {\n  color: var(--mag-faint) !important;\n  text-decoration: line-through !important;\n  text-decoration-color: color-mix(in srgb, var(--mag-faint) 60%, transparent) !important;\n  text-decoration-thickness: 1px !important;\n}\n\n/* 块引用里的已完成任务：去掉点状下划线，避免和删除线打架 */\nhtml body .roam-app .rm-block-ref:has(.check-container input:checked) {\n  border-bottom-color: transparent !important;\n}\n\nhtml body .roam-app .rm-block[data-page-links*='\"DONE\"'] > .rm-block-main > .rm-block__input--view\n:is(a, .rm-page-ref--link, .rm-page-ref--namespace, .rm-block-ref, .rm-alias, .rm-bold, strong, .rm-italics, em, .rm-highlight),\nhtml body .roam-app .rm-block-ref:has(.check-container input:checked)\n:is(a, .rm-page-ref--link, .rm-page-ref--namespace, .rm-alias, .rm-bold, strong, .rm-italics, em, .rm-highlight) {\n  color: inherit !important;\n}",
  "left-sidebar": "/* ==========================================================\n   13. 左侧栏：刊名、题铭、Review / Desk、编号目录\n   ========================================================== */\n\nhtml body .roam-app :is(.roam-sidebar-container, .roam-sidebar-content) {\n  font-family: var(--mag-body) !important;\n  color: var(--mag-muted) !important;\n  background: var(--mag-shell) !important;\n  border: 0 !important;\n  box-shadow: none !important;\n  overflow-x: hidden !important;\n}\n\nhtml body .roam-app .roam-sidebar-container {\n  --contents-font: var(--mag-heading);\n  --contents-inset: 18px;\n  outline: 0 !important;\n}\n\nhtml body .roam-app .roam-sidebar-content {\n  min-width: 0 !important;\n  max-width: 100% !important;\n  box-sizing: border-box !important;\n}\n\nhtml body .roam-app .roam-sidebar-container :is(\n  .log-button, .page, .sidebar-nav-item, .rm-page-ref, .rm-page-ref--link, .rm-page-ref--namespace, input, button\n),\nhtml body .roam-app .roam-sidebar-container :is(.log-button, .page, .sidebar-nav-item) :is(span, a):not([class*=\"icon\"]) {\n  font-family: var(--mag-body) !important;\n  letter-spacing: 0 !important;\n}\n\nhtml body .roam-app .roam-sidebar-container :is(.log-button, .sidebar-nav-item) {\n  font-size: 13px !important;\n  font-weight: 500 !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 6px !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .roam-sidebar-container :is(.log-button, .sidebar-nav-item):hover {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .top-row {\n  height: auto !important;\n  min-height: 0 !important;\n  padding-inline: var(--contents-inset) !important;\n  background: transparent !important;\n  box-shadow: none !important;\n  overflow: visible !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .rm-db-title-container {\n  display: flex !important;\n  flex-wrap: wrap !important;\n  align-items: center !important;\n  gap: 0 !important;\n  min-width: 0 !important;\n  height: auto !important;\n  margin: 0 !important;\n  padding: 0 0 14px !important;\n  overflow: visible !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .rm-db-title {\n  margin-left: 0 !important;\n  padding-left: 0 !important;\n  font-family: var(--mag-heading) !important;\n  font-size: 28px !important;\n  font-weight: 800 !important;\n  font-style: normal !important;\n  line-height: 1.15 !important;\n  letter-spacing: -1.1px !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 0 !important;\n  text-shadow: none !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .rm-db-title :is(span, a):not([class*=\"icon\"]) {\n  font-family: inherit !important;\n  font-size: inherit !important;\n  font-weight: inherit !important;\n  letter-spacing: inherit !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .rm-db-title::before,\nhtml body .roam-app .roam-sidebar-container .rm-db-title::after {\n  content: none !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .rm-db-title .expand-icon {\n  margin-left: 8px !important;\n  color: var(--mag-muted) !important;\n  opacity: 0.55 !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .rm-db-title-container::after {\n  content: \"THINK. OWN. COMPOUND.\\A FESTINA LENTE.\" !important;\n  display: block !important;\n  flex: 0 0 100% !important;\n  box-sizing: border-box !important;\n  margin: 12px 0 0 !important;\n  padding: 0 !important;\n  font-family: \"Fraunces\", Georgia, serif !important;\n  font-size: 9px !important;\n  font-weight: 600 !important;\n  font-style: normal !important;\n  line-height: 1.9 !important;\n  letter-spacing: 0.85px !important;\n  white-space: pre-line !important;\n  text-align: left !important;\n  color: var(--mag-muted) !important;\n  opacity: 0.85 !important;\n  pointer-events: none !important;\n}\n\n/* Review（roam-memo）与 Desk：同一套目录行 */\nhtml body .roam-app .roam-sidebar-container :is(#roam-memo-wrapper, .log-button.rm-left-sidebar__desk) {\n  display: flex !important;\n  align-items: center !important;\n  box-sizing: border-box !important;\n  height: auto !important;\n  min-height: 32px !important;\n  margin: 0 !important;\n  padding: 4px var(--contents-inset) !important;\n  font-family: var(--contents-font) !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  line-height: 22px !important;\n  letter-spacing: 0 !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  cursor: pointer !important;\n}\n\nhtml body .roam-app .roam-sidebar-container #roam-memo-wrapper > * {\n  align-self: center !important;\n  margin-block: 0 !important;\n}\n\nhtml body .roam-app .roam-sidebar-container #roam-memo-wrapper .flex-h-box {\n  align-items: center !important;\n}\n\nhtml body .roam-app .roam-sidebar-container #roam-memo-wrapper :is(div, span, a):not([class*=\"icon\"]) {\n  font-family: inherit !important;\n  line-height: 22px !important;\n}\n\nhtml body .roam-app .roam-sidebar-container #roam-memo-wrapper .bp3-icon {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  align-self: center !important;\n  color: var(--mag-muted) !important;\n  opacity: 0.65 !important;\n}\n\nhtml body .roam-app .roam-sidebar-container #roam-memo-wrapper .bp3-icon svg {\n  width: 15px !important;\n  height: 15px !important;\n}\n\nhtml body .roam-app .roam-sidebar-container #roam-memo-wrapper .bp3-tag {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  align-self: center !important;\n  box-sizing: border-box !important;\n  height: 22px !important;\n  min-height: 22px !important;\n  margin-block: 0 !important;\n  padding: 0 5px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 10px !important;\n  font-weight: 500 !important;\n  font-style: normal !important;\n  line-height: 22px !important;\n  border: 0 !important;\n  border-radius: 3px !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .roam-sidebar-container #roam-memo-wrapper .bp3-tag :is(span, a) {\n  font-family: var(--mag-body) !important;\n  font-size: 10px !important;\n  font-style: normal !important;\n  line-height: 22px !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .log-button.rm-left-sidebar__desk > .flex-h-box {\n  display: flex !important;\n  flex: 1 1 auto !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  gap: 8px !important;\n  min-width: 0 !important;\n  font: inherit !important;\n  color: inherit !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .log-button.rm-left-sidebar__desk .bp3-icon {\n  display: inline-block !important;\n  flex: 0 0 15px !important;\n  width: 15px !important;\n  height: 15px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  font-size: 0 !important;\n  line-height: 0 !important;\n  color: var(--mag-muted) !important;\n  background-color: currentColor !important;\n  opacity: 0.65 !important;\n  -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1 3.5h14v2H1zM2 5.5h1.6V13H2zM12.4 5.5H14V13h-1.6zM6.8 5.5h5.6v3.7H6.8zM8.9 7h1.4v.9H8.9z'/></svg>\") center / 15px 15px no-repeat !important;\n  mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1 3.5h14v2H1zM2 5.5h1.6V13H2zM12.4 5.5H14V13h-1.6zM6.8 5.5h5.6v3.7H6.8zM8.9 7h1.4v.9H8.9z'/></svg>\") center / 15px 15px no-repeat !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .log-button.rm-left-sidebar__desk .bp3-icon::before,\nhtml body .roam-app .roam-sidebar-container .log-button.rm-left-sidebar__desk .bp3-icon svg {\n  content: none !important;\n  display: none !important;\n}\n\nhtml body .roam-app .roam-sidebar-container :is(#roam-memo-wrapper, .log-button.rm-left-sidebar__desk):hover {\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n}\n\nhtml body .roam-app .roam-sidebar-container :is(#roam-memo-wrapper, .log-button.rm-left-sidebar__desk):hover .bp3-icon {\n  opacity: 0.9 !important;\n}\n\n/* 收藏目录：01 02 03 编号 */\nhtml body .roam-app .roam-sidebar-container .starred-pages-wrapper {\n  min-width: 0 !important;\n  margin-top: 12px !important;\n  padding-top: 0 !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .starred-pages {\n  min-width: 0 !important;\n  max-width: 100% !important;\n  overflow-x: hidden !important;\n  counter-reset: mag-toc !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .starred-pages .page {\n  position: relative !important;\n  display: block !important;\n  box-sizing: border-box !important;\n  min-width: 0 !important;\n  max-width: 100% !important;\n  margin: 1px 0 !important;\n  padding: 4px 12px 4px 30px !important;\n  font-family: var(--contents-font) !important;\n  font-size: 13px !important;\n  font-weight: 600 !important;\n  line-height: 1.6 !important;\n  color: var(--mag-muted) !important;\n  white-space: normal !important;\n  word-break: normal !important;\n  overflow-wrap: break-word !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  counter-increment: mag-toc !important;\n}\n\n/* 编号挂在左边距里，页名独占整行宽度；换行时与页名首字对齐 */\nhtml body .roam-app .roam-sidebar-container .starred-pages .page::before {\n  content: counter(mag-toc, decimal-leading-zero) !important;\n  position: absolute !important;\n  top: 4px !important;\n  left: 6px !important;\n  width: 18px !important;\n  font-family: var(--mag-heading) !important;\n  font-size: 10px !important;\n  font-weight: 600 !important;\n  font-style: normal !important;\n  font-variant-numeric: tabular-nums lining-nums !important;\n  line-height: 20.8px !important;\n  letter-spacing: 0.3px !important;\n  text-align: right !important;\n  color: var(--mag-faint) !important;\n  transition: color 0.15s ease !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .starred-pages .page :is(span, a):not([class*=\"icon\"]) {\n  min-width: 0 !important;\n  font-family: var(--contents-font) !important;\n  font-size: 13px !important;\n  font-weight: 600 !important;\n  line-height: 1.6 !important;\n  letter-spacing: 0 !important;\n  color: inherit !important;\n  white-space: normal !important;\n  word-break: normal !important;\n  overflow-wrap: break-word !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .starred-pages .page:hover {\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n}\n\nhtml body .roam-app .roam-sidebar-container .starred-pages .page:hover::before {\n  color: var(--mag-gold) !important;\n}\n\nhtml body .roam-app :is(.roam-sidebar-content > hr, .starred-pages-wrapper > hr, .starred-pages-wrapper > .bp3-divider) {\n  border: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .starred-pages-wrapper > div[style*=\"background\"] {\n  background: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .roam-sidebar-container #roam-sidebar-logo,\nhtml body .roam-app .roam-sidebar-container #roam-sidebar-logo :is(a, div, span) {\n  color: var(--mag-ink) !important;\n  background-color: transparent !important;\n  opacity: 1 !important;\n  box-shadow: none !important;\n  text-decoration: none !important;\n}\n\nhtml body .roam-app .roam-sidebar-container #roam-sidebar-logo :is(img, svg) {\n  filter: brightness(0) !important;\n  opacity: 1 !important;\n}\n/* All six native navigation items use the existing Desk typography.\n   A fixed icon column also covers different native/Memo nesting structures. */\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) {position:relative!important;display:flex!important;align-items:center!important;box-sizing:border-box!important;height:32px!important;min-height:32px!important;margin:0!important;padding:4px 18px 4px 41px!important;gap:8px!important;font-family:var(--contents-font,var(--mag-heading))!important;font-size:14px!important;font-weight:600!important;font-style:normal!important;line-height:22px!important;letter-spacing:0!important;color:var(--mag-muted)!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) :is(div,span,a):not([class*=\"icon\"]):not(.bp3-tag):not(.bp3-tag *) {position:static!important;font:inherit!important;letter-spacing:inherit!important;color:inherit!important;margin-inline:0!important;padding-inline:0!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) > .flex-h-box {display:flex!important;align-items:center!important;justify-content:flex-start!important;gap:8px!important;min-width:0!important;margin:0!important;padding:0!important;}\nhtml body .roam-app .roam-sidebar-container #roam-memo-wrapper:has(.log-button) {display:block!important;min-height:0!important;height:auto!important;margin:0!important;padding:0!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))):hover {color:var(--mag-ink)!important;background:var(--mag-yellow-soft)!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-tag {font:500 10px/22px var(--mag-body)!important;align-self:center!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-calendar{position:absolute!important;top:50%!important;left:18px!important;right:auto!important;bottom:auto!important;transform:translateY(-50%)!important;display:block!important;box-sizing:border-box!important;width:15px!important;min-width:15px!important;max-width:15px!important;height:15px!important;min-height:15px!important;max-height:15px!important;margin:0!important;padding:0!important;font-size:0!important;line-height:0!important;opacity:.65!important;color:inherit!important;background:currentColor!important;mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M4%201h2v3H4zm6%200h2v3h-2zM2%203h1v2h4V3h2v2h4V3h1v12H2zm2%204v2h2V7zm3%200v2h2V7zm3%200v2h2V7zm-6%203v2h2v-2zm3%200v2h2v-2zm3%200v2h2v-2z%22%2F%3E%3C%2Fsvg%3E\") center/15px 15px no-repeat!important;-webkit-mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M4%201h2v3H4zm6%200h2v3h-2zM2%203h1v2h4V3h2v2h4V3h1v12H2zm2%204v2h2V7zm3%200v2h2V7zm3%200v2h2V7zm-6%203v2h2v-2zm3%200v2h2v-2zm3%200v2h2v-2z%22%2F%3E%3C%2Fsvg%3E\") center/15px 15px no-repeat!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-calendar::before,html body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-calendar svg{display:none!important;content:none!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))):hover .bp3-icon-calendar{opacity:.9!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-box{position:absolute!important;top:50%!important;left:18px!important;right:auto!important;bottom:auto!important;transform:translateY(-50%)!important;display:block!important;box-sizing:border-box!important;width:15px!important;min-width:15px!important;max-width:15px!important;height:15px!important;min-height:15px!important;max-height:15px!important;margin:0!important;padding:0!important;font-size:0!important;line-height:0!important;opacity:.65!important;color:inherit!important;background:currentColor!important;mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M1%203h14v3H1zm1%204h12v7H2zm4%201v2h4V8z%22%2F%3E%3C%2Fsvg%3E\") center/15px 15px no-repeat!important;-webkit-mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M1%203h14v3H1zm1%204h12v7H2zm4%201v2h4V8z%22%2F%3E%3C%2Fsvg%3E\") center/15px 15px no-repeat!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-box::before,html body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-box svg{display:none!important;content:none!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))):hover .bp3-icon-box{opacity:.9!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-graph{position:absolute!important;top:50%!important;left:18px!important;right:auto!important;bottom:auto!important;transform:translateY(-50%)!important;display:block!important;box-sizing:border-box!important;width:15px!important;min-width:15px!important;max-width:15px!important;height:15px!important;min-height:15px!important;max-height:15px!important;margin:0!important;padding:0!important;font-size:0!important;line-height:0!important;opacity:.65!important;color:inherit!important;background:currentColor!important;mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M3%203l9%201%20.3%201.5-9-1zM3%205l1.4-.5%203.4%207-1.4.6zM11.5%205l1.3.7-4.1%206.5-1.3-.8z%22%2F%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%222.5%22%2F%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%224.5%22%20r%3D%222.5%22%2F%3E%3Ccircle%20cx%3D%227.5%22%20cy%3D%2212.5%22%20r%3D%222.5%22%2F%3E%3C%2Fsvg%3E\") center/15px 15px no-repeat!important;-webkit-mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M3%203l9%201%20.3%201.5-9-1zM3%205l1.4-.5%203.4%207-1.4.6zM11.5%205l1.3.7-4.1%206.5-1.3-.8z%22%2F%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%222.5%22%2F%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%224.5%22%20r%3D%222.5%22%2F%3E%3Ccircle%20cx%3D%227.5%22%20cy%3D%2212.5%22%20r%3D%222.5%22%2F%3E%3C%2Fsvg%3E\") center/15px 15px no-repeat!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-graph::before,html body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-graph svg{display:none!important;content:none!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))):hover .bp3-icon-graph{opacity:.9!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-list{position:absolute!important;top:50%!important;left:18px!important;right:auto!important;bottom:auto!important;transform:translateY(-50%)!important;display:block!important;box-sizing:border-box!important;width:15px!important;min-width:15px!important;max-width:15px!important;height:15px!important;min-height:15px!important;max-height:15px!important;margin:0!important;padding:0!important;font-size:0!important;line-height:0!important;opacity:.65!important;color:inherit!important;background:currentColor!important;mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M1%202h2v2H1zm4%200h10v2H5zM1%207h2v2H1zm4%200h10v2H5zM1%2012h2v2H1zm4%200h10v2H5z%22%2F%3E%3C%2Fsvg%3E\") center/15px 15px no-repeat!important;-webkit-mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M1%202h2v2H1zm4%200h10v2H5zM1%207h2v2H1zm4%200h10v2H5zM1%2012h2v2H1zm4%200h10v2H5z%22%2F%3E%3C%2Fsvg%3E\") center/15px 15px no-repeat!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-list::before,html body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-list svg{display:none!important;content:none!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))):hover .bp3-icon-list{opacity:.9!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-inbox{position:absolute!important;top:50%!important;left:18px!important;right:auto!important;bottom:auto!important;transform:translateY(-50%)!important;display:block!important;box-sizing:border-box!important;width:15px!important;min-width:15px!important;max-width:15px!important;height:15px!important;min-height:15px!important;max-height:15px!important;margin:0!important;padding:0!important;font-size:0!important;line-height:0!important;opacity:.65!important;color:inherit!important;background:currentColor!important;mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill-rule%3D%27evenodd%27%20d%3D%27M1%203.5h14v2H1zM2%205.5h1.6V13H2zM12.4%205.5H14V13h-1.6zM6.8%205.5h5.6v3.7H6.8zM8.9%207h1.4v.9H8.9z%27%2F%3E%3C%2Fsvg%3E\") center/15px 15px no-repeat!important;-webkit-mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill-rule%3D%27evenodd%27%20d%3D%27M1%203.5h14v2H1zM2%205.5h1.6V13H2zM12.4%205.5H14V13h-1.6zM6.8%205.5h5.6v3.7H6.8zM8.9%207h1.4v.9H8.9z%27%2F%3E%3C%2Fsvg%3E\") center/15px 15px no-repeat!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-inbox::before,html body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-inbox svg{display:none!important;content:none!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))):hover .bp3-icon-inbox{opacity:.9!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-shop{position:absolute!important;top:50%!important;left:18px!important;right:auto!important;bottom:auto!important;transform:translateY(-50%)!important;display:block!important;box-sizing:border-box!important;width:15px!important;min-width:15px!important;max-width:15px!important;height:15px!important;min-height:15px!important;max-height:15px!important;margin:0!important;padding:0!important;font-size:0!important;line-height:0!important;opacity:.65!important;color:inherit!important;background:currentColor!important;mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M3%201h10l2%204v3H1V5zm0%208h10v6H3zm2%201v5h3v-5z%22%2F%3E%3C%2Fsvg%3E\") center/15px 15px no-repeat!important;-webkit-mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M3%201h10l2%204v3H1V5zm0%208h10v6H3zm2%201v5h3v-5z%22%2F%3E%3C%2Fsvg%3E\") center/15px 15px no-repeat!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-shop::before,html body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))) .bp3-icon-shop svg{display:none!important;content:none!important;}\nhtml body .roam-app .roam-sidebar-container :is(.log-button,#roam-memo-wrapper:not(:has(.log-button))):hover .bp3-icon-shop{opacity:.9!important;}\n",
  "scroll-indicator": "\nhtml body .roam-app .roam-main > .roam-body-main > .rm-article-wrapper,\nhtml body .roam-app .roam-main > .roam-body-main #rm-log-container {\n  scrollbar-width: thin !important;\n  scrollbar-color: transparent transparent !important;\n}\nhtml body .roam-app .roam-main > .roam-body-main > .rm-article-wrapper.mag-scroll-active,\nhtml body .roam-app .roam-main > .roam-body-main #rm-log-container.mag-scroll-active {\n  scrollbar-color: var(--mag-border) transparent !important;\n}\nhtml body .roam-app .roam-main > .roam-body-main > .rm-article-wrapper::-webkit-scrollbar,\nhtml body .roam-app .roam-main > .roam-body-main #rm-log-container::-webkit-scrollbar {\n  width: 7px !important;\n}\nhtml body .roam-app .roam-main > .roam-body-main > .rm-article-wrapper::-webkit-scrollbar-track,\nhtml body .roam-app .roam-main > .roam-body-main #rm-log-container::-webkit-scrollbar-track {\n  background: transparent !important;\n}\nhtml body .roam-app .roam-main > .roam-body-main > .rm-article-wrapper::-webkit-scrollbar-thumb,\nhtml body .roam-app .roam-main > .roam-body-main #rm-log-container::-webkit-scrollbar-thumb {\n  background: transparent !important;\n  border-radius: 8px !important;\n}\nhtml body .roam-app .roam-main > .roam-body-main > .rm-article-wrapper.mag-scroll-active::-webkit-scrollbar-thumb,\nhtml body .roam-app .roam-main > .roam-body-main #rm-log-container.mag-scroll-active::-webkit-scrollbar-thumb {\n  background: var(--mag-border) !important;\n}\n",
  "tags": "/* ==========================================================\n   08. notes 分类：#[[notes]]/… 与 [[notes]]/… 都识别\n   栏目签：印刷符号（衬线）+ 小号大写栏目名，淡同色底、方角\n   ¶ Literature note • ❧ Permanent Notes • † Footnote • § Definition • ◎ Voice note\n   ========================================================== */\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Voicenotes\"], span[data-link-title=\"Voicenotes\"]) {\n  --note-bg: var(--note-voice-bg); --note-ink: var(--note-voice-ink); --note-label: \"Voice note\"; --note-glyph: \"◎\";\n}\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"LiteratureNotes\"], span[data-link-title=\"LiteratureNotes\"]) {\n  --note-bg: var(--note-lit-bg); --note-ink: var(--note-lit-ink); --note-label: \"Literature note\"; --note-glyph: \"¶\";\n}\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"PermanentNotes\"], span[data-link-title=\"PermanentNotes\"]) {\n  --note-bg: var(--note-green-bg); --note-ink: var(--note-green-ink); --note-label: \"Permanent Notes\"; --note-glyph: \"❧\";\n}\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Footnotes\"], span[data-link-title=\"Footnotes\"]) {\n  --note-bg: var(--note-foot-bg); --note-ink: var(--note-foot-ink); --note-label: \"Footnote\"; --note-glyph: \"†\";\n}\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"DefinitionNotes\"], span[data-link-title=\"DefinitionNotes\"]) {\n  --note-bg: var(--note-def-bg); --note-ink: var(--note-def-ink); --note-label: \"Definition\"; --note-glyph: \"§\";\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Voicenotes\"], span.rm-page-ref--tag[data-tag=\"LiteratureNotes\"], span.rm-page-ref--tag[data-tag=\"PermanentNotes\"], span.rm-page-ref--tag[data-tag=\"Footnotes\"], span.rm-page-ref--tag[data-tag=\"DefinitionNotes\"], span[data-link-title=\"Voicenotes\"] > .rm-page-ref, span[data-link-title=\"LiteratureNotes\"] > .rm-page-ref, span[data-link-title=\"PermanentNotes\"] > .rm-page-ref, span[data-link-title=\"Footnotes\"] > .rm-page-ref, span[data-link-title=\"DefinitionNotes\"] > .rm-page-ref) {\n  display: inline-flex !important;\n  align-items: baseline !important;\n  gap: 5px !important;\n  margin: 0 2px !important;\n  padding: 0 7px 0 6px !important;\n  font-size: 0 !important;\n  line-height: 1.7 !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  color: var(--note-ink) !important;\n  background: var(--note-bg) !important;\n  border: 0 !important;\n  border-radius: 2px !important;\n  box-shadow: none !important;\n  white-space: nowrap !important;\n  vertical-align: baseline !important;\n  transition: filter 0.15s ease !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Voicenotes\"], span.rm-page-ref--tag[data-tag=\"LiteratureNotes\"], span.rm-page-ref--tag[data-tag=\"PermanentNotes\"], span.rm-page-ref--tag[data-tag=\"Footnotes\"], span.rm-page-ref--tag[data-tag=\"DefinitionNotes\"], span[data-link-title=\"Voicenotes\"] > .rm-page-ref, span[data-link-title=\"LiteratureNotes\"] > .rm-page-ref, span[data-link-title=\"PermanentNotes\"] > .rm-page-ref, span[data-link-title=\"Footnotes\"] > .rm-page-ref, span[data-link-title=\"DefinitionNotes\"] > .rm-page-ref) > * {\n  display: none !important;\n}\n\n/* 印刷符号 */\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Voicenotes\"], span.rm-page-ref--tag[data-tag=\"LiteratureNotes\"], span.rm-page-ref--tag[data-tag=\"PermanentNotes\"], span.rm-page-ref--tag[data-tag=\"Footnotes\"], span.rm-page-ref--tag[data-tag=\"DefinitionNotes\"], span[data-link-title=\"Voicenotes\"] > .rm-page-ref, span[data-link-title=\"LiteratureNotes\"] > .rm-page-ref, span[data-link-title=\"PermanentNotes\"] > .rm-page-ref, span[data-link-title=\"Footnotes\"] > .rm-page-ref, span[data-link-title=\"DefinitionNotes\"] > .rm-page-ref)::before {\n  content: var(--note-glyph) !important;\n  font-family: var(--mag-heading), \"Apple Symbols\", \"Segoe UI Symbol\", serif !important;\n  font-size: 13px !important;\n  font-weight: 600 !important;\n  line-height: 1 !important;\n}\n\n/* 栏目名 */\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Voicenotes\"], span.rm-page-ref--tag[data-tag=\"LiteratureNotes\"], span.rm-page-ref--tag[data-tag=\"PermanentNotes\"], span.rm-page-ref--tag[data-tag=\"Footnotes\"], span.rm-page-ref--tag[data-tag=\"DefinitionNotes\"], span[data-link-title=\"Voicenotes\"] > .rm-page-ref, span[data-link-title=\"LiteratureNotes\"] > .rm-page-ref, span[data-link-title=\"PermanentNotes\"] > .rm-page-ref, span[data-link-title=\"Footnotes\"] > .rm-page-ref, span[data-link-title=\"DefinitionNotes\"] > .rm-page-ref)::after {\n  content: var(--note-label) !important;\n  font-family: var(--mag-body) !important;\n  font-size: 10.5px !important;\n  font-weight: 700 !important;\n  letter-spacing: 1.3px !important;\n  text-transform: uppercase !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Voicenotes\"], span.rm-page-ref--tag[data-tag=\"LiteratureNotes\"], span.rm-page-ref--tag[data-tag=\"PermanentNotes\"], span.rm-page-ref--tag[data-tag=\"Footnotes\"], span.rm-page-ref--tag[data-tag=\"DefinitionNotes\"], span[data-link-title=\"Voicenotes\"] > .rm-page-ref, span[data-link-title=\"LiteratureNotes\"] > .rm-page-ref, span[data-link-title=\"PermanentNotes\"] > .rm-page-ref, span[data-link-title=\"Footnotes\"] > .rm-page-ref, span[data-link-title=\"DefinitionNotes\"] > .rm-page-ref):hover {\n  filter: brightness(0.95) saturate(1.2) !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span[data-link-title=\"Voicenotes\"], span[data-link-title=\"LiteratureNotes\"], span[data-link-title=\"PermanentNotes\"], span[data-link-title=\"Footnotes\"], span[data-link-title=\"DefinitionNotes\"]) > .rm-page-ref__brackets {\n  display: none !important;\n}\n/* ==========================================================\n   21. 特殊标签：只作用于 #标签 / #[[标签]]；普通 [[双链]] 保持默认链接\n   四种版面语言：\n   21.1 栏目签（moc、project）：印刷符号 + 小号大写名称，与 notes 同一套\n   21.2 实体（书名斜体、人名 / 行业小号大写、股票等宽数字）\n   21.3 印章（四象限、研究深度、major 等状态）：细线方框、无渐变无动画\n   21.4 页边铅笔批注（motive / rediscover）\n   去掉命名空间前缀的显示名由脚本写入 data-mag-label\n   ========================================================== */\n\n/* ---------- 21.1 栏目签 ---------- */\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag^=\"[[moc]]/\"]) {\n  --tab-ink: #5b4fb0; --tab-bg: rgba(91, 79, 176, 0.10); --tab-glyph: \"☰\";\n}\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag^=\"[[project]]/\"], [data-tag^=\"project/\"]) {\n  --tab-ink: #6b3fa0; --tab-bg: rgba(107, 63, 160, 0.09); --tab-glyph: \"▣\";\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag^=\"[[moc]]/\"], [data-tag^=\"[[project]]/\"], [data-tag^=\"project/\"]) {\n  display: inline-flex !important;\n  align-items: baseline !important;\n  gap: 5px !important;\n  margin: 0 2px !important;\n  padding: 0 7px 0 6px !important;\n  line-height: 1.7 !important;\n  font-weight: 600 !important;\n  font-style: normal !important;\n  letter-spacing: 0.2px !important;\n  color: var(--tab-ink) !important;\n  background: var(--tab-bg) !important;\n  border: 0 !important;\n  border-radius: 2px !important;\n  box-shadow: none !important;\n  filter: none !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag^=\"[[moc]]/\"], [data-tag^=\"[[project]]/\"], [data-tag^=\"project/\"])::before {\n  content: var(--tab-glyph) !important;\n  font-family: var(--mag-heading), \"Apple Symbols\", \"Segoe UI Symbol\", serif !important;\n  font-size: 12px !important;\n  font-weight: 600 !important;\n  margin: 0 !important;\n}\n\n/* ---------- 21.2 实体 ---------- */\n\n/* 去掉命名空间前缀：只显示 data-mag-label */\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-mag-label] {\n  font-size: 0 !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-mag-label] > * {\n  display: none !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-mag-label]::after {\n  content: attr(data-mag-label) !important;\n  font-size: var(--mag-label-size, 15px) !important;\n}\n\n/* 栏目签用了 data-mag-label 时，字号回到正文大小的 0.9 */\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag^=\"[[moc]]/\"], [data-tag^=\"[[project]]/\"], [data-tag^=\"project/\"])[data-mag-label] {\n  --mag-label-size: 14px;\n}\n\n/* 书名：衬线斜体，出版物的标准写法 */\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag^=\"[[book]]/\"] {\n  --mag-label-size: 16px;\n  padding: 0 !important;\n  font-family: var(--mag-aside-font) !important;\n  font-style: italic !important;\n  font-weight: 500 !important;\n  font-synthesis: none !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border-bottom: 1px solid color-mix(in srgb, var(--mag-ink) 25%, transparent) !important;\n  border-radius: 0 !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag^=\"[[book]]/\"]::after {\n  font-family: var(--mag-aside-font) !important;\n  font-style: italic !important;\n}\n\n/* 人名、行业：小号大写，像报刊里的人名与机构名 */\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag*=\"Giant/\"], [data-tag*=\"Industry/\"]) {\n  --mag-label-size: 12.5px;\n  padding: 0 !important;\n  background: transparent !important;\n  border-radius: 0 !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag*=\"Giant/\"], [data-tag*=\"Industry/\"])::after {\n  font-weight: 700 !important;\n  letter-spacing: 1px !important;\n  text-transform: uppercase !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag*=\"Giant/\"] { color: #8a6a1f !important; }\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag*=\"Industry/\"] { color: #3e5566 !important; }\n\n/* 股票：等宽数字，财经版面的写法 */\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag*=\"($\"] {\n  padding: 0 !important;\n  font-weight: 600 !important;\n  font-variant-numeric: tabular-nums !important;\n  letter-spacing: 0.2px !important;\n  color: #2f7d5b !important;\n  background: transparent !important;\n  border-bottom: 1px dotted color-mix(in srgb, #2f7d5b 60%, transparent) !important;\n  border-radius: 0 !important;\n}\n\n/* ---------- 21.3 印章 ---------- */\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag=\"Quadrant 1\"] { --stamp-ink: #a8443a; --stamp-bg: transparent; --stamp-label: \"Q1 • Do first\"; }\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag=\"Quadrant 2\"] { --stamp-ink: var(--mag-gold-ink); --stamp-bg: var(--mag-yellow-soft); --stamp-label: \"Q2 • Schedule\"; }\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag=\"Quadrant 3\"] { --stamp-ink: #5f6b78; --stamp-bg: transparent; --stamp-label: \"Q3 • Delegate\"; }\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag=\"quick screening\"] { --stamp-ink: #3e748c; --stamp-bg: transparent; --stamp-label: \"Screening  ●○○\"; }\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag=\"deep analysis\"] { --stamp-ink: #3e748c; --stamp-bg: transparent; --stamp-label: \"Analysis  ●●○\"; }\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag=\"professional research\"] { --stamp-ink: #3e748c; --stamp-bg: transparent; --stamp-label: \"Research  ●●●\"; }\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag=\"[[tags]]/checklist\"] { --stamp-ink: #4a4f5a; --stamp-bg: transparent; --stamp-label: \"☐ Checklist\"; }\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag=\"[[tags]]/antifragile\"] { --stamp-ink: #9c5b22; --stamp-bg: transparent; --stamp-label: \"Antifragile\"; }\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag=\"[[tags]]/owing\"] { --stamp-ink: #b23a63; --stamp-bg: transparent; --stamp-label: \"Owing\"; }\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag=\"major\"] { --stamp-ink: var(--mag-paper); --stamp-bg: var(--mag-ink); --stamp-label: \"Major\"; }\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag=\"Quadrant 1\"], [data-tag=\"Quadrant 2\"], [data-tag=\"Quadrant 3\"], [data-tag=\"quick screening\"], [data-tag=\"deep analysis\"], [data-tag=\"professional research\"], [data-tag=\"[[tags]]/checklist\"], [data-tag=\"[[tags]]/antifragile\"], [data-tag=\"[[tags]]/owing\"], [data-tag=\"major\"]) {\n  display: inline-block !important;\n  margin: 0 3px !important;\n  padding: 0 6px !important;\n  font-size: 0 !important;\n  line-height: 1.55 !important;\n  font-style: normal !important;\n  color: var(--stamp-ink) !important;\n  background: var(--stamp-bg) !important;\n  border: 1.25px solid currentColor !important;\n  border-radius: 2px !important;\n  box-shadow: none !important;\n  transform: none !important;\n  animation: none !important;\n  vertical-align: 1px !important;\n  white-space: nowrap !important;\n  overflow: visible !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag=\"major\"] {\n  border-color: var(--mag-ink) !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag=\"Quadrant 1\"], [data-tag=\"Quadrant 2\"], [data-tag=\"Quadrant 3\"], [data-tag=\"quick screening\"], [data-tag=\"deep analysis\"], [data-tag=\"professional research\"], [data-tag=\"[[tags]]/checklist\"], [data-tag=\"[[tags]]/antifragile\"], [data-tag=\"[[tags]]/owing\"], [data-tag=\"major\"]) > * {\n  display: none !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag=\"Quadrant 1\"], [data-tag=\"Quadrant 2\"], [data-tag=\"Quadrant 3\"], [data-tag=\"quick screening\"], [data-tag=\"deep analysis\"], [data-tag=\"professional research\"], [data-tag=\"[[tags]]/checklist\"], [data-tag=\"[[tags]]/antifragile\"], [data-tag=\"[[tags]]/owing\"], [data-tag=\"major\"])::before {\n  content: none !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag=\"Quadrant 1\"], [data-tag=\"Quadrant 2\"], [data-tag=\"Quadrant 3\"], [data-tag=\"quick screening\"], [data-tag=\"deep analysis\"], [data-tag=\"professional research\"], [data-tag=\"[[tags]]/checklist\"], [data-tag=\"[[tags]]/antifragile\"], [data-tag=\"[[tags]]/owing\"], [data-tag=\"major\"])::after {\n  content: var(--stamp-label) !important;\n  font-family: var(--mag-body) !important;\n  font-size: 10px !important;\n  font-weight: 700 !important;\n  letter-spacing: 1.2px !important;\n  text-transform: uppercase !important;\n  white-space: pre !important;\n}\n\n/* ---------- 21.4 页边铅笔批注 ---------- */\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag=\"motive-notes\"] { --pencil-label: \"↳ motive\"; }\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag=\"rediscover-notes\"] { --pencil-label: \"↻ rediscover\"; }\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag=\"motive-notes\"], [data-tag=\"rediscover-notes\"]) {\n  display: inline !important;\n  margin: 0 3px !important;\n  padding: 0 !important;\n  font-size: 0 !important;\n  color: var(--mag-faint) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  transform: none !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag=\"motive-notes\"], [data-tag=\"rediscover-notes\"]) > * {\n  display: none !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag=\"motive-notes\"], [data-tag=\"rediscover-notes\"])::before {\n  content: none !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag=\"motive-notes\"], [data-tag=\"rediscover-notes\"])::after {\n  content: var(--pencil-label) !important;\n  font-family: var(--mag-aside-font) !important;\n  font-size: 13.5px !important;\n  font-style: italic !important;\n  font-synthesis: none !important;\n  letter-spacing: 0.2px !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is([data-tag=\"motive-notes\"], [data-tag=\"rediscover-notes\"]):hover {\n  color: var(--mag-muted) !important;\n}\n/* ==========================================================\n   35. Reading List 栏目签（Roam Reader 生成的三个页面）\n   #[[Reading List: …]] 与 [[Reading List: …]] 都识别，和 notes 栏目签同一套：\n   印刷符号（衬线）+ 小号大写栏目名，淡同色底、方角\n   ↘ Reading · Inbox（待读，蓝灰）· ☞ Reading · Shortlist（精选，金色）· ∎ Reading · Archive（归档，灰）\n   ========================================================== */\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Reading List: Inbox\"], span[data-link-title=\"Reading List: Inbox\"]) {\n  --note-bg: var(--note-lit-bg); --note-ink: var(--note-lit-ink); --note-label: \"Reading · Inbox\"; --note-glyph: \"↘\";\n}\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Reading List: Shortlist\"], span[data-link-title=\"Reading List: Shortlist\"]) {\n  --note-bg: var(--mag-yellow-soft); --note-ink: var(--mag-gold-ink); --note-label: \"Reading · Shortlist\"; --note-glyph: \"☞\";\n}\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Reading List: Archive\"], span[data-link-title=\"Reading List: Archive\"]) {\n  --note-bg: var(--note-def-bg); --note-ink: var(--note-def-ink); --note-label: \"Reading · Archive\"; --note-glyph: \"∎\";\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Reading List: Inbox\"], span.rm-page-ref--tag[data-tag=\"Reading List: Shortlist\"], span.rm-page-ref--tag[data-tag=\"Reading List: Archive\"], span[data-link-title=\"Reading List: Inbox\"] > .rm-page-ref, span[data-link-title=\"Reading List: Shortlist\"] > .rm-page-ref, span[data-link-title=\"Reading List: Archive\"] > .rm-page-ref) {\n  display: inline-flex !important;\n  align-items: baseline !important;\n  gap: 5px !important;\n  margin: 0 2px !important;\n  padding: 0 7px 0 6px !important;\n  font-size: 0 !important;\n  line-height: 1.7 !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  color: var(--note-ink) !important;\n  background: var(--note-bg) !important;\n  border: 0 !important;\n  border-radius: 2px !important;\n  box-shadow: none !important;\n  white-space: nowrap !important;\n  vertical-align: baseline !important;\n  transition: filter 0.15s ease !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Reading List: Inbox\"], span.rm-page-ref--tag[data-tag=\"Reading List: Shortlist\"], span.rm-page-ref--tag[data-tag=\"Reading List: Archive\"], span[data-link-title=\"Reading List: Inbox\"] > .rm-page-ref, span[data-link-title=\"Reading List: Shortlist\"] > .rm-page-ref, span[data-link-title=\"Reading List: Archive\"] > .rm-page-ref) > * {\n  display: none !important;\n}\n\n/* 印刷符号 */\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Reading List: Inbox\"], span.rm-page-ref--tag[data-tag=\"Reading List: Shortlist\"], span.rm-page-ref--tag[data-tag=\"Reading List: Archive\"], span[data-link-title=\"Reading List: Inbox\"] > .rm-page-ref, span[data-link-title=\"Reading List: Shortlist\"] > .rm-page-ref, span[data-link-title=\"Reading List: Archive\"] > .rm-page-ref)::before {\n  content: var(--note-glyph) !important;\n  font-family: var(--mag-heading), \"Apple Symbols\", \"Segoe UI Symbol\", serif !important;\n  font-size: 13px !important;\n  font-weight: 600 !important;\n  line-height: 1 !important;\n}\n\n/* 栏目名 */\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Reading List: Inbox\"], span.rm-page-ref--tag[data-tag=\"Reading List: Shortlist\"], span.rm-page-ref--tag[data-tag=\"Reading List: Archive\"], span[data-link-title=\"Reading List: Inbox\"] > .rm-page-ref, span[data-link-title=\"Reading List: Shortlist\"] > .rm-page-ref, span[data-link-title=\"Reading List: Archive\"] > .rm-page-ref)::after {\n  content: var(--note-label) !important;\n  font-family: var(--mag-body) !important;\n  font-size: 10.5px !important;\n  font-weight: 700 !important;\n  letter-spacing: 1.3px !important;\n  text-transform: uppercase !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span.rm-page-ref--tag[data-tag=\"Reading List: Inbox\"], span.rm-page-ref--tag[data-tag=\"Reading List: Shortlist\"], span.rm-page-ref--tag[data-tag=\"Reading List: Archive\"], span[data-link-title=\"Reading List: Inbox\"] > .rm-page-ref, span[data-link-title=\"Reading List: Shortlist\"] > .rm-page-ref, span[data-link-title=\"Reading List: Archive\"] > .rm-page-ref):hover {\n  filter: brightness(0.95) saturate(1.2) !important;\n}\n\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) :is(span[data-link-title=\"Reading List: Inbox\"], span[data-link-title=\"Reading List: Shortlist\"], span[data-link-title=\"Reading List: Archive\"]) > .rm-page-ref__brackets {\n  display: none !important;\n}\nhtml body .roam-app .rm-page-ref--tag:is([data-tag=\"[[tags]]/mood-high\"],[data-tag=\"[[tags]]/mood-mid\"],[data-tag=\"[[tags]]/mood-low\"]){display:inline-flex!important;align-items:center!important;gap:4px!important;margin:0 3px!important;padding:0!important;color:var(--mag-muted,#666675)!important;background:none!important;border:0!important;border-radius:0!important;box-shadow:none!important;font-size:0!important;line-height:1!important;text-decoration:none!important;vertical-align:.08em!important;white-space:nowrap!important}html body .roam-app .rm-page-ref--tag:is([data-tag=\"[[tags]]/mood-high\"],[data-tag=\"[[tags]]/mood-mid\"],[data-tag=\"[[tags]]/mood-low\"])::before{font-family:Georgia,\"Times New Roman\",serif!important;font-size:10px!important;font-style:normal!important;font-weight:400!important;line-height:1!important}html body .roam-app .rm-page-ref--tag:is([data-tag=\"[[tags]]/mood-high\"],[data-tag=\"[[tags]]/mood-mid\"],[data-tag=\"[[tags]]/mood-low\"])::after{font-family:var(--mag-display,Georgia,\"Times New Roman\",serif)!important;font-size:11.5px!important;font-style:italic!important;font-weight:400!important;letter-spacing:.015em!important;line-height:1!important}html body .roam-app .rm-page-ref--tag[data-tag=\"[[tags]]/mood-high\"]::before{content:\"✦\"!important;color:var(--mag-gold,#b79a37)!important}html body .roam-app .rm-page-ref--tag[data-tag=\"[[tags]]/mood-high\"]::after{content:\"high spirits\"!important;color:#53715e!important}html body .roam-app .rm-page-ref--tag[data-tag=\"[[tags]]/mood-mid\"]::before{content:\"◇\"!important;color:var(--mag-gold-ink,#8b773e)!important}html body .roam-app .rm-page-ref--tag[data-tag=\"[[tags]]/mood-mid\"]::after{content:\"steady\"!important;color:var(--mag-ink,#1a1a2e)!important}html body .roam-app .rm-page-ref--tag[data-tag=\"[[tags]]/mood-low\"]::before{content:\"☾\"!important;color:#77778a!important}html body .roam-app .rm-page-ref--tag[data-tag=\"[[tags]]/mood-low\"]::after{content:\"low tide\"!important;color:#686b82!important}html body .roam-app .rm-page-ref--tag:is([data-tag=\"[[tags]]/mood-high\"],[data-tag=\"[[tags]]/mood-mid\"],[data-tag=\"[[tags]]/mood-low\"]):hover::after{color:var(--mag-blue,#236dbb)!important}\n\n/* Decorative labels must never swallow the native Roam link hit target. */\nhtml body .roam-app span.rm-page-ref--tag { position: relative !important; pointer-events: auto !important; }\nhtml body .roam-app span.rm-page-ref--tag::before,\nhtml body .roam-app span.rm-page-ref--tag::after { pointer-events: none !important; }\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag*=\"($\"] {\n  font-size: 16px !important;\n  line-height: 1.35 !important;\n  cursor: pointer !important;\n  pointer-events: auto !important;\n}\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag[data-tag*=\"($\"]::after {\n  font-size: 16px !important;\n  pointer-events: none !important;\n}\n/* Status stamps were too small at the original 10px size. */\nhtml body .roam-app :is(.roam-body-main, #right-sidebar) span.rm-page-ref--tag:is(\n  [data-tag=\"Quadrant 1\"], [data-tag=\"Quadrant 2\"], [data-tag=\"Quadrant 3\"],\n  [data-tag=\"quick screening\"], [data-tag=\"deep analysis\"], [data-tag=\"professional research\"],\n  [data-tag=\"[[tags]]/checklist\"], [data-tag=\"[[tags]]/antifragile\"], [data-tag=\"[[tags]]/owing\"], [data-tag=\"major\"]\n)::after { font-size: 12px !important; }\n\n/* Keep the native link target and handlers; enlarge only decorative stamp text. */\nhtml body .roam-app span.rm-page-ref--tag::before,\nhtml body .roam-app span.rm-page-ref--tag::after {pointer-events:none!important;}\nhtml body .roam-app span.rm-page-ref--tag:is([data-tag=\"Quadrant 1\"],[data-tag=\"Quadrant 2\"],[data-tag=\"Quadrant 3\"],[data-tag=\"quick screening\"],[data-tag=\"deep analysis\"],[data-tag=\"professional research\"],[data-tag=\"[[tags]]/checklist\"],[data-tag=\"[[tags]]/antifragile\"],[data-tag=\"[[tags]]/owing\"],[data-tag=\"major\"])::after {font-size:13px!important;line-height:1.5!important;}\n\n/* A common inline box prevents font-size:0 and mixed inline-block/flex\n   baselines from shifting the note glyph and namespace marker downward. */\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) span.rm-page-ref--tag:is([data-tag=\"Quadrant 1\"],[data-tag=\"Quadrant 2\"],[data-tag=\"Quadrant 3\"],[data-tag=\"quick screening\"],[data-tag=\"deep analysis\"],[data-tag=\"professional research\"],[data-tag=\"[[tags]]/checklist\"],[data-tag=\"[[tags]]/antifragile\"],[data-tag=\"[[tags]]/owing\"],[data-tag=\"major\"],[data-tag=\"Voicenotes\"],[data-tag=\"LiteratureNotes\"],[data-tag=\"PermanentNotes\"],[data-tag=\"Footnotes\"],[data-tag=\"DefinitionNotes\"],[data-tag^=\"[[moc]]/\"],[data-tag^=\"moc/\"],[data-tag^=\"[[project]]/\"],[data-tag^=\"project/\"]) {display:inline-flex!important;align-items:center!important;vertical-align:middle!important;box-sizing:border-box!important;height:24px!important;min-height:24px!important;line-height:20px!important;margin-block:0!important;transform:none!important;}\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) span.rm-page-ref--tag:is([data-tag=\"Quadrant 1\"],[data-tag=\"Quadrant 2\"],[data-tag=\"Quadrant 3\"],[data-tag=\"quick screening\"],[data-tag=\"deep analysis\"],[data-tag=\"professional research\"],[data-tag=\"[[tags]]/checklist\"],[data-tag=\"[[tags]]/antifragile\"],[data-tag=\"[[tags]]/owing\"],[data-tag=\"major\"],[data-tag=\"Voicenotes\"],[data-tag=\"LiteratureNotes\"],[data-tag=\"PermanentNotes\"],[data-tag=\"Footnotes\"],[data-tag=\"DefinitionNotes\"],[data-tag^=\"[[moc]]/\"],[data-tag^=\"moc/\"],[data-tag^=\"[[project]]/\"],[data-tag^=\"project/\"])::before,\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) span.rm-page-ref--tag:is([data-tag=\"Quadrant 1\"],[data-tag=\"Quadrant 2\"],[data-tag=\"Quadrant 3\"],[data-tag=\"quick screening\"],[data-tag=\"deep analysis\"],[data-tag=\"professional research\"],[data-tag=\"[[tags]]/checklist\"],[data-tag=\"[[tags]]/antifragile\"],[data-tag=\"[[tags]]/owing\"],[data-tag=\"major\"],[data-tag=\"Voicenotes\"],[data-tag=\"LiteratureNotes\"],[data-tag=\"PermanentNotes\"],[data-tag=\"Footnotes\"],[data-tag=\"DefinitionNotes\"],[data-tag^=\"[[moc]]/\"],[data-tag^=\"moc/\"],[data-tag^=\"[[project]]/\"],[data-tag^=\"project/\"])::after {display:block!important;align-self:center!important;line-height:20px!important;margin-block:0!important;transform:none!important;}\n\n/* Centre the actual symbol, not a font glyph line box. */\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) span.rm-page-ref--tag:is([data-tag=\"DefinitionNotes\"],[data-tag^=\"[[moc]]/\"],[data-tag^=\"moc/\"],[data-tag^=\"[[project]]/\"],[data-tag^=\"project/\"]) {gap:6px!important;}\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) span.rm-page-ref--tag[data-tag=\"DefinitionNotes\"]::before {content:\"\"!important;display:block!important;flex:0 0 13px!important;width:13px!important;height:13px!important;min-height:0!important;line-height:0!important;background:currentColor!important;mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M10.5%203.5C10.5%201.5%204.2%201.6%204.2%204.2c0%202.5%207.2%202.6%207.2%205.5%200%202.7-6.9%202.9-6.9.5M10.4%207.4c2-2.4-.2-3.1-2.6-4M5.1%208.4C3%2010.6%205%2011.7%207.6%2012.6%22%2F%3E%3C%2Fsvg%3E\") center/contain no-repeat!important;-webkit-mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M10.5%203.5C10.5%201.5%204.2%201.6%204.2%204.2c0%202.5%207.2%202.6%207.2%205.5%200%202.7-6.9%202.9-6.9.5M10.4%207.4c2-2.4-.2-3.1-2.6-4M5.1%208.4C3%2010.6%205%2011.7%207.6%2012.6%22%2F%3E%3C%2Fsvg%3E\") center/contain no-repeat!important;}\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) span.rm-page-ref--tag:is([data-tag^=\"[[moc]]/\"],[data-tag^=\"moc/\"],[data-tag^=\"[[project]]/\"],[data-tag^=\"project/\"])::before {content:\"\"!important;display:block!important;flex:0 0 13px!important;width:13px!important;height:13px!important;min-height:0!important;line-height:0!important;background:currentColor!important;mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M3%204h10M3%208h10M3%2012h10%22%2F%3E%3C%2Fsvg%3E\") center/contain no-repeat!important;-webkit-mask:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M3%204h10M3%208h10M3%2012h10%22%2F%3E%3C%2Fsvg%3E\") center/contain no-repeat!important;}\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) span.rm-page-ref--tag[data-tag=\"[[tags]]/checklist\"] {gap:6px!important;--stamp-label:\"Checklist\"!important;}\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) span.rm-page-ref--tag[data-tag=\"[[tags]]/checklist\"]::before {content:\"\"!important;display:block!important;box-sizing:border-box!important;flex:0 0 8px!important;width:8px!important;height:8px!important;border:1px solid currentColor!important;line-height:0!important;background:transparent!important;}\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) span.rm-page-ref--tag:is([data-tag=\"DefinitionNotes\"],[data-tag=\"[[tags]]/checklist\"],[data-tag^=\"[[moc]]/\"],[data-tag^=\"moc/\"],[data-tag^=\"[[project]]/\"],[data-tag^=\"project/\"])::after {line-height:1!important;align-self:center!important;}\n\n/* Give generated label text a real native-link hit box. */\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) span.rm-page-ref--tag[data-folio-entity] {\n display:inline-flex!important;align-items:baseline!important;vertical-align:baseline!important;\n height:auto!important;min-height:0!important;max-height:none!important;line-height:normal!important;\n pointer-events:auto!important;cursor:pointer!important;\n}\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) span.rm-page-ref--tag[data-folio-entity]::after {\n display:block!important;line-height:1.4!important;pointer-events:none!important;\n}\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) span.rm-page-ref--tag:is([data-folio-entity=\"person\"],[data-folio-entity=\"industry\"]) {\n --mag-label-size:var(--mag-w-size,16px);\n}\n/* Both page-link and hashtag note labels use the same 12px size as Q1 stamps. */\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) :is(span.rm-page-ref--tag,span.rm-page-ref)[data-folio-note-label] {\n display:inline-flex!important;align-items:center!important;vertical-align:baseline!important;\n width:auto!important;max-width:none!important;height:auto!important;min-height:0!important;max-height:none!important;\n gap:5px!important;padding:2px 7px!important;line-height:normal!important;white-space:nowrap!important;\n pointer-events:auto!important;cursor:pointer!important;font-stretch:normal!important;\n}\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) :is(span.rm-page-ref--tag,span.rm-page-ref)[data-folio-note-label]::before,\nhtml body .roam-app :is(.roam-body-main,#right-sidebar) :is(span.rm-page-ref--tag,span.rm-page-ref)[data-folio-note-label]::after {\n font-size:12px!important;line-height:1.4!important;letter-spacing:normal!important;\n font-stretch:normal!important;transform:none!important;pointer-events:none!important;\n}\n",
  "block-controls": "/* ==========================================================\n   22. 块引用展开区、引用计数、块内按钮\n   ========================================================== */\n\nhtml body .rm-inline-references {\n  box-sizing: border-box !important;\n  margin: 8px 0 12px !important;\n  padding: 10px 14px !important;\n  background: var(--mag-shell) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 6px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-inline-references .rm-inline-reference {\n  margin: 0 !important;\n  padding: 10px 0 !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-inline-references .rm-inline-reference + .rm-inline-reference {\n  border-top: 1px solid var(--mag-border) !important;\n}\n\nhtml body .rm-inline-references .rm-inline-reference:first-child { padding-top: 0 !important; }\nhtml body .rm-inline-references .rm-inline-reference:last-child { padding-bottom: 0 !important; }\n\nhtml body .rm-inline-references .rm-inline-reference > .flex-h-box {\n  align-items: center !important;\n  gap: 4px !important;\n  margin: 0 0 5px !important;\n  padding: 0 !important;\n  background: transparent !important;\n}\n\nhtml body .rm-inline-references .rm-caret-wrapper {\n  display: inline-flex !important;\n  align-items: center !important;\n  align-self: center !important;\n  margin-top: 0 !important;\n  color: var(--mag-muted) !important;\n}\n\nhtml body .rm-inline-references .rm-zoom-path {\n  font-family: var(--mag-body) !important;\n  font-size: 12px !important;\n  font-weight: 500 !important;\n  line-height: 1.6 !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n}\n\nhtml body .rm-inline-references :is(.rm-zoom-item-content, .rm-zoom-mask) {\n  font-family: inherit !important;\n  font-size: inherit !important;\n  line-height: inherit !important;\n  color: inherit !important;\n  background: transparent !important;\n}\n\nhtml body .rm-inline-references .rm-zoom-item-content:hover {\n  color: var(--mag-ink) !important;\n}\n\nhtml body .rm-inline-references .rm-zoom-chevron {\n  color: var(--mag-muted) !important;\n  opacity: 0.5 !important;\n}\n\nhtml body .rm-inline-references .rm-inline-reference > .rm-block-children {\n  margin-top: 0 !important;\n  padding-block: 0 !important;\n  background: transparent !important;\n}\n\nhtml body .rm-inline-references .rm-multibar {\n  border-color: var(--mag-border) !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-inline-references .rm-filter-popup-button .bp3-button {\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-inline-references .rm-filter-popup-button .bp3-button:hover {\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n}\n\n/* 引用计数：脚注式数字（正文、右侧栏、弹出预览） */\nhtml body .rm-reference-footnote {\n  display: inline !important;\n  margin-left: 4px !important;\n  padding: 2px !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 3px !important;\n  box-shadow: none !important;\n  cursor: pointer !important;\n}\n\nhtml body .rm-reference-footnote sup.rm-block__ref-count-footnote {\n  position: static !important;\n  display: inline !important;\n  vertical-align: super !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  font-family: var(--mag-body) !important;\n  font-size: 10px !important;\n  font-weight: 500 !important;\n  font-style: normal !important;\n  font-variant-numeric: tabular-nums !important;\n  line-height: 1 !important;\n  letter-spacing: 0 !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body button.rm-block__ref-count {\n  min-width: 20px !important;\n  min-height: 20px !important;\n  height: auto !important;\n  padding: 2px 5px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 10px !important;\n  font-weight: 500 !important;\n  font-style: normal !important;\n  font-variant-numeric: tabular-nums !important;\n  line-height: 16px !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  background-image: none !important;\n  border: 0 !important;\n  border-radius: 3px !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n\nhtml body :is(.rm-reference-footnote:hover, .rm-reference-footnote:has(.rm-active), button.rm-block__ref-count:hover, button.rm-block__ref-count.rm-active) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n}\n\nhtml body .rm-reference-footnote:hover sup.rm-block__ref-count-footnote,\nhtml body .rm-reference-footnote sup.rm-block__ref-count-footnote.rm-active {\n  color: var(--mag-ink) !important;\n}\n\n/* 块内纯按钮（如 roam/css 的 Stop this）：细下划线小签 */\nhtml body .roam-app .rm-block__input button[class=\"bp3-button\"] {\n  display: inline-flex !important;\n  align-items: center !important;\n  vertical-align: baseline !important;\n  min-width: 0 !important;\n  min-height: 0 !important;\n  margin: 0 5px !important;\n  padding: 2px 5px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 11px !important;\n  font-weight: 500 !important;\n  font-variant-numeric: tabular-nums !important;\n  line-height: 1.6 !important;\n  letter-spacing: 0.3px !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  background-image: none !important;\n  border: 0 !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  outline: none !important;\n  transition: color 0.15s ease, border-color 0.15s ease !important;\n}\n\nhtml body .roam-app .rm-block__input button[class=\"bp3-button\"]:is(:hover, :focus-visible) {\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border-bottom-color: var(--mag-gold) !important;\n}",
  "or-dropdown": "/* ==========================================================\n   22.1 {{or: ❌ | ✅}} 下拉选择：去掉方框与箭头，改为可点的小签\n   ✅ / ❌ 由脚本标记为 data-mag-or=\"yes|no\"，画成与 TODO 方框同一套的小方框：\n   是 = 金色细勾；否 = 淡灰叉。其他选项（文字、别的 emoji）照常显示\n   ========================================================== */\n\n/* 与文字中部对齐：取消 Roam 给各层包装加的偏移，整体按行中线对齐 */\nhtml body .roam-app .rm-or-select {\n  position: relative !important;\n  top: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  vertical-align: middle !important;\n  margin: 0 2px !important;\n  padding: 0 !important;\n  line-height: 1 !important;\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-or-select :is(.bp3-popover-wrapper, .bp3-popover-target) {\n  position: static !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  vertical-align: middle !important;\n  margin: 0 !important;\n  line-height: 1 !important;\n}\n\nhtml body .roam-app .rm-or-select :is(.bp3-popover-wrapper, .bp3-popover-target, .rm-option),\nhtml body .roam-app .rm-or-select .bp3-popover-target > div {\n  min-width: 0 !important;\n  background: transparent !important;\n  background-image: none !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n\n/* 原生箭头全部隐藏：点小签本身即可展开 */\nhtml body .roam-app .rm-or-select :is(.bp3-icon, svg),\nhtml body .roam-app .rm-or-select::after,\nhtml body .roam-app .rm-or-select :is(.bp3-popover-wrapper, .bp3-popover-target, .bp3-popover-target > div, .rm-option)::after {\n  display: none !important;\n}\n\nhtml body .roam-app .rm-or-select .bp3-popover-target > div {\n  display: inline-flex !important;\n  align-items: center !important;\n  padding: 2px 4px !important;\n  line-height: 1 !important;\n  border-radius: 5px !important;\n  cursor: pointer !important;\n  transition: background-color 0.15s ease !important;\n}\n\nhtml body .roam-app .rm-or-select:hover .bp3-popover-target > div,\nhtml body .roam-app .rm-or-select .bp3-popover-open > div {\n  background: var(--mag-yellow-soft) !important;\n}\n\nhtml body .roam-app .rm-or-select .rm-option {\n  display: inline-flex !important;\n  align-items: center !important;\n  font-size: 0.95em !important;\n  line-height: 1.2 !important;\n}\n\n/* ✅ / ❌：隐藏 emoji，画小方框 */\nhtml body .roam-app .rm-or-select .rm-option:is([data-mag-or=\"yes\"], [data-mag-or=\"no\"]) {\n  position: relative !important;\n  box-sizing: border-box !important;\n  width: 15px !important;\n  height: 15px !important;\n  font-size: 0 !important;\n  border: 1.5px solid color-mix(in srgb, var(--mag-muted) 75%, transparent) !important;\n  border-radius: 3.5px !important;\n}\n\nhtml body .roam-app .rm-or-select .rm-option:is([data-mag-or=\"yes\"], [data-mag-or=\"no\"])::before {\n  content: \"\" !important;\n  position: absolute !important;\n  inset: -1.5px !important;\n  pointer-events: none !important;\n}\n\nhtml body .roam-app .rm-or-select .rm-option[data-mag-or=\"yes\"] {\n  border-color: color-mix(in srgb, var(--mag-gold) 70%, transparent) !important;\n  background: var(--mag-yellow-soft) !important;\n}\n\nhtml body .roam-app .rm-or-select .rm-option[data-mag-or=\"yes\"]::before {\n  background-color: var(--mag-gold-ink) !important;\n  -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M4 8.4l2.6 2.6L12 5.6' fill='none' stroke='black' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round'/></svg>\") center / 13px 13px no-repeat !important;\n  mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M4 8.4l2.6 2.6L12 5.6' fill='none' stroke='black' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round'/></svg>\") center / 13px 13px no-repeat !important;\n}\n\nhtml body .roam-app .rm-or-select .rm-option[data-mag-or=\"no\"] {\n  border-color: color-mix(in srgb, var(--mag-faint) 55%, transparent) !important;\n}\n\nhtml body .roam-app .rm-or-select .rm-option[data-mag-or=\"no\"]::before {\n  background-color: var(--mag-faint) !important;\n  -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M5 5l6 6M11 5l-6 6' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round'/></svg>\") center / 12px 12px no-repeat !important;\n  mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M5 5l6 6M11 5l-6 6' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round'/></svg>\") center / 12px 12px no-repeat !important;\n}",
  "workbench-compat": "\n/* WorkBench Attribute Select compatibility.\n   Keep the trigger above neighbouring block chrome and the portalled menu clickable. */\nhtml body .roam-app :is(\n  [class*=\"roamjs-attribute-select\"],\n  [class*=\"attribute-select\"],\n  [data-roamjs-component*=\"attribute-select\"],\n  [data-roamjs-feature*=\"attribute-select\"]\n) {\n  position: relative !important;\n  z-index: 3 !important;\n  overflow: visible !important;\n  pointer-events: auto !important;\n}\nhtml body .roam-app :is(\n  [class*=\"roamjs-attribute-select\"],\n  [class*=\"attribute-select\"],\n  [data-roamjs-component*=\"attribute-select\"],\n  [data-roamjs-feature*=\"attribute-select\"]\n) :is(button, select, [role=\"button\"], [role=\"combobox\"], .bp3-popover-target) {\n  position: relative !important;\n  z-index: 4 !important;\n  pointer-events: auto !important;\n  cursor: pointer !important;\n}\nhtml body > .bp3-portal:has(:is([role=\"listbox\"], .bp3-menu, .bp3-select-popover)),\nhtml body > .bp4-portal:has(:is([role=\"listbox\"], .bp4-menu, .bp4-select-popover)) {\n  z-index: 10050 !important;\n  pointer-events: auto !important;\n}\nhtml body > :is(.bp3-portal, .bp4-portal) :is(\n  [role=\"listbox\"], [role=\"option\"],\n  .bp3-menu, .bp3-menu-item, .bp3-popover-content,\n  .bp4-menu, .bp4-menu-item, .bp4-popover-content\n) {\n  pointer-events: auto !important;\n}\n",
  "topbar": "/* ==========================================================\n   26. 顶栏：所有按钮统一（原生、扩展、打字机、🎲 3 TODO）\n   30px 方块 · 主题灰 · 悬停浅黄底 · 打开状态同色 · 无焦点光圈\n   ========================================================== */\n\nhtml body .roam-app .rm-topbar {\n  color: var(--mag-muted) !important;\n}\n\nhtml body :is(.rm-topbar .bp3-button:not([class*=\"bp3-intent\"]), #mag-typewriter-toggle, #delmar-random-todo-3-button) {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  flex-shrink: 0 !important;\n  min-width: 30px !important;\n  min-height: 30px !important;\n  height: 30px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 12.5px !important;\n  font-weight: 500 !important;\n  letter-spacing: 0 !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  background-image: none !important;\n  border: 0 !important;\n  border-radius: 6px !important;\n  box-shadow: none !important;\n  outline: none !important;\n  transition: background-color 0.15s ease, color 0.15s ease !important;\n}\n\n/* 图标跟随按钮颜色（Blueprint 默认写死 #5c7080） */\nhtml body .roam-app .rm-topbar .bp3-button:not([class*=\"bp3-intent\"])[class*=\"bp3-icon-\"]::before,\nhtml body .roam-app .rm-topbar .bp3-button:not([class*=\"bp3-intent\"]) :is(.bp3-icon, .bp3-icon-standard):not([style*=\"color\"]),\nhtml body .roam-app .rm-topbar > :is(.bp3-icon, .bp3-icon-standard):not([class*=\"bp3-intent\"]):not([style*=\"color\"]) {\n  color: inherit !important;\n}\n\nhtml body .roam-app .rm-topbar .bp3-icon svg {\n  width: 16px !important;\n  height: 16px !important;\n}\n\nhtml body :is(.rm-topbar .bp3-button:not([class*=\"bp3-intent\"]), #mag-typewriter-toggle, #delmar-random-todo-3-button):is(:hover, :focus-visible),\nhtml body .roam-app .rm-topbar .bp3-button:not([class*=\"bp3-intent\"]):is(.bp3-active, [aria-pressed=\"true\"], [aria-expanded=\"true\"]),\nhtml body .roam-app .rm-topbar .bp3-popover-open > .bp3-button:not([class*=\"bp3-intent\"]) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n}\n\nhtml body :is(.rm-topbar .bp3-button:not([class*=\"bp3-intent\"]), #mag-typewriter-toggle, #delmar-random-todo-3-button):is(:focus, :active, :focus-visible) {\n  outline: none !important;\n  box-shadow: none !important;\n}\n\n/* 打字机：开启时深色浅黄底；设了写作目标时底部出现进度细线，写满变金色 */\nhtml body #mag-typewriter-toggle {\n  position: relative !important;\n  width: 30px !important;\n  margin: 0 1px !important;\n  padding: 0 !important;\n}\n\nhtml body #mag-typewriter-toggle svg {\n  display: block !important;\n  width: 16px !important;\n  height: 16px !important;\n}\n\nhtml body #mag-typewriter-toggle:is(.bp3-active, [aria-pressed=\"true\"]) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n}\n\nhtml body #mag-typewriter-toggle[data-goal]::after {\n  content: \"\" !important;\n  position: absolute !important;\n  left: 7px !important;\n  right: 7px !important;\n  bottom: 3px !important;\n  height: 2px !important;\n  border-radius: 1px !important;\n  background: linear-gradient(\n    to right,\n    var(--mag-gold) calc(var(--mag-tw-progress, 0) * 100%),\n    color-mix(in srgb, var(--mag-muted) 30%, transparent) 0\n  ) !important;\n  pointer-events: none !important;\n}\n\nhtml body #mag-typewriter-toggle[data-goal-done] {\n  color: var(--mag-gold-ink) !important;\n}\n\n/* 🎲 3 TODO：隐藏 emoji 与文字，换成三点骰子；只是动作按钮，没有选中态 */\nhtml body #delmar-random-todo-3-button {\n  position: relative !important;\n  width: 30px !important;\n  margin: 0 1px !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  font-size: 0 !important;\n  line-height: 0 !important;\n  filter: none !important;\n}\n\nhtml body #delmar-random-todo-3-button::before {\n  content: \"\" !important;\n  display: block !important;\n  width: 16px !important;\n  height: 16px !important;\n  background-color: currentColor !important;\n  -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M3 1h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3.1 4.5a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0zM6.6 8a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0zM10.1 11.5a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0z'/></svg>\") center / 16px 16px no-repeat !important;\n  mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M3 1h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3.1 4.5a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0zM6.6 8a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0zM10.1 11.5a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0z'/></svg>\") center / 16px 16px no-repeat !important;\n}\n\nhtml body #delmar-random-todo-3-button:not(:hover):is(:focus, :active, .bp3-active) {\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n}",
  "random-tasks": "/* Random TODO 3 的来源署名「↳ [[页面]]」：页面链接连同括号缩小成灰字，像署名行 */\nhtml body .roam-app .rm-block[data-path-page-links*='\"Random TODO 3\"'] > .rm-block-main > .rm-block__input--view\nspan[data-link-title]:not(.rm-block-ref *) {\n  font-size: 0.78em !important;\n  letter-spacing: 0.2px !important;\n}\n\nhtml body .roam-app .rm-block[data-path-page-links*='\"Random TODO 3\"'] > .rm-block-main > .rm-block__input--view\nspan[data-link-title]:not(.rm-block-ref *) > .rm-page-ref {\n  font-weight: 500 !important;\n  color: var(--mag-muted) !important;\n}\n\nhtml body .roam-app .rm-block[data-path-page-links*='\"Random TODO 3\"'] > .rm-block-main > .rm-block__input--view\nspan[data-link-title]:not(.rm-block-ref *) > .rm-page-ref:hover {\n  color: var(--mag-blue) !important;\n}\n/* Same compact die in Folio and native themes; keep the real button handler. */\nhtml body #delmar-random-todo-3-button {\n  position: relative !important;\n  width: 30px !important;\n  margin: 0 1px !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  font-size: 0 !important;\n  line-height: 0 !important;\n  filter: none !important;\n}\n\nhtml body #delmar-random-todo-3-button::before {\n  content: \"\" !important;\n  display: block !important;\n  width: 16px !important;\n  height: 16px !important;\n  background-color: currentColor !important;\n  -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M3 1h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3.1 4.5a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0zM6.6 8a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0zM10.1 11.5a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0z'/></svg>\") center / 16px 16px no-repeat !important;\n  mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M3 1h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3.1 4.5a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0zM6.6 8a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0zM10.1 11.5a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0-2.8 0z'/></svg>\") center / 16px 16px no-repeat !important;\n}\n\n\n",
  "page-titles": "/* ==========================================================\n   04. 页面标题：黄色杂志笔触 + 日记页刊头\n   刊头文字由脚本写入 data-mag-masthead，例：VOL. 2026 · NO. 298 · SUNDAY\n   ========================================================== */\n\nhtml body .roam-app :is(.rm-title-display, .rm-title-editing-display, .rm-title-textarea) {\n  position: relative !important;\n  top: auto !important;\n  font-family: var(--mag-heading) !important;\n  font-size: 44px !important;\n  font-weight: 800 !important;\n  line-height: 1.18 !important;\n  letter-spacing: -0.035em !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  margin-top: 0 !important;\n  margin-bottom: 30px !important;\n  padding: 0 !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  text-decoration: none !important;\n}\n\nhtml body .roam-app .rm-title-display::before,\nhtml body .roam-app .rm-title-editing-display::before,\nhtml body .roam-app .rm-title-editing-display::after {\n  content: none !important;\n  display: none !important;\n}\n\nhtml body .roam-app .rm-title-display::after {\n  content: \"\" !important;\n  display: block !important;\n  width: 50px !important;\n  height: 7px !important;\n  margin-top: 13px !important;\n  background: var(--mag-yellow) !important;\n  border: 0 !important;\n  border-radius: 999px 52% 999px 46% !important;\n  box-shadow: none !important;\n  transform: rotate(-1.5deg) !important;\n  pointer-events: none !important;\n}\n\nhtml body .roam-app .rm-title-display[data-mag-masthead]::before {\n  content: attr(data-mag-masthead) !important;\n  display: block !important;\n  box-sizing: border-box !important;\n  margin: 0 0 18px !important;\n  padding: 7px 0 6px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 10.5px !important;\n  font-weight: 600 !important;\n  font-style: normal !important;\n  font-variant-numeric: tabular-nums !important;\n  line-height: 1.4 !important;\n  letter-spacing: 2px !important;\n  color: var(--mag-muted) !important;\n  border-top: 2px solid var(--mag-ink) !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n  pointer-events: none !important;\n}\n\n/* 日记刊头右侧：今年还剩多少天（脚本写入 data-mag-days-left），金色高亮小签；最后 30 天变砖红 */\nhtml body .roam-app .rm-title-display-container[data-mag-days-left] {\n  position: relative !important;\n}\n\nhtml body .roam-app .rm-title-display-container[data-mag-days-left]::after {\n  content: attr(data-mag-days-left);\n  position: absolute;\n  top: 6px;\n  right: 0;\n  padding: 1px 8px;\n  font-family: var(--mag-body);\n  font-size: 10.5px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  line-height: 1.5;\n  letter-spacing: 1.6px;\n  color: var(--mag-gold-ink);\n  background: var(--mag-yellow-soft);\n  border: 1px solid color-mix(in srgb, var(--mag-gold) 55%, transparent);\n  border-radius: 2px;\n  pointer-events: none;\n}\n\nhtml body .roam-app .rm-title-display-container[data-mag-days-urgent]::after {\n  color: #a8443a;\n  background: color-mix(in srgb, #a8443a 10%, var(--mag-paper));\n  border-color: color-mix(in srgb, #a8443a 45%, transparent);\n}",
  "headings": "/* ==========================================================\n   05. H1 / H2 / H3：你的字号、颜色与灰色 H 标记\n   圆点、小三角与普通块完全一样（圆点模式照常显示圆点，折叠时带圈；文档模式照常显示小三角），\n   H 标记放在圆点栏左侧的页边里，两种模式位置一致；圆点栏与标题首行垂直居中\n   ========================================================== */\n\nhtml body .roam-app :is(.rm-heading-level-1, .rm-heading-level-2, .rm-heading-level-3)\n> .rm-block-main.rm-block__self :is(.rm-block__input, .roam-block),\nhtml body .roam-app :is(.rm-level1, .rm-level2, .rm-level3) {\n  font-family: var(--mag-heading) !important;\n  font-weight: 700 !important;\n  line-height: 1.4 !important;\n  letter-spacing: -0.015em !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  border: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-level1,\nhtml body .roam-app .rm-heading-level-1 > .rm-block-main.rm-block__self .rm-block__input {\n  color: var(--rr-h1-color) !important;\n  font-size: var(--rr-h1-size) !important;\n  font-weight: bold !important;\n}\n\nhtml body .roam-app .rm-level2,\nhtml body .roam-app .rm-heading-level-2 > .rm-block-main.rm-block__self .rm-block__input {\n  color: var(--rr-h2-color) !important;\n  font-size: var(--rr-h2-size) !important;\n  font-weight: bold !important;\n}\n\nhtml body .roam-app .rm-level3,\nhtml body .roam-app .rm-heading-level-3 > .rm-block-main.rm-block__self .rm-block__input {\n  color: var(--rr-h3-color) !important;\n  font-size: var(--rr-h3-size) !important;\n  font-weight: bold !important;\n}\n\nhtml body .roam-app :is(.rm-level1, .rm-level2, .rm-level3)::before,\nhtml body .roam-app :is(.rm-level1, .rm-level2, .rm-level3)::after,\nhtml body .roam-app :is(.rm-heading-level-1, .rm-heading-level-2, .rm-heading-level-3)\n> .rm-block-main > .rm-block__input--view::after {\n  content: none !important;\n  display: none !important;\n}\n\nhtml body .roam-app .rm-heading-level-1 { --rr-heading-marker: \"H1\"; }\nhtml body .roam-app .rm-heading-level-2 { --rr-heading-marker: \"H2\"; }\nhtml body .roam-app .rm-heading-level-3 { --rr-heading-marker: \"H3\"; }\n\n/* 圆点栏与标题首行垂直居中：高度 = 标题首行的行框高度（字号 × 1.4 + 上下各 8px） */\nhtml body .roam-app .rm-heading-level-1 > .rm-block-main.rm-block__self > .controls { --mag-first-line: calc(var(--rr-h1-size) * 1.4 + 16px); }\nhtml body .roam-app .rm-heading-level-2 > .rm-block-main.rm-block__self > .controls { --mag-first-line: calc(var(--rr-h2-size) * 1.4 + 16px); }\nhtml body .roam-app .rm-heading-level-3 > .rm-block-main.rm-block__self > .controls { --mag-first-line: calc(var(--rr-h3-size) * 1.4 + 16px); }\n\nhtml body .roam-app :is(.rm-heading-level-1, .rm-heading-level-2, .rm-heading-level-3)\n> .rm-block-main.rm-block__self > .controls {\n  position: relative !important;\n  display: flex !important;\n  align-items: center !important;\n  align-self: flex-start !important;\n  height: var(--mag-first-line) !important;\n  min-height: 0 !important;\n  margin-top: 0 !important;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  overflow: visible !important;\n}\n\n/* H 标记：挂在圆点栏本身（任何模式下都存在、都可见），放在它左侧的页边里 */\nhtml body .roam-app :is(.rm-heading-level-1, .rm-heading-level-2, .rm-heading-level-3)\n> .rm-block-main.rm-block__self > .controls::before {\n  content: var(--rr-heading-marker) !important;\n  position: absolute !important;\n  top: 50% !important;\n  right: 100% !important;\n  left: auto !important;\n  margin-right: -15px !important;\n  transform: translateY(-50%) !important;\n  font-family: var(--mag-body) !important;\n  font-size: var(--rr-heading-marker-size) !important;\n  font-weight: 500 !important;\n  font-style: normal !important;\n  line-height: 1 !important;\n  letter-spacing: 0 !important;\n  white-space: nowrap !important;\n  color: var(--rr-heading-marker-color) !important;\n  pointer-events: none !important;\n}",
  "inline": "/* ==========================================================\n   06. 行内样式：加粗、斜体、高亮、重要块\n   ========================================================== */\n\nhtml body .roam-app :is(.rm-bold, strong) {\n  font-weight: 700 !important;\n  color: var(--mag-block-ink, var(--mag-ink)) !important;\n}\n\nhtml body .roam-app :is(.rm-italics, em) {\n  font-family: var(--mag-body) !important;\n  font-style: italic !important;\n  color: var(--mag-muted) !important;\n}\n\nhtml body .roam-app :is(.rm-highlight, .roam-highlight, mark) {\n  color: var(--mag-ink) !important;\n  background-color: transparent !important;\n  background-image: linear-gradient(transparent 58%, var(--mag-yellow-soft) 58%) !important;\n  padding: 0 0.08em !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n}\n\nhtml body .roam-app .rm-block[data-page-links*='\"[[tags]]/important\"'] > .rm-block-main {\n  background: var(--mag-yellow-soft) !important;\n  box-shadow: inset 2px 0 0 var(--mag-yellow) !important;\n  border-radius: 3px !important;\n}",
  "links": "/* ==========================================================\n   07. 链接、块引用与默认标签\n   ========================================================== */\n\nhtml body .roam-app :is(\n  .rm-page-ref--link, .rm-alias--page, .rm-alias--block, .rm-alias--external, .rm-page-ref--namespace\n),\nhtml body .roam-app .roam-block a:not(.rm-video-timestamp) {\n  font-family: inherit !important;\n  font-size: inherit !important;\n  font-weight: 500 !important;\n  color: var(--mag-blue) !important;\n  background: transparent !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  text-decoration: none !important;\n  overflow-wrap: anywhere;\n}\n\nhtml body .roam-app :is(\n  .rm-page-ref--link, .rm-alias--page, .rm-alias--block, .rm-alias--external, .rm-page-ref--namespace\n):hover,\nhtml body .roam-app .roam-block a:not(.rm-video-timestamp):hover {\n  color: var(--mag-blue) !important;\n  background: transparent !important;\n  text-decoration: underline !important;\n  text-decoration-thickness: 1px !important;\n  text-underline-offset: 3px !important;\n}\n\nhtml body .roam-app .rm-page-ref__brackets {\n  color: var(--mag-faint) !important;\n  font-weight: 400 !important;\n  opacity: 0.45;\n}\n\nhtml body .roam-app .rm-block-ref {\n  font-family: inherit !important;\n  font-size: inherit !important;\n  font-weight: 400 !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  padding: 0 !important;\n  border: 0 !important;\n  border-bottom: 1px dotted var(--mag-faint) !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-block-ref:hover {\n  color: var(--mag-blue) !important;\n  background: transparent !important;\n}\n\nhtml body .roam-app .rm-page-ref--tag {\n  font-family: var(--mag-body) !important;\n  font-size: 0.86em !important;\n  font-weight: 500 !important;\n  line-height: inherit !important;\n  color: var(--mag-blue) !important;\n  background: var(--mag-blue-soft) !important;\n  padding: 1px 5px !important;\n  border: 0 !important;\n  border-radius: 4px !important;\n  box-shadow: none !important;\n  animation: none !important;\n  white-space: normal !important;\n}\n\n/* 标题里的链接、加粗等跟随标题样式 */\nhtml body .roam-app :is(\n  .rm-title-display, .rm-title-editing-display, .rm-level1, .rm-level2, .rm-level3\n) :is(\n  .rm-page-ref, .rm-page-ref--link, .rm-page-ref--namespace, .rm-block-ref,\n  .rm-alias, .rm-alias--page, .rm-alias--block, .rm-alias--external,\n  a:not(.rm-video-timestamp), .rm-bold, strong, .rm-italics, em\n),\nhtml body .roam-app :is(.rm-heading-level-1, .rm-heading-level-2, .rm-heading-level-3)\n> .rm-block-main.rm-block__self .rm-block__input :is(\n  .rm-page-ref, .rm-page-ref--link, .rm-page-ref--namespace, .rm-block-ref,\n  .rm-alias, .rm-alias--page, .rm-alias--block, .rm-alias--external,\n  a:not(.rm-video-timestamp), .rm-bold, strong, .rm-italics, em\n) {\n  font-family: inherit !important;\n  font-size: inherit !important;\n  font-weight: inherit !important;\n  color: inherit !important;\n}",
  "code-style": "/* ==========================================================\n   14. 行内代码与代码块\n   ========================================================== */\n\nhtml body .roam-app :is(.rm-inline-code, .roam-block > code) {\n  padding: 2px 5px !important;\n  font-family: var(--mag-code) !important;\n  font-size: 0.88em !important;\n  font-weight: 400 !important;\n  color: var(--mag-inline-text) !important;\n  background: var(--mag-inline-bg) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n}\n\nhtml body .roam-app .rm-code-block {\n  background: var(--mag-code-bg) !important;\n  border: 1px solid var(--mag-code-border) !important;\n  border-radius: 12px !important;\n  box-shadow: 0 4px 16px var(--mag-shadow) !important;\n  overflow: hidden;\n}\n\nhtml body .roam-app .rm-code-block > .flex-h-box {\n  font-family: var(--mag-body) !important;\n  font-size: 12px !important;\n  color: var(--mag-muted) !important;\n  background: var(--mag-code-toolbar) !important;\n  border-bottom: 1px solid var(--mag-code-border) !important;\n}\n\nhtml body .roam-app :is(.CodeMirror, .CodeMirror pre, .CodeMirror code, .CodeMirror-line) {\n  font-family: var(--mag-code) !important;\n  font-size: 13px !important;\n  line-height: 1.65 !important;\n  letter-spacing: 0 !important;\n}\n\nhtml body .roam-app .CodeMirror {\n  color: var(--mag-code-text) !important;\n  background: var(--mag-code-bg) !important;\n  border: 0 !important;\n}\n\nhtml body .roam-app .CodeMirror-gutters {\n  background: var(--mag-code-toolbar) !important;\n  border-color: var(--mag-code-border) !important;\n}\n\nhtml body .roam-app .CodeMirror-linenumber { color: var(--mag-faint) !important; }\nhtml body .roam-app .CodeMirror-cursor { border-left-color: var(--mag-blue) !important; }\nhtml body .roam-app .CodeMirror-activeline-background { background: var(--mag-blue-soft) !important; }\nhtml body .roam-app .cm-comment { color: #737b89 !important; }\nhtml body .roam-app .cm-keyword { color: #9d4a89 !important; }\nhtml body .roam-app :is(.cm-string, .cm-string-2) { color: #398356 !important; }\nhtml body .roam-app .cm-number { color: #8563b1 !important; }\nhtml body .roam-app :is(.cm-def, .cm-variable-2) { color: #b47837 !important; }\nhtml body .roam-app .cm-property { color: #258590 !important; }\n\n/* 代码块内部滚到底部按钮；行为由另附的代码块脚本提供 */\nhtml body .roam-app .mag-code-bottom {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  width: 24px !important;\n  height: 24px !important;\n  min-width: 24px !important;\n  margin: 0 4px 0 0 !important;\n  padding: 0 !important;\n  font: 16px/1 var(--mag-body) !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 4px !important;\n  box-shadow: none !important;\n  outline: none !important;\n  cursor: pointer !important;\n}\n\nhtml body .roam-app .mag-code-bottom:is(:hover, :focus-visible) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n}",
  "tables": "/* ==========================================================\n   15. 表格：普通表格、数据表、:q 分页\n   ========================================================== */\n\n/* 普通表格：第一行 + 第一列作为表头 */\nhtml body .roam-app .rm-table > table {\n  font-family: var(--mag-body) !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-collapse: separate !important;\n  border-spacing: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-table > table > tbody > tr > td {\n  padding: 10px 14px !important;\n  font-family: var(--mag-body) !important;\n  font-weight: 400 !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n  border: 0 !important;\n  border-right: 1px solid var(--mag-border) !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n}\n\nhtml body .roam-app .rm-table > table > tbody > tr:first-child > td,\nhtml body .roam-app .rm-table > table > tbody > tr > td:first-child {\n  font-family: var(--mag-heading) !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  background: var(--mag-shell) !important;\n}\n\nhtml body .roam-app .rm-table > table > tbody > tr:first-child > td {\n  border-bottom: 2px solid var(--mag-yellow) !important;\n}\n\nhtml body .roam-app .rm-table > table > tbody > tr > td:first-child {\n  border-right-color: var(--mag-muted) !important;\n}\n\nhtml body .roam-app .rm-table > table > tbody > tr > td:last-child {\n  border-right: 0 !important;\n}\n\nhtml body .roam-app .rm-table > table > tbody > tr:last-child:not(:first-child) > td {\n  border-bottom: 0 !important;\n}\n\nhtml body .roam-app .rm-table .rm-table__cell {\n  font-family: inherit !important;\n  font-size: inherit !important;\n  font-weight: inherit !important;\n}\n\n/* 普通表格：添加按钮靠近时才显示，透明时仍可点 */\nhtml body .roam-app .rm-table :is(.rm-table__add-row-btn, .rm-table__add-col-btn) {\n  opacity: 0 !important;\n  pointer-events: auto !important;\n  background: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n  transition: opacity 0.15s ease !important;\n}\n\nhtml body .roam-app .rm-table:hover > :is(.rm-table__add-row-btn, .rm-table__add-col-btn),\nhtml body .roam-app .rm-table :is(.rm-table__add-row-btn, .rm-table__add-col-btn):hover,\nhtml body .roam-app .rm-table:focus-within > :is(.rm-table__add-row-btn, .rm-table__add-col-btn) {\n  opacity: 1 !important;\n  color: var(--mag-muted) !important;\n  background: var(--mag-shell) !important;\n}\n\nhtml body .roam-app .rm-table :is(.rm-table__add-row-btn, .rm-table__add-col-btn):hover {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n}\n\n/* 数据表：暖纸底、衬线表头、细横线 */\nhtml body .roam-app .rm-data-table {\n  width: fit-content !important;\n  max-width: 100% !important;\n  min-width: 0 !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-data-table__table {\n  background: transparent !important;\n  overflow-x: auto !important;\n}\n\nhtml body .roam-app .rm-data-table__table > table {\n  font-family: var(--mag-body) !important;\n  font-size: 14px !important;\n  line-height: 1.65 !important;\n  background: var(--mag-paper) !important;\n  border: 0 !important;\n  border-top: 2px solid var(--mag-ink) !important;\n  border-collapse: separate !important;\n  border-spacing: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-data-table__table > table > thead > tr > th {\n  height: auto !important;\n  padding: 8px 12px !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-shell) !important;\n  border: 0 !important;\n  border-bottom: 2px solid var(--mag-yellow) !important;\n}\n\nhtml body .roam-app .rm-data-table .rm-column-header {\n  min-height: 0 !important;\n}\n\nhtml body .roam-app .rm-data-table .rm-column-header__name {\n  font-family: var(--mag-heading) !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  line-height: 1.4 !important;\n  color: inherit !important;\n}\n\nhtml body .roam-app .rm-data-table .rm-column-header--fake {\n  padding: 0 !important;\n}\n\nhtml body .roam-app .rm-data-table__table > table > tbody > tr > td {\n  padding: 9px 12px !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n  border: 0 !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n}\n\nhtml body .roam-app .rm-data-table__table > table > tbody > tr:hover > td {\n  background: var(--mag-shell) !important;\n}\n\n/* :q / 数据表分页 Rows / page：输入框与上下箭头合成一个整体 */\nhtml body .roam-app :is(.rm-query, .rm-data-table, .rm-query-content) .bp3-numeric-input {\n  display: inline-flex !important;\n  flex: 0 0 auto !important;\n  align-items: stretch !important;\n  box-sizing: border-box !important;\n  min-width: 0 !important;\n  height: 26px !important;\n  vertical-align: middle !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n}\n\nhtml body .roam-app :is(.rm-query, .rm-data-table, .rm-query-content) .bp3-numeric-input:focus-within {\n  border-color: var(--mag-gold) !important;\n}\n\nhtml body .roam-app :is(.rm-query, .rm-data-table, .rm-query-content) .bp3-numeric-input > .bp3-input-group {\n  flex: 0 0 auto !important;\n  margin: 0 !important;\n}\n\nhtml body .roam-app :is(.rm-query, .rm-data-table, .rm-query-content) .bp3-numeric-input input.bp3-input {\n  box-sizing: content-box !important;\n  width: 3ch !important;\n  min-width: 3ch !important;\n  height: 24px !important;\n  margin: 0 !important;\n  padding: 0 6px 0 8px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 12px !important;\n  font-variant-numeric: tabular-nums !important;\n  line-height: 24px !important;\n  text-align: right !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  outline: none !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app :is(.rm-query, .rm-data-table, .rm-query-content) .bp3-numeric-input > .bp3-button-group {\n  display: flex !important;\n  flex-direction: column !important;\n  flex: 0 0 16px !important;\n  width: 16px !important;\n  margin: 0 !important;\n  border-left: 1px solid var(--mag-border) !important;\n}\n\nhtml body .roam-app :is(.rm-query, .rm-data-table, .rm-query-content) .bp3-numeric-input > .bp3-button-group > .bp3-button {\n  flex: 1 1 0 !important;\n  width: 16px !important;\n  min-width: 16px !important;\n  height: auto !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  background-image: none !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app :is(.rm-query, .rm-data-table, .rm-query-content) .bp3-numeric-input > .bp3-button-group > .bp3-button + .bp3-button {\n  border-top: 1px solid var(--mag-border) !important;\n}\n\nhtml body .roam-app :is(.rm-query, .rm-data-table, .rm-query-content) .bp3-numeric-input > .bp3-button-group > .bp3-button:hover {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n}\n\nhtml body .roam-app :is(.rm-query, .rm-data-table, .rm-query-content) .bp3-numeric-input .bp3-button .bp3-icon {\n  color: inherit !important;\n}\n\nhtml body .roam-app :is(.rm-query, .rm-data-table, .rm-query-content) .bp3-numeric-input .bp3-button svg {\n  width: 10px !important;\n  height: 10px !important;\n}\n\nhtml body .roam-app :is(.rm-query, .rm-data-table, .rm-query-content) .bp3-html-select select {\n  min-width: calc(4ch + 28px) !important;\n  padding-left: 8px !important;\n  padding-right: 24px !important;\n  font-variant-numeric: tabular-nums !important;\n}",
  "responsive": "/* ==========================================================\n   17. 窄屏\n   ========================================================== */\n\n@media (max-width: 720px) {\n  html body .roam-app .roam-main .roam-article {\n    padding-block: 28px 70px !important;\n  }\n\n  html body .roam-app :is(.rm-title-display, .rm-title-editing-display, .rm-title-textarea) {\n    font-size: 34px !important;\n  }\n}",
  "kanban": "/* ==========================================================\n   19. 看板：杂志栏目与暖纸色卡片\n   ========================================================== */\n\nhtml body .roam-app .kanban-board {\n  padding: 8px 0 !important;\n  font-family: var(--mag-body) !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .kanban-column-container {\n  background: transparent !important;\n}\n\nhtml body .roam-app .kanban-column {\n  padding: 12px !important;\n  background: var(--mag-shell) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 6px !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .kanban-title {\n  margin: 0 0 10px !important;\n  padding: 2px 2px 10px !important;\n  font-family: var(--mag-heading) !important;\n  font-size: 17px !important;\n  font-weight: 600 !important;\n  line-height: 1.4 !important;\n  text-align: left !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n}\n\nhtml body .roam-app .kanban-title .rm-page-ref--tag {\n  font-family: var(--mag-body) !important;\n  font-size: 10px !important;\n  font-weight: 400 !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n}\n\nhtml body .roam-app .kanban-card {\n  margin: 0 0 8px !important;\n  padding: 10px 12px !important;\n  font-family: var(--mag-body) !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 4px !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .kanban-card .rm-query {\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .kanban-card .rm-query-title {\n  align-items: center !important;\n  padding: 4px 0 !important;\n  background: transparent !important;\n  border-color: var(--mag-border) !important;\n}\n\nhtml body .roam-app .kanban-card .rm-query-content {\n  padding-top: 6px !important;\n  background: transparent !important;\n}\n\nhtml body .roam-app .kanban-card .rm-query-title .bp3-button {\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}",
  "diagram": "/* ==========================================================\n   20. Diagram：纸色画布；只改根层默认色，节点自定义色仍有效\n   ========================================================== */\n\nhtml body .roam-app .rm-diagram {\n  --diagram-background-color: var(--mag-paper) !important;\n  --block-fill-color: var(--mag-surface) !important;\n  --block-text-color: var(--mag-ink) !important;\n  --block-border-color: var(--mag-border) !important;\n  --group-title-text-color: var(--mag-ink) !important;\n  --group-title-fill-color: var(--mag-shell) !important;\n  --group-area-fill-color: color-mix(in srgb, var(--mag-shell) 35%, transparent) !important;\n  --group-border-color: var(--mag-border) !important;\n  --edge-stroke-color: var(--mag-faint) !important;\n  --global-edge-stroke-color: var(--mag-faint) !important;\n  font-family: var(--mag-body) !important;\n  background-color: var(--diagram-background-color) !important;\n}\n\nhtml body .roam-app .rm-diagram-title {\n  font-family: var(--mag-heading) !important;\n  font-size: 20px !important;\n  font-weight: 600 !important;\n  line-height: 1.4 !important;\n  color: var(--mag-ink) !important;\n}\n\nhtml body .roam-app .rm-diagram .rm-parsed-block-string {\n  font-family: var(--mag-body) !important;\n}\n\nhtml body .roam-app .rm-diagram :is(.roam-block, .rm-block__input, .rm-block-text):not(.rm-level1):not(.rm-level2):not(.rm-level3) {\n  font-family: var(--mag-body) !important;\n  font-size: var(--block-font-size, 14px) !important;\n}\n\nhtml body .roam-app .rm-diagram .react-flow__node-block {\n  border-radius: 4px !important;\n}\n\nhtml body .roam-app .rm-diagram :is(.react-flow__controls, .rm-diagram-properties-panel) {\n  font-family: var(--mag-body) !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-surface) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 6px !important;\n  box-shadow: 0 2px 8px var(--mag-shadow) !important;\n}\n\nhtml body .roam-app .rm-diagram .react-flow__controls-button {\n  color: var(--mag-muted) !important;\n  background: var(--mag-surface) !important;\n  border-bottom-color: var(--mag-border) !important;\n}\n\nhtml body .roam-app .rm-diagram .react-flow__controls-button:hover {\n  background: var(--mag-shell) !important;\n}\n\nhtml body .roam-app .rm-diagram .react-flow__controls-button svg {\n  fill: currentColor !important;\n}\n\nhtml body .roam-app .rm-diagram .react-flow__background {\n  opacity: 0.35 !important;\n}",
  "slider": "/* ==========================================================\n   22.2 {{slider}} 数字滑条：细轨道、金色进度、纸色圆点\n   ========================================================== */\n\nhtml body .roam-app .bp3-slider {\n  min-width: 140px !important;\n  height: 34px !important;\n}\n\nhtml body .roam-app .bp3-slider .bp3-slider-track {\n  top: 5px !important;\n  height: 3px !important;\n  border-radius: 2px !important;\n}\n\nhtml body .roam-app .bp3-slider .bp3-slider-progress {\n  background: var(--mag-border) !important;\n  border-radius: 2px !important;\n}\n\nhtml body .roam-app .bp3-slider .bp3-slider-progress.bp3-intent-primary {\n  background: var(--mag-gold) !important;\n}\n\nhtml body .roam-app .bp3-slider .bp3-slider-handle {\n  top: 0 !important;\n  width: 13px !important;\n  height: 13px !important;\n  background: var(--mag-paper) !important;\n  background-image: none !important;\n  border: 2px solid var(--mag-gold) !important;\n  border-radius: 50% !important;\n  box-shadow: 0 1px 3px var(--mag-shadow) !important;\n  outline: none !important;\n  cursor: grab !important;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease !important;\n}\n\nhtml body .roam-app .bp3-slider .bp3-slider-handle:is(:hover, :focus-visible, .bp3-active) {\n  border-color: var(--mag-gold-ink) !important;\n  box-shadow: 0 0 0 4px var(--mag-yellow-soft) !important;\n}\n\nhtml body .roam-app .bp3-slider .bp3-slider-handle.bp3-active {\n  cursor: grabbing !important;\n}\n\n/* 刻度：只留 0、中点、终点三个数字，其余隐藏（拖动时上方会显示当前值） */\nhtml body .roam-app .bp3-slider .bp3-slider-axis .bp3-slider-label {\n  font-family: var(--mag-body) !important;\n  font-size: 10px !important;\n  font-weight: 500 !important;\n  font-variant-numeric: tabular-nums !important;\n  white-space: nowrap !important;\n  color: var(--mag-faint) !important;\n}\n\nhtml body .roam-app .bp3-slider .bp3-slider-axis .bp3-slider-label:not(:first-child):not(:last-child):not(:nth-child(6)) {\n  visibility: hidden !important;\n}\n\n/* 当前值：去掉黑底方框，改为圆点正上方的一个金色小数字 */\nhtml body .roam-app .bp3-slider .bp3-slider-handle .bp3-slider-label {\n  top: auto !important;\n  bottom: calc(100% + 3px) !important;\n  left: 50% !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  transform: translateX(-50%) !important;\n  font-family: var(--mag-heading) !important;\n  font-size: 12px !important;\n  font-weight: 700 !important;\n  font-variant-numeric: tabular-nums lining-nums !important;\n  line-height: 1 !important;\n  color: var(--mag-gold-ink) !important;\n  background: transparent !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n\n/* 编辑者头像（单人使用时与数值重复）：隐藏整行 */\nhtml body .roam-app .slider .slider-cell {\n  display: none !important;\n}\n\nhtml body .roam-app .slider {\n  margin-top: 14px !important;\n}",
  "settings": "/* ==========================================================\n   24. 设置窗口：杂志目录与统一表单（随亮 / 暗色切换）\n   ========================================================== */\n\nhtml body .rm-modal-dialog--settings {\n  --set-paper: var(--mag-paper);\n  --set-shell: var(--mag-shell);\n  --set-ink: var(--mag-ink);\n  --set-muted: var(--mag-muted);\n  --set-rule: var(--mag-border);\n  --set-accent: var(--mag-gold-ink);\n  --set-selected: var(--mag-active);\n  --set-thumb: color-mix(in srgb, var(--mag-muted) 35%, transparent);\n\n  font-family: var(--mag-body) !important;\n  color: var(--set-ink) !important;\n  background: var(--set-paper) !important;\n  border: 1px solid var(--set-rule) !important;\n  border-radius: 12px !important;\n  box-shadow: var(--mag-modal-shadow) !important;\n}\n\nhtml body .rm-modal-dialog--settings .rm-settings {\n  color: var(--set-ink) !important;\n  background: var(--set-paper) !important;\n  border-radius: inherit !important;\n}\n\nhtml body .rm-settings .rm-settings-tabs {\n  background: transparent !important;\n}\n\nhtml body .rm-settings-tabs > .bp3-tab-list {\n  box-sizing: border-box !important;\n  padding: 20px 12px !important;\n  color: var(--set-muted) !important;\n  background: var(--set-shell) !important;\n  border-right: 1px solid var(--set-rule) !important;\n  border-radius: 12px 0 0 12px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-settings :is(.rm-settings-heading, .rm-extension-settings-heading) {\n  margin: 10px 12px 12px !important;\n  padding: 0 0 10px !important;\n  font-family: var(--mag-heading) !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  line-height: 1.5 !important;\n  letter-spacing: 0.6px !important;\n  color: var(--set-ink) !important;\n  border-bottom: 1px solid var(--set-rule) !important;\n}\n\nhtml body .rm-settings-tabs > .bp3-tab-list > .rm-settings__tab {\n  box-sizing: border-box !important;\n  margin: 2px 0 !important;\n  padding: 8px 12px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 13px !important;\n  font-weight: 400 !important;\n  line-height: 1.5 !important;\n  white-space: normal !important;\n  overflow-wrap: anywhere !important;\n  color: var(--set-muted) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-settings-tabs > .bp3-tab-list > .rm-settings__tab:hover {\n  color: var(--set-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n}\n\nhtml body .rm-settings-tabs > .bp3-tab-list > .rm-settings__tab[aria-selected=\"true\"] {\n  font-weight: 600 !important;\n  color: var(--set-ink) !important;\n  background: var(--set-selected) !important;\n  box-shadow: inset 2px 0 var(--set-accent) !important;\n}\n\nhtml body .rm-settings-tabs > .bp3-tab-list > .bp3-tab-indicator-wrapper {\n  display: none !important;\n}\n\nhtml body .rm-settings :is(.rm-settings__panel-wrapper, .rm-settings-panel, .rm-settings-panel__contents) {\n  color: var(--set-ink) !important;\n  background: var(--set-paper) !important;\n  border-color: var(--set-rule) !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-settings :is(.rm-settings__panel-wrapper > *, .rm-settings-panel__contents > *, .bp3-dark) {\n  color: var(--set-ink) !important;\n  background-color: var(--set-paper) !important;\n}\n\nhtml body .rm-settings .bp3-card {\n  color: var(--set-ink) !important;\n  background: var(--set-paper) !important;\n  border: 1px solid var(--set-rule) !important;\n  border-radius: 6px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-settings .rm-settings-panel__section {\n  padding-block: 18px !important;\n  background: transparent !important;\n  border-color: var(--set-rule) !important;\n}\n\nhtml body .rm-settings .rm-settings-panel__section.flex-h-box {\n  align-items: center !important;\n  gap: 20px !important;\n}\n\nhtml body .rm-settings :is(h2, h3) {\n  font-family: var(--mag-heading) !important;\n  font-weight: 600 !important;\n  line-height: 1.4 !important;\n  color: var(--set-ink) !important;\n}\n\nhtml body .rm-settings h4 {\n  margin-bottom: 6px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  line-height: 1.5 !important;\n  color: var(--set-ink) !important;\n}\n\nhtml body .rm-settings :is(.rm-settings-panel__description, .bp3-text-muted) {\n  font-family: var(--mag-body) !important;\n  font-size: 12px !important;\n  font-weight: 400 !important;\n  line-height: 1.7 !important;\n  color: var(--set-muted) !important;\n}\n\nhtml body .rm-settings :is(hr, .bp3-divider) {\n  border-color: var(--set-rule) !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-settings a {\n  color: var(--set-accent) !important;\n}\n\nhtml body .rm-settings :is(.bp3-input, .rm-display-name-settings__input, input[type=\"text\"], input[type=\"password\"], input[type=\"email\"], input[type=\"number\"], textarea, select) {\n  box-sizing: border-box !important;\n  font-family: var(--mag-body) !important;\n  font-size: 13px !important;\n  line-height: 1.5 !important;\n  color: var(--set-ink) !important;\n  background: var(--set-paper) !important;\n  border: 1px solid var(--set-rule) !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-settings :is(.bp3-input, .rm-display-name-settings__input, input[type=\"text\"], input[type=\"password\"], input[type=\"email\"], input[type=\"number\"], textarea, select):focus {\n  outline: none !important;\n  border-color: var(--set-accent) !important;\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--set-accent) 15%, transparent) !important;\n}\n\nhtml body .rm-settings :is(input, textarea)::placeholder {\n  color: var(--set-muted) !important;\n  opacity: 0.7 !important;\n}\n\nhtml body .rm-settings .bp3-button {\n  font-family: var(--mag-body) !important;\n  font-size: 12px !important;\n  font-weight: 500 !important;\n  color: var(--set-ink) !important;\n  background: var(--set-shell) !important;\n  background-image: none !important;\n  border: 1px solid var(--set-rule) !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n\nhtml body .rm-settings .bp3-button:is(:hover, :focus-visible) {\n  background: var(--set-selected) !important;\n  border-color: color-mix(in srgb, var(--set-accent) 45%, var(--set-rule)) !important;\n}\n\nhtml body .rm-settings .bp3-button.bp3-minimal {\n  color: var(--set-muted) !important;\n  background: transparent !important;\n  border-color: transparent !important;\n}\n\nhtml body .rm-settings .bp3-button.bp3-minimal:hover {\n  color: var(--set-ink) !important;\n  background: var(--set-shell) !important;\n}\n\nhtml body .rm-settings .bp3-button.bp3-intent-primary {\n  color: var(--set-paper) !important;\n  background: var(--set-accent) !important;\n  border-color: var(--set-accent) !important;\n}\n\nhtml body .rm-settings .bp3-button.bp3-intent-primary:hover {\n  background: color-mix(in srgb, var(--set-accent) 85%, var(--set-ink)) !important;\n}\n\nhtml body .rm-settings .bp3-button:is(.bp3-intent-warning, .rm-button--warning) {\n  color: #8a5d26 !important;\n  background: #f7eddc !important;\n  border-color: #dfcbaa !important;\n}\n\nhtml body .rm-settings .bp3-button:is(.bp3-intent-danger, .rm-button--danger) {\n  color: #a0443d !important;\n  background: #f8eae5 !important;\n  border-color: #e8c8bf !important;\n}\n\nhtml body .rm-settings .bp3-button:is(:disabled, .bp3-disabled) {\n  opacity: 0.45 !important;\n  cursor: not-allowed !important;\n}\n\nhtml body .rm-settings .bp3-switch .bp3-control-indicator {\n  background: color-mix(in srgb, var(--set-muted) 35%, transparent) !important;\n  background-image: none !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-settings .bp3-switch input:checked ~ .bp3-control-indicator {\n  background: var(--set-accent) !important;\n}\n\nhtml body .rm-settings .bp3-switch .bp3-control-indicator::before {\n  background: #fffdf8 !important;\n  box-shadow: 0 1px 3px rgba(45, 36, 20, 0.18) !important;\n}\n\nhtml body .rm-settings :is(.bp3-radio, .bp3-checkbox) .bp3-control-indicator {\n  color: var(--set-paper) !important;\n  background: var(--set-paper) !important;\n  background-image: none !important;\n  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--set-muted) 50%, transparent) !important;\n}\n\nhtml body .rm-settings :is(.bp3-radio, .bp3-checkbox) input:checked ~ .bp3-control-indicator {\n  background: var(--set-accent) !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-settings .bp3-control input:disabled ~ .bp3-control-indicator {\n  opacity: 0.45 !important;\n}\n\nhtml body .rm-settings .bp3-control input:focus-visible ~ .bp3-control-indicator {\n  outline: 2px solid var(--set-accent) !important;\n  outline-offset: 3px !important;\n}\n\nhtml body .rm-settings .rm-settings-close-button {\n  color: var(--set-muted) !important;\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-settings .rm-settings-close-button:hover {\n  color: var(--set-ink) !important;\n  background: var(--set-shell) !important;\n}\n\nhtml body .rm-settings,\nhtml body .rm-settings :is(.bp3-tab-list, .rm-settings__panel-wrapper, .rm-settings-panel, .rm-settings-panel__contents) {\n  scrollbar-width: thin;\n  scrollbar-color: var(--set-thumb) transparent;\n}\n\nhtml body .rm-settings *::-webkit-scrollbar { width: 7px !important; height: 7px !important; }\nhtml body .rm-settings *::-webkit-scrollbar-track { background: transparent !important; }\nhtml body .rm-settings *::-webkit-scrollbar-thumb { background: var(--set-thumb) !important; border-radius: 8px !important; }\n\n/* 下拉选择与说明代码 */\nhtml body .rm-modal-dialog--settings .rm-settings :is(\n  .rm-select-wrapper, .bp3-select, .bp3-html-select,\n  .bp3-popover-wrapper,\n  .bp3-popover-target,\n  .bp3-popover-target > div\n) {\n  background: transparent !important;\n  background-image: none !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-modal-dialog--settings .rm-settings :is(\n  select, .bp3-html-select select, .bp3-select select, [role=\"combobox\"],\n  .rm-select-wrapper .bp3-button, .bp3-select .bp3-button,\n  .bp3-popover-target > .bp3-button, .bp3-popover-target > div > .bp3-button\n):not(.bp3-intent-primary):not(.bp3-intent-danger):not(.bp3-intent-warning) {\n  font-family: var(--mag-body) !important;\n  font-size: 12px !important;\n  color: var(--set-ink) !important;\n  background: var(--set-shell) !important;\n  background-image: none !important;\n  border: 1px solid var(--set-rule) !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-modal-dialog--settings .rm-settings :is(\n  .rm-select-wrapper .bp3-button, .bp3-popover-target > .bp3-button, .bp3-popover-target > div > .bp3-button, [role=\"combobox\"]\n):hover {\n  background: var(--set-selected) !important;\n}\n\nhtml body .rm-modal-dialog--settings .rm-settings .bp3-popover-target .bp3-button :is(.bp3-button-text, .bp3-icon) {\n  color: inherit !important;\n}\n\nhtml body .rm-modal-dialog--settings .rm-settings .bp3-popover-target .bp3-button .bp3-icon svg {\n  fill: currentColor !important;\n}\n\nhtml body .rm-modal-dialog--settings .rm-settings :is(pre, .bp3-code-block) {\n  padding: 12px 14px !important;\n  color: var(--set-ink) !important;\n  background: var(--set-shell) !important;\n  border: 1px solid var(--set-rule) !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-modal-dialog--settings .rm-settings :is(code, kbd) {\n  font-family: var(--mag-code) !important;\n  font-size: 0.9em !important;\n  color: var(--set-ink) !important;\n  background: var(--set-shell) !important;\n  border-color: var(--set-rule) !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-modal-dialog--settings .rm-settings pre code {\n  background: transparent !important;\n  border: 0 !important;\n}\n\n/* Plugin patch: preserve the native hit target and arrow in Roam settings. */\nhtml body .rm-modal-dialog--settings .rm-settings .bp3-html-select,\nhtml body .rm-modal-dialog--settings .rm-settings .bp3-select,\nhtml body .rm-modal-dialog--settings .rm-settings .bp3-popover-target {\n  position: relative !important;\n  pointer-events: auto !important;\n}\nhtml body .rm-modal-dialog--settings .rm-settings :is(.bp3-html-select select, .bp3-select select) {\n  -webkit-appearance: menulist !important;\n  appearance: auto !important;\n  pointer-events: auto !important;\n  cursor: pointer !important;\n  padding-right: 28px !important;\n}\nhtml body .rm-modal-dialog--settings .rm-settings :is(.bp3-html-select, .bp3-select) :is(.bp3-icon, svg),\nhtml body .rm-modal-dialog--settings .rm-settings .bp3-popover-target :is(.bp3-icon, svg) {\n  display: inline-flex !important;\n  pointer-events: none !important;\n}\nhtml body .rm-modal-dialog--settings .rm-settings [role=\"combobox\"] {\n  position: relative !important;\n  z-index: 0 !important;\n  pointer-events: auto !important;\n  cursor: pointer !important;\n}\n",
  "marketplace": "/* ==========================================================\n   25. Roam Depot 插件商店 + 插件详情 / 设置里的功能表\n   ========================================================== */\n\nhtml body .rm-extensions-marketplace {\n  font-family: var(--mag-body) !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n}\n\nhtml body .rm-extensions-marketplace-search {\n  background: var(--mag-shell) !important;\n  border-right: 1px solid var(--mag-border) !important;\n}\n\nhtml body .rm-extensions-marketplace-search__settings {\n  padding: 14px 14px 12px !important;\n  font-size: 11px !important;\n  font-variant-numeric: tabular-nums !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n}\n\nhtml body .rm-extensions-marketplace-search__settings input {\n  box-sizing: border-box !important;\n  height: 32px !important;\n  padding: 0 10px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 13px !important;\n  color: var(--mag-ink) !important;\n  caret-color: var(--mag-gold) !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 6px !important;\n  outline: none !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-extensions-marketplace-search__settings input:focus {\n  border-color: var(--mag-gold) !important;\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--mag-gold) 15%, transparent) !important;\n}\n\nhtml body .rm-extensions-marketplace-search__settings input::placeholder {\n  color: var(--mag-muted) !important;\n  opacity: 0.7 !important;\n}\n\nhtml body .rm-extensions-marketplace-search__settings .bp3-button {\n  margin-left: 6px !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n\nhtml body .rm-extensions-marketplace-search__settings .bp3-button:hover {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n}\n\nhtml body .rm-extensions-marketplace-search__results {\n  padding: 6px 8px 12px !important;\n  background: transparent !important;\n  scrollbar-width: thin;\n  scrollbar-color: var(--mag-border) transparent;\n}\n\nhtml body .rm-extensions-marketplace .rm-extension-small {\n  display: grid !important;\n  grid-template-columns: 1fr auto !important;\n  column-gap: 10px !important;\n  row-gap: 2px !important;\n  margin: 0 !important;\n  padding: 12px 10px 13px !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  cursor: pointer !important;\n  transition: background-color 0.15s ease !important;\n}\n\nhtml body .rm-extensions-marketplace .rm-extension-small:last-child { border-bottom: 0 !important; }\nhtml body .rm-extensions-marketplace .rm-extension-small:hover { background: var(--mag-paper) !important; }\n\nhtml body .rm-extensions-marketplace .rm-extension-small:is([class*=\"selected\"], [class*=\"active\"], [aria-selected=\"true\"]) {\n  background: var(--mag-yellow-soft) !important;\n  box-shadow: inset 2px 0 var(--mag-gold) !important;\n}\n\nhtml body .rm-extensions-marketplace .rm-extension-small__name {\n  grid-column: 1 !important;\n  grid-row: 1 !important;\n  display: flex !important;\n  flex-wrap: wrap !important;\n  align-items: center !important;\n  min-width: 0 !important;\n  font-family: var(--mag-heading) !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  line-height: 1.35 !important;\n  color: var(--mag-ink) !important;\n}\n\nhtml body .rm-extensions-marketplace .rm-extension-small__downloads {\n  grid-column: 2 !important;\n  grid-row: 1 !important;\n  align-self: center !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  gap: 4px !important;\n  font-size: 11px !important;\n  font-variant-numeric: tabular-nums !important;\n  white-space: nowrap !important;\n  color: var(--mag-faint) !important;\n}\n\nhtml body .rm-extensions-marketplace .rm-extension-small__downloads .bp3-icon-standard {\n  color: inherit !important;\n  opacity: 0.8 !important;\n}\n\nhtml body .rm-extensions-marketplace .rm-extension-small__author {\n  grid-column: 1 / -1 !important;\n  font-size: 11px !important;\n  font-weight: 500 !important;\n  line-height: 1.5 !important;\n  color: var(--mag-muted) !important;\n}\n\nhtml body .rm-extensions-marketplace .rm-extension-small__desc {\n  grid-column: 1 / -1 !important;\n  display: -webkit-box !important;\n  -webkit-box-orient: vertical !important;\n  -webkit-line-clamp: 3 !important;\n  margin-top: 4px !important;\n  overflow: hidden !important;\n  font-size: 12.5px !important;\n  line-height: 1.6 !important;\n  color: var(--mag-muted) !important;\n}\n\n/* 已安装：浅金小签 */\nhtml body .rm-extensions-marketplace .bp3-tag.bp3-intent-primary {\n  height: 18px !important;\n  min-height: 0 !important;\n  margin-left: 8px !important;\n  padding: 0 6px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 10px !important;\n  font-weight: 600 !important;\n  line-height: 18px !important;\n  letter-spacing: 0.2px !important;\n  color: var(--mag-gold-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n  border: 0 !important;\n  border-radius: 3px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-extensions-marketplace-details {\n  line-height: 1.75 !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n  scrollbar-width: thin;\n  scrollbar-color: var(--mag-border) transparent;\n}\n\nhtml body .rm-extensions-marketplace-details > div[style*=\"text-align: center\"] {\n  font-family: var(--mag-heading) !important;\n  font-size: 15px !important;\n  font-style: italic !important;\n  color: var(--mag-muted) !important;\n}\n\nhtml body .rm-extensions-marketplace-details :is(h1, h2, h3, h4) {\n  font-family: var(--mag-heading) !important;\n  font-weight: 600 !important;\n  line-height: 1.35 !important;\n  color: var(--mag-ink) !important;\n}\n\nhtml body .rm-extensions-marketplace-details a {\n  color: var(--mag-blue) !important;\n  text-decoration: none !important;\n}\n\nhtml body .rm-extensions-marketplace-details a:hover {\n  text-decoration: underline !important;\n  text-underline-offset: 3px !important;\n}\n\nhtml body .rm-extensions-marketplace-details img {\n  max-width: 100% !important;\n  height: auto !important;\n  border-radius: 6px !important;\n}\n\nhtml body .rm-extensions-marketplace-details :is(code, pre) {\n  font-family: var(--mag-code) !important;\n  font-size: 0.88em !important;\n  color: var(--mag-code-text) !important;\n  background: var(--mag-code-bg) !important;\n  border: 1px solid var(--mag-code-border) !important;\n  border-radius: 5px !important;\n}\n\nhtml body .rm-extensions-marketplace-details pre code {\n  background: transparent !important;\n  border: 0 !important;\n}\n\nhtml body .rm-extensions-marketplace-details .bp3-button {\n  font-family: var(--mag-body) !important;\n  font-size: 12px !important;\n  font-weight: 500 !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-shell) !important;\n  background-image: none !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n\nhtml body .rm-extensions-marketplace-details .bp3-button:is(:hover, :focus-visible) {\n  background: var(--mag-yellow-soft) !important;\n}\n\nhtml body .rm-extensions-marketplace-details .bp3-button.bp3-intent-primary {\n  color: var(--mag-paper) !important;\n  background: var(--mag-gold-ink) !important;\n  border-color: var(--mag-gold-ink) !important;\n}\n\nhtml body .rm-extensions-marketplace-details .bp3-button.bp3-intent-primary:hover {\n  background: color-mix(in srgb, var(--mag-gold-ink) 85%, var(--mag-ink)) !important;\n}\n\nhtml body .rm-extensions-marketplace-details .bp3-button.bp3-intent-danger {\n  color: #a0443d !important;\n  background: #f8eae5 !important;\n  border-color: #e8c8bf !important;\n}\n\n/* 插件自带的功能表（如 Workbench 模块开关）：原样式按暗底写，统一为墨色细线表 */\nhtml body :is(.rm-extensions-marketplace-details, .rm-settings) table {\n  width: 100% !important;\n  font-family: var(--mag-body) !important;\n  font-size: 13px !important;\n  line-height: 1.6 !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-top: 2px solid var(--mag-ink) !important;\n  border-collapse: collapse !important;\n  box-shadow: none !important;\n}\n\nhtml body :is(.rm-extensions-marketplace-details, .rm-settings) table :is(thead, tbody, tfoot, tr) {\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\n\nhtml body :is(.rm-extensions-marketplace-details, .rm-settings) table :is(th, td) {\n  padding: 8px 12px !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n  box-shadow: none !important;\n}\n\nhtml body :is(.rm-extensions-marketplace-details, .rm-settings) table th {\n  font-family: var(--mag-heading) !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  text-align: left !important;\n  background: var(--mag-shell) !important;\n  border-bottom: 2px solid var(--mag-yellow) !important;\n}\n\nhtml body :is(.rm-extensions-marketplace-details, .rm-settings) table :is(th, td) :is(span, div, p, label):not(.bp3-control-indicator):not([class*=\"bp3-icon\"]) {\n  color: inherit !important;\n  background: transparent !important;\n  text-shadow: none !important;\n}\n\nhtml body :is(.rm-extensions-marketplace-details, .rm-settings) table tbody tr:hover > td {\n  background: var(--mag-shell) !important;\n}\n\nhtml body :is(.rm-extensions-marketplace-details, .rm-settings) table td[aria-label=\"Feature Name\"] {\n  font-weight: 500 !important;\n}\n\nhtml body :is(.rm-extensions-marketplace-details, .rm-settings) table a {\n  color: var(--mag-blue) !important;\n}",
  "misc": "/* ==========================================================\n   33. 其他\n   ========================================================== */\n\n.rm-find-or-create-wrapper {\n  display: none !important;\n}\n\n/* 类标签（#.list-query、#.aside 等）只用来给块加样式，阅读时隐藏 */\nhtml body .roam-app .rm-block__input--view span.rm-page-ref--tag[data-tag^=\".\"] {\n  display: none !important;\n}",
  "weight": "/* ==========================================================\n   29b. 版面权重\n   规则由脚本写入 #mag-dyn-weight，只设置 --mag-w-*（被引用 2 / 4 / 8 次三档）。\n   这里只放不依赖数据的部分：标题块保持原字号，不参与权重\n   ========================================================== */\n\nhtml body .roam-app .rm-block[class*=\"rm-heading-level\"] > .rm-block-main {\n  --mag-w-size: initial;\n  --mag-w-weight: initial;\n  --mag-w-font: initial;\n  --mag-w-leading: initial;\n}",
  "property-card": "/* ==========================================================\n   32. 属性资料卡\n   页面第一个块只写了类型标签（如 #Goal、#class）且下面有子块时，整块排成一张资料卡：\n   墨色顶线 · 类型标签做成小号大写抬头 · 属性行（xxx::）排成两列表格\n   其他内容（说明、规则、模板）在卡片里按普通大纲显示，圆点、缩进、折叠都照常\n   脚本给该块加 data-mag-props，给属性行加 data-mag-attr；右上角箭头折叠整张卡\n   ========================================================== */\n\n/* 底板画在 ::before 上：左边缘与标题对齐，右边缘与正文右缘对齐（内缩量由脚本测量） */\nhtml body .roam-app .rm-block[data-mag-props] {\n  position: relative !important;\n  isolation: isolate !important;\n  margin: 4px 0 28px !important;\n  padding: 8px 0 10px !important;\n  background: transparent !important;\n  border: 0 !important;\n}\n\nhtml body .roam-app .rm-block[data-mag-props]::before {\n  content: \"\" !important;\n  position: absolute !important;\n  z-index: -1 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  left: var(--mag-card-l, 0px) !important;\n  right: var(--mag-card-r, 0px) !important;\n  background: color-mix(in srgb, var(--mag-shell) 55%, var(--mag-paper)) !important;\n  border-top: 2px solid var(--mag-ink) !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n  pointer-events: none !important;\n}\n\n/* 抬头：类型标签显示为小号大写刊签（去掉 # 号与底色） */\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-main .rm-page-ref--tag {\n  padding: 0 !important;\n  font-size: 0 !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-main .rm-page-ref--tag::after {\n  content: attr(data-tag);\n  font-family: var(--mag-body);\n  font-size: 10.5px;\n  font-weight: 700;\n  letter-spacing: 1.8px;\n  text-transform: uppercase;\n}\n\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-main .rm-page-ref--tag + .rm-page-ref--tag::before {\n  content: \"·\";\n  margin: 0 8px;\n  font-size: 10.5px;\n  color: var(--mag-faint);\n}\n\n/* 卡片内的圆点与折叠箭头：平时隐藏（保留占位，文字才能与正文对齐），\n   鼠标移到某一行时才出现，可以照常折叠该行的子块、拖动、右键。\n   整张卡的折叠用右上角的小箭头 */\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-main > .controls,\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-children > .rm-block[data-mag-attr] > .rm-block-main > .controls {\n  opacity: 0 !important;\n  transition: opacity 0.15s ease !important;\n}\n\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-main:hover > .controls,\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-children > .rm-block[data-mag-attr] > .rm-block-main:hover > .controls {\n  opacity: 0.8 !important;\n}\n\n/* 属性名只是标签：点它直接进入编辑，而不是跳到属性页（属性页仍可从块引用或搜索进入） */\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-children > .rm-block[data-mag-attr] > .rm-block-main > .rm-block__input--view .rm-attr-ref {\n  pointer-events: none !important;\n}\n\nhtml body .roam-app .rm-block[data-mag-props]::after {\n  content: \"\" !important;\n  position: absolute !important;\n  z-index: 2 !important;\n  top: 12px !important;\n  right: calc(var(--mag-card-r, 0px) + 10px) !important;\n  width: 24px !important;\n  height: 24px !important;\n  background-color: var(--mag-faint) !important;\n  -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>\") center / 13px 13px no-repeat !important;\n  mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>\") center / 13px 13px no-repeat !important;\n  cursor: pointer !important;\n  transition: transform 0.15s ease, background-color 0.15s ease !important;\n}\n\nhtml body .roam-app .rm-block[data-mag-props]:hover::after {\n  background-color: var(--mag-ink) !important;\n}\n\nhtml body .roam-app .rm-block[data-mag-props].rm-block--closed::after {\n  transform: rotate(-90deg) !important;\n}\n\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-children > .rm-multibar {\n  display: none !important;\n}\n\n/* 子块不再缩进：属性名与抬头、与下方正文首字对齐 */\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-children {\n  margin-left: 0 !important;\n  padding-left: 0 !important;\n}\n\n/* 卡片里的普通内容（说明、规则、模板）：缩进一级，让圆点落在底板内侧，层级也看得出属于抬头 */\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-children > .rm-block:not([data-mag-attr]) {\n  padding-left: 20px !important;\n}\n\n/* 行间虚线画在文字栏上，不越出底板 */\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-children > .rm-block[data-mag-attr] > .rm-block-main > .rm-block__input {\n  border-bottom: 1px dotted var(--mag-border) !important;\n}\n\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-children > .rm-block[data-mag-attr]:last-child > .rm-block-main > .rm-block__input {\n  border-bottom: 0 !important;\n}\n\n/* 属性行：属性名固定在左列，值在右列自然换行 */\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-children > .rm-block[data-mag-attr] > .rm-block-main {\n  --mag-w-size: 14px;\n  --mag-w-leading: 1.7;\n}\n\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-children > .rm-block[data-mag-attr] > .rm-block-main > .rm-block__input--view {\n  position: relative !important;\n  padding-left: 180px !important;\n}\n\nhtml body .roam-app .rm-block[data-mag-props] > .rm-block-children > .rm-block[data-mag-attr] > .rm-block-main > .rm-block__input--view .rm-attr-ref {\n  position: absolute !important;\n  top: 4px !important;\n  left: 0 !important;\n  width: 168px !important;\n  overflow: hidden !important;\n  font-family: var(--mag-body) !important;\n  font-size: 10px !important;\n  font-weight: 600 !important;\n  line-height: 23.8px !important;\n  letter-spacing: 1px !important;\n  text-transform: uppercase !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  color: var(--mag-muted) !important;\n}\n/* The global block decoration reset must not hide the property card plate. */\nhtml body .roam-app .roam-body-main .rm-block[data-mag-props]::before { display:block!important; }\nhtml body .roam-app .roam-body-main .rm-block[data-mag-props] > .rm-block-children > .rm-block[data-mag-attr] > .rm-block-main > .rm-block__input--view { padding-left:clamp(100px,30%,168px)!important; }\nhtml body .roam-app .roam-body-main .rm-block[data-mag-props] > .rm-block-children > .rm-block[data-mag-attr] > .rm-block-main > .rm-block__input--view .rm-attr-ref { width:clamp(88px,28%,156px)!important; font-size:12px!important; letter-spacing:.3px!important; text-transform:none!important; pointer-events:auto!important; }\n",
  "images": "/* ==========================================================\n   22.3 图片与视频：杂志插图\n   · 左侧与正文起点对齐，右侧与正文终点对齐\n   · 恢复外侧留白细框与金色悬停\n   · 写成 ![图注](链接) 时显示编辑式图注\n   ========================================================== */\n\n/* 覆盖 Roam 默认的 500px 内联宽度，只填满当前正文栏 */\nhtml body .roam-app .rm-inline-img__resize,\nhtml body .roam-app .rm-inline-img__resize > .react-resizable {\n  display: block !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  box-sizing: border-box !important;\n}\n\nhtml body .roam-app img.rm-inline-img {\n  display: block !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  height: auto !important;\n  border-radius: 6px !important;\n  outline: 0 !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-inline-img__resize:hover {\n  outline-color: color-mix(in srgb, var(--mag-gold) 55%, var(--mag-border)) !important;\n}\n\n/* 只保留上下版面呼吸，不增加左右 margin */\nhtml body .roam-app .rm-inline-img__resize {\n  margin: 14px 0 18px !important;\n  padding: 7px !important;\n  background: var(--mag-paper) !important;\n  border-radius: 12px !important;\n  outline: 1px solid var(--mag-border) !important;\n  outline-offset: 0 !important;\n  transition: outline-color 0.2s ease !important;\n}\n\n/* 缩放手柄：平时隐藏，悬停才出现 */\nhtml body .roam-app .rm-inline-img__resize .react-resizable-handle {\n  opacity: 0 !important;\n  transition: opacity 0.15s ease !important;\n}\n\nhtml body .roam-app .rm-inline-img__resize:hover .react-resizable-handle {\n  opacity: 0.6 !important;\n}\n\n/* 图注：![图注](链接) */\nhtml body .roam-app [data-mag-caption] {\n  position: relative !important;\n  margin-bottom: 40px !important;\n}\n\nhtml body .roam-app [data-mag-caption]::after {\n  content: attr(data-mag-caption) !important;\n  position: absolute !important;\n  top: calc(100% + 14px) !important;\n  left: 0 !important;\n  right: 0 !important;\n  padding-left: 30px !important;\n  font-family: var(--mag-aside-font) !important;\n  font-size: 12.5px !important;\n  font-style: italic !important;\n  font-synthesis: none !important;\n  line-height: 1.5 !important;\n  color: var(--mag-muted) !important;\n  background: linear-gradient(var(--mag-yellow), var(--mag-yellow)) left 0.75em / 22px 1.5px no-repeat !important;\n  white-space: normal !important;\n  pointer-events: none !important;\n}\n\n/* 视频与内嵌网页：同样填满正文栏，不跨过圆点栏 */\nhtml body .roam-app .rm-block__input :is(iframe, video) {\n  display: block !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  box-sizing: border-box !important;\n  margin: 14px 0 18px !important;\n  border: 7px solid var(--mag-paper) !important;\n  border-radius: 12px !important;\n  outline: 1px solid var(--mag-border) !important;\n  outline-offset: 0 !important;\n  background: var(--mag-shell) !important;\n}\n\n/* 视频时间戳：恢复金色小签 */\nhtml body .roam-app .rm-video-timestamp {\n  display: inline-block !important;\n  margin: 0 2px !important;\n  padding: 0 6px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 0.8em !important;\n  font-weight: 600 !important;\n  font-variant-numeric: tabular-nums !important;\n  line-height: 1.6 !important;\n  letter-spacing: 0.3px !important;\n  color: var(--mag-gold-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n  border-radius: 4px !important;\n  text-decoration: none !important;\n  cursor: pointer !important;\n}\n\nhtml body .roam-app .rm-video-timestamp:hover {\n  color: var(--mag-ink) !important;\n}",
  "video-reader": "html body .roam-app .rm-block__input :is(iframe, video) {\n  display: block !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  box-sizing: border-box !important;\n  margin: 14px 0 18px !important;\n  border: 7px solid var(--mag-paper) !important;\n  border-radius: 12px !important;\n  outline: 1px solid var(--mag-border) !important;\n  outline-offset: 0 !important;\n  background: var(--mag-shell) !important;\n}\n\n/* 视频时间戳：恢复金色小签 */\nhtml body .roam-app .rm-video-timestamp {\n  display: inline-block !important;\n  margin: 0 2px !important;\n  padding: 0 6px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 0.8em !important;\n  font-weight: 600 !important;\n  font-variant-numeric: tabular-nums !important;\n  line-height: 1.6 !important;\n  letter-spacing: 0.3px !important;\n  color: var(--mag-gold-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n  border-radius: 4px !important;\n  text-decoration: none !important;\n  cursor: pointer !important;\n}\n\nhtml body .roam-app .rm-video-timestamp:hover {\n  color: var(--mag-ink) !important;\n}\n\n/* ==========================================================\n   22.4 Video Reader：只美化布局，控制功能复用 Roam 原生按钮\n   支持 Roam iframe / YouTube / Vimeo / 上传的 HTML5 video\n   ========================================================== */\n\nhtml body .roam-app .rm-block__input.mag-video-reader {\n  position: relative !important;\n  isolation: isolate !important;\n  display: block !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  box-sizing: border-box !important;\n  margin: 14px 0 18px !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 12px !important;\n  box-shadow: 0 8px 24px color-mix(in srgb, var(--mag-ink) 9%, transparent) !important;\n}\n\nhtml body .mag-video-reader .mag-video-toolbar {\n  display: flex !important;\n  align-items: center !important;\n  gap: 9px !important;\n  min-height: 44px !important;\n  box-sizing: border-box !important;\n  padding: 7px 9px 7px 12px !important;\n  background: var(--mag-paper) !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n}\n\nhtml body .mag-video-reader .mag-video-kicker {\n  flex: 0 0 auto !important;\n  padding-right: 9px !important;\n  color: var(--mag-gold-ink) !important;\n  border-right: 1px solid var(--mag-border) !important;\n  font: 800 8px/1 var(--mag-body) !important;\n  letter-spacing: .16em !important;\n}\n\nhtml body .mag-video-reader .mag-video-heading {\n  min-width: 0 !important;\n  flex: 1 1 auto !important;\n}\n\nhtml body .mag-video-reader .mag-video-title {\n  overflow: hidden !important;\n  color: var(--mag-ink) !important;\n  font: 700 12.5px/1.2 var(--mag-aside-font) !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n}\n\nhtml body .mag-video-reader .mag-video-source {\n  margin-top: 2px !important;\n  color: var(--mag-muted) !important;\n  font: 700 8px/1 var(--mag-body) !important;\n  letter-spacing: .12em !important;\n  text-transform: uppercase !important;\n}\n\nhtml body .mag-video-reader .mag-video-actions {\n  display: flex !important;\n  align-items: center !important;\n  gap: 3px !important;\n  flex: 0 0 auto !important;\n}\n\nhtml body .mag-video-reader .mag-video-actions .mag-video-native-control {\n  position: static !important;\n  inset: auto !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  visibility: visible !important;\n  width: 27px !important;\n  min-width: 27px !important;\n  height: 27px !important;\n  min-height: 27px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border: 1px solid transparent !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n  opacity: 1 !important;\n  transform: none !important;\n}\n\nhtml body .mag-video-reader .mag-video-actions .mag-video-native-control:hover {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n  border-color: color-mix(in srgb, var(--mag-gold) 35%, var(--mag-border)) !important;\n}\n\nhtml body .mag-video-reader .mag-video-stage {\n  position: relative !important;\n  display: block !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  box-sizing: border-box !important;\n  margin: 0 !important;\n  padding: 7px !important;\n  overflow: visible !important;\n  background: var(--mag-paper) !important;\n}\n\nhtml body .mag-video-reader .mag-video-stage :is(.rm-video-player__spacing-wrapper, .rm-video-player__container) {\n  width: 100% !important;\n  max-width: 100% !important;\n  margin: 0 !important;\n}\n\nhtml body .mag-video-reader .mag-video-stage .rm-video-player__container {\n  height: auto !important;\n  aspect-ratio: 16 / 9 !important;\n  overflow: hidden !important;\n  background: #11111a !important;\n  border-radius: 7px !important;\n}\n\nhtml body .mag-video-reader .mag-video-stage iframe.rm-video-player {\n  position: absolute !important;\n  inset: 0 !important;\n  display: block !important;\n  width: 100% !important;\n  height: 100% !important;\n  max-width: none !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  background: #11111a !important;\n  border: 0 !important;\n  border-radius: 7px !important;\n  outline: 0 !important;\n}\n\nhtml body .mag-video-reader .mag-video-stage video {\n  display: block !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  max-height: min(70vh, 720px) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  object-fit: contain !important;\n  background: #11111a !important;\n  border: 0 !important;\n  border-radius: 7px !important;\n  outline: 0 !important;\n}\n\n/* 原生浮动按钮已移到标题栏，空壳不再占位或露出半截 */\nhtml body .mag-video-reader .mag-video-stage :is(.rm-video-player__gutter, .hoveronly):empty {\n  display: none !important;\n}\n\n/* 时间戳作为视频子块滚动时，视频主块保持置顶 */\nhtml body .roam-main .roam-block-container:has(> .rm-block-main .mag-video-reader) > .rm-block-main {\n  position: sticky !important;\n  top: 8px !important;\n  z-index: 18 !important;\n  background: var(--mag-paper) !important;\n}\n\n/* 右侧栏保留紧凑布局，不强制置顶 */\nhtml body .rm-sidebar-window .roam-block-container:has(> .rm-block-main .mag-video-reader) > .rm-block-main {\n  position: relative !important;\n  top: auto !important;\n  z-index: auto !important;\n}\n\nhtml body .rm-sidebar-window .mag-video-reader .mag-video-toolbar {\n  gap: 5px !important;\n  padding-left: 8px !important;\n}\n\nhtml body .rm-sidebar-window .mag-video-reader .mag-video-kicker,\nhtml body .rm-sidebar-window .mag-video-reader .mag-video-source {\n  display: none !important;\n}\n\nhtml body .rm-sidebar-window .mag-video-reader .mag-video-title {\n  font-size: 11px !important;\n}\n\n\n/* 保持 Roam 原生 DOM 不动，只把原生浮动控制视觉定位到标题栏 */\nhtml body .mag-video-reader .mag-video-stage .rm-video-player__gutter {\n  position: absolute !important;\n  top: -37px !important;\n  right: 8px !important;\n  z-index: 8 !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 3px !important;\n  width: auto !important;\n  height: 27px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  transform: none !important;\n  pointer-events: auto !important;\n}\n\nhtml body .mag-video-reader .mag-video-stage .hoveronly:has(> .rm-video-player__edit-btn) {\n  position: absolute !important;\n  top: -37px !important;\n  right: 101px !important;\n  z-index: 9 !important;\n  display: block !important;\n  width: 27px !important;\n  height: 27px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  transform: none !important;\n  pointer-events: auto !important;\n}\n\nhtml body .mag-video-reader .mag-video-stage :is(\n  .rm-video-player__edit-btn,\n  .rm-video-player__comment-button,\n  .rm-video-player__theater-button,\n  .rm-video-player__timestamps-button\n) {\n  position: static !important;\n  inset: auto !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  visibility: visible !important;\n  width: 27px !important;\n  min-width: 27px !important;\n  height: 27px !important;\n  min-height: 27px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border: 1px solid transparent !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n  opacity: 1 !important;\n  transform: none !important;\n  pointer-events: auto !important;\n}\n\nhtml body .mag-video-reader .mag-video-stage :is(\n  .rm-video-player__edit-btn,\n  .rm-video-player__comment-button,\n  .rm-video-player__theater-button,\n  .rm-video-player__timestamps-button\n):hover {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n  border-color: color-mix(in srgb, var(--mag-gold) 35%, var(--mag-border)) !important;\n}\n\nhtml body .rm-sidebar-window .mag-video-reader .mag-video-stage .hoveronly:has(> .rm-video-player__edit-btn) {\n  right: 93px !important;\n}\n\n\n\nhtml body .mag-video-reader .mag-video-stage .rm-video-player__gutter {\n  flex-direction: row !important;\n  flex-wrap: nowrap !important;\n  width: 87px !important;\n  min-width: 87px !important;\n  max-width: 87px !important;\n  overflow: visible !important;\n}\n\nhtml body .mag-video-reader .mag-video-stage .rm-video-player__gutter > button {\n  flex: 0 0 27px !important;\n}\n\n\n\n/* 给右侧四个原生按钮预留空间，长标题只截断、不压到图标下 */\nhtml body .mag-video-reader .mag-video-toolbar {\n  padding-right: 132px !important;\n}\n\n/* 22.4a 原生控制：纯英文、明确间距、整体靠右 */\nhtml body :is(.mag-video-reader, .rm-video-theater) button[data-mag-label] {\n  width: auto !important;\n  min-width: 0 !important;\n  height: 28px !important;\n  min-height: 28px !important;\n  box-sizing: border-box !important;\n  margin: 0 !important;\n  padding: 0 9px !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border: 1px solid transparent !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n  font-size: 0 !important;\n  line-height: 1 !important;\n  white-space: nowrap !important;\n}\nhtml body :is(.mag-video-reader, .rm-video-theater) button[data-mag-label]::before {\n  display: none !important;\n  content: none !important;\n}\nhtml body :is(.mag-video-reader, .rm-video-theater) button[data-mag-label] > :is(svg, span, i) {\n  display: none !important;\n}\nhtml body :is(.mag-video-reader, .rm-video-theater) button[data-mag-label]::after {\n  content: attr(data-mag-label) !important;\n  display: inline-block !important;\n  color: inherit !important;\n  font: 750 10px/1 var(--mag-body) !important;\n  letter-spacing: .025em !important;\n}\nhtml body :is(.mag-video-reader, .rm-video-theater) button[data-mag-label]:hover {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n  border-color: color-mix(in srgb, var(--mag-gold) 35%, var(--mag-border)) !important;\n}\n\n/* 普通卡片：三按钮 gutter 与 Open 分开定位，互不覆盖 */\nhtml body .mag-video-reader .mag-video-toolbar {\n  padding-right: 278px !important;\n}\nhtml body .mag-video-reader .mag-video-stage .rm-video-player__gutter {\n  position: absolute !important;\n  top: -37px !important;\n  right: 8px !important;\n  z-index: 9 !important;\n  display: flex !important;\n  flex-flow: row nowrap !important;\n  align-items: center !important;\n  justify-content: flex-end !important;\n  gap: 7px !important;\n  width: auto !important;\n  min-width: 0 !important;\n  max-width: none !important;\n  height: 28px !important;\n  overflow: visible !important;\n}\nhtml body .mag-video-reader .mag-video-stage .rm-video-player__gutter > button[data-mag-label] {\n  flex: 0 0 auto !important;\n  width: auto !important;\n  min-width: 0 !important;\n}\nhtml body .mag-video-reader .mag-video-stage .hoveronly:has(> .rm-video-player__edit-btn) {\n  position: absolute !important;\n  top: -37px !important;\n  right: 218px !important;\n  z-index: 10 !important;\n  display: block !important;\n  width: auto !important;\n  height: 28px !important;\n}\nhtml body .mag-video-reader .mag-video-stage .hoveronly > button[data-mag-label] {\n  width: auto !important;\n  min-width: 0 !important;\n}\n\n/* 窄右栏：标题一行，功能一行，右对齐 */\nhtml body .rm-sidebar-window .mag-video-reader .mag-video-toolbar {\n  min-height: 66px !important;\n  align-items: flex-start !important;\n  padding: 8px 8px 34px !important;\n}\nhtml body .rm-sidebar-window .mag-video-reader .mag-video-stage .rm-video-player__gutter {\n  top: -32px !important;\n  right: 6px !important;\n  gap: 5px !important;\n}\nhtml body .rm-sidebar-window .mag-video-reader .mag-video-stage .hoveronly:has(> .rm-video-player__edit-btn) {\n  top: -32px !important;\n  right: 206px !important;\n}\n\n/* Theater 恢复 Roam 原生尺寸与比例：不强制高度、不 sticky、不拉伸 iframe */\nhtml body .rm-video-theater {\n  box-sizing: border-box !important;\n  padding: 10px 14px 48px !important;\n  background: var(--mag-paper) !important;\n}\nhtml body .rm-video-theater > .rm-video-player__spacing-wrapper--theater {\n  position: relative !important;\n  top: auto !important;\n  z-index: auto !important;\n  width: min(100%, 1320px) !important;\n  max-width: 1320px !important;\n  box-sizing: border-box !important;\n  margin: 0 auto !important;\n  padding: 7px !important;\n  overflow: visible !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 12px !important;\n  box-shadow: 0 8px 24px color-mix(in srgb, var(--mag-ink) 9%, transparent) !important;\n}\nhtml body .rm-video-theater .rm-video-player__theater-toolbar {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-end !important;\n  gap: 7px !important;\n  min-height: 36px !important;\n  box-sizing: border-box !important;\n  padding: 5px 3px 1px !important;\n}\n\n/* 可编辑的原生时间戳笔记镜像：失焦保存回原 block */\nhtml body .mag-video-theater-notes {\n  width: min(100%, 1320px) !important;\n  max-width: 1320px !important;\n  box-sizing: border-box !important;\n  margin: 12px auto 0 !important;\n  overflow: hidden !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 12px !important;\n  box-shadow: 0 8px 24px color-mix(in srgb, var(--mag-ink) 7%, transparent) !important;\n}\nhtml body .mag-video-theater-notes__header {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: space-between !important;\n  min-height: 38px !important;\n  padding: 0 14px !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n}\nhtml body .mag-video-theater-notes__eyebrow {\n  color: var(--mag-gold-ink) !important;\n  font: 800 9px/1 var(--mag-body) !important;\n  letter-spacing: .15em !important;\n}\nhtml body .mag-video-theater-notes__count {\n  color: var(--mag-muted) !important;\n  font: 700 10px/1 var(--mag-body) !important;\n  font-variant-numeric: tabular-nums !important;\n}\nhtml body .mag-video-theater-notes__list {\n  display: grid !important;\n  padding: 4px 10px 8px !important;\n}\nhtml body .mag-video-theater-note {\n  display: grid !important;\n  grid-template-columns: 82px minmax(0, 1fr) !important;\n  align-items: start !important;\n  gap: 12px !important;\n  min-height: 48px !important;\n  box-sizing: border-box !important;\n  padding: 8px !important;\n  border-bottom: 1px solid color-mix(in srgb, var(--mag-border) 70%, transparent) !important;\n}\nhtml body .mag-video-theater-note:last-child {\n  border-bottom: 0 !important;\n}\nhtml body .mag-video-theater-note__time {\n  justify-self: start !important;\n  width: auto !important;\n  min-width: 0 !important;\n  height: auto !important;\n  min-height: 0 !important;\n  margin-top: 3px !important;\n  padding: 5px 8px !important;\n  color: var(--mag-gold-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n  border: 1px solid color-mix(in srgb, var(--mag-gold) 26%, var(--mag-border)) !important;\n  border-radius: 5px !important;\n  font: 750 10px/1 var(--mag-body) !important;\n  font-variant-numeric: tabular-nums !important;\n  cursor: pointer !important;\n}\nhtml body .mag-video-theater-note__editor {\n  display: block !important;\n  width: 100% !important;\n  min-height: 34px !important;\n  box-sizing: border-box !important;\n  resize: none !important;\n  overflow: hidden !important;\n  padding: 6px 8px !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 1px solid transparent !important;\n  border-radius: 5px !important;\n  outline: 0 !important;\n  font: 500 13px/1.55 var(--mag-body) !important;\n}\nhtml body .mag-video-theater-note__editor:hover {\n  background: color-mix(in srgb, var(--mag-yellow-soft) 36%, transparent) !important;\n}\nhtml body .mag-video-theater-note__editor:focus {\n  background: var(--mag-paper) !important;\n  border-color: color-mix(in srgb, var(--mag-gold) 45%, var(--mag-border)) !important;\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--mag-gold) 12%, transparent) !important;\n}\nhtml body .mag-video-theater-note__editor.is-saving {\n  opacity: .55 !important;\n}\nhtml body .mag-video-theater-note__editor.is-saved {\n  border-color: color-mix(in srgb, #4f8a63 55%, var(--mag-border)) !important;\n}\nhtml body .mag-video-theater-note__editor.is-error {\n  border-color: #b04747 !important;\n}\nhtml body .mag-video-theater-notes__empty {\n  padding: 20px 10px !important;\n  color: var(--mag-muted) !important;\n  text-align: center !important;\n  font: 500 11px/1.4 var(--mag-body) !important;\n}\n\n\n/* 22.4c 交互微调：可滚动 Theater、按钮上移、Open 归组 */\nhtml body .rm-video-theater {\n  height: calc(100vh - 46px) !important;\n  min-height: 0 !important;\n  padding-bottom: 10px !important;\n  overflow-x: hidden !important;\n  overflow-y: auto !important;\n  scrollbar-gutter: stable !important;\n}\nhtml body .mag-video-theater-notes {\n  margin-bottom: 0 !important;\n}\nhtml body .rm-video-theater .rm-video-player__theater-toolbar {\n  transform: translateY(-3px) !important;\n  padding-bottom: 0 !important;\n}\nhtml body .mag-video-reader .mag-video-stage .rm-video-player__gutter,\nhtml body .mag-video-reader .mag-video-stage .hoveronly:has(> .rm-video-player__edit-btn) {\n  top: -40px !important;\n}\nhtml body .mag-video-reader .mag-video-stage .hoveronly:has(> .rm-video-player__edit-btn) {\n  top: -44px !important;\n  right: 165px !important;\n}\nhtml body .rm-sidebar-window .mag-video-reader .mag-video-stage .rm-video-player__gutter,\nhtml body .rm-sidebar-window .mag-video-reader .mag-video-stage .hoveronly:has(> .rm-video-player__edit-btn) {\n  top: -35px !important;\n}\nhtml body .rm-sidebar-window .mag-video-reader .mag-video-stage .hoveronly:has(> .rm-video-player__edit-btn) {\n  top: -39px !important;\n  right: 159px !important;\n}\n\n/* 22.4d Theater 稳定布局：工具栏计入视频高度，笔记内部滚动 */\nhtml body .rm-video-theater {\n  display: flex !important;\n  flex-direction: column !important;\n  height: calc(100% - 1px) !important;\n  min-height: 0 !important;\n  padding-top: 14px !important;\n  padding-bottom: 12px !important;\n  overflow: hidden !important;\n}\nhtml body .rm-video-theater > .rm-video-player__spacing-wrapper--theater {\n  height: auto !important;\n  min-height: 0 !important;\n  flex: 0 0 auto !important;\n}\nhtml body .rm-video-theater .rm-video-player__theater-toolbar {\n  flex: 0 0 40px !important;\n}\nhtml body .rm-video-theater > .mag-video-theater-notes {\n  display: flex !important;\n  flex: 1 1 auto !important;\n  flex-direction: column !important;\n  min-height: 0 !important;\n  margin-top: 10px !important;\n  margin-bottom: 0 !important;\n  overflow: hidden !important;\n}\nhtml body .mag-video-theater-notes__header {\n  flex: 0 0 38px !important;\n}\nhtml body .mag-video-theater-notes__list {\n  flex: 1 1 auto !important;\n  min-height: 0 !important;\n  overflow-x: hidden !important;\n  overflow-y: auto !important;\n  overscroll-behavior: contain !important;\n  scrollbar-gutter: stable !important;\n}\n/* Theater 编辑时不允许右侧栏中的另一份视频 iframe 穿透到笔记面板 */\nhtml body:has(.rm-video-theater) .rm-right-sidebar :is(\n  .rm-video-player__container,\n  iframe.rm-video-player,\n  video\n) {\n  visibility: hidden !important;\n}\n/* Open 与其余三项保持同一视觉基线；水平间距维持 7px */\nhtml body .mag-video-reader .mag-video-stage .hoveronly:has(> .rm-video-player__edit-btn) {\n  top: -44.5px !important;\n}\nhtml body .rm-sidebar-window .mag-video-reader .mag-video-stage .hoveronly:has(> .rm-video-player__edit-btn) {\n  top: -39.5px !important;\n}\n\n/* 22.4e Theater 时间戳块操作：打开原块 / 二次确认删除 */\nhtml body .mag-video-theater-note {\n  grid-template-columns: 82px minmax(0, 1fr) auto !important;\n}\nhtml body .mag-video-theater-note__actions {\n  display: flex !important;\n  align-items: center !important;\n  align-self: start !important;\n  gap: 4px !important;\n  min-height: 34px !important;\n  padding-top: 2px !important;\n}\nhtml body .mag-video-theater-note__action {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  width: auto !important;\n  min-width: 0 !important;\n  height: 24px !important;\n  min-height: 24px !important;\n  box-sizing: border-box !important;\n  margin: 0 !important;\n  padding: 0 7px !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  border: 1px solid transparent !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n  font: 750 9px/1 var(--mag-body) !important;\n  letter-spacing: .025em !important;\n  white-space: nowrap !important;\n}\nhtml body .mag-video-theater-note__action:hover {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n  border-color: color-mix(in srgb, var(--mag-gold) 30%, var(--mag-border)) !important;\n}\nhtml body .mag-video-theater-note__delete:hover,\nhtml body .mag-video-theater-note__delete.is-confirming {\n  color: #9f3131 !important;\n  background: color-mix(in srgb, #b04747 9%, var(--mag-paper)) !important;\n  border-color: color-mix(in srgb, #b04747 36%, var(--mag-border)) !important;\n}\nhtml body .mag-video-theater-note__delete:disabled {\n  opacity: .55 !important;\n  cursor: wait !important;\n}\n\n\n/* 22.4f Theater 行内垂直对齐 */\nhtml body .mag-video-theater-note {\n  align-items: center !important;\n}\nhtml body .mag-video-theater-note__time {\n  align-self: center !important;\n  margin-top: 0 !important;\n}\nhtml body .mag-video-theater-note__editor {\n  align-self: center !important;\n}\nhtml body .mag-video-theater-note__actions {\n  align-self: center !important;\n  padding-top: 0 !important;\n}\n\n\n/* 22.4g 聚焦/单块页面：Open 与同组控制保持基线 */\nhtml body .rm-zoom-block-wrapper .mag-video-reader .mag-video-stage .hoveronly:has(> .rm-video-player__edit-btn) {\n  top: -39.5px !important;\n}\n\n\n/* 22.4h Theater 宽屏限制：兼顾 27 寸 4K 与 13 寸笔记本 */\nhtml body .rm-video-theater > .rm-video-player__spacing-wrapper--theater,\nhtml body .rm-video-theater > .mag-video-theater-notes {\n  width: min(100%, 1120px, calc((100dvh - 390px) * 16 / 9)) !important;\n  max-width: 1120px !important;\n}\n\n/* 低高度笔记本优先给时间戳笔记保留约 280–320px */\n@media (max-height: 820px) {\n  html body .rm-video-theater > .rm-video-player__spacing-wrapper--theater,\n  html body .rm-video-theater > .mag-video-theater-notes {\n    width: min(100%, 960px, calc((100dvh - 340px) * 16 / 9)) !important;\n  }\n}\n\n/* Matching original video styles are loaded with the supplied implementation. */\n\n/* Preserve the timestamp bullet correction on compact viewports. */\n@media (max-width:1600px) {\n html body .rm-video-timestamps > .rm-video-timestamps__entry > .rm-block > .rm-block-main {\n  margin-inline:0!important;padding-inline:0!important;min-width:0!important;\n }\n html body .rm-video-timestamps > .rm-video-timestamps__entry > .rm-block > .rm-block-main > .controls {\n  position:relative!important;inset:auto!important;transform:none!important;\n  flex:0 0 26px!important;width:26px!important;min-width:26px!important;max-width:26px!important;\n  margin-inline:0!important;padding-inline:0!important;\n }\n html body .rm-video-timestamps > .rm-video-timestamps__entry > .rm-block > .rm-block-main > .controls > :is(.block-expand,.rm-bullet) {\n  position:static!important;inset:auto!important;transform:none!important;margin-inline:0!important;\n }\n html body .rm-video-timestamps > .rm-video-timestamps__entry > .rm-block > .rm-block-main > .controls > .rm-bullet {\n  flex:0 0 14px!important;width:14px!important;min-width:14px!important;\n }\n html body .rm-video-timestamps > .rm-video-timestamps__entry > .rm-block > .rm-block-main > :is(.rm-block__input,.rm-autocomplete__wrapper) {\n  min-width:0!important;margin-inline:0!important;\n }\n html body .rm-video-theater {padding:8px!important;}\n}\n\n/* Laptop theater only: cap video height, let notes use the entire pane.\n   Use the browser viewport so opening sidebars cannot change this mode. */\n@media (max-width:1800px) and (max-height:1000px) {\n html body .rm-video-theater {container-type:size;}\n html body .rm-video-theater > .rm-video-player__spacing-wrapper--theater {\n  width:min(100%,1120px,max(160px,calc(min(56cqh,100cqh - 300px) * 16 / 9)))!important;\n  max-width:100%!important;\n }\n html body .rm-video-theater > .mag-video-theater-notes {\n  width:100%!important;max-width:100%!important;\n }\n html body .rm-video-theater > .mag-video-theater-notes > .mag-video-theater-notes__list {\n  align-content:start!important;\n }\n}\n",
  "page-stats": "/* ==========================================================\n   28. 页面数据行：CHARS · WORDS · MIN READ · UPDATED\n   挂在标题自身（黄色笔触下方），与标题左边缘严格对齐；\n   与刊头、页面脉搏同一套小号大写字。脚本给标题写入 data-mag-stats\n   ========================================================== */\n\n/* 有数据行时，笔触改由背景图绘制，下方接一行小字 */\nhtml body .roam-app .rm-title-display[data-mag-stats]::after {\n  content: attr(data-mag-stats) !important;\n  display: block !important;\n  width: auto !important;\n  height: auto !important;\n  margin-top: 12px !important;\n  padding-top: 28px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 10px !important;\n  font-weight: 600 !important;\n  font-style: normal !important;\n  font-variant-numeric: tabular-nums !important;\n  line-height: 1.6 !important;\n  letter-spacing: 1.4px !important;\n  text-transform: uppercase !important;\n  white-space: normal !important;\n  color: var(--mag-muted) !important;\n  background: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 10'><rect x='1' y='2' width='50' height='7' rx='3.5' fill='%23f4d758' transform='rotate(-1.5 26 5.5)'/></svg>\") left top / 52px 10px no-repeat !important;\n  border-radius: 0 !important;\n  transform: none !important;\n  pointer-events: none !important;\n}",
  "pulse": "/* ==========================================================\n   31. 页面脉搏：标题上方一行小字 + 12 周折线\n   脚本写入 data-mag-kicker（文字）与 --mag-pulse（折线图）；日记页显示刊头，不显示脉搏\n   ========================================================== */\n\nhtml body .roam-app .rm-title-display[data-mag-kicker]:not([data-mag-masthead])::before {\n  content: attr(data-mag-kicker) !important;\n  display: block !important;\n  box-sizing: border-box !important;\n  width: max-content !important;\n  max-width: 100% !important;\n  margin: 0 0 14px !important;\n  padding: 0 108px 0 0 !important;\n  font-family: var(--mag-body) !important;\n  font-size: 10px !important;\n  font-weight: 600 !important;\n  font-style: normal !important;\n  font-variant-numeric: tabular-nums !important;\n  line-height: 18px !important;\n  letter-spacing: 1.6px !important;\n  text-transform: uppercase !important;\n  color: var(--mag-muted) !important;\n  background: var(--mag-pulse, none) right center / 96px 18px no-repeat !important;\n  pointer-events: none !important;\n}",
  "asides": "/* ==========================================================\n   30. 边注栏：子块打上 #.aside（右侧）或 #.aside-left（左侧）\n   也可以右键圆点，菜单里选 Aside: Right / Aside: Left / Aside: Remove。\n   旁注批注它的父块；想批注某个子块，就挂在那个子块下面（孙块）。\n   · 放进正文两侧本来的留白里，正文宽度永远不变；某侧放不下时那一侧原地显示\n   · 按书籍惯例，边注文字向正文对齐：右侧边注左对齐，左侧边注右对齐；\n     金线落在靠正文的那一端；圆点放在外侧（靠页边），不与正文的圆点打架\n   · 排版由脚本完成：每条与父块首行平齐，同侧多条依次下排，不重叠\n   · 字体：衬线小字，西文斜体；中文正体并略缩小，与西文视觉等大\n   ========================================================== */\n\n/* 旁注文字 */\nhtml body .roam-app .rm-block:is(.aside, .aside-left, [data-page-links*='\".aside\"'], [data-page-links*='\".aside-left\"']) :is(.roam-block, .rm-block-text, .rm-block__input, textarea.rm-block-input) {\n  --mag-w-font: var(--mag-aside-font);\n  --mag-w-size: 13.5px;\n  --mag-w-weight: 400;\n  --mag-w-leading: 1.65;\n  --mag-block-ink: var(--mag-muted);\n  font-style: italic !important;\n  font-synthesis: none !important;\n}\n\n/* 默认：原地小号旁注（窗口窄、页边放不下时）\n   不画竖线，免得和 Roam 的层级线叠在一起；改为文字上方一截金色短线，与页边旁注同一个记号 */\nhtml body .roam-app .rm-block:is(.aside, .aside-left, [data-page-links*='\".aside\"'], [data-page-links*='\".aside-left\"']) > .rm-block-main {\n  margin: 2px 0 6px !important;\n  padding-left: 0 !important;\n  border-left: 0 !important;\n}\n\nhtml body .roam-app .rm-block:is(.aside, .aside-left, [data-page-links*='\".aside\"'], [data-page-links*='\".aside-left\"']) > .rm-block-main > :is(.rm-block__input, .rm-autocomplete__wrapper > textarea.rm-block-input) {\n  padding-top: 6px !important;\n  background: linear-gradient(var(--mag-yellow), var(--mag-yellow)) left 2px / 22px 1.5px no-repeat !important;\n}\n\nhtml body .roam-app .rm-block:is(.aside, .aside-left, [data-page-links*='\".aside\"'], [data-page-links*='\".aside-left\"']) > .rm-block-main > .controls {\n  opacity: 0.35 !important;\n}\n\n/* 边注模式：绝对定位到正文两侧的留白里，位置与宽度由脚本给出 */\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside] {\n  position: absolute !important;\n  top: var(--mag-aside-top, 0px) !important;\n  left: var(--mag-aside-left, 100%) !important;\n  width: var(--mag-aside-width, 160px) !important;\n  margin: 0 !important;\n  z-index: 2 !important;\n}\n\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside] > .rm-block-main {\n  margin: 0 !important;\n  padding: 0 !important;\n  border-left: 0 !important;\n  background: none !important;\n}\n\n/* 右侧边注：圆点挪到外侧（右边），文字靠左贴近正文 */\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside][data-mag-aside=\"right\"] > .rm-block-main {\n  flex-direction: row-reverse !important;\n}\n\n/* 圆点栏固定 22px，放在外侧（左旁注在最左、右旁注在最右）：\n   只留圆点，折叠箭头与行尾的计数占位不显示；\n   其他扩展加进来的按钮（如插入块的「+」）排在圆点正下方。\n   平时全部隐藏，鼠标移到这条旁注上才出现 */\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside] > .rm-block-main {\n  position: relative !important;\n}\n\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside] > .rm-block-main > .controls {\n  position: relative !important;\n  display: flex !important;\n  flex-direction: column !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  flex: 0 0 22px !important;\n  width: 22px !important;\n  min-width: 22px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside] > .rm-block-main > .controls .block-expand,\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside] > .rm-block-main > :is(.rm-block-separator, .roam-ref-radar, div[style*=\"min-width\"]) {\n  display: none !important;\n}\n\n/* 圆点栏里除圆点外的东西（扩展按钮）：取消它自带的定位，排到圆点下面 */\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside] > .rm-block-main > .controls > :not(.rm-bullet):not(.block-expand) {\n  position: static !important;\n  inset: auto !important;\n  margin: 2px 0 0 !important;\n  transform: none !important;\n}\n\n/* 插入块扩展的「+」（#native-insert-block-btn-container）：\n   它挂在块容器上、用行内 top 定位，悬停时由扩展自己显示 / 隐藏。\n   在边注里把它放到外侧圆点的正下方 */\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside] > #native-insert-block-btn-container {\n  top: 24px !important;\n  bottom: auto !important;\n  width: 22px !important;\n  transform: none !important;\n}\n\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside][data-mag-aside=\"left\"] > #native-insert-block-btn-container {\n  left: 0 !important;\n  right: auto !important;\n}\n\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside][data-mag-aside=\"right\"] > #native-insert-block-btn-container {\n  left: auto !important;\n  right: 0 !important;\n}\n\n/* 圆点平时隐藏，悬停才显示（「+」由扩展自己在悬停时显示） */\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside] > .rm-block-main > .controls {\n  opacity: 0 !important;\n  transition: opacity 0.15s ease !important;\n}\n\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside]:hover > .rm-block-main > .controls {\n  opacity: 0.9 !important;\n}\n\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside] > .rm-block-main > :is(.rm-block__input, .rm-autocomplete__wrapper > textarea.rm-block-input) {\n  flex: 1 1 auto !important;\n  min-width: 0 !important;\n  padding-top: 2px !important;\n  background: linear-gradient(var(--mag-yellow), var(--mag-yellow)) left top / 22px 1.5px no-repeat !important;\n}\n\n/* 左侧边注：文字右对齐，金线在右端 */\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside][data-mag-aside=\"left\"] > .rm-block-main > :is(.rm-block__input, .rm-autocomplete__wrapper > textarea.rm-block-input) {\n  text-align: right !important;\n  background-position: right top !important;\n}\n\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside] :is(.rm-autocomplete__wrapper, textarea.rm-block-input) {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n\nhtml body .roam-app .roam-body-main .roam-article[data-mag-margin] .rm-block[data-mag-aside] :is(img, video, iframe, .react-resizable, .rm-inline-img, .rm-inline-img__resize) {\n  max-width: 100% !important;\n}",
  "pdf": "/* ==========================================================\n   23. PDF 阅读窗口：分区浮动工具栏\n   按钮由脚本标记 data-mag-pdf，CSS 按属性定位，不使用 :has()\n   ========================================================== */\n\nhtml body .rm-pdf-container {\n  --pdf-top-space: 50px;\n  --pdf-bottom-space: 50px;\n  position: relative !important;\n  isolation: isolate;\n  min-width: 0 !important;\n  box-sizing: border-box !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 10px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-pdf-container:not(.rm-pdf-container--fullscreen) {\n  min-height: 420px !important;\n}\n\nhtml body .rm-pdf-container.rm-pdf-container--fullscreen {\n  border: 0 !important;\n  border-radius: inherit !important;\n}\n\nhtml body .rm-pdf-container > .rm-pdf-viewer-container {\n  position: absolute !important;\n  inset: var(--pdf-top-space) 0 var(--pdf-bottom-space) 0 !important;\n  flex: none !important;\n  width: auto !important;\n  height: auto !important;\n  min-width: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  box-sizing: border-box !important;\n  background: var(--mag-paper) !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n}\n\nhtml body .rm-pdf-container .rm-pdf-viewer-container > .PdfHighlighter {\n  position: absolute !important;\n  inset: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  min-height: 0 !important;\n  box-sizing: border-box !important;\n  overflow: auto !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n\nhtml body .rm-pdf-container :is(.pdfViewer, .PdfHighlighter) {\n  background: var(--mag-shell) !important;\n}\n\nhtml body .rm-pdf-container .pdfViewer > .page[data-page-number] {\n  background-color: #fff !important;\n  border-color: transparent !important;\n  border-radius: 2px !important;\n  box-shadow: 0 2px 9px rgba(62, 48, 22, 0.08) !important;\n}\n\nhtml body .rm-pdf-container > .rm-pdf-toolbar {\n  position: absolute !important;\n  inset: 0 !important;\n  z-index: 5 !important;\n  display: block !important;\n  width: auto !important;\n  height: auto !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: inherit !important;\n  box-shadow: none !important;\n  pointer-events: none !important;\n}\n\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-button-group {\n  display: contents !important;\n}\n\nhtml body .rm-pdf-container :is(.rm-pdf-toolbar > .rm-spacer, .rm-pdf-toolbar > .bp3-button-group > .bp3-divider) {\n  display: none !important;\n}\n\nhtml body .rm-pdf-container > .rm-pdf-toolbar::before {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  width: 184px;\n  height: 34px;\n  background: var(--mag-paper);\n  border: 1px solid var(--mag-border);\n  border-radius: 7px;\n  box-shadow: 0 3px 10px rgba(62, 48, 22, 0.07), 0 1px 2px rgba(62, 48, 22, 0.04);\n  pointer-events: none;\n}\n\nhtml body .rm-pdf-container .rm-pdf-toolbar .bp3-button {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  width: 28px !important;\n  height: 28px !important;\n  min-width: 28px !important;\n  min-height: 28px !important;\n  margin: 0 !important;\n  padding: 5px !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  background-image: none !important;\n  border: 0 !important;\n  border-radius: 4px !important;\n  box-shadow: none !important;\n  outline: none !important;\n  pointer-events: auto !important;\n  transition: background-color 0.15s ease, color 0.15s ease;\n}\n\nhtml body .rm-pdf-container .rm-pdf-toolbar .bp3-button:is(:hover, :focus-visible) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-shell) !important;\n}\n\nhtml body .rm-pdf-container .rm-pdf-toolbar .bp3-button:is(.bp3-active, [aria-pressed=\"true\"]) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n}\n\nhtml body .rm-pdf-container .rm-pdf-toolbar .bp3-button:disabled {\n  opacity: 0.35 !important;\n}\n\nhtml body .rm-pdf-container .rm-pdf-toolbar .bp3-button:not(.rm-pdf-color-button) .bp3-icon,\nhtml body .rm-pdf-container .rm-pdf-toolbar .bp3-button:not(.rm-pdf-color-button) .bp3-icon svg {\n  width: 15px !important;\n  height: 15px !important;\n  color: inherit !important;\n  fill: currentColor !important;\n}\n\n/* 右上：高亮、区域批注、颜色、显示批注、搜索、更多 */\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-button-group > .bp3-popover-wrapper {\n  position: absolute !important;\n  top: 11px !important;\n  pointer-events: auto !important;\n}\n\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-button-group > .bp3-popover-wrapper[data-mag-pdf=\"highlight\"] { right: 163px !important; }\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-button-group > .bp3-popover-wrapper[data-mag-pdf=\"area\"] { right: 133px !important; }\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-button-group > .bp3-popover-wrapper[data-mag-pdf=\"color\"] { right: 103px !important; }\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-button-group > .bp3-popover-wrapper[data-mag-pdf=\"annotations\"] { right: 73px !important; }\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-button-group > .bp3-popover-wrapper[data-mag-pdf=\"search\"] { right: 43px !important; }\n\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-popover-wrapper[data-mag-pdf=\"more\"] {\n  position: absolute !important;\n  top: 11px !important;\n  right: 13px !important;\n  pointer-events: auto !important;\n}\n\n/* 左上：全屏 */\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-button-group > .bp3-popover-wrapper[data-mag-pdf=\"fullscreen\"] {\n  top: 11px !important;\n  left: 12px !important;\n  right: auto !important;\n}\n\n/* 底部中央：翻页与页码 */\nhtml body .rm-pdf-container .rm-pdf-toolbar__navigation {\n  position: absolute !important;\n  top: auto !important;\n  bottom: 9px !important;\n  left: 50% !important;\n  transform: translateX(-50%) !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 4px !important;\n  padding: 3px 5px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 11px !important;\n  font-weight: 500 !important;\n  font-variant-numeric: tabular-nums !important;\n  color: var(--mag-muted) !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 7px !important;\n  box-shadow: 0 2px 7px rgba(62, 48, 22, 0.05) !important;\n  pointer-events: auto !important;\n}\n\nhtml body .rm-pdf-container .rm-pdf-toolbar__navigation .bp3-input {\n  width: 34px !important;\n  height: 26px !important;\n  padding: 2px 4px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 11px !important;\n  font-variant-numeric: tabular-nums !important;\n  text-align: center !important;\n  color: var(--mag-ink) !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-radius: 3px !important;\n  box-shadow: none !important;\n}\n\nhtml body .rm-pdf-container .rm-pdf-toolbar__navigation .bp3-input:focus {\n  outline: 1px solid var(--mag-gold) !important;\n  background: var(--mag-shell) !important;\n}\n\n/* 右下：缩小、放大、适应窗口、纵向阅读 */\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-button-group > .bp3-popover-wrapper:is([data-mag-pdf=\"zoom-out\"], [data-mag-pdf=\"zoom-in\"], [data-mag-pdf=\"zoom-fit\"], :nth-child(9)) {\n  top: auto !important;\n  bottom: 12px !important;\n}\n\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-button-group > .bp3-popover-wrapper[data-mag-pdf=\"zoom-out\"] { right: 102px !important; }\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-button-group > .bp3-popover-wrapper[data-mag-pdf=\"zoom-in\"] { right: 72px !important; }\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-button-group > .bp3-popover-wrapper[data-mag-pdf=\"zoom-fit\"] { right: 42px !important; }\nhtml body .rm-pdf-container .rm-pdf-toolbar > .bp3-button-group > .bp3-popover-wrapper:nth-child(9) { right: 12px !important; }\n\nhtml body .rm-pdf-container .PdfHighlighter {\n  scrollbar-width: thin;\n  scrollbar-color: color-mix(in srgb, var(--mag-muted) 35%, transparent) var(--mag-shell);\n}\n\nhtml body .rm-pdf-container .PdfHighlighter::-webkit-scrollbar {\n  width: 7px !important;\n  height: 7px !important;\n}\n\nhtml body .rm-pdf-container .PdfHighlighter::-webkit-scrollbar-track {\n  background: var(--mag-shell) !important;\n}\n\nhtml body .rm-pdf-container .PdfHighlighter::-webkit-scrollbar-thumb {\n  background: color-mix(in srgb, var(--mag-muted) 35%, transparent) !important;\n  border: 2px solid var(--mag-shell) !important;\n  border-radius: 8px !important;\n}\n\nhtml body .rm-pdf-container.rm-pdf-container--fullscreen .rm-pdf-toolbar,\nhtml body .rm-pdf-container.rm-pdf-container--fullscreen [data-mag-pdf=\"fullscreen\"] {\n  z-index: 10002 !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n  pointer-events: none !important;\n}\n\nhtml body .rm-pdf-container.rm-pdf-container--fullscreen > .rm-pdf-toolbar { pointer-events:none!important; }\nhtml body > .folio-pdf-exit { position:fixed!important;top:10px!important;left:12px!important;z-index:10003!important;display:inline-flex!important;align-items:center!important;height:28px!important;padding:0 9px!important;border:1px solid var(--mag-border)!important;border-radius:5px!important;background:var(--mag-paper)!important;color:var(--mag-ink)!important;font:12px/1 var(--mag-body)!important;text-decoration:none!important;pointer-events:auto!important;cursor:pointer!important; }\nhtml body > .folio-pdf-exit:hover {background:var(--mag-yellow-soft)!important;}\nhtml body .rm-pdf-container .rm-pdf-toolbar__navigation {gap:3px!important;padding:2px 6px!important;min-height:30px!important;font-size:12px!important;white-space:nowrap!important;}\nhtml body .rm-pdf-container .rm-pdf-toolbar__navigation .bp3-numeric-input {width:32px!important;min-width:32px!important;}\nhtml body .rm-pdf-container .rm-pdf-toolbar__navigation .bp3-input {width:32px!important;min-width:0!important;height:24px!important;font-size:12px!important;}\n",
  "right-sidebar": "/* ==========================================================\n   18.4 右侧栏 Zenith · 接缝淡入（遮罩）\n   卡片带左缘的淡入效果。遮罩会让整条卡片带在每次重绘时重新合成，是最值得单独测试的一项\n   ========================================================== */\n\n#right-sidebar .sidebar-content {\n  -webkit-mask-image: linear-gradient(to right, transparent 0, rgba(0, 0, 0, 0.15) 2px, rgba(0, 0, 0, 0.5) 5px, rgba(0, 0, 0, 0.85) 8px, #000 var(--rs-entry-fade), #000 100%) !important;\n  mask-image: linear-gradient(to right, transparent 0, rgba(0, 0, 0, 0.15) 2px, rgba(0, 0, 0, 0.5) 5px, rgba(0, 0, 0, 0.85) 8px, #000 var(--rs-entry-fade), #000 100%) !important;\n  -webkit-mask-size: 100% 100% !important;\n  mask-size: 100% 100% !important;\n  -webkit-mask-repeat: no-repeat !important;\n  mask-repeat: no-repeat !important;\n}\n/* ==========================================================\n   18.1 右侧栏 Zenith · 横向卡片布局（必要）\n   卡片横向排开、各自内部滚动；并排几张卡由侧栏宽度决定。\n   与「标记与宽度」脚本一起开；开启前先停用第一轮的「18 右侧栏 · 轻量版」。\n   没有容器查询与尺寸隔离（宽度由脚本测量），没有 :has()\n   ========================================================== */\n\n#right-sidebar {\n  --rs-card-width: clamp(500px, 42vw, 720px);\n  --rs-page-spacer: 0px;\n  --rs-folded-width: 58px;\n  --rs-gap: 15px;\n  --rs-track-left: 18px;\n  --rs-viewport-height: 100vh;\n  --rs-viewport-height: 100dvh;\n  --rs-header-height: var(--mag-toolbar-height);\n  --rs-window-max-height: calc(var(--rs-viewport-height) - var(--mag-frame-bottom));\n  --rs-wrapper-max-height: calc(var(--rs-window-max-height) - var(--rs-header-height));\n  --rs-card-padding-top: 32px;\n  --rs-card-padding-bottom: 12px;\n  --rs-content-left-safety: 40px;\n  --rs-outline-max-height: calc(var(--rs-wrapper-max-height) - var(--rs-card-padding-top) - var(--rs-card-padding-bottom) - 2px);\n  --rs-control-size: 30px;\n  --rs-glyph-size: 16px;\n  --rs-toolbar-top: calc((var(--rs-header-height) - var(--rs-control-size)) / 2 + 1px);\n  --rs-caret-left: 8px;\n  --rs-filter-left: 44px;\n  --rs-ref-left: 80px;\n  --rs-pin-left: 116px;\n  --rs-sidebar-bg: var(--mag-shell);\n  --rs-entry-fade: 10px;\n  --rs-card-bg: var(--mag-paper);\n  --rs-folded-bg: var(--mag-surface);\n  --rs-text: var(--mag-ink);\n  --rs-muted: var(--mag-muted);\n  --rs-accent: var(--mag-ink);\n  --rs-pinned: var(--mag-blue);\n  --rs-border: var(--mag-border);\n  --rs-radius: var(--mag-radius);\n  --rs-card-shadow: 0 7px 18px var(--mag-shadow), 0 1px 3px var(--mag-shadow);\n  --rs-folded-shadow: 0 7px 17px var(--mag-shadow), 0 1px 3px var(--mag-shadow);\n\n  position: relative !important;\n  z-index: 1 !important;\n  margin-top: 0 !important;\n  padding-top: 0 !important;\n  min-width: 0 !important;\n  background: var(--rs-sidebar-bg) !important;\n  border: none !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n}\n\n#right-sidebar::before { content: none !important; display: none !important; }\n\n#right-sidebar::after { display: none !important; }\n\n#right-sidebar > .flex-h-box { display: none !important; }\n\n#right-sidebar > .rm-resize-handle {\n  background: transparent !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n\n#right-sidebar #roam-right-sidebar-content:not(.sidebar-content) {\n  width: 100% !important;\n  min-width: 0 !important;\n  max-width: 100% !important;\n  margin-top: 0 !important;\n  padding-top: 0 !important;\n  background: transparent !important;\n  border-left: none !important;\n  overflow: hidden !important;\n}\n\n#right-sidebar .sidebar-content {\n  --rs-card-width: min(720px, calc(var(--rs-cqw, 6px) * 100 - var(--rs-track-left) - var(--rs-gap)));\n  --rs-page-spacer: 0px;\n  display: flex !important;\n  flex: 1 1 auto !important;\n  flex-direction: row !important;\n  flex-wrap: nowrap !important;\n  align-items: flex-start !important;\n  justify-content: flex-start !important;\n  gap: var(--rs-gap) !important;\n  width: 100% !important;\n  min-width: 0 !important;\n  max-width: 100% !important;\n  height: var(--rs-viewport-height) !important;\n  max-height: var(--rs-viewport-height) !important;\n  margin: 0 !important;\n  padding: 0 30px var(--mag-frame-bottom) var(--rs-track-left) !important;\n  box-sizing: border-box !important;\n  background: var(--rs-sidebar-bg) !important;\n  border-left: none !important;\n  overflow-x: auto !important;\n  overflow-y: hidden !important;\n  overscroll-behavior-x: contain;\n  touch-action: pan-x pan-y;\n  -webkit-overflow-scrolling: touch;\n  scroll-behavior: smooth;\n  scrollbar-gutter: stable;\n}\n\n#right-sidebar .sidebar-content::after {\n  content: \"\";\n  display: block;\n  flex: 0 0 34px !important;\n  width: 34px !important;\n  min-width: 34px !important;\n  height: 1px !important;\n}\n\n#right-sidebar .sidebar-content > div:not(.rm-dnd-separator) {\n  flex: 0 0 auto !important;\n  width: auto !important;\n  min-width: 0 !important;\n  max-width: none !important;\n  height: auto !important;\n  max-height: var(--rs-window-max-height) !important;\n  position: relative !important;\n  align-self: flex-start !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  box-shadow: none !important;\n}\n\n#right-sidebar .rm-sidebar-window:not([data-mag-folded]) {\n  margin-right: var(--rs-page-spacer) !important;\n}\n\n#right-sidebar .rm-sidebar-window {\n  display: flex !important;\n  flex-direction: column !important;\n  position: relative !important;\n  width: var(--rs-card-width) !important;\n  min-width: var(--rs-card-width) !important;\n  max-width: var(--rs-card-width) !important;\n  height: auto !important;\n  max-height: var(--rs-window-max-height) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  box-sizing: border-box !important;\n  color: var(--rs-text) !important;\n  background: transparent !important;\n  border: none !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  overflow: visible !important;\n}\n\n#right-sidebar .window-headers :is(.rm-page-ref, .rm-page-ref--link, .rm-page-ref--namespace, .rm-page-ref-tag) {\n  font-family: var(--mag-heading) !important;\n  font-weight: 600 !important;\n}\n\n#right-sidebar .rm-sidebar-window .window-headers {\n  display: flex !important;\n  flex: 0 0 auto !important;\n  flex-direction: row !important;\n  align-items: center !important;\n  position: relative !important;\n  isolation: isolate;\n  width: 100% !important;\n  min-width: 0 !important;\n  height: var(--rs-header-height) !important;\n  min-height: var(--rs-header-height) !important;\n  margin: 0 !important;\n  padding: 0 46px 0 0 !important;\n  box-sizing: border-box !important;\n  color: var(--rs-text) !important;\n  background: transparent !important;\n  border: none !important;\n  border-radius: 0 !important;\n  writing-mode: horizontal-tb !important;\n  text-orientation: mixed !important;\n  white-space: nowrap !important;\n  overflow: visible !important;\n}\n\n#right-sidebar .rm-sidebar-window:not([data-mag-folded]) > .rm-sidebar-outline-wrapper {\n  display: block !important;\n  flex: 0 1 auto !important;\n  position: relative !important;\n  width: 100% !important;\n  min-width: 0 !important;\n  min-height: 0 !important;\n  max-height: var(--rs-wrapper-max-height) !important;\n  margin: 0 !important;\n  padding: var(--rs-card-padding-top) 40px var(--rs-card-padding-bottom) !important;\n  box-sizing: border-box !important;\n  color: var(--rs-text) !important;\n  background: var(--rs-card-bg) !important;\n  border: 1px solid var(--rs-border) !important;\n  border-radius: var(--rs-radius) !important;\n  box-shadow: var(--rs-card-shadow) !important;\n  overflow: visible !important;\n  scrollbar-width: none !important;\n  -ms-overflow-style: none !important;\n}\n\n#right-sidebar .rm-sidebar-window:not([data-mag-folded]) > .rm-sidebar-outline-wrapper > .rm-sidebar-outline {\n  position: relative !important;\n  width: calc(100% + var(--rs-content-left-safety)) !important;\n  min-height: 0 !important;\n  max-height: var(--rs-outline-max-height) !important;\n  margin-left: calc(-1 * var(--rs-content-left-safety)) !important;\n  margin-bottom: 0 !important;\n  padding-left: var(--rs-content-left-safety) !important;\n  padding-bottom: 4px !important;\n  box-sizing: border-box !important;\n  overscroll-behavior-y: contain;\n  overflow-x: hidden !important;\n  overflow-y: auto !important;\n  scrollbar-width: none !important;\n  -ms-overflow-style: none !important;\n}\n\n#right-sidebar :is(.rm-sidebar-outline-wrapper, .rm-sidebar-outline)::-webkit-scrollbar {\n  display: none !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n#right-sidebar .rm-sidebar-outline-wrapper :is(img, video, iframe, table, .react-resizable, .rm-inline-img) {\n  max-width: 100% !important;\n}\n\n#right-sidebar .sidebar-content::-webkit-scrollbar {\n  display: block !important;\n  height: 6px !important;\n}\n\n#right-sidebar .sidebar-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n#right-sidebar .sidebar-content::-webkit-scrollbar-thumb {\n  background: color-mix(in srgb, var(--mag-muted) 30%, transparent);\n  border: 2px solid transparent;\n  border-radius: 999px;\n  background-clip: padding-box;\n}\n\n#right-sidebar .sidebar-content::-webkit-scrollbar-thumb:hover {\n  background: color-mix(in srgb, var(--mag-muted) 48%, transparent);\n  border: 2px solid transparent;\n  background-clip: padding-box;\n}\n\n/* 侧栏够宽时并排多张卡（原来的容器查询，改由脚本写入 data-mag-cols） */\n#right-sidebar[data-mag-cols=\"2\"] .sidebar-content { --rs-card-width: calc(var(--rs-cqw, 6px) * 50 - 24px); --rs-page-spacer: 0px; }\n#right-sidebar[data-mag-cols=\"3\"] .sidebar-content { --rs-card-width: calc(var(--rs-cqw, 6px) * 33.333333 - 21px); --rs-page-spacer: 0px; }\n#right-sidebar[data-mag-cols=\"4\"] .sidebar-content { --rs-card-width: calc(var(--rs-cqw, 6px) * 25 - 19.5px); --rs-page-spacer: 0px; }\n#right-sidebar[data-mag-cols=\"5\"] .sidebar-content { --rs-card-width: calc(var(--rs-cqw, 6px) * 20 - 18.6px); --rs-page-spacer: 0px; }\n#right-sidebar[data-mag-cols=\"6\"] .sidebar-content { --rs-card-width: calc(var(--rs-cqw, 6px) * 16.666667 - 18px); --rs-page-spacer: 0px; }\n\n@media (max-width: 820px) {\n  #right-sidebar {\n    --rs-gap: 12px;\n    --rs-card-padding-top: 26px;\n    --rs-card-padding-bottom: 12px;\n  }\n\n  #right-sidebar .sidebar-content {\n    height: var(--rs-viewport-height) !important;\n    padding: 0 18px var(--mag-frame-bottom) var(--rs-track-left) !important;\n  }\n\n  #right-sidebar .rm-sidebar-window:not([data-mag-folded]) > .rm-sidebar-outline-wrapper {\n    max-height: var(--rs-wrapper-max-height) !important;\n    padding: var(--rs-card-padding-top) 28px var(--rs-card-padding-bottom) !important;\n  }\n}\n/* ==========================================================\n   18.2 右侧栏 Zenith · 卡片工具栏\n   折叠箭头改成 − / +，筛选、引用、置顶、关闭按钮排在卡片上方同一行，与顶栏按钮同一规格\n   ========================================================== */\n\n#right-sidebar .rm-sidebar-window:not([data-mag-folded]) .window-headers > :nth-child(2) {\n  display: none !important;\n}\n\n#right-sidebar .window-headers > span.bp3-icon.bp3-minimal {\n  display: contents !important;\n  width: 0 !important;\n  min-width: 0 !important;\n  max-width: 0 !important;\n  height: 0 !important;\n  min-height: 0 !important;\n  max-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n#right-sidebar .window-headers > span.bp3-icon.bp3-minimal > :is(.rm-caret-open, .rm-caret-closed) {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  position: absolute !important;\n  top: var(--rs-toolbar-top) !important;\n  left: var(--rs-caret-left) !important;\n  right: auto !important;\n  bottom: auto !important;\n  width: var(--rs-control-size) !important;\n  min-width: var(--rs-control-size) !important;\n  max-width: var(--rs-control-size) !important;\n  height: var(--rs-control-size) !important;\n  min-height: var(--rs-control-size) !important;\n  max-height: var(--rs-control-size) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  color: transparent !important;\n  background: transparent !important;\n  border: none !important;\n  border-radius: 6px !important;\n  box-shadow: none !important;\n  cursor: pointer !important;\n  pointer-events: auto !important;\n  writing-mode: horizontal-tb !important;\n  transform: none !important;\n  z-index: 300 !important;\n}\n\n#right-sidebar .window-headers > span.bp3-icon.bp3-minimal > :is(.rm-caret-open, .rm-caret-closed) svg {\n  display: none !important;\n}\n\n#right-sidebar .window-headers > span.bp3-icon.bp3-minimal > :is(.rm-caret-open, .rm-caret-closed)::before {\n  content: \"\" !important;\n  display: block !important;\n  flex: 0 0 auto !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  border: 0 !important;\n  color: var(--rs-muted) !important;\n  transform: none !important;\n}\n\n#right-sidebar .window-headers > span.bp3-icon.bp3-minimal > .rm-caret-open::before {\n  width: 12px !important;\n  height: 2px !important;\n  border-radius: 1px !important;\n  background: currentColor !important;\n}\n\n#right-sidebar .window-headers > span.bp3-icon.bp3-minimal > .rm-caret-closed::before {\n  width: 12px !important;\n  height: 12px !important;\n  background:\n    linear-gradient(currentColor, currentColor) center / 12px 2px no-repeat,\n    linear-gradient(currentColor, currentColor) center / 2px 12px no-repeat !important;\n}\n\nhtml body .roam-app #right-sidebar .window-headers > span.bp3-icon.bp3-minimal > :is(.rm-caret-open, .rm-caret-closed):hover {\n  background: var(--mag-yellow-soft) !important;\n}\n\n#right-sidebar .window-headers > span.bp3-icon.bp3-minimal > :is(.rm-caret-open, .rm-caret-closed):hover::before {\n  color: var(--rs-accent) !important;\n}\n\n#right-sidebar .rm-sidebar-window:not([data-mag-folded]) > .rm-sidebar-outline-wrapper > .rm-sidebar-window__controls {\n  display: block !important;\n  position: absolute !important;\n  top: calc(var(--rs-toolbar-top) - var(--rs-header-height) - 1px) !important;\n  left: var(--rs-filter-left) !important;\n  right: auto !important;\n  bottom: auto !important;\n  width: calc(var(--rs-pin-left) - var(--rs-filter-left) + var(--rs-control-size)) !important;\n  height: var(--rs-control-size) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  background: transparent !important;\n  border: none !important;\n  box-shadow: none !important;\n  overflow: visible !important;\n  pointer-events: none !important;\n  transform: none !important;\n  z-index: 300 !important;\n}\n\n#right-sidebar .rm-sidebar-window > .rm-sidebar-outline-wrapper > .rm-sidebar-window__controls > .bp3-popover-wrapper * {\n  position: static !important;\n  inset: auto !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  transform: none !important;\n}\n\n#right-sidebar .rm-sidebar-window > .rm-sidebar-outline-wrapper > .rm-sidebar-window__controls > .bp3-popover-wrapper:nth-child(2) {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  position: absolute !important;\n  top: 0 !important;\n  left: 0 !important;\n  right: auto !important;\n  bottom: auto !important;\n  width: var(--rs-control-size) !important;\n  height: var(--rs-control-size) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  pointer-events: auto !important;\n  transform: none !important;\n  z-index: 301 !important;\n}\n\n#right-sidebar .rm-sidebar-window > .rm-sidebar-outline-wrapper > .rm-sidebar-window__controls > .bp3-popover-wrapper:nth-child(2) :is(.bp3-popover-wrapper, .bp3-popover-target, .bp3-button),\n#right-sidebar .rm-sidebar-window > .rm-sidebar-outline-wrapper > .rm-sidebar-window__controls > .bp3-popover-wrapper:first-child :is(.bp3-popover-target, .bp3-button) {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  position: static !important;\n  width: var(--rs-control-size) !important;\n  height: var(--rs-control-size) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  background: transparent !important;\n  border: none !important;\n  border-radius: 6px !important;\n  box-shadow: none !important;\n  pointer-events: auto !important;\n  transform: none !important;\n}\n\n#right-sidebar .rm-sidebar-window:not([data-mag-folded]) .window-headers > .bp3-popover-wrapper {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  position: absolute !important;\n  top: var(--rs-toolbar-top) !important;\n  left: var(--rs-ref-left) !important;\n  right: auto !important;\n  bottom: auto !important;\n  width: var(--rs-control-size) !important;\n  height: var(--rs-control-size) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  background: transparent !important;\n  border: none !important;\n  box-shadow: none !important;\n  transform: none !important;\n  z-index: 302 !important;\n}\n\n#right-sidebar .rm-sidebar-window:not([data-mag-folded]) .window-headers > .bp3-popover-wrapper :is(.bp3-popover-target, button) {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  position: static !important;\n  width: var(--rs-control-size) !important;\n  height: var(--rs-control-size) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  line-height: 16px !important;\n  color: var(--rs-muted) !important;\n  background: transparent !important;\n  border: none !important;\n  border-radius: 6px !important;\n  box-shadow: none !important;\n  transform: none !important;\n}\n\n#right-sidebar .rm-sidebar-window > .rm-sidebar-outline-wrapper > .rm-sidebar-window__controls > .bp3-popover-wrapper:first-child {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  position: absolute !important;\n  top: 0 !important;\n  left: calc(var(--rs-pin-left) - var(--rs-filter-left)) !important;\n  right: auto !important;\n  bottom: auto !important;\n  width: var(--rs-control-size) !important;\n  height: var(--rs-control-size) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  pointer-events: auto !important;\n  transform: none !important;\n  z-index: 303 !important;\n}\n\n#right-sidebar .rm-sidebar-window:not([data-mag-folded]):not([data-mag-hasref]) > .rm-sidebar-outline-wrapper > .rm-sidebar-window__controls {\n  width: calc(var(--rs-ref-left) - var(--rs-filter-left) + var(--rs-control-size)) !important;\n}\n\n#right-sidebar .rm-sidebar-window:not([data-mag-folded]):not([data-mag-hasref]) > .rm-sidebar-outline-wrapper > .rm-sidebar-window__controls > .bp3-popover-wrapper:first-child {\n  left: calc(var(--rs-ref-left) - var(--rs-filter-left)) !important;\n}\n\n#right-sidebar .rm-sidebar-window :is(.bp3-icon-filter, .bp3-icon-pin, .bp3-icon-cross) {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  width: var(--rs-control-size) !important;\n  min-width: var(--rs-control-size) !important;\n  max-width: var(--rs-control-size) !important;\n  height: var(--rs-control-size) !important;\n  min-height: var(--rs-control-size) !important;\n  max-height: var(--rs-control-size) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  font-size: var(--rs-glyph-size) !important;\n  line-height: var(--rs-control-size) !important;\n  vertical-align: middle !important;\n  color: var(--rs-muted) !important;\n  background-color: transparent !important;\n  background-size: var(--rs-glyph-size) var(--rs-glyph-size) !important;\n  border: none !important;\n  border-radius: 6px !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n\n#right-sidebar .rm-sidebar-window :is(.bp3-icon-filter, .bp3-icon-pin, .bp3-icon-cross)::before {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  width: var(--rs-glyph-size) !important;\n  min-width: var(--rs-glyph-size) !important;\n  max-width: var(--rs-glyph-size) !important;\n  height: var(--rs-glyph-size) !important;\n  min-height: var(--rs-glyph-size) !important;\n  max-height: var(--rs-glyph-size) !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  font-size: var(--rs-glyph-size) !important;\n  line-height: var(--rs-glyph-size) !important;\n  text-align: center !important;\n  transform: none !important;\n  transform-origin: center !important;\n}\n\n#right-sidebar .rm-sidebar-window .bp3-icon-cross::before {\n  transform: scale(0.72) !important;\n}\n\n#right-sidebar .rm-sidebar-window :is(.bp3-icon-pin.pinned, .bp3-icon-pin.pinned-to-top) {\n  color: var(--rs-pinned) !important;\n}\n\nhtml body .roam-app #right-sidebar .rm-sidebar-window.rm-sidebar-window :is(\n  .bp3-icon-filter, .bp3-icon-pin, .bp3-icon-cross, .window-headers > .bp3-popover-wrapper button\n):is(:hover, :focus-visible) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n}\n\n#right-sidebar .rm-sidebar-window:not([data-mag-folded]) .window-headers > .bp3-button.bp3-icon-cross {\n  position: absolute !important;\n  top: var(--rs-toolbar-top) !important;\n  right: 8px !important;\n  bottom: auto !important;\n  left: auto !important;\n  transform: none !important;\n  z-index: 304 !important;\n}\n\nhtml body .roam-app #right-sidebar :is(.window-headers > .bp3-popover-wrapper, .window-headers > .bp3-button, .rm-sidebar-window__controls) svg {\n  display: block !important;\n  width: 16px !important;\n  height: 16px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n/* ==========================================================\n   18.3 右侧栏 Zenith · 折叠竖条\n   折叠后的卡片变成窄竖条，标题竖排\n   ========================================================== */\n\n#right-sidebar .rm-sidebar-window[data-mag-folded] > .rm-sidebar-outline-wrapper {\n  display: none !important;\n}\n\n#right-sidebar .sidebar-content > div:not(.rm-dnd-separator) .rm-sidebar-window[data-mag-folded] {\n  display: block !important;\n  width: var(--rs-folded-width) !important;\n  min-width: var(--rs-folded-width) !important;\n  max-width: var(--rs-folded-width) !important;\n  height: auto !important;\n  min-height: 317px !important;\n  max-height: var(--rs-window-max-height) !important;\n  background: transparent !important;\n  border: none !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  overflow: visible !important;\n}\n\n#right-sidebar .rm-sidebar-window[data-mag-folded] .window-headers {\n  display: flex !important;\n  flex-direction: row !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  gap: 11px !important;\n  position: relative !important;\n  isolation: isolate;\n  width: 100% !important;\n  min-width: 0 !important;\n  height: auto !important;\n  min-height: 317px !important;\n  max-height: var(--rs-window-max-height) !important;\n  margin: 0 !important;\n  padding: calc(var(--rs-header-height) + 13px) 9px 46px !important;\n  box-sizing: border-box !important;\n  color: var(--rs-text) !important;\n  background: transparent !important;\n  border: none !important;\n  border-radius: 0 !important;\n  writing-mode: vertical-rl !important;\n  text-orientation: mixed !important;\n  white-space: nowrap !important;\n  overflow: visible !important;\n}\n\n#right-sidebar .rm-sidebar-window[data-mag-folded] .window-headers::before {\n  content: \"\";\n  position: absolute;\n  inset: var(--rs-header-height) 0 0 0;\n  background: var(--rs-folded-bg);\n  border: 1px solid var(--rs-border);\n  border-radius: var(--rs-radius);\n  box-shadow: var(--rs-folded-shadow);\n  pointer-events: none;\n  z-index: -1;\n}\n\n#right-sidebar .rm-sidebar-window[data-mag-folded] .window-headers > :nth-child(2) {\n  display: block !important;\n}\n\n#right-sidebar .rm-sidebar-window[data-mag-folded] .window-headers > .bp3-popover-wrapper {\n  display: none !important;\n}\n\n#right-sidebar .rm-sidebar-window[data-mag-folded] .window-headers > *,\n#right-sidebar .rm-sidebar-window[data-mag-folded] .window-headers > * > * {\n  max-width: 100% !important;\n  max-height: none !important;\n  writing-mode: inherit !important;\n  text-orientation: inherit !important;\n  white-space: nowrap !important;\n  text-overflow: clip !important;\n}\n\n#right-sidebar .rm-sidebar-window[data-mag-folded] .window-headers :is(div[style*=\"max-height\"], .rm-page-ref, .rm-block-ref) {\n  display: inline-block !important;\n  width: auto !important;\n  min-width: 0 !important;\n  max-width: 100% !important;\n  height: auto !important;\n  max-height: none !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  writing-mode: inherit !important;\n  text-orientation: inherit !important;\n  white-space: nowrap !important;\n  overflow: visible !important;\n  text-overflow: clip !important;\n}\n\n#right-sidebar .rm-sidebar-window[data-mag-folded] .window-headers .rm-page-ref-tag {\n  width: auto !important;\n  min-width: 0 !important;\n  max-width: none !important;\n  height: auto !important;\n  max-height: none !important;\n  overflow: visible !important;\n  text-overflow: clip !important;\n  white-space: nowrap !important;\n}\n\n#right-sidebar .rm-sidebar-window[data-mag-folded] .window-headers > :nth-child(2) {\n  width: auto !important;\n  min-width: 0 !important;\n  max-width: 100% !important;\n  height: auto !important;\n  max-height: calc(var(--rs-window-max-height) - var(--rs-header-height) - 59px) !important;\n  overflow-x: visible !important;\n  overflow-y: auto !important;\n  scrollbar-width: none !important;\n  -ms-overflow-style: none !important;\n}\n\n#right-sidebar .rm-sidebar-window[data-mag-folded] .window-headers > :nth-child(2)::-webkit-scrollbar {\n  display: none !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n#right-sidebar .rm-sidebar-window[data-mag-folded] .window-headers br {\n  display: none !important;\n}\n\n#right-sidebar .rm-sidebar-window[data-mag-folded] .window-headers > span.bp3-icon.bp3-minimal > .rm-caret-closed {\n  top: var(--rs-toolbar-top) !important;\n  left: 50% !important;\n  right: auto !important;\n  transform: translateX(-50%) !important;\n  writing-mode: horizontal-tb !important;\n}\n\n#right-sidebar .rm-sidebar-window[data-mag-folded] .window-headers > .bp3-button.bp3-icon-cross {\n  position: absolute !important;\n  top: auto !important;\n  right: auto !important;\n  bottom: 10px !important;\n  left: 50% !important;\n  transform: translateX(-50%) !important;\n  writing-mode: horizontal-tb !important;\n  z-index: 304 !important;\n}\n/* ==========================================================\n   18.5 右侧栏 Zenith · 拖动排序落点\n   横向排列后，卡片之间的落点改成竖条；拖到上面时显示一条金色竖线\n   ========================================================== */\n\n#right-sidebar .sidebar-content > .rm-dnd-separator {\n  position: relative !important;\n  z-index: 5 !important;\n  flex: 0 0 calc(var(--rs-gap) * 2) !important;\n  align-self: stretch !important;\n  width: calc(var(--rs-gap) * 2) !important;\n  min-width: 0 !important;\n  max-width: none !important;\n  height: auto !important;\n  min-height: 120px !important;\n  margin: 0 calc(var(--rs-gap) * -1) !important;\n  padding: 0 !important;\n  background: transparent !important;\n  border: 0 !important;\n}\n\n#right-sidebar .sidebar-content > .rm-dnd-separator > * {\n  position: absolute !important;\n  top: var(--rs-header-height) !important;\n  bottom: var(--mag-frame-bottom) !important;\n  left: 50% !important;\n  width: 2px !important;\n  height: auto !important;\n  margin: 0 !important;\n  transform: translateX(-50%) !important;\n  border-radius: 1px !important;\n}\n\n#right-sidebar .sidebar-content > .rm-dnd-separator::after {\n  content: \"\" !important;\n  position: absolute !important;\n  top: var(--rs-header-height) !important;\n  bottom: var(--mag-frame-bottom) !important;\n  left: 50% !important;\n  width: 2px !important;\n  transform: translateX(-50%) !important;\n  border-radius: 1px !important;\n  background: transparent !important;\n  transition: background-color 0.12s ease !important;\n  pointer-events: none !important;\n}\n\n#right-sidebar .sidebar-content > .rm-dnd-separator:is([class*=\"active\"], [class*=\"over\"], [class*=\"hover\"], [class*=\"drop\"])::after {\n  background: var(--mag-gold) !important;\n}\n\n/* These repairs belong to the sidebar component and disappear with it. */\nhtml body .roam-app #right-sidebar .rm-sidebar-window { scroll-margin-top: 0 !important; }\nhtml body .roam-app #right-sidebar :is(.rm-sidebar-outline-wrapper, .rm-sidebar-window__content, .rm-article-wrapper) {\n  min-height: 0 !important;\n}\nhtml body .roam-app #right-sidebar { --mag-toolbar-height: 48px; --mag-frame-bottom: 16px; }\nhtml body .roam-app #right-sidebar .rm-sidebar-window:not([data-mag-folded]) > .rm-sidebar-outline-wrapper {\n  max-height: var(--rs-wrapper-max-height) !important;\n  overflow-y: auto !important;\n  overflow-x: hidden !important;\n}\nhtml body .roam-app #right-sidebar .rm-sidebar-window:not([data-mag-folded]) > .rm-sidebar-outline-wrapper > .rm-sidebar-outline {\n  max-height: none !important;\n  overflow: visible !important;\n}\nhtml body .roam-app #right-sidebar .rm-reference-container {\n  max-width: 100% !important;\n  overflow: auto !important;\n  overflow-wrap: anywhere !important;\n}\nhtml body .roam-app #right-sidebar :is(iframe, video, .rm-video-player__spacing-wrapper, .rm-iframe__container) {\n  max-width: 100% !important;\n}\n\n/* One 48px toolbar band. The native global toggle overlays that band; it does\n   not take a separate flex row above the card controls. */\nhtml body .roam-app #right-sidebar {\n --mag-frame-bottom:10px;\n --rs-header-height:var(--mag-toolbar-height,48px);\n --rs-control-size:30px;\n --rs-glyph-size:16px;\n --rs-toolbar-top:calc((var(--rs-header-height) - var(--rs-control-size)) / 2);\n --rs-window-max-height:calc(var(--rs-viewport-height) - var(--mag-frame-bottom));\n --rs-wrapper-max-height:calc(var(--rs-window-max-height) - var(--rs-header-height));\n}\n/* The native toggle is visually fixed in the main topbar. Its original\n   sidebar wrapper occupies no toolbar space and cannot cover card controls. */\nhtml body .roam-app #right-sidebar > .flex-h-box {\n display:contents!important;background:transparent!important;pointer-events:none!important;\n}\nhtml body .roam-app #right-sidebar > .flex-h-box > div {display:none!important;}\nhtml body .roam-app #right-sidebar > .flex-h-box [data-folio-sidebar-role=\"close\"] {\n display:inline-flex!important;align-items:center!important;justify-content:center!important;\n position:fixed!important;left:var(--folio-native-toggle-x,calc(100vw - 38px))!important;\n top:var(--folio-native-toggle-y,9px)!important;right:auto!important;bottom:auto!important;\n width:30px!important;min-width:30px!important;height:30px!important;min-height:30px!important;\n padding:0!important;margin:0!important;z-index:1000!important;pointer-events:auto!important;\n}\nhtml body .roam-app #right-sidebar .sidebar-content {\n height:var(--rs-viewport-height)!important;max-height:var(--rs-viewport-height)!important;\n padding-top:0!important;scrollbar-gutter:auto!important;\n}\nhtml body .roam-app #right-sidebar .rm-sidebar-window:not([data-mag-folded]) {height:var(--rs-window-max-height)!important;}\n/* Controls live inside this native wrapper at negative top; it must not clip.\n   Scrolling belongs to its outline child, leaving PIN/filter clickable. */\nhtml body .roam-app #right-sidebar .rm-sidebar-window:not([data-mag-folded]) > .rm-sidebar-outline-wrapper {\n height:var(--rs-wrapper-max-height)!important;max-height:var(--rs-wrapper-max-height)!important;\n flex:1 1 auto!important;overflow:visible!important;\n}\nhtml body .roam-app #right-sidebar .rm-sidebar-window:not([data-mag-folded]) > .rm-sidebar-outline-wrapper > .rm-sidebar-outline {\n height:var(--rs-outline-max-height)!important;max-height:var(--rs-outline-max-height)!important;\n overflow-x:hidden!important;overflow-y:auto!important;min-height:0!important;\n}\n/* The card close control owns the rightmost slot of its own card. */\nhtml body .roam-app #right-sidebar .rm-sidebar-window:not([data-mag-folded]) .window-headers > .bp3-button.bp3-icon-cross {right:8px!important;}\n\nhtml body .roam-app #right-sidebar .rm-sidebar-window .bp3-icon-cross::before {\n transform:none!important;font-size:16px!important;line-height:16px!important;\n}\n/* Adjacent cards use one compact gap, without page-sized empty snap slots. */\nhtml body .roam-app #right-sidebar .sidebar-content {--rs-page-spacer:0px!important;--rs-gap:12px!important;}\nhtml body .roam-app #right-sidebar .rm-sidebar-window:not([data-mag-folded]) {margin-right:0!important;}\n\n/* With display:contents on the native nav, its empty popover wrapper would\n   become a separate flex item in the sidebar column. Hide the wrapper too. */\nhtml body .roam-app #right-sidebar > .rm-sidebar-nav > .bp3-popover-wrapper:has(.rm-agent-sidebar-chat-launcher[data-folio-ai-proxied=\"true\"]) {display:none!important;}\n/* AI owns one card's toolbar; no extra global row or viewport-height override. */\nhtml body .roam-app #right-sidebar > .rm-sidebar-nav > .rm-agent-chat-header:not([data-folio-ai-card-header]) {display:none!important;}\nhtml body .roam-app #right-sidebar > .rm-sidebar-nav > .rm-agent-chat-header[data-folio-ai-card-header] {\n position:absolute!important;top:var(--folio-ai-header-top)!important;left:var(--folio-ai-header-left)!important;\n width:var(--folio-ai-header-width)!important;max-width:var(--folio-ai-header-width)!important;\n box-sizing:border-box!important;padding:0 6px!important;margin:0!important;z-index:305!important;\n}\nhtml body .roam-app #right-sidebar > .rm-sidebar-nav > .rm-agent-chat-header {\n display:flex!important;align-items:center!important;flex:1 1 0!important;min-width:0!important;\n height:var(--mag-toolbar-height,48px)!important;gap:6px!important;justify-content:flex-start!important;pointer-events:auto!important;color:var(--mag-muted)!important;\n}\nhtml body .roam-app .rm-agent-chat-header .rm-agent-chat-tab-actions {\n display:flex!important;align-items:center!important;flex:0 0 auto!important;pointer-events:auto!important;margin:0!important;padding:0!important;\n}\nhtml body .roam-app .rm-agent-chat-header .rm-agent-chat-tabs {\n display:flex!important;align-items:center!important;flex:0 1 auto!important;min-width:0!important;overflow-x:auto!important;gap:4px!important;\n}\nhtml body .roam-app .rm-agent-chat-header .rm-agent-chat-tab {\n display:flex!important;align-items:center!important;min-width:80px!important;max-width:240px!important;flex:0 1 240px!important;\n border:1px solid transparent!important;border-radius:6px!important;background:transparent!important;\n}\nhtml body .roam-app .rm-agent-chat-header .rm-agent-chat-tab.is-selected {\n color:var(--mag-ink)!important;background:transparent!important;border-color:transparent!important;box-shadow:none!important;\n}\nhtml body .roam-app .rm-agent-chat-header .rm-agent-chat-tab-button {\n flex:1 1 0!important;min-width:0!important;color:inherit!important;background:transparent!important;\n}\nhtml body .roam-app .rm-agent-chat-header .rm-agent-chat-tab-title {\n display:block!important;min-width:0!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;\n}\nhtml body .roam-app .rm-agent-chat-header :is(.rm-agent-chat-history-toggle,.rm-agent-chat-new-tab,.rm-agent-chat-tab-close) {\n position:static!important;flex:0 0 28px!important;width:28px!important;min-width:28px!important;height:28px!important;\n padding:0!important;margin:0!important;color:var(--mag-muted)!important;background:transparent!important;border:0!important;\n display:inline-flex!important;align-items:center!important;justify-content:center!important;pointer-events:auto!important;\n}\nhtml body .roam-app .rm-agent-sidebar-chat-launcher {pointer-events:auto!important;}\nhtml body .roam-app .rm-agent-sidebar-chat-launcher[data-folio-ai-proxied=\"true\"] {display:none!important;}\nhtml body .roam-app .rm-agent-chat-composer-shell {\n color:var(--mag-ink)!important;background:var(--mag-paper)!important;border-color:var(--mag-border)!important;box-shadow:none!important;\n}\nhtml body .roam-app .rm-agent-chat-controls {color:var(--mag-muted)!important;background:var(--mag-paper)!important;border-bottom-left-radius:inherit!important;border-bottom-right-radius:inherit!important;}\nhtml body .roam-app .rm-agent-chat-panel :is(.rm-agent-picker-button,.rm-agent-chat-thinking-toggle,.rm-agent-chat-copy,.rm-agent-chat-reply,.rm-agent-chat-edit) {\n color:var(--mag-muted)!important;\n}\nhtml body .roam-app .rm-agent-chat-panel .rm-agent-chat-send {\n color:var(--mag-paper)!important;background:var(--mag-gold-ink)!important;border-color:var(--mag-gold-ink)!important;\n}\nhtml body .roam-app .rm-agent-chat-panel .rm-agent-chat-send:disabled {opacity:.45!important;}\nhtml body .roam-app .rm-agent-chat-panel :is(.rm-agent-chat-send,.rm-agent-picker-button):focus-visible,\nhtml body .roam-app .rm-agent-chat-header button:focus-visible {\n outline:2px solid var(--mag-gold)!important;outline-offset:2px!important;\n}\nhtml body .rm-agent-picker-menu {\n color:var(--mag-ink)!important;background:var(--mag-paper)!important;\n}\nhtml body .rm-agent-picker-menu .rm-agent-picker-option {color:var(--mag-ink)!important;background:transparent!important;}\nhtml body .rm-agent-picker-menu .rm-agent-picker-option:is(:hover,:focus-visible) {background:var(--mag-active,var(--mag-yellow-soft))!important;}\nhtml body .rm-agent-picker-menu .rm-agent-picker-option[aria-checked=\"true\"] {\n color:var(--mag-ink)!important;background:var(--mag-yellow-soft)!important;box-shadow:inset 2px 0 var(--mag-gold-ink)!important;\n}\nhtml body .rm-agent-picker-menu .rm-agent-picker-option-description {display:block!important;color:var(--mag-muted)!important;white-space:normal!important;}\n\n/* Allow horizontal input to reach the card track after the transcript fills. */\nhtml body .roam-app .rm-agent-chat-panel :is(.rm-agent-chat-transcript-wrap,.rm-agent-chat-transcript),\nhtml body .roam-app .rm-agent-chat-panel {overscroll-behavior-x:auto!important;}\n/* Exact native history selectors observed in Roam, including row action menus. */\nhtml body :is(.rm-agent-chat-history,.rm-agent-chat-history-row-menu) {background:var(--mag-shell)!important;color:var(--mag-ink)!important;border-color:var(--mag-border)!important;}\nhtml body :is(.rm-agent-chat-history-popover,.rm-agent-chat-history-row-menu-popover) > .bp3-popover-content {background:transparent!important;}\nhtml body .rm-agent-chat-history-search {color:var(--mag-ink)!important;background:transparent!important;border-color:var(--mag-border)!important;}\nhtml body .rm-agent-chat-history :is(.rm-agent-chat-history-date,.rm-agent-chat-history-excerpt,.rm-agent-chat-history-group-label,.rm-agent-chat-history-empty) {color:var(--mag-muted)!important;}\nhtml body .rm-agent-chat-history :is(.rm-agent-chat-history-row:hover > .rm-agent-chat-history-item,.rm-agent-chat-history-item:focus-visible) {background:var(--mag-blue-soft)!important;}\n\n/* Keep the native bullet and placeholder aligned with the Read shield.\n   The sidebar pin plugin's extra text gutter is not part of the AI composer. */\nhtml body .roam-app .rm-agent-native-composer > .roam-block-container > .roamjs-outline-pin-host {padding-left:0!important;}\n",
  "editorial-desk": "/* ==========================================================\n   34. Desk · 编辑部案头\n   刊头 · 稿纸卡片 · 刊尾信息行 · 截稿日印章 · 案头老化 · 头条位 · 筛选与排序\n   卡片上的数据由「Desk」脚本写入 data-mag-*；没开脚本时只有外观样式\n   ========================================================== */\n\n/* ---------- 刊头 ---------- */\nhtml body .roam-app .rm-desk-page__toolbar {\n  display: flex !important;\n  flex-wrap: wrap !important;\n  align-items: flex-end !important;\n  justify-content: space-between !important;\n  gap: 12px 20px !important;\n  margin: 0 0 20px !important;\n  padding: 8px 0 14px !important;\n  background: transparent !important;\n  border: 0 !important;\n  border-top: 2px solid var(--mag-ink) !important;\n  border-bottom: 1px solid var(--mag-border) !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-desk-page__title {\n  margin: 0 !important;\n  padding: 0 !important;\n  font-family: var(--mag-heading) !important;\n  font-size: 34px !important;\n  font-weight: 800 !important;\n  line-height: 1.15 !important;\n  letter-spacing: -0.03em !important;\n  color: var(--mag-ink) !important;\n}\n\n/* 脚本写入 data-mag-kicker 后：隐藏「notes's Desk (6)」，\n   换成小号大写抬头「NOTES · 6 ITEMS」+ 衬线大标题「The Desk」 */\nhtml body .roam-app .rm-desk-page__title[data-mag-kicker] {\n  font-size: 0 !important;\n  line-height: 0 !important;\n}\n\nhtml body .roam-app .rm-desk-page__title[data-mag-kicker] > * {\n  display: none !important;\n}\n\nhtml body .roam-app .rm-desk-page__title[data-mag-kicker]::before {\n  content: attr(data-mag-kicker);\n  display: block;\n  margin: 0 0 8px;\n  font-family: var(--mag-body);\n  font-size: 10.5px;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  line-height: 1.4;\n  letter-spacing: 2px;\n  color: var(--mag-muted);\n}\n\nhtml body .roam-app .rm-desk-page__title[data-mag-kicker]::after {\n  content: \"The Desk\";\n  display: block;\n  font-family: var(--mag-heading);\n  font-size: 34px;\n  font-weight: 800;\n  line-height: 1.15;\n  letter-spacing: -0.03em;\n  color: var(--mag-ink);\n}\n\nhtml body .roam-app .rm-desk-page__tools {\n  display: flex !important;\n  flex-wrap: wrap !important;\n  align-items: center !important;\n  justify-content: flex-end !important;\n  gap: 8px !important;\n}\n\nhtml body .roam-app .rm-desk-page__tools .bp3-input-group .bp3-input {\n  height: 30px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 12.5px !important;\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-radius: 6px !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-desk-page__tools .bp3-input-group .bp3-input:focus {\n  border-color: var(--mag-gold) !important;\n  outline: none !important;\n}\n\nhtml body .roam-app .rm-desk-page__tools .bp3-input-group .bp3-icon {\n  color: var(--mag-faint) !important;\n}\n\nhtml body .roam-app .rm-desk-page__tools .bp3-button {\n  min-height: 30px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 12px !important;\n  font-weight: 600 !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  background-image: none !important;\n  border: 0 !important;\n  border-radius: 6px !important;\n  box-shadow: none !important;\n}\n\nhtml body .roam-app .rm-desk-page__tools .bp3-button:is(:hover, :focus-visible) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n}\n\nhtml body .roam-app .rm-desk-page__tools .bp3-button .bp3-icon {\n  color: inherit !important;\n}\n\n/* New note：金色描边小按钮 */\nhtml body .roam-app .rm-desk-page__tools .rm-desk-page__new-note {\n  padding: 0 12px !important;\n  color: var(--mag-gold-ink) !important;\n  border: 1px solid color-mix(in srgb, var(--mag-gold) 60%, transparent) !important;\n}\n\n/* ---------- 工具条：类型筛选、排序、头条（脚本插入到刊头右侧同一行） ---------- */\nhtml body .roam-app .mag-desk-bar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px 12px;\n  margin-right: 4px;\n  padding-right: 12px;\n  font-family: var(--mag-body);\n  border-right: 1px solid var(--mag-border);\n}\n\nhtml body .roam-app .mag-desk-bar__chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n}\n\nhtml body .roam-app .mag-desk-bar__chips:empty {\n  display: none;\n}\n\nhtml body .roam-app .mag-desk-bar__chip {\n  padding: 2px 8px;\n  font-family: var(--mag-body);\n  font-size: 10px;\n  font-weight: 700;\n  line-height: 1.7;\n  letter-spacing: 1.1px;\n  text-transform: uppercase;\n  color: var(--mag-muted);\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\nhtml body .roam-app .mag-desk-bar__chip:hover {\n  color: var(--mag-ink);\n  background: var(--mag-yellow-soft);\n}\n\nhtml body .roam-app .mag-desk-bar__chip[aria-pressed=\"true\"] {\n  color: var(--mag-ink);\n  border-color: var(--mag-ink);\n}\n\nhtml body .roam-app .mag-desk-bar__sort {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  color: var(--mag-muted);\n}\n\nhtml body .roam-app .mag-desk-bar__sort select {\n  height: 30px;\n  padding: 0 6px;\n  font-family: var(--mag-body);\n  font-size: 12px;\n  color: var(--mag-ink);\n  background: var(--mag-paper);\n  border: 1px solid var(--mag-border);\n  border-radius: 6px;\n  outline: none;\n  cursor: pointer;\n}\n\nhtml body .roam-app .mag-desk-bar__sort select:focus {\n  border-color: var(--mag-gold);\n}\n\nhtml body .roam-app .mag-desk-bar__lead {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\nhtml body .roam-app .mag-desk-bar__btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 30px;\n  padding: 0 10px;\n  font-family: var(--mag-body);\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n  color: var(--mag-muted);\n  background: transparent;\n  border: 1px solid var(--mag-border);\n  border-radius: 6px;\n  cursor: pointer;\n}\n\nhtml body .roam-app .mag-desk-bar__btn[hidden] {\n  display: none;\n}\n\nhtml body .roam-app .mag-desk-bar__btn:hover:not(:disabled) {\n  color: var(--mag-ink);\n  background: var(--mag-yellow-soft);\n}\n\nhtml body .roam-app .mag-desk-bar__dice {\n  color: var(--mag-gold-ink);\n  border-color: color-mix(in srgb, var(--mag-gold) 60%, transparent);\n}\n\nhtml body .roam-app .mag-desk-bar__dice:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\nhtml body .roam-app .mag-desk-bar__pin[aria-pressed=\"true\"] {\n  color: var(--mag-blue);\n  border-color: color-mix(in srgb, var(--mag-blue) 45%, transparent);\n}\n\n/* ---------- 卡片：摊开的稿纸 ---------- */\nhtml body .roam-app .rm-desk-tile {\n  position: relative !important;\n  order: var(--mag-desk-order, 0);\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n  border: 1px solid var(--mag-border) !important;\n  border-top: 2px solid var(--mag-ink) !important;\n  border-radius: 3px !important;\n  box-shadow: 0 2px 8px var(--mag-shadow) !important;\n  transition: box-shadow 0.2s ease, background-color 0.2s ease !important;\n}\n\nhtml body .roam-app .rm-desk-tile:hover {\n  box-shadow: 0 6px 18px var(--mag-shadow), 0 1px 3px var(--mag-shadow) !important;\n}\n\nhtml body .roam-app .rm-desk-tile[data-mag-hidden] {\n  display: none !important;\n}\n\nhtml body .roam-app .rm-desk-tile__preview {\n  padding: 14px 16px 10px !important;\n  background: transparent !important;\n}\n\n/* 标题；上方的小号大写抬头为头条 / 类型（脚本写入 data-mag-kicker） */\nhtml body .roam-app .rm-desk-tile__title {\n  margin: 0 0 8px !important;\n  font-family: var(--mag-heading) !important;\n  font-size: 18px !important;\n  font-weight: 700 !important;\n  line-height: 1.3 !important;\n  letter-spacing: -0.01em !important;\n  color: var(--mag-ink) !important;\n}\n\nhtml body .roam-app .rm-desk-tile__title[data-mag-kicker]::before {\n  content: attr(data-mag-kicker);\n  display: block;\n  margin: 0 0 5px;\n  font-family: var(--mag-body);\n  font-size: 9.5px;\n  font-weight: 700;\n  line-height: 1.4;\n  letter-spacing: 1.6px;\n  color: var(--mag-gold-ink);\n}\n\nhtml body .roam-app .rm-desk-tile__row {\n  font-family: var(--mag-body) !important;\n  font-size: 12.5px !important;\n  line-height: 1.65 !important;\n  color: var(--mag-muted) !important;\n}\n\nhtml body .roam-app .rm-desk-tile__row--nested {\n  padding-left: 14px !important;\n}\n\nhtml body .roam-app .rm-desk-tile__bullet {\n  display: inline-block !important;\n  flex: 0 0 auto !important;\n  width: 4px !important;\n  height: 4px !important;\n  margin: 0 8px 0 0 !important;\n  vertical-align: middle !important;\n  background: var(--mag-faint) !important;\n  border-radius: 50% !important;\n}\n\n/* 「...」改成转页提示 */\nhtml body .roam-app .rm-desk-tile__more {\n  font-size: 0 !important;\n  line-height: 1 !important;\n}\n\nhtml body .roam-app .rm-desk-tile__more::after {\n  content: \"continued \\2192\";\n  font-family: var(--mag-aside-font);\n  font-size: 12px;\n  font-style: italic;\n  font-synthesis: none;\n  line-height: 1.8;\n  color: var(--mag-faint);\n}\n\n/* ---------- 刊尾：信息行 + 进度细线 + 操作按钮（悬停才出现） ---------- */\nhtml body .roam-app .rm-desk-tile__footer {\n  display: flex !important;\n  flex-wrap: wrap !important;\n  align-items: center !important;\n  gap: 2px 6px !important;\n  font-family: var(--mag-body) !important;\n  font-size: 11px !important;\n  color: var(--mag-faint) !important;\n  min-height: 32px !important;\n  padding: 4px 8px 6px 16px !important;\n  background: transparent !important;\n  border-top: 1px dotted var(--mag-border) !important;\n}\n\n/* 信息行独占一行；块卡片自带的来源日期与操作按钮排在下一行 */\nhtml body .roam-app .rm-desk-tile__footer[data-mag-meta]::before {\n  content: attr(data-mag-meta);\n  flex: 1 1 100%;\n  padding-top: 4px;\n  min-width: 0;\n  font-family: var(--mag-body);\n  font-size: 9.5px;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  line-height: 1.5;\n  letter-spacing: 1.1px;\n  color: var(--mag-muted);\n}\n\nhtml body .roam-app .rm-desk-tile__footer[data-mag-progress] {\n  background:\n    linear-gradient(var(--mag-gold), var(--mag-gold)) left bottom / calc(var(--mag-desk-progress, 0) * 100%) 2px no-repeat,\n    linear-gradient(var(--mag-border), var(--mag-border)) left bottom / 100% 2px no-repeat !important;\n}\n\nhtml body .roam-app .rm-desk-tile__actions {\n  display: flex !important;\n  gap: 2px !important;\n  margin-left: auto !important;\n  opacity: 0 !important;\n  transition: opacity 0.15s ease !important;\n}\n\nhtml body .roam-app .rm-desk-tile:hover .rm-desk-tile__actions {\n  opacity: 1 !important;\n}\n\nhtml body .roam-app .rm-desk-tile__actions .bp3-button,\nhtml body .roam-app .rm-desk-tile__actions .mag-desk-pin {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  width: 26px !important;\n  height: 26px !important;\n  min-width: 26px !important;\n  min-height: 26px !important;\n  padding: 0 !important;\n  color: var(--mag-muted) !important;\n  background: transparent !important;\n  background-image: none !important;\n  border: 0 !important;\n  border-radius: 5px !important;\n  box-shadow: none !important;\n  cursor: pointer !important;\n}\n\nhtml body .roam-app .rm-desk-tile__actions .bp3-button:is(:hover, :focus-visible),\nhtml body .roam-app .rm-desk-tile__actions .mag-desk-pin:is(:hover, :focus-visible) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-yellow-soft) !important;\n}\n\nhtml body .roam-app .rm-desk-tile__actions .bp3-icon {\n  color: inherit !important;\n}\n\nhtml body .roam-app .rm-desk-tile__actions .bp3-icon svg {\n  width: 14px !important;\n  height: 14px !important;\n}\n\n/* ---------- 截稿日印章 ---------- */\nhtml body .roam-app .rm-desk-tile[data-mag-due]::after {\n  content: attr(data-mag-due);\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  padding: 0 6px;\n  font-family: var(--mag-body);\n  font-size: 9.5px;\n  font-weight: 700;\n  line-height: 1.6;\n  letter-spacing: 1.1px;\n  color: var(--mag-muted);\n  background: var(--mag-paper);\n  border: 1.25px solid currentColor;\n  border-radius: 2px;\n  transform: rotate(-2deg);\n  pointer-events: none;\n}\n\nhtml body .roam-app .rm-desk-tile[data-mag-due-state=\"soon\"]::after {\n  color: var(--mag-gold-ink);\n  background: var(--mag-yellow-soft);\n}\n\nhtml body .roam-app .rm-desk-tile[data-mag-due-state=\"over\"]::after {\n  color: #a8443a;\n}\n\n/* 有印章时，标题右侧让出位置 */\nhtml body .roam-app .rm-desk-tile[data-mag-due] .rm-desk-tile__title {\n  padding-right: 92px !important;\n}\n\n/* ---------- 案头老化：久未编辑的卡片逐级泛黄 ---------- */\nhtml body .roam-app .rm-desk-tile[data-mag-age=\"1\"] {\n  background: color-mix(in srgb, var(--mag-paper) 94%, var(--mag-sepia)) !important;\n}\n\nhtml body .roam-app .rm-desk-tile[data-mag-age=\"2\"] {\n  background: color-mix(in srgb, var(--mag-paper) 88%, var(--mag-sepia)) !important;\n  border-top-color: color-mix(in srgb, var(--mag-ink) 70%, var(--mag-sepia)) !important;\n}\n\nhtml body .roam-app .rm-desk-tile[data-mag-age=\"3\"] {\n  background: color-mix(in srgb, var(--mag-paper) 82%, var(--mag-sepia)) !important;\n  border-top-color: color-mix(in srgb, var(--mag-ink) 55%, var(--mag-sepia)) !important;\n}\n\nhtml body .roam-app .rm-desk-tile[data-mag-age] .rm-desk-tile__title {\n  color: var(--mag-age2-ink) !important;\n}\n\nhtml body .roam-app .rm-desk-tile[data-mag-age=\"3\"] .rm-desk-tile__title {\n  color: var(--mag-age3-ink) !important;\n}\n\n/* ---------- 今日头条：横跨两栏、金色粗顶线、顶部一抹浅黄、标题放大，抬头金色 ----------\n   排在置顶卡片之后（置顶优先级最高）；属性写两遍是为了压过案头老化的底色 */\nhtml body .roam-app .rm-desk-tile[data-mag-lead][data-mag-lead] {\n  grid-column: span 2 !important;\n  background:\n    linear-gradient(to bottom, var(--mag-yellow-soft), transparent 140px),\n    var(--mag-paper) !important;\n  border-top: 4px solid var(--mag-gold) !important;\n  box-shadow: 0 8px 22px var(--mag-shadow), 0 1px 3px var(--mag-shadow) !important;\n}\n\nhtml body .roam-app .rm-desk-tile[data-mag-lead] .rm-desk-tile__preview {\n  padding: 18px 22px 12px !important;\n}\n\nhtml body .roam-app .rm-desk-tile[data-mag-lead] .rm-desk-tile__title {\n  font-size: 28px !important;\n  line-height: 1.2 !important;\n  color: var(--mag-ink) !important;\n}\n\nhtml body .roam-app .rm-desk-tile[data-mag-lead] .rm-desk-tile__title::before {\n  color: var(--mag-gold-ink);\n  letter-spacing: 2px;\n}\n\nhtml body .roam-app .rm-desk-tile[data-mag-lead] .rm-desk-tile__row {\n  font-size: 13.5px !important;\n}\n\n/* ---------- 置顶：卡片操作按钮里的图钉；钉住的卡片顶线变蓝、抬头带 PINNED ---------- */\nhtml body .roam-app .rm-desk-tile__actions .mag-desk-pin[aria-pressed=\"true\"] {\n  color: var(--mag-blue) !important;\n}\n\nhtml body .roam-app .rm-desk-tile[data-mag-pinned] {\n  border-top-color: var(--mag-blue) !important;\n}\n\n/* ---------- 块卡片：来源页面、任务方框 ---------- */\nhtml body .roam-app .rm-desk-tile__source {\n  font-family: var(--mag-body) !important;\n  font-size: 11px !important;\n  color: var(--mag-faint) !important;\n}\n\nhtml body .roam-app .rm-desk-tile__check {\n  display: inline-block !important;\n  flex: 0 0 auto !important;\n  box-sizing: border-box !important;\n  width: 11px !important;\n  height: 11px !important;\n  margin: 0 7px 0 0 !important;\n  vertical-align: -1px !important;\n  border: 1.25px solid color-mix(in srgb, var(--mag-muted) 70%, transparent) !important;\n  border-radius: 2.5px !important;\n}\n\n/* ---------- 刊头右侧一行对齐：所有控件统一 30px 高、垂直居中、无外边距 ---------- */\nhtml body .roam-app .rm-desk-page__tools > *,\nhtml body .roam-app .mag-desk-bar > *,\nhtml body .roam-app .mag-desk-bar__lead > * {\n  align-self: center !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\nhtml body .roam-app .rm-desk-page__tools .bp3-input-group {\n  display: flex !important;\n  align-items: center !important;\n  height: 30px !important;\n}\n\nhtml body .roam-app .rm-desk-page__tools .bp3-input-group .bp3-input,\nhtml body .roam-app .rm-desk-page__tools .bp3-button,\nhtml body .roam-app .mag-desk-bar__sort select,\nhtml body .roam-app .mag-desk-bar__btn {\n  box-sizing: border-box !important;\n  height: 30px !important;\n  min-height: 30px !important;\n  margin: 0 !important;\n  line-height: 28px !important;\n  vertical-align: middle !important;\n}\n\nhtml body .roam-app .rm-desk-page__tools .bp3-input-group > .bp3-icon {\n  top: 50% !important;\n  margin: 0 !important;\n  transform: translateY(-50%) !important;\n}\n\nhtml body .roam-app .mag-desk-bar {\n  height: 30px;\n}\n\nhtml body .roam-app .mag-desk-bar__sort {\n  height: 30px;\n  line-height: 30px;\n}\n\n/* 排序方向（↓ 默认 / ↑ 反转）：小方钮，手动排序时隐藏 */\nhtml body .roam-app .mag-desk-bar__dir {\n  width: 30px;\n  padding: 0 !important;\n  justify-content: center;\n  font-size: 14px;\n}\n\n/* 既是置顶又是头条：顶线用置顶的蓝色 */\nhtml body .roam-app .rm-desk-tile[data-mag-lead][data-mag-pinned] {\n  border-top-color: var(--mag-blue) !important;\n}\n/* Native Desk only. Keep the current search size and move its glyph inward. */\nhtml body .roam-app .rm-desk-page__tools .bp3-input-group > .bp3-icon-search {\n left:10px!important;right:auto!important;pointer-events:none!important;\n}\nhtml body .roam-app .rm-desk-page__tools .bp3-input-group:has(> .bp3-icon-search) > .bp3-input {\n padding-left:34px!important;\n}\n",
  "hide-top-buttons": ".rm-topbar > .bp3-popover-wrapper:has(.bp3-icon-horizontal-distribution),\n.rm-topbar > .rm-topbar__help {\n  display: none !important;\n}",
  "hide-left-sidebar-items": "\nhtml body .roam-app .roam-sidebar-container .bp3-icon.icon[style*=\"background-image\"][style*=\"googleusercontent.com\"] {\n  display: none !important;\n}\nhtml body .roam-app .roam-sidebar-container .starred-pages-wrapper > .title {\n  height: 0 !important;\n  min-height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n",
  "theme-host-fixes": "\n/* Keep All Pages headers and rows in the same horizontal scroll plane. */\nhtml body .roam-app .rm-all-pages .ReactTable .rt-table {\n  overflow: auto !important;\n}\nhtml body .roam-app .rm-all-pages .ReactTable :is(.rt-thead, .rt-tbody) {\n  min-width: max-content !important;\n}\nhtml body .roam-app .rm-all-pages .ReactTable .rt-thead {\n  position: sticky !important;\n  top: 0 !important;\n  z-index: 3 !important;\n}\n\n/* Keep callout icons beside their title, not at the far edge of the card. */\nhtml body .roam-app .rm-block[data-page-links*='\">\"'] [class*=\"callout\"] [class*=\"icon\"],\nhtml body .roam-app .rm-block[data-page-links*='\">\"'] [class*=\"callout-icon\"] {\n  margin-left: 0 !important;\n  margin-right: 8px !important;\n  flex: 0 0 auto !important;\n}\n\n/* Roam's advanced search should be centred rather than retaining a large left gutter. */\nhtml body .roam-app :is(.rm-advanced-search, .rm-search-query, .rm-find-or-create-wrapper) {\n  margin-inline: auto !important;\n}\n\n/* Page and block autocomplete popovers use the same paper/ink tokens. */\nhtml body :is(.rm-autocomplete__results, .rm-block-ref-selector) {\n  color: var(--mag-ink) !important;\n  background: var(--mag-paper) !important;\n  border-color: var(--mag-border) !important;\n}\n\n\n\n/* Leave Roam's saved sizes and native drag handles in charge. Header padding\n   must be inside the measured width, including the final action column. */\nhtml body .roam-app .rm-data-table {width:max-content!important;max-width:100%!important;min-width:0!important;}\nhtml body .roam-app .rm-data-table__table {max-width:100%!important;overflow-x:auto!important;}\nhtml body .roam-app .rm-data-table__table > table {table-layout:fixed!important;min-width:0!important;max-width:none!important;}\nhtml body .roam-app .rm-data-table__table > table > thead > tr > th {box-sizing:border-box!important;padding:0!important;position:relative!important;overflow:visible!important;}\nhtml body .roam-app .rm-data-table .rm-column-header {box-sizing:border-box!important;padding:8px 12px!important;min-width:0!important;}\nhtml body .roam-app .rm-data-table .rm-column-header--fake {padding:8px!important;min-width:0!important;}\nhtml body .roam-app .rm-data-table__table > table > tbody > tr > td {box-sizing:border-box!important;overflow-wrap:anywhere!important;}\nhtml body .roam-app .rm-block:is(.list-query,[data-page-links*='\".list-query\"']) .rm-ref-page-view-title {display:none!important;}\nhtml body .roam-app .rm-block:is(.list-query,[data-page-links*='\".list-query\"']) :is(.rm-query-content,.rm-ref-page-view) {padding:0!important;margin:0!important;border:0!important;background:transparent!important;}\n\n/* Highlight rows only. Descendants and the results wrapper keep paper colour. */\nhtml body :is(.rm-autocomplete__results,.rm-block-ref-selector) {background:var(--mag-paper)!important;color:var(--mag-ink)!important;}\nhtml body .rm-autocomplete__results {border:1px solid var(--mag-border)!important;border-radius:6px!important;overflow:hidden!important;}\nhtml body :is(.rm-autocomplete__results,.rm-block-ref-selector) :is(.rm-autocomplete-result,.rm-autocomplete__result,.rm-search-list-item,[role=\"option\"]) {background:transparent!important;outline:0!important;border:0!important;box-shadow:none!important;}\nhtml body :is(.rm-autocomplete__results,.rm-block-ref-selector) :is(.rm-autocomplete-result,.rm-autocomplete__result,.rm-search-list-item,[role=\"option\"]):hover {background:var(--mag-blue-soft,#d8e1e8)!important;box-shadow:none!important;}\nhtml body :is(.rm-autocomplete__results,.rm-block-ref-selector) :is(.rm-autocomplete-result--selected,.rm-autocomplete-result.rm-menu-item--active,.rm-autocomplete-result.bp3-active,.rm-autocomplete-result.selected,.rm-autocomplete-result:focus-visible,[role=\"option\"][aria-selected=\"true\"]) {background:var(--mag-blue-soft,#d8e1e8)!important;border-color:transparent!important;outline:0!important;box-shadow:none!important;}\nhtml body :is(.rm-autocomplete__preview,.rm-autocomplete-footer,.rm-find-or-create-modal-preview) {background:var(--mag-paper)!important;color:var(--mag-ink)!important;border-color:var(--mag-border)!important;}\nhtml body .rm-find-or-create-modal--with-preview .rm-find-or-create-modal-body-col,\nhtml body .rm-find-or-create-modal .rm-find-or-create-modal-preview {flex:1 1 0!important;min-width:0!important;width:50%!important;max-width:50%!important;}\n\n/* A custom settings component occupies the entire row, not the action column. */\nhtml body .rm-settings :is(.rm-settings-panel__setting,.rm-settings-panel__setting-container):has(.folio-settings-group) {display:block!important;width:100%!important;}\nhtml body .rm-settings :is(.rm-settings-panel__setting,.rm-settings-panel__setting-container):has(.folio-settings-group) > :has(.folio-settings-group) {width:100%!important;max-width:none!important;flex:1 1 100%!important;margin:0!important;padding-inline:0!important;}\nhtml body .rm-settings .folio-settings-group {box-sizing:border-box!important;margin-inline:0!important;text-align:left!important;}\nhtml body .rm-settings :is(.flex-h-box,.flex-v-box):has(> .folio-settings-group) {width:100%!important;max-width:none!important;flex-basis:100%!important;margin-inline:0!important;}\n\nhtml body .rm-settings .rm-settings-panel__setting:has(.folio-settings-group) {display:grid!important;grid-template-columns:minmax(0,1fr)!important;}\nhtml body .rm-settings .rm-settings-panel__setting:has(.folio-settings-group) > * {grid-column:1/-1!important;min-width:0!important;}\nhtml body .bp3-menu :is(.bp3-button-group,.rm-block-context-menu) .bp3-button {\n color:var(--mag-muted)!important;background:var(--mag-paper)!important;border-color:var(--mag-border)!important;box-shadow:none!important;\n}\nhtml body .bp3-menu :is(.bp3-button-group,.rm-block-context-menu) .bp3-button:is(:hover,.bp3-active) {background:var(--mag-blue-soft)!important;color:var(--mag-ink)!important;}\nhtml body .bp3-menu :is(hr,.bp3-menu-divider) {border-color:var(--mag-border)!important;}\n/* Colours only for native H1/H2/H3 and alignment controls; keep their sizing. */\nhtml body .bp3-menu button.bp3-button {color:var(--mag-muted)!important;background:var(--mag-paper)!important;border-color:var(--mag-border)!important;box-shadow:none!important;}\nhtml body .bp3-menu button.bp3-button:is(:hover,.bp3-active) {background:var(--mag-blue-soft)!important;color:var(--mag-ink)!important;}\nhtml body :is(.rm-autocomplete__results,.rm-block-ref-selector) :is(.rm-autocomplete-result,.rm-autocomplete__result,.rm-search-list-item,[role=\"option\"]):is(:hover,.rm-autocomplete-result--selected,.rm-menu-item--active,.bp3-active,.selected,[aria-selected=\"true\"]) {background:#d5dce2!important;color:var(--mag-ink)!important;outline:0!important;box-shadow:none!important;}\nhtml body .roam-app :is(.roam-main,#right-sidebar,.roam-sidebar-container) > .rm-resize-handle {width:6px!important;min-width:6px!important;cursor:col-resize!important;pointer-events:auto!important;z-index:20!important;}\nhtml body .roam-app :is(.roam-main,#right-sidebar,.roam-sidebar-container) > .rm-resize-handle:hover {background:var(--mag-border)!important;}\n/* Main-page width and horizontal spacing belong to Roam. */\nhtml body .bp3-menu :is(button.bp3-button,.bp3-button-group > .bp3-button) {color:var(--mag-muted)!important;background:var(--mag-paper)!important;border-color:var(--mag-border)!important;box-shadow:none!important;}\nhtml body .bp3-menu :is(button.bp3-button,.bp3-button-group > .bp3-button):is(:hover,.bp3-active) {color:var(--mag-ink)!important;background:var(--mag-blue-soft)!important;}\nhtml body .bp3-menu :is(hr,.bp3-menu-divider) {border-color:var(--mag-border)!important;}\n\n/* Sidebar spacing classes must not reserve a percentage of each block row.\n   Keep the real reference counter and its 24px native slot; reclaim only the\n   separator. The same constraints apply while editing and in wide layouts. */\nhtml body .roam-app .roam-main .roam-article .rm-block-main > .rm-block-separator {\n flex:0 0 8px!important;width:8px!important;min-width:0!important;max-width:8px!important;\n}\nhtml body .roam-app .roam-main .roam-article .rm-block-main > :is(.rm-block__input,.rm-autocomplete__wrapper) {\n flex:1 1 0%!important;min-width:0!important;max-width:100%!important;\n}\n\n/* The native daily separator is redundant only while this day's masthead exists.\n   Keep its space; removing the marker restores Roam's own border colour. */\nhtml body .roam-app .roam-body-main .roam-log-container > .roam-log-page:has(> .rm-title-display-container > .rm-title-display[data-mag-masthead]) {\n border-top-color:transparent!important;\n}\n",
  "native-component-tokens": "\n:root {\n  --mag-toolbar-height: 48px;\n  --mag-frame-bottom: 16px;\n  --mag-shadow: rgba(0,0,0,0);\n  --mag-body: var(--roam-font-family, var(--global-font, system-ui, -apple-system, \"Segoe UI\", sans-serif));\n  --mag-heading: var(--header-font, var(--roam-font-family, var(--global-font, system-ui, -apple-system, \"Segoe UI\", sans-serif)));\n  --mag-aside-font: var(--header-font, var(--roam-font-family, var(--global-font, system-ui, -apple-system, \"Segoe UI\", sans-serif)));\n  --mag-code: ui-monospace, SFMono-Regular, Consolas, monospace;\n  --mag-paper: var(--bc-main, var(--main-area-background-color, #ffffff));\n  --mag-shell: var(--bc-right-sidebar, var(--bc-left-sidebar, #f5f6f8));\n  --mag-surface: var(--bc-main, var(--main-area-background-color, #ffffff));\n  --mag-active: var(--bc-highlight, var(--bc-hover, rgba(127,127,127,.12)));\n  --mag-ink: var(--cl-primary, var(--primary-text-color, #182026));\n  --mag-muted: var(--cl-secondary, var(--secondary-text-color, #5c7080));\n  --mag-faint: var(--cl-tertiary, var(--secondary-text-color, #8a9ba8));\n  --mag-blue: var(--cl-blue, var(--cl-accent, #137cbd));\n  --mag-blue-soft: color-mix(in srgb, var(--mag-blue) 12%, transparent);\n  --mag-yellow: #d6b83c;\n  --mag-yellow-soft: color-mix(in srgb, var(--mag-yellow) 20%, transparent);\n  --mag-gold: #a58a2c;\n  --mag-gold-ink: #806d2e;\n  --mag-border: var(--border-color, rgba(127,127,127,.22));\n  --mag-sepia: #8a6d3b;\n  --mag-age1-ink: color-mix(in srgb, var(--mag-ink) 86%, var(--mag-sepia));\n  --mag-age2-ink: color-mix(in srgb, var(--mag-ink) 72%, var(--mag-sepia));\n  --mag-age3-ink: color-mix(in srgb, var(--mag-ink) 58%, var(--mag-sepia));\n  --mag-code-bg: var(--bc-codeblock, rgba(127,127,127,.08));\n  --mag-inline-bg: var(--bc-code, rgba(127,127,127,.08));\n  --mag-inline-text: var(--cl-primary, inherit);\n  --mag-radius: 6px;\n}\n:root.mag-dark,\nbody.bp3-dark,\nbody.bp4-dark,\n.roam-app.bp3-dark,\n.roam-app.bp4-dark {\n  --mag-paper: var(--bc-main, var(--main-area-background-color, #20242c));\n  --mag-shell: var(--bc-right-sidebar, var(--bc-left-sidebar, #171a20));\n  --mag-surface: var(--bc-main, var(--main-area-background-color, #20242c));\n  --mag-active: var(--bc-highlight, var(--bc-hover, rgba(255,255,255,.10)));\n  --mag-ink: var(--cl-primary, var(--primary-text-color, #f0f1f3));\n  --mag-muted: var(--cl-secondary, var(--secondary-text-color, #b7bdc7));\n  --mag-faint: var(--cl-tertiary, var(--secondary-text-color, #89919d));\n  --mag-blue: var(--cl-blue, var(--cl-accent, #70b7e6));\n  --mag-gold-ink: #d2b95d;\n  --mag-border: var(--bc-left-sidebar, rgba(255,255,255,.18));\n  --mag-sepia: #c8a96e;\n}\n",
  "sidebar-toggles": "\n/* Visibility only: keep Roam's original nodes, icons and click handlers. */\nhtml body .roam-app .roam-sidebar-container .top-row {position:relative!important;}\nhtml body .roam-app .roam-sidebar-container .top-row > .bp3-icon-menu-closed {\n display:inline-flex!important;opacity:1!important;visibility:visible!important;\n position:absolute!important;top:calc((var(--mag-toolbar-height,48px) - 30px) / 2)!important;right:8px!important;\n align-items:center!important;justify-content:center!important;width:30px!important;height:30px!important;\n margin:0!important;padding:0!important;z-index:2!important;pointer-events:auto!important;\n}\nhtml body .roam-app .rm-topbar .rm-open-left-sidebar-btn,\nhtml body .roam-app .rm-topbar > .bp3-button:is(.bp3-icon-menu-closed,:has(> .bp3-icon-menu-closed)),\nhtml body .roam-app #right-sidebar > .flex-h-box .bp3-button:is(.bp3-icon-menu-open,:has(.bp3-icon-menu-open)) {\n display:inline-flex!important;opacity:1!important;visibility:visible!important;\n align-items:center!important;justify-content:center!important;pointer-events:auto!important;\n}\n\n/* One slot for both native states. JS sets mutually exclusive inline visibility\n   so unrelated component styles cannot force both states back on. */\nhtml body .roam-app [data-folio-sidebar-role=\"close\"] {\n position:fixed!important;left:var(--folio-native-toggle-x,calc(100vw - 38px))!important;\n top:var(--folio-native-toggle-y,9px)!important;right:auto!important;bottom:auto!important;\n width:30px!important;min-width:30px!important;height:30px!important;min-height:30px!important;\n margin:0!important;padding:0!important;z-index:1000!important;transform:none!important;\n align-items:center!important;justify-content:center!important;\n color:var(--mag-muted)!important;background:transparent!important;border:0!important;box-shadow:none!important;\n}\n\n/* Closed state: the native open button keeps its own flex slot. Open state:\n   reserve a dedicated slot for the native close button over the main topbar. */\nhtml body .roam-app .rm-topbar [data-folio-sidebar-role=\"open\"] {\n position:static!important;inset:auto!important;flex:0 0 30px!important;\n width:30px!important;min-width:30px!important;margin:0!important;transform:none!important;\n}\nhtml[data-folio-right-sidebar=\"open\"] body .roam-app .rm-topbar {box-sizing:border-box!important;padding-right:44px!important;}\n",
  "calendar-preview": "\nhtml body .bp3-datepicker :is(.DayPicker,.DayPicker-Month,.DayPicker-Caption,.DayPicker-Weekdays,.DayPicker-Body,.bp3-datepicker-navbar,.bp3-datepicker-caption,.bp3-datepicker-shortcuts,.bp3-menu) { background: var(--mag-paper) !important; color: var(--mag-ink) !important; }\nhtml body .bp3-datepicker .bp3-datepicker-shortcuts .bp3-menu-item { color: var(--mag-ink) !important; }\nhtml body .bp3-datepicker .bp3-datepicker-shortcuts .bp3-menu-item:hover { background: var(--mag-yellow-soft) !important; }\nhtml body .bp3-datepicker .DayPicker-Day--today .bp3-datepicker-day-wrapper { background: var(--mag-ink) !important; color: var(--mag-paper) !important; box-shadow: 0 0 0 2px var(--mag-gold),0 0 0 4px var(--mag-paper) !important; font-weight: 800 !important; border-radius: 50% !important; }\n",
  "calendar-capture": "\n/* Every action uses the same capsule dimensions and colour. */\nhtml body .bp3-datepicker :is(.delmar-calendar-capture-bar,.delmar-calendar-tools) {gap:6px!important;background:var(--mag-paper)!important;}\nhtml body .bp3-datepicker :is(.delmar-calendar-capture-bar,.delmar-calendar-tools) button {box-sizing:border-box!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;height:24px!important;min-height:24px!important;margin:0!important;padding:0 9px!important;border:1px solid var(--mag-border)!important;border-radius:12px!important;background:var(--mag-shell)!important;color:var(--mag-ink)!important;font:600 10px/1 var(--mag-body)!important;white-space:nowrap!important;}\nhtml body .bp3-datepicker :is(.delmar-calendar-capture-bar,.delmar-calendar-tools) button:hover {background:var(--mag-blue-soft)!important;}\nhtml body .delmar-calendar-capture-bar {grid-template-columns:minmax(80px,1fr) auto auto!important;}\nhtml body .delmar-calendar-tools {display:flex!important;align-items:center!important;justify-content:flex-end!important;padding:6px!important;}\n",
  "toolbar-panel": ".roam-app .rm-topbar > #folio-topbar-controls {\n display:flex!important;align-items:center!important;flex:0 0 auto!important;min-width:0!important;overflow:visible!important;\n}\n/* Owned toolbar controls and settings dialog; never style a native dialog. */\n.roam-app .rm-topbar :is(#folio-settings-launcher,#folio-ai-launcher) {\n position:static!important;display:inline-flex!important;flex:0 0 30px!important;align-items:center!important;justify-content:center!important;\n width:30px!important;min-width:30px!important;height:30px!important;min-height:30px!important;padding:0!important;margin:0!important;\n color:var(--mag-muted,var(--cl-secondary,GrayText))!important;background:transparent!important;border:0!important;box-shadow:none!important;\n}\n.roam-app .rm-topbar #folio-settings-launcher[aria-expanded=\"true\"] {\n color:var(--mag-gold-ink,var(--cl-accent,Highlight))!important;background:transparent!important;\n}\n.roam-app .rm-topbar :is(#folio-settings-launcher,#folio-ai-launcher) svg {width:16px!important;height:16px!important;pointer-events:none!important;}\n#folio-settings-dialog {\n --set-paper:var(--mag-paper,Canvas);--set-shell:var(--mag-shell,Canvas);--set-ink:var(--mag-ink,CanvasText);--set-muted:var(--mag-muted,GrayText);--set-rule:var(--mag-border,ButtonBorder);--set-accent:var(--mag-gold-ink,Highlight);--set-selected:var(--mag-active,ButtonFace);\n color:var(--mag-ink,var(--cl-primary,CanvasText));background:var(--mag-paper,var(--bc-main,Canvas));\n width:min(560px,calc(100vw - 32px));max-width:calc(100vw - 32px);max-height:min(620px,76dvh);\n position:fixed;inset:auto;margin:0;z-index:20000;\n box-sizing:border-box;padding:0;border:1px solid var(--mag-border,var(--bc-hover,ButtonBorder));border-radius:10px;\n box-shadow:0 12px 48px rgba(0,0,0,.22);font-family:var(--mag-body,inherit);font-size:14px;font-weight:400;overflow:hidden;\n}\n#folio-settings-dialog .folio-settings-dialog-header {\n display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 14px;cursor:grab;touch-action:none;user-select:none;border-bottom:1px solid var(--mag-border,var(--bc-hover,ButtonBorder));\n}\n#folio-settings-dialog .folio-settings-dialog-title {margin:0;font-size:15px;font-weight:600;}\n#folio-settings-dialog .folio-settings-dialog-close {color:inherit;background:transparent;border:0;font:inherit;font-size:22px;line-height:1;width:30px;height:30px;cursor:pointer;}\n#folio-settings-dialog .folio-settings-dialog-content {padding:0 14px 12px;overflow-y:auto;max-height:min(570px,calc(76dvh - 48px));box-sizing:border-box;}\n#folio-settings-dialog .folio-settings-row {padding:14px 0;}\n#folio-settings-dialog .folio-settings-global-control {display:flex;align-items:center;justify-content:space-between;gap:14px;}\n#folio-settings-dialog .rm-settings-panel__setting-content {flex:1;min-width:0;}\n#folio-settings-dialog .rm-settings-panel__setting-action {flex:0 0 auto;}\n#folio-settings-dialog :is(input,select,textarea,button) {accent-color:var(--mag-gold-ink,Highlight);}\n#folio-settings-dialog :is(input:not([type=\"checkbox\"]),select,textarea) {color:inherit;background:var(--mag-paper,var(--bc-main,Canvas));border-color:var(--mag-border,var(--bc-hover,ButtonBorder));}\n#folio-settings-dialog :focus-visible {outline:2px solid var(--mag-gold-ink,Highlight);outline-offset:2px;}\n.roam-app .rm-agent-sidebar-chat-launcher[data-folio-ai-proxied=\"true\"] {display:none!important;}\n\n/* AI status uses the glyph colour, never a filled button. */\nhtml body .roam-app .rm-topbar #folio-ai-launcher:is(:hover,:focus,:active,[aria-expanded=\"true\"]) {background:transparent!important;box-shadow:none!important;}\nhtml body .roam-app .rm-topbar #folio-ai-launcher[aria-expanded=\"true\"] {color:var(--mag-blue,#337eaa)!important;}\n\n/* Compact toolbar-only surface. Native Extension Settings are unaffected. */\nhtml body #folio-settings-dialog .folio-settings-row.rm-settings-panel__section {padding-block:7px!important;}\n#folio-settings-dialog .folio-settings-global-control h4 {margin:0!important;font-size:12px!important;line-height:1.4!important;}\n#folio-settings-dialog .folio-settings-global-control .rm-settings-panel__description {display:none;}\n#folio-settings-dialog [data-folio-settings-layout=\"functional\"] > p {font-size:11px!important;margin:8px 0!important;}\n#folio-settings-dialog [data-folio-settings-layout=\"functional\"] > div {display:block!important;}\n#folio-settings-dialog [data-folio-settings-layout=\"functional\"] nav {display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;margin-bottom:8px;}\n#folio-settings-dialog [data-folio-settings-layout=\"functional\"] nav > button {padding:6px!important;font-size:11px!important;line-height:1.35!important;min-height:30px;}\n#folio-settings-dialog [data-folio-settings-layout=\"functional\"] nav > div {display:none!important;}\n#folio-settings-dialog .folio-settings-group {border:0!important;border-radius:0!important;}\n#folio-settings-dialog .folio-settings-group > summary {padding:7px 0!important;font-size:12px!important;}\n#folio-settings-dialog .folio-settings-group > div {padding-inline:0!important;}\n@media(max-width:600px) {#folio-settings-dialog [data-folio-settings-layout=\"functional\"] nav {grid-template-columns:repeat(2,minmax(0,1fr));}}\n\n#folio-settings-dialog[data-dragging=\"true\"] .folio-settings-dialog-header {cursor:grabbing;}\n\n/* The floating panel is outside .roam-app, so native app-scoped dark tokens\n   must also be available on this owned surface when the Folio theme is off. */\n#folio-settings-dialog[data-folio-theme=\"native\"] {\n --mag-paper:var(--bc-main,#ffffff);--mag-shell:var(--bc-left-sidebar,#f5f6f8);--mag-ink:var(--cl-primary,#182026);--mag-muted:var(--cl-secondary,#5c7080);--mag-border:var(--border-color,rgba(127,127,127,.22));--mag-gold-ink:#806d2e;--mag-active:var(--bc-hover,rgba(127,127,127,.12));\n}\n:is(html.mag-dark,body.bp3-dark,body.bp4-dark) #folio-settings-dialog[data-folio-theme=\"native\"],\nbody:has(.roam-app.bp3-dark,.roam-app.bp4-dark) #folio-settings-dialog[data-folio-theme=\"native\"] {\n --mag-paper:var(--bc-main,#20242c);--mag-shell:var(--bc-left-sidebar,#171a20);--mag-ink:var(--cl-primary,#f0f1f3);--mag-muted:var(--cl-secondary,#b7bdc7);--mag-gold-ink:#d2b95d;--mag-active:var(--bc-hover,rgba(255,255,255,.1));\n}\n\n/* A hover affordance, never a persistent selected background. */\nhtml body .roam-app :is(#folio-ai-launcher,#folio-settings-launcher,[data-folio-sidebar-role]) {background:transparent!important;box-shadow:none!important;border-radius:6px!important;}\nhtml body .roam-app :is(#folio-ai-launcher,#folio-settings-launcher,[data-folio-sidebar-role]):hover:not([data-folio-hover-dismissed]) {background:var(--mag-yellow-soft,#f7edbd)!important;}\n"
};

const MAGAZINE_RUNNERS = {
"typewriter": () => {
/*
 * 打字机模式 + 写作目标（依赖核心脚本）
 * · 顶栏打字机图标：点击开关；右键打开写作目标菜单（含自定义）；图标下方显示进度
 * · 开启后光标行停在视窗上部（focusRatio），正文其余部分与侧栏退后
 * · 关闭时所有监听立即返回，平时几乎没有开销
 */
(window.__magModules = window.__magModules || {}).typewriter = (core) => {
  const CONFIG = {
    focusRatio: 0.42,                 // 光标行停在视窗高度的这个比例处（0.5 为正中）
    goals: [0, 250, 500, 1000, 2000], // 写作目标菜单里的预设（0 = 不设目标）
  };
  const { doc, body, store, isBlockInput } = core;
  const s = core.scope();

  /* ---------- 字词计数：中日韩按字，西文按词 ---------- */

  const CJK_RE = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\u3040-\u30ff\uac00-\ud7af]/g;
  const WORD_RE = /[A-Za-z0-9\u00c0-\u024f]+(?:['’-][A-Za-z0-9\u00c0-\u024f]+)*/g;

  const stripRoam = (s) =>
    s
      .replace(/`{3}[\s\S]*?`{3}/g, " ")      // 代码块（写成 `{3} 以免截断 Roam 代码块）
      .replace(/`[^`\n]*`/g, " ")               // 行内代码
      .replace(/\{\{[^{}]*\}\}/g, " ")          // {{组件}}、{{[[TODO]]}}
      .replace(/\(\([^()]*\)\)/g, " ")          // ((块引用))
      .replace(/https?:\/\/\S+/g, " ")          // 链接地址
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1") // [别名](目标) 只留别名
      .replace(/^[^\n:]{1,60}::/gm, " ")        // 属性名::
      .replace(/\[\[|\]\]|\*\*|__|\^\^|~~|#/g, " ");

  const countText = (s) => {
    if (!s) return { cjk: 0, words: 0, units: 0 };
    const text = stripRoam(s);
    const cjk = (text.match(CJK_RE) || []).length;
    const words = (text.replace(CJK_RE, " ").match(WORD_RE) || []).length;
    return { cjk, words, units: cjk + words };
  };

  /* ---------- 打字机模式 + 写作目标 ---------- */

  const TW = "mag-typewriter";
  const TYPING = "mag-tw-typing";
  const BTN_ID = "mag-typewriter-toggle";
  const ICON =
    '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">' +
    '<path fill-rule="evenodd" d="M4.5 .5h7v5.5h-7zM6 2h4v1H6zM6 3.8h2.6v1H6z"/>' +
    '<path fill-rule="evenodd" d="M2 5.5h12A1.5 1.5 0 0 1 15.5 7v6a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 13V7A1.5 1.5 0 0 1 2 5.5z' +
    'M3 8h2v1.6H3zM7 8h2v1.6H7zM11 8h2v1.6h-2zM4 11h8v1.6H4z"/></svg>';

  const modeOn = () => body.classList.contains(TW);

  // 测光标位置用的镜像元素：只建一次，反复使用
  const MIRROR_PROPS = [
    "boxSizing", "fontFamily", "fontSize", "fontWeight", "fontStyle",
    "lineHeight", "letterSpacing", "wordSpacing", "textIndent", "textTransform",
    "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
    "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth",
    "overflowWrap", "wordBreak", "tabSize",
  ];
  let mirror = null;
  let marker = null;
  const getMirror = () => {
    if (!mirror) {
      mirror = doc.createElement("div");
      mirror.setAttribute("aria-hidden", "true");
      Object.assign(mirror.style, {
        position: "absolute",
        visibility: "hidden",
        top: "0",
        left: "-9999px",
        whiteSpace: "pre-wrap",
        borderStyle: "solid",
        overflow: "hidden",
        pointerEvents: "none",
      });
      marker = doc.createElement("span");
      marker.textContent = "\u200b";
      body.appendChild(mirror);
    }
    return mirror;
  };

  const caretY = (ta) => {
    const cs = getComputedStyle(ta);
    const rect = ta.getBoundingClientRect();
    const m = getMirror();
    for (const p of MIRROR_PROPS) m.style[p] = cs[p];
    m.style.width = rect.width + "px";
    m.textContent = ta.value.slice(0, ta.selectionEnd ?? ta.value.length);
    m.appendChild(marker);
    const lineHeight = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.8;
    return rect.top + marker.offsetTop - ta.scrollTop + lineHeight / 2;
  };

  // 每个块的滚动容器缓存起来，避免每次按键都向上逐层 getComputedStyle
  const scrollCache = new WeakMap();
  const scrollParent = (el) => {
    const cached = scrollCache.get(el);
    if (cached && cached.isConnected) return cached;
    for (let n = el.parentElement; n && n !== body; n = n.parentElement) {
      const oy = getComputedStyle(n).overflowY;
      if ((oy === "auto" || oy === "scroll") && n.scrollHeight > n.clientHeight) {
        scrollCache.set(el, n);
        return n;
      }
    }
    return null;
  };

  let goal = Number(store.get("mag-tw-goal", 0)) || 0;
  let written = 0;
  const baseline = new WeakMap(); // textarea -> 上一次的字词数

  // 一帧里合并做三件事：更新「正在打字」状态、统计字数、把光标行拉到焦点线
  let frame = 0;
  let needCenter = false;
  let pendingInput = null;

  const runFrame = () => {
    frame = 0;
    const ae = doc.activeElement;
    const editing = isBlockInput(ae);
    body.classList.toggle(TYPING, modeOn() && editing && !!ae.closest(".roam-article"));

    if (pendingInput) {
      const ta = pendingInput;
      pendingInput = null;
      if (modeOn() && ta.isConnected) {
        const now = countText(ta.value).units;
        const before = baseline.has(ta) ? baseline.get(ta) : now;
        baseline.set(ta, now);
        written = Math.max(0, written + (now - before));
        updateButton();
      }
    }

    if (needCenter) {
      needCenter = false;
      if (modeOn() && editing) {
        const sp = scrollParent(ae);
        if (sp) {
          const box = sp.getBoundingClientRect();
          const delta = caretY(ae) - (box.top + box.height * CONFIG.focusRatio);
          if (Math.abs(delta) > 3) sp.scrollTop += delta;
        }
      }
    }
  };

  const schedule = (opts = {}) => {
    if (opts.center) needCenter = true;
    if (opts.input) pendingInput = opts.input;
    if (!frame) frame = requestAnimationFrame(runFrame);
  };

  const updateButton = () => {
    const btn = doc.getElementById(BTN_ID);
    if (!btn) return;
    const on = modeOn();
    const hasGoal = on && goal > 0;
    const done = hasGoal && written >= goal;
    btn.classList.toggle("bp3-active", on);
    btn.setAttribute("aria-pressed", String(on));
    btn.toggleAttribute("data-goal", hasGoal);
    btn.toggleAttribute("data-goal-done", done);
    btn.style.setProperty("--mag-tw-progress", hasGoal ? Math.min(1, written / goal).toFixed(3) : "0");
    btn.title = !on
      ? `打字机模式${goal ? `（目标 ${goal}）` : ""} · 右键设定写作目标`
      : hasGoal
        ? `本次已写 ${written} / ${goal}${done ? " ✓" : ""} · 右键设定目标`
        : `本次已写 ${written} · 右键设定写作目标`;
  };

  const setMode = (on) => {
    body.classList.toggle(TW, on);
    store.set("mag-typewriter", on ? "1" : "0");
    if (on) {
      written = 0;
      const ae = doc.activeElement;
      if (isBlockInput(ae)) baseline.set(ae, countText(ae.value).units);
    }
    updateButton();
    schedule({ center: on });
  };

  const toggleMode = () => setMode(!modeOn());

  const setGoal = (g) => {
    goal = Math.max(0, Math.round(Number(g) || 0));
    store.set("mag-tw-goal", goal);
    updateButton();
  };

  /* 写作目标菜单 */
  let menu = null;
  const closeMenu = () => {
    if (menu) {
      menu.remove();
      menu = null;
    }
  };

  const openGoalMenu = () => {
    closeMenu();
    const btn = doc.getElementById(BTN_ID);
    if (!btn) return;
    const m = doc.createElement("div");
    m.className = "mag-goal-menu";
    m.setAttribute("role", "menu");

    const head = doc.createElement("div");
    head.className = "mag-goal-menu__head";
    head.textContent = "写作目标";
    m.appendChild(head);

    for (const g of CONFIG.goals) {
      const item = doc.createElement("button");
      item.type = "button";
      item.className = "mag-goal-menu__item";
      item.setAttribute("role", "menuitemradio");
      item.setAttribute("aria-checked", String(g === goal));
      item.textContent = g ? `${g.toLocaleString("en-US")} 字词` : "不设目标";
      item.addEventListener("click", () => {
        setGoal(g);
        closeMenu();
      });
      m.appendChild(item);
    }

    const custom = doc.createElement("label");
    custom.className = "mag-goal-menu__custom";
    custom.textContent = "自定义";
    const input = doc.createElement("input");
    input.type = "number";
    input.min = "1";
    input.step = "50";
    input.placeholder = CONFIG.goals.includes(goal) ? "例如 800" : String(goal);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (Number(input.value) > 0) setGoal(input.value);
        closeMenu();
      }
    });
    custom.appendChild(input);
    m.appendChild(custom);

    const sep = doc.createElement("div");
    sep.className = "mag-goal-menu__sep";
    m.appendChild(sep);

    const status = doc.createElement("div");
    status.className = "mag-goal-menu__status";
    const text = doc.createElement("span");
    text.textContent = modeOn() ? `本次已写 ${written.toLocaleString("en-US")}` : "开启打字机后计数";
    const reset = doc.createElement("button");
    reset.type = "button";
    reset.className = "mag-goal-menu__reset";
    reset.textContent = "重新计数";
    reset.addEventListener("click", () => {
      written = 0;
      const ae = doc.activeElement;
      if (isBlockInput(ae)) baseline.set(ae, countText(ae.value).units);
      updateButton();
      closeMenu();
    });
    status.append(text, reset);
    m.appendChild(status);

    body.appendChild(m);
    const r = btn.getBoundingClientRect();
    const w = m.offsetWidth;
    m.style.top = `${Math.round(r.bottom + 6)}px`;
    m.style.left = `${Math.round(Math.min(Math.max(8, r.left + r.width / 2 - w / 2), window.innerWidth - w - 8))}px`;
    menu = m;
    (m.querySelector('[aria-checked="true"]') || m.querySelector("button"))?.focus();
  };

  s.on(doc, "mousedown", (e) => {
    if (menu && !menu.contains(e.target)) closeMenu();
  }, true);
  s.on(doc, "keydown", (e) => {
    if (menu && e.key === "Escape") {
      e.stopPropagation();
      closeMenu();
    }
  }, true);
  s.on(window, "resize", closeMenu);

  const mountButton = () => {
    if (doc.getElementById(BTN_ID)) return;
    const bar = doc.querySelector(".rm-topbar");
    if (!bar) return;
    const btn = doc.createElement("button");
    btn.id = BTN_ID;
    btn.type = "button";
    btn.className = "bp3-button bp3-minimal";
    btn.setAttribute("aria-label", "打字机模式");
    btn.innerHTML = ICON;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMode();
    });
    btn.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      openGoalMenu();
    });
    const anchor = bar.querySelector("#delmar-random-todo-3-button");
    if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(btn, anchor);
    else bar.appendChild(btn);
    updateButton();
  };

  // 模式关闭时这些监听都立即返回，几乎没有开销
  s.on(doc, "focusin", (e) => {
    if (!modeOn() && !body.classList.contains(TYPING)) return;
    const t = e.target;
    if (isBlockInput(t)) {
      if (modeOn()) baseline.set(t, countText(t.value).units);
      schedule({ center: true });
    } else {
      schedule();
    }
  }, true);

  s.on(doc, "focusout", (e) => {
    if (!body.classList.contains(TYPING) || !isBlockInput(e.target)) return;
    schedule();
  }, true);

  s.on(doc, "input", (e) => {
    if (!modeOn() || !isBlockInput(e.target)) return;
    schedule({ center: true, input: e.target });
  }, true);

  const NAV_KEYS = new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End", "Enter"]);
  s.on(doc, "keyup", (e) => {
    if (modeOn() && NAV_KEYS.has(e.key) && isBlockInput(e.target)) schedule({ center: true });
  }, true);

  s.on(doc, "mouseup", (e) => {
    if (modeOn() && isBlockInput(e.target)) schedule({ center: true });
  }, true);

  const COMMANDS = [
    { label: "Toggle Typewriter Mode（打字机模式）", callback: toggleMode },
    { label: "Set Typewriter Goal（写作目标）", callback: () => openGoalMenu() },
  ];
  const palette = window.roamAlphaAPI && window.roamAlphaAPI.ui && window.roamAlphaAPI.ui.commandPalette;
  if (palette) COMMANDS.forEach((c) => { try { palette.addCommand(c); } catch (_) {} });

  // 旧版单独的打字机脚本若还在，先停掉
  if (window.__magTypewriter && window.__magTypewriter.destroy) window.__magTypewriter.destroy();

  mountButton();
  setMode(store.get("mag-typewriter", "0") === "1");

  return {
    sync: mountButton,
    destroy() {
      s.dispose();
      if (frame) cancelAnimationFrame(frame);
      closeMenu();
      if (palette) COMMANDS.forEach((c) => { try { palette.removeCommand({ label: c.label }); } catch (_) {} });
      doc.getElementById(BTN_ID)?.remove();
      mirror?.remove();
      body.classList.remove(TW, TYPING);
    },
  };
};
window.__magCore && window.__magCore.load("typewriter");
},

"tags": () => {
/*
 * 特殊标签 · 去掉命名空间前缀（依赖核心脚本）
 * #[[moc]]/… #[[project]]/… #project/… #[[book]]/… Giant/… Industry/… 只显示名称本身，
 * 写入 data-mag-label，由 21 特殊标签的 CSS 显示
 */
(window.__magModules = window.__magModules || {}).tags = (core) => {
  const { doc } = core;
  const LABEL_TAGS =
    '.roam-app span.rm-page-ref--tag:is([data-tag^="[[moc]]/"], [data-tag^="[[project]]/"], [data-tag^="project/"], [data-tag^="[[book]]/"], [data-tag*="Giant/"], [data-tag*="Industry/"])';
  const stripNamespace = (tag) => {
    const m = /^\[\[[^\]]+\]\]\/(.+)$/.exec(tag) || /^(?:.*?)(?:Giant|Industry|project)\/(.+)$/.exec(tag);
    return m ? m[1] : tag;
  };
  return {
    sync() {
      for (const el of doc.querySelectorAll(LABEL_TAGS)) {
        const label = stripNamespace(el.getAttribute("data-tag") || "");
        if (el.dataset.magLabel !== label) el.dataset.magLabel = label;
      }
    },
    destroy() {
      doc.querySelectorAll("[data-mag-label]").forEach((el) => delete el.dataset.magLabel);
    },
  };
};
window.__magCore && window.__magCore.load("tags");
},

"or-dropdown": () => {
/*
 * 勾叉下拉 · 标记 ✅ / ❌（依赖核心脚本）
 * 给 {{or: ❌ | ✅}} 的当前选项写入 data-mag-or="yes|no"，由 22.1 的 CSS 画成小方框
 */
(window.__magModules = window.__magModules || {}).ormark = (core) => {
  const { doc } = core;
  const YES = new Set(["✅", "✔️", "✔", "☑️", "☑"]);
  const NO = new Set(["❌", "✖️", "✖", "❎"]);
  return {
    sync() {
      for (const el of doc.querySelectorAll(".roam-app .rm-or-select .rm-option")) {
        const t = el.textContent.trim();
        const v = YES.has(t) ? "yes" : NO.has(t) ? "no" : "";
        if ((el.dataset.magOr || "") !== v) {
          if (v) el.dataset.magOr = v;
          else delete el.dataset.magOr;
        }
      }
    },
    destroy() {
      doc.querySelectorAll("[data-mag-or]").forEach((el) => delete el.dataset.magOr);
    },
  };
};
window.__magCore && window.__magCore.load("ormark");
},

"random-tasks": () => {
/*
 * Roam Random TODO 3 — v1.2
 * Weighted random + Today's DNP deduplication + 来源署名
 *
 * v1.2
 * · 每条抽出的任务后面附上来源页面：((uid)) ↳ [[页面]]
 * · 去重只看任务块本身及其上级块，不再因为「来源页面今天被提到过」而整页排除
 */
(() => {
  'use strict';

  const SINGLETON = '__DELMar_RANDOM_TODO3__';
  if (window[SINGLETON]?.destroy) window[SINGLETON].destroy();

  const api = window.roamAlphaAPI;
  if (!api?.data?.q || !api?.data?.pull || !api?.data?.block?.fromMarkdown) {
    console.error('[Random TODO 3] Roam Alpha API is unavailable.');
    return;
  }

  const CFG = {
    count: 3,
    section: '🎲 [[Random TODO 3]]',
    buttonId: 'delmar-random-todo-3-button',
    command: 'Random TODO 3: Pick 3 weighted tasks now',
    maxReferencesPerTask: 300,
    excludePage: null,
    minimumWeight: 0.55,
    maximumWeight: 5.0,
    showDebugWeightsInConsole: false,
    showSource: true,      // 是否附上来源页面
    sourcePrefix: '↳ '     // 来源前缀，可改成 '出自 '、'from ' 等
  };

  let busy = false;
  let stopped = false;
  let startTimer;
  let buttonTimer;

  const todoRx = /^\s*\{\{\s*(?:\[\[)?TODO(?:\]\])?\s*\}\}/i;
                        const roamDateRx = /\[\[((?:January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}(?:st|nd|rd|th), \d{4})\]\]/g;
                        const hasExplicitFutureDate = (text) => {
                          const start = new Date();
                          start.setHours(23, 59, 59, 999);
                          for (const match of String(text || '').matchAll(roamDateRx)) {
                            try {
                              const date = api.util.pageTitleToDate(match[1]);
                              if (date && date.getTime() > start.getTime()) return true;
                            } catch (_) {}
                          }
                          return false;
                        };
  const blockRefRx = /\(\(([A-Za-z0-9_-]{5,})\)\)/g;
  const treeSelector =
    '[:block/uid :block/string :block/order {:block/refs [:block/uid]} {:block/children ...}]';

  const today = () => {
    const now = new Date();
    const pageUid = api.util.dateToPageUid(now);
    return {
      date: pageUid,
      pageUid,
      title: api.util.dateToPageTitle(now),
      clock: now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };
  };

  const getNode = (
    uid,
    selector = '[:block/uid :block/string {:block/children [:block/uid :block/string :block/order]}]'
  ) => api.data.pull(selector, [':block/uid', uid]);

  const pullTree = uid => getNode(uid, treeSelector);

  const childrenOf = uid =>
    (getNode(uid)?.[':block/children'] || [])
      .slice()
      .sort((a, b) =>
        (a[':block/order'] ?? 0) - (b[':block/order'] ?? 0)
      );

  const create = async (parentUid, string) => {
    const uid = api.util.generateUID();
    await api.data.block.create({
      location: {
        'parent-uid': parentUid,
        order: 'last'
      },
      block: {uid, string}
    });
    return uid;
  };

  async function ensureDailyPage(day) {
    if (!getNode(day.pageUid, '[:block/uid :node/title]')) {
      try {
        await api.data.page.create({
          page: {title: day.title}
        });
      } catch (e) {
        if (!getNode(day.pageUid, '[:block/uid :node/title]')) {
          throw e;
        }
      }
    }
    return day.pageUid;
  }

  async function ensureSection(pageUid) {
    const existing = childrenOf(pageUid).find(
      x => x[':block/string'] === CFG.section
    );
    if (existing) return existing[':block/uid'];
    return create(pageUid, CFG.section);
  }

  // Find genuine unfinished TODO blocks using TODO page backlinks.
  function findTodos() {
        const policy = window.__folioRandomTodoConfig || {excludedPages:['SmartBlock','roam/templates'],excludeFuture:true};
        const excludedPages = new Set(policy.excludedPages || []);
    const rows = api.data.q(`
      [:find ?uid ?text ?pageTitle
       :where
       [?todo :node/title "TODO"]
       [?b :block/refs ?todo]
       [?b :block/uid ?uid]
       [?b :block/string ?text]
       [?b :block/page ?p]
       [?p :node/title ?pageTitle]]
    `);

    const seen = new Set();

    return rows
      .filter(([uid, text, page]) => {
        if (
          !uid ||
          seen.has(uid) || excludedPages.has(page || '') ||
          (CFG.excludePage && CFG.excludePage.test(page || ''))
        ) return false;

        if (!todoRx.test(text || '') || (policy.excludeFuture !== false && hasExplicitFutureDate(text))) return false;

        seen.add(uid);
        return true;
      })
      .map(([uid, text, page]) => ({
        uid,
        text,
        page
      }));
  }

  // Index all references anywhere in today's DNP.
  function indexTodayDNP(dayUid) {
    const refs = new Set();
    const ownBlocks = new Set();
    const tree = pullTree(dayUid);
    const stack = tree ? [tree] : [];

    while (stack.length) {
      const node = stack.pop();
      if (!node) continue;

      if (node[':block/uid']) {
        ownBlocks.add(node[':block/uid']);
      }

      const text = node[':block/string'] || '';

      for (const match of text.matchAll(blockRefRx)) {
        refs.add(match[1]);
      }

      for (const ref of node[':block/refs'] || []) {
        if (ref[':block/uid']) {
          refs.add(ref[':block/uid']);
        }
      }

      for (const child of node[':block/children'] || []) {
        stack.push(child);
      }
    }

    return {refs, ownBlocks};
  }

  function allUids(tree) {
    const result = new Set();
    const stack = tree ? [tree] : [];

    while (stack.length) {
      const n = stack.pop();
      if (!n?.[':block/uid']) continue;

      result.add(n[':block/uid']);

      for (const child of n[':block/children'] || []) {
        stack.push(child);
      }
    }

    return result;
  }

  function taskMetadata(pool) {
    const selector =
      '[:block/uid :create/time {:block/page [:block/uid]} {:block/parents [:block/uid]} {:block/children [:block/uid]}]';

    const keys = pool.map(task => [':block/uid', task.uid]);

    const results =
      typeof api.data.pull_many === 'function'
        ? api.data.pull_many(selector, keys)
        : keys.map(key => api.data.pull(selector, key));

    return pool.map((task, i) => {
      const meta = results?.[i] || {};
      const pageUid = meta[':block/page']?.[':block/uid'];

      return {
        ...task,
        created: meta[':create/time'] ?? null,
        // 上级块里去掉所在页面本身：来源链接会让页面出现在今日引用里，
        // 若不排除，同一页面的其他任务当天会被整页屏蔽
        parentUids: new Set(
          (meta[':block/parents'] || [])
            .map(p => p[':block/uid'])
            .filter(uid => uid && uid !== pageUid)
        ),
        hasChildren: !!meta[':block/children']?.length
      };
    });
  }

  // Non-AI priority scoring.
  // d/YYYY-MM-DD is a completion marker, NOT a deadline.
  function weightOf(task, nowMs) {
    const raw = task.text || '';

    const content = raw
      .replace(todoRx, '')
      .replace(/\bd\/\d{4}-\d{2}-\d{2}\b/g, '');

    const cues = content
      .replace(
        /(?:并不|不是|无需|无须|没那么|不)(?:太)?(?:紧急|重要|优先)/g,
        ''
      )
      .replace(
        /\bnot\s+(?:urgent|important|high[ -]?priority)\b/gi,
        ''
      );

    let w = 1;

    // Explicit priority tags, if present.
    if (
      /\[\[\[\[tags\]\]\/important\]\]|(?:^|\s)#important\b|\[\[important\]\]/i.test(raw)
    ) {
      w *= 2.0;
    }

    if (/\[\[\[\[GTD\]\]\/t-today\]\]/i.test(raw)) {
      w *= 1.65;
    } else if (
      /\[\[\[\[GTD\]\]\/t-this-week\]\]/i.test(raw)
    ) {
      w *= 1.30;
    }

    // Explicit urgency.
    if (
      /(紧急|尽快|马上|立刻|务必今天|今天必须|urgent|asap|due\s+today|overdue|逾期)/i.test(cues)
    ) {
      w *= 1.8;
    } else if (
      /(截止|最迟|到期|deadline|due\s*(?:date|by)?\s*[:：]|本周内|必须完成)/i.test(content)
    ) {
      w *= 1.4;
    }

    // Importance.
    if (
      /(重要|优先处理|关键事项|high[ -]?priority|priority\s*[:：]?\s*(?:1|high)|\bP1\b)/i.test(cues)
    ) {
      w *= 1.35;
    }

    // Actionability.
    const actionText = content.replace(/^[\s*\-\d.、]+/, '');

    if (
      /^(?:(?:联系|回复|提交|申请|预约|支付|缴费|投递|发送|检查|核对|确认|签署|跟进|准备|完成|修复|修改|处理|更新|购买|打印|整理|复习|分析|研究|阅读|写|问|发|找|收集|催|约)|(?:reply|send|submit|book|call|pay|apply|prepare|review|fix|update|follow up)\b)/i.test(actionText)
    ) {
      w *= 1.16;
    }

    // Aging: up to +35%.
    if (
      Number.isFinite(task.created) &&
      task.created > 0 &&
      task.created <= nowMs
    ) {
      const days = (nowMs - task.created) / 86400000;

      w *= 1 + Math.min(
        0.35,
        Math.max(0, days - 7) * 0.35 / 90
      );
    }

    // Has children.
    if (task.hasChildren) {
      w *= 1.10;
    }

    // Lower weight for someday / reading backlog.
    if (
      /(稍后读|有空再|改天再|以后再|someday|maybe later|optional)/i.test(content)
    ) {
      w *= 0.72;
    }

    return Math.max(
      CFG.minimumWeight,
      Math.min(CFG.maximumWeight, w)
    );
  }

  // Weighted random selection without replacement.
  function selectThree(pool, todayIndex) {
    const nowMs = Date.now();

    const blocked = new Set([
      ...todayIndex.refs,
      ...todayIndex.ownBlocks
    ]);

    const candidates = taskMetadata(pool)
      .filter(task => {
        if (blocked.has(task.uid)) return false;

        for (const uid of task.parentUids) {
          if (blocked.has(uid)) return false;
        }

        return true;
      })
      .map(task => {
        const weight = weightOf(task, nowMs);

        const key =
          Math.log(
            Math.max(Number.MIN_VALUE, Math.random())
          ) / weight;

        return {...task, weight, key};
      })
      .sort((a, b) => b.key - a.key);

    if (CFG.showDebugWeightsInConsole) {
      console.table(
        [...candidates]
          .sort((a, b) => b.weight - a.weight)
          .slice(0, 20)
          .map(x => ({
            task: x.text.slice(0, 70),
            weight: x.weight.toFixed(2),
            page: x.page
          }))
      );
    }

    const selected = [];
    const occupied = new Set(blocked);

    for (const task of candidates) {
      if (
        [...task.parentUids].some(
          uid => occupied.has(uid)
        )
      ) continue;

      const tree = pullTree(task.uid);

      if (
        !tree ||
        !todoRx.test(tree[':block/string'] || '')
      ) continue;

      const subtree = allUids(tree);

      if (
        [...subtree].some(
          uid => occupied.has(uid)
        )
      ) continue;

      selected.push({task, tree});

      subtree.forEach(uid => occupied.add(uid));

      if (selected.length >= CFG.count) break;
    }

    return selected;
  }

  // 来源署名：任务后面接「↳ [[页面]]」
  function sourceSuffix(page, taskText = '') {
                          if (!CFG.showSource || !page) return '';
                          if (String(taskText).includes('[[' + page + ']]') || String(taskText).includes('#[[' + page + ']]')) return '';
                          return ' ' + CFG.sourcePrefix + '[[' + page + ']]';
                        }

  // Build nested block references.
  function renderReferences(items) {
    const lines = [];

    for (const {task, tree} of items) {
      let written = 0;
      let omitted = 0;

      const stack = [{
        node: tree,
        depth: 0
      }];

      while (stack.length) {
        const {node, depth} = stack.pop();

        if (!node?.[':block/uid']) continue;

        if (written >= CFG.maxReferencesPerTask) {
          omitted++;
          continue;
        }

        // 只在任务本身那一行附来源，子块不重复
        const suffix = depth === 0 ? sourceSuffix(task.page, task.text) : '';

        lines.push(
          `${'  '.repeat(depth)}- ((${node[':block/uid']}))${suffix}`
        );

        written++;

        const children =
          (node[':block/children'] || [])
            .slice()
            .sort(
              (a, b) =>
                (a[':block/order'] ?? 0) -
                (b[':block/order'] ?? 0)
            );

        for (
          let i = children.length - 1;
          i >= 0;
          i--
        ) {
          stack.push({
            node: children[i],
            depth: depth + 1
          });
        }
      }

      if (omitted) {
        lines.push(
          '  - ⚠ 子块过多，部分引用省略，请到原任务查看。'
        );
      }
    }

    return lines.join('\n');
  }

  function notify(message, error = false) {
    if (error) {
      console.error('[Random TODO 3]', message);
    } else {
      console.info('[Random TODO 3]', message);
    }

    const b = document.getElementById(CFG.buttonId);

    if (b) b.title = message;

    if (error) {
      window.alert('Random TODO 3: ' + message);
    }
  }

  async function run(isAutomatic = false) {
    if (busy || stopped) return;

    busy = true;

    const button = document.getElementById(
      CFG.buttonId
    );

    if (button) {
      button.disabled = true;
      button.textContent = '🎲 ...';
    }

    try {
      const day = today();

      await ensureDailyPage(day);

      const sectionUid = await ensureSection(
        day.pageUid
      );

      const autoLabel =
        `🎲 自动 · ${day.date}`;

      // Only one automatic batch per day.
      if (
        isAutomatic &&
        childrenOf(sectionUid).some(
          x => x[':block/string'] === autoLabel
        )
      ) return;

      const todayIndex = indexTodayDNP(
        day.pageUid
      );

      const chosen = selectThree(
        findTodos(),
        todayIndex
      );

      if (!chosen.length) {
        notify(
          '今日 DNP 已引用现有任务，或没有新的可抽取 TODO。'
        );
        return;
      }

      const label = isAutomatic
        ? autoLabel
        : `🎲 手动 · ${day.clock}`;

      const batchUid = await create(
        sectionUid,
        `⏳ ${label}`
      );

      const markdown = renderReferences(chosen);

      const result =
        await api.data.block.fromMarkdown({
          location: {
            'parent-uid': batchUid,
            order: 'last'
          },
          'markdown-string': markdown
        });

      if (
        Array.isArray(result?.uids) &&
        result.uids.length === 0
      ) {
        throw new Error(
          'Roam did not create any reference blocks.'
        );
      }

      await api.data.block.update({
        block: {
          uid: batchUid,
          string: label
        }
      });

      notify(
        `已添加 ${chosen.length} 条加权抽取的 TODO 到 ${day.title}，并排除今日已有引用。`
      );

    } catch (err) {
      notify(
        err?.message || String(err),
        true
      );
    } finally {
      busy = false;

      const b = document.getElementById(
        CFG.buttonId
      );

      if (b) {
        b.disabled = false;
        b.textContent = '🎲 3 TODO';
      }
    }
  }

  function ensureButton() {
    if (
      stopped ||
      document.getElementById(CFG.buttonId)
    ) return;

    const topbar = document.querySelector(
      '.rm-topbar, .roam-topbar'
    );

    if (!topbar) return;

    const b = document.createElement('button');

    b.id = CFG.buttonId;
    b.type = 'button';
    b.className = 'bp3-button bp3-minimal';
    b.textContent = '🎲 3 TODO';

    b.title =
      '按规则加权随机抽取 3 条未在今日 DNP 中出现的 TODO';

    b.style.cssText =
      'margin:0 8px;white-space:nowrap;flex-shrink:0;';

    b.addEventListener(
      'click',
      () => void run(false)
    );

    topbar.appendChild(b);
  }

  async function bootstrap() {
    try {
      ensureButton();

      await api.ui.commandPalette.addCommand({
        label: CFG.command,
        callback: () => void run(false)
      });

      if (!stopped) {
        await run(true);
      }
    } catch (err) {
      console.error(
        '[Random TODO 3] Failed to start',
        err
      );
    }
  }

  window[SINGLETON] = {
    run: () => run(false),

    destroy() {
      stopped = true;

      clearTimeout(startTimer);
      clearInterval(buttonTimer);

      document.getElementById(
        CFG.buttonId
      )?.remove();

      void api.ui.commandPalette.removeCommand({
        label: CFG.command
      });
    }
  };

  ensureButton();

  buttonTimer = setInterval(
    ensureButton,
    5000
  );

  startTimer = setTimeout(
    bootstrap,
    1600
  );
})();
},

"graph-button": () => {
(() => {
  const KEY = "__magazineGraphButton";
  const ID = "magazine-graph-button";

  // 重复运行时，清理上一份
  window[KEY]?.cleanup();

  let pendingFrame = 0;
  let busy = false;
  let stopped = false;

  const findMore = () =>
    document.querySelector(
      ".roam-topbar .bp3-icon-more, .rm-topbar .bp3-icon-more"
    );

  const findGraphItem = () =>
    [...document.querySelectorAll("a.bp3-menu-item")].find(el =>
      el.querySelector(".bp3-icon-graph") &&
      el.textContent.trim() === "Open Graph View" &&
      el.getClientRects().length > 0
    );

  function waitForGraphItem() {
    return new Promise((resolve, reject) => {
      const existing = findGraphItem();
      if (existing) return resolve(existing);

      const observer = window.__magCore.watch("runner:graph-button:1", () => {
        const item = findGraphItem();
        if (!item) return;

        observer.disconnect();
        clearTimeout(timeout);
        resolve(item);
      });

      const timeout = setTimeout(() => {
        observer.disconnect();
        reject(new Error("当前菜单没有可用的 Open Graph View"));
      }, 2000);

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }

  async function openGraph(event) {
    event.preventDefault();
    event.stopPropagation();
    if (busy || stopped) return;

    const more = findMore();
    if (!more) return;

    busy = true;
    const button = event.currentTarget;
    button.disabled = true;

    try {
      let item = findGraphItem();

      if (!item) {
        more.click();
        item = await waitForGraphItem();
      }

      if (!stopped) item.click();
    } catch (error) {
      console.warn("[Magazine Graph View]", error.message);
    } finally {
      busy = false;
      button.disabled = false;
    }
  }

  function install() {
    if (stopped) return;

    const more = findMore();
    if (!more || document.getElementById(ID)) return;

    const toolbar = more.closest(".roam-topbar, .rm-topbar");
    let anchor = more.closest(".bp3-popover-wrapper") || more;

    // 找到包着三点按钮的最外层弹出菜单容器
    while (anchor.parentElement) {
      const parent = anchor.parentElement.closest(".bp3-popover-wrapper");
      if (!parent || !toolbar.contains(parent)) break;
      anchor = parent;
    }

    const button = document.createElement("button");
    button.id = ID;
    button.type = "button";
    button.className = "bp3-button bp3-minimal bp3-small";
    button.title = "Open Graph View";
    button.setAttribute("aria-label", "Open Graph View");

    // 使用原菜单的图标形状
    button.innerHTML = `
      <span class="bp3-icon bp3-icon-graph" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16"
             fill="currentColor">
          <path fill-rule="evenodd"
            d="M14 3c-1.06 0-1.92.83-1.99 1.88l-1.93.97A2.95 2.95 0 008 5c-.56 0-1.08.16-1.52.43L3.97 3.34C3.98 3.23 4 3.12 4 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.24 0 .47-.05.68-.13l2.51 2.09C5.08 7.29 5 7.63 5 8c0 .96.46 1.81 1.16 2.35l-.56 1.69c-.91.19-1.6.99-1.6 1.96 0 1.1.9 2 2 2s2-.9 2-2c0-.51-.2-.97-.51-1.32l.56-1.69A2.99 2.99 0 0011 8c0-.12-.02-.24-.04-.36l1.94-.97c.32.21.69.33 1.1.33 1.1 0 2-.9 2-2-2z"/>
        </svg>
      </span>`;

    button.addEventListener("click", openGraph);
    anchor.before(button);
  }

  const observer = window.__magCore.watch("runner:graph-button:2", () => {
    if (pendingFrame) return;
    pendingFrame = requestAnimationFrame(() => {
      pendingFrame = 0;
      install();
    });
  });

  window[KEY] = {
    cleanup() {
      stopped = true;
      observer.disconnect();
      cancelAnimationFrame(pendingFrame);
      document.getElementById(ID)?.remove();
      delete window[KEY];
    }
  };

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  install();
})();
},

"daily-masthead": () => {
/*
 * 日记页刊头（依赖核心脚本）
 * 日记页标题上方显示 VOL. 2026 · NO. 298 · SUNDAY，写入 data-mag-masthead；
 * 刊头右侧显示这一天距年底还剩多少天（62 DAYS LEFT），写入标题外层的 data-mag-days-left，
 * 最后 30 天另加 data-mag-days-urgent。都由 04 的 CSS 显示
 */
(window.__magModules = window.__magModules || {}).masthead = (core) => {
  const { doc } = core;
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const WEEKDAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  // 只匹配开头：有的扩展会在标题后面追加计数等文字
  const DNP_RE = new RegExp(`^(${MONTHS.join("|")}) (\\d{1,2})(?:st|nd|rd|th), (\\d{4})`);
  const URGENT_DAYS = 30; // 剩余天数不超过这个值时，小签变砖红
  const mastheadFor = (title) => {
    const m = DNP_RE.exec(title);
    if (!m) return null;
    const year = Number(m[3]);
    const t = Date.UTC(year, MONTHS.indexOf(m[1]), Number(m[2]));
    const no = Math.round((t - Date.UTC(year, 0, 1)) / 864e5) + 1;
    const total = Math.round((Date.UTC(year + 1, 0, 1) - Date.UTC(year, 0, 1)) / 864e5); // 闰年 366
    const left = total - no;
    return {
      text: `VOL. ${year}  ·  NO. ${String(no).padStart(3, "0")}  ·  ${WEEKDAYS[new Date(t).getUTCDay()]}`,
      left: left === 0 ? "LAST DAY OF THE YEAR" : `${left} ${left === 1 ? "DAY" : "DAYS"} LEFT`,
      urgent: left <= URGENT_DAYS,
    };
  };
  return {
    sync() {
      for (const el of doc.querySelectorAll(".roam-body-main .rm-title-display")) {
        const title = el.textContent.trim();
        if (el.dataset.magTitle === title) continue;
        el.dataset.magTitle = title;
        const info = mastheadFor(title);
        const box = el.parentElement && el.parentElement.matches(".rm-title-display-container") ? el.parentElement : null;
        if (info) el.dataset.magMasthead = info.text;
        else delete el.dataset.magMasthead;
        if (box) {
          if (info) box.dataset.magDaysLeft = info.left;
          else delete box.dataset.magDaysLeft;
          box.toggleAttribute("data-mag-days-urgent", !!(info && info.urgent));
        }
      }
    },
    destroy() {
      doc.querySelectorAll("[data-mag-masthead], [data-mag-title], [data-mag-days-left], [data-mag-days-urgent]").forEach((el) => {
        delete el.dataset.magMasthead;
        delete el.dataset.magTitle;
        delete el.dataset.magDaysLeft;
        el.removeAttribute("data-mag-days-urgent");
      });
    },
  };
};
window.__magCore && window.__magCore.load("masthead");
},

"code-tools": () => {
(() => {
  const KEY = "__magCodeBottom";
  const STYLE_ID = "mag-code-tools-style";

  window[KEY]?.stop();
  document.getElementById(STYLE_ID)?.remove();

  document.querySelectorAll(
    ".mag-code-tools, .mag-code-search, .mag-code-bottom"
  ).forEach(el => el.remove());

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    html body .rm-code-block__settings-bar {
      display: flex !important;
      align-items: center !important;
      justify-content: flex-end !important;
      gap: 5px !important;
    }

    html body .mag-code-tools {
      display: inline-flex !important;
      align-items: center !important;
      flex: 0 0 auto !important;
      gap: 2px;
      order: 0;
    }

    html body .rm-code-block__language-chooser {
      order: 1;
    }

    html body :is(.mag-code-tools, .mag-code-search) button {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex: 0 0 auto !important;
      width: 27px !important;
      height: 27px !important;
      min-width: 27px !important;
      margin: 0 !important;
      padding: 5px !important;
      color: var(--mag-muted, #666675) !important;
      background: transparent !important;
      border: 0 !important;
      border-radius: 5px !important;
      box-shadow: none !important;
      cursor: pointer !important;
    }

    html body :is(.mag-code-tools, .mag-code-search) button:hover,
    html body .mag-code-tools button[aria-expanded="true"] {
      color: var(--mag-ink, #1a1a2e) !important;
      background: var(--mag-yellow-soft, #f5ecc9) !important;
    }

    html body :is(.mag-code-tools, .mag-code-search)
    button:focus-visible {
      outline: 1px solid #b79a37 !important;
      outline-offset: 2px !important;
    }

    html body :is(.mag-code-tools, .mag-code-search) button svg {
      display: block !important;
      width: 16px !important;
      height: 16px !important;
      fill: none !important;
      stroke: currentColor !important;
      stroke-width: 1.6 !important;
      stroke-linecap: round !important;
      stroke-linejoin: round !important;
    }

    html body .mag-code-tools button[data-state="success"] {
      color: #52794e !important;
    }

    html body .mag-code-tools button[data-state="error"] {
      color: #a0443d !important;
    }

    html body .mag-code-search {
      display: flex !important;
      align-items: center !important;
      flex-wrap: wrap;
      gap: 4px;
      box-sizing: border-box;
      margin: 8px 10px;
      padding: 6px 8px;
      color: var(--mag-muted, #666675);
      background: var(--mag-paper, #fefcf6);
      border: 1px solid var(--mag-border, #e8e0cf);
      border-radius: 6px;
      font-family: var(--mag-body, sans-serif);
    }

    html body .mag-code-search[hidden] {
      display: none !important;
    }

    html body .mag-code-search input {
      flex: 1 1 120px;
      min-width: 80px;
      height: 26px;
      box-sizing: border-box;
      padding: 3px 5px;
      color: var(--mag-ink, #1a1a2e) !important;
      background: transparent !important;
      border: 0 !important;
      border-radius: 3px;
      box-shadow: none !important;
      font: 12px/1.5 var(--mag-body, sans-serif);
    }

    html body .mag-code-search input:focus {
      outline: 1px solid #b79a37 !important;
    }

    .mag-code-search-count {
      font-size: 11px;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
      padding: 0 4px;
    }
  `;
  document.head.append(style);

  const paths = {
    top: '<path d="M4 4h16M12 20V8m-5 5 5-5 5 5"/>',
    bottom: '<path d="M4 20h16M12 4v12m-5-5 5 5 5-5"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/>' +
            '<path d="m16 16 5 5"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/>' +
          '<path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
    prev: '<path d="m6 14 6-6 6 6"/>',
    next: '<path d="m6 10 6 6 6-6"/>',
    close: '<path d="m7 7 10 10M17 7 7 17"/>',
    done: '<path d="m5 12 4 4L19 6"/>',
    error: '<path d="m7 7 10 10M17 7 7 17"/>'
  };

  const icon = name =>
    `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;

  const installed = new Map();
  const pending = new Set();
  const timers = new Set();
  let frame = 0;
  let stopped = false;

  function later(fn, delay) {
    const id = setTimeout(() => {
      timers.delete(id);
      if (!stopped) fn();
    }, delay);
    timers.add(id);
    return id;
  }

  function cancel(id) {
    clearTimeout(id);
    timers.delete(id);
  }

  function validView(view) {
    return Boolean(
      view?.state?.doc &&
      typeof view.state.doc.toString === "function" &&
      typeof view.dispatch === "function"
    );
  }

  function getView(block) {
    const content = block.querySelector(".cm-editor .cm-content");
    if (!content) return null;

    // 从 CM6 DOM 的关联视图获取实例；不读取虚拟渲染文本。
    let node = content.cmView;

    for (let i = 0; node && i < 12; i++) {
      if (validView(node.view)) return node.view;

      try {
        if (validView(node.rootView?.view)) {
          return node.rootView.view;
        }
      } catch {}

      node = node.parent;
    }

    return null;
  }

  function requireView(block) {
    const view = getView(block);
    if (!view) throw new Error("无法访问 CM6 文档实例");
    return view;
  }

  function button(name, title, action) {
    const el = document.createElement("button");
    el.type = "button";
    el.title = title;
    el.setAttribute("aria-label", title);
    el.innerHTML = icon(name);

    el.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      action(el);
    });

    return el;
  }

  function scroll(block, bottom) {
    const view = getView(block);
    const effect = view?.constructor?.scrollIntoView;

    if (view && typeof effect === "function") {
      view.dispatch({
        effects: effect.call(
          view.constructor,
          bottom ? view.state.doc.length : 0,
          { y: bottom ? "end" : "start", yMargin: 0 }
        )
      });
      return;
    }

    const scroller = block.querySelector(".cm-scroller");
    scroller?.scrollTo({
      top: bottom ? scroller.scrollHeight : 0,
      behavior: "auto"
    });
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      const active = document.activeElement;
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.readOnly = true;
      textarea.style.cssText =
        "position:fixed;left:-9999px;top:0;opacity:0;";
      document.body.append(textarea);

      try {
        textarea.focus({ preventScroll: true });
        textarea.select();
        if (!document.execCommand("copy")) {
          throw new Error("浏览器未允许复制");
        }
      } finally {
        textarea.remove();
        active?.focus?.({ preventScroll: true });
      }
    }
  }

  function feedback(el, ok, message) {
    if (stopped || !el.isConnected) return;

    el.dataset.state = ok ? "success" : "error";
    el.innerHTML = icon(ok ? "done" : "error");
    el.title = message;

    later(() => {
      if (!el.isConnected) return;
      delete el.dataset.state;
      el.innerHTML = icon("copy");
      el.title = "复制全部代码";
    }, 1600);
  }

  function createSearch(block, searchButton) {
    const panel = document.createElement("div");
    panel.className = "mag-code-search";
    panel.hidden = true;

    const input = document.createElement("input");
    input.type = "search";
    input.placeholder = "搜索当前代码块…";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.setAttribute("aria-label", "搜索当前代码块");

    const count = document.createElement("span");
    count.className = "mag-code-search-count";
    count.setAttribute("role", "status");
    count.textContent = "0 / 0";

    let hits = [];
    let current = -1;
    let lastDoc = null;
    let lastQuery = null;
    let debounce = null;

    function search(direction = 0) {
      try {
        const view = requireView(block);
        const doc = view.state.doc;
        const query = input.value;
        const changed = doc !== lastDoc || query !== lastQuery;

        if (changed) {
          lastDoc = doc;
          lastQuery = query;
          hits = [];
          current = -1;

          if (query) {
            const escaped = query.replace(
              /[.*+?^${}()|[\]\\]/g, "\\$&"
            );
            const pattern = new RegExp(escaped, "gi");
            const text = doc.toString();
            let match;

            while ((match = pattern.exec(text))) {
              hits.push({
                from: match.index,
                to: match.index + match[0].length
              });
            }
          }
        }

        if (!hits.length) {
          count.textContent = query ? "无结果" : "0 / 0";
          return;
        }

        if (changed || current < 0) {
          current = direction < 0 ? hits.length - 1 : 0;
        } else if (direction) {
          current =
            (current + direction + hits.length) % hits.length;
        }

        const hit = hits[current];

        // 选中匹配文字并滚动到它，不修改文档。
        view.dispatch({
          selection: { anchor: hit.from, head: hit.to },
          scrollIntoView: true
        });

        count.textContent = `${current + 1} / ${hits.length}`;
      } catch (error) {
        count.textContent = "无法读取文档";
        console.warn("[Magazine code tools]", error);
      }
    }

    function close() {
      cancel(debounce);
      panel.hidden = true;
      searchButton.setAttribute("aria-expanded", "false");
      searchButton.focus({ preventScroll: true });
    }

    panel.append(
      input,
      count,
      button("prev", "上一个 · Shift + Enter", () => search(-1)),
      button("next", "下一个 · Enter", () => search(1)),
      button("close", "关闭搜索 · Esc", close)
    );

    // 搜索栏位于编辑器外，避免覆盖代码。
    block.prepend(panel);
    panel.addEventListener("click", event => event.stopPropagation());

    input.addEventListener("input", () => {
      cancel(debounce);
      debounce = later(() => search(), 150);
    });

    input.addEventListener("keydown", event => {
      event.stopPropagation();

      if (event.key === "Enter") {
        event.preventDefault();
        cancel(debounce);
        search(event.shiftKey ? -1 : 1);
      } else if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    });

    return {
      panel,

      toggle() {
        if (!panel.hidden) {
          close();
          return;
        }

        panel.hidden = false;
        searchButton.setAttribute("aria-expanded", "true");
        input.focus({ preventScroll: true });
        input.select();
        search();
      },

      dispose() {
        cancel(debounce);
        panel.remove();
      }
    };
  }

  function remove(entry) {
    entry.search.dispose();
    entry.group.remove();
  }

  function install(block) {
    if (!block.isConnected) return;

    const bar = block.querySelector(".rm-code-block__settings-bar");
    if (!bar || !block.querySelector(".cm-editor")) return;

    const previous = installed.get(block);

    if (
      previous?.group.parentElement === bar &&
      previous.search.panel.isConnected
    ) return;

    if (previous) {
      remove(previous);
      installed.delete(block);
    }

    const group = document.createElement("span");
    group.className = "mag-code-tools";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", "代码块操作");

    const searchButton = button(
      "search", "搜索当前代码块", () => search.toggle()
    );
    searchButton.setAttribute("aria-expanded", "false");

    const search = createSearch(block, searchButton);

    group.append(
      button("top", "滚动到代码块顶部", () => scroll(block, false)),
      button("bottom", "滚动到代码块底部", () => scroll(block, true)),
      searchButton,
      button("copy", "复制全部代码", async el => {
        try {
          const view = requireView(block);
          await copyText(view.state.doc.toString());
          feedback(el, true, "已复制全部代码");
        } catch (error) {
          feedback(el, false, error.message);
          console.warn("[Magazine code tools]", error);
        }
      })
    );

    const chooser = bar.querySelector(".rm-code-block__language-chooser");
    bar.insertBefore(
      group,
      chooser?.parentElement === bar ? chooser : bar.firstChild
    );

    installed.set(block, { group, search });
  }

  function queue(block) {
    if (!block || stopped) return;

    const entry = installed.get(block);
    if (
      entry?.group.isConnected &&
      entry.search.panel.isConnected
    ) return;

    pending.add(block);
    if (frame) return;

    frame = requestAnimationFrame(() => {
      frame = 0;
      pending.forEach(install);
      pending.clear();
    });
  }

  const observer = window.__magCore.watch("runner:code-tools:1", records => {
    for (const [block, entry] of installed) {
      if (!block.isConnected) {
        remove(entry);
        installed.delete(block);
      }
    }

    for (const record of records) {
      if (record.target instanceof Element) {
        queue(record.target.closest(".rm-code-block"));
      }

      for (const node of record.addedNodes) {
        if (!(node instanceof Element)) continue;

        queue(node.closest(".rm-code-block"));
        node.querySelectorAll(".rm-code-block").forEach(queue);
      }
    }
  });

  document.querySelectorAll(".rm-code-block").forEach(queue);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  window[KEY] = {
    stop() {
      stopped = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      timers.clear();
      pending.clear();
      installed.forEach(remove);
      installed.clear();
      style.remove();
    }
  };
})();
},

"weight": () => {
/*
 * 29b 版面权重（依赖核心脚本 + 页面信息）
 * 当前页面里被引用越多的块，字号越大、改用衬线（2 / 4 / 8 次三档）；
 * 只为被引用过的块生成规则，切换页面或编辑后更新
 */
(window.__magModules = window.__magModules || {}).weight = (core) => {
  const CONFIG = { refs: [2, 4, 8] };
  const { doc } = core;
  const Q_BLOCK_REFS =
    "[:find ?u (count ?r) :in $ ?uid :where [?p :block/uid ?uid] [?b :block/page ?p] [?b :block/uid ?u] [?r :block/refs ?b]]";

  let styleEl = null;
  const writeCss = (css) => {
    if (!styleEl) {
      styleEl = doc.createElement("style");
      styleEl.id = "mag-dyn-weight";
      doc.head.appendChild(styleEl);
    }
    if (styleEl.textContent !== css) styleEl.textContent = css;
  };

  const build = (counts) => {
    const levels = [[], [], []];
    const [t1, t2, t3] = CONFIG.refs;
    for (const [uid, n] of counts) {
      if (!/^[\w-]+$/.test(uid)) continue;
      if (n >= t3) levels[2].push(uid);
      else if (n >= t2) levels[1].push(uid);
      else if (n >= t1) levels[0].push(uid);
    }
    return levels
      .map((uids, i) => {
        if (!uids.length) return "";
        const n = i + 1;
        const sel = uids.map((u) => `[data-block-uid="${u}"]`).join(",");
        return (
          `.roam-app .rm-block:is(${sel}):not([class*="rm-heading-level"])>.rm-block-main{` +
          `--mag-w-size:var(--mag-w${n}-size);--mag-w-weight:var(--mag-w${n}-weight);` +
          `--mag-w-font:var(--mag-w${n}-font);--mag-w-leading:var(--mag-w${n}-leading)}\n`
        );
      })
      .join("");
  };

  let seen = "";
  let busy = false;

  return {
    sync() {
      const P = window.__magPage;
      if (!P) return;
      const key = `${P.id}:${P.rev}`;
      if (key === seen || busy) return;
      seen = key;
      if (!P.uid) {
        writeCss("");
        return;
      }
      busy = true;
      const uid = P.uid;
      P.query(Q_BLOCK_REFS, uid).then((rows) => {
        busy = false;
        if (P.uid === uid) writeCss(build(rows || []));
        core.scheduleSync();
      });
    },
    destroy() {
      styleEl?.remove();
    },
  };
};
window.__magCore && window.__magCore.load("weight");
},

"page-engine": () => {
/*
 * 页面信息（必要：28 页面数据行、29 版面权重、31 页面脉搏、32 属性资料卡 都依赖它；依赖核心脚本）
 * 记录主窗口当前打开的是哪个页面，并在切换页面、或离开一个被编辑的块 1.5 秒后标记「已更新」。
 * 各功能模块看到更新后各自查询，互不依赖，可以单独开关。
 * 对外提供 window.__magPage：{ uid, title, isDaily, rev, id, query(), mainArticle(), titleEl() }
 */
(window.__magModules = window.__magModules || {}).page = (core) => {
  const { doc } = core;
  const s = core.scope();

  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const DNP_RE = new RegExp(`^(${MONTHS.join("|")}) (\\d{1,2})(?:st|nd|rd|th), (\\d{4})`);

  const query = async (q, ...args) => {
    const api = window.roamAlphaAPI;
    if (!api) return null;
    try {
      const asyncQ = api.data && api.data.async && api.data.async.q;
      return await (asyncQ ? asyncQ(q, ...args) : api.q(q, ...args));
    } catch (_) {
      return null;
    }
  };

  // 当前主窗口打开的是页面（不是日记流、不是放大的块）时返回 { uid, title }
  const openPage = async () => {
    const api = window.roamAlphaAPI;
    const mw = api && api.ui && api.ui.mainWindow;
    if (!mw || !mw.getOpenPageOrBlockUid) return null;
    let uid = null;
    try { uid = await mw.getOpenPageOrBlockUid(); } catch (_) { return null; }
    if (!uid) return null;
    try {
      const node = api.pull("[:node/title]", [":block/uid", uid]);
      return node && node[":node/title"] ? { uid, title: node[":node/title"] } : null;
    } catch (_) {
      return null;
    }
  };

  const mainArticle = () => doc.querySelector(".roam-body-main > .rm-article-wrapper .roam-article");

  const state = {
    id: Math.random().toString(36).slice(2),
    uid: null,
    title: "",
    isDaily: false,
    rev: 0,
    query,
    mainArticle,
    titleEl() {
      const article = state.uid ? mainArticle() : null;
      return article ? article.querySelector(".rm-title-display") : null;
    },
  };
  window.__magPage = state;

  let routeKey = null;
  let dirty = true;
  let busy = false;
  let timer = 0;

  // 离开一个被编辑过的块后，稍等再标记更新，避免边写边算
  s.on(doc, "focusout", (e) => {
    if (!core.isBlockInput(e.target) || !e.target.closest(".roam-body-main")) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      dirty = true;
      core.scheduleSync();
    }, 1500);
  }, true);

  const refresh = async () => {
    busy = true;
    dirty = false;
    const key = location.hash;
    const info = await openPage();
    busy = false;
    // API 尚未就绪时下次照常再问
    routeKey = info || window.roamAlphaAPI ? key : null;
    state.uid = info ? info.uid : null;
    state.title = info ? info.title : "";
    state.isDaily = !!info && DNP_RE.test(info.title);
    state.rev += 1;
    core.scheduleSync();
  };

  return {
    sync() {
      if (!busy && (dirty || location.hash !== routeKey)) refresh();
    },
    destroy() {
      s.dispose();
      clearTimeout(timer);
      if (window.__magPage === state) delete window.__magPage;
    },
  };
};
window.__magCore && window.__magCore.load("page");
},

"property-card": () => {
/*
 * 32 属性资料卡（依赖核心脚本 + 页面信息）
 * 页面第一个块只写类型标签（如 #Goal、#class）且下面有子块时，整块排成资料卡；
 * 属性行（xxx::）标记 data-mag-attr 排成两列，其他内容照常；右上角箭头折叠整张卡
 */
(window.__magModules = window.__magModules || {}).card = (core) => {
  const { doc } = core;
  const s = core.scope();

  // 页面首块及其子块：不依赖 DOM，折叠后也能识别
  const Q_FIRST_BLOCK =
    "[:find ?u ?fs ?cu ?s :in $ ?uid :where [?p :block/uid ?uid] [?p :block/children ?f] [?f :block/order 0] [?f :block/uid ?u] [?f :block/string ?fs] [?f :block/children ?c] [?c :block/uid ?cu] [?c :block/string ?s]]";
  // 首块只由标签组成：#Goal、#class、#[[Some Type]]（可以有多个）
  const tagOnly = (value) => {
    let rest = String(value).trim();
    while (rest) {
      if (!rest.startsWith("#")) return false;
      rest = rest.slice(1);
      if (rest.startsWith("[[")) {
        let depth = 0, end = -1;
        for (let i = 0; i < rest.length - 1; i++) {
          if (rest.slice(i, i + 2) === "[[") { depth++; i++; }
          else if (rest.slice(i, i + 2) === "]]") { depth--; i++; if (!depth) { end = i + 1; break; } }
        }
        if (end < 0) return false;
        rest = rest.slice(end).replace(/^\/[^\s#]+/, "");
      } else {
        const match = /^[^\s#\[\]]+/.exec(rest);
        if (!match) return false;
        rest = rest.slice(match[0].length);
      }
      rest = rest.trimStart();
    }
    return Boolean(String(value).trim());
  };
  const ATTR_RE = /^[^:\n`]{1,80}::/;
  const OUTSIDE = ".rm-reference-main, .rm-mentions, .rm-reference-container, .rm-inline-references, .rm-embed-container";

  let styleEl = null;
  const writeCss = (css) => {
    if (!styleEl) {
      styleEl = doc.createElement("style");
      styleEl.id = "mag-dyn-card";
      doc.head.appendChild(styleEl);
    }
    if (styleEl.textContent !== css) styleEl.textContent = css;
  };

  let seen = "";
  let busy = false;
  let cardUid = null;
  let attrs = new Set();

  const findCard = () => {
    const P = window.__magPage;
    if (!P || !P.uid || !cardUid) return null;
    const article = P.mainArticle();
    const host = article;
    if (!host || host.closest(OUTSIDE)) return null;
    return [...host.querySelectorAll(`.rm-block[data-block-uid="${cardUid}"]`)].find(el => !el.closest(OUTSIDE)) || null;
  };

  const apply = () => {
    const card = findCard();
    doc.querySelectorAll(".roam-body-main [data-mag-props]").forEach((el) => {
      if (el !== card) delete el.dataset.magProps;
    });
    let css = "";
    if (card) {
      if (!("magProps" in card.dataset)) card.dataset.magProps = "";
      for (const row of card.querySelectorAll(":scope > .rm-block-children > .rm-block")) {
        const isAttr = attrs.has(row.dataset.blockUid);
        if (isAttr !== row.hasAttribute("data-mag-attr")) row.toggleAttribute("data-mag-attr", isAttr);
      }
      // 底板：左边缘对齐标题，右边缘对齐正文右缘（留 14px）
      const title = window.__magPage.titleEl();
      if (title) {
        const box = card.getBoundingClientRect();
        const view = card.querySelector(":scope > .rm-block-main > .rm-block__input");
        const left = Math.max(0, Math.round(title.getBoundingClientRect().left - box.left));
        const right = view ? Math.max(0, Math.round(box.right - view.getBoundingClientRect().right - 14)) : 0;
        css = `.roam-body-main .rm-block[data-mag-props]{--mag-card-l:${left}px;--mag-card-r:${right}px}\n`;
      }
    }
    writeCss(css);
  };

  // 右上角的折叠箭头（::after）：点在箭头范围内才折叠 / 展开
  s.on(doc, "click", (e) => {
    const card = e.target;
    if (!(card instanceof HTMLElement) || !card.matches(".roam-body-main .rm-block[data-mag-props]")) return;
    const uid = card.dataset.blockUid;
    const api = window.roamAlphaAPI;
    if (!uid || !api || !api.data || !api.data.block) return;
    const ps = getComputedStyle(card, "::after");
    const box = card.getBoundingClientRect();
    const right = box.right - (parseFloat(ps.right) || 0);
    const left = right - (parseFloat(ps.width) || 24);
    const top = box.top + (parseFloat(ps.top) || 0);
    const bottom = top + (parseFloat(ps.height) || 24);
    if (e.clientX < left || e.clientX > right || e.clientY < top || e.clientY > bottom) return;
    e.preventDefault();
    e.stopPropagation();
    api.data.block.update({ block: { uid, open: card.classList.contains("rm-block--closed") } });
  }, true);

  return {
    sync() {
      const P = window.__magPage;
      if (!P) return;
      const key = `${P.id}:${P.rev}`;
      if (key !== seen && !busy) {
        if (!P.uid) {
          seen = key;
          cardUid = null;
          attrs = new Set();
        } else {
          busy = true;
          const uid = P.uid;
          P.query(Q_FIRST_BLOCK, uid).then((rows) => {
            busy = false;
            if (P.uid === uid && `${P.id}:${P.rev}` === key) {
              seen = key;
              rows = rows || [];
              const head = rows.length ? rows[0] : null;
              const kids = rows.filter((row) => (row[3] || "").trim());
              const isCard = !!head && kids.length > 0 && tagOnly(head[1] || "") && /^[\w-]+$/.test(head[0]);
              cardUid = isCard ? head[0] : null;
              attrs = new Set(isCard ? kids.filter((row) => ATTR_RE.test(row[3])).map((row) => row[2]) : []);
            }
            core.scheduleSync();
          });
        }
      }
      apply();
    },
    destroy() {
      s.dispose();
      styleEl?.remove();
      doc.querySelectorAll("[data-mag-props]").forEach((el) => delete el.dataset.magProps);
      doc.querySelectorAll("[data-mag-attr]").forEach((el) => el.removeAttribute("data-mag-attr"));
    },
  };
};
window.__magCore && window.__magCore.load("card");
},

"images": () => {
/*
 * 22.3 图注（依赖核心脚本）
 * 写成 ![图注](图片链接) 时，把图注写入 data-mag-caption，由 22.3 的 CSS 显示在图片下方
 */
(window.__magModules = window.__magModules || {}).captions = (core) => {
  const { doc } = core;
  return {
    sync() {
      for (const img of doc.querySelectorAll(".roam-app img.rm-inline-img")) {
        const box = img.closest(".rm-inline-img__resize") || img.parentElement;
        if (!box) continue;
        const alt = (img.getAttribute("alt") || "").trim();
        const cap = alt && alt !== img.getAttribute("src") && alt.toLowerCase() !== "image" ? alt : "";
        if ((box.dataset.magCaption || "") !== cap) {
          if (cap) box.dataset.magCaption = cap;
          else delete box.dataset.magCaption;
        }
      }
    },
    destroy() {
      doc.querySelectorAll("[data-mag-caption]").forEach((el) => delete el.dataset.magCaption);
    },
  };
};
window.__magCore && window.__magCore.load("captions");
},

"page-stats": () => {
/*
 * 28 页面数据行（依赖核心脚本 + 页面信息）
 * 标题下方：CHARS · WORDS · MIN READ · UPDATED（中文按字、西文按词）
 */
(window.__magModules = window.__magModules || {}).stats = (core) => {
  const CONFIG = {
    lang: "en",          // 数据行文字："en" 或 "zh"
    minUnits: 30,        // 少于这么多字词的页面不显示
    cjkPerMinute: 400,   // 中文阅读速度（字 / 分钟）
    wordsPerMinute: 230, // 西文阅读速度（词 / 分钟）
  };
  const { doc } = core;

  const CJK_RE = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\u3040-\u30ff\uac00-\ud7af]/g;
  const WORD_RE = /[A-Za-z0-9\u00c0-\u024f]+(?:['’-][A-Za-z0-9\u00c0-\u024f]+)*/g;
  const stripRoam = (s) =>
    s
      .replace(/`{3}[\s\S]*?`{3}/g, " ")      // 代码块（写成 `{3} 以免截断 Roam 代码块）
      .replace(/`[^`\n]*`/g, " ")               // 行内代码
      .replace(/\{\{[^{}]*\}\}/g, " ")          // {{组件}}
      .replace(/\(\([^()]*\)\)/g, " ")          // ((块引用))
      .replace(/https?:\/\/\S+/g, " ")          // 链接地址
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1") // [别名](目标) 只留别名
      .replace(/^[^\n:]{1,60}::/gm, " ")        // 属性名::
      .replace(/\[\[|\]\]|\*\*|__|\^\^|~~|#/g, " ");
  const countText = (s) => {
    if (!s) return { cjk: 0, words: 0 };
    const text = stripRoam(s);
    const cjk = (text.match(CJK_RE) || []).length;
    const words = (text.replace(CJK_RE, " ").match(WORD_RE) || []).length;
    return { cjk, words };
  };

  const Q_STRINGS =
    "[:find ?b ?s :in $ ?uid :where [?p :block/uid ?uid] [?b :block/page ?p] [?b :block/string ?s]]";
  const Q_EDITED =
    "[:find (max ?t) . :in $ ?uid :where [?p :block/uid ?uid] [?b :block/page ?p] [?b :edit/time ?t]]";

  const fmtNum = (n) => n.toLocaleString("en-US");
  const fmtDate = (ms) => {
    const d = new Date(ms);
    if (CONFIG.lang === "en") return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  };
  const textFor = ({ cjk, words, last }) => {
    const en = CONFIG.lang !== "zh";
    const minutes = Math.max(1, Math.round(cjk / CONFIG.cjkPerMinute + words / CONFIG.wordsPerMinute));
    const parts = [];
    if (cjk) parts.push(en ? `${fmtNum(cjk)} chars` : `${fmtNum(cjk)} 字`);
    if (words) parts.push(en ? `${fmtNum(words)} ${words === 1 ? "word" : "words"}` : `${fmtNum(words)} 词`);
    parts.push(en ? `${minutes} min read` : `约 ${minutes} 分钟读完`);
    if (last) parts.push(en ? `Updated ${fmtDate(last)}` : `更新于 ${fmtDate(last)}`);
    return parts.join("  ·  ");
  };

  let seen = "";
  let busy = false;
  let text = "";

  const apply = () => {
    const P = window.__magPage;
    const title = P ? P.titleEl() : null;
    doc.querySelectorAll(".roam-body-main [data-mag-stats]").forEach((el) => {
      if (el !== title || !text) delete el.dataset.magStats;
    });
    if (title && text && title.dataset.magStats !== text) title.dataset.magStats = text;
  };

  return {
    sync() {
      const P = window.__magPage;
      if (!P) return;
      const key = `${P.id}:${P.rev}`;
      if (key !== seen && !busy) {
        seen = key;
        if (!P.uid) {
          text = "";
        } else {
          busy = true;
          const uid = P.uid;
          Promise.all([P.query(Q_STRINGS, uid), P.query(Q_EDITED, uid)]).then(([strings, edited]) => {
            busy = false;
            if (P.uid === uid) {
              let cjk = 0;
              let words = 0;
              for (const row of strings || []) {
                const c = countText(row[1]);
                cjk += c.cjk;
                words += c.words;
              }
              text = cjk + words >= CONFIG.minUnits ? textFor({ cjk, words, last: Number(edited) || 0 }) : "";
            }
            core.scheduleSync();
          });
        }
      }
      apply();
    },
    destroy() {
      doc.querySelectorAll("[data-mag-stats]").forEach((el) => delete el.dataset.magStats);
    },
  };
};
window.__magCore && window.__magCore.load("stats");
},

"pulse": () => {
/*
 * 31 页面脉搏（依赖核心脚本 + 页面信息）
 * 普通页面标题上方：近 12 周被提及次数 + 折线；日记页不显示（那里是刊头）
 */
(window.__magModules = window.__magModules || {}).pulse = (core) => {
  const CONFIG = { weeks: 12 };
  const { doc } = core;
  const DAY = 864e5;
  const Q_PAGE_REFS =
    "[:find ?b ?t :in $ ?uid :where [?p :block/uid ?uid] [?b :block/refs ?p] [?b :create/time ?t]]";

  let styleEl = null;
  const writeCss = (css) => {
    if (!styleEl) {
      styleEl = doc.createElement("style");
      styleEl.id = "mag-dyn-pulse";
      doc.head.appendChild(styleEl);
    }
    if (styleEl.textContent !== css) styleEl.textContent = css;
  };

  const sparkline = (values) => {
    const w = 96;
    const h = 18;
    const pad = 2;
    const max = Math.max(1, ...values);
    const step = (w - pad * 2) / (values.length - 1);
    const pts = values.map((v, i) => [pad + i * step, h - pad - (v / max) * (h - pad * 2)]);
    const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    const [lx, ly] = pts[pts.length - 1];
    const svg =
      `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>` +
      `<polygon points='${pad},${h - pad} ${line} ${w - pad},${h - pad}' fill='#b79a37' fill-opacity='0.14'/>` +
      `<polyline points='${line}' fill='none' stroke='#b79a37' stroke-width='1.4' stroke-linejoin='round' stroke-linecap='round'/>` +
      `<circle cx='${lx.toFixed(1)}' cy='${ly.toFixed(1)}' r='2' fill='#b79a37'/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  };

  const build = (rows) => {
    const weeks = CONFIG.weeks;
    const values = new Array(weeks).fill(0);
    const now = Date.now();
    let total = 0;
    for (const row of rows) {
      const age = Math.floor((now - row[1]) / (7 * DAY));
      if (age >= 0 && age < weeks) {
        values[weeks - 1 - age] += 1;
        total += 1;
      }
    }
    if (!total) return null;
    return {
      text: `${total} ${total === 1 ? "mention" : "mentions"}  ·  last ${weeks} weeks`,
      css: `.roam-body-main .rm-title-display[data-mag-kicker]{--mag-pulse:${sparkline(values)}}\n`,
    };
  };

  let seen = "";
  let busy = false;
  let text = "";

  const apply = () => {
    const P = window.__magPage;
    const title = P ? P.titleEl() : null;
    doc.querySelectorAll(".roam-body-main [data-mag-kicker]").forEach((el) => {
      if (el !== title || !text) delete el.dataset.magKicker;
    });
    if (title && text && title.dataset.magKicker !== text) title.dataset.magKicker = text;
  };

  return {
    sync() {
      const P = window.__magPage;
      if (!P) return;
      const key = `${P.id}:${P.rev}`;
      if (key !== seen && !busy) {
        seen = key;
        if (!P.uid || P.isDaily) {
          text = "";
          writeCss("");
        } else {
          busy = true;
          const uid = P.uid;
          P.query(Q_PAGE_REFS, uid).then((rows) => {
            busy = false;
            if (P.uid === uid) {
              const pulse = rows ? build(rows) : null;
              text = pulse ? pulse.text : "";
              writeCss(pulse ? pulse.css : "");
            }
            core.scheduleSync();
          });
        }
      }
      apply();
    },
    destroy() {
      styleEl?.remove();
      doc.querySelectorAll("[data-mag-kicker]").forEach((el) => delete el.dataset.magKicker);
    },
  };
};
window.__magCore && window.__magCore.load("pulse");
},

"asides": () => {
/*
 * 30 边注栏（依赖核心脚本）
 * 子块打上 #.aside（右侧）或 #.aside-left（左侧），排进正文两侧本来的留白里，正文宽度不变；
 * 与父块首行平齐，同侧多条依次下排不重叠；某一侧放不下时那一侧原地显示为小号旁注。
 * 右键圆点菜单：Aside: Right / Aside: Left / Aside: Remove
 * 开销：只在有旁注的页面里工作；打字时只重排正在编辑的那一篇，每帧最多一次
 */
(window.__magModules = window.__magModules || {}).asides = (core) => {
  const CONFIG = {
    asides: true,
    asideMin: 64,     // 留白里放得下这么宽的文字才放边注，否则那一侧原地显示（px）
    asideMax: 240,    // 边注最宽（px）
    asideGap: 18,     // 边注与正文之间的间距（px）
    asideEdge: 8,     // 边注与正文外框边缘的距离（px）
    asideBullet: 22,  // 边注圆点栏宽度（与 CSS 一致，放在外侧）
  };
  const { doc, isBlockInput } = core;
  const s = core.scope();

  /* ---------- 边注栏：两侧统一边注栏，由脚本排版 ---------- */

  const ASIDE_RIGHT = '.rm-block.aside, .rm-block[data-page-links*=\'".aside"\']';
  const ASIDE_LEFT = '.rm-block.aside-left, .rm-block[data-page-links*=\'".aside-left"\']';
  const ASIDE = `${ASIDE_RIGHT}, ${ASIDE_LEFT}`;
  const ASIDE_VARS = ["--mag-aside-top", "--mag-aside-left", "--mag-aside-width"];
  const OUTSIDE_TEXT = ".rm-reference-main, .rm-mentions, .rm-reference-container, .rm-inline-references, .rm-embed-container";

  // 只有值真的变了才写，避免无谓的样式失效
  const setVar = (el, name, value) => {
    if (el.style.getPropertyValue(name) !== value) el.style.setProperty(name, value);
  };

  const releaseAside = (el) => {
    el.removeAttribute("data-mag-aside");
    ASIDE_VARS.forEach((v) => el.style.removeProperty(v));
  };

  const clearArticle = (article) => {
    if (article.hasAttribute("data-mag-margin")) article.removeAttribute("data-mag-margin");
    if (article.style.length) {
      article.style.removeProperty("--mag-margin-pad-l"); // 旧版遗留
      article.style.removeProperty("--mag-margin-pad-r");
    }
    article.querySelectorAll("[data-mag-aside]").forEach(releaseAside);
  };

  // 只排「某个块的直接子块」形式的旁注；引用区、嵌入块里的不排；旁注里的旁注随外层一起走
  const asidesIn = (article) =>
    [...article.querySelectorAll(ASIDE)].filter((el) => {
      const box = el.parentElement;
      return (
        box && box.matches(".rm-block-children") &&
        box.parentElement && box.parentElement.matches(".rm-block") &&
        !box.closest(OUTSIDE_TEXT) &&
        !box.closest(ASIDE)
      );
    });

  const layoutArticle = (article) => {
    // 快速通道：页面里没有旁注，且之前也没排过，什么都不做
    if (!article.querySelector(ASIDE)) {
      if (article.hasAttribute("data-mag-margin")) clearArticle(article);
      return;
    }
    const found = asidesIn(article);
    if (!found.length) {
      clearArticle(article);
      return;
    }
    const groups = { left: [], right: [] };
    for (const el of found) groups[el.matches(ASIDE_LEFT) ? "left" : "right"].push(el);

    // —— 读：正文内容区与正文外框的左右边缘，中间就是两侧的留白
    const frameEl = article.closest(".roam-body-main") || article.parentElement;
    const frame = frameEl.getBoundingClientRect();
    const aRect = article.getBoundingClientRect();
    const cs = getComputedStyle(article);
    const contentLeft = aRect.left + (parseFloat(cs.paddingLeft) || 0);
    const contentRight = aRect.right - (parseFloat(cs.paddingRight) || 0);
    const bullet = CONFIG.asideBullet;
    const room = {
      left: Math.floor(contentLeft - frame.left - CONFIG.asideEdge - CONFIG.asideGap - bullet),
      right: Math.floor(frame.right - contentRight - CONFIG.asideEdge - CONFIG.asideGap - bullet),
    };

    // 哪一侧放得下就放哪一侧；放不下的那一侧，旁注留在原处
    const width = {};
    const placed = new Set();
    for (const side of ["left", "right"]) {
      if (!groups[side].length) continue;
      if (room[side] >= CONFIG.asideMin) {
        width[side] = Math.min(CONFIG.asideMax, room[side]);
        groups[side].forEach((el) => placed.add(el));
      } else {
        groups[side] = [];
      }
    }

    // —— 写（第一批）：标记、定宽；释放不再需要排版的旁注
    article.querySelectorAll("[data-mag-aside]").forEach((el) => {
      if (!placed.has(el)) releaseAside(el);
    });
    if (!placed.size) {
      if (article.hasAttribute("data-mag-margin")) article.removeAttribute("data-mag-margin");
      return;
    }
    if (!article.hasAttribute("data-mag-margin")) article.setAttribute("data-mag-margin", "");
    for (const side of ["left", "right"]) {
      for (const el of groups[side]) {
        if (el.getAttribute("data-mag-aside") !== side) el.setAttribute("data-mag-aside", side);
        setVar(el, "--mag-aside-width", `${width[side] + bullet}px`);
      }
    }

    // —— 读（一次性）：父块首行位置、旁注高度、定位基准。
    //    旁注已是绝对定位，后面改它的 top/left 不会影响这些读数，所以可以先全部读完
    const plan = [];
    for (const side of ["left", "right"]) {
      if (!groups[side].length) continue;
      // 右侧：文字贴近正文，圆点在外侧（右）；左侧：文字右对齐贴近正文，圆点在外侧（左）
      const blockLeft = side === "right"
        ? contentRight + CONFIG.asideGap
        : contentLeft - CONFIG.asideGap - width[side] - bullet;
      const items = groups[side]
        .map((el) => {
          const main = el.parentElement.parentElement.querySelector(":scope > .rm-block-main");
          const origin = (el.offsetParent || article).getBoundingClientRect();
          return {
            el,
            anchor: (main || el).getBoundingClientRect().top,
            height: el.getBoundingClientRect().height,
            originTop: origin.top,
            originLeft: origin.left,
          };
        })
        .sort((a, b) => a.anchor - b.anchor);
      let prevBottom = -Infinity;
      for (const it of items) {
        const top = Math.max(it.anchor + 6, prevBottom + 14); // +6：让边注首行与父块首行的基线大致对齐
        plan.push([it.el, `${Math.round(top - it.originTop)}px`, `${Math.round(blockLeft - it.originLeft)}px`]);
        prevBottom = top + it.height;
      }
    }

    // —— 写（第二批）：位置
    for (const [el, top, left] of plan) {
      setVar(el, "--mag-aside-top", top);
      setVar(el, "--mag-aside-left", left);
    }
  };

  // 排版调度：每帧最多一次；打字时只重排正在编辑的那一篇
  let asideFrame = 0;
  let asideAll = false;
  const asideQueue = new Set();
  const layoutAsides = () => {
    asideFrame = 0;
    const targets = asideAll ? doc.querySelectorAll(".roam-body-main .roam-article") : [...asideQueue];
    asideAll = false;
    asideQueue.clear();
    for (const article of targets) {
      if (!article.isConnected) continue;
      if (CONFIG.asides) layoutArticle(article);
      else clearArticle(article);
    }
  };
  const scheduleAsides = (article) => {
    if (article) asideQueue.add(article);
    else asideAll = true;
    if (!asideFrame) asideFrame = requestAnimationFrame(layoutAsides);
  };

  // Follow native width presets and sidebar resizing without writing page widths.
  const asideSizes = new Map();
  const asideResize = typeof ResizeObserver === "function" ? new ResizeObserver((entries) => {
    let changed = false;
    for (const entry of entries) {
      if (asideSizes.get(entry.target) !== entry.contentRect.width) {
        asideSizes.set(entry.target, entry.contentRect.width);
        changed = true;
      }
    }
    if (changed) scheduleAsides();
  }) : null;
  const syncAsideSizes = () => {
    if (!asideResize) return;
    const targets = new Set();
    for (const article of doc.querySelectorAll(".roam-body-main .roam-article")) {
      if (!article.querySelector(ASIDE)) continue;
      targets.add(article);
      const frame = article.closest(".roam-body-main") || article.parentElement;
      if (frame) targets.add(frame);
    }
    for (const target of asideSizes.keys()) if (!targets.has(target)) {
      asideResize.unobserve(target);
      asideSizes.delete(target);
    }
    for (const target of targets) if (!asideSizes.has(target)) {
      asideSizes.set(target, null);
      asideResize.observe(target);
    }
  };

  // 右键圆点菜单：设为右侧 / 左侧旁注，或取消
  const ASIDE_TAG_RE = /\s*#\.aside(?:-left)?(?![\w-])/g;
  const setAside = async (uid, side) => {
    const api = window.roamAlphaAPI;
    if (!uid || !api) return;
    const node = api.pull("[:block/string]", [":block/uid", uid]);
    if (!node) return;
    let text = (node[":block/string"] || "").replace(ASIDE_TAG_RE, "");
    if (side) text = `${text.trimEnd()} #.aside${side === "left" ? "-left" : ""}`;
    await api.data.block.update({ block: { uid, string: text } });
  };
  const blockMenu = window.roamAlphaAPI && window.roamAlphaAPI.ui && window.roamAlphaAPI.ui.blockContextMenu;
  const BLOCK_MENU = [
    { label: "Aside: Right", callback: (ctx) => setAside(ctx && ctx["block-uid"], "right") },
    { label: "Aside: Left", callback: (ctx) => setAside(ctx && ctx["block-uid"], "left") },
    { label: "Aside: Remove", callback: (ctx) => setAside(ctx && ctx["block-uid"], null) },
  ];
  if (blockMenu && blockMenu.addCommand) {
    BLOCK_MENU.forEach((item) => {
      try { blockMenu.addCommand(item); } catch (_) {}
    });
  }

  // 打字会改变块的高度：有边注栏的页面里，任何输入都重新排一次（每帧最多一次）
  s.on(doc, "input", (e) => {
    if (!isBlockInput(e.target)) return;
    const article = e.target.closest(".roam-article[data-mag-margin]");
    if (article) scheduleAsides(article);
  }, true);

  return {
    sync: () => { syncAsideSizes(); scheduleAsides(); },
    destroy() {
      asideResize?.disconnect();
      asideSizes.clear();
      s.dispose();
      if (asideFrame) cancelAnimationFrame(asideFrame);
      if (blockMenu && blockMenu.removeCommand) {
        BLOCK_MENU.forEach((item) => {
          try { blockMenu.removeCommand({ label: item.label }); } catch (_) {}
        });
      }
      doc.querySelectorAll(".roam-article").forEach(clearArticle);
    },
  };
};
window.__magCore && window.__magCore.load("asides");
},

"pdf": () => {
/*
 * 23 PDF 窗口 · 按钮标记（依赖核心脚本）
 * 给 PDF 工具栏里的每个按钮外层写上 data-mag-pdf="highlight|area|color|…"，
 * CSS 直接按这个属性定位，不再对全页弹出层做 :has() 判断。
 * 页面上没有 PDF 时只做一次查找，立即返回
 */
(window.__magModules = window.__magModules || {}).pdf = (core) => {
  const { doc } = core;
  const KINDS = [
    ["highlight", ".bp3-icon-highlight"],
    ["area", ".bp3-icon-widget"],
    ["color", ".rm-pdf-color-button"],
    ["annotations", ".bp3-icon-eye-open, .bp3-icon-eye-off"],
    ["search", ".bp3-icon-search"],
    ["more", ".bp3-icon-more"],
    ["fullscreen", ".bp3-icon-maximize, .bp3-icon-minimize, .bp3-icon-fullscreen"],
    ["zoom-out", ".bp3-icon-zoom-out"],
    ["zoom-in", ".bp3-icon-zoom-in"],
    ["zoom-fit", ".bp3-icon-zoom-to-fit"],
  ];
  const kindOf = (wrapper) => {
    for (const [kind, sel] of KINDS) {
      if (wrapper.matches(sel) || wrapper.querySelector(sel)) return kind;
    }
    return "";
  };
  return {
    sync() {
      const wrappers = doc.querySelectorAll(".rm-pdf-container .rm-pdf-toolbar .bp3-popover-wrapper");
      for (const el of wrappers) {
        if (el.parentElement && el.parentElement.closest(".rm-pdf-toolbar .bp3-popover-wrapper")) continue; // 只标最外层
        const kind = kindOf(el);
        if ((el.dataset.magPdf || "") !== kind) {
          if (kind) el.dataset.magPdf = kind;
          else delete el.dataset.magPdf;
        }
      }
    },
    destroy() {
      doc.querySelectorAll("[data-mag-pdf]").forEach((el) => delete el.dataset.magPdf);
    },
  };
};
window.__magCore && window.__magCore.load("pdf");
},

"right-sidebar": () => {
/*
 * 18 右侧栏 Zenith · 标记与宽度（必要，与 18.1 横向卡片布局一起开；依赖核心脚本）
 * · 给每个侧栏窗口写上 data-mag-folded（已折叠）、data-mag-hasref（标题栏带引用按钮），
 *   CSS 按属性判断，不再用 :has()
 * · 用 ResizeObserver 量出侧栏宽度，写入 --rs-cqw（宽度的 1%）与 data-mag-cols（并排几张卡），
 *   CSS 不再需要容器查询与尺寸隔离
 */
(window.__magModules = window.__magModules || {}).sidebar = (core) => {
  const { doc } = core;
  let sidebar = null;
  let ro = null;
  let mo = null;
  let frame = 0;

  const colsFor = (w) => (w >= 3100 ? 6 : w >= 2600 ? 5 : w >= 2100 ? 4 : w >= 1488 ? 3 : w >= 1050 ? 2 : 1);

  const setWidth = (w) => {
    if (!sidebar || !w) return;
    const cqw = `${(w / 100).toFixed(3)}px`;
    if (sidebar.style.getPropertyValue("--rs-cqw") !== cqw) sidebar.style.setProperty("--rs-cqw", cqw);
    const cols = String(colsFor(w));
    if (sidebar.getAttribute("data-mag-cols") !== cols) sidebar.setAttribute("data-mag-cols", cols);
  };

  const mark = () => {
    frame = 0;
    if (!sidebar) return;
    for (const win of sidebar.querySelectorAll(".rm-sidebar-window")) {
      const head = win.querySelector(".window-headers");
      const folded = !!(head && head.querySelector(".rm-caret-closed"));
      const hasRef = !!(head && head.querySelector(":scope > .bp3-popover-wrapper"));
      if (folded !== win.hasAttribute("data-mag-folded")) win.toggleAttribute("data-mag-folded", folded);
      if (hasRef !== win.hasAttribute("data-mag-hasref")) win.toggleAttribute("data-mag-hasref", hasRef);
    }
  };
  const scheduleMark = () => {
    if (!frame) frame = requestAnimationFrame(mark);
  };

  const release = () => {
    ro?.disconnect();
    mo?.disconnect();
    ro = mo = null;
    if (sidebar) {
      sidebar.style.removeProperty("--rs-cqw");
      sidebar.removeAttribute("data-mag-cols");
      sidebar.querySelectorAll("[data-mag-folded], [data-mag-hasref]").forEach((el) => {
        el.removeAttribute("data-mag-folded");
        el.removeAttribute("data-mag-hasref");
      });
    }
    sidebar = null;
  };

  // 侧栏打开 / 关闭时会重建：重新挂上观察者
  const watch = () => {
    const el = doc.getElementById("right-sidebar");
    if (el === sidebar) return;
    release();
    sidebar = el;
    if (!sidebar) return;
    ro = new ResizeObserver((entries) => {
      for (const e of entries) setWidth(e.contentRect.width);
    });
    ro.observe(sidebar);
    setWidth(sidebar.getBoundingClientRect().width);
    // 折叠 / 展开时 Roam 只改折叠箭头的类名：只关心这类变化，立即补标记
    mo = window.__magCore.watch("runner:right-sidebar:1", (list) => {
      for (const m of list) {
        const t = m.target;
        if (t.classList && (t.classList.contains("rm-caret-open") || t.classList.contains("rm-caret-closed"))) {
          scheduleMark();
          return;
        }
      }
    });
    mo.observe(sidebar, { attributes: true, attributeFilter: ["class"], subtree: true });
  };

  return {
    sync() {
      watch();
      mark();
    },
    destroy() {
      if (frame) cancelAnimationFrame(frame);
      release();
    },
  };
};
window.__magCore && window.__magCore.load("sidebar");
},

"editorial-desk": () => {
/*
 * Desk · 编辑部案头（依赖核心脚本；不需要页面信息）
 * 只在打开 Desk 时工作，其他页面里只做一次查找就返回。
 * · 类型签：页面首块只写类型标签（如 #Goal）时，标题上方显示 GOAL
 * · 刊尾信息行：UPDATED 3D AGO · 24 BLOCKS · 4/7 DONE · ON DESK 12D
 * · 任务进度：卡片底部一条金色细线
 * · 截稿日印章：读取页面里的 deadline:: / due:: / 截稿:: / 截止::（支持 [[日期]]、2026-11-03、11-03-2026）
 * · 在桌天数：第一次在案头看到某张卡时记下日期（只存在这台电脑上）
 * · 案头老化：久未编辑的卡片逐级泛黄（7 / 30 / 90 天）
 * · 类型筛选、排序（只改显示顺序，不动 Desk 真实顺序；拖动或置顶时自动回到手动）
 * · 今日头条：抽一张放到头条位，只保留到当天；「撤下」恢复原排列
 * · 置顶：每张卡片的操作按钮里多一个图钉，钉住的卡片无论怎么排序都排在最前（可钉多张）
 * · 卡片既可以是页面，也可以是块：块卡片按「来源页面 + 块文字 + 第一行子块」在数据库里找到对应的块，
 *   统计它的所有子孙块；找不到时不显示统计
 * · 刊头：标题改成「The Desk」，上方小号大写「NOTES · 6 ITEMS」
 */
(window.__magModules = window.__magModules || {}).desk = (core) => {
  const CONFIG = {
    ageDays: [7, 30, 90],  // 案头老化分档（天未编辑）
    heatWeeks: 12,         // 热度统计周数
    soonDays: 3,           // 截稿日在这么多天内显示为「临近」
    cacheMs: 2 * 60 * 1000, // 卡片数据缓存时长
  };
  const { doc, store } = core;
  const s = core.scope();
  const DAY = 864e5;

  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const DNP_RE = new RegExp(`^(${MONTHS.join("|")}) (\\d{1,2})(?:st|nd|rd|th), (\\d{4})$`);
  const TAG_ONLY_RE = /^\s*(?:#(?:\[\[[^\]]+\]\](?:\/[^\s#]+)?|[^\s#\[\]]+)\s*)+$/;
  const FIRST_TAG_RE = /#(?:\[\[([^\]]+)\]\](\/[^\s#]+)?|([^\s#\[\]]+))/;
  const DUE_RE = /^\s*(?:deadline|due|截稿|截止|到期)\s*::\s*(.+)$/im;
  const TODO_RE = /\{\{\[?\[?TODO\]?\]?\}\}/;
  const DONE_RE = /\{\{\[?\[?DONE\]?\]?\}\}/;

  const Q_PAGE =
    "[:find ?b ?s ?t :in $ ?title :where [?p :node/title ?title] [?b :block/page ?p] [?b :block/string ?s] [?b :edit/time ?t]]";
  const Q_FIRST =
    "[:find ?s . :in $ ?title :where [?p :node/title ?title] [?p :block/children ?f] [?f :block/order 0] [?f :block/string ?s]]";
  const Q_HEAT =
    "[:find (count ?b) . :in $ ?title ?since :where [?p :node/title ?title] [?b :block/refs ?p] [?b :create/time ?t] [(> ?t ?since)]]";

  const Q_BLOCK =
    "[:find ?d ?s ?t :in $ ?uid :where [?b :block/uid ?uid] [?d :block/parents ?b] [?d :block/string ?s] [?d :edit/time ?t]]";
  const Q_BLOCK_HEAT =
    "[:find (count ?r) . :in $ ?uid ?since :where [?b :block/uid ?uid] [?r :block/refs ?b] [?r :create/time ?t] [(> ?t ?since)]]";

  const query = async (q, ...args) => {
    const api = window.roamAlphaAPI;
    if (!api) return null;
    try {
      const asyncQ = api.data && api.data.async && api.data.async.q;
      return await (asyncQ ? asyncQ(q, ...args) : api.q(q, ...args));
    } catch (_) {
      return null;
    }
  };

  const readJSON = (key, fallback) => {
    try { return JSON.parse(store.get(key, "")) || fallback; } catch (_) { return fallback; }
  };
  const writeJSON = (key, value) => store.set(key, JSON.stringify(value));

  const today = () => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  };
  // 本地日期的 YYYY-MM-DD（不用 toISOString，避免时区把日期往前推一天）
  const dayKey = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  const fromKey = (key) => {
    const [y, m, d] = String(key).split("-").map(Number);
    return y ? new Date(y, m - 1, d).getTime() : today();
  };

  /* ---------- 日期解析（截稿日） ---------- */

  const parseDate = (raw) => {
    const v = raw.trim();
    let m = /\[\[([^\]]+)\]\]/.exec(v);
    if (m) {
      const d = DNP_RE.exec(m[1]);
      if (d) return new Date(Number(d[3]), MONTHS.indexOf(d[1]), Number(d[2])).getTime();
    }
    m = /(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/.exec(v);
    if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])).getTime();
    m = /(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})/.exec(v);
    if (m) return new Date(Number(m[3]), Number(m[1]) - 1, Number(m[2])).getTime();
    return null;
  };

  /* ---------- 每张卡片的数据（按页面标题缓存） ---------- */

  const cache = new Map(); // title -> { at, data }
  const pending = new Set();

  const typeOf = (first) => {
    if (!first || !TAG_ONLY_RE.test(first)) return "";
    const m = FIRST_TAG_RE.exec(first);
    if (!m) return "";
    return (m[1] ? m[1] + (m[2] || "") : m[3]) || "";
  };

  // ref = { key, kind: "page", title } 或 { key, kind: "block", uid }
  const load = async (ref) => {
    const { key } = ref;
    pending.add(key);
    const since = Date.now() - CONFIG.heatWeeks * 7 * DAY;
    let rows;
    let first;
    let heat;
    if (ref.kind === "block") {
      const api = window.roamAlphaAPI;
      let self = null;
      try { self = api.pull("[:block/string :edit/time]", [":block/uid", ref.uid]); } catch (_) {}
      const [desc, h] = await Promise.all([query(Q_BLOCK, ref.uid), query(Q_BLOCK_HEAT, ref.uid, since)]);
      rows = (desc || []).slice();
      if (self) rows.push([ref.uid, self[":block/string"] || "", self[":edit/time"] || 0]);
      first = self ? self[":block/string"] : "";
      heat = h;
    } else {
      [rows, first, heat] = await Promise.all([query(Q_PAGE, ref.title), query(Q_FIRST, ref.title), query(Q_HEAT, ref.title, since)]);
    }
    pending.delete(key);
    if (rows === null) return; // 查询失败：不显示错误的数据
    let edited = 0;
    let todo = 0;
    let done = 0;
    let due = null;
    // 任务既可能直接写在块里，也可能是块引用 ((uid)) 指向别处的 TODO（比如 Random TODO 3 抽出的任务）
    const api = window.roamAlphaAPI;
    const counted = new Set();
    const countRef = (uid) => {
      if (counted.has(uid)) return;
      counted.add(uid);
      let target = null;
      try { target = api.pull("[:block/string]", [":block/uid", uid]); } catch (_) {}
      const str = (target && target[":block/string"]) || "";
      if (DONE_RE.test(str)) done += 1;
      else if (TODO_RE.test(str)) todo += 1;
    };
    for (const [, str, t] of rows || []) {
      if (t > edited) edited = t;
      if (DONE_RE.test(str)) done += 1;
      else if (TODO_RE.test(str)) todo += 1;
      else if (api && str.includes("((")) {
        for (const m of str.matchAll(/\(\(([\w-]{9})\)\)/g)) countRef(m[1]);
      }
      if (due === null) {
        const m = DUE_RE.exec(str);
        if (m) due = parseDate(m[1]);
      }
    }
    cache.set(key, {
      at: Date.now(),
      data: {
        blocks: ref.kind === "block" ? Math.max(0, rows.length - 1) : rows.length,
        edited,
        todo,
        done,
        due,
        type: typeOf(first),
        heat: Number(heat) || 0,
      },
    });
    core.scheduleSync();
  };

  /* ---------- 持久状态：排序、筛选、在桌日期、头条 ---------- */

  let sortKey = store.get("mag-desk-sort", "manual");
  let sortFlip = store.get("mag-desk-flip", "0") === "1"; // 反转当前排序的方向
  let filterKey = store.get("mag-desk-filter", "");
  const seen = readJSON("mag-desk-seen4", {}); // 卡片键 -> 第一次在案头看到的日期
  let lead = readJSON("mag-desk-lead4", null); // { key, day }：今日头条，只到当天
  let pins = readJSON("mag-desk-pins4", []); // 置顶的卡片键，按钉住的先后

  const leadKey = () => (lead && lead.key && lead.day === dayKey() ? lead.key : null);
  const setLead = (next) => {
    lead = next;
    writeJSON("mag-desk-lead4", lead);
    core.scheduleSync();
  };
  const togglePin = (key) => {
    pins = pins.includes(key) ? pins.filter((k) => k !== key) : [...pins, key];
    writeJSON("mag-desk-pins4", pins);
    core.scheduleSync();
  };

  /* ---------- 格式化 ---------- */

  const ago = (ms) => {
    if (!ms) return "";
    const d = Math.floor((today() - new Date(ms).setHours(0, 0, 0, 0)) / DAY);
    if (d <= 0) return "TODAY";
    if (d < 14) return `${d}D AGO`;
    if (d < 60) return `${Math.round(d / 7)}W AGO`;
    if (d < 365) return `${Math.round(d / 30)}MO AGO`;
    return `${Math.round(d / 365)}Y AGO`;
  };
  const daysOnDesk = (key) => {
    const first = seen[key] ? fromKey(seen[key]) : today();
    return Math.max(0, Math.round((today() - first) / DAY));
  };
  const dueStamp = (due) => {
    if (due === null || due === undefined) return null;
    const d = Math.round((due - today()) / DAY);
    if (d < 0) return { text: `OVERDUE ${-d}D`, state: "over" };
    if (d === 0) return { text: "DUE TODAY", state: "soon" };
    if (d <= CONFIG.soonDays) return { text: `DUE IN ${d}D`, state: "soon" };
    const date = new Date(due).toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase();
    return { text: `DUE ${date}`, state: "later" };
  };

  /* ---------- DOM 小工具 ---------- */

  const setData = (el, name, value) => {
    if (!el) return;
    if (value === null || value === undefined || value === "") {
      if (name in el.dataset) delete el.dataset[name];
    } else if (el.dataset[name] !== String(value)) {
      el.dataset[name] = String(value);
    }
  };
  const setVar = (el, name, value) => {
    if (value === null) {
      if (el.style.getPropertyValue(name)) el.style.removeProperty(name);
    } else if (el.style.getPropertyValue(name) !== value) {
      el.style.setProperty(name, value);
    }
  };
  // 卡片对应的是页面还是块：页面按标题查；块按「来源页面 + 块文字 + 第一行子块」在数据库里匹配
  const Q_PAGE_BLOCKS =
    "[:find ?u ?s :in $ ?title :where [?p :node/title ?title] [?b :block/page ?p] [?b :block/string ?s] [?b :block/uid ?u]]";
  const norm = (str) =>
    String(str || "")
      .replace(/\{\{\[?\[?(?:TODO|DONE)\]?\]?\}\}/g, " ")
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/\[\[|\]\]|#|\*\*|__|\^\^|~~|`/g, "")
      .replace(/\s+/g, " ")
      .trim();
  const cleanText = (el) => (el ? el.textContent.replace(/\s+/g, " ").trim() : "");

  const sigOf = (tile) => {
    const label = titleOf(tile);
    if (/--page\b/.test(tile.className)) return { kind: "page", key: `page:${label}`, label };
    const source = cleanText(tile.querySelector(".rm-desk-tile__source"));
    const firstRow = cleanText(tile.querySelector(".rm-desk-tile__row .rm-desk-tile__text"));
    return { kind: "block", key: `block:${source}|${label}|${firstRow}`, label, source, firstRow };
  };
  const resolved = new Map(); // 卡片键 -> ref（null 表示找不到）
  const resolving = new Set();
  const resolveBlock = async (sig) => {
    resolving.add(sig.key);
    let ref = null;
    const rows = sig.source ? await query(Q_PAGE_BLOCKS, sig.source) : null;
    const want = norm(sig.label);
    let cands = (rows || []).filter(([, str]) => norm(str) === want);
    if (cands.length > 1 && sig.firstRow) {
      const api = window.roamAlphaAPI;
      const wantRow = norm(sig.firstRow);
      const hit = cands.filter(([uid]) => {
        try {
          const node = api.pull("[{:block/children [:block/string :block/order]}]", [":block/uid", uid]);
          const kids = (node && node[":block/children"]) || [];
          const first = kids.find((k) => k[":block/order"] === 0) || kids[0];
          return first && norm(first[":block/string"]) === wantRow;
        } catch (_) {
          return false;
        }
      });
      cands = hit;
    }
    // 只有唯一确定时才认；对不上就不显示统计，绝不猜
    if (cands.length === 1) ref = { key: sig.key, kind: "block", uid: cands[0][0] };
    resolved.set(sig.key, ref);
    resolving.delete(sig.key);
    core.scheduleSync();
  };
  const refOf = (sig) => {
    if (sig.kind === "page") return sig.label ? { key: sig.key, kind: "page", title: sig.label } : null;
    if (resolved.has(sig.key)) return resolved.get(sig.key);
    if (!resolving.has(sig.key)) resolveBlock(sig);
    return null;
  };

  const titleOf = (tile) => {
    const p = tile.querySelector(".rm-desk-tile__preview");
    return (p && p.getAttribute("aria-label")) || cleanText(tile.querySelector(".rm-desk-tile__title"));
  };

  /* ---------- 工具条：筛选、排序、头条（放进刊头右侧那一行，不单独占一栏） ---------- */

  const SORTS = [
    ["manual", "手动"],
    ["recent", "最近编辑"],
    ["stale", "最久未动"],
    ["deadline", "截稿日"],
    ["progress", "完成度"],
    ["type", "类型"],
    ["size", "篇幅"],
    ["heat", "热度"],
    ["ondesk", "在桌最久"],
  ];

  let bar = null;
  let chips = null;
  let chipsKey = null;
  let select = null;
  let dirBtn = null;
  let dice = null;
  let clearBtn = null;

  const setSort = (key) => {
    sortKey = key;
    store.set("mag-desk-sort", key);
    if (select && select.value !== key) select.value = key;
    core.scheduleSync();
  };
  const setFilter = (key) => {
    filterKey = key;
    store.set("mag-desk-filter", key);
    chipsKey = null;
    core.scheduleSync();
  };

  let current = []; // 当前渲染的 [{ tile, ref, key }]

  const drawLead = () => {
    const pool = current.filter((c) => !c.tile.hasAttribute("data-mag-hidden") && c.key !== leadKey() && !pins.includes(c.key));
    if (!pool.length) return;
    setLead({ key: pool[Math.floor(Math.random() * pool.length)].key, day: dayKey() });
  };

  const PIN_ICON =
    '<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M9.41.92c-.51.51-.41 1.5.15 2.56L4.34 7.54C2.8 6.48 1.45 6.05.92 6.58l3.54 3.54-3.54 4.95 4.95-3.54 3.54 3.54c.53-.53.1-1.88-.96-3.42l4.06-5.22c1.06.56 2.04.66 2.55.15L9.41.92z"/></svg>';

  const button = (cls, html, title, onClick) => {
    const b = doc.createElement("button");
    b.type = "button";
    b.className = cls;
    b.innerHTML = html;
    if (title) b.title = title;
    b.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    });
    return b;
  };

  const buildBar = () => {
    bar = doc.createElement("div");
    bar.className = "mag-desk-bar";

    chips = doc.createElement("div");
    chips.className = "mag-desk-bar__chips";

    const sortLabel = doc.createElement("label");
    sortLabel.className = "mag-desk-bar__sort";
    sortLabel.textContent = "排序";
    select = doc.createElement("select");
    for (const [key, label] of SORTS) {
      const o = doc.createElement("option");
      o.value = key;
      o.textContent = label;
      select.appendChild(o);
    }
    select.value = sortKey;
    select.addEventListener("change", () => setSort(select.value));
    dirBtn = button("mag-desk-bar__btn mag-desk-bar__dir", "↓", "", () => {
      sortFlip = !sortFlip;
      store.set("mag-desk-flip", sortFlip ? "1" : "0");
      core.scheduleSync();
    });
    sortLabel.append(select, dirBtn);

    const leadBox = doc.createElement("span");
    leadBox.className = "mag-desk-bar__lead";
    dice = button("mag-desk-bar__btn mag-desk-bar__dice", "抽头条", "从案头随机抽一张放到头条位（只保留到今天）", drawLead);
    clearBtn = button("mag-desk-bar__btn mag-desk-bar__clear", "撤下头条", "撤下头条，回到原来的排列", () => setLead(null));
    leadBox.append(dice, clearBtn);

    bar.append(chips, sortLabel, leadBox);
  };

  const drawChips = (types) => {
    const key = `${filterKey}|${types.join("|")}`;
    if (key === chipsKey) return;
    chipsKey = key;
    chips.textContent = "";
    if (!types.length) return;
    const make = (value, label) => {
      const b = button("mag-desk-bar__chip", "", "", () => setFilter(filterKey === value ? "" : value));
      b.textContent = label;
      b.setAttribute("aria-pressed", String(filterKey === value));
      chips.appendChild(b);
    };
    make("", "全部");
    types.forEach((t) => make(t, t));
  };

  // 每种排序的默认方向说明（点箭头反转）
  const DIR_HINT = {
    recent: ["最近的在前", "最早的在前"],
    stale: ["最久未动在前", "最近动过在前"],
    deadline: ["截稿最早在前", "截稿最晚在前"],
    progress: ["完成度低在前", "完成度高在前"],
    type: ["A → Z", "Z → A"],
    size: ["篇幅大在前", "篇幅小在前"],
    heat: ["最热在前", "最冷在前"],
    ondesk: ["在桌最久在前", "最新上桌在前"],
  };
  const drawLeadButtons = () => {
    clearBtn.hidden = !leadKey();
    const manual = sortKey === "manual";
    dirBtn.hidden = manual;
    dirBtn.textContent = sortFlip ? "↑" : "↓";
    const hint = DIR_HINT[sortKey];
    dirBtn.title = hint ? `${hint[sortFlip ? 1 : 0]}（点击反转）` : "";
  };

  // 每张卡片操作按钮里的图钉（置顶）
  const drawPinButton = (tile, key, pinned) => {
    const actions = tile.querySelector(".rm-desk-tile__actions");
    if (!actions) return;
    let pin = actions.querySelector(":scope > .mag-desk-pin");
    if (!pin) {
      pin = button("mag-desk-pin", PIN_ICON, "", () => togglePin(pin.dataset.key));
      actions.prepend(pin);
    }
    if (pin.dataset.key !== key) pin.dataset.key = key;
    pin.setAttribute("aria-pressed", String(pinned));
    pin.title = pinned ? "取消置顶" : "置顶：无论怎么排序都排在最前";
  };

  /* ---------- 排序 ---------- */

  const sortValue = (key, d) => {
    if (!d) return null;
    switch (sortKey) {
      case "recent": return -d.edited;
      case "stale": return d.edited || 0;
      case "deadline": return d.due === null ? null : d.due;
      case "progress": return d.todo + d.done ? d.done / (d.todo + d.done) : null;
      case "type": return d.type ? d.type.toLowerCase() : null;
      case "size": return -d.blocks;
      case "heat": return -d.heat;
      case "ondesk": return -daysOnDesk(key);
      default: return null;
    }
  };

  /* ---------- 主流程 ---------- */

  let lastPage = null;

  const drawHeader = (page, count) => {
    const h1 = page.querySelector(".rm-desk-page__title");
    if (!h1) return;
    const owner = ((page.querySelector(".rm-desk-page__owner") || {}).textContent || "").trim();
    const kicker = [owner.toUpperCase(), `${count} ${count === 1 ? "ITEM" : "ITEMS"}`].filter(Boolean).join("  ·  ");
    setData(h1, "magKicker", kicker);
  };

  const render = (page) => {
    const tiles = [...page.querySelectorAll(".rm-desk-tile")];
    current = tiles.map((tile) => {
      const sig = sigOf(tile);
      return { tile, key: sig.key, ref: refOf(sig) };
    });
    drawHeader(page, tiles.length);

    // 在桌天数：新出现的卡片记下今天；已离开案头的卡片删掉记录
    const keys = current.map((c) => c.key);
    let changed = false;
    const now = dayKey();
    for (const k of keys) {
      if (!seen[k]) { seen[k] = now; changed = true; }
    }
    for (const k of Object.keys(seen)) {
      if (!keys.includes(k)) { delete seen[k]; changed = true; }
    }
    if (changed) writeJSON("mag-desk-seen4", seen);
    // 已离开案头的卡片，取消置顶
    const keptPins = pins.filter((k) => keys.includes(k));
    if (keptPins.length !== pins.length) {
      pins = keptPins;
      writeJSON("mag-desk-pins4", pins);
    }

    // 取数据：缺的或过期的才查；无法识别的卡片不查、不显示数据
    for (const { ref } of current) {
      if (!ref || pending.has(ref.key)) continue;
      const c = cache.get(ref.key);
      if (!c || Date.now() - c.at > CONFIG.cacheMs) load(ref);
    }
    const dataOf = (key) => (cache.get(key) || {}).data;

    // 类型筛选签
    const types = [...new Set(current.map((c) => dataOf(c.key)).filter((d) => d && d.type).map((d) => d.type))].sort();
    drawChips(types);
    drawLeadButtons();

    // 排序
    const ranked = current.map((c, i) => ({ ...c, d: dataOf(c.key), i }));
    ranked.forEach((r) => { r.v = sortKey === "manual" ? null : sortValue(r.key, r.d); });
    if (sortKey !== "manual") {
      // Desk 新加的卡片排在前面：位置号越大，通常上桌越早。在桌天数相同时用它来分先后
      const posOf = (tile) => Number(tile.getAttribute("data-position")) || 0;
      const sign = sortFlip ? -1 : 1;
      ranked.sort((a, b) => {
        if (a.v === null && b.v === null) return a.i - b.i;
        if (a.v === null) return 1; // 没有数据的始终排在最后
        if (b.v === null) return -1;
        let c = a.v < b.v ? -1 : a.v > b.v ? 1 : 0;
        if (c === 0 && sortKey === "ondesk") c = posOf(b.tile) - posOf(a.tile);
        if (c === 0) return a.i - b.i;
        return c * sign;
      });
    }
    // 最终顺序：置顶（按钉住先后，优先级最高）→ 今日头条 → 其余（手动顺序或所选排序）
    const leadK = leadKey();
    const head = [];
    for (const k of pins) {
      const r = ranked.find((x) => x.key === k);
      if (r) head.push(r);
    }
    const leadItem = ranked.find((r) => r.key === leadK);
    if (leadItem && !head.includes(leadItem)) head.push(leadItem);
    const final = [...head, ...ranked.filter((r) => !head.includes(r))];
    const reorder = sortKey !== "manual" || head.length > 0;
    const orderOf = new Map(final.map((r, n) => [r.tile, n + 1]));

    for (const { tile, key, d } of ranked) {
      const titleEl = tile.querySelector(".rm-desk-tile__title");
      const footer = tile.querySelector(".rm-desk-tile__footer");
      const isLead = !!leadK && key === leadK;

      const isPinned = pins.includes(key);
      setData(tile, "magLead", isLead ? "today" : null);
      setData(tile, "magPinned", isPinned ? "1" : null);
      setVar(tile, "--mag-desk-order", reorder ? String(orderOf.get(tile)) : null);
      drawPinButton(tile, key, isPinned);

      const hidden = !!filterKey && !isLead && !isPinned && (!d || d.type !== filterKey);
      if (hidden !== tile.hasAttribute("data-mag-hidden")) tile.toggleAttribute("data-mag-hidden", hidden);

      // 块本身就是类型标签（如 #Import）时，标题已经写着它，抬头不再重复
      const showType = d && d.type && norm(titleOf(tile)) !== norm(d.type);
      const kicker = [isPinned ? "PINNED" : "", isLead ? "TODAY'S LEAD" : "", showType ? d.type.toUpperCase() : ""]
        .filter(Boolean)
        .join("  ·  ");
      setData(titleEl, "magKicker", kicker);

      // 没有数据（还在查、或无法识别）时不显示任何统计，避免显示错误的数字
      const total = d ? d.todo + d.done : 0;
      const meta = d
        ? [
            d.edited ? `UPDATED ${ago(d.edited)}` : "",
            `${d.blocks} ${d.blocks === 1 ? "BLOCK" : "BLOCKS"}`,
            total ? `${d.done}/${total} DONE` : "",
            `ON DESK ${daysOnDesk(key)}D`,
          ].filter(Boolean).join("  ·  ")
        : "";
      setData(footer, "magMeta", meta);
      setData(footer, "magProgress", total ? "1" : null);
      if (footer) setVar(footer, "--mag-desk-progress", total ? (d.done / total).toFixed(3) : null);

      const stamp = d ? dueStamp(d.due) : null;
      setData(tile, "magDue", stamp ? stamp.text : null);
      setData(tile, "magDueState", stamp ? stamp.state : null);

      let age = 0;
      if (d && d.edited) {
        const idle = (today() - new Date(d.edited).setHours(0, 0, 0, 0)) / DAY;
        const [a1, a2, a3] = CONFIG.ageDays;
        age = idle >= a3 ? 3 : idle >= a2 ? 2 : idle >= a1 ? 1 : 0;
      }
      setData(tile, "magAge", age || null);
    }
  };

  const clearPage = (page) => {
    if (!page) return;
    page.querySelectorAll(".mag-desk-bar, .mag-desk-pin").forEach((el) => el.remove());
    const h1 = page.querySelector(".rm-desk-page__title");
    if (h1) delete h1.dataset.magKicker;
    page.querySelectorAll(".rm-desk-tile").forEach((tile) => {
      ["magLead", "magPinned", "magDue", "magDueState", "magAge"].forEach((k) => delete tile.dataset[k]);
      tile.removeAttribute("data-mag-hidden");
      tile.style.removeProperty("--mag-desk-order");
      const t = tile.querySelector(".rm-desk-tile__title");
      if (t) delete t.dataset.magKicker;
      const f = tile.querySelector(".rm-desk-tile__footer");
      if (f) {
        delete f.dataset.magMeta;
        delete f.dataset.magProgress;
        f.style.removeProperty("--mag-desk-progress");
      }
    });
  };

  // 非手动排序下拖动卡片或点「置顶」：自动回到手动，避免看到的位置和真实位置不一致
  s.on(doc, "dragstart", (e) => {
    if (sortKey !== "manual" && e.target instanceof Element && e.target.closest(".rm-desk-tile")) setSort("manual");
  }, true);
  s.on(doc, "click", (e) => {
    if (sortKey !== "manual" && e.target instanceof Element && e.target.closest(".rm-desk-tile__move-to-top")) setSort("manual");
  }, true);

  return {
    sync() {
      const page = doc.querySelector(".roam-body-main .rm-desk-page");
      if (page !== lastPage) {
        clearPage(lastPage);
        lastPage = page;
      }
      if (!page) return;
      if (!bar) buildBar();
      const tools = page.querySelector(".rm-desk-page__tools");
      if (tools && tools.firstElementChild !== bar) tools.prepend(bar);
      render(page);
    },
    destroy() {
      s.dispose();
      clearPage(lastPage);
      bar?.remove();
    },
  };
};
window.__magCore && window.__magCore.load("desk");
},

"calendar-template": () => {
/* Auto DNP schedule · weekday/weekend SmartBlock */
(() => {
  const KEY = "__delmarAutoDnpTemplate";
  const WEEKDAY_UID = "-SrmsqCDW";
  const WEEKEND_UID = "R-buUSbAm";
  const SIGNATURE = "roam-render-Nautilus-Log-cljs";
  const RUN_DATE = new Date().toDateString();
  const LOCK_ATTR = "data-delmar-auto-dnp-date";
                const RETRY_CLEANUP = "__delmarAutoDnpTemplateCleanup";
                const retryTimers = new Set();
                const scheduleRetry = (callback, delay) => {
                  const timer = window.setTimeout(() => {
                    retryTimers.delete(timer);
                    callback();
                  }, delay);
                  retryTimers.add(timer);
                };
                window[RETRY_CLEANUP]?.();
                window[RETRY_CLEANUP] = () => {
                  retryTimers.forEach((timer) => window.clearTimeout(timer));
                  retryTimers.clear();
                  delete window[RETRY_CLEANUP];
                };

  // The same roam/js macro can be rendered in the page, linked references and
  // sidebar at once. A DOM attribute is shared by those render contexts and
  // provides a synchronous lock before any async SmartBlock call begins.
  if (document.documentElement.getAttribute(LOCK_ATTR) === RUN_DATE) return;
  document.documentElement.setAttribute(LOCK_ATTR, RUN_DATE);
  if (window[KEY]?.date === RUN_DATE) return;
  window[KEY] = { date: RUN_DATE, running: true };

  const stringsOnDailyPage = (dailyPageUid) =>
    window.roamAlphaAPI.q(
      `[:find ?string
        :in $ ?daily-page-uid
        :where
        [?page :block/uid ?daily-page-uid]
        [?block :block/page ?page]
        [?block :block/string ?string]]`,
      dailyPageUid
    ) || [];

  const run = async (attempt = 0) => {
    const api = window.roamAlphaAPI;
    const trigger = window.roamjs?.extension?.smartblocks?.triggerSmartblock;
    if (!api?.q || !api?.util?.dateToPageUid || !api?.util?.dateToPageTitle || !trigger) {
      if (attempt < 80) scheduleRetry(() => run(attempt + 1), 250);
      else window[KEY].running = false;
      return;
    }

    const now = new Date();
    const dailyPageUid = api.util.dateToPageUid(now);
    const title = api.util.dateToPageTitle(now);

    // Follow the same DNP lookup used by ((DeMkp4sw_)): resolve today's page
    // by date UID, then inspect blocks whose :block/page is that DNP.
    const pageExists = api.q(
      `[:find ?page . :in $ ?uid :where [?page :block/uid ?uid]]`,
      dailyPageUid
    );
    if (!pageExists) {
      window[KEY] = { date: RUN_DATE, running: false, missingPage: true };
      return;
    }

    const alreadyExists = stringsOnDailyPage(dailyPageUid).some(([string]) =>
      String(string || "").includes(SIGNATURE)
    );
    if (alreadyExists) {
      window[KEY] = { date: now.toDateString(), running: false, skipped: true };
      return;
    }

    const day = now.getDay();
    const srcUid = day === 0 || day === 6 ? WEEKEND_UID : WEEKDAY_UID;
    try {
      const firstUid = await trigger({ srcUid, targetName: title });
      window[KEY] = {
        date: now.toDateString(),
        running: false,
        srcUid,
        firstUid: firstUid || "",
      };
    } catch (error) {
      window[KEY] = { date: now.toDateString(), running: false, error: String(error) };
    }
  };

  run();
})();
},

"calendar-quick": () => {
(() => {
  const KEY = "__delmarCalendarQuickCleanup";
  if (typeof window[KEY] === "function") window[KEY]();

  const openToday = () =>
    window.roamAlphaAPI.ui.mainWindow.openDailyNotes();

  const getDatePageUid = (title) =>
    window.roamAlphaAPI.q(
      '[:find ?uid . :in $ ?title :where [?p :node/title ?title] [?p :block/uid ?uid]]',
      title
    );

  const isDateTitle = (title) => {
    try {
      return Boolean(window.roamAlphaAPI.util.pageTitleToDate(title));
    } catch (_) {
      return false;
    }
  };

  const onDoubleClick = (event) => {
    if (!event.target.closest(".rm-topbar .bp3-icon-calendar")) return;
    event.preventDefault();
    event.stopPropagation();
    openToday();
  };

  const onShiftClick = (event) => {
    if (!event.shiftKey) return;
    const ref = event.target.closest("[data-link-title]");
    const title = ref?.getAttribute("data-link-title") || "";
    if (!isDateTitle(title)) return;

    const uid = getDatePageUid(title);
    if (!uid) return;

    event.preventDefault();
    event.stopPropagation();
    window.roamAlphaAPI.ui.rightSidebar.addWindow({
      window: { type: "outline", "block-uid": uid }
    });
  };

  document.addEventListener("dblclick", onDoubleClick, true);
  document.addEventListener("click", onShiftClick, true);

  window[KEY] = () => {
    document.removeEventListener("dblclick", onDoubleClick, true);
    document.removeEventListener("click", onShiftClick, true);
    delete window[KEY];
  };

  console.log("[顶部日历 1/5] 快捷操作已加载；普通点击沿用原生，Shift 点击兼容右栏，双击回今天。");
})();
},

"calendar-preview": () => {
(() => {
  const KEY = "__delmarCalendarPreviewCleanup";
  const STYLE_ID = "delmar-calendar-preview-style";
  const TOOLTIP_ID = "delmar-calendar-tooltip";
  if (typeof window[KEY] === "function") window[KEY]();

  document.getElementById(STYLE_ID)?.remove();
  document.getElementById(TOOLTIP_ID)?.remove();

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = [
    ".bp3-datepicker{background:#fffaf0!important;border-color:rgba(26,26,46,.16)!important}",
    ".bp3-datepicker .DayPicker,.bp3-datepicker .DayPicker-Month,.bp3-datepicker .DayPicker-Caption{background:#fffaf0!important}",
    ".bp3-datepicker .DayPicker-Weekdays,.bp3-datepicker .DayPicker-Body{background:#fffaf0!important}",
    ".bp3-datepicker .bp3-datepicker-navbar,.bp3-datepicker .bp3-datepicker-caption{background:#fffaf0!important}",
    ".DayPicker-Day{padding:2px!important}",
              ".DayPicker-Day--today .bp3-datepicker-day-wrapper{box-shadow:0 0 0 2px #7d6aa3,0 0 0 4px rgba(244,215,88,.72)!important;font-weight:800!important}",
    ".bp3-datepicker-day-wrapper.delmar-cal-day{position:relative;border-radius:50%;transition:background .12s ease,box-shadow .12s ease}",
    ".delmar-cal-day[data-level='1']{background:#f7efcf}",
    ".delmar-cal-day[data-level='2']{background:#efdf9f}",
    ".delmar-cal-day[data-level='3']{background:#e3ca69}",
    ".delmar-cal-day[data-level='4']{background:#c9aa45;color:#1a1a2e;font-weight:700}",
    ".delmar-cal-day[data-mentioned='1']{box-shadow:0 0 0 1.5px #7d6aa3}",
    ".delmar-cal-status{position:absolute;right:-5px;bottom:-4px;display:flex;gap:2px;align-items:center;z-index:2;" +
      "padding:0 3px;height:12px;border:1px solid rgba(26,26,46,.65);border-radius:7px;background:#fffaf0;" +
      "color:#1a1a2e;font:700 8px/10px Inter,'Noto Sans SC',sans-serif;letter-spacing:-.2px;white-space:nowrap;box-sizing:border-box}",
    ".delmar-cal-status .done{color:#62528c}",
    ".delmar-cal-status .todo{color:#9a5a2f}",
    "#" + TOOLTIP_ID + "{position:fixed;z-index:10000;max-width:270px;min-width:190px;padding:10px 12px;" +
      "border:1px solid rgba(26,26,46,.28);border-top:3px solid #e3ca69;border-radius:4px;background:#fffdf7;" +
      "color:#1a1a2e;box-shadow:0 8px 24px rgba(26,26,46,.16);font:12px/1.55 Inter,'Noto Sans SC',sans-serif;pointer-events:none}",
    "#" + TOOLTIP_ID + " .date{font-family:Georgia,'Noto Serif SC',serif;font-size:14px;font-weight:700;margin-bottom:5px}",
    "#" + TOOLTIP_ID + " .meta{font-size:10px;letter-spacing:.04em;text-transform:uppercase;color:#5d6074;margin-bottom:5px}",
    "#" + TOOLTIP_ID + " .preview{padding-top:5px;border-top:1px solid rgba(26,26,46,.12);color:#414354;white-space:normal;overflow-wrap:anywhere;word-break:break-word;max-height:150px;overflow:auto}"
  ].join("");
  document.head.appendChild(style);

  const cache = new Map();
  const refCache = new Map();

  const getRefText = (uid) => {
    if (refCache.has(uid)) return refCache.get(uid);
    const text = window.roamAlphaAPI.q(
      '[:find ?text . :in $ ?uid :where [?b :block/uid ?uid] [?b :block/string ?text]]',
      uid
    ) || "";
    refCache.set(uid, text);
    return text;
  };

  const effectiveTexts = (text) => {
    const result = [text || ""];
    const matches = String(text || "").matchAll(/\(\(([A-Za-z0-9_-]{9})\)\)/g);
    for (const match of matches) {
      const refText = getRefText(match[1]);
      if (refText) result.push(refText);
    }
    return result;
  };

  const getInfo = (title) => {
    if (cache.has(title)) return cache.get(title);

    const rows = window.roamAlphaAPI.q(
      '[:find ?uid ?text :in $ ?title :where ' +
      '[?page :node/title ?title] [?block :block/page ?page] ' +
      '[?block :block/uid ?uid] [?block :block/string ?text]]',
      title
    ) || [];

    const expanded = rows.flatMap(([, text]) => effectiveTexts(text));
    const todo = expanded.filter((text) => text.includes("{{[[TODO]]}}")).length;
    const done = expanded.filter((text) => text.includes("{{[[DONE]]}}")).length;
    const mentions = window.roamAlphaAPI.q(
      '[:find (count ?block) . :in $ ?title :where ' +
      '[?page :node/title ?title] [?block :block/refs ?page]]',
      title
    ) || 0;

    const preview = expanded
      .filter((text) => text && !text.startsWith("{{[[TODO]]}}") && !text.startsWith("{{[[DONE]]}}"))
      .map((text) => text
        .replace(/\(\([A-Za-z0-9_-]{9}\)\)/g, "")
        .replace(/\{\{\[\[(?:TODO|DONE)\]\]\}\}/g, "")
        .replace(/\[\[|\]\]/g, "")
        .trim())
      .filter(Boolean)
      .slice(0, 3);

    const info = { blocks: rows.length, todo, done, mentions, preview };
    cache.set(title, info);
    return info;
  };

  const levelFor = (count) =>
    count <= 0 ? 0 : count <= 3 ? 1 : count <= 8 ? 2 : count <= 20 ? 3 : 4;

  const decorate = () => {
    document.querySelectorAll('.DayPicker-Day[aria-label]').forEach((cell) => {
      const date = new Date(cell.getAttribute("aria-label") + " 00:00:00");
      if (Number.isNaN(date.getTime())) return;
      const title = window.roamAlphaAPI.util.dateToPageTitle(date);
      if (cell.dataset.delmarPreviewDate === title) return;

      cell.dataset.delmarPreviewDate = title;
      const wrapper = cell.querySelector(".bp3-datepicker-day-wrapper");
      if (!wrapper) return;

      wrapper.classList.add("delmar-cal-day");
      wrapper.querySelector(".delmar-cal-status")?.remove();
      delete wrapper.dataset.level;
      delete wrapper.dataset.mentioned;

      const info = getInfo(title);
      const level = levelFor(info.blocks);
      if (level) wrapper.dataset.level = String(level);
      if (info.mentions) wrapper.dataset.mentioned = "1";

      if (info.todo || info.done) {
        const status = document.createElement("span");
        status.className = "delmar-cal-status";
        if (info.todo) {
          const todo = document.createElement("span");
          todo.className = "todo";
          todo.textContent = "○" + info.todo;
          status.appendChild(todo);
        }
        if (info.done) {
          const done = document.createElement("span");
          done.className = "done";
          done.textContent = "✓" + info.done;
          status.appendChild(done);
        }
        wrapper.appendChild(status);
      }
    });
  };

  let activeCell = null;
  const hideTooltip = () => { document.getElementById(TOOLTIP_ID)?.remove(); activeCell = null; };
  const showTooltip = (cell) => {
    if (activeCell === cell && document.getElementById(TOOLTIP_ID)) return;
    hideTooltip();
    const title = cell.dataset.delmarPreviewDate;
    if (!title) return;
    const info = getInfo(title);
    if (!info.blocks && !info.mentions && !info.todo && !info.done) return;

    document.getElementById(TOOLTIP_ID)?.remove();
    const tooltip = document.createElement("div");
    tooltip.id = TOOLTIP_ID;
    activeCell = cell;

    const date = document.createElement("div");
    date.className = "date";
    date.textContent = title;

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent =
      info.blocks + " " + calendarText("blocks") + "  ·  ○" + info.todo + " " + calendarText("todo") + "  ·  ✓" + info.done + " " + calendarText("done") +
      (info.mentions ? "  ·  " + info.mentions + " " + calendarText("mentions") : "");

    tooltip.append(date, meta);
    if (info.preview.length) {
      const preview = document.createElement("div");
      preview.className = "preview";
      preview.textContent = info.preview.join(" · ");
      tooltip.appendChild(preview);
    }

    document.body.appendChild(tooltip);
    const rect = cell.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();
    const left = Math.min(window.innerWidth - tipRect.width - 10, Math.max(10, rect.left + rect.width + 8));
    const top = Math.min(window.innerHeight - tipRect.height - 10, Math.max(10, rect.top - 4));
    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
  };

  const onMouseOver = (event) => {
    const cell = event.target.closest?.('.DayPicker-Day[aria-label]');
    if (cell) showTooltip(cell);
  };
  const onMouseOut = (event) => {
    const cell = event.target.closest?.('.DayPicker-Day[aria-label]');
    if (cell && !cell.contains(event.relatedTarget)) {
      hideTooltip();
    }
  };

  const onPointerMove = event => {
    const cell = event.target.closest?.('.DayPicker-Day[aria-label]');
    if (activeCell && cell !== activeCell) hideTooltip();
  };
  const onVisibility = () => { if (document.hidden) hideTooltip(); };
  const onEscape = event => { if (event.key === "Escape") hideTooltip(); };
  let queued = false;
  let frame = 0;
  let stopped = false;
  const schedule = () => {
    if (activeCell && (!activeCell.isConnected || !activeCell.matches(":hover"))) hideTooltip();
    if (queued || stopped) return;
    queued = true;
    frame = requestAnimationFrame(() => {
      queued = false;
      if (!stopped) decorate();
    });
  };

  const observer = window.__magCore.watch("runner:calendar-preview:1", schedule);
  observer.observe(document.body, { childList: true, subtree: true });
  document.addEventListener("mouseover", onMouseOver, true);
  document.addEventListener("mouseout", onMouseOut, true);
  document.addEventListener("pointermove", onPointerMove, true);
  document.addEventListener("mousemove", onPointerMove, true);
  document.addEventListener("scroll", hideTooltip, true);
  document.addEventListener("visibilitychange", onVisibility);
  document.addEventListener("keydown", onEscape, true);
  window.addEventListener("blur", hideTooltip);
  window.addEventListener("mouseleave", hideTooltip);

  const refreshTimer = setInterval(() => {
    cache.clear();
    refCache.clear();
    document.querySelectorAll("[data-delmar-preview-date]")
      .forEach((cell) => delete cell.dataset.delmarPreviewDate);
    schedule();
  }, 15000);

  schedule();

  window[KEY] = () => {
    stopped = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    clearInterval(refreshTimer);
    document.removeEventListener("mouseover", onMouseOver, true);
    document.removeEventListener("mouseout", onMouseOut, true);
    document.removeEventListener("pointermove", onPointerMove, true);
    document.removeEventListener("mousemove", onPointerMove, true);
    document.removeEventListener("scroll", hideTooltip, true);
    document.removeEventListener("visibilitychange", onVisibility);
    document.removeEventListener("keydown", onEscape, true);
    window.removeEventListener("blur", hideTooltip);
    window.removeEventListener("mouseleave", hideTooltip);
    hideTooltip();
    document.getElementById(STYLE_ID)?.remove();
    document.getElementById(TOOLTIP_ID)?.remove();
    document.querySelectorAll(".delmar-cal-status").forEach((el) => el.remove());
    document.querySelectorAll(".delmar-cal-day").forEach((el) => {
      el.classList.remove("delmar-cal-day");
      delete el.dataset.level;
      delete el.dataset.mentioned;
    });
    delete window[KEY];
  };

  console.log("[顶部日历 2/5] 杂志风日期热度、任务统计与悬停预览已加载。");
})();

},

"calendar-carry": () => {
(() => {
  const KEY = "__delmarCalendarCarryCleanup";
  const STYLE_ID = "delmar-calendar-carry-style";
  const PANEL_ID = "delmar-calendar-carry-panel";
  const ENTRY_CLASS = "delmar-calendar-carry-entry";
  const TOOLS_CLASS = "delmar-calendar-tools";
  const OLD_BUTTON_ID = "delmar-calendar-carry-button";
  const UNDO_KEY = "__delmarCarryMoveUndo";

  if (typeof window[KEY] === "function") window[KEY]();
  document.getElementById(STYLE_ID)?.remove();
  document.getElementById(PANEL_ID)?.remove();
  document.getElementById(OLD_BUTTON_ID)?.remove();
  document.querySelectorAll("." + TOOLS_CLASS).forEach((el) => { const plan = el.querySelector(".folio-calendar-plan"); const bar = el.closest(".bp3-datepicker")?.querySelector(".delmar-calendar-capture-bar"); if (plan && bar) bar.append(plan); el.remove(); });

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = [
    "." + TOOLS_CLASS + "{display:flex;align-items:center;justify-content:flex-end;gap:5px;min-height:24px;" +
      "padding:3px 6px 4px;border-top:1px solid rgba(26,26,46,.12);background:#fffaf0}",
    "." + ENTRY_CLASS + "{height:18px;padding:0 7px;border:1px solid rgba(26,26,46,.22);border-radius:10px;" +
      "background:#f5f0e6;color:#1a1a2e;cursor:pointer;font:700 9px/16px Inter,'Noto Sans SC',sans-serif;letter-spacing:.02em}",
    "." + ENTRY_CLASS + ":hover{background:#efe3a8;border-color:#c9aa45}",
    "." + ENTRY_CLASS + ".is-undo{background:#fffdf7;border-color:#c9aa45}",
    "#" + PANEL_ID + "{position:fixed;z-index:10004;" +
      "display:flex;align-items:center;gap:7px;padding:9px 11px;border:1px solid rgba(26,26,46,.28);" +
      "border-top:3px solid #e3ca69;border-radius:4px;background:#fffdf7;color:#1a1a2e;" +
      "box-shadow:0 8px 24px rgba(26,26,46,.16);font:11px/1.4 Inter,'Noto Sans SC',sans-serif}",
    "#" + PANEL_ID + " .message{font-family:Georgia,'Noto Serif SC',serif;font-size:12px;font-weight:700;white-space:nowrap}",
    "#" + PANEL_ID + " button{border:1px solid rgba(26,26,46,.2);border-radius:3px;padding:4px 7px;" +
      "cursor:pointer;background:#f5f0e6;color:#1a1a2e;font:600 10px/1.2 Inter,'Noto Sans SC',sans-serif;white-space:nowrap}",
    "#" + PANEL_ID + " .is-move{background:#efe3a8}",
    "#" + PANEL_ID + " .is-undo{border-color:#c9aa45;background:#fffdf7}",
    "#" + PANEL_ID + " .is-close{border:0;background:transparent;font-size:15px;padding:2px 4px}"
  ].join("");
  document.head.appendChild(style);

  const dayTitle = (date) => window.roamAlphaAPI.util.dateToPageTitle(date);
  const dayUid = (date) => window.roamAlphaAPI.util.dateToPageUid(date);
  const yesterdayDate = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
  };

  const getBlockText = (uid) =>
    window.roamAlphaAPI.q(
      '[:find ?text . :in $ ?uid :where [?b :block/uid ?uid] [?b :block/string ?text]]',
      uid
    ) || "";

  const getTasks = (title) => {
    const rows = window.roamAlphaAPI.q(
      '[:find ?uid ?text :in $ ?title :where ' +
      '[?page :node/title ?title] [?block :block/page ?page] ' +
      '[?block :block/uid ?uid] [?block :block/string ?text]]',
      title
    ) || [];
    const tasks = new Map();
    for (const [uid, rawText] of rows) {
      const text = String(rawText || "");
      let isTodo = text.includes("{{[[TODO]]}}");
      if (!isTodo) {
        for (const match of text.matchAll(/\(\(([A-Za-z0-9_-]{9})\)\)/g)) {
          if (getBlockText(match[1]).includes("{{[[TODO]]}}")) {
            isTodo = true;
            break;
          }
        }
      }
      if (isTodo) tasks.set(uid, { uid, text });
    }
    return [...tasks.values()];
  };

  const currentTasks = () => getTasks(dayTitle(yesterdayDate()));
  const getUndo = () => {
    try {
      const value = JSON.parse(sessionStorage.getItem(UNDO_KEY) || "null");
      if (!value || !Array.isArray(value.blocks) || !value.blocks.length) return null;
      const blocks = value.blocks.map((block) => {
        let parentUid = block.parentUid;
        let order = block.order;
        if (Array.isArray(parentUid)) {
          const pair = Array.isArray(parentUid[0]) ? parentUid[0] : parentUid;
          parentUid = pair[0];
          order = pair[1];
        }
        return { uid: block.uid, parentUid, order };
      }).filter((block) =>
        typeof block.uid === "string" &&
        typeof block.parentUid === "string" &&
        Number.isFinite(block.order)
      );
      return blocks.length ? { ...value, blocks } : null;
    } catch (_) {
      return null;
    }
  };

  const ensureToday = async () => {
    const date = new Date();
    const uid = dayUid(date);
    const exists = window.roamAlphaAPI.q(
      '[:find ?e . :in $ ?uid :where [?e :block/uid ?uid]]',
      uid
    );
    if (!exists) await window.roamAlphaAPI.createPage({ page: { uid, title: dayTitle(date) } });
    return uid;
  };

  const getLocation = (uid) => {
    const row = window.roamAlphaAPI.q(
      '[:find ?parentUid ?order :in $ ?uid :where ' +
      '[?b :block/uid ?uid] [?b :block/order ?order] ' +
      '[?parent :block/children ?b] [?parent :block/uid ?parentUid]]',
      uid
    );
    return row ? { uid, parentUid: row[0], order: row[1] } : null;
  };

  const makeButton = (label, className) => {
    const el = document.createElement("button");
    el.type = "button";
    el.className = className || "";
    el.textContent = label;
    return el;
  };

  const closePanel = () => document.getElementById(PANEL_ID)?.remove();

  const placePanel = (panel, anchor) => {
    const rect = anchor?.getBoundingClientRect?.();
    if (!rect) return;
    panel.style.left = "8px";
    panel.style.top = Math.min(window.innerHeight - panel.offsetHeight - 8, rect.bottom + 6) + "px";
    const target = panel.querySelector(".is-move, .is-undo") || panel.querySelector("button");
    const panelBox = panel.getBoundingClientRect();
    const targetBox = target?.getBoundingClientRect?.();
    const targetOffset = targetBox
      ? targetBox.left - panelBox.left + targetBox.width / 2
      : panelBox.width / 2;
    const desiredLeft = rect.left + rect.width / 2 - targetOffset;
    panel.style.left = Math.max(8, Math.min(window.innerWidth - panelBox.width - 8, desiredLeft)) + "px";
  };

  const showStatus = (anchor, message, isError = false) => {
    closePanel();
    const panel = document.createElement("div");
    panel.id = PANEL_ID;
    const text = document.createElement("span");
    text.className = "message";
    text.textContent = message;
    if (isError) text.style.color = "#9a4f45";
    panel.appendChild(text);
    document.body.appendChild(panel);
    placePanel(panel, anchor);
    if (!isError) setTimeout(() => panel.remove(), 1400);
  };

  const orderedForRestore = (blocks) => {
    const pending = [...blocks];
    const result = [];
    while (pending.length) {
      const pendingIds = new Set(pending.map((block) => block.uid));
      const index = pending.findIndex((block) => !pendingIds.has(block.parentUid));
      result.push(...pending.splice(index < 0 ? 0 : index, 1));
    }
    return result;
  };

  const undoMove = async (anchor) => {
    const undo = getUndo();
    if (!undo) {
      showStatus(anchor, calendarText("noUndo"), true);
      return;
    }
    showStatus(anchor, calendarText("restoring"));
    const failed = [];
    for (const block of orderedForRestore(undo.blocks)) {
      try {
        await window.roamAlphaAPI.moveBlock({
          location: { "parent-uid": block.parentUid, order: block.order },
          block: { uid: block.uid }
        });
        // moveBlock resolves only after Roam accepts the destination; a second Datalog read can lag behind.
      } catch (error) {
        failed.push(block);
        console.error("[顶部日历 3/5] 撤销迁移失败", block, error);
      }
    }
    if (failed.length) {
      sessionStorage.setItem(UNDO_KEY, JSON.stringify({ movedAt: undo.movedAt, blocks: failed }));
      showStatus(anchor, calendarText("restoreFailed", {n:failed.length}), true);
    } else {
      sessionStorage.removeItem(UNDO_KEY);
      showStatus(anchor, calendarText("restored"));
    }
    syncCalendarTools();
  };

  const renderPanel = (anchor) => {
    closePanel();
    const tasks = currentTasks();
    const undo = getUndo();
    const panel = document.createElement("div");
    panel.id = PANEL_ID;
    const message = document.createElement("span");
    message.className = "message";
    message.textContent = tasks.length ? calendarText("pending", {n:tasks.length}) : calendarText("none");
    panel.appendChild(message);

    if (tasks.length) {
      const refButton = makeButton(calendarText("reference"), "is-ref");
      const moveButton = makeButton(calendarText("move"), "is-move");
      refButton.onclick = async () => {
        const parentUid = await ensureToday();
        for (const task of tasks) {
          await window.roamAlphaAPI.createBlock({
            location: { "parent-uid": parentUid, order: 999999 },
            block: { string: "((" + task.uid + "))" }
          });
        }
        closePanel();
        syncCalendarTools();
      };
      moveButton.onclick = async () => {
        const parentUid = await ensureToday();
        const moved = [];
        moveButton.disabled = true;
        message.textContent = calendarText("moving");
        for (const task of tasks) {
          const original = getLocation(task.uid);
          if (!original) continue;
          try {
            await window.roamAlphaAPI.moveBlock({
              location: { "parent-uid": parentUid, order: 999999 },
              block: { uid: task.uid }
            });
            moved.push(original);
            sessionStorage.setItem(UNDO_KEY, JSON.stringify({ movedAt: Date.now(), blocks: moved }));
          } catch (error) {
            console.error("[顶部日历 3/5] 迁移失败", task, error);
          }
        }
        if (moved.length) {
          showStatus(anchor, calendarText("moved", {n:moved.length}));
        } else {
          showStatus(anchor, calendarText("notMoved"), true);
        }
        syncCalendarTools();
      };
      panel.append(refButton, moveButton);
    }

    if (undo) {
      const undoButton = makeButton(calendarText("undoLast"), "is-undo");
      undoButton.onclick = () => undoMove(anchor);
      panel.appendChild(undoButton);
    }

    const closeButton = makeButton("×", "is-close");
    closeButton.title = calendarText("close");
    closeButton.onclick = closePanel;
    panel.appendChild(closeButton);
    document.body.appendChild(panel);
    placePanel(panel, anchor);
  };

  const syncCalendarToolsForPicker = (datepicker) => {
    document.getElementById(OLD_BUTTON_ID)?.remove();
    const host = calendarHost(datepicker);
    let tools = host.querySelector(":scope > ." + TOOLS_CLASS);
    if (!tools) {
      tools = document.createElement("div");
      tools.className = TOOLS_CLASS;
      host.appendChild(tools);
    }
    const count = currentTasks().length;
    const state = count + "|" + Boolean(getUndo());
    if (tools.dataset.state === state) return;
    tools.dataset.state = state;
    tools.replaceChildren();
    const entry = makeButton(calendarText("carry") + (count ? " " + count : ""), ENTRY_CLASS);
    entry.title = calendarText("carryTitle");
    entry.onclick = (event) => { event.preventDefault(); event.stopPropagation(); renderPanel(entry); };
    tools.appendChild(entry);
    if (getUndo()) {
      const undoEntry = makeButton(calendarText("undo"), ENTRY_CLASS + " is-undo");
      undoEntry.title = calendarText("undoTitle");
      undoEntry.onclick = (event) => { event.preventDefault(); event.stopPropagation(); undoMove(undoEntry); };
      tools.appendChild(undoEntry);
    }
  };

  const syncCalendarTools = () => visibleCalendars().forEach(syncCalendarToolsForPicker);

  const observer = window.__magCore.watch("runner:calendar-carry:1", (mutations) => {
    const opened = mutations.some((mutation) =>
      [...mutation.addedNodes].some((node) =>
        node instanceof Element &&
        (node.matches(".bp3-datepicker") || node.querySelector(".bp3-datepicker"))
      )
    );
    if (opened) syncCalendarTools();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  const timer = setInterval(syncCalendarTools, 1200);
  syncCalendarTools();

  window[KEY] = () => {
    observer.disconnect();
    clearInterval(timer);
    closePanel();
    document.getElementById(OLD_BUTTON_ID)?.remove();
    document.querySelectorAll("." + TOOLS_CLASS).forEach((el) => { const plan = el.querySelector(".folio-calendar-plan"); const bar = el.closest(".bp3-datepicker")?.querySelector(".delmar-calendar-capture-bar"); if (plan && bar) bar.append(plan); el.remove(); });
    document.getElementById(STYLE_ID)?.remove();
    delete window[KEY];
  };

  console.log("[顶部日历 3/5] 遗留任务已收进日历，并支持精确撤销迁移。");
})();
},

"calendar-capture": () => {
(() => {
  const KEY = "__delmarCalendarCaptureCleanup";
  const STYLE_ID = "delmar-calendar-capture-style";
  const BAR_CLASS = "delmar-calendar-capture-bar";
  const TEMPLATE_UID = "MR5mXjbsv";
  if (typeof window[KEY] === "function") window[KEY]();
  document.getElementById(STYLE_ID)?.remove();
  document.querySelectorAll("." + BAR_CLASS + ", .folio-calendar-plan").forEach((el) => el.remove());

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = [
    "." + BAR_CLASS + "{display:grid;grid-template-columns:minmax(85px,1fr) auto auto auto;gap:4px;align-items:center;" +
      "padding:5px 6px;border-top:1px solid rgba(26,26,46,.12);background:#fffaf0}",
    "." + BAR_CLASS + " input{min-width:0;height:23px;box-sizing:border-box;padding:3px 6px;border:1px solid rgba(26,26,46,.25);" +
      "border-radius:3px;background:#f5f0e6;color:#1a1a2e;outline:none;font:10px Inter,'Noto Sans SC',sans-serif}",
    "." + BAR_CLASS + " input:focus{border-color:#7d6aa3;box-shadow:0 0 0 1px #7d6aa3}",
    "." + BAR_CLASS + " button{height:21px;padding:0 6px;border:1px solid rgba(26,26,46,.22);border-radius:10px;background:#fffdf7;" +
      "color:#1a1a2e;cursor:pointer;white-space:nowrap;font:700 9px/19px Inter,'Noto Sans SC',sans-serif}",
    "." + BAR_CLASS + " button:hover{background:#efe3a8;border-color:#c9aa45}",
    "." + BAR_CLASS + " .status{grid-column:1/-1;display:none;color:#7d6a28;font:9px/1.2 Inter,'Noto Sans SC',sans-serif}",
    "." + BAR_CLASS + ".has-status .status{display:block}"
  ].join("");
  document.head.appendChild(style);

  const titleOf = (date) => window.roamAlphaAPI.util.dateToPageTitle(date);
  const uidOf = (date) => window.roamAlphaAPI.util.dateToPageUid(date);
  const normalize = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
  const ensurePage = async (date) => {
    const uid = uidOf(date);
    const found = window.roamAlphaAPI.q('[:find ?e . :in $ ?uid :where [?e :block/uid ?uid]]', uid);
    if (!found) await window.roamAlphaAPI.createPage({ page: { uid, title: titleOf(date) } });
    return uid;
  };
  const append = async (date, string) => {
    const parentUid = await ensurePage(date);
    await window.roamAlphaAPI.createBlock({ location: { "parent-uid": parentUid, order: 999999 }, block: { string } });
  };
  const childrenOf = (uid) =>
    (window.roamAlphaAPI.q(
      '[:find ?childUid ?text ?order :in $ ?uid :where ' +
      '[?parent :block/uid ?uid] [?parent :block/children ?child] ' +
      '[?child :block/uid ?childUid] [?child :block/string ?text] [?child :block/order ?order]]', uid
    ) || []).sort((a, b) => a[2] - b[2]);

  const copyChildren = async (sourceUid, targetUid) => {
    for (const [childUid, text] of childrenOf(sourceUid)) {
      const newUid = window.roamAlphaAPI.util.generateUID();
      await window.roamAlphaAPI.createBlock({
        location: { "parent-uid": targetUid, order: 999999 }, block: { uid: newUid, string: text }
      });
      await copyChildren(childUid, newUid);
    }
  };
  const createPlan = async (date) => {
    const parentUid = await ensurePage(date);
    const existing = window.roamAlphaAPI.q(
      '[:find ?uid . :in $ ?pageUid :where [?page :block/uid ?pageUid] [?page :block/children ?block] ' +
      '[?block :block/uid ?uid] [?block :block/string "今日计划"]]', parentUid
    );
    if (existing) return calendarText("planExists");
    await copyChildren(TEMPLATE_UID, parentUid);
    return calendarText("copied");
  };

  const syncBarForPicker = (datepicker) => {
    const host = calendarHost(datepicker);
    const existing = host.querySelector(":scope > ." + BAR_CLASS);
    if (existing) {
      const plan = datepicker.querySelector(".folio-calendar-plan");
      const tools = datepicker.querySelector(".delmar-calendar-tools");
      if (plan && tools && plan.parentElement !== tools) tools.append(plan);
      if (plan && !tools && plan.parentElement !== existing) existing.append(plan);
      return;
    }
    const bar = document.createElement("div"); bar.className = BAR_CLASS;
    let targetDate = normalize(new Date());
    const input = document.createElement("input"); input.placeholder = calendarText("capture");
    const status = document.createElement("div"); status.className = "status";
    const setStatus = (message, error = false) => {
      status.textContent = message; status.style.color = error ? "#9a4f45" : "#7d6a28"; bar.classList.add("has-status");
      setTimeout(() => bar.classList.remove("has-status"), 1800);
    };
    const run = async (action) => {
      try { setStatus(calendarText("working")); await action(); input.value = ""; }
      catch (error) { setStatus(calendarText("failed"), true); console.error("[顶部日历 4/5] 快速记录失败", error); }
    };
    const makeButton = (label, action) => {
      const button = document.createElement("button"); button.type = "button"; button.textContent = label;
      button.onclick = (event) => { event.preventDefault(); event.stopPropagation(); action(); }; return button;
    };
    const todo = makeButton("＋TODO", () => {
      const text = input.value.trim(); if (!text) return input.focus();
      run(async () => { await append(targetDate, "{{[[TODO]]}} " + text); setStatus(calendarText("todoAdded") + titleOf(targetDate)); });
    });
    const note = makeButton(calendarText("addNote"), () => {
      const text = input.value.trim(); if (!text) return input.focus();
      run(async () => { await append(targetDate, text); setStatus(calendarText("noteAdded") + titleOf(targetDate)); });
    });
    const plan = makeButton(calendarText("plan"), () => run(async () => setStatus(await createPlan(targetDate))));
    plan.classList.add("folio-calendar-plan");
    bar.append(input, todo, note, plan, status);
    const carry = host.querySelector(":scope > .delmar-calendar-tools");
    host.insertBefore(bar, carry || null);
    bar._setTargetDate = (date) => { targetDate = normalize(date); input.placeholder = titleOf(targetDate) + "…"; input.focus(); };
  };

  const syncBar = () => visibleCalendars().forEach(syncBarForPicker);

  const onContextMenu = (event) => {
    const cell = event.target.closest?.('.DayPicker-Day[aria-label]'); if (!cell) return;
    const date = new Date(cell.getAttribute("aria-label") + " 00:00:00"); if (Number.isNaN(date.getTime())) return;
    event.preventDefault(); event.stopPropagation(); syncBar();
    cell.closest(".bp3-datepicker")?.querySelector("." + BAR_CLASS)?._setTargetDate?.(date);
  };
  document.addEventListener("contextmenu", onContextMenu, true);
  const observer = window.__magCore.watch("runner:calendar-capture:1", syncBar);
  observer.observe(document.body, { childList: true, subtree: true });
  const timer = setInterval(syncBar, 1000); syncBar();
  window[KEY] = () => {
    observer.disconnect(); clearInterval(timer); document.removeEventListener("contextmenu", onContextMenu, true);
    document.querySelectorAll("." + BAR_CLASS + ", .folio-calendar-plan").forEach((el) => el.remove()); document.getElementById(STYLE_ID)?.remove(); delete window[KEY];
  };
  console.log("[顶部日历 4/5] TODO、笔记、今日计划已直接显示；计划复制 MR5mXjbsv 子树。");
})();
},

"calendar-keyboard": () => {
(() => {
  const KEY = "__delmarCalendarKeyboardCleanup";
  const STYLE_ID = "delmar-calendar-keyboard-style";
  const PANEL_CLASS = "delmar-calendar-relative-panel";
  const COMMAND = calendarText("command");

  if (typeof window[KEY] === "function") window[KEY]();
  document.getElementById(STYLE_ID)?.remove();
  document.querySelectorAll("." + PANEL_CLASS).forEach((el) => el.remove());
  document.getElementById("delmar-calendar-jump-dialog")?.remove();

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = [
    '.bp3-datepicker[data-folio-calendar-enhanced="1"] > .bp3-daterangepicker-shortcuts{display:none!important}',
    ".bp3-datepicker:has(." + PANEL_CLASS + "){display:flex!important;align-items:stretch!important;background:var(--mag-paper,#fffaf0)!important}",
    "." + PANEL_CLASS + "{order:-1;width:174px;box-sizing:border-box;padding:11px 10px 9px;border-right:1px solid var(--mag-border,rgba(26,26,46,.14));" +
      "background:var(--mag-paper,#fffaf0);color:var(--mag-ink,#1a1a2e);font:11px/1.25 var(--mag-body,Inter,'Noto Sans SC',sans-serif)}",
    "." + PANEL_CLASS + " .title{margin:0 0 7px;font:700 12.5px/1.25 var(--mag-aside-font,Georgia,'Noto Serif SC',serif)}",
    "." + PANEL_CLASS + " input{width:100%;height:27px;box-sizing:border-box;margin:0 0 6px;padding:4px 7px;border:1px solid var(--mag-border,rgba(26,26,46,.28));" +
      "border-radius:3px;background:var(--mag-shell,#f5f0e6);color:var(--mag-ink,#1a1a2e);outline:none;font:10px/1.2 var(--mag-body,Inter,sans-serif)}",
    "." + PANEL_CLASS + " input:focus{border-color:var(--mag-purple,#7d6aa3);box-shadow:0 0 0 1px var(--mag-purple,#7d6aa3)}",
    "." + PANEL_CLASS + " button{display:block;width:100%;border:0;border-radius:3px;padding:5px 6px;text-align:left;background:transparent;color:var(--mag-ink,#1a1a2e);" +
      "cursor:pointer;font:11px/1.2 var(--mag-body,Inter,'Noto Sans SC',sans-serif)}",
    "." + PANEL_CLASS + " button:hover{background:var(--mag-yellow-soft,#efe3a8)}",
    "." + PANEL_CLASS + " .error{min-height:11px;margin-top:4px;color:#9a4f45;font-size:9px}"
  ].join("");
  document.head.appendChild(style);

  const titleOf = (date) => window.roamAlphaAPI.util.dateToPageTitle(date);
  const uidOf = (date) => window.roamAlphaAPI.util.dateToPageUid(date);
  const normalize = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);

  const openDate = async (rawDate) => {
    const date = normalize(rawDate);
    const uid = uidOf(date);
    const exists = window.roamAlphaAPI.q(
      '[:find ?e . :in $ ?uid :where [?e :block/uid ?uid]]',
      uid
    );
    if (!exists) {
      await window.roamAlphaAPI.createPage({ page: { uid, title: titleOf(date) } });
    }
    await window.roamAlphaAPI.ui.mainWindow.openPage({ page: { uid } });
  };

  const currentDailyDate = () => {
    const match = location.hash.match(/\/page\/([^/?]+)/);
    if (!match) return normalize(new Date());
    const title = window.roamAlphaAPI.q(
      '[:find ?title . :in $ ?uid :where [?page :block/uid ?uid] [?page :node/title ?title]]',
      match[1]
    );
    if (!title) return normalize(new Date());
    try {
      return normalize(window.roamAlphaAPI.util.pageTitleToDate(title) || new Date());
    } catch (_) {
      return normalize(new Date());
    }
  };

  const parseInput = (value) => {
    const input = value.trim();
    const key = input.toLowerCase();
    const relative = { today: 0, tomorrow: 1, yesterday: -1, [calendarText("today").toLowerCase()]:0, [calendarText("tomorrow").toLowerCase()]:1, [calendarText("yesterday").toLowerCase()]:-1 };
    if (Object.prototype.hasOwnProperty.call(relative, key)) {
      const date = new Date();
      date.setDate(date.getDate() + relative[key]);
      return normalize(date);
    }
    const iso = input.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
    if (iso) {
      const date = new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]), 12);
      return date.getMonth() === Number(iso[2]) - 1 && date.getDate() === Number(iso[3])
        ? date
        : null;
    }
    try {
      return window.roamAlphaAPI.util.pageTitleToDate(input) || null;
    } catch (_) {
      return null;
    }
  };

  const relativeDate = (kind) => {
    const date = normalize(new Date());
    if (kind === "yesterday") date.setDate(date.getDate() - 1);
    if (kind === "tomorrow") date.setDate(date.getDate() + 1);
    if (kind === "monday") date.setDate(date.getDate() + ((8 - date.getDay()) % 7 || 7));
    if (kind === "week") date.setDate(date.getDate() + 7);
    if (kind === "month") date.setMonth(date.getMonth() + 1);
    if (kind === "quarter") date.setMonth(date.getMonth() + 3);
    if (kind === "year") date.setFullYear(date.getFullYear() + 1);
    return date;
  };

  const visibleDatepicker = () => visibleCalendars().at(-1);
  const calendarIcon = () => document.querySelector(".rm-topbar .bp3-icon-calendar");

  const attachPanel = (datepicker, focusInput = false) => {
    datepicker.dataset.folioCalendarEnhanced = "1";
    const nativeShortcuts = datepicker.querySelector(":scope > .bp3-daterangepicker-shortcuts");
    const existing = datepicker.querySelector("." + PANEL_CLASS);
    if (existing) {
      if (focusInput) existing.querySelector("input")?.focus();
      return;
    }

    const panel = document.createElement("div");
    panel.className = PANEL_CLASS;
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = calendarText("jump");
    const input = document.createElement("input");
    input.placeholder = calendarText("input");
    const error = document.createElement("div");
    error.className = "error";
    panel.append(title, input);

    const quicks = [
      ["Today", "today"],
      ["Yesterday", "yesterday"],
      ["Tomorrow", "tomorrow"],
      ["Coming Monday", "monday"],
      ["1 week from now", "week"],
      ["1 month from now", "month"],
      ["3 months from now", "quarter"],
      ["1 year from now", "year"]
    ];

    for (const [index, [label, kind]] of quicks.entries()) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = calendarText(kind);
      button.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const nativeAction = nativeShortcuts?.querySelectorAll(".bp3-menu-item")[index];
        if (nativeAction) nativeAction.click();
        else openDate(relativeDate(kind));
      };
      panel.appendChild(button);
    }

    panel.appendChild(error);
    datepicker.appendChild(panel);
    if (focusInput) input.focus();

    input.onkeydown = async (event) => {
      if (event.key === "Escape") {
        // Let Roam dismiss this picker, rather than opening another one.
        input.blur();
        return;
      }
      if (event.key !== "Enter") return;
      event.preventDefault();
      const date = parseInput(input.value);
      if (!date) {
        error.textContent = calendarText("invalid");
        return;
      }
      if (!nativeShortcuts) { await openDate(date); return; }
      // Reference-date pickers must keep Roam's original replacement callback.
      const select = async (selector, value) => {
        const element = datepicker.querySelector(selector);
        if (!element || ![...element.options].some(option => option.value === String(value))) return false;
        element.value = String(value);
        element.dispatchEvent(new Event("change", {bubbles:true}));
        await new Promise(resolve => requestAnimationFrame(resolve));
        return true;
      };
      if (!await select(".bp3-datepicker-year-select select", date.getFullYear()) ||
          !await select(".bp3-datepicker-month-select select", date.getMonth())) {
        error.textContent = calendarText("invalid"); return;
      }
      const cell = [...datepicker.querySelectorAll(".DayPicker-Day[aria-label]")].find(cell => {
        const value = new Date(cell.getAttribute("aria-label"));
        return value.getFullYear() === date.getFullYear() && value.getMonth() === date.getMonth() && value.getDate() === date.getDate();
      });
      if (cell && cell.getAttribute("aria-disabled") !== "true") cell.click();
      else error.textContent = calendarText("invalid");
    };
  };

  let focusPicker = false;
  const waitForPicker = (focusInput = false) => {
    focusPicker = focusInput;
    const picker = visibleDatepicker();
    if (picker) { attachPanel(picker, focusPicker); focusPicker = false; }
  };
  window.__folioAttachCalendar = () => {
    const pickers = visibleCalendars();
    pickers.forEach((picker, index) => attachPanel(picker, focusPicker && index === pickers.length - 1));
    focusPicker = false;
  };

  const showJump = () => {
    const existing = visibleDatepicker();
    if (existing) {
      attachPanel(existing, true);
      return;
    }
    focusPicker = true;
    calendarIcon()?.click();
  };

  const onCalendarClick = (event) => {
    if (!event.target.closest?.(".rm-topbar .bp3-icon-calendar")) return;
    waitForPicker(false);
  };

  const isEditing = (target) =>
    target instanceof Element &&
    Boolean(target.closest("input, textarea, select, [contenteditable='true'], .CodeMirror"));

  const onKeyDown = async (event) => {
    if (event.repeat || event.isComposing || isEditing(event.target)) return;
    const match = (name) => window.__folioMatchesShortcut?.(event, name);
    let action = null;
    if (match("jump")) action = showJump;
    else if (match("today")) action = () => openDate(new Date());
    else if (match("daily")) action = () => window.roamAlphaAPI.ui.mainWindow.openDailyNotes();
    else if (match("previous") || match("next")) {
      const date = currentDailyDate();
      date.setDate(date.getDate() + (match("next") ? 1 : -1));
      action = () => openDate(date);
    }
    if (!action) return;
    event.preventDefault(); event.stopImmediatePropagation();
    await action();
  };

  document.addEventListener("click", onCalendarClick, true);
  document.addEventListener("keydown", onKeyDown, true);
  window.roamAlphaAPI.ui.commandPalette?.addCommand?.({ label: COMMAND, callback: showJump });

  window[KEY] = () => {
    delete window.__folioAttachCalendar;
    document.removeEventListener("click", onCalendarClick, true);
    document.removeEventListener("keydown", onKeyDown, true);
    window.roamAlphaAPI.ui.commandPalette?.removeCommand?.({ label: COMMAND });
    document.querySelectorAll("." + PANEL_CLASS).forEach((el) => el.remove());
    document.querySelectorAll("[data-folio-calendar-enhanced]").forEach(el => delete el.dataset.folioCalendarEnhanced);
    document.getElementById(STYLE_ID)?.remove();
    delete window[KEY];
  };

  console.log("[顶部日历 5/5] 点击日历与 G 共用同一套增强日历；T 打开今日页面，D 回到 Daily Notes。");
})();

},

"video-reader": () => {
/*
 * 22.4 Video Reader
 * - 只负责杂志式卡片、上传视频适配和原生控制按钮重排
 * - 时间戳、影院模式、时间戳列表全部复用 Roam 原生实现
 * - 不再创建 Focus / Fullscreen / Time / Timestamp 的第二套按钮
 */
(() => {
  const createVideoReader = (core) => {
  const { doc } = core;
  const api = window.roamAlphaAPI;
  const CLASS = "mag-video-reader";
  const records = new Map();
  let titleTimer = 0;

  const el = (tag, className, text) => {
    const node = doc.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  const readBlock = (uid) =>
    api?.q?.(
      '[:find ?s . :in $ ?uid :where [?b :block/uid ?uid] [?b :block/string ?s]]',
      uid
    ) || "";

  const sourceOf = (media, raw) => {
    const src = media.currentSrc || media.src || media.getAttribute("src") || "";
    const rawUrl = (String(raw).match(/https?:\/\/[^\s)\]}]+/i) || [src])[0] || src;
    let url = rawUrl.replace(/[.,;]+$/, "");
    if (/youtube\.com\/embed\//i.test(src)) {
      const id = src.match(/youtube\.com\/embed\/([^?&/]+)/i)?.[1] || "";
      url = id ? "https://www.youtube.com/watch?v=" + id : url;
    }
    return url;
  };

  const kindOf = (media, source) => {
    if (media.tagName === "VIDEO") return "Uploaded video";
    if (/youtu(?:\.be|be\.com)/i.test(source) || /youtube/i.test(media.src || "")) return "YouTube";
    if (/vimeo/i.test(source) || /vimeo/i.test(media.src || "")) return "Vimeo";
    return "Embedded video";
  };

  const isMediaFile = (value) => /\.(mp4|webm|mov|m4v|ogv|ogg)(?:$|\?)/i.test(value || "");

  const titleOf = (media, raw, source, kind) => {
    const live = media.getAttribute("title") || "";
    if (live && live !== "YouTube video player") return live;
    const label = String(raw).match(/\[([^\]]+)\]\(https?:\/\//)?.[1]?.trim();
    if (label && label !== "- YouTube") return label;
    try {
      const file = decodeURIComponent(new URL(source).pathname).split("/").filter(Boolean).pop() || "";
      if (isMediaFile(file)) return file;
    } catch (_) {}
    return kind;
  };

  const directShell = (media, input) => {
    let shell = media;
    while (shell.parentElement && shell.parentElement !== input) shell = shell.parentElement;
    return shell;
  };

  const nativeSelector = [
    ".rm-video-player__edit-btn",
    ".rm-video-player__comment-button",
    ".rm-video-player__theater-button",
    ".rm-video-player__timestamps-button"
  ].join(",");

  const adoptNativeControls = () => {};

  const install = (media) => {
    const input = media.closest(".rm-block__input");
    const block = media.closest(".rm-block[data-block-uid]");
    const uid = block?.dataset.blockUid || "";
    if (!input || !block || !uid || records.has(input)) return;
    if (input.classList.contains(CLASS) || input.querySelector(":scope > .mag-video-toolbar")) return;

    const raw = readBlock(uid);
    const source = sourceOf(media, raw);
    const kind = kindOf(media, source);
    const shell = directShell(media, input);
    if (!shell || shell === input) return;

    input.classList.add(CLASS);
    shell.classList.add("mag-video-stage");

    if (media.tagName === "IFRAME") {
      media.setAttribute("allowfullscreen", "");
      const allow = media.getAttribute("allow") || "";
      if (!/fullscreen/i.test(allow)) media.setAttribute("allow", (allow ? allow + "; " : "") + "fullscreen");
    } else if (media.tagName === "VIDEO") {
      media.setAttribute("controls", "");
    }

    const toolbar = el("div", "mag-video-toolbar");
    const kicker = el("span", "mag-video-kicker", "VIDEO");
    const heading = el("div", "mag-video-heading");
    const title = el("div", "mag-video-title", titleOf(media, raw, source, kind));
    const sourceLabel = el("div", "mag-video-source", kind);
    const actions = el("div", "mag-video-actions");
    heading.append(title, sourceLabel);
    toolbar.append(kicker, heading, actions);

    input.insertBefore(toolbar, shell);

    const record = {
      input, block, uid, raw, source, kind, media, shell,
      toolbar, title, actions, nativeControls: []
    };
    records.set(input, record);
    adoptNativeControls(record);
  };

  const restoreNativeControls = () => {};

  const remove = (record) => {
    restoreNativeControls(record);
    record.toolbar.remove();
    record.shell.classList.remove("mag-video-stage");
    record.input.classList.remove(CLASS);
    records.delete(record.input);
  };

  titleTimer = window.setInterval(() => {
    for (const record of records.values()) {
      const live = record.media.getAttribute("title") || "";
      if (live && live !== "YouTube video player") record.title.textContent = live;
      adoptNativeControls(record);
    }
  }, 1000);

  return {
    sync() {
      for (const record of [...records.values()]) {
        if (!record.input.isConnected || !record.media.isConnected) remove(record);
        else adoptNativeControls(record);
      }
      doc.querySelectorAll("iframe.rm-video-player, video").forEach((media) => {
        if (media.id === "intercom-frame" || media.closest(".rm-pdf-container, .rm-video-theater")) return;
        install(media);
      });
    },
    destroy() {
      window.clearInterval(titleTimer);
      for (const record of [...records.values()]) remove(record);
    }
  };
};


  const cleanupKey = "__magVideoReaderCleanup";
  if (typeof window[cleanupKey] === "function") {
    try { window[cleanupKey](); } catch (error) {
      console.warn("[Video Reader] previous cleanup", error);
      delete window[cleanupKey];
    }
  }
  const instance = createVideoReader({ doc: document });
  let scheduled = false;
  const sync = () => {
    scheduled = false;
    try {
      instance.sync();
    } catch (error) {
      console.error("[Video Reader] sync", error);
    }
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(sync);
  };
  const observer = new MutationObserver(schedule);
  observer.observe(document.body, { childList: true, subtree: true });
  sync();
  window[cleanupKey] = () => {
    observer.disconnect();
    instance.destroy();
    delete window[cleanupKey];
  };
})();

/* 22.4b Theater editable timestamp notes + English native controls */
(() => {
  const KEY = "__magVideoTheaterCleanup";
  if (typeof window[KEY] === "function") window[KEY]();

  const api = window.roamAlphaAPI;
  let panel = null;
  let signature = "";
  let pendingInsert = null;

  const labels = [
    [".rm-video-player__edit-btn, button[title=\"Open in sidebar\"]", "Open"],
    [".rm-video-player__comment-button, button[title=\"Insert Timestamp\"]", "Timestamp"],
    [".rm-video-player__theater-button, button[title=\"Theater mode\"], button[title=\"Default view\"]", "Theater"],
    [".rm-video-player__timestamps-button, button[title=\"View timestamps\"]", "Notes"]
  ];

  const labelControls = () => {
    labels.forEach(([selector, fallback]) => {
      document.querySelectorAll(selector).forEach((button) => {
        button.dataset.magLabel = button.title === "Default view" ? "Exit Theater" : fallback;
      });
    });
  };

  const secondsOf = (stamp) =>
    stamp.split(":").map(Number).reduce((total, part) => total * 60 + part, 0);

  const notesFor = (videoUid) => {
    const rows = api?.q?.(
      '[:find ?uid ?s :in $ ?videoUid :where [?v :block/uid ?videoUid] [?b :block/refs ?v] [?b :block/uid ?uid] [?b :block/string ?s]]',
      videoUid
    ) || [];
    return rows.map(([uid, value]) => {
      const raw = String(value || "");
      if (!/video-timestamp/i.test(raw)) return null;
      const stamp = raw.match(/\b(\d{1,2}:\d{2}(?::\d{2})?)\b/)?.[1];
      const prefix = raw.match(/^\s*(\{\{\[\[video-timestamp\]\]\s*:[\s\S]*?\}\})/)?.[1];
      if (!stamp || !prefix) return null;
      return {
        uid,
        stamp,
        prefix,
        seconds: secondsOf(stamp),
        text: raw.slice(prefix.length).trim()
      };
    }).filter(Boolean).sort((a, b) => a.seconds - b.seconds || a.uid.localeCompare(b.uid));
  };

  const seek = (seconds) => {
    const theater = document.querySelector(".rm-video-theater");
    const video = theater?.querySelector("video");
    if (video) {
      video.currentTime = seconds;
      return;
    }
    theater?.querySelector("iframe.rm-video-player, iframe")?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: "seekTo", args: [seconds, true] }),
      "*"
    );
  };

  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  const resizeEditor = (editor) => {
    editor.style.height = "0px";
    editor.style.height = Math.max(34, editor.scrollHeight) + "px";
  };

  const saveEditor = async (editor) => {
    const value = editor.value.trim();
    if (value === editor.dataset.original) return;
    editor.classList.add("is-saving");
    try {
      await api.updateBlock({
        block: {
          uid: editor.dataset.uid,
          string: editor.dataset.prefix + (value ? " " + value : "")
        }
      });
      editor.dataset.original = value;
      editor.classList.add("is-saved");
      window.setTimeout(() => editor.classList.remove("is-saved"), 900);
    } catch (error) {
      console.error("[Video Reader] save timestamp note", error);
      editor.classList.add("is-error");
    } finally {
      editor.classList.remove("is-saving");
    }
  };

  const openInSidebar = async (uid) => {
    try {
      api.ui.rightSidebar.open();
      await Promise.resolve(api.ui.rightSidebar.addWindow({
        window: { type: "block", "block-uid": uid }
      }));
      window.setTimeout(() => {
        const blocks = Array.from(document.querySelectorAll(
          '#right-sidebar [data-block-uid="' + CSS.escape(uid) + '"]'
        ));
        const block = blocks.at(-1);
        block?.scrollIntoView({ behavior: "smooth", block: "center" });
        const input = block?.matches(".rm-block__input")
          ? block
          : block?.querySelector(".rm-block__input");
        input?.click();
        input?.focus({ preventScroll: true });
      }, 240);
    } catch (error) {
      console.error("[Video Reader] open timestamp note in sidebar", error);
    }
  };

  const deleteNote = async (note, button) => {
    if (button.dataset.confirm !== "true") {
      button.dataset.confirm = "true";
      button.textContent = "Confirm";
      button.classList.add("is-confirming");
      window.setTimeout(() => {
        if (!button.isConnected || button.dataset.confirm !== "true") return;
        delete button.dataset.confirm;
        button.textContent = "Delete";
        button.classList.remove("is-confirming");
      }, 3200);
      return;
    }

    button.disabled = true;
    button.textContent = "Deleting…";
    try {
      await Promise.resolve(api.deleteBlock({ block: { uid: note.uid } }));
      signature = "";
      pendingInsert = null;
      sync();
    } catch (error) {
      console.error("[Video Reader] delete timestamp note", error);
      button.disabled = false;
      button.textContent = "Delete";
      button.classList.remove("is-confirming");
      delete button.dataset.confirm;
    }
  };

  const focusEditor = (uid) => {
    const editor = panel?.querySelector(
      '.mag-video-theater-note__editor[data-uid="' + CSS.escape(uid) + '"]'
    );
    if (!editor) return false;
    editor.closest(".mag-video-theater-note")?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
    window.setTimeout(() => {
      editor.focus({ preventScroll: true });
      editor.setSelectionRange(editor.value.length, editor.value.length);
    }, 260);
    return true;
  };

  const onTimestampClick = (event) => {
    const button = event.target.closest(
      '.rm-video-theater button[title="Insert Timestamp"], .rm-video-theater .rm-video-player__comment-button'
    );
    if (!button) return;
    const videoUid = decodeURIComponent(location.hash.match(/\/video\/([^/?#]+)/)?.[1] || "");
    if (!videoUid) return;
    pendingInsert = {
      before: new Set(notesFor(videoUid).map((note) => note.uid)),
      deadline: Date.now() + 7000
    };
  };

  const render = (notes) => {
    const header = make("div", "mag-video-theater-notes__header");
    header.append(
      make("span", "mag-video-theater-notes__eyebrow", "TIMESTAMP NOTES"),
      make("span", "mag-video-theater-notes__count", String(notes.length).padStart(2, "0"))
    );

    const list = make("div", "mag-video-theater-notes__list");
    if (!notes.length) {
      list.append(make("div", "mag-video-theater-notes__empty", "No timestamp notes yet."));
    } else {
      notes.forEach((note) => {
        const row = make("div", "mag-video-theater-note");
        const time = make("button", "mag-video-theater-note__time", note.stamp);
        time.type = "button";
        time.title = "Jump to " + note.stamp;
        time.addEventListener("click", () => seek(note.seconds));

        const editor = make("textarea", "mag-video-theater-note__editor");
        editor.value = note.text;
        editor.dataset.original = note.text;
        editor.dataset.uid = note.uid;
        editor.dataset.prefix = note.prefix;
        editor.setAttribute("aria-label", "Edit note at " + note.stamp);
        editor.addEventListener("input", () => resizeEditor(editor));
        editor.addEventListener("blur", () => saveEditor(editor));
        editor.addEventListener("keydown", (event) => {
          if ((event.metaKey || event.ctrlKey) && event.key === "Enter") editor.blur();
        });

        const actions = make("div", "mag-video-theater-note__actions");
        const openButton = make("button", "mag-video-theater-note__action", "Open");
        openButton.type = "button";
        openButton.title = "Open this timestamp block in the right sidebar";
        openButton.addEventListener("click", () => openInSidebar(note.uid));

        const deleteButton = make(
          "button",
          "mag-video-theater-note__action mag-video-theater-note__delete",
          "Delete"
        );
        deleteButton.type = "button";
        deleteButton.title = "Delete this timestamp block and its children";
        deleteButton.addEventListener("click", () => deleteNote(note, deleteButton));

        actions.append(openButton, deleteButton);
        row.append(time, editor, actions);
        list.append(row);
        requestAnimationFrame(() => resizeEditor(editor));
      });
    }
    panel.replaceChildren(header, list);
  };

  const sync = () => {
    labelControls();

    const theater = document.querySelector(".rm-video-theater");
    const videoUid = decodeURIComponent(location.hash.match(/\/video\/([^/?#]+)/)?.[1] || "");
    const anchor = theater?.querySelector(".rm-video-player__spacing-wrapper--theater");
    if (!theater || !videoUid || !anchor) {
      panel?.remove();
      panel = null;
      signature = "";
      return;
    }

    if (!panel?.isConnected) {
      panel = make("section", "mag-video-theater-notes");
      anchor.insertAdjacentElement("afterend", panel);
      signature = "";
    }

    if (panel.contains(document.activeElement) && !pendingInsert) return;
    const notes = notesFor(videoUid);
    const next = notes.map((note) => [note.uid, note.seconds, note.text].join("|")).join("¦");
    const inserted = pendingInsert
      ? notes.find((note) => !pendingInsert.before.has(note.uid))
      : null;

    if (next !== signature) {
      signature = next;
      render(notes);
    }

    if (inserted) {
      const uid = inserted.uid;
      pendingInsert = null;
      requestAnimationFrame(() => focusEditor(uid));
    } else if (pendingInsert && Date.now() > pendingInsert.deadline) {
      pendingInsert = null;
    }
  };

  document.addEventListener("click", onTimestampClick, true);
  const timer = window.setInterval(sync, 350);
  sync();

  window[KEY] = () => {
    window.clearInterval(timer);
    document.removeEventListener("click", onTimestampClick, true);
    pendingInsert = null;
    panel?.remove();
    document.querySelectorAll("[data-mag-label]").forEach((button) => delete button.dataset.magLabel);
    delete window[KEY];
  };
})();
}
};
const SHORTCUT_DEFAULTS = { jump: "g", today: "t", daily: "d", previous: "ArrowLeft", next: "ArrowRight" };
const shortcutParts = (value) => String(value).trim().toLowerCase().split("+").map(x => x.trim()).filter(Boolean);
function matchesShortcut(event, value) {
  const parts = shortcutParts(value);
  if (!parts.length) return false;
  const key = parts.pop();
  const mods = new Set(parts);
  if ([...mods].some(x => !["ctrl","control","alt","shift","meta","cmd","mod"].includes(x))) return false;
  const mac = /Mac|iPhone|iPad/.test(navigator.platform || "");
  return event.key.toLowerCase() === key &&
    event.ctrlKey === (mods.has("ctrl") || mods.has("control") || (mods.has("mod") && !mac)) &&
    event.metaKey === (mods.has("meta") || mods.has("cmd") || (mods.has("mod") && mac)) &&
    event.altKey === mods.has("alt") && event.shiftKey === mods.has("shift");
}
const MOTTO_LIMIT = 24;
const mottoCharCost = character => /[\u2E80-\uA4CF\uAC00-\uD7AF\uF900-\uFAFF\uFE10-\uFE6F\uFF01-\uFF60\uFFE0-\uFFE6\u{1F000}-\u{1FAFF}\u{20000}-\u{3FFFF}]/u.test(character) ? 2 : 1;
function cleanMotto(value) {
  let result = "", used = 0;
  for (const character of String(value || "").replace(/[\r\n\t]+/g," ")) {
    const cost = mottoCharCost(character);
    if (used + cost > MOTTO_LIMIT) break;
    result += character; used += cost;
  }
  return result;
}
function fitMotto(value) {
  const chars = Array.from(cleanMotto(value));
  const title = typeof document === "undefined" ? null : document.querySelector?.(".roam-sidebar-container .rm-db-title-container");
  if (!title || typeof getComputedStyle !== "function") return chars.join("");
  const style = getComputedStyle(title, "::after");
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return chars.join("");
  context.font = style.font || "600 9px Georgia";
  const width = Math.max(60, (title.clientWidth || 200) - parseFloat(getComputedStyle(title).paddingLeft || 0) - parseFloat(getComputedStyle(title).paddingRight || 0));
  const spacing = parseFloat(style.letterSpacing) || 0;
  while (chars.length && context.measureText(chars.join("")).width + Math.max(0,chars.length-1)*spacing > width) chars.pop();
  return chars.join("");
}
const fontFamily = value => String(value || "").replace(/[;{}<>\r\n]/g, "").trim();
const codeHeight = value => Number.isFinite(Number(value)) ? Math.max(0, Math.min(2400, Math.round(Number(value)))) : 420;
function extraSettings(runtime) {
  const zh = runtime.locale === "zh";
  const textSetting = (id, name, description, value, change, type="text") => ({
    id: SETTING_PREFIX + id, name, description,
    action: {type:"reactComponent",component:()=>window.React?.createElement("input",{
      type, defaultValue:value, min:type==="number"?0:undefined, max:type==="number"?2400:undefined,
      style:{width:"min(100%,280px)",padding:"6px 8px"},
      onChange:event=>change(event.target.value)
    })}
  });
  return [textSetting("code-max-height", zh?"代码块最大高度（px）":"Code block maximum height (px)",zh?"默认 420；0 表示不限制。长代码在块内滚动。":"Default 420; 0 removes the limit. Long code scrolls inside the block.",runtime.codeMaxHeight, value=>{
    runtime.codeMaxHeight=codeHeight(value); void runtime.extensionAPI.settings.set(SETTING_PREFIX+"code-max-height",runtime.codeMaxHeight); runtime.rebuildCss();
  },"number"), ...Object.entries(SHORTCUT_DEFAULTS).map(([key,fallback])=>textSetting("shortcut-"+key,
    (zh?"导航快捷键 · ":"Navigation shortcut · ")+({jump:zh?"跳转日期":"Jump to date",today:zh?"今天":"Today",daily:zh?"日记流":"Daily notes",previous:zh?"前一天":"Previous day",next:zh?"后一天":"Next day"}[key]),
    zh?`默认 ${fallback}。支持 Alt+G、Mod+Shift+J；留空停用。编辑文字时不触发。重复组合仅第一个生效。`:`Default ${fallback}. Examples: Alt+G, Mod+Shift+J. Empty disables. Never runs while editing. First matching action wins.`,
    runtime.shortcuts[key],value=>{runtime.shortcuts[key]=value.trim();void runtime.extensionAPI.settings.set(SETTING_PREFIX+"shortcut-"+key,value.trim());}
  ))];
}

/* Position the existing native control; never clone, replace or reparent it. */
function registerNativeSidebarToggles(runtime) {
  const core = runtime.ensureCore();
  const root = document.documentElement;
  let topbar = null;
  let observer = null;
  let sidebar = null;
  let leftSidebar = null;
  let leftWidth = 0;
  let frame = 0;
  const touched = new Map();
  const saveControl = button => {
    if (!touched.has(button)) touched.set(button, {
      styles: ["display","visibility","pointer-events"].map(key => [key,button.style.getPropertyValue(key),button.style.getPropertyPriority(key)]), role: button.getAttribute("data-folio-sidebar-role")
    });
  };
  const setControl = (button, role, shown) => {
    saveControl(button);
    button.setAttribute("data-folio-sidebar-role", role);
    for (const [key,value] of [["display",shown?"inline-flex":"none"],["visibility",shown?"visible":"hidden"],["pointer-events",shown?"auto":"none"]]) {
      if (button.style.getPropertyValue(key) !== value || button.style.getPropertyPriority(key) !== "important") button.style.setProperty(key,value,"important");
    }
  };
  const write = (key, value) => {
    if (root.style.getPropertyValue(key) !== value) root.style.setProperty(key, value);
  };
  const measure = () => {
    const next = document.querySelector(".rm-topbar");
    if (next !== topbar) {
      observer?.disconnect();
      topbar = next;
      if (topbar && typeof ResizeObserver !== "undefined") {
        observer = new ResizeObserver(() => core.scheduleSync());
        observer.observe(topbar);
        if (sidebar) observer.observe(sidebar);
        if (leftSidebar) observer.observe(leftSidebar);
      }
    }
    const nextSidebar = document.querySelector("#right-sidebar");
    if (nextSidebar !== sidebar) {
      if (sidebar) observer?.unobserve(sidebar);
      sidebar = nextSidebar;
      if (sidebar) observer?.observe(sidebar);
    }
    const nextLeft = document.querySelector(".roam-sidebar-container");
    if (nextLeft !== leftSidebar) {
      if (leftSidebar) observer?.unobserve(leftSidebar);
      leftSidebar = nextLeft;
      if (leftSidebar) observer?.observe(leftSidebar);
    }
    const nextWidth = Math.round(leftSidebar?.getBoundingClientRect().width || 0);
    if (nextWidth > 0 && nextWidth !== leftWidth) {
      leftWidth = nextWidth;
      runtime.rebuildCss();
    }
    const box = sidebar?.getBoundingClientRect();
    const style = sidebar && getComputedStyle(sidebar);
    const open = Boolean(box && box.width > 1 && box.height > 1 && box.left < window.innerWidth - 1 && box.right > 0 && style.display !== "none" && style.visibility !== "hidden");
    const state = open ? "open" : "closed";
    if (root.getAttribute("data-folio-right-sidebar") !== state) root.setAttribute("data-folio-right-sidebar", state);
    const controls = document.querySelectorAll(".rm-topbar :is(button,.bp3-button), #right-sidebar > .flex-h-box :is(button,.bp3-button)");
    for (const button of controls) {
      if (button.matches(".rm-open-left-sidebar-btn") || button.closest(".rm-open-left-sidebar-btn")) continue;
      if (button.matches(".bp3-icon-menu-open") || button.querySelector(".bp3-icon-menu-open")) setControl(button,"close",open);
      else if (button.matches(".bp3-icon-menu-closed") || button.querySelector(".bp3-icon-menu-closed")) setControl(button,"open",!open);
    }
    if (!topbar) return;
    const rect = topbar.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    write("--folio-native-toggle-x", Math.max(rect.left, rect.right - 38) + "px");
    write("--folio-native-toggle-y", (rect.top + (rect.height - 30) / 2) + "px");
  };
  const onToggle = event => {
    if (!event.target.closest?.("[data-folio-sidebar-role], .rm-open-left-sidebar-btn, .roam-sidebar-container .top-row")) return;
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => { frame = 0; measure(); });
  };
  document.addEventListener("click", onToggle, true);
  document.addEventListener("transitionend", onToggle, true);
  window.__magModules = window.__magModules || {};
  window.__magModules.folioNativeSidebarChrome = () => ({
    sync: measure,
    destroy() {
      observer?.disconnect();
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener("click", onToggle, true);
      document.removeEventListener("transitionend", onToggle, true);
      for (const [button, prior] of touched) {
        for (const [key,value,priority] of prior.styles) { if (value) button.style.setProperty(key,value,priority); else button.style.removeProperty(key); }
        if (prior.role == null) button.removeAttribute("data-folio-sidebar-role"); else button.setAttribute("data-folio-sidebar-role", prior.role);
      }
      touched.clear();
      root.style.removeProperty("--folio-native-toggle-x");
      root.style.removeProperty("--folio-native-toggle-y");
      root.removeAttribute("data-folio-right-sidebar");
    }
  });
  core.load("folioNativeSidebarChrome");
  runtime.nativeCleanups.set("sidebar-toggles", () => {
    core.unload("folioNativeSidebarChrome");
    delete window.__magModules.folioNativeSidebarChrome;
  });
}

/* Reroute only native video Open; other video controls keep their handlers. */
function registerVideoOpenSidebar(runtime) {
  const targetButton = event => {
    const button = event.target.closest?.(".rm-video-player__edit-btn, button[title='Open in sidebar']");
    return button?.closest(".mag-video-reader,.rm-video-theater") ? button : null;
  };
  const stopNativeEdit = event => {
    if (!targetButton(event)) return;
    event.preventDefault(); event.stopImmediatePropagation();
  };
  const open = async event => {
    const button = targetButton(event);
    if (!button) return;
    event.preventDefault(); event.stopImmediatePropagation();
    const uid = button.closest(".rm-block[data-block-uid]")?.getAttribute("data-block-uid")
      || decodeURIComponent(location.hash.match(/\/video\/([^/?#]+)/)?.[1] || "");
    if (!uid) { console.warn("[Folio] Video Open: block UID is unavailable"); return; }
    try {
      const sidebar = window.roamAlphaAPI?.ui?.rightSidebar;
      if (!sidebar?.addWindow) return;
      await Promise.resolve(sidebar.open?.());
      await Promise.resolve(sidebar.addWindow({window:{type:"block","block-uid":uid}}));
    } catch (error) { console.error("[Folio] Could not open video block in sidebar",error); }
  };
  document.addEventListener("pointerdown",stopNativeEdit,true);
  document.addEventListener("mousedown",stopNativeEdit,true);
  document.addEventListener("click",open,true);
  runtime.nativeCleanups.set("video-reader",()=>{
    document.removeEventListener("pointerdown",stopNativeEdit,true);
    document.removeEventListener("mousedown",stopNativeEdit,true);
    document.removeEventListener("click",open,true);
  });
}

/* Functional settings navigation and Random TODO policy. No page styling. */
const FUNCTION_GROUPS = [
 {id:'navigation',ids:['sidebar-toggles','hide-top-buttons','hide-left-sidebar-items','workbench-compat','scroll-indicator','graph-button','right-sidebar']},
 {id:'content',ids:['tags','or-dropdown','property-card','weight']},
 {id:'writing',ids:['typewriter','asides','code-height','code-tools']},
 {id:'calendar',ids:['daily-masthead','calendar-quick','calendar-keyboard','calendar-template','calendar-preview','calendar-carry','calendar-capture']},
 {id:'media',ids:['images','pdf','video-reader']},
 {id:'insights',ids:['page-stats','pulse']},
 {id:'review',ids:['editorial-desk','random-tasks']},
];
const SETTINGS_COPY = {
 en: {
  groups:['Interface and navigation','Labels and content','Writing and code','Daily notes and calendar','Reading and media','Page insights','Tasks and review'],
  title:'By function · resource impact per component',impact:'Estimated resource impact',impactHelp:'Estimated from runtime behaviour; not a live CPU measurement.',
  pages:'Excluded pages',pagesHelp:'TODOs on these pages are excluded. Enter one exact page title per line.',defaults:'Defaults: SmartBlock and roam/templates. Edit or add page titles below.',
  future:'Exclude TODOs with future dates',futureHelp:'On by default. Turn off to include tasks with explicit future daily-note dates.',policy:'These rules only filter random picks; original tasks are not modified.',
  code:'Limit code block height',sidebar:'Keep native sidebar toggles visible',defaultLabel:'Default',height:'Code block maximum height (px)',heightHelp:'Default 420; 0 removes the limit. Long code scrolls inside the block.',shortcuts:['Jump to date','Today','Daily notes','Previous day','Next day'],shortcut:'Navigation shortcut',shortcutHelp:'Default: {key}. Examples: Alt+G, Mod+Shift+J. Empty disables. Inactive while editing; the first matching action wins.'
 },
 zh: {
  groups:['界面与导航','标签与内容','写作与代码','日记与日历','阅读与媒体','页面洞察','任务与回顾'],
  title:'按功能分组 · 每项标注资源消耗',impact:'资源消耗（估计）',impactHelp:'按运行方式估计，不代表实时 CPU 占用。',
  pages:'排除页面',pagesHelp:'这些页面下的 TODO 不参与随机抽取；每行填写一个完整页面名。',defaults:'默认填入 SmartBlock 和 roam/templates，可自行修改或添加。',
  future:'排除带未来日期的 TODO',futureHelp:'默认开启；关闭后，明确带有未来日记日期的任务也可参与随机抽取。',policy:'排除规则仅影响随机抽取，不修改原任务。',
  code:'限制代码块高度',sidebar:'固定显示原生侧栏开关',defaultLabel:'默认',height:'代码块最大高度（px）',heightHelp:'默认 420；0 表示不限制。长代码在块内滚动。',shortcuts:['跳转日期','今天','日记流','前一天','后一天'],shortcut:'导航快捷键',shortcutHelp:'默认 {key}。支持 Alt+G、Mod+Shift+J；留空停用。编辑文字时不触发，重复组合仅第一个生效。'
 },
 fr: {
  groups:['Interface et navigation','Étiquettes et contenu','Écriture et code','Journal et calendrier','Lecture et médias','Analyse des pages','Tâches et révision'],
  title:'Par fonction · impact indiqué par composant',impact:'Impact estimé sur les ressources',impactHelp:'Estimation selon le fonctionnement ; ce n’est pas une mesure CPU en direct.',
  pages:'Pages exclues',pagesHelp:'Les TODO de ces pages sont exclus. Un titre exact de page par ligne.',defaults:'Valeurs par défaut : SmartBlock et roam/templates. Modifiez ou ajoutez des titres.',
  future:'Exclure les TODO avec une date future',futureHelp:'Activé par défaut. Désactivez pour inclure les tâches portant une date explicite de journal future.',policy:'Ces règles filtrent uniquement le tirage aléatoire, sans modifier les tâches originales.',
  code:'Limiter la hauteur du code',sidebar:'Garder visibles les boutons des barres latérales',defaultLabel:'Par défaut',height:'Hauteur maximale du code (px)',heightHelp:'420 par défaut ; 0 supprime la limite. Le code long défile dans le bloc.',shortcuts:['Aller à une date','Aujourd’hui','Journal','Jour précédent','Jour suivant'],shortcut:'Raccourci de navigation',shortcutHelp:'Par défaut : {key}. Exemples : Alt+G, Mod+Shift+J. Vide pour désactiver. Inactif pendant la saisie ; la première action correspondante prévaut.'
 },
 de: {
  groups:['Oberfläche und Navigation','Tags und Inhalt','Schreiben und Code','Tagesnotizen und Kalender','Lesen und Medien','Seitenanalyse','Aufgaben und Rückblick'],
  title:'Nach Funktion · Ressourcenlast je Komponente',impact:'Geschätzte Ressourcenlast',impactHelp:'Schätzung anhand der Arbeitsweise, keine Echtzeit-CPU-Messung.',
  pages:'Ausgeschlossene Seiten',pagesHelp:'TODOs auf diesen Seiten werden ausgeschlossen. Ein exakter Seitentitel pro Zeile.',defaults:'Standard: SmartBlock und roam/templates. Titel können geändert oder ergänzt werden.',
  future:'TODOs mit zukünftigem Datum ausschließen',futureHelp:'Standardmäßig aktiviert. Deaktivieren, um Aufgaben mit einem ausdrücklich zukünftigen Tagesnotizdatum einzubeziehen.',policy:'Diese Regeln filtern nur die Zufallsauswahl und ändern keine ursprünglichen Aufgaben.',
  code:'Codeblockhöhe begrenzen',sidebar:'Schalter der Seitenleisten sichtbar halten',defaultLabel:'Standard',height:'Maximale Codeblockhöhe (px)',heightHelp:'Standard 420; 0 hebt die Begrenzung auf. Langer Code scrollt innerhalb des Blocks.',shortcuts:['Zu Datum springen','Heute','Tagesnotizen','Vorheriger Tag','Nächster Tag'],shortcut:'Navigationstastenkürzel',shortcutHelp:'Standard: {key}. Beispiele: Alt+G, Mod+Shift+J. Leer deaktiviert. Bei Texteingabe inaktiv; die erste passende Aktion hat Vorrang.'
 },
 es: {
  groups:['Interfaz y navegación','Etiquetas y contenido','Escritura y código','Diario y calendario','Lectura y medios','Análisis de páginas','Tareas y revisión'],
  title:'Por función · consumo indicado por componente',impact:'Consumo estimado de recursos',impactHelp:'Estimación según el funcionamiento; no mide la CPU en tiempo real.',
  pages:'Páginas excluidas',pagesHelp:'Los TODO de estas páginas se excluyen. Un título exacto de página por línea.',defaults:'Por defecto: SmartBlock y roam/templates. Puede modificar o añadir títulos.',
  future:'Excluir TODO con fechas futuras',futureHelp:'Activado por defecto. Desactive para incluir tareas con una fecha futura explícita de nota diaria.',policy:'Estas reglas solo filtran la selección aleatoria; no modifican las tareas originales.',
  code:'Limitar la altura del código',sidebar:'Mantener visibles los controles laterales',defaultLabel:'Predeterminado',height:'Altura máxima del código (px)',heightHelp:'420 por defecto; 0 elimina el límite. El código largo se desplaza dentro del bloque.',shortcuts:['Ir a una fecha','Hoy','Notas diarias','Día anterior','Día siguiente'],shortcut:'Atajo de navegación',shortcutHelp:'Predeterminado: {key}. Ejemplos: Alt+G, Mod+Shift+J. Vacío para desactivar. Inactivo al editar; prevalece la primera acción coincidente.'
 },
 it: {
  groups:['Interfaccia e navigazione','Tag e contenuti','Scrittura e codice','Diario e calendario','Lettura e media','Analisi delle pagine','Attività e revisione'],
  title:'Per funzione · consumo indicato per componente',impact:'Consumo stimato di risorse',impactHelp:'Stima basata sul funzionamento, non una misura della CPU in tempo reale.',
  pages:'Pagine escluse',pagesHelp:'I TODO in queste pagine sono esclusi. Un titolo esatto di pagina per riga.',defaults:'Valori iniziali: SmartBlock e roam/templates. Puoi modificare o aggiungere titoli.',
  future:'Escludi TODO con date future',futureHelp:'Attivo per impostazione predefinita. Disattiva per includere attività con una data futura esplicita di nota giornaliera.',policy:'Queste regole filtrano solo la selezione casuale e non modificano le attività originali.',
  code:'Limita l’altezza del codice',sidebar:'Mantieni visibili i controlli delle barre laterali',defaultLabel:'Predefinito',height:'Altezza massima del codice (px)',heightHelp:'420 predefinito; 0 elimina il limite. Il codice lungo scorre dentro il blocco.',shortcuts:['Vai a una data','Oggi','Note giornaliere','Giorno precedente','Giorno successivo'],shortcut:'Scorciatoia di navigazione',shortcutHelp:'Predefinito: {key}. Esempi: Alt+G, Mod+Shift+J. Vuoto per disattivare. Inattivo durante la modifica; prevale la prima azione corrispondente.'
 }
};
const SETTINGS_DETAILS = {
 en: {appearance:'Use installed CSS font-family names, with quoted names and comma-separated fallbacks. Empty restores defaults. The motto allows 24 units per line (Chinese/full-width characters = 2, Latin = 1), further fitted to sidebar width; two lines maximum.',namespaces:'MOC/Project section labels, book titles, people, industries and ticker markers. Quadrants and research-depth stamps are in Status stamps.'},
 zh: {appearance:'填写已安装字体的 CSS font-family 名称，名称含空格时用英文双引号，多个备选字体用英文逗号分隔；留空恢复默认。座右铭每行最多 24 单位（中文、全角字符计 2，英文计 1），还会按侧栏宽度限制，最多两行。',namespaces:'此组设置 MOC／Project 栏目签、书名、人物、行业和股票标记；四象限、研究深度等印章在“状态印章”组。'},
 fr: {appearance:'Utilisez des noms CSS font-family de polices installées, entre guillemets si nécessaire, avec les alternatives séparées par des virgules. Vide rétablit les valeurs par défaut. Devise : 24 unités par ligne (chinois/caractères pleine chasse = 2, latin = 1), ajustées à la largeur latérale ; deux lignes maximum.',namespaces:'Étiquettes MOC/Project, titres de livres, personnes, secteurs et symboles boursiers. Quadrants et niveaux de recherche figurent dans les tampons d’état.'},
 de: {appearance:'Installierte CSS-font-family-Namen verwenden; Namen bei Bedarf in Anführungszeichen und Alternativen durch Kommas trennen. Leer stellt Standardwerte wieder her. Motto: 24 Einheiten pro Zeile (Chinesisch/Vollbreite = 2, Latein = 1), an die Seitenleiste angepasst; höchstens zwei Zeilen.',namespaces:'MOC/Project-Abschnittstags, Buchtitel, Personen, Branchen und Börsensymbole. Quadranten und Recherchegrade stehen unter Statusstempel.'},
 es: {appearance:'Use nombres CSS font-family de fuentes instaladas, entre comillas si procede, con alternativas separadas por comas. Vacío restaura los valores iniciales. Lema: 24 unidades por línea (chino/ancho completo = 2, latín = 1), ajustadas al ancho lateral; máximo dos líneas.',namespaces:'Etiquetas MOC/Project, títulos de libros, personas, sectores y símbolos bursátiles. Los cuadrantes y niveles de investigación están en Sellos de estado.'},
 it: {appearance:'Usa nomi CSS font-family di font installati, tra virgolette se necessario, con alternative separate da virgole. Vuoto ripristina i valori iniziali. Motto: 24 unità per riga (cinese/larghezza piena = 2, latino = 1), adattate alla barra laterale; massimo due righe.',namespaces:'Tag MOC/Project, titoli di libri, persone, settori e simboli azionari. Quadranti e livelli di ricerca sono nei Timbri di stato.'}
};
const RANDOM_EXCLUDED_DEFAULT = 'SmartBlock\nroam/templates';
const randomPageNames = value => [...new Set(String(value ?? '').split(/\r?\n/).map(s=>s.trim()).filter(Boolean))];
function syncRandomTodoConfig(runtime) {
 window.__folioRandomTodoConfig = {excludedPages:randomPageNames(runtime.randomExcludedPages),excludeFuture:runtime.randomExcludeFuture};
}
function randomTodoSettings(runtime, React, copy) {
 const e=React.createElement;
 const save=(key,value)=>{void runtime.extensionAPI.settings.set(SETTING_PREFIX+key,value);syncRandomTodoConfig(runtime);};
 return e('div',{style:{padding:'8px 2px 12px',borderTop:'1px solid rgba(128,128,128,.16)'}},
  e('label',{htmlFor:'folio-random-excluded-pages',style:{fontWeight:600,fontSize:'13px'}},copy.pages),
  e('p',{id:'folio-random-pages-help',style:{fontSize:'11px',opacity:.7,margin:'5px 0 8px'}},copy.pagesHelp),
  e('textarea',{id:'folio-random-excluded-pages','aria-describedby':'folio-random-pages-help',defaultValue:runtime.randomExcludedPages,rows:4,spellCheck:false,style:{boxSizing:'border-box',width:'100%',resize:'vertical',font:'inherit',fontSize:'12px',padding:'8px',lineHeight:1.5},onChange:event=>{runtime.randomExcludedPages=event.target.value;save('random-excluded-pages',runtime.randomExcludedPages);}}),
  e('p',{style:{fontSize:'11px',opacity:.7}},copy.defaults),
  e('label',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'12px',fontSize:'13px',fontWeight:600}},copy.future,e('input',{type:'checkbox',role:'switch',defaultChecked:runtime.randomExcludeFuture,onChange:event=>{runtime.randomExcludeFuture=Boolean(event.target.checked);save('random-exclude-future',runtime.randomExcludeFuture);}})),
  e('p',{style:{fontSize:'11px',opacity:.7}},copy.futureHelp),
  e('p',{style:{fontSize:'11px',opacity:.7,marginBottom:0}},copy.policy));
}
function localizedExtraSettings(runtime) {
 const copy=SETTINGS_COPY[runtime.locale]||SETTINGS_COPY.en;
 return extraSettings(runtime).map((setting,index)=>({...setting,
  name:index===0?copy.height:`${copy.shortcut} · ${copy.shortcuts[index-1]}`,
  description:index===0?copy.heightHelp:copy.shortcutHelp.replace('{key}',Object.values(SHORTCUT_DEFAULTS)[index-1])
 }));
}
function functionalSettings(runtime, accordion, appearanceGroup, widgetGroups, tagGroups) {
 const copy=SETTINGS_COPY[runtime.locale]||SETTINGS_COPY.en;
 const names=GROUP_NAMES[runtime.locale]||GROUP_NAMES.en;
 return {id:SETTING_PREFIX+'functional-settings',name:'',description:'',action:{type:'reactComponent',component:()=>{
  const React=window.React;if(!React)return null;
  const e=React.createElement;
  const [section,setSection]=React.useState(runtime.settingsSection||'appearance');
  const groups=[{id:'appearance',title:names.appearance},...widgetGroups.map((g,i)=>({...g,title:copy.groups[i]}))];
  const selected=groups.find(g=>g.id===section)||groups[0];
  const renderGroup=group=>e(accordion(group,true).action.component,{key:group.id});
  const extras=localizedExtraSettings(runtime).filter(setting=>selected.id==='writing'?setting.id===SETTING_PREFIX+'code-max-height':selected.id==='navigation'&&setting.id!==SETTING_PREFIX+'code-max-height');
  const impact=UI[runtime.locale]?.impact||UI.en.impact;
  return e('div',{'data-folio-settings-layout':'functional',style:{width:'100%'}},
   e('p',{style:{fontSize:'12px',opacity:.7}},copy.title),
   e('div',{style:{display:'flex',flexWrap:'wrap',gap:'16px',alignItems:'flex-start'}},
    e('nav',{'aria-label':copy.title,style:{flex:'1 0 170px',minWidth:0}},groups.map(group=>e('button',{key:group.id,type:'button','aria-current':selected.id===group.id?'page':undefined,onClick:()=>{runtime.settingsSection=group.id;setSection(group.id);},style:{display:'flex',justifyContent:'space-between',gap:'8px',alignItems:'center',width:'100%',boxSizing:'border-box',textAlign:'left',padding:'10px',font:'inherit',fontSize:'12px',color:'inherit',border:0,borderLeft:selected.id===group.id?'3px solid #b59339':'3px solid transparent',background:selected.id===group.id?'rgba(185,147,57,.15)':'transparent',cursor:'pointer',overflowWrap:'anywhere'}},group.title,group.ids?e('span',{style:{opacity:.6}},group.ids.length):null)),
     e('div',{style:{borderTop:'1px solid rgba(128,128,128,.2)',marginTop:'14px',padding:'12px 8px',fontSize:'11px'}},e('strong',null,copy.impact),e('div',{style:{display:'flex',flexWrap:'wrap',gap:'5px',marginTop:'8px'}},impact.map((text,i)=>e('span',{key:i,style:{padding:'2px 5px',border:'1px solid rgba(128,128,128,.35)',borderRadius:'4px'}},text))),e('p',{style:{opacity:.7,lineHeight:1.5}},copy.impactHelp))),
    e('div',{key:selected.id,style:{flex:'3 1 270px',minWidth:0}},
     renderGroup(selected.id==='appearance'?appearanceGroup:selected),
     selected.id==='content'?tagGroups.map(renderGroup):null,
     extras.map(setting=>e('div',{key:setting.id,style:{borderTop:'1px solid rgba(128,128,128,.16)',padding:'10px 2px'}},e('label',null,e('span',{style:{display:'block',fontSize:'13px',fontWeight:600}},setting.name),e('span',{style:{display:'block',fontSize:'11px',opacity:.7,margin:'4px 0 8px'}},setting.description),e(setting.action.component))))
    )
   )
  );
 }}};
}

/* Settings labels only: page names and rendered tag text are untouched. */
const TAG_FIELD_LABELS = {
 zh:['MOC 命名空间','Project 命名空间','书本命名空间','人物命名空间','行业命名空间','股票代码标记','第一象限','第二象限','第三象限','快速筛选','深入分析','专业研究','检查清单','反脆弱','待还','重点','动机笔记','重温笔记','语音笔记','文献笔记','永久笔记','脚注','定义笔记','情绪高涨','情绪平稳','情绪低落','阅读清单：待读','阅读清单：精选','阅读清单：归档','重要块标签','隐藏类标签前缀'],
 fr:['Espace MOC','Espace Project','Espace des livres','Espace des personnes','Espace des secteurs','Marqueur boursier','Quadrant 1','Quadrant 2','Quadrant 3','Sélection rapide','Analyse approfondie','Recherche professionnelle','Liste de contrôle','Antifragile','À rendre','Prioritaire','Notes de motivation','Notes à redécouvrir','Notes vocales','Notes de lecture','Notes permanentes','Notes de bas de page','Notes de définition','Bonne humeur','Humeur stable','Moral bas','Lecture : à lire','Lecture : sélection','Lecture : archives','Étiquette de bloc important','Préfixe des étiquettes de classe masquées'],
 de:['MOC-Namensraum','Project-Namensraum','Bücher-Namensraum','Personen-Namensraum','Branchen-Namensraum','Börsenkürzel-Marker','Quadrant 1','Quadrant 2','Quadrant 3','Schnelle Vorauswahl','Vertiefte Analyse','Professionelle Recherche','Checkliste','Antifragil','Ausstehend','Wichtig','Motivationsnotizen','Notizen wiederentdecken','Sprachnotizen','Literaturnotizen','Dauerhafte Notizen','Fußnoten','Definitionsnotizen','Gehobene Stimmung','Ausgeglichene Stimmung','Gedrückte Stimmung','Leseliste: Eingang','Leseliste: Auswahl','Leseliste: Archiv','Tag für wichtige Blöcke','Präfix ausgeblendeter Klassen-Tags'],
 es:['Espacio MOC','Espacio Project','Espacio de libros','Espacio de personas','Espacio de sectores','Marcador bursátil','Cuadrante 1','Cuadrante 2','Cuadrante 3','Selección rápida','Análisis profundo','Investigación profesional','Lista de control','Antifrágil','Por devolver','Importante','Notas de motivación','Notas para redescubrir','Notas de voz','Notas de lectura','Notas permanentes','Notas al pie','Notas de definición','Ánimo alto','Ánimo estable','Ánimo bajo','Lectura: entrada','Lectura: selección','Lectura: archivo','Etiqueta de bloque importante','Prefijo de etiquetas de clase ocultas'],
 it:['Namespace MOC','Namespace Project','Namespace dei libri','Namespace delle persone','Namespace dei settori','Marcatore azionario','Quadrante 1','Quadrante 2','Quadrante 3','Selezione rapida','Analisi approfondita','Ricerca professionale','Lista di controllo','Antifragile','Da restituire','Importante','Note di motivazione','Note da riscoprire','Note vocali','Note di lettura','Note permanenti','Note a piè di pagina','Note di definizione','Umore alto','Umore stabile','Umore basso','Lettura: da leggere','Lettura: selezione','Lettura: archivio','Tag per blocchi importanti','Prefisso dei tag di classe nascosti']
};
function settingsTagFieldName(field, locale) {return TAG_FIELD_LABELS[locale]?.[TAG_FIELDS.findIndex(item=>item.id===field.id)] || field.name;}

/* Folio-owned chrome. All settings actions are shared with the native page. */
const FOLIO_TOOLBAR_COPY = {
 en:{move:'Drag the title bar to move this panel',settings:'Folio settings',toggle:'Show the Folio toolbar button',help:'Open all Folio settings from the top bar. You can re-enable this button here after hiding it.',close:'Close settings',ai:'Toggle AI chat',aiOpen:'Open AI chat',aiClose:'Close AI chat',unavailable:'Open Extension Settings → Folio to change settings in this Roam version.'},
 zh:{move:'拖动标题栏移动面板',settings:'Folio 设置',toggle:'显示 Folio 顶栏按钮',help:'从顶栏打开全部 Folio 设置。关闭图标后，仍可在这里重新开启。',close:'关闭设置',ai:'切换 AI 聊天',aiOpen:'打开 AI 聊天',aiClose:'关闭 AI 聊天',unavailable:'请从 Extension Settings → Folio 修改设置。'},
 fr:{move:'Faites glisser le titre pour déplacer ce panneau',settings:'Réglages Folio',toggle:'Afficher le bouton Folio dans la barre supérieure',help:'Accédez à tous les réglages Folio depuis la barre supérieure. Vous pouvez réactiver ici le bouton masqué.',close:'Fermer les réglages',ai:'Afficher ou masquer le chat IA',aiOpen:'Ouvrir le chat IA',aiClose:'Fermer le chat IA',unavailable:'Ouvrez Extension Settings → Folio pour modifier les réglages dans cette version de Roam.'},
 de:{move:'Titelleiste ziehen, um dieses Fenster zu verschieben',settings:'Folio-Einstellungen',toggle:'Folio-Schaltfläche in der oberen Leiste anzeigen',help:'Alle Folio-Einstellungen über die obere Leiste öffnen. Eine ausgeblendete Schaltfläche lässt sich hier wieder aktivieren.',close:'Einstellungen schließen',ai:'KI-Chat umschalten',aiOpen:'KI-Chat öffnen',aiClose:'KI-Chat schließen',unavailable:'Öffnen Sie Extension Settings → Folio, um die Einstellungen in dieser Roam-Version zu ändern.'},
 es:{move:'Arrastre la barra de título para mover el panel',settings:'Ajustes de Folio',toggle:'Mostrar el botón Folio en la barra superior',help:'Abra todos los ajustes de Folio desde la barra superior. Puede volver a activar aquí el botón oculto.',close:'Cerrar ajustes',ai:'Mostrar u ocultar el chat de IA',aiOpen:'Abrir el chat de IA',aiClose:'Cerrar el chat de IA',unavailable:'Abra Extension Settings → Folio para cambiar los ajustes en esta versión de Roam.'},
 it:{move:'Trascina la barra del titolo per spostare il pannello',settings:'Impostazioni Folio',toggle:'Mostra il pulsante Folio nella barra superiore',help:'Apri tutte le impostazioni Folio dalla barra superiore. Puoi riattivare qui il pulsante nascosto.',close:'Chiudi impostazioni',ai:'Mostra o nascondi la chat IA',aiOpen:'Apri chat IA',aiClose:'Chiudi chat IA',unavailable:'Apri Extension Settings → Folio per modificare le impostazioni in questa versione di Roam.'}
};
const folioToolbarCopy = runtime => FOLIO_TOOLBAR_COPY[runtime.locale] || FOLIO_TOOLBAR_COPY.en;
function setFolioToolbarVisibility(runtime, value) {
 runtime.toolbarSettingsEnabled = Boolean(value);
 void runtime.extensionAPI.settings.set(SETTING_PREFIX+'toolbar-settings', runtime.toolbarSettingsEnabled);
 runtime.toolbarUi?.sync();
 if (typeof window.dispatchEvent === 'function') window.dispatchEvent(new Event('folio:toolbar-visibility'));
}
function folioToolbarSetting(runtime) {
 const copy=folioToolbarCopy(runtime);
 return {id:SETTING_PREFIX+'toolbar-settings',name:copy.toggle,description:copy.help,action:{type:'reactComponent',component:()=>{
  const React=window.React;if(!React)return null;
  const [enabled,setEnabled]=React.useState(runtime.toolbarSettingsEnabled);
  React.useEffect(()=>{const update=()=>setEnabled(runtime.toolbarSettingsEnabled);window.addEventListener('folio:toolbar-visibility',update);return()=>window.removeEventListener('folio:toolbar-visibility',update);},[]);
  return React.createElement('label',{className:'bp3-control bp3-switch'},React.createElement('input',{type:'checkbox',role:'switch','aria-label':copy.toggle,checked:enabled,onChange:event=>setFolioToolbarVisibility(runtime,event.target.checked)}),React.createElement('span',{className:'bp3-control-indicator','aria-hidden':'true'}));
 }}};
}
function FolioSettingsSurface({runtime}) {
 const React=window.React,e=React.createElement;const [,update]=React.useState(0);
 const definitions=runtime.settingsDefinitions||[];
 const values={'folio-theme-enabled':runtime.themeEnabled,'folio-pause-css':runtime.cssPaused,'folio-pause-interactive':runtime.paused};
 return e('div',null,definitions.map((setting,index)=>{
  const action=setting.action;if(!action)return null;
  let control;
  if(action.type==='reactComponent')control=e(action.component);
  else if(action.type==='switch')control=e('label',{className:'bp3-control bp3-switch'},e('input',{type:'checkbox',role:'switch','aria-label':setting.name,checked:Boolean(values[setting.id]??runtime.extensionAPI.settings.get(setting.id)),onChange:event=>{action.onChange(event);update(n=>n+1);}}),e('span',{className:'bp3-control-indicator','aria-hidden':'true'}));
  else if(action.type==='select')control=e('select',{'aria-label':setting.name,value:runtime.languageChoice,onChange:event=>{action.onChange(event.target.value);update(n=>n+1);}},action.items.map(item=>e('option',{key:item,value:item},item)));
  else if(action.type==='button')control=e('button',{type:'button',className:'bp3-button',onClick:async()=>{await action.onClick();update(n=>n+1);}},action.content);
  else return null;
  if(!setting.name&&!setting.description)return e('div',{key:setting.id,className:'rm-settings-panel__setting folio-settings-row'},control);
  return e('div',{key:setting.id,className:'rm-settings-panel__setting rm-settings-panel__section folio-settings-row'+(index===0?' rm-settings-panel__section--top':'')},e('div',{className:'folio-settings-global-control'},e('div',{className:'rm-settings-panel__setting-content',title:setting.description||''},e('h4',{className:'rm-settings-panel__setting-name'},setting.name),setting.description?e('div',{className:'rm-settings-panel__description'},setting.description):null),e('div',{className:'rm-settings-panel__setting-action'},control))); 
 }));
}
function registerFolioToolbar(runtime) {
 if(typeof document.createElement!=='function'||!document.body||typeof MutationObserver==='undefined')return null;
 let topbar=null,buttonGroup=null,button=null,aiButton=null,nativeAi=null,aiObserver=null,frame=0,dialog=null,dialogTitle=null,root=null,content=null,legacyRender=false,stopped=false,knownAi=false,pendingAi=false,pendingTimer=0;
 const touched=new Map();
 const hoverSelector='#folio-settings-launcher,#folio-ai-launcher,[data-folio-sidebar-role]';
 const dismissedHover=new Set();
 const hoverTarget=event=>event.target instanceof Element?event.target.closest(hoverSelector):null;
 const resetHover=event=>{const target=hoverTarget(event);if(!target||target.contains(event.relatedTarget))return;target.removeAttribute('data-folio-hover-dismissed');dismissedHover.delete(target);};
 const dismissHover=event=>{const target=hoverTarget(event);if(!target)return;target.setAttribute('data-folio-hover-dismissed','true');dismissedHover.add(target);for(const old of dismissedHover)if(!old.isConnected){old.removeAttribute('data-folio-hover-dismissed');dismissedHover.delete(old);}};
 document.addEventListener('pointerover',resetHover,true);document.addEventListener('pointerout',resetHover,true);document.addEventListener('click',dismissHover,true);

 let panelPosition=null,panelDrag=null,panelSizeObserver=null;
 const placePanel=(left,top)=>{
  if(!dialog)return;const box=dialog.getBoundingClientRect();
  const x=Math.max(8,Math.min(left,Math.max(8,window.innerWidth-box.width-8)));
  const y=Math.max(8,Math.min(top,Math.max(8,window.innerHeight-box.height-8)));
  if(dialog.style.left!==x+'px')dialog.style.left=x+'px';if(dialog.style.top!==y+'px')dialog.style.top=y+'px';panelPosition={left:x,top:y};
 };
 const keepPanelVisible=()=>{if(dialog&&panelPosition)placePanel(panelPosition.left,panelPosition.top);};
 window.addEventListener('resize',keepPanelVisible);

 let aiHeader=null,aiCard=null,aiTrack=null,aiSidebar=null,aiSlot=null,ownAiSlot=false;
 const headerPriors=new Map();
 const headerResize=typeof ResizeObserver==='undefined'?null:new ResizeObserver(()=>schedule());
 const clearHeader=()=>{
  headerResize?.disconnect();if(ownAiSlot)aiSlot?.remove();aiSlot=null;ownAiSlot=false;aiTrack?.removeEventListener('scroll',schedule);aiTrack=null;aiCard=null;aiSidebar=null;
  for(const [element,prior] of headerPriors){
   if(prior.mark===null)element.removeAttribute('data-folio-ai-card-header');else element.setAttribute('data-folio-ai-card-header',prior.mark);
   for(const [key,value,priority] of prior.styles){if(value)element.style.setProperty(key,value,priority);else element.style.removeProperty(key);}
  }
  headerPriors.clear();aiHeader=null;
 };
 const syncHeader=()=>{
  if(!runtime.enabled.has('right-sidebar')||runtime.paused||runtime.cssPaused){clearHeader();return;}
  const side=document.querySelector('#right-sidebar'),header=side?.querySelector(':scope > .rm-sidebar-nav > .rm-agent-chat-header');
  const panel=side?.querySelector('.rm-agent-chat-panel');
  const card=panel?.closest('.rm-sidebar-window');const track=card?.closest('.sidebar-content');
  if(!header||!card||!track){clearHeader();return;}
  if(header!==aiHeader||card!==aiCard||track!==aiTrack||side!==aiSidebar||!aiSlot?.isConnected){
   clearHeader();aiHeader=header;aiCard=card;aiTrack=track;aiSidebar=side;
   headerPriors.set(header,{mark:header.getAttribute('data-folio-ai-card-header'),styles:['--folio-ai-header-left','--folio-ai-header-width','--folio-ai-header-top'].map(key=>[key,header.style.getPropertyValue(key),header.style.getPropertyPriority(key)])});
   aiSlot=card.querySelector(':scope > .window-headers');
   if(!aiSlot){aiSlot=document.createElement('div');aiSlot.className='window-headers folio-ai-card-toolbar';aiSlot.setAttribute('aria-hidden','true');const close=document.createElement('button');close.type='button';close.className='bp3-button bp3-minimal bp3-icon-cross';close.setAttribute('aria-label',copy().aiClose);close.title=copy().aiClose;close.onclick=()=>{nativeAi?.click();schedule();};aiSlot.append(close);card.prepend(aiSlot);ownAiSlot=true;}
   track.addEventListener('scroll',schedule,{passive:true});headerResize?.observe(card);headerResize?.observe(side);headerResize?.observe(aiSlot);
  }
  if(ownAiSlot){const close=aiSlot.querySelector('button');set(close,'aria-label',copy().aiClose);set(close,'title',copy().aiClose);}
  const c=aiSlot.getBoundingClientRect(),b=side.getBoundingClientRect();
  set(header,'data-folio-ai-card-header','true');
  for(const [key,value] of [['--folio-ai-header-top',(c.top-b.top)+'px'],['--folio-ai-header-left',(c.left-b.left)+'px'],['--folio-ai-header-width',Math.max(0,c.width-46)+'px']])if(header.style.getPropertyValue(key)!==value)header.style.setProperty(key,value);
 };
 const buttonHost=()=>{if(!buttonGroup){buttonGroup=document.createElement('div');buttonGroup.id='folio-topbar-controls';}if(buttonGroup.parentElement!==topbar)topbar.append(buttonGroup);return buttonGroup;};
 const copy=()=>folioToolbarCopy(runtime);
 const set=(el,name,value)=>{if(el.getAttribute(name)!==String(value))el.setAttribute(name,String(value));};
 const icon=(paths)=>{const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 16 16');svg.setAttribute('width','16');svg.setAttribute('height','16');svg.setAttribute('aria-hidden','true');for(const [tag,attrs] of paths){const node=document.createElementNS(svg.namespaceURI,tag);for(const [key,value]of Object.entries(attrs))node.setAttribute(key,value);svg.append(node);}return svg;};
 const makeButton=id=>{const el=document.createElement('button');el.type='button';el.id=id;el.className='bp3-button bp3-minimal bp3-small';return el;};
 const ensureStyle=()=>{if(document.getElementById('folio-toolbar-ui-style'))return;const style=document.createElement('style');style.id='folio-toolbar-ui-style';style.textContent=MAGAZINE_CSS['toolbar-panel'];document.head.append(style);};
 const closePanel=()=>{if(!dialog)return;panelSizeObserver?.disconnect();panelSizeObserver=null;panelDrag=null;const previous=button;if(root){root.unmount();root=null;}else if(legacyRender)window.ReactDOM?.unmountComponentAtNode?.(content);legacyRender=false;dialog.remove();dialog=null;dialogTitle=null;content=null;button?.setAttribute('aria-expanded','false');if(previous?.isConnected)previous.focus();};
 const renderPanel=()=>{if(!dialog)return;dialogTitle.textContent=copy().settings;const bar=dialog.querySelector('.folio-settings-dialog-header');if(bar){bar.title=copy().move;}dialog.querySelector('.folio-settings-dialog-close')?.setAttribute('aria-label',copy().close);const element=window.React.createElement(FolioSettingsSurface,{runtime});if(root){if(typeof window.ReactDOM?.flushSync==='function')window.ReactDOM.flushSync(()=>root.render(element));else root.render(element);}else if(legacyRender)window.ReactDOM.render(element,content);};
 const openPanel=()=>{
  if(dialog){closePanel();return;}
  const createRoot=window.ReactDOM?.createRoot||window.ReactDOMClient?.createRoot;
  if(!window.React||(!createRoot&&typeof window.ReactDOM?.render!=='function')){window.alert?.(copy().unavailable);return;}
  ensureStyle();dialog=document.createElement('dialog');dialog.id='folio-settings-dialog';dialog.className='rm-modal-dialog rm-modal-dialog--settings';dialog.setAttribute('aria-labelledby','folio-settings-dialog-title');dialog.setAttribute('aria-modal','false');dialog.setAttribute('data-folio-theme',runtime.themeEnabled&&!runtime.cssPaused?'folio':'native');
  const header=document.createElement('div');header.className='folio-settings-dialog-header';header.title=copy().move;dialogTitle=document.createElement('h2');dialogTitle.id='folio-settings-dialog-title';dialogTitle.className='folio-settings-dialog-title';
  const close=document.createElement('button');close.type='button';close.className='folio-settings-dialog-close';close.textContent='×';close.setAttribute('aria-label',copy().close);close.onclick=closePanel;
  header.append(dialogTitle,close);content=document.createElement('div');content.className='rm-settings folio-settings-dialog-content';dialog.append(header,content);document.body.append(dialog);
  if(createRoot)root=createRoot.call(window.ReactDOM||window.ReactDOMClient,content);else legacyRender=true;
  renderPanel();dialog.addEventListener('cancel',event=>{event.preventDefault();closePanel();});dialog.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();event.stopPropagation();closePanel();}});
  header.addEventListener('pointerdown',event=>{
   if(event.button!==0||event.target.closest('button,input,select,textarea,a'))return;
   const box=dialog.getBoundingClientRect();panelDrag={id:event.pointerId,x:event.clientX,y:event.clientY,left:box.left,top:box.top};
   header.setPointerCapture?.(event.pointerId);dialog.setAttribute('data-dragging','true');event.preventDefault();
  });
  header.addEventListener('pointermove',event=>{if(!panelDrag||panelDrag.id!==event.pointerId)return;placePanel(panelDrag.left+event.clientX-panelDrag.x,panelDrag.top+event.clientY-panelDrag.y);});
  const endDrag=event=>{if(!panelDrag||panelDrag.id!==event.pointerId)return;if(header.hasPointerCapture?.(event.pointerId))header.releasePointerCapture(event.pointerId);panelDrag=null;dialog?.removeAttribute('data-dragging');};
  header.addEventListener('pointerup',endDrag);header.addEventListener('pointercancel',endDrag);header.addEventListener('lostpointercapture',endDrag);
  if(typeof dialog.show==='function')dialog.show();else dialog.setAttribute('open','');
  const anchor=button?.getBoundingClientRect();placePanel(panelPosition?.left??((anchor?.right??window.innerWidth)-dialog.getBoundingClientRect().width),panelPosition?.top??((anchor?.bottom??48)+8));
  if(typeof ResizeObserver!=='undefined'){panelSizeObserver=new ResizeObserver(keepPanelVisible);panelSizeObserver.observe(dialog);}
  button?.setAttribute('aria-expanded','true');close.focus();
 };
 const restoreAi=()=>{aiObserver?.disconnect();aiObserver=null;for(const [element,previous]of touched){if(previous===null)element.removeAttribute('data-folio-ai-proxied');else element.setAttribute('data-folio-ai-proxied',previous);}touched.clear();nativeAi=null;aiButton?.remove();aiButton=null;pendingAi=false;if(pendingTimer)clearTimeout(pendingTimer);pendingTimer=0;};
 const schedule=()=>{if(!stopped&&!frame)frame=requestAnimationFrame(()=>{frame=0;sync();});};
 const proxyAi=()=>{
  const native=document.querySelector('.rm-agent-sidebar-chat-launcher');
  if(native){native.click();sync();return;}
  const open=window.roamAlphaAPI?.ui?.rightSidebar?.open;if(typeof open!=='function'||pendingAi)return;
  pendingAi=true;
  // Do not wait for Roam's sidebar transition promise before forwarding the click.
  try {Promise.resolve(open()).catch(error=>{pendingAi=false;console.warn('[Folio] AI sidebar could not open',error);});sync();}
  catch(error){pendingAi=false;console.warn('[Folio] AI sidebar could not open',error);}
  if(pendingAi)pendingTimer=setTimeout(()=>{pendingAi=false;pendingTimer=0;},3000);
 };
 const syncAi=()=>{
  if(!runtime.featureValues.get('sidebar-toggles')||runtime.paused||runtime.cssPaused||!topbar){restoreAi();return;}
  const next=document.querySelector('.rm-agent-sidebar-chat-launcher');
  if(next!==nativeAi){aiObserver?.disconnect();nativeAi=next;if(nativeAi){knownAi=true;if(!touched.has(nativeAi))touched.set(nativeAi,nativeAi.getAttribute('data-folio-ai-proxied'));aiObserver=new MutationObserver(schedule);aiObserver.observe(nativeAi,{attributes:true,attributeFilter:['aria-expanded','data-chat-open','disabled']});}}
  if(!knownAi)return;
  if(!nativeAi){const sidebar=document.querySelector('#right-sidebar');const rect=sidebar?.getBoundingClientRect();const style=sidebar&&getComputedStyle(sidebar);if(rect&&rect.width>1&&rect.left<window.innerWidth&&rect.right>0&&style.display!=='none'&&style.visibility!=='hidden'&&!pendingAi){restoreAi();knownAi=false;return;}}
  if(!aiButton){aiButton=makeButton('folio-ai-launcher');aiButton.append(icon([['path',{d:'M5 1L3.7 4 1 5.2 3.7 6.4 5 9.5 6.3 6.4 9 5.2 6.3 4ZM12 8L10.9 10.7 8.5 11.8 10.9 12.8 12 15.5 13.1 12.8 15.5 11.8 13.1 10.7Z',fill:'currentColor'}]]));aiButton.onclick=proxyAi;}
  if(aiButton.parentElement!==buttonHost())buttonGroup.append(aiButton);
  ensureStyle();const expanded=nativeAi?.getAttribute('aria-expanded')==='true'||nativeAi?.getAttribute('data-chat-open')==='true';set(aiButton,'aria-expanded',expanded);set(aiButton,'aria-label',copy().ai);set(aiButton,'title',expanded?copy().aiClose:copy().aiOpen);
  const controls=nativeAi?.getAttribute('aria-controls');if(controls)set(aiButton,'aria-controls',controls);else aiButton.removeAttribute('aria-controls');aiButton.disabled=Boolean(nativeAi?.disabled);
  if(nativeAi)set(nativeAi,'data-folio-ai-proxied','true');
  for(const [element,previous]of touched)if(!element.isConnected){if(previous===null)element.removeAttribute('data-folio-ai-proxied');else element.setAttribute('data-folio-ai-proxied',previous);touched.delete(element);}
  if(pendingAi&&nativeAi){pendingAi=false;if(pendingTimer)clearTimeout(pendingTimer);pendingTimer=0;nativeAi.click();schedule();}
 };
 const sync=()=>{
  if(stopped)return;if(runtime.featureValues.get('sidebar-toggles')&&!runtime.cssPaused)ensureStyle();if(dialog)set(dialog,'data-folio-theme',runtime.themeEnabled&&!runtime.cssPaused?'folio':'native');topbar=document.querySelector('.rm-topbar');
  if(runtime.toolbarSettingsEnabled&&topbar){ensureStyle();if(!button){button=makeButton('folio-settings-launcher');button.append(icon([['path',{d:'M2 4H14M2 8H14M2 12H14',fill:'none',stroke:'currentColor','stroke-width':'1.5','stroke-linecap':'round'}],['rect',{x:'5',y:'2.3',width:'2',height:'3.4',rx:'.6',fill:'currentColor'}],['rect',{x:'10',y:'6.3',width:'2',height:'3.4',rx:'.6',fill:'currentColor'}],['rect',{x:'4',y:'10.3',width:'2',height:'3.4',rx:'.6',fill:'currentColor'}]]));button.onclick=openPanel;}if(button.parentElement!==buttonHost())buttonGroup.append(button);set(button,'aria-label',copy().settings);set(button,'title',copy().settings);set(button,'aria-controls','folio-settings-dialog');set(button,'aria-haspopup','dialog');set(button,'aria-expanded',Boolean(dialog));}
  else {button?.remove();button=null;}
  syncAi();syncHeader();if(buttonGroup&&!buttonGroup.childElementCount){buttonGroup.remove();buttonGroup=null;}
 };
 const observer=new MutationObserver(records=>{
  if((topbar&&!topbar.isConnected)||(button&&!button.isConnected)||(nativeAi&&!nativeAi.isConnected)||(aiCard&&!aiCard.isConnected)||(aiHeader&&!aiHeader.isConnected)||(aiSlot&&!aiSlot.isConnected)){schedule();return;}
  for(const record of records)for(const node of record.addedNodes)if(node instanceof Element&&(node.matches('.rm-topbar,.rm-sidebar-nav,.rm-agent-sidebar-chat-launcher,.rm-agent-chat-panel,.rm-agent-chat-header')||(node.childElementCount&&node.querySelector('.rm-topbar,.rm-agent-sidebar-chat-launcher,.rm-agent-chat-panel,.rm-agent-chat-header')))){schedule();return;}
 });observer.observe(document.body,{childList:true,subtree:true});sync();
 return {sync,renderPanel,openPanel,closePanel,destroy(){stopped=true;document.removeEventListener('pointerover',resetHover,true);document.removeEventListener('pointerout',resetHover,true);document.removeEventListener('click',dismissHover,true);for(const target of dismissedHover)target.removeAttribute('data-folio-hover-dismissed');dismissedHover.clear();window.removeEventListener('resize',keepPanelVisible);observer.disconnect();aiObserver?.disconnect();if(frame)cancelAnimationFrame(frame);closePanel();button?.remove();restoreAi();clearHeader();buttonGroup?.remove();document.getElementById('folio-toolbar-ui-style')?.remove();}};
}

/* Shared calendar presentation. Native reference-date callbacks stay in Roam. */
const CALENDAR_COPY = {
 en:{jump:'Go to a daily note',input:'Type a date and press Enter…',invalid:'Date not recognized',today:'Today',yesterday:'Yesterday',tomorrow:'Tomorrow',monday:'Coming Monday',week:'1 week from now',month:'1 month from now',quarter:'3 months from now',year:'1 year from now',command:'Calendar: jump to date',blocks:'blocks',mentions:'mentions',todo:'TODO',done:'DONE',capture:'Quick capture…',working:'Working…',failed:'Action failed. Please try again.',addNote:'＋Note',plan:'Today’s plan',todoAdded:'TODO added to ',noteAdded:'Note added to ',planExists:'Today’s plan already exists',copied:'Copied template contents',carry:'↪ Carry over',carryTitle:'Review yesterday’s unfinished tasks',none:'No unfinished TODOs from yesterday',pending:'{n} unfinished TODOs from yesterday',reference:'Reference today',move:'Move to today',moving:'Moving…',moved:'Moved {n}; undo is available in the calendar',notMoved:'No tasks were moved',undo:'Undo move',undoLast:'Undo last move',undoTitle:'Restore the original parents and order',noUndo:'No move to undo',restoring:'Restoring original locations…',restored:'Original locations restored',restoreFailed:'Could not restore {n} tasks. Please try again.',close:'Close; reopen using Carry over in the calendar'},
 zh:{jump:'跳转到日记',input:'输入日期后按 Enter…',invalid:'无法识别日期',today:'今天',yesterday:'昨天',tomorrow:'明天',monday:'下周一',week:'一周后',month:'一个月后',quarter:'三个月后',year:'一年后',command:'日历：跳转日期',blocks:'块',mentions:'引用',todo:'待办',done:'完成',capture:'快速记录…',working:'处理中…',failed:'操作失败，请重试',addNote:'＋笔记',plan:'今日计划',todoAdded:'TODO 已添加到 ',noteAdded:'笔记已添加到 ',planExists:'已有“今日计划”',copied:'已复制模板下方内容',carry:'↪ 遗留',carryTitle:'处理昨天的未完成任务',none:'昨天没有遗留 TODO',pending:'昨天还有 {n} 个未完成 TODO',reference:'引用到今天',move:'迁移到今天',moving:'正在迁移…',moved:'已迁移 {n} 个；日历内可撤销',notMoved:'没有任务被迁移',undo:'撤销迁移',undoLast:'撤销上次迁移',undoTitle:'把上次迁移的任务放回原父块和原顺序',noUndo:'没有可撤销的迁移',restoring:'正在放回原位置…',restored:'已放回原位置',restoreFailed:'仍有 {n} 个任务未能放回，请再试一次',close:'关闭；可从日历里的遗留入口再次打开'},
 fr:{jump:'Aller à une note quotidienne',input:'Saisissez une date puis Entrée…',invalid:'Date non reconnue',today:'Aujourd’hui',yesterday:'Hier',tomorrow:'Demain',monday:'Lundi prochain',week:'Dans une semaine',month:'Dans un mois',quarter:'Dans trois mois',year:'Dans un an',command:'Calendrier : aller à une date',blocks:'blocs',mentions:'mentions',todo:'à faire',done:'terminé',capture:'Saisie rapide…',working:'Traitement…',failed:'Échec. Veuillez réessayer.',addNote:'＋Note',plan:'Plan du jour',todoAdded:'TODO ajouté à ',noteAdded:'Note ajoutée à ',planExists:'Le plan du jour existe déjà',copied:'Contenu du modèle copié',carry:'↪ Report',carryTitle:'Revoir les tâches inachevées d’hier',none:'Aucun TODO inachevé d’hier',pending:'{n} TODO inachevés d’hier',reference:'Référencer aujourd’hui',move:'Déplacer à aujourd’hui',moving:'Déplacement…',moved:'{n} déplacés ; annulation disponible dans le calendrier',notMoved:'Aucune tâche déplacée',undo:'Annuler le déplacement',undoLast:'Annuler le dernier déplacement',undoTitle:'Rétablir les parents et l’ordre d’origine',noUndo:'Aucun déplacement à annuler',restoring:'Restauration…',restored:'Emplacements d’origine rétablis',restoreFailed:'{n} tâches non restaurées. Réessayez.',close:'Fermer ; rouvrir via Report dans le calendrier'},
 de:{jump:'Zu einer Tagesnotiz springen',input:'Datum eingeben und Eingabetaste drücken…',invalid:'Datum nicht erkannt',today:'Heute',yesterday:'Gestern',tomorrow:'Morgen',monday:'Kommender Montag',week:'In einer Woche',month:'In einem Monat',quarter:'In drei Monaten',year:'In einem Jahr',command:'Kalender: zu Datum springen',blocks:'Blöcke',mentions:'Erwähnungen',todo:'offen',done:'erledigt',capture:'Schnellerfassung…',working:'In Bearbeitung…',failed:'Aktion fehlgeschlagen. Bitte erneut versuchen.',addNote:'＋Notiz',plan:'Tagesplan',todoAdded:'TODO hinzugefügt: ',noteAdded:'Notiz hinzugefügt: ',planExists:'Tagesplan bereits vorhanden',copied:'Vorlageninhalt kopiert',carry:'↪ Übertrag',carryTitle:'Offene Aufgaben von gestern prüfen',none:'Keine offenen TODOs von gestern',pending:'{n} offene TODOs von gestern',reference:'Heute referenzieren',move:'Nach heute verschieben',moving:'Verschieben…',moved:'{n} verschoben; im Kalender rückgängig machbar',notMoved:'Keine Aufgaben verschoben',undo:'Verschieben rückgängig',undoLast:'Letztes Verschieben rückgängig',undoTitle:'Ursprüngliche Elternblöcke und Reihenfolge wiederherstellen',noUndo:'Nichts rückgängig zu machen',restoring:'Ursprüngliche Positionen wiederherstellen…',restored:'Positionen wiederhergestellt',restoreFailed:'{n} Aufgaben nicht wiederhergestellt. Erneut versuchen.',close:'Schließen; über Übertrag im Kalender wieder öffnen'},
 es:{jump:'Ir a una nota diaria',input:'Escriba una fecha y pulse Intro…',invalid:'Fecha no reconocida',today:'Hoy',yesterday:'Ayer',tomorrow:'Mañana',monday:'Próximo lunes',week:'Dentro de una semana',month:'Dentro de un mes',quarter:'Dentro de tres meses',year:'Dentro de un año',command:'Calendario: ir a una fecha',blocks:'bloques',mentions:'menciones',todo:'pendiente',done:'hecho',capture:'Captura rápida…',working:'Procesando…',failed:'Error. Inténtelo de nuevo.',addNote:'＋Nota',plan:'Plan de hoy',todoAdded:'TODO añadido a ',noteAdded:'Nota añadida a ',planExists:'El plan de hoy ya existe',copied:'Contenido de plantilla copiado',carry:'↪ Pendientes',carryTitle:'Revisar las tareas pendientes de ayer',none:'No hay TODO pendientes de ayer',pending:'{n} TODO pendientes de ayer',reference:'Referenciar hoy',move:'Mover a hoy',moving:'Moviendo…',moved:'{n} movidos; puede deshacer en el calendario',notMoved:'No se movió ninguna tarea',undo:'Deshacer movimiento',undoLast:'Deshacer último movimiento',undoTitle:'Restaurar los padres y el orden originales',noUndo:'No hay movimiento que deshacer',restoring:'Restaurando posiciones…',restored:'Posiciones originales restauradas',restoreFailed:'No se restauraron {n} tareas. Inténtelo de nuevo.',close:'Cerrar; reabrir desde Pendientes en el calendario'},
 it:{jump:'Vai a una nota giornaliera',input:'Inserisci una data e premi Invio…',invalid:'Data non riconosciuta',today:'Oggi',yesterday:'Ieri',tomorrow:'Domani',monday:'Lunedì prossimo',week:'Tra una settimana',month:'Tra un mese',quarter:'Tra tre mesi',year:'Tra un anno',command:'Calendario: vai a una data',blocks:'blocchi',mentions:'menzioni',todo:'da fare',done:'completato',capture:'Inserimento rapido…',working:'Elaborazione…',failed:'Operazione non riuscita. Riprova.',addNote:'＋Nota',plan:'Piano di oggi',todoAdded:'TODO aggiunto a ',noteAdded:'Nota aggiunta a ',planExists:'Il piano di oggi esiste già',copied:'Contenuto del modello copiato',carry:'↪ Arretrati',carryTitle:'Rivedi le attività incompiute di ieri',none:'Nessun TODO incompiuto di ieri',pending:'{n} TODO incompiuti di ieri',reference:'Riferisci a oggi',move:'Sposta a oggi',moving:'Spostamento…',moved:'{n} spostati; puoi annullare nel calendario',notMoved:'Nessuna attività spostata',undo:'Annulla spostamento',undoLast:'Annulla ultimo spostamento',undoTitle:'Ripristina i genitori e l’ordine originali',noUndo:'Nessuno spostamento da annullare',restoring:'Ripristino delle posizioni…',restored:'Posizioni originali ripristinate',restoreFailed:'{n} attività non ripristinate. Riprova.',close:'Chiudi; riapri da Arretrati nel calendario'}
};
function calendarText(key, values={}) {let text=(CALENDAR_COPY[window.__magLocale]||CALENDAR_COPY.en)[key]||CALENDAR_COPY.en[key]||key;for(const [name,value] of Object.entries(values)) text=text.replaceAll('{'+name+'}',String(value));return text;}
function calendarHost(picker) {return picker.querySelector('.DayPicker')?.parentElement||picker;}
function visibleCalendars() {return [...document.querySelectorAll('.bp3-datepicker')].filter(picker=>picker.offsetParent!==null);}
function refreshCalendarLanguage(runtime) {
 const localized = FEATURES.filter(feature=>['calendar-keyboard','calendar-capture','calendar-carry','calendar-preview'].includes(feature.id) && runtime.activeJs.has(feature.id));
 localized.forEach(feature=>runtime.cleanupFeature(feature));
 localized.forEach(feature=>runtime.startFeature(feature));
 window.__folioAttachCalendar?.();
}


const VERSION = "1.4.20";
const BUILD_DATE = "2026-11-13";
const STYLE_ID = "folio-plugin-style";
const SETTING_PREFIX = "folio-";
const LEGACY_SETTING_PREFIX = "imprint-";
const SETTINGS_LANGUAGE_ITEMS = ["Auto", "中文", "English", "Français", "Deutsch", "Español", "Italiano"];
const LANGUAGE_ITEM_TO_CODE = {
  Auto: "auto",
  中文: "zh",
  English: "en",
  Français: "fr",
  Deutsch: "de",
  Español: "es",
  Italiano: "it",
};

/* The visual theme is intentionally one switch.  These original source blocks
   are injected together, never exposed as dozens of micro-settings. */
const THEME_CSS_IDS = [
  "web-fonts", "base", "layout", "menus", "references", "quotes", "callouts",
  "tasks", "left-sidebar", "block-controls", "topbar", "page-titles", "headings",
  "inline", "links", "code-style", "tables", "responsive", "kanban", "diagram",
  "slider", "settings", "marketplace", "misc", "theme-host-fixes",
];

/* Components remain independently switchable and are ordered by measured type
   of work rather than by how visually prominent they are. */
const FEATURES = [
  { id: "sidebar-toggles", impact: 1, default: true, native: "nativeSidebarToggles" },
  { id: "hide-top-buttons", impact: 1, default: true, cssOnly: true },
  { id: "hide-left-sidebar-items", impact: 1, default: true, cssOnly: true },
  { id: "workbench-compat", impact: 1, default: true, cssOnly: true },
  { id: "scroll-indicator", impact: 1, default: true, native: "scrollIndicator" },
  { id: "tags", impact: 1, default: true, custom: "tagLabels" },
  { id: "or-dropdown", impact: 1, default: true, runner: "or-dropdown", module: "ormark" },
  { id: "daily-masthead", impact: 1, default: true, runner: "daily-masthead", module: "masthead" },
  { id: "typewriter", impact: 1, default: true, runner: "typewriter", module: "typewriter" },
  { id: "calendar-quick", impact: 1, default: true, runner: "calendar-quick", cleanups: [["__delmarCalendarQuickCleanup"]] },
  { id: "calendar-keyboard", impact: 1, default: true, runner: "calendar-keyboard", cleanups: [["__delmarCalendarKeyboardCleanup"]] },
  { id: "calendar-template", impact: 1, default: true, runner: "calendar-template", cleanups: [["__delmarAutoDnpTemplateCleanup"]] },

  { id: "asides", impact: 2, default: true, runner: "asides", module: "asides" },
  { id: "code-height", impact: 1, default: true, cssOnly: true },
  { id: "images", impact: 2, default: true, runner: "images", module: "captions" },
  { id: "graph-button", impact: 2, default: true, runner: "graph-button", cleanups: [["__magazineGraphButton", "cleanup"]] },
  { id: "right-sidebar", impact: 2, default: true, runner: "right-sidebar", module: "sidebar" },
  { id: "pdf", impact: 2, default: true, runner: "pdf", module: "pdf", native: "pdfEscape" },
  { id: "property-card", impact: 2, default: true, runner: "property-card", module: "card", page: true },

  { id: "calendar-preview", impact: 3, default: true, runner: "calendar-preview", cleanups: [["__delmarCalendarPreviewCleanup"]] },
  { id: "calendar-carry", impact: 3, default: true, runner: "calendar-carry", cleanups: [["__delmarCalendarCarryCleanup"]] },
  { id: "page-stats", impact: 3, default: true, runner: "page-stats", module: "stats", page: true },
  { id: "weight", impact: 3, default: true, runner: "weight", module: "weight", page: true },

  { id: "code-tools", impact: 4, default: true, runner: "code-tools", cleanups: [["__magCodeBottom", "stop"]] },
  { id: "video-reader", impact: 4, default: true, runner: "video-reader", native: "videoOpenSidebar", cleanups: [["__magVideoReaderCleanup"], ["__magVideoTheaterCleanup"]] },
  { id: "calendar-capture", impact: 4, default: true, runner: "calendar-capture", cleanups: [["__delmarCalendarCaptureCleanup"]] },
  { id: "pulse", impact: 4, default: true, runner: "pulse", module: "pulse", page: true },
  { id: "editorial-desk", impact: 4, default: true, runner: "editorial-desk", module: "desk" },
  { id: "random-tasks", impact: 4, default: true, runner: "random-tasks", cleanups: [["__DELMar_RANDOM_TODO3__", "destroy"]] },
];

const FEATURE_NAMES = {
  en: {
    "web-fonts": "Web fonts", base: "Typography and colour system", layout: "Page layout", menus: "Menus, dialogs and search",
    notes: "Notes section labels", references: "Linked references", quotes: "Quotes and dividers", callouts: "Callouts",
    tasks: "TODO / DONE", "left-sidebar": "Left sidebar", "block-controls": "Block controls and reference counts", topbar: "Top bar",
    "page-titles": "Page titles", headings: "H1–H3 headings", inline: "Inline formatting", links: "Links and tags", "code-style": "Code-block styling",
    tables: "Tables", responsive: "Narrow-screen layout", kanban: "Kanban", diagram: "Diagrams", slider: "Number sliders",
    settings: "Settings window", marketplace: "Extension marketplace", misc: "Small finishing styles", "reading-list": "Reading List labels",
    mood: "Mood labels", "hide-top-buttons": "Hide top-bar icons", "hide-left-sidebar-items": "Hide left-sidebar items", "workbench-compat": "Workbench dropdown compatibility", "scroll-indicator": "Show the page scrollbar only while scrolling", tags: "Special labels and stamps", "or-dropdown": "OR dropdown chips",
    "daily-masthead": "Daily-note masthead", "right-sidebar": "Right-sidebar cards", "graph-button": "Page graph button",
    typewriter: "Typewriter mode and writing goal", "code-tools": "Code-block tools", images: "Images and captions", pdf: "PDF window",
    asides: "Margin notes", "calendar-quick": "Calendar quick actions",
    "calendar-keyboard": "Calendar keyboard navigation", weight: "Reference-based visual weight",
    "property-card": "Property card", "page-stats": "Page statistics", pulse: "Page pulse", "random-tasks": "Random TODO 3",
    "video-reader": "Video reader", "calendar-template": "Automatic daily templates", "calendar-preview": "Calendar heatmap and preview",
    "calendar-carry": "Carry yesterday's TODOs", "calendar-capture": "Calendar quick capture", "editorial-desk": "Editorial Desk",
  },
  zh: {
    "web-fonts": "网络字体", base: "排版与配色系统", layout: "页面布局", menus: "菜单、弹窗与搜索",
    notes: "Notes 栏目签", references: "反向引用区", quotes: "引用块与分隔线", callouts: "Callout 提示框",
    tasks: "TODO / DONE", "left-sidebar": "左侧栏", "block-controls": "块内按钮与引用计数", topbar: "顶部栏",
    "page-titles": "页面标题", headings: "H1–H3 标题", inline: "行内样式", links: "链接与标签", "code-style": "代码块样式",
    tables: "表格", responsive: "窄屏布局", kanban: "看板", diagram: "图表", slider: "数字滑条",
    settings: "设置窗口", marketplace: "插件商店", misc: "其他细节样式", "reading-list": "Reading List 栏目签",
    mood: "情绪标签", "hide-top-buttons": "隐藏顶部图标", "hide-left-sidebar-items": "隐藏左侧边栏项目", "workbench-compat": "Workbench 下拉选择兼容", "scroll-indicator": "仅在滚动时显示页面滚动条", tags: "特殊标签与印章", "or-dropdown": "OR 勾叉下拉",
    "daily-masthead": "日记刊头", "right-sidebar": "右侧栏卡片", "graph-button": "页面关系图按钮",
    typewriter: "打字机模式与写作目标", "code-tools": "代码块操作工具", images: "图片与图注", pdf: "PDF 窗口",
    asides: "页边旁注", "calendar-quick": "日历快捷操作",
    "calendar-keyboard": "日历键盘导航", weight: "按引用次数调整版面权重",
    "property-card": "属性资料卡", "page-stats": "页面数据行", pulse: "页面脉搏", "random-tasks": "随机任务 3",
    "video-reader": "视频阅读器", "calendar-template": "自动日记模板", "calendar-preview": "日期热度与预览",
    "calendar-carry": "处理昨日遗留 TODO", "calendar-capture": "日历快速记录", "editorial-desk": "编辑部案头",
  },
  fr: {
    "web-fonts": "Polices web", base: "Typographie et couleurs", layout: "Mise en page", menus: "Menus, fenêtres et recherche",
    notes: "Étiquettes de notes", references: "Références liées", quotes: "Citations et séparateurs", callouts: "Encadrés",
    tasks: "TODO / DONE", "left-sidebar": "Barre latérale gauche", "block-controls": "Commandes de bloc et références", topbar: "Barre supérieure",
    "page-titles": "Titres de page", headings: "Titres H1–H3", inline: "Mise en forme intégrée", links: "Liens et étiquettes", "code-style": "Style des blocs de code",
    tables: "Tableaux", responsive: "Affichage étroit", kanban: "Kanban", diagram: "Diagrammes", slider: "Curseurs numériques",
    settings: "Fenêtre des réglages", marketplace: "Catalogue d’extensions", misc: "Finitions", "reading-list": "Étiquettes Reading List",
    mood: "Étiquettes d’humeur", "hide-top-buttons": "Masquer les icônes supérieures", "hide-left-sidebar-items": "Masquer des éléments de la barre gauche", "workbench-compat": "Compatibilité des listes Workbench", "scroll-indicator": "Afficher la barre uniquement pendant le défilement", tags: "Étiquettes et tampons spéciaux", "or-dropdown": "Sélecteur OR",
    "daily-masthead": "En-tête du journal", "right-sidebar": "Cartes de la barre droite", "graph-button": "Bouton graphe de page",
    typewriter: "Mode machine à écrire et objectif", "code-tools": "Outils des blocs de code", images: "Images et légendes", pdf: "Fenêtre PDF",
    asides: "Notes marginales", "calendar-quick": "Actions rapides du calendrier",
    "calendar-keyboard": "Navigation clavier du calendrier", weight: "Poids visuel par références",
    "property-card": "Fiche de propriétés", "page-stats": "Statistiques de page", pulse: "Pouls de la page", "random-tasks": "3 tâches aléatoires",
    "video-reader": "Lecteur vidéo", "calendar-template": "Modèles quotidiens automatiques", "calendar-preview": "Carte thermique et aperçu du calendrier",
    "calendar-carry": "Reporter les TODO d’hier", "calendar-capture": "Capture rapide du calendrier", "editorial-desk": "Bureau éditorial",
  },
  de: {
    "web-fonts": "Web-Schriftarten", base: "Typografie und Farben", layout: "Seitenlayout", menus: "Menüs, Dialoge und Suche",
    notes: "Notiz-Rubriken", references: "Verknüpfte Referenzen", quotes: "Zitate und Trennlinien", callouts: "Hinweisfelder",
    tasks: "TODO / DONE", "left-sidebar": "Linke Seitenleiste", "block-controls": "Blocksteuerung und Referenzen", topbar: "Obere Leiste",
    "page-titles": "Seitentitel", headings: "Überschriften H1–H3", inline: "Inline-Formatierung", links: "Links und Tags", "code-style": "Codeblock-Stil",
    tables: "Tabellen", responsive: "Schmales Layout", kanban: "Kanban", diagram: "Diagramme", slider: "Zahlenregler",
    settings: "Einstellungsfenster", marketplace: "Erweiterungsmarkt", misc: "Feineinstellungen", "reading-list": "Reading-List-Tags",
    mood: "Stimmungs-Tags", "hide-top-buttons": "Symbole der oberen Leiste ausblenden", "hide-left-sidebar-items": "Elemente der linken Seitenleiste ausblenden", "workbench-compat": "Workbench-Auswahlkompatibilität", "scroll-indicator": "Seitenleiste nur beim Scrollen anzeigen", tags: "Spezielle Tags und Stempel", "or-dropdown": "OR-Auswahl",
    "daily-masthead": "Tagesnotiz-Kopf", "right-sidebar": "Karten der rechten Seitenleiste", "graph-button": "Seitengraph-Schaltfläche",
    typewriter: "Schreibmaschinenmodus und Schreibziel", "code-tools": "Codeblock-Werkzeuge", images: "Bilder und Bildunterschriften", pdf: "PDF-Fenster",
    asides: "Randnotizen", "calendar-quick": "Kalender-Schnellaktionen",
    "calendar-keyboard": "Kalender-Tastaturnavigation", weight: "Visuelles Gewicht nach Referenzen",
    "property-card": "Eigenschaftskarte", "page-stats": "Seitenstatistik", pulse: "Seitenpuls", "random-tasks": "3 zufällige Aufgaben",
    "video-reader": "Videoleser", "calendar-template": "Automatische Tagesvorlagen", "calendar-preview": "Kalender-Heatmap und Vorschau",
    "calendar-carry": "TODOs von gestern übernehmen", "calendar-capture": "Kalender-Schnellerfassung", "editorial-desk": "Redaktionspult",
  },
  es: {
    "web-fonts": "Fuentes web", base: "Tipografía y colores", layout: "Diseño de página", menus: "Menús, diálogos y búsqueda",
    notes: "Etiquetas de notas", references: "Referencias vinculadas", quotes: "Citas y separadores", callouts: "Avisos",
    tasks: "TODO / DONE", "left-sidebar": "Barra lateral izquierda", "block-controls": "Controles de bloque y referencias", topbar: "Barra superior",
    "page-titles": "Títulos de página", headings: "Encabezados H1–H3", inline: "Formato en línea", links: "Enlaces y etiquetas", "code-style": "Estilo de bloques de código",
    tables: "Tablas", responsive: "Diseño estrecho", kanban: "Kanban", diagram: "Diagramas", slider: "Controles numéricos",
    settings: "Ventana de ajustes", marketplace: "Tienda de extensiones", misc: "Acabados", "reading-list": "Etiquetas de Reading List",
    mood: "Etiquetas de ánimo", "hide-top-buttons": "Ocultar iconos superiores", "hide-left-sidebar-items": "Ocultar elementos de la barra izquierda", "workbench-compat": "Compatibilidad de menús Workbench", "scroll-indicator": "Mostrar la barra solo al desplazarse", tags: "Etiquetas y sellos especiales", "or-dropdown": "Selector OR",
    "daily-masthead": "Cabecera de nota diaria", "right-sidebar": "Tarjetas de la barra derecha", "graph-button": "Botón de grafo de página",
    typewriter: "Modo máquina de escribir y objetivo", "code-tools": "Herramientas de bloques de código", images: "Imágenes y pies", pdf: "Ventana PDF",
    asides: "Notas al margen", "calendar-quick": "Acciones rápidas del calendario",
    "calendar-keyboard": "Navegación del calendario por teclado", weight: "Peso visual por referencias",
    "property-card": "Ficha de propiedades", "page-stats": "Estadísticas de página", pulse: "Pulso de página", "random-tasks": "3 tareas aleatorias",
    "video-reader": "Lector de vídeo", "calendar-template": "Plantillas diarias automáticas", "calendar-preview": "Mapa de calor y vista previa del calendario",
    "calendar-carry": "Trasladar TODO de ayer", "calendar-capture": "Captura rápida del calendario", "editorial-desk": "Mesa editorial",
  },
  it: {
    "web-fonts": "Font web", base: "Tipografia e colori", layout: "Layout pagina", menus: "Menu, finestre e ricerca",
    notes: "Etichette delle note", references: "Riferimenti collegati", quotes: "Citazioni e separatori", callouts: "Riquadri",
    tasks: "TODO / DONE", "left-sidebar": "Barra laterale sinistra", "block-controls": "Controlli blocco e riferimenti", topbar: "Barra superiore",
    "page-titles": "Titoli pagina", headings: "Titoli H1–H3", inline: "Formattazione in linea", links: "Link ed etichette", "code-style": "Stile dei blocchi di codice",
    tables: "Tabelle", responsive: "Layout stretto", kanban: "Kanban", diagram: "Diagrammi", slider: "Cursori numerici",
    settings: "Finestra impostazioni", marketplace: "Negozio estensioni", misc: "Rifiniture", "reading-list": "Etichette Reading List",
    mood: "Etichette umore", "hide-top-buttons": "Nascondi icone superiori", "hide-left-sidebar-items": "Nascondi elementi della barra sinistra", "workbench-compat": "Compatibilità menu Workbench", "scroll-indicator": "Mostra la barra solo durante lo scorrimento", tags: "Etichette e timbri speciali", "or-dropdown": "Selettore OR",
    "daily-masthead": "Testata della nota giornaliera", "right-sidebar": "Schede della barra destra", "graph-button": "Pulsante grafo pagina",
    typewriter: "Modalità macchina da scrivere e obiettivo", "code-tools": "Strumenti dei blocchi di codice", images: "Immagini e didascalie", pdf: "Finestra PDF",
    asides: "Note a margine", "calendar-quick": "Azioni rapide calendario",
    "calendar-keyboard": "Navigazione calendario da tastiera", weight: "Peso visivo per riferimenti",
    "property-card": "Scheda proprietà", "page-stats": "Statistiche pagina", pulse: "Impulso pagina", "random-tasks": "3 attività casuali",
    "video-reader": "Lettore video", "calendar-template": "Modelli giornalieri automatici", "calendar-preview": "Mappa di calore e anteprima calendario",
    "calendar-carry": "Riporta i TODO di ieri", "calendar-capture": "Acquisizione rapida calendario", "editorial-desk": "Scrivania editoriale",
  },
};

const UI = {
  en: {
    tab: "Folio", language: "Settings language", languageDesc: "Auto follows the browser. Changes take effect immediately.",
    pause: "Pause all interactive widgets", pauseDesc: "Keeps the visual theme while stopping observers, timers and interactive modules.", cssPause: "Temporarily disable Folio (troubleshooting)", cssPauseDesc: "Restores Roam’s original appearance and pauses Folio components for troubleshooting. Turn this switch off to restore your saved configuration.",
    namespaces: "Custom namespace labels", namespacesDesc: "Format: namespace=style. Styles: section, book, person, industry. Separate entries with semicolons.",
    rules: "Custom tag labels", rulesDesc: "Format: tag=label|style|text colour|background. Styles: section, book, person, industry, stamp, pencil.",
    reset: "Enable everything and restore tag names", resetDesc: "Turns on every feature and restores all special-tag defaults.", resetButton: "Restore all defaults",
    cssDesc: "Visual style only; no background work.", interactiveDesc: "Uses the shared idle scheduler and stops cleanly when disabled.",
    dataDesc: "Optional data feature.", cssSection: "Theme styles · CSS only", cssSectionDesc: "Pure visual styles with no observers or timers. Widgets remain available when all of these are off.", widgetSection: "Widgets · CSS + JS", widgetSectionDesc: "Each switch controls both script and style. Ordered from lower to higher estimated runtime impact.", tagsSection: "Special-tag names", tagsSectionDesc: "Current names are prefilled. Change any field to match your graph.", stamps: "Status stamps", notesGroup: "Note labels", moodReading: "Mood and Reading List", impact: ["Very low", "Low", "Moderate", "Higher"],
  },
  zh: {
    tab: "Folio · 书页集", language: "设置语言", languageDesc: "自动会跟随浏览器语言；切换后立即生效。",
    pause: "暂停全部交互组件", pauseDesc: "保留主题外观，同时停止观察器、定时器和交互模块。", cssPause: "临时停用 Folio（排查冲突）", cssPauseDesc: "开启后暂时撤下 Folio 外观并停止交互组件，用于判断问题是否由 Folio 引起；关闭此开关即可恢复原配置。日常使用请保持关闭。",
    namespaces: "自定义命名空间标签", namespacesDesc: "格式：命名空间=样式。可用 section、book、person、industry；用分号分隔。",
    rules: "自定义标签显示", rulesDesc: "格式：标签=显示文字|样式|文字颜色|背景色。样式可用 section、book、person、industry、stamp、pencil。",
    reset: "全部开启并恢复标签默认值", resetDesc: "开启全部功能，并恢复所有特殊标签的默认名称。", resetButton: "恢复全部默认值",
    cssDesc: "仅改变外观，不在后台运行。", interactiveDesc: "使用统一空闲调度器；关闭后会完整清理。",
    dataDesc: "可选数据组件。", cssSection: "主题样式 · 纯 CSS", cssSectionDesc: "只改变外观，没有观察器或定时器。全部关闭后，小功能仍可独立使用。", widgetSection: "小功能 · CSS + JS", widgetSectionDesc: "每个开关同时控制对应脚本和样式；按预计运行损耗从低到高排列。", tagsSection: "特殊标签名称", tagsSectionDesc: "已经填入当前名称，逐项修改即可适配自己的标签或前缀。", stamps: "状态印章", notesGroup: "笔记标签", moodReading: "情绪与 Reading List", impact: ["极低", "低", "中", "较高"],
  },
  fr: {
    tab: "Folio", language: "Langue des réglages", languageDesc: "Auto suit la langue du navigateur. Le changement est immédiat.",
    pause: "Suspendre tous les modules interactifs", pauseDesc: "Conserve le thème visuel et arrête observateurs, minuteries et modules interactifs.", cssPause: "Suspendre temporairement Folio (diagnostic)", cssPauseDesc: "Rétablit l’apparence native de Roam et suspend les composants Folio pour le diagnostic. Désactivez cette option pour restaurer vos réglages enregistrés.",
    namespaces: "Espaces de noms personnalisés", namespacesDesc: "Format : espace=style. Styles : section, book, person, industry. Séparez par des points-virgules.",
    rules: "Libellés personnalisés", rulesDesc: "Format : tag=libellé|style|couleur|fond. Styles : section, book, person, industry, stamp, pencil.",
    reset: "Tout activer et restaurer les noms", resetDesc: "Active toutes les fonctions et rétablit les noms par défaut.", resetButton: "Tout restaurer",
    cssDesc: "Style visuel uniquement, sans tâche de fond.", interactiveDesc: "Utilise le planificateur partagé et se nettoie à la désactivation.",
    dataDesc: "Fonction de données facultative.", cssSection: "Thème · CSS uniquement", cssSectionDesc: "Styles visuels sans observateur ni minuterie. Les widgets restent utilisables si tout est désactivé.", widgetSection: "Widgets · CSS + JS", widgetSectionDesc: "Chaque interrupteur commande le script et son style, du coût estimé le plus faible au plus élevé.", tagsSection: "Noms des étiquettes spéciales", tagsSectionDesc: "Les noms actuels sont préremplis et modifiables individuellement.", stamps: "Tampons d’état", notesGroup: "Étiquettes de notes", moodReading: "Humeur et Reading List", impact: ["Très faible", "Faible", "Modéré", "Plus élevé"],
  },
  de: {
    tab: "Folio", language: "Sprache der Einstellungen", languageDesc: "Auto folgt der Browsersprache; Änderungen wirken sofort.",
    pause: "Alle interaktiven Module pausieren", pauseDesc: "Behält das Design bei und stoppt Beobachter, Timer und interaktive Module.", cssPause: "Folio vorübergehend deaktivieren (Fehlersuche)", cssPauseDesc: "Stellt Roams ursprüngliche Darstellung wieder her und pausiert Folio-Komponenten zur Fehlersuche. Ausschalten stellt die gespeicherte Konfiguration wieder her.",
    namespaces: "Eigene Namensraum-Tags", namespacesDesc: "Format: Namensraum=Stil. Stile: section, book, person, industry. Mit Semikolon trennen.",
    rules: "Eigene Tag-Beschriftungen", rulesDesc: "Format: Tag=Text|Stil|Textfarbe|Hintergrund. Stile: section, book, person, industry, stamp, pencil.",
    reset: "Alles aktivieren und Namen zurücksetzen", resetDesc: "Aktiviert alle Funktionen und stellt die Tag-Namen wieder her.", resetButton: "Alles zurücksetzen",
    cssDesc: "Nur visuelle Gestaltung; keine Hintergrundarbeit.", interactiveDesc: "Nutzt den gemeinsamen Leerlaufplaner und wird beim Abschalten bereinigt.",
    dataDesc: "Optionale Datenfunktion.", cssSection: "Design · nur CSS", cssSectionDesc: "Reine Optik ohne Beobachter oder Timer. Widgets funktionieren auch ohne diese Stile.", widgetSection: "Widgets · CSS + JS", widgetSectionDesc: "Jeder Schalter steuert Skript und Stil; nach geschätzter Laufzeitbelastung sortiert.", tagsSection: "Namen besonderer Tags", tagsSectionDesc: "Aktuelle Namen sind vorausgefüllt und einzeln änderbar.", stamps: "Statusstempel", notesGroup: "Notiz-Tags", moodReading: "Stimmung und Reading List", impact: ["Sehr gering", "Gering", "Mittel", "Höher"],
  },
  es: {
    tab: "Folio", language: "Idioma de los ajustes", languageDesc: "Auto sigue el idioma del navegador; el cambio es inmediato.",
    pause: "Pausar todos los módulos interactivos", pauseDesc: "Mantiene el tema visual y detiene observadores, temporizadores y módulos interactivos.", cssPause: "Desactivar Folio temporalmente (diagnóstico)", cssPauseDesc: "Restaura la apariencia nativa de Roam y pausa los componentes de Folio para diagnosticar problemas. Desactive esta opción para recuperar la configuración guardada.",
    namespaces: "Espacios de nombres personalizados", namespacesDesc: "Formato: espacio=estilo. Estilos: section, book, person, industry. Separe con punto y coma.",
    rules: "Etiquetas personalizadas", rulesDesc: "Formato: etiqueta=texto|estilo|color|fondo. Estilos: section, book, person, industry, stamp, pencil.",
    reset: "Activar todo y restaurar nombres", resetDesc: "Activa todas las funciones y restaura los nombres predeterminados.", resetButton: "Restaurar todo",
    cssDesc: "Solo estilo visual; sin trabajo en segundo plano.", interactiveDesc: "Usa el planificador compartido y se limpia al desactivarlo.",
    dataDesc: "Función de datos opcional.", cssSection: "Tema · solo CSS", cssSectionDesc: "Estilos visuales sin observadores ni temporizadores. Los widgets siguen disponibles si se desactiva todo.", widgetSection: "Widgets · CSS + JS", widgetSectionDesc: "Cada interruptor controla el script y su estilo, ordenados por impacto estimado.", tagsSection: "Nombres de etiquetas especiales", tagsSectionDesc: "Los nombres actuales están rellenados y se pueden cambiar uno por uno.", stamps: "Sellos de estado", notesGroup: "Etiquetas de notas", moodReading: "Ánimo y Reading List", impact: ["Muy bajo", "Bajo", "Moderado", "Más alto"],
  },
  it: {
    tab: "Folio", language: "Lingua delle impostazioni", languageDesc: "Auto segue la lingua del browser; la modifica è immediata.",
    pause: "Sospendi tutti i moduli interattivi", pauseDesc: "Mantiene il tema visivo e arresta osservatori, timer e moduli interattivi.", cssPause: "Disattiva temporaneamente Folio (diagnosi)", cssPauseDesc: "Ripristina l’aspetto nativo di Roam e sospende i componenti Folio per la diagnosi. Disattiva questa opzione per ripristinare la configurazione salvata.",
    namespaces: "Namespace personalizzati", namespacesDesc: "Formato: namespace=stile. Stili: section, book, person, industry. Separare con punto e virgola.",
    rules: "Etichette personalizzate", rulesDesc: "Formato: tag=testo|stile|colore|sfondo. Stili: section, book, person, industry, stamp, pencil.",
    reset: "Attiva tutto e ripristina i nomi", resetDesc: "Attiva tutte le funzioni e ripristina i nomi predefiniti.", resetButton: "Ripristina tutto",
    cssDesc: "Solo stile visivo; nessun lavoro in background.", interactiveDesc: "Usa lo scheduler condiviso e si pulisce quando viene disattivato.",
    dataDesc: "Funzione dati opzionale.", cssSection: "Tema · solo CSS", cssSectionDesc: "Stili visivi senza osservatori o timer. I widget restano disponibili anche disattivando tutto.", widgetSection: "Widget · CSS + JS", widgetSectionDesc: "Ogni interruttore controlla script e stile, ordinati per impatto stimato.", tagsSection: "Nomi dei tag speciali", tagsSectionDesc: "I nomi attuali sono precompilati e modificabili singolarmente.", stamps: "Timbri di stato", notesGroup: "Tag delle note", moodReading: "Umore e Reading List", impact: ["Molto basso", "Basso", "Moderato", "Più alto"],
  },
};

const GROUP_NAMES = {
  en: { appearance: "Appearance · Fonts and motto", impact1: "Components · Very low impact", impact2: "Components · Low impact", impact3: "Components · Moderate impact", impact4: "Components · Higher impact", namespaces: "Labels · Namespaces and markers", stamps: "Labels · Status stamps", notesGroup: "Labels · Note types", moodReading: "Labels · Mood and Reading List", functional: "Functional tags" },
  zh: { appearance: "外观 · 字体与座右铭", impact1: "组件 · 极低损耗", impact2: "组件 · 低损耗", impact3: "组件 · 中等损耗", impact4: "组件 · 较高损耗", namespaces: "标签 · 命名空间与标记", stamps: "标签 · 状态印章", notesGroup: "标签 · 笔记类型", moodReading: "标签 · 情绪与 Reading List", functional: "功能标签" },
  fr: { appearance: "Apparence · Polices et devise", impact1: "Composants · Impact très faible", impact2: "Composants · Impact faible", impact3: "Composants · Impact modéré", impact4: "Composants · Impact plus élevé", namespaces: "Étiquettes · Espaces et marqueurs", stamps: "Étiquettes · Tampons d’état", notesGroup: "Étiquettes · Types de notes", moodReading: "Étiquettes · Humeur et Reading List", functional: "Étiquettes fonctionnelles" },
  de: { appearance: "Darstellung · Schriften und Motto", impact1: "Komponenten · Sehr geringe Last", impact2: "Komponenten · Geringe Last", impact3: "Komponenten · Mittlere Last", impact4: "Komponenten · Höhere Last", namespaces: "Tags · Namensräume und Marker", stamps: "Tags · Statusstempel", notesGroup: "Tags · Notiztypen", moodReading: "Tags · Stimmung und Reading List", functional: "Funktions-Tags" },
  es: { appearance: "Apariencia · Fuentes y lema", impact1: "Componentes · Impacto muy bajo", impact2: "Componentes · Impacto bajo", impact3: "Componentes · Impacto moderado", impact4: "Componentes · Impacto más alto", namespaces: "Etiquetas · Espacios y marcadores", stamps: "Etiquetas · Sellos de estado", notesGroup: "Etiquetas · Tipos de notas", moodReading: "Etiquetas · Ánimo y Reading List", functional: "Etiquetas funcionales" },
  it: { appearance: "Aspetto · Font e motto", impact1: "Componenti · Impatto molto basso", impact2: "Componenti · Impatto basso", impact3: "Componenti · Impatto moderato", impact4: "Componenti · Impatto più alto", namespaces: "Tag · Namespace e marcatori", stamps: "Tag · Timbri di stato", notesGroup: "Tag · Tipi di note", moodReading: "Tag · Umore e Reading List", functional: "Tag funzionali" },
};

const BUILTIN_TAGS = {
  en: {
    "Quadrant 1": ["Q1 • Do first", "stamp", "#a8443a", "transparent"], "Quadrant 2": ["Q2 • Schedule", "stamp", "#8b773e", "rgba(244,215,88,.28)"],
    "Quadrant 3": ["Q3 • Delegate", "stamp", "#5f6b78", "transparent"], "quick screening": ["Screening ●○○", "stamp", "#3e748c", "transparent"],
    "deep analysis": ["Analysis ●●○", "stamp", "#3e748c", "transparent"], "professional research": ["Research ●●●", "stamp", "#3e748c", "transparent"],
    "[[tags]]/checklist": ["☐ Checklist", "stamp", "#4a4f5a", "transparent"], "[[tags]]/antifragile": ["Antifragile", "stamp", "#9c5b22", "transparent"],
    "[[tags]]/owing": ["Owing", "stamp", "#b23a63", "transparent"], major: ["Major", "stamp", "#fefcf6", "#1a1a2e"],
    "motive-notes": ["↳ motive", "pencil", "#92909a", "transparent"], "rediscover-notes": ["↻ rediscover", "pencil", "#92909a", "transparent"],
  },
  zh: {
    "Quadrant 1": ["Q1 • 立即做", "stamp", "#a8443a", "transparent"], "Quadrant 2": ["Q2 • 排期", "stamp", "#8b773e", "rgba(244,215,88,.28)"],
    "Quadrant 3": ["Q3 • 委派", "stamp", "#5f6b78", "transparent"], "quick screening": ["初筛 ●○○", "stamp", "#3e748c", "transparent"],
    "deep analysis": ["分析 ●●○", "stamp", "#3e748c", "transparent"], "professional research": ["研究 ●●●", "stamp", "#3e748c", "transparent"],
    "[[tags]]/checklist": ["☐ 清单", "stamp", "#4a4f5a", "transparent"], "[[tags]]/antifragile": ["反脆弱", "stamp", "#9c5b22", "transparent"],
    "[[tags]]/owing": ["待还", "stamp", "#b23a63", "transparent"], major: ["重要", "stamp", "#fefcf6", "#1a1a2e"],
    "motive-notes": ["↳ 动机", "pencil", "#92909a", "transparent"], "rediscover-notes": ["↻ 重发现", "pencil", "#92909a", "transparent"],
  },
  fr: {
    "Quadrant 1": ["Q1 • À faire", "stamp", "#a8443a", "transparent"], "Quadrant 2": ["Q2 • Planifier", "stamp", "#8b773e", "rgba(244,215,88,.28)"],
    "Quadrant 3": ["Q3 • Déléguer", "stamp", "#5f6b78", "transparent"], "quick screening": ["Tri ●○○", "stamp", "#3e748c", "transparent"],
    "deep analysis": ["Analyse ●●○", "stamp", "#3e748c", "transparent"], "professional research": ["Recherche ●●●", "stamp", "#3e748c", "transparent"],
    major: ["Majeur", "stamp", "#fefcf6", "#1a1a2e"], "motive-notes": ["↳ motif", "pencil", "#92909a", "transparent"], "rediscover-notes": ["↻ redécouvrir", "pencil", "#92909a", "transparent"],
  },
  de: {
    "Quadrant 1": ["Q1 • Zuerst", "stamp", "#a8443a", "transparent"], "Quadrant 2": ["Q2 • Planen", "stamp", "#8b773e", "rgba(244,215,88,.28)"],
    "Quadrant 3": ["Q3 • Delegieren", "stamp", "#5f6b78", "transparent"], "quick screening": ["Sichtung ●○○", "stamp", "#3e748c", "transparent"],
    "deep analysis": ["Analyse ●●○", "stamp", "#3e748c", "transparent"], "professional research": ["Recherche ●●●", "stamp", "#3e748c", "transparent"],
    major: ["Wichtig", "stamp", "#fefcf6", "#1a1a2e"], "motive-notes": ["↳ Motiv", "pencil", "#92909a", "transparent"], "rediscover-notes": ["↻ wiederfinden", "pencil", "#92909a", "transparent"],
  },
  es: {
    "Quadrant 1": ["Q1 • Primero", "stamp", "#a8443a", "transparent"], "Quadrant 2": ["Q2 • Programar", "stamp", "#8b773e", "rgba(244,215,88,.28)"],
    "Quadrant 3": ["Q3 • Delegar", "stamp", "#5f6b78", "transparent"], "quick screening": ["Cribado ●○○", "stamp", "#3e748c", "transparent"],
    "deep analysis": ["Análisis ●●○", "stamp", "#3e748c", "transparent"], "professional research": ["Investigación ●●●", "stamp", "#3e748c", "transparent"],
    major: ["Importante", "stamp", "#fefcf6", "#1a1a2e"], "motive-notes": ["↳ motivo", "pencil", "#92909a", "transparent"], "rediscover-notes": ["↻ redescubrir", "pencil", "#92909a", "transparent"],
  },
  it: {
    "Quadrant 1": ["Q1 • Prima", "stamp", "#a8443a", "transparent"], "Quadrant 2": ["Q2 • Pianifica", "stamp", "#8b773e", "rgba(244,215,88,.28)"],
    "Quadrant 3": ["Q3 • Delega", "stamp", "#5f6b78", "transparent"], "quick screening": ["Screening ●○○", "stamp", "#3e748c", "transparent"],
    "deep analysis": ["Analisi ●●○", "stamp", "#3e748c", "transparent"], "professional research": ["Ricerca ●●●", "stamp", "#3e748c", "transparent"],
    major: ["Importante", "stamp", "#fefcf6", "#1a1a2e"], "motive-notes": ["↳ motivo", "pencil", "#92909a", "transparent"], "rediscover-notes": ["↻ riscopri", "pencil", "#92909a", "transparent"],
  },
};

// Widgets use only these fallback variables when the visual theme is disabled.
// Declaring variables does not restyle Roam; each widget still loads only its own CSS.
const WIDGET_TOKENS = String.raw`
:root {
  --mag-body: "Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  --mag-heading: "Fraunces", "Noto Serif SC", "Songti SC", Georgia, serif;
  --mag-aside-font: "Fraunces", "Mag Aside CJK", "Noto Serif SC", "Songti SC", Georgia, serif;
  --mag-code: ui-monospace, SFMono-Regular, Consolas, monospace;
  --mag-paper: #fefcf6; --mag-surface: #fffdf8; --mag-active: #f3ecd9;
  --mag-ink: #1a1a2e; --mag-muted: #666675; --mag-faint: #92909a;
  --mag-blue: #236dbb; --mag-blue-soft: rgba(35,109,187,.12);
  --mag-yellow: #f4d758; --mag-yellow-soft: rgba(244,215,88,.28);
  --mag-gold: #b79a37; --mag-gold-ink: #8b773e; --mag-border: #e8e0cf;
  --mag-code-bg: #f3f0e8; --mag-inline: #f4efe4; --mag-radius: 10px;
  --mag-shadow: 0 10px 30px rgba(38,31,20,.12);
}
body.bp3-dark {
  --mag-paper: #1d1d22; --mag-surface: #24242a; --mag-active: #34323a;
  --mag-ink: #ece8df; --mag-muted: #b5b0aa; --mag-faint: #8b8784;
  --mag-blue: #75aeea; --mag-blue-soft: rgba(117,174,234,.15);
  --mag-border: #454149; --mag-code-bg: #29282e; --mag-inline: #302e34;
  --mag-shadow: 0 10px 30px rgba(0,0,0,.28);
}
`;

const TAG_FIELDS = [
  { id: "ns-moc", group: "namespaces", name: "MOC namespace", zh: "MOC 命名空间", default: "moc", match: "namespace", style: "section", glyph: "☰" },
  { id: "ns-project", group: "namespaces", name: "Project namespace", zh: "Project 命名空间", default: "project", match: "namespace", style: "section", glyph: "▣", ink: "#6b3fa0", background: "rgba(107,63,160,.09)" },
  { id: "ns-book", group: "namespaces", name: "Book namespace", zh: "Book 命名空间", default: "book", match: "namespace", style: "book" },
  { id: "ns-person", group: "namespaces", name: "Person namespace", zh: "人物命名空间", default: "Giant", match: "namespace", style: "person" },
  { id: "ns-industry", group: "namespaces", name: "Industry namespace", zh: "行业命名空间", default: "Industry", match: "namespace", style: "industry" },
  { id: "marker-ticker", group: "namespaces", name: "Ticker marker", zh: "股票代码标记", default: "($", match: "contains", style: "ticker", ink: "#2f7d5b" },
  { id: "q1", group: "stamps", name: "Quadrant 1", default: "Quadrant 1", style: "stamp", ink: "#a8443a", display: { en: "Q1 • Do first", zh: "Q1 • 立即做", fr: "Q1 • À faire", de: "Q1 • Zuerst", es: "Q1 • Primero", it: "Q1 • Prima" } },
  { id: "q2", group: "stamps", name: "Quadrant 2", default: "Quadrant 2", style: "stamp", ink: "#8b773e", background: "rgba(244,215,88,.28)", display: { en: "Q2 • Schedule", zh: "Q2 • 排期", fr: "Q2 • Planifier", de: "Q2 • Planen", es: "Q2 • Programar", it: "Q2 • Pianifica" } },
  { id: "q3", group: "stamps", name: "Quadrant 3", default: "Quadrant 3", style: "stamp", ink: "#5f6b78", display: { en: "Q3 • Delegate", zh: "Q3 • 委派", fr: "Q3 • Déléguer", de: "Q3 • Delegieren", es: "Q3 • Delegar", it: "Q3 • Delega" } },
  { id: "screening", group: "stamps", name: "Quick screening", default: "quick screening", style: "stamp", ink: "#3e748c", display: { en: "Screening ●○○", zh: "初筛 ●○○" } },
  { id: "analysis", group: "stamps", name: "Deep analysis", default: "deep analysis", style: "stamp", ink: "#3e748c", display: { en: "Analysis ●●○", zh: "分析 ●●○" } },
  { id: "research", group: "stamps", name: "Professional research", default: "professional research", style: "stamp", ink: "#3e748c", display: { en: "Research ●●●", zh: "研究 ●●●" } },
  { id: "checklist", group: "stamps", name: "Checklist", default: "[[tags]]/checklist", style: "stamp", ink: "#4a4f5a", display: { en: "☐ Checklist", zh: "☐ 清单" } },
  { id: "antifragile", group: "stamps", name: "Antifragile", default: "[[tags]]/antifragile", style: "stamp", ink: "#9c5b22", display: { en: "Antifragile", zh: "反脆弱" } },
  { id: "owing", group: "stamps", name: "Owing", default: "[[tags]]/owing", style: "stamp", ink: "#b23a63", display: { en: "Owing", zh: "待还" } },
  { id: "major", group: "stamps", name: "Major", default: "major", style: "stamp", ink: "#fefcf6", background: "#1a1a2e", display: { en: "Major", zh: "重要" } },
  { id: "motive", group: "stamps", name: "Motive notes", default: "motive-notes", style: "pencil", ink: "#92909a", display: { en: "↳ motive", zh: "↳ 动机" } },
  { id: "rediscover", group: "stamps", name: "Rediscover notes", default: "rediscover-notes", style: "pencil", ink: "#92909a", display: { en: "↻ rediscover", zh: "↻ 重发现" } },
  { id: "voice-notes", group: "notesGroup", name: "Voicenotes", default: "Voicenotes", style: "section", glyph: "◎", ink: "var(--note-voice-ink,var(--mag-muted))", background: "var(--note-voice-bg,var(--mag-blue-soft))", display: { en: "Voice note", zh: "语音笔记" } },
  { id: "literature-notes", group: "notesGroup", name: "LiteratureNotes", default: "LiteratureNotes", style: "section", glyph: "¶", ink: "var(--note-lit-ink,var(--mag-blue))", background: "var(--note-lit-bg,var(--mag-blue-soft))", display: { en: "Literature note", zh: "文献笔记" } },
  { id: "permanent-notes", group: "notesGroup", name: "PermanentNotes", default: "PermanentNotes", style: "section", glyph: "❧", ink: "var(--note-green-ink,#53715e)", background: "var(--note-green-bg,rgba(83,113,94,.10))", display: { en: "Permanent Notes", zh: "永久笔记" } },
  { id: "foot-notes", group: "notesGroup", name: "Footnotes", default: "Footnotes", style: "section", glyph: "†", ink: "var(--note-foot-ink,var(--mag-muted))", background: "var(--note-foot-bg,var(--mag-inline))", display: { en: "Footnote", zh: "脚注" } },
  { id: "definition-notes", group: "notesGroup", name: "DefinitionNotes", default: "DefinitionNotes", style: "section", glyph: "§", ink: "var(--note-def-ink,var(--mag-muted))", background: "var(--note-def-bg,var(--mag-inline))", display: { en: "Definition", zh: "定义" } },
  { id: "mood-high", group: "moodReading", name: "Mood high", default: "[[tags]]/mood-high", style: "mood", glyph: "✦", ink: "#53715e", display: { en: "high spirits", zh: "兴致高" } },
  { id: "mood-mid", group: "moodReading", name: "Mood mid", default: "[[tags]]/mood-mid", style: "mood", glyph: "◇", ink: "var(--mag-ink)", display: { en: "steady", zh: "平稳" } },
  { id: "mood-low", group: "moodReading", name: "Mood low", default: "[[tags]]/mood-low", style: "mood", glyph: "☾", ink: "#686b82", display: { en: "low tide", zh: "低潮" } },
  { id: "reading-inbox", group: "moodReading", name: "Reading List: Inbox", default: "Reading List: Inbox", style: "section", glyph: "↘", ink: "var(--note-lit-ink,var(--mag-blue))", background: "var(--note-lit-bg,var(--mag-blue-soft))", display: { en: "Reading · Inbox", zh: "阅读 · 待读" } },
  { id: "reading-shortlist", group: "moodReading", name: "Reading List: Shortlist", default: "Reading List: Shortlist", style: "section", glyph: "☞", ink: "var(--mag-gold-ink)", background: "var(--mag-yellow-soft)", display: { en: "Reading · Shortlist", zh: "阅读 · 精选" } },
  { id: "reading-archive", group: "moodReading", name: "Reading List: Archive", default: "Reading List: Archive", style: "section", glyph: "∎", ink: "var(--note-def-ink,var(--mag-muted))", background: "var(--note-def-bg,var(--mag-inline))", display: { en: "Reading · Archive", zh: "阅读 · 归档" } },
  { id: "important", group: "functional", name: "Important block tag", zh: "重要块标签", default: "[[tags]]/important", visual: false },
  { id: "class-prefix", group: "functional", name: "Hidden class-tag prefix", zh: "隐藏类标签前缀", default: ".", visual: false },
];

let currentRuntime = null;

function detectLocale() {
  const language = String(navigator.language || "en").toLowerCase();
  if (language.startsWith("zh")) return "zh";
  if (language.startsWith("fr")) return "fr";
  if (language.startsWith("de")) return "de";
  if (language.startsWith("es")) return "es";
  if (language.startsWith("it")) return "it";
  return "en";
}

function createCore() {
  const doc = document;
  const body = doc.body;
  const modules = new Map();
  const watchers = new Map();
  const cleanups = [];
  const idle = window.requestIdleCallback
    ? (fn) => window.requestIdleCallback(fn, { timeout: 700 })
    : (fn) => window.setTimeout(fn, 100);
  const cancelIdle = window.cancelIdleCallback || window.clearTimeout;
  let handle = 0;
  let deferred = false;

  const isBlockInput = (element) =>
    element instanceof HTMLTextAreaElement && element.classList.contains("rm-block-input");
  const scope = () => {
    const off = [];
    return {
      on(target, type, fn, options) {
        target.addEventListener(type, fn, options);
        off.push(() => target.removeEventListener(type, fn, options));
      },
      dispose() {
        off.splice(0).forEach((fn) => fn());
      },
    };
  };
  const store = {
    get(key, fallback) {
      try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : value;
      } catch (_) {
        return fallback;
      }
    },
    set(key, value) {
      try { localStorage.setItem(key, String(value)); } catch (_) {}
    },
  };
  const runSync = () => {
    handle = 0;
    const pdfRoute = /\/pdf\//.test(location.hash);
    for (const [name, module] of modules) {
      if (pdfRoute && !["pdf", "folioPdfExit", "folioNativeSidebarChrome"].includes(name)) continue;
      try { module?.sync?.(); } catch (error) { console.warn(`[Folio] ${name}`, error); }
    }
    for (const [name, callback] of watchers) {
      if (pdfRoute) continue;
      try { callback([]); } catch (error) { console.warn(`[Folio] ${name}`, error); }
    }
  };
  const scheduleSync = () => {
    if (!handle) handle = idle(runSync);
  };
  const observer = new MutationObserver((records) => {
    if (records.length && records.every(record => (record.target instanceof Element && record.target.closest('#folio-settings-dialog')) || ([...(record.addedNodes||[]),...(record.removedNodes||[])].length && [...(record.addedNodes||[]),...(record.removedNodes||[])].every(node => node instanceof Element && node.id === 'folio-settings-dialog')))) return;
    // PDF.js creates hundreds of canvas/text nodes. Do not run every feature
    // on each render chunk, nor query the graph while the viewer is loading.
    if (records.length && records.every(record => record.target instanceof Element && record.target.closest(".rm-pdf-container"))) {
      const toolbarChanged = records.some(record => record.target.closest(".rm-pdf-toolbar") || [...record.addedNodes].some(node => node instanceof Element && node.matches(".rm-pdf-toolbar")));
      if (toolbarChanged) { modules.get("pdf")?.sync?.(); modules.get("folioPdfExit")?.sync?.(); }
      return;
    }
    const pickerAdded = records.some(record => [...record.addedNodes].some(node => node instanceof Element && (node.matches(".bp3-datepicker") || node.querySelector(".bp3-datepicker"))));
    if (pickerAdded) {
      // MutationObserver runs before paint; build the calendar columns together.
      window.__folioAttachCalendar?.();
      for (const [name, callback] of watchers) if (name.startsWith("runner:calendar-")) callback(records);
    }
    if (isBlockInput(doc.activeElement)) {
      deferred = true;
      return;
    }
    scheduleSync();
  });
  observer.observe(body, { childList: true, subtree: true });

  const listen = (target, type, fn, options) => {
    target.addEventListener(type, fn, options);
    cleanups.push(() => target.removeEventListener(type, fn, options));
  };
  listen(doc, "focusout", (event) => {
    if (deferred && isBlockInput(event.target)) {
      deferred = false;
      scheduleSync();
    }
  }, true);
  listen(window, "hashchange", scheduleSync);
  listen(window, "resize", scheduleSync);

  const unload = (name) => {
    const module = modules.get(name);
    modules.delete(name);
    try { module?.destroy?.(); } catch (error) { console.warn(`[Folio] unload ${name}`, error); }
  };
  const core = {
    version: 2, doc, body, store, idle, scope, isBlockInput, scheduleSync,
    watch(name, callback) {
      let active = false;
      return {
        observe() {
          if (active) return;
          active = true;
          watchers.set(name, callback);
          scheduleSync();
        },
        disconnect() {
          active = false;
          watchers.delete(name);
        },
      };
    },
    load(name) {
      const setup = window.__magModules?.[name];
      unload(name);
      if (typeof setup !== "function") return;
      try { modules.set(name, setup(core) || {}); } catch (error) { console.warn(`[Folio] load ${name}`, error); }
      scheduleSync();
    },
    unload,
    destroy() {
      observer.disconnect();
      cleanups.splice(0).forEach((fn) => fn());
      if (handle) cancelIdle(handle);
      [...modules.keys()].forEach(unload);
      watchers.clear();
      if (window.__magCore === core) delete window.__magCore;
    },
  };
  window.__magCore?.destroy?.();
  window.__magCore = core;
  return core;
}

function parseNamespaces(value) {
  const fallback = "moc=section; project=section; book=book; Giant=person; Industry=industry";
  return String(value || fallback).split(/[;\n,]+/).map((entry) => entry.trim()).filter(Boolean).map((entry) => {
    const [namespace, style = "section"] = entry.split("=").map((part) => part.trim());
    return { namespace, style };
  }).filter((entry) => entry.namespace);
}

function parseCustomRules(value) {
  const rules = {};
  String(value || "").split(/[;\n]+/).map((entry) => entry.trim()).filter(Boolean).forEach((entry) => {
    const equal = entry.indexOf("=");
    if (equal < 1) return;
    const tag = entry.slice(0, equal).trim();
    const [label = tag, style = "stamp", ink = "", background = ""] = entry.slice(equal + 1).split("|").map((part) => part.trim());
    rules[tag] = [label, style, ink, background];
  });
  return rules;
}

function namespaceMatch(tag, namespace) {
  const escaped = namespace.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = new RegExp(`^(?:\\[\\[${escaped}\\]\\]|${escaped})/(.+)$`, "i").exec(tag)
    || new RegExp(`(?:^|/)${escaped}/(.+)$`, "i").exec(tag);
  return match?.[1] || null;
}

/* The original special-tag CSS remains authoritative.  JavaScript only strips
   namespace prefixes, exactly as the user's source did; it never redraws or
   translates the link, so Roam keeps the real clickable target. */
function registerTagLabels(runtime) {
  const rules = [
    [runtime.tagValue("ns-moc"), "namespace", ""],
    [runtime.tagValue("ns-project"), "namespace", ""],
    [runtime.tagValue("ns-book"), "namespace", "book"],
    [runtime.tagValue("ns-person"), "namespace", "person"],
    [runtime.tagValue("ns-industry"), "namespace", "industry"],
  ].filter(([value]) => value);

  const pencilTags = new Set([runtime.tagValue("motive"), runtime.tagValue("rediscover")]);
  const noteTitles = new Set(TAG_FIELDS.filter(field => field.group === "notesGroup" || field.id.startsWith("reading-")).map(field => runtime.tagValue(field.id)).filter(Boolean));
  window.__magModules = window.__magModules || {};
  window.__magModules.folioTags = (core) => ({
    sync() {
      for (const element of core.doc.querySelectorAll(".roam-app span.rm-page-ref--tag, .roam-app span[data-link-title] > .rm-page-ref")) {
        const tag = element.getAttribute("data-tag") || element.parentElement?.getAttribute("data-link-title") || "";
        let label = "", entity = "";
        for (const [value, mode, kind] of (element.getAttribute("data-tag") !== null ? rules : [])) {
          if (mode === "namespace") label = namespaceMatch(tag, value) || "";
          else {
            const index = tag.toLowerCase().lastIndexOf(`${value.toLowerCase()}/`);
            if (index >= 0) label = tag.slice(index + value.length + 1);
          }
          if (label) { entity = kind; break; }
        }
        if (element.getAttribute("data-tag") !== null && pencilTags.has(tag)) entity = "pencil";
        if (entity) element.dataset.folioEntity = entity;
        else delete element.dataset.folioEntity;
        if (noteTitles.has(tag)) element.dataset.folioNoteLabel = "true";
        else delete element.dataset.folioNoteLabel;
        if (label) element.dataset.magLabel = label;
        else if (element.dataset.magLabel) delete element.dataset.magLabel;
      }
    },
    destroy() {
      core.doc.querySelectorAll(".roam-app span.rm-page-ref--tag[data-mag-label]").forEach((element) => delete element.dataset.magLabel);
      core.doc.querySelectorAll(".roam-app [data-folio-entity], .roam-app [data-folio-note-label]").forEach(element => { delete element.dataset.folioEntity; delete element.dataset.folioNoteLabel; });
    },
  });
  runtime.core.load("folioTags");
}

function registerScrollIndicator(runtime) {
  const timers = new Map();
  const selector = ".roam-body-main > .rm-article-wrapper, .roam-body-main #rm-log-container";
  const onScroll = (event) => {
    const scroller = event.target?.matches?.(selector) ? event.target : null;
    if (!scroller) return;
    scroller.classList.add("mag-scroll-active");
    window.clearTimeout(timers.get(scroller));
    timers.set(scroller, window.setTimeout(() => {
      scroller.classList.remove("mag-scroll-active");
      timers.delete(scroller);
    }, 720));
  };
  document.addEventListener("scroll", onScroll, { capture: true, passive: true });
  runtime.nativeCleanups.set("scroll-indicator", () => {
    document.removeEventListener("scroll", onScroll, true);
    for (const [element, timer] of timers) {
      window.clearTimeout(timer);
      element.classList.remove("mag-scroll-active");
    }
    timers.clear();
    document.querySelectorAll(".mag-scroll-active").forEach((element) => element.classList.remove("mag-scroll-active"));
  });
}

function pdfReturnHash(current, previous) {
  const match = current.match(/^(#\/app\/[^/]+)\/pdf\/([^/?#]+)/);
  if (!match) return null;
  return previous && previous.startsWith(match[1] + "/") && !/\/pdf\//.test(previous)
    ? previous : match[1] + "/page/" + match[2];
}
function registerPdfEscape(runtime) {
  const core = runtime.ensureCore();
  let previous = /\/pdf\//.test(location.hash) ? "" : location.hash;
  let link = null;
  const capture = event => {
    if (event.target.closest?.('.rm-pdf-container:not(.rm-pdf-container--fullscreen) [data-mag-pdf="fullscreen"]')) previous = location.hash;
  };
  const sync = () => {
    const container = document.querySelector(".rm-pdf-container--fullscreen");
    const target = pdfReturnHash(location.hash, previous);
    if (!container || !target) {
      link?.remove(); link = null;
      if (!/\/pdf\//.test(location.hash)) previous = location.hash;
      return;
    }
    const toolbar = container.querySelector(".rm-pdf-toolbar");
    if (!toolbar) return;
    if (!link) {
      link = document.createElement("a");
      link.className = "folio-pdf-exit";
      link.textContent = runtime.locale === "zh" ? "退出全屏 · Esc" : "Exit fullscreen · Esc";
      link.setAttribute("aria-label", link.textContent);
    }
    if (link.getAttribute("href") !== target) link.setAttribute("href", target);
    if (link.parentElement !== document.body) document.body.append(link);
  };
  const onKeyDown = event => {
    if (event.key !== "Escape" || event.defaultPrevented || !link?.isConnected) return;
    if ([...document.querySelectorAll('.bp3-dialog, .bp4-dialog, .rm-modal-dialog, .bp3-popover')].some(el => el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden')) return;
    if (event.target.closest?.('input,textarea,select,[contenteditable="true"]')) return;
    event.preventDefault();
    event.stopPropagation();
    link.click();
  };
  document.addEventListener("click", capture, true);
  document.addEventListener("keydown", onKeyDown);
  window.__magModules.folioPdfExit = () => ({sync, destroy(){link?.remove();}});
  core.load("folioPdfExit");
  runtime.nativeCleanups.set("pdf", () => {
    document.removeEventListener("click", capture, true);
    document.removeEventListener("keydown", onKeyDown);
    core.unload("folioPdfExit");
    delete window.__magModules.folioPdfExit;
  });
}

function createRuntime(extensionAPI) {
  const runtime = {
    extensionAPI,
    enabled: new Set(),
    activeJs: new Set(),
    nativeCleanups: new Map(),
    featureValues: new Map(),
    core: null,
    destroyed: false,
    locale: "en",
    languageChoice: "Auto",
    themeEnabled: true,
    paused: false,
    cssPaused: false,
    codeMaxHeight: 420,
    toolbarSettingsEnabled: true,
    settingsDefinitions: [],
    toolbarUi: null,
    shortcuts: {...SHORTCUT_DEFAULTS},
    randomExcludedPages: RANDOM_EXCLUDED_DEFAULT,
    randomExcludeFuture: true,
    settingsSection: "appearance",
    bodyFont: "",
    headingFont: "",
    mottoLine1: "THINK. OWN. COMPOUND.",
    mottoLine2: "FESTINA LENTE.",
    tagValues: new Map(),
    tagTimer: 0,
    openSections: new Set(),
    startGeneration: 0,
    startHandle: 0,
  };

  runtime.ensureCore = () => {
    if (!runtime.core) runtime.core = createCore();
    return runtime.core;
  };

  runtime.tagValue = (id) => {
    const field = TAG_FIELDS.find((item) => item.id === id);
    const value = String(runtime.tagValues.get(id) ?? field?.default ?? "").trim();
    return value || (field?.visual === false ? field.default : "");
  };

  runtime.syncTagConfig = () => {
    window.__folioTagConfig = {
      important: runtime.tagValue("important"),
      classPrefix: runtime.tagValue("class-prefix"),
    };
  };

  runtime.personalizeCss = (id, source) => {
    const attr = (value) => String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    if (id === "inline") {
      return source.replaceAll('"[[tags]]/important"', `"${attr(runtime.tagValue("important"))}"`);
    }
    if (id === "misc") {
      return source.replaceAll('[data-tag^="."]', `[data-tag^="${attr(runtime.tagValue("class-prefix"))}"]`);
    }

    if (id === "tags") {
      const replacements = [
        ["moc", runtime.tagValue("ns-moc")],
        ["project", runtime.tagValue("ns-project")],
        ["book", runtime.tagValue("ns-book")],
        ["Giant", runtime.tagValue("ns-person")],
        ["Industry", runtime.tagValue("ns-industry")],
        ["($", runtime.tagValue("marker-ticker")],
        ["Quadrant 1", runtime.tagValue("q1")],
        ["Quadrant 2", runtime.tagValue("q2")],
        ["Quadrant 3", runtime.tagValue("q3")],
        ["quick screening", runtime.tagValue("screening")],
        ["deep analysis", runtime.tagValue("analysis")],
        ["professional research", runtime.tagValue("research")],
        ["[[tags]]/checklist", runtime.tagValue("checklist")],
        ["[[tags]]/antifragile", runtime.tagValue("antifragile")],
        ["[[tags]]/owing", runtime.tagValue("owing")],
        ["major", runtime.tagValue("major")],
        ["motive-notes", runtime.tagValue("motive")],
        ["rediscover-notes", runtime.tagValue("rediscover")],
        ["Voicenotes", runtime.tagValue("voice-notes")],
        ["LiteratureNotes", runtime.tagValue("literature-notes")],
        ["PermanentNotes", runtime.tagValue("permanent-notes")],
        ["Footnotes", runtime.tagValue("foot-notes")],
        ["DefinitionNotes", runtime.tagValue("definition-notes")],
        ["[[tags]]/mood-high", runtime.tagValue("mood-high")],
        ["[[tags]]/mood-mid", runtime.tagValue("mood-mid")],
        ["[[tags]]/mood-low", runtime.tagValue("mood-low")],
        ["Reading List: Inbox", runtime.tagValue("reading-inbox")],
        ["Reading List: Shortlist", runtime.tagValue("reading-shortlist")],
        ["Reading List: Archive", runtime.tagValue("reading-archive")],
      ];
      let output = source;
      for (const [from, to] of replacements) if (to && to !== from) output = output.replaceAll(from, to);
      return output;
    }
    return source;
  };

  runtime.appearanceCss = () => {
    if (!runtime.themeEnabled) return "";
    const quote = (value) => String(value || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    const lines = [];
    if (fontFamily(runtime.bodyFont)) lines.push(`--mag-body:${fontFamily(runtime.bodyFont)};`);
    if (fontFamily(runtime.headingFont)) lines.push(`--mag-heading:${fontFamily(runtime.headingFont)};--mag-aside-font:${fontFamily(runtime.headingFont)};`);
    const motto = [cleanMotto(runtime.mottoLine1).trim(), cleanMotto(runtime.mottoLine2).trim()].filter(Boolean).map(quote).join("\\A ");
    return `${lines.length ? `:root{${lines.join("")}}` : ""}\n` +
      `html body .roam-app .roam-sidebar-container .rm-db-title-container::after{content:"${motto}"!important;white-space:pre!important;width:100%!important;max-width:100%!important;overflow-wrap:normal!important;letter-spacing:.85px!important;height:auto!important;max-height:3.8em!important;overflow:hidden!important;line-height:1.9!important}`;
  };

  runtime.cleanupFeature = (feature) => {
    if (feature.native) {
      try { runtime.nativeCleanups.get(feature.id)?.(); } catch (error) { console.warn(`[Folio] cleanup ${feature.id}`, error); }
      runtime.nativeCleanups.delete(feature.id);
    }
    if (feature.custom) {
      runtime.core?.unload("folioTags");
      if (window.__magModules) delete window.__magModules.folioTags;
    }
    if (feature.module) {
      runtime.core?.unload(feature.module);
      if (window.__magModules) delete window.__magModules[feature.module];
    }
    for (const [key, method] of feature.cleanups || []) {
      const target = window[key];
      try {
        if (method && typeof target?.[method] === "function") target[method]();
        else if (!method && typeof target === "function") target();
      } catch (error) {
        console.warn(`[Folio] cleanup ${feature.id}:${key}`, error);
      }
    }
    runtime.activeJs.delete(feature.id);
  };

  runtime.startFeature = (feature) => {
    if (runtime.activeJs.has(feature.id)) return;
    try {
      if (feature.custom || feature.runner) {
        runtime.ensureCore();
        if (feature.custom === "tagLabels") registerTagLabels(runtime);
        else if (feature.runner) MAGAZINE_RUNNERS[feature.runner]?.();
      }
      if (feature.native === "scrollIndicator") registerScrollIndicator(runtime);
      if (feature.native === "nativeSidebarToggles") registerNativeSidebarToggles(runtime);
      if (feature.native === "pdfEscape") registerPdfEscape(runtime);
      if (feature.native === "videoOpenSidebar") registerVideoOpenSidebar(runtime);
      runtime.activeJs.add(feature.id);
    } catch (error) {
      console.error(`[Folio] failed to start ${feature.id}`, error);
      runtime.cleanupFeature(feature);
    }
  };

  runtime.cancelStarts = () => {
    runtime.startGeneration += 1;
    if (!runtime.startHandle) return;
    if (window.cancelIdleCallback) window.cancelIdleCallback(runtime.startHandle);
    else window.clearTimeout(runtime.startHandle);
    runtime.startHandle = 0;
  };

  runtime.scheduleStarts = (desiredJs) => {
    runtime.cancelStarts();
    const generation = runtime.startGeneration;
    const queue = FEATURES.filter((feature) => desiredJs.has(feature.id) && !runtime.activeJs.has(feature.id));
    if (!queue.length) return;
    const schedule = (fn) => {
      runtime.startHandle = window.requestIdleCallback
        ? window.requestIdleCallback(fn, { timeout: 450 })
        : window.setTimeout(() => fn({ timeRemaining: () => 0 }), 40);
    };
    const step = (deadline) => {
      runtime.startHandle = 0;
      if (runtime.destroyed || generation !== runtime.startGeneration) return;
      let started = 0;
      while (queue.length && (started === 0 || deadline.timeRemaining() > 5)) {
        const feature = queue.shift();
        if (desiredJs.has(feature.id) && runtime.featureValues.get(feature.id) && !runtime.paused) {
          runtime.startFeature(feature);
        }
        started += 1;
      }
      if (queue.length) schedule(step);
    };
    schedule(step);
  };

  runtime.rebuildCss = () => {
    runtime.toolbarUi?.sync();
    let fonts = document.getElementById("folio-theme-fonts");
    if (runtime.themeEnabled && !runtime.cssPaused) {
      if (!fonts) {
        fonts = document.createElement("link");
        fonts.id = "folio-theme-fonts";
        fonts.rel = "stylesheet";
        fonts.href = MAGAZINE_CSS["web-fonts"].match(/url\(["']?([^"')]+)/)?.[1] || "";
        fonts.onload = () => document.fonts.ready.then(() => {
          if (!runtime.destroyed && runtime.themeEnabled) {
            runtime.core?.scheduleSync();
            document.dispatchEvent(new Event("folio:appearance-change"));
          }
        });
        document.head.appendChild(fonts);
      }
    } else fonts?.remove();
    if (runtime.cssPaused || (!runtime.themeEnabled && runtime.enabled.size === 0)) {
      document.getElementById(STYLE_ID)?.remove();
      return;
    }
    const chunks = [];
    // CSS @import must precede every normal rule or the browser ignores it.
    if (runtime.themeEnabled && MAGAZINE_CSS["web-fonts"]) chunks.push(MAGAZINE_CSS["web-fonts"]);
    chunks.push(runtime.themeEnabled ? WIDGET_TOKENS : (MAGAZINE_CSS["native-component-tokens"] || WIDGET_TOKENS));
    if (runtime.themeEnabled) {
      for (const id of THEME_CSS_IDS) {
        if (id === "web-fonts") continue;
        if (MAGAZINE_CSS[id]) chunks.push(`/* theme:${id} */\n${runtime.personalizeCss(id, MAGAZINE_CSS[id])}`);
      }
    }
    for (const feature of FEATURES) {
      if (!runtime.enabled.has(feature.id) || !MAGAZINE_CSS[feature.id]) continue;
      chunks.push(`/* component:${feature.id} */\n${runtime.personalizeCss(feature.id, MAGAZINE_CSS[feature.id])}`);
    }
    chunks.push(runtime.appearanceCss());
    if (runtime.enabled.has("code-height")) chunks.push(`
      html body .roam-app .CodeMirror {height:auto!important;max-height:${runtime.codeMaxHeight || "none"}${runtime.codeMaxHeight ? "px" : ""}!important;}
      html body .roam-app :is(.CodeMirror-scroll,.cm-editor .cm-scroller) {max-height:${runtime.codeMaxHeight || "none"}${runtime.codeMaxHeight ? "px" : ""}!important;overflow-y:auto!important;}
    `);
    else chunks.push(`html body .roam-app :is(.CodeMirror,.CodeMirror-scroll,.cm-editor .cm-scroller) {max-height:none!important;} html body .roam-app .CodeMirror {height:auto!important;}`);
    if (!runtime.themeEnabled && runtime.enabled.has("right-sidebar")) chunks.push(`
      html body .roam-app #right-sidebar { --rs-header-height:48px; --rs-card-padding-top:16px; --rs-card-padding-bottom:16px; --rs-card-shadow:none; --rs-folded-shadow:none; }
      html body .roam-app #right-sidebar .rm-title-display {font-family:inherit!important;font-size:24px!important;line-height:1.3!important;letter-spacing:normal!important;white-space:normal!important;overflow-wrap:anywhere!important;}
      html body .roam-app #right-sidebar .roam-article {padding:0!important;min-width:0!important;}
      html body .roam-app #right-sidebar .rm-sidebar-outline-wrapper {font-family:var(--mag-body)!important;}
    `);
    let style = document.getElementById(STYLE_ID);
    if (!style) {
      style = document.createElement("style");
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }
    style.textContent = chunks.join("\n\n");
    runtime.core?.scheduleSync();
    document.dispatchEvent(new Event("folio:appearance-change"));
  };

  runtime.apply = () => {
    runtime.syncTagConfig();
    runtime.enabled = new Set(FEATURES.filter((feature) => runtime.featureValues.get(feature.id)).map((feature) => feature.id));
    runtime.rebuildCss();

    const desiredJs = new Set(
      runtime.paused || runtime.cssPaused ? [] : FEATURES.filter((feature) => runtime.enabled.has(feature.id) && !feature.cssOnly).map((feature) => feature.id)
    );
    const needsPage = !runtime.paused && !runtime.cssPaused && FEATURES.some((feature) => feature.page && desiredJs.has(feature.id));

    for (const feature of [...FEATURES].reverse()) {
      if (runtime.activeJs.has(feature.id) && !desiredJs.has(feature.id)) runtime.cleanupFeature(feature);
    }
    if (!needsPage && runtime.activeJs.has("page-engine")) {
      runtime.core?.unload("page");
      if (window.__magModules) delete window.__magModules.page;
      runtime.activeJs.delete("page-engine");
    }
    if (needsPage && !runtime.activeJs.has("page-engine")) {
      runtime.ensureCore();
      try {
        MAGAZINE_RUNNERS["page-engine"]?.();
        runtime.activeJs.add("page-engine");
      } catch (error) {
        console.error("[Folio] failed to start page engine", error);
      }
    }
    runtime.scheduleStarts(desiredJs);
    if (!runtime.activeJs.size && runtime.core) {
      runtime.core.destroy();
      runtime.core = null;
    }
    runtime.toolbarUi?.sync();
  };

  runtime.refreshTags = () => {
    window.clearTimeout(runtime.tagTimer);
    runtime.tagTimer = window.setTimeout(() => {
      runtime.syncTagConfig();
      runtime.rebuildCss();
      for (const id of ["tags", "asides"]) {
        const feature = FEATURES.find((item) => item.id === id);
        if (!feature || !runtime.activeJs.has(id)) continue;
        runtime.cleanupFeature(feature);
        runtime.startFeature(feature);
      }
    }, 260);
  };

  runtime.resolveLocale = () => {
    const code = LANGUAGE_ITEM_TO_CODE[runtime.languageChoice] || "auto";
    runtime.locale = code === "auto" ? detectLocale() : code;
    window.__magLocale = runtime.locale;
  };

  runtime.createPanel = async () => {
    const ui = UI[runtime.locale] || UI.en;
    const names = FEATURE_NAMES[runtime.locale] || FEATURE_NAMES.en;
    const groupNames = GROUP_NAMES[runtime.locale] || GROUP_NAMES.en;
    const copy = SETTINGS_COPY[runtime.locale] || SETTINGS_COPY.en;
    const widgetGroups = FUNCTION_GROUPS.map((group) => ({...group, type: "features", description: copy.impactHelp}));
    const detailsCopy = SETTINGS_DETAILS[runtime.locale] || SETTINGS_DETAILS.en;
    const appearanceGroup = { id: "appearance", type: "appearance", description: detailsCopy.appearance };
    const tagGroups = ["namespaces", "stamps", "notesGroup", "moodReading", "functional"].map((id) => ({
      id,
      type: "tags",
      description: id === "namespaces" ? detailsCopy.namespaces : ui.tagsSectionDesc,
    }));
    const accordion = (group, initiallyOpen = false) => ({
      id: `${SETTING_PREFIX}group-${group.id}`,
      name: "",
      description: "",
      action: {
        type: "reactComponent",
        component: () => {
          const React = window.React;
          if (!React) return null;
          const rowStyle = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", padding: "10px 2px", borderTop: "1px solid rgba(128,128,128,.16)" };
          const textStyle = { minWidth: 0, flex: "1 1 auto" };
          const nameStyle = { fontSize: "13px", fontWeight: 600, lineHeight: 1.35 };
          const descStyle = { display: "block", marginTop: "3px", fontSize: "11px", opacity: .65, lineHeight: 1.4 };
          const appearanceLabels = {
            en: ["Body font", "Heading and margin-note font", "Motto · line 1", "Motto · line 2"],
            zh: ["正文字体", "标题与旁注字体", "座右铭 · 第一行", "座右铭 · 第二行"],
            fr: ["Police du texte", "Police des titres et marges", "Devise · ligne 1", "Devise · ligne 2"],
            de: ["Textschrift", "Überschriften- und Randschrift", "Motto · Zeile 1", "Motto · Zeile 2"],
            es: ["Fuente del texto", "Fuente de títulos y márgenes", "Lema · línea 1", "Lema · línea 2"],
            it: ["Font del testo", "Font di titoli e note", "Motto · riga 1", "Motto · riga 2"],
          }[runtime.locale] || ["Body font", "Heading font", "Motto · line 1", "Motto · line 2"];
          const appearanceFields = [
            ["body-font", "bodyFont", appearanceLabels[0], ""],
            ["heading-font", "headingFont", appearanceLabels[1], ""],
            ["motto-line-1", "mottoLine1", appearanceLabels[2], "THINK. OWN. COMPOUND."],
            ["motto-line-2", "mottoLine2", appearanceLabels[3], "FESTINA LENTE."],
          ];
          const featureRows = group.type === "features" ? group.ids.map((id) => {
            const feature = FEATURES.find((item) => item.id === id);
            if (!feature) return null;
            return React.createElement("div", { key: id }, React.createElement("label", { style: rowStyle },
              React.createElement("span", { style: textStyle },
                React.createElement("span", { style: nameStyle }, names[id] || (id === "code-height" ? copy.code : id === "sidebar-toggles" ? copy.sidebar : id)),
                React.createElement("span", { title: copy.impact, style: { display: "inline-block", fontSize: "10px", fontWeight: 500, border: "1px solid rgba(128,128,128,.35)", borderRadius: "4px", padding: "1px 5px", marginLeft: "7px", whiteSpace: "nowrap" } }, ui.impact[feature.impact - 1]),
                React.createElement("span", { style: descStyle }, feature.cssOnly ? ui.cssDesc : ui.interactiveDesc)
              ),
              React.createElement("input", {
                type: "checkbox",
                defaultChecked: Boolean(runtime.featureValues.get(id)),
                onChange: (event) => {
                  runtime.featureValues.set(id, Boolean(event.target.checked));
                  void extensionAPI.settings.set(`${SETTING_PREFIX}feature-${id}`, Boolean(event.target.checked));
                  runtime.apply();
                },
              })
            ), id === "random-tasks" ? randomTodoSettings(runtime, React, copy) : null);
          }) : group.type === "appearance" ? appearanceFields.map(([id, property, label, placeholder]) =>
            React.createElement("label", { key: id, style: { ...rowStyle, alignItems: "flex-start" } },
              React.createElement("span", { style: textStyle }, React.createElement("span", { style: nameStyle }, label)),
              React.createElement("input", {
                type: "text",
                defaultValue: id.startsWith("motto-") ? cleanMotto(runtime[property]) : runtime[property],
                placeholder,
                maxLength: id.startsWith("motto-") ? 24 : 200,
                onInput: id.startsWith("motto-") ? event => { if (!event.nativeEvent?.isComposing) event.target.value = cleanMotto(event.target.value); } : undefined,
                onCompositionEnd: id.startsWith("motto-") ? event => { event.target.value = cleanMotto(event.target.value); runtime[property] = event.target.value; void extensionAPI.settings.set(`${SETTING_PREFIX}${id}`, runtime[property]); runtime.rebuildCss(); } : undefined,
                spellCheck: false,
                style: { boxSizing: "border-box", width: "min(52%, 300px)", minWidth: "160px", padding: "5px 7px" },
                onChange: (event) => {
                  runtime[property] = id.startsWith("motto-") ? cleanMotto(event.target.value) : fontFamily(event.target.value);
                  if (id.startsWith("motto-") && !event.nativeEvent?.isComposing) event.target.value = runtime[property];
                  void extensionAPI.settings.set(`${SETTING_PREFIX}${id}`, runtime[property]);
                  runtime.rebuildCss();
                },
              })
            )
          ) : TAG_FIELDS.filter((field) => field.group === group.id).map((field) =>
            React.createElement("label", { key: field.id, style: { ...rowStyle, alignItems: "flex-start" } },
              React.createElement("span", { style: textStyle },
                React.createElement("span", { style: nameStyle }, settingsTagFieldName(field, runtime.locale)),
                React.createElement("span", { style: descStyle }, `${copy.defaultLabel}: ${field.default}`)
              ),
              React.createElement("input", {
                type: "text",
                defaultValue: runtime.tagValues.get(field.id) ?? field.default,
                spellCheck: false,
                style: { boxSizing: "border-box", width: "min(46%, 260px)", minWidth: "150px", padding: "5px 7px" },
                onChange: (event) => {
                  runtime.tagValues.set(field.id, event.target.value);
                  void extensionAPI.settings.set(`${SETTING_PREFIX}tag-${field.id}`, event.target.value);
                  runtime.refreshTags();
                },
              })
            )
          );
          return React.createElement("details", {
            className: "folio-settings-group",
            ref: (node) => { if (node && !node.dataset.folioInitialized) { node.open = initiallyOpen || runtime.openSections.has(group.id); node.dataset.folioInitialized = "true"; } },
            onToggle: (event) => {
              if (event.currentTarget.open) runtime.openSections.add(group.id);
              else runtime.openSections.delete(group.id);
              void extensionAPI.settings.set(`${SETTING_PREFIX}open-groups`, JSON.stringify([...runtime.openSections]));
            },
            style: { width: "100%", margin: "4px 0", border: "1px solid rgba(128,128,128,.24)", borderRadius: "8px", overflow: "hidden" },
          },
          React.createElement("summary", { style: { cursor: "pointer", padding: "11px 12px", fontSize: "14px", fontWeight: 700, userSelect: "none" } }, groupNames[group.id] || copy.groups[FUNCTION_GROUPS.findIndex(item => item.id === group.id)] || group.id),
          React.createElement("div", { style: { padding: "0 12px 8px" } },
            group.description ? React.createElement("div", { style: { padding: "0 2px 9px", fontSize: "11.5px", opacity: .68, lineHeight: 1.45 } }, group.description) : null,
            featureRows
          ));
        },
      },
    });
    const settings = [
      folioToolbarSetting(runtime),
      {
        id: `${SETTING_PREFIX}version`,
        name: ({ zh: "当前版本", fr: "Version actuelle", de: "Aktuelle Version", es: "Versión actual", it: "Versione corrente" }[runtime.locale] || "Current version"),
        description: `Folio ${VERSION} · ${BUILD_DATE}`,
        action: {
          type: "reactComponent",
          component: () => {
            const React = window.React;
            return React ? React.createElement("code", {
              style: { fontSize: "12px", fontWeight: 700, padding: "3px 7px", borderRadius: "5px", background: "rgba(128,128,128,.14)" },
            }, `v${VERSION}`) : null;
          },
        },
      },
      {
        id: `${SETTING_PREFIX}language`,
        name: ui.language,
        description: ui.languageDesc,
        action: {
          type: "select",
          items: SETTINGS_LANGUAGE_ITEMS,
          onChange: (item) => {
            runtime.languageChoice = item;
            void extensionAPI.settings.set(`${SETTING_PREFIX}language`, item);
            runtime.resolveLocale();
            refreshCalendarLanguage(runtime);
            runtime.refreshTags();
            window.setTimeout(() => runtime.createPanel(), 0);
          },
        },
      },
      {
        id: `${SETTING_PREFIX}theme-enabled`,
        name: ({ zh: "启用 Folio 主题", fr: "Activer le thème Folio", de: "Folio-Design aktivieren", es: "Activar el tema Folio", it: "Attiva il tema Folio" }[runtime.locale] || "Enable Folio theme"),
        description: ({ zh: "开启时使用完整杂志风；关闭时，各组件继续运行并适配 Roam 原生亮色／暗色。", fr: "Active le style magazine complet; désactivé, les composants suivent le thème natif clair/sombre.", de: "Aktiviert den vollständigen Magazinstil; deaktiviert folgen Komponenten Roams hellem/dunklem Design.", es: "Activa el estilo completo; desactivado, los componentes siguen el tema nativo claro/oscuro.", it: "Attiva lo stile completo; disattivato, i componenti seguono il tema nativo chiaro/scuro." }[runtime.locale] || "Use the complete magazine style. When off, enabled components follow Roam's native light or dark theme."),
        action: {
          type: "switch",
          onChange: (event) => {
            runtime.themeEnabled = Boolean(event.target.checked);
            void extensionAPI.settings.set(`${SETTING_PREFIX}theme-enabled`, runtime.themeEnabled);
            runtime.rebuildCss();
          },
        },
      },
      {
        id: `${SETTING_PREFIX}pause-css`,
        name: ui.cssPause,
        description: ui.cssPauseDesc,
        action: {
          type: "switch",
          onChange: (event) => {
            runtime.cssPaused = Boolean(event.target.checked);
            void extensionAPI.settings.set(`${SETTING_PREFIX}pause-css`, runtime.cssPaused);
            runtime.apply();
          },
        },
      },
      {
        id: `${SETTING_PREFIX}pause-interactive`,
        name: ui.pause,
        description: ui.pauseDesc,
        action: {
          type: "switch",
          onChange: (event) => {
            runtime.paused = Boolean(event.target.checked);
            void extensionAPI.settings.set(`${SETTING_PREFIX}pause-interactive`, runtime.paused);
            runtime.apply();
          },
        },
      },
      functionalSettings(runtime, accordion, appearanceGroup, widgetGroups, tagGroups),
      {
        id: `${SETTING_PREFIX}reset-all`,
        name: ui.reset,
        description: ui.resetDesc,
        action: {
          type: "button",
          content: ui.resetButton,
          onClick: async () => {
            const writes = [];
            for (const feature of FEATURES) {
              runtime.featureValues.set(feature.id, true);
              writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}feature-${feature.id}`, true));
            }
            for (const field of TAG_FIELDS) {
              runtime.tagValues.set(field.id, field.default);
              writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}tag-${field.id}`, field.default));
            }
            runtime.paused = false;
            runtime.cssPaused = false;
            runtime.themeEnabled = true;
            setFolioToolbarVisibility(runtime, true);
            runtime.bodyFont = "";
            runtime.headingFont = "";
            runtime.codeMaxHeight = 420;
            runtime.shortcuts = {...SHORTCUT_DEFAULTS};
            runtime.randomExcludedPages = RANDOM_EXCLUDED_DEFAULT;
            runtime.randomExcludeFuture = true;
            syncRandomTodoConfig(runtime);
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}random-excluded-pages`, runtime.randomExcludedPages));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}random-exclude-future`, true));
            runtime.mottoLine1 = "THINK. OWN. COMPOUND.";
            runtime.mottoLine2 = "FESTINA LENTE.";
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}pause-interactive`, false));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}pause-css`, false));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}theme-enabled`, true));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}body-font`, ""));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}heading-font`, ""));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}code-max-height`, 420));
            for (const [key,value] of Object.entries(SHORTCUT_DEFAULTS)) writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}shortcut-${key}`, value));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}motto-line-1`, runtime.mottoLine1));
            writes.push(extensionAPI.settings.set(`${SETTING_PREFIX}motto-line-2`, runtime.mottoLine2));
            await Promise.all(writes);
            runtime.apply();
            await runtime.createPanel();
          },
        },
      },
    ];
    runtime.settingsDefinitions = settings;
    await extensionAPI.settings.panel.create({ tabTitle: ui.tab, settings });
    runtime.toolbarUi?.sync();
    runtime.toolbarUi?.renderPanel();
  };

  runtime.start = async () => {
    // rc6 accidentally restarted the bundled comment projection. Stop it on
    // upgrade and remove only generated DOM, never native comment blocks.
    window.__magNativeCommentRailCleanup?.();
    window.__magVideoTheaterCleanup?.();
    document.querySelectorAll(".mag-native-comment,.mag-comment-fold-count,.mag-video-theater-notes,.folio-video-open").forEach(el => el.remove());
    document.querySelectorAll(".mag-comment-rail-host,.mag-comment-anchor-active,.mag-comment-anchor-rail").forEach(el => {
      el.classList.remove("mag-comment-rail-host", "mag-comment-anchor-active", "mag-comment-anchor-rail");
      el.style.removeProperty("--mag-comment-reserve");
    });
    const defaultWrites = [];
    const readDefault = (key, fallback) => {
      const stored = extensionAPI.settings.get(key);
      if (stored !== null && stored !== undefined) return stored;
      const legacyKey = key.startsWith(SETTING_PREFIX)
        ? `${LEGACY_SETTING_PREFIX}${key.slice(SETTING_PREFIX.length)}`
        : "";
      const legacy = legacyKey ? extensionAPI.settings.get(legacyKey) : undefined;
      const value = legacy !== null && legacy !== undefined ? legacy : fallback;
      defaultWrites.push(extensionAPI.settings.set(key, value));
      return value;
    };
    runtime.toolbarSettingsEnabled = Boolean(readDefault(`${SETTING_PREFIX}toolbar-settings`, true));
    runtime.randomExcludedPages = String(readDefault(`${SETTING_PREFIX}random-excluded-pages`, RANDOM_EXCLUDED_DEFAULT));
    runtime.randomExcludeFuture = Boolean(readDefault(`${SETTING_PREFIX}random-exclude-future`, true));
    syncRandomTodoConfig(runtime);
    runtime.codeMaxHeight = codeHeight(readDefault(`${SETTING_PREFIX}code-max-height`, 420));
    for (const [key, value] of Object.entries(SHORTCUT_DEFAULTS)) runtime.shortcuts[key] = String(readDefault(`${SETTING_PREFIX}shortcut-${key}`, value));
    window.__folioMatchesShortcut = (event, key) => matchesShortcut(event, runtime.shortcuts[key]);
    runtime.languageChoice = readDefault(`${SETTING_PREFIX}language`, "Auto");
    runtime.themeEnabled = Boolean(readDefault(`${SETTING_PREFIX}theme-enabled`, true));
    runtime.paused = Boolean(readDefault(`${SETTING_PREFIX}pause-interactive`, false));
    runtime.cssPaused = Boolean(readDefault(`${SETTING_PREFIX}pause-css`, false));
    runtime.bodyFont = String(readDefault(`${SETTING_PREFIX}body-font`, ""));
    runtime.headingFont = String(readDefault(`${SETTING_PREFIX}heading-font`, ""));
    runtime.mottoLine1 = cleanMotto(readDefault(`${SETTING_PREFIX}motto-line-1`, "THINK. OWN. COMPOUND."));
    runtime.mottoLine2 = cleanMotto(readDefault(`${SETTING_PREFIX}motto-line-2`, "FESTINA LENTE."));
    try {
      const openGroups = JSON.parse(String(readDefault(`${SETTING_PREFIX}open-groups`, '["impact1"]')));
      runtime.openSections = new Set(Array.isArray(openGroups) ? openGroups : ["impact1"]);
    } catch (_) {
      runtime.openSections = new Set(["impact1"]);
    }
    for (const feature of FEATURES) {
      const stored = readDefault(`${SETTING_PREFIX}feature-${feature.id}`, true);
      runtime.featureValues.set(feature.id, Boolean(stored));
    }
    for (const field of TAG_FIELDS) {
      const stored = readDefault(`${SETTING_PREFIX}tag-${field.id}`, field.default);
      runtime.tagValues.set(field.id, String(stored));
    }
    await Promise.all(defaultWrites);
    runtime.resolveLocale();
    runtime.apply();
    await runtime.createPanel();
    runtime.toolbarUi = registerFolioToolbar(runtime);
    console.info(`[Folio] v${VERSION} loaded (${runtime.locale}).`);
  };

  runtime.destroy = () => {
    if (runtime.destroyed) return;
    runtime.destroyed = true;
    runtime.toolbarUi?.destroy();
    runtime.toolbarUi = null;
    runtime.cancelStarts();
    window.clearTimeout(runtime.tagTimer);
    for (const feature of [...FEATURES].reverse()) runtime.cleanupFeature(feature);
    if (runtime.activeJs.has("page-engine")) {
      runtime.core?.unload("page");
      if (window.__magModules) delete window.__magModules.page;
    }
    runtime.activeJs.clear();
    runtime.core?.destroy();
    runtime.core = null;
    document.getElementById(STYLE_ID)?.remove();
    delete window.__folioMatchesShortcut;
    document.getElementById("folio-theme-fonts")?.remove();
    if (window.__magLocale === runtime.locale) delete window.__magLocale;
    delete window.__folioTagConfig;
    delete window.__folioRandomTodoConfig;
    console.info("[Folio] unloaded.");
  };
  return runtime;
}

export default {
  async onload({ extensionAPI }) {
    currentRuntime?.destroy?.();
    currentRuntime = createRuntime(extensionAPI);
    await currentRuntime.start();
  },
  onunload() {
    currentRuntime?.destroy?.();
    currentRuntime = null;
  },
};
