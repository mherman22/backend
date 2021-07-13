const statsParam = require("../models/stats_param");

exports.getAllStatsParam = async (req, res) => {
  try {
    const statsParams = await statsParam.findAll();
    res.json({
      data: statsParams,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneStatsParam = async (res, req) => {
  const { id } = req.params;

  const statsParams = await statsParam.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: statsParams,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createStatsParam = async (req, res) => {
  const { 
    Stats_param_id,
    Stats_param_name,
    Param_min_score,
    Param_max_score,
    Is_for_team
   } =
    req.body;
  try {
    let newstatsParam = await statsParam.create(
      {
        Stats_param_id:Stats_param_id,
        Stats_param_name:Stats_param_name,
        Param_min_score:Param_min_score,
        Param_max_score:Param_max_score,
        Is_for_team:Is_for_team
      },
      {
        fields: [
            "Stats_param_id",
            "Stats_param_name",
            "Param_min_score",
            "Param_max_score",
            "Is_for_team"
        ],
      }
    );
    if (newstatsParam) {
      res.json({
        message: "created successfully!",
        data: newstatsParam,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateStatsParam = async(req, res) => {
  try {
    let statsParamId = req.params.id;
    let statsParam = await statsParam.findByPk(statsParamId);

    if (!statsParam) {
      res.status(404).json({
        message: "Not Found for updating a statsParam with id = " + statsParamId,
        statsParam: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Stats_param_id:req.body.Stats_param_id,
        Stats_param_name:req.body.Stats_param_name,
        Param_min_score:req.body.Param_min_score,
        Param_max_score:req.body.Param_max_score,
        Is_for_team:req.body.Is_for_team
      };
      let result = await statsParam.update(updatedObject, {
        returning: true,
        where: { id: statsParamId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a statsParam with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message: "Updated successfully a statsParam with id = " + statsParamId,
        statsParams: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error -> Can not update a statsParam with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteStatsParam = async(req, res) => {
  const { id } = req.params;
  const deletedstatsParam = await statsParam.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedstatsParam,
  });
};
