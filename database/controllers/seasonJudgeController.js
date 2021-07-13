const seasonJudge = require("../models/season_judge");

exports.getAllSeasonJudges = async (req, res) => {
  try {
    const seasonJudges = await seasonJudge.findAll();
    res.json({
      data: seasonJudges,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneSeasonJudge = async (res, req) => {
  const { id } = req.params;

  const seasonJudges = await seasonJudge.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: seasonJudges,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createSeasonJudge = async (req, res) => {
  const { Season_judge_id, Season_id, Judge_id } = req.body;
  try {
    let newSeasonJudge = await seasonJudge.create(
      {
        Season_judge_id: Season_judge_id,
        Season_id: Season_id,
        Judge_id: Judge_id,
      },
      {
        fields: ["Season_judge_id", "Season_id", "Judge_id"],
      }
    );
    if (newSeasonJudge) {
      res.json({
        message: "created successfully!",
        data: newSeasonJudge,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateSeasonJudge = async(req, res) => {
  try {
    let seasonJudgeId = req.params.id;
    let seasonJudge = await seasonJudge.findByPk(seasonJudgeId);

    if (!seasonJudge) {
      res.status(404).json({
        message:
          "Not Found for updating a season judge with id = " + seasonJudgeId,
        seasonJudge: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        School_type_id: req.body.School_type_id,
        School_type_name: req.body.School_type_name,
        School_type_description: req.body.School_type_description,
      };
      let result = await seasonJudge.update(updatedObject, {
        returning: true,
        where: { id: seasonJudgeId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a season judge with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message: "Update successfully a season judge with id = " + seasonJudgeId,
        seasonJudges: updatedObject,
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
exports.deleteSeasonJudge = async(req, res) => {
  const { id } = req.params;
  const deletedSeasonJudge = await seasonJudge.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedSeasonJudge,
  });
};
