require("dotenv").config();

const jwt = require("jsonwebtoken");
const { CustomError } = require("../helpers/errors");

module.exports = async (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token || typeof token !== "string") {
    return next(new CustomError("No Token Provided", 401));
  } else {
    const decodedToken = jwt.decode(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      return next(new CustomError("Invalid token", 401));
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = user.userId;

    next();
  }
};
