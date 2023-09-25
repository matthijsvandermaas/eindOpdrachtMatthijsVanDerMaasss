import { Link } from "react-router-dom";

function Inschrijf_Navigatie() {
    return (
        <>
            <div className="text">
                <h1>inschrijving</h1>
                <div className="inschrijving_Content">
                    <div className="inschrijving_bttns">
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text... Het is de gecorrigeerde tekst van je welkomstboodschap.
                        </p>
                    </div>
                    <form className="verwijzings_form">
                        <div className="inschrijving_content">
                            <Link to="/inschrijven/particulier">
                                <button type="button" className="bttn">Particulier</button>
                            </Link>
                        </div>
                        <div className="inschrijving_content">
                            <Link to="/inschrijven/zakelijk">
                                <button type="button" className="bttn">Zakelijk</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Inschrijf_Navigatie;
