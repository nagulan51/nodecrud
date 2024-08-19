const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");

var shopRouter = require("./routes/shop/index.js");
//allow all cors
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.use("/shop", shopRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`SERVER RUN ON  http://localhost:${process.env.SERVER_PORT}`);
});
