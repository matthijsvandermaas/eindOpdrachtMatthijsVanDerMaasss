import React from "react";
import './Alle_bieren.css'
import Text_component from "../../components/texts_components/Text-component.jsx";
import CarouselComponent from "../../components/carousel/Carousel.jsx";
import Rating_1 from "../../components/Rating_system/Rating_1.jsx";
import { NavLink } from "react-router-dom";
//TODO backendtime!!
function All_Products({ products }) {
    const productsData = [
        { name: 'Product 1', producer: 'Producer 1', percentage: 5, /* other properties */ },
        { name: 'Product 2', producer: 'Producer 2', percentage: 6, /* other properties */ },
        // ...more products
    ];
    function ParentComponent() {
        const [products, setProducts] = useState([]);

        useEffect(() => {
            // Fetch products asynchronously
            fetchData().then((data) => {
                setProducts(data); // Update products state when data is fetched
            });
        }, []); // Empty dependency array ensures useEffect runs once after initial render

        return <All_Products products={products} />;
    }

    async function fetchData() {
        // Perform asynchronous data fetching here and return the data as an array
        // For example, fetch data from an API endpoint using fetch or axios
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        return data;
    }

    return (
        <>
            <div className="informatie_container">
                <h1>alle bieren</h1>
                <div className="text-content content_1">
                    <div className="text">
                        {products.map((product, index) => (
                            <div className="text-row content_1" key={index}>
                                <Text_component />
                                <div className="input_container">
                                    <h1>titel</h1>
                                    <p>Naam: {product.name}</p>
                                    <p><NavLink to="/">Brouwer: {product.producer}</NavLink></p>
                                    <p>Percentage: {product.percentage}</p>
                                    <p>Email: {product.email}</p>
                                    <p>Kleur: {product.kleur}</p>
                                    <p>Smaak: {product.smaak}</p>
                                    <p><NavLink to="/">Brouwer Locatie: {product.brouwer_locatie}</NavLink></p>
                                    <Rating_1 ratingValue={product.rating} />
                                    <h2>{product.text_blok}</h2>
                                </div>
                                <CarouselComponent
                                    src1={product.image1}
                                    alt1="atl1"
                                    title1={product.title1}
                                    text1={product.text1}
                                    src2={product.image2}
                                    alt2="atl1"
                                    title2={product.title2}
                                    text2={product.text2}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default All_Products;
