import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login_Page.css';
import Cubes from '../../components/cubes/Cubes.jsx';
import { AuthenticationContext } from '../../utils/AuthenticationContext.jsx';
import axios from 'axios';

const Login_Page = () => {
    const { isAuthenticated, login, logout } = useContext(AuthenticationContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [slideIndex, setSlideIndex] = useState(1);

    const handleLogin = async () => {
        try {
            const userCredentials = { username, password };
            const response = await axios.post(
                'http://localhost:8081/authenticate',
                userCredentials,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 200) {
                navigate('/');
                console.log('Authentication successful');
                login();
            } else {
                navigate('/login_page');
                console.log('Authentication failed');
            }
        } catch (error) {
            navigate('/login_page');
            console.error('Error during authentication:', error);
        }
    };
    const handleLogout = () => {
        logout();
        navigate('/*');
    };

    return (
        <div className="outer-login-container">
            <form className="form-content background-login">
                <div>
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <p>
                    Nog geen lid? Kom erbij en<Link to="/inschrijfformulier"><strong> schrijf je in</strong></Link>
                </p>
                <div>
                    <button className="bttn" onClick={!isAuthenticated ? handleLogin : handleLogout}>
                        {!isAuthenticated ? 'Inloggen' : 'Logout'}
                    </button>
                </div>
            </form>
            <p>Ander formulieren</p>
            <Cubes
                button_1="Een bierliefhebber"
                navigate_1="/inschrijfformulier_particulier"
                button_2="Een brouwer"
                navigate_2="/inschrijfformulier_producent"
                button_3="Een nieuw biertje"
                navigate_3="/inschrijfformulier_product"
                button_4="Home"
                navigate_4="/"
            />
        </div>
    );
};

export default Login_Page;
