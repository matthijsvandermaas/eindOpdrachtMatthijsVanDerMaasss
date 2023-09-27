import React from 'react';
import './Productie_Informatie.css';
import wheat from "../../assets/wheat.png";
import Text_component from "../../components/texts_components/Text-component.jsx";


function Productie_Informatie() {
    return (
        <>
            <h1>productie informatie</h1>
            <article className="text">
                <div className="text-content, onderwerp_1">

                    <Text_component
                        Text_Title="test titel"
                        Text_message="test text"
                    >
                    </Text_component>
                    <div className="text-image">
                        <img src={wheat} alt="afbeelding"/>
                    </div>


                </div>
                <div className="text-content, onderwerp_1">

                    <Text_component
                        Text_Title="test titel2"
                        Text_message="test text2"
                    >
                    </Text_component>
                    <div className="text-image">
                        <img src={wheat} alt="afbeelding" />
                    </div>


                </div>
            </article>
        </>
    );

}

export default Productie_Informatie;
