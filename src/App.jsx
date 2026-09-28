import { Home } from "./pages/Home"
import { Article } from "./pages/Article"
import { BlogIndex } from "./pages/BlogIndex"
import { NotFound } from "./pages/NotFound"
import { blogPageCount } from "./content/posts"

function App({ pathname = "/", post = null }) {
  const path = pathname.replace(/\/+$/, "") || "/"
  if (path === "/") return <Home />
  if (path === "/blog") return <BlogIndex page={1} />

  const archiveMatch = path.match(/^\/blog\/page\/(\d+)$/)
  if (archiveMatch) {
    const page = Number(archiveMatch[1])
    return page >= 2 && page <= blogPageCount ? <BlogIndex page={page} /> : <NotFound />
  }

  return post ? <Article post={post} /> : <NotFound />
}

export default App
