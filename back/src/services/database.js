// db.js
import Produits from "../model/product.model.js";
import sequelize from "./db.js";

class db {
  constructor() {
    this.sequelize = sequelize;
  }

  async GetAllProduct() {
    try {
      const products = await Produits.findAll();
      return products;
    } catch (error) {
      throw error;
    }
  }
  async GetProductById(id) {
    try {
      const product = await Produits.findByPk(id);
      return product;
    } catch (error) {
      throw error;
    }
  }
}

export default db;
