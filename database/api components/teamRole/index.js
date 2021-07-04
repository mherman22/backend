const express = require("express");
const router = express.Router();
const teamRoleController = require("./teamRoleController");

router.get("/teamRole", teamRoleController.getAllTeamRole);
router.post("/teamRole", teamRoleController.createTeamRole);
router.get("/teamRole/:id", teamRoleController.getOneTeamRole);
router.put("/teamRole/:id", teamRoleController.updateTeamRole);
router.delete("/teamRole/:id", teamRoleController.deleteTeamRole);

module.exports = router;