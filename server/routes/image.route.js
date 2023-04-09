const express = require("express");
const imageController = require("../controllers/image.controller");

const router = express.Router();

router.route("/").post(imageController.addImage);
router.route("/:imageId").post(imageController.deleteImage);

module.exports = router;
