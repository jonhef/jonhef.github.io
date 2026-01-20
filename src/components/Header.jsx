import avatar from '../assets/avatar.png'

function Header() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">ADMISSIONS FILE // BSC MATH & CS</p>
          <h1 className="glitch" data-text="Jon Hef">
            Jon Hef
          </h1>
          <h2 className="hero-subtitle">aspiring bsc in mathematics & computer science</h2>
          <p className="lede">
            i blend mathematical thinking with full-stack execution to ship interfaces and systems that are fast,
            legible, and reliable. I am applying my project work to an academic track focused on algorithms,
            computation, and the way real products get built.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn ghost" href="#contact">
              Contact
            </a>
          </div>
          <div className="ticker">
            <span className="dot" />
            <span>Math Foundations • Algorithms • React • C/C++ • Python</span>
          </div>
        </div>

        <div className="crt-frame">
          <div className="crt-screen">
            <img
              src={avatar}
              alt="Portrait of jonhef"
              className="avatar-image"
              loading="eager"
            />
            <div className="crt-glare" />
          </div>
          <div className="tag-row">
            <span className="tag">retro-mode</span>
            <span className="tag">live</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
