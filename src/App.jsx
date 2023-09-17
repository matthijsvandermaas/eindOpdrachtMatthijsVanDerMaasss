import React, { useState } from 'react';
import './App.css';
import './constants/background.css';
import './helpers/Helpers.js';
import logoImage from './assets/B & B logo2.jpg';
import wheat from './assets/wheat.png';
import Navbar from "./components/navBar/Navbar.jsx";
import Inschrijf_Form from "./components/inschrijfform/Inschrijf_Form.jsx";
import Text from "./components/texts_components/Text-component.jsx";

function App() {
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="outer-outer-container">
            <div className="outer-container">
                <div className="header-container">
                    <div className="headerlogo-container">
                        <img className="logo-img" src={logoImage} alt="B&B Logo" />

                        <div className="dropdown">
                            <button className="navBar-bttn"><img className="wheat_logo" src={wheat} alt="wheat-logo" />
                                <p>menu</p></button>
                            <Navbar activeTab={activeTab} handleTabChange={handleTabChange} />

                        </div>
                    </div>
                </div>

                <div className="main-container">
                    <div className="text">
                        <h1>Welcome Bier liefhebbers</h1>
                        <div className="text-content">
                            <div className="text-text">
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text... Het is de gecorrigeerde tekst van je welkomstboodschap.
                                </p>
                            </div>
                            <div className="text-image">
                                <img src={wheat} alt="afbeelding" />
                            </div>
                        </div>
                    </div>

                    {/*<div className="signin-form">*/}
                    {/*    <Inschrijf_Form />*/}
                    {/*</div>*/}
                </div>
                <div className="footer-container">
                    <div className="footer-background">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
