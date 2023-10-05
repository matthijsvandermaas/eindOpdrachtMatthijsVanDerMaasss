// TravelCarousel-component
// eslint-disable-next-line no-unused-vars
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
// import wheat from "../../assets/wheat.png";
// import dependency from "../../assets/dependency-tree.png";

// eslint-disable-next-line react/prop-types
function CarouselComponent({ src1, src2, src3,  alt1, alt2, alt3, title1, title2, title3, text1, text2, text3 }) {
    return (
        <>
            <div className="img-carousel">
                <Carousel showThumbs={false} showArrows={true} infiniteLoop={true}>
                    <div className="carousel-img">
                        <div className="carousel_img">
                            <img src={src1} alt={alt1} />
                        </div>
                        <h2>{title1}</h2>
                        <p>{text1}</p>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel_img">
                            <img src={src2} alt={alt2} />
                        </div>
                        <h2>{title2}</h2>
                        <p>{text2}</p>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel_img">
                            <img src={src3} alt={alt3} />
                        </div>
                        <h2>{title3}</h2>
                        <p>{text3}</p>
                    </div>
                </Carousel>
            </div>
        </>
    );
}


export default CarouselComponent;

