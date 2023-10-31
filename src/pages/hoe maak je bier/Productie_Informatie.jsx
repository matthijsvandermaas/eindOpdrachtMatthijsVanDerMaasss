import React, {useState, useRef} from 'react';
import './Productie_Informatie.css';
import '../../components/navBar/NavBar.css';
import Text_component from "../../components/texts_components/Text-component.jsx";

import hop from "../../assets/hoe maak je bier/hop.png"
import malt from "../../assets/hoe maak je bier/malt.png"
import het_Proces1 from "../../assets/hoe maak je bier/staps_Of_Production.png"
import het_Proces2 from "../../assets/hoe maak je bier/staps_Of_Production_Img.png"
import water from "../../assets/hoe maak je bier/water.png"
import gist from "../../assets/hoe maak je bier/yeast.png"
import all_Soorten_Bieren from "../../assets/hoe maak je bier/all_kinds_of_beer.png";
import bier_gisten from "../../assets/hoe maak je bier/biergisten.jpeg";
import IBU from "../../assets/hoe maak je bier/ibu.jpg";

function Productie_Informatie() {
    const hetProcesRef = useRef(null);
    const algemene_infoRef = useRef(null);
    const [dropdownStates, setDropdownStates] = useState({
        bierBrouwen: false,
        verschillendeSoortenBier: false,
        ibu: false,
        gisten: false,
        hop: false,
        mout: false,
        water: false,
        gist: false
    });

    const handleMouseEnter = (item) => {
        setDropdownStates((prevStates) => ({
            ...prevStates,
            [item]: true
        }));
    };

    const handleMouseLeave = (item) => {
        setDropdownStates((prevStates) => ({
            ...prevStates,
            [item]: false
        }));
    };


    return (
        <>
            <div className="informatie_container background">
                <h1>Hoe maak je bier?</h1>
                <section id="algemene-informatie" ref={hetProcesRef}>
                    <h2>Algemeen informatie</h2>

                    <div className="text-component content_2 border_top_left">
                        <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('bierBrouwen')}
                             onMouseLeave={() => handleMouseLeave('bierBrouwen')}>
                            <Text_component
                                Text_Title="Bier brouwen🞃"
                            />
                            {dropdownStates.bierBrouwen && (
                                <div className="submenu-content">
                                    <Text_component
                                        Text_Message2="Het brouwen van bier begint met het selecteren van hoogwaardige ingrediënten: water, mout, hop en gist."
                                        Text_Message3="Eerst wordt het mout gemout en vermalen tot een fijn poeder, waarna het wordt vermengd met warm water om enzymatische reacties te activeren en suikers vrij te maken."
                                        Text_Message4=" Dit mengsel wordt gekookt, waarbij hop wordt toegevoegd voor bitterheid, aroma en conservering."
                                        Text_Message5=" "
                                        Text_Message6="Na het koken wordt het mengsel gekoeld en gist toegevoegd, waardoor fermentatie plaatsvindt,"
                                        Text_Message7="deze periode verandert de gist de suikers in alcohol en koolstofdioxide."
                                        Text_Message8="Het bier wordt vervolgens gerijpt, gefilterd en indien nodig gecarboniseerd. Ten slotte wordt het gebotteld."
                                    />
                                </div>
                            )}
                        </div>
                        <div className="text-image">
                            <img src={het_Proces1} alt="Het brouwproces"/>
                            <img src={het_Proces2} alt="Het brouwproces"/>
                        </div>
                    </div>
                    <div className="text-row content_1 border_left">
                        <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('ibu')}
                             onMouseLeave={() => handleMouseLeave('ibu')}>
                            <Text_component
                                Text_Title="IBU🞃"
                            />
                            {dropdownStates.ibu && (
                                <div className="submenu-content">
                                    <Text_component
                                        Text_Message2="IBU staat voor (International Bitterness Units) Het is een maatstaf voor de bitterheid van bier, die aangeeft hoe bitter een bier smaakt als gevolg van de aanwezigheid van hopzuren."
                                        Text_Message3="Hoe hoger het IBU-gehalte, hoe bitterder het bier zal zijn."
                                        Text_Message4=" "
                                        Text_Message5="IBU wordt gemeten op een schaal van 0 tot boven de 100."
                                        Text_Message6="Lichtere bieren zoals pilseners meestal lage IBU-waarden hebben (rond 5-20 IBU),"
                                        Text_Message7="terwijl hoprijke bieren zoals India Pale Ales (IPA's) veel hogere IBU-waarden kunnen hebben (vaak boven de 50 IBU)."
                                    />
                                </div>
                            )}
                        </div>
                        <div className="text-image">
                            <img src={IBU} alt="IBU tabel"/>
                        </div>
                    </div>
                    <div className="text-row content_1 border_left">
                        <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('gisten')}
                             onMouseLeave={() => handleMouseLeave('gisten')}>
                            <Text_component
                                Text_Title="Hoog of laag gisten?🞃"
                            />
                            {dropdownStates.gisten && (
                                <div className="submenu-content">
                                    <Text_component
                                        Text_Message2="Hooggistend bier wordt geproduceerd met gist dat bij hogere temperaturen fermenteert, wat resulteert in een warme, fruitige en complexe smaak."
                                        Text_Message3="Laaggistend bier fermenteert daarentegen bij lagere temperaturen, wat een heldere en schone smaak oplevert, typisch voor pilsners en lagers."
                                        Text_Message4=" "
                                        Text_Message5="Het verschil in gistingstemperatuur beïnvloedt de smaak, textuur en aroma's van het uiteindelijke bierproduct."
                                    />
                                </div>
                            )}
                        </div>
                        <div className="text-image">
                            <img src={bier_gisten} alt="gist"/>
                        </div>
                    </div>
                    <div className="text-row content_2 border_bottom_left">
                        <div className="text-component-dropdown"
                             onMouseEnter={() => handleMouseEnter('verschillendeSoortenBier')}
                             onMouseLeave={() => handleMouseLeave('verschillendeSoortenBier')}>
                            <Text_component
                                Text_Title="verschillende soorten Bier🞃"
                            />
                            {dropdownStates.verschillendeSoortenBier && (
                                <div className="submenu-content">
                                    <Text_component
                                        Text_Message1="❖Lager: Een ondergistend bier dat bij lage temperaturen wordt gefermenteerd. Het is helder van kleur en heeft een verfrissende smaak."
                                        Text_Message2="❖Ale: Een bovengistend bier dat bij warmere temperaturen wordt gefermenteerd. Het varieert in kleur en smaak, van licht en fruitig tot donker en complex."
                                        Text_Message3="❖Amber Ale: Een amberkleurig bier met een uitgebalanceerde smaak die zowel zoet als bitter kan zijn."
                                        Text_Message4="❖Witbier (Witbier of Witte Ale): Een bleek, troebel bier dat wordt gebrouwen met tarwe, kruiden (meestal koriander en sinaasappelschil) en gist. Het heeft een verfrissende, citrusachtige smaak."
                                        Text_Message5="❖IPA (India Pale Ale): Een type ale dat extra hop toevoegt voor een bittere smaak en aroma. Er zijn verschillende subtypes binnen IPA, zoals American IPA, Double IPA, en New England IPA. "
                                        Text_Message6="❖Stout: Een zeer donker, bijna zwart bier, bekend om zijn geroosterde smaak. Er zijn verschillende soorten stout, waaronder Dry Stout, Sweet Stout, en Imperial Stout."
                                        Text_Message7="❖Porter: Een donker bier vergelijkbaar met stout, maar vaak iets lichter van smaak. Het heeft ook geroosterde tonen en kan variëren in zoetheid."
                                        Text_Message8="❖Pilsner: Een lichtgekleurde lager met een knapperige, bittere smaak. Het is een van de meest populaire bierstijlen ter wereld."
                                        Text_Message9="❖Saison: Een Belgische bovengistende bierstijl, oorspronkelijk gebrouwen in de wintermaanden en gedronken in de zomer. Het heeft vaak kruidige, fruitige smaken."
                                        Text_Message10="❖Tripel: Een zware, sterk alcoholische Belgische ale met complexe smaken en aroma's. Het is meestal goud van kleur."
                                        Text_Message11="❖Barleywine: Een zeer sterke ale met een hoge alcoholpercentage. Het kan zowel Engelse (moutig, zoet) als Amerikaanse (hoppy) varianten hebben."
                                    />
                                </div>
                            )}
                        </div>
                        <div className="text-image">
                            <img src={all_Soorten_Bieren} alt="vele soorten bier"/>
                        </div>
                    </div>
                </section>
                <section id="het-proces" ref={algemene_infoRef}>
                    <h2>het brouw proces</h2>
                    <div className="text-row content_1 border_top_left">
                        <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('hop')}
                             onMouseLeave={() => handleMouseLeave('hop')}>
                            <Text_component
                                Text_Title="Hop🞃"
                            />
                            {dropdownStates.hop && (
                                <div className="submenu-content">
                                    <Text_component
                                        Text_Message2="Het zijn de bloemen of zaadkegels van deze plant die worden gebruikt in het brouwproces."
                                        Text_Message3="Hop voegt verschillende essentiële elementen toe aan bier."
                                   Text_Message4="Bitterheid:De bitterheid komt van bepaalde zuren in de hop, vooral alfazuren."
                                    Text_Message5=" Aroma: Hop voegt aroma en smaak toe aan het bier de hopvariëteiten en het moment waarop ze  worden toegevoegd beïnvloeden de smaak."
                                    Text_Message6="Schuimstabiliteit: Hop draagt bij aan de stabiliteit van het schuim op bier."
                                        />
                                </div>
                            )}
                        </div>

                        <div className="text-image">
                            <img src={hop} alt="Hop"/>
                        </div>
                    </div>
                    <div className="text-row content_1 border_left">
                        <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('mout')}
                             onMouseLeave={() => handleMouseLeave('mout')}>
                            <Text_component
                                Text_Title="mout"
                                />
                            {dropdownStates.mout && (
                                <div className="submenu-content">
                                    <Text_component
                                        Text_Message2="Mout is een essentieel ingrediënt in het brouwproces van bier en wordt gemaakt door granen, meestal gerst, in water te laten ontkiemen en vervolgens te drogen en te roosteren. Tijdens dit proces worden enzymen geactiveerd die zetmeel in de granen omzetten in suikers."
                                        Text_Message3="Deze suikers zijn nodig voor de fermentatie, waarbij gist de suikers omzet in alcohol en koolstofdioxide."
                                        Text_Message4="Mout speelt een cruciale rol in het brouwproces van bier. Tijdens het mouten worden zetmeelketens in granen omgezet in suikers, die essentieel zijn voor fermentatie. Verschillende moutsoorten en roosteringsgraden beïnvloeden de kleur, smaak en aroma van het bier."
                                        Text_Message5="Brouwers kunnen ook speciale mouten en moutextracten gebruiken om diverse smaakprofielen te creëren, van lichte blond bier tot donkere, rijke stouts."
                                    />
                                </div>
                            )}
                        </div>

                        <div className="text-image">
                            <img src={malt} alt="mout"/>
                        </div>
                    </div>
                    <div className="text-row content_1 border_left">
                        <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('water')}
                             onMouseLeave={() => handleMouseLeave('water')}>
                            <Text_component
                                Text_Title="Het belangrijkste ingredient, water!🞃"/>
                            {dropdownStates.water && (
                                <div className="submenu-content">
                                    <Text_component
                                        Text_Message2="Water is essentieel in het brouwproces omdat het de basis vormt van bier, meestal bestaande uit meer dan 90% van het eindproduct. Het water beïnvloedt niet alleen het volume van het bier, maar ook de mineralen en sporenelementen erin hebben invloed op de smaak."
                                        Text_Message3="Brouwers moeten zorgvuldig de samenstelling van het water aanpassen om verschillende bierstijlen te creëren, wat resulteert in unieke smaken en aroma's."/>
                                </div>
                            )}
                        </div>

                        <div className="text-image">
                            <img src={water} alt="water"/>
                        </div>
                    </div>
                    <div className="text-row content_1 border_bottom_left">
                        <div className="text-component-dropdown" onMouseEnter={() => handleMouseEnter('gist')}
                             onMouseLeave={() => handleMouseLeave('gist')}>
                            <Text_component
                                Text_Title="Gist🞃"
                                />
                            {dropdownStates.gist && (
                                <div className="submenu-content">
                                    <Text_component
                                        Text_Message2="Gist speelt een cruciale rol in het brouwproces doordat het de suikers in de wort omzet in alcohol en koolstofdioxide, wat fermentatie veroorzaakt."
                                        Text_Message3="Er zijn twee hoofdtypen gist: bovengistende gist, gebruikt voor ales, en ondergistende gist, gebruikt voor lagers. De keuze voor gist en de fermentatietemperatuur bepalen uiteindelijk de smaak,"
                                        Text_Message4="textuur en aroma van het voltooide bier, variërend van fruitige en warme tonen in ales tot schone en heldere profielen in lagers."/>
                                </div>
                            )}
                        </div>

                        <div className="text-image">
                            <img src={gist} alt="gist"/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Productie_Informatie;
