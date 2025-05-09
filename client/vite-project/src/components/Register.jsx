import React, { useState } from 'react';

function Register() {
  const [user, setUser] = useState({ name: '', email: '', skills: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label><br />
          <input name="email" onChange={handleChange} />
        </div>
        <div>
          <label>Skills:</label><br />
          <input name="skills" onChange={handleChange} />
        </div>
        <div>
          <label>Date:</label><br />
          <input type="date" name="date" onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>

      {submitted && (
        <div>
          <p><strong>Successfully registered</strong></p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Skills: {user.skills}</p>
          <p>Date: {user.date}</p>
        </div>
      )}
    </div>
  );
}

export default Register;
