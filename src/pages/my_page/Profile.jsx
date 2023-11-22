
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cubes from "../../components/cubes/Cubes";




function Profile() {
        const [userData, setUserData] = useState(null);

        useEffect(() => {
            // Haal gebruikersgegevens op van de API
            const fetchUserData = async () => {
                try {
                    const response = await fetch('http://localhost:8081/users');
                    const data = await response.json();
                    setUserData(data);
                } catch (error) {
                    console.error('Fout bij het ophalen van gebruikersgegevens:', error);
                }
            };

            fetchUserData();
        }, []);

        const buildUserInfo = (userData) => {
            const jsxElements = [];
            if (userData) {
                userData.forEach((user) => {
                    jsxElements.push(
                        <div className=" form-content border_top_left background" key={user.id}>
                            <h2>Gebruiker: {user.username}</h2>
                            <p>Voornaam: {user.firstName}</p>
                            <p>Achternaam: {user.lastName}</p>
                            <p>E-mail: {user.email}</p>
                            <p>Bedrijf: {user.company}</p>
                        </div>
                    );
                });
            }
            return jsxElements;
        };

        return (
            <>
            <div >
                <h1>Mijn gegevens</h1>
                <form className="form-content">
                    {buildUserInfo(userData)}
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
    };




export default Profile;