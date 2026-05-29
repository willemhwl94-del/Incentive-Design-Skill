# Spacing and Layout

Use the strict non-color spacing and layout rules copied from local `tt-impeccable`. Locked Figma components override these rules only inside that component.

## Canvas

- Canonical mobile H5 canvas: 390px width.
- Fixed Figma-derived pages should use the exact Figma canvas and absolute component coordinates, then scale the entire canvas down for narrower screens.
- For non-Figma/free-layout pages, use 16px horizontal page padding.

## 4px Spacing Grid

Only these spacing, padding, and gap values are allowed outside locked Figma components:

| Step | Value | Use |
|---|---:|---|
| xs | 4px | micro spacing, icon internal gaps |
| sm | 8px | tight inline gaps, badge padding |
| md | 12px | inner element padding |
| base | 16px | page padding, standard section gap |
| lg | 20px | between groups inside a section |
| xl | 24px | between sections |
| 2xl | 32px | between major page blocks |

Rules:
- Do not use off-grid values such as 5, 6, 10, 14, 15, 18, 22, 26, 28, 30px for spacing unless copied from a locked Figma component.
- 32px is the ceiling for mobile spacing outside fixed art assets.
- Prefer `gap` for sibling spacing instead of margins.
- Use spacing and surface changes for grouping. Borders/dividers are last resort.

## Component Dimensions

- Minimum touch target: 44 x 44px.
- Full-width sticky CTA: 52px height.
- Mid-page full-width button: 44px height.
- Inline/grouped button: 32px height.
- Input: 40px height.
- Navigation bar: 44px height, 16px horizontal padding.
- Bottom tab bar: 83px total = 49px visible area + 34px home indicator.

For campaign-specific Figma components such as `AssetImage`, `Btn`, and `ButtonImage1`, use the exact Figma dimensions and internal child positions documented in `components.md`.

## Layout Stability

- Fixed-format elements must have stable dimensions: gameplay objects, grids, counters, CTA bars, task buttons, avatar slots.
- Hover, pressed, loading, active, and claimed states must not change element size.
- If text is translated, center it within its fixed container or adjust copy length; do not resize the locked component.
