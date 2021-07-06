const userRole = require("../../models/user_role");

exports.getAllUserRole = async (req, res) => {
  try {
    const userRoles = await userRole.findAll();
    res.json({
      data: userRoles,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneUserRole = async (res, req) => {
  const { id } = req.params;

  const userRoles = await userRole.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: userRoles,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createUserRoles = async (req, res) => {
  const { 
    User_role_id,
    User_role_name,
    User_role_description
   } =
    req.body;
  try {
    let newuserRole = await userRole.create(
      {
        User_role_id:User_role_id,
        User_role_name:User_role_name,
        User_role_description:User_role_description
      },
      {
        fields: [
            "User_role_id",
            "User_role_name",
            "User_role_description"
        ],
      }
    );
    if (newuserRole) {
      res.json({
        message: "created successfully!",
        data: newuserRole,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateUserRole = (req, res) => {
  try {
    let userRoleId = req.params.id;
    let userRole = await userRole.findByPk(userRoleId);

    if (!userRole) {
      res.status(404).json({
        message: "Not Found for updating a userRole with id = " + userRoleId,
        userRole: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        User_role_id:req.body.User_role_id,
        User_role_name:req.body.User_role_name,
        User_role_description:req.body.User_role_description
      };
      let result = await userRole.update(updatedObject, {
        returning: true,
        where: {
          id: userRoleId,
        },
      });
      if (!result) {
        res.status(500).json({
          message: "Error -> Can not update a userRole with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message: "Updated successfully a userRole with id = " + userRoleId,
        userRoles: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error -> Can not update a userRole with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteUserRole = (req, res) => {
  const { id } = req.params;
  const deleteduserRole = await userRole.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deleteduserRole,
  });
};
