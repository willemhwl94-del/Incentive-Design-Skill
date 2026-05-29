# Incentive Design Skill

面向移动端激励活动页的 Codex Skill 仓库，用来沉淀活动策略、页面框架、组件规范、视觉规则和 H5 代码实现经验。

这个仓库不是单个活动项目，而是一套可复用的“活动页生产能力”。当用户提出一个召回、任务、抽奖、邀请、养成、进度积累等活动需求时，Codex 可以基于这里的规则完成从策略拆解到 H5 页面实现的完整流程。

## 适用场景

适合用于：

- 沉睡用户召回活动
- 新用户激励活动
- 每日任务 / 签到 / 浏览任务活动
- 邀请裂变和好友助力活动
- 抽奖、盲盒、转盘、刮刮卡等玩法页
- 进度积累、提现、积分兑换活动
- 陪伴养成、储蓄罐、成长路径类长周期活动

默认产物是移动端 H5 活动页。除非用户明确要求 React、Vue、Tailwind 或其他技术栈，否则优先使用原生 HTML/CSS/JavaScript。

## 核心原则

- **组件优先**：开发任何页面模块前，先查 `component-library/components/`，能复用组件就不新写。
- **配置驱动**：业务文案、奖励、阈值、任务、图片、按钮文案、计时器和主题值必须放在页面 config 中。
- **框架先行**：先选页面框架，再设计首屏和交互细节。
- **主链路完整**：页面不是静态 mock，必须实现从进入、点击、反馈、状态变化到最终转化的链路。
- **H5 默认**：活动页默认使用 H5，案例代码放到独立 case 目录，不放进 Skill 仓库。
- **视觉资产 PNG 优先**：背景、主视觉、玩法对象、贴纸、装饰图默认使用 PNG；SVG 只用于图标。
- **Figma 尺寸尊重**：来自 Figma 的严格组件必须保持原尺寸、行高、按钮尺寸和内容槽位。

## 目录结构

```txt
.
├── AGENTS.md
├── README.md
├── component-library/
│   ├── README.md
│   ├── _component-template.md
│   └── components/
│       ├── top-navigation/
│       ├── task-list/
│       ├── share-panel/
│       ├── dialog/
│       ├── toast/
│       ├── asset-card/
│       ├── primary-title/
│       ├── bottom-action-triple/
│       └── contribution-module/
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

当用户只给一句业务需求时，推荐走完整 campaign skill suite：

```txt
用户一句话需求
↓
campaign-build-orchestrator
↓
CampaignRequest
↓
incentive-strategy-planner
↓
StrategyBrief
↓
vibe-activity-page
↓
PageBuildSpec + H5 页面代码
```

每个阶段都通过 `contracts/` 中的 schema 交换信息，避免下游 skill 读取上游内部实现。

### 1. CampaignRequest

由 `campaign-build-orchestrator` 生成，负责把用户的自然语言需求转为结构化活动请求。

典型字段包括：

- 国家 / 地区
- 用户群体
- 业务目标
- 活动类型
- 约束条件

### 2. StrategyBrief

由 `incentive-strategy-planner` 生成，负责定义活动策略。

典型内容包括：

- 核心目标
- 用户心理抓手
- 玩法主链路
- 奖励结构
- 周期建议
- 页面结构建议

### 3. PageBuildSpec

由 `vibe-activity-page` 生成，负责把策略变成页面构建规格。

典型内容包括：

- 页面框架
- 组件映射
- 交互状态
- 资源生成计划
- QA 要求
- 最终实现文件

## 主要 Skill

### `campaign-build-orchestrator`

负责将用户的一句话需求转成 `CampaignRequest`，并协调后续 skill。

使用时机：

- 用户只说“帮我做一个 XX 活动”
- 需求还没有结构化
- 需要自动进入策略规划和页面实现链路

### `incentive-strategy-planner`

负责产出活动策略。

使用时机：

- 需要拆解玩法机制
- 需要设计奖励节奏
- 需要判断活动周期
- 需要生成 `StrategyBrief`

### `vibe-activity-page`

负责页面框架选择、组件映射、H5 代码实现和 QA。

使用时机：

- 创建、重构或评审活动页
- 将策略落成 H5 页面
- 从 Figma 组件恢复页面
- 沉淀新的页面框架或组件规范

关键入口：

```txt
skills/vibe-activity-page/SKILL.md
```

### `figma-main-flow-annotator`

负责将页面主链路整理成 Figma 中可读的流程标注。

使用时机：

- 需要在 Figma 中表达交互链路
- 需要把页面状态、点击路径和反馈状态连接起来

## 页面框架

页面框架存放在：

```txt
skills/vibe-activity-page/references/page-structures/
```

当前重点框架包括：

| Framework | 说明 |
| --- | --- |
| `single-gameplay-conversion-page` | 单玩法转化页，适合转盘、盲盒、刮刮卡、抽奖机等 |
| `progress-accumulation-conversion-page` | 进度积累页，适合提现、积分、进度容器 |
| `nurture-progress-conversion-page` | 陪伴养成页，适合召回、长周期回访、角色成长 |

### `nurture-progress-conversion-page`

这是陪伴养成型活动页框架，适合日本沉睡用户召回、低压力回访、每日轻任务、角色成长和阶段奖励。

核心链路：

```txt
用户进入页面
↓
看到陪伴 IP 和当前成长阶段
↓
完成轻任务获得养成介质
↓
消耗介质进行养成
↓
成长进度增加
↓
进度满格后 IP 进化并弹出奖励
↓
进度归 0，进入下一阶段
```

关键规则：

- IP 直接放在页面头部环境中，不放在卡片里。
- 头部环境背景图从页面顶部开始，导航栏覆盖在背景上。
- IP 建议有 3 个视觉等级：初始、成长、进化。
- 3 个等级图片必须同画布、同展示尺寸，升级只改变 IP 样式，不改变页面框架。
- IP 应使用轻量动态，如呼吸、漂浮、点击反馈、进化反馈。
- 介质余额放在主行动点附近，不放在进度卡里。
- 进度卡只记录 IP 成长阶段、下一次升级、剩余养成次数和奖励预览。
- 默认不添加 milestones 区块。
- 默认不添加 rules 区块。
- 默认不添加底部吸底导航。

## 组件库

组件库位于：

```txt
component-library/components/
```

使用规则：

1. 页面开发前必须先查组件库。
2. 有匹配组件时，页面必须复用组件或遵循组件契约。
3. 组件的详细尺寸、Figma 来源、视觉锁定和状态规则归组件自己的 `component.md` 管理。
4. 页面框架只引用组件，不复制组件的完整尺寸规范。

### TopNavigation

目录：

```txt
component-library/components/top-navigation/
```

文件：

- `component.md`
- `top-navigation.css`
- `top-navigation.js`
- `assets/music-note-s-alt.svg`
- `assets/music-note-s-alt-centered.svg`

使用方式：

```html
<link rel="stylesheet" href="../../component-library/components/top-navigation/top-navigation.css" />
<script src="../../component-library/components/top-navigation/top-navigation.js"></script>

