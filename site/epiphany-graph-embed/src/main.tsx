import React from "react"
import { flushSync } from "react-dom"
import ReactDOM from "react-dom/client"
import { EpiphanyGraphViewer } from "../../../../EpiphanyGraph/web/epiphany-graph-viewer/src/lib/EpiphanyGraphViewer"
import type { EpiphanyGraphsState } from "../../../../EpiphanyGraph/web/epiphany-graph-viewer/src/lib/types"
import "./styles.css"

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

const zyphosGraphState: EpiphanyGraphsState = {
  architecture: {
    nodes: [
      {
        id: "memorioplast",
        title: "Memorioplast Substrate",
        status: "verified",
        purpose: "Mutable memory endosymbionts make memory exchange cellular before it becomes culture.",
        mechanism: "Cells store, edit, and transmit local state through symbiotic memory organelles.",
        metaphor: "The biosphere's smallest treaty office.",
      },
      {
        id: "tissue-boundaries",
        title: "Tissue Boundary Politics",
        status: "active",
        purpose: "Immune and repair systems decide what counts as self enough to enter a body.",
        mechanism: "Wounds, grafts, gut traffic, and root sheaths meter memory compatibility by channel.",
        metaphor: "Customs inspection conducted by flesh.",
      },
      {
        id: "organism-contracts",
        title: "Organism Contracts",
        status: "active",
        purpose: "Mobile and rooted beings remain semi-independent while serving larger memory economies.",
        mechanism: "Prismwake mats, threadwings, glassbacks, burden flowers, and lantern trees exchange food, route memory, warning, and sanction.",
        metaphor: "Individuals with several employers and no clean resignation path.",
      },
      {
        id: "colony-routes",
        title: "Colony and Route Bodies",
        status: "active",
        purpose: "Colonies and logistics corridors become stable organs of larger ecological memory.",
        mechanism: "Lattice ants, candle fungal roads, and choir reefs read local history and sell or gift transit.",
        metaphor: "Roads that remember your manners.",
      },
      {
        id: "archive-commons",
        title: "Archives and Commons",
        status: "active",
        purpose: "Long-lived archives and reproductive commons hold continuity beyond mobile lifetimes.",
        mechanism: "Mother trees guard deep memory while breeding grounds bind caretakers, infants, symbionts, and law.",
        metaphor: "Library, nursery, court, and immune organ pretending to be a place.",
      },
      {
        id: "native-nations",
        title: "Native Nation Scale Interbeings",
        status: "verified",
        purpose: "Multispecies territorial bodies manage boundary permeability as foreign policy.",
        mechanism: "Archival, migratory, fungal-road, reef, and wetland polities admit or reject traffic by channel.",
        metaphor: "A border that is alive enough to be offended.",
      },
      {
        id: "imperial-clausiform",
        title: "Imperium airavense clausum",
        status: "verified",
        purpose: "Artificial quarter-continent superorganism with strict boundaries and tuned autonomy.",
        mechanism: "The Biological Memetic Engine authors an impermeable topology where all permitted variation serves imperial goals.",
        metaphor: "A utility function wearing ancestral skin.",
      },
    ],
    edges: [
      {
        id: "cell-to-tissue",
        source_id: "memorioplast",
        target_id: "tissue-boundaries",
        kind: "scales",
        label: "scales",
        mechanism: "Cellular memory compatibility becomes immune and repair policy.",
      },
      {
        id: "tissue-to-organism",
        source_id: "tissue-boundaries",
        target_id: "organism-contracts",
        kind: "bounds",
        label: "bounds",
        mechanism: "Bodies inherit boundary habits from tissue-scale memory law.",
      },
      {
        id: "organism-to-route",
        source_id: "organism-contracts",
        target_id: "colony-routes",
        kind: "routes",
        label: "routes",
        mechanism: "Repeated exchanges stabilize into trails, colonies, and diagnostic circuits.",
      },
      {
        id: "route-to-archive",
        source_id: "colony-routes",
        target_id: "archive-commons",
        kind: "connects",
        label: "connects",
        mechanism: "Routes connect breeding grounds, mother archives, shelters, licks, and corpse gardens.",
      },
      {
        id: "archive-to-nation",
        source_id: "archive-commons",
        target_id: "native-nations",
        kind: "scales",
        label: "scales",
        mechanism: "Archives and commons become durable territorial agency.",
      },
      {
        id: "empire-attacks-native",
        source_id: "imperial-clausiform",
        target_id: "native-nations",
        kind: "invades",
        label: "invades",
        mechanism: "Imperial topology tries to overwrite negotiated permeability with uniform control.",
      },
    ],
  },
  dataflow: {
    nodes: [
      {
        id: "memory-state",
        title: "Mutable Memory State",
        status: "verified",
        purpose: "Local experience becomes transferable biological state.",
        mechanism: "Endosymbionts store route, injury, trust, hunger, and taboo emphasis.",
        metaphor: "Evidence that can breed.",
      },
      {
        id: "compatibility-filter",
        title: "Compatibility Filter",
        status: "active",
        purpose: "Organisms decide which traffic may cross which boundary.",
        mechanism: "Permeability differs for nutrient, symbiont, memory, reproductive, and military channels.",
        metaphor: "Diplomacy as membrane behavior.",
      },
      {
        id: "contract-ledger",
        title: "Contract Ledger",
        status: "active",
        purpose: "Repeated exchange accumulates into debt, trust, warning, and sanction.",
        mechanism: "Mats, roads, reefs, flowers, and herds remember who fed, cheated, healed, or lied.",
        metaphor: "Ecology keeping receipts.",
      },
      {
        id: "route-authority",
        title: "Route Authority",
        status: "active",
        purpose: "Transit becomes governance when places open, close, tax, or reroute movement.",
        mechanism: "Threadwings, fungal roads, lattice ants, and seasonal corridors carry permission.",
        metaphor: "Infrastructure with opinions.",
      },
      {
        id: "sovereign-permeability",
        title: "Sovereign Permeability",
        status: "verified",
        purpose: "At nation scale, boundary policy becomes foreign policy.",
        mechanism: "Native nations apply different rules to each traffic channel instead of one flat border.",
        metaphor: "A treaty made of valves.",
      },
      {
        id: "imperial-uniformity",
        title: "Imperial Uniformity",
        status: "verified",
        purpose: "The Empire replaces negotiated ecology with controlled memetic structure.",
        mechanism: "It allows exactly the autonomy needed for productivity and rejects uncontrolled memory traffic.",
        metaphor: "Harmony with a knife behind it.",
      },
    ],
    edges: [
      {
        id: "state-filter",
        source_id: "memory-state",
        target_id: "compatibility-filter",
        kind: "filtered_by",
        label: "filtered by",
        mechanism: "Memory is useful only if a boundary admits or rewrites it.",
      },
      {
        id: "filter-ledger",
        source_id: "compatibility-filter",
        target_id: "contract-ledger",
        kind: "records",
        label: "records",
        mechanism: "Accepted or rejected traffic becomes remembered precedent.",
      },
      {
        id: "ledger-route",
        source_id: "contract-ledger",
        target_id: "route-authority",
        kind: "authorizes",
        label: "authorizes",
        mechanism: "Debts and trust decide which roads, herds, and reefs open.",
      },
      {
        id: "route-sovereignty",
        source_id: "route-authority",
        target_id: "sovereign-permeability",
        kind: "scales",
        label: "scales",
        mechanism: "Route decisions aggregate into nation-scale boundary regimes.",
      },
      {
        id: "uniformity-overwrites",
        source_id: "imperial-uniformity",
        target_id: "sovereign-permeability",
        kind: "overwrites",
        label: "overwrites",
        mechanism: "The Empire treats local permeability as disorder to be corrected.",
      },
    ],
  },
  links: [
    {
      architecture_node_id: "memorioplast",
      dataflow_node_id: "memory-state",
      relationship: "memory substrate",
    },
    {
      architecture_node_id: "tissue-boundaries",
      dataflow_node_id: "compatibility-filter",
      relationship: "boundary policy",
    },
    {
      architecture_node_id: "organism-contracts",
      dataflow_node_id: "contract-ledger",
      relationship: "organism-scale accounting",
    },
    {
      architecture_node_id: "colony-routes",
      dataflow_node_id: "route-authority",
      relationship: "transit governance",
    },
    {
      architecture_node_id: "native-nations",
      dataflow_node_id: "sovereign-permeability",
      relationship: "foreign policy",
    },
    {
      architecture_node_id: "imperial-clausiform",
      dataflow_node_id: "imperial-uniformity",
      relationship: "artificial topology",
    },
  ],
}

function App() {
  return (
    <main className="zyphos-epiphany-graph-app">
      <GraphErrorBoundary>
        <EpiphanyGraphViewer
          state={zyphosGraphState}
          title="Zyphos Fractal Eusocial Web"
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
