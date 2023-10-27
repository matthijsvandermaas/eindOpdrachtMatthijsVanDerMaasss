import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Authenticationlogic = createContext({});

export function AuthContextProvider({ children }) {
  const [isAuth, toggleIsAuth] = useState(false);
  const history = useHistory();

   const login() {
    console.log('Gebruiker is ingelogd!');
    toggleIsAuth(true);
    history.push('/');
  }

  const logout() {
    console.log('Gebruiker is uitgelogd!');
    toggleIsAuth(false);
    history.push('/');
  }

  const contextData = {
    isAuth: isAuth,
    login: login,
    logout: logout,
  };

  return (
    <Authenticationlogic.Provider value={contextData}>
      {children}
    </Authenticationlogic.Provider>
  );
}

export default AuthContextProvider;