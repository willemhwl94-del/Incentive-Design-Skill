# 组件名称

`AssetCard` / `资产组件`

## 组件功能

展示用户当前资产、资产操作入口、进度、门槛奖励或资产有效期信息。用于活动页中承接“资产感知 → 达标判断 → 操作/查看 → 继续完成任务”的转化链路。

资产组件源区为 Figma node `331:11976`，最新变体以 `441:2491`、`441:2659`、`441:2626` 的实际结构为准，包含 3 个变体：

| Variant | Figma node | 尺寸 | 使用场景 |
| --- | --- | --- | --- |
| `progressNoTitle` | `441:2491` / `有进度无标题` | 326 x 130 | 有进度的资产样式。注意：最新 Figma 虽命名为“无标题”，但实例内保留 `标题` 文本层，应按组件实际层级保留。 |
| `progressWithTitle` | `441:2659` / `有进度有标题` | 326 x 130 | 有进度、有标题的标准资产样式，展示头像、资产标题、币种、金额、操作按钮、进度、门槛奖励。 |
| `noProgressWithTitle` | `441:2626` / `无进度有标题` | 326 x 120 | 无进度、有标题的强提醒资产样式，展示资产、操作按钮、倒计时和 More 入口。 |

### Variant selection rule

- 只有当业务明确存在资产门槛、提现门槛、兑换门槛、领取门槛或资产有效进度时，才使用 `progressNoTitle` 或 `progressWithTitle`。
- 进度条必须表达资产相关进度，例如 `R$ 3.20 / R$ 5.00` 提现进度、还差多少金额可提现、还差多少 Points 可兑换、资产领取进度等。
- 如果页面没有资产/提现/兑换/领取门槛要求，必须使用 `noProgressWithTitle` 或其他无进度资产变体，不得为了视觉饱满而使用有进度变体。
- 不得把玩法进度、任务进度、邀请人数、抽奖次数、宝盒解锁数量、转盘机会数等非资产门槛进度塞进资产组件进度条；这些信息应留在玩法区、任务区、机会计数或对应业务组件内。
- 如果活动同时有玩法进度和提现门槛，资产组件进度条只展示提现/资产门槛，玩法进度由玩法组件独立展示。

## 配置项

### 文字

所有文案可替换，但必须保留原文本层的容器宽度、字号、字重、对齐方式和层级关系。

| Field | Type | Required | Applies to | Figma layer | Notes |
| --- | --- | --- | --- | --- | --- |
| `assetTitle` | string | conditional | `progressWithTitle`, `noProgressWithTitle` | `标题` | 资产标题，默认 `My rewards`。 |
| `assetAmountText` | string | yes | all | `利益点` / `R$` + `20` | 当前资产。紧凑变体为整段金额，如 `8,000円分`；标准/倒计时变体拆成币种和数值。 |
| `currencyText` | string | conditional | `progressWithTitle`, `noProgressWithTitle` | `R$` | 币种或单位前缀，默认 `R$`。 |
| `amountValueText` | string | conditional | `progressWithTitle`, `noProgressWithTitle` | `20` | 金额数值，默认 `20`。 |
| `buttonText` | string | yes | all | `Label` | 按钮文案，默认 `Check`。 |
| `progressDescription` | string | conditional | `progressNoTitle`, `progressWithTitle` | `说明文案` | 距离门槛的说明，默认 `あと2000円分で出金可能`。 |
| `thresholdText` | string | conditional | `progressNoTitle`, `progressWithTitle` | `Enter invite code to` | 门槛奖励文案，默认 `10,000円分`。 |
| `countdownPrefixText` | string | conditional | `noProgressWithTitle` | `Expires in` | 倒计时前置文案，默认 `Expires in`。 |
| `countdownHH` | string | conditional | `noProgressWithTitle` | 第一个倒计时数字 | 小时，两位数字。 |
| `countdownMM` | string | conditional | `noProgressWithTitle` | 第二个倒计时数字 | 分钟，两位数字。 |
| `countdownSS` | string | conditional | `noProgressWithTitle` | 第三个倒计时数字 | 秒，两位数字。 |
| `moreText` | string | conditional | `noProgressWithTitle` | `second title` | 更多入口文案，默认 `More`。 |

