import * as React from 'react';
import TextComponent from "../../components/texts_components/Text-component";
import IMG from "../../assets/general pics/img.png";
import Bierkroket from "../../assets/newsfeed/Cornet-en-Rodenbach-kroketten.png";
import logo_small from "../../assets/logos and backgrounds/B & B logo2 klein.jpg";
import Hob from "../../assets/newsfeed/HoB.jpeg";
import CarouselComponent from "../../components/carousel/Carousel.jsx";




function News() {


    return (
        <>
        <div className="outer_news_Container">
<h1>Nieuws en Agenda</h1>
        <div className="text-component">
            <div className="border_top_left  background">
                <h1>bier nieuws</h1>
                <TextComponent
                    Text_Header="lancering Beers & Brewskys"
                    Text_Message1={["Op ... december zal Beers & Breskys online komen ," +
                    "Het nieuwe platform voor bierliefhebbers en brouwers om hun passie te delen over dit gezellige en ambachtelijke product."]}
                />
                <TextComponent
                    Text_Header="House of Bird Kwintelooijen"
                    Text_Message1={["Op de Kwintelooijen is een nieuw bier gebrouwen door de brouwerij van Kwintelooijen. Op 2 december zal 'House of Bird Kwintelooijen' zijn deuren openen. Dit is het eerste proeflokaal en brouwer op de Kwintelooijen. Je kunt hier een biertje proeven, lekker lunchen of koffie drinken daarnaast wordt er voor elke liter gebrouwen bier wordt een boom geplant."]}
                />
                <TextComponent
                    Text_Header="Brouwerijen Rodenbach en Cornet lanceren kroketten."
                    Text_Message1={[
                        "Voor de ontwikkeling van de Rodenbach garnalenkroket en de Cornet kaaskroket gingen de brouwers van Rodenbach en Cornet te rade bij de ambachtelijke kroketten-maker Bubba, bij de consument onder andere bekend voor hun merkwaardige aanwezigheid onder de vorm van een vuurtoren op de 32 grootste markten van België.",

                        "Sinds 1997 verkoopt Bubba door heel België verse, artisanale kroketten van hoge kwaliteit.",
                        "De huisgemaakte kroketten worden bereid met de beste ingrediënten zodat de authentieke smaak gegarandeerd kan worden. Samen met de brouwers werd nagedacht over de ontwikkeling van een kroket waarin enerzijds Rodenbach en anderzijds Cornet is verwerkt."
                    ]}
                />
                <img className="general_Img" src={Bierkroket} alt="foto van bierkroketen"/>

            </div>
        </div>
            <div className="text-component background_fade2">
            <div className="border_top_left background2">

                <h1>Bier agenda</h1>
                <TextComponent
                    Text_Header="Opening House of Bird Kwintelooijen"
                    Text_Message1={[
                        "2 december 2023",
                        <p key="link"><a href="https://www.houseofbird.nl/kwintelooijen/" target="_blank" rel="noopener noreferrer">www.houseofbird.nl</a></p>
                    ]}
                />
                <CarouselComponent src1={Hob} alt1="House of Bird" src2={IMG} alt2="foto1" />
                <TextComponent
                    Text_Header="Lancering Beers & Brewskys"
                    Text_Message1={["... december 2023",
                    <p key="link"><a href="https://localhost:5173/home" target="_blank" rel="noopener noreferrer">www.beersandbrewskys.nl</a></p>]}
                />
                <img className="general_Img" src={IMG} alt="img"/>


            </div>
            </div>

</div>
        </>
    );
}

export default News;
