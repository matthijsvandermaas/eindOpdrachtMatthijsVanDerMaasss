import React, { useContext, useState } from 'react';
import axios from 'axios';
import './InschrijfForm.css';
import Cubes from '../cubes/Cubes.jsx';
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../../context/AuthenticationContext.jsx';

function InschrijfFormProducer() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        owner: '',
        nameBrewery: '',
        saleLocation: '',
        street: '',
        houseNumber: '',
        zipcode: '',
        city: '',
        brands: '',
        email: '',
        userName: '',
        password: '',
        role: 'BREWER, USER'
    });

    const { isAuthentication, logout } = useContext(AuthenticationContext);
    const navigate = useNavigate();

    const [brandNames, setBrandNames] = useState([]);
    const handleBrandNameChange = (e) => {
        const { value } = e.target;
        setBrandNames([...brandNames, value]);
    };

    const [saleLocationNames, setSaleLocationNames] = useState([]);
    const handleSaleLocationNamesChange = (e) => {
        const { value } = e.target;
        setSaleLocationNames([...setSaleLocationNames, value]);
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post('http://localhost:8080/producenten', formData);
            console.log('Response Data:', response.data);
            console.log(formData);

            if (response && response.data) {
                console.log(response.data);
                setErrorMessage('');
            } else {
                console.error('Fout bij het versturen van het verzoek: ongeldige reactie');
                setErrorMessage('Er is een fout opgetreden bij de inschrijving. Probeer het later opnieuw.');
            }
        } catch (error) {
            console.error('Fout bij het versturen van het verzoek:', error);
            if (error.response && error.response.status) {
                console.log('Fout Status Code:', error.response.status);
            }
            setErrorMessage('Er is een fout opgetreden bij de inschrijving. Probeer het later opnieuw.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="form-container ">
                <h1>Je inschrijven als brouwer</h1>
                <div className="form-content border_top_bottom background">
                    <form onSubmit={handleSubmit}>
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
                            <label>Eigenaar:</label>
                            <input
                                type="text"
                                name="owner"
                                value={formData.owner}
                                onChange={handleInputChange}
                                placeholder="voledige naam eigenaar"
                                required
                            />
                        </div>
                        <div>
                            <label>Brouwerijnaam:</label>
                            <input
                                type="text"
                                name="nameBrewery"
                                value={formData.nameBrewery}
                                onChange={handleInputChange}
                                placeholder="brouwerij"
                                required
                            />
                        </div>
                        <div>
                            <label>Straatnaam:</label>
                            <input
                                type="text"
                                name="street"
                                value={formData.street}
                                onChange={handleInputChange}
                                placeholder="straat"
                            />
                        </div>
                        <div>
                            <label>Huisnummer:</label>
                            <input
                                type="text"
                                name="houseNumber"
                                value={formData.houseNumber}
                                onChange={handleInputChange}
                                placeholder="huisnummer"
                            />
                        </div>
                        <div>
                            <label>Postcode:</label>
                            <input
                                type="text"
                                name="zipcode"
                                value={formData.zipcode}
                                onChange={handleInputChange}
                                placeholder="postcode"
                            />
                        </div>
                        <div>
                            <label>Plaats:</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="stad"
                            />
                        </div>
                        <div>
                            <label>Verkooplocaties:</label>
                            <input
                                type="text"
                                name="saleLocation"
                                onChange={handleSaleLocationNamesChange}
                                placeholder="verkooplocaties"
                            />
                            <ul>
                                {saleLocationNames.map((saleLocationName, index) => (
                                    <li key={index}>{saleLocationNames}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <label>Merknaam:</label>
                            <input
                                type="text"
                                name="brands"
                                onChange={handleBrandNameChange}
                                placeholder="merk"
                            />
                            <ul>
                                {brandNames.map((brandName, index) => (
                                    <li key={index}>{brandName}</li>
                                ))}
                            </ul>
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
                                placeholder="wachtwoord"
                            />
                        </div>
                        <button type="button" className="bttn" onClick={() => navigate('/inschrijfformulier_product')}>
                            Een nieuw product
                        </button>
                        <button className="bttn" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Bezig met een product inschrijven...' : 'Inschrijven'}//TODO via auth zorgen dat tekst veranderd naar "verzenden"
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

export default InschrijfFormProducer;
