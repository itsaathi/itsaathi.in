import express from "express";
import Banner from "../models/Banner.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const router = express.Router();

router.get("/", auth, admin, async (req, res) => {
  const items = await Banner.find().sort({ order: 1, createdAt: -1 });
  res.json(items);
});

router.post("/", auth, admin, async (req, res) => {
  const item = await Banner.create(req.body);
  res.status(201).json(item);
});

router.put("/:id", auth, admin, async (req, res) => {
  const item = await Banner.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: "Banner not found" });
  res.json(item);
});

router.delete("/:id", auth, admin, async (req, res) => {
  const item = await Banner.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: "Banner not found" });
  res.json({ message: "Banner deleted" });
});

export default router;