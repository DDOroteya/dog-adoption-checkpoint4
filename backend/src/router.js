const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: process.env.UPLOADS_FOLDER });

// for authentification
const { verifyPassword, verifyToken } = require("./services/auth");

const dogControllers = require("./controllers/dogControllers");
const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const fileControllers = require("./controllers/fileControllers");

router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Dog management
router.get("/api/dogs", dogControllers.browse);
router.get("/api/dogs/:id", dogControllers.read);
router.post(
  "/api/dogs",
  verifyToken,
  upload.single("picture"),
  fileControllers.fileRename,
  dogControllers.add
);
router.put("/api/dogs/:id", verifyToken, dogControllers.edit);
router.delete("/api/dogs/:id", verifyToken, dogControllers.destroy);

// User management
router.get("/api/users", verifyToken, userControllers.browse);
router.get("/api/users/:id", verifyToken, userControllers.read);
router.post("/api/users", verifyToken, userControllers.add);
router.put("/api/users/:id", verifyToken, userControllers.edit);
router.delete("/api/users/:id", verifyToken, userControllers.destroy);

module.exports = router;
