import { createContext, useState } from "react";

export const AuthenticationContext = createContext({});

const AuthenticationContextProvider = ({ children }) => {
    const [isAuthentication, setIsAuthentication] = useState(false);

    function login() {
        setIsAuthentication(true);
    }

    function logout() {
        setIsAuthentication(false);
    }

    const data = {
        isAuthentication,
        logout,
        login
    };

    return <AuthenticationContext.Provider value={data}>{children}</AuthenticationContext.Provider>;
};

export default AuthenticationContextProvider;
