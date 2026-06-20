import dotenv from "dotenv";
import connectDB from "../config/db.js";
import User from "../models/User.js";

dotenv.config();
await connectDB();

const email = process.env.ADMIN_EMAIL?.toLowerCase();

const exists = await User.findOne({ email });

if (exists) {
  console.log("Admin already exists");
  process.exit(0);
}

await User.create({
  name: process.env.ADMIN_NAME || "Admin",
  email,
  password: process.env.ADMIN_PASSWORD || "Admin@12345",
  role: "admin"
});

console.log("Admin created successfully");
process.exit(0);