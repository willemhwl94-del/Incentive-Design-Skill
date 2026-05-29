# 组件名称

`SharePanel` / `分享面板`

## 组件功能

当活动需要邀请好友、传播活动、复制/展示分享信息时，点击分享入口后拉起的半浮层组件。

分享面板包含 3 种类型：

| Type | 组件类型 | 使用场景 | Figma Node |
| --- | --- | --- | --- |
| `guide` | 引导分享面板 | 需要展示分享步骤、引导用户选择分享渠道时使用。 | `332:15385` |
| `qrCode` | 二维码分享面板 | 需要展示分享海报/二维码，并提供渠道分享时使用。 | `332:15171` |
| `bottomSheet` | 沉底分享面板 | 需要以沉底半浮层展示邀请标题、二维码和操作按钮时使用。 | `332:15785` |

## 配置项

### 文字

除 `share-sheet` 锁定区外，引导区、海报区、二维码区等活动内容文案可以替换，但必须保留原组件的层级、位置关系和字号规范。分享面板用于具体活动项目时，活动内容文案应根据活动主题自由生成，不需要沿用组件默认文案。

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `type` | `guide \| qrCode \| bottomSheet` | yes | - | 选择分享面板类型。 |
| `sheetTitle` | string | no | Figma default | 分享渠道区域标题属于 `share-sheet` 锁定区，默认不可作为项目配置项修改。仅组件库维护时可调整。 |
| `guideSteps[]` | string[] | no | Figma default | 引导分享面板中的步骤文案。仅适用于 `guide`。 |
| `guideDescription` | string | no | Figma default | 引导分享面板中的说明/提示文案。仅适用于 `guide`。 |
| `qrTitle` | string | no | Figma default | 二维码海报主标题。仅适用于 `qrCode`。 |
| `qrSubtitle` | string | no | Figma default | 二维码海报副标题。仅适用于 `qrCode`。 |
| `bottomTitle` | string | no | Figma default | 沉底分享面板主标题。仅适用于 `bottomSheet`。 |
| `bottomSubtitle` | string | no | Figma default | 沉底分享面板副标题。仅适用于 `bottomSheet`。 |
| `buttonLabels[]` | string[] | no | Figma default | 沉底分享面板底部按钮文案。仅适用于 `bottomSheet`。 |
| `channels[].label` | string | no | Figma default | 分享渠道属于 `share-sheet` 锁定区，默认不可作为项目配置项修改。仅组件库维护时可调整。 |
| `themeCopyTone` | string | no | - | 项目化文案语气，例如巴西桑巴足球、节日抽奖、现金返利等。用于指导生成面板标题、步骤和反馈文案。 |

### 图片

三个模板中的 `Img` 都可以替换，但每个模板的图片尺寸不同。替换图片时只改图片内容，不改变容器尺寸、裁切范围和对齐方式。项目落地时，`Img` 应根据当前活动内容自由生成，例如活动主视觉、奖励物、玩法元素、地区文化符号等。

图片素材中不能出现文字。活动标题、步骤、提示、按钮等文案必须使用组件文字层承载，不能烘焙进 `Img`。

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `guideImage` | image | no | Figma default | 引导分享面板 `Img`。尺寸固定为 316 x 100。 |
| `qrPosterImage` | image | no | Figma default | 二维码分享面板 `Img`。尺寸固定为 300 x 477。 |
| `bottomSheetImage` | image | no | Figma default | 沉底分享面板 `Img`。尺寸固定为 390 x 530。 |
| `qrImage` | image | no | Figma default | 二维码图片。`qrCode` 中图片尺寸约 154.47 x 154.47，二维码容器 180 x 180；`bottomSheet` 中图片尺寸约 188.77 x 188.77，二维码容器 210 x 210。 |
| `channels[].icon` | image | no | Figma default | 分享渠道属于 `share-sheet` 锁定区，默认不可作为项目配置项替换。仅组件库维护时可调整。 |

