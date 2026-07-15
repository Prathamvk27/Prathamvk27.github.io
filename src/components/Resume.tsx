import { personal, roboticsResume, aiResume } from "../data/portfolioData"

type Track = "robotics" | "ai"

export function Resume({ track, setTrack }: { track: Track; setTrack: (t: Track) => void }) {
  const resume = track === "robotics" ? roboticsResume : aiResume
  const isRobotics = track === "robotics"

  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink inline-block relative">
            Résumé
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-blush" viewBox="0 0 120 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" preserveAspectRatio="none">
              <path d="M2 5 C 25 1 50 9 75 5 S 100 9 118 5" />
            </svg>
          </h2>
          <p className="text-muted text-sm font-body mt-4 max-w-xl mx-auto">
            Pick the version that matches the role you're looking at Everything's readable right here, nothing to download unless you want a copy.
          </p>
        </div>

        {/* Tab switcher + download */}
        <div className="flex flex-col items-center mb-8 gap-3">
          <div className="inline-flex bg-card border border-ink/5 rounded-full p-1">
            <button
              onClick={() => setTrack("robotics")}
              className={`px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                track === "robotics"
                  ? "bg-sky text-ink shadow-sm"
                  : "text-muted hover:text-ink"
              }`}
            >
              Robotics & Simulation
            </button>
            <button
              onClick={() => setTrack("ai")}
              className={`px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                track === "ai"
                  ? "bg-butter text-ink shadow-sm"
                  : "text-muted hover:text-ink"
              }`}
            >
              AI &amp; Software Engineering
            </button>
          </div>
          <a
            href={track === "robotics" ? "/resume-robotics.pdf" : "/resume-ai.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink transition-colors font-body"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* Resume card */}
        <div className="bg-card border border-ink/5 rounded-2xl p-8 md:p-10 shadow-sm">
          {/* Name header */}
          <div className="mb-6 pb-6 border-b border-ink/5">
            <h3 className="font-display text-2xl font-bold text-ink">{personal.name}</h3>
            <p className={`text-sm font-body mt-1 font-medium ${isRobotics ? "text-sky" : "text-butter"}`}>
              {resume.tagline}
            </p>
            <p className="text-muted text-sm font-body mt-1">{personal.location} | {personal.phone} | {personal.email}</p>
            <div className="flex gap-4 mt-2">
              <a href={personal.linkedin} className="text-xs text-muted hover:text-ink transition-colors font-body">LinkedIn</a>
              <a href={personal.github} className="text-xs text-muted hover:text-ink transition-colors font-body">GitHub</a>
              <a href={personal.website} className="text-xs text-muted hover:text-ink transition-colors font-body">Website</a>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-6">
            <SectionTitle label="Summary" color={isRobotics ? "sky" : "butter"} />
            <p className="text-ink/80 text-sm font-body leading-relaxed">{resume.summary}</p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <SectionTitle label="Experience" color={isRobotics ? "sky" : "butter"} />
            <div className="space-y-6">
              {resume.experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <div>
                      <p className="font-display font-semibold text-ink">{exp.title}</p>
                      <p className="text-ink/70 text-sm font-body">{exp.company}</p>
                    </div>
                    <p className="text-muted text-xs font-body whitespace-nowrap mt-1 sm:mt-0">{exp.dates}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm font-body text-ink/70 leading-relaxed flex gap-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isRobotics ? "bg-sky" : "bg-butter"}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <SectionTitle label="Education" color={isRobotics ? "sky" : "butter"} />
            <div className="space-y-4">
              {resume.education.map((edu, i) => (
                <div key={i}>
                  <p className="font-display font-semibold text-ink">{edu.degree}</p>
                  <p className="text-ink/70 text-sm font-body">{edu.school}</p>
                  <p className="text-muted text-xs font-body">{edu.dates} · {edu.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <SectionTitle label="Skills" color={isRobotics ? "sky" : "butter"} />
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-xs font-body border ${
                    isRobotics
                      ? "bg-sky/20 text-ink border-sky/30"
                      : "bg-butter/20 text-ink border-butter/30"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ label, color }: { label: string; color: "sky" | "butter" }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className={`w-1 h-6 rounded-full ${color === "sky" ? "bg-sky" : "bg-butter"}`} />
      <h4 className="font-display font-semibold text-ink text-base">{label}</h4>
    </div>
  )
}
