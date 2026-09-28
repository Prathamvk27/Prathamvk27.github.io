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
        const { render, pages } = await vite.ssrLoadModule('/src/entry-server.jsx')
        const htmlPath = path.resolve(__dirname, 'dist', 'index.html')
        const template = fs.readFileSync(htmlPath, 'utf-8')
        const escapeHtml = (text) => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
        for (const page of [{ path: '/' }, ...pages, { path: '/404.html', title: 'Page not found' }]) {
          let html = template.replace('<div id="root"></div>', () => `<div id="root">${render(page.path)}</div>`)
          if (page.title) {
            const title = escapeHtml(`${page.title} — Pratham Babu`)
            html = html.replace(/<title>.*?<\/title>/, () => `<title>${title}</title>`)
            html = html.replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*"/g, (_, prefix) => `${prefix}${title}"`)
          }
          if (page.description) {
            html = html.replace(/(<meta (?:name="description"|property="og:description"|name="twitter:description") content=")[^"]*"/g, (_, prefix) => `${prefix}${escapeHtml(page.description)}"`)
          }
          html = html.replace(/(<meta property="og:url" content=")[^"]*"/, (_, prefix) => `${prefix}https://prathamvk27.github.io${page.path}"`)
          const output = page.path === '/404.html'
            ? path.resolve(__dirname, 'dist', '404.html')
            : path.resolve(__dirname, 'dist', '.' + page.path, 'index.html')
          fs.mkdirSync(path.dirname(output), { recursive: true })
          fs.writeFileSync(output, html)
        }
        console.log('[prerender] Generated homepage, blog archive, article pages, and 404 page')
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
