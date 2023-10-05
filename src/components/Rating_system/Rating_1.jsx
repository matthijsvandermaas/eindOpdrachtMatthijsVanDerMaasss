import React, { useState } from "react";
import "./Rating.css";
function Rating_1(){
const Rating_1 = () => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (starValue) => {
        setRating(starValue);
    };

    return (
        <>
            <div className="star-rating">
                {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((starValue) => (
                    <span
                        key={starValue}
                        className={starValue <= rating ? "star filled" : "star"}
                        onClick={() => handleStarClick(starValue)}
                    >
                        ★
                    </span>
                ))}
            </div>
        </>
    );
};
}

export default Rating_1;
