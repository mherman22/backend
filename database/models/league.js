'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LEAGUE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LEAGUE.init({
    League_id: DataTypes.UUID,
    League_name: DataTypes.STRING,
    League_description: DataTypes.STRING,
    League_logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LEAGUE',
  });
  return LEAGUE;
};