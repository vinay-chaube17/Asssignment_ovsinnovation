const Product = require("../models/Product");
const Vendor = require("../models/Vendor");

const addProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const product = new Product({
      name,
      price,
      stock,
      vendor: req.vendorId,
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ msg: "Server error21" });
  }
};

// Implement pagination for listing products
const listProducts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const products = await Product.find({ vendor: req.vendorId })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ msg: "Server error12" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;
  try {
    const product = await Product.findOne({ _id: id, vendor: req.vendorId });
    if (!product) return res.status(404).json({ msg: "Product not found" });

    product.name = name || product.name;
    product.price = price || product.price;
    product.stock = stock || product.stock;

    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ msg: "Server error32" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ _id: id, vendor: req.vendorId });
    if (!product) return res.status(404).json({ msg: "Product not found" });

    await product.remove();
    res.status(200).json({ msg: "Product deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Server error23" });
  }
};

module.exports = { addProduct, listProducts, updateProduct, deleteProduct };
