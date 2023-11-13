import React, {useState} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './InschrijfForm.css';
import Cubes from "../cubes/Cubes"; // Zorg ervoor dat je de juiste stijlen importeert

function InschrijfForm() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);


    async function handleFormSubmit(data) {
        setIsSubmitting(true);
        console.log(data);

        try {
            await axios.post('http://localhost:8081/users/createWithProfile', data, {

                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    jwt: localStorage.getItem('token'),
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            console.log(data);
            navigate('/signIn');
            console.log("de gegevens zijn verstuurd")

        } catch (e) {

            console.error("Er gaat iets fout met het verwerken van de gegevens",e);

        }
    finally {
        setIsSubmitting(false);
    }
    }


    return (
        <>
            <div className="form-container">
                <h1>inschrijven</h1>
                <div className="form-content border_top_bottom background">
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <label>Gebruikersnaam:</label>
                        <input name="Gebruikersnaam" type="text" id="username" placeholder="Voer hier je gebruikersnaam in." {...register('username', { required: 'Gebruikersnaam is verplicht' })} />
                        <label>Wachtwoord:</label>
                        <input name="Wachtwoord" type="password" id="password" placeholder="Voer hier je wachtwoord in." {...register('password', { required: 'Wachtwoord is verplicht' })} />
                        <label>Voornaam:</label>
                        <input name="Voornaam" type="text" id="firstName" placeholder="Voer hier je voornaam in." {...register('firstName', { required: 'Voornaam is verplicht' })} />
                        <label>Achternaam:</label>
                        <input name="Achternaam" type="text" id="lastName" placeholder="Voer hier je (tussenvoegsel en) achternaam in." {...register('lastName', { required: '(tussenvoegsel en)achternaam is verplicht' })} />
                        <label>Bedrijfsnaam:</label>
                        <input name="Bedrijfsnaam" type="text" id="company" placeholder="Voer hier je bedrijfsnaam in." {...register('company')} />
                        <label>e-mail:</label>
                        <input type="email" id="email" placeholder="Voer hier je e-mailadres in." {...register('email', { required: 'E-mail is verplicht' })} />
                        <label>Account type:</label>
                        <select name="roles" id="roles" {...register('roles', { required: 'Brouw je bier of drink je het alleen?' })}>
                            <option value="" disabled>
                                Ik ben een:
                            </option>
                            <option value='["USER"]'>liefhebber</option>
                            {/*<option  value='["ADMIN"]'>admin</option>*/}
                            <option value='["BREWER"]'>brouwer</option>

                        </select>
                        <button className="bttn" type="submit" disabled={isSubmitting}>

                            {isSubmitting ? 'Momentje ik kom zo bij u...' : 'toevoegen'}
                        </button>
                        <p>{isSubmitting ? 'Klik anders even op  een de knoppen hier onder voor ander leuks.' : ''}</p>
                        {/*/TODO via auth zorgen dat tekst veranderd naar "verzenden"*/}
                    </form>

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
        </>
    );
}

export default InschrijfForm;
