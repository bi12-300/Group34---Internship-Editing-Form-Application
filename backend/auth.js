const express = require("express");
const { login } = require("../backend/authController");

const router = express.Router();

router.post("/login", login);

module.exports = router;