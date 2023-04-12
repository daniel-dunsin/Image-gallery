const asyncHandler = require("../helpers/asyncHandler");
const Folder = require("../models/folder.model");
const Image = require("../models/image.model");
const { uploadToCloud } = require("../upload.config");

/**
 * @route - /folder
 * @method - POST
 */

exports.createFolder = asyncHandler(async (req, res, next) => {
  const { name } = req.body;

  const cover = await uploadToCloud(req?.file?.path);

  // Create folder instance, default images count is 0

  const folder = new Folder({
    name,
    cover,
    owner: req.userId,
  });

  await folder.save();

  res.status(201).json({
    message: "Folder Created Successfully",
    folder,
  });
});

/**
 * @route - folder
 * @method - GET
 */

exports.getAllFolders = asyncHandler(async (req, res, next) => {
  const folders = await Folder.find({ owner: req.userId }).sort({
    createdAt: "-1",
  });

  res.status(200).json({
    message: "Fetch Folders Successfully",
    folders,
  });
});
exports.getFolderImages = asyncHandler(async (req, res, next) => {
  res.send("Route Working");
});
exports.addFolderImages = asyncHandler(async (req, res, next) => {
  res.send("Route Working");
});
exports.updateFolderImages = asyncHandler(async (req, res, next) => {
  res.send("Route Working");
});
exports.deleteFolder = asyncHandler(async (req, res, next) => {
  res.send("Route Working");
});
