const express = require("express");
const router = express.Router();
const statsParamController = require("./statsParamController");

router.get("/statsParam", statsParamController.getAllStatsParam);
router.post("/statsParam", statsParamController.createStatsParam);
router.get("/statsParam/:id", statsParamController.getOneStatsParam);
router.put("/statsParam/:id", statsParamController.updateStatsParam);
router.delete("/statsParam/:id", statsParamController.deleteStatsParam);

module.exports = router;
