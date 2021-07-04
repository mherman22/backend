const express = require("express");
const router = express.Router();
const userController = require("./userController");

router.get("/users", userController.getAllUsers);
router.get("/users", userController.createUser);
router.get("/users/:id", userController.getOneUsers);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUsers);

module.exports = router;