import * as React from 'react';
import TextComponent from "../../components/texts_components/Text-component.jsx";


function Feedback() {
    return (
        <div className="informatie_container border_top_bottom">
            <div className="background">
            <TextComponent
                Text_Title={["Welke feedback heb je voor ons?",]}
                Text_Header={["Heb je een vraag, opmerking of klacht?,laat het ons weten"]}
            />
            <input type="text" className="text-input" placeholder="text...." />
            <button type="submit" className="bttn">Verzenden</button>
            </div>
        </div>
    );
}

export default Feedback;
