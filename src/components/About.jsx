import { personal } from "../data/portfolioData"

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <p className="section-kicker">01 / About</p>
      <h2 id="about-title" className="section-heading">Curious about how systems behave.</h2>
      <div className="about-copy">
        <p>I like things that respond: a robot arm that corrects its own error, a model that gets sharper with more data. I am happiest when a system starts behaving the way it is supposed to.</p>
        <p>My work spans real-time control, sensor fusion, simulation-to-deployment workflows, LLM-powered solutions, transformer fine-tuning, and backend systems built to last.</p>
      </div>
      <p className="quote">“{personal.mantra}”</p>
      <ul className="facts" aria-label="A few things about Pratham">
        {personal.funFacts.map((fact) => <li key={fact}>{fact}</li>)}
      </ul>
    </section>
  )
}
