import { education, profile, skillGroups, workNotes } from "../data/profileData"

export const Home = () => {
  return (
    <div className="journal-shell">
      <header className="masthead">
        <h1>Notes on building AI systems that hold up in the real world.</h1>
        <p className="masthead__introduction">{profile.summary}</p>

        <div className="masthead__links" aria-label="Contact links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </header>

      <main>
        <section className="journal" aria-labelledby="journal-title">
          <header className="section-title">
            <p className="section-label">Work journal</p>
            <h2 id="journal-title">From the field</h2>
            <p>
              A chronological record of the systems I have built, the constraints behind them,
              and the production details that made them useful.
            </p>
          </header>

          <div className="entry-list">
            {workNotes.map((note, index) => (
              <article className="journal-entry" key={note.company}>
                <div className="journal-entry__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="journal-entry__body">
                  <p className="entry-meta">
                    <time>{note.date}</time>
                    <span>{note.role}, {note.company}</span>
                    <span>{note.location}</span>
                  </p>

                  <h3>{note.title}</h3>
                  <p className="entry-deck">{note.introduction}</p>

                  <div className="entry-copy">
                    {note.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>

                  <p className="entry-topics"><span>Topics</span> {note.topics}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reference-section" aria-labelledby="toolkit-title">
          <header className="section-title section-title--compact">
            <p className="section-label">Reference</p>
            <h2 id="toolkit-title">Working toolkit</h2>
          </header>

          <dl className="toolkit-list">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="reference-section" aria-labelledby="education-title">
          <header className="section-title section-title--compact">
            <p className="section-label">Background</p>
            <h2 id="education-title">Education</h2>
          </header>

          <div className="education-list">
            {education.map((item) => (
              <article key={item.degree}>
                <h3>{item.degree}</h3>
                <p>{item.school}{item.date ? ` / ${item.date}` : ""}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="journal-footer">
        <p>Pratham Vanangadu Keshava Babu</p>
        <p>AI engineering, infrastructure, and delivery.</p>
        <div>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}
