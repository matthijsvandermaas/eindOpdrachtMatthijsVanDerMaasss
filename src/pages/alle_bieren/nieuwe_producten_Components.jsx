import React from 'react';
import { NavLink } from 'react-router-dom';
import Rating from '../../components/Rating_system/Rating.jsx';
//TODO id gebruiken om gegevens te krijgen
const nieuwe_producten_Components = ({ products }) => {
    const buildProductInfo = (product) => {
        const jsxElements = [];

        // Voeg standaard elementen toe
        jsxElements.push(
            <h1 key="title">titel</h1>,
            <p key="productName"><NavLink to="/">Naam: {product.productName}</NavLink></p>,
            <p key="nameProducer"><NavLink to="/">Brouwer: {product.nameProducer}</NavLink></p>,
            <p key="type">Bier type: {product.type}</p>,
            <p key="percentage">%: {product.percentage}</p>,
            <p key="email">Email: {product.email}</p>,
            <p key="color">Kleur: {product.color}</p>,
            <p key="tast">smaken: {product.tast}</p>,
        );

        // Voeg elementen toe op basis van voorwaarden
        if (product.volume) jsxElements.push(<p key="volume">Volume: {product.volume}</p>);
        if (product.productionLocation) jsxElements.push(<p key="production_location">Verkoop locatie: {product.productionLocation}</p>);
        if (product.productionLocation) jsxElements.push(<p key="production_location">Verkoop locatie: {product.productionLocation}</p>);
        if (product.photo) jsxElements.push(<p key="photo">Photo: {product.photo}</p>);
        if (product.photo2) jsxElements.push(<p key="photo2">Photo 2: {product.photo2}</p>);
        if (product.photo3) jsxElements.push(<p key="photo3">Photo 3: {product.photo3}</p>);

        return jsxElements;
    };

    return (
        <div className="text-content content_1 border_top_left">
            {products.map((product, index) => (
                <div className="text-row content_1" key={index}>
                    <div className="input_container">
                        {buildProductInfo(product)}
                        <Rating
                        titel="Rate dit product"
                        >
                        </Rating>
                        <textarea
                            rows={10}
                            cols={50}
                            value={JSON.stringify(product, null, 2)}
                        />
                    </div>

                </div>
            ))}
        </div>
    );
};

export default nieuwe_producten_Components;
