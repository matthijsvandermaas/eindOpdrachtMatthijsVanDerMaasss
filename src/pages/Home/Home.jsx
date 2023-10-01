import React from 'react';
import './Home.css';
import wheat from "../../assets/wheat.png";
import Text_component from "../../components/texts_components/Text-component.jsx";

function Home() {
    return (
        <div className="text">
            <h1>Welcome Bier liefhebbers</h1>
            <div className="text-content">
                <div className="text-text">
                    <Text_component
                        Text_message="Contrary to popular belief, Lorem Ipsum is not simply random text... Het is de gecorrigeerde tekst van je welkomstboodschap."
                    />
                </div>
                <div className="text-image">
                    <img src={wheat} alt="afbeelding" />
                </div>
            </div>
            <div className="text-text">
                <Text_component
                    Text_Header="Over ons"
                    Text_message="Contrary to popular belief, Lorem Ipsum is not simply random text... Het is de gecorrigeerde tekst van je welkomstboodschap."
                />
            </div>
        </div>
    );
}

export default Home;
