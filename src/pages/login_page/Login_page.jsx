import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login_Page.css';
import Cubes from '../../components/cubes/Cubes.jsx';
import { AuthenticationContext } from '../../context/AuthenticationContext.jsx';
import axios from 'axios';
import Slider from "../../components/slider/Slider.jsx";
import jwt_decode from 'jwt-decode';
import slider_Img_One from "../../assets/hoe maak je bier/hop.png";
import slider_Img_Two from "../../assets/hoe maak je bier/yeast.png";
import slider_Img_Three from "../../assets/hoe maak je bier/malt.png";
import slider_Img_Four from "../../assets/hoe maak je bier/gist.png";


function Login_Page() {
    const { isAuthenticated, login, logout } = useContext(AuthenticationContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [slideIndex, setSlideIndex] = useState(1);

    const slider_Img_1 = slider_Img_One;
    const slider_Img_2 = slider_Img_Two;
    const slider_Img_3 = slider_Img_Three;
    const slider_Img_4 = slider_Img_Four;
    const handleLogout = () => {
        logout();
        navigate('/*');
    };
    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('http://localhost:3000/authorities', {
                username: {username},
                password: {password},
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer xxxxx.yyyyy.zzzzz",
                },
            });

            // log het resultaat in de console
            console.log(result.data.accestoken);

            // geef de JWT-token aan de login-functie van de context mee
            login(result.data.accestoken);
        } catch(e) {
            navigate('/login_page');
            console.error('Error during authentication:', error);
        }
    }

    return (
        <div className="outer-login-container">
            <div>
                <Slider
                    slider_Img1={slider_Img_1}
                    slider_Img2={slider_Img_2}
                    slider_Img3={slider_Img_3}
                    slider_Img4={slider_Img_4}
                    slideIndex={slideIndex}
                    setSlideIndex={setSlideIndex}
                />
            </div>
            <form className="form-content background-login">
                <div>
                    <label htmlFor="username-field">Email address</label>
                    <input
                        type="text"
                        id="username-field"
                        className="form-control"
                        placeholder="Enter email"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password-field">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password-field"
                        name="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error">Combinatie van emailadres en wachtwoord is onjuist</p>}
                </div>
                <h4>
                    Ben je nog geen lid? Kom erbij en <Link to="/inschrijfformulier"><strong> schrijf je in</strong></Link>
                </h4>
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
