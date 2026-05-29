# QA Checklist

Run this before final delivery or during review.

## Conversion

- The first viewport makes the reward and next action clear.
- There is exactly one dominant CTA for the current user state.
- The bottom CTA repeats the most important next action.
- Progress, chance count, or reward gap is visible near the action.

## Responsiveness

- Fixed Figma H5 pages render at the exact canonical canvas, usually 390px, and scale down proportionally at 320px.
- Free-layout pages have no horizontal scroll at 320px, 390px, 414px, or 430px.
- No clipped button labels or overlapped text.
- Button text in the bottom/action area is horizontally and vertically centered inside each visible button/background container.
- Edge-attached side buttons are fully inside the canvas; they are not created by overflowing outside the frame and being clipped.
- Fixed bottom actions do not cover the final content.
- Safe-area inset is handled.
- Background atmosphere elements do not abruptly disappear at page edges; any crop feels intentional.
- Scenic backgrounds are delivered as one full-screen image asset, not assembled from CSS gradients or decorative HTML fragments.
- Gameplay images keep at least 20px horizontal margin on both sides of the 390px H5 canvas unless explicitly marked full-bleed.
- Gameplay images are vertically centered in the gap between the reward/status card and the bottom action area.
- Gameplay image generation used the calculated framework box and target aspect ratio before generation; the asset was not generated arbitrarily and then forced into place.

## Component Quality

- Every page module has been checked against `component-library/components/` before custom code was written.
- Existing components are used for matching modules such as navigation, asset/reward cards, primary title, action buttons, share panel, dialog, and toast.
- Lottery, blind box, spin, scratch, or task-claim reward results use the Dialog component and explicitly show the reward amount; they are not handled by Toast alone.
- Any custom page-specific component is justified by a documented component gap in PageBuildSpec.
- Campaign data is config-driven.
- Presentational components do not contain business thresholds or copy constants.
- Repeated UI is extracted into typed components.
- Pages that need app-shell navigation use the shared `TopNavigation` component contract instead of a one-off page-specific navigation bar.
- `TopNavigation` preserves the selected Figma variant's required children: status bar, nav row, left action, right action group, individual action buttons, and title area.
- Navigation icons are visually centered inside their 32 x 32 circular buttons.
- Primary campaign title is delivered as a title art image asset for illustrated activity pages.
- Countdown secondary info is rendered as plain configurable text such as `过期时间：3d:5h:44m` with no pill/background and is driven by a real timer that clamps at zero.
- Countdown subtitle uses TUX P3: 12px font size, 16px line height, 400 regular weight.
- Canonical `single-gameplay-conversion-page` header spacing is 0px from primary title to countdown subtitle and 4px from countdown subtitle to `AssetImage`.
- Loading, disabled, completed, claimed, and empty states exist when relevant.

## Visual Quality

- Typography follows the strict non-color TUX scale: allowed sizes only, fixed line heights, weights 400/600/700 unless a locked Figma layer overrides them.
- Letter spacing is `0` for all normal UI text.
- Spacing follows the 4px grid: 4/8/12/16/20/24/32 unless a locked Figma component specifies another value.
- Interactive targets are at least 44 x 44px.
- Reward numbers and CTAs have strong hierarchy.
- Palette has at least one meaningful supporting accent.
- Decorative effects do not compete with content or gameplay.
- Background scene elements feel coherent and do not look like isolated or unfinished CSS fragments.
- Header/title art does not visually occlude `TopNavigation` status content, back action, title area, or right actions. If the title overlaps the nav structure, the overlap has been checked in the rendered page.

## Code Quality

- TypeScript props are explicit.
- No magic reward amounts inside reusable components.
- Interaction handlers are passed as callbacks.
- Analytics can be attached at page/container level.

## Non-Color TUX Mechanical Scan

- No `font-size` outside 32/24/20/17/16/15/14/13/12/11/10px unless the rule is inside a locked Figma component.
- No `font-weight` outside 400/600/700 unless the rule is inside a locked Figma component.
- No non-zero `letter-spacing`.
- No spacing/padding/gap values outside 4/8/12/16/20/24/32px unless inside a locked Figma component.
- No color-token or palette audit is required from `tt-impeccable`; this Skill intentionally did not copy color rules.