### 图片

| Field | Type | Required | Applies to | Figma layer | 固定尺寸 | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `profileImage` | image | no | all | `profile` | 36 x 36 | 默认使用 Figma 原组件内的用户头像图片。只有业务明确提供真实用户头像或活动头像时才替换图像；不得用 CSS 圆形、渐变、字母、emoji 或重新生成的占位图代替默认头像。 |
| `rewardIconImage` | image | no | `progressNoTitle`, `progressWithTitle` | `AssetIcon` | 50 x 50 | 默认使用 Figma 原组件内的金币/资产 icon 图片。只有业务明确要求特定资产类型时才替换图像；不得每个项目重新绘制、用 CSS 形状重做、或用文字如 `P` 代替默认 icon。 |
| `moreIcon` | icon | no | `noProgressWithTitle` | `Icon/Chevron_Right_Small_Fill_LTR` | 16 x 16 | More 右箭头，默认使用组件内图标，不建议替换。 |

默认图片规则：

- 默认头像和默认金币/资产 icon 的图片来源以 Figma 原始变体为准，优先从 `441:2491`（`有进度无标题`）或当前选用变体中的 `profile`、`AssetIcon` 图层保留/导出。
- 当前默认素材参考地址：`https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=441-2491`。
- H5 默认资产路径：
  - `component-library/components/asset-card/assets/default-profile.png`
  - `component-library/components/asset-card/assets/default-asset-icon.png`
  - 这两个文件应由 Figma 原组件导出维护；如果 Figma 授权不可用，可临时使用同名 PNG 占位，但恢复授权后必须用 Figma 原图覆盖。
- `profile` 是用户头像槽位，不是活动装饰图。未提供用户头像时，保留 Figma 原组件头像图片。
- `AssetIcon` 是资产/金币 icon 槽位，不是项目级玩法图。未提供明确资产图时，保留 Figma 原组件金币图片。
- H5 代码实现时，`asset-avatar` 和 `asset-threshold` / `AssetIcon` 必须优先渲染为图片填充或 `<img>`，不要用 CSS background、渐变圆、文字、emoji、canvas 或重新生成图片模拟 Figma 默认素材。
- Figma 拓展链路时，复制原始组件 FRAME 后保留这两个图片层；只在业务输入提供图片时替换 image fill。

### 交互行为

| Field | Type | Required | Applies to | Notes |
| --- | --- | --- | --- | --- |
| `assetState` | enum | yes | all | `inProgress`, `ready`, `expiring`, `expired`, `loading`。 |
| `progress` | number | conditional | `progressNoTitle`, `progressWithTitle` | 0-1 的进度。Figma 当前示例进度宽度为 166 / 230。 |
| `expiresAt` | timestamp | conditional | `noProgressWithTitle` | 倒计时结束时间，用于计算 `HH:MM:SS`。 |
| `onButtonClick` | function | yes | all | 点击 `Check` / 操作按钮。未达标时展示 toast，已达标时跳转目标页或打开弹层。 |
| `onMoreClick` | function | conditional | `noProgressWithTitle` | 点击 `More` 入口，进入资产详情、任务、规则或更多资产列表。 |
| `showToast` | function | conditional | all | 未达标默认 toast：`未达到操作条件`。 |
| `actionUrl` | string | conditional | all | 达到条件后跳转的目标页面地址。 |

### 颜色

组件默认使用 Figma 原始配色；落到具体活动页时，允许通过配置项做主题换肤，但不得改变组件尺寸、间距、层级和文本展示规则。

