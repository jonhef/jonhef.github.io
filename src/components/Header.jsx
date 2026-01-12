function Header() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">PERSONAL NODE // RETRO 88</p>
          <h1 className="glitch" data-text="jonhef">
            jonhef
          </h1>
          <p className="lede">
            React-разработчик, которому нравятся неоновые акценты, аккуратные
            анимации и эстетика старых ЭВМ. Собираю чистые интерфейсы и не боюсь
            заглянуть под капот.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">
              Projects
            </a>
            <a className="btn ghost" href="#contact">
              Contact
            </a>
          </div>
          <div className="ticker">
            <span className="dot" />
            <span>React • Vite • Node • CSS трюки • GitHub Pages</span>
          </div>
        </div>

        <div className="crt-frame">
          <div className="crt-screen">
            <div className="avatar-block">
              ADD YOUR PHOTO
              <span>src/assets/avatar.png</span>
            </div>
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
