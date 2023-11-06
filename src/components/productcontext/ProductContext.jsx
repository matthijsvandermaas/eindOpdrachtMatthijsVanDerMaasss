import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [selectedIds, setSelectedIds] = useState([]);

    // useEffect wordt gebruikt om wijzigingen in selectedIds bij te houden
    useEffect(() => {
        // Opslaan in localStorage wanneer selectedIds verandert
        localStorage.setItem('selectedProductIds', JSON.stringify(selectedIds));
    }, [selectedIds]);

    const addToSelectedProducts = (productIds) => {
        setSelectedIds((prevIds) => [...new Set([...prevIds, ...productIds])]);
    };

    const removeFromSelectedProducts = (productId) => {
        setSelectedIds((prevIds) => prevIds.filter((id) => id !== productId));
    };

    return (
        <ProductContext.Provider
            value={{ selectedIds, addToSelectedProducts, removeFromSelectedProducts }}
        >
            {children}
        </ProductContext.Provider>
    );
};
