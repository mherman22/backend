const express = require("express");
const router = express.Router();
const teamController = require("./teamController");

router.get("/team", teamController.getAllTeams);
router.post("/team", teamController.createTeams);
router.get("/team/:id", teamController.getOneTeam);
router.put("/team/:id", teamController.updateTeam);
router.delete("/team/:id", teamController.deleteTeam);

module.exports = router;
