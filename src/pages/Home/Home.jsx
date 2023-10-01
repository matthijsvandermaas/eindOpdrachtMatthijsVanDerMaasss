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
                    <Text_component
                        Text_Header="dit is heel veel trekast en doet eigenlijk nietdit is heelveel trekast en doet eigenlijk nietssdit is heelveel trekast en doet eigenlijk nietsdit is heelveel trekast en doet eigenlijk niets"
                    />

                    <div className="text-image">
                    <img src={wheat} alt="wheat_img"/>
                    </div>
                    {/*<button type="button" className="bttn" onClick={() => navigate("/inloggen")}>product</button>*/}

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
