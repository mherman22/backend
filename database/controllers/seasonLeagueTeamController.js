const seasonLeagueTeam = require("../models/season_league_team");

exports.getAllSeasonLeagueTeams = async (req, res) => {
  try {
    const seasonLeagueTeams = await seasonLeagueTeam.findAll();
    res.json({
      data: seasonLeagueTeams,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneSeasonLeagueTeam = async (res, req) => {
  const { id } = req.params;

  const seasonLeagueTeams = await seasonLeagueTeam.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: seasonLeagueTeams,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createSeasonLeagueTeam = async (req, res) => {
  const { season_league_team_id, Season_league_id, Team_subscription_id } =
    req.body;
  try {
    let newseasonLeagueTeam = await seasonLeagueTeam.create(
      {
        season_league_team_id: season_league_team_id,
        Season_league_id: Season_league_id,
        Team_subscription_id: Team_subscription_id,
      },
      {
        fields: [
          "season_league_team_id",
          "Season_league_id",
          "Team_subscription_id",
        ],
      }
    );
    if (newseasonLeagueTeam) {
      res.json({
        message: "created successfully!",
        data: newseasonLeagueTeam,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateSeasonLeagueTeam = async(req, res) => {
  try {
    let seasonLeagueTeamId = req.params.id;
    let seasonLeagueTeam = await seasonLeagueTeam.findByPk(seasonLeagueTeamId);

    if (!seasonLeagueTeam) {
      res.status(404).json({
        message:
          "Not Found for updating a season league team with id = " +
          seasonLeagueTeamId,
        seasonLeagueTeam: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        season_league_team_id: req.body.season_league_team_id,
        Season_league_id: req.body.Season_league_id,
        Team_subscription_id: req.body.Team_subscription_id,
      };
      let result = await seasonLeagueTeam.update(updatedObject, {
        returning: true,
        where: { id: seasonLeagueTeamId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a season league team with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message:
          "Updated successfully a season league team with id = " + seasonLeagueTeamId,
        seasonLeagueTeams: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a season league team with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteSeasonLeagueTeam = async(req, res) => {
  const { id } = req.params;
  const deletedseasonLeagueTeam = await seasonLeagueTeam.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedseasonLeagueTeam,
  });
};
