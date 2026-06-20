import express from "express";
import Contact from "../models/Contact.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const router = express.Router();

router.get("/", auth, admin, async (req, res) => {
  const items = await Contact.find().sort({ createdAt: -1 });
  res.json(items);
});

router.put("/:id/status", auth, admin, async (req, res) => {
  const item = await Contact.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  if (!item) return res.status(404).json({ message: "Contact not found" });
  res.json(item);
});

router.delete("/:id", auth, admin, async (req, res) => {
  const item = await Contact.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: "Contact not found" });
  res.json({ message: "Contact deleted" });
});

export default router;