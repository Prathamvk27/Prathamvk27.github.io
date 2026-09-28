import { education, profile, skillGroups, workNotes } from "../data/profileData"

export const Home = () => (
  <div className="journal-shell">
    <header className="masthead">
      <h1 className="author-name">{profile.name}</h1>
      <p className="masthead__introduction">
        I build and deploy AI services, from tools people use to the infrastructure behind them.
        I write about APIs, model inference, and reliable releases.
      </p>
      <div className="masthead__links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <nav className="page-index" aria-label="Page index">
        <span>Index</span>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#blog">Blog</a>
        <a href="#tools">Tools</a>
      </nav>
    </header>

    <main id="main-content">
      <section id="experience" className="profile-section" aria-labelledby="experience-title">
        <h2 id="experience-title">Work experience</h2>
        <div className="experience-list">
          {workNotes.map((item) => (
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

      <section id="blog" className="journal" aria-labelledby="blog-title">
        <h2 id="blog-title">Blog</h2>
        <div className="entry-list">
          {workNotes.map((post) => (
            <article className="journal-entry" key={post.slug}>
              <h3><a href={`/blog/${post.slug}/`}>{post.title}</a></h3>
              <p className="entry-deck">{post.introduction}</p>
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
    </main>

    <footer className="journal-footer">
      <a href={`mailto:${profile.email}`}>Say hello</a>
    </footer>
  </div>
)
