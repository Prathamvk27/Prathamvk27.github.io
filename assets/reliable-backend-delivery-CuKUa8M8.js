const e=`---
title: Reliable backends, from tests to releases
description: What went into API testing, caching, backups, and delivery at Ness.
published: 2026-09-27
topics: Django, PostgreSQL, Redis, Pytest, MongoDB, MySQL, Jenkins
role: Software Engineer
company: Ness Digital Engineering
workPeriod: February 2023 - August 2023
location: Karnataka, India
---

I built Django APIs and PostgreSQL services for financial workflows, increasing Pytest unit and end-to-end coverage from 45% to 90%.

Frequently used reference data was cached in Redis with expiry and post-update invalidation, reaching a 70% cache hit rate during load tests and reducing database reads.

I automated MongoDB and MySQL backups across seven deployment stages, replacing a 32-step manual process with versioned archives and restore checks. Jenkins automation also reduced commit-to-staging time from 30 to 20 minutes while keeping production releases approval-gated.
`;export{e as default};
