# Code To Figma Restoration

Use this workflow when restoring an implemented activity page into a Figma design draft.

## Core Principle

Do not redraw the whole page from code first.

Start from the page structure and use every available Figma component source as the structural source of truth. Preserve the source format: if the source is a `FRAME`, copy the frame directly into the concrete page; if the source is already a component or instance and supports the required overrides, use an instance. Fill only the missing gaps from the implemented webpage.

## Workflow

1. Return to the page structure.
   - Identify the actual modules in order, such as navigation, title, countdown, withdrawal card, gameplay, action buttons, share panel, rules, or contribution module.
   - Record the implemented page canvas and key coordinates before editing Figma.
   - For fixed H5 pages, keep the same canvas size as the implementation, usually `390 x 844`.

2. Map modules to existing Figma components.
   - Search the target Figma file for matching component specs before drawing anything.
   - Known reusable component families may include navigation, withdrawal card, button group, share panel, and contribution module.
   - Treat the Figma component as a framework/spec, not as finished campaign artwork.

3. Build the Figma page from component sources.
   - Create or locate the component source, then preserve its original format in the page.
   - If the source is a `FRAME`, copy that frame directly into the page and modify the copied frame only within allowed override scope: text, colors, visibility, state, and image fills.
   - If the source is already a component or instance and supports the required overrides, place a true instance and modify it only within allowed override scope.
   - Respect nested locked components inside an instance. For example, `粒子特效` must keep its original component color, opacity, dimensions, and internal styling; reset accidental overrides instead of adapting it to the campaign.
   - Do not convert source `FRAME` nodes into new Figma components, component sets, instances, or wrapper components just to componentize the page.
   - Do not detach instances unless the user explicitly asks or the component cannot support the required content.

4. Fill missing content from the implemented webpage.
   - If no Figma component exists for a module, use the implementation as the source of truth.
   - For image-based gameplay such as a spin wheel, place the same PNG production assets from code. Do not restore non-icon image assets from SVG or WebP unless the user explicitly overrides the repository asset-format rule.
   - For spin-wheel gameplay that uses two code assets, place both: the rotating wheel body and the fixed pointer, aligned to the implemented coordinates.
   - Use recreated vector/text layers only when the code asset is unavailable or the user asks for editable Figma layers.

5. Match instance overrides to the webpage.
   - Compare component-source frame or instance colors, text color, button states, progress colors, shadows, borders, and image fills against the live page.
   - Preserve component geometry unless the implemented page clearly uses a different allowed variant or size.
   - Keep text centered inside button containers after localization or copy changes.

6. Validate against the webpage.
   - Capture or inspect the live webpage at the same viewport.
   - Screenshot the Figma frame and compare module by module.
   - Check at minimum: canvas size, module order, component instance usage, coordinates, text, colors, gameplay assets, z-order, and no clipped or overlapping text.
   - If a visual mismatch comes from component state or overrides, fix the instance. If it comes from a missing component, fix the code-derived asset or layer.

## Required Checks

- Components that exist in the Figma file are reused in their original source format: source `FRAME` nodes are copied directly, and true instances are used only when the library source is already componentized and supports the code-matching overrides.
- Non-component modules are sourced from the implemented page, not invented from scratch.
- Gameplay image assets match the code assets and are aligned to the code layout.
- PNG is required when restoring assets with text, masks, filters, browser-specific rendering, backgrounds, title art, gameplay objects, stickers, and decorative anchors. SVG is allowed for icons only; WebP is not allowed unless explicitly requested by the user.
- The final Figma frame visually matches the live webpage before delivery.
