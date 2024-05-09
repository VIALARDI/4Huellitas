import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Login from './Login';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Carrito from './Carrito';
import ComidasCaseras from './ComidasCaseras';
import Eventos from './Eventos';
import Cuidados from './Cuidados';



const firebaseConfig = {
  apiKey: "AIzaSyA59qbASepDAJRrIZL1yePlQ4JPe-LYhHI",
  authDomain: "4huellitas.firebaseapp.com",
  projectId: "huellitas-2446e",
  storageBucket: "gs://huellitas-2446e.appspot.com",
  messagingSenderId: "908845715064",
  appId: "1:908845715064:web:95fa77c6c85e9aaab4278d",
  measurementId: "G-TMRY8XGJ49"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function App() {
  const [loggedIn, setLoggedIn] = useState(true);//cambio a false
  const handleLogin = () => {
    console.log("Handle login called");
    setLoggedIn(true);
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuario de Google:", user);
      setLoggedIn(true);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuario de Facebook:", user);
      setLoggedIn(true);
    } catch (error) {
      console.error("Error al iniciar sesión con Facebook:", error);
    }
  };

  const handleCreateAccount = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;
      console.log("Cuenta creada exitosamente:", user);
      setLoggedIn(true);
    } catch (error) {
      console.error("Error al crear cuenta:", error);
    }
  };
  
  console.log("Logged in state:", loggedIn);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} onGoogleLogin={handleGoogleLogin} onFacebookLogin={handleFacebookLogin} onCreateAccount={handleCreateAccount} />} />
          {/* Otras rutas */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
