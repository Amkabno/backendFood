import { FoodModel } from "../model/food.js";

export const createFood = async (req, res) => {
  try {
    const food = await FoodModel.create(req.body);
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getFood = async (_, res) => {
  try {
    const categories = await FoodModel.find();
    return res
      .status(200)
      .send({
        success: true,
        categories: categories,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getFoodsByCategoryId = async (req, res) => {
  const { id } = req.params;
  try {
    const foods = await FoodModel.find({ category: id }).populate("category");
    return res
      .status(200)
      .send({
        success: true,
        foods: foods,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
