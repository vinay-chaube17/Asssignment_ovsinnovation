const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

// MongoDB connection
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/vendors", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({ msg: "Something went wrong", error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
