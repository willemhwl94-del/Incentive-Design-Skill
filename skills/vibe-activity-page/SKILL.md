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
