import { useMemo, useState } from "react"
import { blogPageCount, blogPosts, formatPublishedDate, postsForPage } from "../content/posts"
import { profile } from "../data/profileData"

const SEARCH_RESULT_LIMIT = 50

function pageUrl(pageNumber) {
  return pageNumber === 1 ? "/blog/" : `/blog/page/${pageNumber}/`
}

export function BlogIndex({ page = 1 }) {
  const [query, setQuery] = useState("")
  const normalizedQuery = query.trim().toLowerCase()
  const matches = useMemo(() => {
    if (!normalizedQuery) return []
    return blogPosts.filter((post) => (
      [post.title, post.description, ...post.topics]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    ))
  }, [normalizedQuery])
  const posts = normalizedQuery
    ? matches.slice(0, SEARCH_RESULT_LIMIT)
    : postsForPage(page)

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

        <div className="blog-search">
          <label htmlFor="blog-search">Find a post</label>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search titles and topics"
          />
          <p aria-live="polite">
            {normalizedQuery
              ? `${matches.length} ${matches.length === 1 ? "post" : "posts"} found`
              : `${blogPosts.length} ${blogPosts.length === 1 ? "post" : "posts"}`}
          </p>
        </div>

        <div className="entry-list">
          {posts.map((post) => (
            <article className="journal-entry" key={post.slug}>
              <h2><a href={post.url}>{post.title}</a></h2>
              <p className="entry-meta">
                <time dateTime={post.published}>{formatPublishedDate(post.published)}</time>
                {post.topics.length ? ` · ${post.topics.join(", ")}` : ""}
              </p>
              <p className="entry-deck">{post.description}</p>
            </article>
          ))}
          {normalizedQuery && posts.length === 0 && (
            <p>No posts match “{query.trim()}”.</p>
          )}
          {matches.length > SEARCH_RESULT_LIMIT && (
            <p>Showing the first {SEARCH_RESULT_LIMIT} matches. Make the search more specific to narrow the list.</p>
          )}
        </div>

        {!normalizedQuery && blogPageCount > 1 && (
          <nav className="archive-pagination" aria-label="Blog archive pages">
            {page > 1 && <a href={pageUrl(page - 1)}>Previous</a>}
            <span>Page {page} of {blogPageCount}</span>
            {page < blogPageCount && <a href={pageUrl(page + 1)}>Next</a>}
          </nav>
        )}
      </main>

      <footer className="journal-footer">
        <a href="/">Home</a>
        <a href="/feed.xml">RSS</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </footer>
    </div>
  )
}
