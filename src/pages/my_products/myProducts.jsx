import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cubes from "../../components/cubes/Cubes";
import { useAuth } from '../../context/AuthContext';

const localStorageKey = 'product-names';
const localStorageUsernameKey = 'username';
const localStorageProductnameKey = 'productname';

function MyProducts() {
    const { authState } = useAuth();
    const [productsData, setProductsData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // qq

    useEffect(() => {

        const fetchUserData = async () => {
        setError(false);
        setLoading(true);
            try {
                const productname = localStorage.getItem('productname')
                console.log(productname)
                const response = await axios.get(`http://localhost:8081/products/${productname}`, {
                    // headers: {
                    //     'X-Product-Name': productname,
                    // },
                });
                setProductsData(response.data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        void fetchUserData();
    }, []);

    const buildProductsInfo = (productsData) => {
        const productsArray = Array.isArray(productsData) ? productsData :[productsData];

        return productsArray.map((product) => (
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
                {/*<button className="bttn bttn_small" onClick={() => deleteProductToMyProducts(product)}>*/}
                {/*    Voeg toe aan Mijn producten*/}
                {/*</button>*/}
            </div>
        ));
    };

    return (
        <>
            <div>
                <h1>Mijn bieren</h1>
                <form className="form-content">
                    {productsData ? buildProductsInfo(productsData) : <p>Even kijken wat je lekker vindt...</p>}
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

export default MyProducts;
