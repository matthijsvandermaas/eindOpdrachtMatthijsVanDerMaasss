import React, { useState, useEffect } from 'react';
import '../../pages/alle_bieren/AllProducts.css';
import CarouselComponent from '../../components/carousel/Carousel.jsx';
import NieuweProductenComponent from '../../components/New_Product_Component/Nieuwe_producten_Components.jsx';
import data from '../../../Data.json';
import { useProductContext } from '../../components/productcontext/ProductContext.jsx';

function myProducts() {
    const { selectedProducts, setSelectedProducts } = useProductContext();

    const [products, setProducts] = useState(data);
const id = 1;
    const renderUniqueProducts = (products) => {
        const uniqueProductIds = new Set();
        const uniqueProducts = products.filter((product) => {
            if (!uniqueProductIds.has(product.id)) {
                uniqueProductIds.add(product.id);
                return true;
            }
            return false;
        });

        return uniqueProducts.map((nieuw_product, index) => (
            <div className="text-component no-background" key={index}>
                <button
                    className="bttn bttn_small"
                    onClick={() => {
                        setSelectedProducts((prevProducts) => [...prevProducts, nieuw_product]);
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

    return (
        <div className="informatie_container background">
            <h1>mijn bieren</h1>
            {renderUniqueProducts(products)}
        </div>
    );
}

export default myProducts;