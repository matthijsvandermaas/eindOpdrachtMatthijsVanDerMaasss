import {useContext, useState} from 'react';
import axios from 'axios';
import './InschrijfForm.css';
import Cubes from "../cubes/Cubes";
import AuthContext from "../../context/AuthenticationContext";



function InschrijfFormParticulier() {
    const { isAuthenticated} = useContext(AuthContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [addSucces, toggleAddSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        role: 'USER'
    });
    async function addUser(e) {
        // voorkom refresh
        e.preventDefault();
        console.log(formData);

        try {
            // Verstuur de data in een object en zorg dat de keys overeenkomen met die in de backend
            const response = await axios.post('http://localhost:8081/particulieren', {
            formData: formData,
                withCredentials: true,
            });
            console.log(response.data);
            toggleAddSuccess(true);
        } catch(e) {
            console.error(e);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(formData)
    //     setIsSubmitting(true);
    //     try {
    //         const response = await axios.post('http://localhost:3000/particulieren', formData);
    //         console.log("Response Data:", response.data);
    //         console.log(formData);
    //         if (response && response.data) {
    //             console.log(response.data);
    //             setErrorMessage('');
    //         } else {
    //             console.error('Fout bij het versturen van het verzoek: ongeldige reactie');
    //             setErrorMessage('Er is een fout opgetreden bij de inschrijving. Probeer het later opnieuw.');
    //         }
    //     } catch (error) {
    //         console.error('Fout bij het versturen van het verzoek:', error);
    //         setErrorMessage('Er is een fout opgetreden bij de inschrijving. Probeer het later opnieuw.');
    //     } finally {
    //     setIsSubmitting(false);
    //
    // }
    // };
    console.log(formData);
    return (
        <>
            <div className="form-container">
                <h1>Inschrijven als bierliefhebbers</h1>
                <div className="form-content border_top_bottom background">
                    <form onSubmit={addUser}>
                        <div>
                            <label>Voornaam:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="voornaam"
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
                                placeholder="tussen voegsel en achternaam"
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
                                placeholder="e-mail"
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
                                autoComplete="current-user-name"

                                placeholder="gebruikersnaam"
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
                                autoComplete="current-password"
                                placeholder="wachtwoord"
                                required
                            />
                        </div>
                        <button className="bttn" type="submit">
                            {isSubmitting ? 'Bezig met inschrijven...' : (isAuthenticated ? 'Verzenden' : 'inschrijven')}
                        </button>

                    </form>
                    <p>Ander pagina's</p>
                    <Cubes
                        button_1="Mijn pagina"
                        navigate_1="/mijn_pagina"
                        button_2="Mijn bieren"
                        navigate_2="/mijn_bieren"
                        button_3="Home"
                        navigate_3="/"
                        button_4="inloggen"
                        navigate_4="/login_page"
                    />

                </div>
            </div>
        </>
    );
}

export default InschrijfFormParticulier;