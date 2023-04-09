const asyncHandler = require("../helpers/asyncHandler");

exports.register = asyncHandler(async (req, res, next) => {
  res.send("Route Working");
});

exports.login = asyncHandler(async (req, res, next) => {
  res.send("Route Working");
});

exports.getUser = asyncHandler(async (req, res, next) => {
  res.send("Route Working");
});
