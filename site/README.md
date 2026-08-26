# Zyphos Quartz Site

Quartz overlay for the future `https://zyphos.gamecult.org` GitHub Pages site.
The content source is the vault directory `Eusocial Interbeing/`; this `site/`
directory only owns presentation, navigation, and static site assets.

The site follows the same deployment pattern as `AetheriaLore`:

- content directory: `Eusocial Interbeing`
- overlay directory: `site`
- output directory: `quartz-site/public`
- GitHub Pages host: `gamecult.github.io`
- custom domain: `zyphos.gamecult.org`

DNS should point `zyphos.gamecult.org` at GitHub Pages, not Yggdrasil.

## Norn Graph

The fractal biosphere graph uses GameCult-Quartz's shared graph SPA around the
Norn viewer. The adapter reads Quartz's generated
`/static/contentIndex.json`, turns vault notes into architecture nodes, turns
wiki links into edges, computes incoming backlinks for node metadata, and rolls
folder-level link flow into the dataflow graph.

GameCult-Quartz owns that adapter; Norn owns graph interaction and rendering.
Zyphos owns its section order, filtering, placement, and styling in
`site/quartz.layout.ts` and `site/quartz/styles/custom.scss`.

The committed bundle was built from GameCult-Quartz revision `8aa91ed` and Norn
revision `fa4a46b`. Rebuild it before committing adapter, renderer, or graph-policy
changes:

```powershell
node ..\GameCult-Quartz\scripts\build-graph-spa.mjs `
  --siteRoot F:\Projects\Zyphos `
  --outputDir "Eusocial Interbeing/static/norn-graph" `
  --nornRoot F:\Projects\Norn
```

Verify the committed revisions and artifact digests without rebuilding:

```powershell
node ..\GameCult-Quartz\scripts\build-graph-spa.mjs `
  --verify `
  --siteRoot F:\Projects\Zyphos `
  --outputDir "Eusocial Interbeing/static/norn-graph" `
  --nornRoot F:\Projects\Norn
```

The build writes deployable assets into
`Eusocial Interbeing/static/norn-graph/`, which Quartz then copies into the
site output.
