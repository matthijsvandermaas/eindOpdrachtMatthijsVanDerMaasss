import React, { useState } from 'react';
import './Inschrijf_Form_Producer.css';

function Inschrijf_Form_Producer() {
    const [First_name, setFirst_Name] = useState('');
    const [Last_name, setLast_Name] = useState('');
    const [Owner, setOwner] = useState('');
    const [Name_Brewery, setName_Brewery] = useState('');
    const [Street_Name, setStreet_Name] = useState('');
    const [House_Number, setHouse_Number] = useState('');
    const [Zipcode, setZipcode] = useState('');
    const [City, setCity] = useState('');
    const [Brand_Name, setBrand_Name] = useState('');
    const [Sale_location, setSale_location] = useState('');
    const [Email, setEmail] = useState('');
    const [User_Name, setUser_Name] = useState('');
    const [Password, setPassword] = useState('');

    const handleFirst_NameChange = (e) => {
        setFirst_Name(e.target.value);
    };

    const handleLast_NameChange = (e) => {
        setLast_Name(e.target.value);
    };

    const handleOwnerChange = (e) => {
        setOwner(e.target.value);
    };

    const handleName_BreweryChange = (e) => {
        setName_Brewery(e.target.value);
    };

    const handleStreet_NameChange = (e) => {
        setStreet_Name(e.target.value);
    };

    const handleHouse_NumberChange = (e) => {
        setHouse_Number(e.target.value);
    };

    const handleZipcodeChange = (e) => {
        setZipcode(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleBrand_NameChange = (e) => {
        setBrand_Name(e.target.value);
    };

    const handleSale_locationChange = (e) => {
        setSale_location(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUser_NameChange = (e) => {
        setUser_Name(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hier kun je de ingevoerde gegevens verwerken, bijvoorbeeld naar een API verzenden of lokaal opslaan
        console.log('Voornaam:', First_name);
        console.log('Achternaam:', Last_name);
        console.log('Eigenaar:', Owner);
        console.log('Brouwerijnaam:', Name_Brewery);
        console.log('Straatnaam:', Street_Name);
        console.log('Huisnummer:', House_Number);
        console.log('Postcode:', Zipcode);
        console.log('Plaats:', City);
        console.log('Merknaam:', Brand_Name);
        console.log('Verkooplocatie:', Sale_location);
        console.log('E-mail:', Email);
        console.log('Gebruikersnaam:', User_Name);
        console.log('Wachtwoord:', Password);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Voornaam:</label>
                <input
                    type="text"
                    value={First_name}
                    onChange={handleFirst_NameChange}
                />
            </div>
            <div>
                <label>Achternaam:</label>
                <input
                    type="text"
                    value={Last_name}
                    onChange={handleLast_NameChange}
                />
            </div>
            <div>
                <label>Eigenaar:</label>
                <input
                    type="text"
                    value={Owner}
                    onChange={handleOwnerChange}
                />
            </div>
            <div>
                <label>Brouwerijnaam:</label>
                <input
                    type="text"
                    value={Name_Brewery}
                    onChange={handleName_BreweryChange}
                />
            </div>
            <div>
                <label>Straatnaam:</label>
                <input
                    type="text"
                    value={Street_Name}
                    onChange={handleStreet_NameChange}
                />
            </div>
            <div>
                <label>Huisnummer:</label>
                <input
                    type="text"
                    value={House_Number}
                    onChange={handleHouse_NumberChange}
                />
            </div>
            <div>
                <label>Postcode:</label>
                <input
                    type="text"
                    value={Zipcode}
                    onChange={handleZipcodeChange}
                />
            </div>
            <div>
                <label>Plaats:</label>
                <input
                    type="text"
                    value={City}
                    onChange={handleCityChange}
                />
            </div>
            <div>
                <label>Merknaam:</label>
                <input
                    type="text"
                    value={Brand_Name}
                    onChange={handleBrand_NameChange}
                />
            </div>
            <div>
                <label>Verkooplocatie:</label>
                <input
                    type="text"
                    value={Sale_location}
                    onChange={handleSale_locationChange}
                />
            </div>
            <div>
                <label>E-mail:</label>
                <input
                    type="email"
                    value={Email}
                    onChange={handleEmailChange}
                />
            </div>
            <div>
                <label>Gebruikersnaam:</label>
                <input
                    type="text"
                    value={User_Name}
                    onChange={handleUser_NameChange}
                />
            </div>
            <div>
                <label>Wachtwoord:</label>
                <input
                    type="password"
                    value={Password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button type="submit">Inschrijven</button>
        </form>
        </>
    );
}

export default Inschrijf_Form_Producer;
