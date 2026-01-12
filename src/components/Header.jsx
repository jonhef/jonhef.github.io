import avatar from '../assets/avatar.png'

function Header() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">PERSONAL NODE // RETRO 88's</p>
          <h1 className="glitch" data-text="jonhef">
            jonhef
          </h1>
          <p className="lede">
            i'm a react/c developer with a soft spot for neon accents, 
            subtle animations, and the aesthetic of vintage computers. 
            i enjoy building clean, thoughtful interfaces and 
            i'm not afraid to dive into assembly when it makes sense.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">
              projects
            </a>
            <a className="btn ghost" href="#contact">
              contact
            </a>
          </div>
          <div className="ticker">
            <span className="dot" />
            <span>react • c • c++ • python • github</span>
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
