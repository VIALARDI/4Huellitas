// Login.js

import React, { useState } from 'react';

function Login({ onLogin, onGoogleLogin, onFacebookLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario con nombre de usuario y contraseña
    // Por ahora, simplemente llamamos a la función onLogin cuando se envía el formulario
    console.log("Submitting login form with username:", username);
    console.log("Submitting login form with password:", password);
    onLogin();
  };

  return (
    <div className="login-box">
      <h2>Iniciar Sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => {
            console.log("Username changed:", e.target.value);
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => {
            console.log("Password changed:", e.target.value);
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>

      <div className="social-login">
        <h2>O inicia sesión con:</h2>
          <button onClick={onGoogleLogin}>
            <img className="google-logo" src="https://img.icons8.com/fluent/48/000000/google-logo.png" alt="Google" />
            Google
          </button>
          <button onClick={onFacebookLogin}>
            <img className="facebook-logo" src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="Facebook" />
            Facebook
          </button>
      </div>
    </div>
  );
}

export default Login;


