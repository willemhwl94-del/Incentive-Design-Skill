# Page Structure Index

## Framework Model

A page framework defines the conversion path, section order, and which components must be strict. It may also define open zones where AI can adapt visuals, copy, theme, and gameplay skin to the campaign.

When generating a page:

1. Read this index first.
2. Choose the closest existing framework from `Available Frameworks`.
3. Read only the selected framework file.
4. If no framework fits, create a custom structure for the user request and record it as a candidate for this directory.
3. Preserve strict component contracts from `../../component-library/components/*/component.md` and the chosen framework.
4. Select one transferable visual style from `../visual-styles/index.md` for open visual zones. Preserve style language rather than copying literal objects from references.
5. Keep open zones expressive, but never let them break CTA hierarchy, readability, or responsive behavior.

## Available Frameworks

- `single-gameplay-conversion-page`: a single-core-gameplay page for spin wheel, shoot, scratch card, blind box, slot machine, card draw, chest open, gacha, jackpot, and lucky number campaigns. Read `references/page-structures/single-gameplay-conversion-page.md`.
- `progress-accumulation-conversion-page`: a short-cycle progress accumulation page for golden egg, treasure chest, mystery box, gift box, jar, capsule, or other reward-container campaigns where actions fill progress, full progress opens a reward dialog, and the progress resets. Read `references/page-structures/progress-accumulation-conversion-page.md`.
- `nurture-progress-conversion-page`: a long-cycle reactivation and retention page for nurture, companion, savings jar, daily ritual, milestone reward, and soft co-nurture campaigns. Read `references/page-structures/nurture-progress-conversion-page.md`.

## Selection Heuristics

Use `single-gameplay-conversion-page` when:
- the page has one dominant gameplay object,
- the primary goal is immediate participation,
- the main CTA is play, draw, spin, open, smash, shoot, or invite for chances.

Use `progress-accumulation-conversion-page` when:
- the page has one dominant reward container,
- the user must accumulate progress before opening, smashing, or claiming,
- actions such as invite, share, watch, task completion, or check-in increase progress,
- full progress triggers reward feedback and then resets for another cycle.

Use `nurture-progress-conversion-page` when:
- the page is long-cycle,
- the primary goal is reactivation, retention, or daily return,
- the mechanism includes nurture, companion growth, savings progress, ritual tasks, milestone rewards, or soft co-nurture.

## Universal Campaign Shell

Use this order unless the user gives a stronger product requirement:

1. Top campaign identity: compact nav-safe area, title, subtitle, optional time window.
2. Reward summary: current balance, target threshold, unlock state, or hero prize.
3. Primary mechanic: wheel, grid, task list, invite progress, check-in track, or blind box.
4. Conversion bridge: friend help, extra chances, progress delta, social proof, or next best action.
5. Secondary modules: reward history, ranking, task details, rules, FAQ.
6. Bottom action bar: primary CTA plus up to two secondary actions.

## Activity Structures

### Invite Lottery

- Header: title plus reward promise.
- Progress: invites completed, chances earned, next reward.
- Gameplay: 6-cell grid or wheel with one highlighted active state.
- Friend proof: invited list, helped friends, recent winners, or group progress.
- CTA: invite now as primary, view rewards/rules as secondary.

### Cashback

- Header: cashout promise and campaign deadline.
- Cashout card: current coins, cash equivalent, progress to threshold.
- Growth path: tasks or invite actions that increase balance.
- Trust layer: withdrawal rules,到账 time, recent cashouts.
- CTA: earn more or withdraw, depending on eligibility.

### Task Reward

- Header: total available reward and completion status.
- Task list: task title, reward, status, action.
- Milestone ladder: cumulative reward unlocks.
- Daily retention: check-in streak or countdown.
- CTA: continue next task.

### Leaderboard

- Header: competition reward pool.
- User rank card: current rank, gap to next reward, points.
- Top list: top 3 visually distinct, rest compact.
- Earning methods: invite/task/play actions that increase rank.
- CTA: boost rank.

### Check-In

- Header: streak reward promise.
- Calendar or 7-day track.
- Today reward card.
- Make-up or bonus chance module if supported.
- CTA: check in today or continue earning.

### Progress Accumulation

- Header: core accumulation gameplay or reward promise.
- Optional subtitle: countdown, remaining action count, or short rule.
- Progress container: one dominant PNG object such as golden egg, treasure chest, box, jar, or capsule.
- Container progress bar: current progress displayed on or immediately beside the container.
- Action point: invite, share, watch, task, check-in, or help action that adds progress.
- Reward feedback: `Dialog` with explicit prize amount/name when progress reaches the target.
- Reset: progress returns to the configured next-cycle value after reward confirmation, or moves to claimed state if one-time only.

### Nurture Progress

- Header: companion/IP world, calm activity promise, optional streak/day cue.
- Progress status card: stage, secondary currency, next milestone, reward preview.
- Nurture gameplay: feed, care, grow, collect, savings jar, or companion action.
- Daily ritual tasks: small actions that feed the nurture loop.
- Milestone rewards: staged progress path and next unlock.
- Optional soft social module: co-nurture, gift exchange, or gentle invite.
- Action area: state-aware primary CTA for today's next action.

## Structure Rules

- Keep one primary conversion path per screen.
- Put the reward state before the mechanic when reward progress is the main motivator.
- Put the mechanic before progress when play itself is the hook.
- Put progress directly on or adjacent to the reward container when completion unlocks the core reward.
- Rules should be accessible but visually secondary.
- The bottom CTA must repeat the best next action from the main content.
