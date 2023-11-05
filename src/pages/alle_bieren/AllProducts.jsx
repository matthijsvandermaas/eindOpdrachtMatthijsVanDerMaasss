import React, { useState, useEffect } from 'react';
import './AllProducts.css';
import CarouselComponent from '../../components/carousel/Carousel.jsx';
import NieuweProductenComponent from '../../components/New_Product_Component/Nieuwe_producten_Components.jsx';

function AllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData().then((data) => {
            setProducts(data);
        });
    }, []);

    async function fetchData() {
        try {
            const response = await fetch('Data.json');
            return await response.json();
        } catch (error) {
            console.error('Fout bij het ophalen van gegevens:', error);
            return [];
        }
    }

    const renderUniqueProducts = (products) => {
        const uniqueProductIds = new Set();
        return products.map((nieuw_product, index) => {
            if (!uniqueProductIds.has(nieuw_product.id)) {
                uniqueProductIds.add(nieuw_product.id);
                return (
                    <div className="text-component no-background" key={index}>
                        <NieuweProductenComponent nieuw_product={nieuw_product} />
                        <CarouselComponent
                            src1={nieuw_product.photo}
                            alt1="atl1"
                            src2={nieuw_product.photo2}
                            alt2="atl2"
                            src3={nieuw_product.photo3}
                            alt3="atl3"
                        />
                    </div>
                );
            }
            return <div key={index}></div>;
        });
    };

    return (
        <div className="informatie_container background">
            <h1>alle bieren</h1>
            {renderUniqueProducts(products)}
        </div>
    );
}

export default AllProducts;
