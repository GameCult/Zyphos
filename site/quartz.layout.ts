import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import ZyphosMasthead from "./quartz/components/ZyphosMasthead"
import ZyphosOverviewSidebar from "./quartz/components/ZyphosOverviewSidebar"
import ZyphosSinglePageRedirect from "./quartz/components/ZyphosSinglePageRedirect"
import ZyphosThemeLock from "./quartz/components/ZyphosThemeLock"

const ZyphosGraphShell = Component.GameCultGraphSpaShell({
  stylesheetHref:
    "/static/epiphany-graph/assets/viewer.css?v=graph-20260523-focus9",
  moduleSrc: "/static/epiphany-graph/assets/viewer.js?v=graph-20260523-focus9",
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
