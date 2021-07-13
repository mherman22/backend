const matchTeamStat = require("../models/match_team_stat");

exports.getAllMatchTeamStats = async (req, res) => {
  try {
    const matchTeamStats = await matchTeamStat.findAll();
    res.json({
      data: matchTeamStats,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneMatchTeamStat = async (res, req) => {
  const { id } = req.params;

  const matchTeamStats = await matchTeamStat.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: matchTeamStats,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createMatchTeamStat = async (req, res) => {
  const {
    Match_team_stats_id,
    Match_id,
    Stats_param_id,
    Scores_home_team,
    Scores_away_team,
  } = req.body;
  try {
    let newmatchTeamStat = await matchTeamStat.create(
      {
        Match_team_stats_id: Match_team_stats_id,
        Match_id: Match_id,
        Stats_param_id: Stats_param_id,
        Scores_home_team: Scores_home_team,
        Scores_away_team: Scores_away_team,
      },
      {
        fields: [
          "Match_team_stats_id",
          "Match_id",
          "Stats_param_id",
          "Scores_home_team",
          "Scores_away_team",
        ],
      }
    );
    if (newmatchTeamStat) {
      res.json({
        message: "created successfully!",
        data: newmatchTeamStat,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong!",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateMatchTeamStats = async(req, res) => {
  try {
    let matchTeamStatsId = req.params.id;
    let matchTeamStats = await matchTeamStat.findByPk(matchTeamStatsId);

    if (!matchTeamStats) {
      res.status(404).json({
        message:
          "Not Found for updating a matchTeamStats with id = " +
          matchTeamStatsId,
        matchTeamStats: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Match_team_stats_id: req.body.Match_team_stats_id,
        Match_id: req.body.Match_id,
        Stats_param_id: req.body.Stats_param_id,
        Scores_home_team: req.body.Scores_home_team,
        Scores_away_team: req.body.Scores_away_team,
      };
      let result = await matchTeamStats.update(updatedObject, {
        returning: true,
        where: { id: matchTeamStatsId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a matchTeamStats with id = " +
            req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message:
          "Update successfully a matchTeamStats with id = " + matchTeamStatsId,
        matchTeamStats: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a matchTeamStats with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteMatchTeamStats = async(req, res) => {
  const { id } = req.params;
  const deletedmatchTeamStats = await matchTeamStats.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedmatchTeamStats,
  });
};
