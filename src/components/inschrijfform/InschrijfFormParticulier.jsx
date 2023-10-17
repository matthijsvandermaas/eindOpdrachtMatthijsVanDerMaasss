import React, { useState } from 'react';
import axios from 'axios'; // Vergeet niet axios te importeren
import './InschrijfForm.css';

function InschrijfFormParticulier() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    axios.post = async function (httpLocalhost5173ParticulierenInschrijving, formData) {

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5173/particulieren/inschrijving', formData);
            console.log(response.data); // Doe iets met de response van de backend als dat nodig is
        } catch (error) {
            console.error('Fout bij het versturen van het verzoek:', error);
        }
    };

    const handleInputChange = (e) => {
        const { firstName, lastName, email,useName, password, value } = e.target;
        setFormData({
            ...formData,
            [firstName]: value,
            [lastName]: value,
            [email]: value,
            [useName]: value,
            [password]: value
        });
    };

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
                                name="first_Name" // Geef de input een naam die overeenkomt met de key in formData
                                value={formData.first_Name}
                                onChange={handleInputChange}
                                placeholder="voornaam"/>
                        </div>
                        <div>
                            <label>Achternaam:</label>
                            <input
                                type="text"
                                name="last_Name"
                                value={formData.last_Name}
                                onChange={handleInputChange}
                                placeholder="tussenvoegsel en achternaam"/>
                        </div>
                        <div>
                            <label>E-mail:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="e-mail"/>
                        </div>
                        <div>
                            <label>Gebruikersnaam:</label>
                            <input
                                type="text"
                                name="user_Name"
                                value={formData.user_Name}
                                onChange={handleInputChange}
                                placeholder="gebruikersnaam"/>
                        </div>
                        <div>
                            <label>Wachtwoord:</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="wachtwoord"/>
                        </div>
                        <button className="bttn" type="submit">Inschrijven</button>
                    </form>
                    {/* Andere inhoud hier */}
                </div>
            </div>
        </>
    );
}

export default InschrijfFormParticulier;
