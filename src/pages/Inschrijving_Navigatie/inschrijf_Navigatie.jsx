import React from 'react';
import { useNavigate } from 'react-router-dom';
import './inschrijf_Navigatie.css';
import '../../components/inschrijfform/Inschrijf_Form_Producer.jsx';
import '../../components/inschrijfform/Inschrijf_Form_Particulier.jsx';
import '../../components/inschrijfform/Inschrijf_Form_Product.jsx';


function Inschrijf_Navigatie() {
    const navigate = useNavigate(); // Haal de navigate-functie op


    return (
        <>
            <div className="text">
                <h1>inschrijving</h1>
                <div className="inschrijving_Content">
                        <h2>
                            Contrary to popular belief, Lorem Ipsum is not simply random text... Het is de gecorrigeerde tekst van je welkomstboodschap.
                        </h2>
                    <button type="button" className="bttn" onClick={() => navigate("/inschrijfformulier_particulier")}>Particulier</button>
                    <button type="button" className="bttn" onClick={() => navigate("/inschrijfformulier_producent")}>Zakelijk</button>
                    <button type="button" className="bttn" onClick={() => navigate("/inschrijfformulier_product")}>product</button>

                </div>
            </div>
        </>
    );
}

export default Inschrijf_Navigatie;