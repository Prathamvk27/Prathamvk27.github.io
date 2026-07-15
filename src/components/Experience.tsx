import { roboticsResume, aiResume } from "../data/portfolioData"

type Track = "robotics" | "ai"

export function Experience({ track }: { track: Track }) {
  const resume = track === "robotics" ? roboticsResume : aiResume
  const isRobotics = track === "robotics"
  const color = isRobotics ? "sky" : "butter"
  const borderClass = isRobotics ? "border-sky/30" : "border-butter/30"
  const dotClass = isRobotics ? "bg-sky" : "bg-butter"
  const tagClass = isRobotics
    ? "bg-sky/10 text-sky border-sky/20"
    : "bg-butter/10 text-butter border-butter/20"

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink inline-block relative">
            Experience
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-blush" viewBox="0 0 140 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" preserveAspectRatio="none">
              <path d="M2 5 C 25 1 55 9 85 5 S 115 9 138 5" />
            </svg>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-[19px] top-0 bottom-0 w-0.5 ${isRobotics ? "bg-sky/20" : "bg-butter/20"}`} />

          <div className="space-y-12">
            {resume.experience.map((exp, i) => (
              <div key={i} className="relative pl-14">
                {/* Timeline dot */}
                <div className={`absolute left-3 top-1.5 w-8 h-8 rounded-full border-2 border-white shadow-sm flex items-center justify-center ${dotClass}`}>
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>

                {/* Card */}
                <div className={`bg-card border ${borderClass} rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200`}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink">{exp.title}</h3>
                      <p className="text-ink/70 text-sm font-body">{exp.company}</p>
                    </div>
                    <span className={`inline-block mt-2 sm:mt-0 px-3 py-1 rounded-full text-xs font-medium border ${tagClass}`}>
                      {exp.dates}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm font-body text-ink/70 leading-relaxed flex gap-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isRobotics ? "bg-sky" : "bg-butter"}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
