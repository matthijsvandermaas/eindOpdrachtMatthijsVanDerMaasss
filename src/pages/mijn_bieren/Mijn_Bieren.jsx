import React, {useState} from 'react';
import Rating_1 from "../../components/Rating_system/Rating_1.jsx";

function Mijn_Bieren() {
    const handleStarClick = (starValue) => {
        setRating(starValue);
    };
    const [rating, setRating] = useState(0);
    return (
        <>
        <p>test</p>
            <Rating_1 ratingValue={rating} onClick={handleStarClick} />


        </>
    );
}

export default Mijn_Bieren;