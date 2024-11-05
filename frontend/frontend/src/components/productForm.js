// src/components/ProductForm.js
import React, { useState } from 'react';
import { addProduct } from '../services/api';
import '../styles.css';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [message, setMessage] = useState(null);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await addProduct({ name, description, price, stock });
      setMessage(response.data.message);
      setName('');
      setDescription('');
      setPrice('');
      setStock('');
    } catch (error) {
      setMessage('Failed to add product');
    }
  };

  return (
    <div className="container">
      <h2>Add New Product</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleAddProduct}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <label>Stock:</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
