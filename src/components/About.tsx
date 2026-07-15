import { personal } from "../data/portfolioData"

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-cream/60">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink inline-block relative">
            About
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-blush" viewBox="0 0 120 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" preserveAspectRatio="none">
              <path d="M2 5 C 25 1 50 9 75 5 S 100 9 118 5" />
            </svg>
          </h2>
        </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6">
              {personal.shortName}
            </h2>

            <p className="text-ink/80 font-body text-base leading-relaxed mb-4">
              I like things that respond A robot arm that corrects its own error, a model that gets sharper with more data.
              I'm a robotics & data engineer who's happiest when a system starts behaving the way it's supposed to.
            </p>

            <p className="text-muted font-body text-sm leading-relaxed mb-6">
            My work spans two worlds: on the robotics side, I build real-time control systems, sensor fusion pipelines, and
            simulation-to-deployment workflows using ROS 2 and Gazebo. On the AI side, I design LLM-powered solutions, fine-tune
            transformers, and architect backend systems that handle millions of records. The thread that connects both is
            a deep curiosity about how systems behave Whether they're made of steel or silicon.
            </p>

            {/* Pull quote */}
            <div className="bg-card border border-ink/5 rounded-2xl px-6 py-4 mb-6">
              <p className="font-hand text-xl text-ink/80 leading-relaxed">
                "{personal.mantra}"
              </p>
            </div>

            {/* Fun facts */}
            <div>
              <p className="text-xs font-body font-semibold text-muted uppercase tracking-wider mb-3">
                Outside the code
              </p>
              <div className="flex flex-wrap gap-2">
                {personal.funFacts.map((fact, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-blush/15 text-ink/70 text-sm font-body">
                    {fact}
                  </span>
                ))}
              </div>
            </div>
        </div>
    </section>
  )
}
