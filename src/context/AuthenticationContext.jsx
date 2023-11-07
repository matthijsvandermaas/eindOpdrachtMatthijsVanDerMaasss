import React, {createContext, useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as jwtDecode from 'jwt-decode';



export const AuthenticationContext = createContext({});
export const useAuth = () => {
  return useContext(AuthenticationContext);
}
export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState({
    isAuthenticated: false,
    user: null,
    status: 'pending'
  });
  const navigate = useNavigate();

  // MOUNTING EFFECT
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      void login(token);
    } else {
      setIsAuth({
        isAuthenticated: false,
        user: null,
        status: 'done'
      });
    }
  }, []);

  async function login(token) {
    localStorage.setItem('token', token);
    const userinfo = jwtDecode(token);
    const userId = userinfo.sub;

    try {
      const result = await axios.get(`http://localhost:3000/600/users/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      setIsAuth({
        isAuthenticated: true,
        user: {
          username: result.data.username,
          email: result.data.email,
          id: result.data.id,
        },
        status: 'done',
      });

      navigate('/profile'); // Navigeren na succesvol inloggen
    } catch (e) {
      console.error(e);
      setIsAuth({
        isAuthenticated: false,
        user: null,
        status: 'done',
      });
    }
    console.log('Gebruiker is ingelogd!');
  }

  function logout() {
    localStorage.clear();
    setIsAuth({
      isAuthenticated: false,
      user: null,
      status: 'done',
    });
    console.log('Gebruiker is uitgelogd!');
    navigate('/');
  }

  return (
      <AuthenticationContext.Provider value={{ ...isAuth, login, logout }}>
        {isAuth.status === 'done' ? children : <p>Momentje de bartender komt er zo aan🍻...</p>}
      </AuthenticationContext.Provider>
  );
}


export default AuthContextProvider;
