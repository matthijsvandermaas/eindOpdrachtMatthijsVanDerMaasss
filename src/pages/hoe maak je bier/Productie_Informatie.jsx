import React, { useState } from 'react';
import './Productie_Informatie.css';
import Text_component from "../../components/texts_components/Text-component.jsx";
import alle_soorten from "../../assets/hoe maak je bier/alle_off_them.png"
import hop from "../../assets/hoe maak je bier/hop.png"
import malt from "../../assets/hoe maak je bier/malt.png"
import het_Proces from "../../assets/hoe maak je bier/staps_Of_Production.png"
import water from "../../assets/hoe maak je bier/water.png"
import gist from "../../assets/hoe maak je bier/yeast.png"

function Productie_Informatie() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <>
        <div className="informatie_container background">
            <h1>Hoe maak je bier?</h1>
            <div className="text-row content_2 border_top_bottom">
                <div className="text-component-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Text_component
                        Text_Title="Bier brouwen"
                        Text_Message1="test text1" />
                    {isDropdownOpen && (
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
                    <img src={het_Proces} alt="Het brouwproces"/>
                </div>
            </div>
            <div className="text-row content_2 border_top_bottom">
                <div className="text-component-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Text_component
                        Text_Title="verschillende soorten Bier"
                        Text_Message1="test text1" />
                    {isDropdownOpen && (
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
                    <img src={hop} alt="vele soorten bier"/>
                </div>
            </div>
            <h2>het proces</h2>
            <div className="text-row content_1 border_top_left">
                <div className="text-component-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Text_component
                        Text_Title="IBU"
                        Text_Message1="test text1" />
                    {isDropdownOpen && (
                        <div className="submenu-content">
                            <Text_component
                                Text_Message2="test text2"
                                Text_Message3="test text3" />
                        </div>
                    )}
                </div>

                <div className="text-image">
                    <img src={het_Proces} alt="IBU_logo"/>
                </div>
            </div>
            <div className="text-row content_1 border_left">
                <div className="text-component-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Text_component
                        Text_Title="Hop"
                        Text_Message1="test text1" />
                    {isDropdownOpen && (
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
                <div className="text-component-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Text_component
                        Text_Title="mout"
                        Text_Message1="test text1" />
                    {isDropdownOpen && (
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
                <div className="text-component-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Text_component
                        Text_Title="Het belangrijkste ingredient, water!"
                        Text_Message1="test text1" />
                    {isDropdownOpen && (
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
                <div className="text-component-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Text_component
                        Text_Title="Gist"
                        Text_Message1="test text1" />
                    {isDropdownOpen && (
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
        </div>
        </>
    );
}

export default Productie_Informatie;
