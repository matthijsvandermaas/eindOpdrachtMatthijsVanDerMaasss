import React from 'react';
import './Footer.css';
import Text_component from "../../components/texts_components/Text-component.jsx";

function Footer() {
    return (
        <>
            <div className="footer-content">
                <Text_component
                    Text_message="
                    Contactgegevens:
                    apjeshof 42
                    1235 AP Doorndaal
                    "
                ></Text_component>
                <p>Copyright 2023</p>
                <p>.</p>
            </div>
        </>
    );
}

export default Footer;
