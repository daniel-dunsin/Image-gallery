const express = require("express");
const folderController = require("../controllers/folder.controller");

const router = express.Router();

router
  .route("/")
  .post(folderController.createFolder)
  .get(folderController.getAllFolders);

router
  .route("/:folderId")
  .post(folderController.addFolderImages)
  .get(folderController.getFolderImages)
  .put(folderController.updateFolderImages)
  .delete(folderController.deleteFolder);

module.exports = router;
