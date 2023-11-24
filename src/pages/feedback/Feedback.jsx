import React from 'react';
import TextComponent from "../../components/texts_components/Text-component";
import Rating from "../../components/Rating_system/Rating";
import { useState} from "react";
import Cubes from "../../components/cubes/Cubes";

function Feedback() {

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
                    button_1="Het Drankorgel"
                    navigate_1= "/drankorgel"
                    button_2= "Algemene bierkennis"
                    navigate_2="/Productie_Informatie#algemene-informatie"
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
