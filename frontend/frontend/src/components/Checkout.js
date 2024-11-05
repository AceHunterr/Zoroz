// src/components/Checkout.js
import React, { useState, useEffect } from 'react';
import { createOrder, simulatePayment, fetchProducts } from '../services/api';
import '../styles.css';

const Checkout = () => {
  const [status, setStatus] = useState(null);
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    fetchProducts().then((response) => {
      const products = response.data;
      if (products.length > 0) setProductId(products[0]._id);
    });
  }, []);

  const handleCheckout = async () => {
    if (!productId) return;

    const orderData = {
      products: [{ productId: productId, quantity: 1 }],
      totalAmount: 100,
    };
    const orderResponse = await createOrder(orderData);
    const orderId = orderResponse.data.orderId;

    const paymentResponse = await simulatePayment(orderId);
    setStatus(paymentResponse.data.status);
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <button onClick={handleCheckout} style={{ animation: 'fadeIn 0.8s' }}>
        Proceed to Payment
      </button>
      {status && <p className="message">Payment Status: {status}</p>}
    </div>
  );
};

export default Checkout;
