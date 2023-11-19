import React, {useState} from 'react';
import RatingAverage from '../Rating_system/RatingAverage';

const NieuweProductenComponent = ({ nieuw_product }) => {
    const [product, setProduct] = useState(null);
    const buildProductInfo = (product) => {
        product.productName = "test";
        product.nameBrewer = "test";
        product.productionlocation = "test";
        product.tast = "test";
        product.type = "test";
        product.alcohol = "test";
        product.ibu = "test";
        product.color = "test";
        product.volume = "test";


        const jsxElements = [];

        if (product) {
            jsxElements.push(
                <h2 key="productName">Naam: {product.productName}</h2>,
                <p key="nameBrewer">Brouwer: {product.nameBrewer}</p>,
                <p key={"productionLocation"}> brouwer locatie: {product.productionlocation}</p>,
                <p key="tast">Smaak: {product.tast}</p>,
                <p key="type">Biertype: {product.type}</p>,
                <p key="alcohol">alcohol %: {product.alcohol}</p>,
                <p key="ibu">IBU: {product.ibu}</p>,
                <p key="color">Kleur: {product.color}</p>,
                <p key="volume">volume: {product.volume}</p>,
            );
        }

        return jsxElements;
    };

    return (
        <div className="productInfo_content background">
            <div>
                {buildProductInfo(nieuw_product)}
                <RatingAverage titel="Hoe lekker smaakt die?" />
                <textarea rows={10} cols={50} placeholder="Schrijf hier je menig." />
            </div>
        </div>
    );
};

export default NieuweProductenComponent;