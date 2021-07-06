const user = require("../../models/user");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await user.findAll();
    res.json({
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneUser = async (res, req) => {
  const { id } = req.params;

  const users = await user.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: users,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createUser = async (req, res) => {
  const {
    User_id,
    User_role_id,
    Username,
    Password,
    Mobile_tel,
    Email,
    User_photo,
  } = req.body;
  try {
    let newuser = await user.create(
      {
        User_id:User_id,
        User_role_id:User_role_id,
        Username:Username,
        Password:Password,
        Mobile_tel:Mobile_tel,
        Email:Email,
        User_photo:User_photo,
      },
      {
        fields: [
            "User_id",
            "User_role_id",
            "Username",
            "Password",
            "Mobile_tel",
            "Email",
            "User_photo",
        ],
      }
    );
    if (newuser) {
      res.json({
        message: "created successfully!",
        data: newuser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateUser = (req, res) => {
  try {
    let userId = req.params.id;
    let user = await user.findByPk(userId);

    if (!user) {
      res.status(404).json({
        message:
          "Not Found for updating a user with id = " + userId,
        user: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        User_id:req.body.User_id,
        User_role_id:req.body.User_role_id,
        Username:req.body.Username,
        Password:req.body.Password,
        Mobile_tel:req.body.Mobile_tel,
        Email:req.body.Email,
        User_photo:req.body.User_photo,
      };
      let result = await user.update(updatedObject, {
        returning: true,
        where: {
          id: userId,
        },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a user with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message: "Updated successfully a user with id = " + userId,
        users: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a user with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteUsers = (req, res) => {
  const { id } = req.params;
  const deleteduser = await user.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deleteduser,
  });
};
