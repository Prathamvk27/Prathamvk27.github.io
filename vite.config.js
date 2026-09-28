import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const siteUrl = "https://prathamvk27.github.io"

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

function readFrontmatter(source, filePath) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) throw new Error(`${filePath} is missing a frontmatter block.`)

  return match[1].split(/\r?\n/).reduce((metadata, line) => {
    if (!line.trim() || line.trimStart().startsWith("#")) return metadata
    const separator = line.indexOf(":")
    if (separator === -1) throw new Error(`Invalid frontmatter line in ${filePath}: ${line}`)

    const key = line.slice(0, separator).trim()
    let value = line.slice(separator + 1).trim()
    if (value.startsWith('"') && value.endsWith('"')) value = JSON.parse(value)
    if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1)
    metadata[key] = value
    return metadata
  }, {})
}

function markdownMetadataPlugin() {
  return {
    name: "markdown-frontmatter",
    enforce: "pre",
    transform(source, id) {
      const [filePath, query = ""] = id.split("?")
      if (!filePath.endsWith(".md") || !new URLSearchParams(query).has("meta")) return null
      return {
        code: `export default ${JSON.stringify(readFrontmatter(source, filePath))}`,
        map: null,
      }
    },
  }
}

function createSitemap(paths, posts) {
  const publishedByUrl = new Map(posts.map((post) => [post.url, post.published]))
  const urls = paths.map((pagePath) => {
    const lastModified = publishedByUrl.get(pagePath)
    return [
      "  <url>",
      `    <loc>${escapeXml(siteUrl + pagePath)}</loc>`,
      lastModified ? `    <lastmod>${escapeXml(lastModified)}</lastmod>` : "",
      "  </url>",
    ].filter(Boolean).join("\n")
  }).join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

function createFeed(posts) {
  const items = posts.slice(0, 50).map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(siteUrl + post.url)}</link>
      <guid isPermaLink="true">${escapeXml(siteUrl + post.url)}</guid>
      <pubDate>${new Date(`${post.published}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`).join("")

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Pratham Babu — Blog</title>
    <link>${siteUrl}/blog/</link>
    <description>Notes on building AI services, model infrastructure, and reliable software.</description>
    <language>en-us</language>${items}
  </channel>
</rss>
`
}

function prerenderPlugin() {
  let hasRun = false
  return {
    name: "vite-prerender",
    enforce: "post",
    async writeBundle() {
      if (hasRun) return
      hasRun = true
      const { createServer } = await import("vite")
      const vite = await createServer({
        root: __dirname,
        logLevel: "silent",
        server: { middlewareMode: true },
        appType: "custom",
      })
      try {
        const { render, pages, postsForFeed } = await vite.ssrLoadModule("/src/entry-server.jsx")
        const htmlPath = path.resolve(__dirname, "dist", "index.html")
        const template = fs.readFileSync(htmlPath, "utf-8")
        const escapeHtml = (text) => text
          .replaceAll("&", "&amp;")
          .replaceAll('"', "&quot;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
        const renderedPages = [{ path: "/" }, ...pages, { path: "/404.html", title: "Page not found" }]

        for (const page of renderedPages) {
          const markup = await render(page.path)
          let html = template.replace(
            '<div id="root"></div>',
            () => `<div id="root">${markup}</div>`,
          )
          if (page.title) {
            const title = escapeHtml(`${page.title} — Pratham Babu`)
            html = html.replace(/<title>.*?<\/title>/, () => `<title>${title}</title>`)
            html = html.replace(
              /(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*"/g,
              (_, prefix) => `${prefix}${title}"`,
            )
          }
          if (page.description) {
            html = html.replace(
              /(<meta (?:name="description"|property="og:description"|name="twitter:description") content=")[^"]*"/g,
              (_, prefix) => `${prefix}${escapeHtml(page.description)}"`,
            )
          }
          html = html.replace(
            /(<meta property="og:url" content=")[^"]*"/,
            (_, prefix) => `${prefix}${siteUrl}${page.path}"`,
          )
          const output = page.path === "/404.html"
            ? path.resolve(__dirname, "dist", "404.html")
            : path.resolve(__dirname, "dist", `.${page.path}`, "index.html")
          fs.mkdirSync(path.dirname(output), { recursive: true })
          fs.writeFileSync(output, html)
        }

        const publicPaths = renderedPages
          .map((page) => page.path)
          .filter((pagePath) => pagePath !== "/404.html")
        fs.writeFileSync(
          path.resolve(__dirname, "dist", "sitemap.xml"),
          createSitemap(publicPaths, postsForFeed),
        )
        fs.writeFileSync(
          path.resolve(__dirname, "dist", "feed.xml"),
          createFeed(postsForFeed),
        )
        console.log(`[prerender] Generated ${publicPaths.length} pages, sitemap.xml, and feed.xml`)
      } finally {
        await vite.close()
      }
    },
  }
}

export default defineConfig({
  base: "/",
  plugins: [
    markdownMetadataPlugin(),
    react(),
    tailwindcss(),
    prerenderPlugin(),
  ],
  define: {
    "import.meta.env.VITE_APP_TITLE": '"Pratham\'s Portfolio"',
  },
  resolve: {
    alias: {
      "a": path.resolve(__dirname, "./src"),
    },
  },
})
