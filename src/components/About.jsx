const stack = [
  'React',
  'C',
  'C++',
  'ASM',
  'C#',
  'Python',
  'Django/Flask/FastAPI',
  'Github & git'
]

function About() {
  return (
    <section className="panel" id="about">
      <div className="panel-header">
        <h2 className="section-title">ABOUT</h2>
        <span className="panel-status">SYS/01</span>
      </div>
      <div className="panel-body">
        <p>
          full-stack developer preparing for a bsc in mathematics & computer science. i focus on fast,
          clean implementations that make abstract ideas tangible and easy to review.
        </p>
        <p>
          i design interfaces with react and prefer deliberate, minimal layouts. my process is straightforward:
          clear data models, efficient code paths, and a quick loop from idea to prototype with documentation for
          whoever reviews the work next.
        </p>
      </div>

      <div className="chip-row">
        {stack.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About
