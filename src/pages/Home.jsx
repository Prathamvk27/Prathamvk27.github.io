import { useState } from "react"
import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { Experience } from "../components/Experience"
import { Education } from "../components/Education"
import { Resume } from "../components/Resume"
import { Contact } from "../components/Contact"
import { personal } from "../data/portfolioData"

export const Home = () => {
  const [track, setTrack] = useState("robotics")

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero track={track} setTrack={setTrack} />
        <About />
        <Projects />
        <Experience track={track} />
        <Education />
        <Resume track={track} setTrack={setTrack} />
        <Contact />
      </main>
      <footer className="site-footer">© {new Date().getFullYear()} {personal.shortName}</footer>
    </div>
  )
}
