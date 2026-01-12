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
          full-stack developer with main focus on the speed and cleanliness of execution. 
          can usually be found working alone, but has no problems with teamwork when needed. 
          prefers simple solutions with practicality and values fast paths from idea to working code.
        </p>
        <p>
          i design interfaces with react. personally, i prefer minimalistic 
          design with a clean layout and not so much empty space, 
          and i feel like everything should be deliberate in design. 
          my design style would be more akin to russian rock design: raw and straightforward. 
          i believe in clean data, rapid development, and a smooth transition from idea to prototype.
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
