import React, { useEffect, useState } from "react";
import fetchUserData from "./UserApi"; // Het pad naar UserApi.js

function ComponentThatFetchesData({ First_Name, Last_Name }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUserData(First_Name, Last_Name);
                setUserData(data);
            } catch (error) {
                // Handel fouten af hier indien nodig
            }
        };

        fetchData();
    }, [First_Name, Last_Name]);

    // Render de component met behulp van userData
    return (
        <div>
            {userData ? (
                /* Render de gegevens hier */
                <div>{/* Gegevens weergeven */}</div>
            ) : (
                /* Toon een laadindicator of foutmelding indien nodig */
                <div>Loading...</div>
            )}
        </div>
    );
}

export default ComponentThatFetchesData;
