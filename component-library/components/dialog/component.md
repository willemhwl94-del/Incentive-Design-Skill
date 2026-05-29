# 组件名称

`Dialog` / `弹窗组件`

## 组件功能

用于承载需要用户明确感知和确认的高强度反馈或阻断动作，例如抽奖获得奖励、登录确认、领取成功、风控提示等。

弹窗组件包含 2 种类型：

| Type | 组件类型 | 使用场景 | Figma Node |
| --- | --- | --- | --- |
| `withoutImage` | 无图弹窗 | 只需要标题、说明和一个主按钮的确认场景。 | `521:17760` |
| `withImage` | 有图弹窗 | 需要展示奖励图标、奖励数值、活动图或核心结果内容的场景。 | `521:22331` |

## 配置项

### 文字

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `type` | `withoutImage \| withImage` | yes | - | 选择弹窗类型。 |
| `title` | string | yes | Figma default | 主标题，必须居中展示。 |
| `description` | string | no | Figma default | 说明文案，必须居中展示。 |
| `primaryActionLabel` | string | yes | `OK` | 主按钮文案。 |
| `rewardValue` | string | conditional | - | 有图弹窗中奖励或收益数值，例如 `1,000`、`+173 Points`。 |
| `rewardUnit` | string | no | - | 奖励单位可并入 `rewardValue`，也可作为辅助文案展示。 |

### 图片

| Field | Type | Required | Variant | Figma Layer | Size | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `image` | image | no | `withImage` | `Customize Section` | 252 x 38 slot | 可用于奖励 icon、活动图或结果视觉。替换内容时不改变 slot 尺寸和对齐。 |
| `rewardIconImage` | image | no | `withImage` | `Building Blocks/Coin icon` | 32 x 32 | 奖励 icon。Icon 可使用 SVG；非 icon 图片必须使用 PNG。 |
| `closeIcon` | icon | no | all | `Icon/X_Mark_Fill_Small` | 24 x 24 | 关闭 icon 属于组件结构，项目使用时通常不替换。 |

### 交互行为

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `visible` | boolean | yes | 控制弹窗展示/隐藏。 |
| `onPrimaryAction` | function | yes | 点击主按钮后的行为。 |
| `onClose` | function | no | 点击底部关闭按钮后的行为。 |
| `closeOnMaskClick` | boolean | no | 默认 `false`。强结果反馈不建议点击遮罩关闭。 |

## 组件规范

### Variants

| Variant | Figma node | Canvas | Dialog size | Card size | Usage |
| --- | --- | --- | --- | --- | --- |
| `withoutImage` | `521:17760` | 390 x 844 | 300 x 273 | 300 x 221 | 标题 + 说明 + 主按钮。 |
| `withImage` | `521:22331` | 390 x 844 | 300 x 356 | 300 x 304 | 标题 + 说明 + 图片/奖励区 + 主按钮。 |

### Layout

- 弹窗覆盖完整 390 x 844 H5 画布。
- 遮罩：`rgba(0,0,0,0.85)`，覆盖全屏。
- Dialog 宽度固定 300，水平居中。
- Modal Card 宽度固定 300，背景白色，圆角 16px。
- Modal Card padding：top 40px，bottom 32px。
- Title Section：
  - width 300。
  - 左右 padding 24px。
  - 标题和说明间距 8px。
  - 文案居中。
- `withoutImage`：
  - Modal Card 高度 221。
  - Card 内内容区高度 149。
  - Title Section 后接 CTA Section。
- `withImage`：
  - Modal Card 高度 304。
  - 顶部 `_背景色` 高度 120，保留圆角 16px 16px 0 0。
  - Title Section 高度约 94。
  - Customize Section 位置固定，x: 24，width: 252，height: 38。
  - CTA Section 位于内容区底部，宽度 300，高度 48。
- CTA Section：
  - Dialog Action Group 左右 padding 20px。
  - 主按钮高度 48。
  - 主按钮使用 Capsule 形态。
- Bottom Section：
  - 位于 Modal Card 下方，间距 20px。
  - 关闭按钮外层 32 x 32。
  - 关闭 icon 24 x 24。

### Visual Lock

- 必须优先使用 Figma 组件实例，不重新绘制组件结构。
- 遮罩透明度、Dialog 宽度、Card 宽度、Card 圆角、padding、CTA 高度、Bottom Section 尺寸不可改。
- 标题字体：20px，line-height 1.25，font-weight 700，颜色 `#161823`。
- 描述字体：14px，line-height 1.3，font-weight 400，颜色 `rgba(0,0,0,0.65)`。
- 奖励数值字体：32px，line-height 1.2，font-weight 700，颜色默认 `#FF9500`，可根据活动奖励色轻微替换，但必须保持对比度。
- 项目可配置文案、奖励数值、奖励 icon / 图片和主按钮行为。
- Icon 可使用 SVG；背景图、活动图、玩法图、奖励插画等非 icon 图片必须使用 PNG。

### Reward Feedback Rule

- 当用户通过抽奖、开盒、转盘、刮奖、任务领取等行为获得明确奖励时，必须使用 `Dialog` 告知用户获得了多少奖励。
- 抽奖领奖反馈不得使用 `Toast` 替代。
- 中奖结果优先使用 `withImage`，并在 `rewardValue` 或标题/说明中明确写出奖励金额或 Points 数。
- `Toast` 只用于轻量过程反馈，例如分享成功、未达条件、复制成功、按钮不可用。

### States

- Hidden
- Open
- Primary action pressed
- Closing

### QA

- 弹窗打开时必须覆盖当前活动页内容，遮罩完整覆盖画布。
- Modal Card 必须居中，不能贴底、偏移或变成 bottom sheet。
- 有图弹窗必须保留 `Customize Section` 尺寸和位置。
- 奖励结果必须明确可读，不得只显示抽象成功文案。
- 抽奖/开盒/转盘等领奖动作不得只展示 Toast。
- 主按钮和关闭按钮均不得小于 32px 可视尺寸；主按钮点击区域高度必须为 48px。
- 文案不得溢出、裁切或遮挡奖励区和 CTA。

## 组件 Figma 链接

- Section: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=521-18039&t=ox7bV00bMlINi02A-4
- 无图弹窗: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=521-17760&t=ox7bV00bMlINi02A-4
- 有图弹窗: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=521-22331&t=ox7bV00bMlINi02A-4
