---
name: figma-main-flow-annotator
description: Create a Figma main interaction-flow annotation page for a completed web/H5 activity page by identifying the core gameplay journey, capturing each key state from the real browser-rendered page, placing screenshots in Figma, and connecting them with page names, arrows, and short user-behavior notes. Use when the user asks to expand, annotate, document, or visualize the primary interaction chain for marketing activity pages in Figma.
---

# Figma Main Flow Annotator

## Purpose

Create a Figma page that explains the primary interaction chain of an already implemented activity page.

This skill is screenshot-driven: the visual state in Figma should come from the actual browser-rendered page, not from redesigning, rebuilding, or manually composing component frames. The Figma output is a readable flow: page-state screenshots in order, connected by arrows and short user-behavior labels.

## Inputs

- A completed web/H5 activity page, local file, current browser page, or project path.
- The target Figma file or page where the flow should be added.
- The activity mechanics, either from the user's brief or from the implemented page code.

If the user provides a simplified chain, use that chain exactly as the primary route unless an implementation blocker makes a state impossible to capture.

## Core Output

Create or update one Figma page containing:

- One screenshot frame per core state.
- A visible page-state name above each screenshot.
- A blue arrow between adjacent states.
- A short trigger label near each arrow.
- One compact user-behavior note per state.

Do not add:

- Global annotation rule blocks.
- Component inventories.
- Implementation-source notes.
- Redesigns or substitute mockups.
- Navigation-bar branches unless the user explicitly asks.

## Workflow

### 1. Derive The Main Chain

Read the page code, visible UI, and activity rules. Identify only the primary conversion journey.

For each step, define:

- `stateName`: short page/state title.
- `userBehavior`: one short sentence describing what the user does or experiences.
- `triggerToNext`: the action or event that moves to the next state.
- `captureInstruction`: what must be visible before taking the screenshot.

Default chains:

- Blind-box / mystery-box invite page:
  `Enter activity page -> Share panel -> Box unlock -> Reward dialog -> Withdraw`
- Spin-wheel invite page:
  `Enter activity page -> Share panel or invite action -> Spin chance unlocked -> Spin result -> Withdraw`
- Scratch-card invite page:
  `Enter activity page -> Share panel or invite action -> Card unlocked -> Reward dialog -> Withdraw`

Keep the chain short. Prefer 4-6 states. Secondary branches are out of scope unless requested.

### 2. Capture Real Browser States

Use real browser-rendered screenshots as the visual source of truth.

Preferred screenshot method for local H5 pages:

1. Open the local HTML page in Chrome.
2. If the page must match a Figma canvas, set Chrome DevTools device mode to the target viewport, usually `390 x 844`.
3. Open DevTools with `Command + Option + I`.
4. Open the DevTools command menu with `Command + Shift + P`.
5. Run `Capture full size screenshot`.
6. Chrome saves the PNG to `Downloads`.
7. Move or copy the PNG into the project screenshot folder, usually `tmp/figma-flow-screenshots/`.

Why this method is preferred:

- It works for `file://` local HTML pages.
- It captures Chrome's real rendering output.
- It does not depend on macOS screen-recording permission.
- It does not require headless Chrome, Playwright browsers, or a local HTTP server.

For every screenshot:

- Verify width and height before import.
- For canonical H5 pages, accept `390 x 844` or a clean retina multiple such as `780 x 1688`.
- If a screenshot is a retina multiple, place it in Figma at the logical canvas size, e.g. display `780 x 1688` as `390 x 844`.
- Do not use blurred half-size screenshots such as `195 x 422` for a `390 x 844` canvas.
- Keep filenames ordered and descriptive, such as:
  - `01-enter-activity.png`
  - `02-share-panel.png`
  - `03-box-unlock.png`
  - `04-reward-dialog.png`
  - `05-withdraw.png`

If an automated browser route is available and allowed, it may be used, but do not fight environment restrictions. When automation cannot reliably capture the original canvas size, fall back to the Chrome DevTools command workflow above.

### 3. Prepare Figma Import

Before writing to Figma, load and follow `figma-use`.

Use one of these import paths:

