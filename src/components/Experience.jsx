import { aiResume, roboticsResume } from "../data/portfolioData"

export function Experience({ track }) {
  const resume = track === "robotics" ? roboticsResume : aiResume

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="section-header">
        <p className="section-kicker">03 / Experience</p>
        <h2 id="experience-title" className="section-heading">Work that ships.</h2>
        <p className="section-intro">A track-specific view of the systems, teams, and problems I have worked on.</p>
      </div>
      <ol className="experience-list">
        {resume.experience.map((experience) => (
          <li className="experience-item" key={`${experience.company}-${experience.title}`}>
            <div className="item-header">
              <div>
                <h3>{experience.title}</h3>
                <p>{experience.company} · {experience.location}</p>
              </div>
              <p className="item-meta">{experience.dates}</p>
            </div>
            <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
