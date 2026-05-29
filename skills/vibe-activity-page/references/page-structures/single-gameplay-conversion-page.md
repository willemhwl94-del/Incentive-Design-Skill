# Single Gameplay Conversion Page

## Definition

A mobile-first activity page centered on one core gameplay mechanic. The page has a single conversion path:

```txt
Top Navigation
↓
Head Area
↓
Gameplay Area
↓
Action Area
```

Use this framework for:
- spin wheel
- football shoot
- card draw
- blind box
- slot machine
- scratch card
- flip card
- treasure chest
- lucky number
- gacha machine
- jackpot
- light gambling-style mini games

Do not use it for:
- complex task centers
- multi-section information pages
- content-heavy pages
- brand-only landing pages

## Conversion Goal

Optimize for:
- click-through
- time on page
- repeated participation
- invite/share expansion
- reward claim

## Fixed Structure

## Structure Description

This framework is a vertical, single-thread conversion page. Each section has a clear role and should guide the user from recognition to reward understanding, then to one main action.

### Top Navigation

The page starts with the standard top navigation bar.

Purpose:
- provide app-level navigation and global actions
- keep the activity page consistent with the host app shell

Implementation:
- use the standardized `TopNavigation` component from `../../component-library/components/top-navigation/component.md`
- do not create a page-specific navigation bar

### Primary Title

The primary title appears below the navigation area.

Purpose:
- communicate the core gameplay or the strongest benefit point
- create the first visual anchor of the page

Examples:
- spin to win
- open treasure chest
- invite friends and win gifts
- smash golden eggs

### Secondary Info

The subtitle is optional.

Purpose:
- supplement the gameplay explanation
- show countdown, deadline, chance rule, or short benefit copy

Rules:
- if present, keep it visually weaker than the primary title
- it may be a simple subtitle or a countdown
- it should not compete with the asset area or gameplay area

### Asset Area

Use this section when the gameplay involves rewards, balance, withdrawal, or asset accumulation.

Purpose:
- show the user's current asset total
- explain the withdrawal threshold or reward condition when one exists
- make the user understand how close they are to a redeemable state

Rules:
- place it under the secondary info when both are present
- use the relevant asset/reward component from `../../component-library/components/`
- if there is no reward balance or withdrawal logic, this section may be omitted

### Main Gameplay Area

This is the core visual and interaction area.

Purpose:
- show the user how rewards are earned
- make the primary mechanic instantly understandable

Common mechanics:
- spin wheel
- treasure chest
- golden egg
- lottery machine
- blind box
- scratch card
- card draw

Rules:
- the gameplay object should be dominant and centered
- the gameplay area can be visually adapted by campaign theme
- do not let decorative background or cards hide the core mechanic

### Action Area

This is the main user operation area.

Purpose:
- carry the key action the user should perform on this page
- turn the gameplay intent into a concrete button action

Common actions:
- invite friends
- draw now
- open now
- spin now
- get more chances

Rules:
- the primary action must be visually strongest
- secondary actions may support more chances, QR/share, rules, or extra task entry
- action copy should match the current gameplay and user state

## Reference Instance

The attached Korean spin-wheel page is the first canonical instance for this framework.

Instance traits:
- top navigation from the referenced AI design project: status bar plus 44px nav bar, back action on the left, two circular action buttons on the right
- watercolor mountain background with regional/cultural styling
- large Korean primary title
- countdown directly below the title
- glass-style `AssetImage`
- oversized centered spin wheel as the gameplay object
- large wooden `ButtonImage1` primary spin button
- fixed three-action bottom cluster
- `Opportunity: 5` counter below the action cluster

When using this instance as the source pattern, preserve the strict components below unless the user explicitly asks to change them.

### 0. Top Navigation

Position: top of the 390 x 844 canvas.

Purpose:
- provide app-level back navigation
- provide global actions such as music/help/rules
- preserve the host app shell around the activity page

Required components:
- shared `TopNavigation` from `../../component-library/components/top-navigation/`
- `System Status Bar`
- `Navigation Bar`
- `BackAction`
- `RightActionGroup`
- `Title Area`

