import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Cubes from "../../components/cubes/Cubes";
import {useAuth} from '../../context/AuthContext';



function MyProducts() {
    const {authState} = useAuth();
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {

        const fetchUserData = async () => {
            setError(false);
            setLoading(true);
            try {
                const productname = localStorage.getItem('productname')
                console.log(productname)
                const response = await axios.get(`http://localhost:8081/products/${productname}`);

                setProductsData(response.data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        const deleteProduct = async (productName) => {
            try {
                await axios.delete(`http://localhost:8081/products/${productName}`);
                setProductsData((prevProductsData) => prevProductsData.filter((product) => product.productName !== productName));
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

    const filteredProducts = productsData
        ? productsData.filter((product) =>
            product.productName.toLowerCase().includes(searchText.toLowerCase())
        )
        : [];

    const buildProductsInfo = (productsData) => {
        const productsArray = Array.isArray(productsData) ? productsData : [productsData];

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
                <button className="bttn bttn_small" onClick={() => deleteProduct(product)}>
                    Verwijderen uit Mijn producten
                </button>


            </div>
        ));
    };

    return (
        <>
            <div>
                <h1>Mijn bieren</h1>
                <form className=" form-container form-content">
                    <input
                        name="search_funtion"
                        type="search"
                        placeholder="Vind je bier..."
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                    {filteredProducts.length > 0 ? (
                        buildProductsInfo(filteredProducts)
                    ) : (
                        <p>Geen overeenkomende producten gevonden.</p>
                    )}
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
