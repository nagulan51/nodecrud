import express from "express";
const shop = express.Router();
import db from "../../services/database.js";
shop.get("/", (req, res) => {
  res.json({ message: "Hello from the shop!" });
});

shop.get("/all", (req, res) => {
  try {
    const maindb = new db();
    const products = maindb.GetAllProduct();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "erreur",
      error: "impossible de trouver les produits",
    });
  }
});
shop.get("/product/:id", (req, res) => {
  try {
    con.query(
      `SELECT * FROM produits WHERE id=${req.params.id}`,
      function (err, result) {
        if (err) {
          res.status(500).json({
            message: "erreur",
            error: "impossible de trouver le produit",
          });
        }
        res.json(result);
      }
    );
  } catch (err) {
    res.status(500).json({
      message: "erreur",
      error: "impossible de trouver le produit",
    });
  }
});

export default shop;
