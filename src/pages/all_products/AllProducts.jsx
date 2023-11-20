import React, {useEffect, useState} from 'react';
import './AllProducts.css';
import CarouselComponent from '../../components/carousel/Carousel';
import axios from "axios";

import Cubes from "../../components/cubes/Cubes";
import Carousel from "../../components/carousel/Carousel";

function AllProducts() {
    const [productsData, setProductsData] = useState(null);


    useEffect(() => {
        // Haal gebruikersgegevens op van de API
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:8081/products');
                const data = await response.json();
                setProductsData(data);
            } catch (error) {
                console.error('Fout bij het ophalen van productgegevens:', error);
            }
        };

        fetchUserData();
    }, []);

    const buildProductsInfo = (productsData) => {
        const jsxElements = [];
        if (productsData) {
            productsData.forEach((products) => {
                jsxElements.push(
                    <div className=" form-content border_top_left" key={products.id}>
                        <h2>product naam: {[products].productName}</h2>
                        <h2>naam brouwer: {[products].nameBrewer}</h2>
                        <p>productie locatie: {[products].productionlocation}</p>
                        <p>smaak: {[products].tast}</p>
                        <p>biertype: {[products].type}</p>
                        <p>alcohol %: {[products].alcohol}</p>
                        <p>IBU: {[products].ibu}</p>
                        <p>kleur: {[products].color}</p>
                        <p>volume: {[products].volume}</p>
                    </div>
                );
            });
        }
        return jsxElements;
    };



    return (
        <>

            <div >
                <form className="form-content background">
                    {buildProductsInfo(productsData)}
                    <CarouselComponent />
                </form>
    <Cubes
        button_1="Hoe maak je bier"
        navigate_1="/productie_Informatie"
        button_2="Het drankorgel"
        navigate_2="/drankorgel"
        button_3="Home"
        navigate_3="/home"
        button_4="News"
        navigate_4="/news"
    />
                </div>
        </>
    );
}

export default AllProducts;
