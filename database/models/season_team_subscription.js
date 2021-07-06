"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SEASON_TEAM_SUBSCRIPTION extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SEASON_TEAM_SUBSCRIPTION.init(
    {
      Team_subscription_id: DataTypes.UUID,
      season_id: DataTypes.UUID,
      Team_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "SEASON_TEAM_SUBSCRIPTION",
    }
  );
  return SEASON_TEAM_SUBSCRIPTION;
};
