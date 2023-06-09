const express = require("express");
const folderController = require("../controllers/folder.controller");
const { multerUpload } = require("../upload.config");

const router = express.Router();

router
  .route("/")
  .post(multerUpload.single("cover"), folderController.createFolder)
  .get(folderController.getAllFolders);

router.route("/:folderId").delete(folderController.deleteFolder);

module.exports = router;
