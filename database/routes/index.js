const express = require("express");
const router = express.Router();

//GET home page
router.get('/', function(req, res, next) {
    res.send("Debate League Rest API");
  });

//judge
const judgeController = require('../controllers/judgeController');

router.get('/judge', judgeController.getAllJudges);
router.post("/judge", judgeController.createNewJudge);
router.get("/judge/:id", judgeController.getOneJudge);
router.put("/judge/:id", judgeController.updateJudge);
router.delete("/judge/:id", judgeController.deleteJudge);

//league
const leagueController = require('../controllers/leagueController');

router.get("/league", leagueController.getAllleagues);
router.post("/league", leagueController.createNewLeague);
router.get("/league/:id", leagueController.getOneLeague);
router.put("/league/:id", leagueController.updateLeague);
router.delete("/league/:id", leagueController.deleteLeague);

//match
const matchController = require('../controllers/matchController')

router.get("/match", matchController.getAllMatches);
router.post("/match", matchController.createMatch);
router.get("/match/:id", matchController.getOneMatch);
router.put("/match/:id", matchController.updateMatch);
router.delete("/match/:id", matchController.deleteMatch);

//match comments
const matchCommentsController = require('../controllers/matchCommentsController')

router.get("/matchComment", matchCommentsController.getAllMatchComments);
router.post("/matchComment", matchCommentsController.createMatchComment);
router.get("/matchComment/:id", matchCommentsController.getOneMatchComment);
router.put("/matchComment/:id", matchCommentsController.updateMatchComment);
router.delete("/matchComment/:id", matchCommentsController.deleteMatchComment);

//matchdebaterstat
const matchDebaterStatController = require("../controllers/matchDebaterControllerStat");

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

//match line up
const matchLineUpController = require("../controllers/matchLineUpController");

router.get("/matchLineUp", matchLineUpController.getAllMatchLineUp);
router.post("/matchLineUp", matchLineUpController.createMatchLineUp);
router.get("/matchLineUp/:id", matchLineUpController.getOneMatchLineUp);
router.put("/matchLineUp/:id", matchLineUpController.updateMatchLineUp);
router.delete("/matchLineUp/:id", matchLineUpController.deleteMatchLineUp);

//match news
const matchNewsController = require("../controllers/matchNewsController");

router.get("/matchNews", matchNewsController.getAllMatchNews);
router.post("/matchNews", matchNewsController.createMatchNews);
router.get("/matchNews/:id", matchNewsController.getOneMatchNews);
router.put("/matchNews/:id", matchNewsController.updateMatchNews);
router.delete("/matchNews/:id", matchNewsController.deleteMatchNews);

//match team stat
const matchTeamStatsController = require("../controllers/matchTeamStatController");

router.get("/matchTeamStats", matchTeamStatsController.getAllMatchTeamStats);
router.post("/matchTeamStats", matchTeamStatsController.createMatchTeamStat);
router.get("/matchTeamStats/:id", matchTeamStatsController.getOneMatchTeamStat);
router.put("/matchTeamStats/:id", matchTeamStatsController.updateMatchTeamStats);
router.delete("/matchTeamStats/:id", matchTeamStatsController.deleteMatchTeamStats);

//school
const schoolController = require("../controllers/schoolController");

router.get("/school", schoolController.getAllSchools);
router.post("/school", schoolController.createSchool);
router.get("/school/:id", schoolController.getOneSchool);
router.put("/school/:id", schoolController.updateSchool);
router.delete("/school/:id", schoolController.deleteSchool);

//school type
const schoolTypeController = require("../controllers/schoolTypeController");

router.get("/schoolType", schoolTypeController.getAllSchoolTypes);
router.post("/schoolType", schoolTypeController.createSchoolType);
router.get("/schoolType/:id", schoolTypeController.getOneSchoolType);
router.put("/schoolType/:id", schoolTypeController.updateSchoolType);
router.delete("/schoolType/:id", schoolTypeController.deleteSchoolType);

//season
const seasonController = require("../controllers/seasonController");

router.get("/season", seasonController.getAllSeason);
router.post("/season", seasonController.createSeason);
router.get("/season/:id", seasonController.getOneSeason);
router.put("/season/:id", seasonController.updateSeason);
router.delete("/season/:id", seasonController.deleteSeason);

//season judge
const seasonJudgeController = require("../controllers/seasonJudgeController");

router.get("/seasonJudge", seasonJudgeController.getAllSeasonJudges);
router.post("/seasonJudge", seasonJudgeController.createSeasonJudge);
router.get("/seasonJudge/:id", seasonJudgeController.getOneSeasonJudge);
router.put("/seasonJudge/:id", seasonJudgeController.updateSeasonJudge);
router.delete("/seasonJudge/:id", seasonJudgeController.deleteSeasonJudge);

