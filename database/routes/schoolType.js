const express = require("express");
const router = express.Router();

const schoolTypeController = require("./database/controllers/schoolType");
const leagueController = require("./database/controllers/league");
const schoolController = require("./database/controllers/school");
const teamController = require("./database/controllers/team");
const teamRoleController = require("./database/controllers/teamRole");
const teamMemberController = require("./database/controllers/teamMember");
const judgeController = require("./database/controllers/judge");
const seasonController = require("./database/controllers/season");
const seasonTeamSubscriptionController = require("./database/controllers/seasonTeamSubscription");
const seasonJudgeController = require("./database/controllers/seasonJudge");
const seasonLeagueController = require("./database/controllers/seasonLeague");
const seasonLeagueTeamController = require("./database/controllers/seasonLeagueTeam");
const seasonTeamDebatersController = require("./database/controllers/seasonTeamDebaters");
const matchController = require("./database/controllers/match");
const matchNewsController = require("./database/controllers/matchNews");
const userController = require("./database/controllers/user");
const userRoleController = require("./database/controllers/userRole");
const matchTeamController = require("./database/controllers/matchTeam");
const matchCommentsController = require("./database/controllers/matchComments");
const statsParamController = require("./database/controllers/statsParam");
const matchLineUpController = require("./database/controllers/matchLineUp");
const matchTeamStatsController = require("./database/controllers/matchTeamStat");
const matchDebaterStatController = require("./database/controllers/matchDebaterStat");
const seasonLeagueStandingsController = require("./database/controllers/seasonLeagueStandings");

//routes for school type
router.get("/schoolType", schoolTypeController.getAllSchoolTypes);
router.get("/schoolType/:id", schoolTypeController.getOneSchoolType);
router.put("/schoolType/:id", schoolTypeController.updateSchoolType);
router.delete("/schoolType/:id", schoolTypeController.deleteAllSchoolType);

//routes for school
router.get("/school", schoolController.getAllSchools);
router.get("/school/:id", schoolController.getOneSchool);
router.put("/school/:id", schoolController.updateSchool);
router.delete("/school/:id", schoolController.deleteSchool);

//routes for league
router.get("/league", leagueController.getAllLeague);
router.get("/league/:id", leagueController.getOneLeague);
router.put("/league/:id", leagueController.updateLeague);
router.delete("/league/:id", leagueController.deleteLeague);

//routes for team
router.get("/team", teamController.getAllTeams);
router.get("/team/:id", teamController.getOneTeam);
router.put("/team/:id", teamController.updateTeam);
router.delete("/team/:id", teamController.deleteTeam);

//routes for teammember
router.get("/teamMember", teamMemberController.getAllTeamMember);
router.get("/teamMember/:id", teamMemberController.getOneTeamMember);
router.put("/teamMember/:id", teamMemberController.updateTeamMember);
router.delete("/teamMember/:id", teamMemberController.deleteTeamMember);

//routes for team role
router.get("/teamRole", teamRoleController.getAllTeamRole);
router.get("/teamRole/:id", teamRoleController.getOneTeamRole);
router.put("/teamRole/:id", teamRoleController.updateTeamRole);
router.delete("/teamRole/:id", teamRoleController.deleteTeamRole);

//routes for judge
router.get("/judge", judgeController.getAllJudge);
router.get("/judge/:id", judgeController.getOneJudge);
router.put("/judge/:id", judgeController.updateJudge);
router.delete("/judge/:id", judgeController.deleteJudge);

//routes for season
router.get("/season", seasonController.getAllSeason);
router.get("/season/:id", seasonController.getOneSeason);
router.put("/season/:id", seasonController.updateSeason);
router.delete("/season/:id", seasonController.deleteSeason);

//routes for season team subscription
router.get(
  "/seasonTeamSubscription",
  seasonTeamSubscriptionController.getAllSeasonTeamSubscription
);
router.get(
  "/seasonTeamSubscription/:id",
  seasonTeamSubscriptionController.getOneSeasonTeamSubscription
);
router.put(
  "/seasonTeamSubscription/:id",
  seasonTeamSubscriptionController.updateSeasonTeamSubscription
);
router.delete(
  "/seasonTeamSubscription/:id",
  seasonTeamSubscriptionController.deleteSeasonTeamSubscription
);

//routes for season judge
router.get("/seasonJudge", seasonJudgeController.getAllSeasonJudge);
router.get("/seasonJudge/:id", seasonJudgeController.getOneSeasonJudge);
router.put("/seasonJudge/:id", seasonJudgeController.updateSeasonJudge);
router.delete("/seasonJudge/:id", seasonJudgeController.deleteSeasonJudge);

