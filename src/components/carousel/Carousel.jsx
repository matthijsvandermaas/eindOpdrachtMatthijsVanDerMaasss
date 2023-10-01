// TravelCarousel-component
// eslint-disable-next-line no-unused-vars
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import wheat from "../../assets/wheat.png";
import dependency from "../../assets/dependency-tree.png";

// eslint-disable-next-line react/prop-types
function Products_Carousel({ src, alt, title, header, message1, message2, message3 }) {
    function wrapSrcWithQuotes(src) {
        return `"${src}"`;
    }

    function wrapAltWithQuotes(alt) {
        return `"${alt}"`;
    }

    console.log({ title });
    console.log({ src });

    return (
        <div className="img-carousel">
            <Carousel showThumbs={false} showArrows={true} infiniteLoop={true}>
                <div className="carousel-item">
                    <div className="carousel_img">
                        <img src={wheat} alt={wrapAltWithQuotes(alt)} />
                    </div>
                    <h3>{title}</h3>
                    <h2>{header}</h2>
                    <p>{message1}</p>
                    <p>{message2}</p>
                </div>
                <div className="carousel-item">
                    <div className="carousel_img">
                        <img src={dependency} alt={wrapAltWithQuotes(alt)} />
                    </div>
                    <h3>{title}</h3>
                    <h2>{header}</h2>
                    <p>{message1}</p>
                    <p>{message2}</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Products_Carousel;