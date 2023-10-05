// TravelCarousel-component
// eslint-disable-next-line no-unused-vars
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-responsive-carousel';
import './Carousel.css';
import wheat from "../../assets/wheat.png";
import dependency from "../../assets/dependency-tree.png";

// eslint-disable-next-line react/prop-types
function CarouselComponent({src1, src2, alt1, alt2, title1, title2, header1, header2, message1, message2}) {
    return (
        <>
            <div className="img-carousel">
                <Carousel showThumbs={false} showArrows={true} infiniteLoop={true}>
                    <div className="carousel-img">
                        <div className="carousel_img">
                            <img src={src1} alt={alt1}/>
                        </div>
                        <h3>{title1}</h3>
                        <h2>{header1}</h2>
                        <p>{message1}</p>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel_img">
                            <img src={src2} alt={alt2}/>
                        </div>
                        <h3>{title2}</h3>
                        <h2>{header2}</h2>
                        <p>{message2}</p>
                    </div>
                </Carousel>
            </div>
        </>
    );
}

export default CarouselComponent;
