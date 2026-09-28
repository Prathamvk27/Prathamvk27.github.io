const e=`---
title: Bringing new models online
description: Shared inference services, background workers, and release checks for the Internpro.ai platform.
published: 2026-09-27
topics: FastAPI, vLLM, Celery, Redis, PostgreSQL, S3, Kubernetes, Prometheus, MLflow
role: Engineering Volunteer, AI Infrastructure
company: EPICS at ASU
platform: Internpro.ai
workPeriod: August 2025 - July 2026
location: Arizona
---

I built a shared FastAPI and vLLM service that reduced the time needed to bring new models online from one or two days to a few hours.

Long-running document processing moved to Celery and Redis workers, with results in S3 and job state in PostgreSQL. Retry behavior was designed to avoid duplicate outputs. GPU-backed inference services ran on Kubernetes with readiness checks and rolling updates, while Prometheus tracked latency, queue backlog, and errors.

MLflow release checks covered model output, API compatibility, and latency. Regressions were blocked before rollout while preserving a clear rollback path.
`;export{e as default};
