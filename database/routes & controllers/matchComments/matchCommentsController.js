const matchcomment = require("../../models/match_comments");

exports.getAllMatchComments = async (req, res) => {
  try {
    const matchcomments = await matchcomment.findAll();
    res.json({
      data: matchcomments,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneMatchComment = async (res, req) => {
  const { id } = req.params;

  const matchcomments = await matchcomment.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: matchcomments,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createMatchComment = async (req, res) => {
  const { Match_comments_id, Match_id, Comment_message, User_id } = req.body;
  try {
    let newmatchcomment = await matchcomment.create(
      {
        Match_comments_id:Match_comments_id,
        Match_id:Match_id,
        Comment_message:Comment_message,
        User_id:User_id,
      },
      {
        fields: [
            "Match_comments_id",
            "Match_id",
            "Comment_message",
            "User_id",
        ],
      }
    );
    if (newmatchcomment) {
      res.json({
        message: "New match comment created successfully!",
        data: newmatchcomment,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong while creating a new match comment",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateMatchComment = (req, res) => {
  try {
    let matchcommentsId = req.params.id;
    let matchcomments = await matchcomment.findByPk(matchcommentsId);

    if (!matchcomments) {
      res.status(404).json({
        message:
          "Not Found for updating a matchcomments with id = " + matchcommentsId,
        matchcomments: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Match_comments_id: req.body.Match_comments_id,
        Match_id:req.body.Match_id,
        Comment_message:req.body.Comment_message,
        User_id:req.body.User_id,
      };
      let result = await matchcomments.update(updatedObject, {
        returning: true,
        where: { id: matchcommentsId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a matchcomments with id = " +
            req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message:
          "Update successfully a matchcomments with id = " + matchcommentsId,
        matchcomments: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a matchcomments with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteMatchComment = (req, res) => {
  const { id } = req.params;
  const deletedmatchcomments = await matchcomments.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "matchcomments removed successfully!",
    data: deletedmatchcomments,
  });
};
