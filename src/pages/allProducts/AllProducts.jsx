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
    const [imageUrl, setImageUrl] = useState(null);


    const addProductToMyProducts = (product) => {
        setMyProducts((prevProducts) => [...prevProducts, product]);
        localStorage.setItem("productname", product.productName);

    // setImageUrl(product.imageUrl);

};

    useEffect(() => {
        setError(false);
        setLoading(true);
        const fetchProductData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/products');
                setProductsData(response.data);
            } catch (error) {
            setError(true)
            }finally {
            setLoading(false);
        }

            };


        void fetchProductData();
    }, []);

    // const deleteProduct = async (productName) => {
    //     try {
    //         await axios.delete(`http://localhost:8081/products/${productName}`);
    //         setProductsData((prevUsersData) => prevUsersData.filter((product) => product.productName !== productName));
    //     } catch (error) {
    //         setError(true)
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    const fetchImage = async (fileName, productName) => {
        try {
            const response = await axios.get(`http://localhost:8081/downloadFromDB/${fileName}/${productName}`, {
                responseType: 'blob',
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };


    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };




    const buildProductsInfo = async (productsData) => {
        const updatedProducts = await Promise.all(productsData.map(async (product) => {
            product.imageUrl = await fetchImage(product.fileName, product.productName);
            return product;
        }));

        // setImageUrl(updatedProducts);

        return updatedProducts.map((product) => (
            <>
            <div className="form-content border_top_left background" key={product.productName}>
                <div>
                    {/*<img className="img_products" src={LogoBenB} alt={product.productName} />*/}
                    {/*<img src={imageUrl} alt={product.productName} />*/}
                    {/*{imgUrls[product.productName] && <img src={imgUrls[product.productName]} alt={product.productName} />}*/}
                    {product.imageUrl ? (
                        <img src={`data:image/png;base64,${product.imageUrl}`} alt={product.productName} />
                    ) : (
                        <img src={LogoBenB} alt={product.productName} />
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
                {/*<button className="bttn bttn_small" onClick={() => deleteProfile(profile.username)}>*/}
                {/*    Wijzig product*/}
                {/*</button>*/}

            </div>
            </>
        ));
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
                            <p>Geen overeenkomende producten gevonden.</p>
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
