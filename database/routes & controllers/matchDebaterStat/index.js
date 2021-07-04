const express = require("express");
const router = express.Router();
const matchDebaterStatController = require("./matchDebaterControllerStat");

router.get(
  "/matchDebaterStat",
  matchDebaterStatController.getAllMatchDebaterStat
);
router.post(
    "/matchDebaterStat",
    matchDebaterStatController.createMatchDebaterStat
  );
router.get(
  "/matchDebaterStat/:id",
  matchDebaterStatController.getOneMatchDebaterStat
);
router.put(
  "/matchDebaterStat/:id",
  matchDebaterStatController.updateMatchDebaterStat
);
router.delete(
  "/matchDebaterStat/:id",
  matchDebaterStatController.deleteMatchDebaterStat
);

module.exports = router;
