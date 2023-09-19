// Inschrijf_Form.jsx
import React, { useState } from 'react';

function Inschrijf_Form() {
    const [First_Name, setFirst_Name] = useState('');
    const [Last_Name, setLast_Name] = useState('');
    const [Name_Owner, setName_Owner] = useState('');
    const [Name_Brewery, setName_Brewery] = useState('');
    const [Street_Name, setStreet_Name] = useState('');
    const [House_Number, setHouse_Number] = useState('');
    const [Zipcode, setZipcode] = useState('');
    const [City, setCity] = useState('');
    const [Brands, setBrands] = useState('');
    const [Sale_Location, setSale_Location] = useState('');
    const [Email, setEmail] = useState('');
    const [User_Name, setUser_Name] = useState('');
    const [Password, setPassword] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleFirst_NameChange = (e) => {
        setFirst_Name(e.target.value);
    };
    const handleLast_NameChange = (e) => {
        setLast_Name(e.target.value);
    };
    const handleName_OwnerChange = (e) => {
        setName_Owner(e.target.value);
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
    const handleBrandsChange = (e) => {
        setBrands(e.target.value);
    };
    const handleSale_LocationChange = (e) => {
        setSale_Location(e.target.value);
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
        console.log('Naam:', naam);
        console.log('E-mail:', email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Naam:</label>
                <input
                    type="text"
                    value={naam}
                    onChange={handleNaamChange}
                />
            </div>
            <div>
                <label>E-mail:</label>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <button type="submit">Inschrijven</button>
        </form>
    );
}

export default Inschrijf_Form;
