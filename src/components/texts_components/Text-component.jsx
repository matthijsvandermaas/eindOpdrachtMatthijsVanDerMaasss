import React from "react";
import './Text-component.css';


function Text_component({ Text_Title, Text_message }) {

    return (
        <>
            <div className="text-container">
                    <h2>{Text_Title}</h2>
                    <p>{Text_message}</p>
            </div>
        </>
    );
}

export default Text_component;
