import React from "react";
import './Text-component.css';


// eslint-disable-next-line react/prop-types
function Text_component({ Text_Title, Text_Header, Text_Message1, Text_Message2, Text_Message3 }) {

    return (
        <>
            <div className="text-container">

                    <h1>{Text_Title}</h1>
                    <h2>{Text_Header}</h2>
                    <h4>{Text_Message1}</h4>
                    <h4>{Text_Message2}</h4>
                    <h4>{Text_Message3}</h4>
            </div>
        </>
    );
}

export default Text_component;
