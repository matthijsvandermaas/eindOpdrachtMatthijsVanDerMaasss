import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cubes from "../../components/cubes/Cubes";
import { useAuth } from '../../context/AuthContext';

const AllAccounts = () => {
    const [profilesData, setProfilesData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);
        setLoading(true);
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/users');
                setProfilesData(response.data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        void fetchUserData();
    }, []);
    const deleteProfile = async (username) => {
        try {
            // Voer de API-aanroep uit om het profiel te verwijderen
            await axios.delete(`http://localhost:8081/users/${username}`);
            // Verwijder het profiel
            setProfilesData((prevUsersData) => prevUsersData.filter((user) => user.username !== username));
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false);
        }
    };

    const buildProfilesInfo = (profilesData) => {
        return profilesData.map((profile) => (
            <div className="form-content border_top_left background" key={profile.username}>
                <h2>Profiel: {profile.username}</h2>
                <p>Voornaam: {profile.firstName}</p>
                <p>Achternaam: {profile.lastName}</p>
                <p>Bedrijfsnaam: {profile.company}</p>
                <p>Account type: {profile.roles}</p>
                <button className="bttn bttn_small" onClick={() => deleteProfile(profile.username)}>
                    Verwijder profiel
                </button>
                {/*<button className="bttn bttn_small" onClick={() => deleteProfile(profile.username)}>*/}
                {/*    Wijzig profiel*/}
                {/*</button>*/}
            </div>
        ));
    };

    return (
        <>
            <div>
                <h1>Alle accounts</h1>
                <form className="form-content">
                    {profilesData ? buildProfilesInfo(profilesData) : <p>Momentje even kijken wie je bent...</p>}
                    {error && <p>Fout bij het ophalen van gegevens.</p>}
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

export default AllAccounts;
