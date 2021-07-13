const league = require("../models/league");

exports.getAllleagues = async (req, res) => {
  try {
    const leagues = await league.findAll();
    res.json({
      data: leagues,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneLeague = async (res, req) => {
  const { id } = req.params;

  const leagues = await league.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: leagues,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createNewLeague = async (req, res) => {
  const { League_id, League_name, League_description, League_logo } = req.body;
  try {
    let newleague = await league.create(
      {
        League_id: League_id,
        League_name: League_name,
        League_description: League_description,
        League_logo: League_logo,
      },
      {
        fields: [
            "League_id",
            "League_name",
            "League_description",
            "League_logo",
        ],
      }
    );
    if (newleague) {
      res.json({
        message: "New league created successfully!",
        data: newleague,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong while creating a new league",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateLeague = async (req, res) => {
  try {
    let leagueId = req.params.id;
    let league = await league.findByPk(leagueId);

    if (!league) {
      res.status(404).json({
        message: "Not Found for updating a league with id = " + leagueId,
        league: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        League_id: req.body.League_id,
        League_name: req.body.League_name,
        League_description: req.body.League_description,
        League_logo: req.body.League_logo,
      };
      let result = await league.update(updatedObject, {
        returning: true,
        where: { id: leagueId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a league with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message: "Update successfully a league with id = " + leagueId,
        leagues: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a league with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteLeague = async (req, res) => {
  const { id } = req.params;
  const deletedleague = await league.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "league removed successfully!",
    data: deletedleague,
  });
};
