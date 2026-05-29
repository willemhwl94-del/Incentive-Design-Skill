# 组件名称

`ContributionModule` / `进贡组件`

## 组件功能

用于展示好友助力、进贡、任务贡献、签到或奖励进度列表。常见于拉新、邀请和任务型活动，用来表现用户已经获得或还可获得的奖励路径。

## 配置项

### 文字

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `title` | string | yes | - | 模块标题。 |
| `summaryText` | string | no | - | 总奖励、已获得奖励或说明文案。 |
| `items[].title` | string | yes | - | 单项任务/好友/日期文案。 |
| `items[].subtitle` | string | no | - | 状态、说明或未完成原因。 |
| `items[].rewardText` | string | no | - | 奖励值。 |
| `viewMoreText` | string | no | `View more` | 展开更多文案。 |

### 图片

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `items[].avatar` | image | no | default avatar | 好友头像或任务图标。 |
| `items[].rewardIcon` | image | no | component default | 奖励图标。 |

### 交互行为

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `onItemAction` | function | no | - | 点击单项任务按钮。 |
| `onViewMore` | function | no | - | 展开更多。 |
| `expanded` | boolean | no | false | 是否展开列表。 |

## 组件规范

### Layout

- Figma section: `进贡组件`.
- Confirmed frame: `有进贡`, width 358, height 513.
- 具体内部结构后续按 Figma 子组件继续拆解为列表项、奖励数字、任务按钮、日期/宝箱节点。

### Visual Lock

- 列表项、奖励数字、进度节点等子组件应优先作为实例使用。
- 不按页面主题重绘任务列表基础结构。
- 可替换文字、头像、奖励值和支持的状态。

### States

- Has contribution
- Empty/no contribution
- Collapsed
- Expanded
- Task actionable
- Task completed

### QA

- 奖励数字不能被头像或按钮遮挡。
- 展开/收起不应改变外部页面关键 CTA 的位置，除非框架明确允许滚动。
- 后续需要继续补齐每个子组件的 Figma 链接和配置项。

## 组件 Figma 链接

- Section: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=332-18917
- 有进贡: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=332-19278