| Field | Type | Applies to | Default | Notes |
| --- | --- | --- | --- | --- |
| `assetTheme.cardBg` | color | all | `#FFFFFF` / `#3F85FF` | 卡片背景。应结合页面主视觉选择，例如巴西活动可使用深蓝承接页面按钮体系。 |
| `assetTheme.text` | color | all | `#3C271F` / `#FFFFFF` | 标题、币种、金额主文字颜色。 |
| `assetTheme.subtext` | color | progress variants | `rgba(0,0,0,0.48)` | 进度说明文字颜色。 |
| `assetTheme.avatarBg` | color | all | `#E5E6EB` | 仅作为头像图片加载前或透明图片后的底色。不得用该底色替代默认头像图片。 |
| `assetTheme.avatarBorder` | color | all | `rgba(255,255,255,0.64)` | 头像描边。 |
| `assetTheme.buttonBg` | color | all | `#FBD106` / `#FFFFFF` | 操作按钮背景。应保持足够对比。 |
| `assetTheme.buttonText` | color | all | `#000000` | 操作按钮文字。 |
| `assetTheme.progressTrack` | color | progress variants | `rgba(0,0,0,0.08)` | 进度条底色。 |
| `assetTheme.progressStart` | color | progress variants | `#FF5324` | 进度渐变起始色。 |
| `assetTheme.progressEnd` | color | progress variants | `#FFF429` | 进度渐变结束色。 |
| `assetTheme.thresholdBg` | color | progress variants | `#FFF8B8` | 门槛胶囊背景。 |
| `assetTheme.thresholdText` | color | progress variants | `#3C271F` | 门槛胶囊文字。 |
| `assetTheme.coinLight/main/mid/dark/text` | color | progress variants | Figma 金币色 | 仅用于 Figma 原组件确实没有可导出图片时的兜底还原。正常情况下必须使用 Figma 默认 `AssetIcon` 图片或业务提供的资产图片。 |

## 组件规范

### 组件结构

- 资产组件源区：Figma node `331:11976`。
- 组件外层统一宽度为 326。
- 外层圆角统一为 32。
- 组件本身不加阴影；页面搭建时也不要额外添加投影。
- 外层 Auto Layout：
  - direction: vertical
  - padding: top 12, right 16, bottom 16, left 16
  - gap: 2
- 主体内容宽度统一为 294。
- 内部结构由两个主要区域组成：
  - `资产信息`
  - `下挂内容`

### 模块间距

| 模块 | Applies to | x | y | width | height | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 外层卡片 | all | 0 | 0 | 326 | 120/130 | padding top 12 / right 16 / bottom 16 / left 16，圆角 32，无阴影。 |
| `资产信息` | all | 16 | 12 | 294 | 50 | 与卡片顶部间距 12。 |
| `下挂内容` | all | 16 | 64 | 294 | 40/50 | 与 `资产信息` 的布局间距为 2。进度变体高度 50，倒计时变体高度 40。 |
| `头像+利益点` | all | 16 | 19 | 200 | 36 | 头像和文字组间距 8。 |
| `button` | all | 232 | 23 | 78 | 28 | 按钮左右 padding 8，上下 padding 4。 |
| `progress bar` | progress variants | 20 | 77 | 230 | 38 | 相对 `下挂内容` 为 x 4, y 13。 |
| `说明文案` | progress variants | 20 | 77 | 196 | 18 | 相对 `progress bar` 顶部，左对齐。 |
| `进度条` | progress variants | 20 | 99 | 230 | 12 | 背景轨道固定 230 x 12。 |
| `进度` | progress variants | 21 | 100 | 166 | 10 | 当前示例宽度 166，高度 10，圆角 100。 |
| `粒子特效` | progress variants | 21 | 95 | 196 | 20 | Figma 组件中保留，不改颜色、不改透明度、不改尺寸；代码实现不需要额外模拟光点层。 |
| `利益点icon` | progress variants | 244 | 64 | 62 | 50 | 相对 `下挂内容` 为 x 228, y 0。 |
| `AssetIcon` | progress variants | 250 | 64 | 50 | 50 | 相对 `利益点icon` 为 x 6, y 0。 |
| `门槛胶囊` | progress variants | 244 | 96 | 62 | 18 | 背景 `#FFF8B8`，圆角 32。 |
| `分割线` | `noProgressWithTitle` | 16 | 67.5 | 294 | 1 | 下挂内容内第一行。 |
| `倒计时信息` | `noProgressWithTitle` | 16 | 77.5 | 144 | 22 | 与分割线垂直间距 8。 |
| `more` | `noProgressWithTitle` | 262.089 | 78.5 | 47.911 | 20 | 右对齐，含 16 x 16 箭头。 |

