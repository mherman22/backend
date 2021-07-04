const matchDebaterStat = require("../../models/match_debater_stat");

exports.getAllmatchDebaterStat = async (req, res) => {
  try {
    const matchDebaterStats = await matchDebaterStat.findAll();
    res.json({
      data: matchDebaterStats,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneMatchDebaterStat = async (res, req) => {
  const { id } = req.params;

  const matchDebaterStats = await matchDebaterStat.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: matchDebaterStats,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createMatchDebaterStat = async (req, res) => {
  const {
    Match_debater_stats_id,
    Match_line_up_id,
    Stats_param_id,
    debater_scores,
  } = req.body;
  try {
    let newmatchDebaterStat = await matchDebaterStat.create(
      {
        Match_debater_stats_id: Match_debater_stats_id,
        Match_line_up_id: Match_line_up_id,
        Stats_param_id: Stats_param_id,
        debater_scores: debater_scores,
      },
      {
        fields: [
          "Match_debater_stats_id",
          "Match_line_up_id",
          "Stats_param_id",
          "debater_scores",
        ],
      }
    );
    if (newmatchDebaterStat) {
      res.json({
        message: "created successfully!",
        data: newmatchDebaterStat,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong!",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateMatchDebaterStat = (req, res) => {
  try {
    let matchDebaterStatsId = req.params.id;
    let matchDebaterStats = await matchDebaterStat.findByPk(
      matchDebaterStatsId
    );

    if (!matchDebaterStats) {
      res.status(404).json({
        message:
          "Not Found for updating a matchDebaterStats with id = " +
          matchDebaterStatsId,
        matchDebaterStats: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Match_debater_stats_id: req.body.Match_debater_stats_id,
        Match_line_up_id: req.body.Match_line_up_id,
        Stats_param_id: req.body.Stats_param_id,
        debater_scores: req.body.debater_scores,
      };
      let result = await matchDebaterStats.update(updatedObject, {
        returning: true,
        where: { id: matchDebaterStatsId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a matchDebaterStats with id = " +
            req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message:
          "Update successfully a matchDebaterStats with id = " +
          matchDebaterStatsId,
        matchDebaterStats: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a matchDebaterStats with id = " +
        req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteMatchDebaterStat = (req, res) => {
  const { id } = req.params;
  const deletedmatchDebaterStats = await matchDebaterStats.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedmatchDebaterStats,
  });
};
