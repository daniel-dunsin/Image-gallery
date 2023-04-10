const express = require("express");
const authController = require("../controllers/auth.controller");
const { multerUpload } = require("../upload.config");

const router = express.Router();

router.post("/login", authController.login);
router.post("/register", multerUpload.single("dp"), authController.register);
router.get("/my-details", authController.getUser);

module.exports = router;
