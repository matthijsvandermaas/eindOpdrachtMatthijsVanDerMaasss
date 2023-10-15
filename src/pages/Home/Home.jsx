import React, {useState} from 'react';
import './Home.css';
import Text_component from '../../components/texts_components/Text-component.jsx';
import Cubes from '../../components/cubes/Cubes.jsx';
import Slider from '../../components/slider/Slider.jsx';
import slider_Img_One from '../../assets/hoe maak je bier/hop.png';
import slider_Img_Two from '../../assets/hoe maak je bier/yeast.png';
import slider_Img_Three from '../../assets/hoe maak je bier/malt.png';
import slider_Img_Four from '../../assets/hoe maak je bier/gist.png';

function Home() {
    const [slideIndex, setSlideIndex] = useState(1);
    const slider_Img_1 = slider_Img_One;
    const slider_Img_2 = slider_Img_Two;
    const slider_Img_3 = slider_Img_Three;
    const slider_Img_4 = slider_Img_Four;

    return (
        <>
            <div className="title-content">
                <Slider
                    slider_Img1={slider_Img_1}
                    slider_Img2={slider_Img_2}
                    slider_Img3={slider_Img_3}
                    slider_Img4={slider_Img_4}
                    slideIndex={slideIndex}
                    setSlideIndex={setSlideIndex} />

                <div className="text-content">
                    <div className="informatie_container">
                        <h1>Welcome Bier liefhebbers,</h1>
                        <h4>bij beers & brewskys de plek voor bierliefhebbers om hun passie voor dit mooie product te delen met iedereen
                            en nieuwe biertjes te proberen, dus schrijf je in en kom erbij</h4>
                    </div>
                </div>
                <Cubes
                    button_1="inschrijven"
                    navigate_1="/inschrijfformulier"
                    button_2="inloggen"
                    navigate_2="/login_page"
                    button_3="al onze producten"
                    navigate_3="/alle_producten"
                    button_4="hoe maak je bier"
                    navigate_4="/Productie_Informatie"
                />
            </div>
        </>
    );
}

export default Home;
