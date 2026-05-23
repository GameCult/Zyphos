import { QuartzComponent, QuartzComponentConstructor } from "./types"

export default (() => {
  const ZyphosGraphShell: QuartzComponent = () => (
    <>
      <link rel="stylesheet" href="/static/epiphany-graph/assets/viewer.css?v=graph-20260523-focus6" />
      <div class="zyphos-epiphany-graph-root"></div>
      <script type="module" src="/static/epiphany-graph/assets/viewer.js?v=graph-20260523-focus6"></script>
    </>
  )

  return ZyphosGraphShell
}) satisfies QuartzComponentConstructor
