// shop.model.js
import { DataTypes } from "@sequelize/core";
import sequelize from "../../services/db.js"; // Adjust the path as needed

const Produits = sequelize.define(
  "produits",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prix: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "produits", // Use the table name if needed
    timestamps: false, // Disable timestamps if not required
  }
);

export default Produits;