Reference contract on a 390 x 844 H5 canvas:
- parent `TopNavigation`: x: 0, y: 0, width: 390, height: 91
- `StatusBar`: x: 0, y: 0, width: 390, height: 47
- `NavigationBar`: x: 0, y: 47, width: 390, height: 44
- `NAV BAR MOCK`: x: 0, y: 47, width: 390, height: 44, padding 16px horizontal and 6px vertical
- left icon button: x: 16, y: 6, width: 32, height: 32
- right icon group: x: 300, y: 6, width: 74, height: 32
- right icon buttons: 32 x 32 each, 10px gap
- `Title Area`: x: 96, y: 0, width: 213, height: 44

Strict requirements:
- `TopNavigation` is required for every `single-gameplay-conversion-page`.
- Use the shared `TopNavigation` component contract from `../../component-library/components/top-navigation/component.md`; do not create a page-specific navigation bar.
- Do not recolor `TopNavigation` to match the campaign visual theme. Navigation colors, borders, opacity, icon color, and status content color must come from the selected Figma variant in the component contract.
- Place `TopNavigation` before the head area in the DOM and visually above all page modules.
- Preserve the selected Figma variant's children, including status bar, navigation bar, left action, right action group, individual action buttons, and title area.
- Use a 44px nav row. Icon visuals are 20px inside 32px circular controls.
- Navigation icons must be horizontally and vertically centered inside their 32 x 32 circular buttons; avoid inline SVG baseline misalignment.
- The head area should normally start at or below y=91.
- Title art may overlap the navigation structure only if the final composition has no visual occlusion with status content, back action, title area text/logo, or right actions.
- Before delivery, inspect the final rendered page and confirm the header/title does not visually block the navigation.
- For the canonical invite/spin-wheel reference, place the primary title art at y=60 from the canvas top. This intentionally allows the title to overlap the navigation zone while keeping nav controls readable.

### 1. Head Area

Position: below top navigation, usually y=91 through the top 35-45% of the page.

Purpose:
- establish campaign identity
- emphasize the reward target
- create urgency

Required components:
- `PrimaryTitle`
- `CountdownText` or `SecondaryInfo`
- `AssetImage`

Open zones:
- title language is English by default; local flavor should be expressed through visuals unless the user explicitly requests localized copy
- background theme
- title treatment such as outline, shadow, or gradient
- urgency mode: plain countdown text or richer contextual copy

Strict requirements:
- the title must be the largest text in the head area
- if using a title art image, keep it as a single image asset and preserve its intrinsic proportions with `object-fit: contain`
- use a title art image asset by default for the primary campaign title; do not render decorative primary titles as live HTML text unless the user explicitly asks for editable text
- for canonical `single-gameplay-conversion-page` art-title layouts, set the title container top to 60px from the canvas top unless the user requests another Figma-derived coordinate
- the title text/content must not be occluded by any later page module or decoration; when visual overlap is possible, keep `PrimaryTitle` above activity visual elements in z-order
- title art may use `pointer-events: none` so the higher visual layer does not block navigation or gameplay clicks
- maintain 0px vertical spacing between `PrimaryTitle` and `CountdownText` or `SecondaryInfo`
- maintain 4px vertical spacing between `CountdownText` or `SecondaryInfo` and `AssetImage`
- the reward status must be visible before the gameplay or immediately adjacent to it
- secondary info must remain readable at 320px
- the head area must not push the gameplay completely below the first viewport

### 0. Background Scene

Role: create campaign atmosphere without breaking the conversion path.

Rules:
- Background elements must form a coherent scene and sit visually behind all UI modules and gameplay assets.
- Use one full-screen background image asset for scenic visual design. CSS may size and position the asset, but must not build the main scene through gradients, pseudo-elements, or multiple decorative HTML fragments.
- Do not use abrupt edge-cut shapes, such as a mountain or building that suddenly disappears at the page edge.
- If a decorative object is cropped by the viewport, make the crop intentional with enough scale, fade, continuation, or overlapping foreground so it feels natural.
- Prefer full-bleed scenic layers, generated background art, clouds, petals, light beams, distant landscape, or floor bands over small isolated CSS fragments.
- Background atmosphere must not overlap, obscure, or compete with `PrimaryTitle`, `AssetImage`, `GameplayAsset`, or `BottomActionTriple`.
- Avoid decorative spans that read as unfinished placeholders.

