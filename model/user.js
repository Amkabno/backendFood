import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: String,
  phoneNumber: String,
  address: {
    type: String,
    min: 8,
  },
  isVerified: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ["User", "Admin"],
    default: "User",
  },
});

export const UserModel = mongoose.model("User", userSchema);
