export const personal = {
  name: "Pratham Vanangadu Keshava Babu",
  shortName: "Pratham V K",
  email: "prathamvk27@gmail.com",
  phone: "(602) 394-5089",
  location: "United States",
  linkedin: "https://linkedin.com/in/prathamvk27",
  github: "https://github.com/prathamvk27",
  website: "https://prathamvk27.github.io",
  photo: "/src/assets/IMG_1735.jpeg",
  mantra: "I like things that respond a robot arm that corrects its own error, a model that gets sharper with more data.",
  availability: "Open to Robotics/Simulation and AI/Software Engineering roles — let's talk",
  funFacts: [
    "Built a UR5e digital twin that plays Tic-Tac-Toe the robot never loses, which is oddly satisfying to watch",
    "Fine-tuned transformers on chest X-rays and learned that medical labels are never clean",
    "Currently learning Rust by reimplementing things that already work in Python",
    "My A* planner explores 61% fewer nodes than Dijkstra I count that as a win",
  ],
}

export const projects = [
  // ── AI/Software Engineering Track (ordered by quantified impact) ──
  {
    title: "High-Throughput Retail Backend System",
    hook: "Full-stack backend for a coffee shop chain inventory, billing, orders, reporting 1,000+ daily transactions",
    track: "ai",
    outcome: "Production-ready API with P95 latency under 100ms, handling 10x peak load without degradation",
    details: {
      challenge: "A real-time backend looks simple until you deal with concurrent orders, inventory that decrements instantly, and peak-hour latency demands.",
      contribution: "Designed and built the full backend FastAPI for REST, PostgreSQL for persistent data, Redis for caching and order queue, Docker Compose for local dev.",
      decisions: "FastAPI over Flask for native async support the event loop handles concurrent requests without blocking on DB queries. Redis for the order queue rather than pushing directly to PostgreSQL to avoid write contention.",
      outcome: "Serves 1,000+ daily transactions with P95 latency under 100ms. Async architecture handles 10x peak load without degradation.",
    },
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Real-Time Cyberbullying Classifier",
    hook: "Streaming NLP pipeline that flags harmful content as posts land",
    track: "ai",
    outcome: "Real-time classification processing live streams with 87% precision, sub-500ms end-to-end latency",
    details: {
      challenge: "Content moderation needs to be real-time by the time a human reviewer sees a flagged post, the harm has already happened.",
      contribution: "Integrated streaming API to ingest live content, built an NLP preprocessing pipeline (tokenization, TF-IDF vectorization), and trained a multi-class SVM classifier on labeled data.",
      decisions: "SVM with linear kernel for best precision-recall tradeoff on imbalanced classes. TF-IDF over word2vec because interpretability mattered for tuning false positive rates.",
      outcome: "Processes content in real time with 87% precision, full pipeline (ingest → clean → classify → alert) in under 500ms per item.",
    },
    tags: ["Python", "NLP", "scikit-learn", "Streaming", "ML Pipeline"],
  },
  {
    title: "Swin-B Transformer for Chest X-ray Classification",
    hook: "Multi-label pathology classification on 224K radiographs using shifted-window attention",
    track: "ai",
    outcome: "Achieved competitive multi-label AUC on CheXpert benchmark with 88M-parameter Swin-B transformer",
    details: {
      challenge: "CheXpert contains 224K chest radiographs with 14 pathology labels, but the ground truth is sparse and noisy many labels are marked 'uncertain' or 'not mentioned,' making standard cross-entropy training unreliable.",
      contribution: "Designed a multi-label training pipeline using BCEWithLogitsLoss with uncertain-label masking, AdamW optimization, and ReduceLROnPlateau scheduling over 25 epochs. Applied transfer learning from ImageNet-pretrained Swin-B weights.",
      decisions: "Chose Swin-B over ResNet/EfficientNet for its shifted-window attention, which captures both local and global spatial patterns better than CNNs. Used uncertain-as-negative policy after comparing alternatives.",
      outcome: "Model learned clinically relevant features despite noisy labels, with shifted-window attention proving particularly effective for bilateral pathology comparison.",
    },
    tags: ["PyTorch", "Transformers", "Computer Vision", "Healthcare"],
  },

  // ── Robotics Track (ordered by quantified impact) ────────────
  {
    title: "A* Path Planning Engine",
    hook: "Zero-dependency 2D occupancy grid library A* explores 61% fewer nodes than Dijkstra",
    track: "robotics",
    outcome: "A* explored 61% fewer nodes than Dijkstra on identical maps while guaranteeing shortest-path optimality",
    details: {
      challenge: "Path planning is the backbone of autonomous navigation, but most tutorials implement A* as a black box I wanted one where every line of the heuristic, cost, and search logic was mine to tune.",
      contribution: "Built a zero-dependency 2D occupancy grid library implementing A*, Dijkstra, and Greedy best-first with a unified PlanResult interface matching Nav2 global planner foundations.",
      decisions: "Octile heuristic over Euclidean admissible and consistent for 8-connected grids, so A* remains optimal while pruning more nodes.",
      outcome: "A* explored 61% fewer nodes than Dijkstra while guaranteeing shortest-path optimality. Interactive Matplotlib visualizer with animated exploration replay and GIF export.",
    },
    tags: ["A*", "Path Planning", "Python", "NumPy", "Nav2"],
  },
  {
    title: "YOLOv8 Perception & Safety System",
    hook: "Production-grade AMR perception with danger zones and E-stop safety signal ISO 3691-4 inspired",
    track: "robotics",
    outcome: "GPU inference >60 FPS on Jetson-class hardware with configurable danger zones and boolean E-stop logic",
    details: {
      challenge: "Warehouse robots need to detect humans, vehicles, and obstacles in real time and trigger safety stops all while running on edge hardware with limited compute.",
      contribution: "Built a complete AMR perception pipeline with YOLOv8 + ByteTrack multi-object tracking, configurable polygon danger zones, and a boolean E-stop safety signal. Architecture mirrors ISO 3691-4 compliant safety systems.",
      decisions: "Chose YOLOv8 over traditional background-subtraction methods for robustness to lighting changes. ByteTrack for consistent ID assignment across occlusions. Polygon danger zones over circular for precise geometry near racking aisles.",
      outcome: "Benchmarked across 320×240→1280×720 resolutions with GPU inference >60 FPS on Jetson. Frame-level JSONL telemetry logger enables offline incident replay and root-cause analysis.",
    },
    tags: ["YOLOv8", "ByteTrack", "OpenCV", "Jetson", "Safety Systems"],
  },
  {
    title: "Digital Twin – UR5e Robotic Cell",
    hook: "SolidWorks twin + MATLAB control + YOLO perception + SLAM localization full perception-to-actuation pipeline",
    track: "robotics",
    outcome: "End-to-end autonomous gameplay with digital-twin-to-physical-hardware deployment pipeline",
    details: {
      challenge: "Bridging a SolidWorks digital twin with real-time MATLAB control, vision-based game-state perception, and physical UR5e hardware requires stitching together four different toolchains into one coherent pipeline.",
      contribution: "Created a SolidWorks digital twin of the UR5e with MATLAB/Simulink for autonomous control, SLAM for localization, and YOLOv5 for game-state perception. Wrapped the entire pipeline in Docker CI/CD targeting physical UR hardware.",
      decisions: "MATLAB/Simulink over ROS 2 for the control layer because the UR5e's native MATLAB support made joint-space trajectory planning and forward/inverse kinematics significantly faster to prototype.",
      outcome: "Full perception→planning→control pipeline running in Docker, deployable to physical UR hardware with zero toolchain changes. The robot plays a complete game of Tic-Tac-Toe autonomously.",
    },
    tags: ["SolidWorks", "MATLAB/Simulink", "UR5e", "SLAM", "YOLOv5"],
  },
]

