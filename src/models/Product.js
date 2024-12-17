const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
  },
  { timestamps: true }
);

productSchema.index({ name: "text", price: 1 });

module.exports = mongoose.model("Product", productSchema);
