import React, { useState } from 'react';
import axios from 'axios';
import './InschrijfForm.css';
import Cubes from "../cubes/Cubes.jsx";


function InschrijfFormProduct() {
    const [formData, setFormData] = useState({
        productName: '',
        nameProducer: '',
        type:'',
        percentage: '',
        email: '',
        color:'',
        tast:'',
        volume:'',
        productionLocation:'',
        photo:'',
        photo2:'',
        photo3:'',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const {product, value } = e.target;
        setFormData({
            ...formData,
            [product]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post('http://localhost:8081/particulieren', formData);
            const responseData = response?.data;
            console.log("Response Data:", response.data);
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
                console.log("Fout Status Code:", error.response.status);
            }
            setErrorMessage('Er is een fout opgetreden bij de inschrijving. Probeer het later opnieuw.');

        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form-container ">
            <h1>Een biertje toevoegen</h1>
            <div className="form-content border_top_bottom background">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Productnaam:</label>
                        <input
                            type="text"
                            value={formData.productName}
                            onChange={handleInputChange}
                            placeholder="naam bier"
                            required
                        />
                    </div>
                    <div>
                        <label>Naam brouwer:</label>
                        <input
                            type="text"
                            value={formData.nameProducer}
                            onChange={handleInputChange}
                            placeholder="brouwer"
                            required
                        />
                    </div>
                    <div>
                        <label>Locatie brouwer:</label>
                        <input
                            type="text"
                            value={formData.productionLocation}
                            onChange={handleInputChange}
                            placeholder="plaats"
                            required
                        />
                    </div>
                    <div>
                        <label>Type:</label>
                        <select
                            value={formData.type}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Selecteer een bierstijl</option>
                            <option value="Lager">Lager</option>
                            <option value="Ale">Ale</option>
                            <option value="Witbier">Witbier</option>
                            <option value="Weizer">Weizer</option>
                            <option value="IPA">IPA</option>
                            <option value="Stout">Stout</option>
                            <option value="Porter">Porter</option>
                            <option value="Pilsner">Pilsner</option>
                            <option value="Amber Ale">Amber Ale</option>
                            <option value="Saison">Saison</option>
                            <option value="Tripel">Tripel</option>
                            <option value="Barleywine">Barleywine</option>
                        </select>
                    </div>
                    <div>
                        <label>Percentage:</label>
                        <input
                            type="number"
                            step="0.1"
                            min="0.1"
                            max="14.9"
                            value={formData.percentage}
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
                            placeholder="e-mail"
                            required
                        />
                    </div>
                    <div>
                        <label>Kleur:</label>
                        <input
                            type="text"
                            value={formData.color}
                            onChange={handleInputChange}
                            placeholder="kleur(en)"
                        />
                    </div>
                    <div>
                        <label>Smaak:</label>
                        <input
                            type="text"
                            value={formData.tast}
                            onChange={handleInputChange}
                            placeholder="smaken"
                            required
                        />
                    </div>
                    <div>
                        <label>Volume(cc):</label>
                        <input
                            type="number"
                            step="0.1"
                            min="100.0"
                            max="1000.0"
                            value={formData.volume}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Voeg een foto toe:</label>
                        <input
                            type="file"
                            name="foto"
                            value={formData.photo}
                            accept="image/*"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Voeg nog een foto toe:</label>
                        <input
                            type="file"
                            name="foto"
                            value={formData.photo2}
                            accept="image/*"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Voeg nog een foto toe:</label>
                        <input
                            type="file"
                            name="foto"
                            value={formData.photo3}
                            accept="image/*"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button className="bttn" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Bezig met een product toevoegen...' : 'toevoegen'}
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
    );
}

export default InschrijfFormProduct;
