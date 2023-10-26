import React, { useState, useEffect } from "react";

import './Alle_bieren.css'
import Text_component from "../../components/texts_components/Text-component.jsx";
import CarouselComponent from "../../components/carousel/Carousel.jsx";
import Rating_1 from "../../components/Rating_system/Rating_1.jsx";
import { NavLink } from "react-router-dom";

function All_Products({ products }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData().then((data) => {
            setData(data);
        });
    }, []);

    async function fetchData() {
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        return data;
    }

    return (
        <>
            <div className="informatie_container">
                <h1>alle bieren</h1>
                <div className="text-content content_1 border_top_left">
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
