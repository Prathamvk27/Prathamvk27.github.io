import { useState } from "react"
import { personal, projects } from "../data/portfolioData"

const filters = [
  { id: "all", label: "All" },
  { id: "robotics", label: "Robotics & simulation" },
  { id: "ai", label: "AI & software" },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [expanded, setExpanded] = useState(null)
  const filtered = activeFilter === "all" ? projects : projects.filter((project) => project.track === activeFilter)

  return (
    <section id="work" className="section section--wide" aria-labelledby="work-title">
      <div className="section-header section-header--inline">
        <div>
          <p className="section-kicker">02 / Selected work</p>
          <h2 id="work-title" className="section-heading">Projects with a point of view.</h2>
        </div>
        <a className="text-link" href={personal.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
      <div className="filters" aria-label="Filter projects">
        {filters.map((filter) => <button key={filter.id} className="text-link" aria-current={activeFilter === filter.id} onClick={() => setActiveFilter(filter.id)}>{filter.label}</button>)}
      </div>
      <div className="project-list">
        {filtered.map((project) => {
          const isExpanded = expanded === project.title
          const details = project.details
          return (
            <article className="project-item" key={project.title}>
              <p className="project-item__meta">{project.track === "robotics" ? "Robotics & simulation" : "AI & software"}</p>
              <h3>{project.title}</h3>
              <p>{project.hook}</p>
              <p className="project-item__outcome">{project.outcome}</p>
              <div className="tag-list" aria-label="Technologies">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {details && (
                <>
                  <button className="text-link case-study-link" onClick={() => setExpanded(isExpanded ? null : project.title)} aria-expanded={isExpanded}>
                    {isExpanded ? "Close case study ↑" : "Read case study ↘"}
                  </button>
                  {isExpanded && (
                    <dl className="project-item__details">
                      <div><dt>The challenge</dt><dd>{details.challenge}</dd></div>
                      <div><dt>My contribution</dt><dd>{details.contribution}</dd></div>
                      <div><dt>Key decisions</dt><dd>{details.decisions}</dd></div>
                    </dl>
                  )}
                </>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
