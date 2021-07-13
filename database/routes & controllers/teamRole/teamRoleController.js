const teamRole = require("../../models/team_role");

exports.getAllTeamRole = async (req, res) => {
  try {
    const teamRoles = await teamRole.findAll();
    res.json({
      data: teamRoles,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneTeamRole = async (res, req) => {
  const { id } = req.params;

  const teamRoles = await teamRole.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: teamRoles,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createTeamRole = async (req, res) => {
  const {
    Team_role_id,
    Team_role_name,
    Team_role_description
  } = req.body;
  try {
    let newteamRole = await teamRole.create(
      {
        Team_role_id:Team_role_id,
        Team_role_name:Team_role_name,
        Team_role_description:Team_role_description
      },
      {
        fields: [
            "Team_role_id",
            "Team_role_name",
            "Team_role_description"
        ],
      }
    );
    if (newteamRole) {
      res.json({
        message: "created successfully!",
        data: newteamRole,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateTeamRole = async(req, res) => {
  try {
    let teamRoleId = req.params.id;
    let teamRole = await teamRole.findByPk(teamRoleId);

    if (!teamRole) {
      res.status(404).json({
        message:
          "Not Found for updating a teamRole with id = " + teamRoleId,
        teamRole: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Team_role_id:req.body.Team_role_id,
        Team_role_name:req.body.Team_role_name,
        Team_role_description:req.body.Team_role_description
      };
      let result = await teamRole.update(updatedObject, {
        returning: true,
        where: {
          id: teamRoleId,
        },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a teamRole with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message: "Updated successfully a teamRole with id = " + teamRoleId,
        teamRoles: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a teamRole with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteTeamRole = async(req, res) => {
  const { id } = req.params;
  const deletedteamRole = await teamRole.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedteamRole,
  });
};
