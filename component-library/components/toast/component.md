# 组件名称

`Toast` / `Toast组件`

## 组件功能

用于在页面操作后给出短时反馈，例如抽奖次数增加、开始抽奖、分享成功、复制成功、未达到提现条件等。Toast 是轻量反馈组件，不承载页面跳转，也不承载明确领奖结果。

## 配置项

### 文字

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `message` | string | yes | - | Toast 文案。优先使用单行展示；只有单行宽度超过最大宽度时，才使用两行样式。 |

### 图片

无图片配置项。

### 交互行为

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `visible` | boolean | yes | 控制 Toast 展示/隐藏。 |
| `duration` | number | no | 自动消失时间，由业务实现控制；不影响 Figma 组件样式。 |

## 组件规范

### Variants

| Variant | Figma node | Size | Usage |
| --- | --- | --- | --- |
| `toast/one_row` | `481:4093` | 108-245 x 51 | 单行文案，宽度按文字长度自适应。 |
| `toast/two_row` | `481:4100` | 245 x 72 | 单行超过 245 时使用，两行折行展示。 |

### Layout

- Toast 在页面中竖直居中展示。
- 最小宽度：108。
- 最大宽度：245。
- 单行 Toast：
  - width 根据文字长度自适应，最小 108，最大 245。
  - 计算规则：`width = clamp(textWidth + 48, 108, 245)`。
  - 只要一行可以完整展示，就必须使用单行 Toast。
  - height 51。
  - padding left/right 24, top/bottom 15。
  - 文案单行居中，不换行。
- 双行 Toast：
  - width 245, height 72。
  - 文案区域 x 24, y 15, width 197, height 42。
  - 只有 `textWidth + 48 > 245` 时才使用。
  - 文案在 197 宽度内折行，居中展示。

### Visual Lock

- 背景颜色：`rgba(0,0,0,0.75)`，不可改。
- 圆角：14px，不可改。
- 字体：PingFang SC Regular。
- 字号：15px。
- 行高：21px。
- 字色：`#FFFFFF`，不可改。
- 除文案内容、可见状态、单行 Toast 的自适应宽度外，颜色、高度、圆角、padding、字体、行高全部不能改。
- Figma 搭建页面或交互链路时，如果需要 Toast，必须使用 Toast 组件实例，不要手绘。
- 当用户通过抽奖、开盒、转盘、刮奖、任务领取等行为获得明确奖励时，不得使用 Toast；必须使用 `Dialog` 弹窗组件展示奖励金额或 Points 数。

### QA

- Toast 必须竖直居中。
- 宽度不得小于 108，不得大于 245。
- 一行能展示完整文案时，不得使用两行样式。
- 单行文案不应被压缩或裁切。
- 只有单行宽度超过 245 时，才使用双行样式，并在 245 宽度内折行。
- 不得改变背景透明度、圆角、字体、字号、行高和颜色。
- 抽奖领奖、开盒到账、转盘中奖、任务奖励领取等结果反馈不得只用 Toast。

## 组件 Figma 链接

- Toast 组件区: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=481-3532&t=ox7bV00bMlINi02A-4
- `toast/one_row`: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=481-4093&t=ox7bV00bMlINi02A-4
- `toast/two_row`: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=481-4100&t=ox7bV00bMlINi02A-4
