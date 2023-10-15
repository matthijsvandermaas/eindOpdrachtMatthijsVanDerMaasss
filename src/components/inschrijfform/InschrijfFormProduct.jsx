import React, { useState } from 'react';
import './InschrijfForm.css';
import inschrijf_Navigatiepagina from "../../pages/Inschrijving_Navigatie/inschrijf_Navigatie.jsx";
function InschrijfFormProduct() {
    const [Name_Product, setName_Product] = useState('');
    const [Name_Producer, setName_Producer] = useState('');
    const [Percentage, setPercentage] = useState(0.0);
    const [Email, setEmail] = useState('');
    const [Color, setColor] = useState('');
    const [Tast, setTast] = useState('');
    const [Volume, setVolume] = useState(0.0);
    const [Location_Producer, setLocation_Producer] = useState('');
    const [Photo, setPhoto] = useState(null);
    const [Photo2, setPhoto2] = useState(null);
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
    const handlePhotoChange = (e) => {
        const file = e.target.files[0]; // Pak het eerste geselecteerde bestand
        setPhoto(file);
    };
    const handlePhoto2Change = (e) => {
        const file = e.target.files[0]; // Pak het eerste geselecteerde bestand
        setPhoto2(file);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Productnaam:', Name_Product);
        console.log('Producentennaam:', Name_Producer);
        console.log('Percentage:', Percentage);
        console.log('E-mail:', Email);
        console.log('Kleur:', Color);
        console.log('Smaak:', Tast);
        console.log('Volume(cc):', Volume);
        console.log('Locatie Producent:', Location_Producer);
        const [Photo, setPhoto] = useState(null);
        const [Photo2, setPhoto2] = useState(null);
    };

    return (
        <div className="form-container ">
            <h1>Een biertje toevoegen</h1>
            <div className="form-content border_top_bottom background">
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
                            step="0.1"
                            min="0.1"
                            max="14.9"
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
                            step="0.1"
                            min="100.0"
                            max="1000.0"
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
                    <div>
                        <label>Voeg een foto toe:</label>
                        <input type="file" accept="image/*" onChange={handlePhotoChange} />
                    </div>
                    <div>
                        <label>Voeg nog een foto toe:</label>
                        <input type="file" accept="image/*" onChange={handlePhoto2Change} />
                    </div>
                    <button className="bttn" type="submit" onClick={inschrijf_Navigatiepagina}>(Terug naar de inschrijf pagina) fixen!!</button>
                    <button className="bttn" type="submit">Inschrijven</button>

                </form>
            </div>
        </div>
    );
}

export default InschrijfFormProduct;
