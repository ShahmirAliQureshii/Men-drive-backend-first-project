const express = require("express");
const multer = require("multer");
const router = express.Router();

// configure multer (uploads folder will be created automatically)
const upload = multer({ dest: "uploads/" });

// render upload form
router.get("/home", (req, res) => {
  res.render("home"); // shows upload form
});

// handle file upload
router.post("/upload-file", upload.single("file"), (req, res) => {
  console.log(req.file); // file info
  res.send("upload successful");
});

module.exports = router;
