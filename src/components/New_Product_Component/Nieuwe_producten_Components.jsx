import React from 'react';
import { NavLink } from 'react-router-dom';
import Rating from '../Rating_system/Rating.jsx';
//TODO id gebruiken om gegevens te krijgen
const nieuwe_producten_Components = ({ nieuw_product, title }) => {
    const buildProductInfo = (nieuw_product) => {
        const jsxElements = [];

        // Voeg standaard elementen toe
        jsxElements.push(
            <h1 key="title">{title}</h1>,
            <p key="productName"><NavLink to="/">Naam: {nieuw_product.productName}</NavLink></p>,
            <p key="nameProducer"><NavLink to="/">Brouwer: {nieuw_product.nameProducer}</NavLink></p>,
            <p key="type">Bier type: {nieuw_product.type}</p>,
            <p key="percentage">%: {nieuw_product.percentage}</p>,
            <p key="email">Email: {nieuw_product.email}</p>,
            <p key="color">Kleur: {nieuw_product.color}</p>,
            <p key="tast">smaken: {nieuw_product.tast}</p>,
        );

        // Voeg elementen toe op basis van voorwaarden
        if (nieuw_product.volume) jsxElements.push(<p key="volume">Volume: {nieuw_product.volume}</p>);
        if (nieuw_product.productionLocation) jsxElements.push(<p key="production_location">Verkoop locatie: {nieuw_product.productionLocation}</p>);
        if (nieuw_product.productionLocation) jsxElements.push(<p key="production_location">Verkoop locatie: {nieuw_product.productionLocation}</p>);
        if (nieuw_product.photo) jsxElements.push(<p key="photo">Photo: {nieuw_product.photo}</p>);
        if (product.photo2) jsxElements.push(<p key="photo2">Photo 2: {nieuw_product.photo2}</p>);
        if (nieuw_product.photo3) jsxElements.push(<p key="photo3">Photo 3: {nieuw_product.photo3}</p>);

        return jsxElements;
    };

    return (
        <div className="text-content content_1 border_top_left">
            {nieuw_product.map((nieuw_product, index) => (
                <div className="text-row content_1" key={index}>
                    <div className="input_container">
                        {buildProductInfo(nieuw_product)}
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
