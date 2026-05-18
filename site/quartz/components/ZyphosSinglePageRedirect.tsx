import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const ZyphosSinglePageRedirect: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = fileData.slug ?? "index"

    if (slug === "index") {
      return null
    }

    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace("/#note=${encodeURIComponent(slug)}")`,
        }}
      />
    )
  }

  return ZyphosSinglePageRedirect
}) satisfies QuartzComponentConstructor
