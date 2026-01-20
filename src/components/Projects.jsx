import featuredProjects from '../data/featuredProjects'

function Projects() {
  return (
    <section className="panel" id="projects">
      <div className="panel-header">
        <h2 className="section-title">PROJECTS</h2>
        <span className="panel-status">SYS/02</span>
      </div>

      <div className="project-grid">
        {featuredProjects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-title">
              <span className="project-bullet" />
              <span>{project.title}</span>
            </div>
            <p className="project-desc">{project.summary}</p>
            <div className="project-role">Role: {project.role}</div>
            <div className="tech-tags" aria-label="Tech stack">
              {project.tech.map((tech) => (
                <span className="tech-chip" key={`${project.title}-${tech}`}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live / Demo
              </a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="project-more">
        <a href="https://github.com/jonhef" target="_blank" rel="noreferrer">
          More on GitHub →
        </a>
      </div>
    </section>
  )
}

export default Projects
