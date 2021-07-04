const express = require("express");
const router = express.Router();
const seasonTeamDebatersController = require("./seasonTeamDebatersController");

router.get(
  "/seasonTeamDebaters",
  seasonTeamDebatersController.getAllSeasonTeamDebaters
);
router.post(
    "/seasonTeamDebaters",
    seasonTeamDebatersController.createSeasonTeamDebaters
  );
router.get(
  "/seasonTeamDebaters/:id",
  seasonTeamDebatersController.getOneSeasonTeamDebaters
);
router.put(
  "/seasonTeamDebaters/:id",
  seasonTeamDebatersController.updateSeasonTeamDebaters
);
router.delete(
  "/seasonTeamDebaters/:id",
  seasonTeamDebatersController.deleteSeasonTeamDebaters
);

module.exports = router;
