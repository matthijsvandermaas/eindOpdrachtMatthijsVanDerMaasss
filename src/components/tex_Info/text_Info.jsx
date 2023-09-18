import React from "react";
import './text-Info.css';

function Text_Info({ Name_Product, percentage, IBU, kleur_Product, smaak_Product, inhoud_Product, locatie_Product }) {
    return (
        <>
            <div className="info-container">
                <div>
                    <p>naam bier: {Name_Product}</p>
                    <p>brouwer: {Name_Producent}</p>
                    <p>%:{percentage}</p>
                    <p>IBU: {IBU}</p>
                    <p>kleur: {kleur_Product}</p>
                    <p>smaak: {smaak_Product}</p>
                    <p>inhoud: {inhoud_Product}</p>
                    <p>inhoud: {locatie_Product}</p>
                </div>
            </div>
        </>
    );
}

export default Text_Info;
