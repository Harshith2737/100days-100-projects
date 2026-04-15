export interface Message {
  id: number;
  recipient: string;
  message: string;
  status: string;
  sent_at: string | null;
  created_at: string;
  updated_at: string | null;
}

export interface Contact {
  id: number;
  name: string;
  phone: string;
  created_at: string;
  updated_at: string | null;
}