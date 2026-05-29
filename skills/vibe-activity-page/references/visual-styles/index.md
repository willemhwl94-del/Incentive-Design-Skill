# Visual Style Index

Use this index to choose one visual style before designing open visual zones.

Important rule:
- Do not invent visual styles.
- Do not add temporary styles from model imagination.
- Only use style files that have been explicitly provided or approved by the user.
- If a requested campaign does not clearly match a ready style, ask for direction or use the page structure with minimal neutral styling.

Open visual zones include:
- full-screen background art
- title art
- gameplay asset skin
- reward/status card skin
- CTA surface treatment
- decorative motifs

The selected style must not override strict component layout, component-library contracts, or conversion hierarchy.

## Selection Workflow

1. Read this index first.
2. Choose the closest `ready` style from `Available Styles`.
3. Read only the selected style file.
4. Apply the selected style's `何时使用`, `页面搭建提示词`, and `素材提示词`.
5. If the closest style is `draft`, do not use it as a source of detail. Ask the user to provide the missing style rules.

## Available Styles

| Style | 中文名 | Status | When to use | Read |
| --- | --- | --- | --- | --- |
| `soft-colorful-card` | 柔和彩色卡片风 | ready | 浅色调、柔和、长期运营、欧洲/美国等地区活动 | `references/visual-styles/soft-colorful-card.md` |
| `retro-journal` | 复古手账风 | ready | 日本等地区的长期营销活动 | `references/visual-styles/retro-journal.md` |
| `dreamy-cloud-campaign` | 梦幻云朵活动页 | ready | 短期激励活动，无明显地区限制 | `references/visual-styles/dreamy-cloud-campaign.md` |

## Adding Or Updating Styles

Each style file must use this structure:

```md
# 风格名称

## Status

ready 或 draft

## 何时使用

...

## 页面搭建提示词

...

## 素材提示词

...
```

Only mark a style as `ready` after the user has provided enough concrete rules.
