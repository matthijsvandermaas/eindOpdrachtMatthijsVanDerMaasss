// eslint-disable-next-line no-unused-vars
import {createContext, useEffect, useState} from 'react';
import { jwtDecode} from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
function AuthContextProvider({children}) {

  const [isAuth, toggleIsAuth] = useState({

    isAuthenticated: false,
    user: null,
    status: 'pending',

  });

  useEffect(()=> {

    const token = localStorage.getItem('token');

    if(token) {
      void login(token);
    } else {
      toggleIsAuth({
        isAuthenticated: false,
        user: null,
        status: 'done'
      })
    }

  },[]);


  async function login(token) {

    localStorage.setItem('token',token);

    const userInfo = jwtDecode(token);
    const userEmail = userInfo.sub;
    console.log(userEmail);

    try {
      const response = await axios.get(`http://localhost:8080//authenticate/${id}`, {

        headers: {
          Authorization: `Bearer ${token}`,

        }
      })
      console.log(response.data);




      toggleIsAuth({
        isAuthenticated: true,
        user: {
          Email,
          Password,
          id,
        },
        status: 'done',
      });

      console.log("De gebruiker is ingelogd")

    } catch (e) {
      console.error("De gebruiker kan niet inloggen AuthContext");
      toggleIsAuth({
        isAuthenticated: false,
        user: null,
        status: 'done'
      })
    }


  }

  function logout() {

    localStorage.clear();

    toggleIsAuth({
      isAuthenticated: false,
      user: null,
      status: 'done',
    });
    console.log('Gebruiker is uitgelogd!');
  }

  const contextData = {
    isAuth: isAuth.isAuthenticated,
    user: isAuth.user,
    login: login,
    logout: logout,
  };


  return (
      <AuthContext.Provider value={contextData} >
        {isAuth.status === 'done' ? children : <p className='p-loading'>Momentje de bartender is even bezig🍻...</p> }
      </AuthContext.Provider>
  );
}

export default AuthContextProvider;