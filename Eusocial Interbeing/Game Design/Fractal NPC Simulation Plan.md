# Fractal NPC Simulation Plan

This plan adapts Aquarium's mapped fractal-domain architecture to NPC behavior. The goal is not to simulate millions of full minds. That is how a design turns into a furnace with a UI. The goal is to simulate nested behavioral domains whose summaries remain true enough when their details are asleep.

The source architecture is GameCult's `Fractal Domains And The Cache That Bites`: semantic intent becomes a spatial domain, a field grammar, an ownership tree, conservative summaries, contribution cache, backend packets, and finally rendering. NPC simulation should mirror that shape.

```text
behavioral intent
-> social / spatial domain
-> species behavior grammar
-> ownership tree
-> conservative behavioral summaries
-> attention / contribution cache
-> simulation packets
-> animation, UI, encounter logic, and narrative events
```

## Research Translation

Geometry clipmaps show how huge terrain can be represented by nested, viewer-centered grids with incremental refill, stable frame cost, and graceful degradation when update bandwidth cannot keep up. NPC simulation needs the same discipline: nearby or narratively hot NPCs get fine state; distant crowds fall back to coarser behavioral fields until the budget allows more detail.

Cube-sphere and mapped-domain work matters because Zyphos is planetary. A crowd does not live in generic world coordinates. It lives in a cube-face tile, route domain, reef channel, breeding-ground commons, mother-tree archive, candle-road corridor, herd body, or imperial district. The domain owns the behavior because the domain defines what actions mean there.

Nanite-style virtualized geometry supplies the central invariant: a parent node must summarize its children conservatively. If the child NPCs are asleep, the crowd summary must still preserve population count, risk, debt, disease pressure, factional tendency, and possible future events within bounded error.

EWA splatting, Gaussian splatting, and LOD-structured Gaussian work translate into behavioral influence support. A herd panic, route rumor, reef warning, or imperial patrol does not affect a perfect circle. It has anisotropic reach shaped by path, wind, water current, visibility, scent, memory trust, and social authority.

Online learning and multi-armed bandits provide the cache policy. The scheduler samples a probabilistic subset of behavioral nodes, preserving exploration so stale or uncertain regions do not fossilize into bad certainty. Learned predictors may rank update priority. They do not replace conservative summaries, hard constraints, or authored invariants.

## Objective

Support Zyphos scenes with millions of possible NPCs and organism-agents while keeping gameplay responsive, readable, and coherent at every zoom level:

- a named Sa'auei'a child with a burden flower;
- a glassback herd responding to eclipse ingress;
- a candle-road corridor rerouting travelers;
- a breeding ground holding thousands of dependents;
- an imperial district compressing local variation into doctrine;
- a continental migration pulse visible only as statistics until the player enters it.

## Core Ownership Rule

If an NPC behavior is about a domain, the domain owns the behavior.

A threadwing's courier decision belongs partly to its body, partly to its route, partly to its flock, and partly to the grove or reef that paid the message. The simulation must not flatten that into "bird AI with tags." Tags are the receipt, not the authority.

Each behavioral claim carries:

```text
claim {
  stableKey
  speciesOrInstitution
  domain
  localFrame
  populationEnvelope
  behaviorPayload
  motiveTags
  memoryChannels
  validScaleRange
  costTier
  seed
  summaryContract
}
```

## Domain Types

### Spatial Domains

- `PlanetTileDomain`: cube face, quadtree path, biome, slope, water, eclipse exposure.
- `RouteDomain`: candle-road segment, crossing, shelter, mineral lick, quarantine gate.
- `AquaticChannelDomain`: reef channel, current band, nursery shelf, storm exposure.
- `GroveDomain`: lantern-tree grove, mother-tree archive edge, root treaty zone.
- `SettlementDomain`: imperial district, Sa'auei'a camp, breeding-ground perimeter.
- `BodyDomain`: individual anatomy, herd array, colony lattice, host-parasite surface.

### Social Domains

- `IndividualDomain`: one high-fidelity agent with body, memory, attention, and agenda.
- `HouseholdDomain`: Sa'auei'a family unit, Airawa caste cell, nest cluster, caretaker group.
- `CohortDomain`: age band, work party, flock, patrol, nursery wave, courier guild.
- `InstitutionDomain`: breeding ground, road authority, reef border, mother archive, imperial bureau.
- `PopulationFieldDomain`: millions of low-detail people or organisms represented as densities and flows.

Spatial and social domains can overlap. A Sa'auei'a family unit crossing a candle road is a household domain moving through a route domain, both negotiating authority.

