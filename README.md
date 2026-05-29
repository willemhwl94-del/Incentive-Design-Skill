# Incentive Design Agent Skill

`incentive-design-agent-skill` is a portable AI Agent skill package for planning, designing, and building mobile-first incentive campaign H5 pages.

It can be used by Codex, Claude Code, Cursor Agent, Windsurf, Cline, Continue, or any custom file-reading agent. The package is not a single campaign project. It is a reusable knowledge base that helps an agent turn a business request into a campaign strategy, a page framework, reusable components, H5 code, and QA checks.

Default output: mobile H5 page with HTML, CSS, and JavaScript.

Use React, Vue, Tailwind CSS, or another stack only when the target project already uses that stack or the user explicitly asks for it.

## What This Skill Is For

Use this package for:

- Dormant user recall campaigns
- New-user reward campaigns
- Daily task, check-in, browse-to-earn, and watch-to-earn pages
- Invite, referral, friend-help, and contribution campaigns
- Lucky box, spin wheel, scratch card, draw machine, and other single-gameplay pages
- Progress accumulation, cash-out, points, and exchange campaigns
- Companion nurturing, savings jar, and long-cycle growth pages

Avoid using it for:

- Pure brand articles or long-form landing pages
- Pages without incentive mechanics
- Backend-heavy production systems where the frontend has no meaningful campaign state
- Projects that already have a strict product design system that must override this component library

## How Agents Should Use It

The package works by progressive disclosure. Agents should not load every file at once. Read the entry file first, then load only the workflow, page framework, component, or contract files needed for the current task.

### Minimum Context For Any Agent

For any campaign page task, read:

```txt
SKILL.md
AGENTS.md
skills/vibe-activity-page/SKILL.md
skills/vibe-activity-page/references/components.md
```

If the user only gives a one-line business request, also read:

```txt
docs/campaign-skill-suite-protocol.md
skills/campaign-build-orchestrator/SKILL.md
skills/incentive-strategy-planner/SKILL.md
```

If the task asks to use or restore a reusable component, read:

```txt
component-library/README.md
component-library/components/{component}/component.md
```

### Codex

Codex should start from:

```txt
AGENTS.md
SKILL.md
skills/vibe-activity-page/SKILL.md
```

For a one-line request, Codex should follow:

```txt
campaign-build-orchestrator
↓
incentive-strategy-planner
↓
vibe-activity-page
↓
final H5 page
```

### Claude Code

Claude Code should read:

```txt
CLAUDE.md
SKILL.md
AGENTS.md
```

Recommended prompt:

```txt
Use this repository as an Incentive Design Agent Skill.
Before building or reviewing a campaign page, read CLAUDE.md, SKILL.md, AGENTS.md, and the relevant files under skills/vibe-activity-page/.
Keep business data in config, reuse component-library/components/, and output mobile H5 unless I explicitly request another stack.
```

### Cursor Agent

Cursor can use the repository-level rules:

```txt
.cursorrules
README.md
SKILL.md
```

Recommended prompt:

```txt
Use the rules in .cursorrules and this README.
Build the campaign page outside this skill package.
Before creating UI, check component-library/components/ and reuse existing component contracts.
```

### Windsurf

Windsurf should read:

```txt
.windsurfrules
README.md
SKILL.md
```

### Cline

Cline should read:

```txt
.clinerules
README.md
SKILL.md
```

### Continue Or Other Agents

For agents without a dedicated rule file, paste this into the agent's project instructions:

```txt
You are using the Incentive Design Agent Skill.
For mobile incentive campaign pages, read SKILL.md, AGENTS.md, skills/vibe-activity-page/SKILL.md, and skills/vibe-activity-page/references/components.md.
If the user provides only a short business request, also read docs/campaign-skill-suite-protocol.md, skills/campaign-build-orchestrator/SKILL.md, and skills/incentive-strategy-planner/SKILL.md.
Default to mobile H5. Keep campaign copy, thresholds, rewards, images, tasks, timers, and theme values in page config.
Before building a module, check component-library/components/ and reuse matching components.
Do not create runnable campaign cases inside this skill package unless explicitly asked.
```

### Custom Agent Integration

Custom agents should first index:

```txt
agent-skill.json
```

