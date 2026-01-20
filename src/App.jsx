import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import CV from './components/CV'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = [
    { href: '#top', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#achievements', label: 'ACHIEVEMENTS' },
    { href: '#cv', label: 'CV' },
    { href: '#contact', label: 'CONTACT' },
  ]

  useEffect(() => {
    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]')
      if (!anchor) return

      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return

      const target = document.querySelector(hash)
      if (!target) return

      event.preventDefault()
      setMenuOpen(false)

      const nav = document.querySelector('.top-bar')
      const offset = nav ? nav.getBoundingClientRect().height + 10 : 80
      const start = window.scrollY
      const end = target.getBoundingClientRect().top + window.scrollY - offset
      const duration = 450
      const startTime = performance.now()

      const animate = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
        window.scrollTo(0, start + (end - start) * eased)
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          history.replaceState(null, '', hash)
        }
      }

      requestAnimationFrame(animate)
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('click', handleAnchorClick)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('click', handleAnchorClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="screen">
      <div className="scanline-overlay" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      <div className="glow-dots" aria-hidden="true" />

      <header className="top-bar">
        <div className="logo-mark">JNHF//RETRO</div>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="status-led">
          <span className="led-dot" />
          ONLINE
        </div>
      </header>

      <main className="shell">
        <Header />
        <About />
        <Projects />
        <Achievements />
        <CV />
        <Contact />
      </main>

      <footer className="footnote">
        <span>jonhef • retro console portfolio • {new Date().getFullYear()}</span>
        <span>built with React + Vite</span>
      </footer>
    </div>
  )
}

export default App
