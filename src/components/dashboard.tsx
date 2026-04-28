import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, MapPin, GraduationCap, Briefcase, ExternalLink } from "lucide-react";
import myphoto from "../assets/IMG_1736.JPG";
// ── Animation helpers ──────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

// ── Card base ──────────────────────────────────────────────────────────────────
const Card = ({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <motion.div
    whileHover={{ scale: 1.015, borderColor: "rgba(255,255,255,0.12)" }}
    transition={{ duration: 0.2 }}
    onClick={onClick}
    className={`bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden ${onClick ? "cursor-pointer" : ""} ${className}`}
  >
    {children}
  </motion.div>
);

// ── Stat pill ──────────────────────────────────────────────────────────────────
const StatPill = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center gap-0.5 px-4 py-2 bg-neutral-800 rounded-xl border border-neutral-700">
    <span className="text-white font-bold text-lg leading-none">{value}</span>
    <span className="text-neutral-500 text-xs">{label}</span>
  </div>
);

// ── Link button ────────────────────────────────────────────────────────────────
const LinkButton = ({
  icon,
  label,
  href,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  accent: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border transition-colors duration-200 group ${accent}`}
  >
    <span className="text-xl">{icon}</span>
    <span className="text-sm font-medium text-white">{label}</span>
    <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white ml-auto transition-colors duration-200" />
  </motion.a>
);

// ── Skill tag ──────────────────────────────────────────────────────────────────
const SkillTag = ({ name }: { name: string }) => (
  <span className="px-2.5 py-1 text-xs rounded-lg bg-neutral-800 text-neutral-400 border border-neutral-700 whitespace-nowrap">
    {name}
  </span>
);

// ── Main Dashboard ─────────────────────────────────────────────────────────────
export function Dashboard() {
  const [mailHovered, setMailHovered] = useState(false);

  return (
    <div className="w-full min-h-screen bg-neutral-900 p-6 md:p-8 overflow-y-auto">

      {/* Page header */}
      <motion.div {...fadeUp(0)} className="mb-8">
        <p className="text-neutral-500 text-xs uppercase tracking-widest mb-1">Portfolio</p>
        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">

        {/* ── Photo card ── col-span-4, tall */}
        <motion.div {...fadeUp(0.05)} className="md:col-span-4 md:row-span-2">
          <Card className="h-full min-h-[340px] relative group">
            {/* Photo fills the card */}
            <img
              src={myphoto}
              alt="Pratham VK"
              className="w-full h-full object-cover object-top absolute inset-0"
            />
            {/* Gradient overlay at bottom */}

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-neutral-900/20" />
            {/* Name + title */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
             <p className="text-neutral-900 font-bold text-xl leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">Pratham VK</p>
             <p className="text-neutral-700 text-sm mt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">Robotics Engineer · Software Engineer · ML Enthusiast</p>
             <div className="flex items-center gap-1.5 mt-2">
             <MapPin className="w-3.5 h-3.5 text-neutral-700" />
             <span className="text-neutral-700 text-xs drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">Tempe, AZ · Open to Relocation</span>
            </div>
            </div>
          </Card>
        </motion.div>

        {/* ── Summary card ── col-span-8 */}
        <motion.div {...fadeUp(0.1)} className="md:col-span-8">
          <Card className="p-6 h-full">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-1 h-8 bg-blue-500 rounded-full flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest mb-1">About</p>
                <h2 className="text-white font-semibold text-base">Who am I?</h2>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Results-driven Software Engineer with experience designing system architecture and application
              components — writing clean, efficient, maintainable code. I work across backend services,
              CI/CD pipelines, containerized deployments, and ML systems. Recently graduated with an{" "}
              <span className="text-white font-medium">MS in Systems Engineering (Robotics & Autonomous Systems)</span>{" "}
              from <span className="text-amber-400 font-medium">Arizona State University</span>.
            </p>
            {/* Stats row */}
            <div className="flex flex-wrap gap-2 mt-5">
              <StatPill value="2+" label="Years Exp." />
              <StatPill value="30M+" label="Records ETL" />
              <StatPill value="25%" label="Model Precision ↑" />
              <StatPill value="MS" label="ASU 2025" />
            </div>
          </Card>
        </motion.div>

        {/* ── Links card ── col-span-4 */}
        <motion.div {...fadeUp(0.15)} className="md:col-span-4">
          <Card className="p-6 h-full">
            <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <LinkButton
                href="https://linkedin.com/in/prathamvk27"
                icon={<Linkedin className="w-5 h-5 text-blue-400" />}
                label="LinkedIn"
                accent="border-neutral-700 hover:border-blue-500/50 hover:bg-blue-500/5"
              />
              <LinkButton
                href="https://github.com/prathamvk27"
                icon={<Github className="w-5 h-5 text-white" />}
                label="GitHub"
                accent="border-neutral-700 hover:border-white/20 hover:bg-white/5"
              />
              <LinkButton
                href="mailto:prathamvk27@gmail.com"
                icon={<Mail className="w-5 h-5 text-emerald-400" />}
                label="Send me an email"
                accent="border-neutral-700 hover:border-emerald-500/50 hover:bg-emerald-500/5"
              />
            </div>
          </Card>
        </motion.div>

        {/* ── Education card ── col-span-4 */}
        <motion.div {...fadeUp(0.2)} className="md:col-span-4">
          <Card className="p-6 h-full">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <p className="text-neutral-500 text-xs uppercase tracking-widest">Education</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border-l-2 border-amber-500 pl-3">
                <p className="text-white text-sm font-semibold">Arizona State University</p>
                <p className="text-amber-400 text-xs mt-0.5">MS · Robotics & Autonomous Systems</p>
                <p className="text-neutral-500 text-xs mt-0.5">2023 – 2025 · Tempe, AZ</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-3">
                <p className="text-white text-sm font-semibold">Vemana Institute of Technology</p>
                <p className="text-blue-400 text-xs mt-0.5">B.E. · Information & Computer Science</p>
                <p className="text-neutral-500 text-xs mt-0.5">2018 – 2022 · Bangalore, India</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* ── Experience card ── col-span-4 */}
        <motion.div {...fadeUp(0.25)} className="md:col-span-4">
          <Card className="p-6 h-full">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-4 h-4 text-purple-400" />
              <p className="text-neutral-500 text-xs uppercase tracking-widest">Experience</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border-l-2 border-blue-500 pl-3">
                <p className="text-white text-sm font-semibold">Ness Digital Engineering</p>
                <p className="text-blue-400 text-xs mt-0.5">Software Engineer</p>
                <p className="text-neutral-500 text-xs mt-0.5">Feb 2023 – Aug 2023 · India</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-3">
                <p className="text-white text-sm font-semibold">1stop.ai</p>
                <p className="text-purple-400 text-xs mt-0.5">Machine Learning Intern</p>
                <p className="text-neutral-500 text-xs mt-0.5">Aug 2021 – Oct 2021 · India</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* ── Skills card ── col-span-8 */}
        <motion.div {...fadeUp(0.3)} className="md:col-span-8">
          <Card className="p-6">
            <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Skills</p>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-neutral-600 text-xs mb-2">Languages & Frameworks</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "Go", "C++", "React", "FastAPI", "Spring Boot", "Flask"].map(s => (
                    <SkillTag key={s} name={s} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-neutral-600 text-xs mb-2">Cloud & DevOps</p>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Kubernetes", "AWS", "Azure", "GitHub Actions", "CI/CD"].map(s => (
                    <SkillTag key={s} name={s} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-neutral-600 text-xs mb-2">AI & ML</p>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "TensorFlow", "Transformers", "BERT", "YOLO", "LangChain"].map(s => (
                    <SkillTag key={s} name={s} />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}