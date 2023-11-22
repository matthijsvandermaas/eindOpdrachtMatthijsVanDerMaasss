import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const addToSelectedProducts = (productIds) => {
        setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, ...productIds]);
    };

    const removeFromSelectedProducts = (productId) => {
        setSelectedProducts((prevSelectedProducts) =>
            prevSelectedProducts.filter((id) => id !== productId)
        );
    };

    return (
        <ProductContext.Provider
            value={{ selectedProducts, addToSelectedProducts, removeFromSelectedProducts }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const UseProductContext = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }

    return context;
};
