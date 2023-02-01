const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const dogControllers = require("./controllers/dogControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// Gestion des chiens
router.get("/api/dogs", dogControllers.browse);
router.get("/api/dogs/:id", dogControllers.read);
router.post("/api/dogs", dogControllers.add);
router.put("/api/dogs/:id", dogControllers.edit);
router.delete("/api/dogs/:id", dogControllers.destroy);

module.exports = router;
