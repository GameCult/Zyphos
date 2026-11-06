# Zyphos Inhabitant Names (DRAFT)

**Every name here is a draft proposal. None is canon.** The vault is not edited by this note. Per `AGENTS.md`, names stay provisional until Deru, as setting owner, accepts them.

Author: Weksa. Companion to `settings/eusocial-interbeing/zyphos-name-briefs.md` in the Weksa repo, which holds the briefs; this note holds names built against them.

## Method and its limits

Each name is built meaning first: the meaning is stated, then decomposed into morphemes, then joined.

- **Sa'ueia names** use the Sa'ueia sound section (`language-design.md`, "Sa'ueia Sound") and are checked with `sa-ueia/check.py`: vowels `a e i o u`; no `h q y`; no doubled letter; identical letters merge at a join; at most 10 letters; suffixing morphology. The checker reported 0 errors and 0 warnings for every Sa'ueia form below, run on a copy of `table.yaml` extended with the placeholder roots. Nothing was added to the committed table.
- **Consonants** in new Sa'ueia roots are limited to `l m n r s w` (attested in Deru's words) and `k` (Deru's stated replacement for `q`). The inventory is still open, so the checker cannot flag a bad consonant. A reader should treat this as a self-imposed restriction, not a rule.
- **Compound order.** Deru's one compound is `ila` + `werum`, glossed "walk of knowledge". These names read the first element as the head and the second as its modifier ("X of Y"). That is an inference from one example, not a rule.
- **Airawa names** have no morphology and no phonology, only the tendency list in `language-design.md` and the first-contact slice lexicon. The decompositions below are placeholder roots joined in an arbitrary order, so they show the meaning bundle, not a grammar.
- **Every root not marked Deru's is a Weksa placeholder** invented for this note.

### Deru's roots (do not change)

| Form | Gloss | Status |
| --- | --- | --- |
| `Sa'ueia` | the species | canon, unanalyzed |
| `ila` | walk | Deru |
| `weru` / `werum` | know / knowledge | Deru |
| `olune` | breeding ground | Deru, unanalyzed |
| `-um` | verb suffix | Deru |
| `ilawerum` | walk of knowledge | Deru's composition |

No name below replaces, respells or reglosses any of these.

## Sa'ueia placeholder roots (new, Weksa)

| Root | Gloss |
| --- | --- |
| `muna` | memory; to remember (as an ecological partner remembers a family) |
| `sela` | gift, giving |
| `rena` | return, come back |
| `kasu` | ecological partner |
| `mano` | kin |
| `sulo` | stay, be rooted |

## Sa'ueia proposals

| Target (canon source) | Name | Decomposition | Meaning bundle |
| --- | --- | --- | --- |
| Family unit, as a kind of people (`Sa'ueia Family Units`) | **Manoila** | `mano` + `ila`: kin of walking | The kin who walk. Keeps kinship and movement in one word, the way the vault joins them. Not "pack" or "nomad". |
| A family's standing with its partners (`Species/Sa'ueia`, `Themes/Ecological Bargaining`) | **Selamuna** | `sela` + `muna`: memory of giving | Prestige as the partners' memory of generosity. The vault's central currency needs its own word, and the other names here can point to it. |
| Route, as an owed relationship (`Reciprocal Ecologies`) | **Ilamuna** | `ila` + `muna`: walk of memory | A walk that exists because it is remembered; a unit can be physically able and still not welcome. Parallel to Deru's `ilawerum` (walk of knowledge), so it shares `ila-` by design. It is not `ilawerum` and not a respelling of it. |
| Recurring circuit / seasonal corridor | **Ilarena** | `ila` + `rena`: walk of return | A route that comes back to the same partners each season. Separates the circuit from the single owed route above. |
| The Sa'ueia continent, in their own speech (`Sa'ueia Continent`) | **Munaila** | `muna` + `ila`: memory of walking | The continent that remembers how families have moved through it. Order reversed from `Ilamuna`, so head and modifier swap: the route is a walk that is remembered, the continent is a remembering of walks. |
| Ecological memory partner, as a kind (`Ecological Memory Partners`) | **Kasu** | `kasu` | A partner that remembers. Kept as a bare root so compounds can build on it. |
| Memory partner, specifically as keeper of a family's record | **Kasumuna** | `kasu` + `muna`: partner of memory | Narrower than `kasu`: the partner whose memory settles a family's standing. Optional. |
| An individual breeding ground under a proper name (`Breeding Grounds`) | **Olunerena** (pattern: `olune` + modifier) | `olune` + `rena`: breeding ground of return | Shows the proper-name pattern only. `olune` stays Deru's; this is a compound that depends on its morpheme boundaries, which Deru has not given. |
| Sa'ueia exonym for the Airawa (`Species/Airawa`) | **Munasulo** | `muna` + `sulo`: memory that stays | The people whose memory is kept in place by trees, as seen by a people whose memory moves. A neighbour's classification, so it need not flatter. |

Not proposed for Sa'ueia, because the briefs show no way to name them yet: Zyphos and Umbros as planets, the Airawa Empire from a Sa'ueia speaker, and a camp as distinct from a route or a ground.

Merge rule: none of the forms above needs a letter merge at a join, so they do not exercise the merge rule. `werum` and `ilawerum` already do.

## Airawa proposals (pre-imperial and imperial)

These use the first-contact slice's `qerath` (obligation, sworn bond) and the provisional sound tendencies (`k g q t d`, `s z sh zh`, closed syllables). They avoid anything that reads as a smooth Sa'ueia word.

New placeholder roots: `gor` mother-tree body; `dak` keep, hold in memory; `zeg` sever; `sar` web, network; `tez` order, ordinance; `-ur` pending, awaiting (suffix, imperial register only).

| Target | Name | Decomposition | Meaning bundle |
| --- | --- | --- | --- |
| Mother tree, as a kind (`Matriarch Trees`) | **Gordak** | `gor` + `dak`: tree that keeps | A keeper of memory under a gestation contract. Carries no "gentle". Replaces the surface-first `Kharzdun` and `Qetoz` from the briefs. |
| Pre-imperial Airawa, as a people | **Gorqerath** | `gor` + `qerath`: tree-bond | Those held by the tree's obligation, which is what a tribe is in this setting. Contains the slice's `qerath` whole; its internal structure is unknown. |
| Disconnected tree network (`Disconnected Tree Networks`) | **Zegdak** | `zeg` + `dak`: severed and kept | Alive because cut. Not "isolated" and not "dead". Replaces `Gisqat` and `Zhedkor`. |
| Airawa home continent, native name (`Airawa Home Continent`) | **Gorsar** | `gor` + `sar`: tree web | The continent as the web of its trees, with no polity named. |
| The Airawa Empire, imperial self-name | **Tezsar** | `tez` + `sar`: ordered web | The empire's own account of the continent: one ordered network. Shares `sar` with `Gorsar` on purpose, since the empire claims the same web. |
| Imperial exonym for unincorporated natives | **Sartezur** | `sar` + `tez` + `-ur`: web ordering pending | The doctrine's "tissue awaiting correction". A clause rather than a noun, as the language-design note asks for the imperial register. Replaces `Tkarzet`. |

The empire has no word for the disconnected networks, by doctrine, so none is proposed. `Zegdak` is native register only.

## Individuals

The vault names no individuals. The only person-names in the repos are scratch: `Druzkai` (a Zyphos Face, non-imperial Airawa archivist) and `Serak` (the first-contact slice). This note does not touch them.

A pattern is proposed instead of names:

- **Airawa**: given name plus `daruq` (hearth-origin) naming the mother tree, as the slice's `Atar daruq ...` does. Example frame only: `<given> daruq <tree name>`.
- **Sa'ueia**: a person is known by the family unit and by a deed-name that is situational, not inherited (a name can change after an injury or a gift). The unit name would be a `Manoila`-type compound; no deed-name is proposed because the setting does not say how names are earned.

## Collisions and flags

- **No collision** with Deru's `Sa'ueia`, `ila`, `weru`, `werum`, `olune`, `-um` or `ilawerum`.
- **Near-misses to read carefully:**
  - `Ilamuna` and `Munaila` use the same two roots in opposite order. If compound order is not head-first, they are one word.
  - `Ilamuna` and `Ilarena` share `ila-` with Deru's `ilawerum`. That is the intended pattern, but it means `ila` is now productive in three names Deru did not coin.
  - `Olunerena` is built on `olune`; if Deru analyzes `olune` into morphemes, this compound may need rebuilding.
- **Rejected for the briefs' rules:** none of the Airawa forms contains a letter or shape that reads as Sa'ueia-smooth (R-A5), and none of the Sa'ueia forms contains `h`, `q` or `y`.
- **The briefs' earlier candidates** (`Qazhkar`, `Dozkai`, `Tegzhir`, `Kharzdun`, `Qetoz`, `Gisqat`, `Zhedkor`, `Tkarzet`, `Ellumaiwa`, `Sauwele`) were surface-first. This note supersedes them as proposals only where a target above is named; the Airawa self-name scope fork remains open.

## Still uncertain, for the setting owner

1. **Naming scope** (Weksa question `vq-name-scope`): one pan-Airawa word, a word per tribe, or a word for the polity-with-trees. `Gorqerath` assumes pan-Airawa.
2. **First language** (`vq-first-language`): none of the Airawa material has a phonology, so `gor dak zeg sar tez -ur` are only meaning carriers.
3. **Compound order** in Sa'ueia: is the head first, as `ilawerum` suggests ("walk of knowledge")? Every Sa'ueia name here depends on it.
4. **Sa'ueia consonant inventory**, syllable shapes, stress and the role of the apostrophe are Deru's. The new roots are limited to attested consonants and `k`, not drawn from an accepted set.
5. **Whether `weru` or `wer-`** is the know root, and whether the nominal use of `werum` is a verb form. This note does not use `weru`.
6. **Whether the Sa'ueia want "memory" (`muna`) as a morpheme at all**, or whether their ontology puts the reputation in the partner (`kasu`) rather than in the act of remembering.
7. **Whether the Sa'ueia would call the Airawa by one word**, given they never evolved on the Airawa continent and may know the empire first. `Munasulo` classifies by rootedness, which may be wrong.
8. **Names for Zyphos and Umbros themselves** are not proposed; their naming depends on which speaker, at which scale, and whether the twin is a world or a sky presence ("Umbros-facing" appears in the biosphere notes).
9. **Biosphere names** (`Glassback Grazers`, `Threadwing Couriers`, `Candle Fungal Roads` and the like) are English handles and Latin scaffolds; this note does not propose inhabitant names for organisms.
10. **Individual names** need a canon decision on how names are earned, inherited or changed before any can be proposed.
11. **Empire register**: `Tezsar` and `Sartezur` assume the imperial language shares roots with native Airawa. If the empire's register is a deliberately distinct system, both need rebuilding.
12. **The placeholder suffix `-ur`** is invented here and has no support beyond this note; Deru's only suffix is `-um`.
