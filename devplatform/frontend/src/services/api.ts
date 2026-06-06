import { Overview, Project, Message } from '../types'

const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000'

async function fetchJson<T>(path: string, options: RequestInit = {}) {
  const response = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`API error ${response.status}: ${body}`)
  }

  return response.json() as Promise<T>
}

export async function getOverview() {
  return fetchJson<Overview>('/api/overview')
}

export async function getProjects() {
  return fetchJson<Project[]>('/api/projects')
}

export async function createProject(project: { name: string; description: string }) {
  return fetchJson<Project>('/api/projects', {
    method: 'POST',
    body: JSON.stringify({ ...project }),
  })
}

export async function sendAgentMessage(message: string, sessionId?: string) {
  return fetchJson<{ reply: string; raw?: unknown }>('/api/agent', {
    method: 'POST',
    body: JSON.stringify({ message, session_id: sessionId }),
  })
}

export async function listMessages(sessionId?: string) {
  const query = sessionId ? `?session_id=${encodeURIComponent(sessionId)}` : ''
  return fetchJson<Message[]>(`/api/messages${query}`)
}

export async function createMessage(payload: { session_id?: string; role: string; content: string }) {
  return fetchJson<Message>('/api/messages', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
