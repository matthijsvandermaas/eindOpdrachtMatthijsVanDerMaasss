import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './inschrijf_Navigatie.css';
import Inschrijf_Form from "./inschrijf_Navigatie.css";

function Inschrijf_Navigatie() {
    const navigate = useNavigate(); // Haal de navigate-functie op


    return (
        <>
            <div className="text">
                <h1>inschrijving</h1>
                <div className="inschrijving_Content">
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text... Het is de gecorrigeerde tekst van je welkomstboodschap.
                        </p>
                        <div className="inschrijving_content">
                            <button type="button" className="bttn" onClick={() => navigate("/inschrijf_Form")}>Particulier</button>
                        </div>
                        <div className="inschrijving_content">
                            <button type="button" className="bttn" onClick={() => navigate("/inschrijf_Form")}>Zakelijk</button>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Inschrijf_Navigatie;