import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importa Routes también
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Login from './Login';
import Pets from './Pets';
import ShoppingCart from './ShoppingCart';
import HomeCookedMeals from './HomeCookedMeals';
import PetWeddings from './PetWeddings';
import Healthcare from './Healthcare';
import PetNames from './PetNames';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO.firebaseapp.com",
  projectId: "TU_ID_DE_PROYECTO",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID",
  measurementId: "TU_MEASUREMENT_ID"
};

// Inicializamos Firebase
const app = firebase.initializeApp(firebaseConfig);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  const handleLogin = () => {
    console.log("Handle login called");
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      setLoggedIn(true);
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      setLoggedIn(true);
    } catch (error) {
      console.error('Error al iniciar sesión con Facebook:', error);
    }
  };

  console.log("Logged in state:", loggedIn);

  return (
    <Router>
      <div className="App">
        {!loggedIn && <Login onLogin={handleLogin} onGoogleLogin={handleGoogleLogin} onFacebookLogin={handleFacebookLogin} />}
      </div>
    </Router>
  );
}

export default App;