## Detail Layers

### Layer 0: Continental Fields

Used for millions of beings outside direct play. State is statistical and domain-local.

Tracks:

- population density by species, caste, age, reproductive state, and trust regime;
- migration pressure, hunger pressure, disease pressure, and memory contamination risk;
- energy availability from eclipse cycle, season, water, and route access;
- dominant institutional constraints;
- probability of encounter types and large-scale events.

Update cadence: slow ticks, batched by region, with event-driven invalidation.

Outputs: migration waves, shortage alerts, war pressure, route closures, population deltas, and candidate regions for refinement.

### Layer 1: Regional Cohort Fields

Used for valleys, coastlines, imperial districts, herds, reefs, or road networks the player may affect soon.

Tracks:

- cohorts with shared motive and constraint;
- aggregate mood, trust, debt, fatigue, alarm, and reproductive pressure;
- route choices and bottlenecks;
- institution-level bargaining status;
- local event queues.

Update cadence: medium ticks, budgeted by proximity, visibility, and narrative hooks.

Outputs: visible crowd motion, patrol density, herd posture, market tension, reef channel permission, and route hazard.

### Layer 2: Group Actors

Used when the player can read or alter a group but individual identity is not yet required.

Examples:

- a Sa'auei'a family unit;
- a glassback herd cluster;
- a threadwing flock;
- a lattice ant diagnostic lattice;
- an imperial work crew;
- a candle-road quarantine ring.

Tracks:

- group goal;
- membership count and role composition;
- internal cohesion;
- leader or anchor state;
- contract ledger with nearby domains;
- spawn rules for representative individuals.

Update cadence: frequent when in the active scene, sparse when remote.

Outputs: group steering, group dialogue stance, bargaining offers, threat displays, and individual materialization requests.

### Layer 3: Representative Individuals

Used for readable NPCs in a crowd where the player needs interaction handles but not full life history.

Tracks:

- name or local identifier when needed;
- species template;
- current need;
- memory sketch;
- visible role;
- relation to group summary;
- escalation path into full individual state.

Update cadence: active scene ticks.

Outputs: barks, gestures, visible choices, trade refusal, alarm spread, host-parasite displays, small negotiations.

### Layer 4: Full Individuals

Used for companions, enemies, leaders, witnesses, bonded organisms, or any NPC whose continuity matters.

Tracks:

- persistent identity;
- body state;
- memory graph;
- relationships;
- moral and institutional obligations;
- sensory model;
- planner state;
- private contradiction.

Update cadence: active AI cadence when relevant; slept into summary when offscreen.

Outputs: planning, conversation, betrayal, learning, long-term consequences, and authored narrative hooks.

## Conservative Summaries

Every node must summarize children before it is allowed into the hierarchy. Summary failure means the node cannot sleep safely.

Required summary fields:

```text
summary {
  stableKey
  domain
  populationBounds
  motiveDistribution
  trustBounds
  debtBounds
  dangerBounds
  diseaseBounds
  memoryContaminationBounds
  resourceBounds
  eventPotential
  maxBehaviorError
  nextSafeUpdateTime
  refinementTriggers
}
```

For Zyphos, `memoryContaminationBounds` is not decorative. A region can be calm, fed, and politically explosive because mirror-amoeba echoes or imperial doctrine have changed what local organisms think counts as self.

## Refinement Triggers

Refine from a coarser layer when any of these become true:

- the player can see, hear, smell, touch, or socially query the domain;
- the domain can materially affect player survival, route access, reputation, or memory state;
- a summary bound becomes too wide to answer a gameplay question;
- an event crosses a threshold: birth, death, infection, betrayal, quarantine, panic, eclipse ingress, imperial raid;
- a named NPC or bonded organism enters the domain;
- uncertainty is high and the domain has not been sampled recently;
- authored content requests a precise witness.

Collapse detail when:

- no high-fidelity query can reach it;
- child states can be merged without violating bounds;
- event outcomes have been committed to the parent ledger;
- visible representatives have left or been replaced by summaries;
- the update budget is under pressure and parent error is acceptable.

## Attention Score

The behavioral contribution cache should use a score shaped like rendering contribution, but with game consequences instead of pixels.

```text
visibilityScore = sensoryReach * screenPresence * playerAttention
gameplayScore = survivalRisk + routeAuthority + reputationImpact + objectiveRelevance
narrativeScore = namedContinuity + authoredHook + recentPlayerAction
uncertaintyScore = staleWeight * variance * lowSampleCountBias
costPenalty = estimatedUpdateCost + spawnCost + persistenceCost

attention =
  max(visibilityScore, gameplayScore, narrativeScore)
  * uncertaintyScore
  * domainImportanceBias
  / costPenalty
```

