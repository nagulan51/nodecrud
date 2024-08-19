const express = require("express");
const shop = express.Router();
const con = require("../../services/database");
shop.get("/", (req, res) => {
  res.json({ message: "Hello from the shop!" });
});

shop.get("/all", (req, res) => {
  try {
    con.query("SELECT * FROM produits", function (err, result) {
      if (err) {
        res.status(500).json({
          message: "erreur",
          error: "impossible de trouver les produits",
        });
      }
      res.json(result);
    });
  } catch (err) {
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
module.exports = shop;
