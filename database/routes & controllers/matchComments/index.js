const express = require("express");
const router = express.Router();
const matchCommentsController = require('./matchCommentsController')

router.get("/matchComment", matchCommentsController.getAllMatchComments);
router.post("/matchComment", matchCommentsController.createMatchComment);
router.get("/matchComment/:id", matchCommentsController.getOneMatchComment);
router.put("/matchComment/:id", matchCommentsController.updateMatchComment);
router.delete("/matchComment/:id", matchCommentsController.deleteMatchComment);

module.exports = router;