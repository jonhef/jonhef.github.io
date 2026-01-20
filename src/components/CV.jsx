const cvEmail = 'me@jonhef.org'

function CV() {
  return (
    <section className="panel" id="cv">
      <div className="panel-header">
        <h2 className="section-title">CV</h2>
        <span className="panel-status">SYS/05</span>
      </div>

      <div className="panel-body">
        <p>
          My CV outlines coursework, independent research themes, and shipped projects relevant to a BSc in
          Mathematics & Computer Science. I keep it updated for admissions review and can provide it immediately.
        </p>
        <div className="cta-row">
          <a className="btn primary" href={`mailto:${cvEmail}?subject=CV%20Request%20-%20jonhef`}>
            Request CV via Email
          </a>
          <a className="btn ghost" href="#projects">
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default CV
