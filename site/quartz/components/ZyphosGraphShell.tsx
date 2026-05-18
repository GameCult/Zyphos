import { QuartzComponent, QuartzComponentConstructor } from "./types"

export default (() => {
  const ZyphosGraphShell: QuartzComponent = () => (
    <>
      <link rel="stylesheet" href="/static/epiphany-graph/assets/viewer.css" />
      <div class="zyphos-epiphany-graph-root"></div>
      <script type="module" src="/static/epiphany-graph/assets/viewer.js"></script>
    </>
  )

  return ZyphosGraphShell
}) satisfies QuartzComponentConstructor
