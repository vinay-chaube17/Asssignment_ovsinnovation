const express = require("express");
const { listOrders, markAsShipped } = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, listOrders);
router.put("/:id", authMiddleware, markAsShipped);

module.exports = router;
