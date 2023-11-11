import React, { useState, useEffect } from 'react';

const ProductDetails = ({ product }) => {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        // Definieer de functie om afbeeldings-URL's op te halen
        const fetchImageUrls = async () => {
            try {
                // Vervang 'API_ENDPOINT' door de werkelijke URL van je server API
                const response = await fetch(`API_ENDPOINT/products/${product.id}/images`);
                const data = await response.json();
                setImageUrls(data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        // Roep de functie aan om afbeeldings-URL's op te halen wanneer het component mount
        fetchImageUrls();
    }, [product.id]); // Voer de effect-hook uit wanneer het product-ID verandert

    return (
        <div>
            <h2>{product.productName}</h2>
            <p>{product.description}</p>
            {imageUrls.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Product ${index + 1}`} />
            ))}
        </div>
    );
};

export default ProductDetails;
