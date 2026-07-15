import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, MapPin, GraduationCap, Briefcase, ExternalLink, Sparkles } from "lucide-react";
import myphoto1 from "../assets/IMG_1735.jpeg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: "easeOut" },
});

const Block = ({ children, className = "", hover = false }: { children: React.ReactNode; className?: string; hover?: boolean }) => (
  <div className={`bg-prussian-blue border border-white/5 rounded-lg transition-colors duration-150 ${hover ? "hover:bg-white/[0.02]" : ""} ${className}`}>
    {children}
  </div>
);

const StatPill = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-white font-semibold text-lg leading-none">{value}</span>
    <span className="text-white/45 text-xs">{label}</span>
  </div>
);

const LinkButton = ({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) => (
  <motion.a
    href={href} target="_blank" rel="noopener noreferrer"
    whileHover={{ x: 4 }}
    transition={{ duration: 0.15 }}
    className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/5 transition-colors duration-150 group"
  >
    <span className="text-white/45 group-hover:text-school-bus-yellow transition-colors duration-150">{icon}</span>
    <span className="text-sm text-white/65 group-hover:text-white transition-colors duration-150">{label}</span>
    <ExternalLink className="w-3 h-3 text-white/25 group-hover:text-white/55 ml-auto transition-colors duration-150" />
  </motion.a>
);

const SkillTag = ({ name }: { name: string }) => (
  <span className="px-2 py-0.5 text-xs rounded bg-white/5 text-white/55 border border-white/5">
    {name}
  </span>
);

const SectionTitle = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 mb-4">
    <span className="text-white/35">{icon}</span>
    <span className="text-white/45 text-xs uppercase tracking-wider font-medium">{label}</span>
  </div>
);

export function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-ink-black p-6 md:p-10 overflow-y-auto">
      <motion.div {...fadeUp(0)} className="mb-8">
        <h1 className="text-white text-xl font-semibold">Dashboard</h1>
        <p className="text-white/45 text-sm mt-0.5">Welcome back, Pratham</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">
        <motion.div {...fadeUp(0.05)} className="md:col-span-4 md:row-span-2">
          <Block className="h-full min-h-[360px] relative overflow-hidden">
            <img src={myphoto1} alt="Pratham VK" className="w-full h-full object-cover object-top absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white font-semibold text-lg">Pratham VK</p>
              <p className="text-white/55 text-sm mt-0.5">Robotics · Software · ML</p>
              <div className="flex items-center gap-1.5 mt-2">
                <MapPin className="w-3 h-3 text-white/45" />
                <span className="text-white/45 text-xs">Tempe, AZ</span>
              </div>
            </div>
          </Block>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="md:col-span-8">
          <Block className="p-6 h-full" hover>
            <SectionTitle icon={<Sparkles className="w-3.5 h-3.5" />} label="About" />
            <p className="text-white/65 text-sm leading-relaxed">
              Results-driven Software Engineer with experience designing system architecture and application
              components — writing clean, efficient, maintainable code. I work across backend services,
              CI/CD pipelines, containerized deployments, and ML systems. Recently graduated with an{" "}
              <span className="text-white font-medium">MS in Systems Engineering (Robotics & Autonomous Systems)</span>{" "}
              from <span className="text-school-bus-yellow font-medium">Arizona State University</span>.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-5 pt-5 border-t border-white/5">
              <StatPill value="2+" label="Years Exp." />
              <StatPill value="30M+" label="Records ETL" />
              <StatPill value="25%" label="Model Precision ↑" />
              <StatPill value="MS" label="ASU 2025" />
            </div>
          </Block>
        </motion.div>

        <motion.div {...fadeUp(0.15)} className="md:col-span-4">
          <Block className="p-4 h-full" hover>
            <SectionTitle icon={<Mail className="w-3.5 h-3.5" />} label="Connect" />
            <div className="flex flex-col gap-0">
              <LinkButton href="https://linkedin.com/in/prathamvk27" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              <LinkButton href="https://github.com/prathamvk27" icon={<Github className="w-4 h-4" />} label="GitHub" />
              <LinkButton href="mailto:prathamvk27@gmail.com" icon={<Mail className="w-4 h-4" />} label="Email" />
            </div>
          </Block>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="md:col-span-4">
          <Block className="p-5 h-full" hover>
            <SectionTitle icon={<GraduationCap className="w-3.5 h-3.5" />} label="Education" />
            <div className="flex flex-col gap-4">
              <div className="border-l-2 border-school-bus-yellow pl-3">
                <p className="text-white text-sm font-medium">Arizona State University</p>
                <p className="text-school-bus-yellow text-xs mt-0.5">MS · Robotics & Autonomous Systems</p>
                <p className="text-white/45 text-xs mt-0.5">2023 – 2025</p>
              </div>
              <div className="border-l-2 border-gold pl-3">
                <p className="text-white text-sm font-medium">Vemana Institute of Technology</p>
                <p className="text-gold text-xs mt-0.5">B.E. · Information & Computer Science</p>
                <p className="text-white/45 text-xs mt-0.5">2018 – 2022</p>
              </div>
            </div>
          </Block>
        </motion.div>

        <motion.div {...fadeUp(0.25)} className="md:col-span-4">
          <Block className="p-5 h-full" hover>
            <SectionTitle icon={<Briefcase className="w-3.5 h-3.5" />} label="Experience" />
            <div className="flex flex-col gap-4">
              <div className="border-l-2 border-school-bus-yellow pl-3">
                <p className="text-white text-sm font-medium">Ness Digital Engineering</p>
                <p className="text-white/55 text-xs mt-0.5">Software Engineer</p>
                <p className="text-white/45 text-xs mt-0.5">Feb – Aug 2023</p>
              </div>
              <div className="border-l-2 border-gold pl-3">
                <p className="text-white text-sm font-medium">1stop.ai</p>
                <p className="text-white/55 text-xs mt-0.5">ML Intern</p>
                <p className="text-white/45 text-xs mt-0.5">Aug – Oct 2021</p>
              </div>
            </div>
          </Block>
        </motion.div>

        <motion.div {...fadeUp(0.3)} className="md:col-span-8">
          <Block className="p-5" hover>
            <SectionTitle icon={<Sparkles className="w-3.5 h-3.5" />} label="Skills" />
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-white/35 text-xs mb-2 font-medium">Languages & Frameworks</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Java", "Go", "C++", "React", "FastAPI", "Spring Boot", "Flask"].map(s => <SkillTag key={s} name={s} />)}
                </div>
              </div>
              <div>
                <p className="text-white/35 text-xs mb-2 font-medium">Cloud & DevOps</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Docker", "Kubernetes", "AWS", "Azure", "GitHub Actions", "CI/CD"].map(s => <SkillTag key={s} name={s} />)}
                </div>
              </div>
              <div>
                <p className="text-white/35 text-xs mb-2 font-medium">AI & ML</p>
                <div className="flex flex-wrap gap-1.5">
                  {["PyTorch", "TensorFlow", "Transformers", "BERT", "YOLO", "LangChain"].map(s => <SkillTag key={s} name={s} />)}
                </div>
              </div>
            </div>
          </Block>
        </motion.div>
      </div>
    </div>
  );
}
