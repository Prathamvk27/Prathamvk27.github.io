import { profile } from "../data/profileData"
import { SiteMark } from "../components/SiteMark"

export function SoluteLabs() {
  return (
    <div className="journal-shell">
      <header className="article-header">
        <SiteMark />
        <p className="author-name">{profile.name}</p>
        <a href="/">Home</a>
      </header>

      <main id="main-content" className="article-page">
        <h1>Solute Labs</h1>
        <p className="entry-deck">
          At Solute Labs, I am a founding engineer building AI tooling and early products.
        </p>

        <div className="entry-copy">
          <section aria-labelledby="godsend-title">
            <h2 id="godsend-title">First product: GodSend</h2>
            <p>
              GodSend helps people draft thoughtful job outreach from their own experience.
              They can review and edit every message before sending it.
            </p>
            <p><a href="https://prathamvk27.github.io/email_automation/">Try GodSend ↗</a></p>
          </section>

          <section aria-labelledby="engineering-lab-title">
            <h2 id="engineering-lab-title">AI engineering lab</h2>
            <p>
              In parallel, I am building a local Python platform for model applications,
              evaluation, run lineage, and classifier serving.
            </p>
          </section>
        </div>
      </main>

      <footer className="journal-footer">
        <a href="/">Home</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </footer>
    </div>
  )
}
