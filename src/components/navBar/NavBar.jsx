// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useContext } from 'react';
import './navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext.jsx";

function Navbar() {
    const hetProcesRef = useRef(null);
    const algemene_infoRef = useRef(null);
    const { isAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const roles = ['USER', 'BREWER']; // Replace this with your actual roles
    const isBrewerOrAdmin = roles.includes('BREWER') || roles.includes('ADMIN');
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
                    <NavLink to="/home">Home</NavLink>
                    {isAuth ? (
                        <NavLink to="/home" onClick={handleLogout}>
                            Logout
                        </NavLink>
                    ) : (
                        <NavLink to="/signIn">Inloggen</NavLink>
                    )}
                    <NavLink to={isAuth ?"/mijn_pagina"  : "/inschrijfformulier"}>
                        {isAuth ? 'mijn_pagina' : 'inschrijven'}
                    </NavLink>
                    {isBrewerOrAdmin && (
                        <NavLink to="/inschrijfformulier_product">
                            Een biertje toevoegen
                        </NavLink>
                    )}
                    <NavLink to="/mijn_bieren">{isAuth && 'Mijn bieren'}</NavLink>
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
