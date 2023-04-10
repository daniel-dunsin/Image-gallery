const asyncHandler = require("../helpers/asyncHandler");
const { CustomError } = require("../helpers/errors");
const { uploadToCloud } = require("../upload.config");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

/**
 * @ROUTE - /auth/register
 * @METHOD - POST
 */

exports.register = asyncHandler(async (req, res, next) => {
  const { firstname, lastname, password, email } = req.body;
  const dp = req?.file?.path ? await uploadToCloud(req.file.path) : "";

  if (!email || !firstname || !lastname || !password) {
    throw new CustomError(
      "Provide email, firstname, lastname and password",
      400
    );
  }

  // Return error if user already exists

  const userInDb = await User.findOne({ email });

  if (userInDb) {
    throw new CustomError("A user with this email exists", 400);
  }

  // Hash Password

  const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

  const userInstance = new User({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    dp,
  });

  const user = await userInstance.save();

  // Generate user token
  const token = await user.createJWT();

  res
    .status(201)
    .cookie("accessToken", token, {
      httpOnly: true,
    })
    .json({
      user,
    });
});

exports.login = asyncHandler(async (req, res, next) => {
  res.send("Route Working");
});

exports.getUser = asyncHandler(async (req, res, next) => {
  res.send("Route Working");
});
