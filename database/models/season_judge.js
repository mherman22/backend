'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SEASON_JUDGE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SEASON_JUDGE.init({
    Season_judge_id: DataTypes.UUID,
    Season_id: DataTypes.UUID,
    Judge_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'SEASON_JUDGE',
  });
  return SEASON_JUDGE;
};