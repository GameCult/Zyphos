import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import ZyphosMasthead from "./quartz/components/ZyphosMasthead"
import ZyphosOverviewSidebar from "./quartz/components/ZyphosOverviewSidebar"
import ZyphosSinglePageRedirect from "./quartz/components/ZyphosSinglePageRedirect"
import ZyphosThemeLock from "./quartz/components/ZyphosThemeLock"

const ZyphosGraphShell = Component.GameCultGraphSpaShell({
  stylesheetHref: "/static/norn-graph/assets/viewer.css?v=quartz-8aa91ed-norn-fa4a46b",
  moduleSrc: "/static/norn-graph/assets/viewer.js?v=quartz-8aa91ed-norn-fa4a46b",
  rootClassName: "gamecult-norn-graph-root zyphos-norn-graph-root",
  config: {
    title: "Zyphos Biosphere Graph",
    architectureDescription:
      "Zyphos notes as a navigable ecological atlas. Wiki links connect species, habitats, technologies, conflicts, and the institutions that act through them.",
    blockedSlugPrefixes: ["Inspirations/"],
    sectionOrder: [
      "World",
      "Ecology",
      "Species",
      "Civilizations",
      "Technologies",
      "Conflicts",
      "Themes",
      "Root",
    ],
  },
})

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [ZyphosSinglePageRedirect(), ZyphosThemeLock(), ZyphosMasthead(), Component.Search()],
  afterBody: [],
  footer: Component.Footer({
    links: {},
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs({
        rootName: "Zyphos",
        showCurrentPage: false,
        showRoot: false,
      }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => !page.fileData.slug?.endsWith("/index") && page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => !page.fileData.slug?.endsWith("/index") && page.fileData.slug !== "index",
    }),
  ],
  afterBody: [
    Component.ConditionalRender({
      component: ZyphosGraphShell,
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
  left: [ZyphosOverviewSidebar()],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      rootName: "Zyphos",
      showCurrentPage: false,
      showRoot: false,
    }),
  ],
  left: [],
  right: [],
}
