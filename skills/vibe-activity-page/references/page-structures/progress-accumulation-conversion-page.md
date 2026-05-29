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
