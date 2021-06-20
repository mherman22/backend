'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SEASON_LEAGUE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SEASON_LEAGUE.init({
    Season_league_id: DataTypes.UUID,
    Season_id: DataTypes.UUID,
    League_id: DataTypes.UUID,
    League_start: DataTypes.DATE,
    League_end: DataTypes.DATE,
    school_type_id: DataTypes.UUID,
    Is_closed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SEASON_LEAGUE',
  });
  return SEASON_LEAGUE;
};