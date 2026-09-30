const e=`---
title: My Take on Evaluation Harnesses
description: How I separate an agent's runtime, guardrails, and evaluation system—and what an evaluation harness actually measures.
published: 2026-09-29
topics: AI Agents, Evaluations, Agent Harnesses, LLMOps
draft: false
---

Before explaining my understanding of an evaluation harness, I wanted to understand what constitutes a harness in the first place. An agent harness is everything around the model that helps it operate: orchestration, tools, memory, state, permissions, and recovery behavior. From that simple definition, I initially thought an evaluation harness was another layer wrapped around the entire agent.

That understanding was close, but it mixed together systems with different responsibilities.

An evaluation harness is not the runtime layer that operates the agent. It is the testing and measurement system used to determine how well the agent behaves. To make that distinction clearer, I divide the surrounding system into three broad areas:

- **Runtime layer:** The core loop that keeps the model running. It handles prompt construction, tool orchestration, state transitions, and error recovery.
- **Capabilities and responsibilities:** The rules that define what the agent should do, what it can access, and how it uses tools, memory, state, and context.
- **Assurance and validation:** The systems that measure behavior, enforce safety boundaries, and reveal failures. Evaluation harnesses and guardrails both live in this broader area, but they serve different purposes.

## Offline evaluations, online evaluations, and guardrails

Evaluations can run both offline and online.

**Offline evaluation** usually runs during development against a fixed or curated dataset. It does not operate on a live request before that request reaches a user. This is the clearest form of benchmarking: run a known set of examples, collect the agent's outputs and execution traces, and compare them against expected behavior.

**Online evaluation** scores real production traces or request-and-response data. It can use the same kinds of evaluators as an offline test, including deterministic checks or an LLM as a judge. Its purpose is usually monitoring, detecting regressions, and discovering cases that should be added to the offline dataset.

A **guardrail** is different because it enforces a rule in the live execution path. It may block an unsafe input, reject a tool call, redact an output, request human approval, or trigger a fallback before the action continues. An online evaluator measures behavior; a guardrail intervenes in behavior. In some systems, an online evaluation result can trigger an intervention, so the boundary can overlap, but the purpose of each system remains different.

## What makes up an evaluation harness?

An evaluation harness needs more than metrics and datasets. In practice, it usually contains:

- **A dataset:** Representative test cases, including golden examples, difficult edge cases, and previously observed failures.
- **The system under test:** A specific version of the agent, including its model, prompts, tools, and configuration.
- **A runner:** The component that repeatedly invokes the agent under controlled conditions.
- **Trace collection:** Records of final responses, tool calls, intermediate steps, latency, errors, and other execution details.
- **Evaluators and metrics:** Deterministic checks, model-based graders, human review, or task-specific measurements.
- **Aggregation and reporting:** Summaries that make it possible to compare versions, identify regressions, and inspect individual failures.

Traditional benchmarks are useful for comparing foundation models, but they are usually not sufficient for evaluating an application-specific agent. An agent must also be evaluated on whether it selects the correct tools, supplies valid arguments, follows permissions, completes the task, recovers from errors, and stays within acceptable cost and latency limits. These measurements and datasets must reflect the agent's actual use case.

## A typical evaluation loop

A single evaluation run usually follows this process:

1. Load a golden example from the dataset.
2. Invoke the agent with the example's input and test configuration.
3. Collect the final response and, when available, the full execution trace.
4. Run the relevant metric suite or graders against the result.
5. Store the scores, outputs, and traces.
6. Aggregate the results and inspect failures or regressions.

The harness repeats this loop across the dataset, making agent behavior measurable and allowing one version to be compared with another.

This gives me a clearer definition: the agent harness helps the model act, while the evaluation harness helps us determine whether the resulting system acts well. I will explore how to set one up in the coming posts.
`;export{e as default};
