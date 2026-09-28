import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { loadPostForPath } from "./content/posts"

async function start() {
  const rootElement = document.getElementById("root")
  const pathname = window.location.pathname
  const post = await loadPostForPath(pathname)
  const application = (
    <StrictMode>
      <App pathname={pathname} post={post} />
    </StrictMode>
  )

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, application)
  } else {
    createRoot(rootElement).render(application)
  }
}

start()
