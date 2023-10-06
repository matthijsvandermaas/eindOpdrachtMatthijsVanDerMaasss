import React, { useState } from 'react';
import './Inschrijf_Form.css';

function Inschrijf_Form_Particulier() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Voornaam:', firstName);
        console.log('Achternaam:', lastName);
        console.log('E-mail:', email);
        console.log('Gebruikersnaam:', userName);
        console.log('Wachtwoord:', password);
    };

    return (
        <>
        <div className="form-container">
            <h1>Inschrijfformulier voor bierliefhebbers</h1>
            <div className="form-content">

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Voornaam:</label>
                        <input type="text" value={firstName} onChange={handleFirstNameChange} />
                    </div>
                    <div>
                        <label>Achternaam:</label>
                        <input type="text" value={lastName} onChange={handleLastNameChange} />
                    </div>
                    <div>
                        <label>E-mail:</label>
                        <input type="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div>
                        <label>Gebruikersnaam:</label>
                        <input type="text" value={userName} onChange={handleUserNameChange} />
                    </div>
                    <div>
                        <label>Wachtwoord:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <button className="bttn" type="submit">Inschrijven</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Inschrijf_Form_Particulier;
