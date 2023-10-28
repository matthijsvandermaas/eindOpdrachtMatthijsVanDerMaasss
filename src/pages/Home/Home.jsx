import React, { useContext, useState } from 'react';
import './Home.css';
import Cubes from '../../components/cubes/Cubes.jsx';
import Slider from '../../components/slider/Slider.jsx';
import slider_Img_One from '../../assets/hoe maak je bier/hop.png';
import slider_Img_Two from '../../assets/hoe maak je bier/yeast.png';
import slider_Img_Three from '../../assets/hoe maak je bier/malt.png';
import slider_Img_Four from '../../assets/hoe maak je bier/gist.png';
import {AuthenticationContext} from "../../utils/AuthenticationContext.jsx";


import {NavLink, useNavigate} from "react-router-dom";

function Home() {
    const { isAuthenticated, logout } = useContext(AuthenticationContext);
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
