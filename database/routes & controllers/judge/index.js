const express = require("express");
const router = express.Router();
const judgeController = require('./judgeController')

router.get('/',(res,req)=>{res.send("yo welcome! to judges")})
router.get('/judge',judgeController.getAllJudges);
router.post("/judge", judgeController.createNewJudge);
router.get("/judge/:id", judgeController.getOneJudge);
router.put("/judge/:id", judgeController.updateJudge);
router.delete("/judge/:id", judgeController.deleteJudge);

module.exports = router;