const matchLineUp = require("../models/match_line_up");

exports.getAllMatchLineUp = async (req, res) => {
  try {
    const matchLineUps = await matchLineUp.findAll();
    res.json({
      data: matchLineUps,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneMatchLineUp = async (res, req) => {
  const { id } = req.params;

  const matchLineUps = await matchLineUp.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: matchLineUps,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createMatchLineUp = async (req, res) => {
  const {
    Match_line_up_id,
    Match_id,
    Season_team_member_id,
    is_main_debater
  } = req.body;
  try {
    let newmatchLineUp = await matchLineUp.create(
      {
        Match_line_up_id:Match_line_up_id,
        Match_id:Match_id,
        Season_team_member_id:Season_team_member_id,
        is_main_debater:is_main_debater
      },
      {
        fields: [
            "Match_line_up_id",
            "Match_id",
            "Season_team_member_id",
            "is_main_debater"
        ],
      }
    );
    if (newmatchLineUp) {
      res.json({
        message: "created successfully!",
        data: newmatchLineUp,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong!",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateMatchLineUp = async(req, res) => {
  try {
    let matchLineUpsId = req.params.id;
    let matchLineUps = await matchLineUp.findByPk(
      matchLineUpsId
    );

    if (!matchLineUps) {
      res.status(404).json({
        message:
          "Not Found for updating a matchLineUps with id = " +
          matchLineUpsId,
        matchLineUps: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Match_line_up_id:req.body.Match_line_up_id,
        Match_id:req.body.Match_id,
        Season_team_member_id:req.body.Season_team_member_id,
        is_main_debater:req.body.is_main_debater
      };
      let result = await matchLineUps.update(updatedObject, {
        returning: true,
        where: { id: matchLineUpsId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a matchLineUps with id = " +
            req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message:
          "Update successfully a matchLineUps with id = " +
          matchLineUpsId,
        matchLineUps: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a matchLineUps with id = " +
        req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteMatchLineUp = async(req, res) => {
  const { id } = req.params;
  const deletedmatchLineUps = await matchLineUps.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedmatchLineUps,
  });
};
