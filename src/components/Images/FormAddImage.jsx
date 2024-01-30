import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {validate} from "@babel/core/lib/config/validation/options.js";

const FormAddImage = ({entityName}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [productsData, setProductsData] = useState(null);
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const {register, handleSubmit} = useForm();
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('file', data.file[0]);
            formData.append('entityName', entityName);

            const response = await axios.post(`http://localhost:8081/single/uploadDB/${entityName}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });

            console.log("Image uploaded successfully:", response.data);
            console.log(entityName);
            console.log(data.file[0]);
            console.log(productsData)

            navigate('/alle_producten');
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
                setImage({...image, base64: base64String});
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
                setProductsData(response.data);
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false);
            }
        };
        void fetchProductData();
    }, []);
    const buildProductsInfo = (productsData) => {
        return productsData.map((product) => ({
            value: product.productName,
            label: product.productName,
        }));
    };

    return (
        <>
            <div>
                <h1>Foto of bestand toevoegen</h1>
                <form onSubmit={onSubmit}
                      className="form-container form-content border_top_bottom background">
                    {productsData ?
                        <div>
                            <label>Waar wil je foto aan toevoegen?</label>
                            <select name="addImg"
                                    id="addImg" {...register('addImg', {required: 'foto is verplicht'})}>
                                <option value="">Kies een product...</option>
                                {buildProductsInfo(productsData).map((product) => (
                                    <option key={product.value} value={product.value}>
                                {product.label}
                            </option>
                            ))} ))
                        </select>
                        </div>
                        : ""}
                    {productsData ? <div>
                        <label>foto:</label>
                        <input type="file" name="file" {...register('file')} />
                    </div> : ""}
                    {productsData ? <button className="bttn" type="submit">Afbeelding toevoegen</button> : ""}

                </form>
                {image && <img src={`data:image/jpeg;base64,${image.base64}`} alt="Uploaded"/>}

            </div>
        </>
    );
};

export default FormAddImage;
