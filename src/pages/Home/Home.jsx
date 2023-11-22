import React, { useContext, useState } from 'react';
import './Home.css';
import Cubes from '../../components/cubes/Cubes';
import Slider from '../../components/slider/Slider';
import slider_Img_One from '../../assets/brewers/rockcity_products.png';
import slider_Img_Two from '../../assets/brewers/rockcity_brewer.png';
import slider_Img_Three from '../../assets/brewers/rockcity_taps.png';
import slider_Img_Four from '../../assets/brewers/rockcity_ketel.jpg';



import {NavLink, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.jsx";

function Home() {
    const { isAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [slideIndex, setSlideIndex] = useState(1);



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
                        <h1>Welcome {isAuth ? "matthijs van der maas" : " Bier liefhebbers"}</h1>
                        <h4> Bij <em>beers&brewskys</em> de plek voor bierliefhebbers om hun passie voor dit mooie product te delen met iedereen, dus schrijf je in en kom erbij</h4>
                        <p>zet eventueel een lekker muziekje op  met<NavLink to="/drankorgel"><strong>  Het drankorgel</strong></NavLink>.</p>
                        <div>
                            {!isAuth ? (
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
                    button_1={isAuth ? "Mijn bieren" : "Inschrijven"}
                    navigate_1={isAuth ? "/my_bieren" : "/inschrijfformulier"}
                    button_2={isAuth ? "Algemene bierkennis": "Inloggen"}
                    navigate_2={isAuth ? "/Productie_Informatie#algemene-informatie": "/signIn"}
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
