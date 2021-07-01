const express = require("express");
const router = express.Router();
const matchTeamStatsController = require("./matchTeamStatController");

router.get("/matchTeamStats", matchTeamStatsController.getAllMatchTeamStats);
router.get("/matchTeamStats/:id",matchTeamStatsController.getOneMatchTeamStats);
router.put("/matchTeamStats/:id",matchTeamStatsController.updateMatchTeamStats);
router.delete( "/matchTeamStats/:id",matchTeamStatsController.deleteMatchTeamStats);

module.exports = router;
