import { FormEvent, useEffect, useState } from 'react'
import { createProject, getProjects } from '../services/api'
import { Project } from '../types'

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true)
        const items = await getProjects()
        setProjects(items)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  const handleCreate = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const newProject = await createProject({ name, description })
      setProjects((current) => [newProject, ...current])
      setName('')
      setDescription('')
    } catch (err) {
      setError((err as Error).message)
    }
  }

  return (
    <div className="page-grid">
      <div className="panel-card">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Project workspace</p>
            <h3>Your active and upcoming builds</h3>
          </div>
        </div>
        <form className="project-form" onSubmit={handleCreate}>
          <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Project name" required />
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Short description" rows={3} />
          <button type="submit">Add project</button>
        </form>
      </div>

      <div className="project-list">
        {loading ? (
          <p>Loading projects…</p>
        ) : projects.length ? (
          projects.map((project) => (
            <article key={project.id} className="project-card">
              <div>
                <h4>{project.name}</h4>
                <p>{project.description || 'Blueprint ready.'}</p>
              </div>
              <span className="project-status">{project.status}</span>
            </article>
          ))
        ) : (
          <p className="empty-state">No projects yet. Create your first studio item.</p>
        )}
      </div>

      {error && <div className="error-banner">{error}</div>}
    </div>
  )
}

export default ProjectsPage
