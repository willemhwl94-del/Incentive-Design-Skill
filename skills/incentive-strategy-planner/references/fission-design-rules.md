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
