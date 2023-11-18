import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleUpload = () => {
        if (!image) {
            console.error('Geen afbeelding geselecteerd');
            return;
        }

        const formData = new FormData();
        formData.append('file', image);

        axios.post('http://localhost:3000/api/upload', formData)
            .then(response => {
                console.log('Afbeelding succesvol geüpload');
            })
            .catch(error => {
                console.error('Fout bij het uploaden van de afbeelding', error);
            });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload afbeelding</button>
        </div>
    );
};

export default ImageUploader;
