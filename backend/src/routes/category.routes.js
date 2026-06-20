import express from "express";
import Category from "../models/Category.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const router = express.Router();

router.get("/", auth, admin, async (req, res) => {
  const items = await Category.find().sort({ createdAt: -1 });
  res.json(items);
});

router.post("/", auth, admin, async (req, res) => {
  const item = await Category.create(req.body);
  res.status(201).json(item);
});

router.put("/:id", auth, admin, async (req, res) => {
  const item = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: "Category not found" });
  res.json(item);
});

router.delete("/:id", auth, admin, async (req, res) => {
  const item = await Category.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: "Category not found" });
  res.json({ message: "Category deleted" });
});

export default router;