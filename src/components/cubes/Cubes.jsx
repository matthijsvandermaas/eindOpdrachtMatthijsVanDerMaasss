import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import './Cubes.css';

function Cubes({button_1, button_2, button_3, button_4, navigate_1, navigate_2, navigate_3, navigate_4}) {
    const navigate = useNavigate();

    return (
        <div className="cubes-container">
            <button type="button" className="cube-bttn1 cube-bttn"
                    onClick={() => navigate(navigate_1)}>{button_1}</button>
            <button type="button" className="cube-bttn2 cube-bttn"
                    onClick={() => navigate(navigate_2)}>{button_2}</button>
            <button type="button" className="cube-bttn3 cube-bttn"
                    onClick={() => navigate(navigate_3)}>{button_3}</button>
            <button type="button" className="cube-bttn4 cube-bttn"
                    onClick={() => navigate(navigate_4)}>{button_4}</button>
        </div>
    );
}

Cubes.propTypes = {
    button_1: PropTypes.string.isRequired,
    button_2: PropTypes.string.isRequired,
    button_3: PropTypes.string.isRequired,
    button_4: PropTypes.string.isRequired,
    navigate_1: PropTypes.string.isRequired,
    navigate_2: PropTypes.string.isRequired,
    navigate_3: PropTypes.string.isRequired,
    navigate_4: PropTypes.string.isRequired,
};

export default Cubes;
