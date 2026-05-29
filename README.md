# Incentive Design Skill

面向移动端激励活动页的可复用设计与构建 Skill。它不是某一个活动页面项目，而是一套给 AI Agent 使用的活动页生产知识库：包含活动策略拆解、页面框架、组件契约、Figma 还原规则、视觉资产规则、H5 实现规范和 QA 清单。

这个仓库可以被 Codex 使用，也可以被 Claude Code、Cursor Agent、Cline、Continue、自研 Agent、脚本化构建器或任何能读取本地文件的 AI 编码 Agent 使用。

默认产物是移动端 H5 活动页。除非用户明确要求 React、Vue、Tailwind 或其他技术栈，否则优先使用原生 HTML/CSS/JavaScript。

## 适用场景

适合用于：

- 沉睡用户召回活动
- 新用户激励活动
- 每日任务 / 签到 / 浏览任务活动
- 邀请裂变和好友助力活动
- 抽奖、盲盒、转盘、刮刮卡等玩法页
- 进度积累、提现、积分兑换活动
- 陪伴养成、储蓄罐、成长路径类长周期活动

不适合用于：

- 纯品牌长文页
- 无激励机制的普通营销落地页
- 完全依赖后端复杂状态机的生产系统
- 已经有完整产品设计系统且不能使用本仓库组件规范的项目

## 给 Agent 的使用方式

不同 Agent 不需要“安装”这个仓库才能使用它。只要能读取文件，就可以把它当作活动页设计与代码生成规范。

### Codex 使用方式

Codex 会自动读取 `AGENTS.md`。在开始创建、重构或评审活动页前，应优先阅读：

```txt
AGENTS.md
skills/vibe-activity-page/SKILL.md
```

如果用户只给一句业务需求，按完整链路执行：

```txt
docs/campaign-skill-suite-protocol.md
skills/campaign-build-orchestrator/SKILL.md
skills/incentive-strategy-planner/SKILL.md
skills/vibe-activity-page/SKILL.md
```

### 其他 Agent 使用方式

对 Claude Code、Cursor Agent、Cline、Continue 或自研 Agent，可以在系统提示词或项目规则里加入：

```txt
你正在使用 Incentive Design Skill 仓库。
在创建、修改或评审移动端激励活动页前，先读取：
1. AGENTS.md
2. skills/vibe-activity-page/SKILL.md
3. skills/vibe-activity-page/references/components.md
4. 对应页面框架文件，例如：
   skills/vibe-activity-page/references/page-structures/nurture-progress-conversion-page.md

默认输出 H5 页面。
新活动案例不要写入 Skill 仓库，必须创建在：
/Users/bytedance/Documents/Incentive Page Cases/{case-name}/

开发任何模块前，先检查 component-library/components/。
业务数据必须放在页面 config 中。
组件尺寸和 Figma 约束以 component-library/components/{component}/component.md 为准。
```

如果 Agent 不支持多文件自动检索，可以把以下最小上下文喂给它：

```txt
AGENTS.md
skills/vibe-activity-page/SKILL.md
skills/vibe-activity-page/references/components.md
目标页面框架 markdown
需要使用的组件 component.md
```

### 自研 Agent 集成方式

自研 Agent 可以把本仓库当作三层知识库：

```txt
Request Layer
  contracts/
  docs/campaign-skill-suite-protocol.md

Planning Layer
  skills/campaign-build-orchestrator/
  skills/incentive-strategy-planner/

Page Build Layer
  skills/vibe-activity-page/
  component-library/components/
```

推荐执行顺序：

1. 将用户自然语言需求转成 `CampaignRequest`。
2. 用 `incentive-strategy-planner` 生成 `StrategyBrief`。
3. 用 `vibe-activity-page` 选择页面框架并生成 `PageBuildSpec`。
4. 根据 `PageBuildSpec.component_map` 读取组件库。
5. 在外部 case 目录生成 H5 页面。
6. 按 QA checklist 校验。

## 核心原则

