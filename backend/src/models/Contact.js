import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    city: { type: String, default: "" },
    category: { type: String, required: true, trim: true },
    quantity: { type: String, default: "" },
    subject: { type: String, default: "" },
    message: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["NEW", "IN_PROGRESS", "CLOSED"],
      default: "NEW"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);