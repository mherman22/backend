const express = require("express");
const router = express.Router();
const seasonController = require("./seasonController");

router.get("/season", seasonController.getAllSeason);
router.get("/season/:id", seasonController.getOneSeason);
router.put("/season/:id", seasonController.updateSeason);
router.delete("/season/:id", seasonController.deleteSeason);

module.exports = router;