import React from 'react';
import { useNavigate } from 'react-router-dom';
import './inschrijf_Navigatie.css';
import '../../components/inschrijfform/InschrijfFormProducer';
import '../../components/inschrijfform/InschrijfForm.jsx';
import '../../components/inschrijfform/InschrijfFormProduct';
import cafeOrloff from "../../assets/orloff/CafeOrloff.jpeg";
import Cubes from "../../components/cubes/Cubes";


function Inschrijf_Navigatie() {
    const navigate = useNavigate(); // Haal de navigate-functie op


    return (
        <>
            <div className="outer-nav-container">

                <div className="inschrijving_Content ">


                    <div className="nav-buttons">
                        <h1>inschrijving</h1>
                        <h2>
                            Contrary to popular belief, Lorem Ipsum is not simply random text... Het is de gecorrigeerde tekst van je welkomstboodschap.
                        </h2>
                    <button type="button" className="bttn" onClick={() => navigate("/inschrijfformulier")}>Inschrijven</button>
                    <button type="button" className="bttn" onClick={() => navigate("/inschrijfformulier_product")}>Biertje toevoegen</button>//TODO isauth via brewer
                        <p>
                            Already registered <a href="/signIn">login</a>
                        </p>
                    </div>


                </div>
                <img className="general_Img" src={cafeOrloff} alt=" een cafe" />
                <Cubes
                    button_1="inschrijven"
                    navigate_1="/inschrijfformulier"
                    button_2="inloggen"
                    navigate_2="/signIn"
                    button_3="al onze producten"
                    navigate_3="/alle_producten"
                    button_4="hoe maak je bier"
                    navigate_4="/Productie_Informatie"
                />
            </div>

        </>
    );
}

export default Inschrijf_Navigatie;