const seasonTeamSubscription = require("../models/season_team_subscription");

exports.getAllSeasonTeamSubscription = async (req, res) => {
  try {
    const seasonTeamSubscriptions = await seasonTeamSubscription.findAll();
    res.json({
      data: seasonTeamSubscriptions,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneSeasonTeamSubscription = async (res, req) => {
  const { id } = req.params;

  const seasonTeamSubscriptions = await seasonTeamSubscription.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: seasonTeamSubscriptions,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createSeasonTeamSubscription = async (req, res) => {
  const { 
    Team_subscription_id,
    season_id,
    Team_id
   } =
    req.body;
  try {
    let newseasonTeamSubscription = await seasonTeamSubscription.create(
      {
        Team_subscription_id:Team_subscription_id,
        season_id:season_id,
        Team_id:Team_id
      },
      {
        fields: [
            "Team_subscription_id",
            "season_id",
            "Team_id"
        ],
      }
    );
    if (newseasonTeamSubscription) {
      res.json({
        message: "created successfully!",
        data: newseasonTeamSubscription,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateSeasonTeamSubscription = async(req, res) => {
  try {
    let seasonTeamSubscriptionId = req.params.id;
    let seasonTeamSubscription = await seasonTeamSubscription.findByPk(seasonTeamSubscriptionId);

    if (!seasonTeamSubscription) {
      res.status(404).json({
        message:
          "Not Found for updating a season team subscription with id = " +
          seasonTeamSubscriptionId,
        seasonTeamSubscription: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Team_subscription_id:req.body.Team_subscription_id,
        season_id:req.body.season_id,
        Team_id:req.body.Team_id
      };
      let result = await seasonTeamSubscription.update(updatedObject, {
        returning: true,
        where: { id: seasonTeamSubscriptionId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a season team subscription with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message:
          "Updated successfully a season team subscription with id = " + seasonTeamSubscriptionId,
        seasonTeamSubscriptions: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a season team subscription with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteSeasonTeamSubscription = async(req, res) => {
  const { id } = req.params;
  const deletedseasonTeamSubscription = await seasonTeamSubscription.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedseasonTeamSubscription,
  });
};
