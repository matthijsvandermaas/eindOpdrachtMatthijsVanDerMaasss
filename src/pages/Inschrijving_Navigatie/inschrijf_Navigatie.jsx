import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import './inschrijf_Navigatie.css';
import Inschrijf_Form_Particulier from '../../../src/components/inschrijfform/Inschrijf_Form_Particulier';
import Inschrijf_Form_Producer from '../../../src/components/inschrijfform/Inschrijf_Form_Producer';
import Home from '../Home/Home.jsx';

function Inschrijf_Navigatie() {
    return (
        <>
            <div className="text">
                <h1>inschrijving</h1>
                <ul className="navList">
                    <li><NavLink to="/inschrijf_form_particulier">particulier</NavLink></li>
                    <li><NavLink to="/inschrijf_form_producers">producers</NavLink></li>
                </ul>
            </div>
            <Routes>

            </Routes>
        </>
    );
}

export default Inschrijf_Navigatie;
