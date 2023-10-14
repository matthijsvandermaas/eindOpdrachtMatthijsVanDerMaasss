import React from 'react';
import { useNavigate } from 'react-router-dom';
import './inschrijf_Navigatie.css';
import '../../components/inschrijfform/InschrijfFormProducer.jsx';
import '../../components/inschrijfform/InschrijfFormParticulier.jsx';
import '../../components/inschrijfform/InschrijfFormProduct.jsx';
import wheat from "../../assets/logos and backgrounds/wheat.png";


function Inschrijf_Navigatie() {
    const navigate = useNavigate(); // Haal de navigate-functie op


    return (
        <>
            <div className="outer-nav-container">

                <div className="inschrijving_Content ">
                    <h1>inschrijving</h1>
                        <h2>
                            Contrary to popular belief, Lorem Ipsum is not simply random text... Het is de gecorrigeerde tekst van je welkomstboodschap.
                        </h2>
                    <div className="nav-buttons">
                    <button type="button" className="bttn" onClick={() => navigate("/inschrijfformulier_particulier")}>Particulier</button>
                    <button type="button" className="bttn" onClick={() => navigate("/inschrijfformulier_producent")}>Zakelijk</button>
                    <button type="button" className="bttn" onClick={() => navigate("/inschrijfformulier_product")}>product</button>
                        <h2>
                            Already registered <a href="/login_page">login</a>
                        </h2>
                    </div>


                </div>
                <img src={b} alt="afbeelding" />
            </div>

        </>
    );
}

export default Inschrijf_Navigatie;