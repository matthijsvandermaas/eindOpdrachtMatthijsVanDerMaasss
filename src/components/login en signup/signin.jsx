import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {AuthenticationContext} from "../../context/AuthenticationContext.jsx";


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { loginContext } = useContext(AuthenticationContext);
    const {toggleLoading} = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('http://localhost:3000/login', {
                email: "tonystark@starktech.com",
                password: "ironman",
                role: 'USER',

            });
            // log het resultaat in de console
            console.log(result.data);
            toggleLoading(true);

            // geef de JWT-token aan de login-functie van de context mee
            loginContext(result.data.accessToken);
            ;

        } catch(e) {
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            toggleError(true);
            toggleLoading(false);

        }
    }

    return (
        <>
            <h1>Inloggen</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    E-mailadres:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error && <p className="error">Combinatie van e-mailadres en wachtwoord is onjuist</p>}

                <button
                    type="submit"
                    className="form-button"
                >
                   Inschrijven
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;