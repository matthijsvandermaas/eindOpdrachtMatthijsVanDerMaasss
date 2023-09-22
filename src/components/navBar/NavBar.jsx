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
                </li>


            {/*<li className={activeTab === 'About' ? 'active' : ''}>*/}
            {/*    <a onClick={() => handleTabChange('About')}>About</a>*/}
            {/*</li>*/}
            {/*<li className={activeTab === 'Services' ? 'active' : ''}>*/}
            {/*    <a onClick={() => handleTabChange('Services')}>Services</a>*/}
            {/*</li>*/}
            {/*<li className={activeTab === 'Contact' ? 'active' : ''}>*/}
            {/*    <a onClick={() => handleTabChange('Contact')}>Contact</a>*/}
            {/*</li>*/}
        </ul>
        </div>
    );
}

export default Navbar;