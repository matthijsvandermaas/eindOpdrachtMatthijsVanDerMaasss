import React, { useState } from 'react';
import '../../pages/alle_bieren/AllProducts.css';
import CarouselComponent from '../../components/carousel/Carousel.jsx';
import NieuweProductenComponent from '../../components/New_Product_Component/NieuweProductenComponents.jsx';
import data from '../../../Data.json';
import { useProductContext } from '../../components/productcontext/ProductContext.jsx';

function myProducts() {
    const { selectedProducts, removeFromSelectedProducts } = useProductContext(); // Fout in dubbele const verwijderd
    const [products, setProducts] = useState(data);
    const idList = [1,2];

    const renderUniqueProducts = (products) => {
        const filteredProducts = products.filter(product => idList.includes(product.id));
        return filteredProducts.map((nieuw_product, index) => (
            <div className="text-component no-background" key={index}>
                <button
                    className="bttn bttn_small"
                    onClick={() => {
                        removeFromSelectedProducts(nieuw_product.id);
                    }}
                >
                    verwijderen uit <strong>mijn bieren</strong>
                </button>
                <NieuweProductenComponent nieuw_product={nieuw_product} />
                <CarouselComponent
                    src1={nieuw_product.photo}
                    alt1="atl1"
                    src2={nieuw_product.photo2}
                    alt2="atl2"
                />
            </div>
        ));
    };
    console.log(products);
    console.log(idList);

    return (
        <div className="informatie_container background">
            <h1>mijn bieren</h1>
            {renderUniqueProducts(products)}
        </div>
    );
}

export default myProducts;
