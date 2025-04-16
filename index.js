import express, { json } from "express";
import { connectMongoDB } from "./connectDb.js";
import { userRouter } from "./routes/user.js";
import cors from "cors";

const port = 8080;
const app = express();

connectMongoDB();

app.use(cors());
app.use(json());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
