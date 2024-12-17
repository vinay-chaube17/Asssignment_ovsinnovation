const Order = require("../models/Order");
const Product = require("../models/Product");

const listOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      product: { $in: req.vendorProducts },
    });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

const markAsShipped = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    if (!order) return res.status(404).json({ msg: "Order not found" });

    order.status = "shipped";
    await order.save();
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { listOrders, markAsShipped };