export const moreProjects = [
  {
    title: "BART Summarizer with LoRA Fine-Tuning",
    hook: "Parameter-efficient abstractive summarization 1.2% of parameters trained, full model performance",
    track: "ai",
    outcome: "Matched full fine-tuning ROUGE scores while training only ~1.2% of parameters, checkpoint 50x smaller",
    tags: ["PyTorch", "HuggingFace", "LoRA", "NLP", "BART"],
  },
  {
    title: "Kalman Filter Suite for State Estimation",
    hook: "1D KF, N-D KF, and EKF for differential-drive robots from math to validated hardware",
    track: "robotics",
    outcome: "68% lower MAE vs raw sensors; GPS scatter reduced from 3.0m to 0.8m on curved trajectories",
    tags: ["Kalman Filter", "EKF", "Sensor Fusion", "Python", "NumPy"],
  },
  {
    title: "Sim-to-Real Deployment Pipeline",
    hook: "Multi-fidelity simulation (Gazebo + Isaac Sim) with quantifiable sim-to-real gap analysis",
    track: "robotics",
    outcome: "Quantified sim-to-real gap via real-world YOLOv8 mAP benchmarking across simulation fidelities",
    tags: ["ROS 2", "Gazebo", "Isaac Sim", "YOLOv8", "CI/CD"],
  },
  {
    title: "Embedded Real-Time Drone Orientation Detector",
    hook: "On-device TFLite inference on microcontroller 98% accuracy within real-time stabilization loops",
    track: "robotics",
    outcome: "98.04% orientation classification accuracy on Cortex-M4 at 20 FPS, under 10mW power draw",
    tags: ["Embedded C++", "TFLite", "IMU", "ARM Cortex-M4", "Real-Time"],
  },
]

