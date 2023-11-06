import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import AuthContextProvider from '../src/context/AuthenticationContext.jsx';
import { ProductProvider } from './components/productcontext/ProductContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <ProductProvider>
                <App/>
                    </ProductProvider>
            </AuthContextProvider>
        </Router>
    // </React.StrictMode>,
)
