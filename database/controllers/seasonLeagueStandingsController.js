const seasonLeagueStanding = require("../models/season_league_standing");

exports.getAllSeasonLeagueStandings = async (req, res) => {
  try {
    const seasonLeagueStandings = await seasonLeagueStanding.findAll();
    res.json({
      data: seasonLeagueStandings,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneSeasonLeagueStandings = async (res, req) => {
  const { id } = req.params;

  const seasonLeagueStandings = await seasonLeagueStanding.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: seasonLeagueStandings,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createSeasonLeagueStandings = async (req, res) => {
  const {
    Standings_id,
    Season_league_id,
    Season_league_team_id,
    Matches_played,
    Team_wins,
    Team_draws,
    Team_losses,
    Team_points_forward,
    Team_points_against,
    Team_points_difference,
    Team_points_obtained,
    Team_rank,
    Total_league_teams,
  } = req.body;
  try {
    let newseasonLeagueStanding = await seasonLeagueStanding.create(
      {
        Standings_id: Standings_id,
        Season_league_id: Season_league_id,
        Season_league_team_id: Season_league_team_id,
        Matches_played: Matches_played,
        Team_wins: Team_wins,
        Team_draws: Team_draws,
        Team_losses: Team_losses,
        Team_points_forward: Team_points_forward,
        Team_points_against: Team_points_against,
        Team_points_difference: Team_points_difference,
        Team_points_obtained: Team_points_obtained,
        Team_rank: Team_rank,
        Total_league_teams: Total_league_teams,
      },
      {
        fields: [
          "Standings_id",
          "Season_league_id",
          "Season_league_team_id",
          "Matches_played",
          "Team_wins",
          "Team_draws",
          "Team_losses",
          "Team_points_forward",
          "Team_points_against",
          "Team_points_difference",
          "Team_points_obtained",
          "Team_rank",
          "Total_league_teams",
        ],
      }
    );
    if (newseasonLeagueStanding) {
      res.json({
        message: "created successfully!",
        data: newseasonLeagueStanding,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateSeasonLeagueStandings = async(req, res) => {
  try {
    let seasonLeagueStandingId = req.params.id;
    let seasonLeagueStanding = await seasonLeagueStanding.findByPk(
      seasonLeagueStandingId
    );

    if (!seasonLeagueStanding) {
      res.status(404).json({
        message:
          "Not Found for updating a season judge with id = " +
          seasonLeagueStandingId,
        seasonLeagueStanding: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Standings_id: req.body.Standings_id,
        Season_league_id: req.body.Season_league_id,
        Season_league_team_id: req.body.Season_league_team_id,
        Matches_played: req.body.Matches_played,
        Team_wins: req.body.Team_wins,
        Team_draws: req.body.Team_draws,
        Team_losses: req.body.Team_losses,
        Team_points_forward: req.body.Team_points_forward,
        Team_points_against: req.body.Team_points_against,
        Team_points_difference: req.body.Team_points_difference,
        Team_points_obtained: req.body.Team_points_obtained,
        Team_rank: req.body.Team_rank,
        Total_league_teams: req.body.Total_league_teams,
      };
      let result = await seasonLeagueStanding.update(updatedObject, {
        returning: true,
        where: { id: seasonLeagueStandingId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a season judge with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message:
          "Update successfully a season judge with id = " +
          seasonLeagueStandingId,
        seasonLeagueStandings: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a season judge with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteSeasonLeagueStandings = async(req, res) => {
  const { id } = req.params;
  const deletedseasonLeagueStanding = await seasonLeagueStanding.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedseasonLeagueStanding,
  });
};
