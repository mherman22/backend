const express = require("express");
const app = express();

// importing the routes
const judgeRoutes = require("./database/routes & controllers/judge/index");
const leagueRoutes = require("./database/routes & controllers/league/index");
const matchRoutes = require("./database/routes & controllers/match/index");
const matchCommentsRoutes = require("./database/routes & controllers/matchComments/index");
const matchDebaterStatRoutes = require("./database/routes & controllers/matchDebaterStat/index");
const matchLineUpRoutes = require("./database/routes & controllers/matchLineUp/index");
const matchNewsRoutes = require("./database/routes & controllers/matchNews/index");
const matchTeamRoutes = require("./database/routes & controllers/matchTeam/index");
const matchTeamStatRoutes = require("./database/routes & controllers/matchTeamStat/index");
const schoolRoutes = require("./database/routes & controllers/school/index");
const schooltypeRoutes = require("./database/routes & controllers/schooltype/index");
const seasonRoutes = require("./database/routes & controllers/season/index");
const seasonJudgeRoutes = require("./database/routes & controllers/seasonJudge/index");
const seasonLeagueRoutes = require("./database/routes & controllers/seasonLeague/index");
const seasonLeagueStandingsRoutes = require("./database/routes & controllers/seasonLeagueStandings/index");
const seasonLeagueTeamRoutes = require("./database/routes & controllers/seasonLeagueTeam/index");
const seasonTeamDebatersRoutes = require("./database/routes & controllers/seasonTeamDebaters/index");
const seasonTeamSubscriptionRoutes = require("./database/routes & controllers/seasonTeamSubscription/index");
const statsParamRoutes = require("./database/routes & controllers/statsParam/index");
const teamRoutes = require("./database/routes & controllers/team/index");
const teamMemberRoutes = require("./database/routes & controllers/teamMember/index");
const teamRoleRoutes = require("./database/routes & controllers/teamRole/index");
const userRoutes = require("./database/routes & controllers/user/index");
const userRoleRoutes = require("./database/routes & controllers/userRole/index");

// app.use("", judgeRoutes);
// app.use("", leagueRoutes);

const Sequelize = require("sequelize");
const seq = require("./database/config/config");
const port = process.env.PORT || 5000;

const sequelize = new Sequelize(
  seq.development.database,
  seq.development.username,
  seq.development.password,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connection has been established successfully !!");
    sequelize
      .sync()
      .then(() => console.log("Database Synced !!"))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

app.use("/", routes);
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
