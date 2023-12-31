import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './InschrijfForm.css';
import Cubes from "../../components/cubes/Cubes.jsx";

function InschrijfForm() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState("");
const userRole = localStorage.getItem('role');
    async function handleFormSubmit(data) {
        const newData = { ...data, roles: [data.roles] };
        setIsSubmitting(true);
        console.log(newData);
        try {
            await axios.post('http://localhost:8081/users', newData, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,

            });
                console.log("User form submission completed");
            console.log(newData);
            navigate('/SignIn');
        } catch (e) {
            console.error('Response fout:', newData);
            setErrorMessage("Er gaat iets fout met het verwerken van de gegevens: ");
        } finally {
            setIsSubmitting(false);
            console.log("User form submission completed");
        }
    }

    return (
        <>
            <div className="form-container">
                <h1>inschrijven</h1>
                <div>
                    <form className=" form-container form-content border_top_bottom background" onSubmit={handleSubmit(handleFormSubmit)}>
                      <div>
                        <label>Gebruikersnaam:</label>
                          <input name="Gebruikersnaam" type="text" id="username" placeholder="Voer hier je gebruikersnaam in." {...register('username', { required: 'Gebruikersnaam is verplicht' })} />
                      </div>
                       <div>
                        <label>Wachtwoord:</label>
                           <input name="Wachtwoord" type="password" id="password" placeholder="Voer hier je wachtwoord in." {...register('password', { required: 'Wachtwoord is verplicht' })} />
                       </div>
                        <div>
                           <label>Voornaam:</label>
                        <input name="Voornaam" type="text" id="firstName" placeholder="Voer hier je voornaam in." {...register('firstName', { required: 'Voornaam is verplicht' })} />
                        </div>
                        <div>
                            <label>Achternaam:</label>
                        <input name="Achternaam" type="text" id="lastName" placeholder="Voer hier je (tussenvoegsel en) achternaam in." {...register('lastName', { required: '(tussenvoegsel en)achternaam is verplicht' })} />
                        </div>
                        <div>
                            <label>Bedrijfsnaam:</label>
                        <input name="Bedrijfsnaam" type="text" id="company" placeholder="Voer hier je bedrijfsnaam in." {...register('company')} />
                        </div>
                        <div>
                            <label>e-mail:</label>
                        <input type="email" id="email" placeholder="Voer hier je e-mailadres in." {...register('email', { required: 'E-mail is verplicht' })} />
                        </div>
                        <div>
                        <label>Account type:</label>
                        <select name="roles" id="roles" {...register('roles', { required: 'Brouw je bier of drink je het alleen?' })}>
                            <option value='USER'>liefhebber</option>
                            <option value='BREWER'>brouwer</option>
                            <option value='ADMIN' disabled={userRole !== 'ADMIN'}>beheerder</option>
                        </select>
                        </div>
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button className="bttn" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Momentje ik kom zo bij u...' : 'toevoegen'}
                        </button>
                    </form>
                </div>
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
        </>
    );
}

export default InschrijfForm;