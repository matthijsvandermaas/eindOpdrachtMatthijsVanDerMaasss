import React, {useState} from 'react'
import './Login_Page.css'
import Cubes from "../../components/cubes/Cubes.jsx";
import Slider from '../../components/slider/Slider.jsx';
import slider_Img_One from '../../assets/hoe maak je bier/hop.png';
import slider_Img_Two from '../../assets/hoe maak je bier/yeast.png';
import slider_Img_Three from '../../assets/hoe maak je bier/malt.png';
import slider_Img_Four from '../../assets/hoe maak je bier/gist.png';

// https://codesandbox.io/s/github/SinghDigamber/react-login-signup-ui-template/tree/master/?from-embed=&file=/src/index.css
function login(){
        const [slideIndex, setSlideIndex] = useState(1);
        const slider_Img_1 = slider_Img_One;
        const slider_Img_2 = slider_Img_Two;
        const slider_Img_3 = slider_Img_Three;
        const slider_Img_4 = slider_Img_Four;
        return (
            <>
                <div className="outer-login-container">
                    <Slider
                        slider_Img1={slider_Img_1}
                        slider_Img2={slider_Img_2}
                        slider_Img3={slider_Img_3}
                        slider_Img4={slider_Img_4}
                        slideIndex={slideIndex}
                        setSlideIndex={setSlideIndex} />
                    <h1>Gezellig dat je er bent, kom je inschrijven of inloggen?</h1>
            <form className="form-content background-login">
                <div className="">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="">
                    <button type="submit" className="bttn">
                        inschrijven
                    </button>
                </div>

            </form>
                    <p>Ander formulieren</p>
                    <Cubes
                        button_1="Een bierliefhebber"
                        navigate_1="/inschrijfformulier_particulier"
                        button_2="Een brouwer"
                        navigate_2="/inschrijfformulier_producent"
                        button_3="Een nieuw biertje"
                        navigate_3="/inschrijfformulier_product"
                        button_4="Home"
                        navigate_4="/"

                    />
                </div>
            </>
        );
}
export default login;
