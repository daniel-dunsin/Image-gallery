const asyncHandler = require("../helpers/asyncHandler");
const { uploadToCloud } = require("../upload.config");
const Folder = require("../models/folder.model");
const Image = require("../models/image.model");
const { CustomError } = require("../helpers/errors");

/**
 * @route /folder/:folderId
 * @method GET
 */

exports.getFolderImages = asyncHandler(async (req, res, next) => {
  const { folderId } = req.params;

  if (!folderId) {
    throw new CustomError("Provide folder id", 400);
  }

  const folder = await Folder.findById(folderId);

  const images = await Image.find({ folder: folderId });

  res
    .status(200)
    .send({ folder: { ...folder._doc, images, totalImages: images?.length } });
});

/**
 * @route - /folder/:folderId
 * @method POST
 */

exports.addFolderImages = asyncHandler(async (req, res, next) => {
  const { folderId } = req.params;

  if (!folderId) {
    throw new CustomError("Provide folder id", 400);
  }

  const files = req.files;

  if (!files || files.length === 0) {
    return next(CustomError("No image provided", 400));
  }

  const imagesUploaded = await Promise.all(
    files.map(async (file) => {
      const url = await uploadToCloud(file.path);
      return {
        url,
        folder: folderId,
      };
    })
  );

  const images = await Image.create(imagesUploaded);

  await Folder.findByIdAndUpdate(folderId, {
    $inc: { imagesCount: files.length },
  });

  return res.status(201).json({
    message: "Images created successfully",
    images,
  });
});

exports.deleteImage = asyncHandler(async (req, res, next) => {
  const { imageId } = req.params;

  if (!imageId) {
    throw new CustomError("Provide image id", 400);
  }

  const image = await Image.findByIdAndDelete(imageId);

  const folder = await Folder.findById(image.folder);

  folder.imagesCount -= 1;

  await folder.save();

  res.status(200).send({ message: "Image deleted successfully" });
});
