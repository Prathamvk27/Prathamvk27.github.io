import { personal } from "../data/portfolioData"

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <p className="section-kicker">06 / Contact</p>
      <h2 id="contact-title" className="section-heading">Let’s build something that works.</h2>
      <p className="section-intro">{personal.availability}. Whether it is robotics, AI, or something in between, I would like to hear about it.</p>
      <a className="contact__email" href={`mailto:${personal.email}`}>{personal.email} ↗</a>
      <div className="contact__links inline-links">
        <a className="text-link" href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a className="text-link" href={personal.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a className="text-link" href={personal.website} target="_blank" rel="noopener noreferrer">Website ↗</a>
      </div>
    </section>
  )
}
