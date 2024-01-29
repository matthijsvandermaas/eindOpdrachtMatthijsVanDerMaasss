import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
const FormAddImage = ({ entityName, form_titele }) => {
    const [image, setImage] = useState(null);
    const { register, handleSubmit } = useForm();


    const onSubmit = async (data) => {
        try {

            const formData = new FormData();
            formData.append('file', data.file[0]);
            formData.append('entityName', entityName);
            const response = await axios.post(`http://localhost:8081/single/uploadDB/${entityName}`, formData,{//productname is de naam van het product toevoegen aan url net als postman  en producten kopelen aan afbeelding
            headers: {
                'Content-Type': 'multipart/form-data'  },
        });
            setImage(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/downloadFromDB/${image.fileName}`, {
                    responseType: 'arraybuffer',
                });

                const base64String = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
                setImage({ ...image, base64: base64String });
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        if (image) {
            fetchImages();
        }
    }, [image]);


    return (
        <>
            <div>
                    <h5>{form_titele}</h5>
                <div style={{ fontSize: '1em' }} className="form-content border_top_bottom">
                    <input type="file" name="file" {...register('file')} />
                    {/*<button className="bttn" type="submit">Afbeelding toevoegen</button>*/}

                </div>
                {image && <img src={`data:image/jpeg;base64,${image.base64}`} alt="Uploaded" />}

            </div>
        </>
    );
};

export default FormAddImage;
