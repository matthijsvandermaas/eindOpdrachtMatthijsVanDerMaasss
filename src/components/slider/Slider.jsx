import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';

function Slider({ slider_Img1, slider_Img2, slider_Img3, slider_Img4, slideIndex, setSlideIndex }) {
    function plusDivs(n) {
        const newIndex = slideIndex + n;
        if (newIndex > 4) {
            setSlideIndex(1);
        } else {
            setSlideIndex(newIndex);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            plusDivs(1);
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, [slideIndex]);

    return (
        <div className={styles.slider}>
            <img className={`${styles.mySlides} ${styles.mySlides1} ${slideIndex === 1 ? styles.active : ''}`} src={slider_Img1} alt="Slide 1" />
            <img className={`${styles.mySlides} ${styles.mySlides2} ${slideIndex === 2 ? styles.active : ''}`} src={slider_Img2} alt="Slide 2" />
            <img className={`${styles.mySlides} ${styles.mySlides3} ${slideIndex === 3 ? styles.active : ''}`} src={slider_Img3} alt="Slide 3" />
            <img className={`${styles.mySlides} ${styles.mySlides4} ${slideIndex === 4 ? styles.active : ''}`} src={slider_Img4} alt="Slide 4" />

        </div>
    );
}

export default Slider;
