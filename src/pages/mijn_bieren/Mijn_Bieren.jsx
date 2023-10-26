import React, {useState} from 'react';
import Rating from "../../components/Rating_system/Rating.jsx";

function Mijn_Bieren() {
    const handleStarClick = (starValue) => {
        setRating(starValue);
    };
    const [rating, setRating] = useState(0);
    return (
        <>
        <p>test</p>
            <Rating ratingValue={rating} onClick={handleStarClick} />


        </>
    );
}

export default Mijn_Bieren;