- Prefer Figma upload assets when `mcp.figma.com` is reachable.
- If upload URLs are blocked, use local byte import with `figma.createImage(new Uint8Array(...))`.
- For large images, slice them before local byte import.

Image import rules:

- Do not import a full long page as one huge image if it exceeds Figma or script limits.
- Slice images larger than `2048 x 2048`.
- Keep each slice at or below `2048 x 2048`.
- Prefer slices under 1MB when using local byte import.
- If a slice fails, skip it, record the filename, and continue importing the other slices.

### 4. Create The Figma Flow Page

Create a dedicated Figma page named clearly, for example:

`Main Flow / {Activity Name}`

On that page:

- Place states in one horizontal row.
- Keep screenshot tops aligned.
- Use `200px` horizontal spacing between adjacent screenshot frames.
- Use the logical page size for frames, e.g. `390 x 844`.
- If using sliced images, create one parent frame per state and place slice rectangles at their manifest `x/y` positions.
- If using one screenshot image, create one rectangle or frame image fill per state.

Do not convert imported screenshots or state frames into Figma components. They are documentation artifacts and should remain easy to move, crop, replace, and annotate.

### 5. Add Page Names

Add a visible state name above every screenshot.

Rules:

- Text size: `40px`.
- Weight: bold.
- Color: readable dark neutral, unless the Figma context already has a standard label style.
- Keep exactly `20px` vertical gap between the label bottom and screenshot top.
- Keep names short:
  - `01 Enter Activity`
  - `02 Share Panel`
  - `03 Box Unlock`
  - `04 Reward Dialog`
  - `05 Withdraw`

### 6. Add Arrows

Draw one arrow between each adjacent state.

Rules:

- Use one vector path per route.
- Do not build arrows from separate line and triangle nodes.
- Arrow color: `#3867FF`.
- Arrow starts at the right side of the source screenshot and ends at the left side of the destination screenshot.
- Default y-position is the vertical center of the screenshots.
- If the route is clearly triggered by a specific CTA, align the arrow start near that control's vertical center when practical.
- Lines should be horizontal or orthogonal.
- Only the endpoint has an arrowhead.

### 7. Add Trigger Labels

Add one short label near each arrow.

Rules:

- Color: `#3867FF`.
- Place above the arrow and close to the source state.
- Keep max width around `120px`; allow wrapping.
- Describe the trigger, not the implementation:
  - `Invite friends`
  - `Friend joins`
  - `Tap glowing box`
  - `Reward confirmed`
  - `Tap Withdraw`

### 8. Add User-Behavior Notes

Add one compact note per state.

Rules:

- Describe only what the user does or experiences in that state.
- One short sentence is enough.
- Keep notes near the screenshot but do not cover key UI, CTA, overlay content, reward values, or share channels.
- Do not write words such as `restore`, `component source`, `code-render`, `Figma source`, `global rules`, or file paths in visible Figma notes.

Examples:

- `The user lands on the activity page and sees the current reward balance.`
- `The user chooses a share channel from the bottom sheet.`
- `A qualified invite unlocks the next mystery box.`
- `The reward dialog confirms the earned amount.`
- `The user can withdraw once the cash threshold is reached.`

### 9. Validate Against The Current Page

Before handoff:

- Check every screenshot file dimension.
- Check every Figma state uses the intended image.
- Confirm retina screenshots are displayed at logical canvas size.
- Confirm all state names, arrow labels, and notes are visible and not overlapping important UI.
- Confirm the flow order matches the main chain.
- Confirm no global rules block or component inventory was added.
- Confirm no state was redesigned by hand.

If a mismatch remains, report it explicitly and say which screenshot/state needs to be regenerated.

## Figma Writing Notes

When using `use_figma`:

- Load `figma-use` first.
- Use `await figma.setCurrentPageAsync(page)` for the target page.
- Return created and mutated node IDs.
- Work incrementally: create page and frames first, then import images, then add labels/arrows/notes, then validate.
- If a Figma write fails, stop, inspect the error, and adjust the script. Do not repeatedly retry the same failing script.

## Final Response

Report:

- The Figma page name.
- The states included.
- The screenshot source folder.
- Whether image dimensions were checked.
- Any failed imports or known mismatches.
