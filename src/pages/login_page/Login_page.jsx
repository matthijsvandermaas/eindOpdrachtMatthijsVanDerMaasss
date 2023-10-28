import React, {useContext, useState} from 'react';
import {useNavigate, useHistory, Link} from 'react-router-dom';
import './Login_Page.css';
import Cubes from '../../components/cubes/Cubes.jsx';
import Slider from '../../components/slider/Slider.jsx';
import slider_Img_One from '../../assets/hoe maak je bier/hop.png';
import slider_Img_Two from '../../assets/hoe maak je bier/yeast.png';
import slider_Img_Three from '../../assets/hoe maak je bier/malt.png';
import slider_Img_Four from '../../assets/hoe maak je bier/gist.png';
import { AuthenticationContext } from '../../utils/AuthenticationContext.js';

const Login = () => {
    const { isAuthenticated, login, logout } = useContext(AuthenticationContext);
    const history = useHistory();
    const navigate = useNavigate();

    const [slideIndex, setSlideIndex] = useState(1);
    const slider_Img_1 = slider_Img_One;
    const slider_Img_2 = slider_Img_Two;
    const slider_Img_3 = slider_Img_Three;
    const slider_Img_4 = slider_Img_Four;

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleLogin = () => {
        login();
        navigate('/mijn_bieren');
    };

    return (
        <div className="outer-login-container">
            <Slider
                slider_Img1={slider_Img_1}
                slider_Img2={slider_Img_2}
                slider_Img3={slider_Img_3}
                slider_Img4={slider_Img_4}
                slideIndex={slideIndex}
                setSlideIndex={setSlideIndex}
            />
            <h1>Gezellig dat je er bent, kom je inschrijven of inloggen?</h1>
            <form className="form-content background-login">
                <div>
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <p>
                    nog geen lid, kom erbij en<Link to="/inschrijfformulier"><strong> schrijf je in!</strong></Link>
                </p>
                <div>
                    {!isAuthenticated ? (
                        <button type="submit" className="bttn" onClick={handleLogin}>
                            inloggen
                        </button>
                    ) : (
                        <button type="button" className="bttn" onClick={handleLogout}>
                            logout
                        </button>
                    )}
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

export default Login;
