import React from 'react';
import './navbar.css';
import {NavLink} from "react-router-dom"; // Importeer de navbar.css-stijlen

function Navbar() {
    return (
        <div className="dropdown-content">
            <ul className="navList">
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/alle_producten">Alle Bieren</NavLink>
                    <NavLink to="/login_page">Inloggen</NavLink>
                    <NavLink to="/">Mijn Pagina</NavLink>
                    <NavLink to="/">Mijn Bieren</NavLink>
                    <NavLink to="/inschrijfformulier">Inschrijfformulier</NavLink>
                    <NavLink to="/Productie_Informatie">hoe maak je bier</NavLink>
                </li>

        </ul>
        </div>
    );
}

export default Navbar;