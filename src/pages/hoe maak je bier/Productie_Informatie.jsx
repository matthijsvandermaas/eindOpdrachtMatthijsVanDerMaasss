import React, { useState } from 'react';
import './Productie_Informatie.css';
import '../../components/navBar/NavBar.css';
import Text_component from "../../components/texts_components/Text-component.jsx";

import hop from "../../assets/hoe maak je bier/hop.png"
import malt from "../../assets/hoe maak je bier/malt.png"
import het_Proces1 from "../../assets/hoe maak je bier/staps_Of_Production.png"
import het_Proces2 from "../../assets/hoe maak je bier/staps_Of_Production_Img.png"
import water from "../../assets/hoe maak je bier/water.png"
import gist from "../../assets/hoe maak je bier/yeast.png"
import all_Soorten_Bieren from"../../assets/hoe maak je bier/all_kinds_of_beer.png";
import IBU from"../../assets/hoe maak je bier/ibu.jpg";

function Productie_Informatie() {

    const [dropdownStates, setDropdownStates] = useState({
        bierBrouwen: false,
        verschillendeSoortenBier: false,
        ibu: false,
        hop: false,
        mout: false,
        water: false,
        gist: false
    });

    const handleMouseEnter = (item) => {
        setDropdownStates((prevStates) => ({
            ...prevStates,
            [item]: true
        }));
    };

    const handleMouseLeave = (item) => {
        setDropdownStates((prevStates) => ({
            ...prevStates,
            [item]: false
        }));
    };


    return (
        <>
        <div className="informatie_container background">
            <h1>Hoe maak je bier?</h1>
            <section id="algemene-informatie">
            <h2>Algemeen informatie</h2>

            <div className="text-row content_2 border_top_left">
                <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('bierBrouwen')} onMouseLeave={() => handleMouseLeave('bierBrouwen')}>
                    <Text_component
                        Text_Title="Bier brouwen"
                        Text_Header="test text1" />
                    {dropdownStates.bierBrouwen && (
                        <div className="submenu-content">
                            <Text_component
                                Text_Message2="scmkengvksnfeiughwdlknsdvjbhnlok
                                nvklnvrojngrfkndjit"
                                Text_Message3="cdnifngjfhdojbkfbg knsdnfdg

                                fdsklmdslkfdndfndkfj" />
                        </div>
                    )}
                </div>
                <div className="text-image">
                    <img src={het_Proces1} alt="Het brouwproces"/>
                    <img src={het_Proces2} alt="Het brouwproces"/>
                </div>
            </div>
            <div className="text-row content_1 border_left">
                <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('ibu')} onMouseLeave={() => handleMouseLeave('ibu')}>
                    <Text_component
                        Text_Title="IBU"
                        Text_Header="test text1" />
                    {dropdownStates.ibu && (
                        <div className="submenu-content">
                            <Text_component
                                Text_Message2="test text2"
                                Text_Message3="test text3" />
                        </div>
                    )}
                </div>

                <div className="text-image">
                    <img src={IBU} alt="IBU_logo"/>
                </div>
            </div>
            <div className="text-row content_2 border_bottom_left">
                <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('verschillendeSoortenBier')} onMouseLeave={() => handleMouseLeave('verschillendeSoortenBier')}>
                    <Text_component
                        Text_Title="verschillende soorten Bier"
                        Text_Header="test text1" />
                    {dropdownStates.verschillendeSoortenBier && (
                        <div className="submenu-content">
                            <Text_component
                                Text_Message2="scmkengvksnfeiughwdlknsdvjbhnlok
                                nvklnvrojngrfkndjit"
                                Text_Message3="cdnifngjfhdojbkfbg knsdnfdg

                                fdsklmdslkfdndfndkfj" />
                        </div>
                    )}
                </div>
                <div className="text-image">
                    <img src={all_Soorten_Bieren} alt="vele soorten bier"/>
                </div>
            </div>
            </section>
            <section id="het-proces">
            <h2>het brouw proces</h2>

            <div className="text-row content_1 border_top_left">
                <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('hop')} onMouseLeave={() => handleMouseLeave('hop')}>
                    <Text_component
                        Text_Title="Hop"
                        Text_Header="test text1" />
                    {dropdownStates.hop && (
                        <div className="submenu-content">
                            <Text_component
                                Text_Message2="test text2"
                                Text_Message3="test text3" />
                        </div>
                    )}
                </div>

                <div className="text-image">
                    <img src={hop} alt="Hop"/>
                </div>
            </div>
            <div className="text-row content_1 border_left">
                <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('mout')} onMouseLeave={() => handleMouseLeave('mout')}>
                    <Text_component
                        Text_Title="mout"
                        Text_Header="test text1" />
                    {dropdownStates.mout && (
                        <div className="submenu-content">
                            <Text_component
                                Text_Message2="test text2"
                                Text_Message3="test text3" />
                        </div>
                    )}
                </div>

                <div className="text-image">
                    <img src={malt} alt="mout"/>
                </div>
            </div>
            <div className="text-row content_1 border_left">
                <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('water')} onMouseLeave={() => handleMouseLeave('water')}>
                    <Text_component
                        Text_Title="Het belangrijkste ingredient, water!"
                        Text_Header="test text1" />
                    {dropdownStates.water && (
                        <div className="submenu-content">
                            <Text_component
                                Text_Message2="test text2"
                                Text_Message3="test text3" />
                        </div>
                    )}
                </div>

                <div className="text-image">
                    <img src={water} alt="water"/>
                </div>
            </div>
            <div className="text-row content_1 border_bottom_left">
                <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('gist')} onMouseLeave={() => handleMouseLeave('gist')}>
                    <Text_component
                        Text_Title="Gist"
                        Text_Header="test text1" />
                    {dropdownStates.gist && (
                        <div className="submenu-content">
                            <Text_component
                                Text_Message2="test text2"
                                Text_Message3="test text3" />
                        </div>
                    )}
                </div>

                <div className="text-image">
                    <img src={gist} alt="gist"/>
                </div>
            </div>
                </section>
        </div>
        </>
    );
}

export default Productie_Informatie;
