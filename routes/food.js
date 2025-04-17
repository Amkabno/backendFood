import express from "express";
import { createFood, getFoodsByCategoryId } from "../controller/food.js";

export const foodRouter = express.Router();
foodRouter.post("/", createFood).get("/:id", getFoodsByCategoryId);
