# Typography

Use the strict non-color typography rules copied from the local `tt-impeccable` skill. Do not invent intermediate font sizes, weights, or line heights.

## Font Stack

Use only:

```css
font-family: 'TikTok Sans', system-ui, -apple-system, sans-serif;
```

If TikTok Sans is unavailable, keep the same stack and rely on `system-ui` / `-apple-system`. Do not substitute Inter, Roboto, or another custom font.

## Fixed Type Scale

Only these px sizes are allowed for visible UI text:

| Role | Size | Line height | Weights |
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

Rules:
- Letter spacing is always `0`.
- Do not use `clamp()`, `vw`, `rem` scale, fluid sizing, or intermediate sizes such as 18px, 22px, 26px, 28px, 30px, 34px, 38px unless a locked Figma component explicitly specifies that value.
- Only weights 400, 600, and 700 are allowed unless a locked Figma text layer explicitly specifies a different weight.
- P1 and smaller do not use 700. Use 600 as the strongest weight.
- Large Title and H1 do not use 400.
- Use no more than three distinct text size tiers on one screen outside locked Figma components.

## Marketing H5 Application

- If the page is based on a locked Figma component, use the Figma text size/line-height inside that component exactly.
- Outside locked components, map marketing page roles to the fixed scale:
  - page title: Large Title or H1
  - section title: H2 or H3
  - card title / button label: Headline or H4
  - body: P1 or P2
  - caption / metadata: P3 or Small Text 1
- Keep copy short and action-oriented.
- Use numerals and units consistently: `100000 coins`, `$10`, `3 chances`.
