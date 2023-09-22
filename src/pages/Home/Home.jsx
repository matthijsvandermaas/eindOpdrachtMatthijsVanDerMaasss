import React, { useState } from 'react';
import './Home.css';
import wheat from "../../assets/wheat.png";

function  Home(){
    return(
        <>
            <div className="text">
                <h1>Welcome Bier liefhebbers</h1>
                <div className="text-content">
                    <div className="text-text">
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text... Het is de gecorrigeerde tekst van je welkomstboodschap.
                        </p>
                    </div>
                    <div className="text-image">
                        <img src={wheat} alt="afbeelding" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;