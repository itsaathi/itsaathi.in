import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

dotenv.config();

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  isActive: Boolean,
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

async function run() {
  await mongoose.connect(process.env.MONGO_URI);

  const email = "admin@itsaathi.in";
  const password = "Admin@12345";
  const hashedPassword = await bcrypt.hash(password, 10);

  const existing = await User.findOne({ email });

  if (existing) {
    existing.password = hashedPassword;
    existing.role = "admin";
    existing.isActive = true;
    await existing.save();
    console.log("Admin password updated");
  } else {
    await User.create({
      name: "IT Saathi Admin",
      email,
      password: hashedPassword,
      role: "admin",
      isActive: true,
    });
    console.log("Admin created");
  }

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});