//routes for season league
router.get("/seasonLeague", seasonLeagueController.getAllSeasonLeague);
router.get("/seasonLeague/:id", seasonLeagueController.getOneSeasonLeague);
router.put("/seasonLeague/:id", seasonLeagueController.updateSeasonLeague);
router.delete("/seasonLeague/:id", seasonLeagueController.deleteSeasonLeague);

//routes for season league team
router.get(
  "/seasonLeagueTeam",
  seasonLeagueTeamController.getAllSeasonLeagueTeam
);
router.get(
  "/seasonLeagueTeam/:id",
  seasonLeagueTeamController.getOneSeasonLeagueTeam
);
router.put(
  "/seasonLeagueTeam/:id",
  seasonLeagueTeamController.updateSeasonLeagueTeam
);
router.delete(
  "/seasonLeagueTeam/:id",
  seasonLeagueTeamController.deleteSeasonLeagueTeam
);

//routes for season team debaters
router.get(
  "/seasonTeamDebaters",
  seasonTeamDebatersController.getAllSeasonTeamDebaters
);
router.get(
  "/seasonTeamDebaters/:id",
  seasonTeamDebatersController.getOneSeasonTeamDebaters
);
router.put(
  "/seasonTeamDebaters/:id",
  seasonTeamDebatersController.updateSeasonTeamDebaters
);
router.delete(
  "/seasonTeamDebaters/:id",
  seasonTeamDebatersController.deleteSeasonTeamDebaters
);

//routes for match
router.get("/match", matchController.getAllMatch);
router.get("/match/:id", matchController.getOneMatch);
router.put("/match/:id", matchController.updateMatch);
router.delete("/match/:id", matchController.deleteMatch);

//routes for match news
router.get("/matchNews", matchNewsController.getAllMatchNews);
router.get("/matchNews/:id", matchNewsController.getOneMatchNews);
router.put("/matchNews/:id", matchNewsController.updateMatchNews);
router.delete("/matchNews/:id", matchNewsController.deleteMatchNews);

//routes for users
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getOneUsers);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUsers);

//routes for user role
router.get("/userRole", userRoleController.getAllUserRole);
router.get("/userRole/:id", userRoleController.getOneUserRole);
router.put("/userRole/:id", userRoleController.updateUserRole);
router.delete("/userRole/:id", userRoleController.deleteUserRole);

//routes for match team
router.get("/matchTeam", matchTeamController.getAllMatchTeam);
router.get("/matchTeam/:id", matchTeamController.getOneMatchTeam);
router.put("/matchTeam/:id", matchTeamController.updateMatchTeam);
router.delete("/matchTeam/:id", matchTeamController.deleteMatchTeam);

//routes for match comment
router.get("/matchComment", matchCommentsController.getAllMatchComment);
router.get("/matchComment/:id", matchCommentsController.getOneMatchComment);
router.put("/matchComment/:id", matchCommentsController.updateMatchComment);
router.delete("/matchComment/:id", matchCommentsController.deleteMatchComment);

//routes for stat param
router.get("/statsParam", statsParamController.getAllStatsParam);
router.get("/statsParam/:id", statsParamController.getStatsParam);
router.put("/statsParam/:id", statsParamController.updateStatsParam);
router.delete("/statsParam/:id", statsParamController.deleteStatsParam);

//routes for match lineup
router.get("/matchLineUp", matchLineUpController.getAllMatchLineUp);
router.get("/matchLineUp/:id", matchLineUpController.getOneMatchLineUp);
router.put("/matchLineUp/:id", matchLineUpController.updateMatchLineUp);
router.delete("/matchLineUp/:id", matchLineUpController.deleteMatchLineUp);

//routes for match Team Stats
router.get("/matchTeamStats", matchTeamStatsController.getAllMatchTeamStats);
router.get(
  "/matchTeamStats/:id",
  matchTeamStatsController.getOneMatchTeamStats
);
router.put(
  "/matchTeamStats/:id",
  matchTeamStatsController.updateMatchTeamStats
);
router.delete(
  "/matchTeamStats/:id",
  matchTeamStatsController.deleteMatchTeamStats
);

//routes for match Debater Stat
router.get(
  "/matchDebaterStat",
  matchDebaterStatController.getAllMatchDebaterStat
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

//routes for season league standings
router.get(
  "/seasonLeagueStandings",
  seasonLeagueStandingsController.getAllSeasonLeagueStandings
);
router.get(
  "/seasonLeagueStandings/:id",
  seasonLeagueStandingsController.getOneSeasonLeagueStandings
);
router.put(
  "/seasonLeagueStandings/:id",
  seasonLeagueStandingsController.updateSeasonLeagueStandings
);
router.delete(
  "/seasonLeagueStandings/:id",
  seasonLeagueStandingsController.deleteSeasonLeagueStandings
);
