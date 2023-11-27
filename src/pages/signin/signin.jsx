import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import '../signupform/InschrijfForm.css';
import Cubes from "../../components/cubes/Cubes.jsx";



function SignIn() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { isAuth, logout, login} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    async function handleFormSubmit(data) {
        try {
            setError(false);
            setLoading(true);
            const response = await axios.post("http://localhost:8081/authenticate", data);
            login(response.data.Authorization[0], data.username);
            navigate('/alle_producten')
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="form-container">
                <h1>Inloggen</h1>
                <form className="form-content border_top_bottom background" onSubmit={handleSubmit(handleFormSubmit)}>
                    <label htmlFor="username">gebruikersnaam:
                        <input
                            type="text"
                            id="username"
                            placeholder="Voer hier je gebruiksnaam in."
                            {...register("username", {
                                required: { value: true, message: "A username is required" }
                            })}
                        />
                    </label>
                    <label htmlFor="password">Wachtwoord:
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Vier hier je wachtwoord in."
                            {...register("password", {
                                required: { value: true, message: "A password is required" }
                            })}
                        />
                    </label>
                    <button className="bttn" type="submit" disabled={loading}>
                        {loading ? 'Momentje even kijken wie je bent...' : 'Inloggen'}
                    </button>
                    {isAuth ? <button className="bttn" type="submit" onClick={logout}>uitloggen</button> : null}
                    {error && <p className="error">Combinatie van e-mailadres en wachtwoord is onjuist.</p>}
                </form>
                <p>Heb je nog geen account? <Link to="/inschrijfformulier">schrijf je snel in!</Link></p>
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

export default SignIn;
