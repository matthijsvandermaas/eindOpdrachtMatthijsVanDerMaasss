import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';

const HookFormAddImage = ({productName}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [productsName, setProductsName] = useState(null);
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const {register, handleSubmit} = useForm();
    const [previewUrl, setPreviewUrl] = useState(null);

    HookFormAddImage.propTypes = {
        productName: PropTypes.string.isRequired,
    };
    const onSubmit = async (data) => {
        try {
            console.log("Form data:", data);
            console.log('fileName:', data.fileName);

            const formData = new FormData();
            if (data.fileName && data.fileName.length > 0) {
                formData.append('fileName', data.fileName[0]);
            } else {
                console.error('Geen bestand gevonden in data.file');
                return;
            }
            formData.append('fileName', data.fileName[0], 'nieuwe_bestandsnaam.jpg');
            formData.append('productName', productName);
            console.log("Form data:", data);
            console.log('fileName:', data.fileName);

            const response = await axios.post(`http://localhost:8081/single/uploadDB/${productName}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });

            console.log("Image uploaded successfully:", response.data);

            navigate('/alle_producten');
            setImage(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/downloadFromDB/${productName}`, {
                    responseType: 'arraybuffer',
                });

                const base64String = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
                navigate('/alle_producten');
                setImage(response.data);
                setImage({...image, base64: base64String});
                setPreviewUrl(`data:image/jpeg;base64,${response.data.base64}`);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        if (image) {
            fetchImages();
        }
    }, [image]);

    useEffect(() => {
        setError(false);
        setLoading(true);
        const fetchProductData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/products');
                setProductsName(response.data);
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false);
            }
        };
        void fetchProductData();
    }, []);
    const buildProductsInfo = (productsName) => {
        return productsName.map((product) => ({
            value: product.productName,
            label: product.productName,
        }));
    };

    return (
        <>
            <div>
                <h2>Foto of bestand toevoegen</h2>
                <form onSubmit={onSubmit} encType="multipart/form-data" className="form-container form-content border_top_left background">
                    {productsName ?
                        <div>
                            <label>Waar wil je foto aan toevoegen?</label>
                            <select name="addImg"
                                    id="addImg" {...register('addImg', {required: 'foto is verplicht'})}>
                                <option value="">Kies een product...</option>
                                {buildProductsInfo(productsName).map((product) => (
                                    <option key={product.value} value={product.value}>
                                {product.label}
                            </option>
                            ))}
                        </select>
                        </div>
                        : ""}
                    {productsName ? <div>
                        <label>foto:</label>
                        <input type="file" name="fileName" {...register('fileName')} />
                    </div> : ""}
                    {previewUrl && <img src={previewUrl} alt="Uploaded Preview" />}

                    {productsName ? <button className="bttn" type="submit">Afbeelding toevoegen</button> : ""}

                </form>
                {image && <img src={`data:image/jpeg;base64,${image.base64}`} alt="Uploaded"/>}

            </div>
        </>
    );
};

export default HookFormAddImage;
