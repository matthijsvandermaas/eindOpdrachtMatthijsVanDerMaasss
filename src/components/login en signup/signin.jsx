// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import '../inschrijfform/InschrijfForm.css';



function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); // Voeg state toe voor het geselecteerde accounttype
    const [error, setError] = useState(false);
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    async function handleSubmit(e) {
            e.preventDefault();
            setError(false);
            setLoading(true);
    try {
        const response = await axios.post("http://localhost:8081/authenticate", {
        username: email,
        password,
        role,
        });
        console.log(response.data);
        console.log(response.data.accessToken);
            login(response.data.accessToken);
            navigate("/home");
        } catch (e) {
            console.error(e);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="form-container">
                <h1>Inloggen</h1>
                <form className="form-content border_top_bottom background" onSubmit={handleSubmit}>
                    <label htmlFor="email">E-mailadres:
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor="password">Wachtwoord:
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <label htmlFor="roles">Account type:
                        <select name="roles" id="roles" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="" disabled>Ik ben een:</option>
                            <option value='USER'>liefhebber</option>
                            <option value='BREWER'>brouwer</option>
                            <option value='ADMIN' disabled>beheerder</option>
                        </select>
                    </label>
                    <button className="bttn" type="submit" disabled={loading}>
                        {loading ? 'Momentje even kijken wie je bent...' : 'Inloggen'}
                    </button>
                    {error && <p className="error">Combinatie van e-mailadres en wachtwoord is onjuist</p>}
                </form>
                <p>
                    Heb je nog geen account? <Link to="/inschrijfformulier"><strong>schrijf je snel in</strong></Link>.
                </p>
            </div>
        </>
    );
}

export default SignIn;
