// Inschrijf_Form.jsx
import React, { useState } from 'react';

function Inschrijf_Form() {
    const [naam, setNaam] = useState('');
    const [email, setEmail] = useState('');

    const handleNaamChange = (e) => {
        setNaam(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
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
