import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/Dashboard'
import ProjectsPage from './pages/Projects'
import AgentPage from './pages/Agent'
import SettingsPage from './pages/Settings'

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/projects', label: 'Projects' },
  { path: '/agent', label: 'Astra' },
  { path: '/settings', label: 'Settings' },
]

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <aside className="sidebar">
          <div className="brand-block">
            <div className="brand-mark">NF</div>
            <div>
              <h1>NexaForge</h1>
              <p>Developer HQ</p>
            </div>
          </div>
          <nav className="nav-links">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="sidebar-footer">
            <p>Agent: Astra</p>
            <small>AI-driven developer companion.</small>
          </div>
        </aside>

        <main className="main-panel">
          <header className="topbar">
            <div>
              <p className="eyebrow">NexaForge Workspace</p>
              <h2>Build with Astra — your intelligent development partner.</h2>
            </div>
          </header>

          <section className="page-frame">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/agent" element={<AgentPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
