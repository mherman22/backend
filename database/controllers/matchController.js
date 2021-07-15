const match = require("../models/match");

exports.getAllMatches = async (req, res) => {
  try {
    const matchs = await match.findAll();
    res.json({
      data: matchs,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneMatch = async (req,res) => {
  const { id } = req.params;

  const matchs = await match.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: matchs,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createMatch = async (req, res) => {
  const {
    Match_id,
    Season_league_id,
    Home_season_league_team_id,
    Away_season_league_team_id,
    Match_day,
    Match_date,
    Match_time,
    Match_location,
    Score_home_team,
    score_away_team,
    is_played,
  } = req.body;
  try {
    let newmatch = await match.create(
      {
        Match_id:Match_id,
        Season_league_id:Season_league_id,
        Home_season_league_team_id:Home_season_league_team_id,
        Away_season_league_team_id:Away_season_league_team_id,
        Match_day:Match_day,
        Match_date:Match_date,
        Match_time:Match_time,
        Match_location:Match_location,
        Score_home_team:Score_home_team,
        score_away_team:score_away_team,
        is_played:is_played,
      },
      {
        fields: [
            "Match_id",
            "Season_league_id",
            "Home_season_league_team_id",
            "Away_season_league_team_id",
            "Match_day",
            "Match_date",
            "Match_time",
            "Match_location",
            "Score_home_team",
            "score_away_team",
            "is_played",
        ],
      }
    );
    if (newmatch) {
      res.json({
        message: "created successfully!",
        data: newmatch,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong!",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateMatch = async(req, res) => {
  try {
    let matchsId = req.params.id;
    let matchs = await match.findByPk(matchsId);

    if (!matchs) {
      res.status(404).json({
        message:
          "Not Found for updating a matchs with id = " +
          matchsId,
        matchs: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Match_id:req.body.Match_id,
        Season_league_id:req.body.Season_league_id,
        Home_season_league_team_id:req.body.Home_season_league_team_id,
        Away_season_league_team_id:req.body.Away_season_league_team_id,
        Match_day:req.body.Match_day,
        Match_date:req.body.Match_date,
        Match_time:req.body.Match_time,
        Match_location:req.body.Match_location,
        Score_home_team:req.body.Score_home_team,
        score_away_team:req.body.score_away_team,
        is_played:req.body.is_played,
      };
      let result = await matchs.update(updatedObject, {
        returning: true,
        where: { id: matchsId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a matchs with id = " +
            req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message:
          "Update successfully a matchs with id = " + matchsId,
        matchs: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a matchs with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteMatch = async(req, res) => {
  const { id } = req.params;
  const deletedmatchs = await matchs.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedmatchs,
  });
};
