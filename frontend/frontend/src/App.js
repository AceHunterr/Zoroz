// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./components/productListing";
import Checkout from "./components/Checkout";
import ProductForm from './components/productForm'
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/add-product" element={<ProductForm /> } />

      </Routes>
    </Router>
  );
}

export default App;
