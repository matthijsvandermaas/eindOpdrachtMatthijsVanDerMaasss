import React from 'react';
import './navbar.css'; // Importeer de navbar.css-stijlen

function Navbar({ activeTab, handleTabChange }) {
    return (
        <div className="dropdown-content">
        <ul className="navList">
            <li className={activeTab === 'Home' ? 'active' : ''}>
                <a onClick={() => handleTabChange('Home')}>Home</a>
            </li>
            <li className={activeTab === 'About' ? 'active' : ''}>
                <a onClick={() => handleTabChange('About')}>About</a>
            </li>
            <li className={activeTab === 'Services' ? 'active' : ''}>
                <a onClick={() => handleTabChange('Services')}>Services</a>
            </li>
            <li className={activeTab === 'Contact' ? 'active' : ''}>
                <a onClick={() => handleTabChange('Contact')}>Contact</a>
            </li>
        </ul>
        </div>
    );
}

export default Navbar;