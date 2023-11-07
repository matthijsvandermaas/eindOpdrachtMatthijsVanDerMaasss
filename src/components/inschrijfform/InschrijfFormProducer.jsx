import React, { useContext, useState } from 'react';
import axios from 'axios';
import './InschrijfForm.css';
import Cubes from '../cubes/Cubes.jsx';
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../../context/AuthenticationContext.jsx';

function InschrijfFormProducer() {
    const {isAuthenticated} = useContext(AuthenticationContext);
    const [addSucces, toggleAddSuccess] = useState(false);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
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


    async function addBrewer(e) {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await axios.post('http://localhost:8081/producten', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log(response.data);
            toggleAddSuccess(true);
        } catch (error) {
            console.error(error);
        }
    }




    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };


    return (
        <>
            <div className="form-container ">
                <h1>Je inschrijven als brouwer</h1>
                <div className="form-content border_top_bottom background">
                    <form onSubmit={addBrewer}>
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
                                onChange={handleInputChange}
                                placeholder="verkooplocaties"
                            />
                        </div>
                        <div>
                            <label>Merknaam:</label>
                            <input
                                type="text"
                                name="brands"
                                onChange={handleInputChange}
                                placeholder="merk"
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
                                autoComplete="current-password"
                            />
                        </div>
                        <button className="bttn" type="submit" disabled={isSubmitting}>
                            {isSubmitting
                                ? 'Bezig met een product inschrijven...'
                                : (isAuthenticated ? 'verzenden' : 'Inschrijven')}
                        </button>
                        <button type="button" className="bttn" onClick={() => navigate('/inschrijfformulier_product')}>
                            Een nieuw product
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
