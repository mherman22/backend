const express = require("express");
const router = express.Router();
const teamMemberController = require("./teamMemberController");

router.get("/teamMember", teamMemberController.getAllTeamMember);
router.post("/teamMember", teamMemberController.createTeamMember);
router.get("/teamMember/:id", teamMemberController.getOneTeamMember);
router.put("/teamMember/:id", teamMemberController.updateTeamMember);
router.delete("/teamMember/:id", teamMemberController.deleteTeamMember);

module.exports = router;