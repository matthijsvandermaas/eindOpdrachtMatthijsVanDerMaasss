

import React from 'react';
import './AllProducts.css';
import CarouselComponent from '../../components/carousel/Carousel';
import NieuweProductenComponent from '../../components/New_Product_Component/NieuweProductenComponents';
import data from '../../../Data.json';
import { useProductContext } from '../../components/productcontext/ProductContext';
function AllProducts() {
    const [products, setProducts] = React.useState(data);
    const { addToSelectedProducts } = useProductContext();



    const renderUniqueProducts = (products) => {
        return products.map((nieuw_product, index) => (
            <div className="text-component no-background" key={nieuw_product.id}>
                <button
                    className="bttn bttn_small"
                    onClick={() => {
                        addToSelectedProducts([nieuw_product.id]);
                        console.log(products)
                    }}
                >
                    toevoegen aan <strong>mijn bieren</strong>
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
    console.log(products)
    return (
        <div className="informatie_container background">
            <h1>alle bieren</h1>
            {renderUniqueProducts(products)}
        </div>
    );
}

export default AllProducts;
