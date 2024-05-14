import React, { useState } from 'react';
import axios from 'axios';
import "../../src/index.css"



const Login = ({ setIsLoggedIn }) => {
  const [mail, setEmail] = useState('');
  const [contrasena, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        mail,
        contrasena
      });

      
      if (response.status === 200) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      setError('Credenciales incorrectas. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div class = "login-section">
      <input
        type="text"
        placeholder="Email"
        value={mail}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;