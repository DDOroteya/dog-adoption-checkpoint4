const express = require("express");

const router = express.Router();

// for authentification
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const dogControllers = require("./controllers/dogControllers");
const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");

router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Dog management
router.get("/api/dogs", dogControllers.browse);
router.get("/api/dogs/:id", dogControllers.read);
router.post("/api/dogs", dogControllers.add);
router.put("/api/dogs/:id", dogControllers.edit);
router.delete("/api/dogs/:id", dogControllers.destroy);

// User management
router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.post("/api/users", hashPassword, userControllers.add);
router.put("/api/users/:id", hashPassword, verifyToken, userControllers.edit);
router.delete("/api/users/:id", verifyToken, userControllers.destroy);

module.exports = router;
