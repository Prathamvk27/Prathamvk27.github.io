import {
  IconBrain,
  IconRobot,
  IconDeviceMobile,
  IconMicrophone,
  IconCoffee,
  IconChartLine,
  IconCode,
  IconBug,
} from "@tabler/icons-react"

const projects = [
  {
    title: "BART Summarizer",
    description: "Fine-tuned a BART model using LoRA with a custom head architecture for abstractive text summarization. Efficient training with minimal compute using parameter-efficient fine-tuning.",
    icon: <IconBrain />,
    tags: ["PyTorch", "HuggingFace", "LoRA", "BART", "NLP"],
  },
  {
    title: "Real-Time Bully Tweet Classifier",
    description: "Integrated Tweepy API to stream live tweets and classify cyberbullying in real time. Built an NLP pipeline to detect harmful content as it happens.",
    icon: <IconBug />,
    tags: ["Python", "Tweepy", "NLP", "scikit-learn", "Twitter API"],
  },
  {
    title: "Robotic Tic-Tac-Toe",
    description: "Deployed YOLOv4 to detect color-coded blocks as X and O pieces, mapping a live camera feed into a 3×3 bounding-box grid. A myCobot arm played the game autonomously.",
    icon: <IconRobot />,
    tags: ["YOLOv4", "OpenCV", "myCobot", "Python", "Computer Vision"],
  },
  {
    title: "On-Device Motion Classifier",
    description: "Trained a neural network on IMU sensor data from a microcontroller, then compressed and deployed it via TFLite for real-time orientation classification — entirely on-device.",
    icon: <IconDeviceMobile />,
    tags: ["TFLite", "Arduino", "Edge ML", "IMU Sensors", "Python"],
  },
  {
    title: "Edge Voice Command Detector",
    description: "Built a keyword-spotting model deployed on a microcontroller's onboard microphone. Recognizes trained commands and flags unknown words — fully offline.",
    icon: <IconMicrophone />,
    tags: ["TFLite", "DSP", "Edge ML", "Microcontroller", "Audio ML"],
  },
  {
    title: "Coffee Shop Backend System",
    description: "Engineered a full-featured backend for a coffee shop covering inventory, billing, order tracking, and reporting. Built with Python, FastAPI, PostgreSQL, Redis, and Docker.",
    icon: <IconCoffee />,
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Household Energy Analytics",
    description: "Collected and analyzed time-series energy consumption data across multiple households. Used Azure Data Factory for ingestion, SQL for querying, and Python for visualizations.",
    icon: <IconChartLine />,
    tags: ["Python", "Azure", "SQL", "Pandas", "Time Series"],
  },
  {
    title: "Open Source Contribution",
    description: "Actively contributing to an open source project. Details coming soon — stay tuned for updates!",
    icon: <IconCode />,
    tags: ["Open Source", "Coming Soon"],
  },
]

export function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col p-5 bg-white/5 border border-white/5 rounded-lg group hover:border-teal/30 hover:bg-teal/[0.03] transition-all duration-200"
        >
          <div className="mb-3 text-white/45 group-hover:text-teal transition-colors duration-200">
            {project.icon}
          </div>
          <h3 className="text-white font-medium text-sm mb-2">{project.title}</h3>
          <p className="text-white/55 text-xs leading-relaxed mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/45 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
