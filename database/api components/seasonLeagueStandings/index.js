const express = require("express");
const router = express.Router();
const seasonLeagueStandingsController = require("./seasonLeagueStandingsController");

  router.get("/seasonLeagueStandings",seasonLeagueStandingsController.getAllSeasonLeagueStandings);
  router.post("/seasonLeagueStandings",seasonLeagueStandingsController.createSeasonLeagueStandings);
  router.get("/seasonLeagueStandings/:id",seasonLeagueStandingsController.getOneSeasonLeagueStandings);
  router.put("/seasonLeagueStandings/:id",seasonLeagueStandingsController.updateSeasonLeagueStandings);
  router.delete("/seasonLeagueStandings/:id",seasonLeagueStandingsController.deleteSeasonLeagueStandings);
  
module.exports = router;
