const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to MLM app");
});

router.post("/register", (req, res) => {
  res.send("Register page created");
});

router.post("/login", (req, res) => {
  res.send("Login page created");
});

router.post("/auto-pull", (req, res) => {
  res.send("Auto pull created");
});

module.exports = router;
