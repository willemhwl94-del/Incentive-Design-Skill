# TUX Non-Color Visual Rules

This file copies the non-color visual discipline from the local `tt-impeccable` skill into the activity-page skill. Do not copy TUX color tokens, brand color rules, or color values from `tt-impeccable`.

Locked Figma components always win inside their own bounds. Everywhere else, these rules are strict.

## Typography

Font stack:

```css
font-family: 'TikTok Sans', system-ui, -apple-system, sans-serif;
```

Allowed type sizes, line heights, and weights:

| Style | Size | Line height | Weights |
|---|---:|---:|---|
| Large Title | 32px | 38px | 700, 600 |
| H1 | 24px | 30px | 700, 600 |
| H2 | 20px | 25px | 700, 600, 400 |
| H3 | 17px | 22px | 700, 600, 400 |
| Headline | 16px | 21px | 700, 600, 400 |
| H4 | 15px | 19px | 700, 600, 400 |
| P1 | 14px | 18px | 600, 400 |
| P2 | 13px | 17px | 600, 400 |
| P3 | 12px | 16px | 600, 400 |
| Small Text 1 | 11px | 14px | 600, 400 |
| Small Text 2 | 10px | 13px | 600, 400 |

Typography rules:
- Use only the listed sizes outside locked Figma text layers.
- Use only weights 400/600/700 outside locked Figma text layers.
- Letter spacing is always `0`.
- No `clamp()`, fluid type, viewport-based type, or custom intermediate sizes.
- Use no more than three distinct text size tiers on one screen outside locked components.
- If `overflow: hidden` is used on a text container, verify line-height is at least `1.0em` and descenders are not clipped.

## Spacing

Use the 4px grid:

| Step | Value |
|---|---:|
| xs | 4px |
| sm | 8px |
| md | 12px |
| base | 16px |
| lg | 20px |
| xl | 24px |
| 2xl | 32px |

Spacing rules:
- 16px horizontal page padding for free-layout mobile pages.
- 32px is the mobile spacing ceiling outside fixed art assets.
- Use `gap` for sibling spacing instead of margins.
- Do not use off-grid spacing unless a locked Figma component specifies it.
- Separate content groups with spacing and surfaces before using borders/dividers.

## Layout

Strict mobile canvas:
- Canonical mobile width is 390px.
- Fixed Figma pages use exact Figma canvas dimensions and component coordinates.
- For narrower widths, scale the entire fixed canvas rather than reflowing locked components.
- For desktop preview, center the 390px canvas.

Free-layout page shell:
- status bar spacer: 44px
- navigation bar: 44px high, 16px horizontal padding
- scrollable content: flex-grown, overflow-y auto
- bottom tab/action area accounts for 34px home indicator

## Component Dimensions

- Minimum touch target: 44 x 44px.
- Sticky bottom CTA: 52px high.
- Mid-page full-width button: 44px high.
- Inline/grouped button: 32px high.
- Input: 40px high.
- Bottom tab bar: 83px total, with 49px visible content and 34px home indicator.
- Loading states must keep component dimensions fixed.

## Interaction And Motion

- Native `<button>` and `<a>` elements first.
- Every interactive element needs default, hover, focus, active, disabled, loading, error, and success states when relevant.
- Active/pressed feedback: transform scale around `0.97`, about 150ms ease.
- Hover is web-only and must not be required for core behavior.
- Focus-visible ring is required for keyboard access.
- Motion is functional only.
- Instant UI feedback: <= 200ms.
- State transitions: 200-300ms.
- Entrance animations: 300ms max.
- Animate only `transform` and `opacity` unless a specific layout pattern requires otherwise.
- Respect `prefers-reduced-motion`.

## QA Scan

Before final delivery:
- Scan for font sizes outside the allowed scale.
- Scan for font weights outside 400/600/700.
- Scan for non-zero letter-spacing.
- Scan for spacing/padding/gap values outside 4/8/12/16/20/24/32 unless they belong to a locked Figma component.
- Confirm all interactive targets have at least a 44 x 44px tap area.
- Confirm fixed Figma components keep exact documented dimensions and child positions.
- Do not run color-token audits from `tt-impeccable`; this activity-page skill owns its color direction separately.
