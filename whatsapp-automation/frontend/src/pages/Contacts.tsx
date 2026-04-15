import React, { useEffect, useState } from 'react';
import { contactService } from '../services/api';
import { Contact } from '../types';

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await contactService.getAllContacts();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    try {
      const newContact = await contactService.createContact({ name, phone });
      setContacts([...contacts, newContact]);
      setName('');
      setPhone('');
    } catch (error) {
      console.error('Error creating contact:', error);
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await contactService.deleteContact(id);
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  if (loading) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <h1>Contacts</h1>
      <form onSubmit={handleCreate} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="+1234567890"
          />
        </div>
        <button type="submit" disabled={creating} style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '10px 20px' }}>
          {creating ? 'Adding...' : 'Add Contact'}
        </button>
      </form>
      <div>
        {contacts.map(contact => (
          <div key={contact.id} style={{ border: '1px solid var(--border-color)', padding: '15px', marginBottom: '10px', borderRadius: '8px' }}>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <button onClick={() => handleDelete(contact.id)} style={{ backgroundColor: '#e74c3c', color: 'white' }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;