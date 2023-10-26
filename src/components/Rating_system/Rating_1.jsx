import React, { useState } from "react";
import "./Rating.css";
import wheat from "../../assets/logos and backgrounds/wheat.png";

function Rating_1() {
    const [rating, setRating] = useState(0);

    const handleStarClick = (starValue) => {
        setRating(starValue);
    };

    return (
        <>

            <div className="star-rating border_top_left">
                <p>ratting</p>
                {[1, 2, 3, 4, 5 ].map((starValue) => (
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
        </>
    );
}

export default Rating_1;
