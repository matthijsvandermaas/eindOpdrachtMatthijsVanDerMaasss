import React, { useState } from 'react';
import './InschrijfForm.css';

function InschrijfFormParticulier() {
    const [data, setData] = useState(null);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/particulieren/inschrijving', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_Name: firstName,
                    last_Name: lastName,
                    email: email,
                    user_Name: userName,
                    password: password
                })
            });
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Fout bij het versturen van het verzoek:', error);
        }
    };

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

    return (
        <>
            <div className="form-container">
                <h1>Inschrijfformulier voor bierliefhebbers</h1>
                <div className="form-content">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Voornaam:</label>
                            <input type="text" value={firstName} onChange={handleFirstNameChange}/>
                        </div>
                        <div>
                            <label>Achternaam:</label>
                            <input type="text" value={lastName} onChange={handleLastNameChange}/>
                        </div>
                        <div>
                            <label>E-mail:</label>
                            <input type="email" value={email} onChange={handleEmailChange}/>
                        </div>
                        <div>
                            <label>Gebruikersnaam:</label>
                            <input type="text" value={userName} onChange={handleUserNameChange}/>
                        </div>
                        <div>
                            <label>Wachtwoord:</label>
                            <input type="password" value={password} onChange={handlePasswordChange}/>
                        </div>
                        <button className="bttn" type="submit">Inschrijven</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default InschrijfFormParticulier;