### 1.1 PrimaryTitle

Role: campaign recognition.

Rules:
- font size: 32-48px
- font weight: 900
- may use outline, shadow, or gradient
- should support localized campaign language when explicitly requested; otherwise use English copy
- must remain on the top visual layer of the campaign content; asset cards, gameplay assets, buttons, and decorative background layers must never cover the title text

Examples:
- `Lucky Spin`
- `Soccer World`
- `立即抽奖`
- `돌리고 받으세요`

### 1.2 SecondaryInfo

Role: urgency or participation context.

Rules:
- font size: 12px for countdown subtitles, following TUX P3
- line height: 16px for countdown subtitles
- font weight: 400 regular for countdown subtitles
- visually weaker than the primary title
- must be legible on the selected background
- use the TUX 4px spacing grid for vertical rhythm; canonical spacing is 0px from title to countdown container and 4px from countdown container to `AssetImage`
- if the secondary info is a countdown, use the plain `CountdownText` treatment: no background, no pill, default copy `过期时间：3d:5h:44m`
- the countdown label, such as `过期时间：`, must be configurable
- countdown values must be real code-driven timers that clamp at zero, not static display text

Examples:
- `过期时间：3d:5h:44m`
- `Only today`
- `Limited Chance`
- `今日剩余 3 次`

### 1.3 AssetImage

Role: make the user feel close to redeeming.

Canonical component: Figma `AssetImage`, main component `资产区2有进度`.

Figma contract on a 390 x 844 H5 canvas:
- x: 32
- y: 140
- width: 326
- height: 120

Internal fixed positions relative to `AssetImage`:
- top row: x: 16, y: 16, width: 294, height: 28
- avatar: x: 16, y: 20, width: 20, height: 20
- amount text: x: 40, y: 16, width: 108, height: 28
- withdraw button: x: 232, y: 16, width: 78, height: 28
- remaining text: x: 28, y: 60, width: 162, height: 18
- progress frame: x: 28, y: 78, width: 270, height: 26
- progress track: x: 28, y: 83, width: 230, height: 12
- progress fill: x: 29, y: 84, width: 166, height: 10
- particle effect: x: 29, y: 79, width: 196, height: 20
- reward group: x: 240, y: 54, width: 62, height: 50
- asset icon: x: 246, y: 54, width: 50, height: 50
- threshold value: x: 240, y: 86, width: 62, height: 17

Nested component lock:
- `粒子特效` is fixed. Do not change its color, opacity, dimensions, or internal layer styling in either code or Figma.
- If a campaign uses this asset component, only surrounding card colors, copy, and supported image/text slots may be adapted. The particle effect remains the original component instance.

Required content:
- small circular user avatar at the left of the balance row
- current balance text: `₩8,000`
- pill button text: `withdraw`
- remaining gap text: `Only ₩2000 to go`
- horizontal progress bar
- threshold marker with coin icon and text: `₩100,000`

Visual rules:
- translucent white/glass surface
- 24-32px rounded corners
- soft white border or glow
- balance row at top
- progress text in the middle
- progress bar near bottom
- threshold marker sits near the right end of the progress bar
- reward number is visually dominant

Locked-by-default rules:
- Do not change structure, copy, absolute size, absolute position, relative size, or internal order unless the user explicitly asks.
- Do not approximate child positions by eye. Use the Figma internal child coordinates above.
- Dynamic values may change only for balance, remaining gap, progress, avatar, and threshold amount.
- Keep `withdraw`, `Only ₩2000 to go`, and `₩100,000` copy style when no custom localization is requested.
- For JP pages, use Figma copy: `8,000円分`, `出金`, `あと2000円分で出金可能`, `10,000円分`.

Behavioral rule:
- use goal-gradient copy such as `还差 25000 金币可提现` when the user is below threshold
- switch CTA to redeem/claim when the threshold is met

