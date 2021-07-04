const express = require("express");
const router = express.Router();
const seasonLeagueController = require("./seasonLeagueController");

router.get("/seasonLeague", seasonLeagueController.getAllSeasonLeague);
router.post("/seasonLeague", seasonLeagueController.createSeasonLeague);
router.get("/seasonLeague/:id", seasonLeagueController.getOneSeasonLeague);
router.put("/seasonLeague/:id", seasonLeagueController.updateSeasonLeague);
router.delete("/seasonLeague/:id", seasonLeagueController.deleteSeasonLeague);

module.exports = router;