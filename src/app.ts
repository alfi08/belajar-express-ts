import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.use(todoRoutes);

app.get("/", (req,res) => {
  res.json({message: "hello there"});
})

const dbUrl: string | any = process.env.DATABASE;

mongoose
  .connect(dbUrl)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    throw err;
  });
