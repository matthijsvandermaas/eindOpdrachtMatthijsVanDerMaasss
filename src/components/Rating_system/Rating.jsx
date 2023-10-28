import React, {useContext, useState} from "react";
import "./Rating.css";
import wheat from "../../assets/logos and backgrounds/wheat.png";
import {AuthenticationContext} from "../../utils/AuthenticationContext.jsx";

function Rating({titel}) {
    const [rating, setRating] = useState(0);

    const handleStarClick = (starValue) => {
        setRating(starValue);
    };

    return (
        <>

            <div className="star-rating">
                <h5>{titel}</h5>
                <div className="star-rating-container border_top_left">
                {[1, 2, 3, 4, 5].map((starValue) => (
                    <span
                        key={starValue}
                        className={starValue <= rating ? "star filled" : "star"}
                        onClick={() => handleStarClick(starValue)}
                        >
                            <label>
                      <img className="wheat_logo" src={wheat} alt="wheat-logo"/>
                        </label>
                    </span>
                ))}
                </div>
            </div>
        </>
    );
}

export default Rating;
