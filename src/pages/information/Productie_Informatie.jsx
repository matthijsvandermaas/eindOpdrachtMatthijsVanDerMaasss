import React from 'react';
import './Productie_Informatie.css';
import wheat from "../../assets/wheat.png";
import Text_component from "../../components/texts_components/Text-component.jsx";

function Productie_Informatie() {
    return (
        <>

            <article className="text">
                <h1 className="h1">Hoe maak je bier?</h1>
                <div className="text-content text_1">
                    <Text_component
                        Text_Title="test titel1"
                        Text_Header="test check"
                        Text_message="test text"
                    />
                    <div className="text-image">
                        <img src={wheat} alt="afbeelding"/>
                    </div>
                </div>
                <div className="text-content text_2">
                    <Text_component
                        Text_Title="titel2"
                        Text_Header="test header2"
                        Text_message="test text2"
                    />
                    <div className="text-image">
                        <img src={wheat} alt="afbeelding" />
                    </div>
                </div>
            </article>

        </>
    );
}

export default Productie_Informatie;
