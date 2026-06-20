import express from "express";
import Product from "../models/Product.js";
import Category from "../models/Category.js";
import Banner from "../models/Banner.js";
import Contact from "../models/Contact.js";
import Order from "../models/Order.js";

const router = express.Router();

router.get("/home", async (req, res) => {
  const [banners, categories, featuredProducts] = await Promise.all([
    Banner.find({ isActive: true }).sort({ order: 1 }),
    Category.find({ isActive: true }),
    Product.find({ isActive: true, featured: true }).populate("category").limit(8)
  ]);

  res.json({ banners, categories, featuredProducts });
});

router.get("/products", async (req, res) => {
  const { category, search, featured, page = 1, limit = 12 } = req.query;

  const filter = { isActive: true };

  if (category) filter.category = category;
  if (featured === "true") filter.featured = true;
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { slug: { $regex: search, $options: "i" } },
      { shortDescription: { $regex: search, $options: "i" } },
    ];
  }

  const currentPage = Math.max(1, Number(page));
  const pageSize = Math.max(1, Math.min(48, Number(limit)));

  const [products, total] = await Promise.all([
    Product.find(filter)
      .populate("category")
      .sort({ createdAt: -1 })
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize),
    Product.countDocuments(filter),
  ]);

  res.json({
    products,
    pagination: {
      page: currentPage,
      limit: pageSize,
      total,
      pages: Math.ceil(total / pageSize),
    },
  });
});

router.get("/products/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug, isActive: true }).populate(
    "category"
  );

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

router.get("/categories", async (req, res) => {
  const categories = await Category.find({ isActive: true });
  res.json(categories);
});

router.post("/contact", async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json({ message: "Inquiry submitted", contact });
});

router.post("/orders", async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json({ message: "Order placed", order });
});

export default router;