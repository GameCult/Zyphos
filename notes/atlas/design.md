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

## Calligraphic adaptation (guess, for Deru)

The vault gives the two peoples different sound: Sa'ueia soft, open and flowing; Airawa sharper, with hard edges (`language-design.md`). The proposal is to let the entry's subject choose the hand: a flowing chancery italic and loose rules for Sa'ueia, Ecology and Biosphere entries; a more angular, heavier hand and straight rules for Airawa and imperial entries. That mapping is mine, not canon. Body text stays legible; calligraphy decorates headings, initials and ornament. The sample uses Zapf Chancery (pdfLaTeX `pzc`), which the build host has.

## Page-decoration script

The LaTeX script Meta mentions is most likely `bloom-sheet`, in the Eureka skill at `tools/bloom-sheet/` (`bloom_sheet.py`, `grow.py`, `page.tex`; `/usr/local/bin/bloom-sheet` on Yggdrasil; install in `gamecult-ops/runbooks/mind-units-yggdrasil.md`). It renders markdown to one neon A4 page with a grown plant and optional SVG visitors. Its look is neon, not calligraphic, so reuse would mean a new `page.tex` look. The sample here is plain pdfLaTeX and does not use it. I found no other LaTeX decoration script in the repos or `/opt/commons`; Meta should confirm which she means.

## Later: Aetheria (kept as a note)

Meta wants the same Atlas for Aetheria afterwards. The scoping I already did is on draft PR GameCult/AetheriaLore#7 (`docs/atlas/`, with a Pseudospace sample). Facts to carry over: AetheriaLore has a canon/proposal marker (`scripts/check_canon_marker.py`; `kind: canon` needs ruling ids) and no existing page carries `kind:`; its owner of lore questions is Nibu. Zyphos has no such marker.

## Sample

`sample-breeding-grounds.tex` and `sample-breeding-grounds.proposal.md`, from `Eusocial Interbeing/Ecology/Breeding Grounds.md`. Slots are framed placeholders; the plate points at brief 10 of PR #6.

## Open questions for Deru

1. Is my reading of what is approved canon right (all vault notes except the two flagged ones)? Or is there a list?
2. Which git author handles are yours? The vault history shows `Meta Vens` (most pages) and `MadmansLullabyOFFICIAL` (the Sa'ueia/mother-tree rename); the Atlas credits by git and does not guess.
3. May the Atlas show the Sa'ueia word `Olune` on the Breeding Grounds page? It is your root, glossed "breeding ground", unanalysed.
4. Calligraphy mapped to each people's sound: keep, change or drop?
5. Do you want the Atlas published (e.g. on the Zyphos site) or kept as a personal gallery?
