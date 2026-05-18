import React from "react"
import { flushSync } from "react-dom"
import ReactDOM from "react-dom/client"
import { EpiphanyGraphViewer } from "../../../../EpiphanyGraph/web/epiphany-graph-viewer/src/lib/EpiphanyGraphViewer"
import type {
  EpiphanyGraphEdge,
  EpiphanyGraphNode,
  EpiphanyGraphsState,
} from "../../../../EpiphanyGraph/web/epiphany-graph-viewer/src/lib/types"
import "./styles.css"

type QuartzContentEntry = {
  slug: string
  filePath?: string
  title?: string
  links?: string[]
  tags?: string[]
  content?: string
}

type QuartzContentIndex = Record<string, QuartzContentEntry>

declare global {
  interface Window {
    fetchData?: Promise<QuartzContentIndex>
  }
}

type GraphErrorBoundaryState = {
  error: Error | null
}

class GraphErrorBoundary extends React.Component<React.PropsWithChildren, GraphErrorBoundaryState> {
  state: GraphErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <pre className="zyphos-graph-error">
          {this.state.error.message}
          {"\n"}
          {this.state.error.stack}
        </pre>
      )
    }

    return this.props.children
  }
}

const SECTION_ORDER = [
  "World",
  "Ecology",
  "Species",
  "Civilizations",
  "Technologies",
  "Conflicts",
  "Themes",
  "Root",
]

