import React, { useEffect } from 'react';
import './AllProducts.css';
import CarouselComponent from '../../components/carousel/Carousel';
import NieuweProductenComponent from '../../components/New_Product_Component/NieuweProductenComponents';
import axios from "axios";
import {UseProductContext} from "../../components/productcontext/ProductContext";

function AllProducts() {
    const { addToSelectedProducts } = UseProductContext();
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/Data.json');
                setProducts(response.data);
            } catch (error) {
                console.error('Fout bij het ophalen van gegevens:', error);
            }
        };

        fetchData();
    }, []);

    const renderUniqueProducts = (products) => {
        return products.map((nieuw_product) => (
            <div className="text-component" key={nieuw_product.id}>
                <button className="bttn bttn_small" onClick={() => { addToSelectedProducts([nieuw_product.id]); console.log('Geselecteerde producten:', nieuw_product); }}>
                    toevoegen aan <strong>mijn bieren</strong>
                </button>
                <NieuweProductenComponent nieuw_product={nieuw_product} />
                <CarouselComponent src1={nieuw_product.file} alt1="atl1" src2={nieuw_product.file2} alt2="atl2" />
            </div>
        ));
    };

    return (
        <div className="informatie_container background">
            <h1>alle bieren</h1>
            {renderUniqueProducts(products)}
        </div>
    );
}

export default AllProducts;
