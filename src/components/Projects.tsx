import { useState } from "react"
import { projects, personal } from "../data/portfolioData"
import { SparkleDoodle, ArrowDoodle } from "./Doodles"

const filters = [
  { id: "all", label: "All" },
  { id: "robotics", label: "Robotics & Simulation", color: "text-sky border-sky/50 hover:bg-sky/10" },
  { id: "ai", label: "AI & Software Engineering", color: "text-butter border-butter/50 hover:bg-butter/10" },
] as const

type FilterId = (typeof filters)[number]["id"]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all")
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.track === activeFilter)

  const toggleExpand = (title: string) => {
    setExpanded(expanded === title ? null : title)
  }

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink inline-block relative">
            Projects
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-blush" viewBox="0 0 150 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" preserveAspectRatio="none">
              <path d="M2 5 C 30 1 60 9 90 5 S 120 9 148 5" />
            </svg>
          </h2>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-body border transition-all duration-200 ${
                activeFilter === f.id
                  ? f.id === "all"
                    ? "bg-ink text-cream border-ink"
                    : `${f.color} bg-current/10 border-current`
                  : "border-ink/10 text-muted hover:border-ink/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const isExpanded = expanded === project.title
            const isRobotics = project.track === "robotics"
            const accentClass = isRobotics ? "border-sky/30 hover:border-sky/50" : "border-butter/30 hover:border-butter/50"
            const tagClass = isRobotics
              ? "bg-sky/10 text-sky border-sky/20"
              : "bg-butter/10 text-butter border-butter/20"

            return (
              <div
                key={project.title}
                className={`group bg-card border-2 ${isExpanded ? accentClass.replace("hover:", "") : "border-ink/5"} rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${isExpanded ? accentClass.replace("hover:", "") : ""} ${accentClass}`}
              >
                {/* Tag */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${tagClass} mb-4`}>
                  {isRobotics ? "Robotics & Simulation" : "AI & Software Engineering"}
                </span>

                {/* Title & hook */}
                <h3 className="font-display font-semibold text-lg text-ink mb-2">{project.title}</h3>
                <p className="text-muted text-sm font-body leading-relaxed mb-3">{project.hook}</p>

                {/* Outcome (always visible) */}
                <div className="bg-ink/5 rounded-xl px-4 py-3 mb-4">
                  <p className="text-sm font-body text-ink/80 font-medium">
                    <span className="font-semibold">Outcome:</span> {project.outcome}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded bg-ink/5 text-muted">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded bg-ink/5 text-muted">+{project.tags.length - 3}</span>
                  )}
                </div>

                {/* Expand case study */}
                <button
                  onClick={() => toggleExpand(project.title)}
                  className="flex items-center gap-1.5 text-sm font-body text-muted hover:text-ink transition-colors duration-200"
                >
                  <span>{isExpanded ? "Hide case study" : "Read case study"}</span>
                  <ArrowDoodle className={`w-4 h-2.5 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`} />
                </button>

                {/* Expanded case study */}
                {isExpanded && project.details && (
                  <div className="mt-4 pt-4 border-t border-ink/10 space-y-4 animate-fade-in">
                    {[
                      { label: "The challenge", key: "challenge" as const },
                      { label: "My contribution", key: "contribution" as const },
                      { label: "Key decisions", key: "decisions" as const },
                    ].map((section) => (
                      <div key={section.key}>
                        <p className="text-xs font-body font-semibold text-muted uppercase tracking-wider mb-1">{section.label}</p>
                        <p className="text-sm font-body text-ink/80 leading-relaxed">{project.details![section.key]}</p>
                      </div>
                    ))}
                    <div className="bg-blush/10 rounded-xl px-4 py-3">
                      <p className="text-xs font-body font-semibold text-ink uppercase tracking-wider mb-1">The outcome</p>
                      <p className="text-sm font-body text-ink/80 font-medium">{project.details.outcome}</p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* More projects link */}
        <div className="mt-10 text-center">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-ink/10 text-ink/70 font-body text-sm hover:border-ink/30 hover:text-ink transition-all duration-200"
          >
            More projects on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
