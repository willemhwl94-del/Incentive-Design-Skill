# 组件名称

`PrimaryTitle` / `活动主标题`

## 组件功能

用于活动页首屏建立活动识别和核心利益点，是页面头部优先级最高的视觉标题。通常承载活动名称、玩法主题或主奖励诉求，例如 `SAMBA FOOTBALL / LUCKY SPIN`。

## 配置项

### 文字

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `title` | string | yes | - | 活动主标题，用于图片 `alt`、无障碍说明或 live text 版本。 |
| `titleLines` | string[] | no | - | 当标题用 live text 绘制时，可配置多行标题。 |

### 图片

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `titleAssetUrl` | image | recommended | - | 装饰性活动标题图。插画活动页默认使用标题图，而不是 live HTML 文本。 |

### 交互行为

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `onTitleClick` | function | no | 标题默认不可点击；仅当业务明确需要时配置。 |

## 组件规范

- 标题默认使用图片资产承载，保持为单个图片元素，使用 `object-fit: contain` 保持原始比例。
- 标题必须是头部区域最大的文字或文字图形。
- 标题内容必须完整可见，不得被资产卡、倒计时、玩法素材、按钮、背景装饰或其他页面元素遮挡。
- 在页面层级中，标题文字内容应位于活动视觉元素的最上层；如果标题图和其他模块发生视觉重叠，标题图的文字层必须压在上方。
- 标题容器可以设置 `pointer-events: none`，避免高层级标题阻挡导航、按钮或玩法区域点击。
- 背景装饰可以位于标题后方，但不得穿过、覆盖或削弱标题文字识别。
- 如果使用 SVG 标题图，SVG 内部文本层必须排在装饰底板、光效、图案之后，确保同一 SVG 内文本不被遮挡。
- 对于 `single-gameplay-conversion-page` 的固定画布布局，标题容器默认 top 为 60px；如果有 Figma 坐标，以 Figma 坐标为准。
- 标题与倒计时/二级信息的视觉间距默认 0px；倒计时与资产组件默认保持 4px 间距。

### 层级建议

| Layer | 推荐层级 | Notes |
| --- | --- | --- |
| Background scene | lowest | 背景全屏氛围图。 |
| Asset / gameplay / bottom actions | middle | 转化模块和玩法模块。 |
| `PrimaryTitle` text/art | highest visual layer | 标题文字不得被其他活动元素遮挡。 |
| Navigation | app shell | 如果标题和导航重叠，需同时保证导航可点击；可通过 `pointer-events: none` 处理标题图点击穿透。 |

## 组件 Figma 链接

Figma source: pending。

当前组件以页面结构规范为主；当组件库中补充正式标题组件后，应记录对应 Figma component node，并在搭建 Figma 页面时优先使用组件实例。
