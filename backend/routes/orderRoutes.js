// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const { createOrder, getOrderStatus } = require("../controllers/orderController");
const { simulatePayment } = require("../utils/simulatePayment");

router.post("/", createOrder);
router.get("/:id/status", getOrderStatus);

// Mock payment endpoint
router.post("/:id/payment", (req, res) => {
  const result = simulatePayment();
  res.json({ status: result });
});

module.exports = router;
