'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class STATS_PARAM extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  STATS_PARAM.init({
    Stats_param_id: DataTypes.UUID,
    Stats_param_name: DataTypes.STRING,
    Param_min_score: DataTypes.STRING,
    Param_max_score: DataTypes.STRING,
    Is_for_team: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'STATS_PARAM',
  });
  return STATS_PARAM;
};