// ── Track A: Robotics & Simulation Resume ────────────────────────
export const roboticsResume = {
  summary: "Robotics Software Engineer with hands-on expertise in ROS 2, embedded Linux, real-time control, sensor fusion, and autonomous navigation. Built and deployed production robotics pipelines spanning YOLOv8 perception, Kalman/EKF state estimation, and A* motion planning from mathematical foundations to benchmarked, hardware-validated systems. UR-certified. Strong C++ and Python. Experienced with Gazebo, MoveIt 2, SLAM, NVIDIA Jetson, and CI/CD-backed embedded workflows.",
  tagline: "Robotics Software Engineer | Embedded Linux | ROS 2 | Real-Time Control Systems",
  experience: [
    {
      title: "Robotics Software Engineer",
      company: "Internpro.ai",
      location: "Tempe, AZ",
      dates: "Aug 2025 – Present",
      bullets: [
        "Developed and deployed ROS 2 robotic systems on physical hardware with real-time control loops and Gazebo/MoveIt 2 sim-to-hardware pipelines, improving object localization accuracy by 27%.",
        "Built vision-guided manipulation systems combining RGB/LiDAR sensor fusion, point cloud processing, and inverse kinematics for autonomous pick-and-place, boosting process efficiency by 70%.",
        "Engineered real-time visual servoing pipelines in low-light environments with closed-loop control, reducing task execution time by 95% on safety-critical operations.",
        "Designed dual-arm coordination and collision-aware motion planning with MoveIt 2; automated CI/CD (GitHub Actions) for embedded robotic software build/test/deploy.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Ness Digital Engineering",
      location: "Bengaluru, India",
      dates: "Feb 2023 – Aug 2023",
      bullets: [
        "Containerized Python FastAPI services with Docker; implemented JWT/Azure AD auth and CI/CD pipelines achieving 85%+ test coverage and reducing load times by 35%.",
        "Designed and developed microservices architecture in Java using Spring Boot, J2EE, JSP and JDBC within an Agile/SCRUM environment, improving system scalability and reducing deployment time by 30%.",
        "Engineered asynchronous, fault-tolerant distributed pipelines using Docker, Kubernetes, and Azure (CosmosDB, Data Factory) and AWS services (S3, EC2). Wrote unit and integration tests using JUnit and Mockito; optimized MongoDB query performance using Compass and Mongoose.",
      ],
    },
    {
      title: "Machine Learning Intern",
      company: "1stop.ai",
      location: "India",
      dates: "Aug 2021 – Oct 2021",
      bullets: [
        "Built FastAPI inference-serving endpoints for AI models on Linux with request validation and automated testing; built data-processing pipelines using Docker and Azure SQL; integrated inference services into TypeScript web applications for real-time predictions.",
        "Debugged API services, tuned endpoint performance, and performed integration testing with Postman and Docker to achieve low-latency responses.",
      ],
    },
  ],
  education: [
    {
      degree: "MS, Systems Engineering (Robotics and Autonomous Systems)",
      school: "Arizona State University",
      location: "Tempe, Arizona, USA",
      dates: "Aug 2023 – May 2025",
    },
    {
      degree: "B.E, Information and Computer Science",
      school: "Vemana Institute of Technology (VTU Affiliated)",
      location: "Bangalore, India",
      dates: "Jul 2018 – Jun 2022",
    },
  ],
  skills: [
    "C++", "Python", "ROS 2", "MoveIt 2", "Gazebo", "Nav2", "SLAM",
    "YOLOv8", "OpenCV", "ByteTrack", "Kalman Filter", "EKF", "Sensor Fusion",
    "Point Cloud Processing", "Embedded Linux", "NVIDIA Jetson", "TFLite Micro",
    "Docker", "Kubernetes", "GitHub Actions", "MATLAB/Simulink", "SolidWorks",
    "Universal Robots (UR-Certified)", "Real-Time Systems",
  ],
}

// ── Track B: AI & Software Engineering Resume ────────────────────
export const aiResume = {
  summary: "AI Software Engineer with proven expertise in Python, LLM-based AI solutions (RAG, LangChain, fine-tuning), and building scalable backend services. Hands-on experience deploying transformer models, building data pipelines, and integrating RESTful/SOAP APIs for enterprise systems. Skilled in cross-functional collaboration with clients and stakeholders to translate business requirements into production AI workflows. Experienced in Agile delivery, CI/CD, and cloud infrastructure (Azure, Docker, Kubernetes). Adept at leveraging AI tools including LLMs and agentic workflows to streamline processes and accelerate outcomes.",
  tagline: "AI & Software Engineer | Python | LLMs | Backend Systems | Cloud Infrastructure",
  experience: [
    {
      title: "Robotics Software Engineer",
      company: "Internpro.ai",
      location: "Tempe, United States",
      dates: "Aug 2025 – Present",
      bullets: [
        "Built real-time distributed data processing pipelines using Python, C++, and ROS 2, applying software engineering best practices for scalable data ingestion and reconciliation in production systems.",
        "Engineered data validation and anomaly detection algorithms using asynchronous processing, reducing errors by 95% through automated quality checks and fault-tolerant design.",
        "Implemented data transformation pipelines that improved accuracy by 27% and streamlined client delivery timelines.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Ness Digital Engineering",
      location: "Bengaluru, India",
      dates: "Feb 2023 – Aug 2023",
      bullets: [
        "Designed and developed microservices in Java (Spring Boot) and C# using Agile/SCRUM, improving system scalability and reducing deployment time by 30% through CI/CD pipeline automation (Azure DevOps, GitHub Actions).",
        "Built and integrated RESTful and SOAP APIs handling JSON, XML, and WSDL payloads for enterprise data exchange; implemented secure JWT authentication enabling seamless client onboarding.",
        "Engineered asynchronous, fault-tolerant distributed pipelines using Docker, Kubernetes, and Azure services (Cosmos DB, Queue Storage, Event Hubs, Data Factory); deployed containerized microservices with real-time data updates via WebSocket and Redis caching.",
        "Performed large-scale data reconciliation and validation using Python and SQL; optimized MongoDB query performance and achieved 85%+ code coverage through JUnit and Mockito testing.",
        "Collaborated with business analysts, architects, and clients on requirements gathering, system design, and data strategy; led code reviews using Git and SonarQube, reducing production defects.",
      ],
    },
    {
      title: "Machine Learning Intern",
      company: "1stop.ai",
      location: "India",
      dates: "Aug 2021 – Oct 2021",
      bullets: [
        "Developed and deployed RESTful APIs with Python (FastAPI, Flask) to serve ML models in production; built data-processing pipelines using Docker and Azure SQL, integrating inference services into client-facing web applications.",
        "Debugged API services, tuned endpoint performance, and performed integration testing with Postman and Docker to achieve reliable, low-latency data delivery.",
      ],
    },
  ],
  education: [
    {
      degree: "MS, Systems Engineering (Robotics and Autonomous Systems)",
      school: "Arizona State University",
      location: "Tempe, Arizona, USA",
      dates: "Aug 2023 – May 2025",
    },
    {
      degree: "B.E, Information and Computer Science",
      school: "Vemana Institute of Technology (VTU Affiliated)",
      location: "Bangalore, India",
      dates: "Jul 2018 – Jun 2022",
    },
  ],
  skills: [
    "Python", "Java", "Spring Boot", "SQL", "MongoDB", "PostgreSQL",
    "PyTorch", "TensorFlow", "HuggingFace", "LangChain", "RAG",
    "LLM Fine-Tuning", "Prompt Engineering", "Agentic Workflows",
    "Docker", "Kubernetes", "Azure", "FastAPI", "Flask",
    "REST", "SOAP", "Git", "Jira", "Agile/SCRUM",
  ],
}