### 字体规范

| Layer | Applies to | Font | Size | Line height | Letter spacing | Color |
| --- | --- | --- | --- | --- | --- | --- |
| `标题` | all title variants | TikTok Sans Medium | 11 | 100% | 0 | 白底为 `#3C271F`，蓝底为 `#FFFFFF`。 |
| `R$` / 币种 | all | TikTok Sans Black | 22 | 120% | 0 | 白底为 `#3C271F`，蓝底为 `#FFFFFF`。 |
| 金额数值 | all | TikTok Sans Black | 22 | 120% | 0 | 白底为 `#3C271F`，蓝底为 `#FFFFFF`。 |
| `Label` | all | TikTok Sans SemiBold | 12 | 130% | 0 | `#000000`。 |
| `说明文案` | progress variants | TikTok Sans Regular | 14 | 130% | 0 | `#000000` at 48% opacity。 |
| 门槛胶囊文案 | progress variants | TikTok Sans Bold | 10 | 125% | 1% | `#3C271F`。 |
| `Expires in` / 倒计时标题 | `noProgressWithTitle` | TikTok Sans Regular | 11 | 130% | 1.773% | `#FFFFFF` at 72% opacity。 |
| 倒计时数字/冒号 | `noProgressWithTitle` | TikTok Text Medium | 12 | 130% | 1.34% | `#FFFFFF`；冒号 opacity 50%。 |
| `More` | `noProgressWithTitle` | TikTok Sans Medium | 11 | 130% | 1.773% | `#FFFFFF` at 72% opacity。 |

### 文本展示规则

- 资产组件内所有动态文案默认不换行，不省略，不裁切。
- 金额区域从 Figma 固定起点展示，文案过长时向右自然展开，不使用 `ellipsis`，不把币种或金额限制在 Figma 示例文本的原始宽度内。
- `Expires in` / 倒计时标题必须单行展示；不要因为 Figma 示例宽度为 50 而把实际文案固定到 50px 后换行。
- 倒计时数字、冒号、More 文案、箭头都必须 `flex: none` 或等效固定布局，避免被父级压缩。
- 如果业务文案比 Figma 示例长，优先保留固定起点、固定纵向位置和单行展示；不得通过换行、省略或缩小字号解决。
- 只有在用户明确要求容器内截断时，才允许对该字段设置裁切或省略。

### Variant: progressNoTitle

- Figma node: `441:2491`。
- Figma variant name: `有进度无标题`。
- 尺寸：326 x 130。
- 背景色：`#FFFFFF`。
- 外层 Auto Layout：vertical，gap 2，padding top 12 / right 16 / bottom 16 / left 16。
- `资产信息`: x 16, y 12, width 294, height 50。
- 使用与最新 Figma 一致的资产信息结构：
  - `头像+利益点`: x 16, y 19, width 200, height 36。
  - `profile`: x 16, y 19, width 36, height 36，默认保留 Figma 原用户头像图片，白色描边 64% / 1px。
  - `文字`: x 60, y 20.5, width 156, height 33。
  - `标题`: x 60, y 20.5, width 156, height 11，TikTok Sans Medium, 11px, line-height 100%，color `#3C271F`。
  - `R$`: x 60, y 31.5, width 29, height 22，TikTok Sans Black, 22px, line-height 120%，color `#3C271F`。
  - `20`: x 91, y 31, width 62, height 22，TikTok Sans Black, 22px, line-height 120%，color `#3C271F`。
  - `button`: x 232, y 23, width 78, height 28，背景 `#FBD106`，圆角 100。
  - `Label`: x 252.5, y 29, width 37, height 16，TikTok Sans SemiBold, 12px, line-height 130%，color `#000000`。
