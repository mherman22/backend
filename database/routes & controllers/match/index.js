const express = require("express");
const router = express.Router();
const matchController = require('./matchController')

router.get("/match", matchController.getAllMatch);
router.post("/match", matchController.createMatch);
router.get("/match/:id", matchController.getOneMatch);
router.put("/match/:id", matchController.updateMatch);
router.delete("/match/:id", matchController.deleteMatch);

module.exports = router;