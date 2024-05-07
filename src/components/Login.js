import React, { useState } from 'react';

function Login({ onLogin, onGoogleLogin, onFacebookLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting login form with username:", username);
    console.log("Submitting login form with password:", password);
    onLogin();
  };

  return (
    <div className="login-box">
      <h2>Iniciar Sesión:</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>

      <div className="social-login">
        <h2>O inicia sesión con:</h2>
        <button onClick={onGoogleLogin}>
          Google
        </button>
        <button onClick={onFacebookLogin}>
          Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
