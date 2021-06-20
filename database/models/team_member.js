'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TEAM_MEMBER extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TEAM_MEMBER.init({
    Team_member_id: DataTypes.UUID,
    team_member_name: DataTypes.STRING,
    Date_of_birth: DataTypes.DATE,
    ID_Number: DataTypes.STRING,
    Team_id: DataTypes.UUID,
    Team_role_id: DataTypes.UUID,
    photo: DataTypes.STRING,
    attach_member_ID: DataTypes.STRING,
    Is_approved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TEAM_MEMBER',
  });
  return TEAM_MEMBER;
};