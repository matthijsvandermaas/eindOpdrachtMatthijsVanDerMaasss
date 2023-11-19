import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import '../../components/inschrijfform/InschrijfForm.css';
import jwt_Decode from "jwt-decode";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        setLoading(true);

        try {
            const token = localStorage.getItem('token');


            const response = await axios.post("http://localhost:8081/authenticate", {
                username: email,
                password,
                role,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            console.log('Authorization Header:', `Bearer ${token}`);

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
                            <option value='ADMIN'>beheerder</option>
                        </select>
                    </label>
                    <button className="bttn" type="submit" disabled={loading}>
                        {loading ? 'Momentje even kijken wie je bent...' : 'Inloggen'}
                    </button>
                    {error && <p className="error">Combinatie van e-mailadres en wachtwoord is onjuist.</p>}
                </form>
                <p>Heb je nog geen account? <Link to="/inschrijfformulier"><strong>schrijf je snel in!</strong></Link>.</p>
            </div>
        </>
    );
}

export default SignIn;
