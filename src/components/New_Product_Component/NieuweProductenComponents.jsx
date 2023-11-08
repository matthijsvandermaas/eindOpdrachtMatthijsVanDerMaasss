import React from 'react';
import RatingAverage from '../Rating_system/RatingAverage.jsx';

const NieuweProductenComponent = ({ nieuw_product }) => {
    const buildProductInfo = (product) => {
        const jsxElements = [];

        if (product) {
            jsxElements.push(
                <h2 key="productName">Naam: {product.productName}</h2>,
                <h4 key="nameProducer">Brouwer: {product.nameProducer}</h4>,
                <h4 key="type">Biertype: {product.type}</h4>,
                <h4 key="percentage">%: {product.percentage}</h4>,
                <h4 key="email">Email: {product.email}</h4>,
                <h4 key="color">Kleur: {product.color}</h4>,
                <h4 key="tast">Smaak: {product.tast}</h4>
            );
            if (product.volume) jsxElements.push(<p key="volume">Volume: {product.volume}</p>);
            if (product.productionLocation) jsxElements.push(<p key="production_location">Verkooplocatie: {product.productionLocation}</p>);
        }

        return jsxElements;
    };

    return (
        <div className="productInfo_content">
            <div>
                {buildProductInfo(nieuw_product)}
                <RatingAverage titel="Wat vind je hiervan?" />
                <textarea rows={10} cols={50} placeholder="Schrijf hier je mening" />
            </div>
        </div>
    );
};

export default NieuweProductenComponent;