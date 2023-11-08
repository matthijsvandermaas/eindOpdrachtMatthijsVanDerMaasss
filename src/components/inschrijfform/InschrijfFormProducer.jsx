import React, { useContext, useState } from 'react';
import axios from 'axios';
import './InschrijfForm.css';
import Cubes from '../cubes/Cubes';
import { useNavigate} from 'react-router-dom';
import AuthenticationContext from "../../context/AuthenticationContext";


function InschrijfFormProducer() {
    const {isAuthenticated} = useContext(AuthenticationContext);
    const [loading, toggleLoading] = useState(false);
    const [addSucces, toggleAddSuccess] = useState(false);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage, ] = useState('');
    const [error, toggleError] = useState(false);
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
        role: 'BREWER'
    });


    async function handleSubmitBrewer(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        console.log(formData);

        try {
            const response = await axios.post('http://localhost:8081/producten', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response.data)
            navigate('/home');
            toggleAddSuccess(true);
        } catch (error) {
            console.error(error);
        }
            toggleLoading(false);
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
                    <form onSubmit={handleSubmitBrewer}>
                        <div>
                            <label>Voornaam:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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
                                onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
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
                                onChange={(e) => setFormData({ ...formData, nameBrewery: e.target.value })}
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
                                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                                placeholder="straat"
                            />
                        </div>
                        <div>
                            <label>Huisnummer:</label>
                            <input
                                type="text"
                                name="houseNumber"
                                value={formData.houseNumber}
                                onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })}
                                placeholder="huisnummer"
                            />
                        </div>
                        <div>
                            <label>Postcode:</label>
                            <input
                                type="text"
                                name="zipcode"
                                value={formData.zipcode}
                                onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
                                placeholder="postcode"
                            />
                        </div>
                        <div>
                            <label>Plaats:</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                placeholder="stad"
                            />
                        </div>
                        <div>
                            <label>Verkooplocaties:</label>
                            <input
                                type="text"
                                name="saleLocation"
                                onChange={(e) => setFormData({ ...formData, saleLocation: e.target.value })}
                                placeholder="verkooplocaties"
                            />
                        </div>
                        <div>
                            <label>Merknaam:</label>
                            <input
                                type="text"
                                name="brands"
                                onChange={(e) => setFormData({ ...formData, brands: e.target.value })}

                                placeholder="merk"
                            />
                        </div>
                        <div>
                            <label>E-mail:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                                onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
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
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
