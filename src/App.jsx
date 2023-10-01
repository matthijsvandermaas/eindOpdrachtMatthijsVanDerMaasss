// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import './App.css';
import './constants/background.css';
import logoImage from './assets/B & B logo2.jpg';
import wheat from './assets/wheat.png';
// import dependency from './assets/dependency-tree.png';
import Navbar from "./components/navBar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import Inschrijf_Navigatie from "./pages/Inschrijving_Navigatie/inschrijf_Navigatie.jsx";
import Inschrijf_Form_Particulier from "./components/inschrijfform/Inschrijf_Form_Particulier.jsx";
import Inschrijf_Form_Producer from "./components/inschrijfform/Inschrijf_Form_Producer.jsx";
import Productie_Informatie from "./pages/information/Productie_Informatie.jsx";
import Inschrijf_Form_Product from "./components/inschrijfform/Inschrijf_Form_Product.jsx";
import Alle_bieren from "./pages/alle_bieren/Alle_bieren.jsx";
// import Mijn_bieren from "./pages/information/Mijn_bieren.jsx";
// import Mijn_gegevens from "./pages/information/Mijn_pagina.jsx";
import Carousel from "./components/carousel/Carousel.jsx";






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
                        <NavLink to="/"><img className="logo-img" src={logoImage} alt="B&B Logo" /></NavLink>
                        <div className="dropdown">
                            <button className="navBar-bttn"><img className="wheat_logo" src={wheat} alt="wheat-logo"/>
                                <h2>menu</h2></button>
                            <Navbar activeTab={activeTab} handleTabChange={handleTabChange}/>

                        </div>
                    </div>
                </div>

                <div className="main-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/inschrijfformulier" element={<Inschrijf_Navigatie />} />
                        <Route path="/inschrijfformulier_particulier" element={<Inschrijf_Form_Particulier />} />
                        <Route path="/inschrijfformulier_producent" element={<Inschrijf_Form_Producer />} />
                        <Route path="/Productie_Informatie" element={<Productie_Informatie />} />
                        <Route path="/inschrijfformulier_product" element={<Inschrijf_Form_Product />} />
                        <Route path="/alle_producten" element={<Alle_bieren />} />
                        <Route path="/carousel" element={<Carousel />} />
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
