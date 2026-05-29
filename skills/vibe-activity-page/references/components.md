# Component Usage Index

This file is not the component source of truth.

Strict reusable component contracts, Figma links, locked dimensions, runtime code, and component assets live in:

```txt
../../component-library/components/
```

Use this file only to decide which catalog component to use, and to define page-specific open modules that are not yet catalog components.

## Ownership Rule

- `component-library/components/*/component.md` owns reusable component contracts.
- `component-library/components/*/*.js` and `*.css` own reusable H5 component code.
- `skills/vibe-activity-page/references/*` owns page framework rules, conversion logic, responsive rules, and open-zone guidance.
- `skills/vibe-activity-page/components/` is deprecated and must not contain implementations.

Do not copy detailed component dimensions from the component library into this file. When a component changes, update only its own `component.md` and reusable code.

## Mandatory Component Mapping

Before building any page section, map it to this catalog first:

| Page need | Use component |
| --- | --- |
| App shell navigation, status bar, back/music/help/share/more actions | `component-library/components/top-navigation/` |
| Balance, asset, reward progress, cashout threshold | `component-library/components/asset-card/` |
| Decorative campaign title art | `component-library/components/primary-title/` |
| Bottom one/two/three action CTA area | `component-library/components/bottom-action-triple/` or closest button component |
| Daily task list with simple/progress/invite rows | `component-library/components/task-list/` |
| Invite, QR, copy link, share channel surface | `component-library/components/share-panel/` |
| Reward result, claim result, lottery result | `component-library/components/dialog/` |
| Lightweight operation feedback | `component-library/components/toast/` |
| Contribution / friend assist module | `component-library/components/contribution-module/` |

If a matching component exists, page code must use the catalog implementation or the Figma source described in that component contract.

## Component-First Workflow

1. Read the selected page framework.
2. List every visible module in the page.
3. Search `../../component-library/components/` for each module.
4. Reuse the catalog component when there is a match.
5. Pass business data through the page config object.
6. Create a page-specific module only when no catalog component exists.
7. Record uncovered gaps in `PageBuildSpec.component_gaps`.

## Custom Open Modules

The following modules are usually page-specific and may remain inside the page implementation unless they become reusable enough to promote into `component-library`.

### BackgroundScene

Owns decorative atmosphere behind strict UI components and gameplay assets.

Rules:
- Scenic backgrounds should use one generated or designer-provided full-screen PNG image asset by default.
- Do not assemble scenic backgrounds from many disconnected HTML/CSS fragments.
- Avoid partial objects at page edges that abruptly disappear. If an object touches an edge, crop it intentionally with scale, fade, continuation, or layering.
- Background elements must stay behind UI components and gameplay assets.
- Background elements must not compete with the primary title, reward card, gameplay object, or bottom actions.

### GameplayAsset

Use when the gameplay object is a complex visual machine or illustrated device, such as a lottery machine, gacha machine, slot machine, treasure chest, claw machine, jackpot cabinet, or golden egg stage.

Rules:
- Render the gameplay object as one generated or designer-provided PNG image asset.
- The gameplay area should contain a single `<img>` plus only transparent hit areas or accessibility text as needed.
- Before generating the asset, calculate the target image bounding box from the page framework: available width, available height, required horizontal margins, top card bottom, bottom action top, and desired vertical centering gap.
- Pass the calculated target aspect ratio and safe visual bounds into the image-generation prompt.
- Do not generate an arbitrary asset first and force it into place afterward.
- Do not rebuild complex gameplay visuals with HTML/CSS panels, prize cells, or decorative wrappers unless the user explicitly asks for editable structure.
- On the canonical 390px H5 canvas, keep at least 20px horizontal margin on both sides. Maximum gameplay visual/container width is normally 350px.
- Vertically center the gameplay image within the available gap between the reward/status card above and the bottom action area below.
- The image container may provide layout only; it must not add extra gameplay copy or extra CTA layers by default.

### SpinWheelImagePair

Use for prize-wheel pages where the wheel must rotate while the pointer remains fixed.

Asset contract:
- Use exactly two PNG visual assets:
  - `wheelBodyImage`: circular wheel body, reward slices, reward icons, rim, center hub, and wheel details.
  - `pointerImage`: fixed pointer/arrow/indicator only.
- `wheelBodyImage` must not contain any pointer, arrow, top marker, triangular indicator, or fixed prize selector.
- `pointerImage` must not contain wheel slices, reward icons, CTA text, or gameplay copy.

Behavior contract:
- Rotate only the wheel body. Never rotate the pointer.
- Disable the trigger while spinning.
- Keep reward data outside the presentational component.
- Define reward order explicitly in the same order as the wheel artwork.
- Respect `prefers-reduced-motion`.

## Custom Component Promotion

Promote a page-specific module into `component-library/components/` when:

- it appears in at least two page frameworks,
- it has fixed Figma source or stable visual structure,
- it has locked dimensions or interaction behavior,
- future pages should reuse its code directly.

When promoting, create:

```txt
component-library/components/{component-name}/
  component.md
  optional-runtime.js
  optional-runtime.css
  assets/
```

Then replace page-local code with the catalog implementation.
