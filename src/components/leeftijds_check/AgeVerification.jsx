import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AgeVerification = () => {
    const [birthdate, setBirthdate] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(false); // Gebruik 'setError' in plaats van 'toggleError'
    const [yearsRemaining, setYearsRemaining] = useState(0);

    const handleVerification = (date) => {
        const today = new Date();
        const selectedDate = new Date(date);
        const age = today.getFullYear() - selectedDate.getFullYear();
        const month = today.getMonth() - selectedDate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < selectedDate.getDate())) {
            age--;
        }

        if (age >= 18) {
            navigate('/home');
        } else {
            const yearsRemaining = 18 - age;
            setError(true); // Gebruik 'setError' om de 'error'-state bij te werken
            setYearsRemaining(yearsRemaining);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleVerification(birthdate);
    };

    return (
        <div className="form-container border_top_left">
            <form onSubmit={handleSubmit}>
                <h1>leeftijds-controle</h1>
                <h4>Geef je geboorte datum om door te kunnen gaan:</h4>
                <input
                    type="date"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                />
                <button className="bttn" type="submit">controleren</button>
                {error && (
                    <h5 className="error">Je bent nog geen 18, je moet nog even jaar wachten.</h5>
                )}
            </form>
        </div>
    );
};

export default AgeVerification;
