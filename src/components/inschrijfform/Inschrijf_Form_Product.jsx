import React, { useState } from 'react';
import './Inschrijf_Form_Product.css';

function Inschrijf_Form_Particulier() {
    const [Name_Product, setName_Product] = useState('');
    const [Name_Producer, setName_Producer] = useState('');
    const [Percentage, setPercentage] = useState(0.0);
    const [Email, setEmail] = useState('');
    const [Color, setColor] = useState('');
    const [Tast, setTast] = useState('');
    const [Volume, setVolume] = useState(0);
    const [Location_Producer, setLocation_Producer] = useState('');

    const handleName_ProductChange = (e) => {
        setName_Product(e.target.value);
    };

    const handleName_ProducerChange = (e) => {
        setName_Producer(e.target.value);
    };

    const handlePercentageChange = (e) => {
        setPercentage(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleTastChange = (e) => {
        setTast(e.target.value);
    };

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    };

    const handleLocation_ProducerChange = (e) => {
        setLocation_Producer(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hier kun je de ingevoerde gegevens verwerken, bijvoorbeeld naar een API verzenden of lokaal opslaan
        console.log('Productnaam:', Name_Product);
        console.log('Producentnaam:', Name_Producer);
        console.log('Percentage:', Percentage);
        console.log('E-mail:', Email);
        console.log('Kleur:', Color);
        console.log('Smaak:', Tast);
        console.log('Volume(cc):', Volume);
        console.log('Locatie Producent:', Location_Producer);
    };

    return (
        <>
            <h3>inschrijf formulier voor product</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Productnaam:</label>
                    <input
                        type="text"
                        value={Name_Product}
                        onChange={handleName_ProductChange}
                    />
                </div>
                <div>
                    <label>Producentnaam:</label>
                    <input
                        type="text"
                        value={Name_Producer}
                        onChange={handleName_ProducerChange}
                    />
                </div>
                <div>
                    <label>Percentage:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={Percentage}
                        onChange={handlePercentageChange}
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
                    <label>Kleur:</label>
                    <input
                        type="text"
                        value={Color}
                        onChange={handleColorChange}
                    />
                </div>
                <div>
                    <label>Smaak:</label>
                    <input
                        type="text"
                        value={Tast}
                        onChange={handleTastChange}
                    />
                </div>
                <div>
                    <label>Volume(cc):</label>
                    <input
                        type="number"
                        step="0.01"
                        value={Volume}
                        onChange={handleVolumeChange}
                    />
                </div>
                <div>
                    <label>Locatie Producent:</label>
                    <input
                        type="text"
                        value={Location_Producer}
                        onChange={handleLocation_ProducerChange}
                    />
                </div>
                <button type="submit">Inschrijven</button>
            </form>
        </>
    );
}

export default Inschrijf_Form_Particulier;
