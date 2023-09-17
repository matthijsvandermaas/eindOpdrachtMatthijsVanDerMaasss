import React from "react";
import './Text-component.css';

function Text_component({ Text_Title, Text_message }) {
    return (
        <>
            <div className="text-container">
                <div>
                    <h1>{Text_Title}</h1>
                </div>
                <div className="inner-welcome-container">
                    <p>{Text_message}</p>


                </div>
            </div>
        </>
    );
}

export default Text_component;
