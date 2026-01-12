import { useEffect, useMemo, useState } from 'react'

const username = 'jonhef'

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('GitHub API request failed')
        }
        return response.json()
      })
      .then((data) => {
        setRepos(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Repos were not loaded')
        setLoading(false)
      })
  }, [])

  const visibleRepos = useMemo(
    () =>
      repos
        .filter((repo) => !repo.fork && !repo.archived)
        .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
        .slice(0, 6),
    [repos],
  )

  const formatDate = (value) =>
    new Date(value).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    })

  return (
    <section className="panel" id="projects">
      <div className="panel-header">
        <h2 className="section-title">PROJECTS</h2>
        <span className="panel-status">SYS/02</span>
      </div>

      {loading && <p className="muted">loading repos</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && visibleRepos.length === 0 && (
        <p className="muted">repos were not found</p>
      )}

      <div className="project-grid">
        {!loading &&
          !error &&
          visibleRepos.map((repo) => (
            <a
              className="project-card"
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-title">
                <span className="project-bullet" />
                <span>{repo.name}</span>
              </div>
              <p className="project-desc">
                {repo.description ? repo.description : 'No description yet.'}
              </p>
              <div className="project-meta">
                <span>{repo.language ?? 'Unknown'}</span>
                <span>Updated: {formatDate(repo.pushed_at)}</span>
              </div>
            </a>
          ))}
      </div>
    </section>
  )
}

export default Projects
