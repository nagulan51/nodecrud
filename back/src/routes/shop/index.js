import express from "express";
const shop = express.Router();
import db from "../../services/database.js";

shop.get("/", (req, res) => {
  res.json({ message: "Hello from the shop!" });
});

shop.get("/all", (req, res) => {
  const dbconnection = new db();
  dbconnection
    .GetAllProduct()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error fetching products", error });
    });
});
shop.get("/product/:id", (req, res) => {
  const dbconnection = new db();
  dbconnection
    .GetProductById(req.params.id)
    .then((product) => {
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Error fetching product", error });
    });
});

export default shop;
