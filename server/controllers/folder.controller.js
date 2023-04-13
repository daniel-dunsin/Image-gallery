const asyncHandler = require("../helpers/asyncHandler");
const Folder = require("../models/folder.model");
const Image = require("../models/image.model");
const { uploadToCloud } = require("../upload.config");
const { CustomError } = require("../helpers/errors");

/**
 * @route - /folder
 * @method POST
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
 * @route - /folder
 * @method GET
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

exports.deleteFolder = asyncHandler(async (req, res, next) => {
  const { folderId } = req.params;

  if (!folderId) {
    throw new CustomError("Provide folder id", 400);
  }

  const folder = await Folder.findByIdAndDelete(folderId);

  if (!folder) {
    throw new CustomError("Folder does not exist", 404);
  }

  await Image.deleteMany({ folder: folder._id });

  res.status(200).send({
    message: "Folder deleted successfully",
  });
});
