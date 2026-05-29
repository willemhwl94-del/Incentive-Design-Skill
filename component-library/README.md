# Activity Component Library

This directory is the single source of truth for reusable activity-page components.

Each component folder may contain:

- `component.md`: component contract, Figma source, allowed configuration, locked structure, and QA rules.
- runtime files such as `.js`, `.css`, or framework adapters when the component has reusable code.
- `assets/`: locked or default component assets.

Activity pages must reuse component code from this directory whenever a matching component exists. Page-specific code in `examples/` should only pass config, copy, assets, and callbacks into the component; it should not rewrite the component DOM/CSS locally.

## Figma Source

- File: `AI 智能设计项目`
- File key: `6kbxtsIkWd5TGgyBgP3LJq`
- Component page: `组件`
- Component page node: `183:10432`

Current Figma section structure:

| Section | Figma node | Confirmed component frames |
| --- | --- | --- |
| 活动主标题 | pending | `PrimaryTitle` 结构规范，Figma source pending |
| Toast组件 | `481:3532` | `toast/one_row`, `toast/two_row` |
| 资产组件 | `331:11976` | `有进度无标题`, `有进度有标题`, `无进度有标题` |
| 按钮组件 | `331:13281` | `一排三按钮组件`, `一排一`, `一排二` |
| 导航栏组件 | `331:13391` | `双按钮导航（暗色）`, `三按钮导航（暗色）`, `双按钮导航（亮色）` |
| 分享面板 | `332:15383` | `引导分享面板`, `二维码分享面板`, `沉底分享面板` |
| 弹窗组件 | `521:18039` | `无图弹窗`, `有图弹窗` |
| 进贡组件 | `332:18917` | `有进贡` |

## Component Entry Format

Every component document must include these sections:

1. `组件名称`
2. `组件功能`
3. `配置项`
4. `组件规范`
5. `组件 Figma 链接`

Use `_component-template.md` for new component entries.

## Rules

- Component reuse is mandatory-first for all activity pages. Before creating a page-specific module, search this catalog for a matching component.
- Use catalog components for any matching content: navigation, asset/reward cards, primary titles, buttons/action bars, share panels, dialog, toast, contribution modules, and other reusable page sections.
- Reward results from lottery, blind box, spin, scratch, or task-claim flows must use the Dialog component instead of Toast.
- Only create a new page-specific component when the catalog has no suitable match. Document the missing component, why existing components do not fit, and whether the new component should be added back to this catalog.
- Preserve the original Figma source format. If the source is a `FRAME`, copy that frame directly and apply allowed overrides. If the source is a true component or instance, use an instance.
- Keep reusable implementation code with the component folder. Keep page-specific usage code in `examples/`.
- Configuration can change text, images, and supported interaction behavior.
- Locked nested components must not be recolored, resized, detached, or restyled.
- `粒子特效` is locked: keep its original color, opacity, dimensions, and internal styling in both code and Figma.
- If a component has no Figma source yet, document it as `Figma source: pending` and keep implementation details separate from the reusable contract.

## Ownership Boundary

- `component-library/components/*` owns strict reusable component contracts and reusable code.
- `skills/vibe-activity-page/references/*` owns page framework selection, open-zone rules, gameplay guidance, visual rules, and QA workflow.
- `skills/vibe-activity-page/components/` is deprecated and must not contain component implementations.
