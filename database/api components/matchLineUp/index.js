const express = require("express");
const router = express.Router();
const matchLineUpController = require("./matchLineUpController");

router.get("/matchLineUp", matchLineUpController.getAllMatchLineUp);
router.post("/matchLineUp", matchLineUpController.createMatchLineUp);
router.get("/matchLineUp/:id", matchLineUpController.getOneMatchLineUp);
router.put("/matchLineUp/:id", matchLineUpController.updateMatchLineUp);
router.delete("/matchLineUp/:id", matchLineUpController.deleteMatchLineUp);

module.exports = router;