import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {validate} from "@babel/core/lib/config/validation/options.js";

const FormAddImage = ({ entityName }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [productsData, setProductsData] = useState(null);
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [entityNames, setEntityNames] = useState([]);
    const { register, handleSubmit } = useForm();

    useEffect(() => {

        setEntityNames([...entityNames]);
    }, []);

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
                setImage({ ...image, base64: base64String });
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
        // return productsData.map((product) => (
            // <div className="form-content border_top_left background" key={product.productName}>
            //     <h2>product naam: {productsData.map((product) => product.productName)}</h2>
            // </div>
        return productsData.map((product) => ({
            value: product.productName,
            label: product.productName,
        }));
    };

        return (
        <>
            <div>
                <h1>Foto of bestand toevoegen</h1>
                <form style={{fontSize: '1em'}} onSubmit={onSubmit}
                      className="form-container form-content border_top_bottom background">
                    {productsData ?
                    <div>
                        <label>Waar wil je foto aan toevoegen?</label>
                        <select name="add_img_to_options"
                                id="add_img_to_options" {...register('add_img_to_options', {required: 'foto is verplicht'})}>
                                {/*<option value={{productsData ? buildProductsInfo(productsData) : <p>...</p>}}>*/}
                                {/*</option>*/}
                            {buildProductsInfo(productsData).map((product) => (
                                <option key={product.value} value={product.value}>
                                    {product.label}
                                </option>
                            ))}                            ))
                        </select>
                    </div>
                        : ""}
                    {/*{productsData ? buildProductsInfo(productsData) : <p>Even kijken wat je allemaal gebrouwen hebt...</p>}*/}
                    {productsData ? <div>
                        <label>foto:</label>
                        <input type="file" name="file" {...register('file')} />
                    </div> : ""}
                    {productsData ? <button className="bttn" type="submit">Afbeelding toevoegen</button> : "" }

                </form>
                {image && <img src={`data:image/jpeg;base64,${image.base64}`} alt="Uploaded"/>}

            </div>
        </>
    );
};

export default FormAddImage;
