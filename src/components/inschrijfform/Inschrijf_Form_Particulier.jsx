import React, { useState } from 'react';
import './Inschrijf_Form_Particulier.css';

function Inschrijf_Form_Particulier() {


    const [First_name, setFirst_Name] = useState('');
    const [Last_name, setLast_Name] = useState('');
    const [Email, setEmail] = useState('');
    const [User_Name, setUser_Name] = useState('');
    const [Password, setPassword] = useState('');
    const handleFirst_NameChange = (e) => {
        setFirst_Name(e.target.value);
    };

    const handleLast_NameChange = (e) => {
        setLast_Name(e.target.value);
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
        console.log('E-mail:', Email);
        console.log('Gebruikersnaam:', User_Name);
        console.log('Wachtwoord:', Password);
    };

    return (
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
    );
}

export default Inschrijf_Form_Particulier;
