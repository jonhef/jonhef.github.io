import { useEffect } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {
  const navLinks = [
    { href: '#about', label: 'ABOUT' },
    { href: '#projects', label: 'PROJECTS' },
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
      const offset = 80
      const start = window.scrollY
      const end = target.getBoundingClientRect().top + window.scrollY - offset
      const duration = 450
      const startTime = performance.now()

      const animate = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
        window.scrollTo(0, start + (end - start) * eased)
        if (progress < 1) requestAnimationFrame(animate)
      }

      requestAnimationFrame(animate)
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="screen">
      <div className="scanline-overlay" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      <div className="glow-dots" aria-hidden="true" />

      <header className="top-bar">
        <div className="logo-mark">JNHF//RETRO</div>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
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
