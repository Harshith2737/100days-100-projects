export interface Project {
  id: number
  name: string
  description: string
  status: string
  created_at: string
}

export interface Message {
  id: number
  session_id?: string
  role: string
  content: string
  created_at: string
}

export interface Overview {
  total_projects: number
  total_messages: number
}
