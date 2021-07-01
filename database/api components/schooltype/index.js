const express = require("express");
const router = express.Router();
const schoolTypeController = require("./schoolTypeController");

router.get("/schoolType", schoolTypeController.getAllSchoolTypes);
router.post("/schoolType", schoolTypeController.createSchoolType);
router.get("/schoolType/:id", schoolTypeController.getOneSchoolType);
router.put("/schoolType/:id", schoolTypeController.updateSchoolType);
router.delete("/schoolType/:id", schoolTypeController.deleteSchoolType);

module.exports = router;