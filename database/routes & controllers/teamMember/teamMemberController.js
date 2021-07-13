const teamMember = require("../../models/team_member");

exports.getAllTeamMember = async (req, res) => {
  try {
    const teamMembers = await teamMember.findAll();
    res.json({
      data: teamMembers,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneTeamMember = async (res, req) => {
  const { id } = req.params;

  const teamMembers = await teamMember.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: teamMembers,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createTeamMember = async (req, res) => {
  const {
    Team_member_id,
    team_member_name,
    Date_of_birth,
    ID_Number,
    Team_id,
    Team_role_id,
    photo,
    attach_member_ID,
    Is_approved,
  } = req.body;
  try {
    let newteamMember = await teamMember.create(
      {
        Team_member_id: Team_member_id,
        team_member_name: team_member_name,
        Date_of_birth: Date_of_birth,
        ID_Number: ID_Number,
        Team_id: Team_id,
        Team_role_id: Team_role_id,
        photo: photo,
        attach_member_ID: attach_member_ID,
        Is_approved: Is_approved,
      },
      {
        fields: [
          "Team_member_id",
          "team_member_name",
          "Date_of_birth",
          "ID_Number",
          "Team_id",
          "Team_role_id",
          "photo",
          "attach_member_ID",
          "Is_approved",
        ],
      }
    );
    if (newteamMember) {
      res.json({
        message: "created successfully!",
        data: newteamMember,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateTeamMember = async(req, res) => {
  try {
    let teamMemberId = req.params.id;
    let teamMember = await teamMember.findByPk(teamMemberId);

    if (!teamMember) {
      res.status(404).json({
        message:
          "Not Found for updating a teamMember with id = " + teamMemberId,
        teamMember: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Team_member_id: req.body.Team_member_id,
        team_member_name: req.body.team_member_name,
        Date_of_birth: req.body.Date_of_birth,
        ID_Number: req.body.ID_Number,
        Team_id: req.body.Team_id,
        Team_role_id: req.body.Team_role_id,
        photo: req.body.photo,
        attach_member_ID: req.body.attach_member_ID,
        Is_approved: req.body.Is_approved,
      };
      let result = await teamMember.update(updatedObject, {
        returning: true,
        where: {
          id: teamMemberId,
        },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a teamMember with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message: "Updated successfully a teamMember with id = " + teamMemberId,
        teamMembers: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a teamMember with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteTeamMember = async(req, res) => {
  const { id } = req.params;
  const deletedteamMember = await teamMember.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedteamMember,
  });
};
