const season = require("../models/season");

exports.getAllSeason = async (req, res) => {
  try {
    const seasons = await season.findAll();
    res.json({
      data: seasons,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneSeason = async (res, req) => {
  const { id } = req.params;

  const seasons = await season.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: seasons,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createSeason = async (req, res) => {
  const { Season_id, Season_name, Season_start, Season_end, isActive } =
    req.body;
  try {
    let newseason = await season.create(
      {
        Season_id: Season_id,
        Season_name: Season_name,
        Season_start: Season_start,
        Season_end: Season_end,
        isActive: isActive,
      },
      {
        fields: [
          "Season_id",
          "Season_name",
          "Season_start",
          "Season_end",
          "isActive",
        ],
      }
    );
    if (newseason) {
      res.json({
        message: "created successfully!",
        data: newseason,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateSeason = async(req, res) => {
  try {
    let seasonId = req.params.id;
    let season = await season.findByPk(seasonId);

    if (!season) {
      res.status(404).json({
        message: "Not Found for updating a season with id = " + seasonId,
        season: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Season_id: req.body.Season_id,
        Season_name: req.body.Season_name,
        Season_start: req.body.Season_start,
        Season_end: req.body.Season_end,
        isActive: req.body.isActive,
      };
      let result = await season.update(updatedObject, {
        returning: true,
        where: { id: seasonId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a season with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message: "Updated successfully a season with id = " + seasonId,
        seasons: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error -> Can not update a season with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteSeason = async(req, res) => {
  const { id } = req.params;
  const deletedseason = await season.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedseason,
  });
};
