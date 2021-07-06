const team = require("../../models/team");

exports.getAllTeams = async (req, res) => {
  try {
    const teams = await team.findAll();
    res.json({
      data: teams,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneTeam = async (res, req) => {
  const { id } = req.params;

  const teams = await team.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: teams,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createTeams = async (req, res) => {
  const { Team_id, School_id, Team_name, Team_description, isPicked } =
    req.body;
  try {
    let newteam = await team.create(
      {
        Team_id: Team_id,
        School_id: School_id,
        Team_name: Team_name,
        Team_description: Team_description,
        isPicked: isPicked,
      },
      {
        fields: [
          "Team_id",
          "School_id",
          "Team_name",
          "Team_description",
          "isPicked",
        ],
      }
    );
    if (newteam) {
      res.json({
        message: "created successfully!",
        data: newteam,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateTeam = (req, res) => {
  try {
    let teamId = req.params.id;
    let team = await team.findByPk(teamId);

    if (!team) {
      res.status(404).json({
        message: "Not Found for updating a team with id = " + teamId,
        team: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Team_role_id: req.body.Team_role_id,
        Team_role_name: req.body.Team_role_name,
        Team_role_description: req.body.Team_role_description,
      };
      let result = await team.update(updatedObject, {
        returning: true,
        where: {
          id: teamId,
        },
      });
      if (!result) {
        res.status(500).json({
          message: "Error -> Can not update a team with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message: "Updated successfully a team with id = " + teamId,
        teams: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error -> Can not update a team with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteTeam = (req, res) => {
  const { id } = req.params;
  const deletedteam = await team.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedteam,
  });
};
