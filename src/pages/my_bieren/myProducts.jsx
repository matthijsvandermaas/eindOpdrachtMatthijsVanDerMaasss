import React from 'react';
import '../all_products/AllProducts.css';
import CarouselComponent from '../../components/carousel/Carousel';
import NieuweProductenComponent from '../../components/product_Component/NieuweProductenComponents';
import { UseProductContext } from '../../components/productcontext/ProductContext';

function MyProducts() {
    const { removeFromSelectedProducts } = useProductContext();
    const [products, setProducts] = useState([]);
    const idList = [1, 2];

    const renderUniqueProducts = (products) => {
        const filteredProducts = products.filter(product => idList.includes(product.id));
        return filteredProducts.map((nieuw_product, index) => (
            <div className="text-component background_pale" key={index}>
                <button className="bttn bttn_small" onClick={() => { removeFromSelectedProducts(nieuw_product.id); }}>
                    verwijderen uit <strong>mijn bieren</strong>
                </button>
                <NieuweProductenComponent nieuw_product={nieuw_product} />
                <CarouselComponent src1={nieuw_product.photo} alt1="atl1" src2={nieuw_product.photo2} alt2="atl2" />
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

export default MyProducts;
