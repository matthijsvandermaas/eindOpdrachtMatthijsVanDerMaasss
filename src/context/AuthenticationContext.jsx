import {createContext, useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
export const AuthenticationContext = createContext({});

function AuthContextProvider({children}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuth, toggleIsAuth] = useState({
      isAuth: false,
      user: {setEmail},
      password: {setPassword},
      id: "1",
      status: 'pending',
    });

    // MOUNTING EFFECT
    useEffect(() => {
      const token = localStorage.getItem('Token');


      // als er WEL een token is
      if (token) {
        void loginContext(token);

      } else {
        // als er GEEN token is
        toggleIsAuth({
          isAuth: false,
          user: null,
          status: 'done',
        });
      }
    }, []);

    async function loginContext(token) {
      toggleIsAuth({ isAuth: true,   user: { email, password }, });

      // zet de token in de Local Storage
      localStorage.setItem('Token', token);
      const userinfo = jwt_decode(token);
      const userid = userinfo.sub;
      try {
        const response = await axios.get(`http://localhost:3000/${userid}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          }
        });
      } catch (e) {
        console.error("Error status:", e.response.status);
        console.error("Error data:", e.response.data);
      }
      console.log('Gebruiker is ingelogd!')
      // decode de token
      const decoded = jwtDecode(token);
      navigate('/home')

      // geef de ID, token en redirect-link mee
      await fetchUserData(decoded.sub, token, '/profile');
      // link de gebruiker door naar de profielpagina
      navigate('/mijnPagina');
    }

    function logoutContext() {
      localStorage.clear();
      toggleIsAuth({
        isAuth: false,
        user: null,
        status: 'done',
      });

      console.log('Gebruiker is uitgelogd!');
      navigate('/home');
    }

    // Omdat we deze functie in loginContext- en het mounting-effect gebruiken, staat hij hier gedeclareerd!
    async function fetchUserData(id, token, redirectUrl) {
      try {
        // haal gebruikersdata op met de token en id van de gebruiker
        const result = await axios.get(`http://localhost:3000/600/users/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

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

        // als er een redirectURL is meegegeven (bij het mount-effect doen we dit niet) linken we hiernaartoe door
        // als we de history.push in de loginContext-functie zouden zetten, linken we al door voor de gebruiker is opgehaald!
        if (redirectUrl) {
          navigate(redirectUrl);
        }

      } catch (e) {
        console.error(e);
        // ging er iets mis? Plaatsen we geen data in de state
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
      login: loginContext,
      logout: logoutContext,
    };

    return (
        <AuthenticationContext.Provider value={contextData}>
          {isAuth.status === 'done' ? children : <h4>Momentje de bartender komt zo bij u...</h4>}

        </AuthenticationContext.Provider>
    );
}

AuthContextProvider.propTypes = {children: PropTypes.any}
export default AuthContextProvider;