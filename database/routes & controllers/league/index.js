const express = require("express");
const router = express.Router();
const leagueController = require('./leagueController');

router.get("/league", leagueController.getAllLeague);
router.post("/league", leagueController.createNewLeague);
router.get("/league/:id", leagueController.getOneLeague);
router.put("/league/:id", leagueController.updateLeague);
router.delete("/league/:id", leagueController.deleteLeague);

module.exports = router;