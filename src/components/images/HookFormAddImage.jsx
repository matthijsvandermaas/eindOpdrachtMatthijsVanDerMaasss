import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';

const HookFormAddImage = ({productName}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [productsName, setProductsName] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    HookFormAddImage.propTypes = {
        productName: PropTypes.string.isRequired,
    };


    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);
        console.log("formData", formData);
        console.log("productName", data.productName);
        try {
            const response = await axios.post(`http://localhost:8080/single/uploadDB/${data.productName}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Image uploaded successfully:", response.data);
            const uploadedImageUrl = response.data.url;
            setImageUrl(uploadedImageUrl);
            navigate('/alle_producten');
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };




    return (
        <>
            <div>
                <h2>Foto of bestand toevoegen</h2>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data"
                      className="form-container form-content border_top_left background">
                    <div>
                        <label>Productnaam:</label>
                        <input type="text" name="productName" {...register('productName')} />
                    </div>
                    <div>
                        <label>foto:</label>
                        <input type="file" name="file"  {...register('file')} />
                    </div>
                    { imageUrl && <img src={imageUrl} alt="Uploaded Image"/> }
                    <button className="bttn" type="submit">Afbeelding toevoegen</button>
                </form>
            </div>
        </>
    );
};

export default HookFormAddImage;
