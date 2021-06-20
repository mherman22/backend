'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SEASON_TEAM_DEBATERS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SEASON_TEAM_DEBATERS.init({
    season_team_member_id: DataTypes.UUID,
    season_league_team_id: DataTypes.UUID,
    Team_member_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'SEASON_TEAM_DEBATERS',
  });
  return SEASON_TEAM_DEBATERS;
};