import { DataTypes } from "@sequelize/core";
import sequelize from "../services/db.js";

const Produits = sequelize.define(
  "produits",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    prix: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "produits",
    timestamps: false,
    log: false,
  }
);

export default Produits;
