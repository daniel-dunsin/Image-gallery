const asyncHandler = require("../helpers/asyncHandler");

exports.addImage = asyncHandler(async (req, res, next) => {
  res.send("Route Working");
});
exports.deleteImage = asyncHandler(async (req, res, next) => {
  res.send("Route Working");
});
