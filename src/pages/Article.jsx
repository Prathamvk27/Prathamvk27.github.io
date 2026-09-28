import { profile } from "../data/profileData"

export function Article({ note }) {
  return (
    <div className="journal-shell">
      <header className="article-header">
        <p className="author-name">{profile.name}</p>
        <a href="/blog/">Back to blog</a>
      </header>
      <main className="article-page">
        <article>
          <h1>{note.title}</h1>
          <p className="entry-deck">{note.introduction}</p>
          <div className="article-context">
            <p>{note.role} · {note.company}</p>
            {note.platform && <p>Platform: {note.platform}</p>}
            <p>Work period: {note.date} · {note.location}</p>
          </div>
          <div className="entry-copy">
            {note.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="entry-topics"><span>Topics</span> {note.topics}</p>
        </article>
      </main>
      <footer className="journal-footer">
        <a href="/blog/">Back to blog</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </footer>
    </div>
  )
}
