var mysql = require("mysql");

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("base de données connecté");
});

module.exports = con;
