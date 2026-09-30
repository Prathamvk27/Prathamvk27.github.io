import { SiteMark } from "../components/SiteMark"

export const NotFound = () => (
  <main className="journal-shell">
    <section className="masthead" aria-labelledby="not-found-title">
      <SiteMark />
      <p className="section-label">404</p>
      <h1 id="not-found-title">This page does not exist.</h1>
      <div className="masthead__links"><a href="/">Return home ↗</a></div>
    </section>
  </main>
)
