const express = require("express");
const router = express.Router();
const seasonTeamSubscriptionController = require("./seasonTeamSubscriptionController");

router.get(
    "/seasonTeamSubscription",
    seasonTeamSubscriptionController.getAllSeasonTeamSubscription
  );
  router.post(
    "/seasonTeamSubscription",
    seasonTeamSubscriptionController.createSeasonTeamSubscription
  );
  router.get(
    "/seasonTeamSubscription/:id",
    seasonTeamSubscriptionController.getOneSeasonTeamSubscription
  );
  router.put(
    "/seasonTeamSubscription/:id",
    seasonTeamSubscriptionController.updateSeasonTeamSubscription
  );
  router.delete(
    "/seasonTeamSubscription/:id",
    seasonTeamSubscriptionController.deleteSeasonTeamSubscription
  );

module.exports = router;