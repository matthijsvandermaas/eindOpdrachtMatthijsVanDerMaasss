import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Cubes from "../../components/cubes/Cubes";
import {useAuth} from '../../context/AuthContext';
import InputFormUsers from "../../components/profile/inputFormUsers";

const AllAccounts = () => {
    const Updateprofile = useRef(null);
    const [profilesData, setProfilesData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchText, setSearchText] = useState("");

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


    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredProfiles = profilesData
        ? profilesData.filter((profile) =>
            profile.username.toLowerCase().includes(searchText.toLowerCase())
        )
        : [];

    const buildProfilesInfo = (profilesData) => {
        return profilesData.map((profile) => (
            <div className="form-content border_top_left background" key={profile.username}>
                <h2>Profiel: {profile.username}</h2>
                <p>Voornaam: {profile.firstName}</p>
                <p>Achternaam: {profile.lastName}</p>
                <p>Email adres: {profile.email} </p>
                <p>Bedrijfsnaam: {profile.company}</p>
            </div>
        ));
    };

    return (
        <>
            <div>
                <h1>Alle accounts</h1>
                <form className=" form-container form-content">
                    <input
                        name="search_funtion"
                        type="search"
                        placeholder="Zoek accounts..."
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                    <div className="form-content">
                        {filteredProfiles.length > 0 ? (
                            buildProfilesInfo(filteredProfiles)
                        ) : (
                            <p>Geen overeenkomende accounts gevonden.</p>
                        )}
                        {error && <p>Fout bij het ophalen van gegevens.</p>}
                    </div>
                </form>
                <section id="updateProfile" ref={Updateprofile}>
                    <InputFormUsers
                        subTitleForm="Gebruiker wijzigen"/>
                </section>

            </div>
        </>
    );
}

export default AllAccounts;
