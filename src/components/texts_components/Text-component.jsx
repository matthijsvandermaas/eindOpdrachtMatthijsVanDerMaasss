import React from "react";
import './Text-component.css';


// eslint-disable-next-line react/prop-types
function Text_component({ Text_Title, Text_Header, Text_Message1, Text_Message2, Text_Message3 }) {

    return (
        <>
            <div className="text-container">

                    <h1>{Text_Title}</h1>
                    <h2>{Text_Header}</h2>
                    <p>{Text_Message1}</p>
                    <p>{Text_Message2}</p>
                    <p>{Text_Message3}</p>
            </div>
        </>
    );
}

export default Text_component;
