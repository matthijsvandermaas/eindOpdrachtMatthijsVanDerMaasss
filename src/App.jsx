import React, { useState, useEffect } from 'react';
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
// Img
import logoImage from './assets/logos and backgrounds/B & B logo2.jpg';
import logoImageKlein from './assets/logos and backgrounds/B & B logo2 klein.jpg';
import wheat from './assets/logos and backgrounds/wheat.png';
// Components
import Navbar from "./components/navBar/Navbar.jsx";
import AgeVerification from './components/agecheck/AgeVerification';
import { Footer } from "./components/footer/Footer";
// Pages
import HookFormUsers from "./pages/signupform/HookFormUsers.jsx";
import ProductieInformatie from "./pages/hoe maak je bier/Productie_Informatie";
import Inschrijf_Form_Product from "./pages/signupform/HookFormProduct.jsx";
import AlleBieren from "./pages/allProducts/AllProducts";
import SignIn from "./pages/signin/signin";
import Error from "./pages/error/Error";
import MijnBieren from "./pages/my_products/myProducts";
import Home from './pages/Home/Home';
import Feedback from './pages/feedback/Feedback';
import News from './pages/news feed/News';
import Music from './pages/music/DrankOrgel';
import All_Accounts from './pages/allAccounts/AllAccounts';
import HookFormAddImage from "./components/images/HookFormAddImage.jsx";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Home');
    const [logoSrc, setLogoSrc] = useState("");
    const [verificationDone, setVerificationDone] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };
// Age verification
    useEffect(() => {
        const isVerified = localStorage.getItem('isAgeVerified');
        if (isVerified) {
            setVerificationDone(true);
            navigate('/home');
        }
    }, [navigate]);
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
        // Logo adjusting
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [logoImage, logoImageKlein]);
    return (
        <div className={`outer-outer-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="outer-container background_fade">
                <div className="header-container border_bottom_left background_fade2">
                    <div className="headerlogo-container">
                        <NavLink to="/home"><img  className="logo-img" src={logoSrc} alt="B&B Logo" /></NavLink>
                        <div className="dropdown">
                            <button className="navBar-bttn headerlogo-container ">
                               <img className="small_logo" src={wheat} alt="wheat-logo"/>
                                <h1 className="h1-header" style={{ textShadow: "none", zIndex:"0"}}>menu</h1>
                            </button>
                            <Navbar activeTab={activeTab} handleTabChange={handleTabChange} />
                        </div>
                    </div>
                    <button className="bttn bttn_small" onClick={toggleDarkMode}>
                        <p style={{textShadow: '1px 3px 3px #fffef3' }}>{isDarkMode ? ' naar Light Mode' : ' naar Dark Mode'}</p>
                    </button>
                </div>
                <div className="main-container">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        {!verificationDone && <Route exact path="/" element={<AgeVerification handleAgeVerification={handleAgeVerification} />} />}
                        <Route path="/inschrijfformulier" element={<HookFormUsers />} />
                        <Route path="/all_profiles" element={<All_Accounts />} />
                        <Route path="/mijn_bieren" element={<MijnBieren />} />
                        <Route path="/inschrijfformulier_product" element={<Inschrijf_Form_Product />} />
                        <Route path="/add_image" element={<HookFormAddImage />} />
                        <Route path="/productie_Informatie" element={<ProductieInformatie />} />
                        <Route path="/alle_producten" element={<AlleBieren />} />
                        <Route path="/signIn" element={<SignIn />} />
                        <Route path="/feedback" element={<Feedback />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/drankorgel" element={<Music />} />
                        <Route path="/*" element={<Error />} />
                        <Route path="/AgeVerification" element={<AgeVerification />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    );
}
export default App;
