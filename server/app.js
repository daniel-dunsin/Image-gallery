// Import Modules
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const xss = require("xss-clean");
const { errorHandler, notFound } = require("./helpers/errors");
const authRoutes = require("./routes/auth.route");
const folderRoutes = require("./routes/folder.route");
const imageRoutes = require("./routes/image.route");

// Initialize app
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(cors({ origin: "*", credentials: true }));
app.use(cookieParser());

// Routes
app.use("auth", authRoutes);
app.use("folder", folderRoutes);
app.use("image", imageRoutes);

// Error Handlers
app.use(errorHandler);
app.all("*", notFound);

// start server
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to Mongo DB");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
