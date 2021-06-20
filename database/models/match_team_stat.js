'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MATCH_TEAM_STAT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MATCH_TEAM_STAT.init({
    Match_team_stats_id: DataTypes.UUID,
    Match_id: DataTypes.UUID,
    Stats_param_id: DataTypes.UUID,
    Scores_home_team: DataTypes.STRING,
    Scores_away_team: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MATCH_TEAM_STAT',
  });
  return MATCH_TEAM_STAT;
};