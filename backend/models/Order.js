// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
    },
  ],
  totalAmount: Number,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Order", orderSchema);
