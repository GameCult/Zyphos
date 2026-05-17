# Zyphos Simulation Brief

This note is the cross-repo design surface for the Zyphos demo in
`E:\Projects\Aquarium-Engine`. It is not a complete canon note. It records what
the renderer needs to know, what the setting has decided, and what questions the
demo raises.

## Authority

The Eusocial Interbeing vault owns setting canon. Aquarium owns rendering,
interaction, performance constraints, and demo implementation.

Zyphos may force design questions into the open, but it does not silently decide
canon. If the demo needs a continent shape, network pattern, glow behavior,
settlement logic, or ecological signal, this note should hold the question or
the accepted answer before shader code treats it as real.

## Demo Premise

Zyphos should show a planet whose large-scale geography makes the setting's core
social ecologies visible:

- [[Airawa Home Continent]]: archival dependency, [[Mother Trees]], imperial
  biological-memetic infrastructure, and surviving disconnected networks.
- [[Sa'auei'a Continent]]: mobile reciprocity, sacred [[Breeding Grounds]],
  remembered routes, and family-unit political movement rather than permanent
  urban dominance.

The first pass should privilege planetary legibility over character detail.
Species anatomy can wait. Continents, ecological memory structures, and
civilizational path dependency cannot.

## Current Canon Inputs

- Zyphos is one member of a close binary terrestrial system with its slightly
  smaller twin, [[Zyphos Umbros Binary System|Umbros]].
- Zyphos and Umbros are mutually tidally locked, so each planet hangs in a fixed
  direction in the other's sky except for precession and libration.
- The primary star is dim, placing the habitable zone close to the star and
  making the ecosystem energy-starved relative to Earth.
- The Airawa home continent is dense with tree-mediated memory networks.
- The [[Airawa Empire]] controls most of that continent through the
  [[Biological Memetic Engine]].
- Several [[Disconnected Tree Networks]] survived by severing themselves from
  the saturated living substrate.
- The Sa'auei'a continent never produced Airawa and was not shaped by
  mother-tree archival dependency.
- Sa'auei'a society is advanced, nomadic, and organized around mobile family
  units and breeding-ground commons.

## Design Inference for Zyphos

The Airawa continent should not read as ordinary urban civilization painted
green. Its visible structure should suggest memory infrastructure, coerced
ecological transmission, and places where the network breaks or refuses.

The Sa'auei'a continent should not read as empty wilderness. Its civilization is
mobile and remembered by ecology, so visible signs may include seasonal corridors,
reciprocity routes, defended commons, recurring camps, managed migration paths,
and breeding-ground clusters rather than fixed city constellations.

Night-side light should be treated carefully. Airawa signals may be controlled,
networked, and infrastructural. Sa'auei'a signals may be intermittent, route-like,
seasonal, or clustered around commons. This is a design inference, not final
canon.

The sky should not behave like a normal Earth-like day with a decorative moon.
Umbros is a stationary planet-scale presence. In the current working baseline it
spans roughly 10-13 degrees of sky and produces daily central eclipses around
one hour long near the relevant equatorial path. Longer dimming and penumbra are
available, but multi-hour hard eclipses require changing the star, masses, or
separation.

## Open Questions

- What are the provisional names and rough silhouettes of the two continents?
- What planetary-scale signature marks a mother-tree network from orbit?
- What does an imperial biological-memetic transmission corridor look like at
  continental scale?
- How do disconnected networks appear without making them obvious to the empire?
- What visible pattern distinguishes Sa'auei'a breeding grounds from camps,
  routes, and ecological partner sites?
- Does Zyphos show one historical moment, or can the demo expose time slices of
  seasonal and political change?
- What exact primary-star mass/luminosity and Zyphos-Umbros separation should be
  accepted after the first physics pass?
- Which continental or oceanic regions live under the most reliable daily
  eclipse track?
