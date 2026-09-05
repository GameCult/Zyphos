# Zyphos Simulation Brief

The Zyphos demo in `E:\Projects\Aquarium-Engine` should let a viewer see how two civilizations inhabit the same memory-bearing planet differently. On one continent, tree networks hold archives and carry imperial influence. On the other, advanced nomadic societies organize around routes, mobile families, and communal breeding grounds.

This note connects the setting vault to the demo's implementation. It records established facts, proposed ways to make them visible, and questions that still need answers. It is not a complete canon note.

## What the First Pass Should Show

Start at planetary scale. The viewer should be able to distinguish the continents and the ecological structures that preserve memory and shape each civilization's choices. Species anatomy and character detail can wait.

- On the [[Airawa Home Continent]], communities depend on archives held by [[Matriarch Trees]]. The demo should make room for that dependency, the empire's use of living networks to transmit ideas and control, and the disconnected networks that survive outside that transmission system.
- On the [[Sa'ueia Continent]], civilization centers on mobile families, remembered routes, reciprocal obligations, and sacred [[Breeding Grounds]]. Political movement follows family units rather than the dominance of permanent cities.

These differences need to be visible in geography, rather than explained only through character close-ups.

## Who Decides What

The Eusocial Interbeing vault owns setting canon. Aquarium owns rendering, interaction, performance constraints, and demo implementation.

Orbital and energy calculations also constrain the design. If a desired image conflicts with the physics, the worldbuilding should change to fit the math. Physical limits should help shape a compelling world, rather than serve as decoration.

The demo can reveal decisions the setting has not yet made. It cannot make those decisions silently. Before shader code gives a continent its shape, a network its pattern, a settlement its location, or an ecological signal its glow, this note should record either the accepted answer or the unresolved question.

## Established Setting Inputs

### The Planet and Its Sky

Zyphos shares a close binary terrestrial system with [[Zyphos Umbros Binary System|Umbros]], its slightly smaller twin. The planets are mutually tidally locked: each remains in a fixed direction in the other's sky, apart from precession and libration.

Their primary star is dim. Its habitable zone lies close to it, and the ecosystem has less energy available than Earth's.

### Life That Stores and Shares Memory

Zyphos life is founded on [[Mutable Memory Endosymbiosis]]. An endosymbiont living within cells stores memory that can be changed and transmitted between cells.

Sentient, memory-bearing exchange takes place at every level of the biosphere. Organisms can have partial independence, but evolving out of the living network altogether is not a normal option.

### The Two Continents

Tree-mediated memory networks densely cover the Airawa home continent. The [[Airawa Empire]] controls roughly one quarter of it through the [[Biological Memetic Engine]]. The remaining territory is a patchwork of native [[Nation Scale Interbeings]]: living political systems whose boundaries differ in what they allow to pass.

Several [[Disconnected Tree Networks]] survived by cutting their connections to the saturated living substrate.

The Sa'auei'a continent never produced Airawa and did not develop around dependency on mother-tree archives. Its advanced, nomadic society is organized around mobile family units and breeding-ground commons.

## Proposed Visual Approach

The following are design inferences, not additional canon.

### Make Different Forms of Civilization Visible

The Airawa continent's visible organization should follow its memory infrastructure. The renderer needs ways to suggest where ecological transmission is coerced, where connections break, and where networks refuse participation. Ordinary urban layouts covered in greenery would not explain those relationships.

The Sa'auei'a continent needs visible evidence of civilization even where there are no permanent cities. Its mobile society is remembered by the ecology through which it moves. Possible signs include seasonal corridors, reciprocity routes, defended commons, recurring camps, managed migration paths, and breeding-ground clusters. These could take the visual role that fixed clusters of cities would play on a more familiar planet.

Night-side light needs the same distinction. Airawa signals may be controlled and connected as infrastructure. Sa'auei'a signals may appear intermittently, follow routes or seasons, or cluster around commons. These possibilities are not final canon.

### Design Organisms from Zyphos Biology

Bird-, mammal-, insect-, amoeba-, tree-, and fungus-analogues can give designers a starting vocabulary. They should not bring Earth biology with them unchanged.

Anatomy, behavior, reproduction, disease, migration, and politics should develop from mutable cellular memory and eusocial agreements operating at nested scales. The design question is how life works under those conditions, rather than which familiar animal to place in the landscape. [[Zyphos Biosphere Examples]] provides the first concrete starting points.

### Let the Binary System Shape the Sky

Umbros should appear as a stationary, planet-scale presence. An Earth-like day with a decorative moon would misrepresent the system.

In the current working baseline, Umbros spans roughly 10–13 degrees of sky. Near the relevant equatorial path, it produces daily central eclipses lasting around one hour. Longer periods of dimming and partial shadow are possible. Hard eclipses lasting several hours would require changes to the star, planetary masses, or separation.

### Develop Names Through Language

Future names used by inhabitants should come through the neighboring Weksa repo at `E:\Projects\weksa`. They should arise from how speakers understand and categorize their world, the register they use, and their language's phonology, morphology, and history. Direct substitutions for English names would skip that work.

## Open Questions

- What provisional names and rough silhouettes should the two continents have?
- What would make a mother-tree network recognizable from orbit?
- What would an imperial corridor for biological-memetic transmission look like at continental scale?
- How can disconnected networks be represented without implying that the empire can easily spot them?
- What visible pattern would distinguish Sa'auei'a breeding grounds from camps, routes, and ecological partner sites?
- Should the demo show one historical moment, or offer time slices showing seasonal and political change?
- After the first physics pass, what exact primary-star mass and luminosity, and what Zyphos–Umbros separation, should be accepted?
- Which continental or oceanic regions lie under the most reliable daily eclipse track?
