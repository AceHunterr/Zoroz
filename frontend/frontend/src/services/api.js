// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchProducts = () => axios.get(`${API_URL}/products`);
export const fetchProductById = (id) => axios.get(`${API_URL}/products/${id}`);
export const createOrder = (orderData) => axios.post(`${API_URL}/orders`, orderData);
export const simulatePayment = (orderId) => axios.post(`${API_URL}/orders/${orderId}/payment`);
export const addProduct = async (productData) => {
    return axios.post(`${API_URL}/products/add`, productData);
  };