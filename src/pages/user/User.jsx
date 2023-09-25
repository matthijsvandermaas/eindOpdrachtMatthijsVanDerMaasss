import React from 'react';
import './User.css';
import Inschrijf_Form from "../../components/inschrijfform/Inschrijf_Form.jsx";

function inschrijf_Form(){
    return(
        <><div className="form-container">

            <form>
                <H2>inschrijfformulier</H2>

                <Inschrijf_Form></Inschrijf_Form>
            </form>
            </div>
        </>
    );
}
export default inschrijf_Form;