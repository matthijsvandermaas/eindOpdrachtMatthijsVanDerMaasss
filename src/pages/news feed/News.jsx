import * as React from 'react';
import TextComponent from "../../components/texts_components/Text-component.jsx";
import Rating from "../../components/Rating_system/Rating.jsx";
import {useContext, useState} from "react";
import Cubes from "../../components/cubes/Cubes.jsx";
import {AuthenticationContext} from "../../context/AuthenticationContext.jsx";
import IBU from "../../assets/hoe maak je bier/ibu.jpg";



function News() {
    const { isAuthenticated } = useContext(AuthenticationContext);

    return (
        <>
        <div className="outer_news_Container">
<h1>Nieuws en Agenda</h1>
        <div className="text-component">
            <div className="border_top_left  background">
                <h1>bier nieuws</h1>
            <TextComponent
                Text_Header="titel1"
                Text_Message1={["Hier komt het nieuws."]}
            />
                <TextComponent
                    Text_Header="titel1"
                    Text_Message1={["Hier komt het nieuws."]}
                />
                    <img className="general_Img" src={IBU} alt="IBU tabel"/>

                <TextComponent
                    Text_Header="titel1"
                    Text_Message1={["Hier komt het nieuws."]}
                />
            </div>
        </div>
            <div className="text-component">
            <div className="border_top_left background2">

                <h1>Bier agenda</h1>
                <TextComponent
                    Text_Header="agenda punt1"
                    Text_Message1={["Hier komt het nieuws."]}
                />
                <TextComponent
                    Text_Header="agenda punt1"
                    Text_Message1={["Hier komt het nieuws."]}
                />
                <TextComponent
                    Text_Header="agenda punt1"
                    Text_Message1={["Hier komt het nieuws."]}
                />
                <img className="general_Img" src={IBU} alt="IBU tabel"/>

        </div>
            </div>
            <Cubes className="background"
                   button_1={isAuthenticated ? "Mijn bieren" : "Inschrijven"}
                   navigate_1={isAuthenticated ? "/mijn_bieren" : "/inschrijfformulier"}
                   button_2={isAuthenticated ? "Algemene bierkennis": "Inloggen"}
                   navigate_2={isAuthenticated ? "/Productie_Informatie#algemene-informatie": "/login_page"}
                   button_3="Al onze producten"
                   navigate_3="/alle_producten"
                   button_4="Hoe maak je bier"
                   navigate_4="/Productie_Informatie"
            />
</div>
        </>
    );
}

export default News;
