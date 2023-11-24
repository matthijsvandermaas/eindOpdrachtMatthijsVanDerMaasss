import React, { createContext, useEffect, useState } from "react";
import jwt_Decode from "jwt-decode";
import {useNavigate} from "react-router-dom";
export const AuthContext = createContext({});
const AuthContextProvider = ({ children }) => {

    const [ageUser, setAgeUser] = useState(0);
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        token: null,
        role: null,
        status: "pending",
    });
    console.log(ageUser)
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchData = async () => {
            if (token) {
                await login(token);
            } else {
                setAuthState({
                    isAuthenticated: false,
                    user: null,
                    status: "done",
                });
            }
        };
        void fetchData();
    }, []);
    const login = (token) => {
        localStorage.setItem("token", token);
        const decodedToken = jwt_Decode(token);
        const username = decodedToken.sub;
        navigate('/home')

        setAuthState({
            isAuthenticated: true,
            user: { username: username },
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
    const contextData = { ...authState, logout: logout, login: login, isAuth: authState.isAuthenticated, user: authState.user, setAge: setAgeUser, ageUser: ageUser};
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider;
