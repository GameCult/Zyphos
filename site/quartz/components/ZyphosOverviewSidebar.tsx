import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"

type SidebarLink = {
  label: string
  slug: FullSlug
}

const links: SidebarLink[] = [
  { label: "Zyphos Simulation Brief", slug: "World/Zyphos-Simulation-Brief" as FullSlug },
  { label: "Zyphos Umbros Binary System", slug: "World/Zyphos-Umbros-Binary-System" as FullSlug },
  { label: "Mutable Memory Endosymbiosis", slug: "Ecology/Mutable-Memory-Endosymbiosis" as FullSlug },
  { label: "Zyphos Biosphere Examples", slug: "Ecology/Zyphos-Biosphere-Examples" as FullSlug },
  { label: "Biological Memetic Engine", slug: "Technologies/Biological-Memetic-Engine" as FullSlug },
]

export default (() => {
  const ZyphosOverviewSidebar: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const currentSlug = fileData.slug ?? ("index" as FullSlug)

    return (
      <aside class="zyphos-overview" aria-label="Zyphos overview">
        <p class="zyphos-overview-title">Project Surface</p>
        <p class="zyphos-overview-copy">
          Setting canon lives here. Aquarium renders the demo. Weksa will earn the names.
        </p>
        <nav>
          {links.map((link) => (
            <a href={resolveRelative(currentSlug, link.slug)}>{link.label}</a>
          ))}
        </nav>
      </aside>
    )
  }

  return ZyphosOverviewSidebar
}) satisfies QuartzComponentConstructor
