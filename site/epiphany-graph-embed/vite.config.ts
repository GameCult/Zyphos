import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { fileURLToPath } from "node:url"

const viewerEntry = fileURLToPath(new URL("./viewer.html", import.meta.url))
const reactPath = fileURLToPath(new URL("./node_modules/react", import.meta.url))
const reactDomPath = fileURLToPath(new URL("./node_modules/react-dom", import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: reactPath,
      "react-dom": reactDomPath,
    },
  },
  server: {
    host: "127.0.0.1",
    port: 4182,
  },
  build: {
    outDir: "../../Eusocial Interbeing/static/epiphany-graph",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        viewer: viewerEntry,
      },
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          elk: ["elkjs/lib/elk.bundled.js"],
        },
      },
    },
  },
})
