import axios from 'axios';

const UserApi = "https://localhost:8080/particulieren";

const fetchUserData = async (First_Name, Last_Name) => {
    try {
        const timestamp = new Date().toISOString(); // Genereer een timestamp

        const postData = {
            title: `${First_Name} ${Last_Name}`,
            created_at: timestamp,
            key: "value"
        };

        // POST-verzoek met de timestamp
        const postResponse = await axios.post(UserApi, postData, {
            headers: { "Accept": 'application/json' },
        });
        console.log("POST Response:", postResponse.data);

        // PUT-verzoek met de timestamp
        const putData = {
            title: `${First_Name} ${Last_Name}`,
            updated_at: timestamp, // Voeg de timestamp toe aan het putData-object
            key: "updatedValue"
        };
        const putResponse = await axios.put(UserApi, putData, {
            headers: { "Accept": 'application/json' },
        });
        console.log("PUT Response:", putResponse.data);

        // DELETE-verzoek
        const deleteResponse = await axios.delete(UserApi, {
            headers: { "Accept": 'application/json' },
        });
        console.log("DELETE Response:", deleteResponse.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

console.log(fetchUserData()); // Dit geeft undefined terug omdat de functie asynchroon is
export default fetchUserData;
