// controllers/orderController.js
const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const { products, totalAmount } = req.body;
  const order = new Order({ products, totalAmount });
  await order.save();
  res.json({ message: "Order created successfully", orderId: order._id });
};

exports.getOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json({ status: order.status });
};
