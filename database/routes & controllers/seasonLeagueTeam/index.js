const express = require("express");
const router = express.Router();
const seasonLeagueTeamController = require("./seasonLeagueTeamController");

router.get(
  "/seasonLeagueTeam",
  seasonLeagueTeamController.getAllSeasonLeagueTeam
);
router.post(
    "/seasonLeagueTeam",
    seasonLeagueTeamController.createSeasonLeagueTeam
  );
router.get(
  "/seasonLeagueTeam/:id",
  seasonLeagueTeamController.getOneSeasonLeagueTeam
);
router.put(
  "/seasonLeagueTeam/:id",
  seasonLeagueTeamController.updateSeasonLeagueTeam
);
router.delete(
  "/seasonLeagueTeam/:id",
  seasonLeagueTeamController.deleteSeasonLeagueTeam
);

module.exports = router;
