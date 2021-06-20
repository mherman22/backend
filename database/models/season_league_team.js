'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SEASON_LEAGUE_TEAM extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SEASON_LEAGUE_TEAM.init({
    season_league_team_id: DataTypes.UUID,
    Season_league_id: DataTypes.UUID,
    Team_subscription_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'SEASON_LEAGUE_TEAM',
  });
  return SEASON_LEAGUE_TEAM;
};