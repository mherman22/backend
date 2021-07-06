const seasonLeague = require("../../models/season_league");

exports.getAllSeasonLeagues = async (req, res) => {
  try {
    const seasonLeagues = await seasonLeague.findAll();
    res.json({
      data: seasonLeagues,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneSeasonLeague = async (res, req) => {
  const { id } = req.params;

  const seasonLeagues = await seasonLeague.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: seasonLeagues,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createSeasonLeague = async (req, res) => {
  const { 
    Season_league_id,
    Season_id,
    League_id,
    League_start,
    League_end,
    school_type_id,
    Is_closed,
   } =
    req.body;
  try {
    let newseasonLeague = await seasonLeague.create(
      {
        Season_league_id:Season_league_id,
        Season_id:Season_id,
        League_id:League_id,
        League_start:League_start,
        League_end:League_end,
        school_type_id:school_type_id,
        Is_closed:Is_closed,
      },
      {
        fields: [
            "Season_league_id",
            "Season_id",
            "League_id",
            "League_start",
            "League_end",
            "school_type_id",
            "Is_closed",
        ],
      }
    );
    if (newseasonLeague) {
      res.json({
        message: "created successfully!",
        data: newseasonLeague,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateSeasonLeague = (req, res) => {
  try {
    let seasonLeagueId = req.params.id;
    let seasonLeague = await seasonLeague.findByPk(seasonLeagueId);

    if (!seasonLeague) {
      res.status(404).json({
        message:
          "Not Found for updating a season league with id = " +
          seasonLeagueId,
        seasonLeague: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Season_league_id:req.body.Season_league_id,
        Season_id:req.body.Season_id,
        League_id:req.body.League_id,
        League_start:req.body.League_start,
        League_end:req.body.League_end,
        school_type_id:req.body.school_type_id,
        Is_closed:req.body.Is_closed,
      };
      let result = await seasonLeague.update(updatedObject, {
        returning: true,
        where: { id: seasonLeagueId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a season league with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message:
          "Updated successfully a season league with id = " + seasonLeagueId,
        seasonLeagues: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a season league with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteSeasonLeague = (req, res) => {
  const { id } = req.params;
  const deletedseasonLeague = await seasonLeague.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedseasonLeague,
  });
};
