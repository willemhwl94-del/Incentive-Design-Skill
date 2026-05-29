# 组件名称

`TaskList` / `任务列表组件`

## 组件功能

用于活动页展示每日任务列表，承接“任务标题 → 奖励感知 → 行动按钮 → 进度/邀请补充信息”的转化链路。适合日常任务、观看进度任务、邀请任务等轻量任务区。

Figma source:
- Section: `680:787`
- Main frame: `680:3521`
- Simple task: `680:3970`
- Progress task: `680:4006`
- Invite task: `680:4156`

## 配置项

### 文字

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `title` | string | yes | 标题，默认 `Daily Task`。 |
| `subtitle` | string | yes | 副标题，默认 `Updated everyday 24:00`。 |
| `tasks[].title` | string | yes | 任务标题。 |
| `tasks[].rewardText` | string | conditional | 简单任务/进度任务的奖励数值。 |
| `tasks[].description` | string | conditional | 简单任务的补充说明。 |
| `tasks[].actionLabel` | string | yes | 右侧按钮文案。 |
| `tasks[].steps[].label` | string | conditional | 进度任务节点文案，如 `5min`。 |
| `tasks[].steps[].reward` | string | conditional | 进度任务节点奖励数值。 |
| `tasks[].inviteRewards[].label` | string | conditional | 邀请权益卡的用户角色文案。 |
| `tasks[].inviteRewards[].value` | string | conditional | 邀请权益卡的奖励文案。 |

### 图片

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `headerIconImage` | image | no | 标题区右侧 100 x 72 图像槽。可根据页面风格替换，但尺寸不变。 |
| `mediumIconImage` | image | conditional | 任务奖励介质 icon，必须与页面进度卡和养成动作使用同一张图。 |
| `inviteRewards[].avatar` | image | no | 邀请权益卡头像槽，36 x 36。 |

### 交互行为

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `onTaskAction` | function | yes | 点击任务按钮后的行为。 |
| `tasks[].status` | enum | yes | `available`, `completed`, `claimed`, `locked`。 |
| `tasks[].type` | enum | yes | `simple`, `progress`, `invite`。 |

## 组件规范

### Layout

- 外层组件：width `358`, height `495`。
- 外层圆角：top-left `16`, top-right `60`, bottom-right `16`, bottom-left `16`。
- 标题区：width `358`, height `72`。
- 标题文案组：x `20`, y `13.5`, width `222`, height `45`。
- 标题右侧图片槽：x `258`, y `0`, width `100`, height `72`。
- 内容区：x `0`, y `72`, width `358`, height `423`。
- 每个任务内容内宽：`318`，左右边距 `20`。
- 简单任务：width `358`, height `108`。
- 进度条任务：width `358`, height `161`。
- 邀请任务：width `358`, height `154`。
- 任务状态区：x `20`, y `24`, width `318`, height `36-40`。
- 任务按钮：width `80`, height `32`，相对内容区 x `238`, y `0`。
- 行分割线：width `318`, height `1`，x `20`，贴每个任务底部。
- 进度任务节点区：x `20`, y `80`, width `318`, height `57`。
- 邀请权益卡：x `20`, y `76`, width `318`, height `54`。

### Typography

- 标题：20px / 25px / 700。
- 副标题：12px / 16px / 400。
- 任务标题：14px / 18px / 600。
- 奖励数值：14px / 18px / 700 或 600。
- 进度节点文案：10px / 13px / 400。
- 按钮文案：13px / 17px / 600。
- Letter spacing is `0`.

### Visual Lock

- 布局尺寸必须严格参照 Figma，不随页面主题重排。
- 允许根据页面视觉风格调整颜色、币/奖励图像、头像图像和标题区右侧图片。
- 同一页面内任务奖励、进度卡、养成动作必须使用统一介质 icon 和介质命名。
- 不允许改变外层尺寸、任务行高度、任务按钮尺寸、内容内宽、分割线位置、进度节点区尺寸。
- 不允许把任务按钮改成全宽 CTA。

### States

- `available`: 可点击任务按钮。
- `claimed`: 按钮展示完成态，不改变尺寸。
- `locked`: 按钮禁用，不改变尺寸。
- `progress`: 展示进度节点和进度线。

### QA

- 外层必须保持 `358 x 495`。
- 标题区必须保持 `72` 高。
- 三个默认任务行高度总和必须为 `423`。
- 任务按钮必须保持 `80 x 32`。
- 所有任务标题、奖励和按钮文案不得溢出遮挡。
- 颜色和图片换肤后仍需保留 Figma 布局尺寸。
