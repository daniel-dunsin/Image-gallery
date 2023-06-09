require("dotenv").config();
const multer = require("multer");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

// Cloudinary Configs
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_secret: process.env.CLOUD_SECRET,
  api_key: process.env.CLOUD_KEY,
});

// Multer Configs

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const acceptedImages = ["image/jpeg", "image/png", "image/webp"];
  if (acceptedImages.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const multerUpload = multer({ storage, fileFilter });

const uploadToCloud = async (path) => {
  try {
    const data = await cloudinary.uploader.upload(path, {
      folder: "imageGalleryFolder",
    });
    await fs.unlink(path, () => {
      console.log("File deleted....");
    });
    return data?.url;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  multerUpload,
  uploadToCloud,
};
