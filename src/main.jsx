// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext.jsx';
import { ProductProvider } from './components/productcontext/ProductContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <AuthContextProvider>
            <ProductProvider>
                <App />
            </ProductProvider>
        </AuthContextProvider>
    </Router>
);
