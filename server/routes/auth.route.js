const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/login", authController.login);
router.post("/register", authController.login);
router.get("/my-details", authController.getUser);

module.exports = router;
