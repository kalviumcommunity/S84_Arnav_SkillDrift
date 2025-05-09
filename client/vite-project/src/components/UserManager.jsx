import React, { useState } from 'react';

function UserManager() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', skills: '', date: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = newUser;
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      setUsers([...users, newUser]);
    }
    setNewUser({ name: '', email: '', skills: '', date: '' });
  };

  const handleEdit = (index) => {
    setNewUser(users[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    if (editingIndex === index) {
      setNewUser({ name: '', email: '', skills: '', date: '' });
      setEditingIndex(null);
    }
  };

  return (
    <div>
      <h2>{editingIndex !== null ? 'Edit User' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input name="name" value={newUser.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input name="email" value={newUser.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Skills:</label><br />
          <input name="skills" value={newUser.skills} onChange={handleChange} required />
        </div>
        <div>
          <label>Date:</label><br />
          <input type="date" name="date" value={newUser.date} onChange={handleChange} required />
        </div>
        <button type="submit">{editingIndex !== null ? 'Update' : 'Register'}</button>
      </form>

      {users.length > 0 && <h3>Successfully Registered Users</h3>}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Skills:</strong> {user.skills}</p>
            <p><strong>Date:</strong> {user.date}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>{' '}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManager;
