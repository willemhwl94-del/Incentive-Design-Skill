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
