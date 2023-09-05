import React from 'react';
import './App.css';
import './constants/background.css'
import './helpers/Helpers.js'; // Voeg deze import toe
import logoImage from './assets/b & b logo.png';

function App() {

    return (
        <>
            <div className="outer-outer-container">
                <div className="outer-container">
                    <div className="header-container">
                        <img src={logoImage} alt="B&B Logo" />
                        {/*<div>*/}
                        {/*<h1 className="title1">beers &</h1><h1 className="title2">broskys</h1>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*<h1 className="title3">Beers &</h1><h1 className="title4">sʎʞsoɹq</h1>*/}
                        {/*</div>*/}

                    </div>
                    <div className="main-container">
                        {/*<div className="background"></div>*/}

                    </div>
                    <div className="footer-container">

                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
