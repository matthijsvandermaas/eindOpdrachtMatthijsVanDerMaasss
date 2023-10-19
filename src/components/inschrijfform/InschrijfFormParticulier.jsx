import React, { useState } from 'react';
import axios from 'axios';
import './InschrijfForm.css';
import Cubes from "../cubes/Cubes.jsx";
import error from "../../pages/error/Error.jsx";

axios.post = async function (httpLocalhost5173ParticulierenInschrijving, formData) {

};

function InschrijfFormParticulier() {
    const [formData, setFormData] = useState({
        firstName: 'roepnaam',
        lastName: 'tussenvoegsel_achternaam',
        email: 'email@eamil.com',
        userName: 'gebruikersnaam',
        password: 'wachtwoord',
        role: 'USER, ADMIN'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post('http://localhost:8080/particulieren', formData);
            console.log("Response Status Code:", response?.status);
            console.log("Response Data:", response.data);
            if (response && response.data) {
                console.log(response.data);
                setErrorMessage('');
            } else {
                console.error('Fout bij het versturen van het verzoek: ongeldige reactie');
                setErrorMessage('Er is een fout opgetreden bij de inschrijving. Probeer het later opnieuw.');
            }
        } catch (error) {
            console.error('Fout bij het versturen van het verzoek:', error);
            setErrorMessage('Er is een fout opgetreden bij de inschrijving. Probeer het later opnieuw.');
        } finally {
            setIsSubmitting(false);
        }
    };



    console.log(formData);
    return (
        <>
            <div className="form-container">
                <h1>Inschrijven als bierliefhebbers</h1>
                <div className="form-content border_top_bottom background">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Voornaam:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Achternaam:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>E-mail:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Gebruikersnaam:</label>
                            <input
                                type="text"
                                name="userName"
                                value={formData.userName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Wachtwoord:</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button className="bttn" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Bezig met inschrijven...' : 'Inschrijven'}
                        </button>
                    </form>
                    <Cubes
                        button_1="inschrijven"
                        navigate_1="/inschrijfformulier"
                        button_2="inloggen"
                        navigate_2="/login_page"
                        button_3="al onze producten"
                        navigate_3="/alle_producten"
                        button_4="hoe maak je bier"
                        navigate_4="/Productie_Informatie"
                    />
                </div>
            </div>
        </>
    );
}

export default InschrijfFormParticulier;