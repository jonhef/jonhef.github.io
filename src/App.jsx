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
