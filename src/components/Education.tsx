import { roboticsResume } from "../data/portfolioData"

export function Education() {
  const education = roboticsResume.education

  return (
    <section id="education" className="py-24 px-6 bg-cream/60">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink inline-block relative">
            Education
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-blush" viewBox="0 0 140 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" preserveAspectRatio="none">
              <path d="M2 5 C 25 1 55 9 85 5 S 115 9 138 5" />
            </svg>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div key={i} className="bg-card border border-ink/5 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blush/15 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blush">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-ink mb-1">{edu.degree}</h3>
                  <p className="text-ink/70 text-sm font-body">{edu.school}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-muted font-body">{edu.dates}</span>
                    <span className="text-muted/40">·</span>
                    <span className="text-xs text-muted font-body">{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
