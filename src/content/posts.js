const metadataModules = import.meta.glob("./blog/*.md", {
  eager: true,
  import: "default",
  query: "?meta",
})

const contentModules = import.meta.glob("./blog/*.md", {
  import: "default",
  query: "?raw",
})

export const POSTS_PER_PAGE = 12

function slugFromPath(filePath) {
  return filePath.split("/").pop().replace(/\.md$/, "")
}

function normalizePost(filePath, metadata) {
  const slug = slugFromPath(filePath)
  const topics = typeof metadata.topics === "string"
    ? metadata.topics.split(",").map((topic) => topic.trim()).filter(Boolean)
    : []

  if (!metadata.title || !metadata.description || !metadata.published) {
    throw new Error(`${filePath} must define title, description, and published in its frontmatter.`)
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata.published)) {
    throw new Error(`${filePath} must use YYYY-MM-DD for its published date.`)
  }

  return {
    ...metadata,
    slug,
    topics,
    draft: metadata.draft === "true",
    url: `/blog/${slug}/`,
  }
}

export const blogPosts = Object.entries(metadataModules)
  .map(([filePath, metadata]) => normalizePost(filePath, metadata))
  .filter((post) => !post.draft)
  .sort((a, b) => b.published.localeCompare(a.published) || a.title.localeCompare(b.title))

const contentLoaders = new Map(
  Object.entries(contentModules).map(([filePath, load]) => [slugFromPath(filePath), load]),
)

export const blogPageCount = Math.max(1, Math.ceil(blogPosts.length / POSTS_PER_PAGE))

export function postsForPage(pageNumber) {
  const start = (pageNumber - 1) * POSTS_PER_PAGE
  return blogPosts.slice(start, start + POSTS_PER_PAGE)
}

export function formatPublishedDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`))
}

export async function loadPost(slug) {
  const metadata = blogPosts.find((post) => post.slug === slug)
  const load = contentLoaders.get(slug)
  if (!metadata || !load) return null

  const source = await load()
  const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "").trim()
  return { ...metadata, body }
}

export async function loadPostForPath(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/"
  const match = path.match(/^\/blog\/([^/]+)$/)
  return match ? loadPost(match[1]) : null
}
