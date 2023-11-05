import React, { useContext, useState } from 'react';
import '../../pages/HOME/Home.css';
import './Drank_Orgel.css';
import Cubes from '../../components/cubes/Cubes.jsx';
import Slider from '../../components/slider/Slider.jsx';
import slider_Img_One from '../../assets/hoe maak je bier/hop.png';
import slider_Img_Two from '../../assets/hoe maak je bier/yeast.png';
import slider_Img_Three from '../../assets/hoe maak je bier/malt.png';
import slider_Img_Four from '../../assets/hoe maak je bier/gist.png';
import {AuthenticationContext} from "../../context/AuthenticationContext.jsx";
import {NavLink, useNavigate} from "react-router-dom";


function Drankorgel() {
    const { isAuthenticated, logout } = useContext(AuthenticationContext);
    const navigate = useNavigate();
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
                    setSlideIndex={setSlideIndex}
                />
                <div className="text-content">
                    <div className="informatie_container border_top_bottom background_bar">
                        <h1 className="font_music_page">Welcome bij het "Drankorgel" voor een gezellig muziekje </h1>
                        <h4 className="dutch">Nederlandstalige Kroeg hits</h4>
                        <button className="music-btn bttn_spotify" onClick={() => window.open("https://open.spotify.com/playlist/37i9dQZF1DWUppGmuwT9c7?si=167758f6c9254cb1")}>
                            Kroeg hits
                        </button>
                        <h4>Cozy Coffee Shop Ambience & Jazz Relaxing Music</h4>
                        <button className="music-btn bttn_youtube" onClick={() => window.open("https://www.youtube.com/watch?v=62JxhcU9PA8")}>
                            jazz music
                            </button>
                        <h4>70/80/90 classics</h4>
                        <button className=" music-btn bttn_spotify" onClick={() => window.open("https://open.spotify.com/playlist/3pUwhh3WcgvFZbIiwJ3x6f?si=10550dc0441f4f2f")}>
                            70/80/90's
                        </button>
                        <h4>Billboard Top 100 Songs of the 2000s</h4>
                        <button className="music-btn bttn_youtube" onClick={() => window.open("https://www.youtube.com/results?search_query=top+100+00")}>
                            00s
                        </button>
                        <h4>de radio 2 top 2000</h4>
                        <button className="music-btn bttn_top2000" onClick={() => window.open("https://open.spotify.com/playlist/37i9dQZF1DWTmvXBN4DgpA?si=82d36fdfb196459a")}>
                            de 2 top 2000
                        </button>




                    </div>
                </div>
                <Cubes
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

export default Drankorgel;
