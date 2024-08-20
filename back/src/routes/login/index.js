import express from "express";
const login = express.Router();
login.get("/", (req, res) => {
  res.json({ message: "Welcome to Login " });
});
login.post("/", (req, res) => {
  const { username, password } = req.body;
});

export default login;
