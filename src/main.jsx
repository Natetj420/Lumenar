import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProductDetail from './pages/ProductDetail';

import { CartProvider } from './context/CartContext';
import Checkout from './pages/Checkout'; // ✅ Make sure this import exists

import Home from './pages/Home';
import Contact from './pages/contact';
import './index.css';
import Shop from './pages/Shop';
import products from "./data/products";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
                      <Route path="product/:id" element={<ProductDetail />} />
                        <Route path="checkout" element={<Checkout />} />  {/* ✅ Add this */}
        </Route>
      </Routes>
    </Router>
     </CartProvider>
  </React.StrictMode>
);