## 2. Gameplay Area

Position: middle 45-65% of the page.

Purpose:
- become the absolute visual center
- make the available action obvious
- create reward feedback

Required components:
- `GameplayAsset`
- `RewardVisualization`
- `PrimaryGameplayCTA`

Open zones:
- gameplay type
- object art direction
- motion/feedback style
- reward icon style
- theme scene

Strict requirements:
- the gameplay object must be large, centered, and more visually dominant than the background
- reward value must be understandable before interaction
- the primary gameplay CTA must sit directly below or inside the gameplay object in a clearly tappable location
- the CTA must have pressed, disabled, loading, and completed states when applicable

### 2.1 GameplayAsset

Examples:
- spin wheel
- football shooter
- slot machine
- gacha machine
- scratch card
- treasure chest

Visual rules:
- large
- centered
- high contrast
- strong feedback
- stable dimensions across mobile widths

Implementation rule:
- Calculate the gameplay asset box before generating any gameplay image:
  - max width = canvas width - 20px left margin - 20px right margin
  - available height = bottom action top - reward/status card bottom
  - target height = available height minus balanced top/bottom breathing room
  - target top = reward/status card bottom + top breathing room
  - target aspect ratio = target width / target height
- Use this calculated width, height, and aspect ratio in the image-generation prompt. Do not generate a generic gameplay image first and then try to center it afterward.
- For illustrated gameplay objects, including spin wheels, lottery machines, gacha machines, slot machines, treasure chests, claw machines, and jackpot cabinets, use a generated or designer-provided raster asset as the gameplay object. Do not recreate the gameplay with HTML/CSS wedge segments, nested panels, grids, icons, and decorative shapes unless the user explicitly asks for editable HTML structure.
- The gameplay area may contain only the image asset when the asset already includes the reward grid and primary draw affordance.
- Keep generated gameplay assets transparent-background PNG when they need to sit on the page theme. SVG and WebP are not allowed for gameplay imagery unless the user explicitly overrides the repository asset-format rule; SVG remains allowed only for icons.
- On a 390px H5 canvas, keep at least 20px horizontal margin on both sides of the gameplay image. The gameplay image/container should be no wider than 350px unless the user explicitly requests full-bleed artwork.
- Vertically center the gameplay image in the open gap between `AssetImage` and `BottomActionTriple`. The gameplay object must not visually collide with either the reward/status card or the bottom action buttons.
- Generated gameplay assets should match the calculated bounding box closely and use minimal transparent padding.

### 2.2 RewardVisualization

Role: show what the user can win.

Rules:
- rewards should feel abundant
- use stacked coins, tickets, boxes, cards, cash, or points where relevant
- reward visuals must not cover important text or CTA

### 2.3 PrimaryGameplayCTA

Role: start the core action.

Rules:
- largest button on the page
- placed under the gameplay object or in the most obvious gameplay control position
- high-saturation warm color by default
- height: 48-56px
- obvious pressed state

Examples:
- `Spin`
- `Shoot`
- `Open`
- `Draw`
- `Play`
- `立即抽奖`

## 3. Action Area

Position: lower page or fixed bottom action bar.

Purpose:
- extend participation
- create more chances
- guide invite/share

Required components:
- `SecondaryCTAGroup`
- `ChanceCounter`
- `ShareAction` when sharing or QR is part of the campaign
- `BottomActionTriple` when following the reference instance

Open zones:
- exact action mix
- icon style
- proof module such as recent winners or friend avatars

Strict requirements:
- actions must reinforce the main gameplay, not introduce unrelated paths
- chance count must be visible when opportunities are limited
- if the user has no chances, the strongest secondary action becomes the primary CTA
- all action-area button text must be horizontally and vertically centered inside its own visible button/background container
- translated button labels must be recentered rather than inheriting offsets from the source-language Figma text layer

### 3.1 SecondaryCTAGroup

Common actions:
- `More Chances`
- `Invite Friends`
- `Extra Spins`
- `Watch Ads`
- `Get Bonus`

### 3.1.1 BottomActionTriple

Canonical component: the three bottom controls from the reference instance.

