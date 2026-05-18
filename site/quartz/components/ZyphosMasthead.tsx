import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"

type Route = {
  label: string
  slug: FullSlug
  matches: string[]
}

const routes: Route[] = [
  {
    label: "Home",
    slug: "index" as FullSlug,
    matches: ["index"],
  },
  {
    label: "World",
    slug: "World/index" as FullSlug,
    matches: ["World"],
  },
  {
    label: "Biosphere",
    slug: "Ecology/index" as FullSlug,
    matches: ["Ecology", "Species"],
  },
  {
    label: "Graph",
    slug: "Ecology/Fractal-Eusocial-Web" as FullSlug,
    matches: ["Ecology/Fractal-Eusocial-Web"],
  },
  {
    label: "Civilizations",
    slug: "Civilizations/index" as FullSlug,
    matches: ["Civilizations", "Technologies", "Conflicts", "Themes"],
  },
]

function isMatch(currentSlug: string, prefix: string) {
  return currentSlug === prefix || currentSlug.startsWith(`${prefix}/`)
}

function pickActiveRoute(currentSlug: string) {
  return routes
    .flatMap((route) =>
      route.matches
        .filter((prefix) => isMatch(currentSlug, prefix))
        .map((prefix) => ({
          route,
          prefixLength: prefix.length,
        })),
    )
    .sort((a, b) => b.prefixLength - a.prefixLength)[0]?.route
}

export default (() => {
  const ZyphosMasthead: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const currentSlug = fileData.slug ?? ("index" as FullSlug)
    const activeRoute = pickActiveRoute(currentSlug)

    return (
      <section class="zyphos-titlebar">
        <div class="zyphos-titlebar-copy">
          <p class="zyphos-titlebar-title">
            <a href={resolveRelative(currentSlug, "index" as FullSlug)}>Zyphos</a>
          </p>
          <p class="zyphos-titlebar-tagline">
            A close-binary living world rendered through Aquarium and named through Weksa.
          </p>
        </div>
        <nav class="zyphos-titlebar-nav" aria-label="Zyphos sections">
          {routes.map((route) => {
            const active = activeRoute?.slug === route.slug
            return (
              <a
                href={resolveRelative(currentSlug, route.slug)}
                class={active ? "zyphos-nav-chip active" : "zyphos-nav-chip"}
              >
                {route.label}
              </a>
            )
          })}
        </nav>
      </section>
    )
  }

  return ZyphosMasthead
}) satisfies QuartzComponentConstructor
