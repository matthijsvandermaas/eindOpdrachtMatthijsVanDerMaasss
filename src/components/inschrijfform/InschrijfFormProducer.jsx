import React, {useState} from 'react';
import axios from 'axios';
import './InschrijfForm.css';
import Cubes from "../cubes/Cubes.jsx";

function InschrijfFormProducer() {
    const [brandNames, setBrandNames] = useState([]); // Staat voor de merknamen in een array

    const handleBrandNameChange = (e) => {
        const { value } = e.target;
        // Voeg de nieuwe merknaam toe aan de array
        setBrandNames([...brandNames, value]);
    };
    const [saleLocationNames, setSaleLocationNames] = useState([]); // Staat voor de merknamen in een array

    const handleSaleLocationNamesChange = (e) => {
        const { value } = e.target;
        // Voeg de nieuwe merknaam toe aan de array
        setSaleLocationNames([...setSaleLocationNames, value]);
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        owner: '',
        nameBrewery: '',
        saleLocation:'',
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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { producer, value } = e.target;
        setFormData({
            ...formData,
            [producer]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post('http://localhost:8081/producenten', formData);
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
        <>
            <div className="form-container ">
                <h1>Je inschrijven als brouwer</h1>
                <div className="form-content border_top_bottom background">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Voornaam:</label>
                            <input
                                type="text"
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
                                value={formData.street}
                                onChange={handleInputChange}
                                placeholder="straat"
                            />
                        </div>
                        <div>
                            <label>Huisnummer:</label>
                            <input
                                type="text"
                                value={formData.houseNumber}
                                onChange={handleInputChange}
                                placeholder="huisnummer"
                            />
                        </div>
                        <div>
                            <label>Postcode:</label>
                            <input
                                type="text"
                                value={formData.zipcode}
                                onChange={handleInputChange}
                                placeholder="postcode"
                            />
                        </div>
                        <div>
                            <label>Plaats:</label>
                            <input
                                type="text"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="stad"
                            />
                        </div>
                        <div>
                            <label>Verkooplocaties:</label>
                            <input
                                type="text"
                                onChange={handleSaleLocationNamesChange}
                                placeholder="verkooplocaties"
                            />
                            <ul>
                                {brandNames.map((saleLocationName, index) => (
                                    <li key={index}>{saleLocationNames}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <label>Merknaam:</label>
                            <input
                                type="text"
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
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="wachtwoord"
                            />
                        </div>
                        <button className="bttn" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Bezig met een product inschrijven...' : 'Inschrijven'}
                        </button>
                    </form>
                    <p>Ander formulieren</p>
                    <Cubes
                        button_1="Een nieuwe biertje"
                        navigate_1="/inschrijfformulier_product"
                        button_2="Een bierliefhebber"
                        navigate_2="/inschrijfformulier_particulier"
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
