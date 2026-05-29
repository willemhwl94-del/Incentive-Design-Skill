# Responsive Rules

Use the strict non-color responsive rules copied from local `tt-impeccable`.

## Canvas Modes

### Fixed Figma H5

Use this when the user references a Figma H5 design or locked visual components.

- Canonical canvas: 390px wide.
- Use the Figma canvas height exactly when provided, e.g. 390 x 844.
- Do not add desktop breakpoints.
- Do not reflow locked components.
- For viewports narrower than 390px, scale the whole canvas proportionally.
- For wider desktop preview, center the 390px canvas.

### Free Layout H5

Use this when no Figma canvas/component is specified.

- Base styles are mobile-first at 390px.
- Page horizontal padding starts at 16px and may increase only for web adaptation.
- Font sizes and component heights remain fixed across widths.
- Avoid desktop-only interaction patterns.

## Safe Area

Always include:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

Rules:
- Minimum status bar safe area: 44px.
- Minimum home indicator safe area: 34px.
- Bottom fixed bars must account for `env(safe-area-inset-bottom)`.
- Use `max(34px, env(safe-area-inset-bottom))` when the bar is part of the page shell.

## Interaction Mode

- Assume touch on mobile.
- Every interactive target must have at least a 44 x 44px tap area.
- Never rely on hover for core behavior.
- On web adaptation, hover may change opacity/background only, not layout.

## Testing Widths

For fixed Figma H5:
- 390px canonical
- 320px scaled preview

For free-layout H5:
- 320px
- 390px
- 414px
- 430px
