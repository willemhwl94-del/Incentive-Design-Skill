# Package Contents

This file records the full distributable Agent Skill folder structure and file contents.

For binary assets, the file content is represented by size and SHA-256 hash.

## Directory Tree

```txt
incentive-design-agent-skill/
├── component-library/
│   ├── components/
│   │   ├── asset-card/
│   │   │   ├── assets/
│   │   │   │   ├── default-asset-icon.png
│   │   │   │   └── default-profile.png
│   │   │   └── component.md
│   │   ├── bottom-action-triple/
│   │   │   └── component.md
│   │   ├── contribution-module/
│   │   │   └── component.md
│   │   ├── dialog/
│   │   │   └── component.md
│   │   ├── primary-title/
│   │   │   └── component.md
│   │   ├── share-panel/
│   │   │   ├── assets/
│   │   │   │   ├── channel-copy-link.png
│   │   │   │   ├── channel-copy-link.svg
│   │   │   │   ├── channel-facebook.png
│   │   │   │   ├── channel-facebook.svg
│   │   │   │   ├── channel-instagram.png
│   │   │   │   ├── channel-instagram.svg
│   │   │   │   ├── channel-more.png
│   │   │   │   ├── channel-more.svg
│   │   │   │   ├── channel-snapchat.png
│   │   │   │   ├── channel-snapchat.svg
│   │   │   │   ├── channel-whatsapp.png
│   │   │   │   ├── channel-whatsapp.svg
│   │   │   │   ├── image-placeholder.png
│   │   │   │   └── image-placeholder.svg
│   │   │   ├── component.md
│   │   │   ├── share-panel.css
│   │   │   └── share-panel.js
│   │   ├── task-list/
│   │   │   ├── component.md
│   │   │   ├── task-list.css
│   │   │   └── task-list.js
│   │   ├── toast/
│   │   │   └── component.md
│   │   └── top-navigation/
│   │       ├── assets/
│   │       │   ├── music-note-s-alt-centered.svg
│   │       │   └── music-note-s-alt.svg
│   │       ├── component.md
│   │       ├── top-navigation.css
│   │       └── top-navigation.js
│   ├── _component-template.md
│   └── README.md
├── contracts/
│   ├── campaign-request.schema.json
│   ├── page-build-spec.schema.json
│   └── strategy-brief.schema.json
├── docs/
│   └── campaign-skill-suite-protocol.md
├── examples/
│   └── h5/
│       ├── assets/
│       │   ├── samba-mystery-box/
│       │   │   ├── imagegen-source/
│       │   │   │   └── drum_football_chroma.png
│       │   │   ├── share-panel/
│       │   │   │   ├── imagegen-source/
│       │   │   │   │   └── samba-mystery-guide-brazil-chroma.png
│       │   │   │   ├── samba-mystery-guide-brazil.png
│       │   │   │   └── samba-mystery-guide.png
│       │   │   ├── bg_samba_night.png
│       │   │   ├── box_locked_imagine2.png
│       │   │   ├── box_locked.png
│       │   │   ├── box_opened_imagine2.png
│       │   │   ├── box_opened.png
│       │   │   ├── box_worldcup_locked.png
│       │   │   ├── box_worldcup_opened.png
│       │   │   ├── drum_football.png
│       │   │   ├── drum_glow.png
│       │   │   ├── egg_easter.png
│       │   │   └── title_samba_mystery.png
│       │   ├── share-panel/
│       │   │   ├── brazil-samba-share-guide.svg
│       │   │   ├── channel-copy-link.png
│       │   │   ├── channel-copy-link.svg
│       │   │   ├── channel-facebook.png
│       │   │   ├── channel-facebook.svg
│       │   │   ├── channel-instagram.png
│       │   │   ├── channel-instagram.svg
│       │   │   ├── channel-more.png
│       │   │   ├── channel-more.svg
│       │   │   ├── channel-snapchat.png
│       │   │   ├── channel-snapchat.svg
│       │   │   ├── channel-whatsapp.png
│       │   │   ├── channel-whatsapp.svg
│       │   │   ├── image-placeholder.png
│       │   │   └── image-placeholder.svg
│       │   ├── bg-brazil-samba-football.svg
│       │   ├── spin-wheel-brazil-body.svg
│       │   ├── spin-wheel-pointer.svg
│       │   └── title-brazil-samba-football.svg
│       ├── brazil-samba-football-spin-wheel.html
│       ├── samba-mystery-box-page.html
│       ├── share-panel.css
│       └── share-panel.js
├── fixtures/
│   ├── brazil-new-user/
│   │   ├── 01-campaign-request.json
│   │   ├── 02-expected-strategy-brief.json
│   │   └── 03-expected-page-build-spec.json
│   ├── brazil-samba-football/
│   │   └── 03-page-build-spec.json
│   └── samba-mystery-box/
│       └── 03-page-build-spec.json
├── skills/
│   ├── campaign-build-orchestrator/
│   │   ├── agents/
│   │   │   └── openai.yaml
│   │   └── SKILL.md
│   ├── figma-main-flow-annotator/
│   │   ├── agents/
│   │   │   └── openai.yaml
│   │   └── SKILL.md
│   ├── incentive-strategy-planner/
│   │   ├── agents/
│   │   │   └── openai.yaml
│   │   ├── evals/
│   │   ├── references/
│   │   │   └── fission-design-rules.md
│   │   └── SKILL.md
│   └── vibe-activity-page/
│       ├── agents/
│       │   └── openai.yaml
│       ├── references/
│       │   ├── page-structures/
│       │   │   ├── index.md
│       │   │   ├── nurture-progress-conversion-page.md
│       │   │   ├── progress-accumulation-conversion-page.md
│       │   │   └── single-gameplay-conversion-page.md
│       │   ├── visual-styles/
│       │   │   ├── dreamy-cloud-campaign.md
│       │   │   ├── index.md
│       │   │   ├── retro-journal.md
│       │   │   └── soft-colorful-card.md
│       │   ├── code-to-figma-restoration.md
│       │   ├── components.md
│       │   ├── conversion-patterns.md
│       │   ├── figma-interaction-flow-extension.md
│       │   ├── qa-checklist.md
│       │   ├── responsive.md
│       │   ├── spacing.md
│       │   ├── tux-noncolor-visual-rules.md
│       │   └── typography.md
│       ├── templates/
│       │   ├── CashbackPage.tsx
│       │   ├── InviteLotteryPage.tsx
│       │   ├── NurtureProgressPage.tsx
│       │   ├── SingleGameplayConversionPage.tsx
│       │   └── TaskRewardPage.tsx
│       └── SKILL.md
├── .clinerules
├── .cursorrules
├── .windsurfrules
├── agent-skill.json
├── AGENTS.md
├── CLAUDE.md
├── MANIFEST.md
├── README.md
└── SKILL.md
```

## File Contents

### .clinerules

```
Use this folder as the Incentive Design Agent Skill package.

Read SKILL.md and AGENTS.md first.
For activity page implementation, read skills/vibe-activity-page/SKILL.md.
Before creating UI, search component-library/components for a matching component contract.
Use H5 by default.
Do not create new runnable cases inside this package; create them under /Users/bytedance/Documents/Incentive Page Cases/{case-name}/.

```

### .cursorrules

```
Use this folder as the Incentive Design Agent Skill package.

Before building or editing any mobile incentive campaign page, read:
- SKILL.md
- AGENTS.md
- skills/vibe-activity-page/SKILL.md
- component-library/README.md

Use H5 by default. Create new runnable cases under:
/Users/bytedance/Documents/Incentive Page Cases/{case-name}/

Do not write new campaign cases inside this package unless explicitly asked.
Always reuse component-library/components before creating page-local UI.
Select page structures from skills/vibe-activity-page/references/page-structures/index.md.
Select only ready visual styles from skills/vibe-activity-page/references/visual-styles/index.md.

```

### .windsurfrules

```
Use this repository as a portable Agent Skill package for mobile incentive campaign H5 pages.

Required reading order:
1. SKILL.md
2. AGENTS.md
3. skills/vibe-activity-page/SKILL.md
4. component-library/README.md

For one-line campaign planning, also read:
- docs/campaign-skill-suite-protocol.md
- skills/campaign-build-orchestrator/SKILL.md
- skills/incentive-strategy-planner/SKILL.md

New runnable campaign cases belong in:
/Users/bytedance/Documents/Incentive Page Cases/{case-name}/

```

### agent-skill.json

```json
{
  "schema_version": "1.0.0",
  "package_name": "incentive-design-agent-skill",
  "display_name": "Incentive Design Agent Skill",
  "description": "Portable Agent Skill package for planning and building mobile-first incentive campaign H5 pages with reusable strategy, page frameworks, visual styles, component contracts, and QA guidance.",
  "default_output": "mobile_h5",
  "supported_agents": [
    "Codex",
    "Claude Code",
    "Cursor",
    "Windsurf",
    "Cline",
    "custom file-reading agents"
  ],
  "entrypoints": {
    "general": [
      "SKILL.md",
      "AGENTS.md",
      "README.md"
    ],
    "one_line_campaign_request": [
      "docs/campaign-skill-suite-protocol.md",
      "skills/campaign-build-orchestrator/SKILL.md",
      "skills/incentive-strategy-planner/SKILL.md",
      "skills/vibe-activity-page/SKILL.md"
    ],
    "page_build": [
      "skills/vibe-activity-page/SKILL.md",
      "skills/vibe-activity-page/references/page-structures/index.md",
      "skills/vibe-activity-page/references/visual-styles/index.md",
      "skills/vibe-activity-page/references/components.md",
      "component-library/README.md"
    ],
    "component_lookup": [
      "component-library/README.md",
      "component-library/components"
    ],
    "contracts": [
      "contracts/campaign-request.schema.json",
      "contracts/strategy-brief.schema.json",
      "contracts/page-build-spec.schema.json"
    ]
  },
  "active_skills": [
    "campaign-build-orchestrator",
    "incentive-strategy-planner",
    "vibe-activity-page",
    "figma-main-flow-annotator"
  ],
  "active_contracts": [
    "CampaignRequest",
    "StrategyBrief",
    "PageBuildSpec"
  ],
  "case_output_policy": {
    "default_case_root": "/Users/bytedance/Documents/Incentive Page Cases",
    "do_not_write_new_cases_inside_package": true,
    "curated_examples_only": true
  },
  "asset_policy": {
    "default_visual_asset_format": "png",
    "svg_allowed_for": [
      "icons",
      "compact UI glyphs",
      "share channel icons"
    ]
  },
  "authoring_policy": {
    "preserve_existing_structure": true,
    "component_library_is_source_of_truth": true,
    "do_not_invent_visual_styles": true
  }
}

```

### AGENTS.md

```markdown
# Marketing Activity Page Coding Agent

Use this repository to preserve reusable coding judgment for mobile-first marketing activity pages.

Default delivery format:
- Use H5 by default unless the user explicitly asks for React or another stack.
- Do not create new runnable campaign cases inside this Skill repository. New cases must be created outside the Skill files under `/Users/bytedance/Documents/Incentive Page Cases/{case-name}/` unless the user explicitly asks to update the retained examples.
- `examples/h5/` is only for curated reference examples. Keep only the approved reference cases there.
- React, TypeScript, and Tailwind CSS may be used only when the target project already has that app stack or the user asks for it.

Default implementation rules:
- Activity page code must be componentized in the target format. For H5 pages, use reusable HTML/CSS/JS component modules or clearly separated render functions for page sections, strict components, gameplay components, feedback layers, and share panels.
- Component reuse is mandatory-first: before building any page module, search `component-library/components/` for an existing component. Use existing components for navigation, asset/reward cards, titles, buttons, share panels, toast, and any other matching content. Create a new component only when no suitable component exists, and document the gap.
- Figma component usage must preserve the original source format. If a reusable component source in Figma is a `FRAME`, copy that frame directly into the target page or flow and apply allowed content overrides; do not convert it into a Figma component, component set, instance, or wrapper just to make it componentized. Use a true Figma instance only when the library source is already a component or instance and it can be overridden to match the code.
- Business copy, thresholds, rewards, image URLs, channel configuration, timers, and theme values must live in a page config object, not inside presentational components.
- Default user-facing language is English for every country and region unless the user explicitly requests localization.
- Activity-page visual assets must use PNG by default. SVG is allowed only for icons, such as navigation icons, share-channel icons, and compact UI action glyphs. Backgrounds, title art, gameplay objects, stickers, decorative anchors, generated visuals, and Figma restoration image fills must be PNG.

Before creating, refactoring, or reviewing an activity page, read:
- `skills/vibe-activity-page/SKILL.md`

For multi-skill campaign generation workflows, read first:
- `docs/campaign-skill-suite-protocol.md`
- `skills/campaign-build-orchestrator/SKILL.md`

Default campaign generation flow:

```txt
User one-line request
↓
campaign-build-orchestrator
↓
incentive-strategy-planner
↓
vibe-activity-page
↓
Final deliverable page
```

Flow rules:
1. A one-line business request must first be converted into `CampaignRequest` by `campaign-build-orchestrator`.
2. `incentive-strategy-planner` consumes `CampaignRequest` and produces `StrategyBrief`.
3. `vibe-activity-page` consumes `StrategyBrief` and produces `PageBuildSpec` plus the final page code.
4. Each downstream step may run only when the previous artifact has `status: "ready"`.
5. If any artifact has `status: "blocked"`, stop the flow and return the blocker instead of continuing.
6. Skills must exchange information through `contracts/` artifacts, not by reading each other's internal implementation files.

Shared interface contracts live in:
- `contracts/`

Cross-skill integration examples live in:
- `fixtures/`

Default output requirements:
1. Briefly explain the selected page structure.
2. Generate componentized, config-driven code.
3. Keep UI components free of hardcoded business data.
4. Verify the page against the skill QA checklist.

```

### CLAUDE.md

```markdown
# Claude Code Instructions

Use this folder as a portable Agent Skill package for mobile incentive campaign H5 pages.

Before creating, editing, or reviewing a page:

1. Read `SKILL.md`.
2. Read `AGENTS.md`.
3. Read `skills/vibe-activity-page/SKILL.md`.
4. Check `component-library/components/` before creating any UI module.

For one-line campaign requests, follow:

```txt
docs/campaign-skill-suite-protocol.md
skills/campaign-build-orchestrator/SKILL.md
skills/incentive-strategy-planner/SKILL.md
skills/vibe-activity-page/SKILL.md
```

New runnable cases must be created under:

```txt
/Users/bytedance/Documents/Incentive Page Cases/{case-name}/
```

Do not create new campaign cases inside this package unless explicitly asked to update curated examples.

```

### component-library/_component-template.md

```markdown
# 组件名称

`ComponentName`

## 组件功能

Describe the user's job-to-be-done and where the component appears in an activity page.

## 配置项

### 文字

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `label` | string | yes | - | Visible text slot. |

### 图片

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `imageUrl` | string | no | - | Image fill or asset URL, if supported. |

### 交互行为

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `onClick` | function | no | - | Triggered by the main action. |

## 组件规范

### Layout

- Canvas context:
- Size:
- Position:
- Internal structure:

### Visual Lock

- Locked:
- Configurable:
- Not allowed:

### States

- Default:
- Loading:
- Disabled:
- Completed:

### QA

- Must use as a Figma instance.
- Must preserve locked nested components.
- Must not clip localized text.

## 组件 Figma 链接

- Source:
- Variants:

```

### component-library/components/asset-card/assets/default-asset-icon.png

Binary file. Size: 4425 bytes. SHA-256: `09abc53a4ed59e78cedd65d75c74bbc216962be9a179926e6bd38fe7d6fb8c50`.

### component-library/components/asset-card/assets/default-profile.png

Binary file. Size: 3609 bytes. SHA-256: `7b4c8936ebf06f68e55de65092ca30f5d5855cb1d33eda6b9f8c966de3b6b1a7`.

### component-library/components/asset-card/component.md

```markdown
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

```

### component-library/components/bottom-action-triple/component.md

```markdown
# 组件名称

`BottomActionTriple` / `一排三按钮组件`

## 组件功能

活动页底部三按钮操作区。中间是核心玩法主 CTA，左右是辅助入口，如更多机会、活动规则、二维码、分享、任务等；下方展示剩余互动次数。

## 配置项

### 文字

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `primaryLabel` | string | yes | `追加` | 中间主按钮文案。 |
| `leftLabel` | string | yes | `追加` | 左侧辅助按钮文案。 |
| `rightLabel` | string | yes | `追加` | 右侧辅助按钮文案。 |
| `chanceText` | string | yes | `剩余互动次数` | 底部次数文案。 |

### 图片

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `primaryButtonImage` | image | no | component default | 如果主按钮使用图片皮肤，作为图片填充。 |
| `leftButtonImage` | image | no | component default | 左按钮背景图片槽。 |
| `rightButtonImage` | image | no | component default | 右按钮背景图片槽。 |

### 交互行为

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `onPrimaryAction` | function | yes | - | 开始抽奖/转盘/玩法。 |
| `onLeftAction` | function | no | - | 更多机会、任务、邀请等。 |
| `onRightAction` | function | no | - | 规则、二维码、分享等。 |
| `disabled` | boolean | no | false | 无机会或加载中禁用主按钮。 |

## 组件规范

### Layout

- Parent: 390 x 102 in current Figma source.
- Canonical page position: x 0, y 668.
- Center visual group: x 97, y 0, width 196, height 72.
- Left side group: x 0, y 16, width 80, height 56.
- Right side group: x 310, y 16, width 80, height 56.
- Chance text: y 84, height 18.

### Visual Lock

- 左/中/右按钮结构不变。
- 按钮文案必须在各自可见按钮区域内水平、垂直居中。
- 允许按活动主题调整按钮颜色或图片皮肤，但不能改按钮层级、尺寸和顺序。

### States

- Default
- Pressed
- Disabled/no chances
- Loading/spinning

### QA

- Figma 搭页必须使用实例。
- 翻译成中文、英文、葡语后必须重新居中。
- 侧边按钮不增加额外图标或装饰层，除非组件新增变体。

## 组件 Figma 链接

- Section: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13281
- 一排三按钮组件: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13344
- 一排一: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13368
- 一排二: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13767

```

### component-library/components/contribution-module/component.md

```markdown
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

```

### component-library/components/dialog/component.md

```markdown
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

```

### component-library/components/primary-title/component.md

```markdown
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

```

### component-library/components/share-panel/assets/channel-copy-link.png

Binary file. Size: 5244 bytes. SHA-256: `918dd4584559721b2c3ff27fef387149d2f9b6dea88031533afc3d695981ef3a`.

### component-library/components/share-panel/assets/channel-copy-link.svg

```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="24" fill="#2F73F6"/>
  <path d="M21 29L19 31C16.8 33.2 13.2 33.2 11 31C8.8 28.8 8.8 25.2 11 23L15 19C17.2 16.8 20.8 16.8 23 19" stroke="white" stroke-width="3" stroke-linecap="round"/>
  <path d="M27 19L29 17C31.2 14.8 34.8 14.8 37 17C39.2 19.2 39.2 22.8 37 25L33 29C30.8 31.2 27.2 31.2 25 29" stroke="white" stroke-width="3" stroke-linecap="round"/>
  <path d="M20 28L28 20" stroke="white" stroke-width="3" stroke-linecap="round"/>
</svg>


```

### component-library/components/share-panel/assets/channel-facebook.png

Binary file. Size: 3985 bytes. SHA-256: `4b64772a2aca392028a495f6f40ce025abc44823710b25eb9a18bb274a630979`.

### component-library/components/share-panel/assets/channel-facebook.svg

```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="24" fill="#1877F2"/>
  <path d="M27 15H31V9H27C21.8 9 19 12.1 19 17V21H14V27H19V39H26V27H31L32 21H26V17.5C26 15.9 26.6 15 27 15Z" fill="white"/>
</svg>


```

### component-library/components/share-panel/assets/channel-instagram.png

Binary file. Size: 19466 bytes. SHA-256: `870f96c131e3c8cee33d5a654a46b4ac2447780eb4a5ceb0b85f754c58f40b33`.

### component-library/components/share-panel/assets/channel-instagram.svg

```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ig" x1="7" y1="41" x2="41" y2="7" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FEDA75"/>
      <stop offset="0.35" stop-color="#FA7E1E"/>
      <stop offset="0.65" stop-color="#D62976"/>
      <stop offset="1" stop-color="#4F5BD5"/>
    </linearGradient>
  </defs>
  <circle cx="24" cy="24" r="24" fill="url(#ig)"/>
  <rect x="14" y="14" width="20" height="20" rx="6" stroke="white" stroke-width="3"/>
  <circle cx="24" cy="24" r="5" stroke="white" stroke-width="3"/>
  <circle cx="30" cy="18" r="2" fill="white"/>
</svg>


```

### component-library/components/share-panel/assets/channel-more.png

Binary file. Size: 3788 bytes. SHA-256: `7f198a480f59f196197786f95debd1e57472ee1736c545c966e1619ae65ff91a`.

### component-library/components/share-panel/assets/channel-more.svg

```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="24" fill="#EDEDED"/>
  <circle cx="16" cy="24" r="3" fill="#222222"/>
  <circle cx="24" cy="24" r="3" fill="#222222"/>
  <circle cx="32" cy="24" r="3" fill="#222222"/>
</svg>


```

### component-library/components/share-panel/assets/channel-snapchat.png

Binary file. Size: 5122 bytes. SHA-256: `792b7d1f50963e0e9d2388bf2a768413ca56d36f1e920bf16b00343a5256d7b6`.

### component-library/components/share-panel/assets/channel-snapchat.svg

```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="24" fill="#FFFC00"/>
  <path d="M17 32C20 31 20 28 18 27C20 27 21 25 21 22V19C21 15 24 13 27 15C29 16 30 18 30 22V25C31 26 32 27 34 27C32 28 31 31 34 32C31 33 30 35 27 35C25 36 23 36 21 35C19 35 18 33 17 32Z" fill="white" stroke="black" stroke-width="2" stroke-linejoin="round"/>
</svg>


```

### component-library/components/share-panel/assets/channel-whatsapp.png

Binary file. Size: 6470 bytes. SHA-256: `3d12cbf60731f6c1b8611c6ec0fd5be72d1e9ab0adce3a00dda157887703e07e`.

### component-library/components/share-panel/assets/channel-whatsapp.svg

```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="24" fill="#25D366"/>
  <circle cx="24" cy="23" r="13" stroke="white" stroke-width="3"/>
  <path d="M16 36L18.2 29.7" stroke="white" stroke-width="3" stroke-linecap="round"/>
  <path d="M20 18C21.5 25 24.5 28 31 30" stroke="white" stroke-width="3" stroke-linecap="round"/>
</svg>


```

### component-library/components/share-panel/assets/image-placeholder.png

Binary file. Size: 413 bytes. SHA-256: `5e44783f2b2874265d1f7ef61a565345f67375cd0c2478802e9ffb54be2c9392`.

### component-library/components/share-panel/assets/image-placeholder.svg

```xml
<svg width="316" height="100" viewBox="0 0 316 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="316" height="100" rx="12" fill="white"/>
  <path d="M151 44.5C151 43.6716 151.672 43 152.5 43H163.5C164.328 43 165 43.6716 165 44.5V55.5C165 56.3284 164.328 57 163.5 57H152.5C151.672 57 151 56.3284 151 55.5V44.5Z" stroke="#999999" stroke-width="1.5"/>
  <circle cx="155" cy="47" r="1.5" fill="#999999"/>
  <path d="M152.5 54L156.2 50.3L159 53.1L160.6 51.5L164 54.9" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


```

### component-library/components/share-panel/component.md

```markdown
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

```

### component-library/components/share-panel/share-panel.css

```css
.share-panel {
  position: absolute;
  inset: 0;
  z-index: 20;
  overflow: hidden;
  --tux-font: "TikTok Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --tux-sheet-backdrop-1: rgba(0, 0, 0, 0.5);
  --tux-page-grouped-2: #f1f1f2;
  --tux-page-grouped-3: #ffffff;
  --tux-shape-neutral: #161823;
  --tux-shape-neutral-3: rgba(22, 24, 35, 0.12);
  --tux-page-flat-1: #ffffff;
  --tux-text-1: #161823;
  --tux-text-2: rgba(22, 24, 35, 0.75);
  --tux-sheet-flat-1: #ffffff;
  --tux-toast-bg: #525252;
  --tux-tooltip-text: #f6f6f6;
  font-family: var(--tux-font);
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease;
}

.share-panel.is-open {
  opacity: 1;
  pointer-events: auto;
}

.share-panel__scrim {
  position: absolute;
  inset: 0;
  background: var(--tux-sheet-backdrop-1, rgba(0,0,0,0.5));
}

.share-instructions {
  position: absolute;
  left: 37px;
  top: 297px;
  width: 316px;
  transform: translateY(12px);
  opacity: 0;
  transition: transform 240ms ease, opacity 200ms ease;
}

.share-panel.is-open .share-instructions {
  transform: translateY(0);
  opacity: 1;
}

.share-instructions__image {
  position: relative;
  z-index: 2;
  width: 316px;
  height: 100px;
  background: transparent;
}

.share-instructions__image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.share-instructions__steps {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 316px;
  margin-top: -16px;
  padding: 32px 20px 20px;
  border-radius: 16px;
  background: var(--tux-page-grouped-3);
}

.share-instructions__connector {
  position: absolute;
  left: 30px;
  top: 44px;
  width: 1px;
  height: 123px;
  background: var(--tux-shape-neutral-3);
}

.share-step {
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 34px;
}

.share-step__number {
  display: grid;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  place-items: center;
  border-radius: 9999px;
  background: var(--tux-shape-neutral);
  color: var(--tux-page-flat-1);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
}

.share-step__copy {
  color: var(--tux-text-1);
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
}

.share-instructions__divider {
  position: relative;
  z-index: 2;
  width: 248px;
  height: 2px;
  margin: -1px auto;
  background-image: repeating-linear-gradient(
    to right,
    var(--tux-shape-neutral-3) 0,
    var(--tux-shape-neutral-3) 4px,
    transparent 4px,
    transparent 12px
  );
}

.share-instructions__disclaimer {
  margin: 0;
  padding: 16px 56px;
  border-radius: 16px;
  background: var(--tux-page-grouped-3);
  color: var(--tux-text-2);
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
}

.share-sheet {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 390px;
  height: 169px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  background: var(--tux-sheet-flat-1, #FFFFFF);
  transform: translateY(100%);
  transition: transform 240ms ease;
}

.share-panel.is-open .share-sheet {
  transform: translateY(0);
}

.share-sheet__titlebar {
  position: relative;
  height: 35px;
}

.share-sheet__titlebar h2 {
  padding-top: 10px;
  color: #161823;
  font-size: 13px;
  font-weight: 600;
  line-height: 17px;
  text-align: center;
}

.share-sheet__close {
  position: absolute;
  top: 6px;
  right: 8px;
  width: 24px;
  height: 24px;
  background: transparent;
  color: #161823;
  font-size: 24px;
  font-weight: 400;
  line-height: 20px;
}

.share-sheet__channels {
  position: absolute;
  top: 43px;
  left: 0;
  display: flex;
  gap: 4px;
  width: 390px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 8px;
  scrollbar-width: none;
}

.share-sheet__channels::-webkit-scrollbar {
  display: none;
}

.share-channel {
  display: flex;
  width: 64px;
  height: 70px;
  flex: 0 0 64px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: rgba(22, 24, 35, 0.75);
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
}

.share-channel--double {
  height: 84px;
}

.share-channel:active {
  opacity: 0.72;
}

.share-channel__icon {
  width: 48px;
  height: 48px;
}

.share-channel span {
  width: 64px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.share-sheet__homebar {
  position: absolute;
  left: 126px;
  bottom: 9px;
  width: 139px;
  height: 5px;
  border-radius: 9999px;
  background: #161823;
}

.share-toast {
  position: absolute;
  left: 50%;
  bottom: 184px;
  min-width: 118px;
  min-height: 36px;
  padding: 8px 16px;
  border-radius: 9999px;
  background: var(--tux-toast-bg, #525252);
  color: var(--tux-tooltip-text, #F6F6F6);
  font-size: 13px;
  font-weight: 600;
  line-height: 17px;
  text-align: center;
  opacity: 0;
  transform: translateX(-50%) translateY(8px);
  transition: transform 160ms ease, opacity 160ms ease;
  pointer-events: none;
}

.share-toast.is-visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

@media (max-width: 390px) {
  .share-sheet,
  .share-sheet__channels {
    width: 100vw;
  }
}

```

### component-library/components/share-panel/share-panel.js

```javascript
(function () {
  const defaultConfig = {
    assetBasePath: "./assets/share-panel",
    guideImage: "image-placeholder.png",
    shareUrl: window.location.href,
    instructions: [
      "Sharing the link to your friends who haven't download tiktok lite.",
      "Your friends open TikTok with the link, register and check-in.",
      "Check your reward",
    ],
    disclaimer: "* This gameplay is available for users above 18 years old",
    title: "Sent to",
    channels: [
      ["WhatsApp", "channel-whatsapp.svg", "externalShare"],
      ["Copy link", "channel-copy-link.svg", "copyLink"],
      ["Facebook", "channel-facebook.svg", "externalShare"],
      ["WhatsApp status", "channel-whatsapp.svg", "externalShare", "share-channel--double"],
      ["Instagram", "channel-instagram.svg", "externalShare"],
      ["Snapchat", "channel-snapchat.svg", "externalShare"],
      ["More", "channel-more.svg", "more"],
    ],
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function renderSharePanel(config) {
    const guideImageSrc = config.guideImageUrl || `${config.assetBasePath}/${escapeHtml(config.guideImage)}`;
    const steps = config.instructions
      .map(
        (text, index) => `
          <div class="share-step">
            <span class="share-step__number">${index + 1}</span>
            <span class="share-step__copy">${escapeHtml(text)}</span>
          </div>
        `
      )
      .join("");

    const channels = config.channels
      .map(([label, icon, action, extraClass = ""]) => {
        const className = ["share-channel", extraClass].filter(Boolean).join(" ");
        return `
          <button class="${className}" type="button" data-share-action="${escapeHtml(action)}">
            <img class="share-channel__icon" src="${config.assetBasePath}/${escapeHtml(icon)}" alt="" aria-hidden="true" />
            <span>${escapeHtml(label)}</span>
          </button>
        `;
      })
      .join("");

    return `
      <section class="share-panel" role="dialog" aria-modal="true" aria-labelledby="${config.titleId}" hidden>
        <button class="share-panel__scrim" type="button" aria-label="Close share panel"></button>

        <section class="share-instructions" aria-label="Share instructions">
          <div class="share-instructions__image">
            <img src="${guideImageSrc}" alt="" aria-hidden="true" />
          </div>
          <div class="share-instructions__steps">
            <span class="share-instructions__connector" aria-hidden="true"></span>
            ${steps}
          </div>
          <div class="share-instructions__divider" aria-hidden="true"></div>
          <p class="share-instructions__disclaimer">${escapeHtml(config.disclaimer)}</p>
        </section>

        <section class="share-sheet" aria-labelledby="${config.titleId}">
          <div class="share-sheet__titlebar">
            <h2 id="${config.titleId}">${escapeHtml(config.title)}</h2>
            <button class="share-sheet__close" type="button" aria-label="Close share panel">×</button>
          </div>
          <div class="share-sheet__channels" aria-label="Share channels">
            ${channels}
          </div>
          <div class="share-sheet__homebar" aria-hidden="true"></div>
        </section>

        <div class="share-toast" role="status" aria-live="polite"></div>
      </section>
    `;
  }

  function createSharePanel(options = {}) {
    const titleId = options.titleId || `sharePanelTitle-${Math.random().toString(36).slice(2)}`;
    const config = {
      ...defaultConfig,
      ...options,
      // share-sheet is a locked component area: projects may not override
      // the sheet title, channel list, channel order, labels, or icons.
      title: defaultConfig.title,
      channels: defaultConfig.channels,
      titleId,
    };
    const mount = options.mount || document.body;
    const template = document.createElement("template");
    template.innerHTML = renderSharePanel(config).trim();

    const panel = template.content.firstElementChild;
    const scrim = panel.querySelector(".share-panel__scrim");
    const closeButton = panel.querySelector(".share-sheet__close");
    const toast = panel.querySelector(".share-toast");
    const channels = panel.querySelectorAll(".share-channel");
    let toastTimer;

    function open() {
      panel.hidden = false;
      requestAnimationFrame(() => {
        panel.classList.add("is-open");
      });
    }

    function close() {
      panel.classList.remove("is-open");
      window.setTimeout(() => {
        if (!panel.classList.contains("is-open")) {
          panel.hidden = true;
        }
      }, 240);
    }

    function showToast(message) {
      window.clearTimeout(toastTimer);
      toast.textContent = message;
      toast.classList.add("is-visible");
      toastTimer = window.setTimeout(() => {
        toast.classList.remove("is-visible");
      }, 1400);
    }

    async function handleShareAction(button) {
      const action = button.dataset.shareAction;
      const label = button.textContent.trim();
      if (typeof config.onShareAction === "function") {
        const result = await config.onShareAction({ action, label, button, panel });
        if (result === false) return;
      }

      if (action === "copyLink") {
        try {
          await navigator.clipboard.writeText(config.shareUrl);
          showToast("Link copied");
        } catch {
          showToast("Couldn't copy link. Try again.");
        }
        return;
      }

      if (action === "more") {
        showToast("More options");
        return;
      }

      showToast("Shared");
    }

    function handleKeydown(event) {
      if (event.key === "Escape" && !panel.hidden) {
        close();
      }
    }

    scrim.addEventListener("click", close);
    closeButton.addEventListener("click", close);
    channels.forEach((button) => {
      button.addEventListener("click", () => handleShareAction(button));
    });
    document.addEventListener("keydown", handleKeydown);
    mount.append(panel);

    return {
      element: panel,
      open,
      close,
      destroy() {
        document.removeEventListener("keydown", handleKeydown);
        panel.remove();
      },
    };
  }

  window.createSharePanel = createSharePanel;
})();

```

### component-library/components/task-list/component.md

```markdown
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

```

### component-library/components/task-list/task-list.css

```css
incentive-task-list {
  display: block;
  width: 358px;
  height: 495px;
  margin: 0 auto;
  font-family: "TikTok Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  letter-spacing: 0;
}

.tasks {
  width: 358px;
  height: 495px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 16px 60px 16px 16px;
  background: #ffffff;
  box-shadow: none;
}

.task-list-title {
  position: relative;
  width: 358px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 0;
  overflow: hidden;
  background:
    radial-gradient(circle at 92% 36%, rgba(198, 133, 62, 0.14), transparent 32px),
    linear-gradient(180deg, #fff8ea 0%, #fff3dd 100%);
}

.task-list-title__copy {
  width: 222px;
  min-width: 0;
}

.task-list-title h2,
.task-list-title p {
  margin: 0;
}

.task-list-title h2 {
  color: var(--task-list-title-color, #665825);
  font-size: 20px;
  line-height: 25px;
  font-weight: 700;
}

.task-list-title p {
  margin-top: 4px;
  color: var(--task-list-subtitle-color, #aa9f79);
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
}

.task-list-icon {
  position: relative;
  width: 100px;
  height: 72px;
  flex: 0 0 100px;
}

.task-list-icon::before {
  content: "";
  position: absolute;
  left: 40px;
  top: 51px;
  width: 47px;
  height: 8px;
  border-radius: 999px;
  background: rgba(92, 63, 34, 0.10);
  filter: blur(3px);
}

.task-list-icon__medium {
  position: absolute;
  left: 8px;
  top: -6px;
  width: 84px;
  height: 84px;
  object-fit: contain;
  transform: rotate(18deg);
}

.task-list-body {
  width: 358px;
  height: 423px;
  background: #ffffff;
}

.task-row {
  position: relative;
  width: 358px;
  padding: 0 20px;
  background: #ffffff;
}

.task-row::after {
  content: "";
  position: absolute;
  left: 20px;
  bottom: 0;
  width: 318px;
  height: 1px;
  background: var(--task-list-line-color, #f2eee7);
}

.task-row--simple {
  height: 108px;
}

.task-row--progress {
  height: 161px;
}

.task-row--invite {
  height: 154px;
}

.task-row__main {
  position: absolute;
  left: 20px;
  top: 24px;
  display: grid;
  grid-template-columns: 1fr 80px;
  align-items: start;
  gap: 8px;
  width: 318px;
  min-height: 40px;
}

.task-row--invite .task-row__main {
  min-height: 36px;
}

.task-row__text {
  min-width: 0;
}

.task-row__text h3 {
  margin: 0;
  max-width: 230px;
  color: var(--task-list-text-color, #000000);
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
}

.task-row--invite .task-row__text h3 {
  max-width: 198px;
  display: -webkit-box;
  overflow: hidden;
  white-space: normal;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.task-row__reward {
  margin: 4px 0 0;
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--task-list-highlight-color, #ff9500);
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
}

.task-row__desc {
  position: absolute;
  left: 20px;
  top: 76px;
  margin: 0;
  width: 318px;
  overflow: hidden;
  color: var(--task-list-muted-color, rgba(0, 0, 0, 0.48));
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
}

.task-button {
  width: 80px;
  height: 32px;
  min-height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  background: var(--task-list-button-bg, #16db4c);
  color: var(--task-list-button-text, #ffffff);
  font: inherit;
  font-size: 13px;
  line-height: 17px;
  font-weight: 600;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.task-button:disabled {
  color: rgba(255, 255, 255, 0.86);
  background: var(--task-list-button-disabled-bg, rgba(22, 219, 76, 0.48));
}

.task-progress {
  position: relative;
  top: 80px;
  width: 318px;
  height: 57px;
  margin: 0;
  padding-left: 12px;
  display: grid;
  grid-template-columns: repeat(4, 55px);
  column-gap: 24px;
  overflow: hidden;
}

.task-progress__track {
  position: absolute;
  left: 0;
  top: 35px;
  width: 318px;
  height: 2px;
  background: var(--task-list-progress-track, #f8f8f8);
}

.task-progress__track span {
  display: block;
  min-width: 17px;
  height: 2px;
  background: var(--task-list-highlight-color, #ff9500);
}

.task-progress__step {
  position: relative;
  width: 55px;
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 4px;
  z-index: 1;
}

.task-progress__pill {
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 2px 6px;
  border-radius: 26px;
  background: var(--task-list-progress-track, #f8f8f8);
  color: rgba(0, 0, 0, 0.65);
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
}

.task-progress__node {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--task-list-progress-track, #f8f8f8);
}

.task-progress__step.is-reached .task-progress__node {
  background: var(--task-list-highlight-color, #ff9500);
}

.task-progress__label {
  color: var(--task-list-progress-text, #888888);
  font-size: 10px;
  line-height: 13px;
  font-weight: 400;
}

.invite-benefit {
  position: absolute;
  left: 20px;
  top: 76px;
  width: 318px;
  height: 54px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 12px;
  background: var(--task-list-benefit-bg, #f8f8f8);
}

.invite-benefit__side {
  min-width: 0;
  flex: 1 1 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.invite-benefit__avatar {
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  border-radius: 50%;
  object-fit: cover;
  background: linear-gradient(145deg, #f3d8b8, #b8753c);
}

.invite-benefit__avatar--friend {
  background:
    radial-gradient(circle at 50% 28%, #f8b449 0 7px, transparent 8px),
    radial-gradient(circle at 50% 74%, #f8a13a 0 13px, transparent 14px),
    #ffe3a7;
}

.invite-benefit__side strong,
.invite-benefit__side em {
  display: block;
  font-style: normal;
  white-space: nowrap;
}

.invite-benefit__side strong {
  color: rgba(0, 0, 0, 0.65);
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
}

.invite-benefit__side em {
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--task-list-highlight-color, #ff9500);
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
}

.invite-benefit__divider {
  width: 1px;
  height: 36px;
  background: rgba(92, 63, 34, 0.10);
}

.medium-icon {
  width: 14px;
  height: 14px;
  flex: 0 0 14px;
  object-fit: contain;
}

.medium-icon--small {
  width: 12px;
  height: 12px;
  flex-basis: 12px;
}

```

### component-library/components/task-list/task-list.js

```javascript
(function () {
  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function mediumIcon(config, className = "medium-icon") {
    if (!config.mediumIconImage) return "";
    return `<img class="${className}" src="${escapeHtml(config.mediumIconImage)}" alt="" />`;
  }

  function taskMain(task, config) {
    const status = task.status || "available";
    const disabled = status !== "available";
    const label = status === "claimed" ? "Done" : task.actionLabel;
    const reward = task.rewardText ?? task.rewardAmount;

    return `
      <div class="task-row__main">
        <div class="task-row__text">
          <h3>${escapeHtml(task.title)}</h3>
          ${reward ? `<p class="task-row__reward">${mediumIcon(config)}${escapeHtml(reward)}</p>` : ""}
        </div>
        <button class="task-button" type="button" data-task-id="${escapeHtml(task.id)}" ${disabled ? "disabled" : ""}>${escapeHtml(label)}</button>
      </div>
    `;
  }

  function progress(task, config) {
    const progressPercent = Math.max(0, Math.min(1, task.progress || 0)) * 33;
    const steps = task.steps || [];

    return `
      <div class="task-progress">
        <div class="task-progress__track" aria-hidden="true">
          <span style="width: ${progressPercent}%"></span>
        </div>
        ${steps.map((step) => `
          <div class="task-progress__step ${step.reached ? "is-reached" : ""}">
            <span class="task-progress__pill">${mediumIcon(config, "medium-icon medium-icon--small")}${escapeHtml(step.reward)}</span>
            <span class="task-progress__node"></span>
            <span class="task-progress__label">${escapeHtml(step.label)}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  function inviteBenefit(task, config) {
    const rewards = task.inviteRewards || [];

    return `
      <div class="invite-benefit">
        ${rewards.map((item) => `
          <div class="invite-benefit__side">
            ${item.avatarImage
              ? `<img class="invite-benefit__avatar" src="${escapeHtml(item.avatarImage)}" alt="" />`
              : `<span class="invite-benefit__avatar invite-benefit__avatar--${escapeHtml(item.avatar || "self")}"></span>`}
            <span>
              <strong>${escapeHtml(item.label)}</strong>
              <em>${mediumIcon(config, "medium-icon medium-icon--small")}${escapeHtml(item.value)}</em>
            </span>
          </div>
        `).join('<span class="invite-benefit__divider"></span>')}
      </div>
    `;
  }

  function row(task, config) {
    const rowClass = task.type === "progress"
      ? "task-row task-row--progress"
      : task.type === "invite"
        ? "task-row task-row--invite"
        : "task-row task-row--simple";

    if (task.type === "progress") {
      return `
        <article class="${rowClass}">
          ${taskMain(task, config)}
          ${progress(task, config)}
        </article>
      `;
    }

    if (task.type === "invite") {
      return `
        <article class="${rowClass}">
          ${taskMain(task, config)}
          ${inviteBenefit(task, config)}
        </article>
      `;
    }

    return `
      <article class="${rowClass}">
        ${taskMain(task, config)}
        <p class="task-row__desc">${escapeHtml(task.description)}</p>
      </article>
    `;
  }

  function template(config) {
    const title = config.title || "Daily Task";
    const subtitle = config.subtitle || "Updated everyday 24:00";
    const tasks = config.tasks || [];

    return `
      <section class="tasks" aria-label="${escapeHtml(config.ariaLabel || title)}">
        <div class="task-list-title">
          <div class="task-list-title__copy">
            <h2>${escapeHtml(title)}</h2>
            <p>${escapeHtml(subtitle)}</p>
          </div>
          <div class="task-list-icon" aria-hidden="true">
            ${config.headerIconImage
              ? `<img class="task-list-icon__medium" src="${escapeHtml(config.headerIconImage)}" alt="" />`
              : mediumIcon(config, "task-list-icon__medium")}
          </div>
        </div>
        <div class="task-list-body">${tasks.map((task) => row(task, config)).join("")}</div>
      </section>
    `;
  }

  class IncentiveTaskListElement extends HTMLElement {
    connectedCallback() {
      if (!this._config) this._config = {};
      this.render();
    }

    set config(value) {
      this._config = value || {};
      if (this.isConnected) this.render();
    }

    get config() {
      return this._config || {};
    }

    render() {
      this.innerHTML = template(this.config);
      this.querySelectorAll("[data-task-id]").forEach((button) => {
        button.addEventListener("click", () => {
          this.dispatchEvent(new CustomEvent("task-list-action", {
            bubbles: true,
            detail: { taskId: button.getAttribute("data-task-id") }
          }));
        });
      });
    }
  }

  window.IncentiveTaskList = { template };

  if (!customElements.get("incentive-task-list")) {
    customElements.define("incentive-task-list", IncentiveTaskListElement);
  }
})();

```

### component-library/components/toast/component.md

```markdown
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

```

### component-library/components/top-navigation/assets/music-note-s-alt-centered.svg

```xml
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.7087 1.91698L17.708 14.3331C17.708 15.9439 16.4022 17.2498 14.7914 17.2498C13.1806 17.2498 11.8747 15.9439 11.8747 14.3331C11.8747 12.7223 13.1806 11.4164 14.7914 11.4164H16.292V4.09895L8.12533 5.16145L8.12468 15.5831C8.12468 17.1939 6.81885 18.4998 5.20802 18.4998C3.59719 18.4998 2.29135 17.1939 2.29135 15.5831C2.29135 13.9723 3.59719 12.6664 5.20802 12.6664H6.70867V3.24307C6.70867 3.03378 6.86391 2.85697 7.07144 2.8299L17.2381 1.50382C17.4876 1.47129 17.7087 1.66547 17.7087 1.91698Z" fill="currentColor" fill-opacity="0.8"/>
</svg>

```

### component-library/components/top-navigation/assets/music-note-s-alt.svg

```xml
<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 15.4173 16.9995" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="music_note_s_alt" d="M15.4173 0.416733L15.4167 12.8328C15.4167 14.4436 14.1108 15.7495 12.5 15.7495C10.8892 15.7495 9.58333 14.4436 9.58333 12.8328C9.58333 11.222 10.8892 9.91615 12.5 9.91615H14.0007V2.5987L5.83398 3.6612L5.83333 14.0828C5.83333 15.6936 4.5275 16.9995 2.91667 16.9995C1.30584 16.9995 0 15.6936 0 14.0828C0 12.472 1.30584 11.1661 2.91667 11.1661H4.41732V1.74282C4.41732 1.53353 4.57256 1.35672 4.78009 1.32965L14.9468 0.00356619C15.1962 -0.028965 15.4173 0.165214 15.4173 0.416733Z" fill="var(--fill-0, black)" fill-opacity="0.8"/>
</svg>

```

### component-library/components/top-navigation/component.md

```markdown
# 组件名称

`TopNavigation` / `导航栏组件`

## 组件功能

用于页面之间的导航。每个活动页面都必须有导航栏，用来承载状态栏、返回上一级页面、右侧全局动作入口，以及可选标题区域。

## H5 实现

可复用 H5 组件文件：

- `top-navigation.css`
- `top-navigation.js`
- `assets/music-note-s-alt-centered.svg`

页面使用方式：

```html
<link rel="stylesheet" href="../../component-library/components/top-navigation/top-navigation.css" />
<script src="../../component-library/components/top-navigation/top-navigation.js"></script>
<incentive-top-navigation
  variant="two-dark"
></incentive-top-navigation>
```

Activity pages should use the `<incentive-top-navigation>` component instance instead of hand-writing the navigation DOM and CSS inside each page.

Supported Figma variants:

| `variant` | Figma node | Figma name | Size | Status bar | Nav row | Right actions |
| --- | --- | --- | --- | --- | --- | --- |
| `two-dark` | `331:13611` | `双按钮导航（暗色）` | 390 x 91 | 390 x 47 | y 47, h 44 | Music, Question |
| `two-light` | `331:13637` | `双按钮导航（亮色）` | 390 x 91 | 390 x 47 | y 47, h 44 | Music, Question |
| `three-dark` | `331:13612` | `三按钮导航（暗色）` | 390 x 96 | 390 x 52 | y 52, h 44 | Music, Share, More |
| `one-dark` | `404:13177` | `单按钮导航（暗色）` | 390 x 96 | 390 x 52 | y 52, h 44 | More |

The component code must be reused directly. Do not recreate navigation DOM, icon buttons, system bar, or action layout inside activity pages.

Events:

```js
document.querySelector("incentive-top-navigation").addEventListener("top-navigation-back", () => {
  window.history.back();
});

document.querySelector("incentive-top-navigation").addEventListener("top-navigation-action", (event) => {
  const action = event.detail.action;
});
```

## 配置项

### 文字

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `title` | string | no | empty | 标题区可选文案；多数活动页保持隐藏或为空。 |

### 变体

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `variant` | enum | yes | `two-dark` | `two-dark`, `two-light`, `three-dark`, `one-dark`。必须映射到 Figma 变体，不允许临时组合。 |
| `actions` | string | no | variant default | 仅用于调试或明确用户要求。默认按 Figma 变体固定动作。 |

### 图片 / 图标

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `logoImage` | image | no | hidden | 仅在 Figma 变体支持 Logo slot 时使用。 |
| `rightActions[].icon` | enum | yes | - | 仅允许使用组件库内置图标：`Music`, `Question`, `Share`, `More`。 |

### 交互行为

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `onBack` | function | yes | history back | 点击 `NaviBar1IconImage`，返回上一个页面。 |
| `onMusicClick` | function | no | - | 点击 `Music` 按钮。 |
| `onQuestionClick` | function | no | - | 点击 `Question` 按钮。 |
| `onShareClick` | function | no | - | 点击 `Share` 按钮。 |
| `onMoreClick` | function | no | - | 点击 `More` 按钮。 |
| `onRightActionClick` | function | no | - | 统一右侧按钮回调，参数为 action type。 |

## 组件规范

### Layout

- 组件宽度固定为 390，贴页面顶部 x 0, y 0。
- 导航由状态栏和 44px navigation row 组成。
- `NaviBar1IconImage`: x 16, y 6, width 32, height 32，相对 nav row。
- `Title Area`: x 96, y 0, width 213, height 44，相对 nav row。
- Icon button: 32 x 32, inner icon 20 x 20.
- `单按钮导航（暗色）`: 390 x 96, status bar 52, nav row y 52 / h 44; right action group x 315, y 6, width 59, height 32; confirmed right action `More`.
- `双按钮导航（暗色）`: 390 x 91, status bar 47, nav row y 47 / h 44; right action group x 302, y 6, width 72, height 32; confirmed right actions `Music`, `Question`.
- `三按钮导航（暗色）`: 390 x 96, status bar 52, nav row y 52 / h 44; right action group x 231, y 6, width 143, height 32; confirmed right actions `Music`, `Share`, `More`.
- `双按钮导航（亮色）`: 390 x 91, status bar 47, nav row y 47 / h 44; right action group x 300, y 6, width 74, height 32; confirmed right actions `Music`, `Question`.
- `单按钮导航（亮色）` and `三按钮导航（亮色）`: target variants required by the component model, Figma source pending if not present in the file.

### H5 Code Lock

- Use `<incentive-top-navigation variant="..."></incentive-top-navigation>`.
- Do not use emoji, text glyphs, or page-local SVGs for the navigation icons.
- Icons are owned by `top-navigation.js` and must stay inside the component implementation.
- Music uses the Figma-exported `Icon/Music_Note_S_Alt` vector path, normalized into a centered `20 x 20` inline SVG canvas before use.
- Activity pages may listen to `top-navigation-back` and `top-navigation-action`, but must not query internal buttons or mutate internal DOM.
- If a new Figma variant is needed, first add it to this component and document the Figma node.

### Visual Lock

- 导航颜色由 Figma 变体所有，不跟随活动主题重新上色。
- 不改 icon surface、border、opacity、状态栏颜色和按钮尺寸。
- 亮色背景使用暗色版本；暗色背景使用亮色版本。
- 需要不同明暗对比时切换 Figma 变体，而不是局部改色。
- 右侧按钮只能从 `Music`, `Question`, `Share`, `More` 中选择，不能新增未入库图标。

### States

- Default
- Pressed/tapped
- Hidden title/logo slot when unsupported by the selected variant
- Right action hidden when `rightActionCount` is smaller than the variant capacity

### Interaction

```ts
function handleBackClick() {
  window.history.back();
}

function handleRightActionClick(action: "Music" | "Question" | "Share" | "More") {
  onRightActionClick?.(action);
}
```

### QA

- 页面搭建时必须使用实例。
- 每个页面都必须有导航栏。
- 必须位于页面 z-order 顶层。
- 标题图可以视觉靠近导航，但不能遮挡状态栏、返回按钮和右侧动作。
- `NaviBar1IconImage` 必须可点击并返回上一页。
- 右侧可见按钮都必须可点击，且点击热区不小于 32 x 32。
- 背景明暗必须通过选择 `colorMode` 对应 Figma 变体解决，不能一页内手动改色。

## 组件 Figma 链接

- Section: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13391&t=jgYoAiBFUoOfsfUR-4
- 单按钮导航（暗色）: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=404-13177
- 双按钮导航（暗色）: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13611
- 三按钮导航（暗色）: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13612
- 双按钮导航（亮色）: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13637
- 单按钮导航（亮色）: Figma source pending
- 三按钮导航（亮色）: Figma source pending

```

### component-library/components/top-navigation/top-navigation.css

```css
incentive-top-navigation {
  display: block;
  width: 390px;
  height: 91px;
  position: relative;
  z-index: 5;
  font-family: "TikTok Sans", "SF Pro", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  letter-spacing: 0;
}

incentive-top-navigation[variant="one-dark"],
incentive-top-navigation[variant="three-dark"] {
  height: 96px;
}

.ip-top-navigation {
  position: relative;
  width: 390px;
  height: 91px;
  color: #000000;
}

.ip-top-navigation[data-variant="one-dark"],
.ip-top-navigation[data-variant="three-dark"] {
  height: 96px;
}

.ip-top-navigation[data-variant="two-light"] {
  color: #ffffff;
}

.ip-top-navigation__status {
  position: absolute;
  left: 0;
  top: 0;
  width: 390px;
  height: 47px;
}

.ip-top-navigation[data-variant="one-dark"] .ip-top-navigation__status,
.ip-top-navigation[data-variant="three-dark"] .ip-top-navigation__status {
  height: 52px;
}

.ip-top-navigation__time {
  position: absolute;
  left: 49.5px;
  top: 18.5px;
  width: 41px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "SF Pro", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 17px;
  line-height: 21px;
  font-weight: 590;
  white-space: nowrap;
}

.ip-top-navigation[data-variant="two-dark"] .ip-top-navigation__time,
.ip-top-navigation[data-variant="two-light"] .ip-top-navigation__time {
  left: 45px;
  top: 14px;
  width: 42px;
  height: 20px;
  font-size: 15px;
  line-height: 20px;
  font-weight: 800;
}

.ip-top-navigation__system-icons {
  position: absolute;
  right: 32.86px;
  top: 22.6px;
  width: 77.292px;
  height: 13px;
}

.ip-top-navigation[data-variant="two-dark"] .ip-top-navigation__system-icons,
.ip-top-navigation[data-variant="two-light"] .ip-top-navigation__system-icons {
  right: 28px;
  top: 16px;
}

.ip-top-navigation__cellular {
  position: absolute;
  left: 0;
  top: 0.5px;
  width: 19.054px;
  height: 12px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
}

.ip-top-navigation__cellular span {
  display: block;
  width: 3px;
  border-radius: 1px;
  background: currentColor;
}

.ip-top-navigation__cellular span:nth-child(1) {
  height: 4px;
}

.ip-top-navigation__cellular span:nth-child(2) {
  height: 6px;
}

.ip-top-navigation__cellular span:nth-child(3) {
  height: 9px;
}

.ip-top-navigation__cellular span:nth-child(4) {
  height: 12px;
}

.ip-top-navigation__wifi {
  position: absolute;
  left: 26.054px;
  top: 0.45px;
  width: 17.011px;
  height: 12.1px;
}

.ip-top-navigation__wifi svg,
.ip-top-navigation__icon svg {
  display: block;
  width: 100%;
  height: 100%;
}

.ip-top-navigation__battery {
  position: absolute;
  left: 50.064px;
  top: 0;
  width: 27.228px;
  height: 13px;
}

.ip-top-navigation__battery-body {
  position: absolute;
  left: 0;
  top: 1px;
  width: 24px;
  height: 11px;
  border: 1.5px solid currentColor;
  border-radius: 3.6px;
}

.ip-top-navigation__battery-fill {
  position: absolute;
  left: 3px;
  top: 4px;
  width: 15px;
  height: 5px;
  border-radius: 1.5px;
  background: currentColor;
}

.ip-top-navigation__battery-cap {
  position: absolute;
  right: 0;
  top: 4.2px;
  width: 2.2px;
  height: 4.6px;
  border-radius: 0 1.5px 1.5px 0;
  background: currentColor;
}

.ip-top-navigation__row {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 390px;
  height: 44px;
}

.ip-top-navigation__back {
  position: absolute;
  left: 16px;
  top: 6px;
}

.ip-top-navigation__actions {
  position: absolute;
  top: 6px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.ip-top-navigation[data-variant="two-dark"] .ip-top-navigation__actions {
  left: 302px;
  width: 72px;
  gap: 8px;
}

.ip-top-navigation[data-variant="two-light"] .ip-top-navigation__actions {
  left: 300px;
  width: 74px;
  gap: 10px;
}

.ip-top-navigation[data-variant="three-dark"] .ip-top-navigation__actions {
  left: 231px;
  width: 143px;
  gap: 10px;
}

.ip-top-navigation[data-variant="one-dark"] .ip-top-navigation__actions {
  left: 315px;
  width: 59px;
  gap: 0;
}

.ip-top-navigation__title-area {
  position: absolute;
  left: 96px;
  top: 0;
  width: 213px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
}

.ip-top-navigation__title {
  max-width: 213px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
}

.ip-top-navigation__button {
  width: 32px;
  height: 32px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.75);
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.ip-top-navigation[data-variant="two-dark"] .ip-top-navigation__button {
  background: rgba(255, 255, 255, 0.6);
  color: #000000;
}

.ip-top-navigation[data-variant="two-light"] .ip-top-navigation__button {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

.ip-top-navigation__button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.ip-top-navigation__icon {
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  flex: none;
}

.ip-top-navigation__more {
  width: 59px;
  height: 32px;
  padding: 6px 12px;
  border: 1px solid #ffffff;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.75);
  color: rgba(0, 0, 0, 0.65);
  font-family: "TikTok Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 14px;
  line-height: 18.2px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
}

.ip-top-navigation__more:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

```

### component-library/components/top-navigation/top-navigation.js

```javascript
(function () {
  const variants = {
    "two-dark": {
      nodeId: "331:13611",
      height: 91,
      statusTime: "8:00",
      actions: ["Music", "Question"]
    },
    "two-light": {
      nodeId: "331:13637",
      height: 91,
      statusTime: "8:00",
      actions: ["Music", "Question"]
    },
    "three-dark": {
      nodeId: "331:13612",
      height: 96,
      statusTime: "13:13",
      actions: ["Music", "Share", "More"]
    },
    "one-dark": {
      nodeId: "404:13177",
      height: 96,
      statusTime: "13:13",
      actions: ["More"]
    }
  };

  function iconSvg(action) {
    if (action === "Music") {
      return `
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path fill="currentColor" fill-opacity="0.8" d="M17.7087 1.917L17.708 14.3331C17.708 15.9439 16.4022 17.2498 14.7914 17.2498C13.1806 17.2498 11.8747 15.9439 11.8747 14.3331C11.8747 12.7223 13.1806 11.4164 14.7914 11.4164H16.292V4.099L8.1253 5.1615L8.1247 15.5831C8.1247 17.1939 6.8189 18.4998 5.208 18.4998C3.5972 18.4998 2.2914 17.1939 2.2914 15.5831C2.2914 13.9723 3.5972 12.6664 5.208 12.6664H6.7087V3.2431C6.7087 3.0338 6.8639 2.857 7.0714 2.8299L17.2381 1.5038C17.4876 1.4713 17.7087 1.6655 17.7087 1.917Z"/>
        </svg>
      `;
    }

    if (action === "Share") {
      return `
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path fill="currentColor" d="M11.72 3.22a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H9.25A4.25 4.25 0 0 0 5 12.75V16a.75.75 0 0 1-1.5 0v-3.25A5.75 5.75 0 0 1 9.25 7h5.19l-2.72-2.72a.75.75 0 0 1 0-1.06Z"/>
        </svg>
      `;
    }

    if (action === "Question") {
      return `
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path fill="currentColor" d="M9.93 2.8c-2.2 0-3.86 1.2-4.22 3.04a.78.78 0 0 0 .62.92l.68.12a.77.77 0 0 0 .87-.55c.2-.76.86-1.45 1.98-1.45 1.23 0 2.02.72 2.02 1.76 0 .84-.42 1.36-1.52 2.06-1.32.84-1.86 1.66-1.8 3.06l.02.38h2.13v-.3c0-.84.33-1.26 1.48-1.98 1.3-.82 2.23-1.74 2.23-3.32 0-2.2-1.76-3.74-4.49-3.74Zm-.28 10.62c-.84 0-1.46.58-1.46 1.4 0 .8.62 1.38 1.46 1.38.86 0 1.48-.58 1.48-1.38 0-.82-.62-1.4-1.48-1.4Z"/>
        </svg>
      `;
    }

    return "";
  }

  function systemIcons() {
    return `
      <div class="ip-top-navigation__system-icons" aria-hidden="true">
        <div class="ip-top-navigation__cellular"><span></span><span></span><span></span><span></span></div>
        <div class="ip-top-navigation__wifi">
          <svg viewBox="0 0 18 13">
            <path d="M1.4 4.9C5.4 1.7 12.6 1.7 16.6 4.9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M4.5 7.7c2.4-1.8 6.6-1.8 9 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M7.4 10.4c.9-.7 2.3-.7 3.2 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="ip-top-navigation__battery">
          <span class="ip-top-navigation__battery-body"></span>
          <span class="ip-top-navigation__battery-fill"></span>
          <span class="ip-top-navigation__battery-cap"></span>
        </div>
      </div>
    `;
  }

  function actionButton(action) {
    if (action === "More") {
      return `<button class="ip-top-navigation__more" type="button" data-top-nav-action="More">More</button>`;
    }

    return `
      <button class="ip-top-navigation__button" type="button" data-top-nav-action="${action}" aria-label="${action}">
        <span class="ip-top-navigation__icon">${iconSvg(action)}</span>
      </button>
    `;
  }

  function template(config) {
    const variant = variants[config.variant] || variants["two-dark"];
    const actions = config.actions || variant.actions;

    return `
      <div class="ip-top-navigation" data-variant="${config.variant}" data-node-id="${variant.nodeId}" data-name="${config.name}">
        <div class="ip-top-navigation__status">
          <div class="ip-top-navigation__time">${config.statusTime || variant.statusTime}</div>
          ${systemIcons()}
        </div>
        <div class="ip-top-navigation__row" data-name="NAV BAR MOCK">
          <button class="ip-top-navigation__button ip-top-navigation__back" type="button" data-top-nav-back aria-label="Back">
            <span class="ip-top-navigation__icon">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path fill="currentColor" d="M12.7 3.3a1 1 0 0 1 0 1.4L7.4 10l5.3 5.3a1 1 0 1 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.4 0Z"/>
              </svg>
            </span>
          </button>
          <div class="ip-top-navigation__actions">${actions.map(actionButton).join("")}</div>
          <div class="ip-top-navigation__title-area">${config.title ? `<div class="ip-top-navigation__title">${config.title}</div>` : ""}</div>
        </div>
      </div>
    `;
  }

  class IncentiveTopNavigationElement extends HTMLElement {
    static get observedAttributes() {
      return ["variant", "title", "actions", "status-time"];
    }

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback() {
      if (this.isConnected) this.render();
    }

    get config() {
      const variant = this.getAttribute("variant") || "two-dark";
      return {
        variant,
        name: variants[variant]?.nodeId || "TopNavigation",
        title: this.getAttribute("title") || "",
        statusTime: this.getAttribute("status-time") || "",
        actions: this.getAttribute("actions")
          ? this.getAttribute("actions").split(",").map((item) => item.trim()).filter(Boolean)
          : null
      };
    }

    render() {
      this.innerHTML = template(this.config);
      this.querySelector("[data-top-nav-back]")?.addEventListener("click", () => {
        this.dispatchEvent(new CustomEvent("top-navigation-back", { bubbles: true }));
      });
      this.querySelectorAll("[data-top-nav-action]").forEach((button) => {
        button.addEventListener("click", () => {
          this.dispatchEvent(
            new CustomEvent("top-navigation-action", {
              bubbles: true,
              detail: { action: button.getAttribute("data-top-nav-action") }
            })
          );
        });
      });
    }
  }

  if (!customElements.get("incentive-top-navigation")) {
    customElements.define("incentive-top-navigation", IncentiveTopNavigationElement);
  }
})();

```

### component-library/README.md

```markdown
# Activity Component Library

This directory is the single source of truth for reusable activity-page components.

Each component folder may contain:

- `component.md`: component contract, Figma source, allowed configuration, locked structure, and QA rules.
- runtime files such as `.js`, `.css`, or framework adapters when the component has reusable code.
- `assets/`: locked or default component assets.

Activity pages must reuse component code from this directory whenever a matching component exists. Page-specific code in `examples/` should only pass config, copy, assets, and callbacks into the component; it should not rewrite the component DOM/CSS locally.

## Figma Source

- File: `AI 智能设计项目`
- File key: `6kbxtsIkWd5TGgyBgP3LJq`
- Component page: `组件`
- Component page node: `183:10432`

Current Figma section structure:

| Section | Figma node | Confirmed component frames |
| --- | --- | --- |
| 活动主标题 | pending | `PrimaryTitle` 结构规范，Figma source pending |
| Toast组件 | `481:3532` | `toast/one_row`, `toast/two_row` |
| 资产组件 | `331:11976` | `有进度无标题`, `有进度有标题`, `无进度有标题` |
| 按钮组件 | `331:13281` | `一排三按钮组件`, `一排一`, `一排二` |
| 导航栏组件 | `331:13391` | `双按钮导航（暗色）`, `三按钮导航（暗色）`, `双按钮导航（亮色）` |
| 分享面板 | `332:15383` | `引导分享面板`, `二维码分享面板`, `沉底分享面板` |
| 弹窗组件 | `521:18039` | `无图弹窗`, `有图弹窗` |
| 进贡组件 | `332:18917` | `有进贡` |

## Component Entry Format

Every component document must include these sections:

1. `组件名称`
2. `组件功能`
3. `配置项`
4. `组件规范`
5. `组件 Figma 链接`

Use `_component-template.md` for new component entries.

## Rules

- Component reuse is mandatory-first for all activity pages. Before creating a page-specific module, search this catalog for a matching component.
- Use catalog components for any matching content: navigation, asset/reward cards, primary titles, buttons/action bars, share panels, dialog, toast, contribution modules, and other reusable page sections.
- Reward results from lottery, blind box, spin, scratch, or task-claim flows must use the Dialog component instead of Toast.
- Only create a new page-specific component when the catalog has no suitable match. Document the missing component, why existing components do not fit, and whether the new component should be added back to this catalog.
- Preserve the original Figma source format. If the source is a `FRAME`, copy that frame directly and apply allowed overrides. If the source is a true component or instance, use an instance.
- Keep reusable implementation code with the component folder. Keep page-specific usage code in `examples/`.
- Configuration can change text, images, and supported interaction behavior.
- Locked nested components must not be recolored, resized, detached, or restyled.
- `粒子特效` is locked: keep its original color, opacity, dimensions, and internal styling in both code and Figma.
- If a component has no Figma source yet, document it as `Figma source: pending` and keep implementation details separate from the reusable contract.

## Ownership Boundary

- `component-library/components/*` owns strict reusable component contracts and reusable code.
- `skills/vibe-activity-page/references/*` owns page framework selection, open-zone rules, gameplay guidance, visual rules, and QA workflow.
- `skills/vibe-activity-page/components/` is deprecated and must not contain component implementations.

```

### contracts/campaign-request.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "campaign-request.schema.json",
  "title": "CampaignRequest",
  "type": "object",
  "required": [
    "schema_version",
    "artifact_type",
    "producer_skill",
    "target_skill",
    "status",
    "raw_request",
    "region",
    "audience",
    "business_goal",
    "assumptions",
    "open_questions"
  ],
  "properties": {
    "schema_version": { "type": "string", "pattern": "^1\\." },
    "artifact_type": { "const": "campaign_request" },
    "producer_skill": { "type": "string" },
    "target_skill": { "type": "string" },
    "status": { "enum": ["draft", "ready", "blocked"] },
    "raw_request": { "type": "string" },
    "region": { "type": "string" },
    "audience": { "type": "string" },
    "business_goal": { "type": "string" },
    "known_constraints": {
      "type": "array",
      "items": { "type": "string" },
      "default": []
    },
    "available_inputs": {
      "type": "object",
      "additionalProperties": true,
      "default": {}
    },
    "assumptions": {
      "type": "array",
      "items": { "type": "string" }
    },
    "open_questions": {
      "type": "array",
      "items": { "type": "string" }
    }
  },
  "additionalProperties": true
}

```

### contracts/page-build-spec.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "page-build-spec.schema.json",
  "title": "PageBuildSpec",
  "description": "Output of vibe-activity-page. It defines the page architecture, locked components, generated code, and final page delivery details.",
  "type": "object",
  "required": [
    "schema_version",
    "artifact_type",
    "producer_skill",
    "target_skill",
    "status",
    "source_strategy_summary",
    "canvas",
    "page_architecture",
    "component_contracts",
    "layout_slots",
    "content_config",
    "implementation",
    "qa_requirements",
    "assumptions",
    "open_questions"
  ],
  "properties": {
    "schema_version": { "type": "string", "pattern": "^1\\." },
    "artifact_type": { "const": "page_build_spec" },
    "producer_skill": { "const": "vibe-activity-page" },
    "target_skill": { "const": "final_delivery" },
    "status": { "enum": ["draft", "ready", "blocked"] },
    "source_strategy_summary": {
      "type": "object",
      "required": ["target_user", "region", "campaign_goal", "page_structure"],
      "properties": {
        "target_user": {
          "type": "object",
          "required": ["segment", "age", "gender", "identity", "traits"],
          "properties": {
            "segment": { "type": "string" },
            "age": { "type": "string" },
            "gender": { "type": "string" },
            "identity": { "type": "string" },
            "traits": {
              "type": "array",
              "items": { "type": "string" }
            }
          },
          "additionalProperties": false
        },
        "region": { "type": "string" },
        "campaign_goal": { "type": "string" },
        "page_structure": {
          "type": "object",
          "required": ["type", "contents"],
          "properties": {
            "type": { "type": "string" },
            "contents": {
              "type": "array",
              "items": {
                "type": "object",
                "required": ["id", "name", "description"],
                "properties": {
                  "id": { "type": "string" },
                  "name": { "type": "string" },
                  "description": { "type": "string" },
                  "fixed": { "type": "boolean" }
                },
                "additionalProperties": false
              }
            }
          },
          "additionalProperties": false
        },
        "selected_gameplay": { "type": "string" }
      },
      "additionalProperties": true
    },
    "canvas": {
      "type": "object",
      "required": ["width", "height", "baseline_width", "responsive_behavior"],
      "properties": {
        "width": { "type": "number" },
        "height": { "type": "number" },
        "baseline_width": { "type": "number" },
        "responsive_behavior": { "type": "string" },
        "safe_area": {
          "type": "object",
          "properties": {
            "top": { "type": "number" },
            "bottom": { "type": "number" },
            "left": { "type": "number" },
            "right": { "type": "number" }
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": true
    },
    "page_architecture": {
      "type": "object",
      "required": ["framework", "sections", "primary_flow"],
      "properties": {
        "framework": { "type": "string" },
        "sections": {
          "type": "array",
          "items": {
            "type": "object",
            "required": ["id", "role", "component", "fixed"],
            "properties": {
              "id": { "type": "string" },
              "role": { "type": "string" },
              "component": { "type": "string" },
              "fixed": { "type": "boolean" },
              "order": { "type": "number" },
              "notes": { "type": "string" }
            },
            "additionalProperties": true
          },
          "minItems": 1
        },
        "primary_flow": {
          "type": "array",
          "items": { "type": "string" },
          "minItems": 2
        }
      },
      "additionalProperties": true
    },
    "component_contracts": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["id", "component", "strictness", "locked", "props"],
        "properties": {
          "id": { "type": "string" },
          "component": { "type": "string" },
          "strictness": { "enum": ["strict", "semi_strict", "flexible"] },
          "source": { "type": "string" },
          "locked": {
            "type": "object",
            "required": ["structure", "size", "position", "copy"],
            "properties": {
              "structure": { "type": "boolean" },
              "size": { "type": "boolean" },
              "position": { "type": "boolean" },
              "copy": { "type": "boolean" },
              "color": { "type": "boolean" }
            },
            "additionalProperties": false
          },
          "props": {
            "type": "object",
            "additionalProperties": true
          },
          "qa_rules": {
            "type": "array",
            "items": { "type": "string" },
            "default": []
          }
        },
        "additionalProperties": true
      },
      "minItems": 1
    },
    "layout_slots": {
      "type": "object",
      "required": ["background_slot", "title_art_box", "asset_card_box", "gameplay_asset_box", "bottom_actions_box"],
      "properties": {
        "background_slot": { "$ref": "#/$defs/box" },
        "title_art_box": { "$ref": "#/$defs/box" },
        "asset_card_box": { "$ref": "#/$defs/box" },
        "gameplay_asset_box": { "$ref": "#/$defs/box" },
        "bottom_actions_box": { "$ref": "#/$defs/box" },
        "reserved_gaps": {
          "type": "array",
          "items": {
            "type": "object",
            "required": ["id", "from", "to", "rule"],
            "properties": {
              "id": { "type": "string" },
              "from": { "type": "string" },
              "to": { "type": "string" },
              "rule": { "type": "string" }
            },
            "additionalProperties": true
          },
          "default": []
        }
      },
      "additionalProperties": true
    },
    "content_config": {
      "type": "object",
      "required": ["title", "reward", "cta", "timer", "share"],
      "properties": {
        "title": { "type": "string" },
        "reward": { "type": "object", "additionalProperties": true },
        "cta": { "type": "object", "additionalProperties": true },
        "timer": { "type": "object", "additionalProperties": true },
        "share": { "type": "object", "additionalProperties": true }
      },
      "additionalProperties": true
    },
    "implementation": {
      "type": "object",
      "required": ["stack", "entry_file", "generated_files", "asset_directory"],
      "properties": {
        "stack": {
          "type": "array",
          "items": { "type": "string" },
          "minItems": 1
        },
        "entry_file": { "type": "string" },
        "generated_files": {
          "type": "array",
          "items": { "type": "string" }
        },
        "asset_directory": { "type": "string" },
        "dependencies": {
          "type": "array",
          "items": { "type": "string" },
          "default": []
        }
      },
      "additionalProperties": true
    },
    "asset_generation_plan": {
      "type": "object",
      "required": ["visual_freedom", "asset_requests", "locked_visual_rules"],
      "properties": {
        "visual_freedom": {
          "type": "array",
          "items": { "type": "string" }
        },
        "asset_requests": {
          "type": "array",
          "items": {
            "type": "object",
            "required": ["id", "type", "slot", "dimensions", "requirements"],
            "properties": {
              "id": { "type": "string" },
              "type": { "type": "string" },
              "slot": { "type": "string" },
              "dimensions": { "$ref": "#/$defs/size" },
              "requirements": {
                "type": "array",
                "items": { "type": "string" }
              }
            },
            "additionalProperties": true
          }
        },
        "locked_visual_rules": {
          "type": "array",
          "items": { "type": "string" }
        }
      },
      "additionalProperties": true
    },
    "qa_requirements": {
      "type": "array",
      "items": { "type": "string" },
      "minItems": 1
    },
    "assumptions": {
      "type": "array",
      "items": { "type": "string" }
    },
    "open_questions": {
      "type": "array",
      "items": { "type": "string" }
    }
  },
  "$defs": {
    "box": {
      "type": "object",
      "required": ["x", "y", "width", "height"],
      "properties": {
        "x": { "type": "number" },
        "y": { "type": "number" },
        "width": { "type": "number" },
        "height": { "type": "number" }
      },
      "additionalProperties": false
    },
    "size": {
      "type": "object",
      "required": ["width", "height"],
      "properties": {
        "width": { "type": "number" },
        "height": { "type": "number" }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}

```

### contracts/strategy-brief.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "strategy-brief.schema.json",
  "title": "StrategyBrief",
  "description": "Minimal output of incentive-strategy-planner. It tells the page builder who the campaign is for, where it runs, what it should achieve, and which page structure to use.",
  "type": "object",
  "required": [
    "schema_version",
    "artifact_type",
    "producer_skill",
    "target_skill",
    "status",
    "target_user",
    "region",
    "campaign_goal",
    "page_structure",
    "assumptions",
    "open_questions"
  ],
  "properties": {
    "schema_version": { "type": "string", "pattern": "^1\\." },
    "artifact_type": { "const": "strategy_brief" },
    "producer_skill": { "const": "incentive-strategy-planner" },
    "target_skill": { "const": "vibe-activity-page" },
    "status": { "enum": ["draft", "ready", "blocked"] },
    "target_user": {
      "type": "object",
      "description": "Structured audience profile.",
      "required": [
        "segment",
        "age",
        "gender",
        "identity",
        "traits"
      ],
      "properties": {
        "segment": {
          "type": "string",
          "description": "High-level audience segment, for example new_users, existing_users, dormant_users."
        },
        "age": {
          "type": "string",
          "description": "Age range or age description."
        },
        "gender": {
          "type": "string",
          "description": "Gender targeting."
        },
        "identity": {
          "type": "string",
          "description": "User identity, role, or life context, for example students, young parents, creators."
        },
        "traits": {
          "type": "array",
          "description": "Known behavioral, motivational, or consumption traits.",
          "items": { "type": "string" }
        }
      },
      "additionalProperties": false
    },
    "region": {
      "type": "string",
      "description": "The market or region where the campaign runs, for example Brazil."
    },
    "campaign_goal": {
      "type": "string",
      "description": "The primary business goal, for example new_user_acquisition, referral_growth, cashout_activation."
    },
    "page_structure": {
      "type": "object",
      "description": "Selected page framework and the content blocks the page builder should include.",
      "required": [
        "type",
        "contents"
      ],
      "properties": {
        "type": {
          "type": "string",
          "description": "The page framework selected for build, for example single-gameplay-conversion-page."
        },
        "contents": {
          "type": "array",
          "description": "Page content blocks.",
          "items": {
            "type": "object",
            "required": [
              "id",
              "name",
              "description"
            ],
            "properties": {
              "id": {
                "type": "string",
                "description": "Stable block id, for example header_area, reward_status_card, gameplay_area, action_area."
              },
              "name": {
                "type": "string",
                "description": "Human-readable block name."
              },
              "description": {
                "type": "string",
                "description": "What this block should communicate or contain."
              },
              "fixed": {
                "type": "boolean",
                "description": "Whether this block should follow a strict component contract."
              }
            },
            "additionalProperties": false
          }
        }
      },
      "additionalProperties": false
    },
    "notes": {
      "type": "array",
      "items": { "type": "string" },
      "default": []
    },
    "assumptions": {
      "type": "array",
      "items": { "type": "string" }
    },
    "open_questions": {
      "type": "array",
      "items": { "type": "string" }
    }
  },
  "additionalProperties": false
}

```

### docs/campaign-skill-suite-protocol.md

```markdown
# Campaign Skill Suite Protocol

This document defines the current lightweight campaign page workflow.

The project currently keeps only three active campaign-building skills:

```txt
User one-line request
↓
campaign-build-orchestrator
↓
incentive-strategy-planner
↓
vibe-activity-page
↓
Final deliverable page
```

## Active Skills

### campaign-build-orchestrator

Role:
- Convert a one-line user request into a `CampaignRequest`.
- Route the request through the active workflow.
- Stop when an upstream artifact is blocked.
- Summarize final deliverables after the page builder finishes.

Does not:
- write strategy,
- write page code,
- inspect specialist implementation files unless the user explicitly asks.

### incentive-strategy-planner

Input:
- `CampaignRequest`

Output:
- `StrategyBrief`

Role:
- Identify target user, region, campaign goal, and page structure.
- Leave unspecified user/audience fields empty instead of inventing them.
- Produce the simplest useful brief for the page builder.

### vibe-activity-page

Input:
- `StrategyBrief`

Output:
- `PageBuildSpec`
- final page code
- required visual assets when the page build needs them

Role:
- Select the page structure from `references/page-structures/index.md`.
- Select the visual style from `references/visual-styles/index.md`.
- Reuse strict components from `component-library/components/`.
- Build the final H5 page by default.
- Put new runnable cases under `/Users/bytedance/Documents/Incentive Page Cases/{case-name}/`, not inside this Skill repository.
- Run its own page QA checklist before delivery.

## Active Contracts

Shared contracts live in `contracts/`.

Current active contracts:

```txt
contracts/
  campaign-request.schema.json
  strategy-brief.schema.json
  page-build-spec.schema.json
```

## Artifact Flow

### 1. CampaignRequest

Producer:
- `campaign-build-orchestrator`

Consumer:
- `incentive-strategy-planner`

Purpose:
- Capture the user's business request in a structured form.

### 2. StrategyBrief

Producer:
- `incentive-strategy-planner`

Consumer:
- `vibe-activity-page`

Purpose:
- Decide who the page is for, where it runs, what goal it serves, and which page structure should be used.

### 3. PageBuildSpec

Producer:
- `vibe-activity-page`

Target:
- `final_delivery`

Purpose:
- Record selected page architecture, component contracts, layout slots, content config, implementation files, asset generation plan, and QA requirements.

## Status Rules

- Downstream work may continue only when the upstream artifact has `status: "ready"`.
- If an artifact has `status: "blocked"`, stop and return the blocker.
- Skills exchange information through `contracts/` artifacts.
- Do not make one skill read another skill's private implementation files as an integration shortcut.

## Fixture Rules

Fixtures should model only the active flow:

```txt
fixtures/{case-name}/
  01-campaign-request.json
  02-expected-strategy-brief.json
  03-expected-page-build-spec.json
```

Do not add extra downstream artifact files unless the active workflow is expanded later.

```

### examples/h5/assets/bg-brazil-samba-football.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="390" height="844" viewBox="0 0 390 844" fill="none">
  <rect width="390" height="844" fill="#18A85E"/>
  <path d="M0 0H390V492H0V0Z" fill="#27C66E"/>
  <path d="M0 0H390V338H0V0Z" fill="#22BFEA"/>
  <path d="M0 210C64 146 130 150 196 218C260 156 328 154 390 218V844H0V210Z" fill="#0E9D57"/>
  <path d="M0 270C82 218 149 228 198 294C254 222 326 220 390 286V844H0V270Z" fill="#087E4B"/>
  <path d="M0 594C44 556 97 536 151 536H239C294 536 346 556 390 594V844H0V594Z" fill="#0B7D44"/>
  <path d="M24 620C87 588 303 588 366 620L390 844H0L24 620Z" fill="#0A713D"/>
  <path d="M54 628C96 610 294 610 336 628L354 844H36L54 628Z" fill="#0F8F4F"/>
  <path d="M195 626V844" stroke="#F1F7D2" stroke-width="2" stroke-opacity=".72"/>
  <ellipse cx="195" cy="712" rx="63" ry="28" stroke="#F1F7D2" stroke-width="2" stroke-opacity=".72"/>
  <path d="M53 628V844M337 628V844" stroke="#F1F7D2" stroke-width="2" stroke-opacity=".72"/>
  <circle cx="195" cy="712" r="3" fill="#F1F7D2" fill-opacity=".9"/>
  <circle cx="68" cy="120" r="30" fill="#FFD84E"/>
  <circle cx="67" cy="119" r="20" fill="#F8B92E"/>
  <path d="M27 366C87 336 134 337 195 369C253 337 304 337 363 366V402C304 372 253 372 195 405C134 372 87 372 27 402V366Z" fill="#FFD83D"/>
  <path d="M27 402C87 372 134 372 195 405C253 372 304 372 363 402V438C304 410 253 410 195 440C134 410 87 410 27 438V402Z" fill="#1C3F97"/>
  <path d="M27 438C87 410 134 410 195 440C253 410 304 410 363 438V482C304 454 253 454 195 484C134 454 87 454 27 482V438Z" fill="#FFD83D"/>
  <path d="M61 472C87 461 119 461 149 474" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-opacity=".78"/>
  <path d="M253 466C285 454 319 456 344 474" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-opacity=".78"/>
  <circle cx="36" cy="548" r="4" fill="#FFD94D"/>
  <circle cx="358" cy="536" r="5" fill="#FFD94D"/>
  <circle cx="325" cy="578" r="3" fill="#FFFFFF"/>
  <circle cx="83" cy="580" r="3" fill="#FFFFFF"/>
  <path d="M9 503C30 493 52 493 76 505" stroke="#FFD84E" stroke-width="8" stroke-linecap="round"/>
  <path d="M315 504C337 492 360 493 382 507" stroke="#FFD84E" stroke-width="8" stroke-linecap="round"/>
  <path d="M0 0H390V844H0V0Z" fill="url(#shade)"/>
  <defs>
    <linearGradient id="shade" x1="195" y1="0" x2="195" y2="844" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity=".12"/>
      <stop offset=".42" stop-color="#FFFFFF" stop-opacity="0"/>
      <stop offset="1" stop-color="#053B28" stop-opacity=".28"/>
    </linearGradient>
  </defs>
</svg>

```

### examples/h5/assets/samba-mystery-box/bg_samba_night.png

Binary file. Size: 80766 bytes. SHA-256: `e18fd3fad8d1384d22407fccac5e9aa2057b68db89068695b56861683e7cb77a`.

### examples/h5/assets/samba-mystery-box/box_locked_imagine2.png

Binary file. Size: 924615 bytes. SHA-256: `b2680ae73faf373856e070227c92ed3604de2465061de02152b1c9521b099a98`.

### examples/h5/assets/samba-mystery-box/box_locked.png

Binary file. Size: 10269 bytes. SHA-256: `02e550404f4879e4fb4fea8df972cc8f9ca541a5167cf6de841fb5f9ed4a192b`.

### examples/h5/assets/samba-mystery-box/box_opened_imagine2.png

Binary file. Size: 1029241 bytes. SHA-256: `2249d5bac1c909b8a25982641c84539e2e70ed89476a0abe6a5fb0094a2f98b5`.

### examples/h5/assets/samba-mystery-box/box_opened.png

Binary file. Size: 13912 bytes. SHA-256: `f9fcb300bd1877bb9dfa9b4a38c5a15de6443bd33f8da36138298063298a9482`.

### examples/h5/assets/samba-mystery-box/box_worldcup_locked.png

Binary file. Size: 12061 bytes. SHA-256: `b68883e39a0a06d7094522b612ca58b763a59ad312372c9a82dcad7ce1876800`.

### examples/h5/assets/samba-mystery-box/box_worldcup_opened.png

Binary file. Size: 15593 bytes. SHA-256: `86159238df9043b01808aeaee16dac486231d1bbd4e635cc99726e752e464ccd`.

### examples/h5/assets/samba-mystery-box/drum_football.png

Binary file. Size: 660987 bytes. SHA-256: `08d69c066449c7996759a3eeaaca54caeb2df2fefd1d7f3508a3521088207fa8`.

### examples/h5/assets/samba-mystery-box/drum_glow.png

Binary file. Size: 22074 bytes. SHA-256: `645d60261c4fdf5fbf94c8b3a5c63b04c81d39258f44179a3e31ba177adec745`.

### examples/h5/assets/samba-mystery-box/egg_easter.png

Binary file. Size: 13269 bytes. SHA-256: `b10b762df909c28da27672c5f889ca908421832aeef1151d666746f9cae352b5`.

### examples/h5/assets/samba-mystery-box/imagegen-source/drum_football_chroma.png

Binary file. Size: 1239409 bytes. SHA-256: `6c76e128e036f361502820f95fc2eba13d4310087e497dbc3cfa126e644509b9`.

### examples/h5/assets/samba-mystery-box/share-panel/imagegen-source/samba-mystery-guide-brazil-chroma.png

Binary file. Size: 1230700 bytes. SHA-256: `02963438862e123e7547c721e89808e7fcffaa83dcdd3f07bd8f251c16518c8a`.

### examples/h5/assets/samba-mystery-box/share-panel/samba-mystery-guide-brazil.png

Binary file. Size: 83890 bytes. SHA-256: `d6757baa655d98555153a3c10ad56550259ebca73cd5b1045087aa2b6f8013ff`.

### examples/h5/assets/samba-mystery-box/share-panel/samba-mystery-guide.png

Binary file. Size: 5720 bytes. SHA-256: `1b87461aeac85d3d8495200407d189ef80616de2ad6ef311b67030938fc83ec3`.

### examples/h5/assets/samba-mystery-box/title_samba_mystery.png

Binary file. Size: 18759 bytes. SHA-256: `b48d2d286ed446929b1c9e5157bdb2011fa6235b513a47a388d3ed776addb291`.

### examples/h5/assets/share-panel/brazil-samba-share-guide.svg

```xml
<svg width="316" height="100" viewBox="0 0 316 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="316" height="100" rx="12" fill="#0A7A39"/>
  <path d="M0 70C39 48 71 86 116 62C161 38 199 42 241 58C276 71 294 60 316 46V100H0V70Z" fill="#FFD447"/>
  <path d="M0 76C41 55 74 92 119 68C164 44 201 49 242 64C277 77 295 66 316 52" stroke="#13B957" stroke-width="5"/>
  <circle cx="251" cy="37" r="23" fill="#F8FAF8"/>
  <path d="M251 14V60M228 37H274" stroke="#DFE7E1" stroke-width="2"/>
  <path d="M239 24L251 18L263 24L260 37L251 44L242 37L239 24Z" fill="#111827"/>
  <path d="M233 45L242 37M269 45L260 37M251 60V44M228 37H242M274 37H260" stroke="#111827" stroke-width="2" stroke-linecap="round"/>
  <circle cx="251" cy="37" r="22" stroke="#0B6E37" stroke-width="2"/>
  <path d="M33 24C47 13 66 14 80 27C62 27 47 37 39 53C36 43 34 34 33 24Z" fill="#FFE86A"/>
  <path d="M50 55C60 37 78 28 99 31C89 44 74 55 50 55Z" fill="#15C66A"/>
  <circle cx="91" cy="25" r="8" fill="#FFD447"/>
  <circle cx="34" cy="34" r="10" fill="#FFFFFF" opacity="0.25"/>
  <circle cx="55" cy="34" r="10" fill="#FFFFFF" opacity="0.32"/>
  <circle cx="76" cy="34" r="10" fill="#FFFFFF" opacity="0.25"/>
  <path d="M27 74C53 59 76 58 102 74" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.5"/>
  <path d="M111 74C137 59 160 58 186 74" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.35"/>
</svg>

```

### examples/h5/assets/share-panel/channel-copy-link.png

Binary file. Size: 5244 bytes. SHA-256: `918dd4584559721b2c3ff27fef387149d2f9b6dea88031533afc3d695981ef3a`.

### examples/h5/assets/share-panel/channel-copy-link.svg

```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="24" fill="#2F73F6"/>
  <path d="M21 29L19 31C16.8 33.2 13.2 33.2 11 31C8.8 28.8 8.8 25.2 11 23L15 19C17.2 16.8 20.8 16.8 23 19" stroke="white" stroke-width="3" stroke-linecap="round"/>
  <path d="M27 19L29 17C31.2 14.8 34.8 14.8 37 17C39.2 19.2 39.2 22.8 37 25L33 29C30.8 31.2 27.2 31.2 25 29" stroke="white" stroke-width="3" stroke-linecap="round"/>
  <path d="M20 28L28 20" stroke="white" stroke-width="3" stroke-linecap="round"/>
</svg>


```

### examples/h5/assets/share-panel/channel-facebook.png

Binary file. Size: 3985 bytes. SHA-256: `4b64772a2aca392028a495f6f40ce025abc44823710b25eb9a18bb274a630979`.

### examples/h5/assets/share-panel/channel-facebook.svg

```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="24" fill="#1877F2"/>
  <path d="M27 15H31V9H27C21.8 9 19 12.1 19 17V21H14V27H19V39H26V27H31L32 21H26V17.5C26 15.9 26.6 15 27 15Z" fill="white"/>
</svg>


```

### examples/h5/assets/share-panel/channel-instagram.png

Binary file. Size: 19466 bytes. SHA-256: `870f96c131e3c8cee33d5a654a46b4ac2447780eb4a5ceb0b85f754c58f40b33`.

### examples/h5/assets/share-panel/channel-instagram.svg

```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ig" x1="7" y1="41" x2="41" y2="7" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FEDA75"/>
      <stop offset="0.35" stop-color="#FA7E1E"/>
      <stop offset="0.65" stop-color="#D62976"/>
      <stop offset="1" stop-color="#4F5BD5"/>
    </linearGradient>
  </defs>
  <circle cx="24" cy="24" r="24" fill="url(#ig)"/>
  <rect x="14" y="14" width="20" height="20" rx="6" stroke="white" stroke-width="3"/>
  <circle cx="24" cy="24" r="5" stroke="white" stroke-width="3"/>
  <circle cx="30" cy="18" r="2" fill="white"/>
</svg>


```

### examples/h5/assets/share-panel/channel-more.png

Binary file. Size: 3788 bytes. SHA-256: `7f198a480f59f196197786f95debd1e57472ee1736c545c966e1619ae65ff91a`.

### examples/h5/assets/share-panel/channel-more.svg

```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="24" fill="#EDEDED"/>
  <circle cx="16" cy="24" r="3" fill="#222222"/>
  <circle cx="24" cy="24" r="3" fill="#222222"/>
  <circle cx="32" cy="24" r="3" fill="#222222"/>
</svg>


```

### examples/h5/assets/share-panel/channel-snapchat.png

Binary file. Size: 5122 bytes. SHA-256: `792b7d1f50963e0e9d2388bf2a768413ca56d36f1e920bf16b00343a5256d7b6`.

### examples/h5/assets/share-panel/channel-snapchat.svg

```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="24" fill="#FFFC00"/>
  <path d="M17 32C20 31 20 28 18 27C20 27 21 25 21 22V19C21 15 24 13 27 15C29 16 30 18 30 22V25C31 26 32 27 34 27C32 28 31 31 34 32C31 33 30 35 27 35C25 36 23 36 21 35C19 35 18 33 17 32Z" fill="white" stroke="black" stroke-width="2" stroke-linejoin="round"/>
</svg>


```

### examples/h5/assets/share-panel/channel-whatsapp.png

Binary file. Size: 6470 bytes. SHA-256: `3d12cbf60731f6c1b8611c6ec0fd5be72d1e9ab0adce3a00dda157887703e07e`.

### examples/h5/assets/share-panel/channel-whatsapp.svg

```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="24" fill="#25D366"/>
  <circle cx="24" cy="23" r="13" stroke="white" stroke-width="3"/>
  <path d="M16 36L18.2 29.7" stroke="white" stroke-width="3" stroke-linecap="round"/>
  <path d="M20 18C21.5 25 24.5 28 31 30" stroke="white" stroke-width="3" stroke-linecap="round"/>
</svg>


```

### examples/h5/assets/share-panel/image-placeholder.png

Binary file. Size: 413 bytes. SHA-256: `5e44783f2b2874265d1f7ef61a565345f67375cd0c2478802e9ffb54be2c9392`.

### examples/h5/assets/share-panel/image-placeholder.svg

```xml
<svg width="316" height="100" viewBox="0 0 316 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="316" height="100" rx="12" fill="white"/>
  <path d="M151 44.5C151 43.6716 151.672 43 152.5 43H163.5C164.328 43 165 43.6716 165 44.5V55.5C165 56.3284 164.328 57 163.5 57H152.5C151.672 57 151 56.3284 151 55.5V44.5Z" stroke="#999999" stroke-width="1.5"/>
  <circle cx="155" cy="47" r="1.5" fill="#999999"/>
  <path d="M152.5 54L156.2 50.3L159 53.1L160.6 51.5L164 54.9" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


```

### examples/h5/assets/spin-wheel-brazil-body.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="652" height="652" viewBox="0 0 652 652" fill="none">
  <circle cx="326" cy="326" r="304" fill="#073B2A"/>
  <circle cx="326" cy="326" r="286" fill="#FFE24A"/>
  <g transform="translate(326 326)">
    <path d="M0 0L0 -260A260 260 0 0 1 183.8 -183.8Z" fill="#19B768"/>
    <path d="M0 0L183.8 -183.8A260 260 0 0 1 260 0Z" fill="#1C3F97"/>
    <path d="M0 0L260 0A260 260 0 0 1 183.8 183.8Z" fill="#F6C236"/>
    <path d="M0 0L183.8 183.8A260 260 0 0 1 0 260Z" fill="#F15B3D"/>
    <path d="M0 0L0 260A260 260 0 0 1 -183.8 183.8Z" fill="#19B768"/>
    <path d="M0 0L-183.8 183.8A260 260 0 0 1 -260 0Z" fill="#1C3F97"/>
    <path d="M0 0L-260 0A260 260 0 0 1 -183.8 -183.8Z" fill="#F6C236"/>
    <path d="M0 0L-183.8 -183.8A260 260 0 0 1 0 -260Z" fill="#F15B3D"/>
  </g>
  <circle cx="326" cy="326" r="238" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-opacity=".7"/>
  <g font-family="Arial Black, Impact, sans-serif" font-size="40" font-weight="900" text-anchor="middle" fill="#FFFFFF" stroke="#073B2A" stroke-width="5" paint-order="stroke">
    <text x="326" y="126">800</text>
    <text x="466" y="185" transform="rotate(45 466 185)">300</text>
    <text x="526" y="340" transform="rotate(90 526 340)">1200</text>
    <text x="466" y="492" transform="rotate(135 466 492)">500</text>
    <text x="326" y="550" transform="rotate(180 326 550)">2000</text>
    <text x="185" y="492" transform="rotate(225 185 492)">600</text>
    <text x="126" y="340" transform="rotate(270 126 340)">100</text>
    <text x="185" y="185" transform="rotate(315 185 185)">900</text>
  </g>
  <g>
    <circle cx="326" cy="326" r="82" fill="#FFE24A" stroke="#073B2A" stroke-width="12"/>
    <circle cx="326" cy="326" r="52" fill="#FFFFFF"/>
    <path d="M326 282L339 310L370 314L347 335L354 366L326 350L298 366L305 335L282 314L313 310L326 282Z" fill="#111111"/>
  </g>
  <circle cx="326" cy="326" r="304" stroke="#FFFFFF" stroke-width="10" stroke-opacity=".72"/>
  <g fill="#FFFFFF">
    <circle cx="326" cy="34" r="11"/>
    <circle cx="532" cy="120" r="11"/>
    <circle cx="618" cy="326" r="11"/>
    <circle cx="532" cy="532" r="11"/>
    <circle cx="326" cy="618" r="11"/>
    <circle cx="120" cy="532" r="11"/>
    <circle cx="34" cy="326" r="11"/>
    <circle cx="120" cy="120" r="11"/>
  </g>
</svg>

```

### examples/h5/assets/spin-wheel-pointer.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 96" role="img" aria-label="Fixed spin wheel pointer">
  <defs>
    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
      <stop stop-color="#fff3a8"/>
      <stop offset=".42" stop-color="#ffd34d"/>
      <stop offset="1" stop-color="#c77812"/>
    </linearGradient>
    <linearGradient id="redGem" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#ff9786"/>
      <stop offset=".52" stop-color="#f04433"/>
      <stop offset="1" stop-color="#9e170f"/>
    </linearGradient>
    <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
      <stop stop-color="#ffffff" stop-opacity=".85"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <path d="M36 4 66 36 43 36 43 78 36 91 29 78 29 36 6 36Z" fill="url(#gold)" stroke="#6e3300" stroke-width="4" stroke-linejoin="round"/>
  <path d="M36 13 55 34 42 34 42 72 36 82 30 72 30 34 17 34Z" fill="#fff3b8" opacity=".72"/>
  <path d="M36 17 51 35 36 57 21 35Z" fill="url(#redGem)" stroke="#fff2af" stroke-width="3" stroke-linejoin="round"/>
  <path d="M36 17v40M21 35h30" fill="none" stroke="#ffffff" stroke-opacity=".45" stroke-width="2"/>
  <path d="M27 26c4-5 12-7 18-2" fill="none" stroke="url(#shine)" stroke-width="4" stroke-linecap="round"/>
</svg>

```

### examples/h5/assets/title-brazil-samba-football.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="736" height="192" viewBox="0 0 736 192" fill="none">
  <path d="M34 44C95 8 188 8 252 43C329 4 440 4 511 45C591 17 665 35 705 82C669 145 595 170 515 147C438 189 327 190 253 150C178 184 90 176 36 126C20 96 19 68 34 44Z" fill="#0B7D44"/>
  <path d="M51 58C106 31 184 31 246 62C322 29 431 28 498 63C568 40 638 51 682 91C647 136 581 153 514 132C438 169 330 170 254 135C185 164 105 158 55 119C42 96 41 75 51 58Z" fill="#FFE24A"/>
  <path d="M82 71C135 48 196 56 245 84C318 51 424 51 489 84C548 64 610 72 647 102C613 124 557 132 506 116C431 151 328 152 257 119C196 143 129 138 88 111C76 94 75 82 82 71Z" fill="#1C3F97"/>
  <text x="368" y="88" text-anchor="middle" font-family="Arial Black, PingFang SC, Microsoft YaHei, sans-serif" font-size="48" font-weight="900" fill="#FFFFFF" stroke="#073B2A" stroke-width="8" paint-order="stroke">SAMBA FOOTBALL</text>
  <text x="368" y="135" text-anchor="middle" font-family="Arial Black, PingFang SC, Microsoft YaHei, sans-serif" font-size="42" font-weight="900" fill="#FFE24A" stroke="#073B2A" stroke-width="7" paint-order="stroke">LUCKY SPIN</text>
  <circle cx="118" cy="94" r="27" fill="#FFFFFF" stroke="#073B2A" stroke-width="6"/>
  <path d="M118 70L126 88L146 90L131 103L136 123L118 112L100 123L105 103L90 90L110 88L118 70Z" fill="#111111"/>
  <path d="M616 68C646 72 663 94 661 123" stroke="#FFFFFF" stroke-width="9" stroke-linecap="round"/>
  <path d="M595 80C625 87 640 105 640 132" stroke="#FFE24A" stroke-width="9" stroke-linecap="round"/>
</svg>

```

### examples/h5/brazil-samba-football-spin-wheel.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <title>Samba Football Lucky Spin</title>
    <link rel="stylesheet" href="./share-panel.css" />
    <style>
      * { box-sizing: border-box; }
      html, body {
        margin: 0;
        min-height: 100%;
        background: #0a713d;
        font-family: "TikTok Sans", system-ui, -apple-system, sans-serif;
        letter-spacing: 0;
      }
      body { display: flex; justify-content: center; }
      button {
        border: 0;
        font: inherit;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }
      button:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }
      .viewport {
        width: 390px;
        height: 844px;
        overflow: hidden;
        background: #0a713d;
      }
      .stage {
        position: relative;
        width: 390px;
        height: 844px;
        overflow: hidden;
        color: #123320;
        transform-origin: top left;
        background: url("./assets/bg-brazil-samba-football.svg") center / cover no-repeat #0a713d;
      }
      .top-navigation {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 40;
        width: 390px;
        height: 91px;
      }
      .system-status-bar {
        position: absolute;
        left: 0;
        top: 0;
        width: 390px;
        height: 47px;
      }
      .status-time {
        position: absolute;
        left: 45px;
        top: 18.5px;
        color: #1b130c;
        font-size: 15px;
        line-height: 21px;
        font-weight: 600;
      }
      .status-icons {
        position: absolute;
        left: 280px;
        top: 20px;
        display: flex;
        width: 78px;
        height: 13px;
        align-items: center;
        gap: 7px;
        color: #1b130c;
      }
      .status-icons svg { display: block; flex: none; }
      .cellular-icon { width: 19px; height: 12px; }
      .wifi-icon { width: 17px; height: 12px; }
      .battery-icon { width: 27px; height: 13px; }
      .nav-bar {
        position: absolute;
        left: 0;
        top: 47px;
        width: 390px;
        height: 44px;
      }
      .nav-content {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        width: 390px;
        height: 44px;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
      }
      .nav-actions {
        display: flex;
        width: 72px;
        height: 32px;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
      }
      .nav-icon-button {
        display: flex;
        width: 32px;
        height: 32px;
        align-items: center;
        justify-content: center;
        padding: 6px;
        border: 1px solid #ffffff;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.6);
        color: #1b130c;
        line-height: 0;
      }
      .nav-icon-button svg { display: block; flex: none; width: 20px; height: 20px; }
      .nav-title-area {
        position: absolute;
        left: 96px;
        top: 0;
        width: 213px;
        height: 44px;
        pointer-events: none;
      }
      .title {
        position: absolute;
        left: 11px;
        top: 60px;
        z-index: 50;
        width: 368px;
        height: 96px;
        margin: 0;
        pointer-events: none;
      }
      .title-art {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .secondary-info {
        position: absolute;
        left: 86px;
        top: 156px;
        z-index: 12;
        display: grid;
        width: 218px;
        height: 28px;
        place-items: center;
        margin: 0;
        color: #ffffff;
        text-shadow: 0 2px 0 rgba(7, 59, 42, 0.8);
        font-size: 12px;
        line-height: 16px;
        font-weight: 400;
      }
      .asset-image {
        position: absolute;
        left: 32px;
        top: 188px;
        z-index: 12;
        width: 326px;
        height: 130px;
        padding: 0;
        border-radius: 32px;
        background: var(--asset-card-bg, #ffffff);
      }
      .asset-top {
        position: absolute;
        left: 16px;
        top: 12px;
        width: 294px;
        height: 50px;
      }
      .asset-balance {
        position: absolute;
        left: 0;
        top: 7px;
        width: 200px;
        height: 36px;
      }
      .avatar {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        width: 36px;
        height: 36px;
        place-items: center;
        border-radius: 50%;
        border: 1px solid var(--asset-avatar-border, rgba(255, 255, 255, 0.64));
        background: var(--asset-avatar-bg, #e5e6eb);
        color: transparent;
      }
      .asset-copy {
        position: absolute;
        left: 44px;
        top: 1.5px;
        width: 156px;
        height: 33px;
        color: var(--asset-text, #3c271f);
      }
      .asset-title {
        position: absolute;
        left: 0;
        top: 0;
        width: 156px;
        height: 11px;
        margin: 0;
        font-size: 11px;
        line-height: 11px;
        font-weight: 500;
      }
      .asset-value {
        position: absolute;
        left: 0;
        top: 11px;
        display: flex;
        width: max-content;
        height: 22px;
        align-items: center;
        gap: 2px;
        font-size: 22px;
        line-height: 26.4px;
        font-weight: 900;
        white-space: nowrap;
      }
      .currency {
        display: block;
        width: max-content;
        height: 22px;
        flex: none;
      }
      .amount {
        display: block;
        width: max-content;
        height: 22px;
        flex: none;
        overflow: visible;
        text-overflow: clip;
        white-space: nowrap;
      }
      .withdraw {
        position: absolute;
        left: 216px;
        top: 11px;
        display: grid;
        width: 78px;
        height: 28px;
        place-items: center;
        padding: 0 8px;
        border-radius: 999px;
        background: var(--asset-button-bg, #fbd106);
        color: var(--asset-button-text, #000000);
        font-size: 12px;
        line-height: 16px;
        font-weight: 600;
      }
      .asset-extra {
        position: absolute;
        left: 16px;
        top: 64px;
        width: 294px;
        height: 50px;
      }
      .asset-progress-copy {
        position: absolute;
        left: 4px;
        top: 13px;
        width: 196px;
        height: 18px;
        margin: 0;
        color: var(--asset-subtext, rgba(0, 0, 0, 0.48));
        font-size: 14px;
        line-height: 18.2px;
        font-weight: 400;
        white-space: nowrap;
      }
      .asset-progress {
        position: absolute;
        left: 4px;
        top: 31px;
        width: 230px;
        height: 20px;
      }
      .asset-progress-track {
        position: absolute;
        left: 0;
        top: 4px;
        width: 230px;
        height: 12px;
        overflow: hidden;
        border-radius: 16px;
        background: var(--asset-progress-track, rgba(0, 0, 0, 0.08));
      }
      .asset-progress-fill {
        position: absolute;
        left: 1px;
        top: 5px;
        width: 166px;
        height: 10px;
        border-radius: 100px;
        background: linear-gradient(90deg, var(--asset-progress-start, #ff5324) 0%, var(--asset-progress-end, #fff429) 100%);
      }
      .asset-reward {
        position: absolute;
        left: 228px;
        top: 0;
        width: 62px;
        height: 50px;
      }
      .asset-reward-icon {
        position: absolute;
        left: 6px;
        top: 0;
        display: grid;
        width: 50px;
        height: 50px;
        place-items: center;
      }
      .asset-reward-coin {
        display: grid;
        width: 40px;
        height: 40px;
        place-items: center;
        border-radius: 50%;
        background: radial-gradient(circle at 35% 28%, var(--asset-coin-light, #fff8be) 0 12%, var(--asset-coin-main, #fff429) 28%, var(--asset-coin-mid, #ffb32b) 58%, var(--asset-coin-dark, #f07903) 100%);
        color: var(--asset-coin-text, #8a3b00);
        font-size: 18px;
        line-height: 22px;
        font-weight: 900;
        box-shadow: 0 0 5px rgba(219, 255, 100, 0.63);
      }
      .asset-threshold {
        position: absolute;
        left: 0;
        top: 32px;
        display: flex;
        width: 62px;
        height: 18px;
        align-items: center;
        justify-content: center;
        padding: 2px 4px;
        border-radius: 32px;
        background: var(--asset-threshold-bg, #fff8b8);
        color: var(--asset-threshold-text, #3c271f);
        font-size: 10px;
        line-height: 12.5px;
        font-weight: 700;
        letter-spacing: 0.1px;
        white-space: nowrap;
      }
      .gameplay {
        position: absolute;
        left: 32px;
        top: 342px;
        z-index: 12;
        width: 326px;
        height: 326px;
        text-align: center;
      }
      .wheel-rotor {
        position: relative;
        z-index: 1;
        width: 326px;
        height: 326px;
        transform: rotate(0deg);
        transform-origin: 50% 50%;
        will-change: transform;
      }
      .gameplay-asset {
        display: block;
        width: 326px;
        height: 326px;
        object-fit: contain;
      }
      .gameplay-pointer {
        position: absolute;
        left: 50%;
        top: -8px;
        z-index: 4;
        display: block;
        width: 58px;
        height: 78px;
        transform: translateX(-50%);
        pointer-events: none;
      }
      .gameplay-hitbox {
        position: absolute;
        left: 50%;
        top: 115px;
        z-index: 6;
        width: 96px;
        height: 96px;
        border-radius: 50%;
        background: transparent;
        color: transparent;
        transform: translateX(-50%);
      }
      .result-toast {
        position: absolute;
        left: 50%;
        bottom: -8px;
        z-index: 8;
        display: none;
        width: 196px;
        min-height: 44px;
        align-items: center;
        justify-content: center;
        padding: 8px 12px;
        border: 2px solid #ffffff;
        border-radius: 999px;
        background: #073b2a;
        color: #ffe24a;
        transform: translateX(-50%);
        font-size: 15px;
        line-height: 19px;
        font-weight: 700;
        text-align: center;
      }
      .result-toast.is-visible { display: flex; }
      .btn-group {
        position: absolute;
        left: 0;
        top: 668px;
        z-index: 20;
        width: 390px;
        height: 120px;
        color: #ffffff;
      }
      .side-button {
        position: absolute;
        top: 20px;
        width: 80px;
        height: 58px;
        padding: 0;
        background: transparent;
      }
      .side-button.left { left: 0; }
      .side-button.right { left: 310px; }
      .side-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 80px;
        height: 56px;
        border: 3px solid #ffffff;
        background: #1c3f97;
        box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.28), 0 7px 0 #073b2a;
      }
      .left .side-bg { border-radius: 0 22px 22px 0; }
      .right .side-bg { border-radius: 22px 0 0 22px; }
      .side-label {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        width: 80px;
        height: 56px;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        text-align: center;
        text-shadow: 0 2px 0 #073b2a;
        white-space: pre-line;
        font-size: 15px;
        line-height: 19px;
        font-weight: 700;
      }
      .main-button {
        position: absolute;
        left: 86px;
        top: -1px;
        width: 218px;
        height: 96px;
        padding: 0;
        background: transparent;
      }
      .main-bg {
        position: absolute;
        left: 11px;
        top: 12px;
        width: 196px;
        height: 72px;
        border: 4px solid #ffffff;
        border-radius: 28px;
        background: #ffe24a;
        box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.45), 0 8px 0 #0b7d44;
      }
      .main-label {
        position: absolute;
        left: 11px;
        top: 12px;
        display: flex;
        width: 196px;
        height: 72px;
        align-items: center;
        justify-content: center;
        color: #073b2a;
        text-align: center;
        font-size: 24px;
        line-height: 30px;
        font-weight: 700;
      }
      .chance-text {
        position: absolute;
        left: 136px;
        top: 106px;
        width: 119px;
        height: 18px;
        margin: 0;
        color: #ffffff;
        text-align: center;
        text-shadow: 0 2px 0 #073b2a;
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      @media (max-width: 389px) {
        .viewport {
          width: 100vw;
          height: calc(844px * (100vw / 390));
        }
        .stage { transform: scale(calc(100vw / 390)); }
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 1ms !important;
          transition-duration: 1ms !important;
          scroll-behavior: auto !important;
        }
      }
    </style>
  </head>
  <body>
    <div class="viewport">
      <main class="stage" id="page-root"></main>
    </div>

    <script src="./share-panel.js"></script>
    <script>
      const pageConfig = {
        title: "Samba Football Lucky Spin",
        titleAssetUrl: "./assets/title-brazil-samba-football.svg",
        countdownLabel: "Ends in: ",
        countdownSeconds: 279840,
        assetTitle: "My rewards",
        assetCurrency: "R$",
        assetActionLabel: "Check",
        assetProgressText: "10,000 coins to cash out",
        assetThresholdText: "10K coins",
        assetProgressMaxWidth: 228,
        assetTheme: {
          cardBg: "#1c3f97",
          text: "#ffffff",
          subtext: "rgba(255, 255, 255, 0.78)",
          avatarBg: "#0b7d44",
          avatarBorder: "rgba(255, 255, 255, 0.72)",
          buttonBg: "#ffe24a",
          buttonText: "#073b2a",
          progressTrack: "rgba(255, 255, 255, 0.26)",
          progressStart: "#0bcd72",
          progressEnd: "#ffe24a",
          thresholdBg: "#fff8b8",
          thresholdText: "#073b2a",
          coinLight: "#fff8be",
          coinMain: "#fff429",
          coinMid: "#ffb32b",
          coinDark: "#f07903",
          coinText: "#8a3b00",
        },
        balance: 0,
        threshold: 10000,
        unit: "coins",
        chances: 5,
        primaryLabel: "Spin",
        leftAction: "More\nChances",
        rightAction: "Rules",
        gameplayAssetUrl: "./assets/spin-wheel-brazil-body.svg",
        pointerAssetUrl: "./assets/spin-wheel-pointer.svg",
        rewards: [800, 300, 1200, 500, 2000, 600, 100, 900],
      };

      const formatCoins = (value) => `${Number(value).toLocaleString("en-US")} ${pageConfig.unit}`;
      const toKebab = (value) => value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
      const renderThemeVars = (theme, prefix) =>
        Object.entries(theme)
          .map(([key, value]) => `--${prefix}-${toKebab(key)}: ${value}`)
          .join("; ");
      const formatDuration = (seconds) => {
        const safeSeconds = Math.max(0, seconds);
        const days = Math.floor(safeSeconds / 86400);
        const hours = Math.floor((safeSeconds % 86400) / 3600);
        const minutes = Math.floor((safeSeconds % 3600) / 60);
        return `${days}d:${hours}h:${minutes}m`;
      };
      const getProgressWidth = (balance, threshold, maxWidth) => {
        const ratio = Math.max(0, Math.min(Number(balance) / Number(threshold), 1));
        return Math.round(ratio * maxWidth);
      };
      const formatProgressText = (balance, threshold, unit) => {
        const remaining = Math.max(Number(threshold) - Number(balance), 0);
        return remaining > 0 ? `${remaining.toLocaleString("en-US")} ${unit} to cash out` : "Ready to cash out";
      };

      function renderTopNavigation() {
        return `
          <nav class="top-navigation" aria-label="Top navigation">
            <div class="system-status-bar" aria-hidden="true">
              <span class="status-time">8:00</span>
              <span class="status-icons">
                <svg class="cellular-icon" viewBox="0 0 19 12" aria-hidden="true">
                  <rect x="0" y="7" width="3" height="5" rx="1" fill="currentColor"></rect>
                  <rect x="5" y="5" width="3" height="7" rx="1" fill="currentColor"></rect>
                  <rect x="10" y="2.5" width="3" height="9.5" rx="1" fill="currentColor"></rect>
                  <rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor"></rect>
                </svg>
                <svg class="wifi-icon" viewBox="0 0 17 12" aria-hidden="true">
                  <path d="M1 3.9C5.2.1 11.8.1 16 3.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path>
                  <path d="M4.1 7C6.5 4.9 10.5 4.9 12.9 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path>
                  <path d="M7.2 10.1C7.9 9.5 9.1 9.5 9.8 10.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path>
                </svg>
                <svg class="battery-icon" viewBox="0 0 27 13" aria-hidden="true">
                  <rect x="0.5" y="1" width="22" height="11" rx="3" fill="none" stroke="currentColor"></rect>
                  <rect x="3" y="3.5" width="16" height="6" rx="1.6" fill="currentColor"></rect>
                  <rect x="24" y="4.2" width="2.5" height="4.6" rx="1" fill="currentColor"></rect>
                </svg>
              </span>
            </div>
            <div class="nav-bar">
              <div class="nav-content">
                <button class="nav-icon-button" type="button" aria-label="Back">
                  <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M12.5 4.2 6.7 10l5.8 5.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6"></path></svg>
                </button>
                <div class="nav-actions">
                  <button class="nav-icon-button" type="button" aria-label="Music">
                    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M13.3 3.1v9.4a3 3 0 1 1-1.8-2.7V5.1l5.1-1.2v2.3l-3.3.8Z" fill="currentColor"></path></svg>
                  </button>
                  <button class="nav-icon-button" type="button" aria-label="Help">
                    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 13.1v-.6c0-1 .5-1.7 1.5-2.4.9-.7 1.4-1.2 1.4-2.1 0-1.2-1-2-2.5-2-1.4 0-2.5.7-3 1.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path><circle cx="10" cy="16.1" r="1.2" fill="currentColor"></circle></svg>
                  </button>
                </div>
                <div class="nav-title-area" aria-hidden="true"></div>
              </div>
            </div>
          </nav>
        `;
      }

      function renderHeader(config) {
        return `
          <h1 class="title"><img class="title-art" src="${config.titleAssetUrl}" alt="${config.title}"></h1>
          <p class="secondary-info" data-countdown-label="${config.countdownLabel}" data-countdown-seconds="${config.countdownSeconds}" aria-live="polite"></p>
        `;
      }

      function renderAssetImage(config) {
        return `
          <section class="asset-image" style="${renderThemeVars(config.assetTheme, "asset")}" aria-label="Asset card">
            <div class="asset-top">
              <div class="asset-balance">
                <div class="avatar" aria-hidden="true"></div>
                <div class="asset-copy">
                  <p class="asset-title">${config.assetTitle}</p>
                  <strong class="asset-value"><span class="currency">${config.assetCurrency}</span><span class="amount" data-balance>${Number(config.balance).toLocaleString("en-US")}</span></strong>
                </div>
              </div>
              <button class="withdraw" type="button" data-withdraw>${config.assetActionLabel}</button>
            </div>
            <div class="asset-extra">
              <p class="asset-progress-copy" data-progress-text>${formatProgressText(config.balance, config.threshold, config.unit)}</p>
              <div class="asset-progress" aria-label="Asset progress">
                <div class="asset-progress-track"></div>
                <div class="asset-progress-fill" data-progress style="width: ${getProgressWidth(config.balance, config.threshold, config.assetProgressMaxWidth)}px"></div>
              </div>
              <div class="asset-reward" aria-hidden="true">
                <div class="asset-reward-icon"><div class="asset-reward-coin">C</div></div>
                <div class="asset-threshold">${config.assetThresholdText}</div>
              </div>
            </div>
          </section>
        `;
      }

      function renderGameplay(config) {
        return `
          <section class="gameplay" aria-label="Lucky spin wheel">
            <div class="wheel-rotor" aria-hidden="true">
              <img class="gameplay-asset" src="${config.gameplayAssetUrl}" alt="">
            </div>
            <img class="gameplay-pointer" src="${config.pointerAssetUrl}" alt="Spin wheel pointer">
            <button class="gameplay-hitbox" type="button" aria-label="Spin the wheel">Spin the wheel</button>
            <p class="result-toast" data-result aria-live="polite"></p>
            <p class="sr-only" data-result-sr aria-live="polite"></p>
          </section>
        `;
      }

      function renderBottomActions(config) {
        return `
          <nav class="btn-group" aria-label="Campaign actions">
            <button class="side-button left" type="button" data-more-chances>
              <span class="side-bg"></span>
              <span class="side-label">${config.leftAction}</span>
            </button>
            <button class="main-button" type="button" data-primary>
              <span class="main-bg"></span>
              <span class="main-label">${config.primaryLabel}</span>
            </button>
            <button class="side-button right" type="button" data-rules>
              <span class="side-bg"></span>
              <span class="side-label">${config.rightAction}</span>
            </button>
            <p class="chance-text" data-chances>Chances left: ${config.chances}</p>
          </nav>
        `;
      }

      const state = {
        balance: pageConfig.balance,
        chances: pageConfig.chances,
        activeIndex: 0,
        currentRotation: 0,
        isSpinning: false,
      };

      const root = document.querySelector("#page-root");
      root.innerHTML = [
        renderTopNavigation(),
        renderHeader(pageConfig),
        renderAssetImage(pageConfig),
        renderGameplay(pageConfig),
        renderBottomActions(pageConfig),
      ].join("");

      const sharePanel = window.createSharePanel({
        mount: root,
        guideImage: "brazil-samba-share-guide.svg",
        theme: {
          card: "#E8FFF1",
          "primary-text": "#064A2A",
          "secondary-text": "rgba(6, 74, 42, 0.72)",
          "step-bg": "#0A7A39",
          "step-text": "#FFD447",
          divider: "rgba(10, 122, 57, 0.26)",
        },
        instructions: [
          "Share the Samba Football link with friends in Brazil.",
          "Friends open the link and join the lucky spin match.",
          "Every successful invite gives you more spin chances.",
        ],
        disclaimer: "* Spin chances and rewards are credited after invite validation.",
        messages: {
          copied: "Samba invite link copied",
          copyFailed: "Copy failed. Please try again.",
          more: "More share options opened",
          shared: "Share your Samba spin",
        },
      });

      const countdown = document.querySelector(".secondary-info");
      let remainingSeconds = Number(countdown.dataset.countdownSeconds || 0);
      const countdownLabel = countdown.dataset.countdownLabel || "";
      const renderCountdown = () => {
        countdown.textContent = `${countdownLabel}${formatDuration(remainingSeconds)}`;
        if (remainingSeconds > 0) remainingSeconds -= 1;
      };
      renderCountdown();
      window.setInterval(renderCountdown, 1000);

      const balanceNode = document.querySelector("[data-balance]");
      const chanceNode = document.querySelector("[data-chances]");
      const progressNode = document.querySelector("[data-progress]");
      const progressTextNode = document.querySelector("[data-progress-text]");
      const resultNode = document.querySelector("[data-result]");
      const resultSrNode = document.querySelector("[data-result-sr]");
      const wheelRotor = document.querySelector(".wheel-rotor");
      const spinButtons = document.querySelectorAll(".gameplay-hitbox, [data-primary]");
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      function updateVault() {
        balanceNode.textContent = Number(state.balance).toLocaleString("en-US");
        progressNode.style.width = `${getProgressWidth(state.balance, pageConfig.threshold, pageConfig.assetProgressMaxWidth)}px`;
        progressTextNode.textContent = formatProgressText(state.balance, pageConfig.threshold, pageConfig.unit);
        chanceNode.textContent = `Chances left: ${state.chances}`;
        document.querySelector("[data-withdraw]").textContent = pageConfig.assetActionLabel;
      }

      function setSpinDisabled(disabled) {
        spinButtons.forEach((button) => {
          button.disabled = disabled;
          button.toggleAttribute("aria-disabled", disabled);
        });
      }

      function spin() {
        if (state.isSpinning || state.chances <= 0) return;
        state.isSpinning = true;
        state.chances -= 1;
        setSpinDisabled(true);
        resultNode.classList.remove("is-visible");
        updateVault();

        state.activeIndex = (state.activeIndex + 3) % pageConfig.rewards.length;
        const segmentAngle = 360 / pageConfig.rewards.length;
        const targetAngle = -(state.activeIndex * segmentAngle);
        const normalizedCurrent = ((state.currentRotation % 360) + 360) % 360;
        const normalizedTarget = ((targetAngle % 360) + 360) % 360;
        const deltaToTarget = (normalizedTarget - normalizedCurrent + 360) % 360;
        state.currentRotation += (reducedMotion ? 0 : 5) * 360 + deltaToTarget;
        wheelRotor.style.transition = reducedMotion ? "none" : "transform 3200ms cubic-bezier(.12,.78,.18,1)";
        wheelRotor.style.transform = `rotate(${state.currentRotation}deg)`;

        window.setTimeout(() => {
          const reward = pageConfig.rewards[state.activeIndex];
          state.balance += reward;
          resultNode.textContent = `+${formatCoins(reward)}`;
          resultSrNode.textContent = `Reward received: ${formatCoins(reward)}`;
          resultNode.classList.add("is-visible");
          state.isSpinning = false;
          setSpinDisabled(state.chances <= 0);
          updateVault();
        }, reducedMotion ? 80 : 3250);
      }

      spinButtons.forEach((button) => button.addEventListener("click", spin));
      document.querySelector("[data-more-chances]").addEventListener("click", sharePanel.open);
      document.querySelector("[data-rules]").addEventListener("click", () => {
        resultNode.textContent = "Spin the wheel to win coins";
        resultNode.classList.add("is-visible");
      });
      document.querySelector("[data-withdraw]").addEventListener("click", () => {
        resultNode.textContent = state.balance >= pageConfig.threshold ? "Ready to cash out" : "Keep spinning to collect coins";
        resultNode.classList.add("is-visible");
      });
    </script>
  </body>
</html>

```

### examples/h5/samba-mystery-box-page.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <title>Samba Mystery Box</title>
    <link rel="stylesheet" href="../../component-library/components/share-panel/share-panel.css" />
    <style>
      * { box-sizing: border-box; }
      :root {
        --theme-ink: #06130b;
        --theme-muted: rgba(6,19,11,.62);
        --theme-soft-muted: rgba(6,19,11,.48);
        --theme-page: #f7fbef;
        --theme-surface: #fffef4;
        --theme-sky: #e9f6ff;
        --theme-sky-strong: #2577e6;
        --theme-grass: #1fa65a;
        --theme-grass-soft: #dff7df;
        --theme-yellow: #ffd93b;
        --theme-yellow-soft: #fff6c6;
        --theme-coral: #ff6b35;
      }
      html, body { margin: 0; min-height: 100%; background: var(--theme-page); font-family: "TikTok Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; letter-spacing: 0; }
      body { display: flex; justify-content: center; color: var(--theme-ink); }
      button { border: 0; font: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }
      button:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }
      .viewport { width: 390px; height: 844px; overflow: hidden; background: var(--theme-page); }
      .stage { position: relative; width: 390px; height: 844px; overflow: hidden; transform-origin: top left; background: linear-gradient(180deg, #fffbe7 0%, #f0f9ff 44%, #f3fbef 100%); }
      .stage::before, .stage::after { position: absolute; z-index: 0; pointer-events: none; content: ""; }
      .stage::before { left: -72px; top: 132px; width: 248px; height: 116px; border-radius: 64px; background: #fff0a8; transform: rotate(-13deg); }
      .stage::after { right: -92px; top: 540px; width: 268px; height: 132px; border-radius: 72px; background: #c9f5d2; transform: rotate(-18deg); }
      .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }

      .top-navigation { position: absolute; left: 0; top: 0; z-index: 50; width: 390px; height: 91px; transition: background-color .24s ease; }
      .top-navigation.is-solid { background: rgba(255,254,244,.9); backdrop-filter: blur(16px); }
      .system-status-bar { position: absolute; left: 0; top: 0; width: 390px; height: 47px; color: var(--theme-ink); }
      .top-navigation.is-solid .system-status-bar { color: var(--theme-ink); }
      .status-time { position: absolute; left: 45px; top: 18.5px; font-size: 15px; line-height: 21px; font-weight: 600; }
      .status-icons { position: absolute; left: 280px; top: 20px; display: flex; width: 78px; height: 13px; align-items: center; gap: 7px; }
      .cellular-icon { width: 19px; height: 12px; }
      .wifi-icon { width: 17px; height: 12px; }
      .battery-icon { width: 27px; height: 13px; }
      .nav-row { position: absolute; left: 0; top: 47px; width: 390px; height: 44px; }
      .nav-mock { position: absolute; inset: 0; display: flex; align-items: center; justify-content: space-between; padding: 6px 16px; }
      .nav-actions { display: flex; width: 74px; height: 32px; align-items: center; justify-content: flex-end; gap: 10px; }
      .nav-title-area { position: absolute; left: 96px; top: 0; width: 213px; height: 44px; pointer-events: none; }
      .nav-icon-button { display: flex; width: 32px; height: 32px; align-items: center; justify-content: center; flex: 0 0 32px; padding: 6px; border: 1px solid rgba(31,166,90,.14); border-radius: 99px; background: rgba(255,254,244,.84); color: var(--theme-ink); line-height: 0; box-shadow: 0 8px 18px rgba(31,166,90,.08); }
      .top-navigation.is-solid .nav-icon-button { border-color: rgba(31,166,90,.14); background: var(--theme-surface); color: var(--theme-ink); }
      .nav-icon { display: block; width: 20px; height: 20px; flex: 0 0 20px; }

      .primary-title { position: absolute; left: 28px; top: 86px; z-index: 10; display: flex; width: 334px; height: 122px; flex-direction: column; justify-content: center; margin: 0; color: var(--theme-ink); pointer-events: none; font-size: 44px; line-height: 40px; font-weight: 900; letter-spacing: 0; }
      .primary-title__line { display: block; }
      .subtitle { position: absolute; left: 32px; top: 210px; z-index: 9; width: 326px; margin: 0; color: var(--theme-muted); text-align: center; font-size: 14px; line-height: 18px; font-weight: 600; }
      .countdown { position: absolute; left: 116px; top: 236px; z-index: 9; display: flex; width: 158px; height: 32px; align-items: center; justify-content: center; margin: 0; border-radius: 999px; background: var(--theme-sky); color: #155dbd; text-align: center; font-size: 12px; line-height: 16px; font-weight: 600; }
      .countdown.is-urgent { background: #fff0e8; color: var(--theme-coral); font-weight: 600; }
      .drum-glow { position: absolute; right: 8px; top: 112px; z-index: 8; width: 92px; height: 92px; opacity: .8; animation: drumPulse 2s ease-in-out infinite; }
      @keyframes drumPulse { 0%, 100% { transform: scale(.96); opacity: .82; } 50% { transform: scale(1.08); opacity: 1; } }

      .asset-card { position: absolute; left: 32px; top: 284px; z-index: 12; width: 326px; height: 130px; border-radius: 32px; background: rgba(255,254,244,.96); }
      .asset-info { position: absolute; left: 16px; top: 12px; width: 294px; height: 50px; }
      .asset-avatar { position: absolute; left: 0; top: 7px; display: block; width: 36px; height: 36px; overflow: hidden; border: 1px solid rgba(255,255,255,.64); border-radius: 50%; background: #e5e6eb; }
      .asset-avatar img { display: block; width: 100%; height: 100%; object-fit: cover; }
      .asset-title { position: absolute; left: 44px; top: 8.5px; width: 156px; height: 11px; margin: 0; color: var(--theme-muted); font-size: 11px; line-height: 11px; font-weight: 600; }
      .asset-amount { position: absolute; left: 44px; top: 19.5px; display: flex; align-items: baseline; height: 27px; color: var(--theme-ink); white-space: nowrap; }
      .asset-currency, .asset-value { font-size: 22px; line-height: 26px; font-weight: 900; }
      .asset-action { position: absolute; right: 0; top: 11px; width: 78px; height: 28px; border-radius: 100px; background: var(--theme-grass-soft); color: var(--theme-ink); font-size: 12px; line-height: 16px; font-weight: 600; }
      .asset-progress-area { position: absolute; left: 16px; top: 64px; width: 294px; height: 50px; }
      .asset-progress-copy { position: absolute; left: 4px; top: 13px; width: 196px; height: 18px; margin: 0; color: var(--theme-soft-muted); font-size: 14px; line-height: 18px; font-weight: 400; white-space: nowrap; }
      .asset-progress-track { position: absolute; left: 4px; top: 35px; width: 230px; height: 12px; border-radius: 16px; background: #edf5e8; }
      .asset-progress-fill { position: absolute; left: 1px; top: 1px; width: var(--asset-progress, 0%); height: 10px; border-radius: 100px; background: linear-gradient(90deg, var(--theme-yellow), var(--theme-grass)); transition: width .28s ease; }
      .asset-threshold { position: absolute; right: 4px; top: 0; width: 62px; height: 50px; }
      .asset-icon { position: absolute; left: 6px; top: 0; display: block; width: 50px; height: 50px; object-fit: contain; }
      .asset-threshold-pill { position: absolute; left: 0; top: 32px; display: flex; width: 62px; height: 18px; align-items: center; justify-content: center; border-radius: 32px; background: var(--theme-yellow-soft); color: var(--theme-ink); font-size: 10px; line-height: 13px; font-weight: 700; }

      .gameplay { position: absolute; left: 16px; top: 426px; z-index: 8; width: 358px; height: 276px; padding: 16px; border-radius: 32px; background: rgba(255,254,244,.76); }
      .gameplay-title { margin: 0 0 8px; color: var(--theme-ink); text-align: center; font-size: 17px; line-height: 22px; font-weight: 700; }
      .box-row { display: grid; width: 326px; height: 148px; grid-template-columns: repeat(5, minmax(0, 1fr)); align-items: end; justify-items: center; column-gap: 12px; }
      .mystery-box { position: relative; display: block; width: 100%; height: 136px; padding: 0; background: transparent; transform-origin: 50% 86%; transition: transform .2s ease, filter .2s ease; }
      .mystery-box img { position: absolute; left: 50%; top: 4px; display: block; width: 64px; height: 64px; object-fit: contain; transform: translateX(-50%); }
      .mystery-box__reward { position: absolute; left: 50%; bottom: 0; display: grid; width: 56px; min-height: 52px; place-items: center; padding: 4px; border-radius: 16px; background: var(--theme-yellow-soft); color: var(--theme-ink); transform: translateX(-50%); font-size: 10px; line-height: 12px; font-weight: 700; }
      .mystery-box.is-locked { filter: grayscale(.48) brightness(1.06) saturate(.86); }
      .mystery-box.is-ready { animation: readyPulse 1.1s ease-in-out infinite; filter: drop-shadow(0 0 12px rgba(255,217,59,.7)); }
      .mystery-box.is-opening { animation: boxOpen 1.2s ease both; }
      @keyframes readyPulse { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-8px) scale(1.06); } }
      @keyframes boxOpen { 0% { transform: rotate(0) scale(1); } 30% { transform: rotate(-7deg) scale(1.08); } 60% { transform: rotate(7deg) scale(1.1); } 100% { transform: rotate(0) scale(1); } }
      .gameplay-status { display: grid; width: 326px; height: 46px; place-items: center; margin: 0 0 12px; padding: 0 16px; border-radius: 24px; background: #eaf8d9; color: rgba(6,19,11,.76); text-align: center; font-size: 14px; line-height: 18px; font-weight: 600; }
      .gameplay-status__text { display: block; width: 100%; text-align: center; }
      .gameplay-status strong { color: var(--theme-ink); font-weight: 700; }

      .bottom-action { position: absolute; left: 0; bottom: 0; z-index: 30; width: 390px; min-height: 132px; padding: 16px 24px max(34px, env(safe-area-inset-bottom)); background: linear-gradient(180deg, rgba(247,251,239,0), rgba(247,251,239,.92) 28%, rgba(247,251,239,.98)); }
      .primary-cta { display: flex; width: 342px; height: 56px; align-items: center; justify-content: center; border-radius: 28px; background: var(--theme-grass); color: #fff; font-size: 20px; line-height: 26px; font-weight: 700; box-shadow: 0 10px 24px rgba(31,166,90,.18); }
      .primary-cta:active { filter: brightness(.92); transform: translateY(1px) scale(.99); box-shadow: 0 6px 16px rgba(31,166,90,.14); }
      .cta-note { margin: 12px 0 0; color: var(--theme-soft-muted); text-align: center; font-size: 12px; line-height: 16px; font-weight: 400; }

      .toast { position: absolute; left: 50%; top: 50%; z-index: 90; display: flex; width: fit-content; min-width: 108px; max-width: 245px; height: 51px; align-items: center; justify-content: center; padding: 15px 24px; border-radius: 14px; background: rgba(0,0,0,.75); color: #fff; text-align: center; white-space: nowrap; font-family: "PingFang SC", system-ui, sans-serif; font-size: 15px; line-height: 21px; font-weight: 400; opacity: 0; pointer-events: none; transform: translate(-50%, -50%); transition: opacity .18s ease; }
      .toast.is-visible { opacity: 1; }
      .toast.is-two-row { width: 245px; height: 72px; white-space: normal; }

      .dialog-layer { position: absolute; inset: 0; z-index: 96; display: none; align-items: center; justify-content: center; background: rgba(6,19,11,.36); border-radius: 24px; }
      .dialog-layer.is-open { display: flex; }
      .dialog-shell { display: flex; width: 300px; flex-direction: column; align-items: center; gap: 20px; }
      .dialog-card { position: relative; display: flex; width: 300px; min-height: 304px; align-items: center; justify-content: center; padding: 40px 0 32px; overflow: hidden; border-radius: 32px; background: var(--theme-surface); color: var(--theme-ink); }
      .dialog-card::before { position: absolute; left: 0; top: 0; width: 300px; height: 120px; border-radius: 32px 32px 0 0; background: linear-gradient(180deg, rgba(255,217,59,.34), rgba(201,245,210,0)); content: ""; }
      .dialog-content { position: relative; z-index: 1; display: flex; width: 300px; flex-direction: column; align-items: center; gap: 32px; }
      .dialog-main { display: flex; flex-direction: column; align-items: center; gap: 20px; }
      .dialog-title-section { display: flex; width: 300px; flex-direction: column; align-items: center; gap: 8px; padding: 0 24px; text-align: center; word-break: break-word; }
      .dialog-title-section h2 { width: 100%; margin: 0; color: var(--theme-ink); font-size: 20px; line-height: 25px; font-weight: 700; }
      .dialog-title-section p { width: 100%; margin: 0; color: var(--theme-muted); font-size: 14px; line-height: 18px; font-weight: 400; }
      .dialog-reward { display: flex; width: 252px; height: 38px; align-items: center; justify-content: center; gap: 4px; }
      .dialog-reward-icon { display: grid; width: 32px; height: 32px; place-items: center; border-radius: 50%; background: var(--theme-yellow); color: var(--theme-ink); font-size: 18px; line-height: 18px; font-weight: 900; }
      .dialog-reward strong { color: var(--theme-ink); font-size: 32px; line-height: 38px; font-weight: 700; white-space: nowrap; }
      .dialog-action-group { display: flex; width: 300px; justify-content: center; padding: 0 20px; }
      .dialog-primary { width: 260px; height: 48px; border-radius: 999px; background: var(--theme-grass); color: #fff; font-size: 16px; line-height: 21px; font-weight: 600; }
      .dialog-primary:active { filter: brightness(.9); }
      .dialog-close { display: grid; width: 32px; height: 32px; place-items: center; padding: 4px; border-radius: 999px; background: rgba(0,0,0,.5); color: #fff; line-height: 0; }
      .dialog-close svg { width: 24px; height: 24px; }

      .modal, .easter { position: absolute; inset: 0; z-index: 85; display: none; align-items: flex-end; background: rgba(6,19,11,.28); }
      .modal.is-open, .easter.is-open { display: flex; }
      .sheet { width: 390px; padding: 20px 20px max(34px, env(safe-area-inset-bottom)); border-radius: 28px 28px 0 0; background: var(--theme-surface); color: var(--theme-ink); box-shadow: 0 -12px 28px rgba(31,166,90,.14); }
      .sheet h2 { margin: 0; font-size: 24px; line-height: 30px; font-weight: 700; }
      .sheet p { margin: 8px 0 0; font-size: 14px; line-height: 18px; font-weight: 400; }
      .rules-list { margin: 16px 0 0; padding-left: 20px; font-size: 13px; line-height: 17px; font-weight: 400; }
      .rules-list li { margin: 8px 0; }
      .close-button, .easter-card button { width: 100%; height: 48px; margin-top: 16px; border-radius: 24px; background: var(--theme-grass-soft); color: var(--theme-ink); font-size: 15px; line-height: 20px; font-weight: 700; }
      .easter { align-items: center; justify-content: center; background: rgba(255,217,59,.72); }
      .easter-card { width: 326px; padding: 24px 20px; border-radius: 32px; background: var(--theme-surface); text-align: center; box-shadow: 0 12px 28px rgba(31,166,90,.14); }
      .easter-card img { width: 132px; height: 132px; }
      .easter-card h2 { margin: 12px 0 0; font-size: 24px; line-height: 30px; font-weight: 700; }
      .easter-card p { margin: 8px 0 0; font-size: 14px; line-height: 18px; font-weight: 600; }
      .easter-card button { background: var(--theme-grass); color: #fff; }
      .stage > .share-panel { z-index: 95; --tux-sheet-backdrop-1: rgba(6,19,11,.28); --tux-page-grouped-3: #fffef4; --tux-shape-neutral: #1fa65a; --tux-shape-neutral-3: rgba(31,166,90,.14); --tux-text-1: #06130b; --tux-text-2: rgba(6,19,11,.62); }

      @media (max-width: 389px) {
        .viewport { width: 100vw; height: calc(844px * (100vw / 390)); }
        .stage { transform: scale(calc(100vw / 390)); }
      }
    </style>
  </head>
  <body>
    <div class="viewport">
      <main class="stage" data-framework="single-gameplay-conversion-page">
        <nav class="top-navigation" data-component="TopNavigation" data-component-source="component-library/components/top-navigation/component.md" data-figma-node="331:13637" aria-label="Top navigation">
          <div class="system-status-bar" aria-hidden="true">
            <span class="status-time">8:00</span>
            <span class="status-icons">
              <svg class="cellular-icon" viewBox="0 0 19 12"><rect x="0" y="7" width="3" height="5" rx="1" fill="currentColor"/><rect x="5" y="5" width="3" height="7" rx="1" fill="currentColor"/><rect x="10" y="2.5" width="3" height="9.5" rx="1" fill="currentColor"/><rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor"/></svg>
              <svg class="wifi-icon" viewBox="0 0 17 12"><path d="M1 3.9C5.2.1 11.8.1 16 3.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path d="M4.1 7C6.5 4.9 10.5 4.9 12.9 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path d="M7.2 10.1C7.9 9.5 9.1 9.5 9.8 10.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>
              <svg class="battery-icon" viewBox="0 0 27 13"><rect x="0.5" y="1" width="22" height="11" rx="3" fill="none" stroke="currentColor"/><rect x="3" y="3.5" width="16" height="6" rx="1.6" fill="currentColor"/><rect x="24" y="4.2" width="2.5" height="4.6" rx="1" fill="currentColor"/></svg>
            </span>
          </div>
          <div class="nav-row">
            <div class="nav-mock">
              <button class="nav-icon-button" type="button" data-action="back" aria-label="Back">
                <svg class="nav-icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M12.5 4.2 6.7 10l5.8 5.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6"/></svg>
              </button>
              <div class="nav-actions">
                <button class="nav-icon-button" type="button" data-action="rules" aria-label="Rules">
                  <svg class="nav-icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 13.1v-.6c0-1 .5-1.7 1.5-2.4.9-.7 1.4-1.2 1.4-2.1 0-1.2-1-2-2.5-2-1.4 0-2.5.7-3 1.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><circle cx="10" cy="16.1" r="1.2" fill="currentColor"/></svg>
                </button>
                <button class="nav-icon-button" type="button" data-action="more" aria-label="More">
                  <svg class="nav-icon" viewBox="0 0 20 20" aria-hidden="true"><circle cx="5" cy="10" r="1.8" fill="currentColor"/><circle cx="10" cy="10" r="1.8" fill="currentColor"/><circle cx="15" cy="10" r="1.8" fill="currentColor"/></svg>
                </button>
              </div>
              <div class="nav-title-area" aria-hidden="true"></div>
            </div>
          </div>
        </nav>

        <h1 class="primary-title" data-component="PrimaryTitle" data-component-source="component-library/components/primary-title/component.md">
          <span class="primary-title__line">SAMBA</span>
          <span class="primary-title__line">MYSTERY</span>
          <span class="primary-title__line">BOX</span>
        </h1>
        <p class="subtitle">Invite friends, open boxes</p>
        <p class="countdown" data-countdown aria-live="polite">T-21d 0h 0m</p>
        <img class="drum-glow" src="./assets/samba-mystery-box/drum_football.png" alt="" aria-hidden="true" />

        <section class="asset-card" data-component="AssetCard" data-component-source="component-library/components/asset-card/component.md" data-figma-node="309-12053" aria-label="Progress withdraw card">
          <div class="asset-info">
            <span class="asset-avatar" aria-hidden="true"><img src="../../component-library/components/asset-card/assets/default-profile.png" alt="" /></span>
            <p class="asset-title">Points balance</p>
            <div class="asset-amount"><span class="asset-currency">R$</span><span class="asset-value" data-balance>0.00</span></div>
            <button class="asset-action" type="button" data-action="withdraw">Withdraw</button>
          </div>
          <div class="asset-progress-area">
            <p class="asset-progress-copy" data-progress-copy>R$ 5.00 until withdrawal</p>
            <div class="asset-progress-track" aria-hidden="true"><div class="asset-progress-fill" data-progress-fill></div></div>
            <div class="asset-threshold" aria-hidden="true"><img class="asset-icon" src="../../component-library/components/asset-card/assets/default-asset-icon.png" alt="" /><span class="asset-threshold-pill" data-threshold>R$ 5</span></div>
          </div>
        </section>

        <section class="gameplay" data-component="GameplayAsset" data-component-source="custom:five-samba-mystery-boxes" aria-label="Samba mystery boxes">
          <h2 class="gameplay-title">5 Mystery Boxes</h2>
          <p class="gameplay-status" data-gameplay-status><span class="gameplay-status__text">Invite 1 friend to light up the first box.</span></p>
          <div class="box-row" data-box-row></div>
        </section>

        <section class="bottom-action" data-component="ActionSingleButton" data-component-source="component-library/components/bottom-action-triple/component.md" data-figma-node="326-14409">
          <button class="primary-cta" type="button" data-action="invite">Invite Friends</button>
          <p class="cta-note">Share once to unlock the next mystery box.</p>
        </section>
        <div class="toast" data-component="Toast" data-component-source="component-library/components/toast/component.md" data-component-variant="toast/one_row" role="status" aria-live="polite"></div>

        <section class="dialog-layer" data-component="Dialog" data-component-source="component-library/components/dialog/component.md" data-figma-node="521:22331" data-reward-dialog role="dialog" aria-modal="true" aria-labelledby="rewardDialogTitle" aria-hidden="true">
          <div class="dialog-shell">
            <div class="dialog-card dialog-card--with-image">
              <div class="dialog-content">
                <div class="dialog-main">
                  <div class="dialog-title-section">
                    <h2 id="rewardDialogTitle">You earned a reward</h2>
                    <p data-reward-description>Your mystery box opened successfully.</p>
                  </div>
                  <div class="dialog-reward" aria-label="Reward amount">
                    <span class="dialog-reward-icon" aria-hidden="true">P</span>
                    <strong data-reward-amount>0 Points</strong>
                  </div>
                </div>
                <div class="dialog-action-group">
                  <button class="dialog-primary" type="button" data-action="close-reward">OK</button>
                </div>
              </div>
            </div>
            <button class="dialog-close" type="button" data-action="dismiss-reward" aria-label="Close reward dialog">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7.5 7.5 9 9m0-9-9 9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.6"/></svg>
            </button>
          </div>
        </section>

        <section class="modal" data-rules-modal role="dialog" aria-modal="true" aria-labelledby="rulesTitle">
          <div class="sheet">
            <h2 id="rulesTitle">Rules</h2>
            <p>Valid invites unlock boxes through cumulative milestones.</p>
            <ul class="rules-list">
              <li>Progress does not reset between campaign cycles.</li>
              <li>From D11, the artwork switches to World Cup boxes and keeps opened progress.</li>
              <li>Points are credited after risk checks. Withdrawals start from R$ 5.</li>
              <li>Available for users 18+ and subject to risk controls.</li>
            </ul>
            <button class="close-button" type="button" data-action="close-rules">Got it</button>
          </div>
        </section>

        <section class="easter" data-easter role="dialog" aria-modal="true" aria-labelledby="eggTitle">
          <div class="easter-card">
            <img src="./assets/samba-mystery-box/egg_easter.png" alt="" aria-hidden="true" />
            <h2 id="eggTitle">Jackpot Samba!</h2>
            <p>You found the golden box. Global banner activated.</p>
            <button type="button" data-action="close-easter">Continue</button>
          </div>
        </section>
      </main>
    </div>

    <script src="../../component-library/components/share-panel/share-panel.js"></script>
    <script>
      const campaignConfig = {
        dayIndex: 0,
        countdownSeconds: 21 * 24 * 60 * 60,
        pointsToBrlRate: 0.01,
        withdrawMinimumBrl: 5,
        initialPoints: 0,
        initialInvites: 0,
        cta: { first: "Invite Friends", repeat: "Invite More" },
        assets: {
          samba: { locked: "./assets/samba-mystery-box/box_locked_imagine2.png", opened: "./assets/samba-mystery-box/box_opened_imagine2.png", progressColor: "#ffd93b" },
          worldcup: { locked: "./assets/samba-mystery-box/box_worldcup_locked.png", opened: "./assets/samba-mystery-box/box_worldcup_opened.png", progressColor: "#00a859" }
        },
        tiers: [
          { id: "tier1", threshold: 1, min: 100, max: 300 },
          { id: "tier2", threshold: 3, min: 200, max: 500 },
          { id: "tier3", threshold: 6, min: 400, max: 800 },
          { id: "tier4", threshold: 10, min: 600, max: 1200 },
          { id: "tier5", threshold: 15, min: 1000, max: 2000 }
        ],
        shareCopies: [
          "Open a Samba Mystery Box with me.",
          "My box is glowing. Join through my invite.",
          "Sign up, get your bonus, and unlock a box."
        ]
      };

      const state = {
        points: campaignConfig.initialPoints,
        invites: campaignConfig.initialInvites,
        opened: new Set(),
        opening: null,
        countdownSeconds: campaignConfig.countdownSeconds,
        invitePanelOpenedOnce: false,
        firstSharePanelShown: false
      };

      const elements = {
        nav: document.querySelector(".top-navigation"),
        rulesModal: document.querySelector("[data-rules-modal]"),
        easter: document.querySelector("[data-easter]"),
        countdown: document.querySelector("[data-countdown]"),
        balance: document.querySelector("[data-balance]"),
        progressCopy: document.querySelector("[data-progress-copy]"),
        progressFill: document.querySelector("[data-progress-fill]"),
        threshold: document.querySelector("[data-threshold]"),
        boxRow: document.querySelector("[data-box-row]"),
        gameplayStatus: document.querySelector("[data-gameplay-status]"),
        inviteCta: document.querySelector("[data-action='invite']"),
        rewardDialog: document.querySelector("[data-reward-dialog]"),
        rewardAmount: document.querySelector("[data-reward-amount]"),
        rewardDescription: document.querySelector("[data-reward-description]"),
        toast: document.querySelector("[data-component='Toast']")
      };

      let pendingRewardFollowup = null;

      const sharePanel = createSharePanel({
        mount: document.querySelector(".stage"),
        assetBasePath: "../../component-library/components/share-panel/assets",
        guideImageUrl: "./assets/samba-mystery-box/share-panel/samba-mystery-guide-brazil.png",
        instructions: [
          "Share your invite link with a friend.",
          "Your friend opens the link and signs up.",
          "Come back to open a mystery box."
        ],
        disclaimer: "* Rewards are credited after risk checks. Available for users above 18 years old.",
        onShareAction: ({ action, label }) => {
          if (action === "externalShare") {
            settleInvite(label);
            return false;
          }
          return true;
        }
      });

      function getPhase() {
        return campaignConfig.dayIndex >= 11 ? campaignConfig.assets.worldcup : campaignConfig.assets.samba;
      }

      function formatDuration(seconds) {
        const safe = Math.max(0, seconds);
        const days = Math.floor(safe / 86400);
        const hours = Math.floor((safe % 86400) / 3600);
        const minutes = Math.floor((safe % 3600) / 60);
        return `T-${days}d ${hours}h ${minutes}m`;
      }

      function getNextTier() {
        return campaignConfig.tiers.find((tier) => !state.opened.has(tier.id));
      }

      function getTierState(tier) {
        if (state.opened.has(tier.id)) return "opened";
        if (state.opening === tier.id) return "opening";
        if (state.invites >= tier.threshold) return "ready";
        return "locked";
      }

      function formatPoints(value) {
        return new Intl.NumberFormat("en-US").format(value);
      }

      function rewardForTier(tier, index) {
        const span = tier.max - tier.min;
        return tier.min + ((state.invites * 73 + index * 137) % Math.max(1, span + 1));
      }

      function renderBoxes() {
        const phase = getPhase();
        elements.boxRow.innerHTML = campaignConfig.tiers.map((tier, index) => {
          const boxState = getTierState(tier);
          const image = boxState === "opened" ? phase.opened : phase.locked;
          const reward = boxState === "opened" ? `Earned ${formatPoints(tier.reward || rewardForTier(tier, index))} Points` : `Invite ${tier.threshold} friend${tier.threshold > 1 ? "s" : ""}`;
          return `
            <button class="mystery-box is-${boxState}" type="button" data-tier-id="${tier.id}" aria-label="Box ${index + 1}, ${boxState}">
              <img src="${image}" alt="" aria-hidden="true" />
              <span class="mystery-box__reward">${reward}</span>
            </button>
          `;
        }).join("");
      }

      function renderProgress() {
        const cashValue = state.points * campaignConfig.pointsToBrlRate;
        const withdrawalProgress = Math.min(cashValue / campaignConfig.withdrawMinimumBrl, 1);
        const nextTier = getNextTier();
        elements.balance.textContent = cashValue.toFixed(2);
        elements.progressFill.style.setProperty("--asset-progress", `${withdrawalProgress * 100}%`);
        elements.threshold.textContent = `R$ ${campaignConfig.withdrawMinimumBrl}`;
        elements.inviteCta.textContent = state.invites >= 1 ? campaignConfig.cta.repeat : campaignConfig.cta.first;
        const withdrawalGap = Math.max(0, campaignConfig.withdrawMinimumBrl - cashValue);
        elements.progressCopy.textContent = withdrawalGap > 0 ? `R$ ${withdrawalGap.toFixed(2)} until withdrawal` : "Withdrawal available";
        if (!nextTier) {
          elements.gameplayStatus.innerHTML = '<span class="gameplay-status__text">All boxes are open. <strong>Withdraw</strong> is ready.</span>';
          return;
        }
        const remaining = Math.max(0, nextTier.threshold - state.invites);
        if (remaining === 0) {
          elements.gameplayStatus.innerHTML = '<span class="gameplay-status__text">A box is glowing. <strong>Tap it to reveal Points.</strong></span>';
        } else {
          elements.gameplayStatus.innerHTML = `<span class="gameplay-status__text">Invite <strong>${remaining}</strong> more friend${remaining > 1 ? "s" : ""} to light up the next box.</span>`;
        }
      }

      function renderCountdown() {
        elements.countdown.textContent = formatDuration(state.countdownSeconds);
        elements.countdown.classList.toggle("is-urgent", state.countdownSeconds <= 86400);
      }

      function render() {
        renderBoxes();
        renderProgress();
        renderCountdown();
      }

      function showToast(message) {
        window.clearTimeout(showToast.timer);
        elements.toast.textContent = message;
        const useTwoRow = shouldUseTwoRowToast(message);
        elements.toast.classList.toggle("is-two-row", useTwoRow);
        elements.toast.dataset.componentVariant = useTwoRow ? "toast/two_row" : "toast/one_row";
        elements.toast.classList.add("is-visible");
        showToast.timer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 1700);
      }

      function shouldUseTwoRowToast(message) {
        if (!showToast.measure) {
          const measure = document.createElement("span");
          measure.style.position = "absolute";
          measure.style.left = "-9999px";
          measure.style.top = "-9999px";
          measure.style.visibility = "hidden";
          measure.style.whiteSpace = "nowrap";
          measure.style.fontFamily = '"PingFang SC", system-ui, sans-serif';
          measure.style.fontSize = "15px";
          measure.style.lineHeight = "21px";
          measure.style.fontWeight = "400";
          document.body.appendChild(measure);
          showToast.measure = measure;
        }
        showToast.measure.textContent = message;
        return showToast.measure.scrollWidth + 48 > 245;
      }

      function openRewardDialog(reward, onClose) {
        pendingRewardFollowup = onClose || null;
        elements.rewardAmount.textContent = `${formatPoints(reward)} Points`;
        elements.rewardDescription.textContent = "Your mystery box opened successfully. The Points are now in your balance.";
        elements.rewardDialog.classList.add("is-open");
        elements.rewardDialog.setAttribute("aria-hidden", "false");
      }

      function closeRewardDialog() {
        elements.rewardDialog.classList.remove("is-open");
        elements.rewardDialog.setAttribute("aria-hidden", "true");
        const followup = pendingRewardFollowup;
        pendingRewardFollowup = null;
        if (followup) followup();
      }

      function openSharePanel() {
        state.invitePanelOpenedOnce = true;
        sharePanel.open();
      }

      function settleInvite(label) {
        sharePanel.close();
        state.invites += 1;
        showToast(`${label} sent. Invite confirmed +1`);
        if (navigator.vibrate) navigator.vibrate(20);
        render();
      }

      function openTier(tierId) {
        const tier = campaignConfig.tiers.find((item) => item.id === tierId);
        if (!tier || getTierState(tier) !== "ready") {
          showToast("This box is still locked");
          return;
        }
        state.opening = tier.id;
        render();
        if (navigator.vibrate) navigator.vibrate([30, 30, 80]);
        window.setTimeout(() => {
          const reward = rewardForTier(tier, campaignConfig.tiers.indexOf(tier));
          tier.reward = reward;
          state.points += reward;
          state.opened.add(tier.id);
          state.opening = null;
          render();
          const hitEasterEgg = Math.random() < 0.01;
          openRewardDialog(reward, () => {
            if (hitEasterEgg) {
              elements.easter.classList.add("is-open");
            } else {
              window.setTimeout(() => sharePanel.open(), 300);
            }
          });
        }, 1200);
      }

      document.querySelector("[data-action='back']").addEventListener("click", () => showToast("Returning to the main app"));
      document.querySelector("[data-action='rules']").addEventListener("click", () => elements.rulesModal.classList.add("is-open"));
      document.querySelector("[data-action='more']").addEventListener("click", () => showToast("Opening Points wallet"));
      document.querySelector("[data-action='withdraw']").addEventListener("click", () => {
        const cashValue = state.points * campaignConfig.pointsToBrlRate;
        showToast(cashValue >= campaignConfig.withdrawMinimumBrl ? "Withdrawal is available" : "Minimum withdrawal: R$ 5");
      });
      document.querySelector("[data-action='invite']").addEventListener("click", openSharePanel);
      document.querySelector("[data-action='close-rules']").addEventListener("click", () => elements.rulesModal.classList.remove("is-open"));
      document.querySelector("[data-action='close-reward']").addEventListener("click", closeRewardDialog);
      document.querySelector("[data-action='dismiss-reward']").addEventListener("click", closeRewardDialog);
      document.querySelector("[data-action='close-easter']").addEventListener("click", () => {
        elements.easter.classList.remove("is-open");
        sharePanel.open();
      });
      elements.boxRow.addEventListener("click", (event) => {
        const box = event.target.closest("[data-tier-id]");
        if (box) openTier(box.dataset.tierId);
      });
      document.addEventListener("scroll", () => {
        elements.nav.classList.toggle("is-solid", window.scrollY > 8);
      }, { passive: true });

      render();
      window.setInterval(() => {
        state.countdownSeconds = Math.max(0, state.countdownSeconds - 1);
        renderCountdown();
      }, 1000);
      window.setTimeout(() => {
        if (!state.firstSharePanelShown) {
          state.firstSharePanelShown = true;
          sharePanel.open();
        }
      }, 700);
    </script>
  </body>
</html>

```

### examples/h5/share-panel.css

```css
.share-panel {
  position: absolute;
  inset: 0;
  z-index: 20;
  overflow: hidden;
  --tux-font: "TikTok Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --tux-sheet-backdrop-1: rgba(0, 0, 0, 0.5);
  --tux-page-grouped-2: #f1f1f2;
  --tux-page-grouped-3: #ffffff;
  --tux-shape-neutral: #161823;
  --tux-shape-neutral-3: rgba(22, 24, 35, 0.12);
  --tux-page-flat-1: #ffffff;
  --tux-text-1: #161823;
  --tux-text-2: rgba(22, 24, 35, 0.75);
  --tux-sheet-flat-1: #ffffff;
  --tux-toast-bg: #525252;
  --tux-tooltip-text: #f6f6f6;
  --share-card: var(--tux-page-grouped-3);
  --share-primary-text: var(--tux-text-1);
  --share-secondary-text: var(--tux-text-2);
  --share-step-bg: var(--tux-shape-neutral);
  --share-step-text: var(--tux-page-flat-1);
  --share-divider: var(--tux-shape-neutral-3);
  font-family: var(--tux-font);
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease;
}

.share-panel.is-open {
  opacity: 1;
  pointer-events: auto;
}

.share-panel__scrim {
  position: absolute;
  inset: 0;
  background: var(--tux-sheet-backdrop-1, rgba(0,0,0,0.5));
}

.share-instructions {
  position: absolute;
  left: 37px;
  top: 297px;
  width: 316px;
  transform: translateY(12px);
  opacity: 0;
  transition: transform 240ms ease, opacity 200ms ease;
}

.share-panel.is-open .share-instructions {
  transform: translateY(0);
  opacity: 1;
}

.share-instructions__image {
  position: relative;
  z-index: 2;
  width: 316px;
  height: 100px;
  overflow: hidden;
  border-radius: 12px;
  background: var(--tux-page-grouped-2);
}

.share-instructions__image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.share-instructions__steps {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 316px;
  margin-top: -16px;
  padding: 32px 20px 20px;
  border-radius: 16px;
  background: var(--share-card);
}

.share-instructions__connector {
  position: absolute;
  left: 30px;
  top: 44px;
  width: 1px;
  height: 123px;
  background: var(--share-divider);
}

.share-step {
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 34px;
}

.share-step__number {
  display: grid;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  place-items: center;
  border-radius: 9999px;
  background: var(--share-step-bg);
  color: var(--share-step-text);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
}

.share-step__copy {
  color: var(--share-primary-text);
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
}

.share-instructions__divider {
  position: relative;
  z-index: 2;
  width: 248px;
  height: 2px;
  margin: -1px auto;
  background-image: repeating-linear-gradient(
    to right,
    var(--share-divider) 0,
    var(--share-divider) 4px,
    transparent 4px,
    transparent 12px
  );
}

.share-instructions__disclaimer {
  margin: 0;
  padding: 16px 56px;
  border-radius: 16px;
  background: var(--share-card);
  color: var(--share-secondary-text);
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
}

.share-sheet {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 390px;
  height: 169px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  background: var(--tux-sheet-flat-1, #FFFFFF);
  transform: translateY(100%);
  transition: transform 240ms ease;
}

.share-panel.is-open .share-sheet {
  transform: translateY(0);
}

.share-sheet__titlebar {
  position: relative;
  height: 35px;
}

.share-sheet__titlebar h2 {
  padding-top: 10px;
  color: #161823;
  font-size: 13px;
  font-weight: 600;
  line-height: 17px;
  text-align: center;
}

.share-sheet__close {
  position: absolute;
  top: 6px;
  right: 8px;
  width: 24px;
  height: 24px;
  background: transparent;
  color: #161823;
  font-size: 24px;
  font-weight: 400;
  line-height: 20px;
}

.share-sheet__channels {
  position: absolute;
  top: 43px;
  left: 0;
  display: flex;
  gap: 4px;
  width: 390px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 8px;
  scrollbar-width: none;
}

.share-sheet__channels::-webkit-scrollbar {
  display: none;
}

.share-channel {
  display: flex;
  width: 64px;
  height: 70px;
  flex: 0 0 64px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: rgba(22, 24, 35, 0.75);
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
}

.share-channel--double {
  height: 84px;
}

.share-channel:active {
  opacity: 0.72;
}

.share-channel__icon {
  width: 48px;
  height: 48px;
}

.share-channel span {
  width: 64px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.share-sheet__homebar {
  position: absolute;
  left: 126px;
  bottom: 9px;
  width: 139px;
  height: 5px;
  border-radius: 9999px;
  background: #161823;
}

.share-toast {
  position: absolute;
  left: 50%;
  bottom: 184px;
  min-width: 118px;
  min-height: 36px;
  padding: 8px 16px;
  border-radius: 9999px;
  background: var(--tux-toast-bg, #525252);
  color: var(--tux-tooltip-text, #F6F6F6);
  font-size: 13px;
  font-weight: 600;
  line-height: 17px;
  text-align: center;
  opacity: 0;
  transform: translateX(-50%) translateY(8px);
  transition: transform 160ms ease, opacity 160ms ease;
  pointer-events: none;
}

.share-toast.is-visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

@media (max-width: 390px) {
  .share-sheet,
  .share-sheet__channels {
    width: 100vw;
  }
}

```

### examples/h5/share-panel.js

```javascript
(function () {
  const defaultConfig = {
    assetBasePath: "./assets/share-panel",
    guideImage: "image-placeholder.png",
    shareUrl: window.location.href,
    theme: {},
    instructions: [
      "Sharing the link to your friends who haven't download tiktok lite.",
      "Your friends open TikTok with the link, register and check-in.",
      "Check your reward",
    ],
    disclaimer: "* This gameplay is available for users above 18 years old",
    title: "Sent to",
    messages: {
      copied: "Link copied",
      copyFailed: "Couldn't copy link. Try again.",
      more: "More options",
      shared: "Shared",
    },
    channels: [
      ["WhatsApp", "channel-whatsapp.png", "externalShare"],
      ["Copy link", "channel-copy-link.png", "copyLink"],
      ["Facebook", "channel-facebook.png", "externalShare"],
      ["WhatsApp status", "channel-whatsapp.png", "externalShare", "share-channel--double"],
      ["Instagram", "channel-instagram.png", "externalShare"],
      ["Snapchat", "channel-snapchat.png", "externalShare"],
      ["More", "channel-more.png", "more"],
    ],
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function renderSharePanel(config) {
    const styleVars = Object.entries(config.theme || {})
      .map(([key, value]) => `--share-${key}:${escapeHtml(value)}`)
      .join(";");
    const steps = config.instructions
      .map(
        (text, index) => `
          <div class="share-step">
            <span class="share-step__number">${index + 1}</span>
            <span class="share-step__copy">${escapeHtml(text)}</span>
          </div>
        `
      )
      .join("");

    const channels = config.channels
      .map(([label, icon, action, extraClass = ""]) => {
        const className = ["share-channel", extraClass].filter(Boolean).join(" ");
        return `
          <button class="${className}" type="button" data-share-action="${escapeHtml(action)}">
            <img class="share-channel__icon" src="${config.assetBasePath}/${escapeHtml(icon)}" alt="" aria-hidden="true" />
            <span>${escapeHtml(label)}</span>
          </button>
        `;
      })
      .join("");

    return `
      <section class="share-panel" role="dialog" aria-modal="true" aria-labelledby="${config.titleId}" style="${styleVars}" hidden>
        <button class="share-panel__scrim" type="button" aria-label="Close share panel"></button>

        <section class="share-instructions" aria-label="Share instructions">
          <div class="share-instructions__image">
            <img src="${config.assetBasePath}/${escapeHtml(config.guideImage)}" alt="" aria-hidden="true" />
          </div>
          <div class="share-instructions__steps">
            <span class="share-instructions__connector" aria-hidden="true"></span>
            ${steps}
          </div>
          <div class="share-instructions__divider" aria-hidden="true"></div>
          <p class="share-instructions__disclaimer">${escapeHtml(config.disclaimer)}</p>
        </section>

        <section class="share-sheet" aria-labelledby="${config.titleId}">
          <div class="share-sheet__titlebar">
            <h2 id="${config.titleId}">${escapeHtml(config.title)}</h2>
            <button class="share-sheet__close" type="button" aria-label="Close share panel">×</button>
          </div>
          <div class="share-sheet__channels" aria-label="Share channels">
            ${channels}
          </div>
          <div class="share-sheet__homebar" aria-hidden="true"></div>
        </section>

        <div class="share-toast" role="status" aria-live="polite"></div>
      </section>
    `;
  }

  function createSharePanel(options = {}) {
    const titleId = options.titleId || `sharePanelTitle-${Math.random().toString(36).slice(2)}`;
    const config = {
      ...defaultConfig,
      ...options,
      messages: { ...defaultConfig.messages, ...(options.messages || {}) },
      titleId,
    };
    const mount = options.mount || document.body;
    const template = document.createElement("template");
    template.innerHTML = renderSharePanel(config).trim();

    const panel = template.content.firstElementChild;
    const scrim = panel.querySelector(".share-panel__scrim");
    const closeButton = panel.querySelector(".share-sheet__close");
    const toast = panel.querySelector(".share-toast");
    const channels = panel.querySelectorAll(".share-channel");
    let toastTimer;

    function open() {
      panel.hidden = false;
      requestAnimationFrame(() => {
        panel.classList.add("is-open");
      });
    }

    function close() {
      panel.classList.remove("is-open");
      window.setTimeout(() => {
        if (!panel.classList.contains("is-open")) {
          panel.hidden = true;
        }
      }, 240);
    }

    function showToast(message) {
      window.clearTimeout(toastTimer);
      toast.textContent = message;
      toast.classList.add("is-visible");
      toastTimer = window.setTimeout(() => {
        toast.classList.remove("is-visible");
      }, 1400);
    }

    async function handleShareAction(button) {
      const action = button.dataset.shareAction;
      if (action === "copyLink") {
        try {
          await navigator.clipboard.writeText(config.shareUrl);
          showToast(config.messages.copied);
        } catch {
          showToast(config.messages.copyFailed);
        }
        return;
      }

      if (action === "more") {
        showToast(config.messages.more);
        return;
      }

      showToast(config.messages.shared);
    }

    function handleKeydown(event) {
      if (event.key === "Escape" && !panel.hidden) {
        close();
      }
    }

    scrim.addEventListener("click", close);
    closeButton.addEventListener("click", close);
    channels.forEach((button) => {
      button.addEventListener("click", () => handleShareAction(button));
    });
    document.addEventListener("keydown", handleKeydown);
    mount.append(panel);

    return {
      element: panel,
      open,
      close,
      destroy() {
        document.removeEventListener("keydown", handleKeydown);
        panel.remove();
      },
    };
  }

  window.createSharePanel = createSharePanel;
})();

```

### fixtures/brazil-new-user/01-campaign-request.json

```json
{
  "schema_version": "1.0.0",
  "artifact_type": "campaign_request",
  "producer_skill": "campaign-build-orchestrator",
  "target_skill": "incentive-strategy-planner",
  "status": "ready",
  "raw_request": "我想在巴西做一个新用户的拉新的玩法",
  "region": "Brazil",
  "audience": "new_users",
  "business_goal": "new_user_acquisition",
  "known_constraints": [
    "mobile_h5",
    "single_primary_conversion_goal"
  ],
  "available_inputs": {
    "historical_campaign_data": "optional",
    "brand_constraints": "optional",
    "visual_references": "optional"
  },
  "assumptions": [
    "The page should optimize for first invite and first gameplay start."
  ],
  "open_questions": []
}

```

### fixtures/brazil-new-user/02-expected-strategy-brief.json

```json
{
  "schema_version": "1.0.0",
  "artifact_type": "strategy_brief",
  "producer_skill": "incentive-strategy-planner",
  "target_skill": "vibe-activity-page",
  "status": "ready",
  "target_user": {
    "segment": "new_users",
    "age": "",
    "gender": "",
    "identity": "",
    "traits": []
  },
  "region": "Brazil",
  "campaign_goal": "new_user_acquisition",
  "page_structure": {
    "type": "single-gameplay-conversion-page",
    "contents": [
      {
        "id": "header_area",
        "name": "Head Area",
        "description": "Introduce the campaign and create urgency.",
        "fixed": false
      },
      {
        "id": "reward_status_card",
        "name": "Reward Status Card",
        "description": "Show current balance, withdrawal threshold, progress, and redeem action.",
        "fixed": true
      },
      {
        "id": "gameplay_area",
        "name": "Gameplay Area",
        "description": "Main single gameplay interaction selected by the page builder.",
        "fixed": false
      },
      {
        "id": "action_area",
        "name": "Action Area",
        "description": "Bottom action group for more chances, primary action, QR or share entry, and chance count.",
        "fixed": true
      }
    ]
  },
  "notes": [
    "Use a simple invite-driven gameplay page unless the user requests a custom structure."
  ],
  "assumptions": [
    "Age, gender, identity, and behavioral traits were not provided by the user, so they are left empty."
  ],
  "open_questions": []
}

```

### fixtures/brazil-new-user/03-expected-page-build-spec.json

```json
{
  "schema_version": "1.0.0",
  "artifact_type": "page_build_spec",
  "producer_skill": "vibe-activity-page",
  "target_skill": "final_delivery",
  "status": "ready",
  "source_strategy_summary": {
    "target_user": {
      "segment": "new_users",
      "age": "",
      "gender": "",
      "identity": "",
      "traits": []
    },
    "region": "Brazil",
    "campaign_goal": "new_user_acquisition",
    "page_structure": {
      "type": "single-gameplay-conversion-page",
      "contents": [
        {
          "id": "header_area",
          "name": "Head Area",
          "description": "Introduce the campaign and create urgency.",
          "fixed": false
        },
        {
          "id": "reward_status_card",
          "name": "Reward Status Card",
          "description": "Show current balance, withdrawal threshold, progress, and redeem action.",
          "fixed": true
        },
        {
          "id": "gameplay_area",
          "name": "Gameplay Area",
          "description": "Main single gameplay interaction selected by the page builder.",
          "fixed": false
        },
        {
          "id": "action_area",
          "name": "Action Area",
          "description": "Bottom action group for more chances, primary action, QR or share entry, and chance count.",
          "fixed": true
        }
      ]
    },
    "selected_gameplay": "golden_egg"
  },
  "canvas": {
    "width": 390,
    "height": 844,
    "baseline_width": 390,
    "responsive_behavior": "scale_canvas_for_narrower_viewports",
    "safe_area": {
      "top": 0,
      "right": 0,
      "bottom": 0,
      "left": 0
    }
  },
  "page_architecture": {
    "framework": "single-gameplay-conversion-page",
    "sections": [
      {
        "id": "top_navigation",
        "role": "navigation",
        "component": "TopNavigation",
        "fixed": true,
        "order": 1
      },
      {
        "id": "title",
        "role": "campaign_identity",
        "component": "PrimaryTitle",
        "fixed": false,
        "order": 2
      },
      {
        "id": "asset_card",
        "role": "cashout_progress",
        "component": "AssetImage",
        "fixed": true,
        "order": 3
      },
      {
        "id": "gameplay",
        "role": "main_interaction",
        "component": "GameplayAsset",
        "fixed": false,
        "order": 4
      },
      {
        "id": "bottom_actions",
        "role": "conversion_actions",
        "component": "BottomActionTriple",
        "fixed": true,
        "order": 5
      }
    ],
    "primary_flow": [
      "Title",
      "Cashout progress",
      "Gameplay",
      "Invite CTA",
      "Share panel"
    ]
  },
  "component_contracts": [
    {
      "id": "asset_card",
      "component": "AssetImage",
      "strictness": "strict",
      "source": "Figma AssetImage contract",
      "locked": {
        "structure": true,
        "size": true,
        "position": true,
        "copy": true,
        "color": false
      },
      "props": {
        "balance": 80000,
        "threshold": 100000,
        "near_goal_copy": "Only 20,000 to go"
      },
      "qa_rules": [
        "Do not change inner structure unless user explicitly requests it."
      ]
    },
    {
      "id": "bottom_actions",
      "component": "BottomActionTriple",
      "strictness": "strict",
      "source": "Figma ButtonImage1 and side button contracts",
      "locked": {
        "structure": true,
        "size": true,
        "position": true,
        "copy": true,
        "color": false
      },
      "props": {
        "left": "More Chances",
        "center": "Invite Friends",
        "right": "QR Code",
        "chance_text": "1 chance left"
      },
      "qa_rules": [
        "All button text must be horizontally and vertically centered.",
        "Side buttons must stay inside the canvas."
      ]
    },
    {
      "id": "gameplay",
      "component": "GameplayAsset",
      "strictness": "semi_strict",
      "locked": {
        "structure": true,
        "size": true,
        "position": true,
        "copy": true,
        "color": false
      },
      "props": {
        "gameplay_type": "golden_egg"
      },
      "qa_rules": [
        "Use one image element.",
        "Do not place text inside the gameplay asset.",
        "Keep 20px horizontal margin."
      ]
    }
  ],
  "layout_slots": {
    "background_slot": {
      "x": 0,
      "y": 0,
      "width": 390,
      "height": 844
    },
    "title_art_box": {
      "x": 48,
      "y": 76,
      "width": 294,
      "height": 104
    },
    "asset_card_box": {
      "x": 28,
      "y": 190,
      "width": 334,
      "height": 126
    },
    "gameplay_asset_box": {
      "x": 20,
      "y": 322,
      "width": 350,
      "height": 326
    },
    "bottom_actions_box": {
      "x": 0,
      "y": 666,
      "width": 390,
      "height": 142
    },
    "reserved_gaps": [
      {
        "id": "gameplay_vertical_center_gap",
        "from": "asset_card_box",
        "to": "bottom_actions_box",
        "rule": "Gameplay asset must be vertically centered in the available gap and must not overlap either UI block."
      }
    ]
  },
  "content_config": {
    "title": "Invite Friends Win Gifts",
    "reward": {
      "balance": 80000,
      "threshold": 100000,
      "unit": "coins"
    },
    "cta": {
      "primary": "Invite Friends",
      "left": "More Chances",
      "right": "QR Code"
    },
    "timer": {
      "enabled": true,
      "duration_seconds": 86400,
      "prefix": "Expires in"
    },
    "share": {
      "enabled": true,
      "trigger": "primary_cta"
    }
  },
  "implementation": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "entry_file": "/Users/bytedance/Documents/Incentive Page Cases/brazil-new-user/index.html",
    "generated_files": [
      "/Users/bytedance/Documents/Incentive Page Cases/brazil-new-user/index.html"
    ],
    "asset_directory": "/Users/bytedance/Documents/Incentive Page Cases/brazil-new-user/assets",
    "dependencies": []
  },
  "asset_generation_plan": {
    "visual_freedom": [
      "background artwork",
      "title art treatment",
      "gameplay asset style",
      "color palette"
    ],
    "asset_requests": [
      {
        "id": "background",
        "type": "full_screen_image",
        "slot": "background_slot",
        "dimensions": {
          "width": 390,
          "height": 844
        },
        "requirements": [
          "Single full-screen image",
          "No abrupt edge cutoffs",
          "Leave UI readability clear"
        ]
      },
      {
        "id": "title_art",
        "type": "raster_title",
        "slot": "title_art_box",
        "dimensions": {
          "width": 294,
          "height": 104
        },
        "requirements": [
          "Text: Invite Friends Win Gifts",
          "Transparent background",
          "Readable at mobile scale"
        ]
      },
      {
        "id": "gameplay_asset",
        "type": "transparent_png",
        "slot": "gameplay_asset_box",
        "dimensions": {
          "width": 350,
          "height": 326
        },
        "requirements": [
          "Golden egg smashing gameplay object",
          "No text inside the asset",
          "Minimal transparent padding",
          "Do not overlap top card or bottom buttons"
        ]
      }
    ],
    "locked_visual_rules": [
      "Do not alter strict component geometry",
      "All UI layers stay above gameplay asset",
      "Button text remains centered"
    ]
  },
  "qa_requirements": [
    "gameplay_asset_box_calculated_before_generation",
    "gameplay_asset_has_no_text",
    "gameplay_asset_has_20px_horizontal_margin",
    "bottom_buttons_inside_canvas",
    "button_text_centered",
    "chance_text_centered"
  ],
  "assumptions": [
    "Asset box is calculated before gameplay asset generation."
  ],
  "open_questions": []
}

```

### fixtures/brazil-samba-football/03-page-build-spec.json

```json
{
  "schema_version": "1.0.0",
  "artifact_type": "page_build_spec",
  "producer_skill": "vibe-activity-page",
  "target_skill": "final_delivery",
  "status": "ready",
  "source_strategy_summary": {
    "target_user": {
      "segment": "new_users",
      "age": "",
      "gender": "",
      "identity": "",
      "traits": ["Brazil football and samba affinity"]
    },
    "region": "Brazil",
    "campaign_goal": "new_user_acquisition",
    "page_structure": {
      "type": "single-gameplay-conversion-page",
      "contents": [
        {
          "id": "header_area",
          "name": "Head Area",
          "description": "展示桑巴足球活动主题和核心转盘玩法。",
          "fixed": false
        },
        {
          "id": "countdown",
          "name": "Countdown",
          "description": "Use a real countdown timer to create urgency.",
          "fixed": true
        },
        {
          "id": "asset_card",
          "name": "Coin Vault",
          "description": "Show current coin balance, withdrawal threshold, and withdrawal action.",
          "fixed": true
        },
        {
          "id": "gameplay_area",
          "name": "抽奖大转盘",
          "description": "用户抽奖获得金币，并计入小金库总额。",
          "fixed": false
        }
      ]
    },
    "selected_gameplay": "spin_wheel"
  },
  "canvas": {
    "width": 390,
    "height": 844,
    "baseline_width": 390,
    "responsive_behavior": "scale_canvas_for_narrower_viewports",
    "safe_area": {
      "top": 0,
      "right": 0,
      "bottom": 0,
      "left": 0
    }
  },
  "page_architecture": {
    "framework": "single-gameplay-conversion-page",
    "sections": [
      { "id": "top_navigation", "role": "navigation", "component": "TopNavigation", "fixed": true, "order": 1 },
      { "id": "title", "role": "campaign_identity", "component": "PrimaryTitle", "fixed": false, "order": 2 },
      { "id": "countdown", "role": "urgency", "component": "CountdownText", "fixed": true, "order": 3 },
      { "id": "asset_card", "role": "cashout_progress", "component": "AssetImage", "fixed": true, "order": 4 },
      { "id": "gameplay", "role": "main_interaction", "component": "SpinWheelImagePair", "fixed": false, "order": 5 },
      { "id": "bottom_actions", "role": "conversion_actions", "component": "BottomActionTriple", "fixed": true, "order": 6 }
    ],
    "primary_flow": ["活动标题", "倒计时", "小金库", "抽奖大转盘", "提现或获取更多机会"]
  },
  "component_contracts": [
    {
      "id": "top_navigation",
      "component": "TopNavigation",
      "strictness": "strict",
      "source": "Figma navigation component contract",
      "locked": { "structure": true, "size": true, "position": true, "copy": true, "color": true },
      "props": { "variant": "dark two-action" },
      "qa_rules": ["Do not recolor the navigation to match the campaign theme."]
    },
    {
      "id": "asset_card",
      "component": "AssetImage",
      "strictness": "strict",
      "source": "Figma AssetImage contract",
      "locked": { "structure": true, "size": true, "position": true, "copy": false, "color": false },
      "props": { "balance": 3200, "threshold": 10000, "unit": "金币", "withdraw_label": "提现" },
      "qa_rules": ["Keep inner child coordinates from AssetImage contract."]
    },
    {
      "id": "gameplay",
      "component": "SpinWheelImagePair",
      "strictness": "semi_strict",
      "locked": { "structure": true, "size": true, "position": true, "copy": false, "color": false },
      "props": { "wheel_body": "spin-wheel-brazil-body.svg", "pointer": "spin-wheel-pointer.svg" },
      "qa_rules": ["Use one rotating wheel-body image and one fixed pointer image."]
    }
  ],
  "layout_slots": {
    "background_slot": { "x": 0, "y": 0, "width": 390, "height": 844 },
    "title_art_box": { "x": 11, "y": 60, "width": 368, "height": 96 },
    "asset_card_box": { "x": 32, "y": 188, "width": 326, "height": 120 },
    "gameplay_asset_box": { "x": 32, "y": 342, "width": 326, "height": 326 },
    "bottom_actions_box": { "x": 0, "y": 668, "width": 390, "height": 120 },
    "reserved_gaps": [
      {
        "id": "gameplay_vertical_center_gap",
        "from": "asset_card_box",
        "to": "bottom_actions_box",
        "rule": "Gameplay asset is vertically centered between the vault and bottom action group."
      }
    ]
  },
  "content_config": {
    "title": "桑巴足球幸运转盘",
    "reward": {
      "balance": 3200,
      "threshold": 10000,
      "unit": "金币",
      "draw_rewards": [1200, 800, 300, 1200, 500, 2000, 600, 100, 900]
    },
    "cta": {
      "primary": "抽奖",
      "left": "更多\n机会",
      "right": "活动\n规则",
      "withdraw": "提现"
    },
    "timer": {
      "label": "倒计时：",
      "initial_seconds": 279840
    },
    "share": {
      "enabled": true,
      "entry": "left_action"
    }
  },
  "implementation": {
    "stack": ["HTML", "CSS", "JavaScript"],
    "entry_file": "examples/h5/brazil-samba-football-spin-wheel.html",
    "generated_files": [
      "examples/h5/brazil-samba-football-spin-wheel.html",
      "examples/h5/assets/bg-brazil-samba-football.svg",
      "examples/h5/assets/title-brazil-samba-football.svg",
      "examples/h5/assets/spin-wheel-brazil-body.svg"
    ],
    "asset_directory": "examples/h5/assets"
  },
  "asset_generation_plan": {
    "visual_direction": "Brazil samba football field with green, yellow, blue, trophy-like coin accents, and a large football-themed spin wheel.",
    "asset_slots": ["background_slot", "title_art_box", "gameplay_asset_box"]
  },
  "qa_requirements": [
    "One dominant gameplay CTA.",
    "Countdown is driven by code and clamps at zero.",
    "Coin rewards add to the vault balance after each draw.",
    "Canvas scales down at 320px."
  ],
  "assumptions": [
    "The campaign can use Portuguese CTA labels for Brazil.",
    "原型页提现门槛设为 10000 金币。"
  ],
  "open_questions": []
}

```

### fixtures/samba-mystery-box/03-page-build-spec.json

```json
{
  "status": "ready",
  "page": {
    "name": "Samba Mystery Box",
    "framework": "single-gameplay-conversion-page",
    "delivery": "H5",
    "file": "examples/h5/samba-mystery-box-page.html",
    "language_rule": "All visible user-facing copy is English unless localization is explicitly requested."
  },
  "component_reuse_map": [
    {
      "module": "top_navigation",
      "component": "TopNavigation",
      "source": "component-library/components/top-navigation/component.md",
      "figmaNode": "331:13637",
      "reuseStatus": "used_in_example_code"
    },
    {
      "module": "primary_title",
      "component": "PrimaryTitle",
      "source": "component-library/components/primary-title/component.md",
      "reuseStatus": "used_in_example_code"
    },
    {
      "module": "progress_withdraw_card",
      "component": "AssetCard",
      "source": "component-library/components/asset-card/component.md",
      "figmaNode": "309-12053",
      "reuseStatus": "used_in_example_code"
    },
    {
      "module": "main_gameplay",
      "component": "custom five-box blind-box gameplay",
      "source": "custom: AI_DESIGNED",
      "reuseStatus": "custom_gap",
      "gapReason": "No catalog component covers five cumulative mystery boxes with locked, ready, opening, opened, and easter egg states."
    },
    {
      "module": "action_single_button",
      "component": "single action button pattern",
      "source": "component-library/components/bottom-action-triple/component.md",
      "figmaNode": "326-14409",
      "reuseStatus": "used_in_example_code"
    },
    {
      "module": "share_panel",
      "component": "SharePanel",
      "source": "component-library/components/share-panel",
      "figmaNode": "332-15383",
      "reuseStatus": "used_existing_component_files"
    },
    {
      "module": "toast",
      "component": "Toast",
      "source": "component-library/components/toast/component.md",
      "reuseStatus": "used_in_example_code"
    },
    {
      "module": "reward_result_dialog",
      "component": "Dialog",
      "source": "component-library/components/dialog/component.md",
      "figmaNode": "521:22331",
      "reuseStatus": "used_in_example_code",
      "usageRule": "Opening a box and receiving Points uses Dialog with explicit reward amount, not Toast."
    }
  ],
  "primary_link": {
    "states": [
      "landing",
      "guide_share_panel",
      "invite_settled",
      "box_unlock_ready",
      "box_opening",
      "reward_result_dialog",
      "points_credited",
      "easter_egg_or_continue_inviting",
      "withdraw_ready"
    ],
    "triggers": [
      "first entry opens guide SharePanel once",
      "primary CTA opens SharePanel",
      "share channel click simulates valid invite settlement",
      "threshold invite count unlocks a box",
      "box click opens unlocked box and then opens reward result Dialog",
      "1% probability opens jackpot layer"
    ],
    "finalConversion": "Invite more friends or withdraw when R$ 5 threshold is met."
  },
  "assets": {
    "formatRule": "Icons may be SVG. Background, title art, gameplay boxes, drum, easter egg, and share guide image are PNG.",
    "files": [
      "examples/h5/assets/samba-mystery-box/bg_samba_night.png",
      "examples/h5/assets/samba-mystery-box/title_samba_mystery.png",
      "examples/h5/assets/samba-mystery-box/drum_glow.png",
      "examples/h5/assets/samba-mystery-box/box_locked.png",
      "examples/h5/assets/samba-mystery-box/box_opened.png",
      "examples/h5/assets/samba-mystery-box/box_worldcup_locked.png",
      "examples/h5/assets/samba-mystery-box/box_worldcup_opened.png",
      "examples/h5/assets/samba-mystery-box/egg_easter.png",
      "examples/h5/assets/samba-mystery-box/share-panel/samba-mystery-guide.png"
    ]
  },
  "constraints": {
    "typography_locked": true,
    "spacing_locked": true,
    "component_level_changes": ["color", "image"],
    "no_new_layout_structure": true,
    "component_library_runtime_code": "Do not place runtime code under component-library; example usage code lives in examples."
  },
  "qa_notes": [
    "TopNavigation preserves status bar, nav row, back action, two right actions, and title area.",
    "AssetCard progress bar shows withdrawal threshold progress toward R$ 5. Box unlock progress stays in the gameplay area copy and box states.",
    "SharePanel share sheet uses existing component files and keeps channel area locked.",
    "Reward result uses the Dialog component from Figma node 521:22331 and explicitly displays the earned Points amount. Toast is not used for reward-result feedback.",
    "Gameplay is the only custom component gap.",
    "Main interaction path is implemented with invite settlement, unlock, opening, points credit, and jackpot feedback."
  ]
}

```

### MANIFEST.md

```markdown
# Package Manifest

Package: `incentive-design-agent-skill`

This manifest lists the distributable Agent Skill package contents.

## Directory Tree

```txt
incentive-design-agent-skill/
├── component-library/
│   ├── components/
│   │   ├── asset-card/
│   │   │   ├── assets/
│   │   │   │   ├── default-asset-icon.png
│   │   │   │   └── default-profile.png
│   │   │   └── component.md
│   │   ├── bottom-action-triple/
│   │   │   └── component.md
│   │   ├── contribution-module/
│   │   │   └── component.md
│   │   ├── dialog/
│   │   │   └── component.md
│   │   ├── primary-title/
│   │   │   └── component.md
│   │   ├── share-panel/
│   │   │   ├── assets/
│   │   │   │   ├── channel-copy-link.png
│   │   │   │   ├── channel-copy-link.svg
│   │   │   │   ├── channel-facebook.png
│   │   │   │   ├── channel-facebook.svg
│   │   │   │   ├── channel-instagram.png
│   │   │   │   ├── channel-instagram.svg
│   │   │   │   ├── channel-more.png
│   │   │   │   ├── channel-more.svg
│   │   │   │   ├── channel-snapchat.png
│   │   │   │   ├── channel-snapchat.svg
│   │   │   │   ├── channel-whatsapp.png
│   │   │   │   ├── channel-whatsapp.svg
│   │   │   │   ├── image-placeholder.png
│   │   │   │   └── image-placeholder.svg
│   │   │   ├── component.md
│   │   │   ├── share-panel.css
│   │   │   └── share-panel.js
│   │   ├── task-list/
│   │   │   ├── component.md
│   │   │   ├── task-list.css
│   │   │   └── task-list.js
│   │   ├── toast/
│   │   │   └── component.md
│   │   └── top-navigation/
│   │       ├── assets/
│   │       │   ├── music-note-s-alt-centered.svg
│   │       │   └── music-note-s-alt.svg
│   │       ├── component.md
│   │       ├── top-navigation.css
│   │       └── top-navigation.js
│   ├── _component-template.md
│   └── README.md
├── contracts/
│   ├── campaign-request.schema.json
│   ├── page-build-spec.schema.json
│   └── strategy-brief.schema.json
├── docs/
│   └── campaign-skill-suite-protocol.md
├── examples/
│   └── h5/
│       ├── assets/
│       │   ├── samba-mystery-box/
│       │   │   ├── imagegen-source/
│       │   │   │   └── drum_football_chroma.png
│       │   │   ├── share-panel/
│       │   │   │   ├── imagegen-source/
│       │   │   │   │   └── samba-mystery-guide-brazil-chroma.png
│       │   │   │   ├── samba-mystery-guide-brazil.png
│       │   │   │   └── samba-mystery-guide.png
│       │   │   ├── bg_samba_night.png
│       │   │   ├── box_locked_imagine2.png
│       │   │   ├── box_locked.png
│       │   │   ├── box_opened_imagine2.png
│       │   │   ├── box_opened.png
│       │   │   ├── box_worldcup_locked.png
│       │   │   ├── box_worldcup_opened.png
│       │   │   ├── drum_football.png
│       │   │   ├── drum_glow.png
│       │   │   ├── egg_easter.png
│       │   │   └── title_samba_mystery.png
│       │   ├── share-panel/
│       │   │   ├── brazil-samba-share-guide.svg
│       │   │   ├── channel-copy-link.png
│       │   │   ├── channel-copy-link.svg
│       │   │   ├── channel-facebook.png
│       │   │   ├── channel-facebook.svg
│       │   │   ├── channel-instagram.png
│       │   │   ├── channel-instagram.svg
│       │   │   ├── channel-more.png
│       │   │   ├── channel-more.svg
│       │   │   ├── channel-snapchat.png
│       │   │   ├── channel-snapchat.svg
│       │   │   ├── channel-whatsapp.png
│       │   │   ├── channel-whatsapp.svg
│       │   │   ├── image-placeholder.png
│       │   │   └── image-placeholder.svg
│       │   ├── bg-brazil-samba-football.svg
│       │   ├── spin-wheel-brazil-body.svg
│       │   ├── spin-wheel-pointer.svg
│       │   └── title-brazil-samba-football.svg
│       ├── brazil-samba-football-spin-wheel.html
│       ├── samba-mystery-box-page.html
│       ├── share-panel.css
│       └── share-panel.js
├── fixtures/
│   ├── brazil-new-user/
│   │   ├── 01-campaign-request.json
│   │   ├── 02-expected-strategy-brief.json
│   │   └── 03-expected-page-build-spec.json
│   ├── brazil-samba-football/
│   │   └── 03-page-build-spec.json
│   └── samba-mystery-box/
│       └── 03-page-build-spec.json
├── skills/
│   ├── campaign-build-orchestrator/
│   │   ├── agents/
│   │   │   └── openai.yaml
│   │   └── SKILL.md
│   ├── figma-main-flow-annotator/
│   │   ├── agents/
│   │   │   └── openai.yaml
│   │   └── SKILL.md
│   ├── incentive-strategy-planner/
│   │   ├── agents/
│   │   │   └── openai.yaml
│   │   ├── evals/
│   │   ├── references/
│   │   │   └── fission-design-rules.md
│   │   └── SKILL.md
│   └── vibe-activity-page/
│       ├── agents/
│       │   └── openai.yaml
│       ├── references/
│       │   ├── page-structures/
│       │   │   ├── index.md
│       │   │   ├── nurture-progress-conversion-page.md
│       │   │   ├── progress-accumulation-conversion-page.md
│       │   │   └── single-gameplay-conversion-page.md
│       │   ├── visual-styles/
│       │   │   ├── dreamy-cloud-campaign.md
│       │   │   ├── index.md
│       │   │   ├── retro-journal.md
│       │   │   └── soft-colorful-card.md
│       │   ├── code-to-figma-restoration.md
│       │   ├── components.md
│       │   ├── conversion-patterns.md
│       │   ├── figma-interaction-flow-extension.md
│       │   ├── qa-checklist.md
│       │   ├── responsive.md
│       │   ├── spacing.md
│       │   ├── tux-noncolor-visual-rules.md
│       │   └── typography.md
│       ├── templates/
│       │   ├── CashbackPage.tsx
│       │   ├── InviteLotteryPage.tsx
│       │   ├── NurtureProgressPage.tsx
│       │   ├── SingleGameplayConversionPage.tsx
│       │   └── TaskRewardPage.tsx
│       └── SKILL.md
├── .clinerules
├── .cursorrules
├── .windsurfrules
├── agent-skill.json
├── AGENTS.md
├── CLAUDE.md
├── MANIFEST.md
├── README.md
└── SKILL.md
```

## Files

| Path | Size | Type | SHA-256 |
| --- | ---: | --- | --- |
| `.clinerules` | 416 | text | `daa21111062a2f642413f168bb5f5341eff91476afddbe9208ef154cf4d77ee7` |
| `.cursorrules` | 675 | text | `95372a70cf5d64c738e718bde189515da6febb1f255a968fd3ac22efd4783a38` |
| `.windsurfrules` | 489 | text | `715b26f11818b1a38ef1869f633ed7648bd2dc8c6827007206324ab3087de04a` |
| `agent-skill.json` | 2197 | text | `94b6afee92c38b064d6c744977f9b909481faa4c51c1209cca104b80ae6d5f8b` |
| `AGENTS.md` | 3837 | text | `0a38367ba0b7076eb8e4f4e1cbe3c94bb8c09ba4bbdcc7f7e9e698406f535fea` |
| `CLAUDE.md` | 761 | text | `ad6be93ce21964f56c35de0b873d1b3d726c8d0cca3026992a435535ec6d73c9` |
| `component-library/_component-template.md` | 994 | text | `546102f847b6d76f189b14b32645380a486659310e5369ce2ca2262a63695945` |
| `component-library/components/asset-card/assets/default-asset-icon.png` | 4425 | binary | `09abc53a4ed59e78cedd65d75c74bbc216962be9a179926e6bd38fe7d6fb8c50` |
| `component-library/components/asset-card/assets/default-profile.png` | 3609 | binary | `7b4c8936ebf06f68e55de65092ca30f5d5855cb1d33eda6b9f8c966de3b6b1a7` |
| `component-library/components/asset-card/component.md` | 21342 | text | `1a6ddaa0b9c0ee95ae4654b2d8b47f7b08d5b0673bebd3f5679d3a6bd220ad0d` |
| `component-library/components/bottom-action-triple/component.md` | 2855 | text | `59f6b1b3531ca6d60359d46a9eafb6d10a74963a87461383ac3101838a51ea25` |
| `component-library/components/contribution-module/component.md` | 2424 | text | `7a7aa92e90919f173d057a3df941e023ad85df748b00c196af178ed3ab411f80` |
| `component-library/components/dialog/component.md` | 5916 | text | `db2d3a203e998f6b68d3b4d1d3913f358126a23e7fd88909cc424b81b1e52a1b` |
| `component-library/components/primary-title/component.md` | 2846 | text | `937b4afa7761c33c727328b1b4a71a942a6f629c2d208191353e588cbae64991` |
| `component-library/components/share-panel/assets/channel-copy-link.png` | 5244 | binary | `918dd4584559721b2c3ff27fef387149d2f9b6dea88031533afc3d695981ef3a` |
| `component-library/components/share-panel/assets/channel-copy-link.svg` | 566 | text | `2f42aaa028f80cf09aa4b29be74fcf06d9f5198506de2982776064fd44e0deff` |
| `component-library/components/share-panel/assets/channel-facebook.png` | 3985 | binary | `4b64772a2aca392028a495f6f40ce025abc44823710b25eb9a18bb274a630979` |
| `component-library/components/share-panel/assets/channel-facebook.svg` | 278 | text | `662d366a6e6902ceb604b15564a6cd75d301a5d683433af1d06d9b9cec653dac` |
| `component-library/components/share-panel/assets/channel-instagram.png` | 19466 | binary | `870f96c131e3c8cee33d5a654a46b4ac2447780eb4a5ceb0b85f754c58f40b33` |
| `component-library/components/share-panel/assets/channel-instagram.svg` | 664 | text | `5de450de4111e0a1ab60dc3d968ae5e29a2a52b2ae0642786066dc461cc20b9f` |
| `component-library/components/share-panel/assets/channel-more.png` | 3788 | binary | `7f198a480f59f196197786f95debd1e57472ee1736c545c966e1619ae65ff91a` |
| `component-library/components/share-panel/assets/channel-more.svg` | 301 | text | `78174c34cb45744a296dd864a549549ff9dc1637188ac602a395182274ea961d` |
| `component-library/components/share-panel/assets/channel-snapchat.png` | 5122 | binary | `792b7d1f50963e0e9d2388bf2a768413ca56d36f1e920bf16b00343a5256d7b6` |
| `component-library/components/share-panel/assets/channel-snapchat.svg` | 413 | text | `454283072265fd482b5b1327625e277d9b611404f690a506b6ed929c7e4e29f3` |
| `component-library/components/share-panel/assets/channel-whatsapp.png` | 6470 | binary | `3d12cbf60731f6c1b8611c6ec0fd5be72d1e9ab0adce3a00dda157887703e07e` |
| `component-library/components/share-panel/assets/channel-whatsapp.svg` | 405 | text | `933c077307fbcd359068029228717e909009c0c2192d310b133812d0d75cba93` |
| `component-library/components/share-panel/assets/image-placeholder.png` | 413 | binary | `5e44783f2b2874265d1f7ef61a565345f67375cd0c2478802e9ffb54be2c9392` |
| `component-library/components/share-panel/assets/image-placeholder.svg` | 574 | text | `cd92900955a16c04061dc98a24c525bd918b85a2a4b4527152ec757f199cbe0e` |
| `component-library/components/share-panel/component.md` | 11656 | text | `198eb743e2d8302febf78ff9f3e2403baa7f25e8ea2634ac938230df14f9d918` |
| `component-library/components/share-panel/share-panel.css` | 5199 | text | `cdb441bcf7a993341d25ef900f43dce09c2990e4dacdb237915e42dc57b8f0be` |
| `component-library/components/share-panel/share-panel.js` | 6420 | text | `d48f0b35e5f8a5431895f19ec80bd746b633602a130e353cbefc75cee93307fc` |
| `component-library/components/task-list/component.md` | 4259 | text | `e787d1a0b80e758d4e7dad9177eac9e16fce2f239d44106a5ab294c484d5ca3b` |
| `component-library/components/task-list/task-list.css` | 6673 | text | `11a56197a3b079d78b88288c40c493bd432a31125d21ac38b7da57a9481ad154` |
| `component-library/components/task-list/task-list.js` | 5256 | text | `0d90fa8ea66142bfe60c4802a9b1a726126846b3c233afca02eec3e6542da85a` |
| `component-library/components/toast/component.md` | 3379 | text | `f155944774b65802c91ff8b5d0eae638c544ec35d0af969eeeedc224592dc5a3` |
| `component-library/components/top-navigation/assets/music-note-s-alt-centered.svg` | 650 | text | `b86257ba24a951d63ac6c125efd1dd11b7ec33eae9c9b25b75b18c5591aca746` |
| `component-library/components/top-navigation/assets/music-note-s-alt.svg` | 745 | text | `28733d2bcab39623bd91a450e8021ea7637df1764bf8b4e15961b875c5e1dc20` |
| `component-library/components/top-navigation/component.md` | 7355 | text | `01766d3db5783814bbccf17d0a8a0a93cd4cce2c59d01f6eb5998f50de57b04f` |
| `component-library/components/top-navigation/top-navigation.css` | 5867 | text | `f90530144030e87f49593dd655da25ea4ba0096a55293310fe53161b3fdf8ad9` |
| `component-library/components/top-navigation/top-navigation.js` | 6441 | text | `22cb5edeb6756e49f3e5ca81fab12515caeb25fe7283e6e10eb43e0778931a6f` |
| `component-library/README.md` | 3624 | text | `442b2c63ab1e71529b9e87e96f275950ce7abbd7ed8934bd29a7cd0312409052` |
| `contracts/campaign-request.schema.json` | 1262 | text | `6bb3252c78ed87f477624b7894ec9516c659dfb6d09fe2c1d811396de8b2065f` |
| `contracts/page-build-spec.schema.json` | 9330 | text | `cce52a38ff3263541aa3979ef6e29706d0eba11f7f193f35da7e1cd965402921` |
| `contracts/strategy-brief.schema.json` | 4033 | text | `ccd4ef2a70bce684354ca3877f33fc9acdcbaf363d74823f46793b73a7641900` |
| `docs/campaign-skill-suite-protocol.md` | 3076 | text | `cd3a5b13df15522e145784861df1bdb0deacde4c1f2a167463b624d45244ffa4` |
| `examples/h5/assets/bg-brazil-samba-football.svg` | 2584 | text | `896be07a90c569c71514f8928809d2db14eb117f56c90548a1bf916041e9afdc` |
| `examples/h5/assets/samba-mystery-box/bg_samba_night.png` | 80766 | binary | `e18fd3fad8d1384d22407fccac5e9aa2057b68db89068695b56861683e7cb77a` |
| `examples/h5/assets/samba-mystery-box/box_locked_imagine2.png` | 924615 | binary | `b2680ae73faf373856e070227c92ed3604de2465061de02152b1c9521b099a98` |
| `examples/h5/assets/samba-mystery-box/box_locked.png` | 10269 | binary | `02e550404f4879e4fb4fea8df972cc8f9ca541a5167cf6de841fb5f9ed4a192b` |
| `examples/h5/assets/samba-mystery-box/box_opened_imagine2.png` | 1029241 | binary | `2249d5bac1c909b8a25982641c84539e2e70ed89476a0abe6a5fb0094a2f98b5` |
| `examples/h5/assets/samba-mystery-box/box_opened.png` | 13912 | binary | `f9fcb300bd1877bb9dfa9b4a38c5a15de6443bd33f8da36138298063298a9482` |
| `examples/h5/assets/samba-mystery-box/box_worldcup_locked.png` | 12061 | binary | `b68883e39a0a06d7094522b612ca58b763a59ad312372c9a82dcad7ce1876800` |
| `examples/h5/assets/samba-mystery-box/box_worldcup_opened.png` | 15593 | binary | `86159238df9043b01808aeaee16dac486231d1bbd4e635cc99726e752e464ccd` |
| `examples/h5/assets/samba-mystery-box/drum_football.png` | 660987 | binary | `08d69c066449c7996759a3eeaaca54caeb2df2fefd1d7f3508a3521088207fa8` |
| `examples/h5/assets/samba-mystery-box/drum_glow.png` | 22074 | binary | `645d60261c4fdf5fbf94c8b3a5c63b04c81d39258f44179a3e31ba177adec745` |
| `examples/h5/assets/samba-mystery-box/egg_easter.png` | 13269 | binary | `b10b762df909c28da27672c5f889ca908421832aeef1151d666746f9cae352b5` |
| `examples/h5/assets/samba-mystery-box/imagegen-source/drum_football_chroma.png` | 1239409 | binary | `6c76e128e036f361502820f95fc2eba13d4310087e497dbc3cfa126e644509b9` |
| `examples/h5/assets/samba-mystery-box/share-panel/imagegen-source/samba-mystery-guide-brazil-chroma.png` | 1230700 | binary | `02963438862e123e7547c721e89808e7fcffaa83dcdd3f07bd8f251c16518c8a` |
| `examples/h5/assets/samba-mystery-box/share-panel/samba-mystery-guide-brazil.png` | 83890 | binary | `d6757baa655d98555153a3c10ad56550259ebca73cd5b1045087aa2b6f8013ff` |
| `examples/h5/assets/samba-mystery-box/share-panel/samba-mystery-guide.png` | 5720 | binary | `1b87461aeac85d3d8495200407d189ef80616de2ad6ef311b67030938fc83ec3` |
| `examples/h5/assets/samba-mystery-box/title_samba_mystery.png` | 18759 | binary | `b48d2d286ed446929b1c9e5157bdb2011fa6235b513a47a388d3ed776addb291` |
| `examples/h5/assets/share-panel/brazil-samba-share-guide.svg` | 1423 | text | `e2bf0b21f95cab3a6cb014874cba277f544f05b66ff34e8173dc25e08b5cd617` |
| `examples/h5/assets/share-panel/channel-copy-link.png` | 5244 | binary | `918dd4584559721b2c3ff27fef387149d2f9b6dea88031533afc3d695981ef3a` |
| `examples/h5/assets/share-panel/channel-copy-link.svg` | 566 | text | `2f42aaa028f80cf09aa4b29be74fcf06d9f5198506de2982776064fd44e0deff` |
| `examples/h5/assets/share-panel/channel-facebook.png` | 3985 | binary | `4b64772a2aca392028a495f6f40ce025abc44823710b25eb9a18bb274a630979` |
| `examples/h5/assets/share-panel/channel-facebook.svg` | 278 | text | `662d366a6e6902ceb604b15564a6cd75d301a5d683433af1d06d9b9cec653dac` |
| `examples/h5/assets/share-panel/channel-instagram.png` | 19466 | binary | `870f96c131e3c8cee33d5a654a46b4ac2447780eb4a5ceb0b85f754c58f40b33` |
| `examples/h5/assets/share-panel/channel-instagram.svg` | 664 | text | `5de450de4111e0a1ab60dc3d968ae5e29a2a52b2ae0642786066dc461cc20b9f` |
| `examples/h5/assets/share-panel/channel-more.png` | 3788 | binary | `7f198a480f59f196197786f95debd1e57472ee1736c545c966e1619ae65ff91a` |
| `examples/h5/assets/share-panel/channel-more.svg` | 301 | text | `78174c34cb45744a296dd864a549549ff9dc1637188ac602a395182274ea961d` |
| `examples/h5/assets/share-panel/channel-snapchat.png` | 5122 | binary | `792b7d1f50963e0e9d2388bf2a768413ca56d36f1e920bf16b00343a5256d7b6` |
| `examples/h5/assets/share-panel/channel-snapchat.svg` | 413 | text | `454283072265fd482b5b1327625e277d9b611404f690a506b6ed929c7e4e29f3` |
| `examples/h5/assets/share-panel/channel-whatsapp.png` | 6470 | binary | `3d12cbf60731f6c1b8611c6ec0fd5be72d1e9ab0adce3a00dda157887703e07e` |
| `examples/h5/assets/share-panel/channel-whatsapp.svg` | 405 | text | `933c077307fbcd359068029228717e909009c0c2192d310b133812d0d75cba93` |
| `examples/h5/assets/share-panel/image-placeholder.png` | 413 | binary | `5e44783f2b2874265d1f7ef61a565345f67375cd0c2478802e9ffb54be2c9392` |
| `examples/h5/assets/share-panel/image-placeholder.svg` | 574 | text | `cd92900955a16c04061dc98a24c525bd918b85a2a4b4527152ec757f199cbe0e` |
| `examples/h5/assets/spin-wheel-brazil-body.svg` | 2338 | text | `2790536abaadc290c7f05f06ab41d8371e0b5d040e392671c5a30c3c730660e0` |
| `examples/h5/assets/spin-wheel-pointer.svg` | 1314 | text | `0646be0d33ca340f95709da505962eebe0e9ec3d426288c8c2c68a6797b1e451` |
| `examples/h5/assets/title-brazil-samba-football.svg` | 1540 | text | `2727fdc84665dc2dc5c7e2a13f21ad4e7eabda7c709cb80b4eb22127f17ed30c` |
| `examples/h5/brazil-samba-football-spin-wheel.html` | 28496 | text | `1b6142f906c93b63898d11662a03a3138dbd38c64f5b4d5d46dfdb73afcbd994` |
| `examples/h5/samba-mystery-box-page.html` | 37097 | text | `5734c0133e0e89fc5ba1ce0d41e035dc57ab553f9fe85e8f40231a7ab794bfc5` |
| `examples/h5/share-panel.css` | 5504 | text | `da96faa8861793e49ec037782d90a8cb4e496ee82db8940ede99dfd57ba23f79` |
| `examples/h5/share-panel.js` | 6327 | text | `b27027389a40e40b92851c7da8283cf19f87063cd3fe1ab639a28b32b51a0763` |
| `fixtures/brazil-new-user/01-campaign-request.json` | 707 | text | `bac1f6b2a899273150e195e84dfee1241eb8eacf83aaf394a9f18daf5253f984` |
| `fixtures/brazil-new-user/02-expected-strategy-brief.json` | 1516 | text | `8699d076f3a8cd8c58bc4964b99479a644c92cf84cc415ede9f8fb0de5664a12` |
| `fixtures/brazil-new-user/03-expected-page-build-spec.json` | 7904 | text | `70eb7d61be746a3e5a93a22c959e9f412fe4f6018aa5c2e904598d2ace63f9a5` |
| `fixtures/brazil-samba-football/03-page-build-spec.json` | 6038 | text | `40d2d96720def58429062c868c8c95516e3e5d42881bf8765182fee341942447` |
| `fixtures/samba-mystery-box/03-page-build-spec.json` | 4794 | text | `28a74b4a96275905ca0310572ef977b35b9b2acebdb85cd2c97d3451af4131d3` |
| `MANIFEST.md` | 24949 | text | `d47649ad9f1371022d177ff8547dae798f7e0c426f71159e767ca57f190c47a4` |
| `README.md` | 4470 | text | `b2a2632923718fe68a48b33b5b75c84bf0670cfd44892d492c221d365178bbcd` |
| `SKILL.md` | 2724 | text | `c446d3176d9a8407c8e1527bfdb924e3927b831ae4d12c9e079fd0b72888f158` |
| `skills/campaign-build-orchestrator/agents/openai.yaml` | 362 | text | `26ccff105eae661108eb77c2a8f3fefdcae27d9f47febcd578af4c6dc9a0d5a8` |
| `skills/campaign-build-orchestrator/SKILL.md` | 1829 | text | `fb2f36f31b060de07e47963f2022a29978f8bd2647018c8f20c4f914d23609db` |
| `skills/figma-main-flow-annotator/agents/openai.yaml` | 379 | text | `8cc640bc84275653d3a1568dbb95aa11255ca368b89947e78f6e0848e9db2a74` |
| `skills/figma-main-flow-annotator/SKILL.md` | 9092 | text | `1426a8e8ca6c98441dc9382c27be3aa8de10a93eb3b23605ee732645ba4ab7f1` |
| `skills/incentive-strategy-planner/agents/openai.yaml` | 301 | text | `61f9498a18427ddee0591e4bef83b5a161fe520992fc92ff97a279b6b3e3febd` |
| `skills/incentive-strategy-planner/references/fission-design-rules.md` | 5301 | text | `0505c3c70973567c6e664d04442874685fafb329c53221f504084809662e6996` |
| `skills/incentive-strategy-planner/SKILL.md` | 3964 | text | `206a6738e5a627126a84854609e0a4005f131c41b08e0d2775fa2d2376f9585d` |
| `skills/vibe-activity-page/agents/openai.yaml` | 358 | text | `86e89099ac9317f38cd67e43992a2676cee358c8f278ab3449bb85102b84c451` |
| `skills/vibe-activity-page/references/code-to-figma-restoration.md` | 4610 | text | `948a21119e66b5e08ee357a2af81b9ba2222639cd9227ab37e1d27697f1c693a` |
| `skills/vibe-activity-page/references/components.md` | 6088 | text | `107af67eb2ff984805ba3c5a1579d548d14f0a0fb5d28966fdcb28aa89bec00f` |
| `skills/vibe-activity-page/references/conversion-patterns.md` | 1122 | text | `b7be1377c447615d7cdd0eb47e7545694e1e1dc268ce8a4619e45930cdffeb4e` |
| `skills/vibe-activity-page/references/figma-interaction-flow-extension.md` | 7777 | text | `a4bded91d39a64adaa51beb8619c1dd2eacbf3db0cd2da1a7018340c6f15040b` |
| `skills/vibe-activity-page/references/page-structures/index.md` | 6270 | text | `f8e6415964b3d5269eb0f1cdb715513f7c770887525bf2bd1d323e2a98d0f862` |
| `skills/vibe-activity-page/references/page-structures/nurture-progress-conversion-page.md` | 13933 | text | `639f5480bb261ca4eb42680e31bd821c86f09bdcee6de3cc754201786d78da16` |
| `skills/vibe-activity-page/references/page-structures/progress-accumulation-conversion-page.md` | 12911 | text | `74dce19a04e83ab660eeb13b49ea078adbb7ef327e41e0c596e968c761f40459` |
| `skills/vibe-activity-page/references/page-structures/single-gameplay-conversion-page.md` | 22338 | text | `8e169d1deb9849f15abe8094925f1bcc2bde9d404d58594813d5c06a091b861d` |
| `skills/vibe-activity-page/references/qa-checklist.md` | 4850 | text | `ab46cd95e2f9101d2729413e9c4443dfc05f4432d9f17671c990851820113a72` |
| `skills/vibe-activity-page/references/responsive.md` | 1565 | text | `af928015b6d5305897282d069f496ac9f22a8633611ab0813d89465036105a1f` |
| `skills/vibe-activity-page/references/spacing.md` | 2128 | text | `1d809917f96eab259c326e83a1a4e30a6698298369be44f58681c918dd86d10d` |
| `skills/vibe-activity-page/references/tux-noncolor-visual-rules.md` | 3973 | text | `83e9dda9db50c221cb60a474e6551e70cb629c9f47d341f4badc7f36949fc957` |
| `skills/vibe-activity-page/references/typography.md` | 2024 | text | `5e4babeff5c8292ec11725e734e14946bcfa956f3bc7156b3b5d2be2a828300f` |
| `skills/vibe-activity-page/references/visual-styles/dreamy-cloud-campaign.md` | 1947 | text | `64d3637813b432af63638709a1949dcb13b2afd705c0415e0ef4dea13700393d` |
| `skills/vibe-activity-page/references/visual-styles/index.md` | 1922 | text | `b2728a350dd856d62f8661b8c4764e44dbe59203eb11a69c5250ed17e4f5b47d` |
| `skills/vibe-activity-page/references/visual-styles/retro-journal.md` | 1749 | text | `a8bfa11e6e5cca588e6f0963da902f1df1e62109faa3900f1ddc213b191450e8` |
| `skills/vibe-activity-page/references/visual-styles/soft-colorful-card.md` | 1788 | text | `effe0ba42b9820a49579d63a6e905d742d9ab3f6d606904ae7f294d5ed03e46a` |
| `skills/vibe-activity-page/SKILL.md` | 15236 | text | `56034697cc085891c0498189773bc515e0bc6c02375a74808f819c9d8fb98f32` |
| `skills/vibe-activity-page/templates/CashbackPage.tsx` | 4468 | text | `2e3ec3ad3452cf950f32348e799fa0c215643f07a3f0edf6c47fa9b7f7bad45e` |
| `skills/vibe-activity-page/templates/InviteLotteryPage.tsx` | 6068 | text | `a0528b1a4641c2ba8ca725c4941b7db1a258d5333029165b3a8ff8157ebf8289` |
| `skills/vibe-activity-page/templates/NurtureProgressPage.tsx` | 7838 | text | `ee54a375d355d6a84a6e6327df03a26eff33489f9d1bd7726bd9c62f08d27ec8` |
| `skills/vibe-activity-page/templates/SingleGameplayConversionPage.tsx` | 12075 | text | `8f06f63f90e338fd410f86419fc1b057182ba7b730f0e747f59b66c07096cee8` |
| `skills/vibe-activity-page/templates/TaskRewardPage.tsx` | 5156 | text | `c976c2127768bf7b09e98ca9b943132fff4dac68a40ab54334d8ef1006bb562c` |

```

### README.md

```markdown
# Incentive Design Agent Skill

这是一个可分发的 Agent Skill 包，用于规划和搭建移动端激励营销活动 H5 页面。

它适用于 Codex、Claude Code、Cursor、Windsurf、Cline，以及任何能够读取本地文件的自研 Agent。这个包尽量保留作者原有的项目组织方式，只额外补充跨 Agent 可识别的入口文件和使用说明。

## 这个 Skill 能做什么

可以用它来完成：

- 将一句活动需求转成结构化 CampaignRequest
- 产出激励策略 StrategyBrief
- 选择合适的页面框架
- 选择已确认的视觉风格
- 复用严格组件规范
- 搭建组件化 H5 活动页
- 按内置 QA 清单检查页面

默认产物是移动端 H5 页面。只有当用户明确要求，或者目标项目已有固定技术栈时，才使用 React、Vue、Tailwind 或其它方案。

## 当前工作流

```txt
用户一句话需求
↓
campaign-build-orchestrator
↓
incentive-strategy-planner
↓
vibe-activity-page
↓
最终 H5 页面
```

## Agent 快速使用方式

任何 Agent 在开始前，先读取：

```txt
SKILL.md
AGENTS.md
skills/vibe-activity-page/SKILL.md
component-library/README.md
```

如果用户只给了一句业务需求，还需要读取：

```txt
docs/campaign-skill-suite-protocol.md
skills/campaign-build-orchestrator/SKILL.md
skills/incentive-strategy-planner/SKILL.md
```

## 不同 Agent 的入口

### Codex

Codex 优先读取：

```txt
AGENTS.md
SKILL.md
skills/vibe-activity-page/SKILL.md
```

### Claude Code

Claude Code 优先读取：

```txt
CLAUDE.md
SKILL.md
AGENTS.md
```

### Cursor

Cursor 使用：

```txt
.cursorrules
README.md
SKILL.md
```

### Windsurf

Windsurf 使用：

```txt
.windsurfrules
README.md
SKILL.md
```

### Cline

Cline 使用：

```txt
.clinerules
README.md
SKILL.md
```

### 自研 Agent

自研 Agent 建议先索引：

```txt
agent-skill.json
```

然后按照其中的 `entrypoints` 字段读取对应文件。

## 包目录结构

```txt
incentive-design-agent-skill/
├── SKILL.md
├── AGENTS.md
├── README.md
├── CLAUDE.md
├── agent-skill.json
├── .cursorrules
├── .windsurfrules
├── .clinerules
├── component-library/
├── contracts/
├── docs/
├── examples/
├── fixtures/
└── skills/
```

## 主要目录说明

### `skills/`

存放各个 Skill 的说明和工作流知识。

当前包含：

- `campaign-build-orchestrator`：将一句活动需求转成结构化请求，并串联当前流程
- `incentive-strategy-planner`：产出 `StrategyBrief`
- `vibe-activity-page`：选择页面框架、视觉风格和组件，并搭建最终 H5 页面
- `figma-main-flow-annotator`：可选的 Figma 主链路标注辅助 Skill

### `component-library/`

严格组件规范的唯一事实源。

开发任何页面模块前，Agent 必须先检查：

```txt
component-library/components/
```

具体组件规范在：

```txt
component-library/components/{component}/component.md
```

### `contracts/`

跨 Skill 交付物的 JSON Schema：

- `campaign-request.schema.json`
- `strategy-brief.schema.json`
- `page-build-spec.schema.json`

### `docs/`

存放工作流协议和集成说明。

### `fixtures/`

存放少量合同结构和流程验证样例。

### `examples/`

只保留精选参考案例。不要把新的活动案例默认写到这里，除非用户明确要求更新参考案例。

## 新案例输出规则

新的可运行活动案例必须放在 Skill 包外部：

```txt
/Users/bytedance/Documents/Incentive Page Cases/{case-name}/
```

这个包是可复用的 Skill 能力库，不是默认案例输出目录。

## 页面搭建规则

- 默认使用 H5
- 业务数据必须放在页面级 config 中
- 创建自定义 UI 前，必须先查 `component-library/components/`
- 页面结构从 `skills/vibe-activity-page/references/page-structures/index.md` 中选择
- 视觉风格从 `skills/vibe-activity-page/references/visual-styles/index.md` 中选择
- 只能使用 `ready` 状态的视觉风格
- 不允许 AI 自己幻想新的视觉风格
- 非图标类视觉素材默认使用 PNG
- SVG 只用于图标或小型 UI glyph
- 最终交付前按 QA checklist 检查页面

## 如何压缩分享

这个文件夹可以直接分享。也可以压缩成 zip：

```bash
cd /Users/bytedance/Documents/Incentive\ Pages\ Vibe\ Coding\ Skill/dist
zip -r incentive-design-agent-skill.zip incentive-design-agent-skill
```

```

### SKILL.md

```markdown
---
name: incentive-design-agent-skill
description: Use this skill package to plan and build mobile-first incentive campaign H5 pages, including campaign request routing, incentive strategy planning, page framework selection, strict component reuse, visual style selection, implementation guidance, and QA checklist validation. It is designed for Codex, Claude Code, Cursor, Windsurf, Cline, and other file-reading coding agents.
---

# Incentive Design Agent Skill

## Goal

Build mobile-first incentive marketing activity pages from reusable strategy, page-structure, visual-style, component, contract, and QA knowledge.

This package is a portable Agent Skill bundle. It preserves the author's original project structure so agents can progressively read only the files needed for the current task.

## Start Here

For any activity-page task, read these files first:

1. `AGENTS.md`
2. `skills/vibe-activity-page/SKILL.md`
3. `component-library/README.md`

For one-line business requests, read these files first:

1. `docs/campaign-skill-suite-protocol.md`
2. `skills/campaign-build-orchestrator/SKILL.md`
3. `skills/incentive-strategy-planner/SKILL.md`
4. `skills/vibe-activity-page/SKILL.md`

## Active Workflow

```txt
User request
↓
campaign-build-orchestrator
↓
incentive-strategy-planner
↓
vibe-activity-page
↓
Final H5 page
```

## Default Rules

- Default output is H5 unless the user explicitly asks for another stack.
- New runnable campaign cases must be created outside this skill package under `/Users/bytedance/Documents/Incentive Page Cases/{case-name}/`, unless the user explicitly asks to update the curated examples.
- Before building any module, search `component-library/components/`.
- Strict components are owned by `component-library/components/{component}/component.md`.
- Page structures are selected from `skills/vibe-activity-page/references/page-structures/index.md`.
- Visual styles are selected from `skills/vibe-activity-page/references/visual-styles/index.md`.
- Do not invent visual styles. Only use `ready` visual styles or user-provided style rules.
- Business data must live in page-level config, not inside presentational components.
- Generated non-icon visual assets should be PNG by default.

## Key Paths

```txt
AGENTS.md
agent-skill.json
component-library/
contracts/
docs/
examples/
fixtures/
skills/
```

## Agent Compatibility

- Codex: reads `AGENTS.md` and named `SKILL.md` files.
- Claude Code: read this `SKILL.md`, `README.md`, and relevant skill files.
- Cursor / Windsurf / Cline: read `README.md`, this `SKILL.md`, and `agent-skill.json`; then follow the referenced files.
- Custom agents: index `agent-skill.json`, then read files listed under `entrypoints`.

```

### skills/campaign-build-orchestrator/agents/openai.yaml

```yaml
interface:
  display_name: "Campaign Build Orchestrator"
  short_description: "Coordinate strategy and page-building skills"
  brand_color: "#2563EB"
  default_prompt: "Use $campaign-build-orchestrator to turn this campaign idea into a CampaignRequest, route it through strategy planning, and hand it to page building."
policy:
  allow_implicit_invocation: true

```

### skills/campaign-build-orchestrator/SKILL.md

```markdown
---
name: campaign-build-orchestrator
description: Use this skill to plan and coordinate the campaign page workflow from a one-sentence business request through strategy and page build. It reads shared contracts and fixtures, routes work to the right downstream skill, blocks on missing inputs, and returns a concise execution plan or final delivery summary.
---

# Campaign Build Orchestrator

## Goal

Turn a user request into a controlled multi-skill workflow without taking over the specialist responsibilities of strategy or page construction.

## Required References

Before planning or routing, read:
- `../../docs/campaign-skill-suite-protocol.md`
- the relevant schema files in `../../contracts/`

Use `../../fixtures/` when validating the workflow shape.

## Contract Compatibility

Consumes:
- raw user request

Produces:
- CampaignRequest v1.x
- execution plan
- final delivery summary or blocker

## Workflow

1. Convert the user's raw request into `CampaignRequest`.
2. If region, audience, or business goal is missing and cannot be reasonably inferred, set `status` to `blocked` and ask for the missing input.
3. Route `CampaignRequest` to `incentive-strategy-planner`.
4. Continue only when upstream artifact `status` is `ready`.
5. Route `StrategyBrief` to `vibe-activity-page`.
6. When `PageBuildSpec` and page code are ready, summarize the final deliverables.

## Hard Rules

- Do not write campaign strategy.
- Do not write page code.
- Do not read another skill's internal `references/` or `templates/` unless the user explicitly asks for a manual investigation.
- Shared `contracts/` override skill-local assumptions.

## Block Conditions

Return a blocked artifact when:
- the next skill cannot run because a required field is missing;
- upstream `status` is `blocked`;
- schema versions are incompatible.

```

### skills/figma-main-flow-annotator/agents/openai.yaml

```yaml
interface:
  display_name: "Figma Main Flow"
  short_description: "Create screenshot-based Figma main-flow annotations."
  default_prompt: "Use $figma-main-flow-annotator to capture the key browser-rendered states of an activity page and place them in Figma as a main interaction flow with page names, arrows, and user-behavior notes."

policy:
  allow_implicit_invocation: true

```

### skills/figma-main-flow-annotator/SKILL.md

```markdown
---
name: figma-main-flow-annotator
description: Create a Figma main interaction-flow annotation page for a completed web/H5 activity page by identifying the core gameplay journey, capturing each key state from the real browser-rendered page, placing screenshots in Figma, and connecting them with page names, arrows, and short user-behavior notes. Use when the user asks to expand, annotate, document, or visualize the primary interaction chain for marketing activity pages in Figma.
---

# Figma Main Flow Annotator

## Purpose

Create a Figma page that explains the primary interaction chain of an already implemented activity page.

This skill is screenshot-driven: the visual state in Figma should come from the actual browser-rendered page, not from redesigning, rebuilding, or manually composing component frames. The Figma output is a readable flow: page-state screenshots in order, connected by arrows and short user-behavior labels.

## Inputs

- A completed web/H5 activity page, local file, current browser page, or project path.
- The target Figma file or page where the flow should be added.
- The activity mechanics, either from the user's brief or from the implemented page code.

If the user provides a simplified chain, use that chain exactly as the primary route unless an implementation blocker makes a state impossible to capture.

## Core Output

Create or update one Figma page containing:

- One screenshot frame per core state.
- A visible page-state name above each screenshot.
- A blue arrow between adjacent states.
- A short trigger label near each arrow.
- One compact user-behavior note per state.

Do not add:

- Global annotation rule blocks.
- Component inventories.
- Implementation-source notes.
- Redesigns or substitute mockups.
- Navigation-bar branches unless the user explicitly asks.

## Workflow

### 1. Derive The Main Chain

Read the page code, visible UI, and activity rules. Identify only the primary conversion journey.

For each step, define:

- `stateName`: short page/state title.
- `userBehavior`: one short sentence describing what the user does or experiences.
- `triggerToNext`: the action or event that moves to the next state.
- `captureInstruction`: what must be visible before taking the screenshot.

Default chains:

- Blind-box / mystery-box invite page:
  `Enter activity page -> Share panel -> Box unlock -> Reward dialog -> Withdraw`
- Spin-wheel invite page:
  `Enter activity page -> Share panel or invite action -> Spin chance unlocked -> Spin result -> Withdraw`
- Scratch-card invite page:
  `Enter activity page -> Share panel or invite action -> Card unlocked -> Reward dialog -> Withdraw`

Keep the chain short. Prefer 4-6 states. Secondary branches are out of scope unless requested.

### 2. Capture Real Browser States

Use real browser-rendered screenshots as the visual source of truth.

Preferred screenshot method for local H5 pages:

1. Open the local HTML page in Chrome.
2. If the page must match a Figma canvas, set Chrome DevTools device mode to the target viewport, usually `390 x 844`.
3. Open DevTools with `Command + Option + I`.
4. Open the DevTools command menu with `Command + Shift + P`.
5. Run `Capture full size screenshot`.
6. Chrome saves the PNG to `Downloads`.
7. Move or copy the PNG into the project screenshot folder, usually `tmp/figma-flow-screenshots/`.

Why this method is preferred:

- It works for `file://` local HTML pages.
- It captures Chrome's real rendering output.
- It does not depend on macOS screen-recording permission.
- It does not require headless Chrome, Playwright browsers, or a local HTTP server.

For every screenshot:

- Verify width and height before import.
- For canonical H5 pages, accept `390 x 844` or a clean retina multiple such as `780 x 1688`.
- If a screenshot is a retina multiple, place it in Figma at the logical canvas size, e.g. display `780 x 1688` as `390 x 844`.
- Do not use blurred half-size screenshots such as `195 x 422` for a `390 x 844` canvas.
- Keep filenames ordered and descriptive, such as:
  - `01-enter-activity.png`
  - `02-share-panel.png`
  - `03-box-unlock.png`
  - `04-reward-dialog.png`
  - `05-withdraw.png`

If an automated browser route is available and allowed, it may be used, but do not fight environment restrictions. When automation cannot reliably capture the original canvas size, fall back to the Chrome DevTools command workflow above.

### 3. Prepare Figma Import

Before writing to Figma, load and follow `figma-use`.

Use one of these import paths:

- Prefer Figma upload assets when `mcp.figma.com` is reachable.
- If upload URLs are blocked, use local byte import with `figma.createImage(new Uint8Array(...))`.
- For large images, slice them before local byte import.

Image import rules:

- Do not import a full long page as one huge image if it exceeds Figma or script limits.
- Slice images larger than `2048 x 2048`.
- Keep each slice at or below `2048 x 2048`.
- Prefer slices under 1MB when using local byte import.
- If a slice fails, skip it, record the filename, and continue importing the other slices.

### 4. Create The Figma Flow Page

Create a dedicated Figma page named clearly, for example:

`Main Flow / {Activity Name}`

On that page:

- Place states in one horizontal row.
- Keep screenshot tops aligned.
- Use `200px` horizontal spacing between adjacent screenshot frames.
- Use the logical page size for frames, e.g. `390 x 844`.
- If using sliced images, create one parent frame per state and place slice rectangles at their manifest `x/y` positions.
- If using one screenshot image, create one rectangle or frame image fill per state.

Do not convert imported screenshots or state frames into Figma components. They are documentation artifacts and should remain easy to move, crop, replace, and annotate.

### 5. Add Page Names

Add a visible state name above every screenshot.

Rules:

- Text size: `40px`.
- Weight: bold.
- Color: readable dark neutral, unless the Figma context already has a standard label style.
- Keep exactly `20px` vertical gap between the label bottom and screenshot top.
- Keep names short:
  - `01 Enter Activity`
  - `02 Share Panel`
  - `03 Box Unlock`
  - `04 Reward Dialog`
  - `05 Withdraw`

### 6. Add Arrows

Draw one arrow between each adjacent state.

Rules:

- Use one vector path per route.
- Do not build arrows from separate line and triangle nodes.
- Arrow color: `#3867FF`.
- Arrow starts at the right side of the source screenshot and ends at the left side of the destination screenshot.
- Default y-position is the vertical center of the screenshots.
- If the route is clearly triggered by a specific CTA, align the arrow start near that control's vertical center when practical.
- Lines should be horizontal or orthogonal.
- Only the endpoint has an arrowhead.

### 7. Add Trigger Labels

Add one short label near each arrow.

Rules:

- Color: `#3867FF`.
- Place above the arrow and close to the source state.
- Keep max width around `120px`; allow wrapping.
- Describe the trigger, not the implementation:
  - `Invite friends`
  - `Friend joins`
  - `Tap glowing box`
  - `Reward confirmed`
  - `Tap Withdraw`

### 8. Add User-Behavior Notes

Add one compact note per state.

Rules:

- Describe only what the user does or experiences in that state.
- One short sentence is enough.
- Keep notes near the screenshot but do not cover key UI, CTA, overlay content, reward values, or share channels.
- Do not write words such as `restore`, `component source`, `code-render`, `Figma source`, `global rules`, or file paths in visible Figma notes.

Examples:

- `The user lands on the activity page and sees the current reward balance.`
- `The user chooses a share channel from the bottom sheet.`
- `A qualified invite unlocks the next mystery box.`
- `The reward dialog confirms the earned amount.`
- `The user can withdraw once the cash threshold is reached.`

### 9. Validate Against The Current Page

Before handoff:

- Check every screenshot file dimension.
- Check every Figma state uses the intended image.
- Confirm retina screenshots are displayed at logical canvas size.
- Confirm all state names, arrow labels, and notes are visible and not overlapping important UI.
- Confirm the flow order matches the main chain.
- Confirm no global rules block or component inventory was added.
- Confirm no state was redesigned by hand.

If a mismatch remains, report it explicitly and say which screenshot/state needs to be regenerated.

## Figma Writing Notes

When using `use_figma`:

- Load `figma-use` first.
- Use `await figma.setCurrentPageAsync(page)` for the target page.
- Return created and mutated node IDs.
- Work incrementally: create page and frames first, then import images, then add labels/arrows/notes, then validate.
- If a Figma write fails, stop, inspect the error, and adjust the script. Do not repeatedly retry the same failing script.

## Final Response

Report:

- The Figma page name.
- The states included.
- The screenshot source folder.
- Whether image dimensions were checked.
- Any failed imports or known mismatches.

```

### skills/incentive-strategy-planner/agents/openai.yaml

```yaml
interface:
  display_name: "Incentive Strategy Planner"
  short_description: "Plan fission and incentive page strategy"
  brand_color: "#16A34A"
  default_prompt: "Use $incentive-strategy-planner to analyze this campaign request and produce a StrategyBrief."
policy:
  allow_implicit_invocation: true

```

### skills/incentive-strategy-planner/references/fission-design-rules.md

```markdown
# Fission Design Rules for StrategyBrief

Use these rules when the campaign request involves fission, referral, invite, group buying, bargaining, red packet invite, QR invite, spin wheel, push coin, storage pig, master-apprentice, or similar growth mechanics.

This reference is adapted from `fission-design/SKILL.md`, but the output must remain this project's `StrategyBrief` contract. Do not output `fission_design` YAML.

## Design Constitution

Reject or block when any constitution rule is clearly violated:

1. Value immediacy
   - The first screen should show reward, progress, or expected value within 3 seconds.
   - Do not start with long rules.
   - The conversion layer should create a first reward or first progress feeling quickly.

2. Low cognitive load
   - Main conversion steps should be 3 or fewer.
   - One page should have one primary task.
   - Rules should not overpower reward and progress.

3. Emotional incentive
   - Prefer a local IP, mascot, role, or character anchor when the market and campaign type benefit from emotional retention.
   - Long-cycle retention pages should avoid pure score or points lists.

## Q1 Alignment

Try to identify:
- region or country
- product or app surface if provided
- campaign goal
- ROI or cost constraint if provided
- channel or scene anchor if provided
- share motivation if provided: `cash_driven`, `emotion_driven`, `status_driven`
- conversion step count if provided
- IP or character anchor if provided

If missing information prevents choosing `page_structure.type`, put the blocker in `open_questions`.

## Conflict Diagnosis

Check these conflicts and compress only relevant findings into `notes`:

- Volume vs quality: DNU plus retention needs some quality gate or post-conversion task.
- Cash vs ROI: high cash incentive with strict ROI should use points, lottery, staged rewards, or gates.
- Chain length vs conversion: long task chains hurt referral conversion.
- Existing user fatigue: repeated invite campaigns need a refreshed incentive pattern.
- Channel risk: WhatsApp, LINE, KakaoTalk, or QR flows may need risk controls and lower-pressure sharing.

## Gameplay Pattern Library

Use the library to inform `page_structure.type` and `page_structure.contents`; do not output detailed gameplay YAML.

High DNU / ROI guarded:
- `storage_pig`: JP Pro, whitebox cumulative progress, proven DNU lift signal.
- `scan_code`: JP/KR Pro, mutual instant invite, useful for offline or QR scenes.
- `push_coin`: JP/KR, blackbox probabilistic progress, strong game feel.
- `wheel`: broad market, simple low-barrier blackbox.
- `red_packet_rain`: BR/ID/MX, event burst, fatigue risk.
- `pinball`: JP, companion-like retention feel.

Social fission:
- `bargain`: BR/ID/DOM, strong mutual progress, may feel high-pressure.
- `group_buy`: DOM/ID, stepped mutual threshold.
- `master_apprentice`: DOM/BR, old user brings new user with longer tail.
- `team_pk`: KR, status and competition.

Retention / nurture:
- `nurture`: JP/DOM, role bonding and D7-D30 retention.
- `treasure_hunt`: BR/DOM, long-cycle blackbox.
- `savings_jar`: JP, visible cumulative progress.
- `monopoly`: DOM, complex IP-friendly journey.
- `dice_roll`: DOM, lightweight retention loop.

Competition:
- `leaderboard`: KR, status-driven.
- `team_pk`: KR, mutual status competition.

Light task:
- `quiz`: broad market, simple task hook.

## Market Heuristics

- JP: local detail, ritual, companion, storage pig, push coin, nurture, wheel. Prefer points.
- KR: PK, leaderboard, status, team PK, wheel. Prefer points.
- BR: direct benefit plus game feel, bargain, red packet rain, treasure hunt. Prefer points.
- US: referral, coupon, scan code, quiz. Local fiat can be allowed if business rules permit.
- EU: transparent, goodwill, quiz,公益/nurture style. Local fiat can be allowed if business rules permit.
- ID: benefit plus social pressure, bargain, group buy, red packet rain. Prefer points.
- MX: benefit plus festival energy, red packet rain, scan code. Prefer points.
- DOM: accepts more complex mechanics, master-apprentice, monopoly, nurture, bargain.

## Combination Lint

If detected, put the issue into `notes` or `open_questions` depending on severity:

- `blackbox + instant`: warn, surprise may not develop.
- `whitebox + probabilistic`: warn, users may feel the probability weakens a known reward.
- `mutual + blackbox`: info, sharer may hesitate because friend reward is unknown.
- multiple modes in the same layer: high, decision path becomes unclear.
- local fiat outside US/EU: high, should be rejected or changed to points.

## Mapping to StrategyBrief

Always output the project StrategyBrief schema:

- `target_user`: audience profile.
- `region`: market.
- `campaign_goal`: primary objective.
- `page_structure.type`: selected page structure.
- `page_structure.contents`: content blocks needed by the page builder.
- `notes`: compressed strategy rationale, conflicts, market heuristics, gameplay suggestions, and lint warnings.
- `assumptions`: assumptions required for the recommendation to hold.
- `open_questions`: only questions blocking page structure selection or major page content.

Do not include:
- `fission_design`
- Q1/Q2/Q3/Q4/Q5 YAML blocks
- detailed gates
- visual specs
- component specs
- code or wireframe instructions

```

### skills/incentive-strategy-planner/SKILL.md

```markdown
---
name: incentive-strategy-planner
description: Use this skill to turn a campaign request into a StrategyBrief for downstream page generation. It identifies target user, region, campaign goal, and page structure, and for fission/referral campaigns applies TT fission design rules while still outputting the project's minimal StrategyBrief contract. It does not write UI code, choose visual style, or generate assets.
---

# Incentive Strategy Planner

## Goal

Produce a `StrategyBrief` that gives the page builder the essential upstream decision:
structured target user, region, campaign goal, and page structure.

For fission/referral/invite campaigns, use the fission design rules to decide the strategy, then compress the result into the current `StrategyBrief` schema.

## Required References

Before producing an artifact, read:
- `../../contracts/campaign-request.schema.json`
- `../../contracts/strategy-brief.schema.json`

When the request involves fission, referral, invite, group buying, bargaining, scan code, red packet invite, storage pig, spin wheel, push coin, master-apprentice, or similar growth mechanics, also read:
- `references/fission-design-rules.md`

Use `../../fixtures/` for local self-test examples.

## Contract Compatibility

Consumes:
- CampaignRequest v1.x
- optional historical campaign data
- optional business metrics

Produces:
- StrategyBrief v1.x

## Workflow

1. Read the `CampaignRequest`.
2. Identify `target_user`, `region`, and `campaign_goal`.
   - `target_user.segment` can be inferred from the request when clear.
   - Leave `age`, `gender`, `identity`, and `traits` empty when the user did not provide them.
3. If the request is a fission/referral campaign, apply `references/fission-design-rules.md`:
   - run design constitution checks;
   - align market, goal, channel, motivation, conversion steps, and IP anchor when provided;
   - diagnose conflicts;
   - use gameplay and market heuristics to inform page structure.
4. Choose one `page_structure.type`, then list the content blocks that should appear on the page.
5. Put compressed rationale, conflict notes, gameplay suggestions, or lint warnings into `notes`.
6. Put required but unconfirmed premises into `assumptions`.
7. Put only blocking questions into `open_questions`.
8. Output a `StrategyBrief` with `status: "ready"` if the required decisions are known.
9. Output `status: "blocked"` when a constitution violation or missing input prevents page structure selection.

## Decision Rules

- New-user acquisition usually prefers `single-gameplay-conversion-page`.
- If the user asks for fast conversion, prefer `single-gameplay-conversion-page`.
- If the campaign needs multiple daily tasks, prefer a task reward framework.
- If the campaign goal is cashout motivation, emphasize progress-to-threshold mechanics.
- For fission/referral campaigns, value should be visible within the first 3 seconds, conversion steps should be 3 or fewer, and the page should have one primary task.
- For JP, prefer ritual, detail, companion, storage pig, push coin, nurture, or wheel patterns.
- For KR, prefer PK, leaderboard, status, team PK, or wheel patterns.
- For BR, prefer direct benefit plus game feel, bargain, red packet rain, or treasure hunt patterns.
- For US/EU, local fiat may be allowed if business rules permit; for other markets prefer points or non-cash reward framing.

## Hard Rules

- Do not write page code.
- Do not generate visual assets.
- Do not modify strict component rules.
- Do not output reward models, CTA plans, or visual requirements unless the shared contract is intentionally expanded.
- Do not output `fission_design` YAML; always output the project `StrategyBrief` contract.
- Do not include interaction wireframes, component specs, gates, visual specs, or implementation details.
- Do not invent demographic details that the user did not provide.
- Do not depend on another skill's internal files.
- Keep assumptions explicit.

```

### skills/vibe-activity-page/agents/openai.yaml

```yaml
interface:
  display_name: "Vibe Activity Page"
  short_description: "Build reusable mobile campaign H5 journeys"
  brand_color: "#FE2C55"
  default_prompt: "Use $vibe-activity-page to select a page framework, reuse component-library contracts, choose an approved visual style, and build a mobile H5 campaign page."
policy:
  allow_implicit_invocation: true

```

### skills/vibe-activity-page/references/code-to-figma-restoration.md

```markdown
# Code To Figma Restoration

Use this workflow when restoring an implemented activity page into a Figma design draft.

## Core Principle

Do not redraw the whole page from code first.

Start from the page structure and use every available Figma component source as the structural source of truth. Preserve the source format: if the source is a `FRAME`, copy the frame directly into the concrete page; if the source is already a component or instance and supports the required overrides, use an instance. Fill only the missing gaps from the implemented webpage.

## Workflow

1. Return to the page structure.
   - Identify the actual modules in order, such as navigation, title, countdown, withdrawal card, gameplay, action buttons, share panel, rules, or contribution module.
   - Record the implemented page canvas and key coordinates before editing Figma.
   - For fixed H5 pages, keep the same canvas size as the implementation, usually `390 x 844`.

2. Map modules to existing Figma components.
   - Search the target Figma file for matching component specs before drawing anything.
   - Known reusable component families may include navigation, withdrawal card, button group, share panel, and contribution module.
   - Treat the Figma component as a framework/spec, not as finished campaign artwork.

3. Build the Figma page from component sources.
   - Create or locate the component source, then preserve its original format in the page.
   - If the source is a `FRAME`, copy that frame directly into the page and modify the copied frame only within allowed override scope: text, colors, visibility, state, and image fills.
   - If the source is already a component or instance and supports the required overrides, place a true instance and modify it only within allowed override scope.
   - Respect nested locked components inside an instance. For example, `粒子特效` must keep its original component color, opacity, dimensions, and internal styling; reset accidental overrides instead of adapting it to the campaign.
   - Do not convert source `FRAME` nodes into new Figma components, component sets, instances, or wrapper components just to componentize the page.
   - Do not detach instances unless the user explicitly asks or the component cannot support the required content.

4. Fill missing content from the implemented webpage.
   - If no Figma component exists for a module, use the implementation as the source of truth.
   - For image-based gameplay such as a spin wheel, place the same PNG production assets from code. Do not restore non-icon image assets from SVG or WebP unless the user explicitly overrides the repository asset-format rule.
   - For spin-wheel gameplay that uses two code assets, place both: the rotating wheel body and the fixed pointer, aligned to the implemented coordinates.
   - Use recreated vector/text layers only when the code asset is unavailable or the user asks for editable Figma layers.

5. Match instance overrides to the webpage.
   - Compare component-source frame or instance colors, text color, button states, progress colors, shadows, borders, and image fills against the live page.
   - Preserve component geometry unless the implemented page clearly uses a different allowed variant or size.
   - Keep text centered inside button containers after localization or copy changes.

6. Validate against the webpage.
   - Capture or inspect the live webpage at the same viewport.
   - Screenshot the Figma frame and compare module by module.
   - Check at minimum: canvas size, module order, component instance usage, coordinates, text, colors, gameplay assets, z-order, and no clipped or overlapping text.
   - If a visual mismatch comes from component state or overrides, fix the instance. If it comes from a missing component, fix the code-derived asset or layer.

## Required Checks

- Components that exist in the Figma file are reused in their original source format: source `FRAME` nodes are copied directly, and true instances are used only when the library source is already componentized and supports the code-matching overrides.
- Non-component modules are sourced from the implemented page, not invented from scratch.
- Gameplay image assets match the code assets and are aligned to the code layout.
- PNG is required when restoring assets with text, masks, filters, browser-specific rendering, backgrounds, title art, gameplay objects, stickers, and decorative anchors. SVG is allowed for icons only; WebP is not allowed unless explicitly requested by the user.
- The final Figma frame visually matches the live webpage before delivery.

```

### skills/vibe-activity-page/references/components.md

```markdown
# Component Usage Index

This file is not the component source of truth.

Strict reusable component contracts, Figma links, locked dimensions, runtime code, and component assets live in:

```txt
../../component-library/components/
```

Use this file only to decide which catalog component to use, and to define page-specific open modules that are not yet catalog components.

## Ownership Rule

- `component-library/components/*/component.md` owns reusable component contracts.
- `component-library/components/*/*.js` and `*.css` own reusable H5 component code.
- `skills/vibe-activity-page/references/*` owns page framework rules, conversion logic, responsive rules, and open-zone guidance.
- `skills/vibe-activity-page/components/` is deprecated and must not contain implementations.

Do not copy detailed component dimensions from the component library into this file. When a component changes, update only its own `component.md` and reusable code.

## Mandatory Component Mapping

Before building any page section, map it to this catalog first:

| Page need | Use component |
| --- | --- |
| App shell navigation, status bar, back/music/help/share/more actions | `component-library/components/top-navigation/` |
| Balance, asset, reward progress, cashout threshold | `component-library/components/asset-card/` |
| Decorative campaign title art | `component-library/components/primary-title/` |
| Bottom one/two/three action CTA area | `component-library/components/bottom-action-triple/` or closest button component |
| Daily task list with simple/progress/invite rows | `component-library/components/task-list/` |
| Invite, QR, copy link, share channel surface | `component-library/components/share-panel/` |
| Reward result, claim result, lottery result | `component-library/components/dialog/` |
| Lightweight operation feedback | `component-library/components/toast/` |
| Contribution / friend assist module | `component-library/components/contribution-module/` |

If a matching component exists, page code must use the catalog implementation or the Figma source described in that component contract.

## Component-First Workflow

1. Read the selected page framework.
2. List every visible module in the page.
3. Search `../../component-library/components/` for each module.
4. Reuse the catalog component when there is a match.
5. Pass business data through the page config object.
6. Create a page-specific module only when no catalog component exists.
7. Record uncovered gaps in `PageBuildSpec.component_gaps`.

## Custom Open Modules

The following modules are usually page-specific and may remain inside the page implementation unless they become reusable enough to promote into `component-library`.

### BackgroundScene

Owns decorative atmosphere behind strict UI components and gameplay assets.

Rules:
- Scenic backgrounds should use one generated or designer-provided full-screen PNG image asset by default.
- Do not assemble scenic backgrounds from many disconnected HTML/CSS fragments.
- Avoid partial objects at page edges that abruptly disappear. If an object touches an edge, crop it intentionally with scale, fade, continuation, or layering.
- Background elements must stay behind UI components and gameplay assets.
- Background elements must not compete with the primary title, reward card, gameplay object, or bottom actions.

### GameplayAsset

Use when the gameplay object is a complex visual machine or illustrated device, such as a lottery machine, gacha machine, slot machine, treasure chest, claw machine, jackpot cabinet, or golden egg stage.

Rules:
- Render the gameplay object as one generated or designer-provided PNG image asset.
- The gameplay area should contain a single `<img>` plus only transparent hit areas or accessibility text as needed.
- Before generating the asset, calculate the target image bounding box from the page framework: available width, available height, required horizontal margins, top card bottom, bottom action top, and desired vertical centering gap.
- Pass the calculated target aspect ratio and safe visual bounds into the image-generation prompt.
- Do not generate an arbitrary asset first and force it into place afterward.
- Do not rebuild complex gameplay visuals with HTML/CSS panels, prize cells, or decorative wrappers unless the user explicitly asks for editable structure.
- On the canonical 390px H5 canvas, keep at least 20px horizontal margin on both sides. Maximum gameplay visual/container width is normally 350px.
- Vertically center the gameplay image within the available gap between the reward/status card above and the bottom action area below.
- The image container may provide layout only; it must not add extra gameplay copy or extra CTA layers by default.

### SpinWheelImagePair

Use for prize-wheel pages where the wheel must rotate while the pointer remains fixed.

Asset contract:
- Use exactly two PNG visual assets:
  - `wheelBodyImage`: circular wheel body, reward slices, reward icons, rim, center hub, and wheel details.
  - `pointerImage`: fixed pointer/arrow/indicator only.
- `wheelBodyImage` must not contain any pointer, arrow, top marker, triangular indicator, or fixed prize selector.
- `pointerImage` must not contain wheel slices, reward icons, CTA text, or gameplay copy.

Behavior contract:
- Rotate only the wheel body. Never rotate the pointer.
- Disable the trigger while spinning.
- Keep reward data outside the presentational component.
- Define reward order explicitly in the same order as the wheel artwork.
- Respect `prefers-reduced-motion`.

## Custom Component Promotion

Promote a page-specific module into `component-library/components/` when:

- it appears in at least two page frameworks,
- it has fixed Figma source or stable visual structure,
- it has locked dimensions or interaction behavior,
- future pages should reuse its code directly.

When promoting, create:

```txt
component-library/components/{component-name}/
  component.md
  optional-runtime.js
  optional-runtime.css
  assets/
```

Then replace page-local code with the catalog implementation.

```

### skills/vibe-activity-page/references/conversion-patterns.md

```markdown
# Conversion Patterns

## Reward Motivation

- Show the user's current value before asking for action.
- Show the exact remaining gap: `还差 25000 金币可提现`.
- Use progress deltas after actions: `邀请成功后 +1 次抽奖机会`.
- When the reward threshold is high, add intermediate milestones.

## CTA Priority

- One primary CTA per state.
- Primary CTA should change with eligibility:
  - below threshold: earn more
  - enough balance: withdraw
  - no chances: invite or complete task
  - spinning: disabled loading state
  - completed: view reward or continue earning

## Urgency and Proof

Use only truthful urgency:
- campaign end time
- daily remaining chances
- limited task reset
- progress to next reward

Proof modules can include:
- recent winners
- invited friend avatars
- withdrawal history
- ranking movement

## Friction Reduction

- Put rules after the primary action, not before it.
- Keep task actions one tap away.
- Avoid requiring users to understand the whole campaign before taking the next step.
- If a mechanic has chances, always show remaining chances near the mechanic and CTA.


```

### skills/vibe-activity-page/references/figma-interaction-flow-extension.md

```markdown
# Figma Interaction Flow Extension

Use this workflow when extending an existing Figma activity page into downstream interaction-flow diagrams.

## Trigger

Use this reference when the user asks to:

- extend a generated page into later interaction flows
- show what happens after clicking page controls
- build a Figma interaction chain
- add downstream pages, overlays, toasts, rules pages, share panels, menus, or withdrawal pages
- visualize component click behavior from an already generated Figma page

## Core Principle

The interaction-flow diagram must reflect the actual current page, not the entire capability set of the component library.

If the current page uses a two-button navigation component with only `Music` and `Question`, do not add `Share` or `More` flows. If a generic app behavior such as back navigation is not part of the campaign business flow, do not include it in the flow diagram unless the user explicitly asks.

## Workflow

1. Inspect the current Figma page first.
   - Identify the actual visible component instances and buttons on the generated page.
   - Confirm which navigation variant is used and which right-side actions are actually present.
   - Confirm component states, such as asset component variants `有进度无标题`, `有进度有标题`, or `无进度有标题`.
   - Do not infer flows from component-library possibilities when the current page does not expose that action.

2. Define business interactions only.
   - Include campaign-relevant interactions such as withdraw, rules/question, music state feedback, share only if present, more only if present, gameplay result, or task entry.
   - Exclude generic app shell navigation such as returning to the previous page unless explicitly requested.
   - For stateful components, include only meaningful state branches. Example: withdrawal below threshold goes to a toast; withdrawal ready goes to the withdrawal page.
   - If an interaction only produces a toast, do not create a separate destination frame. Keep it as an annotation route on the main page: point the connector back to the main page title/header area and describe the toast content in the trigger label.

3. Create downstream frames.
   - Keep the main generated page as the central source node.
   - Put every interaction branch on its own row.
   - Do not chain unrelated target frames horizontally. Example: `链路/提现未达标-Toast` must not be placed after `链路/活动中心`; it gets its own row.
   - Name downstream frames with the `链路/` prefix, such as `链路/提现未达标-Toast`, `链路/提现页面`, or `链路/Question-活动规则页`.
   - Add a visible frame-name label at the top of every page frame. Figma frame names are not visible after exporting a flow image, so the diagram must include readable labels such as `BR 桑巴足球幸运转盘 - 实例搭建版` or `链路/提现未达标-Toast`.
   - Place the visible frame-name label just above the frame when exporting the whole flow canvas. Do not cover the actual page UI unless the user specifically wants the name inside each exported frame.
   - Reuse component instances where applicable; otherwise create lightweight downstream frames that communicate the destination state clearly.
   - If a downstream destination corresponds to an existing component, such as a share panel, rules panel, asset card, navigation bar, or contribution module, directly place a Figma component instance and configure that instance. Do not redraw the component by hand.

4. Draw interaction connectors.
   - Use one connector/vector path per interaction route.
   - Do not build arrows by combining separate line segments, circles, and triangle shapes.
   - Do not use visible `Hotspot` layers. If prototype reactions are needed, attach them to the real visible component node when possible.
   - Lines must be orthogonal: horizontal and vertical only.
   - The first segment leaving the source frame must be horizontal.
   - The connector start point should align as closely as possible with the vertical center of the actual clicked control, such as the Check button, Spin button, More Chances button, Rules button, Music icon, or Question icon.
   - The final segment entering the target frame must be horizontal.
   - Only the endpoint has an arrow. The startpoint must not have an arrow.
   - Avoid overlapping connector lanes. Assign each branch its own vertical lane or route so vertical segments do not sit on top of each other.
   - Use connector color `#3867FF` for lines and arrow endpoints.

5. Add trigger labels.
   - Every interaction connector needs a short trigger label, such as `点击提现按钮（进度未满）`, `点击 Music`, or `点击 Question`.
   - Place the label above the first non-overlapping horizontal segment.
   - Keep labels as close to the main/source page as possible.
   - Label color must be `#3867FF`.
   - Label width is content-sized with a maximum of `120px`; allow wrapping when needed.
   - Do not let labels overlap each other, cross over frames, or obscure important page content.

6. Validate the flow diagram.
   - The main page remains visually central.
   - Each business interaction has its own row.
   - Every page frame has a visible frame-name label near its top so exported diagrams remain understandable.
   - No generic back-navigation flow appears unless requested.
   - No absent navigation actions appear. For example, no `More` flow on a two-button `Music` + `Question` nav page.
   - Toast-only interactions do not create standalone frames; their connector points back to the main page title/header area and the label states the toast content.
   - Any interaction destination with an existing component uses a component instance, not a manually redrawn approximation.
   - No `Hotspot` layers remain.
   - All connectors are horizontal/vertical.
   - All connectors start and end with horizontal segments.
   - Only endpoints have arrows.
   - Labels are close to the main/source frame, above the line, blue, content-sized, and max `120px`.

## Recommended Figma Implementation Notes

- Use `figma-use` before writing to Figma.
- Prefer `VectorNode` with `setVectorNetworkAsync` when you need endpoint-only arrows:
  - set all intermediate vertex `strokeCap` values to `NONE`
  - set only the final vertex `strokeCap` to `ARROW_LINES`
  - keep segment coordinates orthogonal
- If using connectors instead, set `connectorStartStrokeCap = "NONE"` and `connectorEndStrokeCap = "ARROW_LINES"`, and choose an elbowed connector style.
- Do not leave a standalone explanation panel. The diagram itself should explain each flow through per-line trigger labels.

## Naming

Use consistent names:

- Main page: keep the generated page name.
- Destination frames: `链路/{destination}`
- Connector layers: `链路箭头/{trigger}`
- Visible frame-name labels: `Frame名称/{frame name}`
- Label frame: `触发行为标签`
- Label text: `触发行为`

## Common Mistakes

- Adding all possible navigation actions instead of only actions present on the current page.
- Showing back navigation as a business flow.
- Creating a new frame for a simple toast-only response.
- Redrawing a share panel or other available component instead of using its Figma component instance.
- Starting every connector at an arbitrary shared y-position instead of aligning it with the clicked button/control.
- Placing target frames as a single horizontal chain.
- Drawing arrows from multiple primitive shapes.
- Leaving visible or invisible `Hotspot` layers on the page.
- Letting labels all sit at a fixed width when short labels could be smaller.
- Letting connector vertical segments overlap.
- Forgetting visible frame-name labels, which makes exported flow diagrams hard to read.

```

### skills/vibe-activity-page/references/page-structures/index.md

```markdown
# Page Structure Index

## Framework Model

A page framework defines the conversion path, section order, and which components must be strict. It may also define open zones where AI can adapt visuals, copy, theme, and gameplay skin to the campaign.

When generating a page:

1. Read this index first.
2. Choose the closest existing framework from `Available Frameworks`.
3. Read only the selected framework file.
4. If no framework fits, create a custom structure for the user request and record it as a candidate for this directory.
3. Preserve strict component contracts from `../../component-library/components/*/component.md` and the chosen framework.
4. Select one transferable visual style from `../visual-styles/index.md` for open visual zones. Preserve style language rather than copying literal objects from references.
5. Keep open zones expressive, but never let them break CTA hierarchy, readability, or responsive behavior.

## Available Frameworks

- `single-gameplay-conversion-page`: a single-core-gameplay page for spin wheel, shoot, scratch card, blind box, slot machine, card draw, chest open, gacha, jackpot, and lucky number campaigns. Read `references/page-structures/single-gameplay-conversion-page.md`.
- `progress-accumulation-conversion-page`: a short-cycle progress accumulation page for golden egg, treasure chest, mystery box, gift box, jar, capsule, or other reward-container campaigns where actions fill progress, full progress opens a reward dialog, and the progress resets. Read `references/page-structures/progress-accumulation-conversion-page.md`.
- `nurture-progress-conversion-page`: a long-cycle reactivation and retention page for nurture, companion, savings jar, daily ritual, milestone reward, and soft co-nurture campaigns. Read `references/page-structures/nurture-progress-conversion-page.md`.

## Selection Heuristics

Use `single-gameplay-conversion-page` when:
- the page has one dominant gameplay object,
- the primary goal is immediate participation,
- the main CTA is play, draw, spin, open, smash, shoot, or invite for chances.

Use `progress-accumulation-conversion-page` when:
- the page has one dominant reward container,
- the user must accumulate progress before opening, smashing, or claiming,
- actions such as invite, share, watch, task completion, or check-in increase progress,
- full progress triggers reward feedback and then resets for another cycle.

Use `nurture-progress-conversion-page` when:
- the page is long-cycle,
- the primary goal is reactivation, retention, or daily return,
- the mechanism includes nurture, companion growth, savings progress, ritual tasks, milestone rewards, or soft co-nurture.

## Universal Campaign Shell

Use this order unless the user gives a stronger product requirement:

1. Top campaign identity: compact nav-safe area, title, subtitle, optional time window.
2. Reward summary: current balance, target threshold, unlock state, or hero prize.
3. Primary mechanic: wheel, grid, task list, invite progress, check-in track, or blind box.
4. Conversion bridge: friend help, extra chances, progress delta, social proof, or next best action.
5. Secondary modules: reward history, ranking, task details, rules, FAQ.
6. Bottom action bar: primary CTA plus up to two secondary actions.

## Activity Structures

### Invite Lottery

- Header: title plus reward promise.
- Progress: invites completed, chances earned, next reward.
- Gameplay: 6-cell grid or wheel with one highlighted active state.
- Friend proof: invited list, helped friends, recent winners, or group progress.
- CTA: invite now as primary, view rewards/rules as secondary.

### Cashback

- Header: cashout promise and campaign deadline.
- Cashout card: current coins, cash equivalent, progress to threshold.
- Growth path: tasks or invite actions that increase balance.
- Trust layer: withdrawal rules,到账 time, recent cashouts.
- CTA: earn more or withdraw, depending on eligibility.

### Task Reward

- Header: total available reward and completion status.
- Task list: task title, reward, status, action.
- Milestone ladder: cumulative reward unlocks.
- Daily retention: check-in streak or countdown.
- CTA: continue next task.

### Leaderboard

- Header: competition reward pool.
- User rank card: current rank, gap to next reward, points.
- Top list: top 3 visually distinct, rest compact.
- Earning methods: invite/task/play actions that increase rank.
- CTA: boost rank.

### Check-In

- Header: streak reward promise.
- Calendar or 7-day track.
- Today reward card.
- Make-up or bonus chance module if supported.
- CTA: check in today or continue earning.

### Progress Accumulation

- Header: core accumulation gameplay or reward promise.
- Optional subtitle: countdown, remaining action count, or short rule.
- Progress container: one dominant PNG object such as golden egg, treasure chest, box, jar, or capsule.
- Container progress bar: current progress displayed on or immediately beside the container.
- Action point: invite, share, watch, task, check-in, or help action that adds progress.
- Reward feedback: `Dialog` with explicit prize amount/name when progress reaches the target.
- Reset: progress returns to the configured next-cycle value after reward confirmation, or moves to claimed state if one-time only.

### Nurture Progress

- Header: companion/IP world, calm activity promise, optional streak/day cue.
- Progress status card: stage, secondary currency, next milestone, reward preview.
- Nurture gameplay: feed, care, grow, collect, savings jar, or companion action.
- Daily ritual tasks: small actions that feed the nurture loop.
- Milestone rewards: staged progress path and next unlock.
- Optional soft social module: co-nurture, gift exchange, or gentle invite.
- Action area: state-aware primary CTA for today's next action.

## Structure Rules

- Keep one primary conversion path per screen.
- Put the reward state before the mechanic when reward progress is the main motivator.
- Put the mechanic before progress when play itself is the hook.
- Put progress directly on or adjacent to the reward container when completion unlocks the core reward.
- Rules should be accessible but visually secondary.
- The bottom CTA must repeat the best next action from the main content.

```

### skills/vibe-activity-page/references/page-structures/nurture-progress-conversion-page.md

```markdown
# Nurture Progress Conversion Page

## Definition

A mobile-first activity page for reactivation and retention campaigns where the user returns repeatedly to nurture a companion, grow progress, and unlock staged rewards.

Use this framework when `StrategyBrief.page_structure.type` is:

```txt
nurture-progress-conversion-page
```

Best fit:
- Japan reactivation
- dormant or low-activity existing users
- ritual, check-in, care, feed, grow, collect, savings, or companion mechanics
- campaigns optimized for DRU, D1/D7 retention, repeat visits, or long-term value

Do not use it for:
- one-shot lottery pages
- pure referral landing pages
- short burst cash-grab pages
- content-heavy brand pages with no daily action

## Conversion Goal

Optimize for:
- return visit intent
- daily ritual completion
- nurture-medium accumulation
- reward unlock after a target number of nurture actions
- gentle social re-entry when applicable

Primary success behavior:

```txt
User enters page
↓
recognizes the companion and today's ritual
↓
collects the nurture medium from tasks
↓
uses the medium to nurture the companion
↓
sees nurture-count progress toward the reward
↓
returns tomorrow
```

## Fixed Structure

## Structure Description

This framework is a long-cycle nurture page. It should make the user understand what they are raising, what today's action is, how progress grows, and what reward they can eventually unlock.

### Top Navigation

The page starts with the standard top navigation bar.

Purpose:
- provide app-level navigation and global actions
- keep the activity page consistent with the host app shell

Implementation:
- use the standardized `TopNavigation` component from `../../component-library/components/top-navigation/component.md`
- do not create a page-specific navigation bar
- when the page uses a top environment background, the background image should begin at the very top of the activity canvas and the navigation should overlay it; do not leave a separate navigation-only band outside the scene

### Primary Title

The primary title appears below the navigation area.

Purpose:
- communicate the core nurture mechanic or the main benefit point
- create the first visual anchor of the page

Examples:
- grow your golden egg
- feed your companion
- collect daily petals
- unlock your final reward

### Secondary Info

The subtitle is optional.

Purpose:
- supplement the nurture gameplay
- explain the daily rhythm
- show countdown, campaign deadline, streak cue, or short reward promise

Rules:
- if present, keep it visually weaker than the primary title
- it may be a simple subtitle or a countdown
- it should not compete with the nurture visual

### Nurture Area

This is the emotional and visual center of the page.

Purpose:
- show the companion, object, or collectible that the user is nurturing
- make the long-cycle progress feel tangible and personal

Common subjects:
- a golden egg that grows from small egg to large egg and finally unlocks a reward
- a kitten that grows through feeding and care
- a plant, jar, character, mascot, collectible, or IP object

Rules:
- the subject should be one clear character or object
- the subject should have visible states when possible, such as small, growing, ready, completed, or rewarded
- for companion/IP nurture, prefer 3 clear visual levels when the campaign needs achievement feedback: initial, growing companion, and evolved companion
- all companion/IP level assets should share the same transparent canvas and display size so evolution changes the character styling without moving the page frame
- the companion/IP should use lightweight motion where possible, such as idle breathing/floating, care feedback, and evolution feedback, instead of remaining fully static
- define the visual asset box before generating or placing the nurture image
- place the companion/IP directly on the top page environment, not inside a card
- the top environment should use a generated or designer-provided PNG background image that follows the selected visual style's asset prompt
- the top environment background should start from the page top and sit behind navigation when navigation is present
- avoid adding multiple competing gameplay objects

### Action Button

This is the main operation area for the nurture loop.

Purpose:
- let the user perform today's nurture action
- connect the companion/object to visible progress growth

Common actions:
- hatch egg
- feed
- water
- grow
- collect
- save progress

Rules:
- the action button should clearly describe the current action, such as `Hatch`, `Feed`, or `Grow`
- after the action, update the nurture state and progress state
- if today's action is completed, switch the button to the next state instead of leaving a dead CTA

### Progress Card

The progress card appears after the nurture/action area in this framework.

Purpose:
- show the IP/companion growth state
- show how many more nurture actions are needed for the next upgrade
- preview the upgrade reward unlocked after `x` nurtures

Rules:
- Keep this card visually compact; it should support the nurture area, not compete with it.
- keep progress readable and concrete
- do not hide the remaining nurture count in rules
- use the card to explain why the user should return tomorrow
- if a strict catalog component fits, use it; otherwise document the custom `NurtureProgressCard` gap in `PageBuildSpec`

### Task Area

The task area appears after the progress card.

Purpose:
- provide extra ways to earn nurture chances or action counts
- support the daily loop without becoming the whole page

Common task rewards:
- hatch/feed/grow chances
- nurture items
- secondary currency
- progress boost

Rules:
- Use the strict `TaskList` component from `component-library/components/task-list/` when the page needs a visible daily task list.
- present tasks as a compact list
- each task should show reward and status
- task completion should increase nurture chances, action count, or progress inputs
- keep the task area secondary to the nurture subject and main action button

### 0. Top Navigation

Use shared `TopNavigation` from `../../component-library/components/top-navigation/component.md` when the host activity shell requires app navigation.

Rules:
- Reuse the documented Figma variant rather than building a page-specific nav.
- Navigation remains visually above the page scene and does not inherit campaign colors.
- Keep the page title/header below or safely clear of the navigation controls.

### 1. Header Area

Role: establish the companion/IP world and daily ritual context.

Typical content:
- campaign title
- companion/IP cue
- short calm promise, such as `Grow together every day`

Open zones:
- IP/companion expression
- seasonal theme
- title art or compact live title
- gentle contextual copy

Rules:
- Avoid aggressive urgency language as the default.
- Keep header compact enough to show the nurture object in the first viewport.
- Do not add a separate header badge/stamp/meta row by default.
- For JP触活, prefer calm, cute, polite, ritual-oriented language.

### 2. Nurture Gameplay Area

Role: the emotional center of the page. It appears before the progress card.

Typical mechanics:
- feed companion
- care for companion
- collect daily item
- water/grow object
- store points in savings jar
- light push-coin or pinball companion moment

Required content:
- one companion or nurture object
- one primary daily action
- clear state after action
- visible progress delta

Rules:
- The gameplay area may be a custom module when no component-library gameplay component exists.
- Define the asset box before generating or placing the companion/gameplay image.
- The companion/IP must be placed directly on the top page environment rather than inside a card container.
- The top environment background should be a PNG generated or provided using the selected visual style's asset prompt.
- Keep the action copy and CTA in a lightweight supporting strip or inline action area below the companion, not in a large card that contains the IP.
- Prefer one primary action per day.
- Avoid harsh win/lose framing.
- Reward-result feedback can use `Dialog`; lightweight operation feedback can use `Toast`.
- If the action changes progress, the progress card must visibly update in the main link.

### 3. Progress Status Card

Role: show current progress and why the user should complete today's action.

Use:
- `AssetCard` or closest progress/reward component from `component-library/components/asset-card`
- If no exact catalog component fits, create a strict `NurtureProgressCard` and document the gap in `PageBuildSpec`.

Required content:
- current nurture stage or level
- next upgrade stage or level
- nurture count, such as `2/5 nurtures`
- remaining count, such as `3 more nurtures to upgrade`
- upgrade reward preview
- eligibility state for today's action

Rules:
- This card is strict by default because it anchors retention progress.
- Progress should appear below the nurture area in a compact supporting card.
- Initial growth progress may start at `0` when the user has not performed any nurture action in the current stage.
- When progress reaches the target, the companion/IP should evolve, reward feedback should trigger, and the progress count should reset to `0` for the next growth stage.
- The current level label should match the visual IP level shown in the nurture area.
- Do not hide the remaining nurture count in a rules section.
- Use secondary currency or progress framing by default; avoid direct cash pressure unless explicitly required.
- Do not include the medium balance inside the progress card. The main progress card records companion growth and upgrade timing only.

### 4. Daily Ritual Task Area

Role: provide light actions that feed the nurture loop.

Typical tasks:
- check in
- watch or visit content
- like/follow
- share gently
- collect a daily item

Rules:
- Tasks must feel small and optional, not like a heavy task center.
- Use `TaskRewardPage` patterns only when tasks become the primary mechanic.
- Keep task count compact, usually 2-4 visible tasks.
- Each task must have a clear status: available, completed, claimed, or locked.
- Task rewards should use the same medium icon and medium name as the nurture action.
- Completing tasks adds medium; using medium for nurture consumes medium and increases the nurture count.
- The medium balance belongs near the primary nurture action, not inside the progress card.
- Nurture should remain available while the user has enough medium, and switch to a disabled or collect-more state only when the medium is insufficient.

### 5. Social Invite / Co-Nurture Area

Optional.

Use when the strategy asks for friend co-nurture, gift exchange, cheer, or soft invite.

Rules:
- Keep it softer than referral-first pages.
- Avoid aggressive pressure copy.
- Use `SharePanel` for share channel selection.
- Friend action should support the nurture loop, not replace the daily primary action.

### 6. Action Area

Role: repeat the next best action.

Typical CTA:
- `Feed Today`
- `Collect Today`
- `Grow Now`
- `Claim Progress`
- `Come Back Tomorrow`

Rules:
- The primary CTA must match the current journey state.
- Button text must be horizontally and vertically centered.
- For this framework, do not add a sticky bottom action module by default.
- Keep the primary CTA inside the nurture gameplay card so the companion, action, and progress feedback stay visually connected.
- If today's action is completed, CTA should switch to the next state rather than remain clickable.

## Primary Link

Default main journey:

```txt
Entry
↓
Today action available
↓
Complete light task to collect medium
↓
Tap primary nurture action to use medium
↓
Action feedback
↓
Companion growth progress and remaining nurture count update; medium balance decreases near the primary action
↓
Companion evolves and reward unlocks when nurture count reaches target
↓
Growth progress resets to 0 for the next stage
↓
Next return prompt
```

Required states:
- `entry`: show current companion, progress, and today's action.
- `actionInProgress`: short feedback or animation state.
- `actionCompleted`: progress delta is visible.
- `rewardUnlocked`: use dialog or prominent panel when nurture count reaches the reward target.
- `returnPrompt`: shows next available action or tomorrow reminder.

## PageBuildSpec Requirements

When producing `PageBuildSpec`, include:
- `page_architecture.framework`: `nurture-progress-conversion-page`
- strict or semi-strict contracts for `TopNavigation`, `ProgressStatusCard`, `NurtureGameplayArea`, `DailyRitualTaskArea`, `ActionArea`
- `layout_slots` for header, nurture object, compact progress card, task area, and action area
- `asset_generation_plan.asset_requests` for companion/IP asset, top environment background PNG, and unified medium icon PNG
- `qa_requirements` covering primary link states, progress update, text centering, and no rule-first layout

## QA Checklist

Before delivery:
- First viewport shows progress or expected value.
- Nurture area appears above the progress card.
- Companion/IP is directly on the top page environment, not inside a card.
- Top environment background uses a PNG generated or provided from the selected visual style's asset prompt.
- Header has no separate meta/stamp row unless the user explicitly asks for one.
- Main conversion steps are 3 or fewer.
- One primary daily action is visually dominant.
- Progress changes after the primary action.
- Unified medium icon and name are used in tasks, progress, and nurture action.
- No milestone section is present by default.
- No rules section is present by default.
- CTA text is centered and state-aware.
- No sticky bottom action module is present unless the user explicitly asks for one.
- No demographic, IP, or localization detail is invented beyond upstream input or user instruction.

```

### skills/vibe-activity-page/references/page-structures/progress-accumulation-conversion-page.md

```markdown
# Progress Accumulation Conversion Page

## Definition

A mobile-first activity page where users accumulate progress through repeated actions until a container is completed, then receive a reward result and the progress resets for the next cycle.

Use this framework when `StrategyBrief.page_structure.type` is:

```txt
progress-accumulation-conversion-page
```

Best fit:
- smash golden egg after collecting progress
- open treasure chest after enough invites, shares, views, or tasks
- fill a gift box, jar, capsule, envelope, or reward container
- short-cycle accumulation that can complete and reset in the same session
- campaigns where the motivating object is a reward container, not a long-term companion

Do not use it for:
- one-tap lottery pages with no visible accumulation
- long-cycle companion nurture or daily growth pages
- pure cashout threshold pages where the progress card is the main product
- task centers where tasks are the dominant screen

## Conversion Goal

Optimize for:
- repeated invite/share/task actions
- visible progress growth
- reward anticipation
- completion feedback
- immediate next-cycle replay after reward delivery

Primary success behavior:

```txt
User enters page
↓
understands the reward container and progress target
↓
taps an action such as invite or share
↓
progress increases on the container
↓
progress reaches the target
↓
reward dialog opens
↓
user confirms the reward
↓
progress resets for the next container cycle
```

## Fixed Structure

This framework is a focused accumulation page. The user should see what they are filling, how much progress remains, and which action increases progress.

```txt
Top Navigation
↓
Primary Title
↓
Secondary Info (optional)
↓
Progress Container Area
↓
Action Point Button
↓
Reward Dialog / Reset Feedback
```

### Top Navigation

The page starts with the standard top navigation bar.

Purpose:
- provide app-level navigation and global actions
- keep the activity page consistent with the host app shell

Implementation:
- use the standardized `TopNavigation` component from `../../component-library/components/top-navigation/component.md`
- do not create a page-specific navigation bar
- navigation remains visually above the page scene and does not inherit campaign colors
- use the Figma source variants from the `导航栏组件` contract

### Primary Title

The primary title appears below the navigation area.

Purpose:
- communicate the core accumulation gameplay or strongest benefit point
- make the completion promise obvious

Examples:
- `Fill the Chest to Win`
- `Invite Friends to Crack the Egg`
- `Charge the Gift Box`
- `Share to Unlock Your Prize`

Rules:
- use `PrimaryTitle` from `../../component-library/components/primary-title/component.md` when possible
- title copy must be configurable
- title can describe either the gameplay action or the reward benefit
- title art should be a PNG asset by default when decorative
- do not let the progress container or background art cover the title

### Secondary Info

The subtitle is optional.

Purpose:
- supplement the gameplay explanation
- show countdown, deadline, remaining actions, or reward context

Examples:
- `2 more shares to open`
- `Ends in 23:59:36`
- `Complete the bar to reveal your reward`

Rules:
- keep it visually weaker than the primary title
- if it is a countdown, it must be code-driven and clamp at zero
- it may be omitted when the progress container already explains the rule clearly

### Progress Container Area

This is the visual center of the page.

Purpose:
- show the container that is accumulating progress
- make the current progress tangible
- create anticipation before the reward is revealed

Common containers:
- golden egg
- treasure chest
- mystery box
- gift box
- jar
- capsule machine
- safe, envelope, pouch, or seasonal object

Required content:
- one dominant generated or designer-provided PNG container image
- one progress bar attached to, overlaid on, or visually anchored to the container
- current progress value, such as `3/5`, `60%`, or `2 more to open`
- ready/completed visual state when progress reaches the target

Rules:
- calculate the container asset box before generating the image
- use PNG by default for the container, background, title art, and reward visuals
- SVG is allowed only for compact icons
- the container should be the largest non-background object on the page
- progress must be visible on or immediately adjacent to the container, not hidden in a separate rules section
- the progress bar must have stable dimensions and not resize when the number changes
- define states for empty, partial, ready, opening, rewarded, and reset
- do not use a long milestone track unless the campaign is actually a staged journey; this framework is one container cycle at a time
- if no catalog component fits the container progress UI, create a custom `ProgressContainer` module and document the gap in `PageBuildSpec`

### Action Point Button

This is the main operation area.

Purpose:
- tell the user which action accumulates progress
- convert the visual goal into one clear next step

Common actions:
- invite
- share
- watch
- complete task
- check in
- help friend

Rules:
- the primary button label must name the action that adds progress, such as `Invite Now`, `Share to Fill`, or `Watch to Add Progress`
- use an existing button/action component when it fits, such as `BottomActionTriple` for one primary plus two secondary actions
- prefer a single primary action button when one action, such as sharing, is the only progress source; avoid adding a full task area just to make the page feel richer
- keep one dominant primary CTA
- secondary actions may open rules, share panel, task details, or reward history
- button copy and progress delta must come from page config
- after a successful action, update the visible progress immediately
- when progress is full, change the primary state to `Open`, `Smash`, `Claim`, or trigger the reward automatically according to the business rule
- if the action opens `SharePanel`, the progress delta should happen after the share channel callback or simulated share-success callback, not when the panel merely opens

### Reward Dialog and Reset

The reward result is a required feedback state.

Purpose:
- tell the user exactly what prize they earned
- close the completed cycle
- reset progress for the next cycle

Required component:
- use `Dialog` from `../../component-library/components/dialog/component.md`

Rules:
- use the `withImage` dialog when the reward has an icon, prize image, or visual result
- explicitly show the reward amount or prize name
- do not use `Toast` as the only reward-result feedback
- after the user confirms or closes the reward dialog, reset the progress bar to the configured next-cycle state
- if the reward can only be claimed once, reset to a completed/claimed state instead of implying another cycle
- hide the reward dialog from both visual layout and accessibility tree until it opens; opacity-only hiding can leave hidden reward content reachable to assistive tooling

## Reference Instance

The linked Figma node `680:8228` in the AI 智能设计项目 is a useful reference for the page rhythm:

- 390 x 844 mobile canvas
- full-page background image
- standardized top navigation over the scene
- title block near the top
- main visual container in the upper-middle page
- progress base/platform below the main visual
- main action button below the container
- secondary share/action text below the button
- supporting task/friend area further down the page

Use the reference as a structure and interaction pattern, not as required copy or localization. Default user-facing language remains English unless the user explicitly requests another language.

## Primary Link

Default main journey:

```txt
Entry
↓
Progress available
↓
Tap action point button
↓
Action feedback
↓
Progress bar increases on the container
↓
Full progress reached
↓
Reward dialog opens
↓
Confirm reward
↓
Progress resets for the next cycle
```

Required states:
- `entry`: show title, optional subtitle, container, current progress, and action button.
- `actionInProgress`: button loading or brief operation feedback.
- `progressUpdated`: progress value and bar visibly increase.
- `readyToOpen`: progress is full and the container enters ready/openable state.
- `rewardOpened`: use `Dialog` with explicit reward value or prize name.
- `reset`: progress returns to the configured next-cycle start value, or moves to claimed state if repeat is not allowed.

## Page Config Requirements

The page config must include:
- `title`
- `subtitle` or `countdown` when used
- `progress.current`
- `progress.target`
- `progress.deltaPerAction`
- `progress.resetValue`
- `progress.completeBehavior`
- `progress.rewardOpenMode`, such as `auto` or `manual`
- `container.type`
- `container.assetUrl`
- `container.states`
- `actions.primary.label`
- `actions.primary.delta`
- `reward.title`
- `reward.value`
- `reward.unit` or `reward.prizeName`
- `reward.imageUrl`
- `share` or `task` configuration when those actions add progress

Business copy, thresholds, rewards, image URLs, timers, and theme values must live in this config object, not inside presentational components.

## Component Map

Use existing components first:

- `TopNavigation`: required app shell navigation.
- `PrimaryTitle`: required title module when title art or live title is present.
- `BottomActionTriple`: use when the page needs one main action plus two secondary entries.
- `SharePanel`: use when share channel selection is part of the progress action.
- `TaskList`: use when multiple tasks add progress and must be visible.
- `Dialog`: required for full-progress reward feedback.
- `Toast`: only for lightweight process feedback such as copied link, share submitted, or action unavailable.

Custom modules allowed only when no suitable catalog component exists:

- `ProgressContainer`
- `ContainerProgressBar`
- `ContainerOpeningMotion`

Document each custom module gap in `PageBuildSpec`.

Promote `ProgressContainer` into `component-library/components/` when at least two campaigns need the same pattern: one reward-container PNG, one attached live progress bar, current/target copy, ready state copy, opening state, and reset behavior.

## Asset Generation Rules

Before generating or placing the container image:

1. Determine the 390px canvas layout.
2. Reserve top navigation, title, subtitle, and CTA space.
3. Calculate the container asset box from the remaining first-viewport space.
4. Include progress-bar placement in the asset or UI plan.
5. Generate or request a transparent-background PNG for the container when it sits on a scenic background.

The progress bar may be live HTML/CSS when it needs dynamic fill animation. The container itself should remain a PNG visual asset unless the user explicitly asks for editable HTML structure.

Standalone case note:
- When a runnable case is created outside this Skill repository, either copy the required component runtime files into that case or serve the case from a shared static root that can also serve `component-library/`. Browser path normalization can prevent a case-local server from loading component files outside its root.

## PageBuildSpec Requirements

When producing `PageBuildSpec`, include:
- `page_architecture.framework`: `progress-accumulation-conversion-page`
- strict contracts for `TopNavigation`, `PrimaryTitle`, `ActionPointButton`, and `RewardDialog`
- custom or semi-strict contract for `ProgressContainer`
- `layout_slots` for navigation, title, optional secondary info, progress container, action area, and feedback layer
- `asset_generation_plan.asset_requests` for background PNG, title art PNG when used, container PNG, reward image PNG, and compact icons if needed
- `primary_link` states covering progress update, full-progress reward, and reset
- `qa_requirements` covering progress visibility, reward dialog, reset behavior, and centered CTA text

## QA Checklist

Before delivery:
- The standard `TopNavigation` component is used.
- Primary title communicates gameplay or benefit.
- Subtitle is optional and does not compete with the title or container.
- The container is a single dominant object, such as a golden egg, treasure chest, or box.
- Progress is visible on or immediately adjacent to the container.
- The progress bar updates after the configured action.
- The action button clearly states what adds progress.
- Full progress triggers a `Dialog` with explicit reward amount or prize name.
- Progress resets or moves to a claimed state after the reward dialog according to config.
- No reward result is handled by `Toast` alone.
- Business values are config-driven.
- PNG is used for background, title art, container, and reward imagery by default.
- CTA text remains centered at 320px and 390px widths.

```

### skills/vibe-activity-page/references/page-structures/single-gameplay-conversion-page.md

```markdown
# Single Gameplay Conversion Page

## Definition

A mobile-first activity page centered on one core gameplay mechanic. The page has a single conversion path:

```txt
Top Navigation
↓
Head Area
↓
Gameplay Area
↓
Action Area
```

Use this framework for:
- spin wheel
- football shoot
- card draw
- blind box
- slot machine
- scratch card
- flip card
- treasure chest
- lucky number
- gacha machine
- jackpot
- light gambling-style mini games

Do not use it for:
- complex task centers
- multi-section information pages
- content-heavy pages
- brand-only landing pages

## Conversion Goal

Optimize for:
- click-through
- time on page
- repeated participation
- invite/share expansion
- reward claim

## Fixed Structure

## Structure Description

This framework is a vertical, single-thread conversion page. Each section has a clear role and should guide the user from recognition to reward understanding, then to one main action.

### Top Navigation

The page starts with the standard top navigation bar.

Purpose:
- provide app-level navigation and global actions
- keep the activity page consistent with the host app shell

Implementation:
- use the standardized `TopNavigation` component from `../../component-library/components/top-navigation/component.md`
- do not create a page-specific navigation bar

### Primary Title

The primary title appears below the navigation area.

Purpose:
- communicate the core gameplay or the strongest benefit point
- create the first visual anchor of the page

Examples:
- spin to win
- open treasure chest
- invite friends and win gifts
- smash golden eggs

### Secondary Info

The subtitle is optional.

Purpose:
- supplement the gameplay explanation
- show countdown, deadline, chance rule, or short benefit copy

Rules:
- if present, keep it visually weaker than the primary title
- it may be a simple subtitle or a countdown
- it should not compete with the asset area or gameplay area

### Asset Area

Use this section when the gameplay involves rewards, balance, withdrawal, or asset accumulation.

Purpose:
- show the user's current asset total
- explain the withdrawal threshold or reward condition when one exists
- make the user understand how close they are to a redeemable state

Rules:
- place it under the secondary info when both are present
- use the relevant asset/reward component from `../../component-library/components/`
- if there is no reward balance or withdrawal logic, this section may be omitted

### Main Gameplay Area

This is the core visual and interaction area.

Purpose:
- show the user how rewards are earned
- make the primary mechanic instantly understandable

Common mechanics:
- spin wheel
- treasure chest
- golden egg
- lottery machine
- blind box
- scratch card
- card draw

Rules:
- the gameplay object should be dominant and centered
- the gameplay area can be visually adapted by campaign theme
- do not let decorative background or cards hide the core mechanic

### Action Area

This is the main user operation area.

Purpose:
- carry the key action the user should perform on this page
- turn the gameplay intent into a concrete button action

Common actions:
- invite friends
- draw now
- open now
- spin now
- get more chances

Rules:
- the primary action must be visually strongest
- secondary actions may support more chances, QR/share, rules, or extra task entry
- action copy should match the current gameplay and user state

## Reference Instance

The attached Korean spin-wheel page is the first canonical instance for this framework.

Instance traits:
- top navigation from the referenced AI design project: status bar plus 44px nav bar, back action on the left, two circular action buttons on the right
- watercolor mountain background with regional/cultural styling
- large Korean primary title
- countdown directly below the title
- glass-style `AssetImage`
- oversized centered spin wheel as the gameplay object
- large wooden `ButtonImage1` primary spin button
- fixed three-action bottom cluster
- `Opportunity: 5` counter below the action cluster

When using this instance as the source pattern, preserve the strict components below unless the user explicitly asks to change them.

### 0. Top Navigation

Position: top of the 390 x 844 canvas.

Purpose:
- provide app-level back navigation
- provide global actions such as music/help/rules
- preserve the host app shell around the activity page

Required components:
- shared `TopNavigation` from `../../component-library/components/top-navigation/`
- `System Status Bar`
- `Navigation Bar`
- `BackAction`
- `RightActionGroup`
- `Title Area`

Reference contract on a 390 x 844 H5 canvas:
- parent `TopNavigation`: x: 0, y: 0, width: 390, height: 91
- `StatusBar`: x: 0, y: 0, width: 390, height: 47
- `NavigationBar`: x: 0, y: 47, width: 390, height: 44
- `NAV BAR MOCK`: x: 0, y: 47, width: 390, height: 44, padding 16px horizontal and 6px vertical
- left icon button: x: 16, y: 6, width: 32, height: 32
- right icon group: x: 300, y: 6, width: 74, height: 32
- right icon buttons: 32 x 32 each, 10px gap
- `Title Area`: x: 96, y: 0, width: 213, height: 44

Strict requirements:
- `TopNavigation` is required for every `single-gameplay-conversion-page`.
- Use the shared `TopNavigation` component contract from `../../component-library/components/top-navigation/component.md`; do not create a page-specific navigation bar.
- Do not recolor `TopNavigation` to match the campaign visual theme. Navigation colors, borders, opacity, icon color, and status content color must come from the selected Figma variant in the component contract.
- Place `TopNavigation` before the head area in the DOM and visually above all page modules.
- Preserve the selected Figma variant's children, including status bar, navigation bar, left action, right action group, individual action buttons, and title area.
- Use a 44px nav row. Icon visuals are 20px inside 32px circular controls.
- Navigation icons must be horizontally and vertically centered inside their 32 x 32 circular buttons; avoid inline SVG baseline misalignment.
- The head area should normally start at or below y=91.
- Title art may overlap the navigation structure only if the final composition has no visual occlusion with status content, back action, title area text/logo, or right actions.
- Before delivery, inspect the final rendered page and confirm the header/title does not visually block the navigation.
- For the canonical invite/spin-wheel reference, place the primary title art at y=60 from the canvas top. This intentionally allows the title to overlap the navigation zone while keeping nav controls readable.

### 1. Head Area

Position: below top navigation, usually y=91 through the top 35-45% of the page.

Purpose:
- establish campaign identity
- emphasize the reward target
- create urgency

Required components:
- `PrimaryTitle`
- `CountdownText` or `SecondaryInfo`
- `AssetImage`

Open zones:
- title language is English by default; local flavor should be expressed through visuals unless the user explicitly requests localized copy
- background theme
- title treatment such as outline, shadow, or gradient
- urgency mode: plain countdown text or richer contextual copy

Strict requirements:
- the title must be the largest text in the head area
- if using a title art image, keep it as a single image asset and preserve its intrinsic proportions with `object-fit: contain`
- use a title art image asset by default for the primary campaign title; do not render decorative primary titles as live HTML text unless the user explicitly asks for editable text
- for canonical `single-gameplay-conversion-page` art-title layouts, set the title container top to 60px from the canvas top unless the user requests another Figma-derived coordinate
- the title text/content must not be occluded by any later page module or decoration; when visual overlap is possible, keep `PrimaryTitle` above activity visual elements in z-order
- title art may use `pointer-events: none` so the higher visual layer does not block navigation or gameplay clicks
- maintain 0px vertical spacing between `PrimaryTitle` and `CountdownText` or `SecondaryInfo`
- maintain 4px vertical spacing between `CountdownText` or `SecondaryInfo` and `AssetImage`
- the reward status must be visible before the gameplay or immediately adjacent to it
- secondary info must remain readable at 320px
- the head area must not push the gameplay completely below the first viewport

### 0. Background Scene

Role: create campaign atmosphere without breaking the conversion path.

Rules:
- Background elements must form a coherent scene and sit visually behind all UI modules and gameplay assets.
- Use one full-screen background image asset for scenic visual design. CSS may size and position the asset, but must not build the main scene through gradients, pseudo-elements, or multiple decorative HTML fragments.
- Do not use abrupt edge-cut shapes, such as a mountain or building that suddenly disappears at the page edge.
- If a decorative object is cropped by the viewport, make the crop intentional with enough scale, fade, continuation, or overlapping foreground so it feels natural.
- Prefer full-bleed scenic layers, generated background art, clouds, petals, light beams, distant landscape, or floor bands over small isolated CSS fragments.
- Background atmosphere must not overlap, obscure, or compete with `PrimaryTitle`, `AssetImage`, `GameplayAsset`, or `BottomActionTriple`.
- Avoid decorative spans that read as unfinished placeholders.

### 1.1 PrimaryTitle

Role: campaign recognition.

Rules:
- font size: 32-48px
- font weight: 900
- may use outline, shadow, or gradient
- should support localized campaign language when explicitly requested; otherwise use English copy
- must remain on the top visual layer of the campaign content; asset cards, gameplay assets, buttons, and decorative background layers must never cover the title text

Examples:
- `Lucky Spin`
- `Soccer World`
- `立即抽奖`
- `돌리고 받으세요`

### 1.2 SecondaryInfo

Role: urgency or participation context.

Rules:
- font size: 12px for countdown subtitles, following TUX P3
- line height: 16px for countdown subtitles
- font weight: 400 regular for countdown subtitles
- visually weaker than the primary title
- must be legible on the selected background
- use the TUX 4px spacing grid for vertical rhythm; canonical spacing is 0px from title to countdown container and 4px from countdown container to `AssetImage`
- if the secondary info is a countdown, use the plain `CountdownText` treatment: no background, no pill, default copy `过期时间：3d:5h:44m`
- the countdown label, such as `过期时间：`, must be configurable
- countdown values must be real code-driven timers that clamp at zero, not static display text

Examples:
- `过期时间：3d:5h:44m`
- `Only today`
- `Limited Chance`
- `今日剩余 3 次`

### 1.3 AssetImage

Role: make the user feel close to redeeming.

Canonical component: Figma `AssetImage`, main component `资产区2有进度`.

Figma contract on a 390 x 844 H5 canvas:
- x: 32
- y: 140
- width: 326
- height: 120

Internal fixed positions relative to `AssetImage`:
- top row: x: 16, y: 16, width: 294, height: 28
- avatar: x: 16, y: 20, width: 20, height: 20
- amount text: x: 40, y: 16, width: 108, height: 28
- withdraw button: x: 232, y: 16, width: 78, height: 28
- remaining text: x: 28, y: 60, width: 162, height: 18
- progress frame: x: 28, y: 78, width: 270, height: 26
- progress track: x: 28, y: 83, width: 230, height: 12
- progress fill: x: 29, y: 84, width: 166, height: 10
- particle effect: x: 29, y: 79, width: 196, height: 20
- reward group: x: 240, y: 54, width: 62, height: 50
- asset icon: x: 246, y: 54, width: 50, height: 50
- threshold value: x: 240, y: 86, width: 62, height: 17

Nested component lock:
- `粒子特效` is fixed. Do not change its color, opacity, dimensions, or internal layer styling in either code or Figma.
- If a campaign uses this asset component, only surrounding card colors, copy, and supported image/text slots may be adapted. The particle effect remains the original component instance.

Required content:
- small circular user avatar at the left of the balance row
- current balance text: `₩8,000`
- pill button text: `withdraw`
- remaining gap text: `Only ₩2000 to go`
- horizontal progress bar
- threshold marker with coin icon and text: `₩100,000`

Visual rules:
- translucent white/glass surface
- 24-32px rounded corners
- soft white border or glow
- balance row at top
- progress text in the middle
- progress bar near bottom
- threshold marker sits near the right end of the progress bar
- reward number is visually dominant

Locked-by-default rules:
- Do not change structure, copy, absolute size, absolute position, relative size, or internal order unless the user explicitly asks.
- Do not approximate child positions by eye. Use the Figma internal child coordinates above.
- Dynamic values may change only for balance, remaining gap, progress, avatar, and threshold amount.
- Keep `withdraw`, `Only ₩2000 to go`, and `₩100,000` copy style when no custom localization is requested.
- For JP pages, use Figma copy: `8,000円分`, `出金`, `あと2000円分で出金可能`, `10,000円分`.

Behavioral rule:
- use goal-gradient copy such as `还差 25000 金币可提现` when the user is below threshold
- switch CTA to redeem/claim when the threshold is met

## 2. Gameplay Area

Position: middle 45-65% of the page.

Purpose:
- become the absolute visual center
- make the available action obvious
- create reward feedback

Required components:
- `GameplayAsset`
- `RewardVisualization`
- `PrimaryGameplayCTA`

Open zones:
- gameplay type
- object art direction
- motion/feedback style
- reward icon style
- theme scene

Strict requirements:
- the gameplay object must be large, centered, and more visually dominant than the background
- reward value must be understandable before interaction
- the primary gameplay CTA must sit directly below or inside the gameplay object in a clearly tappable location
- the CTA must have pressed, disabled, loading, and completed states when applicable

### 2.1 GameplayAsset

Examples:
- spin wheel
- football shooter
- slot machine
- gacha machine
- scratch card
- treasure chest

Visual rules:
- large
- centered
- high contrast
- strong feedback
- stable dimensions across mobile widths

Implementation rule:
- Calculate the gameplay asset box before generating any gameplay image:
  - max width = canvas width - 20px left margin - 20px right margin
  - available height = bottom action top - reward/status card bottom
  - target height = available height minus balanced top/bottom breathing room
  - target top = reward/status card bottom + top breathing room
  - target aspect ratio = target width / target height
- Use this calculated width, height, and aspect ratio in the image-generation prompt. Do not generate a generic gameplay image first and then try to center it afterward.
- For illustrated gameplay objects, including spin wheels, lottery machines, gacha machines, slot machines, treasure chests, claw machines, and jackpot cabinets, use a generated or designer-provided raster asset as the gameplay object. Do not recreate the gameplay with HTML/CSS wedge segments, nested panels, grids, icons, and decorative shapes unless the user explicitly asks for editable HTML structure.
- The gameplay area may contain only the image asset when the asset already includes the reward grid and primary draw affordance.
- Keep generated gameplay assets transparent-background PNG when they need to sit on the page theme. SVG and WebP are not allowed for gameplay imagery unless the user explicitly overrides the repository asset-format rule; SVG remains allowed only for icons.
- On a 390px H5 canvas, keep at least 20px horizontal margin on both sides of the gameplay image. The gameplay image/container should be no wider than 350px unless the user explicitly requests full-bleed artwork.
- Vertically center the gameplay image in the open gap between `AssetImage` and `BottomActionTriple`. The gameplay object must not visually collide with either the reward/status card or the bottom action buttons.
- Generated gameplay assets should match the calculated bounding box closely and use minimal transparent padding.

### 2.2 RewardVisualization

Role: show what the user can win.

Rules:
- rewards should feel abundant
- use stacked coins, tickets, boxes, cards, cash, or points where relevant
- reward visuals must not cover important text or CTA

### 2.3 PrimaryGameplayCTA

Role: start the core action.

Rules:
- largest button on the page
- placed under the gameplay object or in the most obvious gameplay control position
- high-saturation warm color by default
- height: 48-56px
- obvious pressed state

Examples:
- `Spin`
- `Shoot`
- `Open`
- `Draw`
- `Play`
- `立即抽奖`

## 3. Action Area

Position: lower page or fixed bottom action bar.

Purpose:
- extend participation
- create more chances
- guide invite/share

Required components:
- `SecondaryCTAGroup`
- `ChanceCounter`
- `ShareAction` when sharing or QR is part of the campaign
- `BottomActionTriple` when following the reference instance

Open zones:
- exact action mix
- icon style
- proof module such as recent winners or friend avatars

Strict requirements:
- actions must reinforce the main gameplay, not introduce unrelated paths
- chance count must be visible when opportunities are limited
- if the user has no chances, the strongest secondary action becomes the primary CTA
- all action-area button text must be horizontally and vertically centered inside its own visible button/background container
- translated button labels must be recentered rather than inheriting offsets from the source-language Figma text layer

### 3.1 SecondaryCTAGroup

Common actions:
- `More Chances`
- `Invite Friends`
- `Extra Spins`
- `Watch Ads`
- `Get Bonus`

### 3.1.1 BottomActionTriple

Canonical component: the three bottom controls from the reference instance.

Figma-derived contract on a 390 x 844 H5 canvas:
- parent group `Btn`: x: 0, y: 668, width: 390, height: 120
- center `ButtonImage1`: x: 86, y: 667, width: 218, height: 96
- side buttons have no icon layer; each side button is background rectangle + text only

Internal fixed positions relative to `Btn`:
- left side image: x: 0, y: 20, width: 80, height: 58
- left side background: x: 0, y: 20, width: 80, height: 56
- left text: x: 0, y: 20, width: 80, height: 56, flex centered, text `追加チ\nャンス`
- center `ButtonImage1`: x: 86, y: -1, width: 218, height: 96
- center visual group: x: 97, y: 12, width: 196, height: 72
- center primary text: x: 97, y: 12, width: 196, height: 72, flex centered, text `回す`
- right side image: x: 310, y: 20, width: 80, height: 58
- right side background: x: 310, y: 20, width: 80, height: 56
- right text: x: 310, y: 20, width: 80, height: 56, flex centered, text `QR\nコード`
- chance text: x: 136, y: 106, width: 119, height: 18, text `チャンスはあと1回`

Required layout:
- left secondary button: background rectangle + text only
- center primary button has 72px visible height with text:
  - `돌리기`
- right secondary button: background rectangle + text only
- chance counter below the buttons:
  - `Opportunity: 5`

Locked-by-default rules:
- Do not change structure, copy, absolute size, absolute position, relative size, or button order unless the user explicitly asks.
- Do not approximate child positions by eye. Use the Figma internal child coordinates above.
- Do not add a secondary `Whirl` label inside `ButtonImage1` unless the user explicitly asks.
- The center button must be the largest and visually dominant.
- Left and right buttons must remain smaller side actions with an 80px visible width.
- Button text must be horizontally and vertically centered inside its own visible button/background container.
- This centering rule applies to the left secondary button, center primary button, and right secondary button.
- When localizing to English, center the translated label within the fixed button container instead of inheriting Japanese text offsets.
- Keep the counter directly under the button group.
- Do not add side icons, decorative circles, extra wrappers, or extra visual layers to the left/right side buttons.
- Implement the right side button background inside the `ButtonImage02Image` 80 x 58 container, not as an overflowing child outside the container.
- If side buttons are attached to the left/right canvas edges, implement them fully inside the 390px frame instead of positioning oversized buttons outside the viewport. The edge side should be square, and the inner side should remain rounded.

### 3.2 ShareAction

Use for:
- QR code
- invite link
- native share
- copy link

Rule:
- share action is secondary while chances remain, primary when the user needs sharing to continue.

### 3.3 ChanceCounter

Examples:
- `Opportunity: 5`
- `Remaining: 3`
- `今日剩余 2 次`

Rule:
- place it near both gameplay and action if chance scarcity is the main motivator.

## Visual Layout Rules

- The page is a vertical single-thread flow: title, reward, gameplay, start button, more chances.
- Do not introduce complex branches.
- Background must support the gameplay object, not compete with it.
- Background may use gradient, scene illustration, regional theme, festival theme, football field, casino-inspired scene, or cultural styling.
- The CTA system should form a loop: earn more chances, play, share/invite.
- The classic bottom action layout is left secondary action, center primary action, right share or QR action.

## Implementation Components

Recommended component split:
- `SingleGameplayPage`
- `TopNavigation`
- `StatusBar`
- `NavigationBar`
- `HeaderArea`
- `PrimaryTitle`
- `SecondaryInfo`
- `AssetImage`
- `GameplayArea`
- `GameplayAsset`
- `RewardVisualization`
- `PrimaryGameplayCTA`
- `SecondaryCTAGroup`
- `BottomActionTriple`
- `ChanceCounter`
- `ShareAction`

Gameplay-specific replacements:
- `SpinWheelGameplayAsset`
- `SoccerShootGameplay`
- `ScratchCardGameplay`
- `SlotMachineGameplay`
- `BlindBoxGameplay`
- `ChestOpenGameplay`
- `GachaGameplay`

Keep the page framework stable while swapping only the gameplay component and theme assets.

```

### skills/vibe-activity-page/references/qa-checklist.md

```markdown
# QA Checklist

Run this before final delivery or during review.

## Conversion

- The first viewport makes the reward and next action clear.
- There is exactly one dominant CTA for the current user state.
- The bottom CTA repeats the most important next action.
- Progress, chance count, or reward gap is visible near the action.

## Responsiveness

- Fixed Figma H5 pages render at the exact canonical canvas, usually 390px, and scale down proportionally at 320px.
- Free-layout pages have no horizontal scroll at 320px, 390px, 414px, or 430px.
- No clipped button labels or overlapped text.
- Button text in the bottom/action area is horizontally and vertically centered inside each visible button/background container.
- Edge-attached side buttons are fully inside the canvas; they are not created by overflowing outside the frame and being clipped.
- Fixed bottom actions do not cover the final content.
- Safe-area inset is handled.
- Background atmosphere elements do not abruptly disappear at page edges; any crop feels intentional.
- Scenic backgrounds are delivered as one full-screen image asset, not assembled from CSS gradients or decorative HTML fragments.
- Gameplay images keep at least 20px horizontal margin on both sides of the 390px H5 canvas unless explicitly marked full-bleed.
- Gameplay images are vertically centered in the gap between the reward/status card and the bottom action area.
- Gameplay image generation used the calculated framework box and target aspect ratio before generation; the asset was not generated arbitrarily and then forced into place.

## Component Quality

- Every page module has been checked against `component-library/components/` before custom code was written.
- Existing components are used for matching modules such as navigation, asset/reward cards, primary title, action buttons, share panel, dialog, and toast.
- Lottery, blind box, spin, scratch, or task-claim reward results use the Dialog component and explicitly show the reward amount; they are not handled by Toast alone.
- Any custom page-specific component is justified by a documented component gap in PageBuildSpec.
- Campaign data is config-driven.
- Presentational components do not contain business thresholds or copy constants.
- Repeated UI is extracted into typed components.
- Pages that need app-shell navigation use the shared `TopNavigation` component contract instead of a one-off page-specific navigation bar.
- `TopNavigation` preserves the selected Figma variant's required children: status bar, nav row, left action, right action group, individual action buttons, and title area.
- Navigation icons are visually centered inside their 32 x 32 circular buttons.
- Primary campaign title is delivered as a title art image asset for illustrated activity pages.
- Countdown secondary info is rendered as plain configurable text such as `过期时间：3d:5h:44m` with no pill/background and is driven by a real timer that clamps at zero.
- Countdown subtitle uses TUX P3: 12px font size, 16px line height, 400 regular weight.
- Canonical `single-gameplay-conversion-page` header spacing is 0px from primary title to countdown subtitle and 4px from countdown subtitle to `AssetImage`.
- Loading, disabled, completed, claimed, and empty states exist when relevant.

## Visual Quality

- Typography follows the strict non-color TUX scale: allowed sizes only, fixed line heights, weights 400/600/700 unless a locked Figma layer overrides them.
- Letter spacing is `0` for all normal UI text.
- Spacing follows the 4px grid: 4/8/12/16/20/24/32 unless a locked Figma component specifies another value.
- Interactive targets are at least 44 x 44px.
- Reward numbers and CTAs have strong hierarchy.
- Palette has at least one meaningful supporting accent.
- Decorative effects do not compete with content or gameplay.
- Background scene elements feel coherent and do not look like isolated or unfinished CSS fragments.
- Header/title art does not visually occlude `TopNavigation` status content, back action, title area, or right actions. If the title overlaps the nav structure, the overlap has been checked in the rendered page.

## Code Quality

- TypeScript props are explicit.
- No magic reward amounts inside reusable components.
- Interaction handlers are passed as callbacks.
- Analytics can be attached at page/container level.

## Non-Color TUX Mechanical Scan

- No `font-size` outside 32/24/20/17/16/15/14/13/12/11/10px unless the rule is inside a locked Figma component.
- No `font-weight` outside 400/600/700 unless the rule is inside a locked Figma component.
- No non-zero `letter-spacing`.
- No spacing/padding/gap values outside 4/8/12/16/20/24/32px unless inside a locked Figma component.
- No color-token or palette audit is required from `tt-impeccable`; this Skill intentionally did not copy color rules.

```

### skills/vibe-activity-page/references/responsive.md

```markdown
# Responsive Rules

Use the strict non-color responsive rules copied from local `tt-impeccable`.

## Canvas Modes

### Fixed Figma H5

Use this when the user references a Figma H5 design or locked visual components.

- Canonical canvas: 390px wide.
- Use the Figma canvas height exactly when provided, e.g. 390 x 844.
- Do not add desktop breakpoints.
- Do not reflow locked components.
- For viewports narrower than 390px, scale the whole canvas proportionally.
- For wider desktop preview, center the 390px canvas.

### Free Layout H5

Use this when no Figma canvas/component is specified.

- Base styles are mobile-first at 390px.
- Page horizontal padding starts at 16px and may increase only for web adaptation.
- Font sizes and component heights remain fixed across widths.
- Avoid desktop-only interaction patterns.

## Safe Area

Always include:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

Rules:
- Minimum status bar safe area: 44px.
- Minimum home indicator safe area: 34px.
- Bottom fixed bars must account for `env(safe-area-inset-bottom)`.
- Use `max(34px, env(safe-area-inset-bottom))` when the bar is part of the page shell.

## Interaction Mode

- Assume touch on mobile.
- Every interactive target must have at least a 44 x 44px tap area.
- Never rely on hover for core behavior.
- On web adaptation, hover may change opacity/background only, not layout.

## Testing Widths

For fixed Figma H5:
- 390px canonical
- 320px scaled preview

For free-layout H5:
- 320px
- 390px
- 414px
- 430px

```

### skills/vibe-activity-page/references/spacing.md

```markdown
# Spacing and Layout

Use the strict non-color spacing and layout rules copied from local `tt-impeccable`. Locked Figma components override these rules only inside that component.

## Canvas

- Canonical mobile H5 canvas: 390px width.
- Fixed Figma-derived pages should use the exact Figma canvas and absolute component coordinates, then scale the entire canvas down for narrower screens.
- For non-Figma/free-layout pages, use 16px horizontal page padding.

## 4px Spacing Grid

Only these spacing, padding, and gap values are allowed outside locked Figma components:

| Step | Value | Use |
|---|---:|---|
| xs | 4px | micro spacing, icon internal gaps |
| sm | 8px | tight inline gaps, badge padding |
| md | 12px | inner element padding |
| base | 16px | page padding, standard section gap |
| lg | 20px | between groups inside a section |
| xl | 24px | between sections |
| 2xl | 32px | between major page blocks |

Rules:
- Do not use off-grid values such as 5, 6, 10, 14, 15, 18, 22, 26, 28, 30px for spacing unless copied from a locked Figma component.
- 32px is the ceiling for mobile spacing outside fixed art assets.
- Prefer `gap` for sibling spacing instead of margins.
- Use spacing and surface changes for grouping. Borders/dividers are last resort.

## Component Dimensions

- Minimum touch target: 44 x 44px.
- Full-width sticky CTA: 52px height.
- Mid-page full-width button: 44px height.
- Inline/grouped button: 32px height.
- Input: 40px height.
- Navigation bar: 44px height, 16px horizontal padding.
- Bottom tab bar: 83px total = 49px visible area + 34px home indicator.

For campaign-specific Figma components such as `AssetImage`, `Btn`, and `ButtonImage1`, use the exact Figma dimensions and internal child positions documented in `components.md`.

## Layout Stability

- Fixed-format elements must have stable dimensions: gameplay objects, grids, counters, CTA bars, task buttons, avatar slots.
- Hover, pressed, loading, active, and claimed states must not change element size.
- If text is translated, center it within its fixed container or adjust copy length; do not resize the locked component.

```

### skills/vibe-activity-page/references/tux-noncolor-visual-rules.md

```markdown
# TUX Non-Color Visual Rules

This file copies the non-color visual discipline from the local `tt-impeccable` skill into the activity-page skill. Do not copy TUX color tokens, brand color rules, or color values from `tt-impeccable`.

Locked Figma components always win inside their own bounds. Everywhere else, these rules are strict.

## Typography

Font stack:

```css
font-family: 'TikTok Sans', system-ui, -apple-system, sans-serif;
```

Allowed type sizes, line heights, and weights:

| Style | Size | Line height | Weights |
|---|---:|---:|---|
| Large Title | 32px | 38px | 700, 600 |
| H1 | 24px | 30px | 700, 600 |
| H2 | 20px | 25px | 700, 600, 400 |
| H3 | 17px | 22px | 700, 600, 400 |
| Headline | 16px | 21px | 700, 600, 400 |
| H4 | 15px | 19px | 700, 600, 400 |
| P1 | 14px | 18px | 600, 400 |
| P2 | 13px | 17px | 600, 400 |
| P3 | 12px | 16px | 600, 400 |
| Small Text 1 | 11px | 14px | 600, 400 |
| Small Text 2 | 10px | 13px | 600, 400 |

Typography rules:
- Use only the listed sizes outside locked Figma text layers.
- Use only weights 400/600/700 outside locked Figma text layers.
- Letter spacing is always `0`.
- No `clamp()`, fluid type, viewport-based type, or custom intermediate sizes.
- Use no more than three distinct text size tiers on one screen outside locked components.
- If `overflow: hidden` is used on a text container, verify line-height is at least `1.0em` and descenders are not clipped.

## Spacing

Use the 4px grid:

| Step | Value |
|---|---:|
| xs | 4px |
| sm | 8px |
| md | 12px |
| base | 16px |
| lg | 20px |
| xl | 24px |
| 2xl | 32px |

Spacing rules:
- 16px horizontal page padding for free-layout mobile pages.
- 32px is the mobile spacing ceiling outside fixed art assets.
- Use `gap` for sibling spacing instead of margins.
- Do not use off-grid spacing unless a locked Figma component specifies it.
- Separate content groups with spacing and surfaces before using borders/dividers.

## Layout

Strict mobile canvas:
- Canonical mobile width is 390px.
- Fixed Figma pages use exact Figma canvas dimensions and component coordinates.
- For narrower widths, scale the entire fixed canvas rather than reflowing locked components.
- For desktop preview, center the 390px canvas.

Free-layout page shell:
- status bar spacer: 44px
- navigation bar: 44px high, 16px horizontal padding
- scrollable content: flex-grown, overflow-y auto
- bottom tab/action area accounts for 34px home indicator

## Component Dimensions

- Minimum touch target: 44 x 44px.
- Sticky bottom CTA: 52px high.
- Mid-page full-width button: 44px high.
- Inline/grouped button: 32px high.
- Input: 40px high.
- Bottom tab bar: 83px total, with 49px visible content and 34px home indicator.
- Loading states must keep component dimensions fixed.

## Interaction And Motion

- Native `<button>` and `<a>` elements first.
- Every interactive element needs default, hover, focus, active, disabled, loading, error, and success states when relevant.
- Active/pressed feedback: transform scale around `0.97`, about 150ms ease.
- Hover is web-only and must not be required for core behavior.
- Focus-visible ring is required for keyboard access.
- Motion is functional only.
- Instant UI feedback: <= 200ms.
- State transitions: 200-300ms.
- Entrance animations: 300ms max.
- Animate only `transform` and `opacity` unless a specific layout pattern requires otherwise.
- Respect `prefers-reduced-motion`.

## QA Scan

Before final delivery:
- Scan for font sizes outside the allowed scale.
- Scan for font weights outside 400/600/700.
- Scan for non-zero letter-spacing.
- Scan for spacing/padding/gap values outside 4/8/12/16/20/24/32 unless they belong to a locked Figma component.
- Confirm all interactive targets have at least a 44 x 44px tap area.
- Confirm fixed Figma components keep exact documented dimensions and child positions.
- Do not run color-token audits from `tt-impeccable`; this activity-page skill owns its color direction separately.

```

### skills/vibe-activity-page/references/typography.md

```markdown
# Typography

Use the strict non-color typography rules copied from the local `tt-impeccable` skill. Do not invent intermediate font sizes, weights, or line heights.

## Font Stack

Use only:

```css
font-family: 'TikTok Sans', system-ui, -apple-system, sans-serif;
```

If TikTok Sans is unavailable, keep the same stack and rely on `system-ui` / `-apple-system`. Do not substitute Inter, Roboto, or another custom font.

## Fixed Type Scale

Only these px sizes are allowed for visible UI text:

| Role | Size | Line height | Weights |
|---|---:|---:|---|
| Large Title | 32px | 38px | 700, 600 |
| H1 | 24px | 30px | 700, 600 |
| H2 | 20px | 25px | 700, 600, 400 |
| H3 | 17px | 22px | 700, 600, 400 |
| Headline | 16px | 21px | 700, 600, 400 |
| H4 | 15px | 19px | 700, 600, 400 |
| P1 | 14px | 18px | 600, 400 |
| P2 | 13px | 17px | 600, 400 |
| P3 | 12px | 16px | 600, 400 |
| Small Text 1 | 11px | 14px | 600, 400 |
| Small Text 2 | 10px | 13px | 600, 400 |

Rules:
- Letter spacing is always `0`.
- Do not use `clamp()`, `vw`, `rem` scale, fluid sizing, or intermediate sizes such as 18px, 22px, 26px, 28px, 30px, 34px, 38px unless a locked Figma component explicitly specifies that value.
- Only weights 400, 600, and 700 are allowed unless a locked Figma text layer explicitly specifies a different weight.
- P1 and smaller do not use 700. Use 600 as the strongest weight.
- Large Title and H1 do not use 400.
- Use no more than three distinct text size tiers on one screen outside locked Figma components.

## Marketing H5 Application

- If the page is based on a locked Figma component, use the Figma text size/line-height inside that component exactly.
- Outside locked components, map marketing page roles to the fixed scale:
  - page title: Large Title or H1
  - section title: H2 or H3
  - card title / button label: Headline or H4
  - body: P1 or P2
  - caption / metadata: P3 or Small Text 1
- Keep copy short and action-oriented.
- Use numerals and units consistently: `100000 coins`, `$10`, `3 chances`.

```

### skills/vibe-activity-page/references/visual-styles/dreamy-cloud-campaign.md

```markdown
# 梦幻云朵活动页

## Status

ready

## 何时使用

适用于短期的激励活动，没有明显地区限制。

## 页面搭建提示词

请帮我实现一个移动端游戏化营销活动页面，视觉风格为 Dreamy Reward Game UI。

页面气质：
- 梦幻、可爱、强奖励感、高刺激、高转化
- 像一个云朵天空中的奖励挑战乐园
- 适合运营活动、任务挑战、邀请好友、奖励翻倍活动

视觉风格：
- 背景使用蓝天、白云、星星、泡泡、柔和光晕
- 色彩使用高饱和糖果色，主色为天空蓝、奶油黄、桃粉、橙红、金色
- 所有卡片使用大圆角、半透明奶油质感、柔和高光
- 按钮使用大尺寸胶囊形渐变按钮，带高光和星星装饰
- 图标和入口像游戏道具按钮，具有浮动感和奖励感
- 弹窗使用强视觉奖励卡片，包含角色、奖励对比、翻倍效果和明确 CTA

## 素材提示词

Use this prompt when generating image assets for this style:

```txt
Create a cute 3D illustration asset for a dreamy gamified reward campaign UI.
Style: toy-like 3D, soft fantasy, candy colors, glossy material, rounded shapes, high dopamine, playful mobile game aesthetic.
Use pastel sky blue, cream yellow, peach pink, orange gradient, golden stars, fluffy clouds, soft glow and sparkles.
The asset should feel cheerful, rewarding, cute, and suitable for a mobile marketing campaign page.
Isolated on transparent background, centered composition, no text, no real brand logo.
Subject: [replace with specific object]
```

Rules:
- Replace `[replace with specific object]` with the concrete asset subject.
- Keep the asset isolated on transparent background.
- Keep the composition centered.
- Do not include text inside the asset.
- Do not include real brand logos.

## 使用限制

必须严格使用上述页面搭建提示词和素材提示词，不要根据风格名自行扩写新的视觉规则。

```

### skills/vibe-activity-page/references/visual-styles/index.md

```markdown
# Visual Style Index

Use this index to choose one visual style before designing open visual zones.

Important rule:
- Do not invent visual styles.
- Do not add temporary styles from model imagination.
- Only use style files that have been explicitly provided or approved by the user.
- If a requested campaign does not clearly match a ready style, ask for direction or use the page structure with minimal neutral styling.

Open visual zones include:
- full-screen background art
- title art
- gameplay asset skin
- reward/status card skin
- CTA surface treatment
- decorative motifs

The selected style must not override strict component layout, component-library contracts, or conversion hierarchy.

## Selection Workflow

1. Read this index first.
2. Choose the closest `ready` style from `Available Styles`.
3. Read only the selected style file.
4. Apply the selected style's `何时使用`, `页面搭建提示词`, and `素材提示词`.
5. If the closest style is `draft`, do not use it as a source of detail. Ask the user to provide the missing style rules.

## Available Styles

| Style | 中文名 | Status | When to use | Read |
| --- | --- | --- | --- | --- |
| `soft-colorful-card` | 柔和彩色卡片风 | ready | 浅色调、柔和、长期运营、欧洲/美国等地区活动 | `references/visual-styles/soft-colorful-card.md` |
| `retro-journal` | 复古手账风 | ready | 日本等地区的长期营销活动 | `references/visual-styles/retro-journal.md` |
| `dreamy-cloud-campaign` | 梦幻云朵活动页 | ready | 短期激励活动，无明显地区限制 | `references/visual-styles/dreamy-cloud-campaign.md` |

## Adding Or Updating Styles

Each style file must use this structure:

```md
# 风格名称

## Status

ready 或 draft

## 何时使用

...

## 页面搭建提示词

...

## 素材提示词

...
```

Only mark a style as `ready` after the user has provided enough concrete rules.

```

### skills/vibe-activity-page/references/visual-styles/retro-journal.md

```markdown
# 复古手账风

## Status

ready

## 何时使用

适合日本等地区的长期营销活动。

## 页面搭建提示词

请实现一个移动端复古集章册风格的 UI 页面，风格关键词为 Cozy Retro Stampbook UI / Paper Texture / Scrapbook / Hand-drawn Collectible App。

视觉风格：
- 背景使用米白色纸张质感，可用 CSS 噪点、径向渐变或半透明纹理模拟
- 主文字使用深咖啡色，不使用纯黑
- 标题使用复古粗衬线或打字机风格字体
- 辅助文字使用等宽字体或复古 serif 字体
- 卡片使用超大圆角，像柔软纸片
- 组件不使用强阴影，主要依靠留白、纸色、透明度和圆角区分层级
- 主色为焦糖棕、咖啡棕、米白、灰米色
- 图像素材以贴纸、水彩、手绘插画为主

## 素材提示词

Use this prompt when generating image assets for this style:

```txt
Create a UI illustration asset for a cozy retro stampbook mobile app.
Style: hand-drawn watercolor, gouache texture, paper grain, warm vintage colors, soft imperfect edges, sticker cutout with white border.
The asset should feel handmade, collectible, cozy, and suitable for a digital scrapbook UI.
Isolated on transparent background.
No real brand logos, no trademarked text, no photorealistic rendering, no 3D style.
Subject: [replace with specific object]
```

Rules:
- Replace `[replace with specific object]` with the concrete asset subject.
- Keep the asset isolated on transparent background.
- Do not include real brand logos or trademarked text.
- Do not use photorealistic rendering.
- Do not use 3D style.

## 使用限制

必须严格使用上述页面搭建提示词和素材提示词，不要根据风格名自行扩写新的视觉规则。

```

### skills/vibe-activity-page/references/visual-styles/soft-colorful-card.md

```markdown
# 柔和彩色卡片风

## Status

ready

## 何时使用

适用于浅色调、柔和、长期运营的欧洲、美国等地区活动。

适合需要轻松、干净、长期可运营、不强刺激、不重游戏赌场感的活动页面。

## 页面搭建提示词

- 超大黑色标题
- 大量留白
- 柔和浅色背景（偏白、浅紫、浅蓝、浅黄、浅绿、浅粉）
- 大圆角卡片（20~32px）
- UI 元素偏圆润，按钮、tab、输入框都使用胶囊或圆角矩形
- 低对比、柔和阴影，尽量不要重阴影
- 数据图表也使用圆角图形
- 整体干净简洁，但带一点 playful 的插画和色块变化
- 标题非常大，字重高，形成强视觉锚点
- 页面基底很干净，但通过浅色大卡片制造层次
- 卡片内部元素简化，不拥挤
- 图表不要科技感，不要深色，不要复杂网格线
- 按钮像 iOS 风格的圆形或胶囊按钮
- 小图标使用简洁线性风格
- 插画采用可爱、低复杂度、偏装饰性的方式
- 多使用圆、半圆、弧线、胶囊形
- 卡片之间保持较大间距，视觉节奏轻松

## 素材提示词

Use this prompt when generating image assets for this style:

```txt
Create a UI-friendly illustration asset for a mobile learning dashboard.
Style: soft, playful, rounded, minimal, clean, friendly, modern.
Use pastel colors and simple shapes.
The asset should be decorative and suitable for an app card.
Isolated on transparent background.
Subject: [替换成具体内容]
```

Rules:
- Replace `[替换成具体内容]` with the concrete asset subject.
- Keep the asset decorative and suitable for an app card.
- Use transparent background when the asset is placed inside a card.
- Do not add text inside generated assets unless the user explicitly asks.

```

### skills/vibe-activity-page/SKILL.md

```markdown
---
name: vibe-activity-page
description: Use this skill to create, refactor, or review mobile-first marketing activity links for incentive, referral, lottery, cashback, task reward, leaderboard, check-in, blind box, and campaign H5 experiences. It designs the primary user journey, not only a single page, and provides reusable page/link structures, typography, spacing, component, conversion, responsive, QA, code, and Figma guidance for high-conversion operational activity flows.
---

# Vibe Activity Page

## Goal

Build high-conversion mobile H5 activity links from reusable campaign patterns while keeping every page state componentized, responsive, and easy to re-skin for future campaigns.

This skill designs a complete primary conversion chain, not only a static landing page. Code deliverables and Figma deliverables must both implement the main user journey: entry state, key interaction states, reward/state changes, feedback states, and the final conversion state.

## Contract Compatibility

Consumes:
- StrategyBrief v1.x when used inside the campaign skill suite.

Produces:
- PageBuildSpec v1.x.
- PageCode.
- PrimaryLinkSpec: the main journey states, triggers, and outcomes.
- FigmaLinkSpec when a Figma design is requested or already exists.

Rules:
- Read `../../contracts/strategy-brief.schema.json` and `../../contracts/page-build-spec.schema.json` when working from upstream strategy artifacts.
- Use `../../fixtures/` for local self-test examples.
- Reuse components from `../../component-library/components/` before creating page-specific modules.
- Strict component contracts live in `../../component-library/components/*/component.md`.
- Gameplay asset box must be calculated before asset generation.
- Visual style decisions are owned by this skill unless the user explicitly routes visual work elsewhere.
- Do not depend on another skill's internal files.

## When Starting

1. Identify the activity type:
   - invite referral
   - invite lottery
   - lottery wheel
   - cashback or cashout
   - task reward
   - leaderboard
   - check-in
   - blind box
   - progress accumulation
2. Pick the closest page framework from `references/page-structures/index.md`. If the user specifies a custom structure, use it while preserving the quality bar.
3. Define the primary link before designing the first screen.
   - Identify the main conversion goal: invite, spin/draw, earn, cash out, complete task, claim, rank up, check in, etc.
   - List the required states in order: initial page, trigger, in-progress feedback, result state, threshold/ready state, and final conversion destination.
   - Exclude secondary navigation branches from the primary link unless the user asks for them.
4. Load only the reference files needed for the task:
   - `references/page-structures/index.md` first, then only the selected page-structure file from `references/page-structures/`
   - `references/visual-styles/index.md` first, then only the selected visual-style file from `references/visual-styles/`
   - `references/tux-noncolor-visual-rules.md` for strict typography, spacing, layout, responsive, motion, and interaction sizing rules copied from local `tt-impeccable` with color rules excluded
   - `references/typography.md` for font scale and text hierarchy
   - `references/spacing.md` for layout rhythm, spacing, and component dimensions
   - `references/components.md` for component selection rules and the component-library index
   - `references/conversion-patterns.md` for CTA, reward, and urgency patterns
   - `references/responsive.md` for mobile viewport behavior
   - `references/code-to-figma-restoration.md` when converting an implemented page back into a Figma design draft
   - `references/figma-interaction-flow-extension.md` when extending a generated Figma page into downstream interaction flows
   - `references/qa-checklist.md` before final delivery or review
5. Search `../../component-library/components/` for every page module in the planned structure. Map each module to an existing component when possible.
6. For a new link, start from the closest file in `templates/` and adapt it instead of building from scratch.

## Default Quality Bar

- Mobile first, with a 375px baseline.
- Default user-facing language is English for all countries and regions unless the user explicitly requests another language.
- Canonical H5 canvas is 390px wide. For fixed Figma-derived activity pages, use the Figma canvas size exactly and scale the whole canvas for narrower screens.
- Support 320px and 390px at minimum; only add 414px/430px adaptations when the page is not a fixed Figma canvas.
- Strong CTA hierarchy above and below the main gameplay.
- Main conversion link is implemented, not merely described.
- Every primary trigger has an implemented result: toast, dialog, panel, animation, progress update, state change, page transition, or destination page.
- Reward-result feedback from lottery, blind box, spin, scratch, or task-claim flows must use the catalog `Dialog` component and explicitly show the reward amount; do not use Toast for reward-result feedback.
- Generated code must include the main interaction states and the state transitions between them.
- Figma drafts must include the main page plus downstream state frames for the primary link, connected and annotated when the user asks for Figma output.
- Figma drafts must preserve reusable component source format. If the existing Figma component source for any module is a `FRAME`, copy that original frame into the page or flow and override only allowed copy, image, color, state, and visibility. Do not convert source frames into new Figma components, component sets, instances, or wrappers.
- Config-driven copy, reward amounts, task rows, rules, and button labels.
- No hardcoded business data inside presentational UI components.
- Page code must be componentized by responsibility: shell/navigation, header, progress/reward card, gameplay, action area, share panel, modal/feedback layers, and state hooks/helpers.
- Existing component reuse is required before custom implementation. Use catalog components for navigation, asset cards, primary titles, buttons/action areas, share panels, dialog, toast, and any other matching content. Create custom components only for uncovered gaps such as a campaign-specific gameplay object, and record the gap in PageBuildSpec.
- Use H5 by default unless the user explicitly asks for React or a target app stack already exists.
- Do not write new runnable campaign cases into this Skill repository. Create new cases under `/Users/bytedance/Documents/Incentive Page Cases/{case-name}/` unless the user explicitly asks to update the curated examples in this repo.
- Activity-page visual assets must be PNG by default. SVG is allowed only for icons, such as navigation icons, share-channel icons, and compact UI action glyphs. Backgrounds, title art, gameplay objects, stickers, decorative anchors, generated visuals, and Figma restoration image fills must be PNG.
- Reusable components for progress, gameplay, rewards, tasks, rules, and bottom actions.
- Reuse the shared `TopNavigation` component for app-shell navigation. For `single-gameplay-conversion-page`, this navigation is a fixed structure and must follow the Figma `导航栏组件` contract.
- Visual design uses one selected `ready` style from `references/visual-styles/index.md` unless the user provides a stronger art direction. Do not invent missing style rules. Draft visual styles are placeholders and must not be completed from model imagination.
- Realistic empty, loading, completed, disabled, and claimed states when they affect conversion.
- No text overflow, clipped CTA labels, or interaction targets under 44px.

## Template Selection

- Use `templates/SingleGameplayConversionPage.tsx` for one-gameplay pages such as spin wheel, shoot, scratch card, blind box, slot machine, card draw, treasure chest, gacha, jackpot, or lucky number.
- Use `templates/SingleGameplayConversionPage.tsx` as the starting point for `progress-accumulation-conversion-page` when no dedicated template exists, then replace the core gameplay module with a config-driven progress container, action point button, reward dialog, and reset state.
- Use `templates/InviteLotteryPage.tsx` for invite-to-play, draw rewards, spin wheel, grid lottery, or friend-help pages.
- Use `templates/CashbackPage.tsx` for cashout progress, coin-to-cash, withdrawal threshold, and balance growth pages.
- Use `templates/TaskRewardPage.tsx` for task center, daily missions, reward ladder, check-in, or completion progress pages.
- Use `templates/NurtureProgressPage.tsx` for reactivation and retention pages centered on companion nurture, daily ritual actions, progress savings, and milestone rewards.

If the requested activity combines patterns, compose sections from multiple templates while preserving one clear primary CTA.

## Build Workflow

1. Select or define the activity link framework. State which parts are fixed components and which parts are open for AI adaptation.
2. Define the PrimaryLinkSpec before code:
   - `states`: named full-page states in journey order.
   - `triggers`: user actions or system events that move from one state to the next.
   - `feedback`: toast, dialog, panel, loading, animation, disabled, success, or error feedback.
   - `stateData`: reward count, progress amount, spin chances, task completion, eligibility, or cashout readiness.
   - `finalConversion`: where the journey ends and what success looks like.
3. Define a page config object first: campaign title, reward unit, thresholds, progress, tasks, CTA labels, rules, link states, and visual theme.
   - Use English copy by default for all countries and regions unless localization is explicitly requested.
   - For visual design, select one `ready` style from `references/visual-styles/index.md`, read its specific file, and state it briefly. If only a `draft` style matches, ask the user for the missing `何时使用`, `页面搭建提示词`, and `素材提示词` instead of inventing details.
   - If the user provides reference images, extract the reusable style language, not the literal objects in the images. Add a new style entry only when the style can apply to different content.
4. Build a component map before code:
   - Check `../../component-library/components/` first, then use `references/components.md` only for mapping guidance and custom/open module rules.
   - Assign each planned module to an existing component first, such as `TopNavigation`, `AssetCard`, `PrimaryTitle`, button/action components, `SharePanel`, `Dialog`, and `Toast`.
   - Mark only truly missing modules as custom, usually the AI-designed gameplay object.
5. Build the page shell from the selected framework.
6. Implement strict components exactly according to the framework/component contracts.
7. Implement the primary link in code:
   - Add event handlers for the primary CTA and required secondary trigger inside the main journey.
   - Add complete state updates, not dead buttons.
   - Model state transitions with explicit state data so reward/progress/chance changes are visible.
   - Implement toast/dialog/panel/destination states that belong to the main link.
   - Keep presentational components free of hardcoded business data.
8. Use AI adaptation only for open areas: selected visual style, theme, background, copy tone, reward illustration style, and gameplay skin.
   - For scenic activity pages, use a single full-screen PNG background image asset instead of building the main background scene with HTML/CSS.
   - For decorative primary campaign titles, use a PNG title art image asset instead of live HTML text.
   - For gameplay objects such as lottery machines, gacha machines, slot machines, treasure chests, and highly illustrated draw devices, use a generated or designer-provided PNG raster asset instead of rebuilding the object with HTML/CSS pieces.
   - The gameplay asset should be a single image element inside the gameplay area unless the user asks for additional internal UI structure.
   - For spin-wheel gameplay that needs real rotation, use the `SpinWheelImagePair` open-module rule from `references/components.md`: one rotating wheel-body image plus one fixed pointer image. Do not bake the pointer into the rotating wheel image.
9. Extract repeated UI into small components with typed props.
10. Apply `tux-noncolor-visual-rules.md` first, then apply typography, spacing, and responsive rules from references. Fixed Figma component specs override generic layout tokens only inside that component.
11. Add interaction states and analytics-friendly callbacks.
12. If producing or updating Figma, build the same primary link in Figma:
   - Use the main page as the first frame.
   - Create downstream full-page state frames for each primary journey step.
   - Use existing Figma component sources whenever available. If the source is a `FRAME`, copy the frame directly and modify the copied frame within the component contract. Use a true instance only when the source is already a component or instance and supports the required overrides.
   - Follow `references/code-to-figma-restoration.md`, `references/figma-interaction-flow-extension.md`, and any active interaction-flow skill rules.
   - Do not create Figma-only states that are missing from code unless the user explicitly asks for future-state exploration.
13. Run the QA checklist before final response.

## Primary Link Defaults

Use these defaults when the user gives only a business goal:

- Invite lottery / spin wheel: `Main page -> invite/share panel -> invite success/chances added -> spin click -> spinning state -> reward result -> progress/asset updated -> cashout-ready state -> cashout page`.
- Cashback / cashout: `Main page -> task/earn action -> balance/progress update -> below-threshold feedback or ready state -> cashout click -> cashout destination`.
- Task reward: `Main page -> task click -> task in progress/completed -> reward claim -> reward credited -> next task or final claim state`.
- Check-in: `Main page -> check-in click -> success feedback -> streak/progress update -> reward claim or next-day state`.
- Leaderboard: `Main page -> participation action -> score/rank update -> reward tier state -> claim or invite-boost branch`.
- Progress accumulation: `Main page -> action point click -> progress increases on container -> full progress reached -> reward Dialog -> progress resets or claimed state`.
- Nurture progress: `Main page -> daily nurture action -> action feedback -> progress card update -> milestone state update -> next return prompt`.

Adjust the chain to the actual mechanics, but always keep one clear primary path from entry to conversion.

## Review Workflow

When reviewing an existing activity page, prioritize:
- Broken conversion flow or unclear primary CTA
- Missing main-link states or buttons without implemented outcomes
- Mismatch between code states and Figma state frames
- Text hierarchy, overflow, and small-screen failures
- Hardcoded campaign data in reusable components
- Missing states for disabled, completed, claimed, loading, or error flows
- Inconsistent spacing, shadow, or reward visual treatment

```

### skills/vibe-activity-page/templates/CashbackPage.tsx

```tsx
type CashoutTask = {
  id: string;
  title: string;
  reward: string;
  status: "available" | "completed" | "claimed";
  actionLabel: string;
};

type CashbackConfig = {
  title: string;
  subtitle: string;
  balance: number;
  threshold: number;
  cashValue: string;
  tasks: CashoutTask[];
};

const config: CashbackConfig = {
  title: "金币满额免费提现",
  subtitle: "完成任务攒金币，达到门槛即可发起提现",
  balance: 76000,
  threshold: 100000,
  cashValue: "¥7.60",
  tasks: [
    { id: "invite", title: "邀请 1 位好友", reward: "+12000 金币", status: "available", actionLabel: "去邀请" },
    { id: "watch", title: "浏览活动 30 秒", reward: "+3000 金币", status: "completed", actionLabel: "领取" },
    { id: "share", title: "分享活动页", reward: "+5000 金币", status: "claimed", actionLabel: "已领取" },
  ],
};

export function CashbackPage() {
  const progress = Math.min(config.balance / config.threshold, 1);
  const remaining = Math.max(config.threshold - config.balance, 0);
  const canWithdraw = remaining === 0;

  return (
    <main className="min-h-screen bg-[#101114] text-white">
      <div className="mx-auto min-h-screen max-w-[430px] px-4 pb-[calc(96px+env(safe-area-inset-bottom))] pt-5">
        <header>
          <p className="w-fit rounded-full bg-[#25f4ee] px-3 py-1 text-xs font-black text-[#101114]">
            提现进度
          </p>
          <h1 className="mt-3 text-[32px] font-black leading-[1.08]">{config.title}</h1>
          <p className="mt-2 text-sm font-medium text-white/72">{config.subtitle}</p>
        </header>

        <section className="mt-5 rounded-[20px] bg-white p-5 text-[#101114] shadow-[0_16px_36px_rgba(37,244,238,0.16)]">
          <p className="text-xs font-bold text-[#5f666d]">当前可兑现金</p>
          <strong className="mt-1 block text-[44px] font-black leading-none">{config.cashValue}</strong>
          <div className="mt-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-[#5f666d]">金币余额</p>
              <p className="text-lg font-black">{config.balance.toLocaleString()}</p>
            </div>
            <p className="text-xs font-bold text-[#fe2c55]">
              {canWithdraw ? "已满足提现条件" : `还差 ${remaining.toLocaleString()} 金币`}
            </p>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#e7e9ee]">
            <div className="h-full rounded-full bg-[#fe2c55]" style={{ width: `${progress * 100}%` }} />
          </div>
          <p className="mt-3 text-xs font-medium text-[#5f666d]">
            满 {config.threshold.toLocaleString()} 金币可提现，到账时间以活动规则为准
          </p>
        </section>

        <section className="mt-5">
          <h2 className="text-xl font-black">继续赚金币</h2>
          <div className="mt-3 space-y-2">
            {config.tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 p-3">
                <div>
                  <p className="text-sm font-bold">{task.title}</p>
                  <p className="mt-1 text-xs font-bold text-[#25f4ee]">{task.reward}</p>
                </div>
                <button
                  type="button"
                  className="h-10 min-w-[76px] rounded-xl bg-white px-3 text-sm font-black text-[#101114] disabled:bg-white/20 disabled:text-white/45"
                  disabled={task.status === "claimed"}
                >
                  {task.actionLabel}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-[20px] bg-white/10 p-4">
          <h2 className="text-lg font-black">提现说明</h2>
          <p className="mt-2 text-sm leading-6 text-white/72">
            达到提现门槛后可发起申请，奖励状态会根据审核和到账结果更新。
          </p>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 mx-auto max-w-[430px] bg-[#101114]/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.28)]">
        <button type="button" className="h-12 w-full rounded-2xl bg-[#fe2c55] text-base font-black text-white">
          {canWithdraw ? "马上提现" : "继续赚金币"}
        </button>
      </nav>
    </main>
  );
}


```

### skills/vibe-activity-page/templates/InviteLotteryPage.tsx

```tsx
import { useMemo, useState } from "react";

type RewardItem = {
  id: string;
  label: string;
  value: string;
};

type InviteLotteryConfig = {
  title: string;
  subtitle: string;
  coinBalance: number;
  cashoutThreshold: number;
  inviteCount: number;
  nextInviteReward: string;
  chances: number;
  rewards: RewardItem[];
  primaryCta: string;
  secondaryActions: string[];
};

const config: InviteLotteryConfig = {
  title: "邀请好友抽好礼",
  subtitle: "好友助力越多，抽中金币奖励机会越高",
  coinBalance: 68000,
  cashoutThreshold: 100000,
  inviteCount: 3,
  nextInviteReward: "+1 次抽奖机会",
  chances: 2,
  rewards: [
    { id: "coins-1", label: "金币", value: "888" },
    { id: "cash-1", label: "现金", value: "¥1" },
    { id: "coins-2", label: "金币", value: "1888" },
    { id: "thanks", label: "鼓励奖", value: "再来" },
    { id: "coins-3", label: "金币", value: "5888" },
    { id: "cash-2", label: "现金", value: "¥5" },
  ],
  primaryCta: "立即邀请",
  secondaryActions: ["我的奖励", "活动规则", "去提现"],
};

export function InviteLotteryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const progress = Math.min(config.coinBalance / config.cashoutThreshold, 1);

  const gapText = useMemo(() => {
    const gap = Math.max(config.cashoutThreshold - config.coinBalance, 0);
    return gap === 0 ? "已达到提现门槛" : `还差 ${gap.toLocaleString()} 金币可提现`;
  }, []);

  const draw = () => {
    if (config.chances <= 0) return;
    setActiveIndex(Math.floor(Math.random() * config.rewards.length));
  };

  return (
    <main className="min-h-screen bg-[#fff3d1] text-[#321607]">
      <div className="mx-auto min-h-screen max-w-[430px] px-4 pb-[calc(96px+env(safe-area-inset-bottom))] pt-5">
        <header className="space-y-2">
          <p className="w-fit rounded-full bg-[#fe2c55] px-3 py-1 text-xs font-bold text-white">
            邀请得机会
          </p>
          <h1 className="text-[32px] font-black leading-[1.08]">{config.title}</h1>
          <p className="text-sm font-medium text-[#7a3b15]">{config.subtitle}</p>
        </header>

        <section className="mt-5 rounded-[20px] bg-white p-4 shadow-[0_12px_28px_rgba(156,70,12,0.18)]">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-[#9b5a16]">当前金币</p>
              <strong className="text-[36px] font-black leading-none">
                {config.coinBalance.toLocaleString()}
              </strong>
            </div>
            <span className="rounded-full bg-[#fff0c2] px-3 py-1 text-xs font-bold text-[#a65300]">
              满 {config.cashoutThreshold.toLocaleString()} 可提现
            </span>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#f4dfaa]">
            <div className="h-full rounded-full bg-[#fe2c55]" style={{ width: `${progress * 100}%` }} />
          </div>
          <p className="mt-2 text-sm font-bold text-[#fe2c55]">{gapText}</p>
        </section>

        <section className="mt-5 rounded-[20px] bg-[#321607] p-3 text-white">
          <div className="mb-3 flex items-center justify-between px-1">
            <h2 className="text-xl font-black">幸运 6 格抽奖</h2>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
              剩余 {config.chances} 次
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {config.rewards.map((reward, index) => (
              <button
                key={reward.id}
                type="button"
                className={[
                  "aspect-square rounded-2xl border-2 p-2 text-center transition",
                  activeIndex === index
                    ? "border-[#fe2c55] bg-[#ffe66d] text-[#321607]"
                    : "border-white/10 bg-white text-[#321607]",
                ].join(" ")}
                onClick={() => setActiveIndex(index)}
              >
                <span className="block text-xs font-bold text-[#9b5a16]">{reward.label}</span>
                <strong className="mt-1 block text-lg font-black">{reward.value}</strong>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="mt-3 h-12 w-full rounded-2xl bg-[#fe2c55] text-base font-black text-white disabled:bg-white/25"
            disabled={config.chances <= 0}
            onClick={draw}
          >
            {config.chances > 0 ? "立即抽奖" : "邀请好友得机会"}
          </button>
        </section>

        <section className="mt-5 rounded-[20px] bg-white p-4">
          <h2 className="text-lg font-black">邀请进度</h2>
          <div className="mt-3 flex items-center justify-between rounded-2xl bg-[#fff7df] p-3">
            <div>
              <p className="text-sm font-bold">已邀请 {config.inviteCount} 位好友</p>
              <p className="mt-1 text-xs font-medium text-[#8b5a24]">再邀请 1 位可获得 {config.nextInviteReward}</p>
            </div>
            <button type="button" className="h-10 rounded-xl bg-[#321607] px-4 text-sm font-black text-white">
              去邀请
            </button>
          </div>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 mx-auto max-w-[430px] bg-white/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-[1fr_1fr_1.45fr] gap-2">
          {config.secondaryActions.slice(0, 2).map((action) => (
            <button key={action} type="button" className="h-12 rounded-2xl bg-[#fff0c2] text-sm font-black text-[#7a3b15]">
              {action}
            </button>
          ))}
          <button type="button" className="h-12 rounded-2xl bg-[#fe2c55] text-base font-black text-white">
            {config.primaryCta}
          </button>
        </div>
      </nav>
    </main>
  );
}


```

### skills/vibe-activity-page/templates/NurtureProgressPage.tsx

```tsx
import { useMemo, useState } from "react";

type NurtureTaskStatus = "available" | "completed" | "claimed" | "locked";

type NurtureTask = {
  id: string;
  title: string;
  description: string;
  reward: number;
  status: NurtureTaskStatus;
  actionLabel: string;
};

type Milestone = {
  id: string;
  label: string;
  target: number;
  reward: string;
};

const pageConfig = {
  title: "Daily Companion Savings",
  subtitle: "Grow together a little every day",
  companionName: "Momo",
  rewardUnit: "Stars",
  initialProgress: 42,
  dailyGain: 8,
  maxProgress: 100,
  primaryAction: "Feed Today",
  completedAction: "Come Back Tomorrow",
  nextReturnCopy: "Next nurture window opens tomorrow",
  tasks: [
    {
      id: "check-in",
      title: "Check in",
      description: "Start today's ritual",
      reward: 3,
      status: "available",
      actionLabel: "Do",
    },
    {
      id: "watch",
      title: "Visit featured content",
      description: "Spend a short moment with today's pick",
      reward: 5,
      status: "available",
      actionLabel: "Go",
    },
    {
      id: "gift",
      title: "Send a gentle cheer",
      description: "Optional co-nurture action",
      reward: 4,
      status: "locked",
      actionLabel: "Locked",
    },
  ] satisfies NurtureTask[],
  milestones: [
    { id: "d1", label: "Today", target: 25, reward: "Small star pack" },
    { id: "d3", label: "Day 3", target: 55, reward: "Companion badge" },
    { id: "d7", label: "Day 7", target: 100, reward: "Ceremony gift" },
  ] satisfies Milestone[],
};

function clampProgress(value: number) {
  return Math.max(0, Math.min(pageConfig.maxProgress, value));
}

export function NurtureProgressPage() {
  const [progress, setProgress] = useState(pageConfig.initialProgress);
  const [hasNurturedToday, setHasNurturedToday] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const nextMilestone = useMemo(
    () => pageConfig.milestones.find((item) => progress < item.target) ?? pageConfig.milestones.at(-1),
    [progress],
  );

  const progressPercent = clampProgress(progress);

  function handleNurture() {
    if (hasNurturedToday) {
      setFeedback(pageConfig.nextReturnCopy);
      return;
    }

    const nextProgress = clampProgress(progress + pageConfig.dailyGain);
    setProgress(nextProgress);
    setHasNurturedToday(true);
    setFeedback(`+${pageConfig.dailyGain} ${pageConfig.rewardUnit}. ${pageConfig.companionName} is growing.`);
  }

  return (
    <main className="min-h-screen bg-[#f8f4ff] text-[#16131f]">
      <div className="mx-auto min-h-screen max-w-[430px] px-4 pb-[calc(104px+env(safe-area-inset-bottom))] pt-5">
        <header className="rounded-[24px] bg-white p-5 shadow-[0_12px_28px_rgba(54,38,84,0.10)]">
          <p className="text-xs font-black uppercase tracking-[0.08em] text-[#7d5ab8]">Daily ritual</p>
          <h1 className="mt-2 text-[30px] font-black leading-[1.08]">{pageConfig.title}</h1>
          <p className="mt-2 text-sm font-semibold text-[#645b73]">{pageConfig.subtitle}</p>
        </header>

        <section className="mt-4 rounded-[22px] bg-white p-4 shadow-[0_10px_24px_rgba(54,38,84,0.08)]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-[#7a7284]">Current growth</p>
              <strong className="mt-1 block text-3xl font-black">{progressPercent}%</strong>
            </div>
            <div className="rounded-2xl bg-[#fff4cf] px-3 py-2 text-right">
              <p className="text-[11px] font-bold text-[#8a6515]">Next milestone</p>
              <p className="text-sm font-black text-[#3a2a05]">{nextMilestone?.label}</p>
            </div>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#eee9f6]">
            <div className="h-full rounded-full bg-[#8f6cff]" style={{ width: `${progressPercent}%` }} />
          </div>
          <p className="mt-2 text-xs font-semibold text-[#746b82]">
            {nextMilestone ? `${Math.max(0, nextMilestone.target - progressPercent)}% to ${nextMilestone.reward}` : "All milestones completed"}
          </p>
        </section>

        <section className="mt-4 rounded-[28px] bg-[#efe7ff] p-5 text-center">
          <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-white shadow-[inset_0_-12px_24px_rgba(93,65,150,0.12),0_18px_32px_rgba(70,42,122,0.18)]">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#ffd9ec] text-5xl font-black text-[#7b3d68]">
              {pageConfig.companionName.slice(0, 1)}
            </div>
          </div>
          <h2 className="mt-4 text-xl font-black">Care for {pageConfig.companionName}</h2>
          <p className="mt-1 text-sm font-semibold text-[#625873]">One small action keeps today's progress alive.</p>
          <button
            type="button"
            onClick={handleNurture}
            className="mt-4 h-12 w-full rounded-2xl bg-[#16131f] text-base font-black text-white"
          >
            {hasNurturedToday ? pageConfig.completedAction : pageConfig.primaryAction}
          </button>
          {feedback ? <p className="mt-3 text-sm font-bold text-[#6f4fc6]">{feedback}</p> : null}
        </section>

        <section className="mt-4">
          <h2 className="text-lg font-black">Small Daily Rituals</h2>
          <div className="mt-3 space-y-2">
            {pageConfig.tasks.map((task) => {
              const disabled = task.status === "locked" || task.status === "claimed";
              return (
                <article key={task.id} className="rounded-[18px] bg-white p-4 shadow-[0_8px_20px_rgba(54,38,84,0.07)]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-black">{task.title}</h3>
                      <p className="mt-1 text-xs font-semibold text-[#6b6378]">{task.description}</p>
                      <p className="mt-1 text-xs font-black text-[#8f6cff]">+{task.reward} {pageConfig.rewardUnit}</p>
                    </div>
                    <button
                      type="button"
                      className="h-10 min-w-[72px] rounded-xl bg-[#efe7ff] px-3 text-sm font-black text-[#5c3db0] disabled:bg-[#eceaf0] disabled:text-[#9a94a7]"
                      disabled={disabled}
                    >
                      {task.actionLabel}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-4 rounded-[22px] bg-white p-4">
          <h2 className="text-lg font-black">Milestone Path</h2>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {pageConfig.milestones.map((milestone) => {
              const reached = progressPercent >= milestone.target;
              return (
                <div key={milestone.id} className={reached ? "rounded-2xl bg-[#e9fff5] p-3" : "rounded-2xl bg-[#f5f2fa] p-3"}>
                  <p className="text-xs font-black">{milestone.label}</p>
                  <p className="mt-1 text-[11px] font-semibold text-[#746b82]">{milestone.reward}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 mx-auto max-w-[430px] bg-white/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.12)]">
        <button type="button" onClick={handleNurture} className="h-12 w-full rounded-2xl bg-[#fe2c55] text-base font-black text-white">
          {hasNurturedToday ? pageConfig.completedAction : pageConfig.primaryAction}
        </button>
      </nav>
    </main>
  );
}

```

### skills/vibe-activity-page/templates/SingleGameplayConversionPage.tsx

```tsx
import { type ReactNode, useEffect, useState } from "react";

type GameplayKind =
  | "spin-wheel"
  | "soccer-shoot"
  | "scratch-card"
  | "slot-machine"
  | "blind-box"
  | "treasure-chest"
  | "gacha"
  | "jackpot";

type SingleGameplayConfig = {
  title: string;
  titleAssetUrl: string;
  backgroundAssetUrl: string;
  countdownLabel: string;
  countdownSeconds: number;
  gameplayKind: GameplayKind;
  avatarUrl?: string;
  balanceValue: string;
  thresholdValue: string;
  remainingValue: string;
  progress: number;
  chances: number;
  gameplayAssetUrl: string;
  rewards: Array<{
    id: string;
    label: string;
    value: string;
  }>;
};

const config: SingleGameplayConfig = {
  title: "돌리고 받으세요",
  titleAssetUrl: "./assets/title-single-gameplay.png",
  backgroundAssetUrl: "./assets/background-single-gameplay.png",
  countdownLabel: "过期时间：",
  countdownSeconds: 279_840,
  gameplayKind: "spin-wheel",
  balanceValue: "₩8,000",
  thresholdValue: "₩100,000",
  remainingValue: "₩2000",
  progress: 0.8,
  chances: 5,
  gameplayAssetUrl: "./assets/gameplay-spin-wheel.png",
  rewards: [
    { id: "coins-large", label: "Coins", value: "20,000" },
    { id: "coins-mid", label: "Coins", value: "6,000" },
    { id: "coins-small", label: "Coins", value: "200" },
  ],
};

export function SingleGameplayConversionPage() {
  const safeProgress = Math.max(0, Math.min(config.progress, 1));
  const noChances = config.chances <= 0;
  const countdownText = useCountdown(config.countdownSeconds);

  return (
    <main className="min-h-screen bg-[#bff7f4] text-[#0d2f38]">
      <div
        className="relative mx-auto h-[844px] w-[390px] overflow-hidden bg-[#bff7f4] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${config.backgroundAssetUrl})` }}
      >
        <TopNavigation />
        <HeaderArea config={config} progress={safeProgress} countdownText={countdownText} />
        <GameplayArea config={config} disabled={noChances} />
        <BottomActionTriple chances={config.chances} disabled={noChances} />
      </div>
    </main>
  );
}

function TopNavigation() {
  return (
    <nav className="absolute left-0 top-0 z-40 h-[91px] w-[390px]" aria-label="Top navigation">
      <div className="absolute left-0 top-0 h-[47px] w-[390px]" aria-hidden="true">
        <span className="absolute left-[45px] top-[18.5px] text-[15px] font-semibold leading-[21px] text-[#1b130c]">
          8:00
        </span>
        <span className="absolute left-[280px] top-5 flex h-[13px] w-[78px] items-center gap-[7px] text-[#1b130c]">
          <CellularIcon />
          <WifiIcon />
          <BatteryIcon />
        </span>
      </div>
      <div className="absolute left-0 top-[47px] h-11 w-[390px]">
        <div className="absolute inset-[-47px_0_0_0]" aria-hidden="true" />
        <div className="hidden" aria-hidden="true" />
        <div className="absolute left-0 top-0 flex h-11 w-[390px] items-center justify-between px-4">
          <NavIconButton label="Back">
            <ChevronLeftIcon />
          </NavIconButton>
          <div className="flex h-8 w-[72px] items-center justify-end gap-2">
            <NavIconButton label="Music">
              <MusicIcon />
            </NavIconButton>
            <NavIconButton label="Help">
              <HelpIcon />
            </NavIconButton>
          </div>
          <div className="pointer-events-none absolute left-24 top-0 h-11 w-[213px]" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}

function NavIconButton({ label, children }: { label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white/60 p-1.5 leading-none text-[#1b130c] [&>svg]:block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0"
      aria-label={label}
    >
      {children}
    </button>
  );
}

function ChevronLeftIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M12.5 4.2 6.7 10l5.8 5.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg className="h-5 w-5 -translate-y-px" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M13.3 3.1v9.4a3 3 0 1 1-1.8-2.7V5.1l5.1-1.2v2.3l-3.3.8Z" fill="currentColor" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 13.1v-.6c0-1 .5-1.7 1.5-2.4.9-.7 1.4-1.2 1.4-2.1 0-1.2-1-2-2.5-2-1.4 0-2.5.7-3 1.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <circle cx="10" cy="16.1" r="1.2" fill="currentColor" />
    </svg>
  );
}

function CellularIcon() {
  return (
    <svg className="h-3 w-[19px] shrink-0" viewBox="0 0 19 12" aria-hidden="true">
      <rect x="0" y="7" width="3" height="5" rx="1" fill="currentColor" />
      <rect x="5" y="5" width="3" height="7" rx="1" fill="currentColor" />
      <rect x="10" y="2.5" width="3" height="9.5" rx="1" fill="currentColor" />
      <rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg className="h-3 w-[17px] shrink-0" viewBox="0 0 17 12" aria-hidden="true">
      <path d="M1 3.9C5.2.1 11.8.1 16 3.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="M4.1 7C6.5 4.9 10.5 4.9 12.9 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="M7.2 10.1C7.9 9.5 9.1 9.5 9.8 10.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg className="h-[13px] w-[27px] shrink-0" viewBox="0 0 27 13" aria-hidden="true">
      <rect x="0.5" y="1" width="22" height="11" rx="3" fill="none" stroke="currentColor" />
      <rect x="3" y="3.5" width="16" height="6" rx="1.6" fill="currentColor" />
      <rect x="24" y="4.2" width="2.5" height="4.6" rx="1" fill="currentColor" />
    </svg>
  );
}

function HeaderArea({
  config,
  progress,
  countdownText,
}: {
  config: SingleGameplayConfig;
  progress: number;
  countdownText: string;
}) {
  return (
    <header className="relative z-10 text-center">
      <h1 className="absolute left-[11px] top-[60px] m-0 h-24 w-[368px]">
        <img className="block h-full w-full object-contain" src={config.titleAssetUrl} alt={config.title} />
      </h1>
      <p className="absolute left-[86px] top-[156px] m-0 grid h-7 w-[218px] place-items-center text-xs font-normal leading-4 text-[#1b130c] [text-shadow:0_1px_0_rgba(255,255,255,0.75)]" aria-live="polite">
        {config.countdownLabel}
        {countdownText}
      </p>
      <AssetImage config={config} progress={progress} />
    </header>
  );
}

function useCountdown(initialSeconds: number) {
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemainingSeconds((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return formatDuration(remainingSeconds);
}

function formatDuration(seconds: number) {
  const safeSeconds = Math.max(0, seconds);
  const days = Math.floor(safeSeconds / 86400);
  const hours = Math.floor((safeSeconds % 86400) / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);

  return `${days}d:${hours}h:${minutes}m`;
}

function AssetImage({ config, progress }: { config: SingleGameplayConfig; progress: number }) {
  return (
    <section className="absolute left-8 top-[188px] h-[120px] w-[326px] rounded-[30px] border border-white/70 bg-white/55 px-5 py-4 text-left text-[#1f3e45] shadow-[0_14px_36px_rgba(59,128,140,0.18)] backdrop-blur-md">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full bg-[#d7eef2] text-xs font-black">
            {config.avatarUrl ? <img src={config.avatarUrl} alt="" className="h-full w-full object-cover" /> : "U"}
          </div>
          <strong className="truncate text-[34px] font-black leading-none text-black">{config.balanceValue}</strong>
        </div>
        <button type="button" className="h-[52px] shrink-0 rounded-full bg-white/75 px-7 text-[22px] font-black text-[#687d84]">
          withdraw
        </button>
      </div>
      <p className="mt-8 text-[26px] font-medium leading-none text-[#45636b]">Only {config.remainingValue} to go</p>
      <div className="relative mt-5 pr-8">
        <div className="h-[14px] overflow-hidden rounded-full bg-white/80 shadow-[inset_0_1px_4px_rgba(0,0,0,0.12)]">
          <div className="h-full rounded-full bg-[linear-gradient(90deg,#1597d3,#37d3e3,#fff6cf)]" style={{ width: `${progress * 100}%` }} />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#ffc926] text-xl font-black text-[#b36b00] shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
            P
          </div>
          <div className="-mt-1 rounded-full bg-white px-2 py-1 text-sm font-black text-[#2d1a13] shadow-[0_2px_6px_rgba(0,0,0,0.12)]">
            {config.thresholdValue}
          </div>
        </div>
      </div>
    </section>
  );
}

function GameplayArea({ config, disabled }: { config: SingleGameplayConfig; disabled: boolean }) {
  return (
    <section className="absolute left-8 top-[342px] w-[326px] text-[#4b2110]">
      <img className="block h-[326px] w-[326px] object-contain" src={config.gameplayAssetUrl} alt={`${config.gameplayKind} gameplay asset`} />
      <button
        type="button"
        disabled={disabled}
        className="absolute left-1/2 top-[132px] h-24 w-24 -translate-x-1/2 rounded-full bg-transparent p-0 text-[0px] disabled:opacity-70"
      >
        돌리기
      </button>
    </section>
  );
}

function BottomActionTriple({
  chances,
  disabled,
}: {
  chances: number;
  disabled: boolean;
}) {
  return (
    <nav className="absolute left-0 top-[668px] h-[120px] w-[390px] text-[#5b2c13]">
      <button type="button" className="absolute left-0 top-5 h-[58px] w-20 bg-transparent p-0">
        <span className="absolute left-0 top-0 h-14 w-20 rounded-r-[22px] bg-[#f4d8b7] shadow-[inset_0_3px_0_rgba(255,255,255,0.55),0_7px_0_#b87b42]" />
        <span className="absolute left-0 top-0 flex h-14 w-20 items-center justify-center whitespace-pre-line text-center text-[15px] font-bold leading-[19px]">
          기회 더
          {"\n"}
          받기
        </span>
      </button>
      <button
        type="button"
        disabled={disabled}
        className="absolute left-[86px] top-[-1px] h-24 w-[218px] bg-transparent p-0 disabled:opacity-70"
      >
        <span className="absolute left-[11px] top-3 h-[72px] w-[196px] rounded-[28px] bg-[#9b4c27] shadow-[inset_0_4px_0_rgba(255,255,255,0.22),0_8px_0_#5f2b18]" />
        <span className="absolute left-[11px] top-3 flex h-[72px] w-[196px] items-center justify-center text-[32px] font-bold leading-[38px] text-white">
          돌
        </span>
      </button>
      <button type="button" className="absolute left-[310px] top-5 h-[58px] w-20 bg-transparent p-0">
        <span className="absolute left-0 top-0 h-14 w-20 rounded-l-[22px] bg-[#f4d8b7] shadow-[inset_0_3px_0_rgba(255,255,255,0.55),0_7px_0_#b87b42]" />
        <span className="absolute left-0 top-0 flex h-14 w-20 items-center justify-center whitespace-pre-line text-center text-[15px] font-bold leading-[19px]">
          QR
          {"\n"}
          코드
        </span>
      </button>
      <p className="absolute left-[136px] top-[106px] m-0 h-[18px] w-[119px] text-center text-sm font-normal leading-[18px] text-white">
        Opportunity: {chances}
      </p>
    </nav>
  );
}

```

### skills/vibe-activity-page/templates/TaskRewardPage.tsx

```tsx
type TaskStatus = "locked" | "available" | "progress" | "completed" | "claimed";

type RewardTask = {
  id: string;
  title: string;
  description: string;
  reward: string;
  status: TaskStatus;
  actionLabel: string;
};

const tasks: RewardTask[] = [
  {
    id: "daily-checkin",
    title: "今日签到",
    description: "连续签到可提升奖励",
    reward: "+800 金币",
    status: "available",
    actionLabel: "签到",
  },
  {
    id: "invite",
    title: "邀请好友参与",
    description: "好友完成首次浏览后生效",
    reward: "+12000 金币",
    status: "progress",
    actionLabel: "继续",
  },
  {
    id: "browse",
    title: "浏览精选活动",
    description: "停留 30 秒即可领取",
    reward: "+3000 金币",
    status: "completed",
    actionLabel: "领取",
  },
  {
    id: "bonus",
    title: "解锁加码奖励",
    description: "完成 3 个任务后开放",
    reward: "+20000 金币",
    status: "locked",
    actionLabel: "未解锁",
  },
];

const statusLabel: Record<TaskStatus, string> = {
  locked: "待解锁",
  available: "可完成",
  progress: "进行中",
  completed: "可领取",
  claimed: "已领取",
};

export function TaskRewardPage() {
  const completedCount = tasks.filter((task) => ["completed", "claimed"].includes(task.status)).length;

  return (
    <main className="min-h-screen bg-[#f5f7ff] text-[#14161a]">
      <div className="mx-auto min-h-screen max-w-[430px] px-4 pb-[calc(96px+env(safe-area-inset-bottom))] pt-5">
        <header className="rounded-[20px] bg-[#14161a] p-5 text-white">
          <p className="w-fit rounded-full bg-[#25f4ee] px-3 py-1 text-xs font-black text-[#14161a]">
            每日任务
          </p>
          <h1 className="mt-3 text-[30px] font-black leading-[1.1]">做任务领金币</h1>
          <p className="mt-2 text-sm font-medium text-white/72">完成更多任务，解锁更高奖励</p>
          <div className="mt-5 rounded-2xl bg-white/10 p-3">
            <div className="flex items-end justify-between">
              <span className="text-sm font-bold">今日进度</span>
              <strong className="text-2xl font-black">
                {completedCount}/{tasks.length}
              </strong>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/16">
              <div className="h-full rounded-full bg-[#25f4ee]" style={{ width: `${(completedCount / tasks.length) * 100}%` }} />
            </div>
          </div>
        </header>

        <section className="mt-5">
          <h2 className="text-xl font-black">任务列表</h2>
          <div className="mt-3 space-y-2">
            {tasks.map((task) => {
              const disabled = task.status === "locked" || task.status === "claimed";
              return (
                <article key={task.id} className="rounded-[18px] bg-white p-4 shadow-[0_8px_22px_rgba(28,35,54,0.08)]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-black">{task.title}</h3>
                        <span className="rounded-full bg-[#eef1f8] px-2 py-1 text-[11px] font-bold text-[#5f6675]">
                          {statusLabel[task.status]}
                        </span>
                      </div>
                      <p className="mt-1 text-xs font-medium text-[#6b7280]">{task.description}</p>
                      <p className="mt-2 text-sm font-black text-[#fe2c55]">{task.reward}</p>
                    </div>
                    <button
                      type="button"
                      className="h-10 min-w-[76px] rounded-xl bg-[#14161a] px-3 text-sm font-black text-white disabled:bg-[#d9dde7] disabled:text-[#7d8492]"
                      disabled={disabled}
                    >
                      {task.actionLabel}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-5 rounded-[20px] bg-white p-4">
          <h2 className="text-lg font-black">累计奖励</h2>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["第 1 个", "第 3 个", "第 4 个"].map((label, index) => (
              <div key={label} className="rounded-2xl bg-[#fff0f4] p-3 text-center">
                <p className="text-xs font-bold text-[#7d4656]">{label}</p>
                <strong className="mt-1 block text-base font-black text-[#fe2c55]">
                  +{[1000, 8000, 20000][index]}
                </strong>
              </div>
            ))}
          </div>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 mx-auto max-w-[430px] bg-white/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.12)]">
        <button type="button" className="h-12 w-full rounded-2xl bg-[#fe2c55] text-base font-black text-white">
          继续完成任务
        </button>
      </nav>
    </main>
  );
}


```
