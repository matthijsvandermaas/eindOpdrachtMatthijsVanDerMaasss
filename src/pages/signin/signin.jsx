import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../../context/AuthContext';
import {useForm} from 'react-hook-form';
import Cubes from "../../components/cubes/Cubes.jsx";
import '../signupform/InschrijfForm.css';

function SignIn() {
    const {isAuth, logout, login} = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, setValue } = useForm();
    useEffect(() => {
        register("role", );
        register("username", );
    }, [register]);


async function handleFormSubmit(data) {
    try {
        setError(false);
        setLoading(true);

        const response = await axios.post("http://localhost:8081/authenticate", data);
        console.log(response.data);

        const receivedUsername = data.username;
        localStorage.setItem('username', receivedUsername);

        const receivedRole = data.role;
        localStorage.setItem('role', receivedRole);
        console.log("Received Role:", data.role);
        login(response.data.Authorization, data.username, data.role);

        navigate('/home');
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
                        name="username"
                        placeholder="Voer hier je gebruiksnaam in."
                        {...register("username", {
                            required: {value: true, message: "Gebruikersnaam is verplicht."}
                        })}
                    />
                </label>
                <label htmlFor="password">Wachtwoord:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Voer hier je wachtwoord in."
                        {...register("password", {
                            required: {value: true, message: "Wachtwoord is verplicht"}
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
                button_1="inschrijven"
                navigate_1="/inschrijfformulier"
                button_2="Hoe maak je bier"
                navigate_2="/productie_Informatie"
                button_3="Het drankorgel"
                navigate_3="/drankorgel"
                button_4="Home"
                navigate_4="/home"

            />
        </div>
    </>
);
}

export default SignIn;
