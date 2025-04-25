import express from "express";
import {
  createFood,
  getFoodsByCategoryId,
  getFood,
} from "../controller/food.js";

export const foodRouter = express.Router();
foodRouter
  .post("/", createFood)
  .get("/", getFood)
  .get("/:id", getFoodsByCategoryId);
