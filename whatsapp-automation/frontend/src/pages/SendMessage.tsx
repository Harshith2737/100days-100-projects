import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { messageService } from '../services/api';

const SendMessage: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await messageService.createMessage({ recipient, message });
      navigate('/');
    } catch (error) {
      console.error('Error creating message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Create New Message</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Recipient Phone Number:</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
            placeholder="+1234567890"
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            placeholder="Enter your message here..."
          />
        </div>
        <button type="submit" disabled={loading} style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '10px 20px' }}>
          {loading ? 'Creating...' : 'Create Message'}
        </button>
      </form>
    </div>
  );
};

export default SendMessage;