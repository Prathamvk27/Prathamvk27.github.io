import { useState } from "react"

const navItems = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Résumé" },
  { id: "contact", label: "Contact" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button className="site-mark text-link" onClick={() => scrollTo("hero")}>Pratham VK</button>
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => <button key={item.id} className="text-link" onClick={() => scrollTo(item.id)}>{item.label}</button>)}
        </nav>
        <button className="mobile-nav-toggle text-link" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation">
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-label="Mobile navigation">
        {navItems.map((item) => <button key={item.id} className="text-link" onClick={() => scrollTo(item.id)}>{item.label}</button>)}
      </nav>
    </header>
  )
}
