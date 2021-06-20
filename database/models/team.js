'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TEAM extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TEAM.init({
    Team_id: DataTypes.UUID,
    School_id: DataTypes.UUID,
    Team_name: DataTypes.STRING,
    Team_description: DataTypes.STRING,
    isPicked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TEAM',
  });
  return TEAM;
};