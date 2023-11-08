import React, {useState, useEffect} from 'react';
import './App.css';
import logoImage from './assets/logos and backgrounds/B & B logo2.jpg';
import logoImageKlein from './assets/logos and backgrounds/B & B logo2 klein.jpg';
import wheat from './assets/logos and backgrounds/wheat.png';
import Navbar from "./components/navBar/Navbar.jsx";
import {NavLink, Route, Routes, useNavigate} from "react-router-dom";
import InschrijfNavigatie from "./pages/inschrijving_Navigatie/inschrijf_Navigatie";
import InschrijfFormParticulier from "./components/inschrijfform/InschrijfFormParticulier";
import InschrijfFormProducer from "./components/inschrijfform/InschrijfFormProducer";
import ProductieInformatie from "./pages/hoe maak je bier/Productie_Informatie";
import Inschrijf_Form_Product from "./components/inschrijfform/InschrijfFormProduct";
import AlleBieren from "./pages/alle_bieren/AllProducts";
import Loginpage from "./pages/login_page/LoginPage";
import SignIn from "./components/login en signup/signin";
import SignUp from "./components/login en signup/signup";
import Error from "./pages/error/Error";
import Mijn_bieren from "./pages/mijn_bieren/myProducts";
import axios from "axios";
import Home from './pages/Home/Home';
import AgeVerification from '../src/components/leeftijds_check/AgeVerification';
import Feedback from './pages/feedback/Feedback';
import News from './pages/news feed/News';
import Music from './pages/music/DrankOrgel';
import {Footer} from "./components/footer/Footer.jsx";

axios.defaults.withCredentials = true;
function App() {
    const [activeTab, setActiveTab] = useState('Home');
    const [logoSrc, setLogoSrc] = useState("");
    const [verificationDone, setVerificationDone] = useState(false);
    const navigate = useNavigate();
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };
    useEffect(() => {
        const isVerified = localStorage.getItem('isAgeVerified');

        if (isVerified) {
            setVerificationDone(true);
            navigate('/home');
        }
    }, []);
    const handleAgeVerification = () => {
        localStorage.setItem('isAgeVerified', 'true');
        setVerificationDone(true);
        navigate('/home');
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setLogoSrc(logoImageKlein);
            } else {
                setLogoSrc(logoImage);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [logoImage, logoImageKlein]);
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
                        {!verificationDone && <Route exact path="/" element={<AgeVerification handleAgeVerification={handleAgeVerification} />} />}
                        <Route path="/inschrijfformulier" element={<InschrijfNavigatie />} />
                        <Route path="/inschrijfformulier_particulier" element={<InschrijfFormParticulier />} />
                        <Route path="/inschrijfformulier_producent" element={<InschrijfFormProducer />} />
                        <Route path="/mijn_bieren" element={<Mijn_bieren />} />
                        {/*<Route path="/mijn_pagina" element={<Mypage />} />*/}
                        <Route path="/inschrijfformulier_product" element={<Inschrijf_Form_Product />} />
                        <Route path="/productie_Informatie" element={<ProductieInformatie />} />
                        <Route path="/alle_producten" element={<AlleBieren />} />
                        <Route path="/login_page" element={<Loginpage />} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="/signIn" element={<SignIn />} />
                        <Route path="/feedback" element={<Feedback />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/drankorgel" element={<Music />} />
                        <Route path="/*" element={<Error />} />
                    </Routes>
                    <Footer/>
                </div>
                </div>
        </div>
    );
}

export default App;