### 颜色

组件结构默认颜色可作为基线。用于具体项目时，面板容器、步骤编号、分割线、标题文字、说明文字等颜色可以根据项目视觉自由生成，但必须保持可读性、层级关系和原始尺寸。

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `theme.cardBackground` | color | no | Figma default | 引导内容卡片底色。 |
| `theme.primaryText` | color | no | Figma default | 主要文字颜色。 |
| `theme.secondaryText` | color | no | Figma default | 次要文字颜色。 |
| `theme.stepBackground` | color | no | Figma default | 步骤编号圆点颜色。 |
| `theme.stepText` | color | no | Figma default | 步骤编号文字颜色。 |
| `theme.divider` | color | no | Figma default | 连接线、虚线等辅助线颜色。 |

颜色锁定补充：

- `share-sheet` 底部锁定区的颜色不参与项目主题换肤。
- `share-sheet__homebar` / Home Indicator 必须保持组件默认色 `#161823`，不得被 `theme`、页面 CSS 变量、活动主色或运营主题改写。
- `share-sheet__titlebar h2`、关闭按钮、分享渠道文案颜色也属于锁定区，必须保持 Figma 默认颜色；如需改动，只能在组件库维护场景中更新源组件和本规范。

### 交互行为

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `open` | function | yes | - | 打开面板。 |
| `close` | function | yes | - | 点击关闭按钮或遮罩关闭面板。 |
| `onChannelClick` | function | no | toast | 点击分享渠道。 |
| `onCopyLink` | function | no | clipboard | 点击复制链接或复制类按钮。 |
| `onSaveQr` | function | no | save image | 保存二维码/海报。 |
| `onPrimaryButtonClick` | function | no | - | 沉底分享面板主按钮点击行为。 |
| `onSecondaryButtonClick` | function | no | - | 沉底分享面板次按钮点击行为。 |

### 代码使用

- 真实 H5 页面必须通过分享面板组件工厂创建运行时实例，例如 `createSharePanel(options)`。
- Reusable H5 source lives in this component folder:
  - `component-library/components/share-panel/share-panel.css`
  - `component-library/components/share-panel/share-panel.js`
  - `component-library/components/share-panel/assets/`
- 页面代码只能传入配置、文案、图片和回调，不允许在业务页面中手写一份分享面板 DOM/CSS 来替代组件实例。
- 如果业务页面需要新增活动内容，应通过组件允许的配置项覆盖；组件锁定区仍按组件默认结构执行。

## 组件规范

### Layout

- Full canvas context: 390 x 844.
- 面板以半浮层方式出现，保留 Figma 中的遮罩、状态栏、Home Indicator、关闭按钮和面板结构。
- 引导分享面板：
  - 引导内容区位于页面中部，整体参考 Figma 节点 `Frame 2085662947`。
  - `Img` 尺寸固定为 316 x 100。
  - `Img` 外层容器只负责定位和尺寸，不加背景色、不加占位色、不额外绘制装饰；该模块视觉只由一张图片承担。
  - `Img` 图片内容必须贴住图片画布底部生成/导出，不得在透明画布底部留下空白间隙；允许顶部留白来承接构图。
  - `Img` 中不能包含文字。
  - 底部分享渠道 Sheet 宽度 390，高度 169。
  - 渠道项宽度 64，图标 48 x 48。
- 二维码分享面板：
  - 海报 `Img` 尺寸固定为 300 x 477，位于页面中部。
  - 二维码容器 180 x 180，二维码图片约 154.47 x 154.47。
  - 底部分享渠道 Sheet 宽度 390，高度 177。
  - 渠道项宽度 64，图标 48 x 48。
- 沉底分享面板：
  - 半弹层位置和尺寸按 Figma 保持，面板区域 390 x 530。
  - `Img` 尺寸固定为 390 x 530。
  - 二维码容器 210 x 210，二维码图片约 188.77 x 188.77。
  - 底部按钮高度 48，双按钮时单个按钮宽度 169。

