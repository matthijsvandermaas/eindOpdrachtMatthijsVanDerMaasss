import React from "react";
import './Text-component.css';


function Text_component({ Text_Title, Text_Header, Text_message, Text_message2, Text_message3 }) {

    return (
        <>
            <div className="text-container">
                <h1>{Text_Title}</h1>
                    <h2>{Text_Header}</h2>
                    <p>{Text_message}</p>
                    <p>{Text_message2}</p>
                    <p>{Text_message3}</p>
            </div>
        </>
    );
}

export default Text_component;
