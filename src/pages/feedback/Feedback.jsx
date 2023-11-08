import * as React from 'react';
import TextComponent from "../../components/texts_components/Text-component.jsx";
import Rating from "../../components/Rating_system/Rating.jsx";
import {useContext, useState} from "react";
import Cubes from "../../components/cubes/Cubes.jsx";
import AuthenticationContext from "../../context/AuthenticationContext.jsx";


function Feedback() {
    const { isAuthenticated, logout } = useContext(AuthenticationContext);
    const [rating, setRating] = useState(0);

    const handleStarClick = (starValue) => {
        setRating(starValue);
    };
    return (
        <>
        <div className="border_top_bottom text-component">
            <div className="background">
                <h1>Welke feedback heb je voor ons?</h1>
                <Rating ratingValue={"1"} onClick={handleStarClick}
                        titel="hop-rating">
                </Rating>
            <TextComponent
                Text_Header={["Heb je een vraag, opmerking of klacht?, laat het ons weten"]}
            />
            <input type="text" className="text-input" placeholder="text...." />
            <button type="submit" className="bttn">Verzenden</button>
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
        </div>

        </>
    );
}

export default Feedback;
