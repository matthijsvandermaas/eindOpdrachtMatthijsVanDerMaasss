import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cubes from "../../components/cubes/Cubes";
import {useAuth} from '../../context/AuthContext';

function AllAccounts() {
    const {authState} = useAuth();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setLoading(true);

            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8081/users/${authState.username}`, {
                    headers: {
                        Authorization: `Bearer ${token}`, 'Content-Type': 'application/json',
                    },
                });
                setUserData(response.data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const buildUserInfo = (user) => (<div className="form-content border_top_left background" key={user.username}>
            <h2>Gebruiker: {user.username}</h2>
            <p>Voornaam: {user.firstName}</p>
            <p>Achternaam: {user.lastName}</p>
            <p>E-mail: {user.email}</p>
            <p>Bedrijf: {user.company}</p>
        </div>);

    return (<>
            <div>
                <h1>Alle accounts</h1>
                <form className="form-content">
                    {userData ? buildUserInfo(userData) : <p>Momentje even kijken wie je bent...</p>}
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
        </>);
}

export default AllAccounts;
