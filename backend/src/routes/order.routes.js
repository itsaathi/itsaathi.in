import express from "express";
import Order from "../models/Order.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const router = express.Router();

router.get("/", auth, admin, async (req, res) => {
  const items = await Order.find().sort({ createdAt: -1 });
  res.json(items);
});

router.get("/:id", auth, admin, async (req, res) => {
  const item = await Order.findById(req.params.id).populate("items.product");
  if (!item) return res.status(404).json({ message: "Order not found" });
  res.json(item);
});

router.put("/:id/status", auth, admin, async (req, res) => {
  const item = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  if (!item) return res.status(404).json({ message: "Order not found" });
  res.json(item);
});

router.delete("/:id", auth, admin, async (req, res) => {
  const item = await Order.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: "Order not found" });
  res.json({ message: "Order deleted" });
});

export default router;