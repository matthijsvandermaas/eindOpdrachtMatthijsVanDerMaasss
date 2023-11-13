import React, { useState } from 'react';
import axios from 'axios';
import './InschrijfForm.css';
import Cubes from '../cubes/Cubes.jsx';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import InschrijfFormFile from "./InschrijfFormFile";

function InschrijfFormProduct() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileData, setFileData] = useState({ file: null });



    async function handleFormSubmit(formData) {
        setIsSubmitting(true);
        console.log(formData);

        try {
            const response = await axios.post('http://localhost:8081/product', formData);
            console.log(response.data);
            navigate('/signIn');
        } catch (e) {
            console.error(e);
        }
    }

    async function handleFileSubmit() {
        const formData = new FormData();

        // Voeg het bestand toe aan het FormData-object
        if (fileData.file) {
            formData.append('file', fileData.file);
            console.log(fileData.file)
        }

        try {
            const response = await axios.post('http://localhost:8080/single/uploadDB', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);

            navigate('/home');
            console.log(response.data);
        } catch (e) {
            console.error(e);
            navigate('/error');
        }
    }

    return (
        <div className="form-container">
            <h1>Een biertje toevoegen</h1>
            <div className="form-content border_top_bottom background">
                <form onSubmit={handleSubmit(handleFormSubmit, handleFileSubmit)} encType="multipart/form-data">
                    <label>Productnaam:</label>
                    <input name="Productnaam" type="text" id="productName" placeholder="Voer hier de productnaam in." {...register('productName', { required: 'productnaam is verplicht' })} />

                    <label>Naam brouwer:</label>
                    <input name="Naam brouwer" type="text" id="nameBrewer" placeholder="Voer hier de naam van de brouwer in." {...register('nameBrewer', { required: 'naam brouwer is verplicht' })} />

                    <label>Locatie brouwer:</label>
                    <input name="Locatie brouwer" type="text" id="productionLocation" placeholder="Voer hier de locatie van de brouwer in." {...register('productionLocation', )} />
                    <div>
                        <label>Type:</label>
                        <select name="type" id="type" {...register('type', { required: 'type is verplicht' })}>
                            <option value="">Selecteer een bierstijl</option>
                            <option value="Lager">Lager</option>
                            <option value="Ale">Ale</option>
                            <option value="Witbier">Witbier</option>
                            <option value="Weizer">Weizer</option>
                            <option value="IPA">IPA</option>
                            <option value="Stout">Stout</option>
                            <option value="Porter">Porter</option>
                            <option value="Pilsner">Pilsner</option>
                            <option value="Amber Ale">Amber Ale</option>
                            <option value="Saison">Saison</option>
                            <option value="Tripel">Tripel</option>
                            <option value="Barleywine">Barleywine</option>
                        </select>
                    </div>
                    <div>
                        <label>Alcoholpercentage:</label>
                        <input name="alcohol" type="number" step="0.1" min="0.1" max="14.0" id="alcohol" placeholder="Voer hier het alcohol% van het bier in." {...register('alcohol', { required: 'alcohol % is verplicht' })} />
                    </div>
                    <div>
                        <label>IBU</label>
                        <input name="IBU" step="0.1" min="0.1" type="number" id="ibu"  placeholder="Voer hier de IBU van het bier in."{...register('ibu is niet verplicht')}/>
                    </div>
                    <div>
                        <label>Kleur:</label>
                        <input type="text" id="color" placeholder="Voer hier de kleur van het bier in." {...register('color', { required: 'kleur is verplicht' })} />

                    </div>
                    <div>
                        <label>Smaak:</label>
                        <input type="text" id="tast" placeholder="Voer in hier het bier smaakt." {...register('tast', { required: 'smaak is verplicht' })} />
                    </div>
                    <div>
                        <label>Volume(cc):</label>
                        <input name="volume" step="0.1" min="100.0" max="1000.0" type="number" id="volume" placeholder="Voer hier de indoud van het flesje in." {...register('volume', { required: 'volume is verplicht' })} />
                    </div>
                    <InschrijfFormFile setFileData={setFileData} />
                    <InschrijfFormFile setFileData={setFileData} />
                    <button className="bttn" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Bezig met een product toevoegen...' : 'toevoegen'}
                    </button>

                </form>
                <p>Ander leuks</p>
                <Cubes
                    button_1="Hoe maak je bier"
                    navigate_1="/productie_Informatie"
                    button_2="Het drankorgel"
                    navigate_2="/drankorgel"
                    button_3="Home"
                    navigate_3="/home"
                    button_4="News"
                    navigate_4="/news"
                />
            </div>
        </div>
    );
}

export default InschrijfFormProduct;