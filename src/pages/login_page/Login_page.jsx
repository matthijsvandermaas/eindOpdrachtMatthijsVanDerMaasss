import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login_Page.css';
import axios from 'axios';
import Slider from "../../components/slider/Slider.jsx";
import slider_Img_One from "../../assets/hoe maak je bier/hop.png";
import slider_Img_Two from "../../assets/hoe maak je bier/yeast.png";
import slider_Img_Three from "../../assets/hoe maak je bier/malt.png";
import slider_Img_Four from "../../assets/hoe maak je bier/gist.png";
import AuthenticationContext from "../../context/AuthenticationContext.jsx";
import Cubes from "../../components/cubes/Cubes.jsx";


function Login_Page() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [slideIndex, setSlideIndex] = useState(1);
    const {isAuthenticated, login, logout} = useContext(AuthenticationContext);
//slider images
    const slider_Img_1 = slider_Img_One;
    const slider_Img_2 = slider_Img_Two;
    const slider_Img_3 = slider_Img_Three;
    const slider_Img_4 = slider_Img_Four;

    async function handleLogin(e) {
        toggleError(false);
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email:{email},
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
    const handleLogout = () => {
        try {
            const response = axios.post('http://localhost:3000/logout');
            console.log(response.data);
            logout();
            navigate('/');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }



    return (
        <>
            <div className="outer-login-container">
                <h2>{!isAuthenticated ? 'Inloggen' : 'Uitloggen'}</h2>
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
                <form onSubmit={handleLogin} className="background-login">
                    <div>
                        <label htmlFor="email-field">E-mailadres:
                            <input type="email" id="email-field" name="email" value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password-field">Wachtwoord:
                            <input type="password" id="password-field" name="password" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                        <button className="bttn" onClick={!isAuthenticated ? handleLogin : handleLogout}>
                            {!isAuthenticated ? 'inloggen' : 'uitloggen'}
                        </button>
                    </div>
                    <h4>Ben je nog geen lid? Kom erbij en <Link to="/inschrijfformulier"><strong> schrijf je in</strong></Link>
                    </h4>
                    {error && <h5 className="error">Combinatie van e-mailadres en wachtwoord is onjuist</h5>}
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
