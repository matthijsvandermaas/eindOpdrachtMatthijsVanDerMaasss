import React, { useContext, useEffect, useState } from 'react';
import Text_component from '../../components/texts_components/Text-component';
import Cubes from '../../components/cubes/Cubes';
import { Link } from 'react-router-dom';
import './Error.css';

function Error() {
    const [isAuth, toggleIsAuth] = useState();
    const [previousLocation, setPreviousLocation] = useState(null);


    useEffect(() => {
        setPreviousLocation(document.referrer || '/');
    }, []);

    return (
        <div className="error-content">
            <h1>
                Je hebt een glaasje teveel op denk ik, <br/>
                {isAuth ? 'waar je was?' : <span>ga naar <Link to="/home"><strong>Home</strong></Link></span>}
            </h1>
            <div className="text-content content_1">
                <Text_component Text_Header="" />
                <div className="error-image"></div>
            </div>
            <Cubes
                button_1="inschrijven"
                navigate_1="/inschrijfformulier"
                button_2="inloggen"
                navigate_2="/login_page"
                button_3="al onze producten"
                navigate_3="/alle_producten"
                button_4="home"
                navigate_4="/"
            />
        </div>
    );
}

export default Error;