Figma-derived contract on a 390 x 844 H5 canvas:
- parent group `Btn`: x: 0, y: 668, width: 390, height: 120
- center `ButtonImage1`: x: 86, y: 667, width: 218, height: 96
- side buttons have no icon layer; each side button is background rectangle + text only

Internal fixed positions relative to `Btn`:
- left side image: x: 0, y: 20, width: 80, height: 58
- left side background: x: 0, y: 20, width: 80, height: 56
- left text: x: 0, y: 20, width: 80, height: 56, flex centered, text `追加チ\nャンス`
- center `ButtonImage1`: x: 86, y: -1, width: 218, height: 96
- center visual group: x: 97, y: 12, width: 196, height: 72
- center primary text: x: 97, y: 12, width: 196, height: 72, flex centered, text `回す`
- right side image: x: 310, y: 20, width: 80, height: 58
- right side background: x: 310, y: 20, width: 80, height: 56
- right text: x: 310, y: 20, width: 80, height: 56, flex centered, text `QR\nコード`
- chance text: x: 136, y: 106, width: 119, height: 18, text `チャンスはあと1回`

Required layout:
- left secondary button: background rectangle + text only
- center primary button has 72px visible height with text:
  - `돌리기`
- right secondary button: background rectangle + text only
- chance counter below the buttons:
  - `Opportunity: 5`

Locked-by-default rules:
- Do not change structure, copy, absolute size, absolute position, relative size, or button order unless the user explicitly asks.
- Do not approximate child positions by eye. Use the Figma internal child coordinates above.
- Do not add a secondary `Whirl` label inside `ButtonImage1` unless the user explicitly asks.
- The center button must be the largest and visually dominant.
- Left and right buttons must remain smaller side actions with an 80px visible width.
- Button text must be horizontally and vertically centered inside its own visible button/background container.
- This centering rule applies to the left secondary button, center primary button, and right secondary button.
- When localizing to English, center the translated label within the fixed button container instead of inheriting Japanese text offsets.
- Keep the counter directly under the button group.
- Do not add side icons, decorative circles, extra wrappers, or extra visual layers to the left/right side buttons.
- Implement the right side button background inside the `ButtonImage02Image` 80 x 58 container, not as an overflowing child outside the container.
- If side buttons are attached to the left/right canvas edges, implement them fully inside the 390px frame instead of positioning oversized buttons outside the viewport. The edge side should be square, and the inner side should remain rounded.

### 3.2 ShareAction

Use for:
- QR code
- invite link
- native share
- copy link

Rule:
- share action is secondary while chances remain, primary when the user needs sharing to continue.

### 3.3 ChanceCounter

Examples:
- `Opportunity: 5`
- `Remaining: 3`
- `今日剩余 2 次`

Rule:
- place it near both gameplay and action if chance scarcity is the main motivator.

## Visual Layout Rules

- The page is a vertical single-thread flow: title, reward, gameplay, start button, more chances.
- Do not introduce complex branches.
- Background must support the gameplay object, not compete with it.
- Background may use gradient, scene illustration, regional theme, festival theme, football field, casino-inspired scene, or cultural styling.
- The CTA system should form a loop: earn more chances, play, share/invite.
- The classic bottom action layout is left secondary action, center primary action, right share or QR action.

## Implementation Components

Recommended component split:
- `SingleGameplayPage`
- `TopNavigation`
- `StatusBar`
- `NavigationBar`
- `HeaderArea`
- `PrimaryTitle`
- `SecondaryInfo`
- `AssetImage`
- `GameplayArea`
- `GameplayAsset`
- `RewardVisualization`
- `PrimaryGameplayCTA`
- `SecondaryCTAGroup`
- `BottomActionTriple`
- `ChanceCounter`
- `ShareAction`

Gameplay-specific replacements:
- `SpinWheelGameplayAsset`
- `SoccerShootGameplay`
- `ScratchCardGameplay`
- `SlotMachineGameplay`
- `BlindBoxGameplay`
- `ChestOpenGameplay`
- `GachaGameplay`

Keep the page framework stable while swapping only the gameplay component and theme assets.
