import { Message, Contact } from '../types';

const API_BASE_URL = 'http://localhost:8000/api';

// Message Services
export const messageService = {
  getAllMessages: async (skip = 0, limit = 10): Promise<Message[]> => {
    const response = await fetch(`${API_BASE_URL}/messages?skip=${skip}&limit=${limit}`);
    return response.json();
  },

  getMessageById: async (id: number): Promise<Message> => {
    const response = await fetch(`${API_BASE_URL}/messages/${id}`);
    if (!response.ok) throw new Error('Message not found');
    return response.json();
  },

  createMessage: async (message: Omit<Message, 'id' | 'status' | 'sent_at' | 'created_at' | 'updated_at'>): Promise<Message> => {
    const response = await fetch(`${API_BASE_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });
    return response.json();
  },

  sendMessage: async (id: number): Promise<Message> => {
    const response = await fetch(`${API_BASE_URL}/messages/send/${id}`, {
      method: 'POST',
    });
    return response.json();
  },

  deleteMessage: async (id: number): Promise<void> => {
    await fetch(`${API_BASE_URL}/messages/${id}`, { method: 'DELETE' });
  },
};

// Contact Services
export const contactService = {
  getAllContacts: async (skip = 0, limit = 10): Promise<Contact[]> => {
    const response = await fetch(`${API_BASE_URL}/contacts?skip=${skip}&limit=${limit}`);
    return response.json();
  },

  getContactById: async (id: number): Promise<Contact> => {
    const response = await fetch(`${API_BASE_URL}/contacts/${id}`);
    if (!response.ok) throw new Error('Contact not found');
    return response.json();
  },

  createContact: async (contact: Omit<Contact, 'id' | 'created_at' | 'updated_at'>): Promise<Contact> => {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    });
    return response.json();
  },

  deleteContact: async (id: number): Promise<void> => {
    await fetch(`${API_BASE_URL}/contacts/${id}`, { method: 'DELETE' });
  },
};