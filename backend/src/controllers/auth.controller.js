import User from "../models/User.js";
import { signToken } from "../utils/jwt.js";

export async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  if (!user.isActive) {
    return res.status(403).json({ message: "This account is inactive" });
  }

  const ok = await user.comparePassword(password);
  if (!ok) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const token = signToken(user);

  res.json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
}

export async function me(req, res) {
  res.json({ user: req.user });
}