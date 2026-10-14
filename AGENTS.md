# Repository instructions

## Project

- npm, React 19, and Vite 7 frontend with build-time prerendering.
- Pathname routing is in `src/App.jsx`; blog discovery and prerender metadata live in `src/content/posts.js` and `src/entry-server.jsx`.
- Use existing component patterns and `src/index.css`. There is no app API, auth layer, shared client state, or browser-test framework.
- Read `DESIGN.md` before changing the website's presentation or copy; preserve its existing visual language unless the user asks for a redesign.
- Full deterministic verification: `npm run verify` (lint, then production build).
- For manual browser checks, run `npm run dev -- --port <available-port>` and exercise only affected journeys.

## Exactly three agents

1. **Raze — Builder, Coordinator, and Blog Topic Scout.** Owns scope, implementation, deterministic checks, reviewer coordination, finding validation, fixes, and the final report. For scheduled topic scouting, Raze alone reviews the previous 24 hours of work in explicitly approved repositories and suggests evidence-linked blog topics according to `blog-topic-scout`; scouting is read-only and does not launch Viper or Sage. Raze is the only agent allowed to edit during implementation workflows.
2. **Viper — Experience and Editorial Reviewer.** Read-only review of visual consistency, responsiveness, usability, accessibility, links, content freshness, and unfinished states. For blog content, Viper checks grammar, clarity, structure, readability, and voice without replacing the author's meaning.
3. **Sage — Engineering and Technical Fact Reviewer.** Read-only review of correctness, regressions, maintainability, tests, build health, performance, browser errors, and security-sensitive frontend behavior. For technical writing, Sage verifies factual claims, terminology, examples, and unsupported conclusions against evidence.

Do not add reviewer lanes or launch more than these three agents. Viper and Sage must report checks and evidence even on `PASS`; use `N/A` with a reason when a check does not apply. Run reviewers in isolated worktrees when available and verify they made no changes.

Use the role names **Raze**, **Viper**, and **Sage** exclusively in prompts, progress updates, reports, and handoffs. Treat any runner-assigned or automatic subagent nickname as internal metadata: do not adopt it, display it, or use it as an alias for these roles.

## Model, context, and usage policy

- Use a role-specific GPT-5.6 mix: Raze uses `gpt-5.6-terra` medium for implementation and low for routine coordination; Viper uses `gpt-5.6-luna` low; Sage uses `gpt-5.6-sol` medium; blog-topic scouting uses `gpt-5.6-terra` low. Increase only the affected agent's reasoning level when verified complexity requires it. Use GPT-6 models or Astra only when explicitly requested or a documented evaluation shows the assigned GPT-5.6 model is insufficient.
- Start Viper and Sage with fresh context. Send only the request, acceptance criteria, affected files/routes, final diff, and existing check evidence; do not fork the full conversation.
- Keep stable instructions unchanged for cache reuse. Summarize command output and findings instead of forwarding full logs or duplicate context.
- Raze records the actual model and reasoning level used by each agent. At the end of a run, report available input, cached-input, output, reasoning, and total token counts plus context usage. If the runtime does not expose a metric, report `unavailable`; never estimate it.
- Check context before long work, compact when the objective is unchanged, and start a new thread when the objective has materially changed.

## Boundaries

- Keep changes scoped, reuse current patterns, and avoid new dependencies unless essential.
- Test observable behavior, not implementation details. Do not weaken quality gates.
- Reject only incorrect, non-reproducible, cosmetic-only, or pre-existing out-of-scope findings; a relevant existing blocker must still be reported.
- Never merge, enable auto-merge, or deploy unless the user explicitly asks. The user is the merge and deployment authority.

Use `frontend-change` for implementation work, `website-maintenance` for periodic audits or explicitly authorized maintenance, and `blog-topic-scout` for read-only topic suggestions from explicitly approved repositories.

## New blog draft

- `/new-blog/` is a development-only writing sheet backed by the `pratham-new-blog-draft-v1` local-storage key. The route and its archive link must not be included in production builds.
- **Publish locally** posts the completed date, name, topic, summary, and contents to the local Vite endpoint. The endpoint validates the draft, creates a non-overwriting Markdown file in `src/content/blog/`, reads it back, and creates a Git commit containing only that post.
- Local publishing must never push a branch, update `gh-pages`, or deploy. Once the local commit succeeds, review the Markdown file directly instead of accessing browser storage. Pushing and deployment remain explicitly user-authorized.
- Never reset the writing sheet when file creation, read-back verification, or the local commit fails. Roll back a newly created post file when its commit fails so the preserved browser draft can be retried.
