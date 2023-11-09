import React, { useContext, useState } from 'react';
import './LoginPage.css';
import SignIn from '../../components/login en signup/signin';
import Slider from '../../components/slider/Slider';
import slider_Img_One from '../../assets/hoe maak je bier/hop.png';
import slider_Img_Two from '../../assets/hoe maak je bier/yeast.png';
import slider_Img_Three from '../../assets/hoe maak je bier/malt.png';
import slider_Img_Four from '../../assets/hoe maak je bier/gist.png';
import Cubes from '../../components/cubes/Cubes';
// import AuthenticationContext from '../../context/AuthenticationContext';

function LoginPage() {
    const [slideIndex, setSlideIndex] = useState(1);
    const { isAuthenticated, logout, login } = useContext(AuthenticationContext);
    const navigate = useNavigate();

    return (
        <div className="outer-login-container">
            <div>
                <Slider
                    slider_Img1={slider_Img_One}
                    slider_Img2={slider_Img_Two}
                    slider_Img3={slider_Img_Three}
                    slider_Img4={slider_Img_Four}
                    slideIndex={slideIndex}
                    setSlideIndex={setSlideIndex}
                />
                {/* SignIn component is used here */}
                <SignIn />

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
        </div>
    );
}

export default LoginPage;
