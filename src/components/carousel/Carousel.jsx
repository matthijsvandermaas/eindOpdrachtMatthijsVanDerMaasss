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
                <Highlight src="dependency">We love Web </Highlight>
                <Highlight src="dependency">We love Developers </Highlight>
                <a target="_blank">
                    <Highlight src="dependency">This is our github</Highlight>
                </a>
                <a target="_blank">
                    <Highlight src="dependency">This is our website</Highlight>
                </a>
                ...
            </Carousel>
        </>
    );
}
export default Carousel;
