import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function prerenderPlugin() {
  let hasRun = false
  return {
    name: 'vite-prerender',
    enforce: 'post',
    async writeBundle() {
      if (hasRun) return
      hasRun = true
      const { createServer } = await import('vite')
      const vite = await createServer({
        root: __dirname,
        logLevel: 'silent',
        server: { middlewareMode: true },
        appType: 'custom',
      })
      try {
        const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
        const appHtml = render()
        const htmlPath = path.resolve(__dirname, 'dist', 'index.html')
        let html = fs.readFileSync(htmlPath, 'utf-8')
        html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
        fs.writeFileSync(htmlPath, html)
        console.log('[prerender] Static content injected into dist/index.html')
      } finally {
        await vite.close()
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    prerenderPlugin(),
  ],
  define: {
    'import.meta.env.VITE_APP_TITLE': '"Pratham\'s Portfolio"'
  },
  resolve: {
    alias: {
      "a": path.resolve(__dirname, "./src"),
    }
  }
})

