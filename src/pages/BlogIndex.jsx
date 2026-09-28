import { profile, workNotes } from "../data/profileData"

export function BlogIndex() {
  return (
    <div className="journal-shell">
      <header className="article-header">
        <p className="author-name">{profile.name}</p>
        <a href="/">Home</a>
      </header>

      <main className="blog-index" id="main-content">
        <header className="blog-index__header">
          <h1>Blog</h1>
          <p>Notes on building AI services, model infrastructure, and reliable software.</p>
        </header>

        <div className="entry-list">
          {workNotes.map((post) => (
            <article className="journal-entry" key={post.slug}>
              <h2><a href={`/blog/${post.slug}/`}>{post.title}</a></h2>
              <p className="entry-deck">{post.introduction}</p>
            </article>
          ))}
        </div>
      </main>

      <footer className="journal-footer">
        <a href="/">Home</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </footer>
    </div>
  )
}