### Visual Lock

- 必须优先使用 Figma 组件源结构，不重新绘制组件结构。
- 适用全局组件规则：在 Figma 交互链路、页面拓展或真实项目标注中，如果任意组件源是 `FRAME`，直接复制该源 frame 到目标页面后做允许范围内的图片、文案和颜色覆盖；不要把源 frame 转换成新的 Figma component、component set、instance 或额外 wrapper。
- 如果组件库已经提供可直接使用且可覆盖到代码效果的 `INSTANCE`，可以使用实例；但当实例锁住图片/文案导致无法还原代码效果时，应使用组件源 frame 复制件。
- 允许根据项目主题替换引导区域颜色、文案和 `Img` 图片内容，但不改变组件尺寸、内部布局、圆角、阴影、遮罩、关闭按钮和 Home Indicator。
- 分享面板只能有一层可见的全屏蒙层。蒙层可以由外层 390 x 844 frame 的透明填充承载，也可以由 `Modal`/scrim 子层承载，但两者不能同时可见。
- 如果 Figma 源组件已将 `Modal` 设为隐藏，则项目实例和链路标注实例也必须保持 `Modal` 隐藏，只使用源组件外层 frame 的蒙层透明度。
- 如果 Figma 源组件使用 `Modal`/scrim 作为蒙层，则外层 frame 必须保持透明，不得再添加黑色/白色/图片填充。
- 在活动页或交互链路中使用分享面板时，面板必须覆盖在前一个页面状态上方，且前一个页面应能透过蒙层被看到；不能为了“补背景”额外新增第二层 scrim。
- 项目化改色必须服务当前活动视觉，不允许随意改成与页面主视觉无关的颜色。
- `share-sheet` 锁定区不可改色、不可改文案、不可替换内部图标或频道内容，不作为业务配置项。
- `share-sheet__homebar` 是系统 Home Indicator，不是活动视觉元素；颜色固定为组件默认 `#161823`，页面主题不得覆盖。
- 分享渠道 icon 尺寸固定，不随活动主题重绘；项目使用时不替换。
- 渠道列表属于 `share-sheet` 锁定区，项目使用时不增减、不改顺序、不改文案。
- 不同类型的 `Img` 尺寸不同，不能跨模板复用尺寸。

### States

- Hidden
- Open
- Closing
- Toast visible

### QA

- 面板打开时必须覆盖当前活动页内容，遮罩层和底部安全区必须完整。
- 检查交付链路中的分享面板节点类型为 `INSTANCE`，并且能追溯到对应的分享面板组件定义。
- 检查全屏蒙层只有一层可见：外层 frame 蒙层与 `Modal`/scrim 不能同时可见。
- 检查分享面板下方仍保留前一个页面状态，并且能透过蒙层看到页面内容。
- 确认使用的类型与业务场景一致：引导步骤用 `guide`，二维码/海报扩散用 `qrCode`，沉底邀请动作区用 `bottomSheet`。
- 替换图片后，检查图片尺寸、裁切和对齐是否仍与 Figma 一致。
- 替换图片后，检查图片中没有任何文字。
- 检查 `share-sheet` 区域颜色、标题、关闭按钮、渠道 icon、渠道文案和 Home Indicator 均保持组件默认状态。
- 所有可替换文案不得溢出、重叠或遮挡二维码/按钮/关闭按钮。
- 分享渠道列表需要支持横向滚动。
- 复制、保存、渠道分享等结果需要有成功/失败反馈。

## 组件 Figma 链接

- Section: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=332-15383
- 引导分享面板: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=332-15385&t=ox7bV00bMlINi02A-4
- 二维码分享面板: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=332-15171&t=ox7bV00bMlINi02A-4
- 沉底分享面板: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=332-15785&t=ox7bV00bMlINi02A-4
