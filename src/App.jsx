// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import './App.css';
import './constants/background.css';
import logoImage from './assets/B & B logo2.jpg';
import wheat from './assets/wheat.png';
// import empty_bear from './assets/used-empty-beer-glass.jpg'
// import dependency from './assets/dependency-tree.png';
import Login_icon from '../src/assets/login.svg'
import Navbar from "./components/navBar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import Inschrijf_Navigatie from "./pages/Inschrijving_Navigatie/inschrijf_Navigatie.jsx";
import Inschrijf_Form_Particulier from "./components/inschrijfform/Inschrijf_Form_Particulier.jsx";
import Inschrijf_Form_Producer from "./components/inschrijfform/Inschrijf_Form_Producer.jsx";
import Productie_Informatie from "./pages/hoe maak je bier/Productie_Informatie.jsx";
import Inschrijf_Form_Product from "./components/inschrijfform/Inschrijf_Form_Product.jsx";
import Alle_bieren from "./pages/alle_bieren/Alle_bieren.jsx";
import Login_page from "./pages/login_page/Login_page.jsx";
import Error from "./pages/error/Error.jsx";
// import Mijn_bieren from "./pages/hoe maak je bier/Mijn_bieren.jsx";
// import Mijn_gegevens from "./pages/hoe maak je bier/Mijn_pagina.jsx";







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
                                <h1>menu</h1></button>
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
                        <Route path="/login_page" element={<Login_page />} />
                        <Route path="/*" element={<Error />} />
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
