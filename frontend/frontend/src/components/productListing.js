// src/components/ProductListing.js
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import { Link } from 'react-router-dom';
import '../styles.css';

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetchProducts();
      setProducts(response.data);
    };
    loadProducts();
  }, []);

  return (
    <div className="container">
      <h1>Product Listing</h1>
      <Link to="/add-product">
        <button>Add New Product</button>
      </Link>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
