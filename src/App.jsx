import React, {useState} from 'react';
import './App.css';
import './constants/background.css';
import logoImage from './assets/B & B logo2.jpg';
import wheat from './assets/wheat.png';
import Navbar from "./components/navBar/Navbar.jsx";
import Inschrijf_Form from "./components/inschrijfform/Inschrijf_Form.jsx";
import Text from "./components/texts_components/Text-component.jsx";
import Home from "./pages/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";


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
                        <img className="logo-img" src={logoImage} alt="B&B Logo"/>

                        <div className="dropdown">
                            <button className="navBar-bttn"><img className="wheat_logo" src={wheat} alt="wheat-logo"/>
                                <p>menu</p></button>
                            <Navbar activeTab={activeTab} handleTabChange={handleTabChange}/>

                        </div>
                    </div>
                </div>

                <div className="main-container">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/inschrijfformulier" element={<Inschrijf_Form/>}/>
                        </Routes>
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
