import React, {useEffect, useState} from "react";
import './AllProducts.css';
import Cubes from "../../components/cubes/Cubes";
import axios from "axios";
import LogoBenB from "../../assets/logos and backgrounds/B & B logo2 klein.jpg";

const AllProducts = (product) => {
    const [productsData, setProductsData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [myProducts, setMyProducts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filename, setFilename] = useState(null);
    // const [imageUrl, setImageUrl] = useState(null);

// toevoegen aan favorieten
    const addProductToMyProducts = (product) => {
        setMyProducts((prevProducts) => [...prevProducts, product]);
        localStorage.setItem("productName", product.productName);
    };



    // GET products
    const fetchProductData = async () => {
        setError(false);
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8081/products');
            const fetchedProducts = response.data;
            console.log("Fetched products:", fetchedProducts);
            setProductsData(fetchedProducts);
            return fetchedProducts;
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

// GET IMG
// const getImg = await axios.get('http://localhost:8081/fileDocument/downloadFromDB/{{fileName}}'{
//     responseType: 'blob',
// });
// const imageUrl = URL.createObjectURL(getImg.data);
// console.log(imageUrl);
//     }
    useEffect(() => {
        void fetchProductData();
    }, []);

// GET img
    const fetchImage = async (filename) => {
        try {

            console.log("Filename:", filename);
            const response = await axios.get(`http://localhost:8081/fileDocument/downloadFromDB/${filename}`, { responseType: 'blob' });

            // const imageUrl = URL.createObjectURL(response.data);
            const imageUrl = response.data;
            console.log(imageUrl)
            console.log("response.data", response.data)
            console.log("result GET", response.data);
            console.log("Fetched image URL for",  imageUrl);
            return imageUrl;
        } catch (e) {
            console.error('Error fetching image:', e);
            return LogoBenB;
        }
    };

    // zoeken in producten
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
                            filteredProducts.map((product) =>(
                        <div className="form-content border_top_left background" key={product.productName}>
                                <div><img src={imageUrl} alt={product.productName}/>
                                    <img src={fetchImage(product.imageFilename)} alt={product.productName} />                                </div>
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
                                ))
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
