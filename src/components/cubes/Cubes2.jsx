import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Cubes2.css';
import './Cubes.css';


function Cubes2({ navigate_5, button_5, navigate_6, button_6}) {
    const navigate = useNavigate();

    return (
        <div className="cubes-container">
            <button type="button" className="cube-bttn1 cube-bttn" onClick={() => navigate(navigate_5)}>{button_5}</button>
            <button type="button" className="cube-bttn2 cube-bttn" onClick={() => navigate(navigate_6)}>{button_6}</button>

        </div>
    );
}

Cubes2.propTypes = {
    button_5: PropTypes.string.isRequired,
    button_6: PropTypes.string.isRequired,
    navigate_5: PropTypes.string.isRequired,
    navigate_6: PropTypes.string.isRequired,
};

export default Cubes2;
