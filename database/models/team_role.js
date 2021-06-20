'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TEAM_ROLE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TEAM_ROLE.init({
    Team_role_id: DataTypes.UUID,
    Team_role_name: DataTypes.STRING,
    Team_role_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TEAM_ROLE',
  });
  return TEAM_ROLE;
};