The scheduler updates a probabilistic subset of nodes. It samples current winners, near-threshold candidates, stale regions, and deliberately boring control regions so the model can detect when boring has stopped being true.

## Species Heuristic Packets

Each species page in [[Biosphere/index|Biosphere]] should compile into a behavior packet with the same shape:

```text
speciesBehavior {
  appetite
  memoryChannels
  cooperationTriggers
  defectionTriggers
  threatResponses
  socialContracts
  readableActions
  refinementHints
}
```

Examples:

- [[Biosphere/Primary Producers/Prismwake Mats|Prismwake Mats]] refine when foot traffic, grazing damage, disease concealment, or eclipse return light makes the ledger visible.
- [[Biosphere/Grazers and Browsers/Glassback Grazers|Glassback Grazers]] refine from herd field to individuals when plate states become readable or calf risk changes player choices.
- [[Biosphere/Couriers and Pollinators/Threadwing Couriers|Threadwing Couriers]] refine when a message, nest, grudge, or route testimony becomes actionable.
- [[Biosphere/Decomposers and Recyclers/Candle Fungal Roads|Candle Fungal Roads]] refine at gates, quarantine rings, fruiting waves, and detours.
- [[Biosphere/Parasites and Symbionts/Mirror Amoebae|Mirror Amoebae]] refine when identity, wound repair, or contamination boundaries are under query.
- [[Biosphere/Aquatic Colony Feeders/Choir Reefs|Choir Reefs]] refine when channel permission, nursery safety, or pressure-song interpretation matters.

## Crowd Heuristics

### Millions

Represent as density fields and institutional pressures. Do not spawn individuals. Track only what can change future refinement:

- how many;
- what they need;
- where they are moving;
- what they trust;
- what they fear;
- what authority can redirect them;
- what event would force the layer open.

### Hundreds of Thousands

Represent as regional cohorts with route and resource constraints. Use flow models, not steering agents. Let domains choose coarse movement:

- roads pull, quarantine pushes;
- water channels constrain;
- eclipse creates timed pulses;
- imperial doctrine straightens behavior until it snaps;
- native ecologies preserve redundant, locally contradictory paths.

### Thousands

Represent as group actors plus local density fields. Spawn representative individuals at interaction edges. Keep most bodies as crowd animation packets whose motives come from the group summary.

### Hundreds

Represent as groups with explicit role composition. Give important subgroups short planners. Use local steering, readable gestures, and social contract checks.

### Dozens

Represent as representative individuals, group anchors, and a few full individuals. Run sensory perception and short-horizon planning.

### Named Few

Run full individual state. Their memories, relationships, wounds, tools, and bargains persist. When collapsed, they write a signed summary back into the parent node rather than evaporating into population soup.

## Event Propagation

Events move upward as summaries and downward as refinement pressure.

```text
local event
-> child state mutation
-> parent summary delta
-> neighbor-domain influence packet
-> scheduler attention change
-> optional refinement elsewhere
```

Influence packets need anisotropic support:

- panic travels along herd sightlines and flank contact;
- fungal warnings travel along road moisture and spore traffic;
- reef warnings travel through current and pressure;
- imperial orders travel through doctrine channels and caste enforcement;
- burden-flower gossip travels on hosts and social exposure;
- mirror-amoeba contamination travels through wound, water, gut, and road moisture.

## Memory and Persistence

The simulation should preserve memory at the cheapest valid scale.

- Individual memory: exact enough for relationships, trauma, promises, and identity.
- Group memory: ledger of obligations, injuries, trust shifts, and recent decisions.
- Institution memory: route law, breeding-ground access, archive permissions, doctrine.
- Field memory: statistical residue of player actions, disease, depletion, and population movement.

When detail collapses, children emit memory deltas into the parent. When detail refines, the parent seeds children from those deltas plus species grammar and domain state.

This keeps continuity without pretending every offscreen person is sitting in RAM composing interior monologue. The machine may be lush. It does not need to be ridiculous.

## Backend Packets

Rendering and gameplay receive different packets from the same behavioral tree.

Simulation packets:

- active individual agents;
- group actors;
- cohort flow fields;
- institutional ledgers;
- event queues;
- influence splats.

Animation packets:

- density bands;
- crowd motion vectors;
- representative body states;
- threat displays;
- herd, flock, road, reef, and grove posture.

UI packets:

- readable pressure summaries;
- route trust;
- crowd mood;
- quarantine risk;
- debt and obligation;
- predicted consequence ranges.

