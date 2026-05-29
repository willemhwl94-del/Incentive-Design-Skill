---
name: incentive-design-agent-skill
description: Use this skill package to plan and build mobile-first incentive campaign H5 pages, including campaign request routing, incentive strategy planning, page framework selection, strict component reuse, visual style selection, implementation guidance, and QA checklist validation. It is designed for Codex, Claude Code, Cursor, Windsurf, Cline, and other file-reading coding agents.
---

# Incentive Design Agent Skill

## Goal

Build mobile-first incentive marketing activity pages from reusable strategy, page-structure, visual-style, component, contract, and QA knowledge.

This package is a portable Agent Skill bundle. It preserves the author's original project structure so agents can progressively read only the files needed for the current task.

## Start Here

For any activity-page task, read these files first:

1. `AGENTS.md`
2. `skills/vibe-activity-page/SKILL.md`
3. `component-library/README.md`

For one-line business requests, read these files first:

1. `docs/campaign-skill-suite-protocol.md`
2. `skills/campaign-build-orchestrator/SKILL.md`
3. `skills/incentive-strategy-planner/SKILL.md`
4. `skills/vibe-activity-page/SKILL.md`

## Active Workflow

```txt
User request
↓
campaign-build-orchestrator
↓
incentive-strategy-planner
↓
vibe-activity-page
↓
Final H5 page
```

## Default Rules

- Default output is H5 unless the user explicitly asks for another stack.
- New runnable campaign cases must be created outside this skill package under `/Users/bytedance/Documents/Incentive Page Cases/{case-name}/`, unless the user explicitly asks to update the curated examples.
- Before building any module, search `component-library/components/`.
- Strict components are owned by `component-library/components/{component}/component.md`.
- Page structures are selected from `skills/vibe-activity-page/references/page-structures/index.md`.
- Visual styles are selected from `skills/vibe-activity-page/references/visual-styles/index.md`.
- Do not invent visual styles. Only use `ready` visual styles or user-provided style rules.
- Business data must live in page-level config, not inside presentational components.
- Generated non-icon visual assets should be PNG by default.

## Key Paths

```txt
AGENTS.md
agent-skill.json
component-library/
contracts/
docs/
examples/
fixtures/
skills/
```

## Agent Compatibility

- Codex: reads `AGENTS.md` and named `SKILL.md` files.
- Claude Code: read this `SKILL.md`, `README.md`, and relevant skill files.
- Cursor / Windsurf / Cline: read `README.md`, this `SKILL.md`, and `agent-skill.json`; then follow the referenced files.
- Custom agents: index `agent-skill.json`, then read files listed under `entrypoints`.
