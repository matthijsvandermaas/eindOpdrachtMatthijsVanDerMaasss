import React, { useState } from 'react';
import axios from 'axios';
import './InschrijfForm.css';
import { useForm } from 'react-hook-form';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import InschrijfFormFileComponent from './FormFileCompontent.jsx';
import Cubes from "../cubes/Cubes";

function InschrijfFormProduct() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [fileData, setFileData] = useState({ file: null });

    const scrollToAlgemene_info = () => {
        algemene_infoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };




    async function handleFormSubmit(formData) {
        setIsSubmitting(true);

        try {
            const createProductWithPhoto = await axios.post(
                'http://localhost:8081/products/createProduct',
                formData,
                {
                    headers: {'Content-Type': 'multipart/form-data'},
                    withCredentials: true,
                }
            );
            console.log('De gegevens zijn verstuurd',formData, createProductWithPhoto.data);
        } catch (e) {
            console.error('Er gaat iets fout met het verwerken van de gegevens', e);
            setErrorMessage('Er gaat iets fout met het verwerken van de gegevens: ' + e.message);
        } finally {
            setIsSubmitting(false);
            console.log('Form submission completed');
        }
    }

    async function handleFileSubmit() {
        setIsSubmitting(true);
        const fileInfo = new FormData();

        if (fileData.file) {
            fileInfo.append('file', fileData.file);
        }

        try {
            const createProductWithPhoto = await axios.post(
                'http://localhost:8081/fileDocuments/upload',
                fileInfo,
                {
                    headers: {
                        // 'Content-Type': 'multipart/form-data',
                    },

                    withCredentials: true,
                }
            );
            navigate('/alle_producten');
            console.log('De gegevens zijn verstuurd', fileInfo, createProductWithPhoto.data);
        } catch (e) {
            console.error('Er gaat iets fout met het verwerken van de files', e);
            setErrorMessage('Er gaat iets fout met het verwerken van de files: ' + e.message);
        } finally {
            setIsSubmitting(false);
            console.log('Product form submission completed');
        }
    }

        return (
            <div className="form-container">
                <h1>Een biertje toevoegen</h1>
                <div className="form-content" >
                    <form className="background  border_top_bottom"      onSubmit={handleSubmit(handleFormSubmit)} encType="multipart/form-data">
                        <div>
                        <label>Productnaam:</label>
                        <input name="Productnaam" type="text" id="productName"
                               placeholder="Voer hier de productnaam in." {...register('productName', {required: 'productnaam is verplicht'})} />
                            </div>
                            <div>
                        <label>Naam brouwer:</label>
                        <input name="Naam brouwer" type="text" id="nameBrewer"
                               placeholder="Voer hier de naam van de brouwer in." {...register('nameBrewer', {required: 'naam brouwer is verplicht'})} />
                            </div>
                            <div>
                        <label>Locatie brouwer:</label>
                        <input name="Locatie brouwer" type="text" id="productionLocation"
                               placeholder="Voer hier de locatie van de brouwer in." {...register('productionLocation',)} />
                            </div>
                            <div>
                            <label>Smaak:</label>
                            <input type="text" id="tast"
                                   placeholder="Voer in hier het bier smaakt." {...register('tast', {required: 'smaak is verplicht'})} />
                        </div>
                        <div>
                            <br/>
                            <label>Type:</label>
                            <select name="type" id="type" {...register('type', {required: 'type is verplicht'})}>
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
                            <input name="alcohol" type="number" step="0.1" min="0.1" max="14.0" id="alcohol"
                                   placeholder="Voer hier het alcohol% van het bier in." {...register('alcohol', {required: 'alcohol % is verplicht'})} />
                        </div>
                        <div>
                            <label>IBU</label>
                            <input name="IBU" step="0.1" min="0.1" type="number" id="ibu"
                                   placeholder="Voer hier de IBU van het bier in."{...register('ibu is niet verplicht')}/>
                        </div>
                        <div>
                            <label>Kleur:</label>
                            <select name="color" id="color" {...register('color', {required: 'Kleur is verplicht'})}>
                                <option value="">Selecteer een kleur</option>
                                <option value="bleek/licht blond">Bleek/licht blond (6-9 EBC)</option>
                                <option value="blond/geel">Blond/geel (9-12 EBC)</option>
                                <option value="goud">Goud (12-20 EBC)</option>
                                <option value="amber">Amber (20-30 EBC)</option>
                                <option value="koper">Koper (30-45 EBC)</option>
                                <option value="donker koper/bruin">Donker koper/bruin (45-75 EBC)</option>
                                <option value="zeer donker bruin (doorschijnend)">Zeer donker bruin (doorschijnend) (>75 EBC)</option>
                                <option value="zwart (niet doorschijnend)">Zwart (niet doorschijnend) (>120 EBC)</option>
                            </select>
                        </div>
                        <div>
                            <label>Volume(cc):</label>
                            <input name="volume" step="0.1" min="100.0" max="1000.0" type="number" id="volume"
                                   placeholder="Voer hier de indoud van het flesje in." {...register('volume', {required: 'volume is verplicht'})} />
                        </div>
                        <div>
                            <p>Vragen over de terminologie in het bierproces of wilt u meer informatie?</p>
                            <p>Ga dan naar<NavLink to="/Productie_Informatie#algemene-informatie" onClick={scrollToAlgemene_info}><strong> Hoe maak je bier</strong></NavLink>.</p>
                        </div>
                        <div className="border_top_bottom background"  >
                            <InschrijfFormFileComponent setFileData={setFileData} OnChangeLink={handleFileSubmit}/>
                            <InschrijfFormFileComponent setFileData={setFileData} OnChangeLink={handleFileSubmit}/>
                        </div>
                        <button className="bttn" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Bezig met een product toevoegen momentje...' : 'toevoegen'}
                                                </button>
                    </form>

                </div> <Cubes
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
        );
    }
export default InschrijfFormProduct;