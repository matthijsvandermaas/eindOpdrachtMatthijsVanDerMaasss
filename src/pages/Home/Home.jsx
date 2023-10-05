import React from 'react';
import './Home.css';
import wheat from "../../assets/wheat.png";
import Text_component from "../../components/texts_components/Text-component.jsx";
import Cubes from "../../components/cubes/Cubes.jsx";

function Home() {
    return (
        <>
            <div className="title-content">
                <h1>Welcome Bier liefhebbers</h1>
                <div className="text-content content_1">
                    <div className="informatie_container">
                        <div className="text-row content_1">
                            <Text_component
                                Text_Title="test titel1"
                                Text_Message1="test text1"
                            />
                            <div className="text-image">
                                <img src={wheat} alt="afbeelding" />
                            </div>
                        </div>
                    </div>
                </div>
             <Cubes
                button_1="inschrijven"
                navigate_1="inschrijfformulier"
                button_2="inloggen"
                navigate_2=""
                button_3="al onze producten"
                navigate_3="alle_producten"
                button_4="hoe maak je bier"
                navigate_4="Productie_Informatie"
             />
            </div>
        </>
    );
}
export default Home;