Then use the `entrypoints` field to choose files for each task type:

- `general`: package overview and default behavior
- `one_line_campaign_request`: full strategy-to-page workflow
- `page_build`: page framework, visual style, component mapping, and H5 build rules
- `component_lookup`: reusable component contracts
- `contracts`: schema definitions for cross-skill artifacts

Recommended execution model:

```txt
User request
↓
CampaignRequest
↓
StrategyBrief
↓
PageBuildSpec
↓
H5 implementation
↓
QA checklist
```

## Package Structure

```txt
incentive-design-agent-skill/
├── SKILL.md
├── AGENTS.md
├── CLAUDE.md
├── README.md
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

## Core Workflow

### 1. CampaignRequest

`campaign-build-orchestrator` converts natural language into a structured campaign request.

Typical fields:

- Region
- Target users
- Business goal
- Campaign type
- Constraints

Schema:

```txt
contracts/campaign-request.schema.json
```

### 2. StrategyBrief

`incentive-strategy-planner` creates the campaign strategy.

Typical contents:

- Goal breakdown
- User motivation
- Core gameplay
- Reward structure
- Campaign duration
- Suggested page structure

Schema:

```txt
contracts/strategy-brief.schema.json
```

### 3. PageBuildSpec

`vibe-activity-page` turns the strategy into a build plan.

Typical contents:

- Page framework
- Component mapping
- Interaction states
- Asset plan
- QA requirements
- Implementation files

Schema:

```txt
contracts/page-build-spec.schema.json
```

## Main Skills

| Skill | Purpose |
| --- | --- |
| `campaign-build-orchestrator` | Turns a one-line business request into `CampaignRequest` and coordinates downstream steps |
| `incentive-strategy-planner` | Creates `StrategyBrief`, including gameplay, motivation, rewards, and cycle |
| `vibe-activity-page` | Selects page framework, visual style, components, and builds the final H5 page |
| `figma-main-flow-annotator` | Optional helper for documenting the main interaction flow in Figma |

## Page Frameworks

Page frameworks live in:

```txt
skills/vibe-activity-page/references/page-structures/
```

Current frameworks:

| Framework | Use Case |
| --- | --- |
| `single-gameplay-conversion-page` | Spin wheel, lucky box, scratch card, draw machine, one-main-action pages |
| `progress-accumulation-conversion-page` | Cash-out, points, progress container, staged accumulation pages |
| `nurture-progress-conversion-page` | Companion nurturing, recall, long-cycle daily care, role growth pages |

## Component Library

Components live in:

```txt
component-library/components/
```

The component library is a set of reusable campaign-page contracts and lightweight H5 runtimes. It is not a full UI framework.

Before building any module, an agent should check whether a matching component already exists.

| Component | What It Does | Implementation Principle |
| --- | --- | --- |
| `top-navigation` | Campaign top navigation | Web Component: `<incentive-top-navigation>` renders status area, back button, and right-side actions |
| `task-list` | Daily task list | Web Component: `<incentive-task-list>` receives config and renders simple, progress, and invite task types |
| `share-panel` | Share channels and share result panel | H5 CSS/JS module for channel actions, copy link, and share preview |
| `dialog` | Strong feedback layer | Reward, claim, draw result, or upgrade result feedback |
| `toast` | Lightweight feedback | Success, blocked, or reminder messages |
| `asset-card` | Asset, reward, or progress card | Shows balances, thresholds, reward states, or progress values |
| `primary-title` | Campaign title visual | Title image or strong campaign title block |
| `bottom-action-triple` | Bottom action area | One to three CTA actions in a fixed bottom region |
| `contribution-module` | Friend help / contribution | Shows friend contribution, invite progress, or collaborative reward states |

Component rules:

- The source of truth for each component is `component-library/components/{component}/component.md`.
- Page code should pass config into components and listen to component events.
- Page code should not directly mutate a component's internal DOM.
- If a Figma source is a `FRAME`, preserve the frame structure instead of converting it into another abstraction.
- Component colors and images may be themed, but locked dimensions and state structure should remain intact.

## Output Rules For New Campaign Cases

Do not create new runnable campaign cases inside this skill package by default.

Create new pages outside the package, for example:

```txt
/Users/bytedance/Documents/Incentive Page Cases/{case-name}/
```

Recommended H5 structure:

```txt
case-name/
├── index.html
├── styles.css
├── script.js
└── assets/
```

Implementation rules:

- Use H5 by default.
- Put campaign copy, rewards, thresholds, tasks, images, channels, timers, and theme values in page config.
- Use render functions or component modules for sections.
- Reuse component-library components first.
- Use Dialog for important reward results.
- Use Toast for lightweight feedback.
- Ensure visible state changes for every main CTA.
- Support 320px and 390px mobile widths without horizontal scrolling.

## Visual Asset Rules

- Backgrounds, title art, gameplay objects, stickers, decorative assets, generated visuals, and Figma restoration image fills should be PNG.
- SVG is allowed for icons, compact UI glyphs, and share-channel icons.
- Object states should share the same canvas and display size to avoid layout jumps.
- Images referenced by a page must be copied into the target project or component directory.

## Example Module: Brazil Open 5 Boxes

This example shows how an agent should translate a short business request into a reusable activity module. Images can be filled in later.

### User Request

```txt
Create a Brazil campaign page where users can open 5 boxes per day. Users can complete tasks to earn more box-opening chances. Each box may reveal coins or a coupon.
```

### Recommended Framework

```txt
single-gameplay-conversion-page
```

Why:

- The main action is opening boxes.
- The page conversion goal is to consume chances and reveal rewards.
- Tasks are secondary mechanics used to earn more chances.

### Main Flow

```txt
User enters page
↓
Sees today's remaining chances
↓
Taps a closed box
↓
Box plays opening feedback
↓
Reward Dialog appears
↓
Remaining chances -1
↓
User opens another box
↓
When chances reach 0, guide user to complete tasks
```

### Page Modules

```txt
TopNavigation
Hero / Title Area
Chance Status Card
Box Gameplay Area
Reward Dialog
TaskList
Toast
```

### Config Example

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
        { label: "20min", reward: "2", reached: false }
      ],
      status: "available",
      actionLabel: "Go"
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

### State Model Example

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

### Interaction Rules

- If `chances > 0`, closed boxes are tappable.
- Tapping a box changes its state from `closed` to `opened`.
- Each box opening consumes 1 chance.
- Reward results use `Dialog`, not only Toast.
- If `chances === 0`, box taps show Toast and guide users to tasks.
- Completing a task increases chances.
- The 5-box layout must stay stable after state changes.

### Image Placeholders

Prepare these images later:

```txt
assets/bg-brazil-boxes.png
assets/title-open-boxes.png
assets/box-closed.png
assets/box-opened.png
assets/reward-icon.png
```

Image requirements:

- Use PNG for the background, title, boxes, and reward object.
- Closed and opened boxes should share the same canvas size and display size.
- Box images should not contain reward text. Render reward copy in HTML.
- Brazil styling can use tropical, festive, football, carnival, or high-energy color cues, but the background should not interfere with box tap areas.

### QA Points

- The first screen shows remaining chances and at least 3 boxes.
- All 5 boxes have clear tap targets.
- Opened boxes visibly change state.
- Reward Dialog clearly shows the result.
- When chances run out, the page clearly guides users to earn more chances.
- TaskList uses the component library or follows its contract.
- No horizontal scrolling at 320px or 390px widths.

## QA Checklist

Before delivery, verify:

- The selected page framework matches the campaign mechanic.
- The main interaction flow is complete.
- Business data is in config, not hardcoded inside presentational components.
- Reusable components are used when available.
- Navigation uses `top-navigation` when a campaign header is needed.
- Task pages use `task-list` or follow its contract.
- Reward results use Dialog.
- Lightweight feedback uses Toast.
- Primary state changes are visible.
- 320px and 390px mobile layouts do not overflow.
- Text does not overlap, clip, or exceed button/card boundaries.

## Publishing And Sharing

This folder can be shared directly or zipped:

```bash
zip -r incentive-design-agent-skill.zip incentive-design-agent-skill
```

When publishing to GitHub, the contents of `incentive-design-agent-skill/` can be used as the repository root so users immediately see `README.md`, `SKILL.md`, `AGENTS.md`, and agent rule files.
