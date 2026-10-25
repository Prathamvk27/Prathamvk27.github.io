export const profile = {
  name: "Pratham Vanangadu Keshava Babu",
  shortName: "Pratham Babu",
  role: "AI Engineer",
  location: "Tempe, Arizona",
  email: "prathamvk27@gmail.com",
  phone: "602-394-5089",
  linkedin: "https://linkedin.com/in/prathamvk27",
  github: "https://github.com/prathamvk27",
  website: "https://prathamvk27.github.io",
  summary:
    "Software engineer who builds and deploys AI services, from customer-facing LLM tools to shared model endpoints. I work across Python, FastAPI, vLLM, containers, cloud infrastructure, release testing, and monitoring.",
}

export const workExperience = [
  {
    date: "August 2026 - Present",
    company: "Automation Interns",
    role: "Forward Deployed Engineer",
    highlights: [
      "Turned a real estate client's broker processes into buyer and seller workflows.",
      "Built a FastAPI reporting app that combines Salesforce property data and client inputs so brokers can prepare reports during meetings.",
      "Normalized Pipedrive records and handled inconsistent data and failed requests across the integrations.",
    ],
  },
  {
    date: "January 2, 2026 - Present",
    company: "Stealth Startup",
    role: "Founding Engineer",
    highlights: [
      "Built Python and FastAPI endpoints for text generation and classification, with validated request and response contracts.",
      "Added provider retries, model release checks, rollback, and inference monitoring to make local AI services more reliable.",
      "Parallelized embedding generation with Ray on a Kind/KubeRay cluster.",
    ],
  },
  {
    date: "August 2025 - July 2026",
    company: "EPICS at ASU",
    platform: "Internpro.ai",
    role: "Research Volunteer, AI Infrastructure",
    highlights: [
      "Built shared FastAPI model-serving APIs and moved document processing to Celery workers backed by Redis, PostgreSQL, and S3.",
      "Connected ROS 2 perception and motion control to robot arms, using Gazebo and MoveIt 2 to develop and test planned movements before hardware evaluation.",
    ],
  },
  {
    date: "February 2023 - August 2023",
    company: "Ness Digital Engineering",
    role: "Software Engineer",
    highlights: [
      "Built Java and Spring Boot APIs for financial workflows, including database access and OAuth2 authentication.",
      "Reproduced API and database integration defects, corrected field mappings, and added JUnit and Postman regression coverage.",
    ],
  },
]

export const skillGroups = [
  {
    label: "Backend",
    items: "Python, Java, SQL, FastAPI, Django, Spring Boot, Spring Data JPA, Pydantic, REST APIs, PostgreSQL, Redis, Celery, Linux",
  },
  {
    label: "AI and inference",
    items: "PyTorch, Hugging Face Transformers, vLLM, ONNX Runtime, MLflow, OpenAI, Groq, Gemma, model evaluation, inference benchmarking",
  },
  {
    label: "Cloud and infrastructure",
    items: "AWS, GCP, Docker, Kubernetes, Kind, KubeRay, Ray, Terraform",
  },
  {
    label: "Robotics",
    items: "ROS 2, Gazebo, MoveIt 2, Universal Robots, myCobot",
  },
  {
    label: "Testing and API documentation",
    items: "pytest, Ruff, mypy, JUnit, Postman, Swagger",
  },
  {
    label: "Delivery and observability",
    items: "Jenkins, GitHub Actions, OpenTelemetry, Prometheus, Grafana, Git, CI/CD, load testing, structured logging, health checks, rollback workflows",
  },
  {
    label: "Client integrations",
    items: "Salesforce, Pipedrive",
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
