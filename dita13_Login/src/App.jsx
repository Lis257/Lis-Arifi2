import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Të dy fushat janë të detyrueshme.');
      setSuccess(false);
      return;
    }

    if (username === 'admin' && password === 'password') {
      setSuccess(true);
      setError('');
    } else {
      setError('Emri i përdoruesit ose fjalëkalimi është i pavlefshëm.');
      setSuccess(false);
    }}

    return (
      <div className="App">
        <div className="login-container">
        <h2>Login</h2>

        {error && <div className="error">{error}</div>}
        {success && <div className="success">Jeni kyqur me sukses!</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Kyçu</button>
        </form>
      </div>
    </div>
  );
}

export default App;