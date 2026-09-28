export const profile = {
  name: "Pratham Vanangadu Keshava Babu",
  shortName: "Pratham Babu",
  role: "AI Engineer",
  location: "Tempe, Arizona",
  email: "prathamvk27@gmail.com",
  phone: "602-394-5089",
  linkedin: "https://linkedin.com/in/prathamvk27",
  website: "https://prathamvk27.github.io",
  summary:
    "Software engineer who builds and deploys AI services, from customer-facing LLM tools to shared model endpoints. I work across Python, FastAPI, vLLM, containers, cloud infrastructure, release testing, and monitoring.",
}

export const workNotes = [
  {
    slug: "ai-reporting-workflows",
    date: "August 2026 - Present",
    company: "Automation Interns",
    location: "Arizona",
    role: "Forward Deployed Engineer",
    title: "AI reporting for real-estate teams",
    introduction:
      "Connecting customer data and an LLM to make client reporting faster.",
    paragraphs: [
      "I built an AI reporting application that combines Salesforce property data with client preferences. The workflow cut report preparation time by 20-40%. The agency owner reported handling 40% more client calls after adoption.",
      "The application connects Salesforce to a hosted LLM through FastAPI, with report validation, timeouts, and retries so generated drafts remain useful during live client meetings. Before the records enter the reporting flow, Pipedrive contacts are cleaned, deduplicated, and validated to avoid merging distinct clients.",
      "The service runs on AWS EC2 with Docker and CloudWatch monitoring. Health checks and a rehearsed rollback path keep recovery under ten minutes.",
    ],
    topics: "Salesforce, FastAPI, hosted LLMs, AWS EC2, Docker, CloudWatch",
  },
  {
    slug: "shared-model-inference",
    date: "August 2025 - July 2026",
    company: "EPICS at ASU",
    platform: "Internpro.ai",
    location: "Arizona",
    role: "Engineering Volunteer, AI Infrastructure",
    title: "Bringing new models online",
    introduction:
      "Shared inference services, background workers, and release checks for the Internpro.ai platform.",
    paragraphs: [
      "I built a shared FastAPI and vLLM service that reduced the time needed to bring new models online from one or two days to a few hours.",
      "Long-running document processing moved to Celery and Redis workers, with results in S3 and job state in PostgreSQL. Retry behavior was designed to avoid duplicate outputs. GPU-backed inference services ran on Kubernetes with readiness checks and rolling updates, while Prometheus tracked latency, queue backlog, and errors.",
      "MLflow release checks covered model output, API compatibility, and latency. Regressions were blocked before rollout while preserving a clear rollback path.",
    ],
    topics: "FastAPI, vLLM, Celery, Redis, PostgreSQL, S3, Kubernetes, Prometheus, MLflow",
  },
  {
    slug: "reliable-backend-delivery",
    date: "February 2023 - August 2023",
    company: "Ness Digital Engineering",
    location: "Karnataka, India",
    role: "Software Engineer",
    title: "Reliable backends, from tests to releases",
    introduction:
      "What went into API testing, caching, backups, and delivery at Ness.",
    paragraphs: [
      "I built Django APIs and PostgreSQL services for financial workflows, increasing Pytest unit and end-to-end coverage from 45% to 90%.",
      "Frequently used reference data was cached in Redis with expiry and post-update invalidation, reaching a 70% cache hit rate during load tests and reducing database reads.",
      "I automated MongoDB and MySQL backups across seven deployment stages, replacing a 32-step manual process with versioned archives and restore checks. Jenkins automation also reduced commit-to-staging time from 30 to 20 minutes while keeping production releases approval-gated.",
    ],
    topics: "Django, PostgreSQL, Redis, Pytest, MongoDB, MySQL, Jenkins",
  },
]

export const skillGroups = [
  {
    label: "Backend",
    items: "Python, SQL, FastAPI, Django, REST APIs, PostgreSQL, Redis, Celery, Linux",
  },
  {
    label: "AI and inference",
    items: "PyTorch, Hugging Face Transformers, vLLM, ONNX Runtime, MLflow, model evaluation, inference benchmarking",
  },
  {
    label: "Cloud and infrastructure",
    items: "AWS, GCP, Docker, Kubernetes, Terraform",
  },
  {
    label: "Delivery and observability",
    items: "Jenkins, GitHub Actions, Prometheus, Git, CI/CD, load testing, structured logging, health checks, rollback workflows",
  },
]

export const education = [
  {
    degree: "M.S. Robotics and Autonomous Systems",
    school: "Arizona State University",
    date: "May 2025",
  },
  {
    degree: "B.E. Information Science",
    school: "Vemana Institute of Technology, VTU",
  },
]
