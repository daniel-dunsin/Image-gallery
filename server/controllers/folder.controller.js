const asyncHandler = require("../helpers/asyncHandler");

exports.createFolder = asyncHandler(async (req, res, next) => {
  res.send("Route Working");
});

exports.getAllFolders = asyncHandler(async (req, res, next) => {
  res.send("Route Working");
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
