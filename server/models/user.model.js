require("dotenv").config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dp: {
    type: String,
  },
});

UserSchema.methods.createJWT = async function () {
  const userId = this._id;

  const token = await jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "24hr",
  });
  return token;
};

module.exports = mongoose.model("User", UserSchema);