- **组件优先**：开发任何页面模块前，先查 `component-library/components/`。
- **配置驱动**：文案、奖励、阈值、任务、图片、按钮、计时器和主题值必须放在页面 config 中。
- **框架先行**：先选页面框架，再设计首屏和交互细节。
- **主链路完整**：页面必须实现进入、点击、反馈、状态变化和最终转化。
- **H5 默认**：默认使用原生 HTML/CSS/JavaScript。
- **案例外置**：新活动案例创建在 `/Users/bytedance/Documents/Incentive Page Cases/{case-name}/`，不要放进 Skill 仓库。
- **PNG 优先**：背景、主视觉、玩法对象、贴纸、装饰图默认 PNG；SVG 只用于图标。
- **Figma 尺寸尊重**：Figma 严格组件必须保持尺寸、行高、按钮尺寸和内容槽位。

## 目录结构

```txt
.
├── AGENTS.md
├── README.md
├── component-library/
│   ├── README.md
│   ├── _component-template.md
│   └── components/
├── contracts/
│   ├── campaign-request.schema.json
│   ├── strategy-brief.schema.json
│   └── page-build-spec.schema.json
├── docs/
│   └── campaign-skill-suite-protocol.md
├── examples/
│   └── h5/
├── fixtures/
└── skills/
    ├── campaign-build-orchestrator/
    ├── incentive-strategy-planner/
    ├── vibe-activity-page/
    └── figma-main-flow-annotator/
```

## 默认工作流

当用户只给一句业务需求时，推荐使用完整链路：

```txt
User Request
↓
CampaignRequest
↓
StrategyBrief
↓
PageBuildSpec
↓
H5 Page
↓
QA
```

### CampaignRequest

结构化用户原始需求，典型字段包括：

- 地区
- 目标用户
- 业务目标
- 活动类型
- 限制条件

Schema：

```txt
contracts/campaign-request.schema.json
```

### StrategyBrief

定义玩法策略，典型内容包括：

- 活动目标
- 用户心理抓手
- 核心玩法
- 奖励结构
- 周期建议
- 页面结构建议

Schema：

```txt
contracts/strategy-brief.schema.json
```

### PageBuildSpec

定义页面实现规格，典型内容包括：

- 页面框架
- 组件映射
- 主链路状态
- 资源生成计划
- QA 要求
- 实现文件清单

Schema：

```txt
contracts/page-build-spec.schema.json
```

## 主要 Skill

### campaign-build-orchestrator

负责把一句自然语言需求转成 `CampaignRequest`，并协调后续 skill。

路径：

```txt
skills/campaign-build-orchestrator/SKILL.md
```

### incentive-strategy-planner

负责活动策略设计，输出 `StrategyBrief`。

路径：

```txt
skills/incentive-strategy-planner/SKILL.md
```

### vibe-activity-page

负责页面框架选择、组件映射、H5 实现和 QA。

路径：

```txt
skills/vibe-activity-page/SKILL.md
```

### figma-main-flow-annotator

负责将页面主链路转成 Figma 中可读的流程标注。

路径：

```txt
skills/figma-main-flow-annotator/SKILL.md
```

## 页面框架

页面框架在：

```txt
skills/vibe-activity-page/references/page-structures/
```

当前重点框架：

| Framework | 用途 |
| --- | --- |
| `single-gameplay-conversion-page` | 单玩法转化页，适合转盘、盲盒、开盒、刮卡、抽奖机 |
| `progress-accumulation-conversion-page` | 进度积累页，适合提现、积分、进度容器 |
| `nurture-progress-conversion-page` | 陪伴养成页，适合召回、长周期回访、角色成长 |

## 组件库概览

组件库在：

```txt
component-library/components/
```

组件库不是 UI 框架，而是一组活动页常用模块的契约和轻量 H5 runtime。Agent 使用时应先读取组件自己的 `component.md`，再决定如何复用。

| Component | 说明 | 实现原理 |
| --- | --- | --- |
| `top-navigation` | 活动页顶部导航栏 | Web Component：`<incentive-top-navigation>` 生成状态栏、返回按钮、右侧动作 |
| `task-list` | 每日任务列表 | Web Component：`<incentive-task-list>` 接收 config，按 Figma 锁定结构渲染 simple/progress/invite 任务 |
| `share-panel` | 分享面板 | H5 组件，承载分享渠道、复制链接、分享图预览 |
| `dialog` | 强反馈弹窗 | 奖励、领取、抽奖结果等使用的结果反馈容器 |
| `toast` | 轻反馈提示 | 操作成功、失败、轻量状态提示 |
| `asset-card` | 资产 / 奖励 / 进度卡 | 展示余额、阈值、奖励状态或进度状态 |
| `primary-title` | 活动主标题 | 承载标题图或强视觉标题区域 |
| `bottom-action-triple` | 底部行动区 | 一到三个 CTA 的底部行动组合 |
| `contribution-module` | 好友助力 / 贡献模块 | 展示好友贡献、助力进度或协作行为 |

