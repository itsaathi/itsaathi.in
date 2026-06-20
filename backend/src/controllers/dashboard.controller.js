import Product from "../models/Product.js";
import Category from "../models/Category.js";
import Order from "../models/Order.js";
import Contact from "../models/Contact.js";
import Banner from "../models/Banner.js";

export async function getDashboardStats(req, res) {
  const [
    totalProducts,
    totalCategories,
    totalOrders,
    totalContacts,
    totalBanners,
    pendingOrders,
    outOfStockProducts,
    salesSummary,
    recentOrders,
    recentContacts,
  ] = await Promise.all([
    Product.countDocuments(),
    Category.countDocuments(),
    Order.countDocuments(),
    Contact.countDocuments(),
    Banner.countDocuments(),
    Order.countDocuments({ status: "PENDING" }),
    Product.countDocuments({ stock: 0, isActive: true }),
    Order.aggregate([
      { $match: { status: { $in: ["CONFIRMED", "SHIPPED", "DELIVERED"] } } },
      { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
    ]),
    Order.find().sort({ createdAt: -1 }).limit(5),
    Contact.find().sort({ createdAt: -1 }).limit(5),
  ]);

  const totalRevenue = salesSummary[0]?.totalRevenue || 0;

  res.json({
    stats: {
      totalProducts,
      totalCategories,
      totalOrders,
      totalContacts,
      totalBanners,
      pendingOrders,
      outOfStockProducts,
      totalRevenue,
    },
    recentOrders,
    recentContacts,
  });
}