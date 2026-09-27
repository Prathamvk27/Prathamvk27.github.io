import { personal, roboticsResume, aiResume } from "../data/portfolioData"

export function Resume({ track, setTrack }) {
  const resume = track === "robotics" ? roboticsResume : aiResume

  return (
    <section id="resume" className="section" aria-labelledby="resume-title">
      <div className="section-header">
        <p className="section-kicker">05 / Résumé</p>
        <h2 id="resume-title" className="section-heading">The short version.</h2>
        <p className="section-intro">Choose a focus or read the complete version below. There is nothing to download unless you want a copy.</p>
      </div>
      <div className="resume-switcher">
        <span className="resume-switcher__label">View focus</span>
        <div className="inline-links">
          <button className="text-link" aria-current={track === "robotics"} onClick={() => setTrack("robotics")}>Robotics &amp; simulation</button>
          <button className="text-link" aria-current={track === "ai"} onClick={() => setTrack("ai")}>AI &amp; software</button>
          <a className="text-link" href={track === "robotics" ? "/resume-robotics.pdf" : "/resume-ai.pdf"} target="_blank" rel="noopener noreferrer">Download PDF ↗</a>
        </div>
      </div>
      <div className="resume-list">
        <p className="resume-meta">{personal.name} · {personal.location} · {personal.email}</p>
        <p className="resume-summary">{resume.summary}</p>
        <div className="resume-section">
          <h3>Experience</h3>
          {resume.experience.map((experience) => (
            <article className="resume-item" key={`${experience.company}-${experience.title}`}>
              <div className="item-header">
                <div><h3>{experience.title}</h3><p>{experience.company} · {experience.location}</p></div>
                <p className="item-meta">{experience.dates}</p>
              </div>
              <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="resume-section">
          <h3>Education</h3>
          {resume.education.map((education) => (
            <article className="resume-item" key={education.degree}>
              <div className="item-header">
                <div><h3>{education.degree}</h3><p>{education.school} · {education.location}</p></div>
                <p className="item-meta">{education.dates}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="resume-section">
          <h3>Skills</h3>
          <div className="skills">{resume.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
      </div>
    </section>
  )
}
