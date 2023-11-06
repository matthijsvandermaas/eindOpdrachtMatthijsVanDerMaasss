import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export function useProductContext() {
    return useContext(ProductContext);
}

export function ProductProvider({ children }) {
    const [selectedProducts, setSelectedProducts] = useState([]);

    return (
        <ProductContext.Provider value={{ selectedProducts, setSelectedProducts }}>
            {children}
        </ProductContext.Provider>
    );
}
