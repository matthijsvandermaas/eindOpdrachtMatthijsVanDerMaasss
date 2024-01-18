import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import Cubes from "../../components/cubes/Cubes";

const FormAddImage = ({productId}) => {
    const [image, setImage] = useState(null);
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`http://localhost:8081/single/uploadDB`, {...data, productId});
            setImage(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.post(`http://localhost:8081/single/uploadDB`, {productId});
                setImage(response.data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [productId]);

    return (
        <>
            <div className="form-container">
                    <h1>Afbeelding uploaden</h1>
                <form className=" form-container form-content border_top_bottom background" onSubmit={handleSubmit(onSubmit)}>
                    <input type="file" {...register('image')} />
                    <button className="bttn" type="submit">Afbeelding toevoegen</button>

                    {/* Render hier je component met de ontvangen afbeeldingsgegevens */}
                    {/* Bijvoorbeeld: <img src={image && image.imageUrl} alt="Product" /> */}
                </form>
            <Cubes
                button_1="Hoe maak je bier"
                navigate_1="/productie_Informatie"
                button_2="Het drankorgel"
                navigate_2="/drankorgel"
                button_3="Home"
                navigate_3="/home"
                button_4="News"
                navigate_4="/news"
            />
            </div>
        </>
    );
};

export default FormAddImage;
