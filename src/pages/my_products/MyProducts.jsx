import React, { useEffect, useState } from "react";
import axios from "axios";
import Cubes from "../../components/cubes/Cubes";

const MyProducts = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
    }, []);

    const removeFromFavorites = (product) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = prevFavorites.filter(
                (favProduct) => favProduct.productName !== product.productName
            );
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    return (
        <>
            <div>
                <h1>Mijn favorieten bieren</h1>
                <form className="form-content border_top_left background">
                    {favorites.map((product) => (
                        <div key={product.productName}>
                            <h2>product: {product.productName}</h2>
                            <p>naam brouwer: {product.nameBrewer}</p>
                            <p>productie locatie: {product.productionLocation}</p>
                            <p>smaak: {product.tast}</p>
                            <p>biertype: {product.type}</p>
                            <p>alcohol %: {product.alcohol}</p>
                            <p>IBU: {product.ibu}</p>
                            <p>kleur: {product.color}</p>
                            <p>volume(cc): {product.volume}</p>
                            <button className="bttn bttn_small" onClick={() => removeFromFavorites(product)}>
                                Verwijder uit favorieten
                            </button>
                        </div>
                    ))}
                    {favorites.length === 0 && <p>Even kijken wat je lekker vindt...</p>}
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

export default MyProducts;
