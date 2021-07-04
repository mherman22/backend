const express = require("express");
const router = express.Router();
const judgeController = require('./judgeController')

router.get("/judge", judgeController.getAllJudge);
router.post("/judge", judgeController.createNewJudge);
router.get("/judge/:id", judgeController.getOneJudge);
router.put("/judge/:id", judgeController.updateJudge);
router.delete("/judge/:id", judgeController.deleteJudge);

module.exports = router;