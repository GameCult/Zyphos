import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { QuartzEmitterPlugin } from "./quartz/plugins/types"
import { Fragment, h } from "preact"
import { zyphosHeroScript } from "./quartz/components/ZyphosHeroScript"

const ZyphosFavicons: QuartzEmitterPlugin = () => ({
  name: "ZyphosFavicons",
  async *emit() {},
  async *partialEmit() {},
  externalResources: () => ({
    additionalHead: [
      () =>
        h(Fragment, {}, [
          h("meta", { property: "twitter:domain", content: "zyphos.gamecult.org" }),
          h("meta", { property: "og:url", content: "https://zyphos.gamecult.org/" }),
          h("meta", { property: "twitter:url", content: "https://zyphos.gamecult.org/" }),
        ]),
    ],
  }),
})

const ZyphosHeroResources: QuartzEmitterPlugin = () => ({
  name: "ZyphosHeroResources",
  async *emit() {},
  async *partialEmit() {},
  externalResources: () => ({
    js: [
      {
        script: zyphosHeroScript,
        loadTime: "afterDOMReady",
        contentType: "inline",
        spaPreserve: true,
      },
    ],
  }),
})

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Zyphos",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-GB",
    baseUrl: "zyphos.gamecult.org",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "Inspirations",
      "Inspirations/**",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: {
          name: "Montserrat",
          weights: [100, 200, 300, 400, 600],
        },
        title: {
          name: "Montserrat",
          weights: [100, 200, 300],
        },
        body: {
          name: "Ubuntu",
          weights: [300, 400, 500, 700],
          includeItalic: true,
        },
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#07110f",
          lightgray: "#16251f",
          gray: "#668077",
          darkgray: "#bdd4ca",
          dark: "#effcf8",
          secondary: "#ffae58",
          tertiary: "#8edfb0",
          highlight: "rgba(142, 223, 176, 0.14)",
          textHighlight: "#ffae5855",
        },
        darkMode: {
          light: "#07110f",
          lightgray: "#16251f",
          gray: "#668077",
          darkgray: "#bdd4ca",
          dark: "#effcf8",
          secondary: "#ffae58",
          tertiary: "#8edfb0",
          highlight: "rgba(142, 223, 176, 0.14)",
          textHighlight: "#ffae5855",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-dark",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.ContentIndex({
        enableSiteMap: false,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      ZyphosFavicons(),
      ZyphosHeroResources(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
