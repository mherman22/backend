const express = require("express");
const router = express.Router();
const matchNewsController = require("./matchNewsController");

router.get("/matchNews", matchNewsController.getAllMatchNews);
router.post("/matchNews", matchNewsController.createMatchNews);
router.get("/matchNews/:id", matchNewsController.getOneMatchNews);
router.put("/matchNews/:id", matchNewsController.updateMatchNews);
router.delete("/matchNews/:id", matchNewsController.deleteMatchNews);

module.exports = router;