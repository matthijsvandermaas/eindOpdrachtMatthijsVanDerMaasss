import React, {createContext, useEffect, useRef, useState} from 'react';
import {useHistory, useNavigate} from 'react-router-dom';
import Jwtdecode from 'jwt-decode';
import axios from 'axios';


export const AuthenticationContext = createContext({});
const JWT_token = localStorage.getItem('token');
function AuthContextProvider({ children }) {
  const [isAuth, toggleIsAuth] = useState({
    isAuthenticated: false,
    user: null,
    status: 'pending' });
  const navigate = useNavigate();
  const history = useHistory();

  // MOUNTING EFFECT
  useEffect(() => {
    // haal de JWT_token op uit Local Storage
    const token = localStorage.getItem('token');
       // WEL een token
    if (token) {
     void login(token);
    } else {
      // GEEN token
      toggleIsAuth({
     ...isAuth,
        status: 'done',
      });
    }
  }, []);

  async function login(Token) {
    //token opslaan in local storage
    localStorage.setItem('token', Token);
    const userinfo = Jwtdecode(Token);
    const userId = userinfo.sub;
    try{
      const result = await axios.get(`https://localhost:3000/600/users/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      }
      });
        console.log(result);
      toggleIsAuth({
        isAuthenticated: true,
        user: {
          username: result.data.username,
          email: result.data.email,
          id: result.data.id,
        },
        status: 'done',
      });
        history.push('/');
    }catch (e) {
      console.error(e);
        toggleIsAuth({
           ...isAuth,
            status: 'done',
            });
    }
      console.log('Gebruiker is ingelogd!');
  }
      // zet de token in de Local Storage
    localStorage.setItem('token', JWT_token);
    // decode de token zodat we de ID van de gebruiker hebben
    const decoded = Jwtdecode(JWT_token);
    // geef de ID, token en redirect-link mee aan de fetchUserData functie
    fetchUserData(decoded.sub, JWT_token, '/profile');
    history.push('/profile')
  }

  function logout() {
    localStorage.clear();
    toggleIsAuth({
      isAuthenticated: false,
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
      // history.push in de login-functie zouden zetten
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
  ...isAuth,
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