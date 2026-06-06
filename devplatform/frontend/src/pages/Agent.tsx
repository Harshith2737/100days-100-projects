import { FormEvent, useMemo, useState } from 'react'
import { createMessage, sendAgentMessage } from '../services/api'

function AgentPage() {
  const [sessionId] = useState(() => `session-${Math.random().toString(36).substring(2, 9)}`)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!message.trim()) return

    const trimmed = message.trim()
    const nextMessages = [...messages, { role: 'user' as const, content: trimmed }]
    setMessages(nextMessages)
    setMessage('')
    setLoading(true)
    setError('')

    try {
      await createMessage({ session_id: sessionId, role: 'user', content: trimmed })
      const result = await sendAgentMessage(trimmed, sessionId)
      setMessages((current) => [...current, { role: 'assistant', content: result.reply }])
      await createMessage({ session_id: sessionId, role: 'assistant', content: result.reply })
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const chatTitle = useMemo(() => `Astra • ${sessionId}`, [sessionId])

  return (
    <div className="page-grid">
      <div className="chat-board">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">AI Command Center</span>
            <h3>{chatTitle}</h3>
          </div>
        </div>

        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="empty-state">
              <p>Ask Astra anything: code reviews, deployment strategy, task planning and API design.</p>
            </div>
          ) : (
            messages.map((entry, index) => (
              <div key={index} className={`chat-message ${entry.role}`}>
                <span className="message-role">{entry.role === 'assistant' ? 'Astra' : 'You'}</span>
                <p>{entry.content}</p>
              </div>
            ))
          )}
        </div>

        <form className="chat-form" onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell Astra what you need..."
            rows={3}
          />
          <div className="chat-actions">
            <button type="submit" disabled={loading}>
              {loading ? 'Thinking…' : 'Send to Astra'}
            </button>
          </div>
        </form>

        {error && <div className="error-banner">{error}</div>}
      </div>
    </div>
  )
}

export default AgentPage
