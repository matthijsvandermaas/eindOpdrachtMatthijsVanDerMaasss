import { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {AuthenticationContext} from "../../context/AuthenticationContext";
// import {response} from "../../context/AuthenticationContext";


function SignIn() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthenticationContext);
    const [loading, toggleLoading] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('http://localhost:8081/Auth', {
                email: "tonystark@starktech.com",
                password: "ironman",
                role: 'USER',

            });
            // log het resultaat in de console
            console.log(result.data);
            toggleLoading(true);
            navigate("/home");

            // geef de JWT-token aan de login-functie van de context mee
            login(result.data.accessToken);

        } catch(e) {
            console.error(e);
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

                <button className="bttn bttn_small"
                    type="submit">
                   Inschrijven
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;