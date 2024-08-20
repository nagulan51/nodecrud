import produits from "../routes/shop/shop.model.js";
import sequelize from "../services/db.js";
class db {
  constructor() {
    this.sequelize = sequelize;
  }

  async GetAllProduct() {
    try {
      return await produits.findAll();
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
}

export default db;
