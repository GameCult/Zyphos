# Eusocial Interbeing Vault Instructions

## Purpose

This repository is an Obsidian vault for an original speculative setting about eusocial inter-species dynamics, ecological bargaining, memetic sovereignty, and technological path dependency.

Treat it as a navigable setting bible, not a heap of shiny organism facts dragged behind a plot.

## Project Conventions

- Keep vault content under `Eusocial Interbeing/`.
- Use Title Case filenames matching the topic name.
- Preserve Obsidian wiki links such as `[[Airawa]]`, `[[Sa'auei'a]]`, `[[Mother Trees]]`, and `[[Biological Memetic Engine]]`.
- Avoid YAML frontmatter unless the whole vault adopts it later.
- Prefer one clear note per species, continent, ecology, faction, technology, conflict, theme, or inspiration source.
- Separate setting canon, design inference, and outside inspiration.
- Mark names as provisional when they are load-bearing but not yet final.

## Writing Style

- Write concise, polished Markdown prose.
- Keep the tone analytical and setting-facing.
- Treat ecology as infrastructure: memory, reproduction, migration, nourishment, immunity, language, and political control should connect.
- Avoid empty praise or anti-praise. Describe how systems work, who benefits, who is harmed, and what contradictions they create.
- Fan-facing inspiration notes should explain the useful pressure without laundering source material into this setting.

## Source Discipline

- Use public sources only for inspiration tracking and comparative analysis.
- Do not copy distinctive named canon from Avatar, Semiosis, or Turtledove into setting canon.
- Link sources in `Eusocial Interbeing/Inspirations/` when a note depends on a public article, official page, or author interview.
- Do not quote long passages from sources. Summarize and link.
- When modern facts may have changed, verify against current public sources before editing.

## Persistent State

This vault carries Ghostlight-style persistence machinery adapted for original lore work.

- `state/map.yaml`: canonical current map of the vault and next action.
- `state/scratch.md`: disposable working memory for one bounded subgoal.
- `state/evidence.jsonl`: distilled evidence ledger for belief-changing research or editing lessons.
- `state/branches.json`: active interpretive or design branches.
- `notes/fresh-workspace-handoff.md`: compact re-entry packet.
- `notes/current-system-map.md`: current vault machinery and organization.
- `notes/implementation-plan.md`: next structural passes.
- `tools/setting_state.py`: state status and evidence helper.
- `tools/prepare_compaction.py`: pre-compaction audit helper.

Before substantial edits, restate the objective, current mechanism, important invariants, and intended effect. If understanding shrinks while the diff grows, stop adding and map the problem.

## Imminent Compaction

When the user says to prepare for imminent compaction, or says compaction is imminent, immediately write hot live context from memory into a new `state/scratch-compaction-<guid>.md` file before reading files, running git, or tidying state. Then run `& 'C:\Users\Meta\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' .\tools\prepare_compaction.py`, repair only the persistence surfaces that need repair, remove the temporary scratch after folding it into durable state, rerun the helper, and commit if the pass is complete.
