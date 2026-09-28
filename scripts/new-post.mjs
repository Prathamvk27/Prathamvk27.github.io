import fs from "node:fs"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const argumentsList = process.argv.slice(2)
const dryRun = argumentsList.includes("--dry-run")
const title = argumentsList.filter((argument) => argument !== "--dry-run").join(" ").trim()

if (!title) {
  console.error('Usage: npm run new:post -- "Your post title"')
  process.exit(1)
}

const slug = title
  .normalize("NFKD")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "")

if (!slug) {
  console.error("The title must contain at least one letter or number.")
  process.exit(1)
}

const published = new Date().toISOString().slice(0, 10)
const relativePath = path.join("src", "content", "blog", `${slug}.md`)
const outputPath = path.join(projectRoot, relativePath)
const template = `---
title: ${JSON.stringify(title)}
description: Add a one-sentence summary.
published: ${published}
topics: AI, Engineering
draft: true
---

Start writing here.
`

if (dryRun) {
  console.log(`${relativePath}\n\n${template}`)
  process.exit(0)
}

if (fs.existsSync(outputPath)) {
  console.error(`${relativePath} already exists. Choose a different title.`)
  process.exit(1)
}

fs.writeFileSync(outputPath, template, { flag: "wx" })
console.log(`Created ${relativePath}`)
