import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('POST http://localhost:8081/users/register', {
                email: email,
                password: password,
            });
            navigate('/signIn');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
        <>
            <h1>Registreren</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mailadres:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Wachtwoord:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="error">Oeps! De opgegeven combinatie van e-mail en wachtwoord is niet correct. Controleer je gegevens en probeer het opnieuw.</p>}
                <button type="submit" className="form-button" disabled={loading}>
                    Registreren
                </button>
            </form>

            <p>
                Heb je al een account? Je kunt je <Link to="/signIn">hier</Link> inloggen.
            </p>
        </>
    );
}

export default SignUp;
