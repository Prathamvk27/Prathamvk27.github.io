import { profile } from "../data/profileData"

export function Article({ note }) {
  return (
    <div className="journal-shell">
      <header className="article-header">
        <p className="author-name">{profile.name}</p>
        <a href="/">Back to all posts</a>
      </header>
      <main className="article-page">
        <article>
          <h1>{note.title}</h1>
          <p className="entry-deck">{note.introduction}</p>
          <p className="article-context">{note.role} · {note.company}<br />{note.date} · {note.location}</p>
          <div className="entry-copy">
            {note.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="entry-topics"><span>Topics</span> {note.topics}</p>
        </article>
      </main>
      <footer className="journal-footer">
        <a href="/">Back to all posts</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </footer>
    </div>
  )
}
