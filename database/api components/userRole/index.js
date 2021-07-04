const express = require("express");
const router = express.Router();
const userRoleController = require("./userRoleController");

router.get("/userRole", userRoleController.getAllUserRole);
router.post("/userRole", userRoleController.createUserRole);
router.get("/userRole/:id", userRoleController.getOneUserRole);
router.put("/userRole/:id", userRoleController.updateUserRole);
router.delete("/userRole/:id", userRoleController.deleteUserRole);

module.exports = router;