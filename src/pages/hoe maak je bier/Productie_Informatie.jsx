import React from 'react';
import './Productie_Informatie.css';
import wheat from "../../assets/logos and backgrounds/wheat.png";
import Text_component from "../../components/texts_components/Text-component.jsx";
import alle_soorten from "../../assets/hoe maak je bier/alle_off_them.png"
import hop from "../../assets/hoe maak je bier/hop.png"
import malt from "../../assets/hoe maak je bier/malt.png"
import het_Proces from "../../assets/hoe maak je bier/staps_Of_Production.png"
import het_Proces_Img from "../../assets/hoe maak je bier/staps_Of_Production_Img.png"
import water from "../../assets/hoe maak je bier/water.png"
import gist from "../../assets/hoe maak je bier/yeast.png"

function Productie_Informatie() {
    return (
        <div className="informatie_container">
            <h1>productie informatie</h1>
            <div className="text-row content_2 ">
                <Text_component
                    Text_Title="Bier brouwen"
                    Text_Message1="test text1"
                />
                <div className="text-image">
                    <img src={het_Proces} alt="Het brouwproces"/>
                </div>
            </div>
            <div className="text-row content_2 ">
                <Text_component
                    Text_Title="IBU"
                    Text_Message1=" International Bitterness Units = IBU waarde"
                />
                <div className="text-image">
                    <img src={het_Proces} alt="IBU Waarde"/>
                </div>
            </div>
            <div className="text-row content_1 ">
                <Text_component
                    Text_Title="Hop"
                    Text_Message1="Het kruidenbuideltje van de brouwer! Zorgt voor smaak en houdbaarheid van het bier. Zorg voor meer stabiliteit in het schuim, door de Alfa zuren. Er zijn 250 soorten hop, de bitterhop en de aromahop."
                />
                <div className="text-image">
                    <img src={hop} alt="Hop"/>
                </div>
            </div>
            <div className="text-row content_1 ">
                <Text_component
                    Text_Title="Mout"
                    Text_Message1="test text1"
                />
                <div className="text-image">
                    <img src={malt} alt="Mout"/>
                </div>
            </div>
            <div className="text-row content_1 ">
                <Text_component
                    Text_Title="Het belangrijkste ingrediënt water"
                    Text_Message1="test text1"
                />
                <div className="text-image">
                    <img src={water} alt="Water"/>
                </div>
            </div>
            <div className="text-row content_1 ">
                <Text_component
                    Text_Title="Gist"
                    Text_Message1="test text1"
                />
                <div className="text-image">
                    <img src={gist} alt="Gist"/>
                </div>
            </div>
            <div className="text-row content_1 ">
                <Text_component
                    Text_Title="Alles op een rij"
                    Text_Message1="test text1"
                />
                <div className="text-image">
                    <img src={het_Proces_Img} alt="Brouwproces Overzicht"/>
                </div>
            </div>
            <div className="text-row content_2 ">
                <Text_component
                    Text_Title="Biersoorten"
                    Text_Message1="test text1"
                />
                <div className="text-image">
                    <img src={alle_soorten} alt="Biersoorten"/>
                </div>
            </div>
        </div>
    );
}

export default Productie_Informatie;
