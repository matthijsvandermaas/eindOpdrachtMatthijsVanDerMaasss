import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthenticationContext = createContext({});

function AuthContextProvider({ children }) {
  const [isAuth, toggleIsAuth] = useState({

    isAuth: false,
    user: null,
    status: 'pending',
  });
  const history = useHistory();

  // MOUNTING EFFECT
  useEffect(() => {
    // haal de JWT op uit Local Storage
    const token = localStorage.getItem('token');
    // als er WEL een token
    if (token) {
      const decoded = jwt_decode(token);
       void fetchUserData(decoded.sub, token);
    } else {
      // als er GEEN token
      toggleIsAuth({
        isAuth: false,
        user: null,
        status: 'done',
      });
    }
  }, []);

  function login(JWT_token) {
    // zet de token in de Local Storage
    localStorage.setItem('token', JWT_token);
    // decode de token zodat we de ID van de gebruiker hebben
    const decoded = jwt_decode(JWT_token);
    // geef de ID, token en redirect-link mee aan de fetchUserData functie
    fetchUserData(decoded.sub, JWT_token, '/profile');
    history.push('/profile');
  }

  function logout() {
    localStorage.clear();
    toggleIsAuth({
      isAuth: false,
      user: null,
      status: 'done',
    });
    console.log('Gebruiker is uitgelogd!');
    history.push('/');
  }

  // Omdat we deze functie in login- en het mounting-effect gebruiken
  async function fetchUserData(id, token, redirectUrl) {
    try {
      // haal gebruikersdata op met de token en id van de gebruiker
      const result = await axios.get(`http://localhost:3000/600/users/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      setIsAuth(prevState => ({
        ...prevState,
        isAuth: true,
        user: {
          username: result.data.username,
          email: result.data.email,
          id: result.data.id,
        },
        status: 'done',
      }));

      // zet de gegevens in de state
      toggleIsAuth({
        ...isAuth,
        isAuth: true,
        user: {
          username: result.data.username,
          email: result.data.email,
          id: result.data.id,
        },
        status: 'done',
      });

      // als er een redirect URL is meegegeven
      // als we de history.push in de login-functie zouden zetten
      if (redirectUrl) {
        history.push(redirectUrl);
      }

    } catch (e) {
      console.error(e);
      toggleIsAuth({
        isAuth: false,
        user: null,
        status: 'done',
      });
    }
  }

  const contextData = {
    isAuth: isAuth.isAuth,
    user: isAuth.user,
    login,
    logout,
  };

  return (
      <AuthenticationContext.Provider value={contextData}>
        {isAuth.status === 'done' ? children : <p>Momentje de bartender komt er zo aan🍻...</p>}
      </AuthenticationContext.Provider>
  );
}

export default AuthContextProvider;