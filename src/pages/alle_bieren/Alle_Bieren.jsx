import React from "react";
import './Alle_bieren.css'
import Text_component from "../../components/texts_components/Text-component.jsx";
import Img_Carousel from '../../components/carousel/Carousel.jsx'
// import wheat from "../../assets/wheat.png";
// import dependency from "../../assets/dependency-tree.png";


function All_Products() {
    return (
        <div className="informatie_container">
            <div className="titel_container">
                <h1>alle bieren</h1>
            </div>
            <div className="text-content content_1">
            <div className="text">

                    <div className="text-row content_1">
                        <Text_component Text_Title="test titel1" Text_Message1="test text1"/>
                        <Img_Carousel
                            src="dependency"
                            alt="atl1"
                            title="titel1"
                            Header="Header1"
                        />
                    </div>
                <div className="text-row content_2">
                    <Text_component Text_Title="test titel1" Text_Message1="test text1"/>
                    <Img_Carousel
                        src="dependency"
                        alt="atl1"
                        title="titel1"
                        Header="Header1"
                    />
                </div>



            </div>
            </div>
        </div>

    );
}

export default All_Products;

