import React, { useContext, useState } from 'react';
import './Home.css';
import Cubes from '../../components/cubes/Cubes.jsx';
import Slider from '../../components/slider/Slider.jsx';
import slider_Img_One from '../../assets/rockcity/rockcity_products.png';
import slider_Img_Two from '../../assets/rockcity/rockcity_brewer.png';
import slider_Img_Three from '../../assets/rockcity/rockcity_taps.png';
import slider_Img_Four from '../../assets/rockcity/rockcity_ketel.jpg';



import {NavLink, useNavigate} from "react-router-dom";
import AuthenticationContext from "../../context/AuthenticationContext.jsx";

function Home() {
    const { isAuthenticated, logout } = useContext(AuthenticationContext);
    const navigate = useNavigate();
    const [slideIndex, setSlideIndex] = useState(1);

    const slider_Img_1 = slider_Img_One;
    const slider_Img_2 = slider_Img_Two;
    const slider_Img_3 = slider_Img_Three;
    const slider_Img_4 = slider_Img_Four;

    // const handleLogout = () => {
    //     logout();
    //     navigate('/');
    // };

    return (
        <>
            <div className="title-content">
                <Slider
                    slider_Img1={slider_Img_1}
                    slider_Img2={slider_Img_2}
                    slider_Img3={slider_Img_3}
                    slider_Img4={slider_Img_4}
                    slideIndex={slideIndex}
                    setSlideIndex={setSlideIndex}
                />
                <div className="text-content">
                    <div className="informatie_container">
                        <h1>Welcome {isAuthenticated ? "matthijs van der maas" : " Bier liefhebbers"}</h1>
                        <h4> Bij <em>beers&brewskys</em> de plek voor bierliefhebbers om hun passie voor dit mooie product te delen met iedereen, dus schrijf je in en kom erbij</h4>
                        <div>
                            {!isAuthenticated ? (
                                <>
                                    <button className=" bttn bttn_small" onClick={() => { window.location.href = "/login_page"; }}>
                                        Inloggen
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className=" bttn bttn_small" onClick={() => { logout(); window.location.href = "/"; }}>
                                        Uitloggen
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <Cubes
                    button_1={isAuthenticated ? "Mijn bieren" : "Inschrijven"}
                    navigate_1={isAuthenticated ? "/mijn_bieren" : "/inschrijfformulier"}
                    button_2={isAuthenticated ? "Algemene bierkennis": "Inloggen"}
                    navigate_2={isAuthenticated ? "/Productie_Informatie#algemene-informatie": "/login_page"}
                    button_3="Al onze producten"
                    navigate_3="/alle_producten"
                    button_4="Hoe maak je bier"
                    navigate_4="/Productie_Informatie"
                />

            </div>
        </>
    );
}

export default Home;
