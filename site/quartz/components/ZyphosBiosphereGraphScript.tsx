import { QuartzComponent, QuartzComponentConstructor } from "./types"

export const zyphosBiosphereGraphScript = String.raw`
function bootZyphosBiosphereGraph() {
  const mounts = document.querySelectorAll(".zyphos-biosphere-graph")
  if (!mounts.length) return

  const graph = {
    nodes: [
      { id: "memorioplast", title: "Memorioplast", layer: "cellular", x: 0, y: 0, size: 30, purpose: "Mutable memory endosymbiont. Stores, edits, and transmits local cellular experience." },
      { id: "cell_congress", title: "Cell Congress", layer: "cellular", x: -170, y: -70, size: 24, purpose: "Cell clusters negotiate repair, immunity, hunger, and inherited response." },
      { id: "mirror_amoebae", title: "Mirror Amoebae", layer: "microbial", x: 170, y: -70, size: 22, purpose: "Copy and replay nearby memory states in wounds, ponds, stomachs, and root sheaths." },
      { id: "immune_liturgy", title: "Immune Liturgy", layer: "tissue", x: 0, y: -190, size: 24, purpose: "Boundary rituals inside flesh. Decides which memories count as self enough." },
      { id: "prismwake_mats", title: "Prismwake Mats", layer: "organism", x: -330, y: -170, size: 27, purpose: "Wetland sheets that pay gentle grazers with sugar and punish overfeeding." },
      { id: "lantern_trees", title: "Lantern Trees", layer: "organism", x: 330, y: -170, size: 28, purpose: "Umbros-facing canopies that light eclipse routes and tax passage through pulses." },
      { id: "threadwings", title: "Threadwing Couriers", layer: "organism", x: -380, y: 20, size: 24, purpose: "Bird-analogues moving pollen, gut symbionts, route memory, and grudges." },
      { id: "glassbacks", title: "Glassback Grazers", layer: "organism", x: -260, y: 170, size: 26, purpose: "Heat-sharing herd bodies whose translucent plates leak social and immune truth." },
      { id: "lattice_ants", title: "Lattice Ants", layer: "colony", x: 30, y: 190, size: 23, purpose: "Temporary body-bridges and ground-reading memory circuits." },
      { id: "candle_roads", title: "Candle Fungal Roads", layer: "colony", x: 300, y: 120, size: 27, purpose: "Dim mycelial routes that connect shelters, groves, licks, and breeding commons." },
      { id: "choir_reefs", title: "Choir Reefs", layer: "colony", x: 430, y: -20, size: 26, purpose: "Aquatic colonies that negotiate through current, pressure, shelter, and song." },
      { id: "burden_flowers", title: "Burden Flowers", layer: "organism", x: -120, y: 300, size: 22, purpose: "Mobile plant-analogues that carry immune and emotional rumor on traveler hides." },
      { id: "mother_archives", title: "Mother Archives", layer: "archive", x: 230, y: -330, size: 31, purpose: "Long-lived tree networks that hold ancestry, precedent, debt, disaster, and law." },
      { id: "breeding_grounds", title: "Breeding Grounds", layer: "commons", x: -230, y: 360, size: 31, purpose: "Sacred reproductive commons where infants, caretakers, infirm adults, and ecological partners hold continuity." },
      { id: "viator_nations", title: "Viator Nations", layer: "nation", x: -520, y: 280, size: 34, purpose: "Migratory route interbeings whose territory travels through herds, bloom corridors, and debt." },
      { id: "archival_nations", title: "Archival Nations", layer: "nation", x: 120, y: -500, size: 35, purpose: "Mother-tree centered native polities with porous food borders and guarded deep memory." },
      { id: "fungal_nations", title: "Fungal Road Nations", layer: "nation", x: 540, y: 260, size: 34, purpose: "Logistics organisms whose hospitality is accounting with teeth." },
      { id: "reef_nations", title: "Reef Nations", layer: "nation", x: 620, y: -190, size: 33, purpose: "Waterway polities whose borders follow larvae, current, mineral taste, and storm memory." },
      { id: "native_patchwork", title: "Native Patchwork", layer: "continent", x: -210, y: -540, size: 40, purpose: "Three quarters of the Airawa continent: many sovereign interbeings grown by local negotiation." },
      { id: "imperium", title: "Imperium airavense clausum", layer: "empire", x: 520, y: -500, size: 42, purpose: "Artificial quarter-continent clausiform being with impermeable borders and tuned autonomy." },
      { id: "memetic_engine", title: "Biological Memetic Engine", layer: "technology", x: 470, y: -650, size: 29, purpose: "Engineered organisms, rituals, and signal payloads that industrialize coercion through trusted memory channels." },
      { id: "saaueia_mesh", title: "Sa'auei'a Reciprocal Mesh", layer: "civilization", x: -570, y: 470, size: 36, purpose: "Mobile family units moving through remembered ecologies where cooperation must be earned repeatedly." },
    ],
    edges: [
      ["memorioplast", "cell_congress", "stores"],
      ["memorioplast", "mirror_amoebae", "copies"],
      ["cell_congress", "immune_liturgy", "regulates"],
      ["mirror_amoebae", "immune_liturgy", "confuses"],
      ["immune_liturgy", "prismwake_mats", "bounds"],
      ["immune_liturgy", "lantern_trees", "bounds"],
      ["prismwake_mats", "glassbacks", "feeds"],
      ["glassbacks", "burden_flowers", "carries"],
      ["burden_flowers", "breeding_grounds", "reports"],
      ["threadwings", "prismwake_mats", "pollinates"],
      ["threadwings", "lantern_trees", "routes"],
      ["threadwings", "mother_archives", "carries"],
      ["lattice_ants", "candle_roads", "diagnoses"],
      ["lattice_ants", "glassbacks", "reads"],
      ["candle_roads", "breeding_grounds", "connects"],
      ["candle_roads", "fungal_nations", "scales"],
      ["choir_reefs", "reef_nations", "scales"],
      ["mother_archives", "archival_nations", "scales"],
      ["glassbacks", "viator_nations", "scales"],
      ["breeding_grounds", "saaueia_mesh", "anchors"],
      ["viator_nations", "saaueia_mesh", "treaties"],
      ["archival_nations", "native_patchwork", "member"],
      ["viator_nations", "native_patchwork", "member"],
      ["fungal_nations", "native_patchwork", "member"],
      ["reef_nations", "native_patchwork", "member"],
      ["memetic_engine", "imperium", "authors"],
      ["imperium", "native_patchwork", "invades"],
      ["imperium", "archival_nations", "denies"],
      ["imperium", "fungal_nations", "seals"],
      ["imperium", "saaueia_mesh", "misreads"],
      ["native_patchwork", "saaueia_mesh", "possible envoys"],
    ],
  }

  const layerColors = {
    cellular: "#8edfb0",
    microbial: "#b9f6ca",
    tissue: "#73c6e3",
    organism: "#ffae58",
    colony: "#f7d06d",
    archive: "#a7f3d0",
    commons: "#f9a8d4",
    nation: "#c4b5fd",
    continent: "#efefff",
    empire: "#ff6b6b",
    technology: "#f97316",
    civilization: "#7dd3fc",
  }

  mounts.forEach((mount) => {
    if (mount.dataset.ready === "true") return
    mount.dataset.ready = "true"

    const shell = document.createElement("div")
    shell.className = "zyphos-graph-shell"

    const toolbar = document.createElement("div")
    toolbar.className = "zyphos-graph-toolbar"

    const title = document.createElement("div")
    title.className = "zyphos-graph-title"
    title.innerHTML = "<strong>Fractal Eusocial Web</strong><span>Memory, matter, boundary, and sovereignty channels.</span>"

    const controls = document.createElement("div")
    controls.className = "zyphos-graph-controls"
    const zoomIn = graphButton("+", "Zoom in")
    const zoomOut = graphButton("-", "Zoom out")
    const reset = graphButton("Reset", "Reset view")
    controls.append(zoomIn, zoomOut, reset)
    toolbar.append(title, controls)

    const body = document.createElement("div")
    body.className = "zyphos-graph-body"

    const viewport = document.createElement("div")
    viewport.className = "zyphos-graph-viewport"

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("role", "img")
    svg.setAttribute("aria-label", "Interactive graph of Zyphos biosphere relationships")
    viewport.append(svg)

    const detail = document.createElement("aside")
    detail.className = "zyphos-graph-detail"
    body.append(viewport, detail)
    shell.append(toolbar, body)
    mount.replaceChildren(shell)

    const edgeLayer = document.createElementNS("http://www.w3.org/2000/svg", "g")
    const nodeLayer = document.createElementNS("http://www.w3.org/2000/svg", "g")
    svg.append(edgeLayer, nodeLayer)

    let selected = { kind: "node", id: "memorioplast" }
    let transform = { x: 0, y: 0, scale: 0.78 }
    let dragging = null

    function worldToScreen(point) {
      return {
        x: point.x * transform.scale + transform.x,
        y: point.y * transform.scale + transform.y,
      }
    }

    function setTransform(next) {
      transform = next
      nodeLayer.setAttribute("transform", "translate(" + transform.x + " " + transform.y + ") scale(" + transform.scale + ")")
      edgeLayer.setAttribute("transform", "translate(" + transform.x + " " + transform.y + ") scale(" + transform.scale + ")")
    }

    function fit() {
      const rect = viewport.getBoundingClientRect()
      const xs = graph.nodes.map((node) => node.x)
      const ys = graph.nodes.map((node) => node.y)
      const minX = Math.min.apply(null, xs) - 130
      const maxX = Math.max.apply(null, xs) + 130
      const minY = Math.min.apply(null, ys) - 130
      const maxY = Math.max.apply(null, ys) + 130
      const scale = Math.max(0.42, Math.min(1.08, Math.min(rect.width / (maxX - minX), rect.height / (maxY - minY))))
      setTransform({
        scale,
        x: (rect.width - (minX + maxX) * scale) / 2,
        y: (rect.height - (minY + maxY) * scale) / 2,
      })
    }

    function render() {
      edgeLayer.replaceChildren()
      nodeLayer.replaceChildren()

      const lookup = new Map(graph.nodes.map((node) => [node.id, node]))
      graph.edges.forEach((edge, index) => {
        const source = lookup.get(edge[0])
        const target = lookup.get(edge[1])
        if (!source || !target) return

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
        line.setAttribute("x1", source.x)
        line.setAttribute("y1", source.y)
        line.setAttribute("x2", target.x)
        line.setAttribute("y2", target.y)
        line.setAttribute("class", selected.kind === "edge" && selected.id === index ? "selected" : "")
        line.dataset.edgeIndex = String(index)
        line.addEventListener("click", (event) => {
          event.stopPropagation()
          selected = { kind: "edge", id: index }
          render()
        })
        edgeLayer.append(line)

        const label = document.createElementNS("http://www.w3.org/2000/svg", "text")
        label.setAttribute("x", (source.x + target.x) / 2)
        label.setAttribute("y", (source.y + target.y) / 2 - 8)
        label.setAttribute("class", "zyphos-graph-edge-label")
        label.textContent = edge[2]
        edgeLayer.append(label)
      })

      graph.nodes.forEach((node) => {
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g")
        group.setAttribute("transform", "translate(" + node.x + " " + node.y + ")")
        group.setAttribute("class", selected.kind === "node" && selected.id === node.id ? "zyphos-graph-node selected" : "zyphos-graph-node")
        group.addEventListener("click", (event) => {
          event.stopPropagation()
          selected = { kind: "node", id: node.id }
          render()
        })

        const aura = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        aura.setAttribute("r", node.size + 12)
        aura.setAttribute("fill", layerColors[node.layer] + "24")
        group.append(aura)

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        circle.setAttribute("r", node.size)
        circle.setAttribute("fill", layerColors[node.layer] || "#8edfb0")
        group.append(circle)

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text")
        text.setAttribute("y", node.size + 22)
        text.setAttribute("text-anchor", "middle")
        text.textContent = node.title
        group.append(text)
        nodeLayer.append(group)
      })

      updateDetail()
      setTransform(transform)
    }

    function updateDetail() {
      if (selected.kind === "edge") {
        const edge = graph.edges[selected.id]
        const source = graph.nodes.find((node) => node.id === edge[0])
        const target = graph.nodes.find((node) => node.id === edge[1])
        detail.innerHTML = "<p class='zyphos-graph-kicker'>Selected relation</p><h2>" + edge[2] + "</h2><p><strong>" + source.title + "</strong> to <strong>" + target.title + "</strong></p><p>This edge marks one channel of memory, matter, permission, coercion, or obligation. It is a live ecological contract, not a decorative arrow.</p>"
        return
      }

      const node = graph.nodes.find((item) => item.id === selected.id) || graph.nodes[0]
      const incoming = graph.edges.filter((edge) => edge[1] === node.id).length
      const outgoing = graph.edges.filter((edge) => edge[0] === node.id).length
      detail.innerHTML = "<p class='zyphos-graph-kicker'>" + node.layer + "</p><h2>" + node.title + "</h2><p>" + node.purpose + "</p><dl><dt>Incoming</dt><dd>" + incoming + "</dd><dt>Outgoing</dt><dd>" + outgoing + "</dd></dl>"
    }

    function zoomAt(factor, clientX, clientY) {
      const rect = viewport.getBoundingClientRect()
      const x = clientX == null ? rect.width / 2 : clientX - rect.left
      const y = clientY == null ? rect.height / 2 : clientY - rect.top
      const nextScale = Math.max(0.24, Math.min(2.6, transform.scale * factor))
      const worldX = (x - transform.x) / transform.scale
      const worldY = (y - transform.y) / transform.scale
      setTransform({
        scale: nextScale,
        x: x - worldX * nextScale,
        y: y - worldY * nextScale,
      })
    }

    svg.addEventListener("wheel", (event) => {
      event.preventDefault()
      zoomAt(event.deltaY < 0 ? 1.12 : 1 / 1.12, event.clientX, event.clientY)
    }, { passive: false })

    svg.addEventListener("pointerdown", (event) => {
      if (event.target !== svg) return
      dragging = { x: event.clientX, y: event.clientY, tx: transform.x, ty: transform.y }
      svg.setPointerCapture(event.pointerId)
    })

    svg.addEventListener("pointermove", (event) => {
      if (!dragging) return
      setTransform({
        ...transform,
        x: dragging.tx + event.clientX - dragging.x,
        y: dragging.ty + event.clientY - dragging.y,
      })
    })

    svg.addEventListener("pointerup", () => {
      dragging = null
    })

    svg.addEventListener("click", (event) => {
      if (event.target === svg) {
        selected = { kind: "node", id: "memorioplast" }
        render()
      }
    })

    zoomIn.addEventListener("click", () => zoomAt(1.18))
    zoomOut.addEventListener("click", () => zoomAt(1 / 1.18))
    reset.addEventListener("click", fit)
    window.addEventListener("resize", fit)

    render()
    fit()
  })
}

function graphButton(text, label) {
  const button = document.createElement("button")
  button.type = "button"
  button.textContent = text
  button.setAttribute("aria-label", label)
  return button
}

document.addEventListener("nav", bootZyphosBiosphereGraph)
document.addEventListener("DOMContentLoaded", bootZyphosBiosphereGraph)
bootZyphosBiosphereGraph()
`

export default (() => {
  const ZyphosBiosphereGraphScript: QuartzComponent = () => (
    <script dangerouslySetInnerHTML={{ __html: zyphosBiosphereGraphScript }} />
  )

  return ZyphosBiosphereGraphScript
}) satisfies QuartzComponentConstructor
