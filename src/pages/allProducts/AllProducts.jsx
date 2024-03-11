import React, {useEffect, useState} from "react";
import './AllProducts.css';
import Cubes from "../../components/cubes/Cubes";
import axios, {all} from "axios";
import LogoBenB from "../../assets/logos and backgrounds/B & B logo2 klein.jpg";

const AllProducts = (product) => {
    const [productsData, setProductsData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [myProducts, setMyProducts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [imageUrl, setImageUrl] = useState(null);


    const addProductToMyProducts = (product) => {
        setMyProducts((prevProducts) => [...prevProducts, product]);
        localStorage.setItem("productName", product.productName);

    // setImageUrl(product.imageUrl);

};

    useEffect(() => {
        setError(false);
        setLoading(true);
        const fetchProductData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/products');
                const fetchedProducts = response.data;
                console.log("Fetched products:", fetchedProducts);
                setProductsData(response.data);

            } catch (error) {
            setError(true)
            }finally {
            setLoading(false);
        }

            };


        void fetchProductData();
    }, []);



    const fetchImage = async (filename, productName) => {
        try {
            console.log("Fetching image for:", productName);
            console.log("Filename:", filename);
            const response = await axios.get(`http://localhost:8081/downloadFromDB/${filename}/${productName}`, {
                responseType: 'blob',
            });
            const imageUrl = URL.createObjectURL(response.data);
            console.log("Fetched image URL for", productName, ":", imageUrl);
            return imageUrl;
        } catch (e) {
            console.error('Error fetching image:', e);
            return LogoBenB;
        }
    };

    const buildProductsInfo = (productsData) => {
        try {
            const updatedProducts = (productsData.map( (product) => {
                console.log("Fetching image for:", product.productName);
                console.log("Filename:", product);

                const imageUrl = fetchImage(product.filename, product.productName);
                console.log("Fetched image for", product.productName, ":", imageUrl);
                return {...product, imageUrl: imageUrl};
            }));

            return updatedProducts.map((product) => (
                <div className="form-content border_top_left background" key={product.productName}>
                    <div>
                        {product.filename && product.productName ? (
                            <img
                                src={product.imageUrl}
                                alt={product.productName}
                            />
                        ) : (
                            <img src={LogoBenB} alt={product.productName}/>
                        )}
                    </div>
                    <h2>product naam: {product.productName}</h2>
                    <p>naam brouwer: {product.nameBrewer}</p>
                    <p>productie locatie: {product.productionLocation}</p>
                    <p>smaak: {product.tast}</p>
                    <p>biertype: {product.type}</p>
                    <p>alcohol %: {product.alcohol}</p>
                    <p>IBU: {product.ibu}</p>
                    <p>kleur: {product.color}</p>
                    <p>volume(cc): {product.volume}</p>
                    <button className="bttn bttn_small" onClick={() => addProductToMyProducts(product)}>
                        Voeg toe aan Mijn producten
                    </button>
                </div>
            ));
        } catch (e) {
            console.error('Error building products info:', e);
            return null;
        }
    };



    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };


    const filteredProducts = productsData
        ? productsData.filter((product) =>
            product.productName.toLowerCase().includes(searchText.toLowerCase())
        )
        : [];

    return (
        <>
            <div>
                <h1>Alle bieren</h1>
                <div>
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
                            <p>Geen overeenkomend product gevonden.</p>
                        )}
                </form>
                </div>
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
            <div>

            </div>
        </>
    );
};

export default AllProducts;