### 组件实现原则

- 组件的尺寸、状态、Figma 来源写在 `component.md`。
- H5 runtime 使用原生 Web Component 或普通 CSS/JS，不依赖 React。
- 页面只传 config 和监听事件，不直接改组件内部 DOM。
- 组件允许换肤，但不允许破坏 Figma 锁定尺寸。
- 如果组件来自 Figma frame，按 frame 结构还原，不强行转为别的抽象。

### TaskList 简要说明

`task-list` 是当前重点沉淀组件。

路径：

```txt
component-library/components/task-list/
```

使用方式：

```html
<link rel="stylesheet" href="../../component-library/components/task-list/task-list.css" />
<script src="../../component-library/components/task-list/task-list.js"></script>
<incentive-task-list></incentive-task-list>
```

配置方式：

```js
const taskList = document.querySelector("incentive-task-list");

taskList.config = {
  title: "Daily Task",
  subtitle: "Updated everyday 24:00",
  mediumIconImage: "./assets/reward-icon.png",
  tasks: [
    {
      id: "bonus",
      type: "simple",
      title: "Get Bonus every 20 mins",
      rewardAmount: 3,
      description: "Up to 10 times a day.",
      status: "available",
      actionLabel: "Claim"
    }
  ]
};

taskList.addEventListener("task-list-action", (event) => {
  const taskId = event.detail.taskId;
});
```

详细尺寸和 Figma 锁定规则见：

```txt
component-library/components/task-list/component.md
```

## 示例模块：巴西开 5 个盒子

这个示例用于说明 Agent 如何把一句需求转成页面结构。图片可以后续补齐，当前只定义框架、配置和交互。

### 用户需求

```txt
帮我做一个巴西活动页，用户每天可以开 5 个盒子，完成任务获得开盒机会，每个盒子可能开出积分或优惠券。
```

### 推荐页面框架

使用：

```txt
single-gameplay-conversion-page
```

原因：

- 主玩法是“开盒子”，属于单核心玩法。
- 页面目标是让用户消耗机会并获得奖励结果。
- 任务只是补充机会，不是主页面主体。

### 主链路

```txt
用户进入页面
↓
看到今日剩余开盒次数 5
↓
点击一个未开启盒子
↓
盒子播放打开反馈
↓
弹出奖励 Dialog
↓
剩余次数 -1
↓
用户继续打开下一个盒子
↓
次数耗尽后引导完成任务获得更多机会
```

### 页面模块

```txt
TopNavigation
Hero / Title Area
Chance Status Card
Box Gameplay Area
Reward Dialog
TaskList
Toast
```

### 配置示例

```js
const campaignConfig = {
  campaignId: "br-open-five-boxes-v1",
  region: "BR",
  title: "Open Your Lucky Boxes",
  subtitle: "Open up to 5 boxes today.",
  maxDailyOpens: 5,
  initialChances: 5,
  rewardUnit: "Coins",
  assets: {
    backgroundImage: "./assets/bg-brazil-boxes.png",
    titleImage: "./assets/title-open-boxes.png",
    boxClosedImage: "./assets/box-closed.png",
    boxOpenedImage: "./assets/box-opened.png",
    rewardIconImage: "./assets/reward-icon.png"
  },
  boxes: [
    { id: "box-1", state: "closed" },
    { id: "box-2", state: "closed" },
    { id: "box-3", state: "closed" },
    { id: "box-4", state: "closed" },
    { id: "box-5", state: "closed" }
  ],
  rewards: [
    { id: "coins-small", label: "100 Coins", amount: 100, type: "coins" },
    { id: "coins-mid", label: "300 Coins", amount: 300, type: "coins" },
    { id: "coupon", label: "Special Coupon", amount: 1, type: "coupon" }
  ],
  tasks: [
    {
      id: "watch",
      type: "progress",
      title: "Watch videos to get",
      rewardAmount: 1,
      progress: 0.2,
      steps: [
        { label: "5min", reward: "1", reached: false },
        { label: "10min", reward: "1", reached: false },
        { label: "30min", reward: "1", reached: false },
        { label: "60min", reward: "1", reached: false }
      ],
      status: "available",
      actionLabel: "Watch"
    },
    {
      id: "invite",
      type: "invite",
      title: "Invite friends to earn boxes",
      inviteRewards: [
        { label: "Yourself", value: "+1", avatar: "self" },
        { label: "Your friend", value: "+1", avatar: "friend" }
      ],
      status: "available",
      actionLabel: "Invite"
    }
  ]
};
```

