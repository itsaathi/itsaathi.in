import express from "express";
import Product from "../models/Product.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const router = express.Router();

router.get("/", auth, admin, async (req, res) => {
  const items = await Product.find().populate("category").sort({ createdAt: -1 });
  res.json(items);
});

router.get("/:id", auth, admin, async (req, res) => {
  const item = await Product.findById(req.params.id).populate("category");
  if (!item) return res.status(404).json({ message: "Product not found" });
  res.json(item);
});

router.post("/", auth, admin, async (req, res) => {
  const item = await Product.create(req.body);
  res.status(201).json(item);
});

router.put("/:id", auth, admin, async (req, res) => {
  const item = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: "Product not found" });
  res.json(item);
});

router.delete("/:id", auth, admin, async (req, res) => {
  const item = await Product.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: "Product not found" });
  res.json({ message: "Product deleted" });
});

export default router;