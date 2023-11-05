import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../Rating_system/Rating.jsx';
import data from '../../../Data.json';
import Rating_average from "../Rating_system/Rating_average.jsx";

const NieuweProductenComponent = ({ title }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (products.length === 0) {
            setProducts(data);
        }
    }, [products]);


    const buildProductInfo = (product) => {
        const jsxElements = [];

        if (product) {
            jsxElements.push(
                <h1 key="title">{title}</h1>,
                <h2 key="productName">Naam: {product.productName}</h2>,
                <h5 key="nameProducer">Brouwer: {product.nameProducer}</h5>,
                <h5 key="type">Biertype: {product.type}</h5>,
                <h5 key="percentage">%: {product.percentage}</h5>,
                <h5 key="email">Email: {product.email}</h5>,
                <h5 key="color">Kleur: {product.color}</h5>,
                <h5 key="tast">Smaak: {product.tast}</h5>
            );
            if (product.volume) jsxElements.push(<p key="volume">Volume: {product.volume}</p>);
            if (product.productionLocation) jsxElements.push(<p key="production_location">Verkooplocatie: {product.productionLocation}</p>);
        }

        return jsxElements;
    };

    return (
        <div className="productInfo_content">
            {products.map((product, index) => (
                <div key={index}>
                    {buildProductInfo(product)}
                    <Rating_average titel="Wat vind je hiervan?" />
                    <textarea
                        rows={10}
                        cols={50}
                        placeholder="Schrijf hier je mening"
                    />
                </div>
            ))}
        </div>
    );
};

export default NieuweProductenComponent;
