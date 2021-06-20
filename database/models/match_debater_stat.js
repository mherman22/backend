'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MATCH_DEBATER_STAT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MATCH_DEBATER_STAT.init({
    Match_debater_stats_id: DataTypes.UUID,
    Match_line_up_id: DataTypes.UUID,
    Stats_param_id: DataTypes.UUID,
    debater_scores: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MATCH_DEBATER_STAT',
  });
  return MATCH_DEBATER_STAT;
};