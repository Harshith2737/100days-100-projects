import { useEffect, useState } from 'react'
import { getOverview } from '../services/api'
import { Overview } from '../types'

function DashboardPage() {
  const [overview, setOverview] = useState<Overview | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        const data = await getOverview()
        setOverview(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="page-grid">
      <div className="hero-card">
        <div>
          <p className="eyebrow">Welcome back, builder</p>
          <h3>Launch code, collaborate, and let Astra automate your flow.</h3>
          <p className="meta-text">
            NexaForge gives you a developer command center with AI planning, project tracking, and quick cloud-ready tools.
          </p>
        </div>
        <div className="hero-actions">
          <button type="button">Create new project</button>
          <button type="button" className="secondary">
            Chat with Astra
          </button>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <p className="metric-label">Projects</p>
          <p className="metric-value">{loading ? '...' : overview?.total_projects ?? 0}</p>
        </div>
        <div className="metric-card">
          <p className="metric-label">Agent messages</p>
          <p className="metric-value">{loading ? '...' : overview?.total_messages ?? 0}</p>
        </div>
        <div className="metric-card">
          <p className="metric-label">AI assistant</p>
          <p className="metric-value">Astra</p>
        </div>
      </div>

      <div className="status-card">
        <div>
          <h4>The latest update</h4>
          <p>Streamlined agent workflows, improved project tracking, and a responsive developer experience across browser and containerized deployments.</p>
        </div>
      </div>

      {error && <div className="error-banner">Failed to load metrics: {error}</div>}
    </div>
  )
}

export default DashboardPage
