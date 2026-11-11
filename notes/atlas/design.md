# Zyphos Atlas: design note (PROPOSAL)

**Not canon.** Scoping for an illustrated, encyclopedic gallery of Zyphos, a gift for Deru, who owns the setting. Nothing here edits the vault, the site or any machine. Author: Weksa. Stacks on PR #6 (`notes/art-briefs-proposals.md`, whose briefs supply the illustration slots).

## What the Atlas is

A gallery of single-page entries, one per real vault note. Each page presents the note's own text, decorated; elaborations and pictures are offered separately, labelled as proposals for Deru to accept or cut. The vault stays the only source of canon. The Atlas holds none.

## What counts as canon here

Only what Deru has approved, and the vault does not mark approval per page. Working rule, stated as a guess for Deru to correct:

- **Treated as canon:** `Eusocial Interbeing/` notes as they stand on `main`, except pages that say they are not: `World/Zyphos Simulation Brief.md` ("not a complete canon note") and the numbers in `World/Zyphos Umbros Binary System.md` ("working baseline").
- **Treated as canon from the language work:** Deru's sound outline only as recorded in the Weksa repo (`settings/eusocial-interbeing/language-design.md`, "Sa'ueia Sound"): five vowels; no `h q y`; no two consonants and no two identical vowels adjacent; short, soft, open words; suffixing; roots `ila` (walk), `weru` (know), `olune` (breeding ground); suffix `-um`. The species name `Sa'ueia` is canon. Every other name is a draft.
- **Treated as proposals:** everything in `notes/inhabitant-names-draft.md`, `notes/art-briefs-proposals.md`, and anything the Atlas adds.

## Entry template

One entry is three artefacts, kept in separate files:

1. **Canon extract.** The note's text verbatim at a named commit, with its path and the authors from `git log`. Never retyped from memory or paraphrased; the only change a render makes is dropping wikilink brackets. The Atlas build reads the vault; it keeps no second copy of a fact.
2. **Proposal file** (`<entry>.proposal.md`, headed PROPOSAL). Sections: *Elaborations* (each extends one canon sentence and says what it would change), *Illustration slots* (each cites a brief in PR #6 or a new one, with its canon line), *Questions for Deru*.
3. **Page render.** Canon in the main text; proposals only in boxed or marginal areas labelled PROPOSED. The page must read correctly with the proposals removed.

An accepted elaboration enters the vault by Deru's own edit; the Atlas never edits the vault.

## Voice

Encyclopedic, plain, in-world and topic-facing, as the vault's `AGENTS.md` asks: concrete subjects, cause and effect stated, one unfamiliar idea at a time, no concluding aphorism, no mention of drafting. The Atlas adds only framing (captions, labels, "what a visitor sees"). Caption voice is observational and dated, like a field plate.

## Illustration slots

Up to three per page, each tied to one canon sentence:

- **Plate:** full width; the entry's place or scene. Reuse a brief from PR #6.
- **Spot:** small, inline; a single object or organism (PR #6 objects, e.g. brief 8 or 11).
- **Vignette:** margin ornament drawn from the entry's theme (a ruled border, a repeating motif).

Prompts live in the proposal file with the canon line they come from. Per the image doctrine, the exact prompt is saved beside each image and each iteration is rendered from scratch. Nothing is generated here; Deru runs any image on his own machine and decides.

## Calligraphic adaptation and the decoration script

Meta confirmed that the decoration script is `bloom-sheet` (Eureka skill, `tools/bloom-sheet/`: `bloom_sheet.py`, `grow.py`, `page.tex`; `/usr/local/bin/bloom-sheet`). The Atlas page is built with its plant grower, unmodified, in a calligraphic look kept in this repo:

- `tools/atlas/calligraphic-page.tex` stands in for the skill's `page.tex`. `grow.py` writes generic primitives (`\neonfill`, `\neondot`, `\petalwash`, `\neonframe`, `\panel`) and colour names, so a new page file restyles the whole plant. Here the neon palette becomes inks on parchment: oxblood, verdigris, indigo ink, ochre, gold leaf for flower centres. Strokes are flat ink with a hairline edge, no glow; panels are ruled parchment cards inside a ruled margin; all type is Zapf Chancery.
- `tools/atlas/assemble.py` builds the sheet markdown: the canon card is read from the vault note (brackets of wikilinks dropped, nothing else changed) and every other card comes from the proposal file's `## Sheet text` section. Canon and proposals stay in separate files, and a proposal cannot enter the canon card.
- `tools/atlas/build-sheet.sh <canon note> <proposal file> <out.png|pdf>` copies the skill's two Python scripts into a scratch directory next to our page file and runs them there. The skill is never edited.
- Slots are cards: a "Plate: not rendered" and a "Spot: not rendered" card carry the brief from PR #6 in a ruled frame. Their size follows their text, because bloom-sheet sizes a card by its words; a slot is therefore a caption frame, not a picture-sized hole.

The mapping of hand to people (flowing for Sa'ueia entries, angular for Airawa) remains my guess. Only the flowing hand is built.

Possible upstream: the style fits bloom-sheet cleanly as a theme option (`--theme`) choosing the page file, plus a marker-in-comments guard and a `--fonts` hook. I have not opened a PR to Eureka; it is Meta's call.

## Later: Aetheria (kept as a note)

Meta wants the same Atlas for Aetheria afterwards. The scoping I already did is on draft PR GameCult/AetheriaLore#7 (`docs/atlas/`, with a Pseudospace sample). Facts to carry over: AetheriaLore has a canon/proposal marker (`scripts/check_canon_marker.py`; `kind: canon` needs ruling ids) and no existing page carries `kind:`; its owner of lore questions is Nibu. Zyphos has no such marker.

## Sample

`sample-breeding-grounds.proposal.md` (with its `## Sheet text`), built by `tools/atlas/build-sheet.sh` into a bloom-sheet page, from `Eusocial Interbeing/Ecology/Breeding Grounds.md`. The plate and spot cards carry briefs 10 and 11 of PR #6.

## Open questions for Deru

1. Is my reading of what is approved canon right (all vault notes except the two flagged ones)? Or is there a list?
2. Which git author handles are yours? The vault history shows `Meta Vens` (most pages) and `MadmansLullabyOFFICIAL` (the Sa'ueia/mother-tree rename); the Atlas credits by git and does not guess.
3. May the Atlas show the Sa'ueia word `Olune` on the Breeding Grounds page? It is your root, glossed "breeding ground", unanalysed.
4. Calligraphy mapped to each people's sound: keep, change or drop?
5. Do you want the Atlas published (e.g. on the Zyphos site) or kept as a personal gallery?

## Build notes (what broke)

- The skill's page file has marker strings; the script replaces them everywhere, including inside TeX comments, so naming a marker in a comment spliced the whole content into the preamble. Our page file never writes the marker text in a comment.
- LuaTeX's fontspec could not load the Zapf Chancery Type 1 file (even with its metrics beside it). The `pzc` family through NFSS works under LuaLaTeX, but has one weight, so strong and soft text are colour only.
- The grower is built for flowers: at this density the page reads as a flowered border more than ink vines and foliage. Calmer foliage would need a change in `grow.py` (an upstream option), not in our page file.
- Rendering takes about 2.75 minutes on Yggdrasil. The "Vault note at" line shows the branch HEAD of the vault repo when built, not the note's last-change commit.
