import express from "express";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import globalRouter from "./router/globalRouter";
import mongoose from "mongoose";
import Student from "../models/Student";

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "pug");

app.use(morgan(`dev`));

app.use(express.static(path.join(__dirname, "/assets")));

mongoose.connect(
  `mongodb://4leaf:fourleaf0309@210.114.1.127:27017/admin`,
  {
    dbName: `JYR_PRA`,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.log("❌ Failed To DB Connect");
    } else {
      console.log("✅ DB! ✅");
    }
  }
);

app.get("/", async (req, res) => {
  const result = await Student.find({}, {});

  return res.render("screens/home", { student: result });
});

app.get("/student", async (req, res) => {
  const result = await Student.find({}, {});

  return res.render("screens/student", { student: result });
});

app.get("/", globalRouter);

app.get("/student", globalRouter);

app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
