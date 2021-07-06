const seasonTeamDebater = require("../../models/season_team_debaters");

exports.getAllSeasonTeamDebaters = async (req, res) => {
  try {
    const seasonTeamDebaters = await seasonTeamDebater.findAll();
    res.json({
      data: seasonTeamDebaters,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneSeasonTeamDebaters = async (res, req) => {
  const { id } = req.params;

  const seasonTeamDebaters = await seasonTeamDebater.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: seasonTeamDebaters,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createSeasonTeamDebaters = async (req, res) => {
  const { season_team_member_id, season_league_team_id, Team_member_id } =
    req.body;
  try {
    let newseasonTeamDebater = await seasonTeamDebater.create(
      {
        season_team_member_id: season_team_member_id,
        season_league_team_id: season_league_team_id,
        Team_member_id: Team_member_id,
      },
      {
        fields: [
          "season_team_member_id",
          "season_league_team_id",
          "Team_member_id",
        ],
      }
    );
    if (newseasonTeamDebater) {
      res.json({
        message: "created successfully!",
        data: newseasonTeamDebater,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateSeasonTeamDebaters = (req, res) => {
  try {
    let seasonTeamDebaterId = req.params.id;
    let seasonTeamDebater = await seasonTeamDebater.findByPk(
      seasonTeamDebaterId
    );

    if (!seasonTeamDebater) {
      res.status(404).json({
        message:
          "Not Found for updating a season team debater with id = " +
          seasonTeamDebaterId,
        seasonTeamDebater: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        season_team_member_id: req.body.season_team_member_id,
        season_league_team_id: req.body.season_league_team_id,
        Team_member_id: req.body.Team_member_id,
      };
      let result = await seasonTeamDebater.update(updatedObject, {
        returning: true,
        where: { id: seasonTeamDebaterId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a season team debater with id = " +
            req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message:
          "Updated successfully a season team debater with id = " +
          seasonTeamDebaterId,
        seasonTeamDebaters: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a season team debater with id = " +
        req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteSeasonTeamDebaters = (req, res) => {
  const { id } = req.params;
  const deletedseasonTeamDebater = await seasonTeamDebater.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedseasonTeamDebater,
  });
};
