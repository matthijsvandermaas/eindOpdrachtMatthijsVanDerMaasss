import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Cubes from "../../components/cubes/Cubes";
import { AuthContext, useAuth } from '../../context/AuthContext';

function Profile() {
    const [userData, setUserData] = useState(null);
    const { username } = useAuth();
    const { token } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            setError(false);
            setLoading(true);

            try {
                console.log('Sending request with token:', token);
                const response = await axios.get(`http://localhost:8081/users/${username}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                setUserData(response.data);
            } catch (error) {
                console.error('Fout bij het ophalen van gebruikersgegevens:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        void fetchUserData();
    }, [username, token]);


    const buildUserInfo = (userData) => {
        if (!userData) {
            return null;
        }

        return (
            <div className="form-content border_top_left background" key={userData.username}>
                <h2>Gebruiker: {userData.username}</h2>
                <p>Voornaam: {userData.firstName}</p>
                <p>Achternaam: {userData.lastName}</p>
                <p>E-mail: {userData.email}</p>
                <p>Bedrijf: {userData.company}</p>
            </div>
        );
    };

    return (
        <>
            <div>
                <h1>Mijn gegevens</h1>
                <form className="form-content">{buildUserInfo(userData)}</form>
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
