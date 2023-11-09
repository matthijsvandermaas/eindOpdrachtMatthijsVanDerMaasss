// TravelCarousel-component
// eslint-disable-next-line no-unused-vars
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';


// eslint-disable-next-line react/prop-types
function CarouselComponent({ src1, src2,  alt1, alt2}) {
    return (
        <>
            <div className="img-carousel">
                <Carousel showThumbs={false} showArrows={true} infiniteLoop={true}>
                    <div className="carousel-img">
                        <div className="carousel_img">
                            <img src={src1} alt={alt1} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel_img">
                            <img src={src2} alt={alt2} />
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    );
}


export default CarouselComponent;

