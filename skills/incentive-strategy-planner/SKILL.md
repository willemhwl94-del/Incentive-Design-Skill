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
