const jwt = require("jsonwebtoken");
const Vendor = require("../models/Vendor");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "Unauthorized3" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const vendor = await Vendor.findById(decoded.vendorId);
    if (!vendor) return res.status(401).json({ msg: "Unauthorized2" });

    req.vendorId = vendor._id;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Unauthorized1" });
  }
};

module.exports = authMiddleware;
