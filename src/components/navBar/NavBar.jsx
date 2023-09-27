import React from 'react';
import './navbar.css';
import Home from "../../pages/Home/Home.jsx";
import {NavLink, Route} from "react-router-dom"; // Importeer de navbar.css-stijlen

function Navbar({ activeTab, handleTabChange }) {
    return (
        <div className="dropdown-content">
            <ul className="navList">
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/inschrijfformulier">Inschrijfformulier</NavLink>
                    <NavLink to="/product_informatie">product informatie</NavLink>
                </li>

        </ul>
        </div>
    );
}

export default Navbar;