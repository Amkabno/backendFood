import { connect } from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
const uri = process.env.MONGO_URI;
console.log(uri);

export const connectMongoDB = async () => {
  try {
    await connect(uri);
    console.log("connected to db");
  } catch (error) {
    console.log(error, "err");
  }
};
