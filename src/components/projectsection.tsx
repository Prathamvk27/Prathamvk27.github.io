import { cn } from "../lib/utils";
import {
  IconBrain,
  IconRobot,
  IconDeviceMobile,
  IconMicrophone,
  IconCoffee,
  IconChartLine,
  IconCode,
  IconBug,
} from "@tabler/icons-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "BART Summarizer",
      description:
        "Fine-tuned a BART model using LoRA with a custom head architecture for abstractive text summarization. Efficient training with minimal compute using parameter-efficient fine-tuning.",
      icon: <IconBrain />,
      tags: ["PyTorch", "HuggingFace", "LoRA", "BART", "NLP"],
    },
    {
      title: "Real-Time Bully Tweet Classifier",
      description:
        "Integrated Tweepy API to stream live tweets and classify cyberbullying in real time. Built an NLP pipeline to detect harmful content as it happens on the platform.",
      icon: <IconBug />,
      tags: ["Python", "Tweepy", "NLP", "scikit-learn", "Twitter API"],
    },
    {
      title: "Robotic Tic-Tac-Toe",
      description:
        "Deployed YOLOv4 to detect color-coded blocks as X and O pieces, mapping a live camera feed into a 3×3 bounding-box grid. A myCobot arm played the game autonomously in real time.",
      icon: <IconRobot />,
      tags: ["YOLOv4", "OpenCV", "myCobot", "Python", "Computer Vision"],
    },
    {
      title: "On-Device Motion Classifier",
      description:
        "Trained a neural network on IMU sensor data from a microcontroller, then compressed and deployed it via TFLite for real-time orientation classification — entirely on-device, no cloud needed.",
      icon: <IconDeviceMobile />,
      tags: ["TFLite", "Arduino", "Edge ML", "IMU Sensors", "Python"],
    },
    {
      title: "Edge Voice Command Detector",
      description:
        "Built a keyword-spotting model deployed on a microcontroller's onboard microphone. Recognized trained commands and gracefully flagged out-of-vocabulary words as unknown — fully offline.",
      icon: <IconMicrophone />,
      tags: ["TFLite", "DSP", "Edge ML", "Microcontroller", "Audio ML"],
    },
    {
      title: "Coffee Shop Backend System",
      description:
        "Engineered a full-featured backend for a coffee shop covering inventory management, billing, order tracking, and reporting. Built with Python, FastAPI, PostgreSQL, Redis, and Docker.",
      icon: <IconCoffee />,
      tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    },
    {
      title: "Household Energy Analytics",
      description:
        "Collected and analyzed time-series energy consumption data across multiple households. Used Azure Data Factory for ingestion, SQL for querying, and Python for visualizations and conclusions.",
      icon: <IconChartLine />,
      tags: ["Python", "Azure", "SQL", "Pandas", "Time Series"],
    },
    {
      title: "Open Source Contribution",
      description:
        "Actively contributing to an open source project. Details coming soon — stay tuned for updates!",
      icon: <IconCode />,
      tags: ["Open Source", "Coming Soon"],
    },
  ];

  return (
    <div className="w-full bg-neutral-900 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white font-bold">
          Projects
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-sm">
          A collection of ML, robotics, embedded systems, and software projects
          I've built along the way.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </div>
  );
}

const ProjectCard = ({
  title,
  description,
  icon,
  tags,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {/* Hover gradient - top rows */}
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {/* Hover gradient - bottom rows */}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}

      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>

      {/* Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10 mb-4">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 px-10 relative z-10">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 group-hover/feature:border-neutral-600 transition duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};