import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AgeVerification = () => {
    const [birthdate, setBirthdate] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(false); // Gebruik 'setError' in plaats van 'toggleError'


    const handleVerification = (date) => {
        const today = new Date();
        const selectedDate = new Date(date);
        let age = today.getFullYear() - selectedDate.getFullYear();
        const month = today.getMonth() - selectedDate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < selectedDate.getDate())) {
            age--;
        }

        if (age >= 18) {
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

        <div  className="background_Home text-light">
        <div className="informatie_container">
            <form  onSubmit={handleSubmit} >
                <h1 className="border_top_bottom">leeftijds-controle</h1>
                <h4>Geef je geboorte datum om door te kunnen gaan:</h4>
                <input
                    type="date"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                />
                <button className="bttn " type="submit"><p>controleren</p></button>
                {error && (
                    <h5 className="error">Je bent nog geen 18, je moet nog even jaar wachten.</h5>
                )}
            </form>
        </div>
        </div>
    );
};

export default AgeVerification;
