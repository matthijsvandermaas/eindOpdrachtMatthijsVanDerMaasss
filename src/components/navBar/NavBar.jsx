import React, { useRef, useState, useContext } from 'react';
import './navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../../context/AuthenticationContext.jsx';

function Navbar({ activeTab, handleTabChange, verificationDone }) {
    const hetProcesRef = useRef(null);
    const algemene_infoRef = useRef(null);
    const { isAuthenticated, logout } = useContext(AuthenticationContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const scrollToHetProces = () => {
        hetProcesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };

    const scrollToAlgemene_info = () => {
        algemene_infoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };

    const [submenuStatus, setSubmenuStatus] = useState({
        isSubmenuOpen1: false,
        isSubmenuOpen2: false,
    });

    const toggleSubmenu = (submenuNumber) => {
        setSubmenuStatus((prevStatus) => ({
            ...prevStatus,
            [`isSubmenuOpen${submenuNumber}`]: !prevStatus[`isSubmenuOpen${submenuNumber}`],
        }));
    };

    return (
        <div className="dropdown-content">
            <ul className="navList">
                <li>
                    <NavLink to="/">Home</NavLink>
                    {isAuthenticated ? (
                        <NavLink to="/" onClick={handleLogout}>
                            Logout
                        </NavLink>
                    ) : (
                        <NavLink to="/login_page">Inloggen</NavLink>
                    )}
                    <div className="submenu" onClick={() => toggleSubmenu(1)}>
                        <div>
                            <NavLink to="/inschrijfformulier">
                                {isAuthenticated ? 'mijn pagina🞃' : 'Inschrijven🞃'}
                            </NavLink>
                        </div>
                        {submenuStatus.isSubmenuOpen1 && (
                            <div className="submenu-content">
                                <NavLink to="/inschrijfformulier_particulier">
                                    {isAuthenticated ? 'Bierliefhebbers' : 'Als bierliefhebber'}
                                </NavLink>
                                <NavLink to="/inschrijfformulier_producent">
                                    {isAuthenticated ? 'Brouwers' : 'Als brouwer'}
                                </NavLink>
                                <NavLink to="/mijn_bieren">{isAuthenticated && 'Mijn bieren'}</NavLink>
                            </div>
                        )}
                    </div>
                    <NavLink to="/alle_producten">Alle Bieren</NavLink>
                    <div className="submenu" onClick={() => toggleSubmenu(2)}>
                        <NavLink to="/Productie_informatie">Hoe maak je bier🞃</NavLink>
                        {submenuStatus.isSubmenuOpen2 && (
                            <div className="submenu-content">
                                <NavLink to="/Productie_Informatie#algemene-informatie" onClick={scrollToAlgemene_info}>
                                    Algemene Informatie
                                </NavLink>
                                <NavLink to="/Productie_Informatie#het-proces" onClick={scrollToHetProces}>
                                    Het brouw proces
                                </NavLink>
                            </div>
                        )}
                    </div>
                    <NavLink to="/feedback">Geef ons je feedback?</NavLink>
                    <NavLink to="/news"> Bier nieuws</NavLink>
                    <NavLink to="/drankorgel"> Het Drankorgel</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
