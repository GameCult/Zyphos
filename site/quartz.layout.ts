import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import ZyphosMasthead from "./quartz/components/ZyphosMasthead"
import ZyphosOverviewSidebar from "./quartz/components/ZyphosOverviewSidebar"
import ZyphosThemeLock from "./quartz/components/ZyphosThemeLock"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [ZyphosThemeLock(), ZyphosMasthead(), Component.Search()],
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
  afterBody: [],
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
