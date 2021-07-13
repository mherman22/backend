const judge = require("../models/judge");

exports.getAllJudges = async (req, res) => {
  try {
    const judges = await judge.findAll();
    res.json({
      data: judges,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneJudge = async (res, req) => {
  const { id } = req.params;

  const judges = await judge.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: judges,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createNewJudge = async (req, res) => {
  const { Judge_id, Judge_name, Judge_resume,Judge_contact,Judge_photo,is_active} =
    req.body;
  try {
    let newjudge = await judge.create(
      {
        Judge_id: Judge_id,
        Judge_name: Judge_name,
        Judge_resume: Judge_resume,
        Judge_contact: Judge_contact,
        Judge_photo: Judge_photo,
        is_active: is_active,
      },
      {
        fields: [
          "Judge_id",
          "Judge_name",
          "Judge_resume",
          "Judge_contact",
          "Judge_photo",
          "is_active",
        ],
      }
    );
    if (newjudge) {
      res.json({
        message: "New judge created successfully!",
        data: newjudge,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong while creating a new judge",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateJudge = async (req, res) => {
  try {
    let judgeId = req.params.id;
    let judge = await judge.findByPk(judgeId);

    if (!judge) {
      res.status(404).json({
        message: "Not Found for updating a judge with id = " + judgeId,
        judge: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Judge_id: req.body.Judge_id,
        Judge_name: req.body.Judge_name,
        Judge_resume: req.body.Judge_resume,
        Judge_contact: req.body.Judge_contact,
        Judge_photo: req.body.Judge_photo,
        is_active: req.body.is_active,
      };
      let result = await judge.update(updatedObject, {
        returning: true,
        where: { id: judgeId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a school type with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message: "Update successfully a school type with id = " + judgeId,
        judges: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a school type with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteJudge = async (req, res) => {
  const { id } = req.params;
  const deletedjudge = await judge.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "school type removed successfully!",
    data: deletedjudge,
  });
};
