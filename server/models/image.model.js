const { default: mongoose } = require("mongoose");

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  folder: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Image", ImageSchema);
