import React from 'react';
import './Productie_Informatie.css';
import wheat from "../../assets/logos and backgrounds/wheat.png";
import Text_component from "../../components/texts_components/Text-component.jsx";

function Productie_Informatie() {
    return (
        <div className="informatie_container">
                <h1>productie informatie</h1>
                    <div className="text-row content_1 ">
                        <Text_component
                            Text_Title="test titel1"
                            Text_Message1="test text1"
                        />
                        <div className="text-image">
                            <img src={wheat} alt="afbeelding"/>
                        </div>
                    </div>
            <div className="text-row content_2 ">
                <Text_component
                    Text_Title="test titel1"
                    Text_Message1="test text1"
                />
                <div className="text-image">
                    <img src={wheat} alt="afbeelding"/>
                </div>
            </div>
                </div>


    );
}

export default Productie_Informatie;
