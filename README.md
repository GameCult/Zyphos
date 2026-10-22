# Eusocial Interbeing

An Obsidian vault for an original biopolitical ecology setting: two continents, two dominant intelligent species, and one empire that found a biological memetic engine so useful it started mistaking the tool for reality.

The project is loosely inspired by Avatar's underused ecological network premise, Sue Burke's plant-negotiation fiction, and Harry Turtledove's path-dependent technology arguments. It is not an Avatar fan setting. The useful corpse has been composted. We move on.

Start at [[Eusocial Interbeing/index]].

**Valuable here:** the setting authority for Zyphos, the alien world behind Fensalir's Zyphos terrain demo. The core is a world model constrained by physics (the twin planets Zyphos and Umbros), life whose cells carry memory-bearing symbionts, and the two civilizations built on that ecology: `Eusocial Interbeing/World/Zyphos Simulation Brief.md` is the bridge to the demo, and `Eusocial Interbeing/Ecology/` and `Eusocial Interbeing/Civilizations/` hold the machinery.

**Problem it solves:** a renderer demo needs a coherent world to simulate, and the world must not turn into a second lore repository inside the engine. This vault is the canon; Fensalir (`src/Aquarium.Zyphos`, `docs/zyphos-eusocial-sync.md` in `GameCult/Fensalir`) is the renderer and interaction testbed that consumes it.

**Entry points:** `Eusocial Interbeing/index.md` (open `Eusocial Interbeing/` as the Obsidian vault), then `Eusocial Interbeing/World/Zyphos Simulation Brief.md`; `Eusocial Interbeing/Game Design/Fractal NPC Simulation Plan.md` for the demo-facing design; `notes/current-system-map.md` and `notes/implementation-plan.md` for how the repo is organized; `tools/setting_state.py` for the `state/` ledger.

**Live versus planned:** live are the baseline vault (species, civilizations, ecology, technologies, conflicts, world and inspiration notes) and its Quartz site. Planned, per `notes/implementation-plan.md`: naming and ontology decisions (names stay provisional pending Weksa language work, and "Eusocial Interbeing" may remain only the vault title), deeper systems such as the Biological Memetic Engine's limits and failure states, and character-facing story hooks.

## Site

The Zyphos public site is a GitHub Pages Quartz site using the same deployment
shape as Aetheria. Vault content lives under `Eusocial Interbeing/`; the Quartz
overlay lives under `site/`; the workflow publishes to GitHub Pages for
`zyphos.gamecult.org`.
