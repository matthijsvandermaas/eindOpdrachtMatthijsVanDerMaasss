import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext.jsx";

export const AgeVerification = () => {
    const [birthdate, setBirthdate] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(false); // Gebruik 'setError' in plaats van 'toggleError'

    // const { ageUser, setAge } = useContext(AuthContext);

    const handleVerification = (date) => {
        const today = new Date();
        const selectedDate = new Date(date);
        let age = today.getFullYear() - selectedDate.getFullYear();
        const month = today.getMonth() - selectedDate.getMonth();
        // console.log(date)
        // setAge(age)

        if (month < 0 || (month === 0 && today.getDate() < selectedDate.getDate())) {
            age--;
        }

        if (age >= 18) {
            localStorage.setItem('age', age);
            navigate('/home');
        } else {
             setError(true);

        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleVerification(birthdate);
    };

    return (

        <div  className="background_Home ">
        <div className="informatie_container">

            <form  onSubmit={handleSubmit} >
                <h1 style={{ color: '#fffef3', textShadow: '2px 2px 2px #2a365c' }}>Welkom bij Beers & Brewkys</h1>
                <h2 style={{ color: '#fffef3', textShadow: '2px 2px 2px #2a365c' }}
                >Geef je geboortedatum om door te kunnen gaan</h2>
                <input
                    type="date"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                />
                <button className="bttn " type="submit"><p>controleren</p></button>
                {error && (
                    <h5 className="error"><p style={{ color: '#fffef3', textShadow: '2px 2px 2px #2a365c' }}>Je bent nog geen 18, je moet nog even wachten.</p></h5>
                )}
            </form>
            </div>
        </div>
    );
};

export default AgeVerification;
