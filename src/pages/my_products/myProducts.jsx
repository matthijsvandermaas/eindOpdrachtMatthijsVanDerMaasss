
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cubes from "../../components/cubes/Cubes";
import { useAuth } from '../../context/AuthContext';

function myProducts() {
    const { authState } = useAuth();
    const [productsData, setProductsData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log('Inside useEffect');

        const fetchData = async () => {
            setError(false);
            setLoading(true);

            try {
                const token = localStorage.getItem('token');
                const productname = localStorage.getItem('productname');
                console.log(productname)
                console.log('Sending request with token:', token);
                const response = await axios.get(`http://localhost:8081/products/${productname}`, {
                    // headers: {
                    //     Authorization: `Bearer ${token}`,
                    //     'Content-Type': 'application/json',
                    // },
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching products data:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);



    const buildUserInfo = (productsData) => {
        const productsArray = Array.isArray(productsData) ? productsData : [productsData];
        return productsArray.map((products) => (
            <div className="form-content border_top_left background" key={products.productname}>
                <h2>product naam: {products.productName}</h2>
                <p>naam brouwer: {products.nameBrewer}</p>
                <p>productie locatie: {products.productionLocation}</p>
                <p>smaak: {products.tast}</p>
                <p>biertype: {products.type}</p>
                <p>alcohol %: {products.alcohol}</p>
                <p>IBU: {products.ibu}</p>
                <p>kleur: {products.color}</p>
                <p>volume: {products.volume}</p>
            </div>
        ));
    };

    return (
        <>
            <div>
                <h1>Mijn gegevens</h1>
                <form className="form-content">
                    {productsData ? buildUserInfo(productsData) : <p>Momentje even kijken wat je lekker vindt...</p>}
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

export default myProducts;
