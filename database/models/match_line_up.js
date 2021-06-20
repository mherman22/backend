'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MATCH_LINE_UP extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MATCH_LINE_UP.init({
    Match_line_up_id: DataTypes.UUID,
    Match_id: DataTypes.UUID,
    Season_team_member_id: DataTypes.UUID,
    is_main_debater: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'MATCH_LINE_UP',
  });
  return MATCH_LINE_UP;
};