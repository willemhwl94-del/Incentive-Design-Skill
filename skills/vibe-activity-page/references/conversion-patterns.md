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

