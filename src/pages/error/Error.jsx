import React from 'react';
import Empty_bear from '../../assets/used-empty-beer-glass.jpg'
import Text_component from "../../components/texts_components/Text-component.jsx";
import Cubes from "../../components/cubes/Cubes.jsx";
import Home from "../Home/Home.jsx";
import {Link, NavLink} from "react-router-dom";
import './Error.css'
function Error() {
    return (
        <>
            <div className="title-content background">
                <background></background>
                <h1>Je hebt een glaasje teveel op denk ik,<br />Ga terug naar <Link to="/"><strong>Home</strong></Link></h1>

                <div className="text-content content_1">
                    <Text_component
                        Text_Header=""

                    />

                    <div className="error-image">

                    </div>

                </div>
                <Cubes
                    button_1="inschrijven"
                    navigate_1="inschrijfformulier"
                    button_2="inloggen"
                    navigate_2=""
                    button_3="al onze producten"
                    navigate_3="alle_producten"
                    button_4="home"
                    navigate_4="home"

                />



            </div>
        </>
    );
}
export default Error;
