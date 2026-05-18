import { QuartzComponent, QuartzComponentConstructor } from "./types"

export default (() => {
  const ZyphosThemeLock: QuartzComponent = () => (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.setAttribute("saved-theme", "dark")`,
      }}
    />
  )

  return ZyphosThemeLock
}) satisfies QuartzComponentConstructor
