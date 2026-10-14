import { renderToStaticMarkup } from "react-dom/server"
import App from "./App"
import { blogPageCount, blogPosts, loadPostForPath } from "./content/posts"

export async function render(pathname = "/") {
  const post = await loadPostForPath(pathname)
  return renderToStaticMarkup(<App pathname={pathname} post={post} />)
}

const archivePages = Array.from(
  { length: Math.max(0, blogPageCount - 1) },
  (_, index) => ({
    path: `/blog/page/${index + 2}/`,
    title: `Blog — Page ${index + 2}`,
    description: "Notes on building AI services, model infrastructure, and reliable software.",
  }),
)

export const pages = [
  {
    path: "/blog/",
    title: "Blog",
    description: "Notes on building AI services, model infrastructure, and reliable software.",
  },
  ...archivePages,
  ...blogPosts.map((post) => ({
    path: post.url,
    title: post.title,
    description: post.description,
  })),
]

export const postsForFeed = blogPosts
