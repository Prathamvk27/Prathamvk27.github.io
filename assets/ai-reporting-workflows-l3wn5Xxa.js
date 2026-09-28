const e=`---
title: AI reporting for real-estate teams
description: Connecting customer data and an LLM to make client reporting faster.
published: 2026-09-27
topics: Salesforce, FastAPI, hosted LLMs, AWS EC2, Docker, CloudWatch
role: Forward Deployed Engineer
company: Automation Interns
workPeriod: August 2026 - Present
location: Arizona
---

I built an AI reporting application that combines Salesforce property data with client preferences. The workflow cut report preparation time by 20–40%. The agency owner reported handling 40% more client calls after adoption.

The application connects Salesforce to a hosted LLM through FastAPI, with report validation, timeouts, and retries so generated drafts remain useful during live client meetings. Before the records enter the reporting flow, Pipedrive contacts are cleaned, deduplicated, and validated to avoid merging distinct clients.

The service runs on AWS EC2 with Docker and CloudWatch monitoring. Health checks and a rehearsed rollback path keep recovery under ten minutes.
`;export{e as default};
