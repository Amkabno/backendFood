import mongoose, { Schema } from "mongoose";
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  price: Number,
  image: String,
  ingredients: String,
});

export const FoodModel = mongoose.model("Food", foodSchema);
