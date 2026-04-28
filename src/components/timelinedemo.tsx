import React from "react";
import { Timeline } from "./timeline";
import img1 from "../assets/spam1.jpeg";
import img2 from "../assets/spam2.jpeg";
import img3 from "../assets/spam3.png";
import {
  SiPython, SiMysql, SiHtml5, SiJavascript,
  SiTensorflow, SiPytorch,
  SiSpring, SiDocker, SiKubernetes,
  SiReact, SiTailwindcss, SiRust, SiGit,
} from "react-icons/si";


// Icons 
const JavaIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    className="w-8 h-8 grayscale opacity-70 hover:opacity-100 transition duration-200"
    alt="Java"
  />
);

const AWSIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    className="w-8 h-8 grayscale opacity-70 group-hover/badge:opacity-100 transition duration-200"
    alt="AWS"
  />
);

const AzureIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
    className="w-8 h-8 grayscale opacity-70 group-hover/badge:opacity-100 transition duration-200"
    alt="Azure"
  />
);

//


// Then use it as:

// ─── Shared Components ────────────────────────────────────────────────────────

// Icon + name below — consistent for both "Technologies Learned" and "Tech Stack"
const TechBadge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center gap-1.5 group/badge cursor-default">
    <div className="text-3xl text-neutral-300 group-hover/badge:text-white transition duration-200">
      {icon}
    </div>
    <span className="text-xs text-neutral-500 group-hover/badge:text-neutral-300 transition duration-200 whitespace-nowrap">
      {label}
    </span>
  </div>
);

// Section label like "TECH STACK" or "TECHNOLOGIES LEARNED"
const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4 font-medium">
    {text}
  </p>
);

// Course/tag pill
const CourseTag = ({ name }: { name: string }) => (
  <span className="px-3 py-1 rounded-full text-xs bg-neutral-800 text-neutral-300 border border-neutral-700 hover:border-neutral-500 hover:text-white transition duration-200 cursor-default">
    {name}
  </span>
);

// Bullet point with arrow
const Bullet = ({ text }: { text: string }) => (
  <li className="text-neutral-400 text-sm leading-relaxed list-none flex gap-2">
    <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
    <span>{text}</span>
  </li>
);

// Card wrapper — each distinct event gets its own card with a colored left border
const EventCard = ({
  children,
  accent = "blue",
}: {
  children: React.ReactNode;
  accent?: "blue" | "purple" | "emerald" | "amber";
}) => {
  const borderColors: Record<string, string> = {
    blue:    "border-l-blue-500",
    purple:  "border-l-purple-500",
    emerald: "border-l-emerald-500",
    amber:   "border-l-amber-500",
  };
  return (
    <div
      className={`flex flex-col gap-5 bg-neutral-800/40 border border-neutral-700/50 border-l-2 ${borderColors[accent]} rounded-xl p-5`}
    >
      {children}
    </div>
  );
};

// ─── Timeline ─────────────────────────────────────────────────────────────────

