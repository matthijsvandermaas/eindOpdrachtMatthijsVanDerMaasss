// AuthenticationContext.jsx
import React, { createContext, useState } from 'react';

export const AuthenticationContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    const contextData = {
        isAuthenticated,
        login,
        logout,
    };

    return (
        <AuthenticationContext.Provider value={contextData}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthContextProvider;
