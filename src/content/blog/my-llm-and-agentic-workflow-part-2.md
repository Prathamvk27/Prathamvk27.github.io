---
title: "My LLM and Agentic Workflow, Part 2"
description: "How I turn an agent plan into tests, keep implementation scoped, and review the result."
published: 2026-10-05
topics: "LLMs, AI agents, software engineering"
draft: false
---

This continues [Part 1 of my LLM and agentic workflow](/blog/my-llm-and-agentic-workflow-part-1/), where I covered task scoping, repository inspection, and planning. Here I’ll explain how I turn a plan into tests, guide implementation, and review the result.

## 5. Turn the plan into acceptance criteria and tests

For a behavioral change, I ask the agent to write or update tests before implementation. When practical, I have it confirm that the new test fails against the old behavior. The test should express the expected behavior; implementation should not weaken the test just to get a pass.

Some general testing principles I use:

- Cover edge cases such as empty or invalid input, retries, errors, boundary values, and backward compatibility.
- For web applications, verify important user flows end to end as well as testing individual functions. Unit tests alone cannot show that the complete feature works from a user's perspective.
- After implementation, run the checks that match the change and review their output.

In a conversation with an Anthropic engineer, I heard a TDD workflow I found useful: write the test first, confirm it fails, commit that test as a checkpoint, then implement without changing the test just to force it to pass. That was advice from a conversation, not a claim about an official Anthropic workflow.

Anthropic's [agent evaluation guide](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) also describes browser-based tasks that check page state and, when a task changes data, verify the resulting backend state. That is a good reminder for me to test the user's actual journey, not only whether the code or page renders.

## 6. Load skills for repeatable workflows

An `AGENTS.md` file can hold short, lasting rules for a repository. For example:

1. Use the package manager selected for this repository and keep its lockfile consistent.
2. Run lint, type checks, and relevant tests before calling a change complete.
3. Do not change public APIs without an approved plan.
4. Keep pull requests focused and avoid unrelated refactors.

For a workflow I repeat, I use a skill: instructions, scripts, and references for tasks such as preparing a migration or reviewing an authentication change. This keeps a general repository guide from turning into one huge document with every company rule and architecture detail.

## 7. Implement one scoped change

Once the plan is approved, I ask the implementation agent to make only that change, keep it localized, and run the relevant checks. If it finds a design problem or needs to expand the scope, it should stop and explain why before proceeding.

I also match the model to the task:

1. Use a stronger reasoning model for planning, architecture, difficult debugging, or security work.
2. Use a mid-tier model to implement an approved plan.
3. Use a lighter model or subagent for summaries, log compression, documentation, and other narrow, routine tasks.

My seniors and peers have also suggested using lighter models and subagents for small, well-defined work.

## 8. Make verification part of the task

Before review, I ask the agent to build an evidence stack that fits the change. It can include formatting, linting, type checks, focused unit tests, integration or API tests, migration validation, and browser or end-to-end checks for user-facing behavior.

I ask it to report each command, its result, and relevant output. If a check did not run, it should say which one and why.

## 9. Review the Git diff, not just the agent's explanation

I inspect the diff and repository state directly:

```sh
git diff --check
git diff --stat
git diff -- path/to/affected/files
git status --short
```

For another perspective, I ask a fresh review agent to compare the diff with the accepted task contract. I want it to identify concrete correctness issues, missed edge cases, compatibility or security risks, test gaps, and changes outside the agreed scope.

I also read Spotify Engineering's [article about feedback loops for background coding agents](https://engineering.atspotify.com/2025/12/feedback-loops-background-coding-agents-part-3). It describes a judge that compares a proposed diff with the original prompt after deterministic verifiers run, including to catch changes outside the prompt's scope. Spotify also notes that it had not yet invested in formal evaluations for that judge, so I treat it as another review signal rather than a substitute for tests or human review.

## 10. Commit a checkpoint and prepare a proof-based pull request

After checks and review, I make a focused commit with a descriptive message, such as:

```sh
git add -- path/to/affected/files
git commit -m "fix: prevent duplicate contacts on sync retries"
```

A pull request should explain what changed and why, what stayed out of scope, how the change was tested, what risks remain, and how to roll it back if needed. A clear handoff makes it easier for someone else to review the evidence and recover the work.

## 11. Leave the final decision to a human

The assigned human reviewer decides whether to merge after reading the evidence and validating the change. If an agent repeats the same mistake, I would rather address the cause with a test, a narrow repository rule, a better skill, or a verification check than just tell it to be more careful.

This is how I currently think about AI pair programming: I learn from people building with these tools, then adapt those ideas to my own workflow. This is what works for me today, and I expect it to keep changing as I learn more.
