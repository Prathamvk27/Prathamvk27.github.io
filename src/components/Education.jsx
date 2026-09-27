import { roboticsResume } from "../data/portfolioData"

export function Education() {
  return (
    <section id="education" className="section section--compact" aria-labelledby="education-title">
      <div className="section-header">
        <p className="section-kicker">04 / Education</p>
        <h2 id="education-title" className="section-heading">The foundations.</h2>
      </div>
      <ol className="education-list">
        {roboticsResume.education.map((education) => (
          <li className="education-item" key={education.degree}>
            <div className="item-header">
              <div>
                <h3>{education.degree}</h3>
                <p>{education.school} · {education.location}</p>
              </div>
              <p className="item-meta">{education.dates}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
