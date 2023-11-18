import React from 'react';
import {useForm} from "react-hook-form";

function FormFileCompontent() {
    const { register, handleSubmit } = useForm();

    return (
        <div className="form-content">
            <div>
                <label>Voeg een foto toe:</label>
                <input name="file" type="file" accept="image/*" {...register('file', { required: 'Bestand is verplicht' })} />
            </div>
        </div>
    );
}

export default FormFileCompontent;
