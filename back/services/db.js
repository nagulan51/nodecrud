import { Sequelize } from "@sequelize/core";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.DB_NAME);
const sequelize = new Sequelize({
  dialect: "mysql",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialectOptions: {
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  },
});

export default sequelize;
