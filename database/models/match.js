'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MATCH extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MATCH.init({
    Match_id: DataTypes.UUID,
    Season_league_id: DataTypes.UUID,
    Home_season_league_team_id: DataTypes.UUID,
    Away_season_league_team_id: DataTypes.UUID,
    Match_day: DataTypes.DATE,
    Match_date: DataTypes.DATE,
    Match_time: DataTypes.TIME,
    Match_location: DataTypes.STRING,
    Score_home_team: DataTypes.STRING,
    score_away_team: DataTypes.STRING,
    is_played: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'MATCH',
  });
  return MATCH;
};