<incentive-top-navigation variant="two-dark" title=""></incentive-top-navigation>
```

已支持变体：

| Variant | Figma node | 右侧动作 |
| --- | --- | --- |
| `two-dark` | `331:13611` | Music, Question |
| `two-light` | `331:13637` | Music, Question |
| `three-dark` | `331:13612` | Music, Share, More |
| `one-dark` | `404:13177` | More |

关键规则：

- 页面必须使用 `<incentive-top-navigation>`，不能手写导航 DOM。
- 页面可以监听 `top-navigation-back` 和 `top-navigation-action`。
- 页面不能查询或修改组件内部按钮。
- Music 图标使用 Figma 导出的 `Icon/Music_Note_S_Alt` vector path。
- Music 图标必须归一到居中的 `20 x 20` inline SVG canvas。
- 导航 icon 必须在 `32 x 32` 圆形按钮里视觉居中。
- 导航颜色来自 Figma 变体，不跟随活动主题重染。

事件示例：

```js
document.querySelector("incentive-top-navigation").addEventListener("top-navigation-action", (event) => {
  const action = event.detail.action;
  console.log(action);
});
```

### TaskList

目录：

```txt
component-library/components/task-list/
```

文件：

- `component.md`
- `task-list.css`
- `task-list.js`

Figma 来源：

- Section: `680:787`
- Main frame: `680:3521`
- Simple task: `680:3970`
- Progress task: `680:4006`
- Invite task: `680:4156`

使用方式：

```html
<link rel="stylesheet" href="../../component-library/components/task-list/task-list.css" />
<script src="../../component-library/components/task-list/task-list.js"></script>

<incentive-task-list></incentive-task-list>
```

配置示例：

```js
const taskList = document.querySelector("incentive-task-list");

taskList.config = {
  title: "Daily Task",
  subtitle: "Updated everyday 24:00",
  mediumIconImage: "./assets/growth-dew-icon.png",
  tasks: [
    {
      id: "bonus",
      type: "simple",
      title: "Get Bonus every 20 mins",
      rewardAmount: 3,
      description: "Up to 10 times a day.",
      status: "available",
      actionLabel: "Claim"
    },
    {
      id: "watch",
      type: "progress",
      title: "Watch videos to get",
      rewardAmount: 5,
      progress: 0.22,
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
      title: "Invite new friends to join TikTok",
      inviteRewards: [
        { label: "Yourself", value: "+4", avatar: "self" },
        { label: "Your friend", value: "+1", avatar: "friend" }
      ],
      status: "available",
      actionLabel: "Invite"
    }
  ]
};