export function TimelineDemo() {
  const data = [
    // ── 2018 ──────────────────────────────────────────────────────────────────
    {
      title: "2018",
      content: (
        <div className="flex flex-col gap-5">
          <EventCard accent="blue">
            <div>
              <p className="text-white font-bold text-lg mb-0.5">
                Vemana Institute of Technology
              </p>
              <p className="text-blue-400 text-sm font-medium">
                B.E. in Information and Computer Science
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                July 2018 – June 2022 · VTU Affiliated · Bangalore, India
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img src={img1} alt="VIT campus" className="rounded-lg object-cover h-40 w-full" />
              <img src={img2} alt="VIT logo" className="rounded-lg object-cover h-40 w-full" />
            </div>

            <div>
              <SectionLabel text="Technologies Learned" />
              <div className="flex flex-wrap gap-6">
                <TechBadge icon={<SiPython />} label="Python" />
                <TechBadge icon={<JavaIcon />} label="Java" />
                <TechBadge icon={<SiMysql />} label="MySQL" />
                <TechBadge icon={<AWSIcon/>} label="AWS" />
                <TechBadge icon={<SiHtml5 />} label="HTML" />
                <TechBadge icon={<SiJavascript />} label="JavaScript" />
              </div>
            </div>

            <div>
              <SectionLabel text="Key Coursework" />
              <div className="flex flex-wrap gap-2">
                <CourseTag name="Data Structures" />
                <CourseTag name="Algorithms" />
                <CourseTag name="Database Systems" />
                <CourseTag name="Operating Systems" />
                <CourseTag name="Computer Networks" />
                <CourseTag name="Machine Learning" />
                <CourseTag name="Software Engineering" />
              </div>
            </div>
          </EventCard>
        </div>
      ),
    },

    // ── 2021 ──────────────────────────────────────────────────────────────────
    {
      title: "2021",
      content: (
        <div className="flex flex-col gap-5">
          <EventCard accent="purple">
            <div>
              <p className="text-white font-bold text-lg mb-0.5">
                Machine Learning Intern
              </p>
              <p className="text-purple-400 text-sm font-medium">1stop.ai</p>
              <p className="text-neutral-500 text-xs mt-1">
                Aug 2021 – Oct 2021 · India
              </p>
            </div>

            <ul className="flex flex-col gap-2.5">
              <Bullet text="Developed deep learning models using TensorFlow, Keras and PyTorch on large-scale medical datasets — improved model precision by up to 25% and reduced training time." />
              <Bullet text="Built data ingestion pipelines with Azure Datalake and Blob Storage. Used Azure Databricks for exploratory analysis and Delta Lake — 20% faster queries." />
              <Bullet text="Applied XGBoost, Random Forests and Time Series Forecasting for healthcare and financial clients." />
            </ul>

            <div>
              <SectionLabel text="Tech Stack" />
              <div className="flex flex-wrap gap-6">
                <TechBadge icon={<SiPytorch />} label="PyTorch" />
                <TechBadge icon={<SiPython />} label="Python" />
                <TechBadge icon={<SiTensorflow />} label="TensorFlow" />
                <TechBadge icon={<AzureIcon/>} label="Azure"/>
              </div>
            </div>
          </EventCard>
        </div>
      ),
    },

    // ── 2022 ──────────────────────────────────────────────────────────────────
    {
      title: "2022",
      content: (
        <div className="flex flex-col gap-5">
          <EventCard accent="emerald">
            <div>
              <p className="text-white font-bold text-lg mb-0.5">
                Graduated 🎓
              </p>
              <p className="text-emerald-400 text-sm font-medium">
                Vemana Institute of Technology
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                B.E. in Information and Computer Science · June 2022
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <CourseTag name="Final Year Project" />
              <CourseTag name="ML Internship @ 1stop.ai" />
              <CourseTag name="Open Source Contributions" />
            </div>
          </EventCard>
        </div>
      ),
    },

    // ── 2023 ──────────────────────────────────────────────────────────────────
    {
      title: "2023",
      content: (
        <div className="flex flex-col gap-5">

          {/* Ness — blue card */}
          <EventCard accent="blue">
            <div>
              <p className="text-white font-bold text-lg mb-0.5">
                Software Engineer
              </p>
              <p className="text-blue-400 text-sm font-medium">
                Ness Digital Engineering
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                Full-time · Feb 2023 – Aug 2023 · India
              </p>
            </div>

            <img
              src={img3}
              alt="Ness Digital Engineering"
              className="rounded-lg object-cover h-40 w-full"
            />

            <ul className="flex flex-col gap-2.5">
              <Bullet text="Built backend services with Spring Boot — REST APIs secured with Spring Security and OAuth2, documented with Swagger, deployed via Docker on Kubernetes." />
              <Bullet text="CI/CD via Jenkins, validated with JUnit — delivered for large-scale clients including Canadian Tire and Pearson." />
              <Bullet text="Maintained high-throughput ETL pipelines processing 30M+ records, extended to a cloud-based data lake on Azure and AWS." />
            </ul>

            <div>
              <SectionLabel text="Tech Stack" />
              <div className="flex flex-wrap gap-6">
                <TechBadge icon={<JavaIcon />} label="Java" />
                <TechBadge icon={<SiSpring />} label="Spring Boot" />
                <TechBadge icon={<SiDocker />} label="Docker" />
                <TechBadge icon={<SiKubernetes />} label="Kubernetes" />
              </div>
            </div>
          </EventCard>

          {/* ASU — amber card, clearly separate from Ness */}
          <EventCard accent="amber">
            <div>
              <p className="text-white font-bold text-lg mb-0.5">
                MS in Systems Engineering 🌵
              </p>
              <p className="text-amber-400 text-sm font-medium">
                Arizona State University
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                Robotics and Autonomous Systems · Aug 2023 – May 2025 · Tempe, Arizona, USA
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <CourseTag name="Robotics" />
              <CourseTag name="Autonomous Systems" />
              <CourseTag name="Embedded ML" />
              <CourseTag name="Computer Vision" />
            </div>
          </EventCard>

        </div>
      ),
    },

    // ── 2025 ──────────────────────────────────────────────────────────────────
    {
      title: "2025",
      content: (
        <div className="flex flex-col gap-5">
          <EventCard accent="emerald">
            <div>
              <p className="text-white font-bold text-lg mb-0.5">
                MS Graduate 🎓
              </p>
              <p className="text-emerald-400 text-sm font-medium">
                Arizona State University
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                Systems Engineering — Robotics and Autonomous Systems · May 2025
              </p>
            </div>

            <ul className="flex flex-col gap-2.5">
              <Bullet text="Building this portfolio and working on open source projects." />
              <Bullet text="Learning Rust, reading ML papers — recent favs: Recursive Language Models and Flash Attention." />
              <Bullet text="Working on my own LLM — check GitHub!" />
            </ul>

            <div>
              <SectionLabel text="Current Stack" />
              <div className="flex flex-wrap gap-6">
                <TechBadge icon={<SiReact />} label="React" />
                <TechBadge icon={<SiTailwindcss />} label="Tailwind" />
                <TechBadge icon={<SiRust />} label="Rust" />
                <TechBadge icon={<SiPytorch />} label="PyTorch" />
                <TechBadge icon={<SiGit />} label="Git" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <CourseTag name="Open to Relocation" />
              <CourseTag name="Open Source" />
              <CourseTag name="Building in Public" />
            </div>
          </EventCard>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}