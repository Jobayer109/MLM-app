const express = require("express");
const router = express.Router();
const { getAllUsers, registerUser, loginUser, autoPull } = require("../controllers/controller");

// routes
router.get("/", getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/auto-pull", autoPull);

module.exports = router;
