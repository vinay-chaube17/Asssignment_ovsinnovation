const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Vendor = require("../models/Vendor");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const vendorExists = await Vendor.findOne({ email });
    if (vendorExists) return res.status(400).json({ msg: "Vendor already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const vendor = new Vendor({ name, email, password: hashedPassword });
    await vendor.save();

    const token = jwt.sign({ vendorId: vendor._id }, process.env.JWT_SECRET, { expiresIn: "25h" });
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const vendor = await Vendor.findOne({ email });
    if (!vendor) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, vendor.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ vendorId: vendor._id }, process.env.JWT_SECRET, { expiresIn: "25h" });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { register, login };
