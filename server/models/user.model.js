const mongoose = require("mongoose");

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
    typ: String,
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

module.exports = mongoose.model("User", UserSchema);
