import React from "react";
import './Alle_bieren.css'
import Text_component from "../../components/texts_components/Text-component.jsx";
import Img_Carousel from '../../components/carousel/Carousel.jsx'
import wheat from "../../assets/wheat.png";
import dependency from "../../assets/dependency-tree.png";
import mtm from "../../assets/mtm.png";

function All_Products() {
    return (<>
        <div className="titel_container">
            <h1>alle bieren</h1>
        </div>
        <div className="informatie_container">

            <div className="text-content content_1">
            <div className="text">

                    <div className="text-row content_1">
                        <Text_component Text_Title="test titel1" Text_Message1="dit is heel veel trekast en doet eigenlijk nietdit is heelveel trekast en doet eigenlijk nietssdit is heelveel trekast en doet eigenlijk nietsdit is heelveel trekast en doet eigenlijk niets"/>
                        <Img_Carousel
                            src1={dependency}
                            alt="atl1"
                            title1="titel1 dit is heelveel trekast en doet eigenlijk niets dit is heelveel trekast en doet eigenlijk niets"
                            Header1="header1"

                            src2= {wheat}
                            alt2="atl1"
                            title2="titel1 dit is heelveel trekast en doet eigenlijk niets dit is heelveel trekast en doet eigenlijk niets"
                            Header2="titel1 dit is heelveel trekast en doet eigenlijk niets dit is heelveel trekast en doet eigenlijk niets"

                        />
                    </div>
                <div className="text-row content_2">
                    <Text_component Text_Title="test titel1" Text_Message1="dit is heel veel trekast en doet eigenlijk nietdit is heelveel trekast en doet eigenlijk nietssdit is heelveel trekast en doet eigenlijk nietsdit is heelveel trekast en doet eigenlijk niets"/>
                    <Img_Carousel
                        src1={mtm}
                        alt="atl1"
                        title1="titel1 dit is heelveel trekast en doet eigenlijk niets dit is heelveel trekast en doet eigenlijk niets"
                        Header1="header1"

                        src2= {wheat}
                        alt2="atl1"
                        title2="titel1 dit is heelveel trekast en doet eigenlijk niets dit is heelveel trekast en doet eigenlijk niets"
                        Header2="titel1 dit is heelveel trekast en doet eigenlijk niets dit is heelveel trekast en doet eigenlijk niets"

                    />
                </div>



            </div>
            </div>
        </div>
        </>
    );
}

export default All_Products;

