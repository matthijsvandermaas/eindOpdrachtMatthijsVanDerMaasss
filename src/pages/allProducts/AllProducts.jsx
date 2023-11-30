import {useEffect, useState} from "react";
import Cubes from "../../components/cubes/Cubes";
import axios from "axios";

const AllProducts = () => {
    const [productsData, setProductsData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        setError(false);
        setLoading(true);
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/products');
                setProductsData(response.data);
            } catch (error) {
                setError(true)

            } finally {
                setLoading(false);
            }
        };

        void fetchUserData();
    }, []);

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
