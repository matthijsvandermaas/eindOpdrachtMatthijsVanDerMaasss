import React, { useState } from 'react';
import './Inschrijf_Form.css'

function Inschrijf_Form() {
    const [userType, setUserType] = useState('particulier'); // Standaard gebruikerstype is 'particulier'

    const [formData, setFormData] = useState({
        First_name: '',
        Last_name: '',
        Email: '',
        User_Name: '',
        Password: '',
    });

    const handleUserTypeChange = (selectedUserType) => {
        setUserType(selectedUserType);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hier kun je de gegevens verwerken op basis van userType en formData
        if (userType === 'particulier') {
            setFormData({
                First_name: '',
                Last_name: '',
                Email: '',
                User_Name: '',
                Password: '',
            });
        } else if (userType === 'zakelijk') {
            setFormData({
                First_name: '',
                Last_name: '',
                Owner: '',
                Name_Brewery: '',
                Street_Name: '',
                House_Number: '',
                Zipcode: '',
                City: '',
                Brand_Name: '',
                Sale_location: '',
                Email: '',
                User_Name: '',
                Password: '',
            });
        } else {
            console.log("Maak een keuze");
        }
    };

    return (
        <div>
            <h2>Inschrijven</h2>
            <div>
                <label>Gebruikerstype:</label>
                <select value={userType} onChange={(e) => handleUserTypeChange(e.target.value)}>
                    <option value="particulier">Particulier</option>
                    <option value="zakelijk">Zakelijk</option>
                </select>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Voornaam:</label>
                    <input
                        type="text"
                        name="First_name"
                        value={formData.First_name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Achternaam:</label>
                    <input
                        type="text"
                        name="Last_name"
                        value={formData.Last_name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Eigenaar / Bedrijfsnaam:</label>
                    <input
                        type="text"
                        name="Owner"
                        value={formData.Owner}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>E-mail:</label>
                    <input
                        type="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Gebruikersnaam:</label>
                    <input
                        type="text"
                        name="User_Name"
                        value={formData.User_Name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Wachtwoord:</label>
                    <input
                        type="password"
                        name="Password"
                        value={formData.Password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Inschrijven</button>
            </form>
        </div>
    );
}

export default Inschrijf_Form;
