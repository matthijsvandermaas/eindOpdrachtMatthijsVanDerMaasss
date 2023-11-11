

import React, {useEffect} from 'react';
import './AllProducts.css';
import CarouselComponent from '../../components/carousel/Carousel';
import NieuweProductenComponent from '../../components/New_Product_Component/NieuweProductenComponents';
import data from '../../../Data.json';
import { useProductContext } from '../../components/productcontext/ProductContext';
import axios from "axios";
function AllProducts() {
    const [products, setProducts] = React.useState(data);
    const { addToSelectedProducts } = useProductContext();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/downloadFromDB/{filename}');
                setProducts(response.data);
            } catch (error) {
                console.error('Fout bij het ophalen van gegevens:', error);
            }
        };

        fetchData();
    }, []);


    const renderUniqueProducts = (products) => {
        return products.map((nieuw_product) => (
            <div className="text-component background_pale" key={nieuw_product.id}>
                <button
                    className="bttn bttn_small"
                    onClick={() => {
                        addToSelectedProducts([nieuw_product.id]);
                        console.log('Geselecteerde producten:', nieuw_product);
                    }}
                >
                    toevoegen aan <strong>mijn bieren</strong>
                </button>
                <NieuweProductenComponent nieuw_product={nieuw_product} />
                <CarouselComponent
                    src1={nieuw_product.file}
                    alt1="atl1"
                    src2={nieuw_product.file2}
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
