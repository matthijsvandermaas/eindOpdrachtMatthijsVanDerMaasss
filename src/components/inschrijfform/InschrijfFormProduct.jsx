import React, { useState } from 'react';
import axios from 'axios';
import './InschrijfForm.css';
import Cubes from '../cubes/Cubes.jsx';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";





function InschrijfFormProduct() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleFormSubmit(data) {
        setIsSubmitting(true);
        console.log(data);

        try {
            const response = await axios.post('http://localhost:8081/producten', data);
            console.log(response.data);
            navigate('/signIn');
        } catch (e) {
            console.error(e);
            console.error('Error status:', e.response.status);
            console.error('Error data:', e.response.data);
        }
    }
    async function handleFileSubmit(data) {
        setIsSubmitting(true);

        const formData = new FormData();
        formData.append('productName', data.productName);
        formData.append('nameBrewer', data.nameBrewer);
        // Andere formuliergegevens toevoegen aan formData

        formData.append('file', data.file[0]);
        formData.append('file2', data.file2[0]);

        try {
            const response = await axios.post('http://localhost:8081/producten/add_files', formData);
            console.log(response.data);
            navigate('/signIn');
        } catch (e) {
            console.error(e);
        } finally {
            setIsSubmitting(false);
        }
    }








    // const handleSubmitData = async (e) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);
    //
    //     try {
    //         const formDataToSend = new FormData();
    //         Object.keys(formData).forEach((key) => {
    //             if (key === 'photo' || key === 'photo2' || key === 'photo3') {
    //                 formDataToSend.append(key, formData[key]);
    //             } else {
    //                 formDataToSend.append(key, formData[key]);
    //             }
    //         });
    //
    //         const response = await axios.post('http://localhost:8081/producten', formDataToSend);
    //
    //         if (response && response.data) {
    //             console.log(response.data);
    //             setErrorMessage('Er is een fout opgetreden bij de inschrijving. Probeer het later opnieuw.');
    //
    //         } else {
    //             console.error('Fout bij het versturen van het verzoek: ongeldige reactie');
    //             setErrorMessage('Er is een fout opgetreden bij de inschrijving. Probeer het later opnieuw.');
    //         }
    //     } catch (error) {
    //         console.error('Fout bij het versturen van het verzoek:', error);
    //
    //         if (error.response && error.response.status) {
    //             console.log('Fout Status Code:', error.response.status);
    //         }
    //
    //         setErrorMessage('Er is een fout opgetreden bij de inschrijving. Probeer het later opnieuw.');
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };
//TOOD checken of dit werkt
    return (
        <div className="form-container">
            <h1>Een biertje toevoegen</h1>
            <div className="form-content border_top_bottom background">
                <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                        <input name="%" type="number" id="alcohol" placeholder="Voer hier het alcohol% van het bier in." {...register('alcohol', { required: 'alcohol % is verplicht' })} />
                    </div>
                    <div>
                       <label>IBU</label>
                    <input name="IBU" step="0.1" min="0.1" type="number" id="ibu"  placeholder="Voer hier de IBU van het bier in."{...register('ibu')}/>
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
                    <div>
                        <label>Voeg een foto toe:</label>
                        <input name="file" type="file" accept="image/*" onChange={(e) => handleFileSubmit({ file: e.target.files[0] })} required />
                    </div>
                    <div>
                        <label>Voeg nog een foto toe:</label>
                        <input type="file" name="file2" accept="image/*" onChange={(e) => handleFileSubmit({ file2: e.target.files[0] })} required />
                    </div>
                    <button className="bttn" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Bezig met een product toevoegen...' : 'toevoegen'}
                    </button>
                </form>
                <p>Ander pagina's</p>
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
