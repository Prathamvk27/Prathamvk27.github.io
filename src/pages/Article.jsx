import Markdown from "react-markdown"
import { formatPublishedDate } from "../content/posts"
import { profile } from "../data/profileData"
import { SiteMark } from "../components/SiteMark"

export function Article({ post }) {
  const hasWorkContext = post.role || post.company || post.workPeriod || post.location

  return (
    <div className="journal-shell">
      <header className="article-header">
        <SiteMark />
        <p className="author-name">{profile.name}</p>
        <a href="/blog/">Back to blog</a>
      </header>
      <main className="article-page">
        <article>
          <h1>{post.title}</h1>
          <p className="entry-deck">{post.description}</p>
          <p className="article-date">
            <time dateTime={post.published}>{formatPublishedDate(post.published)}</time>
          </p>
          {hasWorkContext && (
            <div className="article-context">
              {(post.role || post.company) && <p>{[post.role, post.company].filter(Boolean).join(" · ")}</p>}
              {post.platform && <p>Platform: {post.platform}</p>}
              {(post.workPeriod || post.location) && <p>{[post.workPeriod, post.location].filter(Boolean).join(" · ")}</p>}
            </div>
          )}
          <div className="entry-copy">
            <Markdown>{post.body}</Markdown>
          </div>
          {post.topics.length > 0 && (
            <p className="entry-topics"><span>Topics</span> {post.topics.join(", ")}</p>
          )}
        </article>
      </main>
      <footer className="journal-footer">
        <a href="/blog/">Back to blog</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </footer>
    </div>
  )
}
