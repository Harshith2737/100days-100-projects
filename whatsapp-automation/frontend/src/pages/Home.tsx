import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { messageService } from '../services/api';
import { Message } from '../types';

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await messageService.getAllMessages();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  const handleSend = async (id: number) => {
    try {
      const updatedMessage = await messageService.sendMessage(id);
      setMessages(messages.map(msg => msg.id === id ? updatedMessage : msg));
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await messageService.deleteMessage(id);
      setMessages(messages.filter(msg => msg.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  if (loading) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <h1>WhatsApp Messages</h1>
      <Link to="/send">
        <button style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '10px 20px', marginBottom: '20px' }}>
          Create New Message
        </button>
      </Link>
      <Link to="/contacts">
        <button style={{ backgroundColor: 'var(--secondary-color)', color: 'white', padding: '10px 20px', marginBottom: '20px', marginLeft: '10px' }}>
          Manage Contacts
        </button>
      </Link>
      <div>
        {messages.map(message => (
          <div key={message.id} style={{ border: '1px solid var(--border-color)', padding: '15px', marginBottom: '10px', borderRadius: '8px' }}>
            <p><strong>To:</strong> {message.recipient}</p>
            <p><strong>Message:</strong> {message.message}</p>
            <p><strong>Status:</strong> {message.status}</p>
            <p><strong>Created:</strong> {new Date(message.created_at).toLocaleString()}</p>
            {message.sent_at && <p><strong>Sent:</strong> {new Date(message.sent_at).toLocaleString()}</p>}
            <button onClick={() => handleSend(message.id)} disabled={message.status === 'sent'} style={{ backgroundColor: 'var(--accent-color)', marginRight: '10px' }}>
              Send
            </button>
            <button onClick={() => handleDelete(message.id)} style={{ backgroundColor: '#e74c3c', color: 'white' }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;