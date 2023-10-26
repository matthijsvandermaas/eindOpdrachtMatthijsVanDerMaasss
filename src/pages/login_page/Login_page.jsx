import React, { useContext, useState } from 'react';
import './Login_Page.css';
import Cubes from "../../components/cubes/Cubes.jsx";
import Slider from '../../components/slider/Slider.jsx';
import slider_Img_One from '../../assets/hoe maak je bier/hop.png';
import slider_Img_Two from '../../assets/hoe maak je bier/yeast.png';
import slider_Img_Three from '../../assets/hoe maak je bier/malt.png';
import slider_Img_Four from '../../assets/hoe maak je bier/gist.png';
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../context/AuthenticationContext.jsx";

function Login() {
    const { isAuthentication, logout } = useContext(AuthenticationContext);
    const { login } = useContext(AuthenticationContext);

    const [slideIndex, setSlideIndex] = useState(1);
    const slider_Img_1 = slider_Img_One;
    const slider_Img_2 = slider_Img_Two;
    const slider_Img_3 = slider_Img_Three;
    const slider_Img_4 = slider_Img_Four;

    const handleLogout = () => {
        logout();
        // Voer hier navigatie uit (bijvoorbeeld naar "/inschrijfformulier_producent")
    };

    return (
        <>
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
                    <p>nog geen lid, kom erbij en<Link to="/inschrijfformulier"><strong> schrijf je in!</strong></Link></p>
                    <div>
                        {!isAuthentication ? (
                            <button type="submit" className="bttn" onClick={login}>
                                inloggen
                            </button>
                        ) : (
                            <button type="button" className="bttn" onClick={logout}>
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
        </>
    );
}

export default Login;
