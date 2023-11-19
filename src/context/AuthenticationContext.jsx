import {createContext, useEffect, useState} from "react";
import jwt_Decode from "jwt-decode";


export const AuthenticationContext = createContext({});

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        user: null,
        token: null,
        status: "pending",
    });

    useEffect(() => {
        const token = localStorage.getItem("token");

        const fetchData = async () => {
            if (token) {
                await login(token);
            } else {
                setIsAuth({
                    isAuthenticated: false,
                    user: null,
                    status: "done",
                });
            }
        };

        void fetchData();
    }, []);

    async function login(token) {

        localStorage.setItem('token', token);

        const info = jwt_Decode(token);
        const username = info.sub;


        setIsAuth({
            isAuthenticated: true,
            user: {
                username: username,
            },
            token: token,
            status: 'done',
        });

    }

    function logout() {
        localStorage.clear();
        setIsAuth({
            isAuthenticated: false,
            token: null,
            user: null,
            status: 'done'
        });
    }

    const data = {
        ...isAuth,
        logout: logout,
        login: login,
    };

    return (
        <AuthenticationContext.Provider value={data}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthContextProvider;