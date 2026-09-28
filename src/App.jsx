import { Home } from "./pages/Home"
import { Article } from "./pages/Article"
import { BlogIndex } from "./pages/BlogIndex"
import { NotFound } from "./pages/NotFound"
import { workNotes } from "./data/profileData"

function App({ pathname = "/" }) {
  const path = pathname.replace(/\/+$/, "") || "/"
  if (path === "/") return <Home />
  if (path === "/blog") return <BlogIndex />
  const note = workNotes.find((entry) => path === `/blog/${entry.slug}`)
  return note ? <Article note={note} /> : <NotFound />
}

export default App
