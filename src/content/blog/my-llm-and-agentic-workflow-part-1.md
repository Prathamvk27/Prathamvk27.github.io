---
title: "My LLM and Agentic Workflow, Part 1"
description: "How I scope an engineering task, inspect the codebase, and plan before an LLM makes changes."
published: 2026-10-02
topics: "LLMs, AI agents, software engineering"
draft: false
---

Prompting is becoming a big part of software development, and there is a lot of noise around it. Reviewing code can also become a hassle. I have started using a workflow that helps me scope work, understand the codebase, and check the result before I move on.

Before asking an LLM to change code, I think about three ways to use it:

1. **Interactive pair programming:** I use this for authentication, business logic, database changes, concurrency, unclear product behavior, and production bug fixes. These tasks benefit from a back-and-forth while I stay close to the decisions.
2. **Background agents:** I use these for workflow documentation, finding test gaps, architecture research, small isolated refactors, dependency updates, and familiar migrations with reliable CI checks.
3. **Keep the work under direct human control:** I do not delegate production deployments, destructive data operations, secrets, high-risk database migrations, or merging to an LLM. These tasks need explicit human oversight.

## 1. Start with a small engineering task

Before the agent reads the code, I give it a short task contract:

- **Goal:** What should be achieved? (Required.)
- **Why it matters:** How does this help the current workflow? (Optional.)
- **In scope:** What files or behavior may change? (Required.)
- **Out of scope:** What must the agent leave alone? (Required.)
- **Acceptance criteria:** What observable conditions will show that the task is complete? (Required.)
- **Risks and compatibility concerns:** What integrations or constraints should the agent account for? (Optional.)
- **Verification:** Which checks should run, and what evidence should they produce? (Required.)

## 2. Establish a clean starting point

Sometimes I start in an inspection-only mode (also called plan mode in some tools). Before asking for changes, I check the repository state and recent history:

```sh
git status --short
git branch --show-current
git log --oneline -10
```

Then I read the relevant repository guide, tests, and code paths without editing files. For longer work or parallel tasks, I use a separate worktree:

```sh
git worktree add ../project-dedup -b fix/contact-dedup
```

This creates a separate checkout for the new branch, based on the current commit. I make sure that commit is the intended starting point before I begin.

I also take inspiration from Anthropic's [Claude Code best practices](https://code.claude.com/docs/en/best-practices), which recommend exploring the codebase before planning and implementation, giving the agent a way to verify its work, and using worktrees for parallel sessions. In my own workflow, I also use commits as recovery points.

## 3. Ask the agent to inspect before editing

When I first open a task—or return to it later—I often begin with a read-only prompt:

> Do not edit files. Trace the current behavior for this task. Identify the entry point, relevant files, data flow, existing tests, and failure modes. Recommend the smallest safe place to make a change, with evidence.

I expect the response to identify the request entry point, related modules and dependencies, tests, questions, and possible blockers. That gives me a clearer picture of the repository before implementation starts.

## 4. Plan before implementation

Once the code path is clear, I ask for a plan that names the files to change, the data and APIs involved, tests to run, risks and mitigations, and commands to verify the result. The point is to agree on the scope and how we will know the task is done before editing begins.

In Part 2, I will cover how I guide implementation and review the changes.