//season league
const seasonLeagueController = require("../controllers/seasonLeagueController");

router.get("/seasonLeague", seasonLeagueController.getAllSeasonLeagues);
router.post("/seasonLeague", seasonLeagueController.createSeasonLeague);
router.get("/seasonLeague/:id", seasonLeagueController.getOneSeasonLeague);
router.put("/seasonLeague/:id", seasonLeagueController.updateSeasonLeague);
router.delete("/seasonLeague/:id", seasonLeagueController.deleteSeasonLeague);

//season league standings
const seasonLeagueStandingsController = require("../controllers/seasonLeagueStandingsController");

router.get("/seasonLeagueStandings", seasonLeagueStandingsController.getAllSeasonLeagueStandings);
router.post("/seasonLeagueStandings", seasonLeagueStandingsController.createSeasonLeagueStandings);
router.get("/seasonLeagueStandings/:id", seasonLeagueStandingsController.getOneSeasonLeagueStandings);
router.put("/seasonLeagueStandings/:id", seasonLeagueStandingsController.updateSeasonLeagueStandings);
router.delete("/seasonLeagueStandings/:id", seasonLeagueStandingsController.deleteSeasonLeagueStandings);

//season league team
const seasonLeagueTeamController = require("../controllers/seasonLeagueTeamController");

router.get(
    "/seasonLeagueTeam",
    seasonLeagueTeamController.getAllSeasonLeagueTeams
);
router.post(
    "/seasonLeagueTeam",
    seasonLeagueTeamController.createSeasonLeagueTeam
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

//season team debaters
const seasonTeamDebatersController = require("../controllers/seasonTeamDebatersController");

router.get(
    "/seasonTeamDebaters",
    seasonTeamDebatersController.getAllSeasonTeamDebaters
);
router.post(
    "/seasonTeamDebaters",
    seasonTeamDebatersController.createSeasonTeamDebaters
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

//season team subscription
const seasonTeamSubscriptionController = require("../controllers/seasonTeamSubscriptionController");

router.get(
    "/seasonTeamSubscription",
    seasonTeamSubscriptionController.getAllSeasonTeamSubscription
);
router.post(
    "/seasonTeamSubscription",
    seasonTeamSubscriptionController.createSeasonTeamSubscription
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

//statsparam
const statsParamController = require("../controllers/statsParamController");

router.get("/statsParam", statsParamController.getAllStatsParam);
router.post("/statsParam", statsParamController.createStatsParam);
router.get("/statsParam/:id", statsParamController.getOneStatsParam);
router.put("/statsParam/:id", statsParamController.updateStatsParam);
router.delete("/statsParam/:id", statsParamController.deleteStatsParam);

//team
const teamController = require("../controllers/teamController");

router.get("/team", teamController.getAllTeams);
router.post("/team", teamController.createTeams);
router.get("/team/:id", teamController.getOneTeam);
router.put("/team/:id", teamController.updateTeam);
router.delete("/team/:id", teamController.deleteTeam);

//team member
const teamMemberController = require("../controllers/teamMemberController");

router.get("/teamMember", teamMemberController.getAllTeamMember);
router.post("/teamMember", teamMemberController.createTeamMember);
router.get("/teamMember/:id", teamMemberController.getOneTeamMember);
router.put("/teamMember/:id", teamMemberController.updateTeamMember);
router.delete("/teamMember/:id", teamMemberController.deleteTeamMember);

//team role
const teamRoleController = require("../controllers/teamRoleController");

router.get("/teamRole", teamRoleController.getAllTeamRole);
router.post("/teamRole", teamRoleController.createTeamRole);
router.get("/teamRole/:id", teamRoleController.getOneTeamRole);
router.put("/teamRole/:id", teamRoleController.updateTeamRole);
router.delete("/teamRole/:id", teamRoleController.deleteTeamRole);

//user
const userController = require("../controllers/userController");

router.get("/users", userController.getAllUsers);
router.get("/users", userController.createUser);
router.get("/users/:id", userController.getOneUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUsers);

//user role
const userRoleController = require("../controllers/userRoleController");

router.get("/userRole", userRoleController.getAllUserRole);
router.post("/userRole", userRoleController.createUserRole);
router.get("/userRole/:id", userRoleController.getOneUserRole);
router.put("/userRole/:id", userRoleController.updateUserRole);
router.delete("/userRole/:id", userRoleController.deleteUserRole);

module.exports = router;