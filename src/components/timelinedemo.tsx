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

const TechBadge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center gap-1.5 group/badge cursor-default">
    <div className="text-3xl text-white/55 group-hover/badge:text-white transition duration-200">{icon}</div>
    <span className="text-xs text-white/45 group-hover/badge:text-white/65 transition duration-200 whitespace-nowrap">{label}</span>
  </div>
);

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-white/45 text-xs uppercase tracking-widest mb-4 font-medium">{text}</p>
);

const CourseTag = ({ name }: { name: string }) => (
  <span className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/55 border border-white/10 hover:border-white/25 hover:text-white transition duration-200 cursor-default">{name}</span>
);

const Bullet = ({ text }: { text: string }) => (
  <li className="text-white/55 text-sm leading-relaxed list-none flex gap-2">
    <span className="text-school-bus-yellow mt-0.5 flex-shrink-0">▸</span>
    <span>{text}</span>
  </li>
);

const EventCard = ({ children, accent = "primary" }: { children: React.ReactNode; accent?: "primary" | "secondary" }) => {
  const borderColors: Record<string, string> = {
    primary: "border-l-school-bus-yellow",
    secondary: "border-l-gold",
  };
  return (
    <div className={`flex flex-col gap-5 bg-white/[0.03] border border-white/8 border-l-2 ${borderColors[accent]} rounded-lg p-5`}>
      {children}
    </div>
  );
};

export function TimelineDemo() {
  const data = [
    {
      title: "2018",
      content: (
        <div className="flex flex-col gap-5">
          <EventCard accent="primary">
            <div>
              <p className="text-white font-semibold text-lg mb-0.5">Vemana Institute of Technology</p>
              <p className="text-school-bus-yellow text-sm font-medium">B.E. in Information and Computer Science</p>
              <p className="text-white/45 text-xs mt-1">July 2018 – June 2022 · VTU Affiliated · Bangalore, India</p>
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
                <TechBadge icon={<AWSIcon />} label="AWS" />
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

    {
      title: "2021",
      content: (
        <div className="flex flex-col gap-5">
          <EventCard accent="primary">
            <div>
              <p className="text-white font-semibold text-lg mb-0.5">Machine Learning Intern</p>
              <p className="text-school-bus-yellow text-sm font-medium">1stop.ai</p>
              <p className="text-white/45 text-xs mt-1">Aug 2021 – Oct 2021 · India</p>
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
                <TechBadge icon={<AzureIcon />} label="Azure" />
              </div>
            </div>
          </EventCard>
        </div>
      ),
    },

    {
      title: "2022",
      content: (
        <div className="flex flex-col gap-5">
          <EventCard accent="secondary">
            <div>
              <p className="text-white font-semibold text-lg mb-0.5">Graduated 🎓</p>
              <p className="text-gold text-sm font-medium">Vemana Institute of Technology</p>
              <p className="text-white/45 text-xs mt-1">B.E. in Information and Computer Science · June 2022</p>
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

    {
      title: "2023",
      content: (
        <div className="flex flex-col gap-5">
          <EventCard accent="primary">
            <div>
              <p className="text-white font-semibold text-lg mb-0.5">Software Engineer</p>
              <p className="text-school-bus-yellow text-sm font-medium">Ness Digital Engineering</p>
              <p className="text-white/45 text-xs mt-1">Full-time · Feb 2023 – Aug 2023 · India</p>
            </div>

            <img src={img3} alt="Ness Digital Engineering" className="rounded-lg object-cover h-40 w-full" />

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

          <EventCard accent="secondary">
            <div>
              <p className="text-white font-semibold text-lg mb-0.5">MS in Systems Engineering 🌵</p>
              <p className="text-gold text-sm font-medium">Arizona State University</p>
              <p className="text-white/45 text-xs mt-1">Robotics and Autonomous Systems · Aug 2023 – May 2025 · Tempe, Arizona, USA</p>
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

    {
      title: "2025",
      content: (
        <div className="flex flex-col gap-5">
          <EventCard accent="secondary">
            <div>
              <p className="text-white font-semibold text-lg mb-0.5">MS Graduate 🎓</p>
              <p className="text-gold text-sm font-medium">Arizona State University</p>
              <p className="text-white/45 text-xs mt-1">Systems Engineering — Robotics and Autonomous Systems · May 2025</p>
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
