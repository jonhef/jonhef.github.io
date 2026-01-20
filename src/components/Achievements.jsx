const achievements = [
  {
    title: 'Mathematics + CS foundation',
    detail: 'Built course projects around algorithms, probability, and data structures while self-studying university syllabi.',
  },
  {
    title: 'Shipped real-world interfaces',
    detail: 'Delivered React front ends with C/C++ and Python services, prioritizing clear data models and fast interactions.',
  },
  {
    title: 'Documentation discipline',
    detail: 'Maintain concise README notes and handoff docs so reviewers can verify work quickly.',
  },
]

function Achievements() {
  return (
    <section className="panel" id="achievements">
      <div className="panel-header">
        <h2 className="section-title">ACHIEVEMENTS</h2>
        <span className="panel-status">SYS/04</span>
      </div>

      <div className="panel-body">
        {achievements.map((item) => (
          <div key={item.title} className="achievement-item">
            <div className="achievement-title">
              <span className="project-bullet" />
              <strong>{item.title}</strong>
            </div>
            <p className="muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
