'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SEASON_LEAGUE_STANDING extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SEASON_LEAGUE_STANDING.init({
    Standings_id: DataTypes.UUID,
    Season_league_id: DataTypes.UUID,
    Season_league_team_id: DataTypes.UUID,
    Matches_played: DataTypes.STRING,
    Team_wins: DataTypes.STRING,
    Team_draws: DataTypes.STRING,
    Team_losses: DataTypes.STRING,
    Team_points_forward: DataTypes.STRING,
    Team_points_against: DataTypes.STRING,
    Team_points_difference: DataTypes.STRING,
    Team_points_obtained: DataTypes.STRING,
    Team_rank: DataTypes.STRING,
    Total_league_teams: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SEASON_LEAGUE_STANDING',
  });
  return SEASON_LEAGUE_STANDING;
};