- `下挂内容`: x 16, y 64, width 294, height 50。
- 使用 `下挂内容1`，展示进度条和门槛奖励 icon。

### Variant: progressWithTitle

- Figma node: `441:2659`。
- Figma variant name: `有进度有标题`。
- 尺寸：326 x 130。
- 背景色：`#FFFFFF`。
- 外层 Auto Layout：vertical，gap 2，padding top 12 / right 16 / bottom 16 / left 16。
- `资产信息`: x 16, y 12, width 294, height 50。
- 使用 `资产信息1` 子组件，头像为大头像：
  - `头像+利益点`: x 16, y 19, width 200, height 36。
  - `profile`: x 16, y 19, width 36, height 36，默认保留 Figma 原用户头像图片，白色描边 64% / 1px。
  - `文字`: x 60, y 20.5, width 156, height 33。
  - `标题`: x 60, y 20.5, width 156, height 11，TikTok Sans Medium, 11px, line-height 100%，color `#3C271F`。
  - `R$` / 金额数值：TikTok Sans Black, 22px, line-height 120%，color `#3C271F`。
  - 按钮：x 232, y 23, width 78, height 28，背景 `#FBD106`，圆角 100。
- `下挂内容`: x 16, y 64, width 294, height 50。
- 使用 `下挂内容1`，展示进度条和门槛奖励 icon。

### Variant: noProgressWithTitle

- Figma node: `441:2626`。
- Figma variant name: `无进度有标题`。
- 尺寸：326 x 120。
- 背景色：`#3F85FF`。
- `资产信息`: x 16, y 12, width 294, height 50。
- 资产标题和金额使用白色文本：
  - `标题`: TikTok Sans Medium, 11px, color `#FFFFFF`。
  - `R$` / 金额数值：TikTok Sans Black, 22px, color `#FFFFFF`。
  - 按钮：x 216, y 11, width 78, height 28，背景 `#FFFFFF`，文本黑色。
- `下挂内容`: x 16, y 64, width 294, height 40。
- 使用 `下挂卡内容2`，展示分割线、倒计时和 More 入口。
- 分割线：width 294, height 1，stroke `rgba(0, 0, 0, 0.08)`。
- 倒计时区域：
  - `Expires in`: 11px, color `#FFFFFF`, opacity 72%。
  - 数字框：22 x 22，圆角 6，背景 `rgba(255,255,255,0.32)`。
  - 数字：TikTok Text Medium, 12px, color `#FFFFFF`。
- More 入口：
  - 文案 11px，右对齐，color `#FFFFFF`, opacity 72%。
  - 箭头 icon 16 x 16。

### Progress 下挂内容规范

适用于 `progressNoTitle` 和 `progressWithTitle`。

- `下挂内容1`: width 294, height 50。
- `progress bar`: x 4, y 13, width 230, height 38。
- `说明文案`: width 196, height 18，TikTok Sans Regular, 14px, color `#000000`, opacity 48%，左对齐。
- `progress bar` 内部轨道：
  - container: width 230, height 20。
  - `进度条`: x 0, y 4, width 230, height 12。
  - `底`: width 230, height 12，背景 `rgba(0,0,0,0.08)`，圆角 16。
  - `进度`: x 1, y 1, height 10，当前示例 width 166，圆角 100，渐变橙黄。
  - `粒子特效`: x 1, y 0, width 195.9996, height 20。Figma 使用组件实例时保留该层；代码实现中不需要增加 `asset-progress-shine` 或额外光点 DOM/CSS。
- `利益点icon`: x 228, y 0, width 62, height 50。
  - `AssetIcon`: x 6, y 0, width 50, height 50，默认保留 Figma 原金币/资产图片。
  - `胶囊`: x 0, y 32, width 62, height 18，背景 `#FFF8B8`，圆角 32。
  - `Point Number`: 默认承载 `10,000円分`，字体 TikTok Sans Bold, 10px, color `#3C271F`。

