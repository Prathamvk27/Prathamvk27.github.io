import { personal } from "../data/portfolioData"

export function Hero({ track, setTrack }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">Robotics · AI · Software</p>
        <h1 id="hero-title">I build systems that move and models that learn.</h1>
        <p className="hero__summary">{personal.shortName} is a robotics and software engineer working across real-time systems, machine learning, and the space between them.</p>
        <div className="hero__links">
          <button className="text-link" onClick={() => scrollTo("work")}>See the work ↘</button>
          <button className="text-link" onClick={() => scrollTo("contact")}>Start a conversation ↘</button>
        </div>
        <div className="track-switcher" aria-label="Focus area">
          <span>Focus:</span>
          <button className="text-link" aria-current={track === "robotics"} onClick={() => setTrack("robotics")}>Robotics &amp; simulation</button>
          <button className="text-link" aria-current={track === "ai"} onClick={() => setTrack("ai")}>AI &amp; software</button>
        </div>
      </div>
    </section>
  )
}
