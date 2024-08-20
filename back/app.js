import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import shopRouter from "./routes/shop/index.js";
import loginRouter from "./routes/login/index.js";
const app = express();

dotenv.config();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.use("/shop", shopRouter);
app.use("/login", loginRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`SERVER RUN ON  http://localhost:${process.env.SERVER_PORT}`);
});
