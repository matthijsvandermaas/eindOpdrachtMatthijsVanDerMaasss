import React, {useState, useEffect} from 'react';
import './App.css';
import logoImage from './assets/logos and backgrounds/B & B logo2.jpg';
import logoImage_Klein from './assets/logos and backgrounds/B & B logo2 klein.jpg';
import wheat from './assets/logos and backgrounds/wheat.png';
import Navbar from "./components/navBar/Navbar.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import Inschrijf_Navigatie from "./pages/inschrijving_Navigatie/inschrijf_Navigatie.jsx";
import Inschrijf_Form_Particulier from "./components/inschrijfform/InschrijfFormParticulier.jsx";
import Inschrijf_Form_Producer from "./components/inschrijfform/InschrijfFormProducer.jsx";
import Productie_Informatie from "./pages/hoe maak je bier/Productie_Informatie.jsx";
import Inschrijf_Form_Product from "./components/inschrijfform/InschrijfFormProduct.jsx";
import Alle_bieren from "./pages/alle_bieren/Alle_Producten.jsx";
import Login_page from "./pages/login_page/Login_Page.jsx";
import Error from "./pages/error/Error.jsx";
import Mijn_bieren from "./pages/mijn_bieren/Mijn_Bieren.jsx";
import axios from "axios";
import Home from '../src/pages/HOME/Home.jsx';
import AgeVerification from '../src/components/leeftijds_check/AgeVerification.jsx';
import insta from '../src/assets/general pics/insta.jpeg';

axios.defaults.withCredentials = true;
function App() {

    const [activeTab, setActiveTab] = useState('Home');
    const [logoSrc, setLogoSrc] = useState("");
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setLogoSrc(logoImage_Klein);
            } else {
                setLogoSrc(logoImage);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [logoImage, logoImage_Klein]);
return (
        <div className="outer-outer-container">
            <div className="outer-container">
                <div className="header-container">
                    <div className="headerlogo-container">
                        <NavLink to="/"><img className="logo-img" src={logoSrc}  alt="B&B Logo" /></NavLink>
                        <div className="dropdown">
                          <button className="navBar-bttn"><img className="small_logo" src={wheat} alt="wheat-logo"/>
                                <h1>menu</h1></button>
                            <Navbar activeTab={activeTab} handleTabChange={handleTabChange}/>

                        </div>
                    </div>
                </div>
                <div className="main-container">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route exact path="/" element={<AgeVerification/>} />
                        <Route path="/inschrijfformulier" element={<Inschrijf_Navigatie />} />
                        <Route path="/inschrijfformulier_particulier" element={<Inschrijf_Form_Particulier />} />
                        <Route path="/inschrijfformulier_producent" element={<Inschrijf_Form_Producer />} />
                        <Route path="/mijn_bieren" element={<Mijn_bieren />} />
                        <Route path="/inschrijfformulier_product" element={<Inschrijf_Form_Product />} />
                        <Route path="/Productie_Informatie" element={<Productie_Informatie />} />
                        <Route path="/alle_producten" element={<Alle_bieren />} />
                        <Route path="/login_page" element={<Login_page />} />
                        <Route path="/*" element={<Error />} />
                    </Routes>
                </div>
                <div className="footer-container background">
                    <div className="footer-background">
                        <p>This page is made possible by <a href="https://www.novi.nl/" target="_blank">NOVI hogeschool</a>.</p>
                        <p>en</p>
                        <p>Trademark <em>Van Der Maas P&C™</em></p>
                        <span>
                        <NavLink to="https://www.instagram.com/beersenbrewskys/" target="_blank"><img className="smaller_logo" src={insta} alt="instagram logo" /></NavLink>
                        <NavLink to="http://localhost:5173/" target="_blank"><img className="smaller_logo" src={logoImage_Klein} alt="logo" /></NavLink>
                        </span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