function entryTitle(slug: string, entry?: QuartzContentEntry) {
  if (entry?.title) {
    return entry.title
  }

  return slug
    .split("/")
    .at(-1)!
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function normalizeSlug(slug: string) {
  if (slug.endsWith("/")) {
    return `${slug.slice(0, -1)}/index`
  }

  return slug
}

function sectionForSlug(slug: string) {
  return slug.includes("/") ? slug.split("/")[0] : "Root"
}

function compareSections(left: string, right: string) {
  const leftIndex = SECTION_ORDER.indexOf(left)
  const rightIndex = SECTION_ORDER.indexOf(right)

  if (leftIndex !== -1 || rightIndex !== -1) {
    const orderedLeft = leftIndex === -1 ? SECTION_ORDER.length : leftIndex
    const orderedRight = rightIndex === -1 ? SECTION_ORDER.length : rightIndex

    return orderedLeft - orderedRight
  }

  return left.localeCompare(right)
}

function summarizeContent(entry: QuartzContentEntry) {
  const text = (entry.content ?? "")
    .replace(/\s+/g, " ")
    .replace(/^Table of contents\s*/i, "")
    .trim()

  if (!text) {
    return `Vault note at ${entry.filePath ?? entry.slug}.`
  }

  const sentenceEnd = text.search(/[.!?](\s|$)/)
  const sentence = sentenceEnd >= 0 ? text.slice(0, sentenceEnd + 1) : text

  if (sentence.length <= 220) {
    return sentence
  }

  return `${sentence.slice(0, 217).trim()}...`
}

function validLinkedSlugs(entry: QuartzContentEntry, slugs: Set<string>) {
  return (entry.links ?? [])
    .map(normalizeSlug)
    .filter((targetSlug, index, links) => slugs.has(targetSlug) && links.indexOf(targetSlug) === index)
}

function buildIncomingLinks(entries: Array<[string, QuartzContentEntry]>, slugs: Set<string>) {
  const incoming = new Map<string, string[]>()

  for (const [slug] of entries) {
    incoming.set(slug, [])
  }

  for (const [sourceSlug, entry] of entries) {
    for (const targetSlug of validLinkedSlugs(entry, slugs)) {
      incoming.get(targetSlug)?.push(sourceSlug)
    }
  }

  return incoming
}

function buildSectionEdges(entries: Array<[string, QuartzContentEntry]>, slugs: Set<string>) {
  const edgeCounts = new Map<string, number>()

  for (const [sourceSlug, entry] of entries) {
    const sourceSection = sectionForSlug(sourceSlug)

    for (const targetSlug of validLinkedSlugs(entry, slugs)) {
      const targetSection = sectionForSlug(targetSlug)
      const edgeId = `${sourceSection}->${targetSection}`
      edgeCounts.set(edgeId, (edgeCounts.get(edgeId) ?? 0) + 1)
    }
  }

  return Array.from(edgeCounts.entries()).map(([edgeId, count]) => {
    const [sourceSection, targetSection] = edgeId.split("->")

    return {
      id: `section:${edgeId}`,
      source_id: `section:${sourceSection}`,
      target_id: `section:${targetSection}`,
      kind: sourceSection === targetSection ? "internal_links" : "cross_links",
      label: `${count} ${count === 1 ? "link" : "links"}`,
      mechanism:
        sourceSection === targetSection
          ? `${count} wiki ${count === 1 ? "link stays" : "links stay"} inside ${sourceSection}.`
          : `${count} wiki ${count === 1 ? "link runs" : "links run"} from ${sourceSection} into ${targetSection}.`,
    } satisfies EpiphanyGraphEdge
  })
}

function buildGraphState(contentIndex: QuartzContentIndex): EpiphanyGraphsState {
  const entries = Object.entries(contentIndex)
    .map(([slug, entry]) => {
      const normalizedSlug = normalizeSlug(entry.slug || slug)

      return [normalizedSlug, { ...entry, slug: normalizedSlug }] as [string, QuartzContentEntry]
    })
    .filter(([slug]) => !slug.startsWith("Inspirations/"))
    .sort(([left], [right]) => left.localeCompare(right))

  const entryBySlug = new Map(entries)
  const slugs = new Set(entries.map(([slug]) => slug))
  const incoming = buildIncomingLinks(entries, slugs)

  const architectureNodes: EpiphanyGraphNode[] = entries.map(([slug, entry]) => {
    const outgoingCount = validLinkedSlugs(entry, slugs).length
    const backlinkCount = incoming.get(slug)?.length ?? 0

    return {
      id: slug,
      title: entryTitle(slug, entry),
      status: backlinkCount > 0 ? "linked" : "source",
      purpose: summarizeContent(entry),
      mechanism: `${outgoingCount} outgoing wiki ${outgoingCount === 1 ? "link" : "links"}; ${backlinkCount} incoming ${backlinkCount === 1 ? "backlink" : "backlinks"}. Folder: ${sectionForSlug(slug)}.`,
      metaphor: entry.filePath ?? slug,
    }
  })

  const architectureEdges: EpiphanyGraphEdge[] = entries.flatMap(([sourceSlug, entry]) =>
    validLinkedSlugs(entry, slugs).map((targetSlug, index) => ({
      id: `${sourceSlug}->${targetSlug}:${index}`,
      source_id: sourceSlug,
      target_id: targetSlug,
      kind: "wiki_link",
      label: "links to",
      mechanism: `${entryTitle(sourceSlug, entry)} links to ${entryTitle(targetSlug, entryBySlug.get(targetSlug))}.`,
    })),
  )

  const sections = Array.from(new Set(entries.map(([slug]) => sectionForSlug(slug)))).sort(compareSections)
  const dataflowNodes: EpiphanyGraphNode[] = sections.map((section) => {
    const sectionEntries = entries.filter(([slug]) => sectionForSlug(slug) === section)
    const sectionSlugs = new Set(sectionEntries.map(([slug]) => slug))
    const outgoingCrossSection = sectionEntries.reduce((count, [, entry]) => {
      return count + validLinkedSlugs(entry, slugs).filter((targetSlug) => !sectionSlugs.has(targetSlug)).length
    }, 0)
    const incomingCrossSection = entries.reduce((count, [sourceSlug, entry]) => {
      if (sectionForSlug(sourceSlug) === section) {
        return count
      }

      return count + validLinkedSlugs(entry, slugs).filter((targetSlug) => sectionSlugs.has(targetSlug)).length
    }, 0)

    return {
      id: `section:${section}`,
      title: section,
      status: "active",
      purpose: `${sectionEntries.length} ${sectionEntries.length === 1 ? "note" : "notes"} in this vault section.`,
      mechanism: `${outgoingCrossSection} outgoing cross-section ${outgoingCrossSection === 1 ? "link" : "links"}; ${incomingCrossSection} incoming cross-section ${incomingCrossSection === 1 ? "backlink" : "backlinks"}.`,
      metaphor: "Quartz backlink cluster",
    }
  })

  return {
    architecture: {
      nodes: architectureNodes,
      edges: architectureEdges,
    },
    dataflow: {
      nodes: dataflowNodes,
      edges: buildSectionEdges(entries, slugs),
    },
    links: entries.map(([slug]) => ({
      architecture_node_id: slug,
      dataflow_node_id: `section:${sectionForSlug(slug)}`,
      relationship: "section membership",
    })),
  }
}

async function loadGraphState() {
  const contentIndex = window.fetchData
    ? await window.fetchData
    : await fetch("/static/contentIndex.json").then((response) => response.json() as Promise<QuartzContentIndex>)

  return buildGraphState(contentIndex)
}

function App() {
  const [graphState, setGraphState] = React.useState<EpiphanyGraphsState | null>(null)
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    let cancelled = false

    loadGraphState()
      .then((state) => {
        if (!cancelled) {
          setGraphState(state)
        }
      })
      .catch((caught) => {
        if (!cancelled) {
          setError(caught instanceof Error ? caught : new Error(String(caught)))
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (error) {
    return (
      <pre className="zyphos-graph-error">
        {error.message}
        {"\n"}
        {error.stack}
      </pre>
    )
  }

  if (!graphState) {
    return (
      <main className="zyphos-epiphany-graph-app">
        <div className="zyphos-graph-loading">Loading Quartz backlink graph...</div>
      </main>
    )
  }

  return (
    <main className="zyphos-epiphany-graph-app">
      <GraphErrorBoundary>
        <EpiphanyGraphViewer
          state={graphState}
          title="Zyphos Vault Backlink Web"
        />
      </GraphErrorBoundary>
    </main>
  )
}

function mountZyphosGraph() {
  document.querySelectorAll(".zyphos-epiphany-graph-root").forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      return
    }

    if (element.dataset.ready === "true" && element.childElementCount > 0) {
      return
    }

    const root = ReactDOM.createRoot(element)
    flushSync(() => {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      )
    })
    element.dataset.ready = "true"
  })
}

function scheduleZyphosGraphMount() {
  mountZyphosGraph()
  window.setTimeout(mountZyphosGraph, 50)
  window.setTimeout(mountZyphosGraph, 300)
  window.setTimeout(mountZyphosGraph, 1000)
  window.setTimeout(mountZyphosGraph, 2000)
}

document.addEventListener("nav", scheduleZyphosGraphMount)
document.addEventListener("DOMContentLoaded", scheduleZyphosGraphMount)
scheduleZyphosGraphMount()
