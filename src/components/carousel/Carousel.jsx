import React, {useState} from 'react';
import './Carousel.css';
import * as PropTypes from "prop-types";

function Highlight(props) {
    return null;
}

Highlight.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node
};

function Carousel(){
    return(
        <>
            <Carousel show={1} slide={3} swiping={true}>
                <Highlight color="#2d66c3">We love Web </Highlight>
                <Highlight color="#f44336">We love Developers </Highlight>
                <a target="_blank">
                    <Highlight color="#d53f8c">This is our github</Highlight>
                </a>
                <a target="_blank" href="https://trendyol.com/">
                    <Highlight color="#f27a1a">This is our website</Highlight>
                </a>
                ...
            </Carousel>
        </>
    );
}
export default Carousel;
