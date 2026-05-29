# Figma Interaction Flow Extension

Use this workflow when extending an existing Figma activity page into downstream interaction-flow diagrams.

## Trigger

Use this reference when the user asks to:

- extend a generated page into later interaction flows
- show what happens after clicking page controls
- build a Figma interaction chain
- add downstream pages, overlays, toasts, rules pages, share panels, menus, or withdrawal pages
- visualize component click behavior from an already generated Figma page

## Core Principle

The interaction-flow diagram must reflect the actual current page, not the entire capability set of the component library.

If the current page uses a two-button navigation component with only `Music` and `Question`, do not add `Share` or `More` flows. If a generic app behavior such as back navigation is not part of the campaign business flow, do not include it in the flow diagram unless the user explicitly asks.

## Workflow

1. Inspect the current Figma page first.
   - Identify the actual visible component instances and buttons on the generated page.
   - Confirm which navigation variant is used and which right-side actions are actually present.
   - Confirm component states, such as asset component variants `有进度无标题`, `有进度有标题`, or `无进度有标题`.
   - Do not infer flows from component-library possibilities when the current page does not expose that action.

2. Define business interactions only.
   - Include campaign-relevant interactions such as withdraw, rules/question, music state feedback, share only if present, more only if present, gameplay result, or task entry.
   - Exclude generic app shell navigation such as returning to the previous page unless explicitly requested.
   - For stateful components, include only meaningful state branches. Example: withdrawal below threshold goes to a toast; withdrawal ready goes to the withdrawal page.
   - If an interaction only produces a toast, do not create a separate destination frame. Keep it as an annotation route on the main page: point the connector back to the main page title/header area and describe the toast content in the trigger label.

3. Create downstream frames.
   - Keep the main generated page as the central source node.
   - Put every interaction branch on its own row.
   - Do not chain unrelated target frames horizontally. Example: `链路/提现未达标-Toast` must not be placed after `链路/活动中心`; it gets its own row.
   - Name downstream frames with the `链路/` prefix, such as `链路/提现未达标-Toast`, `链路/提现页面`, or `链路/Question-活动规则页`.
   - Add a visible frame-name label at the top of every page frame. Figma frame names are not visible after exporting a flow image, so the diagram must include readable labels such as `BR 桑巴足球幸运转盘 - 实例搭建版` or `链路/提现未达标-Toast`.
   - Place the visible frame-name label just above the frame when exporting the whole flow canvas. Do not cover the actual page UI unless the user specifically wants the name inside each exported frame.
   - Reuse component instances where applicable; otherwise create lightweight downstream frames that communicate the destination state clearly.
   - If a downstream destination corresponds to an existing component, such as a share panel, rules panel, asset card, navigation bar, or contribution module, directly place a Figma component instance and configure that instance. Do not redraw the component by hand.

4. Draw interaction connectors.
   - Use one connector/vector path per interaction route.
   - Do not build arrows by combining separate line segments, circles, and triangle shapes.
   - Do not use visible `Hotspot` layers. If prototype reactions are needed, attach them to the real visible component node when possible.
   - Lines must be orthogonal: horizontal and vertical only.
   - The first segment leaving the source frame must be horizontal.
   - The connector start point should align as closely as possible with the vertical center of the actual clicked control, such as the Check button, Spin button, More Chances button, Rules button, Music icon, or Question icon.
   - The final segment entering the target frame must be horizontal.
   - Only the endpoint has an arrow. The startpoint must not have an arrow.
   - Avoid overlapping connector lanes. Assign each branch its own vertical lane or route so vertical segments do not sit on top of each other.
   - Use connector color `#3867FF` for lines and arrow endpoints.

5. Add trigger labels.
   - Every interaction connector needs a short trigger label, such as `点击提现按钮（进度未满）`, `点击 Music`, or `点击 Question`.
   - Place the label above the first non-overlapping horizontal segment.
   - Keep labels as close to the main/source page as possible.
   - Label color must be `#3867FF`.
   - Label width is content-sized with a maximum of `120px`; allow wrapping when needed.
   - Do not let labels overlap each other, cross over frames, or obscure important page content.

6. Validate the flow diagram.
   - The main page remains visually central.
   - Each business interaction has its own row.
   - Every page frame has a visible frame-name label near its top so exported diagrams remain understandable.
   - No generic back-navigation flow appears unless requested.
   - No absent navigation actions appear. For example, no `More` flow on a two-button `Music` + `Question` nav page.
   - Toast-only interactions do not create standalone frames; their connector points back to the main page title/header area and the label states the toast content.
   - Any interaction destination with an existing component uses a component instance, not a manually redrawn approximation.
   - No `Hotspot` layers remain.
   - All connectors are horizontal/vertical.
   - All connectors start and end with horizontal segments.
   - Only endpoints have arrows.
   - Labels are close to the main/source frame, above the line, blue, content-sized, and max `120px`.

## Recommended Figma Implementation Notes

- Use `figma-use` before writing to Figma.
- Prefer `VectorNode` with `setVectorNetworkAsync` when you need endpoint-only arrows:
  - set all intermediate vertex `strokeCap` values to `NONE`
  - set only the final vertex `strokeCap` to `ARROW_LINES`
  - keep segment coordinates orthogonal
- If using connectors instead, set `connectorStartStrokeCap = "NONE"` and `connectorEndStrokeCap = "ARROW_LINES"`, and choose an elbowed connector style.
- Do not leave a standalone explanation panel. The diagram itself should explain each flow through per-line trigger labels.

## Naming

Use consistent names:

- Main page: keep the generated page name.
- Destination frames: `链路/{destination}`
- Connector layers: `链路箭头/{trigger}`
- Visible frame-name labels: `Frame名称/{frame name}`
- Label frame: `触发行为标签`
- Label text: `触发行为`

## Common Mistakes

- Adding all possible navigation actions instead of only actions present on the current page.
- Showing back navigation as a business flow.
- Creating a new frame for a simple toast-only response.
- Redrawing a share panel or other available component instead of using its Figma component instance.
- Starting every connector at an arbitrary shared y-position instead of aligning it with the clicked button/control.
- Placing target frames as a single horizontal chain.
- Drawing arrows from multiple primitive shapes.
- Leaving visible or invisible `Hotspot` layers on the page.
- Letting labels all sit at a fixed width when short labels could be smaller.
- Letting connector vertical segments overlap.
- Forgetting visible frame-name labels, which makes exported flow diagrams hard to read.
