import React from "react";
import './Text-component.css';


// eslint-disable-next-line react/prop-types
function Text_component({ Text_Title, Text_Header, Text_Message1, Text_Message2, Text_Message3, Text_Message4, Text_Message5, Text_Message6, Text_Message7, Text_Message8, Text_Message9, Text_Message10, Text_Message11 }) {

    return (
        <>
            <div className="text-container">

                    <h1>{Text_Title}</h1>
                    <h2>{Text_Header}</h2>
                    <h4>{Text_Message1}</h4>
                    <h4>{Text_Message2}</h4>
                    <h4>{Text_Message3}</h4>
                    <h4>{Text_Message3}</h4>
                    <h4>{Text_Message4}</h4>
                    <h4>{Text_Message5}</h4>
                    <h4>{Text_Message6}</h4>
                    <h4>{Text_Message7}</h4>
                    <h4>{Text_Message8}</h4>
                    <h4>{Text_Message9}</h4>
                    <h4>{Text_Message10}</h4>
                    <h4>{Text_Message11}</h4>
            </div>
        </>
    );
}

export default Text_component;
