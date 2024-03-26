// HookFormAddImage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const HookFormAddImage = ({ productName, filename}) => {
    const [imageUrl, setImageUrl] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('filename', data.file[0]);
        formData.append('productName', productName);
        try {
            const response = await axios.post('http://localhost:8081/fileDocument/single/uploadDb', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Image uploaded successfully:', response.data);
            const uploadedImageUrl = response.data.url;
            setImageUrl(uploadedImageUrl);
            navigate('/alle_producten');
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div>
            <h2>Foto of bestand toevoegen</h2>
            <form onSubmit={onSubmit} encType="multipart/form-data">
                <div>
                    <label>Productnaam:</label>
                    <input type="text" name="productName" defaultValue={productName} />
                </div>
                <div>
                    <label>foto:</label>
                    <input type="filename" name="filename" defaultValue={filename} />
                </div>
                {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
                <button type="submit">Afbeelding toevoegen</button>
            </form>
        </div>
    );
};

HookFormAddImage.propTypes = {
    productName: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
};

export default HookFormAddImage;
