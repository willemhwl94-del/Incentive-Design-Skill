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
