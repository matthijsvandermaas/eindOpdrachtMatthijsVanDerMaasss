import React from 'react';

function InschrijfFormFileCompontent({ register }) {
    return (
        <div className="form-content border_top_bottom background">
            <div>
                <label>Voeg een foto toe:</label>
                <input name="file" type="file" accept="image/*" {...register('file', { required: 'Bestand is verplicht' })} />
            </div>
        </div>
    );
}

export default InschrijfFormFileCompontent;
