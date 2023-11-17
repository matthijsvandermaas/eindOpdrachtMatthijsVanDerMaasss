import React, {} from 'react';

function InschrijfFormFileCompontent({ OnChangeLink }) {


    return (
        <div className="form-content border_top_bottom background">
            <div>
                <label>Voeg een foto toe:</label>
                <input name="file" type="file" accept="image/*" onChange={OnChangeLink} required />
            </div>
        </div>
    );
}

export default InschrijfFormFileCompontent;
