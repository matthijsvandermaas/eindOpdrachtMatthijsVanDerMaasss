import React, { useContext, useState } from 'react';
import './Home.css';
import Cubes from '../../components/cubes/Cubes';
import Slider from '../../components/slider/Slider';
import {AuthContext} from "../../context/AuthContext";
import slider_Img_One from '../../assets/brewers/rockcity_products.png';
import slider_Img_Two from '../../assets/brewers/rockcity_brewer.png';
import slider_Img_Three from '../../assets/brewers/rockcity_taps.png';
import slider_Img_Four from '../../assets/brewers/rockcity_ketel.jpg';
import {NavLink, useNavigate} from "react-router-dom";

function Home() {
    const { isAuth, logout } = useContext(AuthContext);
    const [slideIndex, setSlideIndex] = useState(1);
    const navigate = useNavigate();
    const username = localStorage.getItem('username');

    return (
        <>
            <div className="title-content">
                <Slider
                    slider_Img1={slider_Img_One}
                    slider_Img2={slider_Img_Two}
                    slider_Img3={slider_Img_Three}
                    slider_Img4={slider_Img_Four}
                    slideIndex={slideIndex}
                    setSlideIndex={setSlideIndex}
                />
                <div className="text-content">
                    <div className="informatie_container">
                        <h1>Home</h1>
                        <h2>Welkom {username || "bierliefhebber "}, bij Beers&Brewskys de plek voor bierliefhebbers om hun passie voor dit mooie product te delen met iedereen, dus schrijf je in en kom erbij</h2>
                        <p>zet eventueel een lekker muziekje op  met<NavLink to="/drankorgel"><u>  Het drankorgel</u></NavLink>.</p>
                        <div>
                            <button className="bttn bttn_small" onClick={() => navigate('/AgeVerification')}>
                                Leeftijd check
                            </button>
                            {!isAuth ? (
                                <>
                                    <button className=" bttn bttn_small" onClick={() => { window.location.href = "/SignIn"; }}>
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
                    button_1="Hoe maak je bier"
                    navigate_1="/productie_Informatie"
                    button_2="Het drankorgel"
                    navigate_2="/drankorgel"
                    button_3="Home"
                    navigate_3="/home"
                    button_4="News"
                    navigate_4="/news"
                />

            </div>
        </>
    );
}
export default Home;
