const education = [
  {
    title: 'BSc Mathematics & Computer Science (Applicant)',
    detail:
      'Applying with focus on algorithms, discrete math, and systems; portfolio emphasizes shipped code and documentation.',
  },
  {
    title: 'Independent preparation',
    detail:
      'Aligned study with common first-year syllabi to reduce ramp time in calculus, linear algebra, discrete math, and algorithms.',
  },
]

const coursework = [
  {
    label: 'Math Core',
    items: ['Calculus', 'Linear Algebra', 'Probability & Statistics', 'Discrete Mathematics'],
  },
  {
    label: 'CS Core',
    items: ['Data Structures & Algorithms', 'Computer Architecture fundamentals', 'Operating Systems basics', 'Databases (SQL + normalization)'],
  },
  {
    label: 'Practice & Delivery',
    items: ['Technical writing and docs-as-code', 'Project scoping and iteration', 'Testing and instrumentation basics'],
  },
]

const competitions = [
  {
    title: 'Problem-solving practice',
    detail: 'Regular algorithm drills (graphs, DP, combinatorics) to prep for timed contests; score summaries available on request.',
  },
]

const milestones = [
  {
    title: 'Shipped Thinkza',
    detail: 'Built research notebook app across React + ASP.NET with structured prompts and reviewer-ready exports.',
  },
  {
    title: 'smshubapi release',
    detail: 'Published async Python client for SmsHub.org with typed responses and retries for production scripts.',
  },
  {
    title: 'madeinhellOS prototype',
    detail: 'Custom bootloader, VGA text output, and early kernel scaffolding to explore OS fundamentals in C and x86.',
  },
  {
    title: 'Documentation guide',
    detail: 'Created lightweight writing guide/templates to speed up README and API note quality across projects.',
  },
]

function Achievements() {
  return (
    <section className="panel" id="achievements">
      <div className="panel-header">
        <h2 className="section-title">ACHIEVEMENTS & COURSEWORK</h2>
        <span className="panel-status">SYS/04</span>
      </div>

      <div className="achievement-grid">
        <div className="achievement-card">
          <div className="achievement-heading">Education</div>
          <ul className="achievement-list">
            {education.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <p className="muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="achievement-card">
          <div className="achievement-heading">Coursework</div>
          <div className="coursework-groups">
            {coursework.map((group) => (
              <div className="coursework-group" key={group.label}>
                <div className="coursework-label">{group.label}</div>
                <div className="coursework-pills">
                  {group.items.map((item) => (
                    <span className="tech-chip" key={`${group.label}-${item}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="achievement-card">
          <div className="achievement-heading">Competitions & Awards</div>
          {competitions.length ? (
            <ul className="achievement-list">
              {competitions.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p className="muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted muted-small">Currently focused on admissions work; formal results forthcoming.</p>
          )}
        </div>

        <div className="achievement-card">
          <div className="achievement-heading">Milestones</div>
          {milestones.length ? (
            <ul className="achievement-list">
              {milestones.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p className="muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted muted-small">More milestones available on request.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Achievements
