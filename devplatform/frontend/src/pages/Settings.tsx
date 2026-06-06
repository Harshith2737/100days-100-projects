function SettingsPage() {
  return (
    <div className="page-grid">
      <div className="panel-card">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Settings</p>
            <h3>Platform configuration & account essentials</h3>
          </div>
        </div>
        <div className="settings-group">
          <h4>Workspace</h4>
          <p>Use the environment variables in <code>.env.example</code> to configure your AI provider and API base path.</p>
        </div>
        <div className="settings-group">
          <h4>AI Agent</h4>
          <p>Astra can be connected via OpenAI GPT or Anthropic Claude. Set <code>LLM_PROVIDER</code> and the corresponding API key.</p>
        </div>
        <div className="settings-group">
          <h4>Deployment</h4>
          <p>Run locally with Docker Compose or install dependencies in the frontend and backend folders.</p>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
