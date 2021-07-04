const express = require("express");
const router = express.Router();
const seasonJudgeController = require("./seasonJudgeController");

router.get("/seasonJudge", seasonJudgeController.getAllSeasonJudge);
router.post("/seasonJudge", seasonJudgeController.createSeasonJudge);
router.get("/seasonJudge/:id", seasonJudgeController.getOneSeasonJudge);
router.put("/seasonJudge/:id", seasonJudgeController.updateSeasonJudge);
router.delete("/seasonJudge/:id", seasonJudgeController.deleteSeasonJudge);

module.exports = router;