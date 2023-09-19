import React, { useState } from 'react';
import './Product_Inschrijf_form.css';

function Product_Inschrijf_Form() {
    // const [appleCount, setAppleCount] = useState(0);
    const [Name_Product, setName_Product] = useState('');
    const [Name_Producer, setName_Producer] = useState('');
    const [Percentage, setPercentage] = useState(0.0);
    const [Color, setColor] = useState('');
    const [Tast, setTast] = useState('');
    const [Volume, setVolume] = useState(0);
    const [Location_Product, setLocation_Product] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    // Functie om de formuliergegevens te verzenden
    const handleSubmit = (e) => {
        e.preventDefault();

        // Log de ingevoerde gegevens naar de console
        console.log('naam:',Name_Product);
        console.log('brouwerij:', Name_Producer);
        console.log('percentage:', Percentage);
        console.log('kleur:', Color);
        console.log('smaak:', Tast);
        console.log('volume:', Volume);
        console.log('Productie plaats:', Location_Product);
        console.log('Akkoord met voorwaarden:', agreedToTerms);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Naam:</label>
                <input
                    type="text"
                    value={Name_Product}
                    onChange={(e) => setName_Product(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Naam brouwer:</label>
                <input
                    type="text"
                    value={Name_Producer}
                    onChange={(e) => setName_Producer(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>percentage:</label>
                <input
                    type="number"
                    value={Percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>kleur:</label>
                <input
                    type="text"
                    value={Color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>smaak:</label>
                <input
                    type="text"
                    value={Tast}
                    onChange={(e) => setTast(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>volume:</label>
                <input
                    type="number"
                    value={Volume}
                    onChange={(e) => setVolume(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>productie locatie:</label>
                <input
                    type="text"
                    value={Location_Product}
                    onChange={(e) => setLocation_Product(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Akkoord met voorwaarden:</label>
                <input
                    type="checkbox"
                    value={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.value)}
                    required
                />
            </div>


            <button type="submit">Verzenden</button>
        </form>
    );
}

export default Product_Inschrijf_Form;
