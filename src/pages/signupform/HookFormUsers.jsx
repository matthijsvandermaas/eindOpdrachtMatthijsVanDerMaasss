import React from 'react';
import './Form.css';
import InputFormUsers from "../../components/profile/inputFormUsers";

function HookFormUsers() {
    return (
        <>
            <div className="form-container">
                <InputFormUsers titleForm="Gebruiker aanmaken" />
            </div>
        </>
    );
}

export default HookFormUsers;
