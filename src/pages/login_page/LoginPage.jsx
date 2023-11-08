import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css';
import axios from 'axios';
import Slider from '../../components/slider/Slider';
import slider_Img_One from '../../assets/hoe maak je bier/hop.png';
import slider_Img_Two from '../../assets/hoe maak je bier/yeast.png';
import slider_Img_Three from '../../assets/hoe maak je bier/malt.png';
import slider_Img_Four from '../../assets/hoe maak je bier/gist.png';
import Cubes from '../../components/cubes/Cubes';
import AuthenticationContext from '../../context/AuthenticationContext';

function LoginPage() {
    const { login } = useContext(AuthenticationContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(false);
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:3001/login', {
                username: email,
                password: password,
            });

            console.log('Gebruiker is ingelogd!');
            login(response.data.token);
            // Redirect of andere acties na inloggen
        } catch (error) {
            console.error(error);
            setError(true);
            console.log('Gebruiker is niet ingelogd!');
        }

        setLoading(false);
    };

    return (
        <>
            <div className="outer-login-container">
                <div>
                    <Slider
                        slider_Img1={slider_Img_1}
                        slider_Img2={slider_Img_2}
                        slider_Img3={slider_Img_3}
                        slider_Img4={slider_Img_4}
                        slideIndex={slideIndex}
                        setSlideIndex={setSlideIndex}
                    />
                </div>
                <h2>{!isAuthenticated ? 'Inloggen' : 'Uitloggen'}</h2>
                <form onSubmit={handleLogin} className=" form-content background-login">
                    <div>
                        <label htmlFor="email-field">E-mailadres:
                            <input
                                type="username"
                                id="email-field"
                                name="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password-field">Wachtwoord:
                            <input
                                type="password"
                                id="password-field"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                    </div>
                    <h5>Ben je nog geen lid? Kom erbij en <Link to="/inschrijfformulier"><strong> schrijf je in</strong></Link>
                    </h5>
                    {error && <h5 className="error">Dit account bestaat al. Probeer een ander e-mailadres.</h5>}
                    <button type="submit" className="bttn" onClick={!isAuthenticated ? login : logout}   disabled={loading}>
                        {!isAuthenticated ? 'inloggen' : 'uitloggen'}
                    </button>
                </form>
                <p>Ander formulieren</p>
                <Cubes
                    button_1="Een bierliefhebber" navigate_1="/inschrijfformulier_particulier"
                    button_2="Een brouwer" navigate_2="/inschrijfformulier_producent"
                    button_3="Een nieuw biertje" navigate_3="/inschrijfformulier_product"
                    button_4="Home" navigate_4="/"
                />
            </div>
        </>
    );
}


export default LoginPage;
