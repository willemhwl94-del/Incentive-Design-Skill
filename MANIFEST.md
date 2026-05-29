# Package Manifest

Package: `incentive-design-agent-skill`

This manifest lists the distributable Agent Skill package contents.

## Directory Tree

```txt
incentive-design-agent-skill/
├── component-library/
│   ├── components/
│   │   ├── asset-card/
│   │   │   ├── assets/
│   │   │   │   ├── default-asset-icon.png
│   │   │   │   └── default-profile.png
│   │   │   └── component.md
│   │   ├── bottom-action-triple/
│   │   │   └── component.md
│   │   ├── contribution-module/
│   │   │   └── component.md
│   │   ├── dialog/
│   │   │   └── component.md
│   │   ├── primary-title/
│   │   │   └── component.md
│   │   ├── share-panel/
│   │   │   ├── assets/
│   │   │   │   ├── channel-copy-link.png
│   │   │   │   ├── channel-copy-link.svg
│   │   │   │   ├── channel-facebook.png
│   │   │   │   ├── channel-facebook.svg
│   │   │   │   ├── channel-instagram.png
│   │   │   │   ├── channel-instagram.svg
│   │   │   │   ├── channel-more.png
│   │   │   │   ├── channel-more.svg
│   │   │   │   ├── channel-snapchat.png
│   │   │   │   ├── channel-snapchat.svg
│   │   │   │   ├── channel-whatsapp.png
│   │   │   │   ├── channel-whatsapp.svg
│   │   │   │   ├── image-placeholder.png
│   │   │   │   └── image-placeholder.svg
│   │   │   ├── component.md
│   │   │   ├── share-panel.css
│   │   │   └── share-panel.js
│   │   ├── task-list/
│   │   │   ├── component.md
│   │   │   ├── task-list.css
│   │   │   └── task-list.js
│   │   ├── toast/
│   │   │   └── component.md
│   │   └── top-navigation/
│   │       ├── assets/
│   │       │   ├── music-note-s-alt-centered.svg
│   │       │   └── music-note-s-alt.svg
│   │       ├── component.md
│   │       ├── top-navigation.css
│   │       └── top-navigation.js
│   ├── _component-template.md
│   └── README.md
├── contracts/
│   ├── campaign-request.schema.json
│   ├── page-build-spec.schema.json
│   └── strategy-brief.schema.json
├── docs/
│   └── campaign-skill-suite-protocol.md
├── examples/
│   └── h5/
│       ├── assets/
│       │   ├── samba-mystery-box/
│       │   │   ├── imagegen-source/
│       │   │   │   └── drum_football_chroma.png
│       │   │   ├── share-panel/
│       │   │   │   ├── imagegen-source/
│       │   │   │   │   └── samba-mystery-guide-brazil-chroma.png
│       │   │   │   ├── samba-mystery-guide-brazil.png
│       │   │   │   └── samba-mystery-guide.png
│       │   │   ├── bg_samba_night.png
│       │   │   ├── box_locked_imagine2.png
│       │   │   ├── box_locked.png
│       │   │   ├── box_opened_imagine2.png
│       │   │   ├── box_opened.png
│       │   │   ├── box_worldcup_locked.png
│       │   │   ├── box_worldcup_opened.png
│       │   │   ├── drum_football.png
│       │   │   ├── drum_glow.png
│       │   │   ├── egg_easter.png
│       │   │   └── title_samba_mystery.png
│       │   ├── share-panel/
│       │   │   ├── brazil-samba-share-guide.svg
│       │   │   ├── channel-copy-link.png
│       │   │   ├── channel-copy-link.svg
│       │   │   ├── channel-facebook.png
│       │   │   ├── channel-facebook.svg
│       │   │   ├── channel-instagram.png
│       │   │   ├── channel-instagram.svg
│       │   │   ├── channel-more.png
│       │   │   ├── channel-more.svg
│       │   │   ├── channel-snapchat.png
│       │   │   ├── channel-snapchat.svg
│       │   │   ├── channel-whatsapp.png
│       │   │   ├── channel-whatsapp.svg
│       │   │   ├── image-placeholder.png
│       │   │   └── image-placeholder.svg
│       │   ├── bg-brazil-samba-football.svg
│       │   ├── spin-wheel-brazil-body.svg
│       │   ├── spin-wheel-pointer.svg
│       │   └── title-brazil-samba-football.svg
│       ├── brazil-samba-football-spin-wheel.html
│       ├── samba-mystery-box-page.html
│       ├── share-panel.css
│       └── share-panel.js
├── fixtures/
│   ├── brazil-new-user/
│   │   ├── 01-campaign-request.json
│   │   ├── 02-expected-strategy-brief.json
│   │   └── 03-expected-page-build-spec.json
│   ├── brazil-samba-football/
│   │   └── 03-page-build-spec.json
│   └── samba-mystery-box/
│       └── 03-page-build-spec.json
├── skills/
│   ├── campaign-build-orchestrator/
│   │   ├── agents/
│   │   │   └── openai.yaml
│   │   └── SKILL.md
│   ├── figma-main-flow-annotator/
│   │   ├── agents/
│   │   │   └── openai.yaml
│   │   └── SKILL.md
│   ├── incentive-strategy-planner/
│   │   ├── agents/
│   │   │   └── openai.yaml
│   │   ├── evals/
│   │   ├── references/
│   │   │   └── fission-design-rules.md
│   │   └── SKILL.md
│   └── vibe-activity-page/
│       ├── agents/
│       │   └── openai.yaml
│       ├── references/
│       │   ├── page-structures/
│       │   │   ├── index.md
│       │   │   ├── nurture-progress-conversion-page.md
│       │   │   ├── progress-accumulation-conversion-page.md
│       │   │   └── single-gameplay-conversion-page.md
│       │   ├── visual-styles/
│       │   │   ├── dreamy-cloud-campaign.md
│       │   │   ├── index.md
│       │   │   ├── retro-journal.md
│       │   │   └── soft-colorful-card.md
│       │   ├── code-to-figma-restoration.md
│       │   ├── components.md
│       │   ├── conversion-patterns.md
│       │   ├── figma-interaction-flow-extension.md
│       │   ├── qa-checklist.md
│       │   ├── responsive.md
│       │   ├── spacing.md
│       │   ├── tux-noncolor-visual-rules.md
│       │   └── typography.md
│       ├── templates/
│       │   ├── CashbackPage.tsx
│       │   ├── InviteLotteryPage.tsx
│       │   ├── NurtureProgressPage.tsx
│       │   ├── SingleGameplayConversionPage.tsx
│       │   └── TaskRewardPage.tsx
│       └── SKILL.md
├── .clinerules
├── .cursorrules
├── .windsurfrules
├── agent-skill.json
├── AGENTS.md
├── CLAUDE.md
├── MANIFEST.md
├── README.md
└── SKILL.md
```

