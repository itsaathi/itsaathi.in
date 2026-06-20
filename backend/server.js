import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import connectDB from "./src/config/db.js";

import authRoutes from "./src/routes/auth.routes.js";
import productRoutes from "./src/routes/product.routes.js";
import categoryRoutes from "./src/routes/category.routes.js";
import bannerRoutes from "./src/routes/banner.routes.js";
import orderRoutes from "./src/routes/order.routes.js";
import contactRoutes from "./src/routes/contact.routes.js";
import dashboardRoutes from "./src/routes/dashboard.routes.js";
import publicRoutes from "./src/routes/public.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:5173", "http://127.0.0.1:5173"].filter(Boolean),
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use((req, res, next) => {
  if (mongoose.connection.readyState !== 1 && req.path.startsWith("/api/admin")) {
    return res.status(503).json({
      message: "Database unavailable. Please try again later.",
      dbConnected: false,
    });
  }
  next();
});

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    message: "Backend running",
    dbConnected: mongoose.connection.readyState === 1,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/admin/products", productRoutes);
app.use("/api/admin/categories", categoryRoutes);
app.use("/api/admin/banners", bannerRoutes);
app.use("/api/admin/orders", orderRoutes);
app.use("/api/admin/contacts", contactRoutes);
app.use("/api/admin/dashboard", dashboardRoutes);
app.use("/api/public", publicRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: err.message || "Server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));