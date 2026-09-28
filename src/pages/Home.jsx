import { education, profile, skillGroups, workExperience } from "../data/profileData"

export const Home = () => (
  <div className="journal-shell">
    <header className="masthead">
      <h1 className="author-name">{profile.name}</h1>
      <p className="masthead__introduction">
        I build and deploy AI services, from tools people use to the infrastructure behind them.
        I write about APIs, model inference, and reliable releases.
      </p>
      <div className="masthead__links">
        <a href="/blog/">Blog</a>
      </div>
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
                {item.company}
                {item.platform ? ` · ${item.platform} platform` : ""}
                {` · ${item.date}`}
              </p>
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
