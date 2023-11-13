// InEnDecreaseFont.jsx

import React, { useState } from 'react';

export function InEnDecreaseFont() {
    const [scale, setScale] = useState(1);

    const increaseScale = () => {
        setScale((prevScale) => prevScale + 0.1);
    };

    const decreaseScale = () => {
        setScale((prevScale) => Math.max(0.5, prevScale - 0.1));
    };

    return (
        <div>
            <h1 style={{ transform: `scale(${scale})` }}>Tekstschaal aanpassen</h1>
             <button className="bttn bttn_small" onClick={increaseScale}>Vergroot</button>
             <button className="bttn bttn_small" onClick={decreaseScale}>Verklein</button>
        </div>
    );
}

export default InEnDecreaseFont;
