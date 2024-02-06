import React, {useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import '../../pages/signupform/Form.css';
import Cubes from "../../components/cubes/Cubes";

function InputFormUsers(props) {
    const [isSubmittingAdd, setIsSubmittingAdd] = useState(false);
    const [isSubmittingEdit, setIsSubmittingEdit] = useState(false);
    const [isSubmittingDelete, setIsSubmittingDelete] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const userRole = localStorage.getItem('role');

    async function handleFormSubmit(data) {
        const newData = {...data, roles: [data.roles]};
        setIsSubmittingAdd(true);
        setError(false);
        setLoading(true);
        console.log(newData);
        try {
            await axios.post('http://localhost:8081/users', newData, {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true,

            });
            console.log("User form submission completed");
            console.log(newData);
            navigate('/SignIn');
        } catch (e) {
            console.error('Response fout:', newData);
            setErrorMessage("Er gaat iets fout met het verwerken van de gegevens: ");
        } finally {
            setIsSubmittingAdd(false);
            console.log("User form submission completed");
        }
    }
// neemt delete mee waarom?
    const editProfile = async (formData) => {
        try {
            setUsername(username)
            setIsSubmittingEdit(true)
            const username = formData.get('username');
            await axios.patch(`http://localhost:8081/users/${username}`);
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false);
            setIsSubmittingEdit(false)
        }
    }
    // werkt niet
    const deleteProfile = async ({formData}) => {
        try {
            setUsername(username);
            const username = formData.get('username');
            setIsSubmittingDelete(true)
            await axios.delete(`http://localhost:8081/users/${username}`);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
            setIsSubmittingDelete(false)
        }
    };

    return (
        <>
            <div className="form-container">
                {/* eslint-disable-next-line react/prop-types */}
                <h1>{props.titleForm}</h1>
                {/* eslint-disable-next-line react/prop-types */}
                <h2>{props.subTitleForm}</h2>
                <div>
                    <form id="userForm" className="form-container form-content border_top_left background"
                          onSubmit={handleSubmit(handleFormSubmit)}>
                        <div>
                            <label>Gebruikersnaam:</label>
                            <input name="Gebruikersnaam" type="text" id="username"
                                   placeholder="Voer hier je gebruikersnaam in." {...register('username', {required: 'Gebruikersnaam is verplicht'})} />
                        </div>
                        <div>
                            <label>Wachtwoord:</label>
                            <input name="Wachtwoord" type="password" id="password"
                                   placeholder="Voer hier je wachtwoord in." {...register('password', {required: 'Wachtwoord is verplicht'})} />
                        </div>
                        <div>
                            <label>Voornaam:</label>
                            <input name="Voornaam" type="text" id="firstName"
                                   placeholder="Voer hier je voornaam in." {...register('firstName', {required: 'Voornaam is verplicht'})} />
                        </div>
                        <div>
                            <label>Achternaam:</label>
                            <input name="Achternaam" type="text" id="lastName"
                                   placeholder="Voer hier je (tussenvoegsel en) achternaam in." {...register('lastName', {required: '(tussenvoegsel en)achternaam is verplicht'})} />
                        </div>
                        <div>
                            <label>Bedrijfsnaam:</label>
                            <input name="Bedrijfsnaam" type="text" id="company"
                                   placeholder="Voer hier je bedrijfsnaam in." {...register('company')} />
                        </div>
                        <div>
                            <label>e-mail:</label>
                            <input type="email" id="email"
                                   placeholder="Voer hier je e-mailadres in." {...register('email', {required: 'E-mail is verplicht'})} />
                        </div>
                        <div>
                            <label>Account type:</label>
                            <select name="roles"
                                    id="roles" {...register('roles', {required: 'Brouw je bier of drink je het alleen?'})}>
                                <option value='USER'>liefhebber</option>
                                <option value='BREWER'>brouwer</option>
                                <option value='ADMIN' disabled={userRole !== 'ADMIN'}>beheerder</option>
                            </select>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <div className=" bttn_section form-container">
                            <button className="bttn" type="submit" disabled={isSubmittingAdd}>
                                {isSubmittingAdd ? 'Momentje ik kom zo bij u...' : 'toevoegen'}
                            </button>
                            <button className="bttn" disabled={isSubmittingEdit} onClick={() => editProfile(username)}>
                                {isSubmittingEdit ? 'Momentje ik kom zo bij u...' : 'Wijzigen'}
                            </button>

                        </div>

                    </form>
                </div>
                <div className="form-container">
                    <h2> Gebruiker verwijderen</h2>
                    <form id="deleteForm" className="form-content border_top_left background" onSubmit={deleteProfile}>

                        <div>
                            <label>Gebruikersnaam:</label>
                            <input name="username" type="text" placeholder="Voer hier de gebruikersnaam in" {...register('username', { required: 'Gebruikersnaam is verplicht' })} />
                        </div>
                        <button className="bttn" type="submit" disabled={isSubmittingDelete}>
                            {isSubmittingDelete ? 'Momentje even kijken wie je bent...' : 'Verwijderen'}
                        </button>
                    </form>
                </div>


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

        </>
    );
}

export default InputFormUsers;