### 状态模型示例

```js
const state = {
  chances: campaignConfig.initialChances,
  openedBoxIds: new Set(),
  lastReward: null,
  taskStatuses: Object.fromEntries(
    campaignConfig.tasks.map((task) => [task.id, task.status])
  )
};
```

### 交互规则

- `chances > 0` 时，未开启盒子可点击。
- 点击盒子后，该盒子状态从 `closed` 变为 `opened`。
- 每次开盒消耗 1 次机会。
- 开盒结果使用 `Dialog`，不能只用 Toast。
- `chances === 0` 时，盒子点击展示 Toast，引导完成任务。
- 完成任务后增加开盒机会。
- 5 个盒子必须保持固定布局，不因奖励结果或文案变化跳动。

### 图片占位

后续补图时建议准备：

```txt
assets/bg-brazil-boxes.png
assets/title-open-boxes.png
assets/box-closed.png
assets/box-opened.png
assets/reward-icon.png
```

要求：

- 背景、标题、盒子图使用 PNG。
- 盒子关闭和打开状态应同画布、同展示尺寸。
- 盒子图不要带文字，奖励文案由 HTML 渲染。
- 巴西视觉可以使用热带、节庆、足球、桑巴等元素，但不要让背景干扰盒子点击区域。

### QA 要点

- 首屏能看到剩余开盒次数和至少 3 个盒子。
- 5 个盒子点击热区清晰。
- 开盒后对应盒子状态真实变化。
- 奖励 Dialog 明确展示奖励。
- 次数用尽后有明确任务引导。
- TaskList 使用组件库，不手写任务列表。
- 320px 和 390px 下无横向滚动。

## 活动页代码放置规则

不要把新的可运行活动案例放进 Skill 仓库。

新活动页应创建在：

```txt
/Users/bytedance/Documents/Incentive Page Cases/{case-name}/
```

推荐结构：

```txt
case-name/
├── index.html
├── styles.css
├── script.js
└── assets/
```

Skill 仓库只保留：

- 组件库
- 框架规则
- 视觉规范
- contracts
- fixtures
- curated examples

## Figma 使用规则

当用户提供 Figma 链接时：

1. 先读取 Figma 节点上下文。
2. 如果用户要求严格参考组件，继续读取具体子层节点。
3. Figma 组件若来源是 `FRAME`，按 frame 结构和尺寸实现。
4. 颜色、图片可以按页面视觉风格换肤，但布局尺寸必须遵守组件契约。
5. 组件沉淀后更新 `component-library/components/{component}/component.md`。

## 视觉资产规则

- 背景、主视觉、玩法对象、贴纸、装饰图默认 PNG。
- SVG 只用于图标。
- 透明角色图可以通过 chroma-key 背景生成后本地扣图。
- 项目引用的图片必须复制到目标项目或组件目录。
- 同一对象的多状态图片必须同画布、同展示尺寸，避免状态变化时页面跳动。

## QA Checklist

交付前至少检查：

- 页面主链路是否完整。
- 首屏是否说明用户是谁、进度在哪、今天做什么、做完得到什么。
- 组件是否来自组件库或已记录 gap。
- 导航栏是否使用 `<incentive-top-navigation>`。
- 任务列表是否使用 `<incentive-task-list>` 或遵循其组件契约。
- Navigation icons 是否在 `32 x 32` 按钮中视觉居中。
- 玩法状态变化是否真实可见。
- 奖励结果是否使用 Dialog。
- 轻反馈是否使用 Toast。
- 320px / 390px 下是否无横向滚动。
- 文案是否没有溢出或遮挡。

## 当前已发布仓库

```txt
https://github.com/willemhwl94-del/Incentive-Design-Skill
```

## 维护建议

- 新增可复用组件时，创建 `component.md`。
- 从页面中沉淀组件后，移除页面私有重复实现。
- 页面框架只描述结构和链路，不复制组件内部尺寸。
- 组件内部尺寸归组件库维护。
- 每次发现 Figma 还原偏差，都要回写到组件规范或 QA checklist。
