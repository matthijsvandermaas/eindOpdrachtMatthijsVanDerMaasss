import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [submenuStatus, setSubmenuStatus] = useState({
        isSubmenuOpen1: false,

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
                    <NavLink to="/Productie_Informatie">hoe maak je bier</NavLink>//TODO
                </li>
            </ul>
        </div>
        </>
            );

}

export default Navbar;
