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
