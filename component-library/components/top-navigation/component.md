# 组件名称

`TopNavigation` / `导航栏组件`

## 组件功能

用于页面之间的导航。每个活动页面都必须有导航栏，用来承载状态栏、返回上一级页面、右侧全局动作入口，以及可选标题区域。

## H5 实现

可复用 H5 组件文件：

- `top-navigation.css`
- `top-navigation.js`
- `assets/music-note-s-alt-centered.svg`

页面使用方式：

```html
<link rel="stylesheet" href="../../component-library/components/top-navigation/top-navigation.css" />
<script src="../../component-library/components/top-navigation/top-navigation.js"></script>
<incentive-top-navigation
  variant="two-dark"
></incentive-top-navigation>
```

Activity pages should use the `<incentive-top-navigation>` component instance instead of hand-writing the navigation DOM and CSS inside each page.

Supported Figma variants:

| `variant` | Figma node | Figma name | Size | Status bar | Nav row | Right actions |
| --- | --- | --- | --- | --- | --- | --- |
| `two-dark` | `331:13611` | `双按钮导航（暗色）` | 390 x 91 | 390 x 47 | y 47, h 44 | Music, Question |
| `two-light` | `331:13637` | `双按钮导航（亮色）` | 390 x 91 | 390 x 47 | y 47, h 44 | Music, Question |
| `three-dark` | `331:13612` | `三按钮导航（暗色）` | 390 x 96 | 390 x 52 | y 52, h 44 | Music, Share, More |
| `one-dark` | `404:13177` | `单按钮导航（暗色）` | 390 x 96 | 390 x 52 | y 52, h 44 | More |

The component code must be reused directly. Do not recreate navigation DOM, icon buttons, system bar, or action layout inside activity pages.

Events:

```js
document.querySelector("incentive-top-navigation").addEventListener("top-navigation-back", () => {
  window.history.back();
});

document.querySelector("incentive-top-navigation").addEventListener("top-navigation-action", (event) => {
  const action = event.detail.action;
});
```

## 配置项

### 文字

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `title` | string | no | empty | 标题区可选文案；多数活动页保持隐藏或为空。 |

### 变体

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `variant` | enum | yes | `two-dark` | `two-dark`, `two-light`, `three-dark`, `one-dark`。必须映射到 Figma 变体，不允许临时组合。 |
| `actions` | string | no | variant default | 仅用于调试或明确用户要求。默认按 Figma 变体固定动作。 |

### 图片 / 图标

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `logoImage` | image | no | hidden | 仅在 Figma 变体支持 Logo slot 时使用。 |
| `rightActions[].icon` | enum | yes | - | 仅允许使用组件库内置图标：`Music`, `Question`, `Share`, `More`。 |

### 交互行为

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `onBack` | function | yes | history back | 点击 `NaviBar1IconImage`，返回上一个页面。 |
| `onMusicClick` | function | no | - | 点击 `Music` 按钮。 |
| `onQuestionClick` | function | no | - | 点击 `Question` 按钮。 |
| `onShareClick` | function | no | - | 点击 `Share` 按钮。 |
| `onMoreClick` | function | no | - | 点击 `More` 按钮。 |
| `onRightActionClick` | function | no | - | 统一右侧按钮回调，参数为 action type。 |

## 组件规范

### Layout

- 组件宽度固定为 390，贴页面顶部 x 0, y 0。
- 导航由状态栏和 44px navigation row 组成。
- `NaviBar1IconImage`: x 16, y 6, width 32, height 32，相对 nav row。
- `Title Area`: x 96, y 0, width 213, height 44，相对 nav row。
- Icon button: 32 x 32, inner icon 20 x 20.
- `单按钮导航（暗色）`: 390 x 96, status bar 52, nav row y 52 / h 44; right action group x 315, y 6, width 59, height 32; confirmed right action `More`.
- `双按钮导航（暗色）`: 390 x 91, status bar 47, nav row y 47 / h 44; right action group x 302, y 6, width 72, height 32; confirmed right actions `Music`, `Question`.
- `三按钮导航（暗色）`: 390 x 96, status bar 52, nav row y 52 / h 44; right action group x 231, y 6, width 143, height 32; confirmed right actions `Music`, `Share`, `More`.
- `双按钮导航（亮色）`: 390 x 91, status bar 47, nav row y 47 / h 44; right action group x 300, y 6, width 74, height 32; confirmed right actions `Music`, `Question`.
- `单按钮导航（亮色）` and `三按钮导航（亮色）`: target variants required by the component model, Figma source pending if not present in the file.

### H5 Code Lock

- Use `<incentive-top-navigation variant="..."></incentive-top-navigation>`.
- Do not use emoji, text glyphs, or page-local SVGs for the navigation icons.
- Icons are owned by `top-navigation.js` and must stay inside the component implementation.
- Music uses the Figma-exported `Icon/Music_Note_S_Alt` vector path, normalized into a centered `20 x 20` inline SVG canvas before use.
- Activity pages may listen to `top-navigation-back` and `top-navigation-action`, but must not query internal buttons or mutate internal DOM.
- If a new Figma variant is needed, first add it to this component and document the Figma node.

### Visual Lock

- 导航颜色由 Figma 变体所有，不跟随活动主题重新上色。
- 不改 icon surface、border、opacity、状态栏颜色和按钮尺寸。
- 亮色背景使用暗色版本；暗色背景使用亮色版本。
- 需要不同明暗对比时切换 Figma 变体，而不是局部改色。
- 右侧按钮只能从 `Music`, `Question`, `Share`, `More` 中选择，不能新增未入库图标。

### States

- Default
- Pressed/tapped
- Hidden title/logo slot when unsupported by the selected variant
- Right action hidden when `rightActionCount` is smaller than the variant capacity

### Interaction

```ts
function handleBackClick() {
  window.history.back();
}

function handleRightActionClick(action: "Music" | "Question" | "Share" | "More") {
  onRightActionClick?.(action);
}
```

### QA

- 页面搭建时必须使用实例。
- 每个页面都必须有导航栏。
- 必须位于页面 z-order 顶层。
- 标题图可以视觉靠近导航，但不能遮挡状态栏、返回按钮和右侧动作。
- `NaviBar1IconImage` 必须可点击并返回上一页。
- 右侧可见按钮都必须可点击，且点击热区不小于 32 x 32。
- 背景明暗必须通过选择 `colorMode` 对应 Figma 变体解决，不能一页内手动改色。

## 组件 Figma 链接

- Section: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13391&t=jgYoAiBFUoOfsfUR-4
- 单按钮导航（暗色）: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=404-13177
- 双按钮导航（暗色）: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13611
- 三按钮导航（暗色）: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13612
- 双按钮导航（亮色）: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13637
- 单按钮导航（亮色）: Figma source pending
- 三按钮导航（亮色）: Figma source pending
