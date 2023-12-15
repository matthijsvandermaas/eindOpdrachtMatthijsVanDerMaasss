import React, {useEffect, useState} from "react";
import Cubes from "../../components/cubes/Cubes";
import {NavLink, useNavigate} from 'react-router-dom';

import axios from "axios";

const AllProducts = () => {
    const navigate = useNavigate();
    const [productsData, setProductsData] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem("favorites");
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    // Functie om een product aan favorieten toe te voegen
    const addToFavorites = (product) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = [...prevFavorites, product];
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };
    useEffect(() => {
        setError(false);
        setLoading(true);
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/products');
                setProductsData(response.data);
            } catch (error) {
            setError(true);
            console.error(error);
            }finally {
            setLoading(false);
            setError(false);
        }
        };

        void fetchUserData();
    }, []);

    async function handleDeleteSubmit(data, productName) {
        setIsSubmitting(true);
        try {
            await axios.delete(`http://localhost:8081/products/${productName}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setProductsData((prevProductsData) =>
                prevProductsData.filter((product) => product.productName !== productName));
            navigate('/alle_producten');
        } catch (e) {
            setErrorMessage("Er gaat iets fout met het verwerken van de gegevens: ");
        } finally {
            setIsSubmitting(false);
        }
    }


    const buildProductsInfo = (productsData) => {
        return productsData.map((product) => (
            <div className="form-content border_top_left background" key={product.productName}>
                <h2>product naam: {product.productName}</h2>
                <p>naam brouwer: {product.nameBrewer}</p>
                <p>productie locatie: {product.productionLocation}</p>
                <p>smaak: {product.tast}</p>
                <p>biertype: {product.type}</p>
                <p>alcohol %: {product.alcohol}</p>
                <p>IBU: {product.ibu}</p>
                <p>kleur: {product.color}</p>
                <p>volume(cc): {product.volume}</p>
                <button className="bttn bttn_small" onClick={() => addToFavorites(product)}>
                    {isSubmitting ? 'Bezig met een product toevoegen momentje...' : 'Voeg toe aan Mijn producten'}
                </button>
                <button className="bttn bttn_small" type="submit" disabled={isSubmitting} onClick={() => handleDeleteSubmit(null, product.productName)}>
                    {isSubmitting ? 'Bezig met een product toevoegen momentje...' : 'Product verwijderen'}
                </button>

            </div>
        ));
    };

    return (
        <>
            <div>
                <h1>Alle bieren</h1>
                <form className="form-content">
                    {productsData ? buildProductsInfo(productsData) : <p>Even kijken wat je lekker vindt...</p>}
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

export default AllProducts;
