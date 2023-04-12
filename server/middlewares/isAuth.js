require("dotenv").config();

const jwt = require("jsonwebtoken");
const { CustomError } = require("../helpers/errors");

module.exports = async (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token || typeof token !== "string") {
  }

  const user = jwt.verify(token, process.env.JWT_SECRET);

  if (!user) {
    throw new CustomError("Invalid token", 401);
  }

  req.userId = user.userId;

  next();
};