Narrative packets:

- candidate witnesses;
- unresolved bargains;
- contradiction seeds;
- named NPC promotion requests;
- aftermath summaries.

## First Slice

Build the smallest proving version:

```text
PlanetTileDomain + RouteDomain
-> Glassback herd field
-> Candle-road contract field
-> group actor refinement at player range
-> representative glassback and road signal NPCs
-> collapse back into herd/road summaries
-> debug overlay for attention score, trust, debt, and bound width
```

Pass conditions:

- a distant herd costs almost nothing;
- approaching the herd refines it into group actors;
- reading plate states promotes a few representatives;
- damaging prismwake mats changes herd and mat summaries;
- the candle road receives the event as a debt/risk delta;
- leaving the area collapses detail without losing the consequence;
- returning later reconstructs a coherent local state.

## Module Boundaries

```text
Aquarium.Engine.Contracts
  Behavioral domains, claims, summaries, packets, debug channels.

Aquarium.Engine.Simulation.FractalNpc
  Pure CPU logic: hierarchy, summaries, refinement, collapse, scoring, scheduler.

Aquarium.Engine.Simulation.Behavior
  Species packets, group planners, individual planners, event propagation.

Aquarium.Engine.Render
  Crowd visualization, influence splats, debug overlays, animation packet consumption.

Aquarium.Zyphos
  Species definitions, ecological contracts, world seeds, institution policies.
```

The renderer does not own the crowd. The individual planner does not own the continent. The species packet does not own route law. Authority lives where the invariant lives.

## Test Plan

- Summary conservativeness: child populations, dangers, debts, and contamination never exceed parent bounds.
- Determinism: same seed and event ledger reconstruct the same representatives.
- Refinement stability: approach and retreat do not create duplicate people or erase obligations.
- Budget pressure: scheduler degrades to parent summaries without blocking frame or simulation ticks.
- Event integrity: local actions propagate upward and laterally through correct domain channels.
- Species contract tests: glassbacks, prismwake mats, candle roads, threadwings, burden flowers, mirror amoebae, lattice ants, lantern trees, and choir reefs each honor their declared triggers.
- Debug visibility: every active node can explain why it is awake, asleep, sampled, refined, or collapsed.

## Open Design Questions

- What is the minimum memory delta needed to reconstruct a named NPC after long absence?
- Which Zyphos institutions can promote a statistical individual into a legally important witness?
- How much player-facing uncertainty is fun before it reads as arbitrary?
- Do imperial domains use the same summary bounds with different policies, or do they require stricter doctrine-specific invariants?
- Can Weksa naming supply stable domain terms for route, archive, contract, and contamination states?

## References

- Frank Losasso and Hugues Hoppe, [Geometry Clipmaps: Terrain Rendering Using Nested Regular Grids](https://hhoppe.com/geomclipmap.pdf).
- Arul Asirvatham and Hugues Hoppe, [Terrain Rendering Using GPU-Based Geometry Clipmaps](https://hhoppe.com/gpugcm.pdf).
- PROJ contributors, [Quadrilateralized Spherical Cube](https://proj.org/en/stable/operations/projections/qsc.html).
- Petr Clarberg, [Cube-to-Sphere Projections for Procedural Texturing and Beyond](https://jcgt.org/published/0007/02/01/paper.pdf).
- Brian Karis, Rune Stubbe, Graham Wihlidal, et al., [A Deep Dive into Nanite Virtualized Geometry](https://advances.realtimerendering.com/s2021/Karis_Nanite_SIGGRAPH_Advances_2021_final.pdf).
- Matthias Zwicker, Hanspeter Pfister, Jeroen van Baar, and Markus Gross, [EWA Volume Splatting](https://vcg.seas.harvard.edu/publications/20011001-ewa-volume-splatting).
- Bernhard Kerbl, Georgios Kopanas, Thomas Leimkuehler, and George Drettakis, [3D Gaussian Splatting for Real-Time Radiance Field Rendering](https://arxiv.org/abs/2308.04079).
- Kerui Ren, Lihan Jiang, Tao Lu, et al., [Octree-GS](https://arxiv.org/abs/2403.17898).
- Peter Auer, Nicolo Cesa-Bianchi, and Paul Fischer, [Finite-time Analysis of the Multiarmed Bandit Problem](https://link.springer.com/article/10.1023/A:1013689704352).
- Steven C. H. Hoi, Doyen Sahoo, Jing Lu, and Peilin Zhao, [Online Learning: A Comprehensive Survey](https://arxiv.org/abs/1802.02871).