## Files

| Path | Size | Type | SHA-256 |
| --- | ---: | --- | --- |
| `.clinerules` | 416 | text | `daa21111062a2f642413f168bb5f5341eff91476afddbe9208ef154cf4d77ee7` |
| `.cursorrules` | 675 | text | `95372a70cf5d64c738e718bde189515da6febb1f255a968fd3ac22efd4783a38` |
| `.windsurfrules` | 489 | text | `715b26f11818b1a38ef1869f633ed7648bd2dc8c6827007206324ab3087de04a` |
| `agent-skill.json` | 2197 | text | `94b6afee92c38b064d6c744977f9b909481faa4c51c1209cca104b80ae6d5f8b` |
| `AGENTS.md` | 3837 | text | `0a38367ba0b7076eb8e4f4e1cbe3c94bb8c09ba4bbdcc7f7e9e698406f535fea` |
| `CLAUDE.md` | 761 | text | `ad6be93ce21964f56c35de0b873d1b3d726c8d0cca3026992a435535ec6d73c9` |
| `component-library/_component-template.md` | 994 | text | `546102f847b6d76f189b14b32645380a486659310e5369ce2ca2262a63695945` |
| `component-library/components/asset-card/assets/default-asset-icon.png` | 4425 | binary | `09abc53a4ed59e78cedd65d75c74bbc216962be9a179926e6bd38fe7d6fb8c50` |
| `component-library/components/asset-card/assets/default-profile.png` | 3609 | binary | `7b4c8936ebf06f68e55de65092ca30f5d5855cb1d33eda6b9f8c966de3b6b1a7` |
| `component-library/components/asset-card/component.md` | 21342 | text | `1a6ddaa0b9c0ee95ae4654b2d8b47f7b08d5b0673bebd3f5679d3a6bd220ad0d` |
| `component-library/components/bottom-action-triple/component.md` | 2855 | text | `59f6b1b3531ca6d60359d46a9eafb6d10a74963a87461383ac3101838a51ea25` |
| `component-library/components/contribution-module/component.md` | 2424 | text | `7a7aa92e90919f173d057a3df941e023ad85df748b00c196af178ed3ab411f80` |
| `component-library/components/dialog/component.md` | 5916 | text | `db2d3a203e998f6b68d3b4d1d3913f358126a23e7fd88909cc424b81b1e52a1b` |
| `component-library/components/primary-title/component.md` | 2846 | text | `937b4afa7761c33c727328b1b4a71a942a6f629c2d208191353e588cbae64991` |
| `component-library/components/share-panel/assets/channel-copy-link.png` | 5244 | binary | `918dd4584559721b2c3ff27fef387149d2f9b6dea88031533afc3d695981ef3a` |
| `component-library/components/share-panel/assets/channel-copy-link.svg` | 566 | text | `2f42aaa028f80cf09aa4b29be74fcf06d9f5198506de2982776064fd44e0deff` |
| `component-library/components/share-panel/assets/channel-facebook.png` | 3985 | binary | `4b64772a2aca392028a495f6f40ce025abc44823710b25eb9a18bb274a630979` |
| `component-library/components/share-panel/assets/channel-facebook.svg` | 278 | text | `662d366a6e6902ceb604b15564a6cd75d301a5d683433af1d06d9b9cec653dac` |
| `component-library/components/share-panel/assets/channel-instagram.png` | 19466 | binary | `870f96c131e3c8cee33d5a654a46b4ac2447780eb4a5ceb0b85f754c58f40b33` |
| `component-library/components/share-panel/assets/channel-instagram.svg` | 664 | text | `5de450de4111e0a1ab60dc3d968ae5e29a2a52b2ae0642786066dc461cc20b9f` |
| `component-library/components/share-panel/assets/channel-more.png` | 3788 | binary | `7f198a480f59f196197786f95debd1e57472ee1736c545c966e1619ae65ff91a` |
| `component-library/components/share-panel/assets/channel-more.svg` | 301 | text | `78174c34cb45744a296dd864a549549ff9dc1637188ac602a395182274ea961d` |
| `component-library/components/share-panel/assets/channel-snapchat.png` | 5122 | binary | `792b7d1f50963e0e9d2388bf2a768413ca56d36f1e920bf16b00343a5256d7b6` |
| `component-library/components/share-panel/assets/channel-snapchat.svg` | 413 | text | `454283072265fd482b5b1327625e277d9b611404f690a506b6ed929c7e4e29f3` |
| `component-library/components/share-panel/assets/channel-whatsapp.png` | 6470 | binary | `3d12cbf60731f6c1b8611c6ec0fd5be72d1e9ab0adce3a00dda157887703e07e` |
| `component-library/components/share-panel/assets/channel-whatsapp.svg` | 405 | text | `933c077307fbcd359068029228717e909009c0c2192d310b133812d0d75cba93` |
| `component-library/components/share-panel/assets/image-placeholder.png` | 413 | binary | `5e44783f2b2874265d1f7ef61a565345f67375cd0c2478802e9ffb54be2c9392` |
| `component-library/components/share-panel/assets/image-placeholder.svg` | 574 | text | `cd92900955a16c04061dc98a24c525bd918b85a2a4b4527152ec757f199cbe0e` |
| `component-library/components/share-panel/component.md` | 11656 | text | `198eb743e2d8302febf78ff9f3e2403baa7f25e8ea2634ac938230df14f9d918` |
| `component-library/components/share-panel/share-panel.css` | 5199 | text | `cdb441bcf7a993341d25ef900f43dce09c2990e4dacdb237915e42dc57b8f0be` |
| `component-library/components/share-panel/share-panel.js` | 6420 | text | `d48f0b35e5f8a5431895f19ec80bd746b633602a130e353cbefc75cee93307fc` |
| `component-library/components/task-list/component.md` | 4259 | text | `e787d1a0b80e758d4e7dad9177eac9e16fce2f239d44106a5ab294c484d5ca3b` |
| `component-library/components/task-list/task-list.css` | 6673 | text | `11a56197a3b079d78b88288c40c493bd432a31125d21ac38b7da57a9481ad154` |
| `component-library/components/task-list/task-list.js` | 5256 | text | `0d90fa8ea66142bfe60c4802a9b1a726126846b3c233afca02eec3e6542da85a` |
| `component-library/components/toast/component.md` | 3379 | text | `f155944774b65802c91ff8b5d0eae638c544ec35d0af969eeeedc224592dc5a3` |
| `component-library/components/top-navigation/assets/music-note-s-alt-centered.svg` | 650 | text | `b86257ba24a951d63ac6c125efd1dd11b7ec33eae9c9b25b75b18c5591aca746` |
| `component-library/components/top-navigation/assets/music-note-s-alt.svg` | 745 | text | `28733d2bcab39623bd91a450e8021ea7637df1764bf8b4e15961b875c5e1dc20` |
| `component-library/components/top-navigation/component.md` | 7355 | text | `01766d3db5783814bbccf17d0a8a0a93cd4cce2c59d01f6eb5998f50de57b04f` |
| `component-library/components/top-navigation/top-navigation.css` | 5867 | text | `f90530144030e87f49593dd655da25ea4ba0096a55293310fe53161b3fdf8ad9` |
| `component-library/components/top-navigation/top-navigation.js` | 6441 | text | `22cb5edeb6756e49f3e5ca81fab12515caeb25fe7283e6e10eb43e0778931a6f` |
| `component-library/README.md` | 3624 | text | `442b2c63ab1e71529b9e87e96f275950ce7abbd7ed8934bd29a7cd0312409052` |
| `contracts/campaign-request.schema.json` | 1262 | text | `6bb3252c78ed87f477624b7894ec9516c659dfb6d09fe2c1d811396de8b2065f` |
| `contracts/page-build-spec.schema.json` | 9330 | text | `cce52a38ff3263541aa3979ef6e29706d0eba11f7f193f35da7e1cd965402921` |
| `contracts/strategy-brief.schema.json` | 4033 | text | `ccd4ef2a70bce684354ca3877f33fc9acdcbaf363d74823f46793b73a7641900` |
| `docs/campaign-skill-suite-protocol.md` | 3076 | text | `cd3a5b13df15522e145784861df1bdb0deacde4c1f2a167463b624d45244ffa4` |
| `examples/h5/assets/bg-brazil-samba-football.svg` | 2584 | text | `896be07a90c569c71514f8928809d2db14eb117f56c90548a1bf916041e9afdc` |
| `examples/h5/assets/samba-mystery-box/bg_samba_night.png` | 80766 | binary | `e18fd3fad8d1384d22407fccac5e9aa2057b68db89068695b56861683e7cb77a` |
| `examples/h5/assets/samba-mystery-box/box_locked_imagine2.png` | 924615 | binary | `b2680ae73faf373856e070227c92ed3604de2465061de02152b1c9521b099a98` |
| `examples/h5/assets/samba-mystery-box/box_locked.png` | 10269 | binary | `02e550404f4879e4fb4fea8df972cc8f9ca541a5167cf6de841fb5f9ed4a192b` |
| `examples/h5/assets/samba-mystery-box/box_opened_imagine2.png` | 1029241 | binary | `2249d5bac1c909b8a25982641c84539e2e70ed89476a0abe6a5fb0094a2f98b5` |
| `examples/h5/assets/samba-mystery-box/box_opened.png` | 13912 | binary | `f9fcb300bd1877bb9dfa9b4a38c5a15de6443bd33f8da36138298063298a9482` |
| `examples/h5/assets/samba-mystery-box/box_worldcup_locked.png` | 12061 | binary | `b68883e39a0a06d7094522b612ca58b763a59ad312372c9a82dcad7ce1876800` |
| `examples/h5/assets/samba-mystery-box/box_worldcup_opened.png` | 15593 | binary | `86159238df9043b01808aeaee16dac486231d1bbd4e635cc99726e752e464ccd` |
| `examples/h5/assets/samba-mystery-box/drum_football.png` | 660987 | binary | `08d69c066449c7996759a3eeaaca54caeb2df2fefd1d7f3508a3521088207fa8` |
| `examples/h5/assets/samba-mystery-box/drum_glow.png` | 22074 | binary | `645d60261c4fdf5fbf94c8b3a5c63b04c81d39258f44179a3e31ba177adec745` |
| `examples/h5/assets/samba-mystery-box/egg_easter.png` | 13269 | binary | `b10b762df909c28da27672c5f889ca908421832aeef1151d666746f9cae352b5` |
| `examples/h5/assets/samba-mystery-box/imagegen-source/drum_football_chroma.png` | 1239409 | binary | `6c76e128e036f361502820f95fc2eba13d4310087e497dbc3cfa126e644509b9` |
| `examples/h5/assets/samba-mystery-box/share-panel/imagegen-source/samba-mystery-guide-brazil-chroma.png` | 1230700 | binary | `02963438862e123e7547c721e89808e7fcffaa83dcdd3f07bd8f251c16518c8a` |
| `examples/h5/assets/samba-mystery-box/share-panel/samba-mystery-guide-brazil.png` | 83890 | binary | `d6757baa655d98555153a3c10ad56550259ebca73cd5b1045087aa2b6f8013ff` |
| `examples/h5/assets/samba-mystery-box/share-panel/samba-mystery-guide.png` | 5720 | binary | `1b87461aeac85d3d8495200407d189ef80616de2ad6ef311b67030938fc83ec3` |
| `examples/h5/assets/samba-mystery-box/title_samba_mystery.png` | 18759 | binary | `b48d2d286ed446929b1c9e5157bdb2011fa6235b513a47a388d3ed776addb291` |
| `examples/h5/assets/share-panel/brazil-samba-share-guide.svg` | 1423 | text | `e2bf0b21f95cab3a6cb014874cba277f544f05b66ff34e8173dc25e08b5cd617` |
| `examples/h5/assets/share-panel/channel-copy-link.png` | 5244 | binary | `918dd4584559721b2c3ff27fef387149d2f9b6dea88031533afc3d695981ef3a` |
| `examples/h5/assets/share-panel/channel-copy-link.svg` | 566 | text | `2f42aaa028f80cf09aa4b29be74fcf06d9f5198506de2982776064fd44e0deff` |
| `examples/h5/assets/share-panel/channel-facebook.png` | 3985 | binary | `4b64772a2aca392028a495f6f40ce025abc44823710b25eb9a18bb274a630979` |
| `examples/h5/assets/share-panel/channel-facebook.svg` | 278 | text | `662d366a6e6902ceb604b15564a6cd75d301a5d683433af1d06d9b9cec653dac` |
| `examples/h5/assets/share-panel/channel-instagram.png` | 19466 | binary | `870f96c131e3c8cee33d5a654a46b4ac2447780eb4a5ceb0b85f754c58f40b33` |
| `examples/h5/assets/share-panel/channel-instagram.svg` | 664 | text | `5de450de4111e0a1ab60dc3d968ae5e29a2a52b2ae0642786066dc461cc20b9f` |
| `examples/h5/assets/share-panel/channel-more.png` | 3788 | binary | `7f198a480f59f196197786f95debd1e57472ee1736c545c966e1619ae65ff91a` |
| `examples/h5/assets/share-panel/channel-more.svg` | 301 | text | `78174c34cb45744a296dd864a549549ff9dc1637188ac602a395182274ea961d` |
| `examples/h5/assets/share-panel/channel-snapchat.png` | 5122 | binary | `792b7d1f50963e0e9d2388bf2a768413ca56d36f1e920bf16b00343a5256d7b6` |
| `examples/h5/assets/share-panel/channel-snapchat.svg` | 413 | text | `454283072265fd482b5b1327625e277d9b611404f690a506b6ed929c7e4e29f3` |
| `examples/h5/assets/share-panel/channel-whatsapp.png` | 6470 | binary | `3d12cbf60731f6c1b8611c6ec0fd5be72d1e9ab0adce3a00dda157887703e07e` |
| `examples/h5/assets/share-panel/channel-whatsapp.svg` | 405 | text | `933c077307fbcd359068029228717e909009c0c2192d310b133812d0d75cba93` |
| `examples/h5/assets/share-panel/image-placeholder.png` | 413 | binary | `5e44783f2b2874265d1f7ef61a565345f67375cd0c2478802e9ffb54be2c9392` |
| `examples/h5/assets/share-panel/image-placeholder.svg` | 574 | text | `cd92900955a16c04061dc98a24c525bd918b85a2a4b4527152ec757f199cbe0e` |
| `examples/h5/assets/spin-wheel-brazil-body.svg` | 2338 | text | `2790536abaadc290c7f05f06ab41d8371e0b5d040e392671c5a30c3c730660e0` |
| `examples/h5/assets/spin-wheel-pointer.svg` | 1314 | text | `0646be0d33ca340f95709da505962eebe0e9ec3d426288c8c2c68a6797b1e451` |
| `examples/h5/assets/title-brazil-samba-football.svg` | 1540 | text | `2727fdc84665dc2dc5c7e2a13f21ad4e7eabda7c709cb80b4eb22127f17ed30c` |
| `examples/h5/brazil-samba-football-spin-wheel.html` | 28496 | text | `1b6142f906c93b63898d11662a03a3138dbd38c64f5b4d5d46dfdb73afcbd994` |
| `examples/h5/samba-mystery-box-page.html` | 37097 | text | `5734c0133e0e89fc5ba1ce0d41e035dc57ab553f9fe85e8f40231a7ab794bfc5` |
| `examples/h5/share-panel.css` | 5504 | text | `da96faa8861793e49ec037782d90a8cb4e496ee82db8940ede99dfd57ba23f79` |
| `examples/h5/share-panel.js` | 6327 | text | `b27027389a40e40b92851c7da8283cf19f87063cd3fe1ab639a28b32b51a0763` |
| `fixtures/brazil-new-user/01-campaign-request.json` | 707 | text | `bac1f6b2a899273150e195e84dfee1241eb8eacf83aaf394a9f18daf5253f984` |
| `fixtures/brazil-new-user/02-expected-strategy-brief.json` | 1516 | text | `8699d076f3a8cd8c58bc4964b99479a644c92cf84cc415ede9f8fb0de5664a12` |
| `fixtures/brazil-new-user/03-expected-page-build-spec.json` | 7904 | text | `70eb7d61be746a3e5a93a22c959e9f412fe4f6018aa5c2e904598d2ace63f9a5` |
| `fixtures/brazil-samba-football/03-page-build-spec.json` | 6038 | text | `40d2d96720def58429062c868c8c95516e3e5d42881bf8765182fee341942447` |
| `fixtures/samba-mystery-box/03-page-build-spec.json` | 4794 | text | `28a74b4a96275905ca0310572ef977b35b9b2acebdb85cd2c97d3451af4131d3` |
| `MANIFEST.md` | 24949 | text | `d47649ad9f1371022d177ff8547dae798f7e0c426f71159e767ca57f190c47a4` |
| `README.md` | 4470 | text | `b2a2632923718fe68a48b33b5b75c84bf0670cfd44892d492c221d365178bbcd` |
| `SKILL.md` | 2724 | text | `c446d3176d9a8407c8e1527bfdb924e3927b831ae4d12c9e079fd0b72888f158` |
| `skills/campaign-build-orchestrator/agents/openai.yaml` | 362 | text | `26ccff105eae661108eb77c2a8f3fefdcae27d9f47febcd578af4c6dc9a0d5a8` |
| `skills/campaign-build-orchestrator/SKILL.md` | 1829 | text | `fb2f36f31b060de07e47963f2022a29978f8bd2647018c8f20c4f914d23609db` |
| `skills/figma-main-flow-annotator/agents/openai.yaml` | 379 | text | `8cc640bc84275653d3a1568dbb95aa11255ca368b89947e78f6e0848e9db2a74` |
| `skills/figma-main-flow-annotator/SKILL.md` | 9092 | text | `1426a8e8ca6c98441dc9382c27be3aa8de10a93eb3b23605ee732645ba4ab7f1` |
| `skills/incentive-strategy-planner/agents/openai.yaml` | 301 | text | `61f9498a18427ddee0591e4bef83b5a161fe520992fc92ff97a279b6b3e3febd` |
| `skills/incentive-strategy-planner/references/fission-design-rules.md` | 5301 | text | `0505c3c70973567c6e664d04442874685fafb329c53221f504084809662e6996` |
| `skills/incentive-strategy-planner/SKILL.md` | 3964 | text | `206a6738e5a627126a84854609e0a4005f131c41b08e0d2775fa2d2376f9585d` |
| `skills/vibe-activity-page/agents/openai.yaml` | 358 | text | `86e89099ac9317f38cd67e43992a2676cee358c8f278ab3449bb85102b84c451` |
| `skills/vibe-activity-page/references/code-to-figma-restoration.md` | 4610 | text | `948a21119e66b5e08ee357a2af81b9ba2222639cd9227ab37e1d27697f1c693a` |
| `skills/vibe-activity-page/references/components.md` | 6088 | text | `107af67eb2ff984805ba3c5a1579d548d14f0a0fb5d28966fdcb28aa89bec00f` |
| `skills/vibe-activity-page/references/conversion-patterns.md` | 1122 | text | `b7be1377c447615d7cdd0eb47e7545694e1e1dc268ce8a4619e45930cdffeb4e` |
| `skills/vibe-activity-page/references/figma-interaction-flow-extension.md` | 7777 | text | `a4bded91d39a64adaa51beb8619c1dd2eacbf3db0cd2da1a7018340c6f15040b` |
| `skills/vibe-activity-page/references/page-structures/index.md` | 6270 | text | `f8e6415964b3d5269eb0f1cdb715513f7c770887525bf2bd1d323e2a98d0f862` |
| `skills/vibe-activity-page/references/page-structures/nurture-progress-conversion-page.md` | 13933 | text | `639f5480bb261ca4eb42680e31bd821c86f09bdcee6de3cc754201786d78da16` |
| `skills/vibe-activity-page/references/page-structures/progress-accumulation-conversion-page.md` | 12911 | text | `74dce19a04e83ab660eeb13b49ea078adbb7ef327e41e0c596e968c761f40459` |
| `skills/vibe-activity-page/references/page-structures/single-gameplay-conversion-page.md` | 22338 | text | `8e169d1deb9849f15abe8094925f1bcc2bde9d404d58594813d5c06a091b861d` |
| `skills/vibe-activity-page/references/qa-checklist.md` | 4850 | text | `ab46cd95e2f9101d2729413e9c4443dfc05f4432d9f17671c990851820113a72` |
| `skills/vibe-activity-page/references/responsive.md` | 1565 | text | `af928015b6d5305897282d069f496ac9f22a8633611ab0813d89465036105a1f` |
| `skills/vibe-activity-page/references/spacing.md` | 2128 | text | `1d809917f96eab259c326e83a1a4e30a6698298369be44f58681c918dd86d10d` |
| `skills/vibe-activity-page/references/tux-noncolor-visual-rules.md` | 3973 | text | `83e9dda9db50c221cb60a474e6551e70cb629c9f47d341f4badc7f36949fc957` |
| `skills/vibe-activity-page/references/typography.md` | 2024 | text | `5e4babeff5c8292ec11725e734e14946bcfa956f3bc7156b3b5d2be2a828300f` |
| `skills/vibe-activity-page/references/visual-styles/dreamy-cloud-campaign.md` | 1947 | text | `64d3637813b432af63638709a1949dcb13b2afd705c0415e0ef4dea13700393d` |
| `skills/vibe-activity-page/references/visual-styles/index.md` | 1922 | text | `b2728a350dd856d62f8661b8c4764e44dbe59203eb11a69c5250ed17e4f5b47d` |
| `skills/vibe-activity-page/references/visual-styles/retro-journal.md` | 1749 | text | `a8bfa11e6e5cca588e6f0963da902f1df1e62109faa3900f1ddc213b191450e8` |
| `skills/vibe-activity-page/references/visual-styles/soft-colorful-card.md` | 1788 | text | `effe0ba42b9820a49579d63a6e905d742d9ab3f6d606904ae7f294d5ed03e46a` |
| `skills/vibe-activity-page/SKILL.md` | 15236 | text | `56034697cc085891c0498189773bc515e0bc6c02375a74808f819c9d8fb98f32` |
| `skills/vibe-activity-page/templates/CashbackPage.tsx` | 4468 | text | `2e3ec3ad3452cf950f32348e799fa0c215643f07a3f0edf6c47fa9b7f7bad45e` |
| `skills/vibe-activity-page/templates/InviteLotteryPage.tsx` | 6068 | text | `a0528b1a4641c2ba8ca725c4941b7db1a258d5333029165b3a8ff8157ebf8289` |
| `skills/vibe-activity-page/templates/NurtureProgressPage.tsx` | 7838 | text | `ee54a375d355d6a84a6e6327df03a26eff33489f9d1bd7726bd9c62f08d27ec8` |
| `skills/vibe-activity-page/templates/SingleGameplayConversionPage.tsx` | 12075 | text | `8f06f63f90e338fd410f86419fc1b057182ba7b730f0e747f59b66c07096cee8` |
| `skills/vibe-activity-page/templates/TaskRewardPage.tsx` | 5156 | text | `c976c2127768bf7b09e98ca9b943132fff4dac68a40ab54334d8ef1006bb562c` |
