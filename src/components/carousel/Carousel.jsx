import React from 'react';
import Dependency_Tree from '../../assets/dependency-tree.png';
import {Carousel} from "flowbite-react";

function Highlight() {
    return null;
}

function MyCarousel(){
    return(
        <>
    <Carousel show={1} slide={3} swiping={true}>
        <Highlight color="#2d66c3">We love Web 🌐</Highlight>
        <Highlight src="Dependency_Tree">We love Developers 👩🏻‍</Highlight>
        <a target="_blank">
            <Highlight color="#d53f8c">This is our github</Highlight>
        </a>
        <a target="_blank">
            <Highlight color="#f27a1a">This is our website</Highlight>
        </a>
        ...
    </Carousel>
        </>
    );

}

export default MyCarousel;
