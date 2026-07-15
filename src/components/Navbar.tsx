import { useEffect, useState } from "react"
import { PenUnderline } from "./Doodles"

const navItems = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(43,43,61,0.06)]" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <button onClick={() => scrollTo("work")} className="relative group text-left">
          <span className="text-ink font-display font-semibold text-lg">Pratham VK</span>
          <PenUnderline className="w-full h-3 text-blush absolute -bottom-2 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-4 py-2 text-sm text-ink/65 hover:text-ink transition-colors duration-200 font-body"
            >
              {item.label}
              <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-blush rounded-full transition-transform duration-300 ease-out ${
                hovered === item.id ? "scale-x-100" : "scale-x-0"
              }`} />
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="ml-3 px-5 py-2 rounded-full bg-blush text-ink text-sm font-medium font-body hover:bg-blush/80 transition-colors duration-200"
          >
            Let's talk
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-ink p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <path d="M6 6L18 18M6 18L18 6" />
              </>
            ) : (
              <>
                <path d="M4 6H20" />
                <path d="M4 12H20" />
                <path d="M4 18H20" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-ink/5 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-4 py-3 rounded-xl text-ink/65 hover:text-ink hover:bg-blush/20 transition-colors text-lg font-display font-medium"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="w-full mt-3 px-5 py-3 rounded-full bg-blush text-ink text-base font-medium font-display text-center"
          >
            Let's talk
          </button>
        </div>
      )}
    </nav>
  )
}
