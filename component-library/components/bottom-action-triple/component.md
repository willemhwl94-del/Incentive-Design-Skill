# 组件名称

`BottomActionTriple` / `一排三按钮组件`

## 组件功能

活动页底部三按钮操作区。中间是核心玩法主 CTA，左右是辅助入口，如更多机会、活动规则、二维码、分享、任务等；下方展示剩余互动次数。

## 配置项

### 文字

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `primaryLabel` | string | yes | `追加` | 中间主按钮文案。 |
| `leftLabel` | string | yes | `追加` | 左侧辅助按钮文案。 |
| `rightLabel` | string | yes | `追加` | 右侧辅助按钮文案。 |
| `chanceText` | string | yes | `剩余互动次数` | 底部次数文案。 |

### 图片

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `primaryButtonImage` | image | no | component default | 如果主按钮使用图片皮肤，作为图片填充。 |
| `leftButtonImage` | image | no | component default | 左按钮背景图片槽。 |
| `rightButtonImage` | image | no | component default | 右按钮背景图片槽。 |

### 交互行为

| Field | Type | Required | Default | Notes |
| --- | --- | --- | --- | --- |
| `onPrimaryAction` | function | yes | - | 开始抽奖/转盘/玩法。 |
| `onLeftAction` | function | no | - | 更多机会、任务、邀请等。 |
| `onRightAction` | function | no | - | 规则、二维码、分享等。 |
| `disabled` | boolean | no | false | 无机会或加载中禁用主按钮。 |

## 组件规范

### Layout

- Parent: 390 x 102 in current Figma source.
- Canonical page position: x 0, y 668.
- Center visual group: x 97, y 0, width 196, height 72.
- Left side group: x 0, y 16, width 80, height 56.
- Right side group: x 310, y 16, width 80, height 56.
- Chance text: y 84, height 18.

### Visual Lock

- 左/中/右按钮结构不变。
- 按钮文案必须在各自可见按钮区域内水平、垂直居中。
- 允许按活动主题调整按钮颜色或图片皮肤，但不能改按钮层级、尺寸和顺序。

### States

- Default
- Pressed
- Disabled/no chances
- Loading/spinning

### QA

- Figma 搭页必须使用实例。
- 翻译成中文、英文、葡语后必须重新居中。
- 侧边按钮不增加额外图标或装饰层，除非组件新增变体。

## 组件 Figma 链接

- Section: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13281
- 一排三按钮组件: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13344
- 一排一: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13368
- 一排二: https://www.figma.com/design/6kbxtsIkWd5TGgyBgP3LJq/AI-%E6%99%BA%E8%83%BD%E8%AE%BE%E8%AE%A1%E9%A1%B9%E7%9B%AE?node-id=331-13767
