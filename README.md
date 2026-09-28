# Pratham Babu — portfolio and blog

This is a Vite and React site that publishes a static portfolio and a content-driven blog to GitHub Pages.

## Write a new post

Create a Markdown draft:

```bash
npm run new:post -- "What I learned deploying vLLM"
```

The command creates `src/content/blog/what-i-learned-deploying-vllm.md`. Edit its frontmatter and write the article below the second `---` marker:

```md
---
title: What I learned deploying vLLM
description: A short sentence used by the archive, search, RSS, and page metadata.
published: 2026-09-28
topics: vLLM, Inference, Kubernetes
draft: true
---

Your article starts here.
```

New files start with `draft: true`, so incomplete writing is excluded from the archive, routes, sitemap, and RSS feed. Change it to `draft: false` when the post is ready to publish.

The filename becomes the permanent URL. Do not rename a published file unless you also plan a redirect.

Optional frontmatter fields are `role`, `company`, `platform`, `workPeriod`, and `location`. These add work context to an article without being required for normal blog posts.

## How publishing scales

- Every post is an independent Markdown file. There is no central post array or route list to maintain.
- Vite discovers files and validates required metadata during the build.
- The archive sorts posts by `published`, searches titles/descriptions/topics, and creates a static page for every 12 posts.
- Article bodies are code-split. Opening the homepage or archive does not download every article.
- Every build creates static article URLs, archive pages, `sitemap.xml`, and an RSS feed at `/feed.xml`.
- GitHub Pages serves ordinary HTML for each article, so posts work without client-side routing and remain crawlable.

## Local checks

```bash
npm run lint
npm run build
npm run preview
```

Open the local URL printed by Vite. The production build is written to `dist/`.

## Deploy

```bash
npm run deploy
```

This builds the site and publishes `dist/` to the `gh-pages` branch.