### 可配置范围

- 可替换：
  - 文案：资产标题、金额、币种、按钮文案、进度说明、门槛文案、倒计时文案、More 文案。
  - 图片：头像、门槛奖励 icon。默认必须使用 Figma 原图片；只有业务明确提供替换图片时才替换。
  - 行为：按钮点击、More 点击、未达标 toast、达标跳转。
  - 状态：资产进度、倒计时数值、loading/expired/ready。
- 不可随意修改：
  - 外层尺寸、圆角、padding、内部区域 x/y。
  - 头像尺寸。
  - 默认头像和默认金币/资产 icon 的素材来源；不得在单个项目中用 CSS 或生成图重做默认素材。
  - 按钮尺寸 78 x 28。
  - 进度条轨道 230 x 12。
  - Figma 组件内 `粒子特效` 的颜色、透明度、尺寸、内部样式。
  - `AssetIcon` 默认尺寸 50 x 50。
  - `More` 箭头 icon 尺寸 16 x 16。

### 状态建议

| State | 推荐 Variant | 行为 |
| --- | --- | --- |
| `assetThresholdInProgress` | `progressNoTitle` 或 `progressWithTitle` | 存在明确资产/提现/兑换/领取门槛但尚未达标；点击按钮 toast `未达到操作条件`，进度条展示资产门槛当前进度。 |
| `assetThresholdReady` | `progressWithTitle` | 资产/提现/兑换/领取门槛已达标；点击按钮跳转目标页或打开操作弹层，进度应接近或达到 100%。 |
| `noAssetThreshold` | `noProgressWithTitle` | 无资产门槛要求时使用；不得展示进度条。 |
| `expiring` | `noProgressWithTitle` | 展示倒计时，点击按钮可进入查看/操作页，点击 More 查看更多资产或任务。 |
| `expired` | `noProgressWithTitle` | 倒计时归零后按钮可置灰或跳转到失效说明页，需由业务配置决定。 |
| `loading` | 当前 Variant 骨架态 | 保持布局尺寸不变，金额和倒计时可使用 loading 占位。 |

### Interaction

```ts
function handleAssetActionClick() {
  if (assetState === "loading") return;

  if (assetState !== "ready") {
    showToast("未达到操作条件");
    return;
  }

  window.location.href = actionUrl;
}

function handleMoreClick() {
  onMoreClick?.();
}
```

### QA

- Figma 搭页必须拖入组件实例，不重新绘制。
- 根据业务状态选择正确变体，不用颜色手动改出另一个变体。
- 资产组件自身不得添加投影；如果页面需要层次，也必须优先通过背景对比或间距解决。
- 头像替换后仍保持 36 x 36。
- 门槛奖励 icon 替换后仍保持 50 x 50。
- 进度条轨道固定 230 x 12，进度高度固定 10。
- Figma 组件内 `粒子特效` 不得改色、缩放或拆开；代码实现不要额外绘制 `asset-progress-shine` 光点层。
- 金额、按钮文案、进度说明、倒计时文案不得溢出或遮挡。
- 金额、倒计时标题、More 文案不得换行、不得省略、不得被固定示例宽度裁切。
- `noProgressWithTitle` 中倒计时数字必须保持 2 位展示。
- `noProgressWithTitle` 中 More 入口必须可点击，并保留 16 x 16 箭头。
- 未达标点击按钮必须反馈 toast；达标点击按钮必须进入配置的目标链路。

## 组件 Figma 链接

- 资产组件源区: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-11976&t=ox7bV00bMlINi02A-4
- 有进度无标题: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=441-2491&t=ox7bV00bMlINi02A-4
- 有进度有标题: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=441-2659&t=ox7bV00bMlINi02A-4
- 无进度有标题: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=441-2626&t=ox7bV00bMlINi02A-4
