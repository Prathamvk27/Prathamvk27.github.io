import { education, profile, skillGroups, workNotes } from "../data/profileData"

export const Home = () => (
  <div className="journal-shell">
    <header className="masthead">
      <h1 className="author-name">{profile.name}</h1>
      <p className="masthead__introduction">
        I build and deploy AI services, from tools people use to the infrastructure behind them.
        These are notes from my work with APIs, model inference, and reliable releases.
      </p>
      <div className="masthead__links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
    <main id="main-content">
      <section className="journal" aria-labelledby="journal-title">
        <h2 id="journal-title">Notes from work</h2>
        <div className="entry-list">
          {workNotes.map((note) => (
            <article className="journal-entry" key={note.slug}>
              <h3><a href={`/blog/${note.slug}/`}>{note.title}</a></h3>
              <p className="entry-deck">{note.introduction}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="reference-section" aria-labelledby="background-title">
        <h2 id="background-title">A little background</h2>
        <p>My work spans backend development, AI inference, and cloud infrastructure.</p>
        <details className="toolkit">
          <summary>Tools I use</summary>
          <dl className="toolkit-list">
          {skillGroups.map((group) => (
            <div key={group.label}><dt>{group.label}</dt><dd>{group.items}</dd></div>
          ))}
          </dl>
        </details>
        <div className="education-list">
          {education.map((item) => (
            <p key={item.degree}>
              <span className="education-degree">{item.degree}</span>
              <span>{item.school}{item.date ? ` · ${item.date}` : ""}</span>
            </p>
          ))}
        </div>
      </section>
    </main>
    <footer className="journal-footer">
      <a href={`mailto:${profile.email}`}>Say hello</a>
    </footer>
  </div>
)
