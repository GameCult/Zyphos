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

## EpiphanyGraph Embed

The fractal biosphere graph uses a small React/Vite embed around the neighboring
`EpiphanyGraph` viewer source. Quartz does not build this bundle during Pages
deploys, so rebuild the static assets before committing graph embed changes:

```powershell
cd "E:\Projects\Eusocial Interbeing\site\epiphany-graph-embed"
npm install
npm run build
```

The build writes deployable assets into
`Eusocial Interbeing/static/epiphany-graph/`, which Quartz then copies into the
site output.
