const express = require("express");
const imageController = require("../controllers/image.controller");
const { multerUpload } = require("../upload.config");
const router = express.Router();

router
  .route("/:folderId")
  .post(multerUpload.array("images[]"), imageController.addFolderImages)
  .get(imageController.getFolderImages);
router.route("/:imageId").delete(imageController.deleteImage);

module.exports = router;
