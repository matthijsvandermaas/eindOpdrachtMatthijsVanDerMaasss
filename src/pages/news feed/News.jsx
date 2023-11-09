import * as React from 'react';
import TextComponent from "../../components/texts_components/Text-component";
import IBU from "../../assets/hoe maak je bier/ibu.jpg";



function News() {


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

</div>
        </>
    );
}

export default News;
