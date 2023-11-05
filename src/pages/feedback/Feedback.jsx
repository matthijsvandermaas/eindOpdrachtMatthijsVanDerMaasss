import * as React from 'react';
import TextComponent from "../../components/texts_components/Text-component.jsx";
import Rating from "../../components/Rating_system/Rating.jsx";
import {useState} from "react";


function Feedback() {
    const [rating, setRating] = useState(0);
    const handleStarClick = (starValue) => {
        setRating(starValue);
    };
    return (
        <div className="informatie_container border_top_bottom">
            <div className="background">
                <h1>Welke feedback heb je voor ons?</h1>
                <Rating ratingValue={""} onClick={handleStarClick}
                        titel="Geef je mening">
                </Rating>
            <TextComponent
                Text_Header={["Heb je een vraag, opmerking of klacht?,laat het ons weten"]}
            />
            <input type="text" className="text-input" placeholder="text...." />
            <button type="submit" className="bttn">Verzenden</button>

            </div>
        </div>
    );
}

export default Feedback;
