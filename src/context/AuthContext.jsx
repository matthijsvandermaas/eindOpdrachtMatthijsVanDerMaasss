import React, { createContext, useContext, useEffect, useState } from "react";
import jwt_Decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        username: null,
        token: null,
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
                    await login(token);
                } else {
                    setAuthState({
                        isAuthenticated: false,
                        user: null,
                        status: "done",
                    });
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);
        console.log("Token from localStorage:", token);

        const decodedToken = jwt_Decode(token);
        console.log("Decoded Token:", decodedToken);

        const username = decodedToken.sub;
        navigate('/home');

        setAuthState({
            isAuthenticated: true,
            user: { username },
            token: token,
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

    const { username, token } = authState;

    const contextData = {
        ...authState,
        logout,
        login,
        isAuth: authState.isAuthenticated,
        user: authState.user,
        token: authState.token };

    return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;
