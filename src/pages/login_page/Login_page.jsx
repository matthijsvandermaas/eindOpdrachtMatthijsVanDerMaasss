import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login_Page.css';
import axios from 'axios';
import Slider from "../../components/slider/Slider.jsx";
import slider_Img_One from "../../assets/hoe maak je bier/hop.png";
import slider_Img_Two from "../../assets/hoe maak je bier/yeast.png";
import slider_Img_Three from "../../assets/hoe maak je bier/malt.png";
import slider_Img_Four from "../../assets/hoe maak je bier/gist.png";
import { AuthenticationContext, useAuth } from "../../context/AuthenticationContext";import Cubes from "../../components/cubes/Cubes.jsx";


function Login_Page() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [slideIndex, setSlideIndex] = useState(1);
    const { isAuthenticated, login, logout } = useAuth();//slider images
    const slider_Img_1 = slider_Img_One;
    const slider_Img_2 = slider_Img_Two;
    const slider_Img_3 = slider_Img_Three;
    const slider_Img_4 = slider_Img_Four;

    async function handleLogin(e) {
        e.preventDefault();
        toggleError(false);
        try {
            const response = await axios.post('http://localhost:8081/authenticate ', {
                username:{email},
                password: {password},
            });
            //token
            console.log(response.data.accesToken);
            // geef de JWT token aan de login-functie van de context mee
            login(response.data.accessToken);
            navigate("/")

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }
    async function handleLogout(){
        try {
            const response = await axios.post('http://localhost:8081authenticate ', {
            });
            console.log('Gebruiker is uitgelogd!');
            console.log(response.data.accesToken);
            login(response.data.accessToken);
            navigate("/")
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }



    return (
        <>
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
                <h2>{!isAuthenticated ? 'Inloggen' : 'Uitloggen'}</h2>
                <form onSubmit={handleLogin} className=" form-content background-login">
                    <div>
                        <label htmlFor="email-field">E-mailadres:
                            <input
                                type="username"
                                id="email-field"
                                name="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password-field">Wachtwoord:
                            <input
                                type="password"
                                id="password-field"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                    </div>
                    <h4>Ben je nog geen lid? Kom erbij en <Link to="/inschrijfformulier"><strong> schrijf je in</strong></Link>
                    </h4>
                    {error && <h5 className="error">Combinatie van e-mailadres en wachtwoord is onjuist</h5>}
                    <button className="bttn" onClick={!isAuthenticated ? handleLogin : handleLogout}>
                        {!isAuthenticated ? 'inloggen' : 'uitloggen'}
                    </button>
                </form>
                <p>Ander formulieren</p>
                <Cubes
                    button_1="Een bierliefhebber" navigate_1="/inschrijfformulier_particulier"
                    button_2="Een brouwer" navigate_2="/inschrijfformulier_producent"
                    button_3="Een nieuw biertje" navigate_3="/inschrijfformulier_product"
                    button_4="Home" navigate_4="/"
                />
            </div>
        </>
    );
}


    export default Login_Page;
