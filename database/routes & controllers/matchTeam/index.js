const express = require("express");
const router = express.Router();
const matchTeamController = require("./matchTeamController");

router.get("/matchTeam", matchTeamController.getAllMatchTeam);
router.post("/matchTeam", matchTeamController.createMatchTeam);
router.get("/matchTeam/:id", matchTeamController.getOneMatchTeam);
router.put("/matchTeam/:id", matchTeamController.updateMatchTeam);
router.delete("/matchTeam/:id", matchTeamController.deleteMatchTeam);

module.exports = router;