taskList.addEventListener("task-list-action", (event) => {
  console.log(event.detail.taskId);
});
```

严格尺寸：

| Element | Size / Position |
| --- | --- |
| 外层组件 | `358 x 495` |
| 外层圆角 | `16 60 16 16` |
| 标题区 | `358 x 72` |
| 标题文案组 | `x 20, y 13.5, w 222, h 45` |
| 标题右侧图片槽 | `x 258, y 0, w 100, h 72` |
| 内容区 | `x 0, y 72, w 358, h 423` |
| 内容内宽 | `318` |
| 左右边距 | `20` |
| 简单任务 | `358 x 108` |
| 进度任务 | `358 x 161` |
| 邀请任务 | `358 x 154` |
| 任务状态区 | `x 20, y 24, w 318, h 36-40` |
| 按钮 | `80 x 32` |
| 简单任务描述 | `x 20, y 76` |
| 进度节点区 | `x 20, y 80, w 318, h 57` |
| 邀请权益卡 | `x 20, y 76, w 318, h 54` |

允许调整：

- 颜色
- 标题区右侧图片
- 奖励介质 icon
- 头像图片
- 按钮颜色

不允许调整：

- 外层尺寸
- 任务行高度
- 按钮尺寸
- 内容内宽
- 分割线位置
- 进度节点区尺寸
- 邀请权益卡尺寸
- 把任务按钮改成全宽 CTA

事件：

```js
taskList.addEventListener("task-list-action", (event) => {
  const taskId = event.detail.taskId;
});
```

### SharePanel

用于分享渠道面板，包含渠道图标、复制链接、图片预览等。

目录：

```txt
component-library/components/share-panel/
```

### Dialog

用于奖励结果、领取结果、抽奖结果等强反馈。

目录：

```txt
component-library/components/dialog/
```

### Toast

用于轻量操作反馈。

目录：

```txt
component-library/components/toast/
```

## 活动页代码放置规则

不要把新的可运行活动案例放进 Skill 仓库。

新的活动页应该创建在：

```txt
/Users/bytedance/Documents/Incentive Page Cases/{case-name}/
```

例如：

```txt
/Users/bytedance/Documents/Incentive Page Cases/jp-companion-savings/
```

Skill 仓库只保留：

- 组件库
- 框架规则
- 视觉规范
- contracts
- fixtures
- curated examples

## 页面实现要求

H5 页面建议结构：

```txt
case-name/
├── index.html
├── styles.css
├── script.js
└── assets/
```

实现要求：

- `index.html` 引入组件库 CSS/JS。
- `script.js` 中先定义 `campaignConfig`。
- 页面模块用 render functions 或组件拆分。
- 所有业务数据来自 config，不写死在 UI 组件里。
- 每个主 CTA 都要有真实状态变化。
- 奖励结果使用 Dialog。
- 轻反馈使用 Toast。
- 页面必须支持 320px 和 390px 宽度。
- 不允许文字溢出、按钮裁切或横向滚动。

## Figma 使用规则

当用户提供 Figma 链接时：

1. 先读取 Figma 节点上下文。
2. 如果用户要求严格参考组件，必须继续读取具体子层节点。
3. Figma 组件若来源是 `FRAME`，就按 frame 结构和尺寸实现，不要强行转成实例或 wrapper。
4. 颜色、图片可以按页面视觉风格换肤，但布局尺寸必须遵守组件契约。
5. 组件沉淀后要更新 `component-library/components/{component}/component.md`。

## 视觉资产规则

- 背景、主视觉、玩法对象、贴纸、装饰图默认 PNG。
- SVG 只用于图标。
- 透明角色图可以通过 chroma-key 背景生成后本地扣图。
- 项目引用的图片必须复制到目标项目或组件目录，不能只停留在临时生成目录。
- 同一 IP 多等级图片必须同画布、同展示尺寸，避免升级时页面框架跳动。

## QA Checklist

交付前至少检查：

- 页面主链路是否完整。
- 首屏是否说明用户是谁、进度在哪、今天做什么、做完得到什么。
- 组件是否来自组件库或已记录 gap。
- 任务列表是否保持 Figma 锁定尺寸。
- 导航栏是否使用 `<incentive-top-navigation>`。
- Navigation icons 是否在 `32 x 32` 按钮中视觉居中。
- 进度变化是否可见。
- 奖励反馈是否明确。
- 320px / 390px 下是否无横向滚动。
- 文案是否没有溢出或遮挡。

## 发布到 GitHub

由于某些本地目录可能不允许创建 `.git`，可以用临时发布目录：

```bash
mkdir /private/tmp/Incentive-Design-Skill-publish
cd /private/tmp/Incentive-Design-Skill-publish
git init
git remote add origin https://github.com/{owner}/{repo}.git
rsync -a --delete --exclude='.git/' --exclude='.DS_Store' --exclude='tmp/' \
  "/Users/bytedance/Documents/Incentive Pages Vibe Coding Skill/" \
  "/private/tmp/Incentive-Design-Skill-publish/"
git add .
git commit -m "Publish incentive design skill"
git push origin main
```

如果使用 HTTPS，GitHub password 位置需要输入 Personal Access Token，不是账号密码。

## 当前已发布仓库

```txt
https://github.com/willemhwl94-del/Incentive-Design-Skill
```

## 维护建议

- 每新增一个可复用组件，都要创建 `component.md`。
- 每次从页面中沉淀组件，都要从页面私有 CSS/JS 中移除重复实现。
- 页面框架只描述结构和链路，不复制组件内部尺寸。
- 组件内部尺寸归组件库维护。
- 每次发现 Figma 还原偏差，都要回写到组件规范或 QA checklist。
