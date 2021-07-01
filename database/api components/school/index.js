const express = require("express");
const router = express.Router();
const schoolController = require("./schoolController");

router.get("/school", schoolController.getAllSchools);
router.post("/school", schoolController.createSchool);
router.get("/school/:id", schoolController.getOneSchool);
router.put("/school/:id", schoolController.updateSchool);
router.delete("/school/:id", schoolController.deleteSchool);

module.exports = router;
