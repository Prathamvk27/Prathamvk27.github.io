import { personal } from "../data/portfolioData"
import { GearDoodle, GraphDoodle, ArrowDoodle, SparkleDoodle, CircleFrameDoodle } from "./Doodles"
import myphoto from "../assets/IMG_1735.jpeg"

type Track = "robotics" | "ai"

export function Hero({ track, setTrack }: { track: Track; setTrack: (t: Track) => void }) {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Photo */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
          <img
            src={myphoto}
            alt={personal.shortName}
            className="w-full h-full object-cover object-top rounded-2xl"
          />
          <CircleFrameDoodle className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] text-blush/60 pointer-events-none" />
          <SparkleDoodle className="absolute -top-2 -right-2 w-6 h-6 text-blush animate-sparkle" />
        </div>

        {/* Text side */}
        <div className="flex-1 text-center md:text-left">
          {/* Doodle accent */}
          <div className="flex justify-center md:justify-start mb-6">
            <div className="relative">
              <div className={`w-12 h-12 transition-all duration-500 ${track === "robotics" ? "text-sky" : "text-butter"}`}>
                {track === "robotics" ? <GearDoodle className="w-full h-full" /> : <GraphDoodle className="w-full h-full" />}
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-4">
            I build systems that move,<br />
            <span className="relative">
              and models that learn
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blush" viewBox="0 0 200 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" preserveAspectRatio="none">
                <path d="M2 6 C 40 2 80 10 120 6 S 160 10 198 6" />
              </svg>
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-muted text-lg md:text-xl font-body mt-6 max-w-2xl leading-relaxed">
            Robotics & simulation engineer. AI & software engineer. Same curiosity, two disciplines.
          </p>

          {/* Role toggle */}
          <div className="mt-8 flex items-center justify-center md:justify-start gap-3">
            <span className={`text-sm font-body font-medium transition-colors duration-300 ${track === "robotics" ? "text-sky font-semibold" : "text-muted"}`}>
              Robotics & Simulation
            </span>
            <button
              onClick={() => setTrack(track === "robotics" ? "ai" : "robotics")}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                track === "robotics" ? "bg-sky" : "bg-butter"
              }`}
            >
              <span className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                track === "robotics" ? "left-1" : "left-8"
              }`} />
            </button>
            <span className={`text-sm font-body font-medium transition-colors duration-300 ${track === "ai" ? "text-butter font-semibold" : "text-muted"}`}>
              AI &amp; Software Engineering
            </span>
          </div>

          {/* Toggle description */}
          <p className="mt-4 text-ink/70 text-base font-body max-w-lg min-h-[3rem] transition-opacity duration-300">
            {track === "robotics"
              ? "Motors, controllers, and simulations that behave the way physics promised they would."
              : "LLMs, transformers, and backend systems that hold up outside the notebook."}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <button
              onClick={() => scrollTo("work")}
              className="group px-6 py-3 rounded-full bg-blush text-ink font-display font-medium text-base hover:bg-blush/80 transition-colors duration-200 flex items-center gap-2"
            >
              See the work
              <ArrowDoodle className="w-5 h-3 text-ink group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => scrollTo("experience")}
              className="px-6 py-3 rounded-full border-2 border-ink/10 text-ink/70 font-body font-medium text-base hover:border-ink/30 hover:text-ink transition-all duration-200"
            >
              Experience
            </button>
          </div>

          {/* Track indicator */}
          <div className="mt-6 flex items-center justify-center md:justify-start gap-2">
            <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${track === "robotics" ? "bg-sky" : "bg-muted/30"}`} />
            <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${track === "ai" ? "bg-butter" : "bg-muted/30"}`} />
            <span className="text-xs text-muted/60 font-body ml-1">Toggle to switch track</span>
          </div>
        </div>
      </div>
    </section>
  )
}
