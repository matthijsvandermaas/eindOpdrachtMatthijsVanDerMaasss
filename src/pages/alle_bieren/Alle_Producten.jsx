import React, { useEffect, useState } from "react";
import './Alle_Producten.css';
import CarouselComponent from "../../components/carousel/Carousel.jsx";
import NieuweProductenComponent from "../../components/New_Product_Component/Nieuwe_producten_Components.jsx";

function AllProducts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData().then((data) => {
            setData(data);
        });
    }, []);

    async function fetchData() {
        const response = await fetch('http://localhost:8081/producten/id');
        return await response.json();
    }

    return (
        <div className="informatie_container">
            <h1>alle bieren</h1>
            <div className="text-content content_1 border_top_left">
                {data.map((nieuw_product, index) => (
                    <div className="text-row content_1" key={index}>
                        <NieuweProductenComponent products={[nieuw_product]} title="Nieuw product"></NieuweProductenComponent>
                        <CarouselComponent src1={nieuw_product.photo} alt1="atl1" title1={title1} text1={text1} src2={nieuw_product.photo2} alt2="atl2" title2={title2} text2={text2} src3={nieuw_product.photo3} alt3="atl3" title3={title3} text3={text3} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProducts;
