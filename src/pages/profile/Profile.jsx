import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cubes from "../../components/cubes/Cubes";
import { useAuth } from '../../context/AuthContext';

function Profile() {
    const { authState } = useAuth();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);
        setLoading(true);

        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/users', {
                    // headers: {
                    //     Authorization: `Bearer ${token}`,
                    //     'Content-Type': 'application/json',
                    // },
                });
                setUserData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        void fetchUserData();
    }, []);

    const buildUserInfo = (userData) => {
        return userData.map((user) => (
            <div className="form-content border_top_left background" key={user.username}>
                <h2>Gebruiker: {user.username}</h2>
                <p>Voornaam: {user.firstName}</p>
                <p>Achternaam: {user.lastName}</p>
                <p>E-mail: {user.email}</p>
                <p>Bedrijf: {user.company}</p>
            </div>
        ));
    };

    return (
        <>
            <div>
                <h1>Mijn gegevens</h1>
                <form className="form-content">
                    {userData ? buildUserInfo(userData) : <p>Momentje even kijken wie je bent...</p>}
                </form>
                <Cubes
                    button_1="Hoe maak je bier"
                    navigate_1="/productie_Informatie"
                    button_2="Het drankorgel"
                    navigate_2="/drankorgel"
                    button_3="Home"
                    navigate_3="/home"
                    button_4="News"
                    navigate_4="/news"
                />
            </div>
        </>
    );
}

export default Profile;
