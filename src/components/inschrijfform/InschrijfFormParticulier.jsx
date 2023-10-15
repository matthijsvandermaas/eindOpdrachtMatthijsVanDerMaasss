import React, {useState} from 'react';
import './InschrijfForm.css';
import inschrijf_Navigatiepagina from "../../pages/Inschrijving_Navigatie/inschrijf_Navigatie.jsx";
import Cubes from "../cubes/Cubes.jsx";

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
                <h1>Inschrijven als bierliefhebbers</h1>
                <div className="form-content border_top_bottom background">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Voornaam:</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                placeholder="voornaam"/>
                        </div>
                        <div>
                            <label>Achternaam:</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={handleLastNameChange}
                                placeholder="tusenvoegsel en achternaam"/>
                        </div>
                        <div>
                            <label>E-mail:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="e-mail"/>
                        </div>
                        <div>
                            <label>Gebruikersnaam:</label>
                            <input
                                type="text"
                                value={userName}
                                onChange={handleUserNameChange}
                                placeholder="gebruikersnaam"/>
                        </div>
                        <div>
                            <label>Wachtwoord:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="wachtwoord"/>
                        </div>
                        <button className="bttn" type="submit">Inschrijven</button>
                    </form>
                    <p>Ander formulieren</p>
                    <Cubes
                        button_1="Een nieuwe biertje"
                        navigate_1="/inschrijfformulier_product"
                        button_2="Een brouwer"
                        navigate_2="/inschrijfformulier_producent"
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

export default InschrijfFormParticulier;
