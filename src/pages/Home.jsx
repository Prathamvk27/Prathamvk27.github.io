import { education, profile, skillGroups, workExperience } from "../data/profileData"
import { SiteMark } from "../components/SiteMark"

export const Home = () => (
  <div className="journal-shell">
    <header className="masthead">
      <SiteMark />
      <h1 className="author-name">{profile.name}</h1>
      <p className="masthead__introduction">
        I build and deploy AI services, from tools people use to the infrastructure behind them.
        I write about APIs, model inference, and reliable releases.
      </p>
      <div className="masthead__links">
        <a href="/blog/">Blog</a>
      </div>
      <section className="featured-work" aria-labelledby="featured-work-title">
        <p className="featured-work__label">Current work</p>
        <h2 id="featured-work-title">
          <a href="https://prathamvk27.github.io/solute-labs/">Solute Labs</a>
        </h2>
        <p className="featured-work__role">Founding engineer · AI engineering</p>
        <p>
          Our first product, GodSend, helps people draft thoughtful job outreach from their own
          experience. Every message stays reviewable before sending.
        </p>
        <a className="featured-work__action" href="https://prathamvk27.github.io/email_automation/">
          Try GodSend ↗
        </a>
      </section>
      <nav className="page-index" aria-label="Page index">
        <span>Index</span>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#tools">Tools</a>
        <a href="#contact">Reach out</a>
      </nav>
    </header>

    <main id="main-content">
      <section id="experience" className="profile-section" aria-labelledby="experience-title">
        <h2 id="experience-title">Work experience</h2>
        <div className="experience-list">
          {workExperience.map((item) => (
            <article key={item.company}>
              <h3>{item.role}</h3>
              <p>
                {item.url ? <a href={item.url}>{item.company}</a> : item.company}
                {item.platform ? ` · ${item.platform} platform` : ""}
                {item.date ? ` · ${item.date}` : ""}
              </p>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="profile-section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <div className="education-list">
          {education.map((item) => (
            <article key={item.degree}>
              <h3>{item.degree}</h3>
              <p>{item.school}{item.date ? ` · ${item.date}` : ""}</p>
            </article>
          ))}
        </div>
      </section>

      <details id="tools" className="toolkit">
        <summary>Tools I use</summary>
        <dl className="toolkit-list">
          {skillGroups.map((group) => (
            <div key={group.label}><dt>{group.label}</dt><dd>{group.items}</dd></div>
          ))}
        </dl>
      </details>

      <section id="contact" className="profile-section contact-section" aria-labelledby="contact-title">
        <h2 id="contact-title">Reach out</h2>
        <p>I am open to conversations about AI engineering, infrastructure, and software delivery.</p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
    </main>

    <footer className="journal-footer">
      <p>{profile.shortName}</p>
    </footer>
  </div>
)
