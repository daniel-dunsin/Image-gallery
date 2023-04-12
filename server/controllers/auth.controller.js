const asyncHandler = require("../helpers/asyncHandler");
const { CustomError } = require("../helpers/errors");
const { uploadToCloud } = require("../upload.config");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

/**
 * @route - /auth/register
 * @method - POST
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

  const { password: userPassword, ...userInfo } = user._doc;

  // Generate user token
  const token = await user.createJWT();

  res
    .status(201)
    .cookie("accessToken", token, {
      httpOnly: true,
    })
    .json({
      user: userInfo,
      message: "Account created successfully",
    });
});

/**
 * @route - /auth/login
 * @method - POST
 */

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError("Provide email and password", 400);
  }

  // Check if user exists

  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError("User doesn't exist", 404);
  }

  // Compare passwords

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new CustomError("Wrong Password", 400);
  }

  // Generate user token
  const token = user.createJWT();

  const { password: userPassword, ...userInfo } = user._doc;

  res
    .status(200)
    .cookie("accessToken", token, {
      httpOnly: true,
    })
    .json({
      message: "Log in Successful",
      user: userInfo,
    });
});

exports.logout = asyncHandler(async (req, res, next) => {
  res.clearCookie("accessToken").status(200).json({
    message: "Logged out successfully",
  });
});
