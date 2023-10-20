import React, {useRef, useState} from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const hetProcesRef = useRef(null);
    const algemene_infoRef = useRef(null);

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
        <>
        <div className="dropdown-content">
            <ul className="navList">
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login_page">Inloggen</NavLink>//TODO
                    <NavLink to="/">Mijn Bieren</NavLink>//TODO
                    <NavLink to="/">Mijn Pagina</NavLink>//TODO
                    <div className="submenu" onClick={() => toggleSubmenu(1)}>
                        <div>
                            <p>Inschrijven🞃</p>
                        </div>
                        {submenuStatus.isSubmenuOpen1 && (
                            <div className="submenu-content">
                                <NavLink to="/inschrijfformulier_particulier">Als bierliefhebber</NavLink>//TODO
                                <NavLink to="/inschrijfformulier_producent">Als brouwer</NavLink>//TODO
                                <NavLink to="/inschrijfformulier_product"> Een nieuwe biertje</NavLink>//TODO
                            </div>
                        )}
                    </div>
                    <NavLink to="/alle_producten">Alle Bieren</NavLink>\\TODO
                    <div className="submenu" onClick={() => toggleSubmenu(2)}>
                            <NavLink to="/Productie_Informatie">Hoe maak je bier🞃</NavLink>//TODO
                        {submenuStatus.isSubmenuOpen2 && (
                            <div className="submenu-content">
                                <NavLink to='/Productie_Informatie#algemene-informatie' onClick={scrollToAlgemene_info}>Algemene Informatie</NavLink>
                                <NavLink to="/Productie_Informatie#het-proces" onClick={scrollToHetProces}>
                                    Het brouw proces
                                </NavLink>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </div>
        </>
            );

}

export default Navbar;
