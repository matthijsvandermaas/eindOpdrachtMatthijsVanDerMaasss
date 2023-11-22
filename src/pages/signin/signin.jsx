import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import '../signupform/InschrijfForm.css';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedRole, setSelectedRole] = useState('USER');
    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        setLoading(true);

        try {
            const token = localStorage.getItem('token');
            console.log("Token in localStorage:", token);
            if(!token){
                console.log("token is null");
            }else{
                console.log("token is not null");
            }
            const response = await axios.post("http://localhost:8081/authenticate", {
                username: email,
                password,
                role: selectedRole,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }

            });
            console.log('Authorization Header:', `Bearer ${token}`);
            console.log(response.data);
            console.log(response.data.accessToken);

            login(response.data.accessToken);
            navigate("/home");
        } catch (e) {
            console.error(e);
            setError(true);
            localStorage.removeItem('token');
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
                            <select
                                name="roles"
                                id="roles"
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                            >
                                <option value="USER">liefhebber</option>
                                <option value="BREWER">brouwer</option>
                                <option value="ADMIN">beheerder</option>
                            </select>
                        </label>
                        <button className="bttn" type="submit" disabled={loading}>
                        {loading ? 'Momentje even kijken wie je bent...' : 'Inloggen'}
                    </button>
                    {error && <p className="error">Combinatie van e-mailadres en wachtwoord is onjuist.</p>}
                </form>
                <p>Heb je nog geen account? <Link to="/inschrijfformulier">schrijf je snel in!</Link></p>
            </div>
        </>
    );
}


export default SignIn;
