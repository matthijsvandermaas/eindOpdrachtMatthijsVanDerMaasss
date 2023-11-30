import React, {createContext, useContext, useEffect, useState} from "react";
import jwt_Decode from "jwt-decode";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        username: null,
        role: null,
        status: "pending",
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setLoading(true);

            try {
                const token = localStorage.getItem("token");
                console.log("Token from localStorage:", token);

                if (token) {
                    // We hebben de token, laten we proberen te decoderen
                    const decodedToken = jwt_Decode(token);
                    console.log(decodedToken);

                    // Als de token succesvol wordt gedecodeerd, log in de gebruiker in
                    if (decodedToken) {
                        login(token, decodedToken);
                        console.log(decodedToken);
                    } else {
                        setAuthState({
                            isAuthenticated: false,
                            user: null,
                            status: "done",
                        });
                        console.log(decodedToken);
                    }
                } else {
                    // Geen token gevonden
                    setAuthState({
                        isAuthenticated: false,
                        user: null,
                        status: "done",
                    });
                }
            } catch (error) {
                // console.error("Error fetching user data:", error);
                setError(true);
            } finally {
                setLoading(false);

            }
        };

        fetchData();
    }, []); // Geen dependencies hier, omdat we geen externe variabelen gebruiken

    const login = (token, decodedToken) => {
        console.log("Token from localStorage:", token);
        console.log("Decoded Token:", decodedToken);
        const username = decodedToken.sub;
        navigate('/home');

        localStorage.setItem('token', token);

        setAuthState({
            isAuthenticated: true,
            user: {username},
            status: "done",
        });
    };

    const logout = () => {
        localStorage.clear();
        setAuthState({
            isAuthenticated: false,
            token: null,
            user: null,
            role: null,
            status: "done",
        });
    };

    const {username, token} = authState;

    const contextData = {
        ...authState,
        logout,
        login,
        isAuth: authState.isAuthenticated,
        user: authState.user,
        token: authState.token
    };

    return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;
