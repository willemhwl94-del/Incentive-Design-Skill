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
