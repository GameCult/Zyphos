import { QuartzComponent, QuartzComponentConstructor } from "./types"

export const zyphosHeroScript = String.raw`
function bootZyphosHero() {
  const home = document.querySelector("body[data-slug='index'] article")
  if (!home || home.querySelector(".zyphos-hero-canvas")) return

  const canvas = document.createElement("canvas")
  canvas.className = "zyphos-hero-canvas"
  canvas.setAttribute("aria-hidden", "true")
  home.prepend(canvas)

  const context = canvas.getContext("2d")

  function resize() {
    const rect = home.getBoundingClientRect()
    const ratio = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.max(1, Math.floor(rect.width * ratio))
    canvas.height = Math.floor(Math.min(window.innerHeight * 0.72, 620) * ratio)
    canvas.style.height = Math.floor(canvas.height / ratio) + "px"
    context.setTransform(ratio, 0, 0, ratio, 0, 0)
  }

  function drawPlanet(x, y, radius, colors, time, shadow) {
    const gradient = context.createRadialGradient(x - radius * 0.32, y - radius * 0.35, 0, x, y, radius)
    gradient.addColorStop(0, colors[0])
    gradient.addColorStop(0.5, colors[1])
    gradient.addColorStop(1, colors[2])
    context.fillStyle = gradient
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fill()

    const eclipse = context.createRadialGradient(x + Math.cos(time) * radius * 0.3, y, 0, x, y, radius * 1.2)
    eclipse.addColorStop(0, shadow)
    eclipse.addColorStop(1, "rgba(0, 0, 0, 0)")
    context.fillStyle = eclipse
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fill()

    context.strokeStyle = "rgba(142, 223, 176, 0.18)"
    for (let i = 0; i < 5; i += 1) {
      context.beginPath()
      context.ellipse(x, y + Math.sin(i * 1.6) * radius * 0.42, radius * (0.44 + i * 0.05), radius * 0.08, i * 0.28, 0, Math.PI * 2)
      context.stroke()
    }
  }

  function frame(now) {
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const t = now * 0.00025
    context.clearRect(0, 0, width, height)

    const star = context.createRadialGradient(width * 0.78, height * 0.18, 0, width * 0.78, height * 0.18, width * 0.55)
    star.addColorStop(0, "rgba(255, 174, 88, 0.22)")
    star.addColorStop(1, "rgba(255, 174, 88, 0)")
    context.fillStyle = star
    context.fillRect(0, 0, width, height)

    context.strokeStyle = "rgba(115, 198, 227, 0.11)"
    for (let i = 0; i < 7; i += 1) {
      const y = height * (0.2 + i * 0.09) + Math.sin(t * 2 + i) * 6
      context.beginPath()
      context.moveTo(0, y)
      context.bezierCurveTo(width * 0.35, y - 30, width * 0.62, y + 36, width, y - 12)
      context.stroke()
    }

    const zr = Math.min(width, height) * 0.21
    const zx = width * 0.68
    const zy = height * 0.62
    const ur = zr * 0.62
    const ux = zx - zr * 1.85
    const uy = zy - zr * 0.7

    context.strokeStyle = "rgba(239, 252, 248, 0.15)"
    context.beginPath()
    context.moveTo(ux, uy)
    context.lineTo(zx, zy)
    context.stroke()

    drawPlanet(ux, uy, ur, ["#7d8899", "#2c3a4a", "#070b11"], t + 1.2, "rgba(0, 0, 0, 0.6)")
    drawPlanet(zx, zy, zr, ["#c7f7d0", "#28726c", "#06131b"], t, "rgba(0, 0, 0, 0.42)")

    context.fillStyle = "rgba(142, 223, 176, 0.62)"
    for (let i = 0; i < 56; i += 1) {
      const angle = i * 2.399 + t * 0.35
      const r = zr * (0.18 + ((i * 37) % 100) / 140)
      const x = zx + Math.cos(angle) * r * 0.82
      const y = zy + Math.sin(angle) * r * 0.38
      const pulse = 1 + Math.sin(now * 0.002 + i) * 0.8
      context.beginPath()
      context.arc(x, y, Math.max(0.7, pulse), 0, Math.PI * 2)
      context.fill()
    }

    requestAnimationFrame(frame)
  }

  resize()
  window.addEventListener("resize", resize)
  requestAnimationFrame(frame)
}

document.addEventListener("nav", bootZyphosHero)
document.addEventListener("DOMContentLoaded", bootZyphosHero)
bootZyphosHero()
`

export default (() => {
  const ZyphosHeroScript: QuartzComponent = () => (
    <script dangerouslySetInnerHTML={{ __html: zyphosHeroScript }} />
  )

  return ZyphosHeroScript
}) satisfies QuartzComponentConstructor
