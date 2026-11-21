const express = require("express");

const router = express.Router();

const { SignupUser } = require("../Controllers/UserControllers");

// Signup API
router.post("/signup", SignupUser);

module.exports = router;